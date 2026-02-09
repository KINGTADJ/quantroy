'use client';

import { 
  TrendingUp, TrendingDown, Clock, CheckCircle,
  ChevronRight, Download
} from 'lucide-react';

const portfolioData = {
  totalValue: '$12,450.00',
  totalInvested: '$7,000.00',
  totalProfit: '+$5,450.00',
  profitPercent: '+77.86%',
};

const investments = [
  {
    id: 1,
    strategy: 'Pro Strategy',
    invested: '$5,000.00',
    currentValue: '$8,750.00',
    profit: '+$3,750.00',
    profitPercent: '+75%',
    status: 'active',
    startDate: '2024-01-15',
    nextPayout: '2024-03-01',
    payoutAmount: '$830.00',
  },
  {
    id: 2,
    strategy: 'Starter Strategy',
    invested: '$2,000.00',
    currentValue: '$3,700.00',
    profit: '+$1,700.00',
    profitPercent: '+85%',
    status: 'active',
    startDate: '2024-02-01',
    nextPayout: '2024-03-01',
    payoutAmount: '$332.00',
  },
];

const payoutHistory = [
  { date: '2024-02-01', amount: '$1,162.00', status: 'completed', txHash: '0x1234...5678' },
  { date: '2024-01-01', amount: '$830.00', status: 'completed', txHash: '0x8765...4321' },
];

export default function PortfolioPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">My Portfolio</h1>
        <button className="btn-secondary flex items-center gap-2 text-sm">
          <Download size={16} /> Export Report
        </button>
      </div>

      {/* Portfolio Overview */}
      <div className="grid md:grid-cols-4 gap-4">
        <div className="card p-6">
          <p className="text-gray-400 text-sm mb-1">Total Portfolio Value</p>
          <p className="text-2xl font-bold text-white">{portfolioData.totalValue}</p>
        </div>
        <div className="card p-6">
          <p className="text-gray-400 text-sm mb-1">Total Invested</p>
          <p className="text-2xl font-bold text-white">{portfolioData.totalInvested}</p>
        </div>
        <div className="card p-6">
          <p className="text-gray-400 text-sm mb-1">Total Profit</p>
          <p className="text-2xl font-bold text-emerald-400">{portfolioData.totalProfit}</p>
        </div>
        <div className="card p-6">
          <p className="text-gray-400 text-sm mb-1">Return Rate</p>
          <p className="text-2xl font-bold text-emerald-400 flex items-center gap-2">
            <TrendingUp size={20} /> {portfolioData.profitPercent}
          </p>
        </div>
      </div>

      {/* Active Investments */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-white mb-6">Active Investments</h2>
        <div className="space-y-6">
          {investments.map((inv) => (
            <div key={inv.id} className="p-6 rounded-xl bg-emerald-900/10 border border-emerald-900/30">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{inv.strategy}</h3>
                  <p className="text-gray-400 text-sm">Started {inv.startDate}</p>
                </div>
                <span className="px-4 py-2 rounded-full bg-emerald-900/30 text-emerald-400 text-sm font-medium">
                  Active
                </span>
              </div>

              <div className="grid md:grid-cols-5 gap-4 mb-4">
                <div>
                  <p className="text-gray-400 text-sm">Invested</p>
                  <p className="text-white font-semibold">{inv.invested}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Current Value</p>
                  <p className="text-white font-semibold">{inv.currentValue}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Total Profit</p>
                  <p className="text-emerald-400 font-semibold">{inv.profit}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Return</p>
                  <p className="text-emerald-400 font-semibold flex items-center gap-1">
                    <TrendingUp size={14} /> {inv.profitPercent}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Next Payout</p>
                  <p className="text-white font-semibold">{inv.nextPayout}</p>
                  <p className="text-emerald-400 text-sm">{inv.payoutAmount}</p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="relative h-2 bg-emerald-900/30 rounded-full overflow-hidden">
                <div 
                  className="absolute left-0 top-0 h-full gradient-primary rounded-full"
                  style={{ width: `${parseInt(inv.profitPercent)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payout History */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-white mb-6">Payout History</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-emerald-900/30">
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Date</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Amount</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Status</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Transaction</th>
              </tr>
            </thead>
            <tbody>
              {payoutHistory.map((payout, i) => (
                <tr key={i} className="border-b border-emerald-900/20">
                  <td className="py-4 px-4 text-white">{payout.date}</td>
                  <td className="py-4 px-4 text-emerald-400 font-semibold">{payout.amount}</td>
                  <td className="py-4 px-4">
                    <span className="flex items-center gap-2 text-emerald-400">
                      <CheckCircle size={14} /> Completed
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <a href="#" className="text-emerald-400 hover:underline flex items-center gap-1">
                      {payout.txHash} <ChevronRight size={14} />
                    </a>
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
