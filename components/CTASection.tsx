'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-teal-dark/20 via-brand-dark to-brand-gold/10" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-dark-light/50 border border-white/10 rounded-3xl p-10 md:p-16"
        >
          <div className="w-16 h-16 mx-auto bg-brand-gold/10 rounded-2xl flex items-center justify-center mb-8">
            <Mail size={28} className="text-brand-gold" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Ready to Build with Sovereign AI?
          </h2>
          <p className="text-lg text-brand-muted mb-10 max-w-xl mx-auto">
            Whether you need raw GPU compute or a fully managed AI solution, 
            let&apos;s discuss how Afrateq can power your organisation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="mailto:wcupido@aftrateq.net"
              className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-brand-dark px-8 py-4 rounded-lg font-bold transition-all hover:shadow-lg hover:shadow-brand-gold/25 hover:-translate-y-0.5"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>
          </div>
          <p className="mt-6 text-brand-muted text-sm">
            wcupido@aftrateq.net
          </p>
        </motion.div>
      </div>
    </section>
  );
}
