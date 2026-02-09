'use client';

import { useState } from 'react';
import { 
  Search, Filter, Download, MoreVertical,
  CheckCircle, XCircle, Clock, Eye, Ban
} from 'lucide-react';

const users = [
  { id: 1, name: 'John Smith', email: 'john@example.com', joined: '2024-01-15', status: 'verified', invested: '$5,000', earnings: '$1,250', referrals: 3 },
  { id: 2, name: 'Sarah Johnson', email: 'sarah@example.com', joined: '2024-02-08', status: 'pending_kyc', invested: '$0', earnings: '$0', referrals: 0 },
  { id: 3, name: 'Mike Wilson', email: 'mike@example.com', joined: '2024-01-20', status: 'verified', invested: '$25,000', earnings: '$6,250', referrals: 8 },
  { id: 4, name: 'Emily Brown', email: 'emily@example.com', joined: '2024-02-01', status: 'verified', invested: '$10,000', earnings: '$2,500', referrals: 2 },
  { id: 5, name: 'David Lee', email: 'david@example.com', joined: '2024-02-06', status: 'rejected', invested: '$0', earnings: '$0', referrals: 0 },
  { id: 6, name: 'Lisa Anderson', email: 'lisa@example.com', joined: '2024-01-10', status: 'verified', invested: '$50,000', earnings: '$12,500', referrals: 15 },
  { id: 7, name: 'James Taylor', email: 'james@example.com', joined: '2024-02-05', status: 'verified', invested: '$2,000', earnings: '$500', referrals: 1 },
  { id: 8, name: 'Anna Martinez', email: 'anna@example.com', joined: '2024-01-25', status: 'suspended', invested: '$15,000', earnings: '$3,750', referrals: 5 },
];

export default function AdminUsersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Users</h1>
          <p className="text-gray-400">Manage platform users</p>
        </div>
        <button className="btn-secondary flex items-center gap-2 text-sm">
          <Download size={16} /> Export
        </button>
      </div>

      {/* Filters */}
      <div className="card p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search users..."
              className="input pl-10 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="input w-full md:w-48"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="verified">Verified</option>
            <option value="pending_kyc">Pending KYC</option>
            <option value="rejected">Rejected</option>
            <option value="suspended">Suspended</option>
          </select>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="card p-4">
          <p className="text-gray-400 text-sm">Total Users</p>
          <p className="text-2xl font-bold text-white">10,847</p>
        </div>
        <div className="card p-4">
          <p className="text-gray-400 text-sm">Verified</p>
          <p className="text-2xl font-bold text-emerald-400">9,234</p>
        </div>
        <div className="card p-4">
          <p className="text-gray-400 text-sm">Pending KYC</p>
          <p className="text-2xl font-bold text-amber-400">1,456</p>
        </div>
        <div className="card p-4">
          <p className="text-gray-400 text-sm">Suspended</p>
          <p className="text-2xl font-bold text-red-400">157</p>
        </div>
      </div>

      {/* Users Table */}
      <div className="card p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-emerald-900/30">
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">User</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Joined</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Status</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Invested</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Earnings</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Referrals</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="border-b border-emerald-900/20 hover:bg-emerald-900/10 transition">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-900/30 flex items-center justify-center text-emerald-400 font-medium">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-white font-medium">{user.name}</p>
                        <p className="text-gray-400 text-sm">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-400">{user.joined}</td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs ${
                      user.status === 'verified' ? 'bg-emerald-900/30 text-emerald-400' :
                      user.status === 'pending_kyc' ? 'bg-amber-900/30 text-amber-400' :
                      user.status === 'suspended' ? 'bg-red-900/30 text-red-400' :
                      'bg-gray-800 text-gray-400'
                    }`}>
                      {user.status === 'verified' && <CheckCircle size={12} />}
                      {user.status === 'pending_kyc' && <Clock size={12} />}
                      {user.status === 'rejected' && <XCircle size={12} />}
                      {user.status === 'suspended' && <Ban size={12} />}
                      {user.status.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-white font-medium">{user.invested}</td>
                  <td className="py-4 px-4 text-emerald-400">{user.earnings}</td>
                  <td className="py-4 px-4 text-white">{user.referrals}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 rounded-lg bg-emerald-900/30 text-emerald-400 hover:bg-emerald-900/50 transition" title="View">
                        <Eye size={16} />
                      </button>
                      <button className="p-2 rounded-lg bg-red-900/30 text-red-400 hover:bg-red-900/50 transition" title="Suspend">
                        <Ban size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-emerald-900/30">
          <p className="text-gray-400 text-sm">Showing 1-8 of 10,847 users</p>
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-lg bg-emerald-900/30 text-gray-400 hover:text-white transition">
              Previous
            </button>
            <button className="px-4 py-2 rounded-lg bg-emerald-900/30 text-gray-400 hover:text-white transition">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
