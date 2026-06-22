import { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import GlassSurface from '../components/GlassSurface';
import './Home.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const proofPoints = [
  { label: '8年+', value: '教育动画 / 游戏动效 / 产品动效' },
  { label: '抖音', value: '直播活动与核心交互链路动效' },
  { label: 'AI Skill', value: '把工作流经验沉淀成可复用协作模块' },
];

const timeline = [
  { year: '现在', title: '抖音产品动效', text: '服务直播活动、端内功能与营收链路，让动效承载反馈、情绪和业务判断。' },
  { year: '之前', title: '游戏与教育动画', text: '从 Spine、Unity、Maya 到 AE 后期，积累角色、特效、交互和项目流程经验。' },
  { year: '方法', title: 'AI 工作流', text: '用 Skill、自动化脚本和上下文工程，把重复劳动交给系统，把时间留给创意。' },
];

const tools = ['After Effects', 'Spine', 'Unity', 'Lottie', 'Maya', 'Blender', 'Photoshop', 'AI工作流'];

const Home = () => {
  const root = useRef(null);

  useGSAP(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      gsap.set('.home-reveal, .proof-item, .timeline-row, .tool-chip', { autoAlpha: 1, y: 0, x: 0, scale: 1 });
      return;
    }

    const intro = gsap.timeline({ defaults: { duration: 0.72, ease: 'power3.out' } });
    intro
      .from('.home-kicker', { autoAlpha: 0, y: 18 })
      .from('.home-title', { autoAlpha: 0, y: 34 }, '<0.06')
      .from('.home-summary', { autoAlpha: 0, y: 22 }, '<0.1')
      .from('.home-actions', { autoAlpha: 0, y: 18 }, '<0.12')
      .from('.portrait-card', { autoAlpha: 0, x: 34, scale: 0.97 }, '<0.02')
      .from('.proof-item', { autoAlpha: 0, y: 18, stagger: 0.06 }, '<0.12');

    gsap.to('.portrait-card img', {
      y: -10,
      duration: 3,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
    });

    ScrollTrigger.batch('.timeline-row, .tool-chip', {
      start: 'top 82%',
      onEnter: (batch) => gsap.to(batch, {
        autoAlpha: 1,
        y: 0,
        duration: 0.58,
        stagger: 0.05,
        ease: 'power2.out',
        overwrite: true,
      }),
      onLeaveBack: (batch) => gsap.set(batch, { autoAlpha: 0, y: 22, overwrite: true }),
    });
  }, { scope: root });

  return (
    <main className="home" ref={root}>
      <section className="home-hero" aria-label="首页介绍">
        <div className="home-main">
          <p className="home-kicker home-reveal">Motion Designer / Douyin Product Motion</p>
          <h1 className="home-title home-reveal">
            郝晓帅
            <span>把产品逻辑做成有节奏、有情绪、可交付的动态体验。</span>
          </h1>
          <p className="home-summary home-reveal">
            我是动画设计师，现负责抖音直播活动与端内功能动效。我的优势不是单纯“做一个动画”，而是先理解业务目标，再用动效强化社交临场感、价值感知和用户反馈。
          </p>
          <div className="home-actions home-reveal">
            <Link to="/portfolio" className="btn-primary">
              <GlassSurface className="glass-button-surface" borderRadius={999} distortionScale={-165} backgroundOpacity={0.045}>
                <span className="magnetic-label">看作品</span>
              </GlassSurface>
            </Link>
            <Link to="/about" className="btn-secondary">
              <GlassSurface className="glass-button-surface" borderRadius={999} distortionScale={-150} backgroundOpacity={0.035}>
                <span className="magnetic-label">看完整简历</span>
              </GlassSurface>
            </Link>
          </div>
        </div>

        <aside className="home-side" aria-label="关键信息">
          <div className="portrait-card glass">
            <img src="/avatar.jpg" alt="郝晓帅头像" />
            <div>
              <strong>从角色动画到产品动效</strong>
              <span>AE / Spine / Unity / Lottie / AI Skill</span>
            </div>
          </div>
          <div className="proof-list">
            {proofPoints.map((item) => (
              <div className="proof-item glass" key={item.label}>
                <strong>{item.label}</strong>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="home-focus" aria-label="动效路径与工具">
        <div className="focus-heading">
          <span>Path</span>
          <h2>一条更清楚的动效路径</h2>
        </div>
        <div className="timeline-compact">
          {timeline.map((item) => (
            <article className="timeline-row" key={item.title}>
              <span>{item.year}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
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
