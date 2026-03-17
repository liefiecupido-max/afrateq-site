'use client';

import { motion } from 'framer-motion';
import { Cpu, Brain, MessageSquare, Shield } from 'lucide-react';

const services = [
  {
    icon: Cpu,
    title: 'Local Inference Infrastructure',
    description: 'GPU-backed infrastructure designed for organizations that want advanced AI capability inside a local, controlled environment.',
    features: ['Private GPU capacity', 'Dedicated or shared deployment options', 'Inference endpoints', 'Operational support'],
    accent: 'from-brand-gold/20 to-brand-gold/5',
    iconBg: 'bg-brand-gold/10',
    iconColor: 'text-brand-gold',
  },
  {
    icon: Brain,
    title: 'Private and Hybrid AI Stacks',
    description: 'Deploy self-hosted or hybrid model stacks with retrieval, document intelligence, and policy-aware workflow design.',
    features: ['Private model hosting', 'Hybrid routing options', 'RAG and knowledge systems', 'Fine-tuning and adaptation'],
    accent: 'from-brand-teal/20 to-brand-teal/5',
    iconBg: 'bg-brand-teal/10',
    iconColor: 'text-brand-teal',
  },
  {
    icon: MessageSquare,
    title: 'Agentic Workflow Systems',
    description: 'Turn AI into useful operating systems for teams: copilots, reporting pipelines, internal assistants, and multi-step task execution.',
    features: ['Agent orchestration', 'Tool-connected assistants', 'Workflow automation', 'Custom enterprise interfaces'],
    accent: 'from-purple-500/20 to-purple-500/5',
    iconBg: 'bg-purple-500/10',
    iconColor: 'text-purple-400',
  },
  {
    icon: Shield,
    title: 'Sovereign Enterprise Deployment',
    description: 'Design and operate AI systems around the trust boundary your organization actually needs, from hosted-private to fully isolated environments.',
    features: ['Tenant isolation', 'Audit-friendly architecture', 'Access and policy controls', 'Deployment strategy advisory'],
    accent: 'from-blue-500/20 to-blue-500/5',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-400',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-gold text-sm font-semibold tracking-wider uppercase"
          >
            What We Build
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-white mt-3 mb-4"
          >
            Sovereign AI Systems, Not Just AI Access
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-brand-muted max-w-3xl mx-auto"
          >
            Afrateq combines infrastructure, model deployment, orchestration, and workflow design so enterprises can run advanced AI inside environments they control.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-brand-dark-light/50 rounded-2xl border border-white/5 p-8 hover:border-white/10 transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="relative">
                <div className={`w-12 h-12 ${service.iconBg} rounded-xl flex items-center justify-center mb-6`}>
                  <service.icon size={24} className={service.iconColor} />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-brand-muted text-sm mb-6 leading-relaxed">{service.description}</p>

                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-xs text-brand-text/80">
                      <span className="w-1 h-1 bg-brand-gold rounded-full" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
