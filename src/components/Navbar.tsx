import { useState, useRef, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const location = useLocation();

  // Track scroll position for navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Workforce', path: '/workforce' },
    { name: 'Academy', path: '/academy' },
    { name: 'Drones', path: '/drones' },
    { name: 'Simulations', path: '/simulations' },
    { name: 'Software', path: '/software' },
    { name: 'About', path: '/about' },
    { name: 'Media', path: '/media' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [closeMenu]);

  // Close menu on route change
  useEffect(() => {
    closeMenu();
  }, [location.pathname, closeMenu]);

  // Handle keyboard navigation within menu
  const handleMenuKeyDown = (e: React.KeyboardEvent) => {
    if (!menuOpen) return;

    const items = menuItemsRef.current.filter(Boolean) as HTMLAnchorElement[];
    const currentIndex = items.indexOf(document.activeElement as HTMLAnchorElement);

    switch (e.key) {
      case 'Escape':
        closeMenu();
        buttonRef.current?.focus();
        break;
      case 'ArrowDown':
        e.preventDefault();
        if (currentIndex < items.length - 1) {
          items[currentIndex + 1]?.focus();
        } else {
          items[0]?.focus();
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (currentIndex > 0) {
          items[currentIndex - 1]?.focus();
        } else {
          items[items.length - 1]?.focus();
        }
        break;
      case 'Home':
        e.preventDefault();
        items[0]?.focus();
        break;
      case 'End':
        e.preventDefault();
        items[items.length - 1]?.focus();
        break;
      case 'Tab':
        requestAnimationFrame(() => {
          if (menuRef.current && !menuRef.current.contains(document.activeElement)) {
            closeMenu();
          }
        });
        break;
    }
  };

  const handleButtonKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown' && !menuOpen) {
      e.preventDefault();
      setMenuOpen(true);
      requestAnimationFrame(() => {
        menuItemsRef.current[0]?.focus();
      });
    }
  };

  useEffect(() => {
    if (menuOpen) {
      requestAnimationFrame(() => {
        menuItemsRef.current[0]?.focus();
      });
    }
  }, [menuOpen]);

  return (
    <nav
      className={`sticky top-0 z-50 border-b transition-all duration-300 ease-out ${
        scrolled
          ? 'bg-background-dark/95 border-border backdrop-blur-xl shadow-lg shadow-black/10'
          : 'bg-background-dark/50 border-transparent backdrop-blur-sm'
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
              src="/android-chrome-192x192.png"
              alt="Buzz Logo"
              className="w-12 h-12 rounded-xl shadow-lg"
            />
            <span className="text-2xl font-bold text-text-light group-hover:text-accent transition-colors duration-200">
              Buzz
            </span>
          </Link>

          {/* Menu Button */}
          <div
            className="relative"
            ref={menuRef}
            onMouseEnter={() => setMenuOpen(true)}
            onMouseLeave={() => setMenuOpen(false)}
            onKeyDown={handleMenuKeyDown}
          >
            <button
              ref={buttonRef}
              onClick={() => setMenuOpen(!menuOpen)}
              onKeyDown={handleButtonKeyDown}
              className="p-2 rounded-lg text-muted hover:text-text-light hover:bg-card-dark transition-colors duration-200"
              aria-label="Navigation menu"
              aria-expanded={menuOpen}
              aria-haspopup="true"
              aria-controls="nav-menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
                  id="nav-menu"
                  role="menu"
                  aria-label="Site navigation"
                  className="absolute right-0 mt-2 w-56 bg-card-dark border border-border rounded-xl shadow-2xl overflow-hidden"
                >
                  <div className="py-2">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.path}
                        initial={{ opacity: 0, x: 8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.2,
                          delay: index * 0.03,
                          ease: [0.25, 1, 0.5, 1],
                        }}
                      >
                        <Link
                          to={link.path}
                          ref={(el) => { menuItemsRef.current[index] = el; }}
                          role="menuitem"
                          tabIndex={menuOpen ? 0 : -1}
                          className={`block px-4 py-3 text-sm font-medium transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset ${
                            isActive(link.path)
                              ? 'text-accent bg-accent/10'
                              : 'text-muted hover:text-text-light hover:bg-background-dark/50 hover:pl-5'
                          }`}
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
}
