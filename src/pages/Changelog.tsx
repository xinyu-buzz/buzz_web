import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';

const changelogData = [
  {
    version: '1.4.25',
    date: 'March 23, 2026',
    changes: [
      'Added radar mode to Flight Radar',
      'Improved weather data with UTC offset support',
      'Flight hour claim now indicates required evidence files',
      'Academy quiz and course enhancements',
      'Network monitoring and caching improvements',
    ],
  },
  {
    version: '1.4.22',
    date: 'March 16, 2026',
    changes: [
      'Refactored demo mode management',
      'Improved academy course sorting',
      'Enhanced Express Promotion functionality and UI',
    ],
  },
  {
    version: '1.4.21',
    date: 'March 15, 2026',
    changes: [
      'Improved HangerTalk search layout',
      'Refined direct messaging presentation in profiles',
    ],
  },
  {
    version: '1.4.20',
    date: 'March 15, 2026',
    changes: [
      'Added direct messaging feature to pilot profiles',
      'UI consistency improvements',
      'Accessibility enhancements across views',
    ],
  },
];

export default function Changelog() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-2xl mb-6"
            aria-hidden="true"
          >
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </motion.div>
          <h1 className="text-4xl sm:text-5xl font-bold text-text-light mb-4">
            Change Logs
          </h1>
          <p className="text-lg text-muted">
            What's new in Buzz Workforce for iOS
          </p>
        </AnimatedSection>

        <div className="space-y-8">
          {changelogData.map((release, index) => (
            <AnimatedSection key={release.version} delay={index * 0.1}>
              <div className="bg-card-dark border border-border rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm font-semibold px-3 py-1 bg-primary/20 text-primary rounded-full">
                    v{release.version}
                  </span>
                  <span className="text-sm text-muted">{release.date}</span>
                </div>
                <ul className="space-y-3">
                  {release.changes.map((change, i) => (
                    <li key={i} className="flex items-start gap-3 text-text-light">
                      <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{change}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
