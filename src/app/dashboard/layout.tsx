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
      <div className="min-h-screen flex items-center justify-center bg-[#1a2f25]">
        <div className="w-8 h-8 border-2 border-[#c4f542] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1a2f25] flex">
      {/* Sidebar */}
      <aside className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-[#152a22] border-r border-white/5 transition-all duration-300 flex flex-col`}>
        {/* Logo */}
        <div className="p-4 border-b border-white/5">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-xl bg-[#c4f542] flex items-center justify-center">
              <span className="text-[#1a2f25] font-bold text-xl">Q</span>
            </div>
            {isSidebarOpen && <span className="text-xl font-bold text-white">Quantroy</span>}
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-1">
            {sidebarLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition ${
                      isActive 
                        ? 'bg-[#c4f542]/10 text-[#c4f542]' 
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <link.icon size={20} />
                    {isSidebarOpen && <span className="font-medium">{link.label}</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-white/5">
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-white/60 hover:text-red-400 hover:bg-red-500/10 transition"
          >
            <LogOut size={20} />
            {isSidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="h-16 bg-[#152a22] border-b border-white/5 flex items-center justify-between px-6">
          <div>
            <h1 className="text-white font-semibold">Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            {/* KYC Status Badge */}
            {profile?.kyc_status === 'not_started' && (
              <Link 
                href="/dashboard/kyc"
                className="px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-medium hover:bg-amber-500/20 transition"
              >
                Complete KYC
              </Link>
            )}
            {profile?.kyc_status === 'pending' && (
              <span className="px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium">
                KYC Pending
              </span>
            )}
            {profile?.kyc_status === 'approved' && (
              <span className="px-3 py-1.5 rounded-full bg-[#c4f542]/10 text-[#c4f542] text-xs font-medium">
                Verified ✓
              </span>
            )}

            {/* Notifications */}
            <button className="relative p-2 text-white/60 hover:text-white transition">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#c4f542] rounded-full" />
            </button>
            
            {/* User Menu */}
            <div 
              className="relative"
              onClick={() => setShowUserMenu(!showUserMenu)}
            >
              <div className="flex items-center space-x-3 px-3 py-2 rounded-xl bg-white/5 cursor-pointer hover:bg-white/10 transition">
                <div className="w-8 h-8 rounded-full bg-[#c4f542] flex items-center justify-center">
                  <span className="text-[#1a2f25] text-sm font-semibold">{initials}</span>
                </div>
                <span className="text-white text-sm font-medium">{displayName}</span>
                <ChevronDown size={16} className="text-white/40" />
              </div>

              {/* Dropdown Menu */}
              {showUserMenu && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-[#152a22] border border-white/10 rounded-xl shadow-xl z-50 overflow-hidden">
                  <Link 
                    href="/dashboard/settings" 
                    className="block px-4 py-3 text-white/60 hover:text-white hover:bg-white/5 transition"
                  >
                    Settings
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-3 text-red-400 hover:bg-red-500/10 transition"
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
