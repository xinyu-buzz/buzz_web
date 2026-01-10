import Hero from '../components/Hero';
import EcosystemSection from '../components/EcosystemSection';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div>
      {/* Video Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/Drone%20video.mov" type="video/quicktime" />
          <source src="/video/Drone%20video.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content Overlay - Positioned at top to avoid overlapping video text */}
        <div className="relative z-10 h-full flex flex-col items-center justify-start text-center px-4 pt-32 sm:pt-36 lg:pt-40">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-lg"
          >
            Experience the Future of
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Drone Technology
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md"
          >
            Watch our drones in action and discover what's possible
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
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

      <Hero />
      <EcosystemSection />

      {/* Features Section */}
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8 bg-card-dark/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-text-light mb-4">
              Technology-Driven Innovation
            </h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              We're not managing operations—we're revolutionizing how the drone industry works. 
              First-to-market technology empowering pilots and transforming the workforce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'First to Market',
                description: 'Pioneering mobile-first workforce technology built specifically for drone pilots. Our iOS app sets the industry standard.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'Beacon Technology',
                description: 'Revolutionary system connecting verified pilots with opportunities through our proprietary beacon network.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                ),
                title: 'Empowering Pilots',
                description: 'Technology that gives pilots control—intelligent scheduling, automated compliance, and seamless coordination tools.',
              },
            ].map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 0.2}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-card-dark border border-border rounded-2xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-6 text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-text-light mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 rounded-3xl p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-light mb-4">
              Join the Revolution
            </h2>
            <p className="text-xl text-muted mb-8">
              Experience the first-to-market workforce technology that's transforming how drone pilots work. 
              Download our iOS app and be part of the future.
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

