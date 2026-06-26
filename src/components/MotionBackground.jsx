import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './MotionBackground.css';

gsap.registerPlugin(useGSAP);

const stems = Array.from({ length: 22 }, (_, index) => ({
  id: `stem-${index}`,
  left: `${6 + ((index * 17) % 88)}%`,
  top: `${18 + ((index * 23) % 68)}%`,
  height: 42 + ((index * 19) % 82),
  delay: (index % 9) * 0.16,
}));

const doodles = Array.from({ length: 10 }, (_, index) => ({
  id: `doodle-${index}`,
  kind: ['dash', 'dot', 'star', 'pill'][index % 4],
  left: `${8 + ((index * 31) % 84)}%`,
  top: `${16 + ((index * 37) % 68)}%`,
}));

const MotionBackground = () => {
  const root = useRef(null);

  useGSAP(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    gsap.fromTo('.bg-stem',
      { y: 22, autoAlpha: 0.28 },
      {
        y: -18,
        autoAlpha: 0.72,
        duration: 2.4,
        ease: 'sine.inOut',
        stagger: {
          each: 0.08,
          from: 'random',
          repeat: -1,
          yoyo: true,
        },
      }
    );

    gsap.fromTo('.bg-stem-line',
      { scaleY: 0.28, y: 22, autoAlpha: 0.28 },
      {
        scaleY: 1,
        y: 0,
        autoAlpha: 0.72,
        duration: 2.4,
        ease: 'sine.inOut',
        stagger: {
          each: 0.08,
          from: 'random',
          repeat: -1,
          yoyo: true,
        },
      }
    );

    gsap.to('.bg-doodle', {
      y: 'random(-14, 14, 1)',
      x: 'random(-8, 8, 1)',
      duration: 'random(2.6, 4.8, 0.1)',
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      stagger: { each: 0.09, from: 'random' },
    });

    gsap.to('.bg-shape:not(.bg-dot)', {
      rotation: 'random(-18, 18, 1)',
      duration: 'random(2.8, 5.2, 0.1)',
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      stagger: { each: 0.12, from: 'random' },
    });

  }, { scope: root });

  return (
    <div className="motion-bg" ref={root} aria-hidden="true">
      <div className="bg-field">
        {stems.map((stem) => (
          <span
            key={stem.id}
            className="bg-stem"
            style={{
              left: stem.left,
              top: stem.top,
              height: `${stem.height}px`,
              animationDelay: `${stem.delay}s`,
            }}
          >
            <span className="bg-stem-dot" />
            <span className="bg-stem-line" />
          </span>
        ))}
        {doodles.map((doodle) => (
          <span
            key={doodle.id}
            className={`bg-doodle bg-doodle-${doodle.kind}`}
            style={{
              left: doodle.left,
              top: doodle.top,
            }}
          >
            <span className={`bg-shape bg-${doodle.kind}`} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default MotionBackground;
