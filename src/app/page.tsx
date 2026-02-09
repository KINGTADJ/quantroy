'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

// Animated counter component like AngelList
function AnimatedCounter({ target, prefix = '', suffix = '' }: { target: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [target]);
  
  return (
    <span className="tabular-nums">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

// Product data
const products = [
  {
    title: 'Investment Strategies',
    description: 'AI-powered quantitative strategies tailored to your risk appetite and investment goals.',
    image: '/images/hero-family.png',
    href: '/strategies',
  },
  {
    title: 'Portfolio Management',
    description: 'Diversified crypto portfolios managed by advanced algorithms for optimal returns.',
    image: '/images/lifestyle-finance.png',
    href: '/strategies',
  },
  {
    title: 'Secure Custody',
    description: 'Bank-grade security with multi-signature wallets and cold storage protection.',
    image: '/images/team-ceo.png',
    href: '/strategies',
  },
  {
    title: 'AI Guidance',
    description: 'Get personalized investment recommendations powered by cutting-edge AI technology.',
    image: '/images/team-cio.png',
    href: '/strategies',
  },
];

// Testimonials
const testimonials = [
  {
    quote: '...the platform made it incredibly easy to start investing. Within weeks, I was seeing consistent returns that exceeded my expectations.',
    name: 'James Okoro',
    role: 'Entrepreneur',
  },
  {
    quote: '...I was skeptical at first, but Quantroy proved me wrong. The transparency and security gave me confidence to invest more.',
    name: 'Chioma Eze',
    role: 'Business Owner',
  },
  {
    quote: '...as someone in finance, I appreciate the professionalism. This is exactly how crypto investing should be done.',
    name: 'Emmanuel Asante',
    role: 'Financial Analyst',
  },
];

// Resources/Articles
const articles = [
  {
    title: 'The Ultimate Guide to Crypto Investing in 2026',
    category: 'Guide',
    date: 'Feb 8, 2026',
    readTime: '5 min read',
    image: '/images/testimonial-1.png',
    href: '/blog',
  },
  {
    title: 'How AI is Revolutionizing Investment Strategies',
    category: 'Insights',
    date: 'Feb 5, 2026',
    readTime: '4 min read',
    image: '/images/testimonial-2.png',
    href: '/blog',
  },
  {
    title: 'Security Best Practices for Crypto Portfolios',
    category: 'Security',
    date: 'Feb 1, 2026',
    readTime: '6 min read',
    image: '/images/testimonial-3.png',
    href: '/blog',
  },
  {
    title: 'Building Wealth Through Smart Diversification',
    category: 'Strategy',
    date: 'Jan 28, 2026',
    readTime: '8 min read',
    image: '/images/team-compliance.png',
    href: '/blog',
  },
];

// Partners
const partners = ['Bloomberg', 'Reuters', 'Forbes', 'CoinDesk', 'TechCrunch'];

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* ==================== HEADER ==================== */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6">
          <nav className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#1a2f25] flex items-center justify-center">
                <span className="text-[#c4f542] font-bold text-sm">Q</span>
              </div>
              <span className="text-[#1a2f25] font-semibold text-lg">Quantroy</span>
            </Link>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-1">
              {[
                { label: 'Products', href: '/strategies', hasDropdown: true },
                { label: 'Solutions', href: '/about', hasDropdown: true },
                { label: 'Pricing', href: '/pricing', hasDropdown: false },
                { label: 'Resources', href: '/blog', hasDropdown: true },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-[15px] text-gray-600 hover:text-[#1a2f25] transition-colors"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <Link href="/login" className="text-[15px] text-gray-600 hover:text-[#1a2f25]">
                Sign in
              </Link>
              <Link
                href="/register"
                className="bg-[#1a2f25] text-white px-5 py-2.5 rounded-lg text-[15px] font-medium hover:bg-[#2a4a3a] transition-colors"
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* ==================== HERO ==================== */}
      <section className="pt-16 pb-24">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* Announcement Banner */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#1a2f25] text-sm mb-12 hover:opacity-70 transition-opacity"
          >
            <span className="text-[#c4f542]">New</span>
            <span>Explore our 2026 Investment Guide</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          {/* Hero Content */}
          <div className="max-w-4xl">
            <h1 className="text-[clamp(48px,8vw,88px)] font-medium text-[#1a2f25] leading-[1.05] tracking-[-0.03em] mb-6">
              Built to grow
              <br />
              <span className="text-[#c4f542]">your wealth</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-xl">
              Quantroy provides investors with AI-powered tools to build and manage their crypto portfolios.
            </p>
            <Link
              href="/register"
              className="inline-flex items-center gap-2 bg-[#1a2f25] text-white px-6 py-3.5 rounded-lg text-[15px] font-medium hover:bg-[#2a4a3a] transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== PRODUCT CARDS ==================== */}
      <section className="pb-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, idx) => (
              <Link
                key={idx}
                href={product.href}
                className="group block"
              >
                <div className="mb-4">
                  <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
                    {product.title}
                  </h3>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <p className="text-[15px] text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PARTNERS ==================== */}
      <section className="py-16 border-y border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="text-center text-2xl md:text-3xl text-[#1a2f25] mb-10">
            Better together. Quantroy partners with industry leaders.
          </h2>
          <div className="flex items-center justify-center gap-12 flex-wrap opacity-60">
            {partners.map((partner) => (
              <span key={partner} className="text-[#1a2f25] font-semibold text-lg">
                {partner}
              </span>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#1a2f25] text-sm hover:opacity-70 transition-opacity"
            >
              Learn about our partnerships
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== STATS SECTION (DARK) ==================== */}
      <section className="bg-[#1a2f25] py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <div>
              <p className="text-[#c4f542] text-sm font-medium uppercase tracking-wider mb-4">
                By the numbers
              </p>
              <h2 className="text-4xl md:text-5xl text-white font-medium leading-tight mb-6">
                Fueling financial
                <br />freedom
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-md">
                With thousands of successful investors on our platform, Quantroy is at the heart of modern crypto investing. This trust gives us the insight to build solutions that truly work.
              </p>
              
              {/* Report Card */}
              <Link
                href="/blog"
                className="block max-w-sm bg-[#0f1f18] rounded-xl overflow-hidden border border-white/10 hover:border-[#c4f542]/30 transition-colors"
              >
                <div className="aspect-[16/9] bg-gradient-to-br from-[#c4f542]/20 to-transparent" />
                <div className="p-4">
                  <p className="text-white text-sm font-medium mb-1">
                    The State of Crypto Investing 2026
                  </p>
                  <span className="text-[#c4f542] text-xs font-medium">Report</span>
                </div>
              </Link>
            </div>

            {/* Right Stats */}
            <div>
              {/* Big Number */}
              <div className="mb-12">
                <p className="text-[clamp(64px,12vw,120px)] text-white font-medium leading-none tracking-tight">
                  $<AnimatedCounter target={50} />M+
                </p>
                <p className="text-gray-500 text-sm mt-2">Assets on platform</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-4xl md:text-5xl text-white font-medium">
                    <AnimatedCounter target={10} />k+
                  </p>
                  <p className="text-gray-500 text-sm mt-1">Active investors</p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl text-white font-medium">
                    <AnimatedCounter target={500} />+
                  </p>
                  <p className="text-gray-500 text-sm mt-1">Investment strategies</p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl text-white font-medium">
                    <AnimatedCounter target={99} suffix="%" />
                  </p>
                  <p className="text-gray-500 text-sm mt-1">Platform uptime</p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl text-white font-medium">
                    $<AnimatedCounter target={125} />M
                  </p>
                  <p className="text-gray-500 text-sm mt-1">Profits distributed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-[1400px] mx-auto px-6">
          <p className="text-[#c4f542] text-sm font-medium uppercase tracking-wider mb-8">
            Testimonials
          </p>

          <div className="max-w-3xl">
            <blockquote className="text-3xl md:text-4xl lg:text-5xl text-[#1a2f25] font-medium leading-tight mb-8">
              "{testimonials[currentTestimonial].quote}"
            </blockquote>
            <p className="text-gray-600">
              <span className="font-medium text-[#1a2f25]">{testimonials[currentTestimonial].name}</span>
              , {testimonials[currentTestimonial].role}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-4 mt-12">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:border-[#1a2f25] transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-[#1a2f25]" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:border-[#1a2f25] transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-[#1a2f25]" />
            </button>
            {/* Dots */}
            <div className="flex gap-2 ml-4">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    idx === currentTestimonial ? 'bg-[#1a2f25]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== RESOURCES ==================== */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[#c4f542] text-sm font-medium uppercase tracking-wider mb-2">
                Resources
              </p>
              <h2 className="text-3xl md:text-4xl text-[#1a2f25] font-medium">
                Latest articles
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {articles.map((article, idx) => (
              <Link key={idx} href={article.href} className="group block">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 mb-4">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="text-[#c4f542] text-xs font-medium">{article.category}</span>
                <h3 className="text-[#1a2f25] font-medium mt-2 mb-2 group-hover:text-[#c4f542] transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-sm">
                  {article.date} — {article.readTime}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* Top Section */}
          <div className="grid lg:grid-cols-5 gap-12 mb-16">
            {/* Logo & CTA */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-[#1a2f25] flex items-center justify-center">
                  <span className="text-[#c4f542] font-bold text-sm">Q</span>
                </div>
                <span className="text-[#1a2f25] font-semibold text-lg">Quantroy</span>
              </Link>
              <div className="flex flex-col gap-3">
                <Link
                  href="/register"
                  className="bg-[#1a2f25] text-white px-4 py-2.5 rounded-lg text-sm font-medium text-center hover:bg-[#2a4a3a] transition-colors"
                >
                  Get Started
                </Link>
                <Link
                  href="/login"
                  className="border border-gray-300 text-[#1a2f25] px-4 py-2.5 rounded-lg text-sm font-medium text-center hover:border-[#1a2f25] transition-colors"
                >
                  Sign in
                </Link>
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-[#1a2f25] font-medium mb-4">Products</h4>
              <ul className="space-y-3">
                {['Investment Strategies', 'Portfolio Management', 'Secure Custody', 'AI Guidance', 'Referral Program'].map((item) => (
                  <li key={item}>
                    <Link href="/strategies" className="text-gray-600 text-sm hover:text-[#1a2f25] transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing */}
            <div>
              <h4 className="text-[#1a2f25] font-medium mb-4">Pricing + Returns</h4>
              <ul className="space-y-3">
                {['Pricing Plans', 'ROI Calculator', 'Performance Data'].map((item) => (
                  <li key={item}>
                    <Link href="/pricing" className="text-gray-600 text-sm hover:text-[#1a2f25] transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-[#1a2f25] font-medium mb-4">Resources</h4>
              <ul className="space-y-3">
                {['Blog', 'Help Center', 'Education', 'Data Center'].map((item) => (
                  <li key={item}>
                    <Link href="/blog" className="text-gray-600 text-sm hover:text-[#1a2f25] transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-[#1a2f25] font-medium mb-4">Company</h4>
              <ul className="space-y-3">
                {['About Us', 'Careers', 'Contact', 'Press'].map((item) => (
                  <li key={item}>
                    <Link href="/about" className="text-gray-600 text-sm hover:text-[#1a2f25] transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-100">
            <div className="flex items-center gap-6">
              <Link href="/terms" className="text-gray-500 text-sm hover:text-[#1a2f25]">Terms</Link>
              <Link href="/privacy" className="text-gray-500 text-sm hover:text-[#1a2f25]">Privacy</Link>
              <Link href="/disclosures" className="text-gray-500 text-sm hover:text-[#1a2f25]">Disclosures</Link>
              <span className="text-gray-400 text-sm">© 2026 Quantroy Inc.</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-gray-400 hover:text-[#1a2f25]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#1a2f25]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
