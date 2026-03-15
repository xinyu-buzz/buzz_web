import Hero from '../components/Hero';
import EcosystemSection from '../components/EcosystemSection';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';
import FlyingDrone from '../components/FlyingDrone';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div>
      {/* Video Hero Section */}
      <section className="relative h-screen w-full overflow-hidden" aria-label="Hero video banner">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/Drone%20video.mov" type="video/quicktime" />
          <source src="/video/Drone%20video.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay - animated fade-in */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-black/40"
          aria-hidden="true"
        />

        {/* Content Overlay - staggered entrance */}
        <div className="relative z-10 h-full flex flex-col items-center justify-start text-center px-4 pt-32 sm:pt-36 lg:pt-40">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-lg"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="block"
            >
              Experience the Future of
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: [0.25, 1, 0.5, 1] }}
              className="block text-accent"
            >
              Drone Technology
            </motion.span>
          </motion.h1>
        </div>

        {/* Scroll Indicator - delayed entrance */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { duration: 0.6, delay: 1.5 },
            y: { duration: 2, repeat: Infinity, delay: 1.5 },
          }}
          className="absolute bottom-10 inset-x-0 z-10 flex justify-center"
          aria-hidden="true"
        >
          <div className="flex flex-col items-center text-white/80">
            <span className="text-sm mb-2">Scroll to explore</span>
            <svg
              className="w-6 h-6"
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
          </div>
        </motion.div>
      </section>

      {/* Drone Flight Animation */}
      <FlyingDrone variant="arc" className="bg-gradient-to-b from-transparent to-background-dark/50" />

      <Hero />
      <EcosystemSection />

      {/* Features Section */}
      <AnimatedSection direction="scale" className="py-20 px-4 sm:px-6 lg:px-8 bg-card-dark/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-text-light mb-4">
              Engineered First. Designed to Stand Out.
            </h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Fleet companies manage drones.<br />
              We built the platform that changes everything.<br />
              First to market. Real results. This is how the industry evolves.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'First to Market',
                description: 'No one else has this. Mobile-first workforce tech built for drone pilots. Our app didn\'t follow the standard—it set it.',
                direction: 'left' as const,
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'Beacon Technology',
                description: 'When emergencies hit, seconds count. Beacon connects government agencies with nearby pilots instantly. Real impact, right when it matters.',
                direction: 'up' as const,
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                ),
                title: 'Pilots in Control',
                description: 'Your schedule. Your assignments. Your career. Smart tools for scheduling, compliance, and coordination—all in your hands.',
                direction: 'right' as const,
              },
            ].map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 0.15} direction={feature.direction} className="h-full">
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
                  className="bg-card-dark border border-border rounded-2xl p-8 text-center h-full flex flex-col group"
                >
                  <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-text-light mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted leading-relaxed flex-grow">
                    {feature.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection direction="scale" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 rounded-3xl p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-light mb-4">
              Ready to Fly?
            </h2>
            <p className="text-xl text-muted mb-8">
              The future of drone work is here. First-to-market tech. A community of pros.
              Download the app. Join the movement. Let's go.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" href="/workforce">
                Download Workforce App
              </Button>
              <Button variant="secondary" href="/academy">
                Explore Training
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
