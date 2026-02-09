'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Mail, MessageSquare, Clock, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-12">
            <div className="hidden xl:block relative w-64 h-64 flex-shrink-0">
              <Image src="/images/3d-transparent/phone-app.png" alt="" fill className="object-contain drop-shadow-2xl" />
            </div>
            
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Contact <span className="text-emerald-400">Us</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Have questions? We're here to help. Reach out to our support team anytime.
              </p>
            </div>
            
            <div className="hidden xl:block relative w-64 h-64 flex-shrink-0">
              <Image src="/images/3d-transparent/secure-vault.png" alt="" fill className="object-contain drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Email Support</h3>
                    <p className="text-gray-400 mb-2">For general inquiries and support</p>
                    <a href="mailto:support@quantroy.com" className="text-emerald-400 hover:underline">
                      support@quantroy.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                    <MessageSquare size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Live Chat</h3>
                    <p className="text-gray-400 mb-2">Chat with our AI assistant 24/7</p>
                    <span className="text-emerald-400">Available in Dashboard</span>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Response Time</h3>
                    <p className="text-gray-400 mb-2">We typically respond within</p>
                    <span className="text-emerald-400">24 hours</span>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Headquarters</h3>
                    <p className="text-gray-400">
                      Dubai International Financial Centre<br />
                      Dubai, United Arab Emirates
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6">
                    <Send size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                  <p className="text-gray-400">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Your Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg bg-[#0a1f1a] border border-emerald-900/50 text-white focus:border-emerald-500 focus:outline-none"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-lg bg-[#0a1f1a] border border-emerald-900/50 text-white focus:border-emerald-500 focus:outline-none"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Subject</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg bg-[#0a1f1a] border border-emerald-900/50 text-white focus:border-emerald-500 focus:outline-none"
                        placeholder="How can we help?"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Message</label>
                      <textarea
                        className="w-full px-4 py-3 rounded-lg bg-[#0a1f1a] border border-emerald-900/50 text-white focus:border-emerald-500 focus:outline-none h-32 resize-none"
                        placeholder="Tell us more about your inquiry..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                      Send Message <Send size={18} />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
