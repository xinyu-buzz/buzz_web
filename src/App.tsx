import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { usePageTracking } from './hooks/usePageTracking';
import Home from './pages/Home';
import Workforce from './pages/Workforce';
import Academy from './pages/Academy';
import Drones from './pages/Drones';
import Simulations from './pages/Simulations';
import Software from './pages/Software';
import About from './pages/About';
import Media from './pages/Media';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Confirmation from './pages/Confirmation';

function PageTracker() {
  usePageTracking();
  return null;
}

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Router>
        <PageTracker />
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-background-dark">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-background-dark focus:rounded-lg focus:font-semibold focus:text-sm"
          >
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/workforce" element={<Workforce />} />
              <Route path="/academy" element={<Academy />} />
              <Route path="/drones" element={<Drones />} />
              <Route path="/simulations" element={<Simulations />} />
              <Route path="/software" element={<Software />} />
              <Route path="/about" element={<About />} />
              <Route path="/media" element={<Media />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/confirmation" element={<Confirmation />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </MotionConfig>
  );
}

export default App;

