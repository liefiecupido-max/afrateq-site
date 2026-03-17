'use client';

import { motion } from 'framer-motion';
import { Shield, MapPin, Clock, Users, Wallet, HeadphonesIcon } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'Sovereignty by Design',
    description: 'We design around data residency, private inference, tenant isolation, and enterprise control from the start — not as an afterthought.',
  },
  {
    icon: MapPin,
    title: 'Namibia-Based Operation',
    description: 'Afrateq is built to operate advanced AI systems from Namibia, with local context, local relationships, and local accountability.',
  },
  {
    icon: Clock,
    title: 'Deployment Options That Match Risk',
    description: 'Hosted-private, hybrid, and fully isolated models let organizations choose the right trust boundary instead of forcing one architecture.',
  },
  {
    icon: Wallet,
    title: 'Capability Without Full Foreign Dependence',
    description: 'We help enterprises reduce reliance on offshore AI platforms where local control, cost predictability, or data posture matter.',
  },
  {
    icon: Users,
    title: 'Built for Real Institutions',
    description: 'Our focus is not generic chatbots. It is enterprise-grade AI systems for operational, regulated, and high-trust environments.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Hands-On System Ownership',
    description: 'We do not just hand over tools. We help architect, deploy, tune, and operate AI systems that have to work in production.',
  },
];

export default function Differentiators() {
  return (
    <section className="py-24 relative">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-teal text-sm font-semibold tracking-wider uppercase"
          >
            Why Afrateq
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-white mt-3 mb-4"
          >
            Local Capability. Serious Trust Boundaries.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="text-center"
            >
              <div className="w-14 h-14 mx-auto bg-brand-teal/10 rounded-2xl flex items-center justify-center mb-5">
                <reason.icon size={24} className="text-brand-teal" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{reason.title}</h3>
              <p className="text-brand-muted text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
