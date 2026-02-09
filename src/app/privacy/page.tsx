'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header with 3D Assets */}
          <div className="flex items-center justify-center gap-12 mb-12">
            <div className="hidden xl:block relative w-48 h-48 flex-shrink-0">
              <Image src="/images/3d-transparent/secure-vault.png" alt="" fill className="object-contain drop-shadow-2xl" />
            </div>
            <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
            <div className="hidden xl:block relative w-48 h-48 flex-shrink-0">
              <Image src="/images/3d-transparent/premium-card.png" alt="" fill className="object-contain drop-shadow-2xl" />
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
          <div className="card p-8 space-y-6 text-gray-300">
            <p className="text-gray-400">Last updated: February 2024</p>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Information We Collect</h2>
              <p>
                We collect information you provide directly, including name, email, phone number, 
                government ID for KYC verification, and wallet addresses for payouts.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. How We Use Your Information</h2>
              <p>
                We use your information to provide our services, process transactions, comply with legal requirements, 
                communicate with you, and improve our platform.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. Data Security</h2>
              <p>
                We implement bank-grade security measures including AES-256 encryption, multi-signature wallets, 
                and 24/7 monitoring to protect your data and assets.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Data Sharing</h2>
              <p>
                We do not sell your personal information. We may share data with service providers 
                who assist in operating our platform, and as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal information. 
                Contact privacy@quantroy.com to exercise these rights.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Cookies</h2>
              <p>
                We use cookies to improve your experience, analyze usage, and provide personalized content. 
                You can manage cookie preferences in your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">7. Data Retention</h2>
              <p>
                We retain your information for as long as your account is active and as required by law. 
                You may request deletion of your account and data at any time.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">8. Contact</h2>
              <p>
                For privacy-related inquiries, contact us at privacy@quantroy.com.
              </p>
            </section>
          </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
