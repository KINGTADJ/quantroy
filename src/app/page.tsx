'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Check, 
  Shield, 
  TrendingUp, 
  Users, 
  Wallet, 
  Bot, 
  Gift, 
  Star, 
  ChevronRight,
  Sparkles,
  Lock,
  BarChart3,
  Zap,
  Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { NumberTicker } from '@/components/ui/number-ticker';
import { BentoGrid, BentoCard } from '@/components/ui/bento-grid';
import { Marquee } from '@/components/ui/marquee';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

// Data
const features = [
  {
    icon: TrendingUp,
    title: 'AI-Powered Strategies',
    description: 'Advanced algorithms analyze market trends 24/7 to maximize your returns.',
  },
  {
    icon: Shield,
    title: 'Bank-Grade Security',
    description: 'Multi-signature wallets and cold storage protect your assets.',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Track performance with live dashboards and detailed reports.',
  },
  {
    icon: Zap,
    title: 'Instant Withdrawals',
    description: 'Access your funds anytime with fast, secure withdrawals.',
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Dedicated team available 24/7 to assist with your portfolio.',
  },
  {
    icon: Gift,
    title: '6% Referral Bonus',
    description: 'Earn commission by inviting friends to the platform.',
  },
];

const stats = [
  { value: 50, suffix: 'M+', label: 'Assets Managed', prefix: '$' },
  { value: 10000, suffix: '+', label: 'Active Investors' },
  { value: 99.9, suffix: '%', label: 'Uptime' },
  { value: 24, suffix: '/7', label: 'Support' },
];

const testimonials = [
  {
    name: 'James Okoro',
    role: 'Entrepreneur',
    avatar: '/images/testimonial-1.png',
    content: 'Quantroy transformed my investment approach. The AI recommendations are spot-on, and I\'ve seen consistent 15% monthly returns.',
  },
  {
    name: 'Chioma Eze',
    role: 'Business Owner',
    avatar: '/images/testimonial-2.png',
    content: 'I was skeptical at first, but the transparency and security gave me confidence. My portfolio grew 40% in just 6 months.',
  },
  {
    name: 'Emmanuel Asante',
    role: 'Financial Analyst',
    avatar: '/images/testimonial-3.png',
    content: 'As someone in finance, I appreciate the professionalism. This is how crypto investing should be done.',
  },
  {
    name: 'Amaka Obi',
    role: 'Doctor',
    avatar: '/images/team-cio.png',
    content: 'Finally, an investment platform that actually delivers on its promises. The automated strategies work while I focus on my career.',
  },
  {
    name: 'David Mensah',
    role: 'Software Engineer',
    avatar: '/images/team-ceo.png',
    content: 'The tech behind Quantroy is impressive. Clean UI, fast execution, and the AI predictions are remarkably accurate.',
  },
  {
    name: 'Grace Adeyemi',
    role: 'Teacher',
    avatar: '/images/team-compliance.png',
    content: 'Started with just $500 and built it up to $5,000 in 8 months. The platform makes investing accessible to everyone.',
  },
];

const plans = [
  { name: 'Starter', roi: '8-12%', min: '$500', duration: '30 days', popular: false },
  { name: 'Growth', roi: '15-20%', min: '$5,000', duration: '60 days', popular: true },
  { name: 'Premium', roi: '25-35%', min: '$25,000', duration: '90 days', popular: false },
];

const logos = ['Bloomberg', 'Reuters', 'Forbes', 'TechCrunch', 'Yahoo Finance'];

