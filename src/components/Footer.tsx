'use client';

import Link from 'next/link';
import { Twitter, Linkedin, Instagram, Facebook, Send, ArrowUpRight } from 'lucide-react';

const footerLinks = {
  mainService: [
    { name: 'Investment Strategies', href: '/strategies' },
    { name: 'Portfolio Management', href: '/strategies' },
    { name: 'Wealth Management', href: '/strategies' },
    { name: 'Securities Trading', href: '/strategies' },
  ],
  selfServices: [
    { name: 'Log in', href: '/login' },
    { name: 'Register', href: '/register' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Support', href: '/about' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/about' },
    { name: 'Affiliates', href: '/affiliates' },
    { name: 'Contact', href: '/about' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com/quantroy', label: 'Twitter' },
  { icon: Facebook, href: 'https://facebook.com/quantroy', label: 'Facebook' },
  { icon: Linkedin, href: 'https://linkedin.com/company/quantroy', label: 'LinkedIn' },
];

const waveWords = ['invest', 'grow', 'your', 'money', 'secure', 'future', 'wealth', 'freedom'];

export default function Footer() {
  return (
    <footer className="bg-[#1a2f25] text-white">
      {/* Animated Wave Text Banner */}
      <div className="overflow-hidden py-8 border-b border-white/10">
        <div className="wave-text">
          {[...waveWords, ...waveWords].map((word, i) => (
            <span key={i} className="inline-flex items-center">
              {word}
              <span className="mx-8 text-[#c4f542]">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#c4f542] flex items-center justify-center">
                <span className="text-[#1a2f25] font-bold text-2xl">Q</span>
              </div>
              <span className="text-white font-semibold text-2xl">Quantroy</span>
            </Link>
            <p className="text-white/60 mb-6 max-w-sm leading-relaxed">
              We are a leading crypto investment platform that helps build enduring legacies 
              that lead to sustainable wealth creation globally.
            </p>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-white/40 text-sm">Follow us:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-[#c4f542] transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={18} className="text-white/80" />
                </a>
              ))}
            </div>
          </div>

          {/* Main Service */}
          <div>
            <h4 className="text-white font-semibold mb-6">Main Service</h4>
            <ul className="space-y-3">
              {footerLinks.mainService.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-white/60 hover:text-[#c4f542] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Self Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Self Services</h4>
            <ul className="space-y-3">
              {footerLinks.selfServices.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-white/60 hover:text-[#c4f542] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-white/60 hover:text-[#c4f542] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Quantroy. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/terms" className="text-white/40 hover:text-white/60 text-sm">
                Terms and conditions
              </Link>
              <Link href="/privacy" className="text-white/40 hover:text-white/60 text-sm">
                Privacy policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
