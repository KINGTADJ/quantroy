'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, Shield, TrendingUp, Users, Wallet, Bot, Gift, Star, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

// Proper type definitions
interface Service {
  icon: typeof TrendingUp;
  title: string;
  description: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface Testimonial {
  name: string;
  role: string;
  text: string;
  image: string;
}

const services: Service[] = [
  {
    icon: TrendingUp,
    title: 'Investment Strategies',
    description: 'Professional quantitative strategies tailored to your risk appetite and investment goals.',
  },
  {
    icon: Wallet,
    title: 'Portfolio Management',
    description: 'Diversified crypto portfolios managed by AI-powered algorithms for optimal returns.',
  },
  {
    icon: Shield,
    title: 'Secure Custody',
    description: 'Bank-grade security with multi-signature wallets and cold storage protection.',
  },
  {
    icon: Bot,
    title: 'AI Guidance',
    description: 'Get personalized investment recommendations powered by advanced AI technology.',
  },
  {
    icon: Users,
    title: 'Real-time Tracking',
    description: 'Monitor your investments with transparent, real-time performance analytics.',
  },
  {
    icon: Gift,
    title: 'Referral Program',
    description: 'Earn up to 6% commission by referring friends and family to our platform.',
  },
];

const team: TeamMember[] = [
  { name: 'David Okonkwo', role: 'Chief Executive Officer', image: '/images/team-ceo.png' },
  { name: 'Amara Nwachukwu', role: 'Chief Investment Officer', image: '/images/team-cio.png' },
  { name: 'Michael Adeyemi', role: 'Head of Technology', image: '/images/team-cto.png' },
  { name: 'Grace Mensah', role: 'Head of Compliance', image: '/images/team-compliance.png' },
];

const testimonials: Testimonial[] = [
  {
    name: 'James Okoro',
    role: 'Entrepreneur',
    text: 'Quantroy has transformed how I invest. The returns have been consistent and the platform is incredibly easy to use.',
    image: '/images/testimonial-1.png',
  },
  {
    name: 'Chioma Eze',
    role: 'Business Owner',
    text: 'I was skeptical at first, but Quantroy proved me wrong. My portfolio has grown significantly in just 6 months.',
    image: '/images/testimonial-2.png',
  },
  {
    name: 'Emmanuel Asante',
    role: 'Financial Analyst',
    text: 'As someone in finance, I appreciate the transparency and professionalism. This is how crypto investing should be.',
    image: '/images/testimonial-3.png',
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* ==================== NAVIGATION ==================== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a2f25]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#c4f542] flex items-center justify-center">
                <span className="text-[#1a2f25] font-bold text-lg">Q</span>
              </div>
              <span className="text-white font-semibold text-xl">Quantroy</span>
            </Link>

            {/* Nav Links */}
            <div className="hidden lg:flex items-center gap-8">
              <Link href="/about" className="text-white/70 hover:text-white text-[15px] transition-colors">
                About us
              </Link>
              <Link href="/strategies" className="text-white/70 hover:text-white text-[15px] transition-colors">
                Product & solutions
              </Link>
              <Link href="/about" className="text-white/70 hover:text-white text-[15px] transition-colors">
                Insights
              </Link>
              <Link href="/about" className="text-white/70 hover:text-white text-[15px] transition-colors">
                Careers
              </Link>
              <Link href="/about" className="text-white/70 hover:text-white text-[15px] transition-colors">
                Contact us
              </Link>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <Link href="/login" className="hidden sm:block text-white/70 hover:text-white text-[15px]">
                Sign In
              </Link>
              <Link
                href="/register"
                className="flex items-center gap-2 border border-[#c4f542] text-[#c4f542] px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#c4f542] hover:text-[#1a2f25] transition-all"
              >
                <ArrowRight size={16} />
                Self services
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* ==================== HERO SECTION ==================== */}
      <section className="bg-[#1a2f25] pt-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 min-h-[calc(100vh-80px)] items-center gap-12 py-16 lg:py-0">
            {/* Left Content */}
            <div className="max-w-[540px]">
              <h1 className="font-serif text-[48px] lg:text-[58px] xl:text-[64px] text-white leading-[1.08] tracking-[-0.02em] mb-8">
                Secure your{' '}
                <span className="text-[#c4f542]">future</span>
                <br />
                with smart investments
              </h1>

              <p className="text-[17px] text-white/60 leading-[1.7] mb-10 max-w-[440px]">
                We proudly present an exhibition of works by artists who represent the zeitgeist
                of contemporary African artworks, carefully excerpted from the generously loaned
                private collection of Mr. Aigboje Aig-Imoukhuede.
              </p>

              <Link
                href="/register"
                className="inline-flex items-center gap-3 bg-[#c4f542] text-[#1a2f25] px-7 py-4 rounded-full font-semibold text-[15px] hover:bg-[#d4ff5c] transition-colors mb-16"
              >
                <ArrowRight size={18} />
                Learn More
              </Link>

