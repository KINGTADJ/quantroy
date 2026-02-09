'use client';

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  FadeUp, FadeIn, ScaleIn, StaggerContainer, StaggerItem, 
  Float, SectionBlend, BlurIn 
} from '@/components/ScrollAnimations';
import { motion } from 'framer-motion';
import { 
  TrendingUp, Shield, Wallet, Bot, Users, Gift,
  ChevronRight, Star, CheckCircle, Lock, Clock,
  BarChart3, Zap, Award, Globe, Quote
} from 'lucide-react';

const stats = [
  { value: '$500-$50M', label: 'Investment Range' },
  { value: 'Monthly', label: 'Payout Frequency' },
  { value: '4 Assets', label: 'Supported Cryptos' },
  { value: 'AI-Powered', label: 'Gemini Integration' },
];

const features = [
  { icon: TrendingUp, title: 'Professional Management', desc: 'Expert quantitative analysts with proven track records', badge: '10+ Years' },
  { icon: Wallet, title: 'Monthly Payouts', desc: 'Regular returns directly to your crypto wallet', badge: 'Monthly' },
  { icon: Shield, title: 'Bank-Grade Security', desc: 'Multi-signature wallets and cold storage protection', badge: '100% Secure' },
  { icon: Bot, title: 'AI-Powered Guidance', desc: 'Gemini AI provides 24/7 personalized recommendations', badge: '24/7 AI' },
  { icon: BarChart3, title: 'Transparent Tracking', desc: 'Real-time portfolio performance with blockchain verification', badge: 'Real-time' },
  { icon: Gift, title: 'Affiliate Rewards', desc: 'Earn up to 6% commission with our referral system', badge: 'Up to 6%' },
];

const packages = [
  {
    name: 'Starter',
    subtitle: 'First-time crypto investors',
    minInvestment: '$500',
    monthlyTarget: '~$830',
    sixMonthTarget: '$5,000',
    features: ['Monthly payouts', 'AI guidance', '24/7 support'],
    popular: false,
  },
  {
    name: 'Pro',
    subtitle: 'Serious investors',
    minInvestment: '$5,000',
    monthlyTarget: '~$8,300',
    sixMonthTarget: '$50,000',
    features: ['Priority support', 'Advanced analytics', 'Dedicated advisor'],
    popular: true,
  },
  {
    name: 'Elite',
    subtitle: 'High-net-worth individuals',
    minInvestment: '$50,000',
    monthlyTarget: '~$83,000',
    sixMonthTarget: '$500,000',
    features: ['VIP support', 'Custom strategies', 'Direct access'],
    popular: false,
  },
  {
    name: 'VIP',
    subtitle: 'Institutional investors',
    minInvestment: '$500,000+',
    monthlyTarget: '~$830,000',
    sixMonthTarget: '$5,000,000+',
    features: ['White-glove service', 'Bespoke solutions', 'Risk management'],
    popular: false,
  },
];

const steps = [
  {
    number: '1',
    title: 'Account Creation',
    desc: 'Quick and secure account setup with enterprise-grade protection',
    items: ['Email verification required', '2FA setup (email + authenticator)', 'Strong password requirements'],
  },
  {
    number: '2',
    title: 'Identity Verification',
    desc: 'Fast KYC process with automated compliance review',
    items: ['Government-issued ID upload', 'Proof of address document', 'Compliance review (24-48 hours)'],
  },
  {
    number: '3',
    title: 'Fund & Invest',
    desc: 'Choose your strategy and start earning monthly returns',
    items: ['Select investment strategy', 'Choose funding cryptocurrency', 'Start earning monthly payouts'],
  },
];

const testimonials = [
  {
    name: 'James Okoro',
    role: 'Business Owner',
    image: '/images/testimonial-1.png',
    quote: 'Quantroy transformed my approach to crypto investing. The monthly returns have been consistent and the platform is incredibly easy to use.',
  },
  {
    name: 'Sarah Chen',
    role: 'Tech Executive',
    image: '/images/testimonial-2.png',
    quote: 'As someone skeptical about crypto, Quantroy\'s professional management and transparent tracking gave me the confidence to invest.',
  },
  {
    name: 'Michael Adebayo',
    role: 'Entrepreneur',
    image: '/images/testimonial-3.png',
    quote: 'The AI-powered guidance helped me make smarter investment decisions. I\'ve seen my portfolio grow steadily month after month.',
  },
];

