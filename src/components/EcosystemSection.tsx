import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import AnimatedSection from './AnimatedSection';

export default function EcosystemSection() {
  const products = [
    {
      title: 'Workforce',
      description: 'Powerful iOS app for managing drone operations, pilot scheduling, and compliance tracking in real-time.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      href: '/workforce',
      comingSoon: false,
    },
    {
      title: 'Academy',
      description: 'Comprehensive online training platform with courses for drone pilots of all skill levels and certifications.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      href: '/academy',
      comingSoon: false,
    },
    {
      title: 'Portal',
      description: 'Advanced management portal for drone operations, bookings, client management, and comprehensive reporting.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
        </svg>
      ),
      href: '/portal',
      comingSoon: false,
    },
    {
      title: 'Drone Manufacturing',
      description: 'Custom-built professional drones designed for specific use cases with cutting-edge technology and reliability.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      href: '/drones',
      comingSoon: true,
      comingSoonText: 'June 2026',
    },
    {
      title: 'Flight Simulations',
      description: 'Immersive flight simulation games and training scenarios to practice drone piloting in a risk-free environment.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      href: '/simulations',
      comingSoon: true,
      comingSoonText: 'March 2026',
    },
    {
      title: 'Drone Software',
      description: 'Advanced software solutions for autonomous flight, data processing, and AI-powered drone operations.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      href: '/software',
      comingSoon: true,
      comingSoonText: 'June 2026',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-text-light mb-4"
          >
            Complete Ecosystem
          </motion.h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Everything you need for drone operations, from training to manufacturing, 
            all in one integrated platform.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <AnimatedSection key={product.title} delay={index * 0.1}>
              <ProductCard {...product} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

