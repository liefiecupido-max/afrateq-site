'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="images/logo-dark.jpg"
                alt="Afrateq"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-lg font-bold tracking-wider text-white">AFRATEQ</span>
            </Link>
            <p className="text-brand-muted text-sm mb-4 max-w-sm">
              Afrateq builds sovereign AI systems for African enterprises — combining local inference,
              private or hybrid deployment, and enterprise-grade control.
            </p>
            <div className="space-y-2 text-sm text-brand-muted">
              <a href="mailto:wcupido@aftrateq.net" className="flex items-center gap-2 hover:text-brand-gold transition-colors">
                <Mail size={14} /> wcupido@aftrateq.net
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={14} /> Swakopmund, Namibia
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-brand-muted">
              <li><Link href="#services" className="hover:text-brand-gold transition-colors">Local Inference Infrastructure</Link></li>
              <li><Link href="#services" className="hover:text-brand-gold transition-colors">Private & Hybrid AI Stacks</Link></li>
              <li><Link href="#services" className="hover:text-brand-gold transition-colors">Agentic Workflow Systems</Link></li>
              <li><Link href="#services" className="hover:text-brand-gold transition-colors">Sovereign Enterprise Deployment</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-brand-muted">
              <li><Link href="#why-local" className="hover:text-brand-gold transition-colors">Why Sovereign AI</Link></li>
              <li><Link href="#infrastructure" className="hover:text-brand-gold transition-colors">Infrastructure</Link></li>
              <li><Link href="#use-cases" className="hover:text-brand-gold transition-colors">Use Cases</Link></li>
              <li><Link href="#contact" className="hover:text-brand-gold transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-brand-muted text-xs">
            © 2023 Afrateq (Pty) Ltd. All rights reserved.
          </p>
          <p className="text-brand-muted text-xs">
            Proudly Namibian 🇳🇦
          </p>
        </div>
      </div>
    </footer>
  );
}
