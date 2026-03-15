import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';
import { getContactFormUrl, getNewsletterUrl } from '../lib/supabase';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  category: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  category?: string;
  subject?: string;
  message?: string;
}

const categories = [
  {
    id: 'academy',
    label: 'Academy',
    email: 'hello@buzzacademy.world',
    description: 'Buzz Academy related inquiries',
  },
  {
    id: 'technical',
    label: 'Technical Support',
    email: 'technical@buzzbuzzin.com',
    description: 'Technical support inquiries',
  },
  {
    id: 'beta',
    label: 'Beta Program',
    email: 'technical@buzzbuzzin.com',
    description: 'Beta program inquiries and applications',
  },
  {
    id: 'early-access',
    label: 'Early Access',
    email: 'technical@buzzbuzzin.com',
    description: 'Early access requests for upcoming features',
  },
  {
    id: 'support',
    label: 'Customer Care',
    email: 'hello@buzzbuzzin.com',
    description: 'General customer support',
  },
  {
    id: 'bd',
    label: 'Business Development',
    email: 'bd@buzzbuzzin.com',
    description: 'Large-scale growth opportunities and relationship building',
  },
  {
    id: 'partnerships',
    label: 'Partnerships',
    email: 'partnerships@buzzbuzzin.com',
    description: 'Partnership inquiries and collaboration proposals only',
  },
  {
    id: 'talent',
    label: 'Talent Acquisition',
    email: 'ta@buzzbuzzin.com',
    description: 'Career opportunities and recruitment inquiries',
  },
  {
    id: 'media',
    label: 'Media',
    email: 'media@buzzbuzzin.com',
    description: 'Interview requests and press inquiries',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    category: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Newsletter subscription state
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [newsletterError, setNewsletterError] = useState('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.category) {
      newErrors.category = 'Please select a category';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const contactFormUrl = getContactFormUrl();

    if (!contactFormUrl) {
      setSubmitStatus('error');
      setErrorMessage('Contact form is not configured. Please try again later.');
      setIsSubmitting(false);
      return;
    }

    const payload = {
      name: formData.name,
      email: formData.email,
      company: formData.company || undefined,
      phone: formData.phone || undefined,
      category: formData.category,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      const response = await fetch(contactFormUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        category: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(
        error instanceof Error ? error.message : 'Something went wrong. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      question: 'How do pilots join the Buzz Workforce app?',
      answer: 'Download the Buzz Workforce app from the App Store. Create your pilot profile, verify your credentials, and start accepting flight opportunities instantly. The app uses advanced matching technology to connect you with nearby assignments.',
    },
    {
      question: 'What Aviation Authority requirements do I need to meet?',
      answer: 'You must hold a valid remote pilot certification relevant to your country\'s aviation authority. The app verifies your certification status to ensure that all pilots comply with current regulations before accepting assignments.',
    },
    {
      question: 'How does the app track my recurrent training?',
      answer: 'The app is smart about keeping you compliant. It tracks your certifications and sends you notifications when your recurrent training is coming due. No more missed deadlines—Buzz keeps you on top of it so you can stay flight-ready.',
    },
    {
      question: 'How do I join the Beacon Community?',
      answer: 'Beacon is our emergency response network. When disaster strikes—fires, floods, emergencies—your community needs pilots who can deliver life-saving medical supplies, food, and blankets. Complete Basic Firefighting and CPR training through Buzz Academy, and you\'ll be ready to answer the call when your neighbors need you most.',
    },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-text-light mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Have questions? Want to partner with us? We'd love to hear from you.
          </p>
        </AnimatedSection>

        {/* Contact Form Section */}
        <AnimatedSection className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:items-stretch">
            {/* Form */}
            <div className="lg:col-span-3 flex">
              <div className="bg-card-dark border border-border rounded-3xl p-8 sm:p-10 w-full flex flex-col">
                <h2 className="text-3xl font-bold text-text-light mb-2">
                  Send Us a Message
                </h2>
                <p className="text-muted mb-8">
                  Fill out the form below and we'll route your message to the right team.
                </p>

                {submitStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-primary/20 border border-primary/30 rounded-2xl p-8 text-center flex-grow flex flex-col justify-center"
                    role="status"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4" aria-hidden="true">
                      <svg
                        className="w-8 h-8 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-text-light mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted mb-6">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitStatus('idle')}
                      className="text-primary hover:text-primary/80 font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="flex-grow flex flex-col">
                    <div className="space-y-6 flex-grow flex flex-col">
                    {/* Name and Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-text-light mb-2">
                          Name <span className="text-accent" aria-hidden="true">*</span>
                          <span className="sr-only">(required)</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          aria-required="true"
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? 'name-error' : undefined}
                          className={`w-full px-4 py-3 bg-background-dark border ${
                            errors.name ? 'border-red-500' : 'border-border'
                          } rounded-xl text-text-light placeholder-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors`}
                          placeholder="Your full name"
                        />
                        {errors.name && (
                          <p id="name-error" className="mt-1 text-sm text-red-500" role="alert">{errors.name}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-text-light mb-2">
                          Email <span className="text-accent" aria-hidden="true">*</span>
                          <span className="sr-only">(required)</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          aria-required="true"
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                          className={`w-full px-4 py-3 bg-background-dark border ${
                            errors.email ? 'border-red-500' : 'border-border'
                          } rounded-xl text-text-light placeholder-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors`}
                          placeholder="your@email.com"
                        />
                        {errors.email && (
                          <p id="email-error" className="mt-1 text-sm text-red-500" role="alert">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* Company and Phone Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-text-light mb-2">
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-background-dark border border-border rounded-xl text-text-light placeholder-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-text-light mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-background-dark border border-border rounded-xl text-text-light placeholder-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    {/* Category Dropdown */}
                    <div>
                      <label htmlFor="category" className="block text-sm font-semibold text-text-light mb-2">
                        Category <span className="text-accent" aria-hidden="true">*</span>
                        <span className="sr-only">(required)</span>
                      </label>
                      <div className="relative">
                        <select
                          id="category"
                          name="category"
                          value={formData.category}
                          onChange={handleInputChange}
                          aria-required="true"
                          aria-invalid={!!errors.category}
                          aria-describedby={errors.category ? 'category-error' : formData.category ? 'category-desc' : undefined}
                          className={`w-full px-4 py-3 bg-background-dark border ${
                            errors.category ? 'border-red-500' : 'border-border'
                          } rounded-xl text-text-light focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none cursor-pointer pr-10`}
                        >
                          <option value="" className="bg-background-dark">Select a category...</option>
                          {categories.map((cat) => (
                            <option key={cat.id} value={cat.id} className="bg-background-dark">
                              {cat.label}
                            </option>
                          ))}
                        </select>
                        <svg
                          className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted pointer-events-none"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      {errors.category && (
                        <p id="category-error" className="mt-1 text-sm text-red-500" role="alert">{errors.category}</p>
                      )}
                      {formData.category && (
                        <p id="category-desc" className="mt-2 text-sm text-muted">
                          {categories.find((cat) => cat.id === formData.category)?.description}
                        </p>
                      )}
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-text-light mb-2">
                        Subject <span className="text-accent" aria-hidden="true">*</span>
                        <span className="sr-only">(required)</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        aria-required="true"
                        aria-invalid={!!errors.subject}
                        aria-describedby={errors.subject ? 'subject-error' : undefined}
                        className={`w-full px-4 py-3 bg-background-dark border ${
                          errors.subject ? 'border-red-500' : 'border-border'
                        } rounded-xl text-text-light placeholder-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors`}
                        placeholder="Brief summary of your inquiry"
                      />
                      {errors.subject && (
                        <p id="subject-error" className="mt-1 text-sm text-red-500" role="alert">{errors.subject}</p>
                      )}
                    </div>

                    {/* Message */}
                      <div className="flex-grow flex flex-col">
                      <label htmlFor="message" className="block text-sm font-semibold text-text-light mb-2">
                        Message <span className="text-accent" aria-hidden="true">*</span>
                        <span className="sr-only">(required)</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        aria-required="true"
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                          className={`w-full flex-grow px-4 py-3 bg-background-dark border ${
                          errors.message ? 'border-red-500' : 'border-border'
                          } rounded-xl text-text-light placeholder-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none min-h-[200px]`}
                        placeholder="Tell us more about your inquiry..."
                      />
                      {errors.message && (
                        <p id="message-error" className="mt-1 text-sm text-red-500" role="alert">{errors.message}</p>
                      )}
                      </div>
                    </div>

                    {/* Error Message and Submit Button Container - pushed to bottom */}
                    <div className="mt-auto pt-6">
                    {submitStatus === 'error' && (
                        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-6" role="alert">
                        <p className="text-red-400 text-sm flex items-start gap-2">
                          <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                          <span>{errorMessage || 'Something went wrong. Please try again.'}</span>
                        </p>
                      </div>
                    )}

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card-dark ${
                        isSubmitting
                          ? 'bg-primary/50 cursor-not-allowed'
                          : 'bg-primary hover:bg-primary/90'
                      } text-white`}
                      aria-busy={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg
                            className="animate-spin h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        'Send Message'
                      )}
                    </motion.button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Department Info */}
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-text-light mb-4">
                  Inquiries Made Easy
                </h3>
                <div className="space-y-3">
                  {categories.map((cat) => (
                    <div key={cat.id} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <p className="text-text-light font-medium text-sm">{cat.label}</p>
                        <p className="text-muted text-xs">{cat.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter Subscription */}
              <div className="bg-card-dark border border-border rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center" aria-hidden="true">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-text-light">Newsletter</h3>
                </div>
                <p className="text-muted text-sm mb-4">
                  Subscribe to our monthly newsletter to stay updated with our latest news and updates.
                </p>

                {newsletterStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-primary/20 border border-primary/30 rounded-xl p-4 text-center"
                    role="status"
                  >
                    <div className="inline-flex items-center justify-center w-8 h-8 bg-primary/20 rounded-full mb-2" aria-hidden="true">
                      <svg
                        className="w-5 h-5 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-text-light text-sm font-semibold mb-1">Subscribed!</p>
                    <p className="text-muted text-xs">
                      You're all set. Check your inbox for our monthly updates.
                    </p>
                    <button
                      onClick={() => {
                        setNewsletterStatus('idle');
                        setNewsletterEmail('');
                      }}
                      className="mt-3 text-primary hover:text-primary/80 text-xs font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                    >
                      Subscribe another email
                    </button>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={async (e) => {
                      e.preventDefault();

                      if (isSubscribing) return;

                      if (!newsletterEmail.trim()) {
                        setNewsletterError('Email is required');
                        setNewsletterStatus('error');
                        return;
                      }

                      if (!validateEmail(newsletterEmail)) {
                        setNewsletterError('Please enter a valid email address');
                        setNewsletterStatus('error');
                        return;
                      }

                      setIsSubscribing(true);
                      setNewsletterStatus('idle');
                      setNewsletterError('');

                      const newsletterUrl = getNewsletterUrl();

                      if (!newsletterUrl) {
                        setNewsletterStatus('error');
                        setNewsletterError('Newsletter subscription is not configured. Please try again later.');
                        setIsSubscribing(false);
                        return;
                      }

                      try {
                        const response = await fetch(newsletterUrl, {
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                          body: JSON.stringify({ email: newsletterEmail }),
                        });

                        const data = await response.json();

                        if (!response.ok) {
                          throw new Error(data.error || 'Failed to subscribe');
                        }

                        setNewsletterStatus('success');
                        setNewsletterEmail('');
                      } catch (error) {
                        setNewsletterStatus('error');
                        setNewsletterError(
                          error instanceof Error ? error.message : 'Something went wrong. Please try again.'
                        );
                      } finally {
                        setIsSubscribing(false);
                      }
                    }}
                    className="space-y-3"
                  >
                    <div>
                      <label htmlFor="newsletter-email" className="block text-sm font-semibold text-text-light mb-2">
                        Email address
                      </label>
                      <input
                        type="email"
                        id="newsletter-email"
                        value={newsletterEmail}
                        onChange={(e) => {
                          setNewsletterEmail(e.target.value);
                          if (newsletterStatus === 'error') {
                            setNewsletterStatus('idle');
                            setNewsletterError('');
                          }
                        }}
                        placeholder="your@email.com"
                        aria-invalid={newsletterStatus === 'error'}
                        aria-describedby={newsletterStatus === 'error' ? 'newsletter-error' : undefined}
                        className={`w-full px-4 py-2.5 bg-background-dark border ${
                          newsletterStatus === 'error' ? 'border-red-500' : 'border-border'
                        } rounded-xl text-text-light placeholder-muted text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors`}
                        disabled={isSubscribing}
                      />
                      {newsletterStatus === 'error' && newsletterError && (
                        <p id="newsletter-error" className="mt-1 text-xs text-red-500" role="alert">{newsletterError}</p>
                      )}
                    </div>
                    <motion.button
                      type="submit"
                      disabled={isSubscribing}
                      whileHover={{ scale: isSubscribing ? 1 : 1.02 }}
                      whileTap={{ scale: isSubscribing ? 1 : 0.98 }}
                      className={`w-full py-2.5 px-4 rounded-xl font-semibold text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card-dark ${
                        isSubscribing
                          ? 'bg-primary/50 cursor-not-allowed'
                          : 'bg-primary hover:bg-primary/90'
                      } text-white`}
                      aria-busy={isSubscribing}
                    >
                      {isSubscribing ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg
                            className="animate-spin h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Subscribing...
                        </span>
                      ) : (
                        'Subscribe'
                      )}
                    </motion.button>
                  </form>
                )}
              </div>

              {/* Support Hours */}
              <div className="bg-card-dark border border-border rounded-2xl p-6">
                <h3 className="text-lg font-bold text-text-light mb-4">
                  Support Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted">Monday - Friday</span>
                    <span className="text-text-light font-semibold">9AM - 6PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Saturday - Sunday</span>
                    <span className="text-text-light font-semibold">10AM - 4PM EST</span>
                  </div>
                </div>
              </div>

              {/* Partnership Notice */}
              <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-text-light mb-2">
                  Partnership Inquiries
                </h3>
                <p className="text-muted text-sm">
                  For partnership proposals, please select "Partnerships" from the category dropdown. Note: Inquiries outside of partnerships will not receive a response through this channel.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Office Locations */}
        <AnimatedSection className="mb-20">
          <h2 className="text-3xl font-bold text-text-light mb-8">
            Our Locations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-card-dark border border-border rounded-xl p-6"
            >
              <h3 className="text-lg font-bold text-text-light mb-2">
                United States and Canada, Global Reach
              </h3>
              <p className="text-muted text-sm">
                We were founded in the United States and Canada simultaneously, with offices across North America, but our app serves customers globally.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-card-dark border border-border rounded-xl p-6"
            >
              <h3 className="text-lg font-bold text-text-light mb-3">
                Current Offices
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <span className="text-text-light font-semibold">New York</span>
                    <span className="text-muted">, United States</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <span className="text-text-light font-semibold">Ottawa</span>
                    <span className="text-muted">, Canada</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-card-dark border border-primary/30 rounded-xl p-6"
            >
              <h3 className="text-lg font-bold text-text-light mb-2">
                Coming Soon
              </h3>
              <p className="text-muted text-xs mb-3">New offices opening soon:</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2 text-sm">
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <span className="text-accent font-semibold">Space Coast</span>
                    <span className="text-muted">, United States</span>
                  </div>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <span className="text-accent font-semibold">El Segundo</span>
                    <span className="text-muted">, United States</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* FAQ Section */}
        <AnimatedSection className="bg-card-dark/50 rounded-3xl p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-light text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <AnimatedSection key={faq.question} delay={index * 0.1} className="h-full">
                <div className="bg-background-dark/50 rounded-xl p-6 h-full flex flex-col">
                  <h3 className="text-lg font-bold text-text-light mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed flex-grow">
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
