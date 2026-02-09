'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  LayoutDashboard, Wallet, TrendingUp, Users, Settings, 
  LogOut, Bell, User, ChevronDown, Bot, FileText
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { useAuthStore } from '@/store/auth';

const sidebarLinks = [
  { href: '/dashboard', icon: LayoutDashboard, label: 'Overview' },
  { href: '/dashboard/invest', icon: TrendingUp, label: 'Invest' },
  { href: '/dashboard/portfolio', icon: Wallet, label: 'Portfolio' },
  { href: '/dashboard/payouts', icon: FileText, label: 'Payouts' },
  { href: '/dashboard/referrals', icon: Users, label: 'Referrals' },
  { href: '/dashboard/kyc', icon: User, label: 'Verification' },
  { href: '/dashboard/ai', icon: Bot, label: 'AI Assistant' },
  { href: '/dashboard/settings', icon: Settings, label: 'Settings' },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, profile, signOut, isInitialized } = useAuthStore();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showUserMenu, setShowUserMenu] = useState(false);

  // Redirect if not authenticated
  useEffect(() => {
    if (isInitialized && !user) {
      router.push('/login');
    }
  }, [isInitialized, user, router]);

  const handleLogout = async () => {
    await signOut();
    router.push('/login');
  };

  const displayName = profile?.first_name 
    ? `${profile.first_name} ${profile.last_name || ''}`.trim()
    : user?.email?.split('@')[0] || 'User';

  const initials = profile?.first_name && profile?.last_name
    ? `${profile.first_name[0]}${profile.last_name[0]}`
    : displayName[0]?.toUpperCase() || 'U';

  if (!isInitialized || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0A0D14]">
        <div className="w-8 h-8 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a1612] flex">
      {/* Sidebar */}
      <aside className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-[#061510] border-r border-emerald-900/30 transition-all duration-300 flex flex-col`}>
        {/* Logo */}
        <div className="p-4 border-b border-emerald-900/30">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-white font-bold text-xl">Q</span>
            </div>
            {isSidebarOpen && <span className="text-xl font-bold text-white">Quantroy</span>}
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {sidebarLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                      isActive 
                        ? 'bg-emerald-900/30 text-emerald-400' 
                        : 'text-gray-400 hover:text-white hover:bg-emerald-900/20'
                    }`}
                  >
                    <link.icon size={20} />
                    {isSidebarOpen && <span>{link.label}</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-emerald-900/30">
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-900/20 transition"
          >
            <LogOut size={20} />
            {isSidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="h-16 bg-[#061510] border-b border-emerald-900/30 flex items-center justify-between px-6">
          <div>
            <h1 className="text-white font-semibold">Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            {/* KYC Status Badge */}
            {profile?.kyc_status === 'not_started' && (
              <Link 
                href="/dashboard/kyc"
                className="px-3 py-1 rounded-full bg-amber-900/30 text-amber-400 text-xs hover:bg-amber-900/50 transition"
              >
                Complete KYC
              </Link>
            )}
            {profile?.kyc_status === 'pending' && (
              <span className="px-3 py-1 rounded-full bg-blue-900/30 text-blue-400 text-xs">
                KYC Pending
              </span>
            )}
            {profile?.kyc_status === 'approved' && (
              <span className="px-3 py-1 rounded-full bg-emerald-900/30 text-emerald-400 text-xs">
                Verified ✓
              </span>
            )}

            {/* Notifications */}
            <button className="relative p-2 text-gray-400 hover:text-white transition">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-emerald-500 rounded-full" />
            </button>
            
            {/* User Menu */}
            <div 
              className="relative"
              onClick={() => setShowUserMenu(!showUserMenu)}
            >
              <div className="flex items-center space-x-3 px-3 py-2 rounded-lg bg-emerald-900/20 cursor-pointer hover:bg-emerald-900/30 transition">
                <div className="w-8 h-8 rounded-full bg-emerald-700 flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">{initials}</span>
                </div>
                <span className="text-white text-sm">{displayName}</span>
                <ChevronDown size={16} className="text-gray-400" />
              </div>

              {/* Dropdown Menu */}
              {showUserMenu && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-[#061510] border border-emerald-900/30 rounded-lg shadow-xl z-50">
                  <Link 
                    href="/dashboard/settings" 
                    className="block px-4 py-3 text-gray-400 hover:text-white hover:bg-emerald-900/20 transition"
                  >
                    Settings
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-3 text-red-400 hover:bg-red-900/20 transition"
                  >
                    Logout
                  </button>
                </div>
              )}
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
