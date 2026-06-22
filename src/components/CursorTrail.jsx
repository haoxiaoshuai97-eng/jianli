import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './CursorTrail.css';

gsap.registerPlugin(useGSAP);

const trailItems = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  shape: ['spark', 'chip', 'petal', 'dot', 'slash', 'ring'][index % 6],
}));

const palette = ['#24d1b2', '#f7c948', '#ff6e54', '#8b7cf6', '#ff5fd2', '#4facfe'];

const CursorTrail = () => {
  const root = useRef(null);

  useGSAP(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;

    if (reduceMotion || isCoarsePointer) {
      gsap.set(root.current, { display: 'none' });
      return;
    }

    const items = gsap.utils.toArray('.trail-box', root.current);
    const wrapItem = gsap.utils.wrap(items);
    const randomColor = gsap.utils.random(palette, true);
    const randomRotation = gsap.utils.random(-55, 55, 1, true);
    const randomScale = gsap.utils.random(0.72, 1.35, 0.01, true);
    const randomDrift = gsap.utils.random(-22, 22, 1, true);
    const randomFloat = gsap.utils.random(-48, -16, 1, true);
    let index = 0;
    let lastX = window.innerWidth / 2;
    let lastY = window.innerHeight / 2;
    let lastTime = 0;

    const emit = (x, y, strong = false) => {
      const item = wrapItem(index);
      index += 1;

      gsap.killTweensOf(item);
      gsap.set(item, {
        x,
        y,
        xPercent: -50,
        yPercent: -50,
        autoAlpha: 1,
        scale: strong ? randomScale() + 0.36 : randomScale(),
        rotation: randomRotation(),
        backgroundColor: randomColor(),
      });

      gsap.to(item, {
        duration: strong ? 0.82 : 0.62,
        x: x + randomDrift(),
        y: y + randomFloat(),
        rotation: `+=${strong ? 360 : 180}`,
        autoAlpha: 0,
        scale: 0,
        ease: strong ? 'back.in(1.6)' : 'sine.out',
        overwrite: 'auto',
      });
    };

    const onPointerMove = (event) => {
      const now = performance.now();
      const dx = event.clientX - lastX;
      const dy = event.clientY - lastY;
      const distance = Math.hypot(dx, dy);

      if (distance < 14 || now - lastTime < 22) return;

      lastX = event.clientX;
      lastY = event.clientY;
      lastTime = now;
      emit(event.clientX, event.clientY);
    };

    const onPointerDown = (event) => {
      const burstCount = 10;
      const burstItems = Array.from({ length: burstCount }, () => {
        const item = wrapItem(index);
        index += 1;
        return item;
      });

      const burst = burstItems.map((item, itemIndex) => {
        const angle = -Math.PI / 2 + gsap.utils.random(-1.2, 1.2);
        const radius = gsap.utils.random(24, 62);
        const endX = event.clientX + Math.cos(angle) * radius;
        const endY = event.clientY + Math.sin(angle) * radius;

        gsap.killTweensOf(item);
        gsap.set(item, {
          x: event.clientX,
          y: event.clientY,
          xPercent: -50,
          yPercent: -50,
          autoAlpha: 1,
          scale: 0.18,
          rotation: randomRotation(),
          backgroundColor: palette[itemIndex % palette.length],
        });

        return { item, x: endX, y: endY };
      });

      const targets = burst.map((entry) => entry.item);
      const tl = gsap.timeline({ defaults: { overwrite: 'auto' } });
      tl.to(targets, {
        duration: 0.18,
        scale: 1.05,
        ease: 'back.out(2)',
        stagger: { from: 0, amount: 0.08 },
      })
        .to(targets, {
          duration: 0.46,
          x: (itemIndex) => burst[itemIndex].x,
          y: (itemIndex) => burst[itemIndex].y,
          rotation: '+=160',
          autoAlpha: 0,
          scale: 0.12,
          ease: 'sine.out',
          stagger: { from: 0, amount: 0.16 },
        }, '<0.04');
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerdown', onPointerDown, { passive: true });

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerdown', onPointerDown);
      gsap.killTweensOf(items);
    };
  }, { scope: root });

  return (
    <div className="cursor-trail" ref={root} aria-hidden="true">
      {trailItems.map((item) => (
        <span key={item.id} className={`trail-box trail-${item.shape}`} />
      ))}
    </div>
  );
};

export default CursorTrail;
