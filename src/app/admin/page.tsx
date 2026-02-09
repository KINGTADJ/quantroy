'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, TrendingUp, DollarSign, Shield, Clock, 
  CheckCircle, XCircle, Eye, Search, Filter,
  ChevronDown, MoreVertical, Download, RefreshCw,
  AlertTriangle, FileText, CreditCard, UserCheck
} from 'lucide-react';
import { formatCurrency, INVESTMENT_PLANS, getPlanById, calculateGrowth } from '@/lib/investment-plans';

// Mock data for demonstration - replace with real data from Supabase
const mockUsers = [
  { id: '1', email: 'john@example.com', firstName: 'John', lastName: 'Doe', kycStatus: 'approved', role: 'user', totalInvested: 50000, createdAt: '2026-02-01' },
  { id: '2', email: 'jane@example.com', firstName: 'Jane', lastName: 'Smith', kycStatus: 'pending', role: 'user', totalInvested: 25000, createdAt: '2026-02-03' },
  { id: '3', email: 'bob@example.com', firstName: 'Bob', lastName: 'Wilson', kycStatus: 'not_started', role: 'user', totalInvested: 0, createdAt: '2026-02-05' },
  { id: '4', email: 'alice@example.com', firstName: 'Alice', lastName: 'Brown', kycStatus: 'rejected', role: 'user', totalInvested: 100000, createdAt: '2026-02-02' },
];

const mockInvestments = [
  { id: '1', userId: '1', userName: 'John Doe', planId: 'premium-basic', amount: 50000, status: 'active', dailyROI: 1.2, startDate: '2026-02-01', daysElapsed: 7 },
  { id: '2', userId: '2', userName: 'Jane Smith', planId: 'growth-plus', amount: 25000, status: 'active', dailyROI: 0.9, startDate: '2026-02-03', daysElapsed: 5 },
  { id: '3', userId: '4', userName: 'Alice Brown', planId: 'elite-basic', amount: 100000, status: 'pending', dailyROI: 1.6, startDate: '2026-02-07', daysElapsed: 1 },
];

const mockKYC = [
  { id: '1', userId: '2', userName: 'Jane Smith', email: 'jane@example.com', documentType: 'id_front', status: 'pending', submittedAt: '2026-02-06' },
  { id: '2', userId: '2', userName: 'Jane Smith', email: 'jane@example.com', documentType: 'proof_of_address', status: 'pending', submittedAt: '2026-02-06' },
  { id: '3', userId: '2', userName: 'Jane Smith', email: 'jane@example.com', documentType: 'selfie', status: 'pending', submittedAt: '2026-02-06' },
];

