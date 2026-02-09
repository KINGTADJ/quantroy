'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, User, LogOut, ArrowRight } from 'lucide-react';
import { useAuthStore } from '@/store/auth';
import { createClient } from '@/lib/supabase/client';

const navLinks = [
  { name: 'About us', href: '/about' },
  { 
    name: 'Products & solutions', 
    href: '/strategies',
    dropdown: [
      { name: 'Investment Strategies', href: '/strategies' },
      { name: 'Affiliate Program', href: '/affiliates' },
    ]
  },
  { name: 'Insights', href: '/about' },
  { name: 'Careers', href: '/about' },
  { name: 'Contact us', href: '/about' },
];

export default function Header() {
  const pathname = usePathname();
  const { user, initialized, signOut } = useAuthStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    signOut();
  };

  // Determine if we're on a dark or light page
  const isDarkPage = pathname === '/' || pathname?.startsWith('/dashboard') || pathname?.startsWith('/admin');
  const headerBg = scrolled 
    ? 'bg-[#1a2f25]/95 backdrop-blur-md shadow-lg' 
    : isDarkPage 
      ? 'bg-transparent' 
      : 'bg-[#1a2f25]';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#c4f542] flex items-center justify-center">
              <span className="text-[#1a2f25] font-bold text-xl">Q</span>
            </div>
            <span className="text-white font-semibold text-xl tracking-tight">Quantroy</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div 
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setDropdownOpen(link.name)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <Link 
                  href={link.href}
                  className={`nav-link flex items-center gap-1 ${
                    pathname === link.href ? 'text-[#c4f542]' : ''
                  }`}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown size={14} className="opacity-60" />}
                </Link>
                
                {/* Dropdown */}
                {link.dropdown && dropdownOpen === link.name && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-[#1a2f25] border border-white/10 rounded-xl p-2 min-w-[200px] shadow-2xl">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors text-sm"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side - Auth */}
          <div className="hidden lg:flex items-center gap-4">
            {initialized && user ? (
              <>
                <Link 
                  href="/dashboard" 
                  className="text-white/80 hover:text-white flex items-center gap-2 font-medium"
                >
                  <User size={18} />
                  Dashboard
                </Link>
                <button
                  onClick={handleSignOut}
                  className="text-white/60 hover:text-white flex items-center gap-2"
                >
                  <LogOut size={18} />
                </button>
              </>
            ) : (
              <>
                <Link 
                  href="/login" 
                  className="text-white/80 hover:text-white font-medium"
                >
                  Sign In
                </Link>
                <Link 
                  href="/register" 
                  className="btn-secondary text-sm py-2 px-5"
                >
                  Self services <ArrowRight size={14} />
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1a2f25] border-t border-white/10">
          <div className="container mx-auto px-6 py-4">
            <nav className="space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    className="block py-3 text-white/80 hover:text-white font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="pl-4 space-y-1 border-l border-white/10 ml-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block py-2 text-white/60 hover:text-white text-sm"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            
            <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
              {initialized && user ? (
                <>
                  <Link
                    href="/dashboard"
                    className="block w-full text-center py-3 text-white font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      handleSignOut();
                      setMobileMenuOpen(false);
                    }}
                    className="block w-full text-center py-3 text-white/60"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="block w-full text-center py-3 text-white font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/register"
                    className="btn-primary w-full justify-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
