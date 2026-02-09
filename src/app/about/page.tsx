'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
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
    <main className="min-h-screen">
      <Header />
      
      {/* Hero with 3D Assets */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-12">
            {/* Left 3D Asset */}
            <div className="hidden xl:block relative w-72 h-72 flex-shrink-0">
              <Image src="/images/3d-transparent/secure-vault.png" alt="" fill className="object-contain drop-shadow-2xl" />
            </div>
            
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About <span className="text-emerald-400">Quantroy</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We're on a mission to democratize professional crypto investment strategies, 
                making institutional-grade returns accessible to everyone.
              </p>
            </div>
            
            {/* Right 3D Asset */}
            <div className="hidden xl:block relative w-72 h-72 flex-shrink-0">
              <Image src="/images/3d-transparent/phone-app.png" alt="" fill className="object-contain drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="card p-6 text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="card p-8 md:p-12">
            <h2 className="text-2xl font-bold text-white mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Quantroy was founded in 2021 with a simple vision: bring institutional-grade 
                crypto investment strategies to everyday investors. Our founders, seasoned 
                professionals from top Wall Street firms and tech giants, saw an opportunity 
                to level the playing field.
              </p>
              <p>
                Traditional crypto investing was either too complex for most people or 
                required significant capital. We changed that by building an AI-powered 
                platform that handles the complexity while making professional strategies 
                accessible with investments as low as $500.
              </p>
              <p>
                Today, we manage over $50 million in assets for 10,000+ investors across 
                50+ countries. Our proprietary algorithms, combined with human oversight, 
                have consistently delivered strong returns while managing risk effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values with 3D Assets */}
      <section className="py-16 px-4 bg-[#061510]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-12 mb-12">
            {/* Left 3D Asset */}
            <div className="hidden xl:block relative w-64 h-64 flex-shrink-0">
              <Image src="/images/3d-transparent/money-bundle.png" alt="" fill className="object-contain drop-shadow-2xl" />
            </div>
            
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
              <p className="text-gray-400">The principles that guide everything we do</p>
            </div>
            
            {/* Right 3D Asset */}
            <div className="hidden xl:block relative w-64 h-64 flex-shrink-0">
              <Image src="/images/3d-transparent/gold-bars.png" alt="" fill className="object-contain drop-shadow-2xl" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div key={i} className="card p-6 text-center">
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4">
                  <value.icon size={28} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Leadership Team</h2>
            <p className="text-gray-400">Industry veterans committed to your success</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={i} className="card p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-emerald-900/30 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-400">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-emerald-400 text-sm mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA with 3D Assets */}
      <section className="py-16 px-4 bg-[#061510]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-12">
            {/* Left 3D Asset */}
            <div className="hidden xl:block relative w-64 h-64 flex-shrink-0">
              <Image src="/images/3d-transparent/premium-card.png" alt="" fill className="object-contain drop-shadow-2xl" />
            </div>
            
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Join Us?</h2>
              <p className="text-gray-400 mb-8">
                Start your investment journey with Quantroy today.
              </p>
              <Link href="/register" className="btn-primary">
                Get Started
              </Link>
            </div>
            
            {/* Right 3D Asset */}
            <div className="hidden xl:block relative w-64 h-64 flex-shrink-0">
              <Image src="/images/3d-transparent/crypto-coins.png" alt="" fill className="object-contain drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