const mockPayouts = [
  { id: '1', userId: '1', userName: 'John Doe', amount: 5000, currency: 'usdt', status: 'pending', walletAddress: 'TN3cFnPzFLmABvKnVQs9dpM4fH8LjQrpVP', requestedAt: '2026-02-07' },
  { id: '2', userId: '4', userName: 'Alice Brown', amount: 15000, currency: 'btc', status: 'pending', walletAddress: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh', requestedAt: '2026-02-06' },
];

type Tab = 'overview' | 'users' | 'investments' | 'kyc' | 'payouts';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const [searchQuery, setSearchQuery] = useState('');

  // Calculate stats
  const totalUsers = mockUsers.length;
  const totalInvested = mockUsers.reduce((sum, u) => sum + u.totalInvested, 0);
  const pendingKYC = mockKYC.filter(k => k.status === 'pending').length;
  const pendingPayouts = mockPayouts.filter(p => p.status === 'pending').length;
  const activeInvestments = mockInvestments.filter(i => i.status === 'active').length;

  // Calculate total current value of all investments
  const totalCurrentValue = mockInvestments.reduce((sum, inv) => {
    const plan = getPlanById(inv.planId);
    if (plan) {
      const growth = calculateGrowth(inv.amount, plan, inv.daysElapsed);
      return sum + growth.currentValue;
    }
    return sum + inv.amount;
  }, 0);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: TrendingUp },
    { id: 'users', label: 'Users', icon: Users, badge: totalUsers },
    { id: 'investments', label: 'Investments', icon: DollarSign, badge: activeInvestments },
    { id: 'kyc', label: 'KYC Approvals', icon: Shield, badge: pendingKYC },
    { id: 'payouts', label: 'Payouts', icon: CreditCard, badge: pendingPayouts },
  ];

  const handleApproveKYC = (kycId: string) => {
    // TODO: Implement KYC approval
    console.log('Approve KYC:', kycId);
    alert(`KYC ${kycId} approved!`);
  };

  const handleRejectKYC = (kycId: string) => {
    // TODO: Implement KYC rejection
    console.log('Reject KYC:', kycId);
    alert(`KYC ${kycId} rejected!`);
  };

  const handleApprovePayout = (payoutId: string) => {
    // TODO: Implement payout approval
    console.log('Approve Payout:', payoutId);
    alert(`Payout ${payoutId} approved! Process the crypto transfer.`);
  };

  const handleRejectPayout = (payoutId: string) => {
    // TODO: Implement payout rejection
    console.log('Reject Payout:', payoutId);
    alert(`Payout ${payoutId} rejected!`);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <p className="text-gray-400 text-sm">Manage users, investments, KYC, and payouts</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-800 rounded-lg">
              <RefreshCw className="w-5 h-5" />
            </button>
            <button className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 rounded-lg flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export Data
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as Tab)}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-emerald-500 text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
                {tab.badge !== undefined && (
                  <span className={`px-2 py-0.5 text-xs rounded-full ${
                    activeTab === tab.id ? 'bg-white/20' : 'bg-gray-700'
                  }`}>
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-gray-900 rounded-xl p-5 border border-gray-800">
                <div className="flex items-center justify-between mb-3">
                  <Users className="w-8 h-8 text-blue-400" />
                  <span className="text-xs text-gray-500">All Time</span>
                </div>
                <p className="text-2xl font-bold">{totalUsers}</p>
                <p className="text-sm text-gray-400">Total Users</p>
              </div>

              <div className="bg-gray-900 rounded-xl p-5 border border-gray-800">
                <div className="flex items-center justify-between mb-3">
                  <DollarSign className="w-8 h-8 text-emerald-400" />
                  <span className="text-xs text-emerald-400">+12.5%</span>
                </div>
                <p className="text-2xl font-bold">{formatCurrency(totalInvested)}</p>
                <p className="text-sm text-gray-400">Total Invested</p>
              </div>

              <div className="bg-gray-900 rounded-xl p-5 border border-gray-800">
                <div className="flex items-center justify-between mb-3">
                  <TrendingUp className="w-8 h-8 text-purple-400" />
                  <span className="text-xs text-purple-400">Live</span>
                </div>
                <p className="text-2xl font-bold">{formatCurrency(totalCurrentValue)}</p>
                <p className="text-sm text-gray-400">Current Portfolio Value</p>
              </div>

              <div className="bg-gray-900 rounded-xl p-5 border border-gray-800">
                <div className="flex items-center justify-between mb-3">
                  <AlertTriangle className="w-8 h-8 text-amber-400" />
                  <span className="text-xs text-amber-400">Action Required</span>
                </div>
                <p className="text-2xl font-bold">{pendingKYC + pendingPayouts}</p>
                <p className="text-sm text-gray-400">Pending Approvals</p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Pending KYC */}
              <div className="bg-gray-900 rounded-xl p-5 border border-gray-800">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Shield className="w-5 h-5 text-amber-400" />
                    Pending KYC ({pendingKYC})
                  </h3>
                  <button 
                    onClick={() => setActiveTab('kyc')}
                    className="text-sm text-emerald-400 hover:underline"
                  >
                    View All
                  </button>
                </div>
                {mockKYC.filter(k => k.status === 'pending').slice(0, 3).map((kyc) => (
                  <div key={kyc.id} className="flex items-center justify-between py-3 border-b border-gray-800 last:border-0">
                    <div>
                      <p className="font-medium">{kyc.userName}</p>
                      <p className="text-sm text-gray-400">{kyc.documentType}</p>
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleApproveKYC(kyc.id)}
                        className="p-2 bg-emerald-500/20 text-emerald-400 rounded hover:bg-emerald-500/30"
                      >
                        <CheckCircle className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleRejectKYC(kyc.id)}
                        className="p-2 bg-red-500/20 text-red-400 rounded hover:bg-red-500/30"
                      >
                        <XCircle className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pending Payouts */}
              <div className="bg-gray-900 rounded-xl p-5 border border-gray-800">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-purple-400" />
                    Pending Payouts ({pendingPayouts})
                  </h3>
                  <button 
                    onClick={() => setActiveTab('payouts')}
                    className="text-sm text-emerald-400 hover:underline"
                  >
                    View All
                  </button>
                </div>
                {mockPayouts.filter(p => p.status === 'pending').slice(0, 3).map((payout) => (
                  <div key={payout.id} className="flex items-center justify-between py-3 border-b border-gray-800 last:border-0">
                    <div>
                      <p className="font-medium">{payout.userName}</p>
                      <p className="text-sm text-gray-400">{formatCurrency(payout.amount)} {payout.currency.toUpperCase()}</p>
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleApprovePayout(payout.id)}
                        className="p-2 bg-emerald-500/20 text-emerald-400 rounded hover:bg-emerald-500/30"
                      >
                        <CheckCircle className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleRejectPayout(payout.id)}
                        className="p-2 bg-red-500/20 text-red-400 rounded hover:bg-red-500/30"
                      >
                        <XCircle className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Users Tab */}
        {activeTab === 'users' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Search */}
            <div className="mb-6 flex gap-4">
              <div className="flex-1 relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search users by email or name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-emerald-500"
                />
              </div>
              <button className="px-4 py-2 bg-gray-800 rounded-lg flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filter
              </button>
            </div>

            {/* Users Table */}
            <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-800">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">User</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">KYC Status</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Total Invested</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Joined</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockUsers.filter(u => 
                    u.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    `${u.firstName} ${u.lastName}`.toLowerCase().includes(searchQuery.toLowerCase())
                  ).map((user) => (
                    <tr key={user.id} className="border-t border-gray-800 hover:bg-gray-800/50">
                      <td className="px-4 py-3">
                        <div>
                          <p className="font-medium">{user.firstName} {user.lastName}</p>
                          <p className="text-sm text-gray-400">{user.email}</p>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          user.kycStatus === 'approved' ? 'bg-emerald-500/20 text-emerald-400' :
                          user.kycStatus === 'pending' ? 'bg-amber-500/20 text-amber-400' :
                          user.kycStatus === 'rejected' ? 'bg-red-500/20 text-red-400' :
                          'bg-gray-500/20 text-gray-400'
                        }`}>
                          {user.kycStatus}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-medium">
                        {formatCurrency(user.totalInvested)}
                      </td>
                      <td className="px-4 py-3 text-gray-400">
                        {user.createdAt}
                      </td>
                      <td className="px-4 py-3">
                        <button className="p-2 hover:bg-gray-700 rounded">
                          <Eye className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* Investments Tab */}
        {activeTab === 'investments' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-800">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">User</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Plan</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Invested</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Current Value</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Daily ROI</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Status</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Started</th>
                  </tr>
                </thead>
                <tbody>
                  {mockInvestments.map((inv) => {
                    const plan = getPlanById(inv.planId);
                    const growth = plan ? calculateGrowth(inv.amount, plan, inv.daysElapsed) : null;
                    return (
                      <tr key={inv.id} className="border-t border-gray-800 hover:bg-gray-800/50">
                        <td className="px-4 py-3 font-medium">{inv.userName}</td>
                        <td className="px-4 py-3">
                          <span className="text-emerald-400">{plan?.name || inv.planId}</span>
                        </td>
                        <td className="px-4 py-3">{formatCurrency(inv.amount)}</td>
                        <td className="px-4 py-3">
                          <span className="text-emerald-400 font-medium">
                            {growth ? formatCurrency(growth.currentValue) : formatCurrency(inv.amount)}
                          </span>
                          {growth && (
                            <span className="text-xs text-gray-400 ml-2">
                              (+{formatCurrency(growth.totalEarnings)})
                            </span>
                          )}
                        </td>
                        <td className="px-4 py-3 text-emerald-400">{inv.dailyROI}%</td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            inv.status === 'active' ? 'bg-emerald-500/20 text-emerald-400' :
                            inv.status === 'pending' ? 'bg-amber-500/20 text-amber-400' :
                            'bg-gray-500/20 text-gray-400'
                          }`}>
                            {inv.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-gray-400">{inv.startDate}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* KYC Tab */}
        {activeTab === 'kyc' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-800">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">User</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Document Type</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Status</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Submitted</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockKYC.map((kyc) => (
                    <tr key={kyc.id} className="border-t border-gray-800 hover:bg-gray-800/50">
                      <td className="px-4 py-3">
                        <div>
                          <p className="font-medium">{kyc.userName}</p>
                          <p className="text-sm text-gray-400">{kyc.email}</p>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-gray-400" />
                          {kyc.documentType.replace('_', ' ')}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          kyc.status === 'approved' ? 'bg-emerald-500/20 text-emerald-400' :
                          kyc.status === 'pending' ? 'bg-amber-500/20 text-amber-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {kyc.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-400">{kyc.submittedAt}</td>
                      <td className="px-4 py-3">
                        <div className="flex gap-2">
                          <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded" title="View Document">
                            <Eye className="w-4 h-4" />
                          </button>
                          {kyc.status === 'pending' && (
                            <>
                              <button 
                                onClick={() => handleApproveKYC(kyc.id)}
                                className="p-2 bg-emerald-500/20 text-emerald-400 rounded hover:bg-emerald-500/30"
                                title="Approve"
                              >
                                <CheckCircle className="w-4 h-4" />
                              </button>
                              <button 
                                onClick={() => handleRejectKYC(kyc.id)}
                                className="p-2 bg-red-500/20 text-red-400 rounded hover:bg-red-500/30"
                                title="Reject"
                              >
                                <XCircle className="w-4 h-4" />
                              </button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* Payouts Tab */}
        {activeTab === 'payouts' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-800">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">User</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Amount</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Wallet Address</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Status</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Requested</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockPayouts.map((payout) => (
                    <tr key={payout.id} className="border-t border-gray-800 hover:bg-gray-800/50">
                      <td className="px-4 py-3 font-medium">{payout.userName}</td>
                      <td className="px-4 py-3">
                        <span className="text-emerald-400 font-medium">
                          {formatCurrency(payout.amount)}
                        </span>
                        <span className="text-xs text-gray-400 ml-1">
                          {payout.currency.toUpperCase()}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <code className="text-xs bg-gray-800 px-2 py-1 rounded font-mono">
                          {payout.walletAddress.slice(0, 10)}...{payout.walletAddress.slice(-8)}
                        </code>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          payout.status === 'completed' ? 'bg-emerald-500/20 text-emerald-400' :
                          payout.status === 'pending' ? 'bg-amber-500/20 text-amber-400' :
                          payout.status === 'processing' ? 'bg-blue-500/20 text-blue-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {payout.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-400">{payout.requestedAt}</td>
                      <td className="px-4 py-3">
                        <div className="flex gap-2">
                          {payout.status === 'pending' && (
                            <>
                              <button 
                                onClick={() => handleApprovePayout(payout.id)}
                                className="p-2 bg-emerald-500/20 text-emerald-400 rounded hover:bg-emerald-500/30"
                                title="Approve & Process"
                              >
                                <CheckCircle className="w-4 h-4" />
                              </button>
                              <button 
                                onClick={() => handleRejectPayout(payout.id)}
                                className="p-2 bg-red-500/20 text-red-400 rounded hover:bg-red-500/30"
                                title="Reject"
                              >
                                <XCircle className="w-4 h-4" />
                              </button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
