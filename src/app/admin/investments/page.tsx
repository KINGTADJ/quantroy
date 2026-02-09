'use client';

import { useState } from 'react';
import { 
  Search, Filter, Download, TrendingUp,
  CheckCircle, Clock, DollarSign
} from 'lucide-react';

const investments = [
  { id: 'INV-001', user: 'John Smith', email: 'john@example.com', strategy: 'Pro', amount: '$5,000', currentValue: '$6,250', profit: '+$1,250', status: 'active', date: '2024-01-15' },
  { id: 'INV-002', user: 'Mike Wilson', email: 'mike@example.com', strategy: 'Elite', amount: '$25,000', currentValue: '$31,250', profit: '+$6,250', status: 'active', date: '2024-01-20' },
  { id: 'INV-003', user: 'Emily Brown', email: 'emily@example.com', strategy: 'Pro', amount: '$10,000', currentValue: '$12,500', profit: '+$2,500', status: 'active', date: '2024-02-01' },
  { id: 'INV-004', user: 'Lisa Anderson', email: 'lisa@example.com', strategy: 'VIP', amount: '$500,000', currentValue: '$625,000', profit: '+$125,000', status: 'active', date: '2024-01-10' },
  { id: 'INV-005', user: 'James Taylor', email: 'james@example.com', strategy: 'Starter', amount: '$2,000', currentValue: '$2,500', profit: '+$500', status: 'active', date: '2024-02-05' },
  { id: 'INV-006', user: 'John Smith', email: 'john@example.com', strategy: 'Starter', amount: '$1,000', currentValue: '$1,250', profit: '+$250', status: 'completed', date: '2023-10-15' },
];

export default function AdminInvestmentsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [strategyFilter, setStrategyFilter] = useState('all');

  const filteredInvestments = investments.filter(inv => {
    const matchesSearch = inv.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         inv.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStrategy = strategyFilter === 'all' || inv.strategy.toLowerCase() === strategyFilter;
    return matchesSearch && matchesStrategy;
  });

  const totalInvested = investments.reduce((sum, inv) => sum + parseFloat(inv.amount.replace(/[$,]/g, '')), 0);
  const totalValue = investments.reduce((sum, inv) => sum + parseFloat(inv.currentValue.replace(/[$,]/g, '')), 0);
  const totalProfit = investments.reduce((sum, inv) => sum + parseFloat(inv.profit.replace(/[+$,]/g, '')), 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Investments</h1>
          <p className="text-gray-400">Manage all platform investments</p>
        </div>
        <button className="btn-secondary flex items-center gap-2 text-sm">
          <Download size={16} /> Export
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="card p-4">
          <p className="text-gray-400 text-sm">Total Invested</p>
          <p className="text-2xl font-bold text-white">${totalInvested.toLocaleString()}</p>
        </div>
        <div className="card p-4">
          <p className="text-gray-400 text-sm">Current Value</p>
          <p className="text-2xl font-bold text-white">${totalValue.toLocaleString()}</p>
        </div>
        <div className="card p-4">
          <p className="text-gray-400 text-sm">Total Profit</p>
          <p className="text-2xl font-bold text-emerald-400">+${totalProfit.toLocaleString()}</p>
        </div>
        <div className="card p-4">
          <p className="text-gray-400 text-sm">Active Investments</p>
          <p className="text-2xl font-bold text-white">{investments.filter(i => i.status === 'active').length}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="card p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by user or ID..."
              className="input pl-10 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="input w-full md:w-48"
            value={strategyFilter}
            onChange={(e) => setStrategyFilter(e.target.value)}
          >
            <option value="all">All Strategies</option>
            <option value="starter">Starter</option>
            <option value="pro">Pro</option>
            <option value="elite">Elite</option>
            <option value="vip">VIP</option>
          </select>
        </div>
      </div>

      {/* Investments Table */}
      <div className="card p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-emerald-900/30">
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">ID</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">User</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Strategy</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Invested</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Current Value</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Profit</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Status</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredInvestments.map((inv) => (
                <tr key={inv.id} className="border-b border-emerald-900/20 hover:bg-emerald-900/10 transition">
                  <td className="py-4 px-4 text-emerald-400 font-mono text-sm">{inv.id}</td>
                  <td className="py-4 px-4">
                    <div>
                      <p className="text-white font-medium">{inv.user}</p>
                      <p className="text-gray-400 text-sm">{inv.email}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      inv.strategy === 'VIP' ? 'bg-purple-900/30 text-purple-400' :
                      inv.strategy === 'Elite' ? 'bg-amber-900/30 text-amber-400' :
                      inv.strategy === 'Pro' ? 'bg-emerald-900/30 text-emerald-400' :
                      'bg-blue-900/30 text-blue-400'
                    }`}>
                      {inv.strategy}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-white font-medium">{inv.amount}</td>
                  <td className="py-4 px-4 text-white">{inv.currentValue}</td>
                  <td className="py-4 px-4 text-emerald-400 font-medium">{inv.profit}</td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs ${
                      inv.status === 'active' ? 'bg-emerald-900/30 text-emerald-400' : 'bg-gray-800 text-gray-400'
                    }`}>
                      {inv.status === 'active' ? <TrendingUp size={12} /> : <CheckCircle size={12} />}
                      {inv.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-400">{inv.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
