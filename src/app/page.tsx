'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

// Slot machine style animated number
function SlotNumber({ value, suffix = '' }: { value: string; suffix?: string }) {
  return (
    <span className="inline-flex items-baseline">
      <span className="tabular-nums">{value}</span>
      <span>{suffix}</span>
    </span>
  );
}

// Data
const products = [
  {
    category: 'Investment Strategies',
    title: 'Investment Strategies',
    description: 'AI-powered quantitative strategies tailored to your risk appetite and investment goals — all from a single platform.',
    image: '/images/hero-family.png',
    href: '/strategies',
  },
  {
    category: 'Portfolio Management',
    title: 'Portfolio Management',
    description: 'Diversified crypto portfolios managed by advanced algorithms for optimal returns.',
    image: '/images/lifestyle-finance.png',
    href: '/strategies',
  },
  {
    category: 'Secure Custody',
    title: 'Secure Custody',
    description: 'Bank-grade security with multi-signature wallets and cold storage protection.',
    image: '/images/team-ceo.png',
    href: '/strategies',
  },
  {
    category: 'AI Guidance',
    title: 'AI Guidance',
    description: 'Get personalized investment recommendations powered by cutting-edge AI technology.',
    image: '/images/team-cio.png',
    href: '/strategies',
  },
];

const testimonials = [
  {
    quote: '...it was crucial to get moving quickly and Quantroy enabled a seamless launch.',
    name: 'James Okoro',
    role: 'GP, Okoro Ventures',
  },
  {
    quote: '...the platform made it incredibly easy to start investing. Within weeks, I was seeing consistent returns.',
    name: 'Chioma Eze',
    role: 'CEO, Eze Holdings',
  },
  {
    quote: '...as someone in finance, I appreciate the professionalism. This is exactly how crypto investing should be.',
    name: 'Emmanuel Asante',
    role: 'Partner, Asante Capital',
  },
];

