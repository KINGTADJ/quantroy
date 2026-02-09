'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Bot, MessageSquare, Zap, Brain, Shield, Clock, ChevronRight } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Powered by Gemini AI',
    desc: 'Advanced language model provides intelligent, context-aware responses to all your investment questions.',
  },
  {
    icon: MessageSquare,
    title: 'Natural Conversations',
    desc: 'Chat naturally about your portfolio, market trends, and investment strategies. No complex interfaces.',
  },
  {
    icon: Zap,
    title: 'Instant Analysis',
    desc: 'Get real-time insights on market conditions, your portfolio performance, and investment opportunities.',
  },
  {
    icon: Shield,
    title: 'Personalized Advice',
    desc: 'Receive recommendations tailored to your risk tolerance, investment goals, and portfolio composition.',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    desc: 'Your AI assistant is always available, ready to help whenever you need guidance or have questions.',
  },
];

const sampleQuestions = [
  "How is my portfolio performing this month?",
  "What's the best strategy for my investment goals?",
  "Should I increase my investment?",
  "Explain the risks of cryptocurrency investing",
  "When is my next payout scheduled?",
  "How does the referral program work?",
];

export default function AIPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-12">
            <div className="hidden xl:block relative w-20 h-20 sm:w-36 sm:h-36 xl:w-64 xl:h-64 flex-shrink-0">
              <Image src="/images/3d-transparent/phone-app.png" alt="" fill className="object-contain drop-shadow-2xl" />
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-900/30 border border-emerald-700/30 text-emerald-400 text-sm mb-6">
                <Bot size={16} className="mr-2" /> AI-Powered
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Meet Your <span className="text-emerald-400">AI Assistant</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                Get personalized investment guidance, portfolio insights, and instant answers to all your questions—powered by advanced AI.
              </p>
              <Link href="/register" className="btn-primary inline-flex items-center gap-2">
                Get Started <ChevronRight size={20} />
              </Link>
            </div>
            
            <div className="hidden xl:block relative w-20 h-20 sm:w-36 sm:h-36 xl:w-64 xl:h-64 flex-shrink-0">
              <Image src="/images/3d-transparent/crypto-coins.png" alt="" fill className="object-contain drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-[#061510]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">What Can The AI Do?</h2>
            <p className="text-gray-400">Your personal investment advisor, available 24/7</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="card p-6">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                  <feature.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Questions */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Ask Anything</h2>
            <p className="text-gray-400">Here are some things you can ask your AI assistant</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {sampleQuestions.map((question, i) => (
              <div key={i} className="card p-4 flex items-center gap-3">
                <MessageSquare size={18} className="text-emerald-400 flex-shrink-0" />
                <span className="text-gray-300">{question}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#061510]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-gray-400 mb-8">
            Create your account and start chatting with your AI assistant today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="btn-primary inline-flex items-center justify-center gap-2">
              Create Account <ChevronRight size={20} />
            </Link>
            <Link href="/login" className="btn-secondary inline-flex items-center justify-center gap-2">
              Sign In to Dashboard
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
