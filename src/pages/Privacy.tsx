import AnimatedSection from '../components/AnimatedSection';

export default function Privacy() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-text-light mb-6">
            Privacy Policy
          </h1>
          <p className="text-muted text-lg">
            Last Updated: November 20, 2025
          </p>
        </AnimatedSection>

        {/* Introduction */}
        <AnimatedSection className="mb-12">
          <div className="bg-card-dark border border-border rounded-2xl p-8">
            <p className="text-text-light leading-relaxed">
              At Buzz, we are committed to protecting your privacy. This Privacy Policy explains 
              how we collect, use, disclose, and safeguard your information when you use our 
              mobile application.
            </p>
          </div>
        </AnimatedSection>

        {/* Section 1 */}
        <AnimatedSection className="mb-12">
          <h2 className="text-3xl font-bold text-text-light mb-6">
            1. Information We Collect
          </h2>
          <div className="space-y-4 text-muted leading-relaxed">
            <div>
              <p className="font-semibold text-text-light mb-2">
                – Personal Information:
              </p>
              <p>
                When you register for an account, we may collect personal information such as 
                your name, email address, phone number, and payment information.
              </p>
            </div>
            <div>
              <p className="font-semibold text-text-light mb-2">
                – Usage Data:
              </p>
              <p>
                We may collect information about how you access and use the app, including your 
                device information, IP address, and location data.
              </p>
            </div>
            <div>
              <p className="font-semibold text-text-light mb-2">
                – Third-Party Data:
              </p>
              <p>
                We may receive information about you from third-party services you connect to, 
                such as social media accounts.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Section 2 */}
        <AnimatedSection className="mb-12">
          <h2 className="text-3xl font-bold text-text-light mb-6">
            2. How We Use Your Information
          </h2>
          <p className="text-muted mb-4 leading-relaxed">
            We may use the information we collect for various purposes, including:
          </p>
          <ul className="space-y-3 text-muted leading-relaxed list-disc list-inside">
            <li>To provide and maintain our service</li>
            <li>To notify you about changes to our app</li>
            <li>To allow you to participate in interactive features when you choose to do so</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information so we can improve the app</li>
            <li>To monitor the usage of the app</li>
            <li>To detect, prevent, and address technical issues</li>
          </ul>
        </AnimatedSection>

        {/* Section 3 */}
        <AnimatedSection className="mb-12">
          <h2 className="text-3xl font-bold text-text-light mb-6">
            3. Sharing Your Information
          </h2>
          <p className="text-muted mb-4 leading-relaxed">
            We do not sell your personal information. We may share your information in the 
            following situations:
          </p>
          <div className="space-y-4 text-muted leading-relaxed">
            <div>
              <p className="font-semibold text-text-light mb-2">
                – With Service Providers:
              </p>
              <p>
                We may employ third-party companies and individuals to facilitate our service, 
                provide the service on our behalf, perform app-related services, or assist us 
                in analyzing how our service is used.
              </p>
            </div>
            <div>
              <p className="font-semibold text-text-light mb-2">
                – For Legal Reasons:
              </p>
              <p>
                We may disclose your information if required to do so by law or in response to 
                valid requests by public authorities.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Section 4 */}
        <AnimatedSection className="mb-12">
          <h2 className="text-3xl font-bold text-text-light mb-6">
            4. Security of Your Information
          </h2>
          <p className="text-muted leading-relaxed">
            The security of your personal information is important to us, but remember that no 
            method of transmission over the Internet or method of electronic storage is 100% 
            secure. While we strive to use commercially acceptable means to protect your 
            information, we cannot guarantee its absolute security.
          </p>
        </AnimatedSection>

        {/* Section 5 */}
        <AnimatedSection className="mb-12">
          <h2 className="text-3xl font-bold text-text-light mb-6">
            5. Your Rights
          </h2>
          <p className="text-muted mb-4 leading-relaxed">
            Depending on your location, you may have the following rights regarding your 
            personal information:
          </p>
          <ul className="space-y-3 text-muted leading-relaxed list-disc list-inside">
            <li>The right to access your personal information</li>
            <li>The right to rectify any inaccurate or incomplete information</li>
            <li>The right to request the deletion of your personal information</li>
            <li>The right to object to or restrict the processing of your personal information</li>
          </ul>
        </AnimatedSection>

        {/* Section 6 */}
        <AnimatedSection className="mb-12">
          <h2 className="text-3xl font-bold text-text-light mb-6">
            6. Changes to This Privacy Policy
          </h2>
          <p className="text-muted leading-relaxed">
            We may update our Privacy Policy from time to time. We will notify you of any 
            changes by posting the new Privacy Policy on this page. You are advised to review 
            this Privacy Policy periodically for any changes.
          </p>
        </AnimatedSection>

        {/* Section 7 */}
        <AnimatedSection className="mb-12">
          <h2 className="text-3xl font-bold text-text-light mb-6">
            7. Contact Us
          </h2>
          <p className="text-muted mb-4 leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <div className="bg-card-dark border border-border rounded-xl p-6 space-y-3">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:hello@buzzbuzzin.com" className="text-accent hover:underline">
                hello@buzzbuzzin.com
              </a>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-text-light">
                314 E. State Street, #200, Ithaca, NY 14850
              </span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
