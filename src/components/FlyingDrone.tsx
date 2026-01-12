import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

type FlightVariant = 'takeoff' | 'horizontal' | 'arc';

interface FlyingDroneProps {
  variant?: FlightVariant;
  className?: string;
  reverse?: boolean;
}

// Drone SVG component - same as DroneTimeline for consistency
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

// Flight path configurations for each variant
const flightPaths = {
  takeoff: {
    // Takeoff: starts from off-screen left, gracefully curves up and right
    // Starting from -30 so it emerges naturally from the edge
    path: 'M -30 150 C 100 150 150 100 300 70 S 550 30 830 25',
    viewBox: '-30 0 860 160',
    width: 860,
    xOffset: -30,
    height: 160,
  },
  horizontal: {
    // Horizontal sweep with a gentle wave
    path: 'M -30 80 Q 200 40 400 80 T 830 80',
    viewBox: '-30 0 860 160',
    width: 860,
    xOffset: -30,
    height: 160,
  },
  arc: {
    // Graceful arc across the page
    path: 'M 50 120 C 200 20 600 20 750 120',
    viewBox: '0 0 800 140',
    width: 800,
    xOffset: 0,
    height: 140,
  },
};

export default function FlyingDrone({ 
  variant = 'horizontal', 
  className = '',
  reverse = false,
}: FlyingDroneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(0);
  const [dronePosition, setDronePosition] = useState({ x: 0, y: 0, angle: 0 });
  
  const config = flightPaths[variant];

  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 15%"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  // Animate path drawing
  const pathDrawProgress = useTransform(smoothProgress, [0, 1], [0, 1]);

  // Get path length on mount
  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, [variant]);

  // Update drone position based on scroll
  useEffect(() => {
    const unsubscribe = smoothProgress.on('change', (latest) => {
      if (pathRef.current && pathLength > 0) {
        // If reverse, flip the progress
        const progress = reverse ? 1 - latest : latest;
        const point = pathRef.current.getPointAtLength(progress * pathLength);
        
        // Calculate angle for drone rotation
        const nextPoint = pathRef.current.getPointAtLength(
          Math.min((progress + 0.01) * pathLength, pathLength)
        );
        let angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * (180 / Math.PI);
        
        // If reverse, flip the angle
        if (reverse) {
          angle += 180;
        }
        
        setDronePosition({ x: point.x, y: point.y, angle });
      }
    });

    return () => unsubscribe();
  }, [smoothProgress, pathLength, reverse]);

  return (
    <div 
      ref={containerRef} 
      className={`flying-drone-container relative w-full overflow-hidden ${className}`}
      style={{ height: config.height }}
    >
      {/* SVG Flight Path Layer */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox={config.viewBox}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Gradient for path - fades in from transparent for smooth blend */}
          <linearGradient id={`flyingDroneGradient-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6E7891" stopOpacity="0" />
            <stop offset="8%" stopColor="#6E7891" stopOpacity="0.6" />
            <stop offset="20%" stopColor="#6E7891" stopOpacity="1" />
            <stop offset="100%" stopColor="#FFA500" stopOpacity="1" />
          </linearGradient>
          
          {/* Glow filter */}
          <filter id={`flyingDroneGlow-${variant}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background path (static, dashed) */}
        <path
          d={config.path}
          fill="none"
          stroke="#424857"
          strokeWidth="2"
          strokeDasharray="8 8"
          opacity="0.2"
        />

        {/* Animated path that draws as drone flies */}
        <motion.path
          ref={pathRef}
          d={config.path}
          fill="none"
          stroke={`url(#flyingDroneGradient-${variant})`}
          strokeWidth="2.5"
          strokeDasharray="10 5"
          strokeLinecap="round"
          filter={`url(#flyingDroneGlow-${variant})`}
          style={{
            pathLength: pathDrawProgress,
          }}
        />
      </svg>

      {/* Animated Drone */}
      {pathLength > 0 && (
        <motion.div
          className="drone-flying absolute z-20 pointer-events-none"
          style={{
            left: `${((dronePosition.x - config.xOffset) / config.width) * 100}%`,
            top: dronePosition.y,
            transform: `translate(-50%, -50%) rotate(${dronePosition.angle}deg)`,
          }}
        >
          <DroneIcon className="w-12 h-12 md:w-16 md:h-16 drop-shadow-lg" />
        </motion.div>
      )}
    </div>
  );
}
