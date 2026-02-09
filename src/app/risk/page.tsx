'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { AlertTriangle } from 'lucide-react';

export default function RiskPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header with 3D Assets */}
          <div className="flex items-center justify-center gap-12 mb-12">
            <div className="hidden xl:block relative w-48 h-48 flex-shrink-0">
              <Image src="/images/3d-transparent/gold-bars.png" alt="" fill className="object-contain drop-shadow-2xl" />
            </div>
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-900/30 border border-amber-700/30 text-amber-400 text-sm mb-6">
                <AlertTriangle size={16} className="mr-2" /> Important Information
              </div>
              <h1 className="text-4xl font-bold text-white">Risk Disclosure</h1>
            </div>
            <div className="hidden xl:block relative w-48 h-48 flex-shrink-0">
              <Image src="/images/3d-transparent/crypto-coins.png" alt="" fill className="object-contain drop-shadow-2xl" />
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="card p-8 space-y-6 text-gray-300">
              <p className="text-amber-400 font-semibold">Last updated: February 2024</p>

              <div className="p-4 rounded-lg bg-amber-900/20 border border-amber-700/30">
                <p className="text-amber-300 font-medium">
                  ⚠️ IMPORTANT: Cryptocurrency investments carry significant risk. You may lose some or all of your investment. Only invest what you can afford to lose.
                </p>
              </div>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">1. Market Risk</h2>
                <p>
                  Cryptocurrency markets are highly volatile. Prices can fluctuate dramatically in short periods. 
                  Historical performance does not guarantee future results. The value of your investment may go down as well as up.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">2. Regulatory Risk</h2>
                <p>
                  Cryptocurrency regulations vary by jurisdiction and are subject to change. Regulatory changes may adversely 
                  affect the value of cryptocurrencies or restrict their use. Quantroy operates in compliance with applicable 
                  laws but cannot guarantee future regulatory treatment.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">3. Technology Risk</h2>
                <p>
                  Blockchain technology and cryptocurrency systems may experience bugs, vulnerabilities, or failures. 
                  Smart contracts may contain errors. While we employ robust security measures, no system is completely immune to risk.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">4. Liquidity Risk</h2>
                <p>
                  In certain market conditions, it may be difficult to buy or sell cryptocurrencies at desired prices. 
                  This may affect the timing and value of withdrawals from your investment.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">5. Counterparty Risk</h2>
                <p>
                  While Quantroy maintains rigorous operational standards, there is inherent risk in entrusting assets 
                  to any third party. We mitigate this through insurance, segregated accounts, and regulatory compliance.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">6. Past Performance</h2>
                <p>
                  Past performance of investment strategies is not indicative of future results. Returns shown are 
                  historical and may not be achieved in the future. Market conditions change and strategies may perform differently.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">7. No Guarantees</h2>
                <p>
                  Quantroy does not guarantee any specific returns or outcomes. Projected returns are targets based on 
                  historical data and market analysis, not promises. Actual results may vary significantly.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">8. Investor Responsibilities</h2>
                <p>
                  You are responsible for understanding the risks involved in cryptocurrency investing. We recommend 
                  consulting with a qualified financial advisor before making investment decisions. Never invest more 
                  than you can afford to lose.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">9. Tax Implications</h2>
                <p>
                  Cryptocurrency investments may have tax implications in your jurisdiction. You are responsible for 
                  understanding and complying with applicable tax laws. Consult a tax professional for guidance.
                </p>
              </section>

              <div className="p-4 rounded-lg bg-emerald-900/20 border border-emerald-700/30 mt-8">
                <p className="text-emerald-300">
                  By using Quantroy, you acknowledge that you have read, understood, and accepted these risks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