const team = [
  { name: 'David Chen', role: 'CEO & Co-Founder', image: '/images/team-ceo.png' },
  { name: 'Sarah Williams', role: 'Chief Investment Officer', image: '/images/team-cio.png' },
  { name: 'Michael Torres', role: 'Chief Technology Officer', image: '/images/team-cto.png' },
  { name: 'Emily Zhang', role: 'Head of Compliance', image: '/images/team-compliance.png' },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 relative overflow-hidden hero-bg">
        {/* Animated orbs - smaller on mobile */}
        <div className="hero-orb hero-orb-1 opacity-50 md:opacity-100" />
        <div className="hero-orb hero-orb-2 opacity-50 md:opacity-100" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Clean 2-Column Hero */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Text */}
            <div className="text-center lg:text-left">
              <FadeIn direction="up" delay={0.1}>
                <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-emerald-900/30 border border-emerald-700/30 text-emerald-400 text-xs sm:text-sm mb-4 sm:mb-6">
                  🚀 Professional Crypto Investment Platform
                </div>
              </FadeIn>
              <BlurIn delay={0.2}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                  Invest in Professional<br />
                  <span className="text-emerald-400">Crypto Strategies</span>
                </h1>
              </BlurIn>
              <FadeUp delay={0.3}>
                <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
                  AI-powered crypto strategies with transparent tracking and monthly returns.
                </p>
              </FadeUp>
              <FadeUp delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                  <Link href="/register" className="btn-primary flex items-center justify-center gap-2">
                    Get Started <ChevronRight size={20} />
                  </Link>
                  <Link href="/strategies" className="btn-secondary flex items-center justify-center gap-2">
                    View Strategies
                  </Link>
                </div>
              </FadeUp>
            </div>
            
            {/* Right - Image - NOW VISIBLE ON MOBILE TOO */}
            <FadeIn direction="right" delay={0.3} className="relative">
              <div className="relative aspect-square max-w-xs sm:max-w-md lg:max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-emerald-900/20 rounded-2xl sm:rounded-3xl" />
                <Image
                  src="/images/hero-family.png"
                  alt="Happy family investing"
                  fill
                  className="object-cover rounded-2xl sm:rounded-3xl"
                  priority
                />
                {/* Floating card - smaller on mobile */}
                <motion.div 
                  className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-[#0a1f1a]/90 backdrop-blur-xl border border-emerald-800/50 rounded-lg sm:rounded-xl p-2 sm:p-4 shadow-xl"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm sm:text-base">+23.5%</p>
                      <p className="text-gray-400 text-xs sm:text-sm">This Month</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </FadeIn>
          </div>
          
          {/* Stats */}
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto lg:mx-0 mt-8 sm:mt-12">
            {stats.map((stat, i) => (
              <StaggerItem key={i}>
                <div className="card p-3 sm:p-4">
                  <div className="text-emerald-400 font-bold text-sm sm:text-lg">{stat.value}</div>
                  <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Section Blend - smaller on mobile */}
      <SectionBlend fromColor="rgb(5, 25, 20)" toColor="rgb(3, 18, 14)" height={40} />

      {/* 3D Assets Showcase - NOW VISIBLE ON MOBILE */}
      <section className="py-6 sm:py-12 lg:py-16 px-4 relative" style={{ background: 'rgb(3, 18, 14)' }}>
        <div className="max-w-7xl mx-auto">
          {/* On mobile: 2x2 grid, on larger: flex row */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center items-center gap-4 sm:gap-8 lg:gap-16">
            <Float duration={3} y={6}>
              <ScaleIn delay={0}>
                <div className="relative w-28 h-28 sm:w-40 sm:h-40 lg:w-56 lg:h-56 mx-auto">
                  <Image src="/images/3d-transparent/premium-card.png" alt="" fill className="object-contain drop-shadow-2xl" />
                </div>
              </ScaleIn>
            </Float>
            <Float duration={3.5} y={8}>
              <ScaleIn delay={0.1}>
                <div className="relative w-28 h-28 sm:w-40 sm:h-40 lg:w-56 lg:h-56 mx-auto">
                  <Image src="/images/3d-transparent/crypto-coins.png" alt="" fill className="object-contain drop-shadow-2xl" />
                </div>
              </ScaleIn>
            </Float>
            <Float duration={4} y={6}>
              <ScaleIn delay={0.2}>
                <div className="relative w-28 h-28 sm:w-40 sm:h-40 lg:w-56 lg:h-56 mx-auto">
                  <Image src="/images/3d-transparent/gold-bars.png" alt="" fill className="object-contain drop-shadow-2xl" />
                </div>
              </ScaleIn>
            </Float>
            <Float duration={3.2} y={8}>
              <ScaleIn delay={0.3}>
                <div className="relative w-28 h-28 sm:w-40 sm:h-40 lg:w-56 lg:h-56 mx-auto">
                  <Image src="/images/3d-transparent/secure-vault.png" alt="" fill className="object-contain drop-shadow-2xl" />
                </div>
              </ScaleIn>
            </Float>
          </div>
        </div>
      </section>

      {/* Section Blend - smaller on mobile */}
      <SectionBlend fromColor="rgb(3, 18, 14)" toColor="rgb(5, 25, 20)" height={50} />

      {/* Trust Logos */}
      <section className="py-8 sm:py-12 border-y border-emerald-900/30">
        <FadeUp>
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h3 className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-8">Trusted by Leading Organizations</h3>
            <StaggerContainer staggerDelay={0.05} className="flex flex-wrap justify-center items-center gap-4 sm:gap-8">
              {['Coinbase', 'Binance', 'Kraken', 'Gemini', 'KuCoin', 'OKX'].map((name) => (
                <StaggerItem key={name}>
                  <div className="text-gray-400 font-semibold text-sm sm:text-base opacity-60 hover:opacity-100 transition-opacity">{name}</div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </FadeUp>
      </section>

      {/* Section Blend */}
      <SectionBlend fromColor="rgb(5, 25, 20)" toColor="rgb(8, 32, 26)" height={60} />

      {/* Features Section */}
      <section className="py-12 sm:py-20 px-4 section-dots-bg relative overflow-hidden" style={{ background: 'rgb(8, 32, 26)' }}>
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-900/30 text-emerald-400 text-xs sm:text-sm mb-3 sm:mb-4">
              <Star size={14} className="mr-2" /> Market Leader
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">Why Choose Quantroy?</h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-4">
              Experience the future of investing with our cutting-edge technology and professional management.
            </p>
          </FadeUp>
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature, i) => (
              <StaggerItem key={i}>
                <div className="card p-4 sm:p-6 hover:border-emerald-700/50 transition group h-full">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl gradient-primary flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition">
                    <feature.icon size={20} className="text-white sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm mb-3 sm:mb-4">{feature.desc}</p>
                  <span className="inline-block px-3 py-1 rounded-full bg-emerald-900/30 text-emerald-400 text-xs sm:text-sm">
                    {feature.badge}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Section Blend */}
      <SectionBlend fromColor="rgb(8, 32, 26)" toColor="rgb(5, 25, 20)" height={60} />

      {/* Testimonials Section */}
      <section className="py-12 sm:py-20 px-4 section-grid-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-900/30 text-emerald-400 text-xs sm:text-sm mb-3 sm:mb-4">
              <Users size={14} className="mr-2" /> Success Stories
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">What Our Investors Say</h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-4">
              Join thousands of satisfied investors who have transformed their financial future with Quantroy.
            </p>
          </FadeUp>
          <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((testimonial, i) => (
              <StaggerItem key={i}>
                <div className="card p-4 sm:p-6 relative h-full">
                  <Quote size={24} className="text-emerald-900/50 absolute top-3 right-3 sm:top-4 sm:right-4 sm:w-8 sm:h-8" />
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-emerald-500/30 flex-shrink-0">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-emerald-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Section Blend */}
      <SectionBlend fromColor="rgb(5, 25, 20)" toColor="rgb(10, 38, 30)" height={60} />

      {/* Investment Packages */}
      <section className="py-12 sm:py-20 px-4 mesh-bg relative overflow-hidden" style={{ background: 'rgb(10, 38, 30)' }}>
        <div className="max-w-7xl mx-auto">
          {/* Section header with 3D assets as inline elements - HUGE */}
          <div className="flex items-center justify-center gap-8 lg:gap-12 mb-8 sm:mb-12">
            {/* Left 3D Asset - Gold Bars - HUGE */}
            <Float duration={4} y={12} className="hidden xl:block">
              <FadeIn direction="left">
                <div className="relative w-72 h-72 flex-shrink-0">
                  <Image src="/images/3d-transparent/gold-bars.png" alt="" fill className="object-contain drop-shadow-2xl" />
                </div>
              </FadeIn>
            </Float>
            
            {/* Center - Title */}
            <FadeUp className="text-center px-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-900/30 text-emerald-400 text-xs sm:text-sm mb-3 sm:mb-4">
                <Award size={14} className="mr-2" /> Investment Plans
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">Investment Packages</h2>
              <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
                Choose from our professionally managed investment strategies designed for different risk appetites and capital levels.
              </p>
            </FadeUp>
            
            {/* Right 3D Asset - Money Bundle - HUGE */}
            <Float duration={3.5} y={15} className="hidden xl:block">
              <FadeIn direction="right">
                <div className="relative w-64 h-64 flex-shrink-0">
                  <Image src="/images/3d-transparent/money-bundle.png" alt="" fill className="object-contain drop-shadow-2xl" />
                </div>
              </FadeIn>
            </Float>
          </div>
          {/* Horizontal scroll on mobile for packages */}
          <div className="sm:hidden overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory">
            <div className="flex gap-4" style={{ width: 'max-content' }}>
              {packages.map((pkg, i) => (
                <div key={i} className={`card p-4 relative flex-shrink-0 snap-center ${pkg.popular ? 'border-emerald-500 glow' : ''}`} style={{ width: '280px' }}>
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-semibold">
                      Most Popular
                    </div>
                  )}
                  <div className="mb-3">
                    <h3 className="text-lg font-bold text-white">{pkg.name}</h3>
                    <p className="text-gray-400 text-xs">{pkg.subtitle}</p>
                  </div>
                  <div className="mb-4 text-xs">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-400">Minimum</span>
                      <span className="text-white font-semibold">{pkg.minInvestment}</span>
                    </div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-400">Monthly Target*</span>
                      <span className="text-emerald-400 font-semibold">{pkg.monthlyTarget}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">6-Month Target*</span>
                      <span className="text-emerald-400 font-semibold">{pkg.sixMonthTarget}</span>
                    </div>
                  </div>
                  <ul className="space-y-1 mb-4">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="flex items-center text-xs text-gray-300">
                        <CheckCircle size={12} className="text-emerald-400 mr-1.5 flex-shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/register" className={`block text-center py-2.5 rounded-lg font-semibold text-sm transition ${
                    pkg.popular 
                      ? 'gradient-primary text-white hover:opacity-90' 
                      : 'border border-emerald-700 text-emerald-400 hover:bg-emerald-900/30'
                  }`}>
                    Get Started <ChevronRight size={14} className="inline" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {/* Regular grid on tablet and up */}
          <StaggerContainer staggerDelay={0.1} className="hidden sm:grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {packages.map((pkg, i) => (
              <StaggerItem key={i}>
                <div className={`card p-4 sm:p-6 relative h-full ${pkg.popular ? 'border-emerald-500 glow' : ''}`}>
                  {pkg.popular && (
                    <motion.div 
                      className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-semibold"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.5, type: "spring" }}
                    >
                      Most Popular
                    </motion.div>
                  )}
                  <div className="mb-3 sm:mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-white">{pkg.name}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">{pkg.subtitle}</p>
                  </div>
                  <div className="mb-4 sm:mb-6 text-xs sm:text-sm">
                    <div className="flex justify-between mb-1 sm:mb-2">
                      <span className="text-gray-400">Minimum Investment</span>
                      <span className="text-white font-semibold">{pkg.minInvestment}</span>
                    </div>
                    <div className="flex justify-between mb-1 sm:mb-2">
                      <span className="text-gray-400">Monthly Target*</span>
                      <span className="text-emerald-400 font-semibold">{pkg.monthlyTarget}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">6-Month Target*</span>
                      <span className="text-emerald-400 font-semibold">{pkg.sixMonthTarget}</span>
                    </div>
                  </div>
                  <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="flex items-center text-xs sm:text-sm text-gray-300">
                        <CheckCircle size={14} className="text-emerald-400 mr-2 flex-shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/register" className={`block text-center py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition ${
                    pkg.popular 
                      ? 'gradient-primary text-white hover:opacity-90' 
                      : 'border border-emerald-700 text-emerald-400 hover:bg-emerald-900/30'
                  }`}>
                    Get Started <ChevronRight size={16} className="inline" />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Section Blend */}
      <SectionBlend fromColor="rgb(10, 38, 30)" toColor="rgb(5, 25, 20)" height={60} />

      {/* How It Works */}
      <section className="py-12 sm:py-20 px-4 section-wave-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-900/30 text-emerald-400 text-xs sm:text-sm mb-3 sm:mb-4">
              <Zap size={14} className="mr-2" /> Getting Started
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">Simple 3-Step Onboarding</h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-4">
              Start earning with our crypto investment platform in just three simple steps.
            </p>
          </FadeUp>
          <StaggerContainer staggerDelay={0.2} className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
            {steps.map((step, i) => (
              <StaggerItem key={i}>
                <div className="relative h-full">
                  <div className="card p-4 sm:p-6 h-full">
                    <motion.div 
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full gradient-primary flex items-center justify-center text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base"
                      whileInView={{ scale: [0.5, 1.2, 1] }}
                      transition={{ duration: 0.5, delay: i * 0.2 }}
                    >
                      {step.number}
                    </motion.div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-sm mb-3 sm:mb-4">{step.desc}</p>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {step.items.map((item, j) => (
                        <li key={j} className="flex items-start text-xs sm:text-sm text-gray-300">
                          <CheckCircle size={12} className="text-emerald-400 mr-2 mt-0.5 flex-shrink-0" /> 
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {i < 2 && (
                    <motion.div 
                      className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + i * 0.2 }}
                    >
                      <ChevronRight size={24} className="text-emerald-700" />
                    </motion.div>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeUp delay={0.6} className="text-center mt-8 sm:mt-12">
            <Link href="/register" className="btn-primary inline-flex items-center gap-2">
              Start Your Journey Today <ChevronRight size={20} />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* Section Blend */}
      <SectionBlend fromColor="rgb(5, 25, 20)" toColor="rgb(8, 32, 26)" height={60} />

      {/* Team Section */}
      <section className="py-12 sm:py-20 px-4 section-dots-bg relative overflow-hidden" style={{ background: 'rgb(8, 32, 26)' }}>
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-900/30 text-emerald-400 text-xs sm:text-sm mb-3 sm:mb-4">
              <Users size={14} className="mr-2" /> Our Team
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">Meet the Experts</h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-4">
              Our leadership team brings decades of experience in finance, technology, and cryptocurrency markets.
            </p>
          </FadeUp>
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {team.map((member, i) => (
              <StaggerItem key={i}>
                <motion.div 
                  className="card p-3 sm:p-4 text-center group"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-2 sm:mb-4 rounded-full overflow-hidden border-2 border-emerald-500/30 group-hover:border-emerald-500/60 transition">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-white font-semibold text-sm sm:text-base">{member.name}</h4>
                  <p className="text-emerald-400 text-xs sm:text-sm">{member.role}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Section Blend */}
      <SectionBlend fromColor="rgb(8, 32, 26)" toColor="rgb(5, 25, 20)" height={60} />

      {/* Security Section */}
      <section className="py-12 sm:py-20 px-4 section-grid-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Section header with 3D vault inline - HUGE */}
          <div className="flex items-center justify-center gap-8 lg:gap-12 mb-8 sm:mb-12">
            {/* Center - Title */}
            <FadeUp className="text-center px-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-900/30 text-emerald-400 text-xs sm:text-sm mb-3 sm:mb-4">
                <Lock size={14} className="mr-2" /> Enterprise Security
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">Bank-Grade Security & Compliance</h2>
              <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
                Your security and trust are our top priorities with comprehensive protection measures.
              </p>
            </FadeUp>
            
            {/* Right 3D Asset - Secure Vault - HUGE */}
            <Float duration={4} y={12} className="hidden xl:block">
              <FadeIn direction="right">
                <div className="relative w-72 h-72 flex-shrink-0">
                  <Image src="/images/3d-transparent/secure-vault.png" alt="" fill className="object-contain drop-shadow-2xl" />
                </div>
              </FadeIn>
            </Float>
          </div>
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            {[
              { icon: Shield, title: 'Multi-Sig Security', desc: 'Multi-signature protection and cold storage' },
              { icon: CheckCircle, title: 'KYC/AML Compliance', desc: 'Full identity verification and screening' },
              { icon: Lock, title: 'Advanced Encryption', desc: 'AES-256 at rest, TLS 1.3 in transit' },
              { icon: Clock, title: '24/7 Monitoring', desc: 'Continuous security monitoring' },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <motion.div 
                  className="card p-3 sm:p-6 text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-2 sm:mb-4">
                    <item.icon size={20} className="text-white" />
                  </div>
                  <h3 className="text-sm sm:text-lg font-semibold text-white mb-1 sm:mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm hidden sm:block">{item.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeUp delay={0.4} className="flex justify-center gap-4 sm:gap-8 mt-8 sm:mt-12 opacity-60">
            <div className="text-center">
              <div className="text-emerald-400 font-semibold text-sm sm:text-base">SOC 2</div>
              <div className="text-gray-400 text-xs">Compliant</div>
            </div>
            <div className="text-center">
              <div className="text-emerald-400 font-semibold text-sm sm:text-base">ISO 27001</div>
              <div className="text-gray-400 text-xs">Certified</div>
            </div>
            <div className="text-center">
              <div className="text-emerald-400 font-semibold text-sm sm:text-base">GDPR</div>
              <div className="text-gray-400 text-xs">Compliant</div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Section Blend */}
      <SectionBlend fromColor="rgb(5, 25, 20)" toColor="rgb(10, 38, 30)" height={60} />

      {/* CTA Section */}
      <section className="py-12 sm:py-20 px-4 cta-bg relative overflow-hidden" style={{ background: 'rgb(10, 38, 30)' }}>
        <div className="max-w-6xl mx-auto">
          {/* CTA with Phone App inline - HUGE */}
          <div className="flex items-center justify-center gap-8 lg:gap-12">
            {/* Left 3D Asset - Phone App - HUGE */}
            <Float duration={3.5} y={15} className="hidden xl:block">
              <FadeIn direction="left">
                <div className="relative w-72 h-72 flex-shrink-0">
                  <Image src="/images/3d-transparent/phone-app.png" alt="" fill className="object-contain drop-shadow-2xl" />
                </div>
              </FadeIn>
            </Float>
            
            {/* Center - CTA Content */}
            <div className="text-center px-4">
              <FadeUp>
                <div className="inline-block px-3 py-1 rounded-full bg-emerald-900/30 text-emerald-400 text-xs sm:text-sm mb-3 sm:mb-4">
                  Your Journey Starts Here
                </div>
              </FadeUp>
              <BlurIn delay={0.2}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                  Ready to Start Your Investment Journey?
                </h2>
              </BlurIn>
              <FadeUp delay={0.3}>
                <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl mx-auto">
                  Join thousands of investors who trust Quantroy with their crypto investments. Start with as little as $500.
                </p>
              </FadeUp>
              <FadeUp delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12">
                  <Link href="/register" className="btn-primary flex items-center justify-center gap-2">
                    Start Investing Today <ChevronRight size={20} />
                  </Link>
                  <Link href="/strategies" className="btn-secondary flex items-center justify-center gap-2">
                    View All Strategies
                  </Link>
                </div>
              </FadeUp>
            </div>
          </div>
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: Users, value: '10,000+', label: 'Active Investors' },
              { icon: TrendingUp, value: '$50M+', label: 'Assets Managed' },
              { icon: Shield, value: 'Bank-Grade', label: 'Security' },
              { icon: Clock, value: '24/7', label: 'Support' },
            ].map((stat, i) => (
              <StaggerItem key={i}>
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <stat.icon size={20} className="text-emerald-400 mx-auto mb-1 sm:mb-2" />
                  <div className="text-white font-bold text-base sm:text-xl">{stat.value}</div>
                  <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <Footer />
    </main>
  );
}
