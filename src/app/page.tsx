'use client';

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  TrendingUp, Shield, Wallet, Bot, Users, Gift,
  ArrowRight, Star, CheckCircle, Lock, Clock,
  BarChart3, Zap, Award, Globe, ChevronRight,
  Smartphone, PieChart, LineChart, DollarSign
} from 'lucide-react';

const services = [
  { 
    icon: TrendingUp, 
    title: 'Investment Strategies', 
    desc: 'Professional quantitative strategies tailored to your risk appetite and investment goals.',
    link: '/strategies'
  },
  { 
    icon: PieChart, 
    title: 'Portfolio Management', 
    desc: 'Diversified crypto portfolios managed by AI-powered algorithms for optimal returns.',
    link: '/strategies'
  },
  { 
    icon: Shield, 
    title: 'Secure Custody', 
    desc: 'Bank-grade security with multi-signature wallets and cold storage protection.',
    link: '/about'
  },
  { 
    icon: Bot, 
    title: 'AI Guidance', 
    desc: 'Get personalized investment recommendations powered by advanced AI technology.',
    link: '/dashboard/ai'
  },
  { 
    icon: LineChart, 
    title: 'Real-time Tracking', 
    desc: 'Monitor your investments with transparent, real-time performance analytics.',
    link: '/dashboard'
  },
  { 
    icon: Gift, 
    title: 'Referral Program', 
    desc: 'Earn up to 6% commission by referring friends and family to our platform.',
    link: '/affiliates'
  },
];

const teamMembers = [
  {
    name: 'David Okonkwo',
    role: 'Chief Executive Officer',
    image: '/images/team-ceo.png',
  },
  {
    name: 'Amara Nwachukwu',
    role: 'Chief Investment Officer',
    image: '/images/team-cio.png',
  },
  {
    name: 'Michael Adeyemi',
    role: 'Head of Technology',
    image: '/images/team-cto.png',
  },
  {
    name: 'Grace Mensah',
    role: 'Head of Compliance',
    image: '/images/team-compliance.png',
  },
];

