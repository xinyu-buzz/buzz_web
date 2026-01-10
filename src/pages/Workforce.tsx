import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';
import { motion } from 'framer-motion';

export default function Workforce() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Instant Matching',
      description: 'Hit a button. The perfect pilot for your job appears. Like magic, but better.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Verified Pilots Only',
      description: 'Every pilot is certified, insured, and ready. You get pros, not problems.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Beacon Community',
      description: 'Like neighbors showing up with water when your BBQ catches fire, or rallying for serious matters that risk your community. A community that\'s there when it matters—for work and for what matters most.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Zero Hassle',
      description: 'No scheduling headaches. No compliance paperwork. Just simple, smooth.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      title: 'Always Connected',
      description: 'Instant notifications to nearby pilots when new bookings drop. Real-time flight status updates. Know exactly what\'s happening, when it\'s happening, so you never miss an opportunity.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Built for Mobile',
      description: 'Native iOS and Android apps that feel natural, work flawlessly, and look stunning.',
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
            One tap. The right pilot shows up. Every time. The first-to-market app connecting 
            verified drone pilots with opportunities instantly. For pilots: accept, show up, deliver. 
            For clients: request, relax, receive. Available now on the App Store.
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
          <h2 className="text-3xl sm:text-4xl font-bold text-text-light text-center mb-4">
            It Just Works
          </h2>
          <p className="text-xl text-muted text-center max-w-2xl mx-auto mb-12">
            Everything you need, nothing you don't. No complexity, no confusion.
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

        {/* Why Join The Buzz Section */}
        <AnimatedSection className="mb-20 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-3xl p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-light mb-6 text-center">
            Why Everyone Wants In
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto mb-12 text-center">
            The first app of its kind. Pilots love it. Clients can't live without it. 
            Here's why there's a Buzz.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {[
              {
                title: 'For Pilots',
                subtitle: 'Work on Your Terms',
                points: [
                  'See gigs near you instantly',
                  'Accept what you want, when you want',
                  'Show up, fly, get paid',
                  'Build your reputation',
                  'No bureaucracy, just flying'
                ],
              },
              {
                title: 'For Clients',
                subtitle: 'Get Results, Not Excuses',
                points: [
                  'Request a pilot in seconds',
                  'Verified professionals every time',
                  'Track progress in real-time',
                  'Receive high-quality deliverables',
                  'No overhead, no hassle'
                ],
              },
            ].map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-card-dark/50 border border-border rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-accent mb-2">
                  {section.title}
                </h3>
                <p className="text-lg text-text-light mb-4">{section.subtitle}</p>
                <ul className="space-y-3">
                  {section.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-muted">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-lg text-muted mb-4">
              First-to-market technology. Zero complexity. Pure results.
            </p>
            <p className="text-2xl font-bold text-text-light">
              That's the Buzz.
            </p>
          </div>
        </AnimatedSection>

        {/* Screenshot Section */}
        <AnimatedSection className="bg-card-dark/50 rounded-3xl p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-light mb-6 text-center">
            Simple for Anyone, Powerful for Everyone
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto mb-8 text-center">
            Designed for pilots, built for scale. One app that works perfectly 
            whether you're booking your first flight or coordinating hundreds.
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

