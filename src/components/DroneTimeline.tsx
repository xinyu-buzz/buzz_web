import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

interface TimelineItem {
  year: string;
  event: string;
}

const timeline: TimelineItem[] = [
  { year: '2020', event: 'It started here. Drone workforce under a production house. The seed was planted.' },
  { year: '2021', event: 'Buzz Academy goes live. First pilots trained. The journey begins.' },
  { year: '2022', event: 'We went solo. Buzz becomes its own company. No looking back.' },
  { year: '2023', event: 'Buzz Portal launches. Individual and enterprise customers, connected.' },
  { year: '2024', event: 'Rapid growth. More pilots. More training. More momentum.' },
  { year: '2025', event: 'Mobile-Driven. Industry-Leading.' },
  { year: '2026', event: 'The ecosystem expands all together on one line.' },
];

// Drone SVG component
const DroneIcon = ({ className = '' }: { className?: string }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Drone body */}
    <ellipse cx="32" cy="32" rx="8" ry="5" fill="#6E7891" />
    <ellipse cx="32" cy="32" rx="5" ry="3" fill="#424857" />
    
    {/* Camera */}
    <circle cx="32" cy="35" r="2" fill="#FFA500" />
    
    {/* Arms */}
    <line x1="24" y1="32" x2="12" y2="24" stroke="#6E7891" strokeWidth="2" strokeLinecap="round" />
    <line x1="40" y1="32" x2="52" y2="24" stroke="#6E7891" strokeWidth="2" strokeLinecap="round" />
    <line x1="24" y1="32" x2="12" y2="40" stroke="#6E7891" strokeWidth="2" strokeLinecap="round" />
    <line x1="40" y1="32" x2="52" y2="40" stroke="#6E7891" strokeWidth="2" strokeLinecap="round" />
    
    {/* Propellers */}
    <ellipse cx="12" cy="24" rx="8" ry="2" fill="#FFA500" opacity="0.8" className="propeller" />
    <ellipse cx="52" cy="24" rx="8" ry="2" fill="#FFA500" opacity="0.8" className="propeller" />
    <ellipse cx="12" cy="40" rx="8" ry="2" fill="#FFA500" opacity="0.8" className="propeller" />
    <ellipse cx="52" cy="40" rx="8" ry="2" fill="#FFA500" opacity="0.8" className="propeller" />
    
    {/* Propeller centers */}
    <circle cx="12" cy="24" r="2" fill="#343844" />
    <circle cx="52" cy="24" r="2" fill="#343844" />
    <circle cx="12" cy="40" r="2" fill="#343844" />
    <circle cx="52" cy="40" r="2" fill="#343844" />
  </svg>
);

