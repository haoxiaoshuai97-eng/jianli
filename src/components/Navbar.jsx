import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const navLinksRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrolled = () => {
      setIsScrolled(window.scrollY > 24);
    };

    updateScrolled();
    window.addEventListener('scroll', updateScrolled, { passive: true });

    return () => window.removeEventListener('scroll', updateScrolled);
  }, []);

  const navItems = [
    { path: '/', label: '首页' },
    { path: '/portfolio', label: '作品集' },
    { path: '/about', label: '关于我' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="logo gradient-text">
          动效设计师
        </Link>

        <div
          className="nav-links"
          ref={navLinksRef}
          onPointerMove={(event) => {
            const nav = navLinksRef.current;
            if (!nav) return;

            const rect = nav.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            nav.style.setProperty('--border-x', `${x}px`);
            nav.style.setProperty('--border-y', `${y}px`);
            nav.style.setProperty('--border-opacity', '1');
          }}
          onPointerLeave={() => {
            navLinksRef.current?.style.setProperty('--border-opacity', '0');
          }}
        >
          <span className="nav-glow nav-glow-border" aria-hidden="true" />
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              <span className="magnetic-label">{item.label}</span>
              {location.pathname === item.path && (
                <span className="nav-indicator" />
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
