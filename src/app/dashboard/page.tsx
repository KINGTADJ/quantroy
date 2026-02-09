'use client';

import { 
  TrendingUp, TrendingDown, Wallet, DollarSign, 
  ArrowUpRight, ArrowDownRight, Clock, CheckCircle,
  AlertCircle, ChevronRight
} from 'lucide-react';
import Link from 'next/link';

// Demo data
const portfolioStats = {
  totalValue: '$12,450.00',
  totalProfit: '+$2,450.00',
  profitPercent: '+24.5%',
  monthlyEarnings: '$830.00',
  pendingPayouts: '$415.00',
  activeInvestments: 2,
};

const investments = [
  {
    id: 1,
    strategy: 'Pro Strategy',
    amount: '$5,000',
    currentValue: '$6,250',
    profit: '+$1,250',
    profitPercent: '+25%',
    status: 'active',
    startDate: '2024-01-15',
  },
  {
    id: 2,
    strategy: 'Starter Strategy',
    amount: '$2,000',
    currentValue: '$2,400',
    profit: '+$400',
    profitPercent: '+20%',
    status: 'active',
    startDate: '2024-02-01',
  },
];

const recentActivity = [
  { type: 'payout', amount: '+$415.00', date: '2024-02-01', status: 'completed' },
  { type: 'investment', amount: '$2,000.00', date: '2024-02-01', status: 'completed' },
  { type: 'payout', amount: '+$312.50', date: '2024-01-01', status: 'completed' },
  { type: 'investment', amount: '$5,000.00', date: '2024-01-15', status: 'completed' },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="card p-6 bg-gradient-to-r from-emerald-900/50 to-emerald-800/30">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Welcome back, Demo User! 👋</h2>
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
          <div className="text-2xl font-bold text-white">{portfolioStats.totalValue}</div>
          <div className="flex items-center mt-2 text-emerald-400 text-sm">
            <TrendingUp size={16} className="mr-1" />
            {portfolioStats.profitPercent} all time
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-400 text-sm">Total Profit</span>
            <div className="w-10 h-10 rounded-lg bg-emerald-900/30 flex items-center justify-center">
              <TrendingUp size={20} className="text-emerald-400" />
            </div>
          </div>
          <div className="text-2xl font-bold text-emerald-400">{portfolioStats.totalProfit}</div>
          <div className="flex items-center mt-2 text-gray-400 text-sm">
            <ArrowUpRight size={16} className="mr-1 text-emerald-400" />
            Lifetime earnings
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-400 text-sm">Monthly Earnings</span>
            <div className="w-10 h-10 rounded-lg bg-emerald-900/30 flex items-center justify-center">
              <DollarSign size={20} className="text-emerald-400" />
            </div>
          </div>
          <div className="text-2xl font-bold text-white">{portfolioStats.monthlyEarnings}</div>
          <div className="flex items-center mt-2 text-gray-400 text-sm">
            <Clock size={16} className="mr-1" />
            Last payout
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-400 text-sm">Pending Payouts</span>
            <div className="w-10 h-10 rounded-lg bg-amber-900/30 flex items-center justify-center">
              <Clock size={20} className="text-amber-400" />
            </div>
          </div>
          <div className="text-2xl font-bold text-amber-400">{portfolioStats.pendingPayouts}</div>
          <div className="flex items-center mt-2 text-gray-400 text-sm">
            <AlertCircle size={16} className="mr-1" />
            Processing...
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
          <div className="space-y-4">
            {investments.map((inv) => (
              <div key={inv.id} className="p-4 rounded-lg bg-emerald-900/10 border border-emerald-900/30">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="text-white font-medium">{inv.strategy}</h4>
                    <p className="text-gray-400 text-sm">Started {inv.startDate}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-900/30 text-emerald-400 text-xs">
                    Active
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-gray-400 text-xs">Invested</p>
                    <p className="text-white font-medium">{inv.amount}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Current Value</p>
                    <p className="text-white font-medium">{inv.currentValue}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Profit</p>
                    <p className="text-emerald-400 font-medium">{inv.profit} ({inv.profitPercent})</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="card p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white">Recent Activity</h3>
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity, i) => (
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
                    <p className="text-gray-400 text-xs">{activity.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-medium ${activity.type === 'payout' ? 'text-emerald-400' : 'text-white'}`}>
                    {activity.amount}
                  </p>
                  <p className="text-xs text-gray-400 flex items-center justify-end">
                    <CheckCircle size={12} className="text-emerald-400 mr-1" />
                    {activity.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
