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
  Shield, Users, TrendingUp, Globe,
  Award, Target, Heart, Zap
} from 'lucide-react';
import Link from 'next/link';

const stats = [
  { value: '10,000+', label: 'Active Investors' },
  { value: '$50M+', label: 'Assets Managed' },
  { value: '50+', label: 'Countries' },
  { value: '99.9%', label: 'Uptime' },
];

const values = [
  { icon: Shield, title: 'Security First', desc: 'Bank-grade security measures protect your investments 24/7' },
  { icon: Target, title: 'Transparency', desc: 'Real-time tracking and full visibility into your portfolio' },
  { icon: Heart, title: 'Client Success', desc: 'Your success is our success - we grow together' },
  { icon: Zap, title: 'Innovation', desc: 'Cutting-edge AI technology for optimal investment strategies' },
];

const team = [
  { name: 'Alexander Chen', role: 'CEO & Founder', bio: '15+ years in quantitative trading' },
  { name: 'Sarah Williams', role: 'CTO', bio: 'Former Google AI researcher' },
  { name: 'Michael Roberts', role: 'Head of Trading', bio: 'Ex-Goldman Sachs derivatives trader' },
  { name: 'Emma Thompson', role: 'Chief Compliance', bio: 'Former SEC regulatory advisor' },
];

export default function AboutPage() {
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
                  <Image src="/images/3d-transparent/secure-vault.png" alt="" fill className="object-contain drop-shadow-2xl" />
                </div>
              </FadeIn>
            </Float>
            
            <div className="text-center">
              <BlurIn>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  About <span className="text-emerald-400">Quantroy</span>
                </h1>
              </BlurIn>
              <FadeUp delay={0.2}>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  We're on a mission to democratize professional crypto investment strategies, 
                  making institutional-grade returns accessible to everyone.
                </p>
              </FadeUp>
            </div>
            
            {/* Right 3D Asset */}
            <Float duration={3.5} y={15} className="hidden xl:block">
              <FadeIn direction="right">
                <div className="relative w-72 h-72 flex-shrink-0">
                  <Image src="/images/3d-transparent/phone-app.png" alt="" fill className="object-contain drop-shadow-2xl" />
                </div>
              </FadeIn>
            </Float>
          </div>
        </div>
      </section>

      {/* Section Blend */}
      <SectionBlend fromColor="rgb(5, 25, 20)" toColor="rgb(8, 32, 26)" height={80} />

      {/* Stats */}
      <section className="py-12 px-4" style={{ background: 'rgb(8, 32, 26)' }}>
        <div className="max-w-7xl mx-auto">
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <StaggerItem key={i}>
                <motion.div 
                  className="card p-6 text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl font-bold text-emerald-400 mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Section Blend */}
      <SectionBlend fromColor="rgb(8, 32, 26)" toColor="rgb(5, 25, 20)" height={80} />

      {/* Story */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <div className="card p-8 md:p-12">
              <h2 className="text-2xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300">
                <FadeUp delay={0.1}>
                  <p>
                    Quantroy was founded in 2021 with a simple vision: bring institutional-grade 
                    crypto investment strategies to everyday investors. Our founders, seasoned 
                    professionals from top Wall Street firms and tech giants, saw an opportunity 
                    to level the playing field.
                  </p>
                </FadeUp>
                <FadeUp delay={0.2}>
                  <p>
                    Traditional crypto investing was either too complex for most people or 
                    required significant capital. We changed that by building an AI-powered 
                    platform that handles the complexity while making professional strategies 
                    accessible with investments as low as $500.
                  </p>
                </FadeUp>
                <FadeUp delay={0.3}>
                  <p>
                    Today, we manage over $50 million in assets for 10,000+ investors across 
                    50+ countries. Our proprietary algorithms, combined with human oversight, 
                    have consistently delivered strong returns while managing risk effectively.
                  </p>
                </FadeUp>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Section Blend */}
      <SectionBlend fromColor="rgb(5, 25, 20)" toColor="rgb(6, 21, 16)" height={100} />

      {/* Values with 3D Assets */}
      <section className="py-16 px-4" style={{ background: 'rgb(6, 21, 16)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-12 mb-12">
            {/* Left 3D Asset */}
            <Float duration={4} y={10} className="hidden xl:block">
              <FadeIn direction="left">
                <div className="relative w-64 h-64 flex-shrink-0">
                  <Image src="/images/3d-transparent/money-bundle.png" alt="" fill className="object-contain drop-shadow-2xl" />
                </div>
              </FadeIn>
            </Float>
            
            <FadeUp className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
              <p className="text-gray-400">The principles that guide everything we do</p>
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
          <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <StaggerItem key={i}>
                <motion.div 
                  className="card p-6 text-center h-full"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4">
                    <value.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-400 text-sm">{value.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Section Blend */}
      <SectionBlend fromColor="rgb(6, 21, 16)" toColor="rgb(5, 25, 20)" height={100} />

      {/* Team */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Leadership Team</h2>
            <p className="text-gray-400">Industry veterans committed to your success</p>
          </FadeUp>
          <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <StaggerItem key={i}>
                <motion.div 
                  className="card p-6 text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-900/30 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-emerald-400">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                  <p className="text-emerald-400 text-sm mb-2">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.bio}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Section Blend */}
      <SectionBlend fromColor="rgb(5, 25, 20)" toColor="rgb(6, 21, 16)" height={100} />

      {/* CTA with 3D Assets */}
      <section className="py-16 px-4" style={{ background: 'rgb(6, 21, 16)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-12">
            {/* Left 3D Asset */}
            <Float duration={3.5} y={15} className="hidden xl:block">
              <FadeIn direction="left">
                <div className="relative w-64 h-64 flex-shrink-0">
                  <Image src="/images/3d-transparent/premium-card.png" alt="" fill className="object-contain drop-shadow-2xl" />
                </div>
              </FadeIn>
            </Float>
            
            <div className="text-center">
              <BlurIn>
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Join Us?</h2>
              </BlurIn>
              <FadeUp delay={0.2}>
                <p className="text-gray-400 mb-8">
                  Start your investment journey with Quantroy today.
                </p>
              </FadeUp>
              <FadeUp delay={0.3}>
                <Link href="/register" className="btn-primary">
                  Get Started
                </Link>
              </FadeUp>
            </div>
            
            {/* Right 3D Asset */}
            <Float duration={4} y={12} className="hidden xl:block">
              <FadeIn direction="right">
                <div className="relative w-64 h-64 flex-shrink-0">
                  <Image src="/images/3d-transparent/crypto-coins.png" alt="" fill className="object-contain drop-shadow-2xl" />
                </div>
              </FadeIn>
            </Float>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
