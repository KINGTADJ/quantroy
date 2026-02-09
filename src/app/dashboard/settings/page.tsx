'use client';

import { useState } from 'react';
import { 
  User, Mail, Lock, Wallet, Bell, Shield,
  Save, Eye, EyeOff, CheckCircle
} from 'lucide-react';

export default function SettingsPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [saved, setSaved] = useState(false);
  
  const [profile, setProfile] = useState({
    firstName: 'Demo',
    lastName: 'User',
    email: 'demo@quantroy.com',
    phone: '+1 234 567 8900',
  });

  const [wallets, setWallets] = useState({
    btc: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
    eth: '0x742d35Cc6634C0532925a3b844Bc9e7595f7841d',
    usdt: '',
  });

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-white">Account Settings</h1>

      {/* Profile Settings */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
          <User size={20} className="text-emerald-400" /> Profile Information
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">First Name</label>
            <input
              type="text"
              className="input"
              value={profile.firstName}
              onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Last Name</label>
            <input
              type="text"
              className="input"
              value={profile.lastName}
              onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Email Address</label>
            <input
              type="email"
              className="input"
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Phone Number</label>
            <input
              type="tel"
              className="input"
              value={profile.phone}
              onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
            />
          </div>
        </div>
      </div>

      {/* Wallet Addresses */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
          <Wallet size={20} className="text-emerald-400" /> Payout Wallets
        </h2>
        <p className="text-gray-400 text-sm mb-4">
          These wallet addresses will receive your monthly payouts. Make sure they are correct.
        </p>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Bitcoin (BTC) Wallet</label>
            <input
              type="text"
              className="input font-mono text-sm"
              placeholder="bc1q..."
              value={wallets.btc}
              onChange={(e) => setWallets({ ...wallets, btc: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Ethereum (ETH) Wallet</label>
            <input
              type="text"
              className="input font-mono text-sm"
              placeholder="0x..."
              value={wallets.eth}
              onChange={(e) => setWallets({ ...wallets, eth: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Tether (USDT - TRC20) Wallet</label>
            <input
              type="text"
              className="input font-mono text-sm"
              placeholder="T..."
              value={wallets.usdt}
              onChange={(e) => setWallets({ ...wallets, usdt: e.target.value })}
            />
          </div>
        </div>
      </div>

      {/* Security */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
          <Shield size={20} className="text-emerald-400" /> Security
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Current Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                className="input pr-12"
                placeholder="••••••••"
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">New Password</label>
            <input
              type="password"
              className="input"
              placeholder="••••••••"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Confirm New Password</label>
            <input
              type="password"
              className="input"
              placeholder="••••••••"
            />
          </div>
        </div>

        <div className="mt-6 p-4 rounded-lg bg-emerald-900/20 border border-emerald-900/30">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-white font-medium">Two-Factor Authentication</h4>
              <p className="text-gray-400 text-sm">Add an extra layer of security</p>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-900/30 text-emerald-400 text-sm">
              Enabled
            </span>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
          <Bell size={20} className="text-emerald-400" /> Notifications
        </h2>
        <div className="space-y-4">
          {[
            { label: 'Email notifications for payouts', enabled: true },
            { label: 'Email notifications for new investments', enabled: true },
            { label: 'Marketing emails and updates', enabled: false },
            { label: 'Weekly portfolio summary', enabled: true },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between py-2">
              <span className="text-gray-300">{item.label}</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked={item.enabled} className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button onClick={handleSave} className="btn-primary flex items-center gap-2">
          {saved ? <CheckCircle size={18} /> : <Save size={18} />}
          {saved ? 'Saved!' : 'Save Changes'}
        </button>
      </div>
    </div>
  );
}
