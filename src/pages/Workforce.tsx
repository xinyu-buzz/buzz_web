import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';
import { motion } from 'framer-motion';

export default function Workforce() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'AI-Powered Scheduling',
      description: 'Revolutionary intelligent scheduling technology that automatically optimizes pilot availability, equipment, and client needs.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      title: 'Automated Compliance',
      description: 'Industry-first automated compliance monitoring ensuring all pilots meet certification and regulatory requirements in real-time.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Beacon Technology',
      description: 'Our proprietary beacon program connects verified pilots with opportunities, creating a decentralized professional network.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Real-Time Analytics',
      description: 'Advanced data analytics providing actionable insights that transform how drone operations are managed.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Instant Coordination',
      description: 'Lightning-fast communication technology enabling seamless coordination between pilots, equipment, and clients.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Mobile-First Platform',
      description: 'Built from the ground up for iOS, delivering a native experience that sets the industry standard.',
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </motion.div>
          
          <h1 className="text-5xl sm:text-6xl font-bold text-text-light mb-6">
            Buzz Workforce
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto mb-8">
            First-to-market iOS app revolutionizing how drone pilots work. Cutting-edge technology 
            empowering operators with intelligent scheduling, real-time coordination, and compliance automation. 
            Available now on the App Store.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" href="https://apps.apple.com/us/app/buzz-air/id6755077577" external>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download on App Store
              </Button>
            </div>
            
            {/* QR Code */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-4"
            >
              <div className="text-center">
                <p className="text-sm text-muted mb-3">Or scan to download</p>
                <div className="bg-white p-4 rounded-2xl shadow-xl inline-block">
                  <img 
                    src="/ios_screenshots/app_store_QR.png" 
                    alt="Download Buzz Workforce App QR Code"
                    className="w-40 h-40"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Features Grid */}
        <AnimatedSection className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-light text-center mb-12">
            Powerful Features
          </h2>
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

        {/* Industry Transformation Section */}
        <AnimatedSection className="mb-20 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-3xl p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-light mb-6 text-center">
            Transforming the Drone Industry
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto mb-8 text-center">
            We're not managing drone operations—we're revolutionizing how pilots work. 
            Our technology empowers operators with tools to coordinate their own missions, 
            manage their certifications, and connect with opportunities through our innovative beacon system.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'First to Market',
                description: 'Pioneering the first comprehensive workforce management app specifically built for drone pilots.',
              },
              {
                title: 'Pilot Empowerment',
                description: 'Technology that gives pilots control over their careers, not another layer of management.',
              },
              {
                title: 'Beacon Network',
                description: 'Revolutionary system connecting qualified pilots directly with opportunities in their area.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-xl font-bold text-accent mb-3">
                  {item.title}
                </h3>
                <p className="text-muted">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Screenshot Section */}
        <AnimatedSection className="bg-card-dark/50 rounded-3xl p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-light mb-6 text-center">
            Technology-First Design
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto mb-8 text-center">
            Native iOS application leveraging cutting-edge mobile technology. 
            Built for speed, reliability, and the modern drone pilot.
          </p>
          
          {/* Screenshots Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[1, 2, 3, 4].map((index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-border/20 rounded-2xl overflow-hidden aspect-[9/19] flex items-center justify-center"
              >
                <img 
                  src={`/ios_screenshots/screenshot_${index}.png`}
                  alt={`Buzz Workforce App Screenshot ${index}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="text-muted text-center p-8">
                          <svg class="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <p class="text-sm">Screenshot ${index}</p>
                        </div>
                      `;
                    }
                  }}
                />
              </motion.div>
            ))}
          </div>
          
          <p className="text-center text-muted text-sm mt-8">
            Available now on the App Store for iPhone and iPad
          </p>
        </AnimatedSection>
      </div>
    </div>
  );
}