const testimonials = [
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

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Header />
      
      {/* Hero Section - Coronation Style EXACT */}
      <section className="bg-[#1a2f25] min-h-screen relative">
        {/* Content Container */}
        <div className="flex min-h-screen">
          {/* Left Side - Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-16 xl:px-24 py-32">
            <h1 className="text-[44px] md:text-[54px] lg:text-[64px] text-white leading-[1.05] mb-8 font-[family-name:var(--font-playfair)]">
              <span className="block">Secure your <span className="text-[#c4f542]">future</span></span>
              <span className="block">with smart investments</span>
            </h1>
            
            <p className="text-[17px] text-white/60 mb-12 leading-[1.7] max-w-[480px]">
              We proudly present an exhibition of works by artists who represent the zeitgeist 
              of contemporary African artworks, carefully excerpted from the generously loaned 
              private collection of Mr. Aigboje Aig-Imoukhuede.
            </p>
            
            <div className="mb-16">
              <Link 
                href="/register" 
                className="inline-flex items-center gap-3 bg-[#c4f542] text-[#1a2f25] pl-5 pr-7 py-4 rounded-full font-semibold text-[15px] hover:bg-[#d4ff5c] transition-all"
              >
                <ArrowRight size={18} /> Learn More
              </Link>
            </div>
            
            {/* Trust Logos */}
            <div>
              <p className="text-white/40 text-xs uppercase tracking-wider mb-5">As Seen On:</p>
              <div className="flex flex-wrap items-center gap-8">
                <span className="text-white/60 font-bold text-lg">✪ Zillow</span>
                <span className="text-white/60 font-black text-sm tracking-wide">HOUSINGWIRE</span>
                <span className="text-white/60 font-bold text-xl italic">Forbes</span>
                <span className="text-white/60 font-bold text-lg">yahoo!</span>
              </div>
            </div>
          </div>
          
          {/* Right Side - Image */}
          <div className="hidden lg:block w-1/2 relative">
            <div className="absolute inset-y-16 right-8 left-0">
              <div className="relative h-full rounded-[20px] overflow-visible">
                <div className="relative h-full rounded-[20px] overflow-hidden">
                  <Image
                    src="/images/hero-family.png"
                    alt="Happy African family investing for their future"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Yellow Ribbon - Curved style */}
                <div className="absolute bottom-16 -left-6 right-[-30px] overflow-hidden">
                  <div className="bg-[#f9d423] py-3 transform -rotate-[4deg] shadow-lg">
                    <p className="text-[#1a2f25] font-black text-center text-[13px] tracking-[0.15em] uppercase whitespace-nowrap">
                      BEST INVESTMENT PLATFORM 2026 &nbsp;&nbsp;★&nbsp;&nbsp; BEST INVESTMENT PLATFORM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Cream Background */}
      <section className="bg-cream py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#1a2f25]/60 text-sm uppercase tracking-wider mb-3">Products and services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2f25] font-[family-name:var(--font-playfair)]">
              Providing transformational solutions for<br />
              your investment challenges
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="service-card group cursor-pointer" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="icon group-hover:scale-110 transition-transform">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-[#1a2f25] mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.desc}</p>
                <Link href={service.link} className="inline-flex items-center text-[#1a2f25] font-medium hover:text-[#234d3a] transition-colors">
                  Learn more <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Investors Section - Terracotta */}
      <section className="bg-terracotta py-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-[family-name:var(--font-playfair)]">
                Products & services<br />
                for the individual
              </h2>
              <p className="text-white/80 mb-8 leading-relaxed max-w-lg">
                Our products and services provide self-sufficiency, financial independence, 
                creation and preservation of wealth for the future. Start your investment 
                journey with as little as $500.
              </p>
              <Link href="/strategies" className="btn-yellow">
                Learn More <ArrowRight size={18} />
              </Link>
            </div>
            
            {/* Lifestyle Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/lifestyle-finance.png"
                  alt="Couple reviewing their investments together"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Dark Green */}
      <section className="bg-dark-green py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '$50M+', label: 'Assets Under Management' },
              { value: '10,000+', label: 'Active Investors' },
              { value: '99.9%', label: 'Platform Uptime' },
              { value: '24/7', label: 'Customer Support' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#c4f542] mb-2 font-[family-name:var(--font-playfair)]">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section - Cream Light */}
      <section className="bg-cream-light py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#1a2f25]/60 text-sm uppercase tracking-wider mb-3">Our Leadership</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2f25] font-[family-name:var(--font-playfair)]">
              Meet our expert team
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Our leadership team brings decades of experience in finance, technology, and crypto markets.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <div key={i} className="text-center group">
                <div className="relative mb-6 rounded-2xl overflow-hidden aspect-[3/4]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1a2f25] to-transparent h-1/3" />
                </div>
                <h3 className="text-lg font-semibold text-[#1a2f25] mb-1">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Cream */}
      <section className="bg-cream py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#1a2f25]/60 text-sm uppercase tracking-wider mb-3">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2f25] font-[family-name:var(--font-playfair)]">
              What our investors say
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="card-light p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={18} className="fill-[#f9d423] text-[#f9d423]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1a2f25]">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Section - Dark Green with Phone Mockup */}
      <section className="bg-dark-green py-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#c4f542] text-sm uppercase tracking-wider mb-3">Mobile App</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-[family-name:var(--font-playfair)]">
                Are you looking to improve<br />
                your personal finances and<br />
                grow your money?
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed max-w-lg">
                Quantroy Conversations is your go-to platform that helps you learn in a light, fun, 
                and easy way. Track your investments, get AI recommendations, and grow your wealth.
              </p>
              <Link href="/register" className="btn-primary">
                Click Here to Start <ArrowRight size={18} />
              </Link>
            </div>
            
            {/* Phone Mockup */}
            <div className="flex justify-center">
              <div className="phone-mockup">
                <div className="phone-screen">
                  <div className="bg-[#1a2f25] p-4">
                    <p className="text-[#c4f542] text-xs font-medium">Finances</p>
                  </div>
                  <div className="bg-[#c04d2d] p-6">
                    <p className="text-white text-lg font-semibold mb-2">Introducing Quantroy</p>
                    <p className="text-white/80 text-sm">Helping you make sense of your money</p>
                  </div>
                  <div className="bg-[#c4f542] p-6">
                    <p className="text-[#1a2f25] text-lg font-semibold mb-2">Your Dashboard</p>
                    <p className="text-[#1a2f25]/70 text-sm">Track investments, view returns</p>
                  </div>
                  <div className="p-4 space-y-3">
                    {[1, 2].map((i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg">
                        <div className="w-8 h-8 rounded-full bg-[#1a2f25]" />
                        <div className="flex-1">
                          <div className="h-3 bg-gray-300 rounded w-3/4 mb-1" />
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

      {/* CTA Section - Cream Light */}
      <section className="bg-cream-light py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2f25] mb-6 font-[family-name:var(--font-playfair)]">
            Ready to start your investment journey?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of investors who trust Quantroy with their financial future. 
            Start with as little as $500 and watch your wealth grow.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/register" className="bg-[#1a2f25] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#234d3a] transition-colors inline-flex items-center gap-2">
              Start Investing Today <ArrowRight size={18} />
            </Link>
            <Link href="/strategies" className="border-2 border-[#1a2f25] text-[#1a2f25] px-8 py-4 rounded-full font-semibold hover:bg-[#1a2f25] hover:text-white transition-colors inline-flex items-center gap-2">
              View Strategies
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