const articles = [
  {
    title: 'Investor Relations Done Right: Lessons Pre-to-Post Close',
    category: 'Case Studies',
    date: 'Feb 8, 2026',
    readTime: '7 min read',
    image: '/images/testimonial-1.png',
  },
  {
    title: 'The 2026 Guide to Crypto Investing',
    category: 'Best Practices',
    date: 'Feb 5, 2026',
    readTime: '3 min read',
    image: '/images/testimonial-2.png',
  },
  {
    title: 'Are "Consensus" Investment Rounds Better?',
    category: 'Data',
    date: 'Feb 1, 2026',
    readTime: '9 min read',
    image: '/images/testimonial-3.png',
  },
  {
    title: 'Building Wealth Through Smart Diversification',
    category: 'Working at Quantroy',
    date: 'Jan 28, 2026',
    readTime: '17 min read',
    image: '/images/team-compliance.png',
  },
];

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      {/* ==================== HEADER ==================== */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <nav className="flex items-center justify-between h-[60px]">
            <Link href="/" className="text-[#1a2f25] font-semibold text-xl tracking-tight">
              Quantroy
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {['Products', 'Solutions'].map((item) => (
                <button
                  key={item}
                  className="flex items-center gap-1.5 px-4 py-2 text-[15px] text-[#1a2f25] hover:text-[#1a2f25]/70 transition-colors"
                >
                  {item}
                  <ChevronDown className="w-4 h-4 opacity-50" />
                </button>
              ))}
              <Link href="/pricing" className="px-4 py-2 text-[15px] text-[#1a2f25] hover:text-[#1a2f25]/70">
                Pricing
              </Link>
              <button className="flex items-center gap-1.5 px-4 py-2 text-[15px] text-[#1a2f25] hover:text-[#1a2f25]/70">
                Resources
                <ChevronDown className="w-4 h-4 opacity-50" />
              </button>
            </div>

            <div className="flex items-center gap-3">
              <Link href="/login" className="text-[15px] text-[#1a2f25] hover:text-[#1a2f25]/70">
                Sign in
              </Link>
              <Link
                href="/register"
                className="bg-[#1a2f25] text-white px-4 py-2 rounded-md text-[15px] font-medium hover:bg-[#1a2f25]/90 transition-colors"
              >
                Contact sales
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main>
        {/* ==================== HERO ==================== */}
        <section className="pt-12 pb-16 lg:pt-16 lg:pb-24">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            {/* Announcement */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#1a2f25] text-sm mb-8 group"
            >
              <span className="text-[#22c55e]">Explore the 2026 Guide to Crypto Investing</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            {/* Headline */}
            <h1 className="text-[clamp(3rem,8vw,5.5rem)] font-normal text-[#1a2f25] leading-[1.05] tracking-[-0.02em] max-w-4xl">
              Built to scale<br />
              <span className="text-[#22c55e]">all your wealth</span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg lg:text-xl text-[#1a2f25]/60 max-w-xl">
              Quantroy provides investors and innovators with the tools to grow.
            </p>

            {/* CTA */}
            <Link
              href="/register"
              className="inline-flex mt-8 bg-[#1a2f25] text-white px-5 py-3 rounded-md text-[15px] font-medium hover:bg-[#1a2f25]/90 transition-colors"
            >
              Contact sales
            </Link>
          </div>
        </section>

        {/* ==================== PRODUCT CARDS ==================== */}
        <section className="pb-16 lg:pb-24">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product, idx) => (
                <Link key={idx} href={product.href} className="group block">
                  {/* Category Label */}
                  <p className="text-xs font-medium text-[#1a2f25]/50 uppercase tracking-wider mb-3">
                    {product.category}
                  </p>
                  
                  {/* Image */}
                  <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 mb-4">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Description */}
                  <p className="text-[15px] text-[#1a2f25]/70 leading-relaxed">
                    {product.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== PARTNERS ==================== */}
        <section className="py-12 border-t border-gray-100">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <h2 className="text-center text-xl lg:text-2xl text-[#1a2f25] mb-8">
              Better together. Quantroy partners with industry leaders.
            </h2>
            
            {/* Partner logos */}
            <div className="flex items-center justify-center gap-8 lg:gap-12 flex-wrap opacity-40">
              {['APOPHIS', 'BOXER', 'NovaTech', 'CORNERSTONE', 'BULL CRYPTO'].map((partner) => (
                <span key={partner} className="text-[#1a2f25] font-semibold text-sm lg:text-base">
                  {partner}
                </span>
              ))}
            </div>

            {/* Link */}
            <div className="text-center mt-8">
              <Link
                href="/partnerships"
                className="inline-flex items-center gap-2 text-[#1a2f25] text-sm hover:text-[#22c55e] transition-colors group"
              >
                <span>Our premier partnership program assembles top professionals to deliver comprehensive</span>
                <span className="text-[#22c55e] inline-flex items-center gap-1">
                  expertise & support
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* ==================== STATS (DARK SECTION) ==================== */}
        <section className="bg-[#0f1d18] py-16 lg:py-24">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Left Side */}
              <div>
                <p className="text-[#22c55e] text-xs font-medium uppercase tracking-wider mb-4">
                  By the numbers
                </p>
                <h2 className="text-3xl lg:text-4xl text-white font-normal leading-tight mb-6">
                  Fueling<br />innovation
                </h2>
                <p className="text-[#ffffff]/50 text-base leading-relaxed mb-8 max-w-md">
                  With more than half of all top-tier deals run through the platform, Quantroy is at the heart of crypto investing. This exposure gives Quantroy the insight to identify gaps in the market and build the solutions that bridge them.
                </p>

                {/* Report Card */}
                <Link href="/blog" className="block max-w-[280px]">
                  <div className="aspect-[16/10] rounded-lg overflow-hidden bg-[#1a2f25] mb-3">
                    <div className="w-full h-full bg-gradient-to-br from-[#22c55e]/20 to-transparent flex items-center justify-center">
                      <span className="text-white/20 text-4xl font-bold">Q</span>
                    </div>
                  </div>
                  <p className="text-white text-sm mb-1">The State of Crypto Investing 2026</p>
                  <span className="text-[#22c55e] text-xs font-medium">Data</span>
                </Link>
              </div>

              {/* Right Side - Stats */}
              <div>
                {/* Big number */}
                <div className="mb-8">
                  <p className="text-[clamp(4rem,12vw,8rem)] text-white font-normal leading-none tracking-tight">
                    $<SlotNumber value="50" suffix="M+" />
                  </p>
                  <p className="text-white/40 text-sm mt-2">Assets on platform</p>
                </div>

                {/* Grid of stats */}
                <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                  <div>
                    <p className="text-3xl lg:text-4xl text-white font-normal">
                      <SlotNumber value="10" suffix="k+" />
                    </p>
                    <p className="text-white/40 text-sm mt-1">Funds and investors</p>
                  </div>
                  <div>
                    <p className="text-3xl lg:text-4xl text-white font-normal">
                      <SlotNumber value="500" suffix="+" />
                    </p>
                    <p className="text-white/40 text-sm mt-1">Active strategies</p>
                  </div>
                  <div>
                    <p className="text-3xl lg:text-4xl text-white font-normal">
                      <SlotNumber value="99" suffix="%" />
                    </p>
                    <p className="text-white/40 text-sm mt-1">Platform uptime</p>
                  </div>
                  <div>
                    <p className="text-3xl lg:text-4xl text-white font-normal">
                      $<SlotNumber value="125" suffix="M" />
                    </p>
                    <p className="text-white/40 text-sm mt-1">Raised by active investors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== TESTIMONIALS ==================== */}
        <section className="py-16 lg:py-24 bg-[#fafafa]">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <p className="text-[#22c55e] text-xs font-medium uppercase tracking-wider mb-8">
              Testimonials
            </p>

            <blockquote className="text-2xl lg:text-4xl xl:text-5xl text-[#1a2f25] font-normal leading-[1.2] max-w-3xl">
              "{testimonials[currentTestimonial].quote}"
            </blockquote>
            
            <p className="mt-6 text-[#1a2f25]/60 text-base">
              <span className="text-[#1a2f25] font-medium">{testimonials[currentTestimonial].name}</span>, {testimonials[currentTestimonial].role}
            </p>

            {/* Navigation */}
            <div className="flex items-center gap-3 mt-10">
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="w-10 h-10 rounded-full border border-[#1a2f25]/20 flex items-center justify-center hover:border-[#1a2f25]/40 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-[#1a2f25]" />
              </button>
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="w-10 h-10 rounded-full border border-[#1a2f25]/20 flex items-center justify-center hover:border-[#1a2f25]/40 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-[#1a2f25]" />
              </button>
              
              {/* Dots */}
              <div className="flex gap-2 ml-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTestimonial(idx)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      idx === currentTestimonial ? 'bg-[#1a2f25]' : 'bg-[#1a2f25]/20'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ==================== RESOURCES ==================== */}
        <section className="py-16 lg:py-24">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10">
              <div>
                <p className="text-[#22c55e] text-xs font-medium uppercase tracking-wider mb-2">
                  Resources
                </p>
                <h2 className="text-2xl lg:text-3xl text-[#1a2f25] font-normal">
                  Latest<br className="lg:hidden" /> articles
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {articles.map((article, idx) => (
                <Link key={idx} href="/blog" className="group block">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 mb-4">
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-[#22c55e] text-xs font-medium mb-2">{article.category}</p>
                  <h3 className="text-[#1a2f25] text-base font-medium leading-snug mb-2 group-hover:text-[#22c55e] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-[#1a2f25]/40 text-sm">
                    {article.date} — {article.readTime}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ==================== FOOTER ==================== */}
      <footer className="bg-white border-t border-gray-100 pt-12 pb-8">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
            {/* Logo & Buttons */}
            <div className="col-span-2 lg:col-span-1">
              <Link href="/" className="text-[#1a2f25] font-semibold text-xl tracking-tight">
                Quantroy
              </Link>
              <div className="flex flex-col gap-2 mt-6">
                <Link
                  href="/register"
                  className="bg-[#1a2f25] text-white px-4 py-2 rounded-md text-sm font-medium text-center hover:bg-[#1a2f25]/90 transition-colors"
                >
                  Contact sales
                </Link>
                <Link
                  href="/login"
                  className="border border-[#1a2f25]/20 text-[#1a2f25] px-4 py-2 rounded-md text-sm font-medium text-center hover:border-[#1a2f25]/40 transition-colors"
                >
                  Sign in
                </Link>
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-[#1a2f25] font-medium text-sm mb-4">Products</h4>
              <ul className="space-y-3">
                {['Investment Strategies', 'Portfolio Management', 'Secure Custody', 'AI Guidance'].map((item) => (
                  <li key={item}>
                    <Link href="/strategies" className="text-[#1a2f25]/60 text-sm hover:text-[#1a2f25] transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing */}
            <div>
              <h4 className="text-[#1a2f25] font-medium text-sm mb-4">Pricing + Returns</h4>
              <ul className="space-y-3">
                {['Pricing', 'ROI Calculator', 'Performance'].map((item) => (
                  <li key={item}>
                    <Link href="/pricing" className="text-[#1a2f25]/60 text-sm hover:text-[#1a2f25] transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-[#1a2f25] font-medium text-sm mb-4">Resources</h4>
              <ul className="space-y-3">
                {['Blog', 'Help Center', 'Education', 'Data Center'].map((item) => (
                  <li key={item}>
                    <Link href="/blog" className="text-[#1a2f25]/60 text-sm hover:text-[#1a2f25] transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-[#1a2f25] font-medium text-sm mb-4">Company</h4>
              <ul className="space-y-3">
                {['About Us', 'Careers', 'Engineering'].map((item) => (
                  <li key={item}>
                    <Link href="/about" className="text-[#1a2f25]/60 text-sm hover:text-[#1a2f25] transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 pt-8 border-t border-gray-100">
            <div className="flex flex-wrap items-center gap-4 lg:gap-6">
              <Link href="/terms" className="text-[#1a2f25]/40 text-sm hover:text-[#1a2f25]/60">Terms</Link>
              <Link href="/privacy" className="text-[#1a2f25]/40 text-sm hover:text-[#1a2f25]/60">Privacy</Link>
              <Link href="/disclosures" className="text-[#1a2f25]/40 text-sm hover:text-[#1a2f25]/60">Disclosures</Link>
              <span className="text-[#1a2f25]/30 text-sm">© 2026 Quantroy Inc.</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-[#1a2f25]/40 hover:text-[#1a2f25]/60">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </Link>
              <Link href="#" className="text-[#1a2f25]/40 hover:text-[#1a2f25]/60">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
