import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';

export default function Contact() {
  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email Us',
      description: 'Send us a message and we\'ll respond within 24 hours',
      value: 'hello@buzzbuzzin.com',
      href: 'mailto:hello@buzzbuzzin.com',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Business Inquiries',
      description: 'For partnerships and enterprise solutions',
      value: 'hello@buzzbuzzin.com',
      href: 'mailto:hello@buzzbuzzin.com',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'Support',
      description: 'Technical support for our products and services',
      value: 'hello@buzzbuzzin.com',
      href: 'mailto:hello@buzzbuzzin.com',
    },
  ];

  const faqs = [
    {
      question: 'How do I get started with Buzz?',
      answer: 'Start with Buzz Academy to get trained, then download Buzz Workforce to manage operations. Contact us for enterprise Portal access.',
    },
    {
      question: 'Do you offer enterprise solutions?',
      answer: 'Yes! Buzz Portal offers comprehensive enterprise solutions with custom pricing, dedicated support, and advanced features.',
    },
    {
      question: 'When will the new products launch?',
      answer: 'Drone manufacturing is planned for Q2 2026, simulations for Q3 2026, and software suite for Q4 2026.',
    },
    {
      question: 'Can I become a beta tester?',
      answer: 'Absolutely! Email us at hello@buzzbuzzin.com with your interest and we\'ll add you to our beta program waiting list.',
    },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <AnimatedSection className="text-center mb-20">
          <h1 className="text-5xl sm:text-6xl font-bold text-text-light mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Have questions? Want to partner with us? We'd love to hear from you.
          </p>
        </AnimatedSection>

        {/* Contact Methods */}
        <AnimatedSection className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <AnimatedSection key={method.title} delay={index * 0.1}>
                <motion.a
                  href={method.href}
                  whileHover={{ y: -5 }}
                  className="block bg-card-dark border border-border rounded-2xl p-8 hover:border-primary/50 transition-all group h-full"
                >
                  <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold text-text-light mb-2">
                    {method.title}
                  </h3>
                  <p className="text-muted text-sm mb-4 leading-relaxed">
                    {method.description}
                  </p>
                  <div className="text-accent font-semibold">
                    {method.value}
                  </div>
                </motion.a>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Office Info */}
        <AnimatedSection className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form Area */}
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 rounded-3xl p-10">
              <h2 className="text-3xl font-bold text-text-light mb-4">
                Send Us a Message
              </h2>
              <p className="text-muted mb-6">
                Fill out your details and we'll get back to you as soon as possible.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-text-light">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Quick response time (24 hours)</span>
                </div>
                <div className="flex items-center gap-3 text-text-light">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Dedicated support team</span>
                </div>
                <div className="flex items-center gap-3 text-text-light">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Available 7 days a week</span>
                </div>
              </div>
              <div className="mt-8 p-6 bg-card-dark/50 rounded-xl">
                <p className="text-sm text-muted">
                  For immediate assistance, email us directly at{' '}
                  <a href="mailto:hello@buzzbuzzin.com" className="text-accent hover:underline font-semibold">
                    hello@buzzbuzzin.com
                  </a>
                </p>
              </div>
            </div>

            {/* Office Locations (Placeholder) */}
            <div>
              <h2 className="text-3xl font-bold text-text-light mb-6">
                Our Locations
              </h2>
              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="bg-card-dark border border-border rounded-xl p-6"
                >
                  <h3 className="text-lg font-bold text-text-light mb-2">
                    Headquarters
                  </h3>
                  <p className="text-muted text-sm mb-4">
                    Where innovation takes flight
                  </p>
                  <div className="flex items-start gap-3 text-muted text-sm">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Location details available upon request</span>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="bg-card-dark border border-border rounded-xl p-6"
                >
                  <h3 className="text-lg font-bold text-text-light mb-2">
                    Support Hours
                  </h3>
                  <div className="space-y-2 text-muted text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="text-text-light font-semibold">9AM - 6PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday - Sunday</span>
                      <span className="text-text-light font-semibold">10AM - 4PM</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* FAQ Section */}
        <AnimatedSection className="bg-card-dark/50 rounded-3xl p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-light text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <AnimatedSection key={faq.question} delay={index * 0.1}>
                <div className="bg-background-dark/50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-text-light mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

