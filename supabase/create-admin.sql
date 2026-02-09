-- Create Admin User for Quantroy
-- Run this in Supabase SQL Editor: https://supabase.com/dashboard/project/nzzztkqwnfqvcapkfbph/sql/new

-- Step 1: Create the admin user in auth.users
-- Note: This creates a user with email confirmation already done
INSERT INTO auth.users (
  id,
  instance_id,
  email,
  encrypted_password,
  email_confirmed_at,
  created_at,
  updated_at,
  raw_app_meta_data,
  raw_user_meta_data,
  is_super_admin,
  role,
  aud,
  confirmation_token
) VALUES (
  gen_random_uuid(),
  '00000000-0000-0000-0000-000000000000',
  'admin@quantroy.com',
  crypt('QuantroyAdmin2026!', gen_salt('bf')),
  now(),
  now(),
  now(),
  '{"provider": "email", "providers": ["email"]}',
  '{"first_name": "Admin", "last_name": "Quantroy"}',
  false,
  'authenticated',
  'authenticated',
  ''
) ON CONFLICT (email) DO NOTHING
RETURNING id;

-- Step 2: Get the user ID and update profile to admin role
-- First, find the user
SELECT id, email FROM auth.users WHERE email = 'admin@quantroy.com';

-- Step 3: Update the profile role to 'admin'
UPDATE profiles 
SET role = 'admin', 
    first_name = 'Admin', 
    last_name = 'Quantroy',
    kyc_status = 'approved'
WHERE email = 'admin@quantroy.com';

-- Verify the admin was created
SELECT id, email, role, kyc_status FROM profiles WHERE email = 'admin@quantroy.com';
