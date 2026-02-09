'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-white font-bold text-lg">Q</span>
            </div>
            <span className="text-xl font-bold text-white">Quantroy</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/strategies" className="text-gray-300 hover:text-white transition">
              Strategies
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition">
              About
            </Link>
            <Link href="/affiliates" className="text-gray-300 hover:text-white transition">
              Affiliates
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-gray-300 hover:text-white transition">
                Sign In
              </Link>
              <Link href="/register" className="btn-primary text-sm">
                Get Started
              </Link>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-emerald-900/30">
            <div className="flex flex-col space-y-4">
              <Link href="/strategies" className="text-gray-300 hover:text-white transition">
                Strategies
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition">
                About
              </Link>
              <Link href="/affiliates" className="text-gray-300 hover:text-white transition">
                Affiliates
              </Link>
              <div className="pt-4 border-t border-emerald-900/30 flex flex-col space-y-3">
                <Link href="/login" className="text-gray-300 hover:text-white transition">
                  Sign In
                </Link>
                <Link href="/register" className="btn-primary text-center text-sm">
                  Get Started
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
