import { useEffect, useRef, useState, type MouseEvent } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { motion, useReducedMotion } from 'framer-motion';

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

function getReleaseId(version: string) {
  return `v${version.replace(/\./g, '-')}`;
}

function VersionTimeline({
  activeVersion,
  onVersionClick,
}: {
  activeVersion: string;
  onVersionClick: (event: MouseEvent<HTMLAnchorElement>, version: string) => void;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.nav
      initial={prefersReducedMotion ? false : { opacity: 0, x: 18 }}
      animate={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
      transition={{ duration: 0.45, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
      className="hidden lg:block lg:sticky lg:top-28 self-start"
      aria-label="Version navigation"
    >
      <div className="pl-4 xl:pl-6">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted/70">
            Release Index
          </p>
          <p className="mt-3 max-w-[15rem] text-sm leading-6 text-muted">
            Browse recent iOS releases with the date and update count always visible.
          </p>
        </div>

        <div
          className="relative"
        >
          <div
            className="absolute left-[11px] top-2 bottom-2 w-px"
            style={{ background: 'linear-gradient(to bottom, transparent, #424857 8%, #424857 92%, transparent)' }}
          />

          <div className="space-y-1.5">
            {changelogData.map((release) => {
              const isActive = activeVersion === release.version;
              const isLatest = release.version === changelogData[0].version;
              const updateCountLabel = `${release.changes.length} ${release.changes.length === 1 ? 'update' : 'updates'}`;

              return (
                <a
                  key={release.version}
                  href={`#${getReleaseId(release.version)}`}
                  onClick={(event) => onVersionClick(event, release.version)}
                  className={`group relative grid grid-cols-[24px_minmax(0,1fr)] items-start gap-4 rounded-2xl py-2 pr-3 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    isActive ? 'bg-card-dark/80' : 'hover:bg-card-dark/45'
                  }`}
                  aria-label={`Jump to version ${release.version}, released ${release.date}`}
                  aria-current={isActive ? 'location' : undefined}
                >
                  <span className="relative flex h-6 w-6 items-center justify-center">
                    <span
                      className={`absolute inset-0 rounded-full border transition-colors duration-200 ${
                        isActive ? 'border-primary/40 bg-primary/10' : 'border-border/80 bg-transparent'
                      }`}
                    />
                    <motion.span
                      className={`relative rounded-full ${
                        isActive ? 'h-2.5 w-2.5 bg-primary' : 'h-2 w-2 bg-[#6E7891]'
                      }`}
                      animate={prefersReducedMotion ? undefined : { scale: isActive ? 1.15 : 1, opacity: isActive ? 1 : 0.9 }}
                      transition={{ duration: 0.2 }}
                    />
                  </span>

                  <span className="min-w-0">
                    <span className="flex items-center gap-2">
                      <span className={`text-sm font-semibold transition-colors duration-200 ${
                        isActive ? 'text-text-light' : 'text-muted group-hover:text-text-light'
                      }`}>
                        v{release.version}
                      </span>
                      {isLatest ? (
                        <span className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                          Latest
                        </span>
                      ) : null}
                    </span>
                    <span className="mt-1 block text-xs text-muted">{release.date}</span>
                    <span className={`mt-1 block text-xs transition-colors duration-200 ${
                      isActive ? 'text-primary/90' : 'text-muted/80'
                    }`}>
                      {updateCountLabel}
                    </span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default function Changelog() {
  const prefersReducedMotion = useReducedMotion();
  const [activeVersion, setActiveVersion] = useState(changelogData[0].version);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    const releaseFromHash = changelogData.find((release) => getReleaseId(release.version) === hash);
    if (releaseFromHash) {
      setActiveVersion(releaseFromHash.version);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          const version = visible[0].target.getAttribute('data-version');
          if (version) setActiveVersion(version);
        }
      },
      { rootMargin: '-18% 0px -52% 0px', threshold: [0.2, 0.4, 0.65] }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleVersionClick = (event: MouseEvent<HTMLAnchorElement>, version: string) => {
    const el = sectionRefs.current[version];
    if (el) {
      event.preventDefault();
      window.history.replaceState(null, '', `#${getReleaseId(version)}`);
      el.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start',
      });
      setActiveVersion(version);
    }
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[76rem]">
        <AnimatedSection className="mx-auto mb-16 max-w-3xl text-center">
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

        <div className="lg:grid lg:grid-cols-[minmax(0,48rem)_15rem] lg:justify-center lg:gap-8 xl:grid-cols-[minmax(0,48rem)_17rem] xl:gap-10">
          <div className="min-w-0">
            <div className="space-y-8">
              {changelogData.map((release, index) => {
                const isActive = activeVersion === release.version;

                return (
                  <AnimatedSection key={release.version} delay={index * 0.1}>
                    <div
                      ref={(el) => { sectionRefs.current[release.version] = el; }}
                      data-version={release.version}
                      id={getReleaseId(release.version)}
                      className={`scroll-mt-24 rounded-2xl border p-6 transition-colors duration-300 sm:p-8 ${
                        isActive ? 'border-primary/40 bg-card-dark/95' : 'border-border bg-card-dark'
                      }`}
                    >
                      <div className="mb-4 flex items-center gap-3">
                        <span className="rounded-full bg-primary/20 px-3 py-1 text-sm font-semibold text-primary">
                          v{release.version}
                        </span>
                        <span className="text-sm text-muted">{release.date}</span>
                      </div>
                      <ul className="space-y-3">
                        {release.changes.map((change, i) => (
                          <li key={i} className="flex items-start gap-3 text-text-light">
                            <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{change}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>

          <VersionTimeline
            activeVersion={activeVersion}
            onVersionClick={handleVersionClick}
          />
        </div>
      </div>
    </div>
  );
}
