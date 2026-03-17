'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.65;
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-dark">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="videos/hero-skyline.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-brand-dark/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/55 via-brand-dark/35 to-brand-dark/65" />
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-teal/10 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-pulse" />
            <span className="text-brand-gold text-xs font-semibold tracking-wider uppercase">
              Sovereign AI Systems
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-[1.1] mb-6 max-w-5xl mx-auto text-balance">
            Advanced AI, Kept{' '}
            <span className="text-gradient-gold">Local, Private,</span>{' '}
            and Under Your Control
          </h1>

          <p className="text-lg md:text-xl text-brand-text/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Afrateq builds and operates sovereign AI systems for Namibian enterprises — combining local inference infrastructure,
            private or hybrid model deployment, agent orchestration, and sector-specific workflows inside trusted environments.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-brand-dark px-8 py-4 rounded-lg font-bold transition-all hover:shadow-lg hover:shadow-brand-gold/25 hover:-translate-y-0.5"
            >
              Request a Demo
              <ArrowRight size={18} />
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center gap-2 border border-white/15 bg-white/5 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all"
            >
              Explore Solutions
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
