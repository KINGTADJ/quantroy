'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <header 
        className={`max-w-6xl mx-auto rounded-2xl border transition-all duration-300 ${
          scrolled 
            ? 'bg-[#0a1f1a]/90 backdrop-blur-xl border-emerald-800/50 shadow-lg shadow-black/20' 
            : 'bg-[#0a1f1a]/70 backdrop-blur-md border-emerald-900/30'
        }`}
      >
        <div className="px-4 sm:px-6">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">Q</span>
              </div>
              <span className="text-lg font-bold text-white">Quantroy</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              <Link href="/about" className="px-4 py-2 text-sm text-gray-300 hover:text-white transition rounded-lg hover:bg-white/5">
                About us
              </Link>
              <Link href="/strategies" className="px-4 py-2 text-sm text-gray-300 hover:text-white transition rounded-lg hover:bg-white/5">
                Products & solutions
              </Link>
              <Link href="/affiliates" className="px-4 py-2 text-sm text-gray-300 hover:text-white transition rounded-lg hover:bg-white/5">
                Affiliates
              </Link>
              <Link href="/contact" className="px-4 py-2 text-sm text-gray-300 hover:text-white transition rounded-lg hover:bg-white/5">
                Contact us
              </Link>
            </nav>

            {/* Right side */}
            <div className="hidden md:flex items-center space-x-3">
              <Link href="/dashboard" className="px-4 py-2 text-sm text-gray-300 hover:text-white transition flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Dashboard
              </Link>
              <Link 
                href="/login" 
                className="px-4 py-2 text-sm text-white bg-emerald-600 hover:bg-emerald-500 transition rounded-lg font-medium flex items-center gap-1"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-300 hover:text-white transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 border-t border-emerald-900/30">
              <div className="flex flex-col space-y-1">
                <Link href="/about" className="px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition">
                  About us
                </Link>
                <Link href="/strategies" className="px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition">
                  Products & solutions
                </Link>
                <Link href="/affiliates" className="px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition">
                  Affiliates
                </Link>
                <Link href="/contact" className="px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition">
                  Contact us
                </Link>
                <div className="pt-3 mt-2 border-t border-emerald-900/30 flex flex-col space-y-2">
                  <Link href="/dashboard" className="px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition">
                    Dashboard
                  </Link>
                  <Link href="/login" className="px-3 py-2 text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition text-center font-medium">
                    Sign In
                  </Link>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>
    </div>
  );
}
