import { useMemo, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';
import { useGSAP } from '@gsap/react';
import './Portfolio.css';

gsap.registerPlugin(ScrollTrigger, Flip, useGSAP);

const publicAsset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

const projects = [
  {
    id: 1,
    title: '抖音直播活动动效',
    description: '负责抖音直播各类大型活动的创意动效设计，通过丰富的动态风格演绎和情感化的动效表达，提升直播间用户的产品体验。',
    category: '抖音产品动效',
    decision: '把活动节点的奖励感、参与感和直播间临场感转译成可感知的动态反馈。',
    deliverables: ['活动创意动效', '视频物料', '直播间反馈'],
    media: {
      url: 'https://assets.hxs.ink/douyin-activity.mp4',
      poster: publicAsset('/projects/douyin-activity.png'),
    },
    tags: ['After Effects', 'Spine', '直播动效'],
  },
  {
    id: 2,
    title: 'Vibe Coding 麦位动效插件',
    description: '独立借助 Codex 完成 Figma 麦位声波动效插件，将高频、强规范的麦位动效需求沉淀为可预览、可批量生成、可直出 WebP 的生产工具。',
    category: '动效工具化',
    decision: '把重复动效生产拆成视觉预设、参数规则、预览 demo 与导出链路，让日常麦位需求从单次制作转为稳定可复用的工具流程。',
    deliverables: ['Figma插件', '参数预设', '预览Demo', 'WebP导出'],
    media: {
      url: 'https://assets.hxs.ink/mic-wave-plugin-vibecodin.mp4',
      poster: publicAsset('/projects/mic-wave-plugin-vibecoding.png'),
    },
    tags: ['Vibe Coding', 'Figma插件', 'Codex', 'WebP导出'],
  },
  {
    id: 3,
    title: '抖音产品端内功能动态设计',
    description: '负责各类产品端内功能动态创意设计，并完善自研 SAR 引擎相关模块的交付标准。',
    category: '产品功能动效',
    decision: '让端内功能反馈既有抖音语气，也能被研发稳定还原和复用。',
    deliverables: ['功能动效', 'SAR标准', '组件交付'],
    media: {
      url: 'https://assets.hxs.ink/douyin-function.mp4',
      poster: publicAsset('/projects/douyin-function.png'),
    },
    tags: ['Spine', 'SAR引擎', '标准制定'],
  },
  {
    id: 4,
    title: '海外游戏项目动效',
    description: '负责海外成熟游戏项目图标动效、交互动效、活动页面动效制作，使用 Spine 制作角色物品动画及特效。',
    category: '游戏动效',
    decision: '用高反馈、强节奏的动效强化奖励预期和操作爽感。',
    deliverables: ['图标动效', '角色动画', '活动页面'],
    media: {
      url: 'https://assets.hxs.ink/game-motion.mp4',
      poster: publicAsset('/projects/game-motion.png'),
    },
    tags: ['Spine', 'Unity粒子', 'SHADER'],
  },
  {
    id: 5,
    title: '瓜瓜龙启蒙英语动画',
    description: '负责瓜瓜龙启蒙英语美术项目动画制作，精通角色动画、绑定、特效，覆盖动效制作与后期包装。',
    category: '教育动画',
    decision: '用角色表演和节奏控制保持儿童注意力，同时服务教学信息传达。',
    deliverables: ['角色动画', 'AE后期', '项目管理'],
    media: {
      url: 'https://assets.hxs.ink/guagualong.mp4',
      poster: publicAsset('/projects/guagualong.png'),
    },
    tags: ['AE', 'DUIK', 'PARTICULAR'],
  },
  {
    id: 6,
    title: '小象编程动画',
    description: '负责小象编程动画制作，参与香蕉学堂三维部分，利用 Maya 制作三渲二场景、角色造型建模与三维角色动画。',
    category: '教育动画',
    decision: '把三维制作流程服务于二维化教育内容，让画面亲和但结构可靠。',
    deliverables: ['Maya建模', '三渲二', '角色动画'],
    media: {
      url: 'https://assets.hxs.ink/Xiaoxiang.mp4',
      poster: publicAsset('/projects/Xiaoxiang.png'),
    },
    tags: ['Maya', '三渲二', '角色动画'],
  },
  {
    id: 7,
    title: '《小亲圪蛋之囧囧有神》',
    description: '文化部重点动漫品牌保护计划项目，负责 layout、三维动画、角色绑定、建模等工作。',
    category: '三维动画',
    decision: '完整参与三维动画生产链路，建立早期动画制作基本功。',
    deliverables: ['Layout', '三维动画', '角色绑定'],
    media: {
      url: 'https://assets.hxs.ink/xiaoqin.mp4',
      poster: publicAsset('/projects/xiaoqin.png'),
    },
    tags: ['Maya', '三维动画', '角色绑定'],
  },
];

const Portfolio = () => {
  const root = useRef(null);
  const modalRef = useRef(null);
  const overlayRef = useRef(null);
  const modalContentRef = useRef(null);
  const closeButtonRef = useRef(null);
  const cardRefs = useRef({});
  const cellRefs = useRef({});
  const activeIdRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('全部');

  const categories = useMemo(() => ['全部', ...new Set(projects.map((project) => project.category))], []);
  const filteredProjects = activeCategory === '全部'
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  const closeProject = () => {
    const activeId = activeIdRef.current;
    if (!activeId) return;

    const card = cardRefs.current[activeId];
    const cell = cellRefs.current[activeId];
    if (!card || !cell) return;

    const state = Flip.getState(card);
    card.classList.remove('is-expanded');
    cell.appendChild(card);
    activeIdRef.current = null;

    gsap.killTweensOf(closeButtonRef.current);
    gsap.to(closeButtonRef.current, {
      autoAlpha: 0,
      scale: 1,
      x: 0,
      y: 0,
      duration: 0.16,
      ease: 'power1.out',
    });

    gsap.to([modalRef.current, overlayRef.current], {
      autoAlpha: 0,
      duration: 0.32,
      ease: 'power1.inOut',
      onComplete: () => gsap.set(modalRef.current, { pointerEvents: 'none' }),
    });

    Flip.from(state, {
      duration: 0.72,
      ease: 'power2.inOut',
      absolute: true,
      scale: true,
      onComplete: () => gsap.set(card, { zIndex: 'auto' }),
    });
    gsap.set(card, { zIndex: 1002 });
  };

  const openProject = (projectId) => {
    if (activeIdRef.current === projectId) {
      closeProject();
      return;
    }

    if (activeIdRef.current) {
      closeProject();
      return;
    }

    const card = cardRefs.current[projectId];
    if (!card || !modalContentRef.current) return;

    const state = Flip.getState(card);
    modalContentRef.current.appendChild(card);
    card.classList.add('is-expanded');
    activeIdRef.current = projectId;

    gsap.killTweensOf(closeButtonRef.current);
    gsap.set(modalRef.current, { autoAlpha: 1, pointerEvents: 'auto' });
    gsap.fromTo(
      closeButtonRef.current,
      { autoAlpha: 0, scale: 0.96, x: 0, y: 0 },
      { autoAlpha: 1, scale: 1, duration: 0.22, delay: 0.26, ease: 'power2.out', overwrite: 'auto' }
    );
    gsap.to(overlayRef.current, { autoAlpha: 0.72, duration: 0.35, ease: 'power1.inOut' });

    Flip.from(state, {
      duration: 0.72,
      ease: 'power2.inOut',
      absolute: true,
      scale: true,
      onComplete: () => gsap.set(card, { zIndex: 'auto' }),
    });
    gsap.set(card, { zIndex: 1002 });
  };

  const handleFilter = (category) => {
    closeProject();
    setActiveCategory(category);
  };

  useGSAP(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    gsap.from('.portfolio-kicker, .portfolio-header h1, .portfolio-subtitle, .category-filter', {
      autoAlpha: 0,
      y: 24,
      duration: 0.75,
      stagger: 0.08,
      ease: 'power3.out',
    });
  }, { scope: root });

  useGSAP(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      gsap.set('.project-cell', { autoAlpha: 1, y: 0, scale: 1 });
      return;
    }

    gsap.fromTo('.project-cell',
      { autoAlpha: 0, y: 34, scale: 0.98 },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.68,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 78%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, { scope: root, dependencies: [activeCategory], revertOnUpdate: true });

  return (
    <main className="portfolio" ref={root}>
      <header className="portfolio-header">
          <p className="portfolio-kicker">Selected Motion Works</p>
          <h1>作品集</h1>
        </header>

      <div className="category-filter" aria-label="作品分类筛选">
        {categories.map((category) => (
          <button
            type="button"
            key={category}
            className={activeCategory === category ? 'active' : ''}
            onClick={() => handleFilter(category)}
          >
              <span className="magnetic-label">{category}</span>
          </button>
        ))}
      </div>

      <section className="projects-grid">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="project-cell"
            ref={(node) => {
              if (node) cellRefs.current[project.id] = node;
            }}
          >
            <article
              className="project-card glass"
              ref={(node) => {
                if (node) cardRefs.current[project.id] = node;
              }}
              onClick={() => {
                if (!activeIdRef.current) openProject(project.id);
              }}
            >
              <div className="project-media">
                  <video
                    src={project.media.url}
                    controls
                    preload="none"
                    loop
                    muted
                    playsInline
                    className="media-video"
                    poster={project.media.poster}
                    onClick={(event) => event.stopPropagation()}
                  >
                  您的浏览器不支持视频播放
                </video>
              </div>

              <div className="project-info">
                <div className="project-category">{project.category}</div>
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="project-detail-panel">
                  <h3>动效决策</h3>
                  <p>{project.decision}</p>
                  <h3>交付内容</h3>
                  <div className="deliverables">
                    {project.deliverables.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>
        ))}
      </section>

      <section className="flip-modal" ref={modalRef} aria-hidden="true">
        <button className="modal-overlay" ref={overlayRef} type="button" aria-label="关闭作品详情" onClick={closeProject} />
        <div className="modal-shell">
          <button className="modal-close" ref={closeButtonRef} type="button" onClick={closeProject}>
            <span className="magnetic-label">关闭</span>
          </button>
          <div className="modal-content" ref={modalContentRef} />
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
