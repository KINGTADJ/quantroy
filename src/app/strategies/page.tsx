'use client';

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  TrendingUp, Shield, CheckCircle, ChevronRight,
  BarChart3, Clock, Users, Zap
} from 'lucide-react';

const strategies = [
  {
    id: 'starter',
    name: 'Starter Strategy',
    subtitle: 'Perfect for beginners',
    minInvestment: '$500',
    monthlyTarget: '~66%',
    sixMonthTarget: '10x',
    riskLevel: 'Moderate',
    description: 'Our entry-level strategy designed for first-time crypto investors. Combines stable assets with growth potential.',
    features: [
      'Diversified portfolio of top 10 cryptocurrencies',
      'Automatic rebalancing monthly',
      'AI-powered entry and exit signals',
      'Monthly payout to your wallet',
    ],
    stats: {
      investors: '5,200+',
      avgReturn: '64%',
      yearsActive: '3+',
    },
  },
  {
    id: 'pro',
    name: 'Pro Strategy',
    subtitle: 'For serious investors',
    minInvestment: '$5,000',
    monthlyTarget: '~66%',
    sixMonthTarget: '10x',
    riskLevel: 'Moderate-High',
    description: 'Advanced algorithmic trading with higher allocation to emerging opportunities and DeFi yields.',
    features: [
      'Active trading with AI optimization',
      'DeFi yield farming integration',
      'Priority access to new opportunities',
      'Dedicated account manager',
    ],
    stats: {
      investors: '3,100+',
      avgReturn: '72%',
      yearsActive: '2+',
    },
    popular: true,
  },
  {
    id: 'elite',
    name: 'Elite Strategy',
    subtitle: 'High-net-worth individuals',
    minInvestment: '$50,000',
    monthlyTarget: '~66%',
    sixMonthTarget: '10x',
    riskLevel: 'High',
    description: 'Maximum growth potential with access to exclusive opportunities, private sales, and institutional-grade strategies.',
    features: [
      'Early access to token launches',
      'Private sale allocations',
      'Custom risk parameters',
      'Direct line to portfolio managers',
    ],
    stats: {
      investors: '850+',
      avgReturn: '85%',
      yearsActive: '2+',
    },
  },
  {
    id: 'vip',
    name: 'VIP Strategy',
    subtitle: 'Institutional grade',
    minInvestment: '$500,000+',
    monthlyTarget: '~66%',
    sixMonthTarget: '10x',
    riskLevel: 'Custom',
    description: 'Fully customized investment approach with white-glove service for ultra-high-net-worth individuals and institutions.',
    features: [
      'Bespoke portfolio construction',
      'Dedicated team of analysts',
      'Custom reporting and compliance',
      '24/7 concierge support',
    ],
    stats: {
      investors: '120+',
      avgReturn: '90%+',
      yearsActive: '2+',
    },
  },
];

export default function StrategiesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero with 3D Assets */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-12">
            {/* Left 3D Asset - Chart */}
            <div className="hidden xl:block relative w-72 h-72 flex-shrink-0">
              <Image src="/images/page-assets/strategies-chart.png" alt="" fill className="object-contain drop-shadow-2xl" />
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-900/30 border border-emerald-700/30 text-emerald-400 text-sm mb-6">
                <BarChart3 size={16} className="mr-2" /> Investment Strategies
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Professional Investment<br />
                <span className="text-emerald-400">Strategies</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Choose from our range of professionally managed strategies designed for different investment goals and risk appetites.
              </p>
            </div>
            
            {/* Right 3D Asset - Bull */}
            <div className="hidden xl:block relative w-72 h-72 flex-shrink-0">
              <Image src="/images/page-assets/strategies-bull.png" alt="" fill className="object-contain drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Strategies */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto space-y-8">
          {strategies.map((strategy, i) => (
            <div 
              key={strategy.id} 
              className={`card p-8 ${strategy.popular ? 'border-emerald-500 glow' : ''}`}
            >
              {strategy.popular && (
                <div className="inline-block px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-semibold mb-4">
                  Most Popular
                </div>
              )}
              
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Left - Info */}
                <div className="lg:col-span-2">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-white">{strategy.name}</h2>
                      <p className="text-gray-400">{strategy.subtitle}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      strategy.riskLevel === 'Moderate' ? 'bg-blue-900/30 text-blue-400' :
                      strategy.riskLevel === 'Moderate-High' ? 'bg-amber-900/30 text-amber-400' :
                      strategy.riskLevel === 'High' ? 'bg-red-900/30 text-red-400' :
                      'bg-purple-900/30 text-purple-400'
                    }`}>
                      {strategy.riskLevel} Risk
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{strategy.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {strategy.features.map((feature, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <CheckCircle size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex gap-8">
                    <div>
                      <div className="flex items-center gap-2 text-emerald-400">
                        <Users size={16} />
                        <span className="font-semibold">{strategy.stats.investors}</span>
                      </div>
                      <p className="text-gray-400 text-xs">Active Investors</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-emerald-400">
                        <TrendingUp size={16} />
                        <span className="font-semibold">{strategy.stats.avgReturn}</span>
                      </div>
                      <p className="text-gray-400 text-xs">Avg Monthly Return</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-emerald-400">
                        <Clock size={16} />
                        <span className="font-semibold">{strategy.stats.yearsActive}</span>
                      </div>
                      <p className="text-gray-400 text-xs">Years Active</p>
                    </div>
                  </div>
                </div>

                {/* Right - Investment Card */}
                <div className="bg-emerald-900/20 rounded-xl p-6 border border-emerald-900/30">
                  <div className="mb-6">
                    <p className="text-gray-400 text-sm">Minimum Investment</p>
                    <p className="text-3xl font-bold text-white">{strategy.minInvestment}</p>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Monthly Target</span>
                      <span className="text-emerald-400 font-semibold">{strategy.monthlyTarget}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">6-Month Target</span>
                      <span className="text-emerald-400 font-semibold">{strategy.sixMonthTarget}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Payout Frequency</span>
                      <span className="text-white font-semibold">Monthly</span>
                    </div>
                  </div>

                  <Link 
                    href="/register" 
                    className="btn-primary w-full flex items-center justify-center gap-2"
                  >
                    Start Investing <ChevronRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA with 3D Assets */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-12">
            {/* Left 3D Asset - Target */}
            <div className="hidden xl:block relative w-64 h-64 flex-shrink-0">
              <Image src="/images/page-assets/strategies-target.png" alt="" fill className="object-contain drop-shadow-2xl" />
            </div>
            
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Not sure which strategy is right for you?</h2>
              <p className="text-gray-400 mb-8">
                Our AI assistant can help you find the perfect strategy based on your investment goals and risk tolerance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/register" className="btn-primary flex items-center justify-center gap-2">
                  <Zap size={18} /> Talk to AI Assistant
                </Link>
                <Link href="/contact" className="btn-secondary flex items-center justify-center gap-2">
                  Contact Our Team
                </Link>
              </div>
            </div>
            
            {/* Right 3D Asset - Shield */}
            <div className="hidden xl:block relative w-64 h-64 flex-shrink-0">
              <Image src="/images/page-assets/auth-shield.png" alt="" fill className="object-contain drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
