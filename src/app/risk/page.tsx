'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { 
  FadeUp, FadeIn, Float, SectionBlend, BlurIn 
} from '@/components/ScrollAnimations';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

const riskSections = [
  { title: '1. Market Risk', content: 'Cryptocurrency markets are highly volatile. Prices can fluctuate dramatically in short periods. Historical performance does not guarantee future results. The value of your investment may go down as well as up.' },
  { title: '2. Regulatory Risk', content: "Cryptocurrency regulations vary by jurisdiction and are subject to change. Regulatory changes may adversely affect the value of cryptocurrencies or restrict their use. Quantroy operates in compliance with applicable laws but cannot guarantee future regulatory treatment." },
  { title: '3. Technology Risk', content: 'Blockchain technology and cryptocurrency systems may experience bugs, vulnerabilities, or failures. Smart contracts may contain errors. While we employ robust security measures, no system is completely immune to risk.' },
  { title: '4. Liquidity Risk', content: 'In certain market conditions, it may be difficult to buy or sell cryptocurrencies at desired prices. This may affect the timing and value of withdrawals from your investment.' },
  { title: '5. Counterparty Risk', content: 'While Quantroy maintains rigorous operational standards, there is inherent risk in entrusting assets to any third party. We mitigate this through insurance, segregated accounts, and regulatory compliance.' },
  { title: '6. Past Performance', content: 'Past performance of investment strategies is not indicative of future results. Returns shown are historical and may not be achieved in the future. Market conditions change and strategies may perform differently.' },
  { title: '7. No Guarantees', content: 'Quantroy does not guarantee any specific returns or outcomes. Projected returns are targets based on historical data and market analysis, not promises. Actual results may vary significantly.' },
  { title: '8. Investor Responsibilities', content: 'You are responsible for understanding the risks involved in cryptocurrency investing. We recommend consulting with a qualified financial advisor before making investment decisions. Never invest more than you can afford to lose.' },
  { title: '9. Tax Implications', content: 'Cryptocurrency investments may have tax implications in your jurisdiction. You are responsible for understanding and complying with applicable tax laws. Consult a tax professional for guidance.' },
];

export default function RiskPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header with 3D Assets */}
          <div className="flex items-center justify-center gap-12 mb-12">
            <Float duration={4} y={12} className="hidden xl:block">
              <FadeIn direction="left">
                <div className="relative w-48 h-48 flex-shrink-0">
                  <Image src="/images/3d-transparent/gold-bars.png" alt="" fill className="object-contain drop-shadow-2xl" />
                </div>
              </FadeIn>
            </Float>
            <div className="text-center">
              <FadeIn direction="up" delay={0.1}>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-900/30 border border-amber-700/30 text-amber-400 text-sm mb-6">
                  <AlertTriangle size={16} className="mr-2" /> Important Information
                </div>
              </FadeIn>
              <BlurIn>
                <h1 className="text-4xl font-bold text-white">Risk Disclosure</h1>
              </BlurIn>
            </div>
            <Float duration={3.5} y={15} className="hidden xl:block">
              <FadeIn direction="right">
                <div className="relative w-48 h-48 flex-shrink-0">
                  <Image src="/images/3d-transparent/crypto-coins.png" alt="" fill className="object-contain drop-shadow-2xl" />
                </div>
              </FadeIn>
            </Float>
          </div>
          
          {/* Section Blend */}
          <SectionBlend fromColor="rgb(5, 25, 20)" toColor="rgb(8, 32, 26)" height={60} />
          
          <div className="max-w-4xl mx-auto">
            <FadeUp>
              <div className="card p-8 space-y-6 text-gray-300">
                <motion.p 
                  className="text-amber-400 font-semibold"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                >
                  Last updated: February 2024
                </motion.p>

                <motion.div 
                  className="p-4 rounded-lg bg-amber-900/20 border border-amber-700/30"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring" }}
                >
                  <p className="text-amber-300 font-medium">
                    ⚠️ IMPORTANT: Cryptocurrency investments carry significant risk. You may lose some or all of your investment. Only invest what you can afford to lose.
                  </p>
                </motion.div>

                {riskSections.map((section, i) => (
                  <motion.section
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-xl font-semibold text-white mb-3">{section.title}</h2>
                    <p>{section.content}</p>
                  </motion.section>
                ))}

                <motion.div 
                  className="p-4 rounded-lg bg-emerald-900/20 border border-emerald-700/30 mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="text-emerald-300">
                    By using Quantroy, you acknowledge that you have read, understood, and accepted these risks.
                  </p>
                </motion.div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
