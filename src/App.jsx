import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import CursorTrail from './components/CursorTrail';
import MotionBackground from './components/MotionBackground';
import MagneticButtons from './components/MagneticButtons';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import './App.css';

function App() {
  useEffect(() => {
    let rafId = null;
    let pendingEvent = null;

    const updateGlass = (e) => {
      const elements = document.querySelectorAll('.glass');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const nearX = e.clientX >= rect.left - 100 && e.clientX <= rect.right + 100;
        const nearY = e.clientY >= rect.top - 100 && e.clientY <= rect.bottom + 100;

        if (!nearX || !nearY) return;

        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        el.style.setProperty('--mouse-x', `${x}%`);
        el.style.setProperty('--mouse-y', `${y}%`);

        const inside = e.clientX >= rect.left && e.clientX <= rect.right &&
                       e.clientY >= rect.top && e.clientY <= rect.bottom;
        el.style.setProperty('--glow-intensity', inside ? '1' : '0');
      });
    };

    const handleMouseMove = (e) => {
      pendingEvent = e;
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        updateGlass(pendingEvent);
        rafId = null;
      });
    };

    const handleMouseLeave = () => {
      const elements = document.querySelectorAll('.glass');
      elements.forEach((el) => {
        el.style.setProperty('--glow-intensity', '0');
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="app">
        <MotionBackground />
        <CursorTrail />
        <MagneticButtons />
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
