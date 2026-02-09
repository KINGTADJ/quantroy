-- QUANTROY: Fix Database & Create Admin User
-- Run this in Supabase SQL Editor: https://supabase.com/dashboard/project/nzzztkqwnfqvcapkfbph/sql/new

-- Step 1: Check if trigger exists and recreate it safely
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

-- Step 2: Recreate the function with better error handling
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  -- Create profile with generated referral code
  INSERT INTO profiles (id, email, referral_code, referred_by)
  VALUES (
    NEW.id,
    NEW.email,
    upper(substring(md5(random()::text) from 1 for 8)),
    COALESCE(NEW.raw_user_meta_data->>'referred_by', NULL)
  )
  ON CONFLICT (id) DO NOTHING;
  
  -- Create empty wallet record
  INSERT INTO wallets (user_id)
  VALUES (NEW.id)
  ON CONFLICT (user_id) DO NOTHING;
  
  RETURN NEW;
EXCEPTION
  WHEN OTHERS THEN
    RAISE LOG 'Error in handle_new_user: %', SQLERRM;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Step 3: Recreate trigger
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- Step 4: Check existing users in auth.users that might not have profiles
SELECT au.id, au.email, p.id as profile_id
FROM auth.users au
LEFT JOIN profiles p ON au.id = p.id;

-- Step 5: Create profiles for any users missing them
INSERT INTO profiles (id, email, referral_code)
SELECT au.id, au.email, upper(substring(md5(random()::text) from 1 for 8))
FROM auth.users au
LEFT JOIN profiles p ON au.id = p.id
WHERE p.id IS NULL
ON CONFLICT (id) DO NOTHING;

-- DONE! Now the admin can sign up via the website and we'll promote them to admin.
-- After signing up as admin@quantroy.com, run this:

-- UPDATE profiles 
-- SET role = 'admin', kyc_status = 'approved', first_name = 'Admin', last_name = 'Quantroy'
-- WHERE email = 'admin@quantroy.com';
