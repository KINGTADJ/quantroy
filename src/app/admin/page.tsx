'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  Users, TrendingUp, DollarSign, Shield, Clock, 
  CheckCircle, XCircle, Eye, Search, Filter,
  ChevronDown, MoreVertical, Download, RefreshCw,
  AlertTriangle, FileText, CreditCard, UserCheck, Loader2
} from 'lucide-react';
import { formatCurrency, INVESTMENT_PLANS, getPlanById, calculateGrowth } from '@/lib/investment-plans';
import { createClient } from '@/lib/supabase/client';
import { useAuthStore } from '@/store/auth';

type Tab = 'overview' | 'users' | 'investments' | 'kyc' | 'payouts';

interface User {
  id: string;
  email: string;
  first_name: string | null;
  last_name: string | null;
  kyc_status: string;
  role: string;
  created_at: string;
  referral_code: string;
}

interface Investment {
  id: string;
  user_id: string;
  strategy: string;
  amount: number;
  currency: string;
  status: string;
  current_value: number | null;
  created_at: string;
  profiles?: { email: string; first_name: string | null; last_name: string | null };
}

interface KYCDocument {
  id: string;
  user_id: string;
  document_type: string;
  file_url: string;
  status: string;
  created_at: string;
  profiles?: { email: string; first_name: string | null; last_name: string | null };
}

interface Payout {
  id: string;
  user_id: string;
  amount: number;
  currency: string;
  status: string;
  wallet_address: string;
  created_at: string;
  profiles?: { email: string; first_name: string | null; last_name: string | null };
}

