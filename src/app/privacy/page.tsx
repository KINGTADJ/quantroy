'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { 
  FadeUp, FadeIn, StaggerContainer, StaggerItem, 
  Float, SectionBlend, BlurIn 
} from '@/components/ScrollAnimations';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const sections = [
  { title: '1. Information We Collect', content: 'We collect information you provide directly, including name, email, phone number, government ID for KYC verification, and wallet addresses for payouts.' },
  { title: '2. How We Use Your Information', content: 'We use your information to provide our services, process transactions, comply with legal requirements, communicate with you, and improve our platform.' },
  { title: '3. Data Security', content: 'We implement bank-grade security measures including AES-256 encryption, multi-signature wallets, and 24/7 monitoring to protect your data and assets.' },
  { title: '4. Data Sharing', content: 'We do not sell your personal information. We may share data with service providers who assist in operating our platform, and as required by law.' },
  { title: '5. Your Rights', content: 'You have the right to access, correct, or delete your personal information. Contact privacy@quantroy.com to exercise these rights.' },
  { title: '6. Cookies', content: 'We use cookies to improve your experience, analyze usage, and provide personalized content. You can manage cookie preferences in your browser settings.' },
  { title: '7. Data Retention', content: 'We retain your information for as long as your account is active and as required by law. You may request deletion of your account and data at any time.' },
  { title: '8. Contact', content: 'For privacy-related inquiries, contact us at privacy@quantroy.com.' },
];

export default function PrivacyPage() {
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
                  <Image src="/images/3d-transparent/secure-vault.png" alt="" fill className="object-contain drop-shadow-2xl" />
                </div>
              </FadeIn>
            </Float>
            <div className="text-center">
              <FadeIn direction="up" delay={0.1}>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-900/30 border border-emerald-700/30 text-emerald-400 text-sm mb-6">
                  <Shield size={16} className="mr-2" /> Your Privacy Matters
                </div>
              </FadeIn>
              <BlurIn>
                <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
              </BlurIn>
            </div>
            <Float duration={3.5} y={15} className="">
              <FadeIn direction="right">
                <div className="relative w-48 h-48 flex-shrink-0">
                  <Image src="/images/3d-transparent/premium-card.png" alt="" fill className="object-contain drop-shadow-2xl" />
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
