'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    category: 'Getting Started',
    questions: [
      {
        q: 'What is Quantroy?',
        a: 'Quantroy is a professional crypto investment platform that uses AI-powered strategies to help you grow your wealth. We offer managed investment strategies with monthly payouts.',
      },
      {
        q: 'How do I create an account?',
        a: 'Click "Get Started" on our homepage, fill in your details, verify your email, and complete our KYC process. The entire process takes about 10 minutes.',
      },
      {
        q: 'What is the minimum investment?',
        a: 'Our Starter strategy begins at just $500. Higher tiers like Pro ($5,000), Elite ($50,000), and VIP ($500,000+) offer additional benefits and features.',
      },
      {
        q: 'How long does KYC verification take?',
        a: 'KYC verification typically takes 24-48 hours. You\'ll need to provide a government-issued ID and proof of address.',
      },
    ],
  },
  {
    category: 'Investments & Returns',
    questions: [
      {
        q: 'How are returns generated?',
        a: 'Our AI-powered algorithms analyze market conditions and execute trades across multiple cryptocurrency markets. We use advanced risk management to optimize returns while protecting your capital.',
      },
      {
        q: 'When do I receive payouts?',
        a: 'Payouts are processed monthly, typically within the first 5 business days of each month. Funds are sent directly to your registered crypto wallet.',
      },
      {
        q: 'What cryptocurrencies do you support?',
        a: 'We currently support BTC, ETH, USDT, and USDC for deposits and withdrawals. Our trading strategies cover a wider range of assets.',
      },
      {
        q: 'Can I withdraw my investment anytime?',
        a: 'Yes, you can request a withdrawal at any time. Standard withdrawals are processed within 3-5 business days. Early withdrawal before the end of your term may affect your returns.',
      },
    ],
  },
  {
    category: 'Security & Safety',
    questions: [
      {
        q: 'Is my investment safe?',
        a: 'We use bank-grade security including multi-signature wallets, cold storage for 95% of assets, AES-256 encryption, and 24/7 monitoring. However, all investments carry risk.',
      },
      {
        q: 'Are you regulated?',
        a: 'Yes, Quantroy operates under regulatory frameworks in multiple jurisdictions and maintains full KYC/AML compliance.',
      },
      {
        q: 'What happens if something goes wrong?',
        a: 'We have comprehensive insurance coverage and risk management protocols. Our support team is available 24/7 to assist with any issues.',
      },
    ],
  },
  {
    category: 'Affiliate Program',
    questions: [
      {
        q: 'How does the affiliate program work?',
        a: 'Earn up to 6% commission on direct referrals, 3% on level 2, and 1% on level 3 referrals. Commissions are paid monthly with your regular payouts.',
      },
      {
        q: 'How do I get my referral link?',
        a: 'Your unique referral link is available in your dashboard under the "Referrals" section. Share it with friends and family to start earning.',
      },
      {
        q: 'Is there a limit to how much I can earn?',
        a: 'No! There\'s no cap on affiliate earnings. The more people you refer, the more you earn.',
      },
    ],
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card overflow-hidden">
      <button
        className="w-full px-6 py-4 flex items-center justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-white font-medium pr-4">{question}</span>
        <ChevronDown
          size={20}
          className={`text-emerald-400 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-gray-400">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-12">
            <div className="hidden xl:block relative w-64 h-64 flex-shrink-0">
              <Image src="/images/3d-transparent/crypto-coins.png" alt="" fill className="object-contain drop-shadow-2xl" />
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-900/30 border border-emerald-700/30 text-emerald-400 text-sm mb-6">
                <HelpCircle size={16} className="mr-2" /> Help Center
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Frequently Asked <span className="text-emerald-400">Questions</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Find answers to common questions about Quantroy, investments, and more.
              </p>
            </div>
            
            <div className="hidden xl:block relative w-64 h-64 flex-shrink-0">
              <Image src="/images/3d-transparent/gold-bars.png" alt="" fill className="object-contain drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {faqs.map((section, i) => (
            <div key={i}>
              <h2 className="text-2xl font-bold text-white mb-6">{section.category}</h2>
              <div className="space-y-4">
                {section.questions.map((faq, j) => (
                  <FAQItem key={j} question={faq.q} answer={faq.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 px-4 bg-[#061510]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Still Have Questions?</h2>
          <p className="text-gray-400 mb-8">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <a href="/contact" className="btn-primary">
            Contact Support
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
