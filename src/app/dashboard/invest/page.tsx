'use client';

import { useState } from 'react';
import { 
  CheckCircle, ChevronRight, Wallet, AlertCircle,
  Copy, ExternalLink
} from 'lucide-react';

const packages = [
  {
    id: 'starter',
    name: 'Starter',
    minInvestment: 500,
    maxInvestment: 4999,
    monthlyReturn: '~66%',
    features: ['Monthly payouts', 'AI guidance', '24/7 support'],
  },
  {
    id: 'pro',
    name: 'Pro',
    minInvestment: 5000,
    maxInvestment: 49999,
    monthlyReturn: '~66%',
    features: ['Priority support', 'Advanced analytics', 'Dedicated advisor'],
    popular: true,
  },
  {
    id: 'elite',
    name: 'Elite',
    minInvestment: 50000,
    maxInvestment: 499999,
    monthlyReturn: '~66%',
    features: ['VIP support', 'Custom strategies', 'Direct access'],
  },
  {
    id: 'vip',
    name: 'VIP',
    minInvestment: 500000,
    maxInvestment: 50000000,
    monthlyReturn: '~66%',
    features: ['White-glove service', 'Bespoke solutions', 'Risk management'],
  },
];

const cryptos = [
  { id: 'btc', name: 'Bitcoin', symbol: 'BTC', address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh' },
  { id: 'eth', name: 'Ethereum', symbol: 'ETH', address: '0x742d35Cc6634C0532925a3b844Bc9e7595f7841d' },
  { id: 'usdt', name: 'Tether', symbol: 'USDT', address: 'TN3W4H6rK2ce4vX9YnFQHwKENnHjoxb3m9' },
  { id: 'usdc', name: 'USD Coin', symbol: 'USDC', address: '0x742d35Cc6634C0532925a3b844Bc9e7595f7841d' },
];

export default function InvestPage() {
  const [step, setStep] = useState(1);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [amount, setAmount] = useState('');
  const [selectedCrypto, setSelectedCrypto] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const selectedPkg = packages.find(p => p.id === selectedPackage);
  const selectedCryptoData = cryptos.find(c => c.id === selectedCrypto);

  const copyAddress = () => {
    if (selectedCryptoData) {
      navigator.clipboard.writeText(selectedCryptoData.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const calculateReturns = () => {
    const amt = parseFloat(amount) || 0;
    return {
      monthly: (amt * 0.66).toFixed(2),
      sixMonth: (amt * 10).toFixed(2),
    };
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Steps */}
      <div className="flex items-center justify-center mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
              step >= s ? 'gradient-primary text-white' : 'bg-emerald-900/30 text-gray-400'
            }`}>
              {step > s ? <CheckCircle size={20} /> : s}
            </div>
            {s < 3 && (
              <div className={`w-20 h-1 mx-2 rounded ${
                step > s ? 'bg-emerald-500' : 'bg-emerald-900/30'
              }`} />
            )}
          </div>
        ))}
      </div>

      {/* Step 1: Select Package */}
      {step === 1 && (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Select Investment Package</h2>
            <p className="text-gray-400">Choose the package that matches your investment goals</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                onClick={() => setSelectedPackage(pkg.id)}
                className={`card p-6 cursor-pointer transition ${
                  selectedPackage === pkg.id 
                    ? 'border-emerald-500 glow' 
                    : 'hover:border-emerald-700/50'
                } ${pkg.popular ? 'relative' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                  {selectedPackage === pkg.id && (
                    <CheckCircle size={24} className="text-emerald-400" />
                  )}
                </div>
                <div className="mb-4">
                  <span className="text-gray-400 text-sm">Investment Range</span>
                  <p className="text-white font-semibold">
                    ${pkg.minInvestment.toLocaleString()} - ${pkg.maxInvestment.toLocaleString()}
                  </p>
                </div>
                <div className="mb-4">
                  <span className="text-gray-400 text-sm">Monthly Target</span>
                  <p className="text-emerald-400 font-semibold">{pkg.monthlyReturn}</p>
                </div>
                <ul className="space-y-2">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-300">
                      <CheckCircle size={14} className="text-emerald-400 mr-2" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <button
            onClick={() => setStep(2)}
            disabled={!selectedPackage}
            className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50"
          >
            Continue <ChevronRight size={20} />
          </button>
        </div>
      )}

      {/* Step 2: Enter Amount & Select Crypto */}
      {step === 2 && selectedPkg && (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Investment Details</h2>
            <p className="text-gray-400">Enter amount and select payment cryptocurrency</p>
          </div>

          {/* Amount Input */}
          <div className="card p-6">
            <label className="block text-sm text-gray-300 mb-2">Investment Amount (USD)</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">$</span>
              <input
                type="number"
                className="input pl-10 text-2xl font-bold"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min={selectedPkg.minInvestment}
                max={selectedPkg.maxInvestment}
              />
            </div>
            <div className="flex items-center justify-between mt-2 text-sm">
              <span className="text-gray-400">
                Min: ${selectedPkg.minInvestment.toLocaleString()}
              </span>
              <span className="text-gray-400">
                Max: ${selectedPkg.maxInvestment.toLocaleString()}
              </span>
            </div>

            {/* Projected Returns */}
            {parseFloat(amount) >= selectedPkg.minInvestment && (
              <div className="mt-6 p-4 rounded-lg bg-emerald-900/20 border border-emerald-900/30">
                <h4 className="text-emerald-400 font-semibold mb-3">Projected Returns*</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-400 text-sm">Monthly Target</p>
                    <p className="text-white text-xl font-bold">${calculateReturns().monthly}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">6-Month Target</p>
                    <p className="text-emerald-400 text-xl font-bold">${calculateReturns().sixMonth}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Crypto Selection */}
          <div className="card p-6">
            <label className="block text-sm text-gray-300 mb-4">Select Payment Cryptocurrency</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {cryptos.map((crypto) => (
                <div
                  key={crypto.id}
                  onClick={() => setSelectedCrypto(crypto.id)}
                  className={`p-4 rounded-lg border cursor-pointer transition text-center ${
                    selectedCrypto === crypto.id
                      ? 'border-emerald-500 bg-emerald-900/20'
                      : 'border-emerald-900/30 hover:border-emerald-700/50'
                  }`}
                >
                  <div className="text-2xl mb-1">{crypto.symbol === 'BTC' ? '₿' : crypto.symbol === 'ETH' ? 'Ξ' : '$'}</div>
                  <p className="text-white font-medium">{crypto.symbol}</p>
                  <p className="text-gray-400 text-xs">{crypto.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setStep(1)}
              className="btn-secondary flex-1"
            >
              Back
            </button>
            <button
              onClick={() => setStep(3)}
              disabled={!selectedCrypto || parseFloat(amount) < selectedPkg.minInvestment}
              className="btn-primary flex-1 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              Continue <ChevronRight size={20} />
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Payment */}
      {step === 3 && selectedCryptoData && (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Complete Payment</h2>
            <p className="text-gray-400">Send {selectedCryptoData.symbol} to the address below</p>
          </div>

          <div className="card p-6">
            <div className="text-center mb-6">
              <p className="text-gray-400 mb-2">Amount to Send</p>
              <p className="text-3xl font-bold text-white">${parseFloat(amount).toLocaleString()}</p>
              <p className="text-emerald-400">in {selectedCryptoData.name}</p>
            </div>

            <div className="p-4 rounded-lg bg-emerald-900/20 border border-emerald-900/30 mb-6">
              <p className="text-gray-400 text-sm mb-2">Send {selectedCryptoData.symbol} to:</p>
              <div className="flex items-center gap-2">
                <code className="flex-1 text-white text-sm bg-black/30 p-3 rounded break-all">
                  {selectedCryptoData.address}
                </code>
                <button
                  onClick={copyAddress}
                  className="p-3 rounded-lg bg-emerald-900/30 text-emerald-400 hover:bg-emerald-900/50 transition"
                >
                  {copied ? <CheckCircle size={20} /> : <Copy size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg bg-amber-900/20 border border-amber-900/30">
              <AlertCircle size={20} className="text-amber-400 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="text-amber-400 font-medium mb-1">Important</p>
                <p className="text-gray-300">
                  Only send {selectedCryptoData.symbol} to this address. Sending any other cryptocurrency may result in permanent loss.
                </p>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <h4 className="text-white font-semibold mb-4">What happens next?</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300 text-sm">
                <CheckCircle size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                Your payment will be detected automatically (usually within 10-30 minutes)
              </li>
              <li className="flex items-start gap-3 text-gray-300 text-sm">
                <CheckCircle size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                Your investment will be activated and visible in your portfolio
              </li>
              <li className="flex items-start gap-3 text-gray-300 text-sm">
                <CheckCircle size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                You'll receive your first payout at the end of the month
              </li>
            </ul>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setStep(2)}
              className="btn-secondary flex-1"
            >
              Back
            </button>
            <button
              onClick={() => window.location.href = '/dashboard'}
              className="btn-primary flex-1 flex items-center justify-center gap-2"
            >
              I've Made the Payment <CheckCircle size={20} />
            </button>
          </div>
        </div>
      )}

      {/* Disclaimer */}
      <p className="text-center text-gray-500 text-xs mt-8">
        *Returns are targets based on historical performance and are not guaranteed. All investments carry risk.
      </p>
    </div>
  );
}