// Landing pad component
const LandingPad = ({ 
  year, 
  event, 
  isLeft, 
  index,
  isActive 
}: { 
  year: string; 
  event: string; 
  isLeft: boolean; 
  index: number;
  isActive: boolean;
}) => {
  return (
    <AnimatedSection delay={index * 0.1}>
      <div 
        className={`landing-pad-container flex items-center gap-6 md:gap-10 ${
          isLeft ? 'flex-row' : 'flex-row-reverse'
        }`}
      >
        {/* Landing Pad */}
        <div className={`landing-pad relative flex-shrink-0 ${isActive ? 'active' : ''}`}>
          {/* Outer ring with glow */}
          <div className="landing-pad-glow absolute inset-0 rounded-full" />
          
          {/* Pad base */}
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-card-dark to-background-dark border-2 border-primary/50 flex items-center justify-center relative overflow-hidden">
            {/* H marking */}
            <div className="absolute inset-2 rounded-full border border-primary/30" />
            <div className="absolute w-[2px] h-8 md:h-10 bg-primary/40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute w-8 md:w-10 h-[2px] bg-primary/40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            
            {/* Year */}
            <span className="text-accent font-bold text-lg md:text-xl z-10 relative">
              {year}
            </span>
          </div>
          
          {/* Corner lights */}
          <div className="absolute -top-1 -left-1 w-2 h-2 rounded-full bg-accent/80 landing-light" />
          <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-accent/80 landing-light" style={{ animationDelay: '0.5s' }} />
          <div className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-accent/80 landing-light" style={{ animationDelay: '1s' }} />
          <div className="absolute -bottom-1 -right-1 w-2 h-2 rounded-full bg-accent/80 landing-light" style={{ animationDelay: '1.5s' }} />
        </div>

        {/* Event Card */}
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
          className={`event-card flex-grow max-w-md bg-card-dark/80 backdrop-blur-sm border border-border rounded-xl p-5 md:p-6 hover:border-accent/50 transition-all duration-300 ${
            isLeft ? 'text-left' : 'text-right'
          }`}
        >
          <p className="text-text-light leading-relaxed text-sm md:text-base">{event}</p>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default function DroneTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mobileContainerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(0);
  const [dronePosition, setDronePosition] = useState({ x: 0, y: 0, angle: 0 });
  
  // Desktop scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"]
  });

  // Mobile scroll tracking
  const { scrollYProgress: mobileScrollProgress } = useScroll({
    target: mobileContainerRef,
    offset: ["start 80%", "end 20%"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const smoothMobileProgress = useSpring(mobileScrollProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Animate path drawing
  const pathDrawProgress = useTransform(smoothProgress, [0, 1], [0, 1]);

  // Mobile drone Y position - moves from top to bottom of timeline
  // Each item has ~140px height (56px pad + ~84px from space-y-12 gap)
  const mobileTimelineHeight = (timeline.length - 1) * 140;
  const mobileDroneY = useTransform(smoothMobileProgress, [0, 1], [0, mobileTimelineHeight]);

  // Get path length on mount
  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  // Update drone position based on scroll
  useEffect(() => {
    const unsubscribe = smoothProgress.on('change', (latest) => {
      if (pathRef.current && pathLength > 0) {
        const point = pathRef.current.getPointAtLength(latest * pathLength);
        
        // Calculate angle for drone rotation
        const nextPoint = pathRef.current.getPointAtLength(
          Math.min((latest + 0.01) * pathLength, pathLength)
        );
        const angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * (180 / Math.PI);
        
        setDronePosition({ x: point.x, y: point.y, angle });
      }
    });

    return () => unsubscribe();
  }, [smoothProgress, pathLength]);

  // Generate SVG path for zigzag flight pattern
  const generateFlightPath = () => {
    const padPositions = timeline.map((_, index) => {
      const isLeft = index % 2 === 0;
      const x = isLeft ? 120 : 680; // Left or right position
      const y = 60 + index * 200; // Vertical spacing
      return { x, y };
    });

    let path = `M ${padPositions[0].x} ${padPositions[0].y}`;
    
    for (let i = 1; i < padPositions.length; i++) {
      const prev = padPositions[i - 1];
      const curr = padPositions[i];
      
      // Create smooth bezier curve
      const midY = (prev.y + curr.y) / 2;
      const controlX1 = prev.x;
      const controlY1 = midY;
      const controlX2 = curr.x;
      const controlY2 = midY;
      
      path += ` C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${curr.x} ${curr.y}`;
    }
    
    return path;
  };

  const flightPath = generateFlightPath();
  const svgHeight = 60 + (timeline.length - 1) * 200 + 60;

  return (
    <div ref={containerRef} className="drone-timeline relative">
      <h2 className="text-3xl sm:text-4xl font-bold text-text-light text-center mb-16">
        How We Got Here
      </h2>

      {/* Desktop Layout */}
      <div className="hidden md:block relative max-w-4xl mx-auto">
        {/* SVG Flight Path Layer */}
        <svg
          className="absolute inset-0 w-full pointer-events-none"
          viewBox={`0 0 800 ${svgHeight}`}
          preserveAspectRatio="xMidYMid meet"
          style={{ height: svgHeight }}
        >
          <defs>
            {/* Gradient for path */}
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#6E7891" />
              <stop offset="100%" stopColor="#FFA500" />
            </linearGradient>
            
            {/* Glow filter */}
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Background path (static) */}
          <path
            d={flightPath}
            fill="none"
            stroke="#424857"
            strokeWidth="2"
            strokeDasharray="8 8"
            opacity="0.3"
          />

          {/* Animated path */}
          <motion.path
            ref={pathRef}
            d={flightPath}
            fill="none"
            stroke="url(#pathGradient)"
            strokeWidth="3"
            strokeDasharray="12 6"
            strokeLinecap="round"
            filter="url(#glow)"
            style={{
              pathLength: pathDrawProgress,
            }}
          />
        </svg>

        {/* Animated Drone */}
        <motion.div
          className="drone-flying absolute z-20 pointer-events-none"
          style={{
            left: `${(dronePosition.x / 800) * 100}%`,
            top: dronePosition.y,
            transform: `translate(-50%, -50%) rotate(${dronePosition.angle}deg)`,
          }}
        >
          <DroneIcon className="w-12 h-12 md:w-16 md:h-16 drop-shadow-lg" />
        </motion.div>

        {/* Landing Pads */}
        <div className="relative z-10" style={{ minHeight: svgHeight }}>
          {timeline.map((item, index) => {
            const isLeft = index % 2 === 0;
            const topPosition = 60 + index * 200 - 48; // Center vertically with pad

            return (
              <div
                key={item.year}
                className={`absolute w-full px-4`}
                style={{ 
                  top: topPosition,
                  display: 'flex',
                  justifyContent: isLeft ? 'flex-start' : 'flex-end',
                }}
              >
                <div className={`w-[45%] ${isLeft ? 'pr-8' : 'pl-8'}`}>
                  <LandingPad
                    year={item.year}
                    event={item.event}
                    isLeft={isLeft}
                    index={index}
                    isActive={false}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Layout */}
      <div ref={mobileContainerRef} className="md:hidden relative">
        {/* Vertical flight line */}
        <div className="absolute left-[39px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent opacity-30" />
        
        {/* Animated flight line that draws as you scroll */}
        <motion.div 
          className="absolute left-[39px] top-0 w-0.5 bg-gradient-to-b from-primary to-accent origin-top"
          style={{ 
            scaleY: smoothMobileProgress,
            height: '100%',
          }}
        />
        
        {/* Mobile drone that follows scroll - positioned at start */}
        <motion.div
          className="absolute left-[39px] top-7 z-20 pointer-events-none drone-flying -translate-x-1/2"
          style={{ 
            y: mobileDroneY,
          }}
        >
          <DroneIcon className="w-8 h-8" />
        </motion.div>
        
        {/* Mobile timeline items */}
        <div className="space-y-12 pl-6">
          {timeline.map((item, index) => (
            <div key={item.year} className="relative flex items-start gap-4">
              {/* Landing pad indicator */}
              <div className="landing-pad-mobile relative flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-card-dark to-background-dark border-2 border-primary/50 flex items-center justify-center">
                  <span className="text-accent font-bold text-sm">{item.year}</span>
                </div>
                <div className="absolute inset-0 rounded-full landing-pad-glow-mobile" />
              </div>
              
              {/* Event card */}
              <AnimatedSection delay={index * 0.1} className="flex-grow">
                <div className="bg-card-dark/80 backdrop-blur-sm border border-border rounded-xl p-4 hover:border-accent/50 transition-colors">
                  <p className="text-text-light text-sm leading-relaxed">{item.event}</p>
                </div>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
