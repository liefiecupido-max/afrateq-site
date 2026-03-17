'use client';

import { motion } from 'framer-motion';
import { Hammer, Landmark, Building2, Zap } from 'lucide-react';

const useCases = [
  {
    icon: Hammer,
    title: 'Mining & Resources',
    description: 'Predictive maintenance, ore grade analysis, geological modelling, and autonomous vehicle optimisation.',
    examples: ['Equipment failure prediction', 'Ore body mapping with AI', 'Safety incident analysis', 'Production optimisation'],
    iconColor: 'text-brand-gold',
    dotColor: 'bg-brand-gold',
  },
  {
    icon: Landmark,
    title: 'Government & Public Sector',
    description: 'Sovereign document processing, citizen services automation, and regulatory compliance with NDP6 AI mandates.',
    examples: ['Document digitisation & OCR', 'Citizen query automation', 'Policy analysis with LLMs', 'Data sovereignty compliance'],
    iconColor: 'text-brand-teal',
    dotColor: 'bg-brand-teal',
  },
  {
    icon: Building2,
    title: 'Financial Services',
    description: 'Private AI for banks and insurers — fraud detection, risk modelling, and customer service without data leaving Namibia.',
    examples: ['Fraud detection models', 'Credit risk assessment', 'Customer service chatbots', 'Regulatory reporting'],
    iconColor: 'text-brand-gold',
    dotColor: 'bg-brand-gold',
  },
  {
    icon: Zap,
    title: 'Energy & Utilities',
    description: 'Grid optimisation, demand forecasting, and predictive maintenance for power and water infrastructure.',
    examples: ['Load forecasting', 'Grid optimisation', 'Renewable integration', 'Infrastructure monitoring'],
    iconColor: 'text-brand-teal',
    dotColor: 'bg-brand-teal',
  },
];

export default function Solutions() {
  return (
    <section id="use-cases" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-gold text-sm font-semibold tracking-wider uppercase"
          >
            Industry Solutions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-white mt-3 mb-4"
          >
            AI for Namibia&apos;s Key Sectors
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-brand-muted max-w-2xl mx-auto"
          >
            Purpose-built AI solutions for the industries that drive Namibia&apos;s economy.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-brand-dark-light/30 border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-all"
            >
              <useCase.icon size={32} className={`${useCase.iconColor} mb-4`} />
              <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
              <p className="text-brand-muted text-sm mb-6 leading-relaxed">{useCase.description}</p>
              <div className="grid grid-cols-2 gap-2">
                {useCase.examples.map((example) => (
                  <div key={example} className="flex items-start gap-2 text-xs text-brand-text/70">
                    <span className={`mt-1.5 w-1 h-1 ${useCase.dotColor} rounded-full flex-shrink-0`} />
                    {example}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
