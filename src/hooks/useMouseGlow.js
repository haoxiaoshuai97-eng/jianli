import { useEffect, useRef } from 'react';

export const useMouseGlow = () => {
  const ref = useRef(null);

  useEffect(() => {
    const elements = document.querySelectorAll('.glass-interactive');

    const handleMouseMove = (e) => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        el.style.setProperty('--mouse-x', `${x}%`);
        el.style.setProperty('--mouse-y', `${y}%`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return ref;
};
