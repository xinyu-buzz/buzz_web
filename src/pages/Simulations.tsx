import AnimatedSection from '../components/AnimatedSection';
import ComingSoonBadge from '../components/ComingSoonBadge';
import Button from '../components/Button';
import { motion } from 'framer-motion';

export default function Simulations() {
  const features = [
    {
      title: 'Realistic Physics',
      description: 'Accurate flight dynamics and environmental conditions for true-to-life training.',
    },
    {
      title: 'Multiple Scenarios',
      description: 'Practice everything from basic maneuvers to complex emergency situations.',
    },
    {
      title: 'Weather Simulation',
      description: 'Experience various weather conditions including wind, rain, and fog.',
    },
    {
      title: 'Multiplayer Mode',
      description: 'Train with other pilots and participate in team missions.',
    },
    {
      title: 'Performance Analytics',
      description: 'Track your progress and identify areas for improvement.',
    },
    {
      title: 'VR Support',
      description: 'Immersive virtual reality experience for enhanced training.',
    },
  ];

  const gamesModes = [
    {
      title: 'Training Mode',
      description: 'Learn the basics and master fundamental skills',
      difficulty: 'Beginner',
    },
    {
      title: 'Challenge Mode',
      description: 'Test your skills in time trials and obstacle courses',
      difficulty: 'Intermediate',
    },
    {
      title: 'Mission Mode',
      description: 'Complete realistic operational scenarios',
      difficulty: 'Advanced',
    },
    {
      title: 'Free Flight',
      description: 'Explore open environments at your own pace',
      difficulty: 'All Levels',
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
            <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </motion.div>
          
          <ComingSoonBadge className="mb-6" />
          
          <h1 className="text-5xl sm:text-6xl font-bold text-text-light mb-6">
            Flight Simulations & Games
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto mb-8">
            Master drone piloting in a risk-free virtual environment. Train, compete, 
            and have fun with realistic flight simulations and engaging game modes.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" href="/contact">
              Join Beta Program
            </Button>
            <Button variant="ghost" href="/academy">
              View Training Courses
            </Button>
          </div>
        </AnimatedSection>

        {/* Timeline */}
        <AnimatedSection className="mb-20 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-accent/10 border border-accent/30 rounded-xl">
            <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <div className="text-left">
              <div className="text-accent font-bold">Expected Launch</div>
              <div className="text-text-light text-lg font-bold">Q3 2026</div>
            </div>
          </div>
        </AnimatedSection>

        {/* Simulation Preview */}
        <AnimatedSection className="mb-20">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-border rounded-3xl p-12 sm:p-20">
            <div className="aspect-video bg-border/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"
              />
              <div className="relative text-center">
                <motion.svg
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                  className="w-32 h-32 mx-auto mb-4 text-primary/50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </motion.svg>
                <p className="text-muted">Gameplay Preview Coming Soon</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Game Modes */}
        <AnimatedSection className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-light text-center mb-4">
            Multiple Game Modes
          </h2>
          <p className="text-muted text-center mb-12 max-w-2xl mx-auto">
            From beginner training to advanced missions, there's something for every skill level.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {gamesModes.map((mode, index) => (
              <AnimatedSection key={mode.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-card-dark border border-border rounded-xl p-6"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-text-light">
                      {mode.title}
                    </h3>
                    <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full">
                      {mode.difficulty}
                    </span>
                  </div>
                  <p className="text-muted leading-relaxed">
                    {mode.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Features Grid */}
        <AnimatedSection className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-light text-center mb-12">
            Advanced Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-card-dark border border-border rounded-xl p-6 text-center"
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

        {/* Platform Support */}
        <AnimatedSection className="bg-card-dark/50 rounded-3xl p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-light mb-4">
            Multi-Platform Support
          </h2>
          <p className="text-muted mb-8 max-w-2xl mx-auto">
            Play on your preferred device with full cross-platform progression.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: 'Windows', icon: '🪟' },
              { name: 'macOS', icon: '🍎' },
              { name: 'PlayStation', icon: '🎮' },
              { name: 'Xbox', icon: '🎮' },
              { name: 'VR Headsets', icon: '🥽' },
            ].map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center gap-2 px-6 py-4 bg-background-dark/50 rounded-xl border border-border"
              >
                <div className="text-3xl">{platform.icon}</div>
                <div className="text-text-light font-semibold">{platform.name}</div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

