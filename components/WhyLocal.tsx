'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, Globe, ShieldCheck, TrendingDown } from 'lucide-react';

const problems = [
  {
    icon: Globe,
    title: 'Sensitive Data Leaves Your Trust Boundary',
    description: 'When enterprises rely entirely on foreign AI platforms, their documents, prompts, and operational context often leave local control.',
  },
  {
    icon: AlertTriangle,
    title: 'Enterprise AI Needs Governance',
    description: 'Real organizations need auditability, policy enforcement, access controls, and deployment choices that fit their risk profile.',
  },
  {
    icon: TrendingDown,
    title: 'Strategic Capability Should Not Be Imported Blindly',
    description: 'If advanced AI remains an external dependency, institutions lose leverage over cost, performance, resilience, and long-term control.',
  },
];

export default function WhyLocal() {
  return (
    <section id="why-local" className="py-24 relative">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-teal text-sm font-semibold tracking-wider uppercase">The Shift</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-3 mb-6">
                Advanced AI Is Most Valuable When It Stays Inside a Trusted Environment
              </h2>
              <p className="text-brand-muted text-lg mb-10">
                Sovereign AI is not just about hosting a model. It is about controlling where inference runs, where data lives, who can access it, and how AI fits real enterprise operations.
              </p>
            </motion.div>

            <div className="space-y-6">
              {problems.map((problem, index) => (
                <motion.div
                  key={problem.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center">
                    <problem.icon size={22} className="text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{problem.title}</h3>
                    <p className="text-brand-muted text-sm leading-relaxed">{problem.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-brand-teal-dark/20 to-brand-gold/10 rounded-3xl border border-white/10 p-10">
              <ShieldCheck size={48} className="text-brand-gold mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">What Afrateq Operates</h3>
              <p className="text-brand-muted mb-8">
                A sovereign AI runtime for enterprises that need powerful AI systems without giving up control of their data, inference paths, or operating model.
              </p>
              <div className="space-y-4">
                {[
                  'Local inference infrastructure and private deployment options',
                  'Self-hosted or hybrid model strategies matched to client risk',
                  'Agent orchestration, retrieval, and workflow automation',
                  'Tenant isolation, access control, and audit-friendly design',
                  'Sector-specific systems for mining, government, finance, and energy',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 bg-brand-gold rounded-full flex-shrink-0" />
                    <span className="text-brand-text text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
