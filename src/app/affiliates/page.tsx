'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { 
  FadeUp, FadeIn, ScaleIn, StaggerContainer, StaggerItem, 
  Float, SectionBlend, BlurIn 
} from '@/components/ScrollAnimations';
import { motion } from 'framer-motion';
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
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      
      {/* Hero with 3D Assets */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-12">
            {/* Left 3D Asset */}
            <Float duration={4} y={12} className="hidden xl:block">
              <FadeIn direction="left">
                <div className="relative w-72 h-72 flex-shrink-0">
                  <Image src="/images/3d-transparent/money-bundle.png" alt="" fill className="object-contain drop-shadow-2xl" />
                </div>
              </FadeIn>
            </Float>
            
            <div className="text-center">
              <FadeIn direction="up" delay={0.1}>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-900/30 border border-emerald-700/30 text-emerald-400 text-sm mb-6">
                  <Gift size={16} className="mr-2" /> Affiliate Program
                </div>
              </FadeIn>
              <BlurIn delay={0.2}>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Earn Up to <span className="text-emerald-400">6% Commission</span>
                </h1>
              </BlurIn>
              <FadeUp delay={0.3}>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                  Refer friends to Quantroy and earn lifetime commissions on their investments. 
                  It's free to join and there's no limit to how much you can earn.
                </p>
              </FadeUp>
              <FadeUp delay={0.4}>
                <Link href="/register" className="btn-primary inline-flex items-center gap-2">
                  Join the Program <ChevronRight size={20} />
                </Link>
              </FadeUp>
            </div>
            
            {/* Right 3D Asset */}
            <Float duration={3.5} y={15} className="hidden xl:block">
              <FadeIn direction="right">
                <div className="relative w-72 h-72 flex-shrink-0">
                  <Image src="/images/3d-transparent/crypto-coins.png" alt="" fill className="object-contain drop-shadow-2xl" />
                </div>
              </FadeIn>
            </Float>
          </div>
        </div>
      </section>

      {/* Section Blend */}
      <SectionBlend fromColor="rgb(5, 25, 20)" toColor="rgb(6, 21, 16)" height={100} />

      {/* Commission Tiers with 3D Assets */}
      <section className="py-16 px-4" style={{ background: 'rgb(6, 21, 16)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-12 mb-12">
            {/* Left 3D Asset */}
            <Float duration={4} y={10} className="hidden xl:block">
              <FadeIn direction="left">
                <div className="relative w-64 h-64 flex-shrink-0">
                  <Image src="/images/3d-transparent/premium-card.png" alt="" fill className="object-contain drop-shadow-2xl" />
                </div>
              </FadeIn>
            </Float>
            
            <FadeUp className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Commission Structure</h2>
              <p className="text-gray-400">Earn on 3 levels of referrals</p>
            </FadeUp>
            
            {/* Right 3D Asset */}
            <Float duration={3.5} y={12} className="hidden xl:block">
              <FadeIn direction="right">
                <div className="relative w-64 h-64 flex-shrink-0">
                  <Image src="/images/3d-transparent/gold-bars.png" alt="" fill className="object-contain drop-shadow-2xl" />
                </div>
              </FadeIn>
            </Float>
          </div>
          <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <StaggerItem key={tier.level}>
                <motion.div 
                  className="card p-8 text-center h-full"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="text-5xl font-bold text-emerald-400 mb-4"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                  >
                    {tier.rate}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-2">Level {tier.level}</h3>
                  <p className="text-gray-400 mb-4">{tier.requirement}</p>
                  <div className="p-4 rounded-lg bg-emerald-900/20 border border-emerald-900/30">
                    <p className="text-gray-300 text-sm">{tier.example}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Section Blend */}
      <SectionBlend fromColor="rgb(6, 21, 16)" toColor="rgb(5, 25, 20)" height={100} />

      {/* Benefits */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Join?</h2>
            <p className="text-gray-400">Benefits of the Quantroy affiliate program</p>
          </FadeUp>
          <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <StaggerItem key={i}>
                <motion.div 
                  className="card p-6 h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                    <benefit.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm">{benefit.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Section Blend */}
      <SectionBlend fromColor="rgb(5, 25, 20)" toColor="rgb(6, 21, 16)" height={100} />

      {/* How It Works */}
      <section className="py-16 px-4" style={{ background: 'rgb(6, 21, 16)' }}>
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-gray-400">Start earning in 4 simple steps</p>
          </FadeUp>
          <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <StaggerItem key={i}>
                <div className="text-center">
                  <motion.div 
                    className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white"
                    whileInView={{ scale: [0.5, 1.2, 1] }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    {step.number}
                  </motion.div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Section Blend */}
      <SectionBlend fromColor="rgb(6, 21, 16)" toColor="rgb(5, 25, 20)" height={100} />

      {/* Calculator */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Earnings Calculator</h2>
              <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  { refs: '10', amount: '$3,000/year' },
                  { refs: '50', amount: '$15,000/year' },
                  { refs: '100', amount: '$30,000/year' },
                ].map((calc, i) => (
                  <StaggerItem key={i}>
                    <motion.div 
                      className="text-center p-4 rounded-lg bg-emerald-900/20"
                      whileHover={{ scale: 1.05 }}
                    >
                      <p className="text-gray-400 text-sm mb-2">If you refer {calc.refs} people</p>
                      <p className="text-gray-400 text-sm mb-2">Each invests $5,000</p>
                      <p className="text-2xl font-bold text-emerald-400">{calc.amount}</p>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
              <p className="text-center text-gray-400 text-sm">
                * Based on 6% commission on direct referrals. Actual earnings may vary.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Section Blend */}
      <SectionBlend fromColor="rgb(5, 25, 20)" toColor="rgb(6, 21, 16)" height={100} />

      {/* CTA */}
      <section className="py-16 px-4" style={{ background: 'rgb(6, 21, 16)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <BlurIn>
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Earning?</h2>
          </BlurIn>
          <FadeUp delay={0.2}>
            <p className="text-gray-400 mb-8">
              Join thousands of affiliates already earning with Quantroy.
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <Link href="/register" className="btn-primary inline-flex items-center gap-2">
              Get Started Now <ChevronRight size={20} />
            </Link>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </main>
  );
}
