'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { 
  TrendingUp, TrendingDown, Wallet, DollarSign, 
  ArrowUpRight, ArrowDownRight, Clock, CheckCircle,
  AlertCircle, ChevronRight, Loader2
} from 'lucide-react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';

interface Profile {
  id: string;
  email: string;
  first_name: string | null;
  last_name: string | null;
}

interface Investment {
  id: string;
  strategy: string;
  amount: number;
  currency: string;
  status: string;
  current_value: number | null;
  created_at: string;
  plan_id: string | null;
  daily_roi: number | null;
  duration_days: number | null;
}

interface Payout {
  id: string;
  amount: number;
  currency: string;
  status: string;
  created_at: string;
}

export default function DashboardPage() {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [investments, setInvestments] = useState<Investment[]>([]);
  const [payouts, setPayouts] = useState<Payout[]>([]);
  const [stats, setStats] = useState({
    totalValue: 0,
    totalInvested: 0,
    totalProfit: 0,
    pendingPayouts: 0,
  });

  const supabase = createClient();

  useEffect(() => {
    async function fetchData() {
      try {
        // Get current user
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;

        // Fetch profile
        const { data: profileData } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();
        
        if (profileData) setProfile(profileData);

        // Fetch investments
        const { data: investmentsData } = await supabase
          .from('investments')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false });
        
        if (investmentsData) {
          setInvestments(investmentsData);
          
          // Calculate stats
          const totalInvested = investmentsData.reduce((sum, inv) => sum + (inv.amount || 0), 0);
          const totalValue = investmentsData.reduce((sum, inv) => sum + (inv.current_value || inv.amount || 0), 0);
          const totalProfit = totalValue - totalInvested;
          
          setStats(prev => ({
            ...prev,
            totalInvested,
            totalValue,
            totalProfit,
          }));
        }

        // Fetch payouts
        const { data: payoutsData } = await supabase
          .from('payouts')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false });
        
        if (payoutsData) {
          setPayouts(payoutsData);
          
          // Calculate pending payouts
          const pendingPayouts = payoutsData
            .filter(p => p.status === 'pending' || p.status === 'processing')
            .reduce((sum, p) => sum + (p.amount || 0), 0);
          
          setStats(prev => ({
            ...prev,
            pendingPayouts,
          }));
        }
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [supabase]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const getStrategyName = (strategy: string) => {
    const names: Record<string, string> = {
      starter: 'Starter Strategy',
      growth: 'Growth Strategy',
      premium: 'Premium Strategy',
      elite: 'Elite Strategy',
      vip: 'VIP Strategy',
    };
    return names[strategy] || strategy;
  };

  const profitPercent = stats.totalInvested > 0 
    ? ((stats.totalProfit / stats.totalInvested) * 100).toFixed(1) 
    : '0';

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <Loader2 className="w-8 h-8 animate-spin text-emerald-400" />
      </div>
    );
  }

  const userName = profile?.first_name || profile?.email?.split('@')[0] || 'Investor';

  return (
    <div className="space-y-6">
      {/* Welcome Banner with 3D Assets */}
      <div className="card p-6 bg-gradient-to-r from-emerald-900/50 to-emerald-800/30 relative overflow-hidden">
        {/* 3D Asset - Right Side */}
        <div className="absolute right-32 top-1/2 -translate-y-1/2 w-32 h-32 hidden xl:block">
          <Image src="/images/3d-transparent/crypto-coins.png" alt="" fill className="object-contain drop-shadow-2xl" />
        </div>
        <div className="flex items-center justify-between relative z-10">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Welcome back, {userName}! 👋</h2>
            <p className="text-gray-400">Here's what's happening with your investments today.</p>
          </div>
          <Link href="/dashboard/invest" className="btn-primary flex items-center gap-2">
            New Investment <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-400 text-sm">Total Portfolio Value</span>
            <div className="w-10 h-10 rounded-lg bg-emerald-900/30 flex items-center justify-center">
              <Wallet size={20} className="text-emerald-400" />
            </div>
          </div>
          <div className="text-2xl font-bold text-white">{formatCurrency(stats.totalValue)}</div>
          <div className="flex items-center mt-2 text-emerald-400 text-sm">
            <TrendingUp size={16} className="mr-1" />
            +{profitPercent}% all time
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-400 text-sm">Total Profit</span>
            <div className="w-10 h-10 rounded-lg bg-emerald-900/30 flex items-center justify-center">
              <TrendingUp size={20} className="text-emerald-400" />
            </div>
          </div>
          <div className={`text-2xl font-bold ${stats.totalProfit >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
            {stats.totalProfit >= 0 ? '+' : ''}{formatCurrency(stats.totalProfit)}
          </div>
          <div className="flex items-center mt-2 text-gray-400 text-sm">
            <ArrowUpRight size={16} className="mr-1 text-emerald-400" />
            Lifetime earnings
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-400 text-sm">Total Invested</span>
            <div className="w-10 h-10 rounded-lg bg-emerald-900/30 flex items-center justify-center">
              <DollarSign size={20} className="text-emerald-400" />
            </div>
          </div>
          <div className="text-2xl font-bold text-white">{formatCurrency(stats.totalInvested)}</div>
          <div className="flex items-center mt-2 text-gray-400 text-sm">
            <Clock size={16} className="mr-1" />
            Active investments: {investments.filter(i => i.status === 'active').length}
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-400 text-sm">Pending Payouts</span>
            <div className="w-10 h-10 rounded-lg bg-amber-900/30 flex items-center justify-center">
              <Clock size={20} className="text-amber-400" />
            </div>
          </div>
          <div className="text-2xl font-bold text-amber-400">{formatCurrency(stats.pendingPayouts)}</div>
          <div className="flex items-center mt-2 text-gray-400 text-sm">
            <AlertCircle size={16} className="mr-1" />
            {payouts.filter(p => p.status === 'pending' || p.status === 'processing').length} pending
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Active Investments */}
        <div className="lg:col-span-2 card p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white">Active Investments</h3>
            <Link href="/dashboard/portfolio" className="text-emerald-400 text-sm hover:underline flex items-center">
              View All <ChevronRight size={16} />
            </Link>
          </div>
          
          {investments.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-400 mb-4">No investments yet. Start your first investment today!</p>
              <Link href="/dashboard/invest" className="btn-primary inline-flex items-center gap-2">
                Make Investment <ArrowUpRight size={18} />
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {investments.filter(inv => inv.status === 'active').slice(0, 3).map((inv) => {
                const profit = (inv.current_value || inv.amount) - inv.amount;
                const profitPct = ((profit / inv.amount) * 100).toFixed(1);
                
                return (
                  <div key={inv.id} className="p-4 rounded-lg bg-emerald-900/10 border border-emerald-900/30">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="text-white font-medium">{getStrategyName(inv.strategy)}</h4>
                        <p className="text-gray-400 text-sm">Started {formatDate(inv.created_at)}</p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-emerald-900/30 text-emerald-400 text-xs capitalize">
                        {inv.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <p className="text-gray-400 text-xs">Invested</p>
                        <p className="text-white font-medium">{formatCurrency(inv.amount)}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs">Current Value</p>
                        <p className="text-white font-medium">{formatCurrency(inv.current_value || inv.amount)}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs">Profit</p>
                        <p className={`font-medium ${profit >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                          {profit >= 0 ? '+' : ''}{formatCurrency(profit)} ({profit >= 0 ? '+' : ''}{profitPct}%)
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Recent Activity */}
        <div className="card p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white">Recent Activity</h3>
          </div>
          
          {investments.length === 0 && payouts.length === 0 ? (
            <p className="text-gray-400 text-center py-4">No activity yet</p>
          ) : (
            <div className="space-y-4">
              {/* Combine and sort investments and payouts */}
              {[
                ...investments.map(inv => ({
                  type: 'investment' as const,
                  amount: inv.amount,
                  date: inv.created_at,
                  status: inv.status,
                })),
                ...payouts.map(p => ({
                  type: 'payout' as const,
                  amount: p.amount,
                  date: p.created_at,
                  status: p.status,
                })),
              ]
                .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                .slice(0, 5)
                .map((activity, i) => (
                  <div key={i} className="flex items-center justify-between py-3 border-b border-emerald-900/30 last:border-0">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        activity.type === 'payout' ? 'bg-emerald-900/30' : 'bg-blue-900/30'
                      }`}>
                        {activity.type === 'payout' ? (
                          <ArrowDownRight size={16} className="text-emerald-400" />
                        ) : (
                          <ArrowUpRight size={16} className="text-blue-400" />
                        )}
                      </div>
                      <div>
                        <p className="text-white text-sm capitalize">{activity.type}</p>
                        <p className="text-gray-400 text-xs">{formatDate(activity.date)}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-medium ${activity.type === 'payout' ? 'text-emerald-400' : 'text-white'}`}>
                        {activity.type === 'payout' ? '+' : ''}{formatCurrency(activity.amount)}
                      </p>
                      <p className="text-xs text-gray-400 flex items-center justify-end">
                        <CheckCircle size={12} className="text-emerald-400 mr-1" />
                        {activity.status}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-4">
        <Link href="/dashboard/invest" className="card p-6 hover:border-emerald-700/50 transition group">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-white font-medium mb-1">Make Investment</h4>
              <p className="text-gray-400 text-sm">Start a new investment</p>
            </div>
            <ArrowUpRight size={24} className="text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
          </div>
        </Link>
        <Link href="/dashboard/referrals" className="card p-6 hover:border-emerald-700/50 transition group">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-white font-medium mb-1">Refer Friends</h4>
              <p className="text-gray-400 text-sm">Earn up to 6% commission</p>
            </div>
            <ArrowUpRight size={24} className="text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
          </div>
        </Link>
        <Link href="/dashboard/ai" className="card p-6 hover:border-emerald-700/50 transition group">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-white font-medium mb-1">AI Assistant</h4>
              <p className="text-gray-400 text-sm">Get personalized advice</p>
            </div>
            <ArrowUpRight size={24} className="text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
          </div>
        </Link>
      </div>
    </div>
  );
}
