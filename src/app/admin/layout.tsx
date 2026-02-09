'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, Users, Wallet, FileText, 
  Settings, LogOut, Shield, TrendingUp, Bell
} from 'lucide-react';

const adminLinks = [
  { href: '/admin', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/admin/users', icon: Users, label: 'Users' },
  { href: '/admin/investments', icon: TrendingUp, label: 'Investments' },
  { href: '/admin/payouts', icon: Wallet, label: 'Payouts' },
  { href: '/admin/kyc', icon: FileText, label: 'KYC Reviews' },
  { href: '/admin/settings', icon: Settings, label: 'Settings' },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#0a1612] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#061510] border-r border-red-900/30 flex flex-col">
        {/* Logo */}
        <div className="p-4 border-b border-red-900/30">
          <Link href="/admin" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-red-600 flex items-center justify-center">
              <Shield size={20} className="text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-white">Quantroy</span>
              <span className="block text-xs text-red-400">Admin Panel</span>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {adminLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                      isActive 
                        ? 'bg-red-900/30 text-red-400' 
                        : 'text-gray-400 hover:text-white hover:bg-red-900/20'
                    }`}
                  >
                    <link.icon size={20} />
                    <span>{link.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Back to Main */}
        <div className="p-4 border-t border-red-900/30 space-y-2">
          <Link
            href="/dashboard"
            className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-emerald-900/20 transition"
          >
            <LayoutDashboard size={20} />
            <span>User Dashboard</span>
          </Link>
          <Link
            href="/login"
            className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-900/20 transition"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="h-16 bg-[#061510] border-b border-red-900/30 flex items-center justify-between px-6">
          <div>
            <h1 className="text-white font-semibold">Admin Panel</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-400 hover:text-white transition">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <div className="flex items-center space-x-3 px-3 py-2 rounded-lg bg-red-900/20">
              <div className="w-8 h-8 rounded-full bg-red-700 flex items-center justify-center">
                <Shield size={16} className="text-white" />
              </div>
              <span className="text-white text-sm">Admin</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
