import { motion } from 'framer-motion';

interface ComingSoonBadgeProps {
  text?: string;
  className?: string;
}

export default function ComingSoonBadge({ 
  text = 'Coming 2026', 
  className = '' 
}: ComingSoonBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent text-accent font-semibold text-xs uppercase tracking-wider ${className}`}
    >
      <motion.span
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'loop',
        }}
        className="w-2 h-2 bg-accent rounded-full"
      />
      {text}
    </motion.div>
  );
}

