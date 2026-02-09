'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function TermsPage() {
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
            <h1 className="text-4xl font-bold text-white">Terms of Service</h1>
            <div className="hidden xl:block relative w-48 h-48 flex-shrink-0">
              <Image src="/images/3d-transparent/crypto-coins.png" alt="" fill className="object-contain drop-shadow-2xl" />
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
          <div className="card p-8 space-y-6 text-gray-300">
            <p className="text-gray-400">Last updated: February 2024</p>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the Quantroy platform, you agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Eligibility</h2>
              <p>
                You must be at least 18 years old and legally able to enter into contracts to use our services. 
                By using Quantroy, you represent that you meet these requirements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. Account Registration</h2>
              <p>
                To use our services, you must create an account and complete our verification process. 
                You are responsible for maintaining the confidentiality of your account credentials.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Investment Risks</h2>
              <p>
                Cryptocurrency investments carry significant risk. Past performance is not indicative of future results. 
                You may lose some or all of your investment. Only invest what you can afford to lose.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Fees and Payments</h2>
              <p>
                We charge management fees as disclosed on our platform. All fees are deducted from returns before payouts. 
                Payouts are processed monthly to your registered wallet address.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Prohibited Activities</h2>
              <p>
                You may not use our platform for money laundering, fraud, or any illegal activities. 
                We reserve the right to suspend or terminate accounts that violate these terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">7. Limitation of Liability</h2>
              <p>
                Quantroy is not liable for any losses arising from market conditions, technical failures, 
                or circumstances beyond our control. Our liability is limited to the fees paid by you.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">8. Changes to Terms</h2>
              <p>
                We may update these terms from time to time. Continued use of our services after changes 
                constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">9. Contact</h2>
              <p>
                For questions about these terms, contact us at legal@quantroy.com.
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
