import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';

const changelogData = [
  {
    version: '1.4.26',
    date: 'March 27, 2026',
    changes: [
      'Added TAF (Terminal Aerodrome Forecast) to Cockpit view',
      'Added tip support for completed bookings',
      'Improved flight hour claim submission with duplicate prevention',
      'Enhanced METAR, TAF, and NOTAM cache management for better performance',
      'Improved hourly forecast layout with sticky headers',
      'Academy view structure and UI improvements',
    ],
  },
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
  {
    version: '1.4.19',
    date: 'March 13, 2026',
    changes: [
      'Added subscription requirement for course enrollment',
      'Integrated booking disputes into the ticket report system',
      'Improved Help and Bug Report views with better layout',
    ],
  },
  {
    version: '1.4.18',
    date: 'March 12, 2026',
    changes: [
      'Updated mission distance preferences and UI elements',
    ],
  },
  {
    version: '1.4.17',
    date: 'March 12, 2026',
    changes: [
      'Updated booking terminology for mission context',
      'Added Express Promotion and Ground School test integration',
      'Added unread message tracking and notification sync',
      'Added examiner stats to profile views',
      'Added flight hour claims navigation link',
      'Implemented measurement system preferences',
      'Enhanced message input functionality',
      'Improved academy course management',
    ],
  },
  {
    version: '1.4.14',
    date: 'March 10, 2026',
    changes: [
      'Added beacon qualification expiration notifications',
      'Added certificate upload for renewed training steps',
      'Implemented launch screen and updated authentication logic',
      'Enhanced deep linking for Marketplace features',
      'Added releasing status to Marketplace transactions',
    ],
  },
  {
    version: '1.4.13',
    date: 'March 9, 2026',
    changes: [
      'Added license management notifications and unread count',
      'Enhanced license management with help article integration',
      'Improved license deep linking and notification handling',
      'Added pre-approval status to license approval workflow',
    ],
  },
  {
    version: '1.4.12',
    date: 'March 8, 2026',
    changes: [
      'Refactored Bug Report into Ticket Report system',
      'Added image upload to bug reports',
      'Added license management deep linking',
      'Improved course unit models for clarity',
    ],
  },
  {
    version: '1.4.10',
    date: 'March 6, 2026',
    changes: [
      'Added message reactions with notification support',
      'Added Conversations feature to Cockpit view',
      'Enhanced messaging and user profile handling',
      'Added audio level monitoring in Hanger Space',
      'Improved deep linking for HangerTalk',
      'Improved Delete Account view layout',
    ],
  },
  {
    version: '1.4.8',
    date: 'March 6, 2026',
    changes: [
      'Enhanced Hanger Space with active speaker detection',
      'Improved participant handling and deep linking',
      'Enhanced pilot license management',
      'Added follower and following profile fetching',
    ],
  },
  {
    version: '1.4.6',
    date: 'March 5, 2026',
    changes: [
      'Added booking configuration service for industry support',
      'Improved exam appointment Zoom meeting handling',
      'Added expiration date toggle for drone registrations',
    ],
  },
  {
    version: '1.4.5',
    date: 'March 4, 2026',
    changes: [
      'Added license approval workflow with UI enhancements',
      'Added booking withdrawal functionality',
      'Improved beacon and booking backend integration',
      'Updated leaderboard to fetch top 10 rankings',
    ],
  },
  {
    version: '1.4.3',
    date: 'March 3, 2026',
    changes: [
      'Enhanced crew status logic in booking details',
      'Updated booking crew logic with number of pilots',
      'Improved beacon and booking notification syncing',
    ],
  },
  {
    version: '1.4.2',
    date: 'March 3, 2026',
    changes: [
      'Added country flags to news articles',
      'Integrated Beacon Service into Cockpit for volunteer tracking',
      'Improved booking filtering in checklist and flight plan views',
    ],
  },
  {
    version: '1.4.1',
    date: 'March 3, 2026',
    changes: [
      'Added leave search and rescue booking functionality',
      'Improved Beacon view filtering logic',
    ],
  },
  {
    version: '1.4.0',
    date: 'March 3, 2026',
    changes: [
      'Enhanced NOTAM and weather data handling',
      'Improved call sign validation in sign-up and profile editing',
      'Added app version tracking and hanger spaces tables',
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
