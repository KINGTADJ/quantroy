'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  TrendingUp, Shield, Wallet, Bot, Users, Gift,
  ChevronRight, Star, CheckCircle, Lock, Clock,
  BarChart3, Zap, Award, Globe
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

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-900/30 border border-emerald-700/30 text-emerald-400 text-sm mb-6">
            🚀 Professional Crypto Investment Platform
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Invest in Professional<br />
            <span className="text-emerald-400">Crypto Strategies</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            AI-powered crypto strategies with transparent tracking and monthly returns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/register" className="btn-primary flex items-center justify-center gap-2">
              Get Started <ChevronRight size={20} />
            </Link>
            <Link href="/strategies" className="btn-secondary flex items-center justify-center gap-2">
              View Strategies
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((stat, i) => (
              <div key={i} className="card p-4">
                <div className="text-emerald-400 font-bold text-lg">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Logos */}
      <section className="py-12 border-y border-emerald-900/30">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-gray-400 text-sm mb-8">Trusted by Leading Organizations</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['Coinbase', 'Binance', 'Kraken', 'Gemini', 'KuCoin', 'OKX'].map((name) => (
              <div key={name} className="text-gray-400 font-semibold">{name}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-900/30 text-emerald-400 text-sm mb-4">
              <Star size={14} className="mr-2" /> Market Leader
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Quantroy?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Experience the future of investing with our cutting-edge technology and professional management.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="card p-6 hover:border-emerald-700/50 transition group">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition">
                  <feature.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.desc}</p>
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-900/30 text-emerald-400 text-sm">
                  {feature.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Packages */}
      <section className="py-20 px-4 bg-[#061510]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-900/30 text-emerald-400 text-sm mb-4">
              <Award size={14} className="mr-2" /> Investment Plans
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Investment Packages</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose from our professionally managed investment strategies designed for different risk appetites and capital levels.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, i) => (
              <div key={i} className={`card p-6 relative ${pkg.popular ? 'border-emerald-500 glow' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                  <p className="text-gray-400 text-sm">{pkg.subtitle}</p>
                </div>
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Minimum Investment</span>
                    <span className="text-white font-semibold">{pkg.minInvestment}</span>
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Monthly Target*</span>
                    <span className="text-emerald-400 font-semibold">{pkg.monthlyTarget}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">6-Month Target*</span>
                    <span className="text-emerald-400 font-semibold">{pkg.sixMonthTarget}</span>
                  </div>
                </div>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-center text-sm text-gray-300">
                      <CheckCircle size={16} className="text-emerald-400 mr-2" /> {f}
                    </li>
                  ))}
                </ul>
                <Link href="/register" className={`block text-center py-3 rounded-lg font-semibold transition ${
                  pkg.popular 
                    ? 'gradient-primary text-white hover:opacity-90' 
                    : 'border border-emerald-700 text-emerald-400 hover:bg-emerald-900/30'
                }`}>
                  Get Started <ChevronRight size={16} className="inline" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-900/30 text-emerald-400 text-sm mb-4">
              <Zap size={14} className="mr-2" /> Getting Started
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple 3-Step Onboarding</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Start earning with our crypto investment platform in just three simple steps.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="card p-6">
                  <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-white font-bold mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 mb-4">{step.desc}</p>
                  <ul className="space-y-2">
                    {step.items.map((item, j) => (
                      <li key={j} className="flex items-center text-sm text-gray-300">
                        <CheckCircle size={14} className="text-emerald-400 mr-2" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ChevronRight size={24} className="text-emerald-700" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/register" className="btn-primary inline-flex items-center gap-2">
              Start Your Journey Today <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 px-4 bg-[#061510]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-900/30 text-emerald-400 text-sm mb-4">
              <Lock size={14} className="mr-2" /> Enterprise Security
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Bank-Grade Security & Compliance</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Your security and trust are our top priorities with comprehensive protection measures.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'Multi-Sig Security', desc: 'Multi-signature protection and cold storage' },
              { icon: CheckCircle, title: 'KYC/AML Compliance', desc: 'Full identity verification and screening' },
              { icon: Lock, title: 'Advanced Encryption', desc: 'AES-256 at rest, TLS 1.3 in transit' },
              { icon: Clock, title: '24/7 Monitoring', desc: 'Continuous security monitoring' },
            ].map((item, i) => (
              <div key={i} className="card p-6 text-center">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4">
                  <item.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-8 mt-12 opacity-60">
            <div className="text-center">
              <div className="text-emerald-400 font-semibold">SOC 2</div>
              <div className="text-gray-400 text-xs">Compliant</div>
            </div>
            <div className="text-center">
              <div className="text-emerald-400 font-semibold">ISO 27001</div>
              <div className="text-gray-400 text-xs">Certified</div>
            </div>
            <div className="text-center">
              <div className="text-emerald-400 font-semibold">GDPR</div>
              <div className="text-gray-400 text-xs">Compliant</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-emerald-900/30 text-emerald-400 text-sm mb-4">
            Your Journey Starts Here
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Investment Journey?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of investors who trust Quantroy with their crypto investments. Start with as little as $500.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/register" className="btn-primary flex items-center justify-center gap-2">
              Start Investing Today <ChevronRight size={20} />
            </Link>
            <Link href="/strategies" className="btn-secondary flex items-center justify-center gap-2">
              View All Strategies
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Users, value: '10,000+', label: 'Active Investors' },
              { icon: TrendingUp, value: '$50M+', label: 'Assets Managed' },
              { icon: Shield, value: 'Bank-Grade', label: 'Security' },
              { icon: Clock, value: '24/7', label: 'Support' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <stat.icon size={24} className="text-emerald-400 mx-auto mb-2" />
                <div className="text-white font-bold text-xl">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
