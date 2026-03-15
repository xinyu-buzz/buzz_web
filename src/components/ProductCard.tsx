import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import ComingSoonBadge from './ComingSoonBadge';

interface ProductCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
  comingSoon?: boolean;
  comingSoonText?: string;
  external?: boolean;
}

export default function ProductCard({
  title,
  description,
  icon,
  href,
  comingSoon = false,
  comingSoonText,
  external = false,
}: ProductCardProps) {
  const cardContent = (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
      className="bg-card-dark border border-border rounded-2xl p-8 h-full flex flex-col shadow-xl hover:shadow-2xl hover:border-primary/50 transition-all duration-300 relative overflow-hidden group cursor-pointer"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10 flex flex-col h-full">
        {/* Icon and Badge */}
        <div className="flex items-start justify-between mb-6">
          <div
            className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300"
          >
            {icon}
          </div>
          {comingSoon && <ComingSoonBadge text={comingSoonText} />}
        </div>

        {/* Title */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-text-light group-hover:text-accent transition-colors duration-200">
            {title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-muted text-sm leading-relaxed flex-grow">
          {description}
        </p>

        {/* CTA */}
        <div className="flex items-center gap-2 text-primary font-semibold text-sm mt-auto pt-6">
          <span>{comingSoon ? 'Learn More' : 'Explore'}</span>
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </motion.div>
  );

  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
      {cardContent}
    </a>
  ) : (
    <Link to={href} className="block h-full">
      {cardContent}
    </Link>
  );
}
