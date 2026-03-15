import AnimatedSection from '../components/AnimatedSection';
import ComingSoonBadge from '../components/ComingSoonBadge';
import Button from '../components/Button';
import { motion } from 'framer-motion';

export default function Drones() {
  const features = [
    {
      title: 'Custom Designs',
      description: 'Your mission. Your drone. Built exactly for what you need.',
    },
    {
      title: 'Advanced Sensors',
      description: 'See more. Know more. Next-gen sensors for precision data.',
    },
    {
      title: 'Extended Flight Time',
      description: 'Stay up longer. Optimized power for marathon missions.',
    },
    {
      title: 'Ruggedized Build',
      description: 'Rain, wind, dust—bring it on. Built for the real world.',
    },
    {
      title: 'Modular Payloads',
      description: 'Swap, adapt, conquer. One drone, endless possibilities.',
    },
    {
      title: 'AI Integration',
      description: 'Smart flight. Smarter decisions. AI that works for you.',
    },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <AnimatedSection className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-2xl mb-6"
          >
            <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </motion.div>
          
          <ComingSoonBadge className="mb-6" />
          
          <h1 className="text-5xl sm:text-6xl font-bold text-text-light mb-6">
            Buzz Drone Manufacturing
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto mb-8">
            We don't just sell drones—we build them. Pro-grade hardware for real missions. 
            Custom-engineered. Battle-tested. Ready to dominate.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" href="/contact">
              Get Notified
            </Button>
            <Button variant="ghost" href="/about">
              Learn More
            </Button>
          </div>
        </AnimatedSection>

        {/* Timeline */}
        <AnimatedSection className="mb-20 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-accent/10 border border-accent/30 rounded-xl">
            <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <div className="text-left">
              <div className="text-accent font-bold">Expected Launch</div>
              <div className="text-text-light text-lg font-bold">Q2 2026</div>
            </div>
          </div>
        </AnimatedSection>

        {/* Drone Mockup */}
        <AnimatedSection className="mb-20">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-border rounded-3xl p-12 sm:p-20">
            <div className="aspect-video bg-border/20 rounded-2xl flex items-center justify-center">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                className="text-center"
              >
                <svg className="w-32 h-32 mx-auto mb-4 text-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                <p className="text-muted">Professional Drone Render Coming Soon</p>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Features Grid */}
        <AnimatedSection className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-light text-center mb-4">
            Engineered. Tested. Proven.
          </h2>
          <p className="text-muted text-center mb-12 max-w-2xl mx-auto">
            Cutting-edge tech. Industry-leading specs. Drones that don't just meet expectations—they crush them.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 0.1} className="h-full">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-card-dark border border-border rounded-xl p-6 text-center h-full"
                >
                  <h3 className="text-lg font-bold text-text-light mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Use Cases */}
        <AnimatedSection className="bg-card-dark/50 rounded-3xl p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-light text-center mb-12">
            Built for Every Mission
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Agriculture', icon: '🌾', desc: 'Precision farming. Monitor, spray, optimize.' },
              { title: 'Construction', icon: '🏗️', desc: 'Survey faster. Track smarter. Build better.' },
              { title: 'Emergency Services', icon: '🚨', desc: 'When lives are on the line, we deliver.' },
              { title: 'Energy', icon: '⚡', desc: 'Inspect infrastructure without the risk.' },
              { title: 'Media Production', icon: '🎬', desc: 'Epic shots. Cinematic quality. Every take.' },
              { title: 'Security', icon: '🛡️', desc: 'Eyes in the sky. 24/7 peace of mind.' },
            ].map((useCase, index) => (
              <AnimatedSection key={useCase.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 bg-background-dark/50 rounded-xl border border-border"
                >
                  <div className="text-4xl">{useCase.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-text-light">{useCase.title}</h3>
                    <p className="text-muted text-sm">{useCase.desc}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

