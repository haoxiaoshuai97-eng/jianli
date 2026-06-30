import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './Home.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const publicAsset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

const capabilityCards = [
  {
    title: '产品动效',
    text: '在抖音 UG、直播活动与端内功能中长期处理交互反馈、活动激励、权益表达和价效感知，将动效转化为可交付、可复用、可被研发稳定还原的产品资产。',
  },
  {
    title: '动效工具化',
    text: '用 Vibe Coding 做插件、网页工具和生产脚本，探索动效创作与交付的更多可能。',
  },
  {
    title: '游戏动效',
    text: '熟悉 Spine、Unity 粒子与 Shader 协作方式，处理角色、图标、UI 与活动动效。',
  },
  {
    title: '角色动画',
    text: '从教育动画和三维动画训练中积累动作、剪影、节奏与表演判断。',
  },
];

const tools = ['After Effects', 'Spine', 'Unity', 'Lottie', 'Maya', 'Cinema 4D', 'Blender', 'Figma Plugin'];

const Home = () => {
  const root = useRef(null);
  const portraitRef = useRef(null);
  const tiltRef = useRef(null);
  const [profileFlipped, setProfileFlipped] = useState(false);

  const { contextSafe } = useGSAP(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      gsap.set('.home-reveal, .capability-card, .tool-chip', {
        autoAlpha: 1,
        y: 0,
        x: 0,
        scale: 1,
      });
      return;
    }

    const intro = gsap.timeline({ defaults: { duration: 0.76, ease: 'power3.out' } });
    intro
      .from('.portrait-wrap', { autoAlpha: 0, y: 30, scale: 0.96 })
      .from('.home-kicker', { autoAlpha: 0, y: 18 }, '<0.1')
      .from('.home-title', { autoAlpha: 0, y: 38 }, '<0.08')
      .from('.home-summary', { autoAlpha: 0, y: 22 }, '<0.08')
      .from('.home-actions', { autoAlpha: 0, y: 18 }, '<0.08')
      .from('.hero-proof span', { autoAlpha: 0, y: 14, stagger: 0.05 }, '<0.08');

    gsap.to('.aurora-band', {
      xPercent: (index) => (index % 2 === 0 ? 28 : -24),
      yPercent: (index) => (index % 2 === 0 ? -16 : 18),
      rotation: (index) => (index % 2 === 0 ? 14 : -16),
      scale: 1.22,
      duration: 7,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      stagger: 0.5,
    });

    gsap.to('.portrait-halo', {
      rotation: 360,
      duration: 18,
      ease: 'none',
      repeat: -1,
    });

    if (portraitRef.current) {
      gsap.set(portraitRef.current, {
        transformPerspective: 900,
        transformStyle: 'preserve-3d',
        transformOrigin: 'center center',
      });
      tiltRef.current = {
        rotateX: gsap.quickTo(portraitRef.current, 'rotationX', { duration: 0.28, ease: 'power3.out' }),
        rotateY: gsap.quickTo(portraitRef.current, 'rotationY', { duration: 0.28, ease: 'power3.out' }),
        scale: gsap.quickTo(portraitRef.current, 'scale', { duration: 0.28, ease: 'power3.out' }),
      };
    }

    ScrollTrigger.batch('.capability-card, .tool-chip', {
      start: 'top 84%',
      onEnter: (batch) => gsap.to(batch, {
        autoAlpha: 1,
        y: 0,
        duration: 0.58,
        stagger: 0.05,
        ease: 'power2.out',
        overwrite: true,
      }),
      onLeaveBack: (batch) => gsap.set(batch, { autoAlpha: 0, y: 24, overwrite: true }),
    });
  }, { scope: root });

  const handlePortraitMove = contextSafe((event) => {
    if (!portraitRef.current || profileFlipped) return;
    const rect = portraitRef.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    tiltRef.current?.rotateY(x * 24);
    tiltRef.current?.rotateX(-y * 18);
    tiltRef.current?.scale(1.025);
    portraitRef.current.style.setProperty('--shine-x', `${(x + 0.5) * 100}%`);
    portraitRef.current.style.setProperty('--shine-y', `${(y + 0.5) * 100}%`);
  });

  const handlePortraitLeave = contextSafe(() => {
    if (!portraitRef.current || profileFlipped) return;
    tiltRef.current?.rotateX(0);
    tiltRef.current?.rotateY(0);
    tiltRef.current?.scale(1);
  });

  return (
    <main className="home" ref={root}>
      <div className="aurora-field" aria-hidden="true">
        <span className="aurora-band band-a" />
        <span className="aurora-band band-b" />
        <span className="aurora-band band-c" />
      </div>

      <section className="home-hero" aria-label="首页介绍">
        <div className="home-left">
          <button
            className={`portrait-wrap${profileFlipped ? ' is-flipped' : ''}`}
            type="button"
            ref={portraitRef}
            aria-label="点击切换头像和微信二维码"
            onClick={() => setProfileFlipped((value) => !value)}
            onMouseMove={handlePortraitMove}
            onMouseLeave={handlePortraitLeave}
          >
            <span className="portrait-halo" aria-hidden="true" />
            <span className="portrait-face portrait-front">
              <img src={publicAsset('/avatar.jpg')} alt="郝晓帅头像" />
            </span>
            <span className="portrait-face portrait-back">
              <img src={publicAsset('/wechat-qr.png')} alt="微信二维码" />
            </span>
            <span className="flip-hint">点击翻转</span>
          </button>
          <p className="profile-note">
            8年+ 动效设计经验，经历覆盖教育动画、游戏项目、直播与产品动效。
          </p>
        </div>

        <div className="home-main">
          <p className="home-kicker home-reveal">Motion Designer / Game Motion / Product Motion</p>
          <h1 className="home-title home-reveal">
            郝晓帅
            <span>产品动效 / 游戏动效 / 动画师 / 动效设计师</span>
          </h1>
          <p className="home-summary home-reveal">
            <span>熟悉 AE、Spine、Unity、Maya、C4D、Blender、Lottie 工作流。</span>
            <span>Vibe Coding 做插件、网页工具和生产脚本，探索动效创作与交付的更多可能。</span>
          </p>
          <div className="hero-proof" aria-label="核心能力">
            <span>产品动效</span>
            <span>动效工具化</span>
            <span>游戏动效</span>
            <span>角色动画</span>
          </div>
          <div className="home-actions home-reveal">
            <Link to="/portfolio" className="btn-primary">
              <span className="magnetic-label">看作品</span>
            </Link>
            <Link to="/about" className="btn-secondary">
              <span className="magnetic-label">看完整简历</span>
            </Link>
          </div>
        </div>

      </section>

      <section className="home-focus" aria-label="能力路径">
        <div className="focus-heading">
          <span>Capability</span>
          <h2>不同媒介里解决动态问题</h2>
        </div>
        <div className="capability-grid">
          {capabilityCards.map((item) => (
            <article className="capability-card glass" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <div className="tool-strip" aria-label="核心工具">
          {tools.map((tool) => (
            <span className="tool-chip" key={tool}>{tool}</span>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
