'use client';

import Link from 'next/link';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#061510] border-t border-emerald-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand - Full width on mobile */}
          <div className="col-span-2 md:col-span-1 space-y-3 sm:space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">Q</span>
              </div>
              <span className="text-xl font-bold text-white">Quantroy</span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm">
              Professional crypto investment platform with AI-powered guidance and monthly payouts.
            </p>
            <div className="flex items-center space-x-2 text-emerald-400 text-xs sm:text-sm">
              <Shield size={14} />
              <span>Licensed & Regulated</span>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-white font-semibold text-sm sm:text-base mb-3 sm:mb-4">Platform</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/strategies" className="text-gray-400 hover:text-white transition text-xs sm:text-sm">
                  Investment Strategies
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-gray-400 hover:text-white transition text-xs sm:text-sm">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/affiliates" className="text-gray-400 hover:text-white transition text-xs sm:text-sm">
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link href="/ai" className="text-gray-400 hover:text-white transition text-xs sm:text-sm">
                  AI Assistant
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white font-semibold text-sm sm:text-base mb-3 sm:mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition text-xs sm:text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition text-xs sm:text-sm">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-gray-400 hover:text-white transition text-xs sm:text-sm">
                  Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-semibold text-sm sm:text-base mb-3 sm:mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition text-xs sm:text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition text-xs sm:text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/risk" className="text-gray-400 hover:text-white transition text-xs sm:text-sm">
                  Risk Disclosure
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="text-gray-400 hover:text-white transition text-xs sm:text-sm">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-emerald-900/30 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-gray-500 text-xs sm:text-sm text-center md:text-left">
            © 2024 Quantroy. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs text-center md:text-right max-w-md">
            Quantroy is a crypto investment platform. All investments carry risk and past performance is not indicative of future results.
          </p>
        </div>
      </div>
    </footer>
  );
}
