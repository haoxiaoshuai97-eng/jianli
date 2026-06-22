import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const selector = [
  '.btn-primary',
  '.btn-secondary',
  '.contact-link',
  '.copy-info-item',
  '.category-filter button',
  '.modal-close',
  '.nav-link',
].join(',');

const MagneticButtons = () => {
  const cleanupRef = useRef([]);
  const location = useLocation();

  useGSAP(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
    const rootStyle = document.documentElement.style;
    let scrollFrame = 0;
    let lastScrollY = window.scrollY;

    const updateGlassFlow = () => {
      scrollFrame = 0;
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY;
      lastScrollY = currentY;
      const loop = ((currentY % 620) + 620) % 620;
      const flowX = 12 + (loop / 620) * 92;
      const flowY = gsap.utils.clamp(-14, 14, delta * 0.18);
      const flowAngle = 118 + Math.sin(currentY * 0.008) * 12;

      rootStyle.setProperty('--glass-flow-x', `${flowX}%`);
      rootStyle.setProperty('--glass-flow-y', `${flowY}px`);
      rootStyle.setProperty('--glass-flow-angle', `${flowAngle}deg`);

      gsap.to(document.documentElement, {
        '--glass-flow-y': '0px',
        duration: 0.48,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    };

    const onScroll = () => {
      if (!scrollFrame) {
        scrollFrame = window.requestAnimationFrame(updateGlassFlow);
      }
    };

    if (!reduceMotion) {
      updateGlassFlow();
      window.addEventListener('scroll', onScroll, { passive: true });
    }

    if (reduceMotion || isCoarsePointer) {
      return () => {
        window.removeEventListener('scroll', onScroll);
        if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
      };
    }

    const shellStrength = 0.22;
    const labelStrength = 0.1;
    const tiltStrength = 12;
    const buttons = gsap.utils.toArray(selector);

    const cleanups = buttons.map((button) => {
      button.classList.add('magnetic-button');
      const hasGlassSurface = Boolean(button.querySelector('.glass-surface'));
      if (hasGlassSurface) button.classList.add('has-glass-surface');
      const label = button.querySelector('.magnetic-label');

      const onMove = (event) => {
        const rect = button.getBoundingClientRect();
        const mapX = gsap.utils.mapRange(rect.left, rect.right, -rect.width / 2, rect.width / 2, event.clientX);
        const mapY = gsap.utils.mapRange(rect.top, rect.bottom, -rect.height / 2, rect.height / 2, event.clientY);

        gsap.to(button, {
          x: mapX * shellStrength,
          y: mapY * shellStrength,
          scale: 1.025,
          rotationY: (mapX / rect.width) * tiltStrength,
          rotationX: (mapY / rect.height) * -tiltStrength,
          transformPerspective: 700,
          duration: 0.38,
          ease: 'power2.out',
          overwrite: 'auto',
        });

        if (label) {
          const maxLabelX = Math.max(0, (button.clientWidth - label.offsetWidth) / 2 - 6);
          const maxLabelY = Math.max(0, (button.clientHeight - label.offsetHeight) / 2 - 3);
          const labelX = gsap.utils.clamp(-maxLabelX, maxLabelX, mapX * labelStrength);
          const labelY = gsap.utils.clamp(-maxLabelY, maxLabelY, mapY * labelStrength);

          gsap.to(label, {
            x: labelX,
            y: labelY,
            z: 10,
            rotationY: (mapX / rect.width) * 3,
            rotationX: (mapY / rect.height) * -3,
            duration: 0.34,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        }
      };

      const onLeave = () => {
        gsap.to(button, {
          x: 0,
          y: 0,
          scale: 1,
          rotationX: 0,
          rotationY: 0,
          duration: 0.72,
          ease: 'elastic.out(1,0.4)',
          overwrite: 'auto',
        });

        if (label) {
          gsap.to(label, {
            x: 0,
            y: 0,
            z: 0,
            rotationX: 0,
            rotationY: 0,
            duration: 0.78,
            ease: 'elastic.out(1,0.35)',
            overwrite: 'auto',
          });
        }
      };

      const onDown = () => {
        gsap.to(button, {
          scale: 0.96,
          rotationX: 0,
          rotationY: 0,
          duration: 0.12,
          ease: 'power2.out',
          overwrite: 'auto',
        });

        if (label) {
          gsap.to(label, {
            scale: 1.035,
            z: 14,
            duration: 0.14,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        }
      };

      const onUp = () => {
        gsap.to(button, {
          scale: 1.025,
          duration: 0.48,
          ease: 'elastic.out(1,0.45)',
          overwrite: 'auto',
        });

        if (label) {
          gsap.to(label, {
            x: 0,
            y: 0,
            z: 0,
            scale: 1,
            rotationX: 0,
            rotationY: 0,
            duration: 0.62,
            ease: 'elastic.out(1,0.35)',
            overwrite: 'auto',
          });
        }
      };

      button.addEventListener('mousemove', onMove);
      button.addEventListener('mouseleave', onLeave);
      button.addEventListener('pointerdown', onDown);
      button.addEventListener('pointerup', onUp);

      return () => {
        button.removeEventListener('mousemove', onMove);
        button.removeEventListener('mouseleave', onLeave);
        button.removeEventListener('pointerdown', onDown);
        button.removeEventListener('pointerup', onUp);
        gsap.killTweensOf([button, label].filter(Boolean));
        gsap.set([button, label].filter(Boolean), { clearProps: 'transform' });
        button.classList.remove('magnetic-button');
        button.classList.remove('has-glass-surface');
      };
    });

    cleanupRef.current = cleanups;
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
      gsap.killTweensOf(document.documentElement);
      cleanupRef.current.forEach((cleanup) => cleanup());
      cleanupRef.current = [];
    };
  }, { dependencies: [location.pathname], revertOnUpdate: true });

  return null;
};

export default MagneticButtons;
