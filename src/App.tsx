import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Workforce from './pages/Workforce';
import Academy from './pages/Academy';
import Portal from './pages/Portal';
import Drones from './pages/Drones';
import Simulations from './pages/Simulations';
import Software from './pages/Software';
import About from './pages/About';
import Contact from './pages/Contact';

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
            <Route path="/portal" element={<Portal />} />
            <Route path="/drones" element={<Drones />} />
            <Route path="/simulations" element={<Simulations />} />
            <Route path="/software" element={<Software />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

