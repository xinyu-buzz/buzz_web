import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { name: 'Workforce', path: '/workforce' },
    { name: 'Academy', path: '/academy' },
    { name: 'Portal', path: '/portal' },
  ];

  const comingSoonLinks = [
    { name: 'Drones', path: '/drones' },
    { name: 'Simulations', path: '/simulations' },
    { name: 'Software', path: '/software' },
  ];

  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-card-dark border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <motion.img
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                src="/android-chrome-192x192.png"
                alt="Buzz Logo"
                className="w-10 h-10 rounded-lg shadow-lg"
              />
              <span className="text-xl font-bold text-text-light group-hover:text-accent transition-colors">
                Buzz
              </span>
            </Link>
            <p className="text-muted text-sm leading-relaxed">
              Complete ecosystem for drone pilots, training, operations, and manufacturing.
            </p>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="text-text-light font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coming Soon Column */}
          <div>
            <h3 className="text-text-light font-bold mb-4">Coming Soon</h3>
            <ul className="space-y-2">
              {comingSoonLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted hover:text-accent transition-colors text-sm flex items-center gap-2"
                  >
                    {link.name}
                    <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-full">
                      2026
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-text-light font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h4 className="text-text-light font-semibold mb-2 text-sm">Connect</h4>
              <a
                href="mailto:hello@buzzbuzzin.com"
                className="text-muted hover:text-accent transition-colors text-sm"
              >
                hello@buzzbuzzin.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted text-sm">
            © {currentYear} Buzz. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-muted hover:text-accent transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-muted hover:text-accent transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

