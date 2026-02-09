'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Shield, Lock, Eye, Server, Key, AlertTriangle, CheckCircle } from 'lucide-react';

const securityFeatures = [
  {
    icon: Lock,
    title: 'AES-256 Encryption',
    desc: 'All data is encrypted at rest using military-grade AES-256 encryption, ensuring your information is protected.',
  },
  {
    icon: Server,
    title: 'Cold Storage',
    desc: '95% of all crypto assets are stored in offline cold wallets, protected from online threats.',
  },
  {
    icon: Key,
    title: 'Multi-Signature Wallets',
    desc: 'All transactions require multiple authorized signatures, preventing unauthorized access.',
  },
  {
    icon: Eye,
    title: '24/7 Monitoring',
    desc: 'Our security team monitors all systems around the clock for suspicious activity.',
  },
  {
    icon: Shield,
    title: 'DDoS Protection',
    desc: 'Enterprise-grade DDoS protection ensures our platform remains accessible at all times.',
  },
  {
    icon: AlertTriangle,
    title: 'Fraud Detection',
    desc: 'AI-powered fraud detection systems identify and block suspicious transactions.',
  },
];

const certifications = [
  { name: 'SOC 2 Type II', status: 'Certified' },
  { name: 'ISO 27001', status: 'Certified' },
  { name: 'GDPR', status: 'Compliant' },
  { name: 'PCI DSS', status: 'Compliant' },
];

export default function SecurityPage() {
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
                <Shield size={16} className="mr-2" /> Enterprise Security
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Bank-Grade <span className="text-emerald-400">Security</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Your security is our top priority. We employ industry-leading measures to protect your assets and data.
              </p>
            </div>
            
            <div className="hidden xl:block relative w-64 h-64 flex-shrink-0">
              <Image src="/images/3d-transparent/premium-card.png" alt="" fill className="object-contain drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Security Infrastructure</h2>
            <p className="text-gray-400">Multiple layers of protection for your peace of mind</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature, i) => (
              <div key={i} className="card p-6">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                  <feature.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Protect You */}
      <section className="py-16 px-4 bg-[#061510]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">How We Protect Your Assets</h2>
          </div>
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Asset Segregation</h3>
              <p className="text-gray-400">
                Client funds are kept completely separate from operational funds. Your investments are never used for company operations.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Insurance Coverage</h3>
              <p className="text-gray-400">
                We maintain comprehensive insurance coverage to protect against potential losses from security breaches or operational failures.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Regular Audits</h3>
              <p className="text-gray-400">
                Independent third-party auditors regularly review our security practices, financial records, and smart contracts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Certifications & Compliance</h2>
            <p className="text-gray-400">Meeting the highest industry standards</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, i) => (
              <div key={i} className="card p-6 text-center">
                <CheckCircle size={32} className="text-emerald-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white">{cert.name}</h3>
                <p className="text-emerald-400 text-sm">{cert.status}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Report Vulnerability */}
      <section className="py-16 px-4 bg-[#061510]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Security Concerns?</h2>
          <p className="text-gray-400 mb-8">
            If you discover a security vulnerability, please report it to our security team immediately.
          </p>
          <a href="mailto:security@quantroy.com" className="btn-primary">
            Report to security@quantroy.com
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
