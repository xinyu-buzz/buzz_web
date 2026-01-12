import AnimatedSection from '../components/AnimatedSection';
import DroneTimeline from '../components/DroneTimeline';
import { motion } from 'framer-motion';

export default function About() {
  const values = [
    {
      title: 'Innovation',
      description: 'We don\'t follow trends—we set them. Cutting-edge tech, always.',
    },
    {
      title: 'Safety',
      description: 'Every flight. Every pilot. Safety isn\'t just a priority—it\'s woven into our very fabric.',
    },
    {
      title: 'Excellence',
      description: 'Good enough? Never heard of it. We deliver world-class, period.',
    },
    {
      title: 'Community',
      description: 'Pilots, innovators, game-changers—our collective mission to revolutionize the industry',
    },
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
            The Buzz team is a dynamic mix of ex-military professionals channeling their entrepreneurial spirit, 
            brilliant engineers passionate about crafting outstanding code, and bold, adventurous trailblazers who 
            are unapologetically ambitious shaking up the drone industry with their tech and business savvy.
          </p>
        </AnimatedSection>

        {/* Mission Statement */}
        <AnimatedSection className="mb-20">
          <div className="bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 rounded-3xl p-12 sm:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-light mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-text-light leading-relaxed max-w-4xl mx-auto">
              To deliver exceptional value for our customers while empowering pilots to achieve a work-life balance 
              that prioritizes working smarter, not harder. We leverage technology, AI, and machine learning to 
              drive the drone industry into the future.
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
                  We saw a problem. The drone industry was fragmented, plagued by clunky workflows—customers endlessly 
                  searching for pilots online, operations bogged down by phone calls and emails, crafting quotes, 
                  and juggling spreadsheets to manage flights. We knew there had to be a better way.
                </p>
                <p>
                  So we created it: an all-in-one app that's a total game changer! With an Academy for cutting-edge 
                  training and a Workforce for effortless assignments, it's your ultimate platform connecting pilots 
                  and customers seamlessly. Everything a drone pro needs is right at their fingertips!
                </p>
                <p>
                  And this is just the beginning! In 2026, we're rolling out drone manufacturing, immersive flight sims, 
                  and next-gen software. One cohesive ecosystem. Endless possibilities. Welcome to the future!
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
            What We Stand For
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
          <DroneTimeline />
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection className="bg-card-dark/50 rounded-3xl p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-light text-center mb-12">
            The Numbers Speak
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '2,500+', label: 'Pilots Trained' },
              { value: '15K+', label: 'Flights Logged' },
              { value: '12', label: 'Training Courses' },
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

