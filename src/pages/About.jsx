import { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import GlassSurface from '../components/GlassSurface';
import './About.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const experiences = [
  {
    company: '字节跳动',
    role: '抖音产品动效设计师',
    period: '2022.06 - 至今',
    description: '负责抖音 UG 及抖音直播营收活动核心交互链路的动效设计，产出 Lottie、CSS、视频等多种格式动效，确保移动端高质量还原。建立并维护 Lottie 动效组件库与资产管理体系，制定动效开发交付规范，具备从 0 到 1 搭建可复用、可扩展动态设计系统的能力。主导对外宣传视频及产品推广物料的动态设计，参与品牌设计。不仅关注动效本身，更关注动态对视觉层级的加持与产品逻辑的传达。积极探索 AI 工具在动效创作、工作流及方案验证中的应用，对设计项目进行总结与分享，推动团队能力提升。',
    highlights: ['Lottie组件库', '动效规范制定', '核心交互链路', 'AI工具探索', '品牌设计'],
  },
  {
    company: '智胜新格',
    role: '游戏动效设计师',
    period: '2021.12 - 2022.06',
    description: '参与海外成熟游戏 Slots 项目，负责图标动画、角色动画、交互动画、界面 UI 动画及活动界面动画制作。使用 Spine 制作角色物品动画及特效部分，熟练掌握 AE、Unity 粒子系统。熟悉各类 SHADER 的使用，熟练掌握 ASE。熟悉工作流程，有策划前端深度配合经验。',
    highlights: ['Slots游戏项目', 'Spine角色动画', 'UI交互动画', 'Unity粒子系统', 'SHADER应用'],
  },
  {
    company: '字节跳动大力教育',
    role: '瓜瓜龙启蒙英语美术项目负责人 · 动画师',
    period: '2020.01 - 2021.12',
    description: '负责瓜瓜龙启蒙英语美术项目的动画制作、组内日常管理、整体质量提升工作。熟练掌握 DUIK、MOTION2、PARTICULAR 等插件，并配合 PS、PR、AI 的使用。精通角色动画、绑定、特效，项目流程清晰。包含三维建模、动效制作、后期包装、视频剪辑、真人抠像等工作。',
    highlights: ['项目管理', '角色动画绑定', 'AE插件应用', '后期包装', '视频剪辑'],
  },
  {
    company: '北京小盒科技有限公司',
    role: '动画师',
    period: '2018.08 - 2020.01',
    description: '主要负责小象编程动画制作。负责参与香蕉学堂三维部分，主要利用 Maya 制作三渲二场景、角色造型建模、三维角色动画、摄像机动画等。包含建模、UV、绑定、动画、渲染全流程。',
    highlights: ['小象编程动画', '三渲二制作', 'Maya全流程', '角色建模绑定', '三维动画'],
  },
  {
    company: '山西乐酷文化传媒',
    role: '三维动画师（实习）',
    period: '2017.06 - 2018.06',
    description: '参与《小亲吃蛋之囧囧有神》项目制作，该项目为文化部重点动漫品牌保护计划项目。负责三维动画、绑定、建模等工作，学习完整的三维动画制作流程。',
    highlights: ['文化部重点项目', '三维动画制作', '角色绑定', '建模'],
  },
];

const skills = [
  { category: '动效工具', items: ['After Effects', 'Spine', 'Unity', 'Lottie'] },
  { category: '设计工具', items: ['Photoshop', 'SAI', 'Illustrator'] },
  { category: '3D工具', items: ['Cinema 4D', 'Blender', 'Maya'] },
  { category: 'AI工作流', items: ['Skill构建', '上下文工程', '设计脑暴协作', '自动化脚本'] },
];

const personalInfo = [
  { key: 'name', label: '姓名', value: '郝晓帅' },
  { key: 'phone', label: '手机号', value: '18434370828' },
  { key: 'email', label: '邮箱', value: '934453059@qq.com' },
  { key: 'role', label: '方向', value: '动画设计师 / 抖音产品动效设计师' },
];

