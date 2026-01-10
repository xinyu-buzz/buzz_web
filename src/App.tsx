import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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
import Confirmation from './pages/Confirmation';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-background-dark">
        <Navbar />
        <main className="flex-grow">
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
            <Route path="/confirmation" element={<Confirmation />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

