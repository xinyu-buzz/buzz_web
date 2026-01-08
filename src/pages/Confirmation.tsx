import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';

export default function Confirmation() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <AnimatedSection>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <img
              src="/android-chrome-192x192.png"
              alt="Buzz Logo"
              className="w-32 h-32 mx-auto rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-text-light mb-4">
              Your action is confirmed successfully
            </h1>
            <div className="mt-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full">
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
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </div>
  );
}