export default function AdminPage() {
  const router = useRouter();
  const { user, profile, isInitialized } = useAuthStore();
  const supabase = createClient();
  
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  
  // Real data from Supabase
  const [users, setUsers] = useState<User[]>([]);
  const [investments, setInvestments] = useState<Investment[]>([]);
  const [kycDocuments, setKycDocuments] = useState<KYCDocument[]>([]);
  const [payouts, setPayouts] = useState<Payout[]>([]);

  // Check admin access - wait for profile to be loaded
  useEffect(() => {
    // Only redirect if we're fully initialized AND profile has been fetched
    // If user exists but profile is null, we're still loading the profile
    if (isInitialized && !user) {
      router.push('/login');
    }
  }, [isInitialized, user, router]);

  // Fetch all data
  useEffect(() => {
    if (profile?.role === 'admin') {
      fetchAllData();
    }
  }, [profile]);

  const fetchAllData = async () => {
    setLoading(true);
    try {
      await Promise.all([
        fetchUsers(),
        fetchInvestments(),
        fetchKYC(),
        fetchPayouts()
      ]);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchUsers = async () => {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (!error && data) {
      setUsers(data);
    }
  };

  const fetchInvestments = async () => {
    const { data, error } = await supabase
      .from('investments')
      .select('*, profiles(email, first_name, last_name)')
      .order('created_at', { ascending: false });
    
    if (!error && data) {
      setInvestments(data);
    }
  };

  const fetchKYC = async () => {
    const { data, error } = await supabase
      .from('kyc_documents')
      .select('*, profiles(email, first_name, last_name)')
      .eq('status', 'pending')
      .order('created_at', { ascending: false });
    
    if (!error && data) {
      setKycDocuments(data);
    }
  };

  const fetchPayouts = async () => {
    const { data, error } = await supabase
      .from('payouts')
      .select('*, profiles(email, first_name, last_name)')
      .eq('status', 'pending')
      .order('created_at', { ascending: false });
    
    if (!error && data) {
      setPayouts(data);
    }
  };

  // Calculate stats
  const totalUsers = users.length;
  const totalInvested = investments.reduce((sum, inv) => sum + Number(inv.amount), 0);
  const pendingKYC = kycDocuments.length;
  const pendingPayouts = payouts.length;
  const activeInvestments = investments.filter(i => i.status === 'active').length;
  const totalCurrentValue = investments.reduce((sum, inv) => sum + Number(inv.current_value || inv.amount), 0);

  // KYC Actions
  const handleApproveKYC = async (kycId: string, userId: string) => {
    setActionLoading(kycId);
    try {
      // Update KYC document
      await supabase
        .from('kyc_documents')
        .update({ status: 'approved', reviewed_by: user?.id, reviewed_at: new Date().toISOString() })
        .eq('id', kycId);

      // Check if all documents are approved for this user
      const { data: allDocs } = await supabase
        .from('kyc_documents')
        .select('status')
        .eq('user_id', userId);

      const allApproved = allDocs?.every(doc => doc.status === 'approved');
      
      if (allApproved) {
        // Update user's KYC status
        await supabase
          .from('profiles')
          .update({ kyc_status: 'approved' })
          .eq('id', userId);
      }

      await fetchKYC();
      await fetchUsers();
    } catch (error) {
      console.error('Error approving KYC:', error);
    } finally {
      setActionLoading(null);
    }
  };

  const handleRejectKYC = async (kycId: string, userId: string) => {
    setActionLoading(kycId);
    try {
      await supabase
        .from('kyc_documents')
        .update({ 
          status: 'rejected', 
          reviewed_by: user?.id, 
          reviewed_at: new Date().toISOString(),
          rejection_reason: 'Document rejected by admin'
        })
        .eq('id', kycId);

      await supabase
        .from('profiles')
        .update({ kyc_status: 'rejected' })
        .eq('id', userId);

      await fetchKYC();
      await fetchUsers();
    } catch (error) {
      console.error('Error rejecting KYC:', error);
    } finally {
      setActionLoading(null);
    }
  };

  // Payout Actions
  const handleApprovePayout = async (payoutId: string) => {
    setActionLoading(payoutId);
    try {
      await supabase
        .from('payouts')
        .update({ status: 'processing', processed_at: new Date().toISOString() })
        .eq('id', payoutId);

      await fetchPayouts();
      alert('Payout approved! Please process the crypto transfer manually.');
    } catch (error) {
      console.error('Error approving payout:', error);
    } finally {
      setActionLoading(null);
    }
  };

  const handleRejectPayout = async (payoutId: string) => {
    setActionLoading(payoutId);
    try {
      await supabase
        .from('payouts')
        .update({ status: 'failed' })
        .eq('id', payoutId);

      await fetchPayouts();
    } catch (error) {
      console.error('Error rejecting payout:', error);
    } finally {
      setActionLoading(null);
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: TrendingUp },
    { id: 'users', label: 'Users', icon: Users, badge: totalUsers },
    { id: 'investments', label: 'Investments', icon: DollarSign, badge: activeInvestments },
    { id: 'kyc', label: 'KYC Approvals', icon: Shield, badge: pendingKYC },
    { id: 'payouts', label: 'Payouts', icon: CreditCard, badge: pendingPayouts },
  ];

  // Loading state - wait for initialization AND profile if user exists
  if (!isInitialized || loading || (user && !profile)) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-emerald-500 animate-spin mx-auto mb-4" />
          <p className="text-gray-400">Loading admin panel...</p>
        </div>
      </div>
    );
  }

  // Not logged in
  if (!user) {
    router.push('/login');
    return null;
  }

  // Not admin
  if (profile?.role !== 'admin') {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2">Access Denied</h1>
          <p className="text-gray-400">You don't have permission to access this page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <p className="text-gray-400 text-sm">Manage users, investments, KYC, and payouts</p>
          </div>
          <button 
            onClick={fetchAllData}
            className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors"
          >
            <RefreshCw size={18} className={loading ? 'animate-spin' : ''} />
            Refresh
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-gray-900/50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as Tab)}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-emerald-500 text-emerald-400'
                    : 'border-transparent text-gray-400 hover:text-white'
                }`}
              >
                <tab.icon size={18} />
                {tab.label}
                {tab.badge !== undefined && tab.badge > 0 && (
                  <span className="ml-1 px-2 py-0.5 text-xs bg-emerald-900/50 text-emerald-400 rounded-full">
                    {tab.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-900 rounded-xl p-6 border border-gray-800"
              >
                <div className="flex items-center justify-between mb-4">
                  <Users className="text-blue-400" size={24} />
                </div>
                <p className="text-3xl font-bold text-white">{totalUsers}</p>
                <p className="text-gray-400 text-sm">Total Users</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-gray-900 rounded-xl p-6 border border-gray-800"
              >
                <div className="flex items-center justify-between mb-4">
                  <DollarSign className="text-emerald-400" size={24} />
                </div>
                <p className="text-3xl font-bold text-white">{formatCurrency(totalInvested)}</p>
                <p className="text-gray-400 text-sm">Total Invested</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gray-900 rounded-xl p-6 border border-gray-800"
              >
                <div className="flex items-center justify-between mb-4">
                  <Shield className="text-yellow-400" size={24} />
                </div>
                <p className="text-3xl font-bold text-white">{pendingKYC}</p>
                <p className="text-gray-400 text-sm">Pending KYC</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gray-900 rounded-xl p-6 border border-gray-800"
              >
                <div className="flex items-center justify-between mb-4">
                  <CreditCard className="text-purple-400" size={24} />
                </div>
                <p className="text-3xl font-bold text-white">{pendingPayouts}</p>
                <p className="text-gray-400 text-sm">Pending Payouts</p>
              </motion.div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button 
                  onClick={() => setActiveTab('kyc')}
                  className="flex items-center gap-3 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <Shield className="text-yellow-400" size={24} />
                  <div className="text-left">
                    <p className="font-medium">Review KYC</p>
                    <p className="text-sm text-gray-400">{pendingKYC} pending</p>
                  </div>
                </button>
                <button 
                  onClick={() => setActiveTab('payouts')}
                  className="flex items-center gap-3 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <CreditCard className="text-purple-400" size={24} />
                  <div className="text-left">
                    <p className="font-medium">Process Payouts</p>
                    <p className="text-sm text-gray-400">{pendingPayouts} pending</p>
                  </div>
                </button>
                <button 
                  onClick={() => setActiveTab('users')}
                  className="flex items-center gap-3 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <Users className="text-blue-400" size={24} />
                  <div className="text-left">
                    <p className="font-medium">Manage Users</p>
                    <p className="text-sm text-gray-400">{totalUsers} total</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Users Tab */}
        {activeTab === 'users' && (
          <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
            <div className="p-4 border-b border-gray-800">
              <div className="flex items-center gap-4">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    placeholder="Search users..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800/50">
                  <tr>
                    <th className="text-left px-4 py-3 text-sm font-medium text-gray-400">User</th>
                    <th className="text-left px-4 py-3 text-sm font-medium text-gray-400">Role</th>
                    <th className="text-left px-4 py-3 text-sm font-medium text-gray-400">KYC Status</th>
                    <th className="text-left px-4 py-3 text-sm font-medium text-gray-400">Referral Code</th>
                    <th className="text-left px-4 py-3 text-sm font-medium text-gray-400">Joined</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {users
                    .filter(u => 
                      u.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      u.first_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      u.last_name?.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map((user) => (
                    <tr key={user.id} className="hover:bg-gray-800/50">
                      <td className="px-4 py-3">
                        <div>
                          <p className="font-medium text-white">
                            {user.first_name || ''} {user.last_name || ''}
                          </p>
                          <p className="text-sm text-gray-400">{user.email}</p>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          user.role === 'admin' 
                            ? 'bg-purple-900/50 text-purple-400' 
                            : 'bg-gray-700 text-gray-300'
                        }`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          user.kyc_status === 'approved' ? 'bg-emerald-900/50 text-emerald-400' :
                          user.kyc_status === 'pending' ? 'bg-yellow-900/50 text-yellow-400' :
                          user.kyc_status === 'rejected' ? 'bg-red-900/50 text-red-400' :
                          'bg-gray-700 text-gray-400'
                        }`}>
                          {user.kyc_status}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <code className="text-sm text-emerald-400">{user.referral_code}</code>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-400">
                        {new Date(user.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {users.length === 0 && (
                <div className="text-center py-12 text-gray-400">
                  <Users size={48} className="mx-auto mb-4 opacity-50" />
                  <p>No users found</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Investments Tab */}
        {activeTab === 'investments' && (
          <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800/50">
                  <tr>
                    <th className="text-left px-4 py-3 text-sm font-medium text-gray-400">User</th>
                    <th className="text-left px-4 py-3 text-sm font-medium text-gray-400">Strategy</th>
                    <th className="text-left px-4 py-3 text-sm font-medium text-gray-400">Amount</th>
                    <th className="text-left px-4 py-3 text-sm font-medium text-gray-400">Status</th>
                    <th className="text-left px-4 py-3 text-sm font-medium text-gray-400">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {investments.map((inv) => (
                    <tr key={inv.id} className="hover:bg-gray-800/50">
                      <td className="px-4 py-3">
                        <p className="font-medium text-white">{inv.profiles?.email || 'Unknown'}</p>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-emerald-400 capitalize">{inv.strategy}</span>
                      </td>
                      <td className="px-4 py-3">
                        <p className="font-medium text-white">{formatCurrency(inv.amount)}</p>
                        <p className="text-xs text-gray-400">{inv.currency.toUpperCase()}</p>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          inv.status === 'active' ? 'bg-emerald-900/50 text-emerald-400' :
                          inv.status === 'pending' ? 'bg-yellow-900/50 text-yellow-400' :
                          inv.status === 'completed' ? 'bg-blue-900/50 text-blue-400' :
                          'bg-gray-700 text-gray-400'
                        }`}>
                          {inv.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-400">
                        {new Date(inv.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {investments.length === 0 && (
                <div className="text-center py-12 text-gray-400">
                  <DollarSign size={48} className="mx-auto mb-4 opacity-50" />
                  <p>No investments found</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* KYC Tab */}
        {activeTab === 'kyc' && (
          <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800/50">
                  <tr>
                    <th className="text-left px-4 py-3 text-sm font-medium text-gray-400">User</th>
                    <th className="text-left px-4 py-3 text-sm font-medium text-gray-400">Document Type</th>
                    <th className="text-left px-4 py-3 text-sm font-medium text-gray-400">Submitted</th>
                    <th className="text-left px-4 py-3 text-sm font-medium text-gray-400">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {kycDocuments.map((kyc) => (
                    <tr key={kyc.id} className="hover:bg-gray-800/50">
                      <td className="px-4 py-3">
                        <p className="font-medium text-white">{kyc.profiles?.email || 'Unknown'}</p>
                      </td>
                      <td className="px-4 py-3">
                        <span className="capitalize">{kyc.document_type.replace('_', ' ')}</span>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-400">
                        {new Date(kyc.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <a
                            href={kyc.file_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                          >
                            <Eye size={16} />
                          </a>
                          <button
                            onClick={() => handleApproveKYC(kyc.id, kyc.user_id)}
                            disabled={actionLoading === kyc.id}
                            className="p-2 bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors disabled:opacity-50"
                          >
                            {actionLoading === kyc.id ? <Loader2 size={16} className="animate-spin" /> : <CheckCircle size={16} />}
                          </button>
                          <button
                            onClick={() => handleRejectKYC(kyc.id, kyc.user_id)}
                            disabled={actionLoading === kyc.id}
                            className="p-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors disabled:opacity-50"
                          >
                            <XCircle size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {kycDocuments.length === 0 && (
                <div className="text-center py-12 text-gray-400">
                  <Shield size={48} className="mx-auto mb-4 opacity-50" />
                  <p>No pending KYC documents</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Payouts Tab */}
        {activeTab === 'payouts' && (
          <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800/50">
                  <tr>
                    <th className="text-left px-4 py-3 text-sm font-medium text-gray-400">User</th>
                    <th className="text-left px-4 py-3 text-sm font-medium text-gray-400">Amount</th>
                    <th className="text-left px-4 py-3 text-sm font-medium text-gray-400">Wallet</th>
                    <th className="text-left px-4 py-3 text-sm font-medium text-gray-400">Requested</th>
                    <th className="text-left px-4 py-3 text-sm font-medium text-gray-400">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {payouts.map((payout) => (
                    <tr key={payout.id} className="hover:bg-gray-800/50">
                      <td className="px-4 py-3">
                        <p className="font-medium text-white">{payout.profiles?.email || 'Unknown'}</p>
                      </td>
                      <td className="px-4 py-3">
                        <p className="font-medium text-white">{formatCurrency(payout.amount)}</p>
                        <p className="text-xs text-gray-400">{payout.currency.toUpperCase()}</p>
                      </td>
                      <td className="px-4 py-3">
                        <code className="text-xs text-emerald-400 break-all max-w-[200px] block">
                          {payout.wallet_address}
                        </code>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-400">
                        {new Date(payout.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleApprovePayout(payout.id)}
                            disabled={actionLoading === payout.id}
                            className="p-2 bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors disabled:opacity-50"
                          >
                            {actionLoading === payout.id ? <Loader2 size={16} className="animate-spin" /> : <CheckCircle size={16} />}
                          </button>
                          <button
                            onClick={() => handleRejectPayout(payout.id)}
                            disabled={actionLoading === payout.id}
                            className="p-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors disabled:opacity-50"
                          >
                            <XCircle size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {payouts.length === 0 && (
                <div className="text-center py-12 text-gray-400">
                  <CreditCard size={48} className="mx-auto mb-4 opacity-50" />
                  <p>No pending payouts</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
