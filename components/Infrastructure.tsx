'use client';

import { motion } from 'framer-motion';
import { Server, Cpu, Shield, Zap, MapPin, Building2 } from 'lucide-react';

const specs = [
  { icon: Cpu, label: 'NVIDIA DGX Spark', detail: 'Dedicated Blackwell-class hardware per client' },
  { icon: Server, label: 'Isolated Sovereignty', detail: 'Turnkey physical isolation for every tenant' },
  { icon: Shield, label: 'Enterprise Security', detail: 'Hardware root-of-trust and secure boot' },
  { icon: Zap, label: 'Office-Quiet Operation', detail: 'Premium silent cooling for flexible deployment' },
  { icon: MapPin, label: 'Windhoek, Namibia', detail: 'Locally hosted, sovereign AI compute' },
  { icon: Building2, label: 'Tier III Facility', detail: 'Carrier-neutral, enterprise-grade' },
];

export default function Infrastructure() {
  return (
    <section id="infrastructure" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-teal-dark/10 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-teal text-sm font-semibold tracking-wider uppercase"
          >
            Our Infrastructure
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-white mt-3 mb-4"
          >
            Sovereign AI on DGX Spark
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-brand-muted max-w-2xl mx-auto"
          >
            One dedicated DGX Spark per client. Total hardware isolation, Blackwell-class performance, and \"Office-Quiet\" deployment.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specs.map((spec, index) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-brand-dark-light/30 border border-white/5 rounded-xl p-6 hover:border-brand-teal/30 transition-all group"
            >
              <spec.icon size={28} className="text-brand-teal mb-4 group-hover:text-brand-gold transition-colors" />
              <h3 className="text-white font-semibold mb-1">{spec.label}</h3>
              <p className="text-brand-muted text-sm">{spec.detail}</p>
            </motion.div>
          ))}
        </div>

        {/* Data centre highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-brand-teal-dark/20 to-brand-gold/10 rounded-2xl border border-white/10 p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-3">Namibian Data Sovereignty</h3>
          <p className="text-brand-muted max-w-2xl mx-auto mb-6">
            Partnering with Namibia&apos;s leading data centre operators to deliver carrier-neutral, 
            enterprise-grade hosting with redundant power, cooling, and connectivity.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <span className="bg-white/5 px-4 py-2 rounded-lg text-brand-text">ISO 27001 Compliant</span>
            <span className="bg-white/5 px-4 py-2 rounded-lg text-brand-text">99.98% Uptime Target</span>
            <span className="bg-white/5 px-4 py-2 rounded-lg text-brand-text">24/7 Operations</span>
            <span className="bg-white/5 px-4 py-2 rounded-lg text-brand-text">Physical Security</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
