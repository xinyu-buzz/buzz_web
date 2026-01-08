import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';

export default function About() {
  const values = [
    {
      title: 'Innovation',
      description: 'Pushing the boundaries of drone technology with cutting-edge solutions.',
    },
    {
      title: 'Safety',
      description: 'Prioritizing safety in every aspect of drone operations and training.',
    },
    {
      title: 'Excellence',
      description: 'Delivering world-class products and services that exceed expectations.',
    },
    {
      title: 'Community',
      description: 'Building a thriving ecosystem of pilots, operators, and innovators.',
    },
  ];

  const timeline = [
    { year: '2020', event: 'Implemented a drone workforce under production house' },
    { year: '2021', event: 'Launched Buzz Academy with first pilot training courses' },
    { year: '2022', event: 'Buzz became a standalone company' },
    { year: '2023', event: 'Launched Buzz Portal for enterprise-scale operations' },
    { year: '2024', event: 'Growing rapidly with pilot training programs' },
    { year: '2026', event: 'Expanding into drone manufacturing, simulations, and software' },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <AnimatedSection className="text-center mb-20">
          <h1 className="text-5xl sm:text-6xl font-bold text-text-light mb-6">
            About Buzz
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            We're building the complete ecosystem for the drone industry — from training 
            and operations to manufacturing and software.
          </p>
        </AnimatedSection>

        {/* Mission Statement */}
        <AnimatedSection className="mb-20">
          <div className="bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 rounded-3xl p-12 sm:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-light mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-text-light leading-relaxed max-w-4xl mx-auto">
              To empower individuals and organizations with the tools, training, and technology 
              needed to succeed in the rapidly evolving drone industry. We believe in making 
              professional drone operations accessible, safe, and efficient for everyone.
            </p>
          </div>
        </AnimatedSection>

        {/* Story Section */}
        <AnimatedSection className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-text-light mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  Buzz started with a simple observation: the drone industry was fragmented. 
                  Pilots needed multiple tools for training, operations, and compliance. 
                  Operators struggled with inefficient workflows. There had to be a better way.
                </p>
                <p>
                  We set out to build a complete ecosystem that brings everything together. 
                  From our Academy platform for comprehensive pilot training, to our 
                  Workforce app that manages complex operations, to our Portal that serves 
                  as the central hub for enterprises.
                </p>
                <p>
                  But we didn't stop there. In 2026, we're expanding into drone manufacturing, 
                  flight simulations, and advanced software solutions. Our goal is to be the 
                  one-stop platform for everything drone-related.
                </p>
              </div>
            </div>
            <div className="bg-card-dark border border-border rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center text-muted">
                <svg className="w-32 h-32 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <p className="text-sm">Team Photo Coming Soon</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Values */}
        <AnimatedSection className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-light text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-card-dark border border-border rounded-xl p-6 text-center"
                >
                  <h3 className="text-xl font-bold text-accent mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Timeline */}
        <AnimatedSection className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-light text-center mb-12">
            Our Journey
          </h2>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <AnimatedSection key={item.year} delay={index * 0.1}>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex gap-6 mb-8 group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-primary/20 rounded-xl flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">{item.year}</span>
                    </div>
                  </div>
                  <div className="flex-grow pt-4">
                    <div className="bg-card-dark border border-border rounded-xl p-6 group-hover:border-primary/50 transition-colors">
                      <p className="text-text-light leading-relaxed">{item.event}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection className="bg-card-dark/50 rounded-3xl p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-light text-center mb-12">
            By The Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 'XXX', label: 'Pilots Trained' },
              { value: 'XXX', label: 'Active Operations' },
              { value: 'XXX', label: 'Training Courses' },
              { value: '6', label: 'Products & Services' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

