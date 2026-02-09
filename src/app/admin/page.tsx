'use client';

import { 
  Users, DollarSign, TrendingUp, Clock,
  ArrowUpRight, ArrowDownRight, AlertCircle,
  CheckCircle, XCircle
} from 'lucide-react';
import Link from 'next/link';

const stats = [
  { label: 'Total Users', value: '10,847', change: '+12%', icon: Users, color: 'emerald' },
  { label: 'Total Investments', value: '$52.4M', change: '+8%', icon: DollarSign, color: 'emerald' },
  { label: 'Active Investments', value: '8,234', change: '+15%', icon: TrendingUp, color: 'emerald' },
  { label: 'Pending Payouts', value: '$1.2M', change: '-', icon: Clock, color: 'amber' },
];

const recentUsers = [
  { id: 1, name: 'John Smith', email: 'john@example.com', joined: '2024-02-08', status: 'verified', invested: '$5,000' },
  { id: 2, name: 'Sarah Johnson', email: 'sarah@example.com', joined: '2024-02-08', status: 'pending_kyc', invested: '$0' },
  { id: 3, name: 'Mike Wilson', email: 'mike@example.com', joined: '2024-02-07', status: 'verified', invested: '$25,000' },
  { id: 4, name: 'Emily Brown', email: 'emily@example.com', joined: '2024-02-07', status: 'verified', invested: '$10,000' },
  { id: 5, name: 'David Lee', email: 'david@example.com', joined: '2024-02-06', status: 'rejected', invested: '$0' },
];

const pendingKYC = [
  { id: 1, name: 'Sarah Johnson', email: 'sarah@example.com', submitted: '2024-02-08 10:30', documents: 3 },
  { id: 2, name: 'Alex Turner', email: 'alex@example.com', submitted: '2024-02-08 09:15', documents: 3 },
  { id: 3, name: 'Maria Garcia', email: 'maria@example.com', submitted: '2024-02-07 18:45', documents: 3 },
];

const pendingPayouts = [
  { id: 1, user: 'John Smith', amount: '$830.00', strategy: 'Pro', scheduled: '2024-03-01' },
  { id: 2, user: 'Mike Wilson', amount: '$4,150.00', strategy: 'Elite', scheduled: '2024-03-01' },
  { id: 3, user: 'Emily Brown', amount: '$1,660.00', strategy: 'Pro', scheduled: '2024-03-01' },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
        <p className="text-gray-400">Overview of platform activity</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-400 text-sm">{stat.label}</span>
              <div className={`w-10 h-10 rounded-lg bg-${stat.color}-900/30 flex items-center justify-center`}>
                <stat.icon size={20} className={`text-${stat.color}-400`} />
              </div>
            </div>
            <div className="text-2xl font-bold text-white">{stat.value}</div>
            {stat.change !== '-' && (
              <div className="flex items-center mt-2 text-emerald-400 text-sm">
                <ArrowUpRight size={16} className="mr-1" />
                {stat.change} this month
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Pending KYC */}
        <div className="card p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-white flex items-center gap-2">
              <AlertCircle size={20} className="text-amber-400" />
              Pending KYC Reviews
            </h2>
            <Link href="/admin/kyc" className="text-red-400 text-sm hover:underline">View All</Link>
          </div>
          <div className="space-y-4">
            {pendingKYC.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 rounded-lg bg-amber-900/10 border border-amber-900/30">
                <div>
                  <p className="text-white font-medium">{item.name}</p>
                  <p className="text-gray-400 text-sm">{item.email}</p>
                  <p className="text-gray-500 text-xs mt-1">Submitted: {item.submitted}</p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 rounded-lg bg-emerald-900/30 text-emerald-400 hover:bg-emerald-900/50 transition">
                    <CheckCircle size={18} />
                  </button>
                  <button className="p-2 rounded-lg bg-red-900/30 text-red-400 hover:bg-red-900/50 transition">
                    <XCircle size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Payouts */}
        <div className="card p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-white flex items-center gap-2">
              <Clock size={20} className="text-amber-400" />
              Upcoming Payouts
            </h2>
            <Link href="/admin/payouts" className="text-red-400 text-sm hover:underline">View All</Link>
          </div>
          <div className="space-y-4">
            {pendingPayouts.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 rounded-lg bg-emerald-900/10 border border-emerald-900/30">
                <div>
                  <p className="text-white font-medium">{item.user}</p>
                  <p className="text-gray-400 text-sm">{item.strategy} Strategy</p>
                </div>
                <div className="text-right">
                  <p className="text-emerald-400 font-semibold">{item.amount}</p>
                  <p className="text-gray-500 text-xs">{item.scheduled}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Users */}
      <div className="card p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-white">Recent Users</h2>
          <Link href="/admin/users" className="text-red-400 text-sm hover:underline">View All</Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-emerald-900/30">
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">User</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Joined</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Status</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Invested</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentUsers.map((user) => (
                <tr key={user.id} className="border-b border-emerald-900/20">
                  <td className="py-4 px-4">
                    <div>
                      <p className="text-white font-medium">{user.name}</p>
                      <p className="text-gray-400 text-sm">{user.email}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-400">{user.joined}</td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      user.status === 'verified' ? 'bg-emerald-900/30 text-emerald-400' :
                      user.status === 'pending_kyc' ? 'bg-amber-900/30 text-amber-400' :
                      'bg-red-900/30 text-red-400'
                    }`}>
                      {user.status.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-white font-medium">{user.invested}</td>
                  <td className="py-4 px-4">
                    <Link href={`/admin/users/${user.id}`} className="text-red-400 hover:underline text-sm">
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
