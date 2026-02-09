'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { 
  FadeUp, FadeIn, StaggerContainer, StaggerItem, 
  Float, SectionBlend, BlurIn 
} from '@/components/ScrollAnimations';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const sections = [
  { title: '1. Acceptance of Terms', content: 'By accessing or using the Quantroy platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.' },
  { title: '2. Eligibility', content: 'You must be at least 18 years old and legally able to enter into contracts to use our services. By using Quantroy, you represent that you meet these requirements.' },
  { title: '3. Account Registration', content: 'To use our services, you must create an account and complete our verification process. You are responsible for maintaining the confidentiality of your account credentials.' },
  { title: '4. Investment Risks', content: 'Cryptocurrency investments carry significant risk. Past performance is not indicative of future results. You may lose some or all of your investment. Only invest what you can afford to lose.' },
  { title: '5. Fees and Payments', content: 'We charge management fees as disclosed on our platform. All fees are deducted from returns before payouts. Payouts are processed monthly to your registered wallet address.' },
  { title: '6. Prohibited Activities', content: 'You may not use our platform for money laundering, fraud, or any illegal activities. We reserve the right to suspend or terminate accounts that violate these terms.' },
  { title: '7. Limitation of Liability', content: 'Quantroy is not liable for any losses arising from market conditions, technical failures, or circumstances beyond our control. Our liability is limited to the fees paid by you.' },
  { title: '8. Changes to Terms', content: 'We may update these terms from time to time. Continued use of our services after changes constitutes acceptance of the new terms.' },
  { title: '9. Contact', content: 'For questions about these terms, contact us at legal@quantroy.com.' },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header with 3D Assets */}
          <div className="flex items-center justify-center gap-12 mb-12">
            <Float duration={4} y={12} className="">
              <FadeIn direction="left">
                <div className="relative w-48 h-48 flex-shrink-0">
                  <Image src="/images/3d-transparent/gold-bars.png" alt="" fill className="object-contain drop-shadow-2xl" />
                </div>
              </FadeIn>
            </Float>
            <div className="text-center">
              <FadeIn direction="up" delay={0.1}>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-900/30 border border-emerald-700/30 text-emerald-400 text-sm mb-6">
                  <FileText size={16} className="mr-2" /> Legal Agreement
                </div>
              </FadeIn>
              <BlurIn>
                <h1 className="text-4xl font-bold text-white">Terms of Service</h1>
              </BlurIn>
            </div>
            <Float duration={3.5} y={15} className="">
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
                  className="text-gray-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                >
                  Last updated: February 2024
                </motion.p>

                {sections.map((section, i) => (
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
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
