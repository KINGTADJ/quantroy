'use client';

import { useState } from 'react';
import { 
  Users, Copy, CheckCircle, Gift, TrendingUp,
  Share2, DollarSign
} from 'lucide-react';

const referralData = {
  code: 'DEMO2024',
  link: 'https://quantroy.com/r/DEMO2024',
  totalReferrals: 12,
  activeReferrals: 8,
  totalEarnings: '$2,340.00',
  pendingEarnings: '$580.00',
};

const referrals = [
  { id: 1, name: 'John D.', date: '2024-02-15', invested: '$5,000', commission: '$300', status: 'active' },
  { id: 2, name: 'Sarah M.', date: '2024-02-10', invested: '$2,500', commission: '$150', status: 'active' },
  { id: 3, name: 'Mike R.', date: '2024-02-05', invested: '$10,000', commission: '$600', status: 'active' },
  { id: 4, name: 'Lisa K.', date: '2024-01-28', invested: '$1,000', commission: '$60', status: 'active' },
];

const tiers = [
  { level: 1, rate: '6%', requirement: 'Direct referrals' },
  { level: 2, rate: '3%', requirement: '2nd level referrals' },
  { level: 3, rate: '1%', requirement: '3rd level referrals' },
];

export default function ReferralsPage() {
  const [copied, setCopied] = useState<'code' | 'link' | null>(null);

  const copyToClipboard = (text: string, type: 'code' | 'link') => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white mb-2">Affiliate Program</h1>
        <p className="text-gray-400">Earn up to 6% commission on every investment your referrals make</p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        <div className="card p-6">
          <div className="flex items-center justify-between mb-2">
            <Users size={20} className="text-emerald-400" />
          </div>
          <p className="text-2xl font-bold text-white">{referralData.totalReferrals}</p>
          <p className="text-gray-400 text-sm">Total Referrals</p>
        </div>
        <div className="card p-6">
          <div className="flex items-center justify-between mb-2">
            <CheckCircle size={20} className="text-emerald-400" />
          </div>
          <p className="text-2xl font-bold text-white">{referralData.activeReferrals}</p>
          <p className="text-gray-400 text-sm">Active Investors</p>
        </div>
        <div className="card p-6">
          <div className="flex items-center justify-between mb-2">
            <DollarSign size={20} className="text-emerald-400" />
          </div>
          <p className="text-2xl font-bold text-emerald-400">{referralData.totalEarnings}</p>
          <p className="text-gray-400 text-sm">Total Earnings</p>
        </div>
        <div className="card p-6">
          <div className="flex items-center justify-between mb-2">
            <Gift size={20} className="text-amber-400" />
          </div>
          <p className="text-2xl font-bold text-amber-400">{referralData.pendingEarnings}</p>
          <p className="text-gray-400 text-sm">Pending Earnings</p>
        </div>
      </div>

      {/* Referral Link */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Your Referral Link</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Referral Code</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={referralData.code}
                readOnly
                className="input flex-1"
              />
              <button
                onClick={() => copyToClipboard(referralData.code, 'code')}
                className="px-4 py-2 rounded-lg bg-emerald-900/30 text-emerald-400 hover:bg-emerald-900/50 transition"
              >
                {copied === 'code' ? <CheckCircle size={20} /> : <Copy size={20} />}
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Referral Link</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={referralData.link}
                readOnly
                className="input flex-1"
              />
              <button
                onClick={() => copyToClipboard(referralData.link, 'link')}
                className="px-4 py-2 rounded-lg bg-emerald-900/30 text-emerald-400 hover:bg-emerald-900/50 transition"
              >
                {copied === 'link' ? <CheckCircle size={20} /> : <Copy size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Share buttons */}
        <div className="mt-6 flex gap-3">
          <button className="btn-primary flex items-center gap-2 text-sm">
            <Share2 size={16} /> Share on Twitter
          </button>
          <button className="btn-secondary flex items-center gap-2 text-sm">
            <Share2 size={16} /> Share on LinkedIn
          </button>
        </div>
      </div>

      {/* Commission Tiers */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Commission Structure</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {tiers.map((tier) => (
            <div key={tier.level} className="p-4 rounded-lg bg-emerald-900/20 border border-emerald-900/30 text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">{tier.rate}</div>
              <div className="text-white font-medium">Level {tier.level}</div>
              <div className="text-gray-400 text-sm">{tier.requirement}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Referrals List */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-white mb-6">Your Referrals</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-emerald-900/30">
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">User</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Joined</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Invested</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Your Commission</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Status</th>
              </tr>
            </thead>
            <tbody>
              {referrals.map((ref) => (
                <tr key={ref.id} className="border-b border-emerald-900/20">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-900/30 flex items-center justify-center text-emerald-400">
                        {ref.name[0]}
                      </div>
                      <span className="text-white">{ref.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-400">{ref.date}</td>
                  <td className="py-4 px-4 text-white">{ref.invested}</td>
                  <td className="py-4 px-4 text-emerald-400 font-semibold">{ref.commission}</td>
                  <td className="py-4 px-4">
                    <span className="px-3 py-1 rounded-full bg-emerald-900/30 text-emerald-400 text-xs">
                      Active
                    </span>
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
