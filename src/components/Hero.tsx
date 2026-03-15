import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Button from './Button';

const easeOutQuart = [0.25, 1, 0.5, 1] as const;

export default function Hero() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Badge - first element to appear */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5, ease: easeOutQuart }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary font-semibold text-sm mb-8"
        >
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          The Complete Drone Ecosystem
        </motion.div>

        {/* Headline - two-part stagger */}
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-text-light mb-6 leading-tight"
        >
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: easeOutQuart }}
            className="block"
          >
            One Platform.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.7, ease: easeOutQuart }}
            className="block text-accent"
          >
            Every Possibility.
          </motion.span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6, ease: easeOutQuart }}
          className="text-xl sm:text-2xl text-muted max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Workforce. Training. Manufacturing. Software. And more.
          This is how you win in the drone industry.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.65, duration: 0.5, ease: easeOutQuart }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="primary" href="/workforce">
            Download Workforce App
          </Button>
          <Button variant="ghost" href="/about">
            Learn More About Buzz
          </Button>
        </motion.div>

        {/* Industries - wave entrance */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-16 max-w-5xl mx-auto"
        >
          <p className="text-sm text-muted mb-6 uppercase tracking-wider">Powering Industries</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 justify-items-center">
            {[
              { icon: '🚗', label: 'Automotive' },
              { icon: '🏠', label: 'Real Estate' },
              { icon: '🎬', label: 'Motion Picture' },
              { icon: '🌾', label: 'Agriculture' },
              { icon: '🔍', label: 'Inspection' },
              { icon: '🚁', label: 'Search & Rescue' },
              { icon: '📦', label: 'Logistics' },
              { icon: '🎨', label: 'Drone Art' },
              { icon: '🛡️', label: 'Security' },
              { icon: '🗺️', label: 'Mapping' },
            ].map((industry, index) => (
              <motion.div
                key={industry.label}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  delay: 0.9 + index * 0.04,
                  duration: 0.4,
                  ease: easeOutQuart,
                }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-card-dark/50 border border-border rounded-full text-sm w-full transition-colors duration-200 hover:border-primary/40"
              >
                <span className="text-lg" aria-hidden="true">{industry.icon}</span>
                <span className="text-muted">{industry.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1, y: [0, 10, 0] } : {}}
        transition={{
          opacity: { delay: 1.5, duration: 0.6 },
          y: { duration: 2, repeat: Infinity, delay: 1.5 },
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        aria-hidden="true"
      >
        <svg
          className="w-6 h-6 text-muted"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
}
