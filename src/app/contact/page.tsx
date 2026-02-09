'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { 
  FadeUp, FadeIn, StaggerContainer, StaggerItem, 
  Float, SectionBlend, BlurIn 
} from '@/components/ScrollAnimations';
import { motion } from 'framer-motion';
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

  const contactInfo = [
    { icon: Mail, title: 'Email Support', desc: 'For general inquiries and support', value: 'support@quantroy.com', isLink: true },
    { icon: MessageSquare, title: 'Live Chat', desc: 'Chat with our AI assistant 24/7', value: 'Available in Dashboard', isLink: false },
    { icon: Clock, title: 'Response Time', desc: 'We typically respond within', value: '24 hours', isLink: false },
    { icon: MapPin, title: 'Headquarters', desc: 'Dubai International Financial Centre', value: 'Dubai, United Arab Emirates', isLink: false },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-12">
            <Float duration={4} y={12} className="hidden xl:block">
              <FadeIn direction="left">
                <div className="relative w-64 h-64 flex-shrink-0">
                  <Image src="/images/3d-transparent/phone-app.png" alt="" fill className="object-contain drop-shadow-2xl" />
                </div>
              </FadeIn>
            </Float>
            
            <div className="text-center">
              <BlurIn>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Contact <span className="text-emerald-400">Us</span>
                </h1>
              </BlurIn>
              <FadeUp delay={0.2}>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Have questions? We're here to help. Reach out to our support team anytime.
                </p>
              </FadeUp>
            </div>
            
            <Float duration={3.5} y={15} className="hidden xl:block">
              <FadeIn direction="right">
                <div className="relative w-64 h-64 flex-shrink-0">
                  <Image src="/images/3d-transparent/secure-vault.png" alt="" fill className="object-contain drop-shadow-2xl" />
                </div>
              </FadeIn>
            </Float>
          </div>
        </div>
      </section>

      {/* Section Blend */}
      <SectionBlend fromColor="rgb(5, 25, 20)" toColor="rgb(8, 32, 26)" height={80} />

      {/* Contact Info + Form */}
      <section className="py-16 px-4" style={{ background: 'rgb(8, 32, 26)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <StaggerContainer staggerDelay={0.1} className="space-y-6">
              {contactInfo.map((item, i) => (
                <StaggerItem key={i}>
                  <motion.div 
                    className="card p-6"
                    whileHover={{ x: 8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                        <item.icon size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                        <p className="text-gray-400 mb-2">{item.desc}</p>
                        {item.isLink ? (
                          <a href={`mailto:${item.value}`} className="text-emerald-400 hover:underline">
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-emerald-400">{item.value}</span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Contact Form */}
            <FadeIn direction="right" delay={0.2}>
              <div className="card p-8">
                {submitted ? (
                  <motion.div 
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring" }}
                  >
                    <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6">
                      <Send size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                    <p className="text-gray-400">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <label className="block text-sm text-gray-400 mb-2">Your Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-lg bg-[#0a1f1a] border border-emerald-900/50 text-white focus:border-emerald-500 focus:outline-none transition-colors"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 rounded-lg bg-[#0a1f1a] border border-emerald-900/50 text-white focus:border-emerald-500 focus:outline-none transition-colors"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <label className="block text-sm text-gray-400 mb-2">Subject</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-lg bg-[#0a1f1a] border border-emerald-900/50 text-white focus:border-emerald-500 focus:outline-none transition-colors"
                          placeholder="How can we help?"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          required
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <label className="block text-sm text-gray-400 mb-2">Message</label>
                        <textarea
                          className="w-full px-4 py-3 rounded-lg bg-[#0a1f1a] border border-emerald-900/50 text-white focus:border-emerald-500 focus:outline-none h-32 resize-none transition-colors"
                          placeholder="Tell us more about your inquiry..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                        />
                      </motion.div>
                      <motion.button 
                        type="submit" 
                        className="btn-primary w-full flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Send Message <Send size={18} />
                      </motion.button>
                    </form>
                  </>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
