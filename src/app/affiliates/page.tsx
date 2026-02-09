'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { 
  Gift, Users, DollarSign, TrendingUp,
  CheckCircle, ChevronRight, Zap
} from 'lucide-react';
import Link from 'next/link';

const tiers = [
  { level: 1, rate: '6%', requirement: 'Direct referrals', example: 'John invests $10,000 → You earn $600' },
  { level: 2, rate: '3%', requirement: '2nd level referrals', example: "John refers Mike who invests $10,000 → You earn $300" },
  { level: 3, rate: '1%', requirement: '3rd level referrals', example: "Mike refers Sarah who invests $10,000 → You earn $100" },
];

const benefits = [
  { icon: DollarSign, title: 'Lifetime Commissions', desc: 'Earn on every investment your referrals make, forever' },
  { icon: Users, title: '3-Tier Structure', desc: 'Earn from direct referrals and their referrals too' },
  { icon: Zap, title: 'Instant Payouts', desc: 'Commissions paid monthly with your regular payouts' },
  { icon: TrendingUp, title: 'No Limits', desc: 'No cap on earnings - the more you refer, the more you earn' },
];

const steps = [
  { number: '1', title: 'Sign Up', desc: 'Create your free Quantroy account' },
  { number: '2', title: 'Get Your Link', desc: 'Find your unique referral link in the dashboard' },
  { number: '3', title: 'Share', desc: 'Share with friends, family, and your network' },
  { number: '4', title: 'Earn', desc: 'Get paid when they invest' },
];

export default function AffiliatesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero with 3D Assets */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-12">
            {/* Left 3D Asset - Gift */}
            <div className="hidden xl:block relative w-72 h-72 flex-shrink-0">
              <Image src="/images/page-assets/affiliates-gift.png" alt="" fill className="object-contain drop-shadow-2xl" />
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-900/30 border border-emerald-700/30 text-emerald-400 text-sm mb-6">
                <Gift size={16} className="mr-2" /> Affiliate Program
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Earn Up to <span className="text-emerald-400">6% Commission</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                Refer friends to Quantroy and earn lifetime commissions on their investments. 
                It's free to join and there's no limit to how much you can earn.
              </p>
              <Link href="/register" className="btn-primary inline-flex items-center gap-2">
                Join the Program <ChevronRight size={20} />
              </Link>
            </div>
            
            {/* Right 3D Asset - Megaphone */}
            <div className="hidden xl:block relative w-72 h-72 flex-shrink-0">
              <Image src="/images/page-assets/affiliates-megaphone.png" alt="" fill className="object-contain drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Commission Tiers with 3D Assets */}
      <section className="py-16 px-4 bg-[#061510]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-12 mb-12">
            {/* Left 3D Asset - Trophy */}
            <div className="hidden xl:block relative w-64 h-64 flex-shrink-0">
              <Image src="/images/page-assets/about-trophy.png" alt="" fill className="object-contain drop-shadow-2xl" />
            </div>
            
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Commission Structure</h2>
              <p className="text-gray-400">Earn on 3 levels of referrals</p>
            </div>
            
            {/* Right 3D Asset - Key */}
            <div className="hidden xl:block relative w-64 h-64 flex-shrink-0">
              <Image src="/images/page-assets/auth-key.png" alt="" fill className="object-contain drop-shadow-2xl" />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div key={tier.level} className="card p-8 text-center">
                <div className="text-5xl font-bold text-emerald-400 mb-4">{tier.rate}</div>
                <h3 className="text-xl font-semibold text-white mb-2">Level {tier.level}</h3>
                <p className="text-gray-400 mb-4">{tier.requirement}</p>
                <div className="p-4 rounded-lg bg-emerald-900/20 border border-emerald-900/30">
                  <p className="text-gray-300 text-sm">{tier.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Join?</h2>
            <p className="text-gray-400">Benefits of the Quantroy affiliate program</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="card p-6">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                  <benefit.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-[#061510]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-gray-400">Start earning in 4 simple steps</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="card p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Earnings Calculator</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 rounded-lg bg-emerald-900/20">
                <p className="text-gray-400 text-sm mb-2">If you refer 10 people</p>
                <p className="text-gray-400 text-sm mb-2">Each invests $5,000</p>
                <p className="text-2xl font-bold text-emerald-400">$3,000/year</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-emerald-900/20">
                <p className="text-gray-400 text-sm mb-2">If you refer 50 people</p>
                <p className="text-gray-400 text-sm mb-2">Each invests $5,000</p>
                <p className="text-2xl font-bold text-emerald-400">$15,000/year</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-emerald-900/20">
                <p className="text-gray-400 text-sm mb-2">If you refer 100 people</p>
                <p className="text-gray-400 text-sm mb-2">Each invests $5,000</p>
                <p className="text-2xl font-bold text-emerald-400">$30,000/year</p>
              </div>
            </div>
            <p className="text-center text-gray-400 text-sm">
              * Based on 6% commission on direct referrals. Actual earnings may vary.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#061510]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Earning?</h2>
          <p className="text-gray-400 mb-8">
            Join thousands of affiliates already earning with Quantroy.
          </p>
          <Link href="/register" className="btn-primary inline-flex items-center gap-2">
            Get Started Now <ChevronRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
