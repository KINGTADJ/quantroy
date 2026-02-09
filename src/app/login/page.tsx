'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Mail, Lock, ArrowRight, AlertCircle } from 'lucide-react';
import { useAuthStore } from '@/store/auth';
import { motion } from 'framer-motion';
import { Float } from '@/components/ScrollAnimations';

export default function LoginPage() {
  const router = useRouter();
  const { signIn, signInWithGoogle, isLoading, user } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  }, [user, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    const { error } = await signIn(formData.email, formData.password);
    
    if (error) {
      setError(error.message);
    } else {
      router.push('/dashboard');
    }
  };

  const handleGoogleSignIn = async () => {
    setError(null);
    const { error } = await signInWithGoogle();
    if (error) {
      setError(error.message);
    }
  };

  return (
    <main className="min-h-screen flex bg-[#1a2f25] overflow-hidden">
      {/* Left side - Form */}
      <motion.div 
        className="flex-1 flex items-center justify-center p-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-full max-w-md">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/" className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#c4f542] flex items-center justify-center">
                <span className="text-[#1a2f25] font-bold text-2xl">Q</span>
              </div>
              <span className="text-2xl font-bold text-white">Quantroy</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-3xl font-bold text-white mb-2 font-[family-name:var(--font-playfair)]">Welcome back</h1>
            <p className="text-white/60 mb-8">Sign in to access your investment dashboard</p>
          </motion.div>

          {error && (
            <motion.div 
              className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <AlertCircle className="text-red-400" size={20} />
              <p className="text-red-400 text-sm">{error}</p>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label className="block text-sm text-white/80 mb-2 font-medium">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
                <input
                  type="email"
                  className="input-dark pl-12"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </motion.div>

            {/* Password */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <label className="block text-sm text-white/80 mb-2 font-medium">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="input-dark pl-12 pr-12"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </motion.div>

            {/* Remember & Forgot */}
            <motion.div 
              className="flex items-center justify-between"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <label className="flex items-center">
                <input type="checkbox" className="w-4 h-4 rounded border-white/20 bg-transparent text-[#c4f542] focus:ring-[#c4f542]" />
                <span className="ml-2 text-sm text-white/60">Remember me</span>
              </label>
              <Link href="/forgot-password" className="text-sm text-[#c4f542] hover:underline">
                Forgot password?
              </Link>
            </motion.div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={isLoading}
              className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-[#1a2f25] border-t-transparent rounded-full animate-spin" />
              ) : (
                <>Sign In <ArrowRight size={20} /></>
              )}
            </motion.button>
          </form>

          {/* Divider */}
          <motion.div 
            className="flex items-center my-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex-1 border-t border-white/10"></div>
            <span className="px-4 text-sm text-white/40">or continue with</span>
            <div className="flex-1 border-t border-white/10"></div>
          </motion.div>

          {/* Google Sign In */}
          <motion.button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white hover:bg-gray-100 text-[#1a2f25] rounded-full font-semibold transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </motion.button>

          {/* Register link */}
          <motion.p 
            className="text-center text-white/60 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Don't have an account?{' '}
            <Link href="/register" className="text-[#c4f542] hover:underline font-medium">
              Create one
            </Link>
          </motion.p>
        </div>
      </motion.div>

      {/* Right side - Visual with 3D Assets */}
      <motion.div 
        className="hidden lg:flex flex-1 items-center justify-center bg-gradient-to-br from-[#234d3a] to-[#1a2f25] p-12 relative overflow-hidden"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {/* 3D Asset - Top Left */}
        <Float duration={4} y={15}>
          <div className="absolute top-8 left-8 w-48 h-48">
            <Image src="/images/3d-transparent/secure-vault.png" alt="" fill className="object-contain drop-shadow-2xl" />
          </div>
        </Float>
        {/* 3D Asset - Bottom Right */}
        <Float duration={3.5} y={12}>
          <div className="absolute bottom-8 right-8 w-48 h-48">
            <Image src="/images/3d-transparent/crypto-coins.png" alt="" fill className="object-contain drop-shadow-2xl" />
          </div>
        </Float>
        
        <div className="max-w-lg text-center relative z-10">
          <motion.div 
            className="w-28 h-28 rounded-2xl bg-[#c4f542] flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-[#c4f542]/30"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", delay: 0.5 }}
          >
            <span className="text-[#1a2f25] font-bold text-5xl">Q</span>
          </motion.div>
          <motion.h2 
            className="text-3xl font-bold text-white mb-4 font-[family-name:var(--font-playfair)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Start Growing Your Wealth
          </motion.h2>
          <motion.p 
            className="text-white/60 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            Access AI-powered crypto investment strategies with transparent tracking and monthly returns. 
            Join thousands of investors building their financial future.
          </motion.p>
          <motion.div 
            className="mt-12 grid grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            {[
              { value: '$50M+', label: 'Assets Managed' },
              { value: '10K+', label: 'Investors' },
              { value: '24/7', label: 'Support' },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                className="bg-white/5 border border-white/10 rounded-xl p-4"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-[#c4f542] font-bold text-2xl">{stat.value}</div>
                <div className="text-white/40 text-xs mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}
