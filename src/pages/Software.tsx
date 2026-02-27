import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';
import { motion } from 'framer-motion';

export default function Software() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Mission Planning',
      description: 'Plot it. Optimize it. Launch it. Smart routes, auto-waypoints, zero guesswork.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Autonomous Flight',
      description: 'Set it and forget it. AI handles obstacles, navigation, and the hard stuff.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Data Processing',
      description: 'Raw data in. Actionable insights out. AI does the heavy lifting.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      title: '3D Mapping',
      description: 'Turn flights into stunning 3D models and precision maps. See everything.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Analytics Dashboard',
      description: 'Real-time data. Deep insights. Know exactly what your fleet is doing.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'API Integration',
      description: 'Plug into your stack. Powerful APIs that play nice with your workflow.',
    },
  ];

  const sdkFeatures = [
    { title: 'Python SDK', description: 'Ship fast. Full-featured library for devs who move.' },
    { title: 'JavaScript SDK', description: 'Web-native. Build drone apps for the browser.' },
    { title: 'REST API', description: 'Universal access. Works with anything, anywhere.' },
    { title: 'WebSocket API', description: <>Live data. Real-time control.<br />Zero lag.</> },
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl font-bold text-text-light mb-6">
            Drone Software Suite
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto mb-8">
            The brains behind the flight. Autonomous missions. AI-powered insights. 
            Software that makes drones smarter. Build the future with us.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" href="/contact">
              Request Early Access
            </Button>
            <Button variant="ghost" href="/about">
              Learn More
            </Button>
          </div>
        </AnimatedSection>

        {/* Code Preview */}
        <AnimatedSection className="mb-20">
          <div className="bg-card-dark border border-border rounded-3xl p-8 sm:p-12">
            <h3 className="text-2xl font-bold text-text-light mb-4 text-center">
              Simple. Powerful. Intuitive.
            </h3>
            <div className="bg-background-dark rounded-xl p-6 font-mono text-sm overflow-x-auto">
              <div className="text-muted mb-4">// Example: Autonomous Mission with Python SDK</div>
              <div className="space-y-2">
                <div><span className="text-primary">from</span> <span className="text-text-light">buzz_sdk</span> <span className="text-primary">import</span> <span className="text-text-light">Drone, Mission</span></div>
                <div className="h-2"></div>
                <div><span className="text-text-light">drone</span> <span className="text-primary">=</span> <span className="text-accent">Drone</span><span className="text-text-light">(</span><span className="text-green-400">"my-drone-id"</span><span className="text-text-light">)</span></div>
                <div><span className="text-text-light">mission</span> <span className="text-primary">=</span> <span className="text-accent">Mission</span><span className="text-text-light">.</span><span className="text-accent">create</span><span className="text-text-light">()</span></div>
                <div className="h-2"></div>
                <div><span className="text-text-light">mission</span><span className="text-primary">.</span><span className="text-accent">add_waypoint</span><span className="text-text-light">(lat</span><span className="text-primary">=</span><span className="text-green-400">37.7749</span><span className="text-text-light">, lon</span><span className="text-primary">=</span><span className="text-green-400">-122.4194</span><span className="text-text-light">, alt</span><span className="text-primary">=</span><span className="text-green-400">100</span><span className="text-text-light">)</span></div>
                <div><span className="text-text-light">mission</span><span className="text-primary">.</span><span className="text-accent">add_waypoint</span><span className="text-text-light">(lat</span><span className="text-primary">=</span><span className="text-green-400">37.7849</span><span className="text-text-light">, lon</span><span className="text-primary">=</span><span className="text-green-400">-122.4094</span><span className="text-text-light">, alt</span><span className="text-primary">=</span><span className="text-green-400">100</span><span className="text-text-light">)</span></div>
                <div className="h-2"></div>
                <div><span className="text-text-light">drone</span><span className="text-primary">.</span><span className="text-accent">execute</span><span className="text-text-light">(mission)</span></div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Features Grid */}
        <AnimatedSection className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-light text-center mb-4">
            All the Tools. Zero Compromise.
          </h2>
          <p className="text-muted text-center mb-12 max-w-2xl mx-auto">
            Build it. Deploy it. Scale it. Everything you need in one powerful suite.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-card-dark border border-border rounded-xl p-6"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 text-primary">
                    {feature.icon}
                  </div>
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

        {/* SDK Options */}
        <AnimatedSection className="bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 rounded-3xl p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-light text-center mb-4">
            Built for Builders
          </h2>
          <p className="text-muted text-center mb-12 max-w-2xl mx-auto">
            Your stack. Your way. SDKs and APIs that fit how you actually work.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sdkFeatures.map((sdk, index) => (
              <AnimatedSection key={sdk.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-card-dark/50 border border-border rounded-xl p-6 text-center"
                >
                  <h3 className="text-lg font-bold text-text-light mb-2">
                    {sdk.title}
                  </h3>
                  <p className="text-muted text-sm">
                    {sdk.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

