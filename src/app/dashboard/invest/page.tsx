'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, Shield, Clock, ChevronRight, Star, 
  Zap, Crown, Diamond, Award, Check, Info, ArrowRight,
  Wallet, Calculator, Filter
} from 'lucide-react';
import { 
  INVESTMENT_PLANS, 
  InvestmentPlan, 
  calculateGrowth, 
  formatCurrency,
  getTierColor,
  getTierBgColor 
} from '@/lib/investment-plans';

type Tier = 'all' | 'starter' | 'growth' | 'premium' | 'elite' | 'vip';

const tierIcons = {
  starter: Zap,
  growth: TrendingUp,
  premium: Award,
  elite: Crown,
  vip: Diamond
};

const tierLabels = {
  all: 'All Plans',
  starter: 'Starter',
  growth: 'Growth',
  premium: 'Premium',
  elite: 'Elite',
  vip: 'VIP'
};

export default function InvestPage() {
  const [selectedTier, setSelectedTier] = useState<Tier>('all');
  const [selectedPlan, setSelectedPlan] = useState<InvestmentPlan | null>(null);
  const [investmentAmount, setInvestmentAmount] = useState<string>('');
  const [step, setStep] = useState<'select' | 'amount' | 'confirm'>('select');
  const [selectedCrypto, setSelectedCrypto] = useState<string>('usdt');

  const filteredPlans = useMemo(() => {
    if (selectedTier === 'all') return INVESTMENT_PLANS;
    return INVESTMENT_PLANS.filter(p => p.tier === selectedTier);
  }, [selectedTier]);

  const calculatedGrowth = useMemo(() => {
    if (!selectedPlan || !investmentAmount) return null;
    const amount = parseFloat(investmentAmount);
    if (isNaN(amount) || amount < selectedPlan.minInvestment) return null;
    
    return {
      day7: calculateGrowth(amount, selectedPlan, 7),
      day30: calculateGrowth(amount, selectedPlan, 30),
      day90: calculateGrowth(amount, selectedPlan, 90),
      endOfPlan: calculateGrowth(amount, selectedPlan, selectedPlan.duration)
    };
  }, [selectedPlan, investmentAmount]);

  const cryptoOptions = [
    { id: 'btc', name: 'Bitcoin', symbol: 'BTC' },
    { id: 'eth', name: 'Ethereum', symbol: 'ETH' },
    { id: 'usdt', name: 'Tether', symbol: 'USDT' },
    { id: 'usdc', name: 'USD Coin', symbol: 'USDC' }
  ];

  const handleSelectPlan = (plan: InvestmentPlan) => {
    setSelectedPlan(plan);
    setInvestmentAmount(plan.minInvestment.toString());
    setStep('amount');
  };

  const handleProceedToConfirm = () => {
    if (selectedPlan && investmentAmount) {
      const amount = parseFloat(investmentAmount);
      if (amount >= selectedPlan.minInvestment && amount <= selectedPlan.maxInvestment) {
        setStep('confirm');
      }
    }
  };

  const handleConfirmInvestment = async () => {
    // TODO: Implement actual investment creation
    alert('Investment submitted! This would create an investment in the database.');
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Investment Plans</h1>
          <p className="text-gray-400">Choose from {INVESTMENT_PLANS.length} investment plans with automatic daily compounding</p>
        </div>

        {/* Steps Indicator */}
        <div className="flex items-center gap-4 mb-8">
          {['select', 'amount', 'confirm'].map((s, i) => (
            <div key={s} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step === s ? 'bg-emerald-500 text-white' : 
                ['select', 'amount', 'confirm'].indexOf(step) > i ? 'bg-emerald-500/20 text-emerald-400' :
                'bg-gray-800 text-gray-500'
              }`}>
                {i + 1}
              </div>
              <span className={`ml-2 text-sm ${step === s ? 'text-white' : 'text-gray-500'}`}>
                {s === 'select' ? 'Select Plan' : s === 'amount' ? 'Enter Amount' : 'Confirm'}
              </span>
              {i < 2 && <ChevronRight className="w-4 h-4 mx-4 text-gray-600" />}
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {step === 'select' && (
            <motion.div
              key="select"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {/* Tier Filter */}
              <div className="flex flex-wrap gap-2 mb-6">
                {(Object.keys(tierLabels) as Tier[]).map((tier) => {
                  const Icon = tier === 'all' ? Filter : tierIcons[tier as keyof typeof tierIcons];
                  return (
                    <button
                      key={tier}
                      onClick={() => setSelectedTier(tier)}
                      className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${
                        selectedTier === tier 
                          ? 'bg-emerald-500 text-white' 
                          : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {tierLabels[tier]}
                      {tier !== 'all' && (
                        <span className="text-xs opacity-70">
                          ({INVESTMENT_PLANS.filter(p => p.tier === tier).length})
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Plans Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredPlans.map((plan, index) => {
                  const TierIcon = tierIcons[plan.tier];
                  return (
                    <motion.div
                      key={plan.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleSelectPlan(plan)}
                      className={`relative p-5 rounded-xl border cursor-pointer transition-all hover:scale-[1.02] ${getTierBgColor(plan.tier)}`}
                    >
                      {/* Badges */}
                      <div className="absolute top-3 right-3 flex gap-1">
                        {plan.popular && (
                          <span className="px-2 py-0.5 bg-amber-500/20 text-amber-400 text-xs rounded-full flex items-center gap-1">
                            <Star className="w-3 h-3" /> Popular
                          </span>
                        )}
                        {plan.recommended && (
                          <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-xs rounded-full">
                            Recommended
                          </span>
                        )}
                      </div>

                      {/* Plan Header */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-2 rounded-lg ${getTierBgColor(plan.tier)}`}>
                          <TierIcon className={`w-5 h-5 ${getTierColor(plan.tier)}`} />
                        </div>
                        <div>
                          <h3 className="font-semibold">{plan.name}</h3>
                          <p className={`text-xs ${getTierColor(plan.tier)}`}>
                            {plan.tier.charAt(0).toUpperCase() + plan.tier.slice(1)} Tier
                          </p>
                        </div>
                      </div>

                      {/* ROI Info */}
                      <div className="mb-4">
                        <div className="text-3xl font-bold text-emerald-400">
                          {plan.dailyROI}%
                          <span className="text-sm font-normal text-gray-400">/day</span>
                        </div>
                        <p className="text-sm text-gray-400">
                          {plan.totalReturn}% total return in {plan.duration} days
                        </p>
                      </div>

                      {/* Investment Range */}
                      <div className="mb-4 p-3 bg-gray-900/50 rounded-lg">
                        <p className="text-xs text-gray-500 mb-1">Investment Range</p>
                        <p className="font-medium">
                          {formatCurrency(plan.minInvestment)} - {formatCurrency(plan.maxInvestment)}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="space-y-1">
                        {plan.features.slice(0, 3).map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                            <Check className="w-3 h-3 text-emerald-500" />
                            {feature}
                          </div>
                        ))}
                        {plan.features.length > 3 && (
                          <p className="text-xs text-gray-500">+{plan.features.length - 3} more features</p>
                        )}
                      </div>

                      {/* Select Button */}
                      <button className="w-full mt-4 py-2 bg-emerald-500 hover:bg-emerald-600 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                        Select Plan <ArrowRight className="w-4 h-4" />
                      </button>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {step === 'amount' && selectedPlan && (
            <motion.div
              key="amount"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-2xl mx-auto"
            >
              {/* Selected Plan Summary */}
              <div className={`p-6 rounded-xl border mb-6 ${getTierBgColor(selectedPlan.tier)}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {(() => {
                      const TierIcon = tierIcons[selectedPlan.tier];
                      return <TierIcon className={`w-6 h-6 ${getTierColor(selectedPlan.tier)}`} />;
                    })()}
                    <div>
                      <h3 className="font-semibold text-lg">{selectedPlan.name}</h3>
                      <p className="text-sm text-gray-400">{selectedPlan.dailyROI}% daily • {selectedPlan.duration} days</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setStep('select')}
                    className="text-sm text-emerald-400 hover:underline"
                  >
                    Change Plan
                  </button>
                </div>
              </div>

              {/* Amount Input */}
              <div className="bg-gray-900 rounded-xl p-6 mb-6">
                <label className="block text-sm text-gray-400 mb-2">Investment Amount (USD)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    value={investmentAmount}
                    onChange={(e) => setInvestmentAmount(e.target.value)}
                    min={selectedPlan.minInvestment}
                    max={selectedPlan.maxInvestment}
                    className="w-full pl-8 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-xl font-semibold focus:outline-none focus:border-emerald-500"
                    placeholder={selectedPlan.minInvestment.toString()}
                  />
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Min: {formatCurrency(selectedPlan.minInvestment)} • Max: {formatCurrency(selectedPlan.maxInvestment)}
                </p>

                {/* Quick Amount Buttons */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {[
                    selectedPlan.minInvestment,
                    Math.floor((selectedPlan.minInvestment + selectedPlan.maxInvestment) / 4),
                    Math.floor((selectedPlan.minInvestment + selectedPlan.maxInvestment) / 2),
                    selectedPlan.maxInvestment
                  ].map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setInvestmentAmount(amount.toString())}
                      className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded text-sm"
                    >
                      {formatCurrency(amount)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Select Cryptocurrency */}
              <div className="bg-gray-900 rounded-xl p-6 mb-6">
                <label className="block text-sm text-gray-400 mb-3">Select Cryptocurrency</label>
                <div className="grid grid-cols-2 gap-3">
                  {cryptoOptions.map((crypto) => (
                    <button
                      key={crypto.id}
                      onClick={() => setSelectedCrypto(crypto.id)}
                      className={`p-3 rounded-lg border transition-all ${
                        selectedCrypto === crypto.id 
                          ? 'border-emerald-500 bg-emerald-500/10' 
                          : 'border-gray-700 hover:border-gray-600'
                      }`}
                    >
                      <p className="font-medium">{crypto.symbol}</p>
                      <p className="text-sm text-gray-400">{crypto.name}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Projected Returns Calculator */}
              {calculatedGrowth && (
                <div className="bg-gray-900 rounded-xl p-6 mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Calculator className="w-5 h-5 text-emerald-400" />
                    <h3 className="font-semibold">Projected Returns</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-gray-800 rounded-lg">
                      <p className="text-xs text-gray-500 mb-1">After 7 Days</p>
                      <p className="text-lg font-semibold text-emerald-400">
                        {formatCurrency(calculatedGrowth.day7.currentValue)}
                      </p>
                      <p className="text-xs text-gray-400">
                        +{formatCurrency(calculatedGrowth.day7.totalEarnings)} profit
                      </p>
                    </div>
                    <div className="p-3 bg-gray-800 rounded-lg">
                      <p className="text-xs text-gray-500 mb-1">After 30 Days</p>
                      <p className="text-lg font-semibold text-emerald-400">
                        {formatCurrency(calculatedGrowth.day30.currentValue)}
                      </p>
                      <p className="text-xs text-gray-400">
                        +{formatCurrency(calculatedGrowth.day30.totalEarnings)} profit
                      </p>
                    </div>
                    <div className="p-3 bg-gray-800 rounded-lg">
                      <p className="text-xs text-gray-500 mb-1">After 90 Days</p>
                      <p className="text-lg font-semibold text-emerald-400">
                        {formatCurrency(calculatedGrowth.day90.currentValue)}
                      </p>
                      <p className="text-xs text-gray-400">
                        +{formatCurrency(calculatedGrowth.day90.totalEarnings)} profit
                      </p>
                    </div>
                    <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
                      <p className="text-xs text-emerald-400 mb-1">End of Plan ({selectedPlan.duration} days)</p>
                      <p className="text-lg font-semibold text-emerald-400">
                        {formatCurrency(calculatedGrowth.endOfPlan.currentValue)}
                      </p>
                      <p className="text-xs text-emerald-300">
                        +{formatCurrency(calculatedGrowth.endOfPlan.totalEarnings)} total profit
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg flex items-start gap-2">
                    <Info className="w-4 h-4 text-amber-400 mt-0.5" />
                    <p className="text-sm text-amber-200">
                      Returns are calculated with daily compounding at {selectedPlan.dailyROI}% per day. 
                      Actual results may vary based on market conditions.
                    </p>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-4">
                <button
                  onClick={() => setStep('select')}
                  className="flex-1 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-medium"
                >
                  Back
                </button>
                <button
                  onClick={handleProceedToConfirm}
                  disabled={!calculatedGrowth}
                  className="flex-1 py-3 bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg font-medium flex items-center justify-center gap-2"
                >
                  Continue <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 'confirm' && selectedPlan && calculatedGrowth && (
            <motion.div
              key="confirm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-gray-900 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-emerald-400" />
                  Confirm Your Investment
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-gray-800">
                    <span className="text-gray-400">Plan</span>
                    <span className="font-medium">{selectedPlan.name}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-800">
                    <span className="text-gray-400">Investment Amount</span>
                    <span className="font-medium">{formatCurrency(parseFloat(investmentAmount))}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-800">
                    <span className="text-gray-400">Cryptocurrency</span>
                    <span className="font-medium">{selectedCrypto.toUpperCase()}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-800">
                    <span className="text-gray-400">Daily ROI</span>
                    <span className="font-medium text-emerald-400">{selectedPlan.dailyROI}%</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-800">
                    <span className="text-gray-400">Duration</span>
                    <span className="font-medium">{selectedPlan.duration} days</span>
                  </div>
                  <div className="flex justify-between py-3 bg-emerald-500/10 px-3 rounded-lg">
                    <span className="text-emerald-400">Projected Total Return</span>
                    <span className="font-bold text-emerald-400">
                      {formatCurrency(calculatedGrowth.endOfPlan.currentValue)}
                    </span>
                  </div>
                </div>

                {/* Payment Address */}
                <div className="mt-6 p-4 bg-gray-800 rounded-lg">
                  <p className="text-sm text-gray-400 mb-2">Send {selectedCrypto.toUpperCase()} to:</p>
                  <div className="p-3 bg-gray-900 rounded font-mono text-sm break-all">
                    {selectedCrypto === 'btc' && 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh'}
                    {selectedCrypto === 'eth' && '0x742d35Cc6634C0532925a3b844Bc9e7595f8fEf2'}
                    {selectedCrypto === 'usdt' && 'TN3cFnPzFLmABvKnVQs9dpM4fH8LjQrpVP'}
                    {selectedCrypto === 'usdc' && '0x742d35Cc6634C0532925a3b844Bc9e7595f8fEf2'}
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Send exactly {formatCurrency(parseFloat(investmentAmount))} worth of {selectedCrypto.toUpperCase()}
                  </p>
                </div>

                {/* Terms */}
                <div className="mt-4 flex items-start gap-2">
                  <input type="checkbox" id="terms" className="mt-1" />
                  <label htmlFor="terms" className="text-sm text-gray-400">
                    I understand that cryptocurrency investments carry risks and I have read the{' '}
                    <a href="/terms" className="text-emerald-400 hover:underline">Terms of Service</a>
                  </label>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <button
                  onClick={() => setStep('amount')}
                  className="flex-1 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-medium"
                >
                  Back
                </button>
                <button
                  onClick={handleConfirmInvestment}
                  className="flex-1 py-3 bg-emerald-500 hover:bg-emerald-600 rounded-lg font-medium flex items-center justify-center gap-2"
                >
                  <Wallet className="w-4 h-4" />
                  Confirm Investment
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