const About = () => {
  const root = useRef(null);
  const [copiedKey, setCopiedKey] = useState('');

  const copyText = async (text) => {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return;
    }

    const input = document.createElement('textarea');
    input.value = text;
    input.setAttribute('readonly', '');
    input.style.position = 'fixed';
    input.style.opacity = '0';
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    input.remove();
  };

  const handleCopy = async (item, event) => {
    try {
      await copyText(item.value);
    } catch {
      // Browser clipboard permissions can reject synthetic clicks; keep the playful feedback visible.
    }
    setCopiedKey(item.key);

    const bubble = event.currentTarget;
    const pop = bubble.querySelector('.copy-pop');
    gsap.fromTo(bubble,
      { scale: 0.96, rotation: -1.5 },
      { scale: 1, rotation: 0, duration: 0.64, ease: 'elastic.out(1,0.35)', overwrite: 'auto' }
    );
    gsap.fromTo(pop,
      { autoAlpha: 0, y: 8, scale: 0.72 },
      { autoAlpha: 1, y: -8, scale: 1, duration: 0.28, ease: 'back.out(2)', overwrite: 'auto' }
    );
    gsap.to(pop, {
      autoAlpha: 0,
      y: -18,
      scale: 0.9,
      duration: 0.28,
      delay: 0.9,
      ease: 'sine.out',
      overwrite: 'auto',
    });
  };

  useGSAP(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    gsap.from('.about-header > *', {
      autoAlpha: 0,
      y: 28,
      duration: 0.75,
      stagger: 0.08,
      ease: 'power3.out',
    });

    gsap.from('.bio-section', {
      autoAlpha: 0,
      y: 36,
      duration: 0.82,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.bio-section',
        start: 'top 78%',
        toggleActions: 'play none none reverse',
      },
    });

    ScrollTrigger.batch('.timeline-item, .skill-category, .ai-content, .education-card', {
      start: 'top 82%',
      onEnter: (batch) => gsap.to(batch, {
        autoAlpha: 1,
        y: 0,
        duration: 0.64,
        stagger: 0.08,
        ease: 'power2.out',
        overwrite: true,
      }),
      onLeaveBack: (batch) => gsap.set(batch, { autoAlpha: 0, y: 28, overwrite: true }),
    });
  }, { scope: root });

  return (
    <main className="about" ref={root}>
      <header className="about-header">
        <p className="about-kicker">Resume / Motion Design / AI Workflow</p>
        <h1>关于我</h1>
        <p className="about-subtitle">郝晓帅 · 动画设计师 · 抖音产品动效设计师</p>
      </header>

      <div className="about-content">
        <section className="bio-section glass">
          <div className="bio-avatar">
            <img src="/avatar.jpg" alt="郝晓帅" className="avatar-image" />
          </div>
          <div className="bio-text">
            <h2>个人简介</h2>
            <p>我毕业于山西传媒学院动画专业，拥有 8 年动效设计经验，职业路径覆盖教育动画、游戏动效到产品动效。</p>
            <p>我不只是在做动效，而是在理解业务之后做动效。直播是实时社交场，动效需要强化临场感、触发付费动机、明确价效体系，并帮助用户快速理解产品逻辑。</p>
            <p>在 AI 工具应用上，我关注在哪个环节用、怎么用能真正提效。通过自动化脚本与 AI 能力组合，让素材变体、格式转换、方案验证等重复工作更快完成，把更多时间留给创意和业务思考。</p>
            <div className="copy-info-list" aria-label="可点击复制的个人信息">
              {personalInfo.map((item) => (
                <button
                  type="button"
                  key={item.key}
                  className="copy-info-item"
                  onClick={(event) => handleCopy(item, event)}
                  aria-label={`复制${item.label}：${item.value}`}
                >
                  <GlassSurface className="glass-button-surface copy-glass-surface" borderRadius={10} distortionScale={-135} backgroundOpacity={0.04}>
                    <span className="magnetic-label">
                      <span className="bubble-label">{item.label}</span>
                      <span className="bubble-value">{item.value}</span>
                    </span>
                  </GlassSurface>
                  <span className="copy-pop">{copiedKey === item.key ? '已复制' : '复制'}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="experience-section">
          <h2 className="section-title">工作经历</h2>
          <div className="timeline">
            {experiences.map((exp) => (
              <article key={`${exp.company}-${exp.period}`} className="timeline-item glass">
                <div className="timeline-header">
                  <div>
                    <h3 className="company-name">{exp.company}</h3>
                    <p className="role-name">{exp.role}</p>
                  </div>
                  <span className="period">{exp.period}</span>
                </div>
                <p className="exp-description">{exp.description}</p>
                <div className="highlights">
                  {exp.highlights.map((h) => (
                    <span key={h} className="highlight-tag">{h}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="skills-matrix">
          <h2 className="section-title">技能矩阵</h2>
          <div className="skills-categories">
            {skills.map((category) => (
              <article key={category.category} className="skill-category glass">
                <h3 className="category-name">{category.category}</h3>
                <div className="skill-items">
                  {category.items.map((item) => (
                    <span key={item} className="skill-item">{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="ai-section">
          <h2 className="section-title">AI工作流理解</h2>
          <div className="ai-content glass">
            <h3>核心矛盾：上下文地狱</h3>
            <p>AI 的输出质量取决于上下文质量，但维护上下文的成本由人来承担。这是使用 AI 的核心痛点：重复交代、不可控性、上下文过载。</p>
            <h3>解决方案：Skill机制</h3>
            <p>Skill 的本质是预制上下文模块，在需要时自动切入。我构建设计脑暴 Skill 与直播业务 Skill，让 AI 更快理解创意角色、沟通节奏和业务框架。</p>
            <h3>实践效果</h3>
            <p>通过 Skill 机制，不需要每次都从头解释业务与协作方式，可以直接进入高质量设计讨论，让 AI 从搜索工具变成参与方案验证和设计决策的协作伙伴。</p>
          </div>
        </section>

        <section className="education-section">
          <h2 className="section-title">教育背景</h2>
          <div className="education-card glass">
            <div className="education-header">
              <div>
                <h3 className="school-name">山西传媒学院</h3>
                <p className="major-name">动画专业（本科）</p>
              </div>
              <span className="period">2014.09 - 2018.07</span>
            </div>
            <p className="education-description">系统学习动画制作流程、角色设计、分镜构图、视觉叙事等专业知识。在校期间参与多个动画和漫画项目，为后续动效设计工作打下基础。</p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
