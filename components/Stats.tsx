'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: 'Local', label: 'AI Runtime Environments' },
  { value: '100%', label: 'Data Stays in Namibia' },
  { value: '<5ms', label: 'Local Network Latency' },
  { value: '24/7', label: 'Enterprise Support' },
];

export default function Stats() {
  return (
    <section className="relative py-16 border-y border-white/5">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/5 via-transparent to-brand-teal/5" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-brand-gold mb-2">
                {stat.value}
              </div>
              <div className="text-brand-muted text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
