'use client';

import { 
  DollarSign, Clock, CheckCircle, ExternalLink,
  Download, Filter, Calendar
} from 'lucide-react';

const payoutStats = {
  totalReceived: '$4,580.00',
  pendingPayouts: '$1,162.00',
  nextPayoutDate: 'March 1, 2024',
  avgMonthlyPayout: '$1,145.00',
};

const payouts = [
  {
    id: 1,
    date: '2024-02-01',
    amount: '$1,162.00',
    strategy: 'Pro + Starter',
    status: 'completed',
    txHash: '0x1a2b3c4d5e6f7890abcdef1234567890abcdef12',
    wallet: '0x742d...7841d',
    crypto: 'ETH',
  },
  {
    id: 2,
    date: '2024-01-01',
    amount: '$830.00',
    strategy: 'Pro Strategy',
    status: 'completed',
    txHash: '0x9876543210fedcba0987654321fedcba09876543',
    wallet: '0x742d...7841d',
    crypto: 'ETH',
  },
  {
    id: 3,
    date: '2023-12-01',
    amount: '$830.00',
    strategy: 'Pro Strategy',
    status: 'completed',
    txHash: '0xabcdef1234567890abcdef1234567890abcdef12',
    wallet: 'bc1qxy...0wlh',
    crypto: 'BTC',
  },
  {
    id: 4,
    date: '2023-11-01',
    amount: '$830.00',
    strategy: 'Pro Strategy',
    status: 'completed',
    txHash: '0x567890abcdef1234567890abcdef1234567890ab',
    wallet: 'bc1qxy...0wlh',
    crypto: 'BTC',
  },
  {
    id: 5,
    date: '2023-10-01',
    amount: '$928.00',
    strategy: 'Pro Strategy',
    status: 'completed',
    txHash: '0xcdef1234567890abcdef1234567890abcdef1234',
    wallet: 'bc1qxy...0wlh',
    crypto: 'BTC',
  },
];

export default function PayoutsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Payouts</h1>
        <button className="btn-secondary flex items-center gap-2 text-sm">
          <Download size={16} /> Export History
        </button>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        <div className="card p-6">
          <div className="flex items-center justify-between mb-2">
            <DollarSign size={20} className="text-emerald-400" />
          </div>
          <p className="text-2xl font-bold text-emerald-400">{payoutStats.totalReceived}</p>
          <p className="text-gray-400 text-sm">Total Received</p>
        </div>
        <div className="card p-6">
          <div className="flex items-center justify-between mb-2">
            <Clock size={20} className="text-amber-400" />
          </div>
          <p className="text-2xl font-bold text-amber-400">{payoutStats.pendingPayouts}</p>
          <p className="text-gray-400 text-sm">Pending Payouts</p>
        </div>
        <div className="card p-6">
          <div className="flex items-center justify-between mb-2">
            <Calendar size={20} className="text-emerald-400" />
          </div>
          <p className="text-xl font-bold text-white">{payoutStats.nextPayoutDate}</p>
          <p className="text-gray-400 text-sm">Next Payout</p>
        </div>
        <div className="card p-6">
          <div className="flex items-center justify-between mb-2">
            <DollarSign size={20} className="text-emerald-400" />
          </div>
          <p className="text-2xl font-bold text-white">{payoutStats.avgMonthlyPayout}</p>
          <p className="text-gray-400 text-sm">Avg Monthly Payout</p>
        </div>
      </div>

      {/* Pending Payout Notice */}
      <div className="card p-6 border-amber-700/50 bg-amber-900/10">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-amber-900/30 flex items-center justify-center flex-shrink-0">
            <Clock size={24} className="text-amber-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">Upcoming Payout</h3>
            <p className="text-gray-400 mb-2">
              Your next payout of <span className="text-amber-400 font-semibold">{payoutStats.pendingPayouts}</span> is scheduled for {payoutStats.nextPayoutDate}.
            </p>
            <p className="text-gray-500 text-sm">
              Payouts are processed within 24-48 hours of the scheduled date and sent directly to your registered wallet.
            </p>
          </div>
        </div>
      </div>

      {/* Payout History */}
      <div className="card p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-white">Payout History</h2>
          <button className="flex items-center gap-2 text-gray-400 hover:text-white transition text-sm">
            <Filter size={16} /> Filter
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-emerald-900/30">
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Date</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Amount</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Strategy</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Crypto</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Wallet</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Status</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Transaction</th>
              </tr>
            </thead>
            <tbody>
              {payouts.map((payout) => (
                <tr key={payout.id} className="border-b border-emerald-900/20 hover:bg-emerald-900/10 transition">
                  <td className="py-4 px-4 text-white">{payout.date}</td>
                  <td className="py-4 px-4 text-emerald-400 font-semibold">{payout.amount}</td>
                  <td className="py-4 px-4 text-gray-300">{payout.strategy}</td>
                  <td className="py-4 px-4">
                    <span className="px-2 py-1 rounded bg-emerald-900/30 text-emerald-400 text-xs">
                      {payout.crypto}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-400 font-mono text-sm">{payout.wallet}</td>
                  <td className="py-4 px-4">
                    <span className="flex items-center gap-1 text-emerald-400 text-sm">
                      <CheckCircle size={14} /> Completed
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <a
                      href={`https://etherscan.io/tx/${payout.txHash}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-emerald-400 hover:underline text-sm"
                    >
                      View <ExternalLink size={12} />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-emerald-900/30">
          <p className="text-gray-400 text-sm">Showing 1-5 of 5 payouts</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 rounded bg-emerald-900/30 text-gray-400 text-sm" disabled>
              Previous
            </button>
            <button className="px-3 py-1 rounded bg-emerald-900/30 text-gray-400 text-sm" disabled>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
