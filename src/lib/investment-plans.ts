// Investment Plans Configuration - 20+ Plans with Automatic ROI Calculation

export interface InvestmentPlan {
  id: string;
  name: string;
  tier: 'starter' | 'growth' | 'premium' | 'elite' | 'vip';
  minInvestment: number;
  maxInvestment: number;
  dailyROI: number; // Daily return percentage
  monthlyROI: number; // Monthly return percentage (approx)
  duration: number; // Days
  totalReturn: number; // Total return percentage at end
  features: string[];
  popular?: boolean;
  recommended?: boolean;
}

export const INVESTMENT_PLANS: InvestmentPlan[] = [
  // STARTER TIER (Entry Level)
  {
    id: 'starter-basic',
    name: 'Starter Basic',
    tier: 'starter',
    minInvestment: 100,
    maxInvestment: 499,
    dailyROI: 0.5,
    monthlyROI: 15,
    duration: 30,
    totalReturn: 15,
    features: ['Daily compounding', 'Email support', 'Basic analytics']
  },
  {
    id: 'starter-plus',
    name: 'Starter Plus',
    tier: 'starter',
    minInvestment: 500,
    maxInvestment: 999,
    dailyROI: 0.6,
    monthlyROI: 18,
    duration: 30,
    totalReturn: 18,
    features: ['Daily compounding', 'Email support', 'Basic analytics', 'Weekly reports'],
    popular: true
  },
  {
    id: 'starter-pro',
    name: 'Starter Pro',
    tier: 'starter',
    minInvestment: 1000,
    maxInvestment: 2499,
    dailyROI: 0.7,
    monthlyROI: 21,
    duration: 30,
    totalReturn: 21,
    features: ['Daily compounding', 'Priority support', 'Advanced analytics', 'Weekly reports']
  },

  // GROWTH TIER (Intermediate)
  {
    id: 'growth-basic',
    name: 'Growth Basic',
    tier: 'growth',
    minInvestment: 2500,
    maxInvestment: 4999,
    dailyROI: 0.8,
    monthlyROI: 24,
    duration: 45,
    totalReturn: 36,
    features: ['Daily compounding', 'Priority support', 'AI insights', 'Bi-weekly reports']
  },
  {
    id: 'growth-plus',
    name: 'Growth Plus',
    tier: 'growth',
    minInvestment: 5000,
    maxInvestment: 9999,
    dailyROI: 0.9,
    monthlyROI: 27,
    duration: 45,
    totalReturn: 40.5,
    features: ['Daily compounding', 'Priority support', 'AI insights', 'Weekly reports', 'Risk management'],
    popular: true
  },
  {
    id: 'growth-pro',
    name: 'Growth Pro',
    tier: 'growth',
    minInvestment: 10000,
    maxInvestment: 24999,
    dailyROI: 1.0,
    monthlyROI: 30,
    duration: 45,
    totalReturn: 45,
    features: ['Daily compounding', 'Dedicated support', 'AI insights', 'Daily reports', 'Advanced risk management'],
    recommended: true
  },
  {
    id: 'growth-max',
    name: 'Growth Max',
    tier: 'growth',
    minInvestment: 25000,
    maxInvestment: 49999,
    dailyROI: 1.1,
    monthlyROI: 33,
    duration: 45,
    totalReturn: 49.5,
    features: ['Daily compounding', 'Dedicated manager', 'AI insights', 'Real-time reports', 'Portfolio rebalancing']
  },

  // PREMIUM TIER (Advanced)
  {
    id: 'premium-basic',
    name: 'Premium Basic',
    tier: 'premium',
    minInvestment: 50000,
    maxInvestment: 74999,
    dailyROI: 1.2,
    monthlyROI: 36,
    duration: 60,
    totalReturn: 72,
    features: ['Daily compounding', 'Account manager', 'AI optimization', 'Real-time analytics', 'Tax optimization']
  },
  {
    id: 'premium-plus',
    name: 'Premium Plus',
    tier: 'premium',
    minInvestment: 75000,
    maxInvestment: 99999,
    dailyROI: 1.3,
    monthlyROI: 39,
    duration: 60,
    totalReturn: 78,
    features: ['Daily compounding', 'Senior manager', 'AI optimization', 'Custom strategies', 'Tax optimization'],
    popular: true
  },
  {
    id: 'premium-pro',
    name: 'Premium Pro',
    tier: 'premium',
    minInvestment: 100000,
    maxInvestment: 149999,
    dailyROI: 1.4,
    monthlyROI: 42,
    duration: 60,
    totalReturn: 84,
    features: ['Daily compounding', 'Senior manager', 'Custom AI models', 'Hedge strategies', 'Tax planning']
  },
  {
    id: 'premium-max',
    name: 'Premium Max',
    tier: 'premium',
    minInvestment: 150000,
    maxInvestment: 249999,
    dailyROI: 1.5,
    monthlyROI: 45,
    duration: 60,
    totalReturn: 90,
    features: ['Daily compounding', 'Dedicated team', 'Custom AI', 'Multi-strategy', 'Estate planning'],
    recommended: true
  },

  // ELITE TIER (High Net Worth)
  {
    id: 'elite-basic',
    name: 'Elite Basic',
    tier: 'elite',
    minInvestment: 250000,
    maxInvestment: 499999,
    dailyROI: 1.6,
    monthlyROI: 48,
    duration: 90,
    totalReturn: 144,
    features: ['Daily compounding', 'Elite team', 'Institutional strategies', 'Multi-asset', 'Wealth management']
  },
  {
    id: 'elite-plus',
    name: 'Elite Plus',
    tier: 'elite',
    minInvestment: 500000,
    maxInvestment: 749999,
    dailyROI: 1.7,
    monthlyROI: 51,
    duration: 90,
    totalReturn: 153,
    features: ['Daily compounding', 'Elite team', 'Quant strategies', 'Global markets', 'Family office services'],
    popular: true
  },
  {
    id: 'elite-pro',
    name: 'Elite Pro',
    tier: 'elite',
    minInvestment: 750000,
    maxInvestment: 999999,
    dailyROI: 1.8,
    monthlyROI: 54,
    duration: 90,
    totalReturn: 162,
    features: ['Daily compounding', 'Elite team', 'Proprietary algorithms', 'Alternative investments', 'Succession planning']
  },
  {
    id: 'elite-max',
    name: 'Elite Max',
    tier: 'elite',
    minInvestment: 1000000,
    maxInvestment: 2499999,
    dailyROI: 1.9,
    monthlyROI: 57,
    duration: 90,
    totalReturn: 171,
    features: ['Daily compounding', 'Elite team', 'Custom algorithms', 'Private deals', 'Legacy planning'],
    recommended: true
  },

  // VIP TIER (Ultra High Net Worth)
  {
    id: 'vip-silver',
    name: 'VIP Silver',
    tier: 'vip',
    minInvestment: 2500000,
    maxInvestment: 4999999,
    dailyROI: 2.0,
    monthlyROI: 60,
    duration: 180,
    totalReturn: 360,
    features: ['Daily compounding', 'VIP team', 'Exclusive deals', 'Private equity', 'Concierge service']
  },
  {
    id: 'vip-gold',
    name: 'VIP Gold',
    tier: 'vip',
    minInvestment: 5000000,
    maxInvestment: 9999999,
    dailyROI: 2.2,
    monthlyROI: 66,
    duration: 180,
    totalReturn: 396,
    features: ['Daily compounding', 'VIP team', 'Co-investment', 'Venture deals', '24/7 concierge'],
    popular: true
  },
  {
    id: 'vip-platinum',
    name: 'VIP Platinum',
    tier: 'vip',
    minInvestment: 10000000,
    maxInvestment: 24999999,
    dailyROI: 2.4,
    monthlyROI: 72,
    duration: 180,
    totalReturn: 432,
    features: ['Daily compounding', 'Board access', 'Direct investments', 'Fund partnerships', 'White glove service']
  },
  {
    id: 'vip-diamond',
    name: 'VIP Diamond',
    tier: 'vip',
    minInvestment: 25000000,
    maxInvestment: 100000000,
    dailyROI: 2.5,
    monthlyROI: 75,
    duration: 365,
    totalReturn: 912.5,
    features: ['Daily compounding', 'Advisory board', 'Fund management', 'Global network', 'Bespoke everything'],
    recommended: true
  }
];

