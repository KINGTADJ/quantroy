-- Quantroy Investment Platform Database Schema
-- Run this in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Profiles table (extends Supabase auth.users)
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  first_name TEXT,
  last_name TEXT,
  phone TEXT,
  kyc_status TEXT DEFAULT 'not_started' CHECK (kyc_status IN ('not_started', 'pending', 'approved', 'rejected')),
  role TEXT DEFAULT 'user' CHECK (role IN ('user', 'admin')),
  referral_code TEXT UNIQUE NOT NULL,
  referred_by TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Wallets table (payout addresses)
CREATE TABLE wallets (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  btc_address TEXT,
  eth_address TEXT,
  usdt_address TEXT,
  usdc_address TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id)
);

-- Investments table
CREATE TABLE investments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  strategy TEXT NOT NULL CHECK (strategy IN ('starter', 'pro', 'elite', 'vip')),
  amount DECIMAL(20, 2) NOT NULL,
  currency TEXT NOT NULL CHECK (currency IN ('btc', 'eth', 'usdt', 'usdc')),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'active', 'completed', 'cancelled')),
  tx_hash TEXT,
  current_value DECIMAL(20, 2),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Payouts table
CREATE TABLE payouts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  investment_id UUID REFERENCES investments(id),
  amount DECIMAL(20, 2) NOT NULL,
  currency TEXT NOT NULL CHECK (currency IN ('btc', 'eth', 'usdt', 'usdc')),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'completed', 'failed')),
  tx_hash TEXT,
  wallet_address TEXT NOT NULL,
  scheduled_at TIMESTAMPTZ NOT NULL,
  processed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Referrals table
CREATE TABLE referrals (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  referrer_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  referred_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  level INTEGER NOT NULL CHECK (level BETWEEN 1 AND 3),
  commission_rate DECIMAL(5, 2) NOT NULL,
  total_earned DECIMAL(20, 2) DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(referrer_id, referred_id)
);

-- KYC Documents table
CREATE TABLE kyc_documents (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  document_type TEXT NOT NULL CHECK (document_type IN ('id_front', 'id_back', 'proof_of_address', 'selfie')),
  file_url TEXT NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  reviewed_by UUID REFERENCES profiles(id),
  reviewed_at TIMESTAMPTZ,
  rejection_reason TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Function to generate referral code
CREATE OR REPLACE FUNCTION generate_referral_code()
RETURNS TEXT AS $$
DECLARE
  chars TEXT := 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  result TEXT := '';
  i INTEGER;
BEGIN
  FOR i IN 1..8 LOOP
    result := result || substr(chars, floor(random() * length(chars) + 1)::integer, 1);
  END LOOP;
  RETURN result;
END;
$$ LANGUAGE plpgsql;

-- Function to create profile on user signup
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO profiles (id, email, referral_code, referred_by)
  VALUES (
    NEW.id,
    NEW.email,
    generate_referral_code(),
    NEW.raw_user_meta_data->>'referred_by'
  );
  
  -- Create empty wallet record
  INSERT INTO wallets (user_id)
  VALUES (NEW.id);
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile on signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- Function to handle referral chain
CREATE OR REPLACE FUNCTION handle_referral()
RETURNS TRIGGER AS $$
DECLARE
  referrer_profile RECORD;
  level1_referrer UUID;
  level2_referrer UUID;
  level3_referrer UUID;
BEGIN
  -- Skip if no referral code
  IF NEW.referred_by IS NULL THEN
    RETURN NEW;
  END IF;
  
  -- Find level 1 referrer
  SELECT id INTO level1_referrer
  FROM profiles
  WHERE referral_code = NEW.referred_by;
  
  IF level1_referrer IS NOT NULL THEN
    -- Create level 1 referral (6%)
    INSERT INTO referrals (referrer_id, referred_id, level, commission_rate)
    VALUES (level1_referrer, NEW.id, 1, 6.00);
    
    -- Find level 2 referrer
    SELECT referred_by INTO level2_referrer
    FROM profiles
    WHERE id = level1_referrer;
    
    IF level2_referrer IS NOT NULL THEN
      SELECT id INTO level2_referrer
      FROM profiles
      WHERE referral_code = level2_referrer;
      
      IF level2_referrer IS NOT NULL THEN
        -- Create level 2 referral (3%)
        INSERT INTO referrals (referrer_id, referred_id, level, commission_rate)
        VALUES (level2_referrer, NEW.id, 2, 3.00);
        
        -- Find level 3 referrer
        SELECT referred_by INTO level3_referrer
        FROM profiles
        WHERE id = level2_referrer;
        
        IF level3_referrer IS NOT NULL THEN
          SELECT id INTO level3_referrer
          FROM profiles
          WHERE referral_code = level3_referrer;
          
          IF level3_referrer IS NOT NULL THEN
            -- Create level 3 referral (1%)
            INSERT INTO referrals (referrer_id, referred_id, level, commission_rate)
            VALUES (level3_referrer, NEW.id, 3, 1.00);
          END IF;
        END IF;
      END IF;
    END IF;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for referral chain
CREATE TRIGGER on_profile_referral
  AFTER INSERT ON profiles
  FOR EACH ROW EXECUTE FUNCTION handle_referral();

-- Row Level Security Policies
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE wallets ENABLE ROW LEVEL SECURITY;
ALTER TABLE investments ENABLE ROW LEVEL SECURITY;
ALTER TABLE payouts ENABLE ROW LEVEL SECURITY;
ALTER TABLE referrals ENABLE ROW LEVEL SECURITY;
ALTER TABLE kyc_documents ENABLE ROW LEVEL SECURITY;

-- Profiles: Users can read/update their own profile, admins can read all
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Admins can view all profiles" ON profiles
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- Wallets: Users can read/update their own wallet
CREATE POLICY "Users can view own wallet" ON wallets
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update own wallet" ON wallets
  FOR UPDATE USING (auth.uid() = user_id);

-- Investments: Users can view their own investments
CREATE POLICY "Users can view own investments" ON investments
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create investments" ON investments
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Payouts: Users can view their own payouts
CREATE POLICY "Users can view own payouts" ON payouts
  FOR SELECT USING (auth.uid() = user_id);

-- Referrals: Users can view their own referrals
CREATE POLICY "Users can view own referrals" ON referrals
  FOR SELECT USING (auth.uid() = referrer_id);

-- KYC: Users can view/upload their own documents
CREATE POLICY "Users can view own KYC docs" ON kyc_documents
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can upload KYC docs" ON kyc_documents
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Admin policies for KYC management
CREATE POLICY "Admins can view all KYC docs" ON kyc_documents
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "Admins can update KYC docs" ON kyc_documents
  FOR UPDATE USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- Create indexes for performance
CREATE INDEX idx_investments_user ON investments(user_id);
CREATE INDEX idx_investments_status ON investments(status);
CREATE INDEX idx_payouts_user ON payouts(user_id);
CREATE INDEX idx_payouts_status ON payouts(status);
CREATE INDEX idx_referrals_referrer ON referrals(referrer_id);
CREATE INDEX idx_kyc_user ON kyc_documents(user_id);
CREATE INDEX idx_kyc_status ON kyc_documents(status);
