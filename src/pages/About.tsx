import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';

export default function About() {
  const values = [
    {
      title: 'Innovation',
      description: 'We don\'t follow trends—we set them. Cutting-edge tech, always.',
    },
    {
      title: 'Safety',
      description: 'Every flight. Every pilot. Safety isn\'t optional—it\'s built in.',
    },
    {
      title: 'Excellence',
      description: 'Good enough? Never heard of it. We deliver world-class, period.',
    },
    {
      title: 'Community',
      description: 'Pilots, innovators, game-changers. We\'re building this together.',
    },
  ];

  const timeline = [
    { year: '2020', event: 'It started here. Drone workforce under a production house. The seed was planted.' },
    { year: '2021', event: 'Buzz Academy goes live. First pilots trained. The journey begins.' },
    { year: '2022', event: 'We went solo. Buzz becomes its own company. No looking back.' },
    { year: '2023', event: 'Buzz Portal launches. Individual and enterprise customers, connected.' },
    { year: '2024', event: 'Rapid growth. More pilots. More training. More momentum.' },
    { year: '2025', event: 'Buzz App hits the App Store. Mobile-first. Industry-first.' },
    { year: '2026', event: 'Manufacturing. Simulations. Software. The ecosystem expands.' },
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
            The complete drone ecosystem. Training. Workforce. Manufacturing. Software. 
            Everything under one roof. That's the Buzz.
          </p>
        </AnimatedSection>

        {/* Mission Statement */}
        <AnimatedSection className="mb-20">
          <div className="bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 rounded-3xl p-12 sm:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-light mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-text-light leading-relaxed max-w-4xl mx-auto">
              Give everyone the tools, training, and tech to win in the drone industry. 
              Make it accessible. Make it safe. Make it efficient. That's what we're here for.
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
                  We saw a problem. The drone industry was a mess—fragmented tools, clunky workflows, 
                  pilots juggling a dozen apps just to get things done. We knew there had to be a better way.
                </p>
                <p>
                  So we built one. Academy for training. Workforce for assignments. A platform that connects 
                  pilots and customers seamlessly. Everything a drone pro needs, in one place.
                </p>
                <p>
                  And we're just getting started. 2026 brings drone manufacturing, flight sims, and 
                  next-gen software. One ecosystem. Infinite possibilities. Welcome to the future.
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
          <h2 className="text-3xl sm:text-4xl font-bold text-text-light text-center mb-12">
            How We Got Here
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