export default function HomePage() {
  const firstRow = testimonials.slice(0, 3);
  const secondRow = testimonials.slice(3);

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* ==================== NAVIGATION ==================== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a2f25]/95 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#c4f542] to-[#a8e026] flex items-center justify-center shadow-lg shadow-[#c4f542]/20">
                <span className="text-[#1a2f25] font-bold text-base">Q</span>
              </div>
              <span className="text-white font-semibold text-lg tracking-tight">Quantroy</span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {['About', 'Strategies', 'Pricing', 'Contact'].map((item) => (
                <Link 
                  key={item} 
                  href={`/${item.toLowerCase()}`}
                  className="px-4 py-2 text-white/70 text-sm font-medium hover:text-white hover:bg-white/5 rounded-lg transition-all"
                >
                  {item}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Link href="/login" className="hidden sm:block text-white/70 hover:text-white text-sm font-medium px-4 py-2">
                Sign In
              </Link>
              <Link href="/register">
                <Button className="bg-[#c4f542] hover:bg-[#d4ff5c] text-[#1a2f25] font-semibold rounded-full px-5 h-9 text-sm shadow-lg shadow-[#c4f542]/20">
                  Get Started
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* ==================== HERO ==================== */}
      <section className="relative bg-[#1a2f25] pt-32 pb-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2a4a3a] via-[#1a2f25] to-[#1a2f25]" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-xl"
            >
              <motion.div variants={fadeInUp}>
                <Badge className="bg-[#c4f542]/10 text-[#c4f542] border-[#c4f542]/20 hover:bg-[#c4f542]/20 mb-6">
                  <Sparkles className="h-3.5 w-3.5 mr-1.5" />
                  #1 Crypto Investment Platform 2026
                </Badge>
              </motion.div>

              <motion.h1 
                variants={fadeInUp}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6"
              >
                Grow Your Wealth with{' '}
                <span className="bg-gradient-to-r from-[#c4f542] via-[#f9d423] to-[#c4f542] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  AI-Powered
                </span>{' '}
                Investing
              </motion.h1>

              <motion.p 
                variants={fadeInUp}
                className="text-lg text-white/60 leading-relaxed mb-8 max-w-lg"
              >
                Join 10,000+ investors earning consistent returns through our intelligent 
                crypto strategies. Start with as little as $500.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link href="/register">
                  <Button size="lg" className="bg-[#c4f542] hover:bg-[#d4ff5c] text-[#1a2f25] font-semibold rounded-full px-8 h-12 text-base shadow-xl shadow-[#c4f542]/25 w-full sm:w-auto">
                    Start Investing
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/strategies">
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/5 rounded-full px-8 h-12 text-base w-full sm:w-auto">
                    View Strategies
                  </Button>
                </Link>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <Avatar key={i} className="w-10 h-10 border-2 border-[#1a2f25]">
                      <AvatarImage src={`/images/testimonial-${Math.min(i, 3)}.png`} />
                      <AvatarFallback className="bg-[#c4f542] text-[#1a2f25] text-xs font-bold">U{i}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#f9d423] text-[#f9d423]" />
                    ))}
                    <span className="text-white font-semibold ml-1.5">4.9</span>
                  </div>
                  <p className="text-white/50 text-sm">From 2,000+ reviews</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right - Dashboard preview */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-[#0f1f18] to-[#1a2f25] rounded-2xl border border-white/10 p-6 shadow-2xl">
                {/* Dashboard header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-white/50 text-sm">Total Portfolio Value</p>
                    <p className="text-3xl font-bold text-white">
                      $<NumberTicker value={124582} className="text-3xl font-bold text-white" />
                      <span className="text-[#c4f542]">.40</span>
                    </p>
                  </div>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +24.5%
                  </Badge>
                </div>

                {/* Chart placeholder */}
                <div className="h-48 bg-gradient-to-t from-[#c4f542]/10 to-transparent rounded-xl mb-6 flex items-end justify-between px-4 pb-4">
                  {[40, 55, 45, 70, 60, 85, 75, 95, 80, 90, 85, 100].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 0.5, delay: i * 0.05 }}
                      className="w-[6%] bg-gradient-to-t from-[#c4f542] to-[#c4f542]/60 rounded-t-sm"
                    />
                  ))}
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <p className="text-white/40 text-xs mb-1">Today's Profit</p>
                    <p className="text-green-400 font-bold text-lg">+$1,842</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <p className="text-white/40 text-xs mb-1">Active Trades</p>
                    <p className="text-white font-bold text-lg">12</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <p className="text-white/40 text-xs mb-1">Win Rate</p>
                    <p className="text-[#c4f542] font-bold text-lg">94.2%</p>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-8 top-1/4 bg-white rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold text-sm">BTC Trade</p>
                    <p className="text-green-600 text-xs font-medium">+$2,340 profit</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 bottom-1/4 bg-[#1a2f25] border border-[#c4f542]/30 rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#c4f542]/20 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-[#c4f542]" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Secured</p>
                    <p className="text-white/50 text-xs">Bank-grade encryption</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== LOGOS ==================== */}
      <section className="bg-[#f5f0e6] py-8 border-y border-[#1a2f25]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-12 flex-wrap opacity-60">
            <span className="text-[#1a2f25]/50 text-sm font-medium">As seen on:</span>
            {logos.map((logo) => (
              <span key={logo} className="text-[#1a2f25] font-semibold text-lg">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FEATURES BENTO ==================== */}
      <section className="bg-[#f5f0e6] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp}>
              <Badge className="bg-[#1a2f25] text-[#c4f542] mb-4">
                Why Choose Us
              </Badge>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a2f25] mb-4">
              Built for Serious Investors
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-[#1a2f25]/60 max-w-2xl mx-auto">
              Everything you need to grow your wealth safely and consistently.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature, idx) => (
              <motion.div key={idx} variants={fadeInUp}>
                <Card className="bg-white border-[#1a2f25]/10 hover:shadow-xl hover:shadow-[#1a2f25]/5 hover:-translate-y-1 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-[#1a2f25] flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-[#c4f542]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#1a2f25] mb-2">{feature.title}</h3>
                    <p className="text-[#1a2f25]/60 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==================== STATS ==================== */}
      <section className="bg-[#1a2f25] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl font-bold text-[#c4f542] mb-2">
                  {stat.prefix}
                  <NumberTicker value={stat.value} className="text-4xl sm:text-5xl font-bold text-[#c4f542]" />
                  {stat.suffix}
                </div>
                <p className="text-white/60">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PRICING ==================== */}
      <section className="bg-[#f5f0e6] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp}>
              <Badge className="bg-[#c04d2d] text-white mb-4">
                Investment Plans
              </Badge>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a2f25] mb-4">
              Choose Your Growth Path
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-[#1a2f25]/60 max-w-2xl mx-auto">
              Flexible plans designed for every investor, from beginners to professionals.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
              >
                <Card className={`relative overflow-hidden h-full ${
                  plan.popular 
                    ? 'bg-[#1a2f25] border-[#c4f542] border-2 shadow-xl shadow-[#c4f542]/10' 
                    : 'bg-white border-[#1a2f25]/10'
                }`}>
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-[#c4f542] text-[#1a2f25] text-xs font-bold px-3 py-1 rounded-bl-lg">
                      MOST POPULAR
                    </div>
                  )}
                  <CardContent className="p-8">
                    <h3 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-[#1a2f25]'}`}>
                      {plan.name}
                    </h3>
                    <div className={`text-4xl font-bold mb-1 ${plan.popular ? 'text-[#c4f542]' : 'text-[#1a2f25]'}`}>
                      {plan.roi}
                    </div>
                    <p className={`text-sm mb-6 ${plan.popular ? 'text-white/60' : 'text-[#1a2f25]/60'}`}>
                      Monthly Returns
                    </p>
                    
                    <div className="space-y-3 mb-8">
                      {[
                        `Minimum: ${plan.min}`,
                        `Duration: ${plan.duration}`,
                        'Daily profits',
                        'Instant withdrawal',
                        '24/7 support',
                      ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Check className={`h-5 w-5 ${plan.popular ? 'text-[#c4f542]' : 'text-green-500'}`} />
                          <span className={`text-sm ${plan.popular ? 'text-white/80' : 'text-[#1a2f25]/80'}`}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Link href="/register" className="block">
                      <Button className={`w-full rounded-full h-12 font-semibold ${
                        plan.popular
                          ? 'bg-[#c4f542] hover:bg-[#d4ff5c] text-[#1a2f25]'
                          : 'bg-[#1a2f25] hover:bg-[#2a4a3a] text-white'
                      }`}>
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS MARQUEE ==================== */}
      <section className="bg-[#1a2f25] py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div variants={fadeInUp}>
              <Badge className="bg-[#c4f542]/10 text-[#c4f542] border-[#c4f542]/20 mb-4">
                Testimonials
              </Badge>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Loved by Thousands
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-white/60 max-w-2xl mx-auto">
              Real stories from real investors who've transformed their financial future.
            </motion.p>
          </motion.div>
        </div>

        <div className="relative">
          <Marquee pauseOnHover className="[--duration:40s]">
            {firstRow.map((testimonial, idx) => (
              <Card key={idx} className="bg-white/5 border-white/10 backdrop-blur w-[350px] mx-4">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#f9d423] text-[#f9d423]" />
                    ))}
                  </div>
                  <p className="text-white/80 mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={testimonial.avatar} />
                      <AvatarFallback className="bg-[#c4f542] text-[#1a2f25]">
                        {testimonial.name[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                      <p className="text-white/50 text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </Marquee>

          <Marquee reverse pauseOnHover className="[--duration:40s] mt-4">
            {secondRow.map((testimonial, idx) => (
              <Card key={idx} className="bg-white/5 border-white/10 backdrop-blur w-[350px] mx-4">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#f9d423] text-[#f9d423]" />
                    ))}
                  </div>
                  <p className="text-white/80 mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={testimonial.avatar} />
                      <AvatarFallback className="bg-[#c4f542] text-[#1a2f25]">
                        {testimonial.name[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                      <p className="text-white/50 text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </Marquee>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="bg-gradient-to-br from-[#c04d2d] to-[#a03d1d] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start Your Investment Journey?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Join thousands of investors who trust Quantroy. Start with as little as $500 and watch your wealth grow.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button size="lg" className="bg-white hover:bg-white/90 text-[#c04d2d] font-bold rounded-full px-10 h-14 text-lg shadow-xl w-full sm:w-auto">
                  Start Investing Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full px-10 h-14 text-lg w-full sm:w-auto">
                  Contact Sales
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="bg-[#1a2f25] pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-2.5 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#c4f542] to-[#a8e026] flex items-center justify-center">
                  <span className="text-[#1a2f25] font-bold text-lg">Q</span>
                </div>
                <span className="text-white font-semibold text-xl">Quantroy</span>
              </Link>
              <p className="text-white/50 leading-relaxed mb-6">
                AI-powered crypto investment platform helping you build wealth safely and consistently.
              </p>
              <div className="flex gap-4">
                {['X', 'LinkedIn', 'Instagram'].map((social) => (
                  <div key={social} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-[#c4f542] hover:text-[#1a2f25] transition-all cursor-pointer">
                    <span className="text-xs font-bold">{social[0]}</span>
                  </div>
                ))}
              </div>
            </div>

            {[
              { title: 'Product', links: ['Features', 'Pricing', 'Security', 'Roadmap'] },
              { title: 'Company', links: ['About', 'Blog', 'Careers', 'Press'] },
              { title: 'Legal', links: ['Privacy', 'Terms', 'Compliance', 'Cookies'] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="text-white font-semibold mb-4">{col.title}</h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <Link href="#" className="text-white/50 hover:text-[#c4f542] transition-colors text-sm">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Separator className="bg-white/10 mb-8" />

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">© 2026 Quantroy. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/terms" className="text-white/40 hover:text-white/60 text-sm">Terms</Link>
              <Link href="/privacy" className="text-white/40 hover:text-white/60 text-sm">Privacy</Link>
              <Link href="/cookies" className="text-white/40 hover:text-white/60 text-sm">Cookies</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