              {/* Trust Logos */}
              <div>
                <p className="text-white/40 text-xs uppercase tracking-[0.15em] mb-5">As Seen On:</p>
                <div className="flex items-center gap-7 flex-wrap">
                  <span className="text-white/50 font-semibold">✪ Zillow</span>
                  <span className="text-white/50 font-black text-xs tracking-wider">HOUSINGWIRE</span>
                  <span className="text-white/50 font-semibold text-lg italic">Forbes</span>
                  <span className="text-white/50 font-bold">yahoo!</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-[20px] overflow-hidden aspect-[4/5] max-h-[600px]">
                <Image
                  src="/images/hero-family.png"
                  alt="Happy African family"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Yellow Ribbon */}
              <div className="absolute bottom-20 -left-6 right-[-20px] bg-[#f9d423] py-3.5 -rotate-[4deg] shadow-lg">
                <p className="text-[#1a2f25] font-black text-center text-[12px] tracking-[0.2em] uppercase">
                  Best Investment Platform 2026 ★ Best Investment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SERVICES SECTION ==================== */}
      <section className="bg-[#f5f0e6] py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-[#1a2f25]/50 text-xs uppercase tracking-[0.2em] mb-4">Products and services</p>
            <h2 className="font-serif text-[36px] lg:text-[44px] text-[#1a2f25] leading-[1.15] tracking-[-0.02em]">
              Providing transformational solutions for
              <br className="hidden lg:block" />
              your investment challenges
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-[#faf8f3] rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1a2f25] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon size={22} className="text-[#c4f542]" />
                </div>
                <h3 className="font-semibold text-[18px] text-[#1a2f25] mb-3">{service.title}</h3>
                <p className="text-[#1a2f25]/60 text-[15px] leading-relaxed mb-4">{service.description}</p>
                <Link
                  href="/strategies"
                  className="inline-flex items-center gap-2 text-[#1a2f25] text-[14px] font-medium hover:gap-3 transition-all"
                >
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== INDIVIDUAL SECTION ==================== */}
      <section className="bg-[#c04d2d] py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="max-w-[480px]">
              <h2 className="font-serif text-[36px] lg:text-[44px] text-white leading-[1.12] tracking-[-0.02em] mb-6">
                Products & services
                <br />
                for the individual
              </h2>
              <p className="text-white/80 text-[17px] leading-relaxed mb-8">
                Our products and services provide self-sufficiency, financial independence,
                creation and preservation of wealth for the future. Start your investment
                journey with as little as $500.
              </p>
              <Link
                href="/strategies"
                className="inline-flex items-center gap-3 bg-[#f9d423] text-[#1a2f25] px-7 py-4 rounded-full font-semibold text-[15px] hover:bg-[#ffe14d] transition-colors"
              >
                Learn More <ArrowRight size={18} />
              </Link>
            </div>

            {/* Right Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="/images/lifestyle-finance.png"
                alt="Couple reviewing finances"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== STATS SECTION ==================== */}
      <section className="bg-[#1a2f25] py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '$50M+', label: 'Assets Under Management' },
              { value: '10,000+', label: 'Active Investors' },
              { value: '99.9%', label: 'Platform Uptime' },
              { value: '24/7', label: 'Customer Support' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="font-serif text-[36px] lg:text-[44px] text-[#c4f542] mb-2">{stat.value}</div>
                <div className="text-white/50 text-[14px]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TEAM SECTION ==================== */}
      <section className="bg-[#faf8f3] py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-[#1a2f25]/50 text-xs uppercase tracking-[0.2em] mb-4">Our Leadership</p>
            <h2 className="font-serif text-[36px] lg:text-[44px] text-[#1a2f25] leading-[1.15] tracking-[-0.02em] mb-4">
              Meet our expert team
            </h2>
            <p className="text-[#1a2f25]/60 text-[17px] max-w-[600px] mx-auto">
              Our leadership team brings decades of experience in finance, technology, and crypto markets.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="text-center group">
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] mb-5">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a2f25]/60 to-transparent" />
                </div>
                <h3 className="font-semibold text-[17px] text-[#1a2f25] mb-1">{member.name}</h3>
                <p className="text-[#1a2f25]/50 text-[14px]">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS SECTION ==================== */}
      <section className="bg-[#f5f0e6] py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-[#1a2f25]/50 text-xs uppercase tracking-[0.2em] mb-4">Testimonials</p>
            <h2 className="font-serif text-[36px] lg:text-[44px] text-[#1a2f25] leading-[1.15] tracking-[-0.02em]">
              What our investors say
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="bg-white border-0 shadow-lg rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} className="fill-[#f9d423] text-[#f9d423]" />
                    ))}
                  </div>
                  <p className="text-[#1a2f25]/70 text-[15px] leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-semibold text-[15px] text-[#1a2f25]">{testimonial.name}</p>
                      <p className="text-[#1a2f25]/50 text-[13px]">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== APP SECTION ==================== */}
      <section className="bg-[#1a2f25] py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="max-w-[480px]">
              <p className="text-[#c4f542] text-xs uppercase tracking-[0.2em] mb-4">Mobile App</p>
              <h2 className="font-serif text-[36px] lg:text-[44px] text-white leading-[1.12] tracking-[-0.02em] mb-6">
                Are you looking to improve
                your personal finances and
                grow your money?
              </h2>
              <p className="text-white/60 text-[17px] leading-relaxed mb-8">
                Quantroy Conversations is your go-to platform that helps you learn in a light, fun,
                and easy way. Track your investments, get AI recommendations, and grow your wealth.
              </p>
              <Link
                href="/register"
                className="inline-flex items-center gap-3 bg-[#c4f542] text-[#1a2f25] px-7 py-4 rounded-full font-semibold text-[15px] hover:bg-[#d4ff5c] transition-colors"
              >
                Click Here to Start <ArrowRight size={18} />
              </Link>
            </div>

            {/* Phone Mockup */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-[280px] bg-[#111] rounded-[40px] p-3 shadow-2xl">
                <div className="bg-white rounded-[32px] overflow-hidden">
                  <div className="bg-[#1a2f25] p-4">
                    <span className="text-[#c4f542] text-xs font-medium">Finances</span>
                  </div>
                  <div className="bg-[#c04d2d] p-6">
                    <p className="text-white font-semibold mb-1">Introducing Quantroy</p>
                    <p className="text-white/70 text-sm">Helping you make sense of your money</p>
                  </div>
                  <div className="bg-[#c4f542] p-6">
                    <p className="text-[#1a2f25] font-semibold mb-1">Your Dashboard</p>
                    <p className="text-[#1a2f25]/70 text-sm">Track investments, view returns</p>
                  </div>
                  <div className="p-4 space-y-3">
                    {[1, 2].map((i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-gray-100 rounded-xl">
                        <div className="w-8 h-8 rounded-full bg-[#1a2f25]" />
                        <div className="flex-1">
                          <div className="h-2.5 bg-gray-300 rounded w-3/4 mb-1.5" />
                          <div className="h-2 bg-gray-200 rounded w-1/2" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="bg-[#faf8f3] py-24">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="font-serif text-[36px] lg:text-[44px] text-[#1a2f25] leading-[1.15] tracking-[-0.02em] mb-6">
            Ready to start your investment journey?
          </h2>
          <p className="text-[#1a2f25]/60 text-[17px] leading-relaxed mb-10 max-w-[560px] mx-auto">
            Join thousands of investors who trust Quantroy with their financial future.
            Start with as little as $500 and watch your wealth grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 bg-[#1a2f25] text-white px-8 py-4 rounded-full font-semibold text-[15px] hover:bg-[#234d3a] transition-colors"
            >
              Start Investing Today <ArrowRight size={18} />
            </Link>
            <Link
              href="/strategies"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#1a2f25] text-[#1a2f25] px-8 py-4 rounded-full font-semibold text-[15px] hover:bg-[#1a2f25] hover:text-white transition-colors"
            >
              View Strategies
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="bg-[#1a2f25]">
        {/* Animated Wave */}
        <div className="overflow-hidden py-8 border-b border-white/10">
          <div className="flex whitespace-nowrap animate-[scroll_20s_linear_infinite]">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex">
                {['invest', 'grow', 'your', 'money', 'secure', 'future', 'wealth', 'freedom'].map((word, idx) => (
                  <span key={idx} className="font-serif text-[40px] text-[#c4f542] px-5">
                    {word} <span className="text-[#c4f542]/50 mx-3">•</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Footer Content */}
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#c4f542] flex items-center justify-center">
                  <span className="text-[#1a2f25] font-bold text-xl">Q</span>
                </div>
                <span className="text-white font-semibold text-2xl">Quantroy</span>
              </Link>
              <p className="text-white/50 text-[15px] leading-relaxed max-w-[280px] mb-6">
                We are a leading crypto investment platform that helps build enduring legacies.
              </p>
              <div className="flex gap-3">
                {['X', 'f', 'in'].map((icon, idx) => (
                  <div
                    key={idx}
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-[#c4f542] hover:text-[#c4f542] transition-colors cursor-pointer"
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>

            {/* Links */}
            {[
              { title: 'Main Service', links: ['Investment Strategies', 'Portfolio Management', 'Wealth Management'] },
              { title: 'Self Services', links: ['Log in', 'Register', 'Dashboard'] },
              { title: 'Company', links: ['About Us', 'Careers', 'Contact'] },
            ].map((col, idx) => (
              <div key={idx}>
                <h4 className="text-white font-semibold mb-5">{col.title}</h4>
                <ul className="space-y-3">
                  {col.links.map((link, i) => (
                    <li key={i}>
                      <Link href="#" className="text-white/50 text-[14px] hover:text-[#c4f542] transition-colors">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-[13px]">© 2026 Quantroy. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/terms" className="text-white/40 text-[13px] hover:text-white/60">Terms</Link>
              <Link href="/privacy" className="text-white/40 text-[13px] hover:text-white/60">Privacy</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll animation keyframes */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </main>
  );
}