// Calculate investment growth over time
export function calculateGrowth(
  principal: number,
  plan: InvestmentPlan,
  daysElapsed: number
): {
  currentValue: number;
  totalEarnings: number;
  dailyEarnings: number;
  projectedTotal: number;
  progressPercent: number;
} {
  // Compound daily
  const dailyRate = plan.dailyROI / 100;
  const currentValue = principal * Math.pow(1 + dailyRate, daysElapsed);
  const totalEarnings = currentValue - principal;
  const dailyEarnings = currentValue * dailyRate;
  
  // Projected total at end of plan
  const projectedTotal = principal * Math.pow(1 + dailyRate, plan.duration);
  
  // Progress percentage
  const progressPercent = Math.min((daysElapsed / plan.duration) * 100, 100);
  
  return {
    currentValue: Math.round(currentValue * 100) / 100,
    totalEarnings: Math.round(totalEarnings * 100) / 100,
    dailyEarnings: Math.round(dailyEarnings * 100) / 100,
    projectedTotal: Math.round(projectedTotal * 100) / 100,
    progressPercent: Math.round(progressPercent * 10) / 10
  };
}

// Get plan by ID
export function getPlanById(planId: string): InvestmentPlan | undefined {
  return INVESTMENT_PLANS.find(p => p.id === planId);
}

// Get plans by tier
export function getPlansByTier(tier: InvestmentPlan['tier']): InvestmentPlan[] {
  return INVESTMENT_PLANS.filter(p => p.tier === tier);
}

// Get recommended plan for amount
export function getRecommendedPlan(amount: number): InvestmentPlan | undefined {
  return INVESTMENT_PLANS.find(
    p => amount >= p.minInvestment && amount <= p.maxInvestment && p.recommended
  ) || INVESTMENT_PLANS.find(
    p => amount >= p.minInvestment && amount <= p.maxInvestment
  );
}

// Format currency
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
}

// Get tier color
export function getTierColor(tier: InvestmentPlan['tier']): string {
  switch (tier) {
    case 'starter': return 'text-emerald-400';
    case 'growth': return 'text-blue-400';
    case 'premium': return 'text-purple-400';
    case 'elite': return 'text-amber-400';
    case 'vip': return 'text-rose-400';
    default: return 'text-gray-400';
  }
}

export function getTierBgColor(tier: InvestmentPlan['tier']): string {
  switch (tier) {
    case 'starter': return 'bg-emerald-500/20 border-emerald-500/30';
    case 'growth': return 'bg-blue-500/20 border-blue-500/30';
    case 'premium': return 'bg-purple-500/20 border-purple-500/30';
    case 'elite': return 'bg-amber-500/20 border-amber-500/30';
    case 'vip': return 'bg-rose-500/20 border-rose-500/30';
    default: return 'bg-gray-500/20 border-gray-500/30';
  }
}
