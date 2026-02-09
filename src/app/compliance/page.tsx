'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Shield, CheckCircle, FileText, Users, Globe, Scale } from 'lucide-react';

const complianceAreas = [
  {
    icon: Users,
    title: 'KYC (Know Your Customer)',
    desc: 'All users must complete identity verification before investing. We verify government-issued IDs, proof of address, and conduct ongoing monitoring.',
  },
  {
    icon: Scale,
    title: 'AML (Anti-Money Laundering)',
    desc: 'We maintain robust AML procedures including transaction monitoring, suspicious activity reporting, and sanctions screening.',
  },
  {
    icon: Globe,
    title: 'International Standards',
    desc: 'Our compliance framework aligns with FATF recommendations and international best practices for virtual asset service providers.',
  },
  {
    icon: FileText,
    title: 'Record Keeping',
    desc: 'We maintain comprehensive records of all transactions and customer interactions as required by applicable regulations.',
  },
];

const licenses = [
  { jurisdiction: 'United Arab Emirates', status: 'Licensed', body: 'VARA (pending)' },
  { jurisdiction: 'European Union', status: 'Compliant', body: 'MiCA Framework' },
  { jurisdiction: 'United States', status: 'Compliant', body: 'FinCEN MSB' },
  { jurisdiction: 'United Kingdom', status: 'Registered', body: 'FCA' },
];

export default function CompliancePage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-12">
            <div className="hidden xl:block relative w-64 h-64 flex-shrink-0">
              <Image src="/images/3d-transparent/secure-vault.png" alt="" fill className="object-contain drop-shadow-2xl" />
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-900/30 border border-emerald-700/30 text-emerald-400 text-sm mb-6">
                <Shield size={16} className="mr-2" /> Regulatory Compliance
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Compliance & <span className="text-emerald-400">Licensing</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Quantroy operates with full regulatory compliance, prioritizing transparency and legal adherence in all jurisdictions.
              </p>
            </div>
            
            <div className="hidden xl:block relative w-64 h-64 flex-shrink-0">
              <Image src="/images/3d-transparent/premium-card.png" alt="" fill className="object-contain drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Areas */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Compliance Framework</h2>
            <p className="text-gray-400">Comprehensive measures to ensure regulatory adherence</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {complianceAreas.map((area, i) => (
              <div key={i} className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                    <area.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{area.title}</h3>
                    <p className="text-gray-400 text-sm">{area.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Licenses */}
      <section className="py-16 px-4 bg-[#061510]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Regulatory Status</h2>
            <p className="text-gray-400">Our licensing and registration status by jurisdiction</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {licenses.map((license, i) => (
              <div key={i} className="card p-6 text-center">
                <CheckCircle size={32} className="text-emerald-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-1">{license.jurisdiction}</h3>
                <p className="text-emerald-400 text-sm mb-2">{license.status}</p>
                <p className="text-gray-400 text-xs">{license.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="card p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Our Commitment</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                At Quantroy, we believe that regulatory compliance is not just a legal requirement—it's a cornerstone 
                of trust. We work closely with regulators and industry bodies to ensure our operations meet the highest standards.
              </p>
              <p>
                We are committed to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Maintaining transparent operations</li>
                <li>Protecting customer funds and data</li>
                <li>Preventing financial crime</li>
                <li>Cooperating with regulatory authorities</li>
                <li>Adapting to evolving regulatory requirements</li>
              </ul>
              <p>
                For compliance-related inquiries, please contact our compliance team at{' '}
                <a href="mailto:compliance@quantroy.com" className="text-emerald-400 hover:underline">
                  compliance@quantroy.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
