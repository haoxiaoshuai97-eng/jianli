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

const skillTrees = [
  {
    id: 'traditional',
    eyebrow: 'TRADITIONAL_LOADER',
    title: '传统艺能',
    accent: 'blue',
    branches: [
      { tag: 'animation', label: '动画全流程', tools: ['After Effects', 'Spine', 'Unity', 'Lottie'] },
      { tag: 'video', label: '视频制作与剪辑', tools: ['Premiere', '剪映', 'Audition'] },
      { tag: 'design', label: '创意资源设计', tools: ['Photoshop', 'Illustrator', 'SAI'] },
      { tag: '3d', label: '3D素材与动画', tools: ['Cinema 4D', 'Blender', 'Maya'] },
      { tag: 'template', label: '创意模板沉淀', tools: ['动效组件库', '视觉规范', '交付资产'] },
    ],
  },
  {
    id: 'ai',
    eyebrow: 'PROMPT_ENGINE',
    title: 'AI技术应用',
    accent: 'green',
    branches: [
      { tag: 'context', label: '上下文工程', tools: ['需求拆解', '项目SOP', '判断标准'] },
      { tag: 'prompt', label: '提示词工程', tools: ['结构化提示词', '方案验证', '素材处理'] },
      { tag: 'vibe', label: 'Vibe coding', tools: ['网页制作', 'Figma插件', '自动化脚本'] },
      { tag: 'agent', label: 'Agent / Skills', tools: ['Skill构建', '系统级提示词', '个人工作流'] },
      { tag: 'prototype', label: '提效工具制作', tools: ['批量导出', '预览Demo', '设计脑暴协作'] },
    ],
  },
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

    ScrollTrigger.batch('.timeline-item, .ai-content', {
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

    const linePaths = gsap.utils.toArray('.skill-link-path');
    linePaths.forEach((path) => {
      const length = path.getTotalLength();
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });
    });

    const skillTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.skill-tree-board',
        start: 'top 76%',
        toggleActions: 'play none none reverse',
      },
    });

    skillTimeline
      .fromTo('.skill-tree-card', {
        autoAlpha: 0,
        y: 34,
        scale: 0.98,
      }, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.72,
        stagger: 0.1,
        ease: 'power3.out',
      })
      .to('.skill-link-path', {
        strokeDashoffset: 0,
        duration: 1.05,
        stagger: 0.045,
        ease: 'power2.inOut',
      }, '-=0.34')
      .fromTo('.skill-tree-node', {
        autoAlpha: 0,
        x: -16,
      }, {
        autoAlpha: 1,
        x: 0,
        duration: 0.44,
        stagger: 0.045,
        ease: 'power2.out',
      }, '-=0.74')
      .fromTo('.skill-tool-chip', {
        autoAlpha: 0,
        y: 10,
      }, {
        autoAlpha: 1,
        y: 0,
        duration: 0.36,
        stagger: 0.018,
        ease: 'power2.out',
      }, '-=0.42');

    gsap.to('.skill-link-flow', {
      strokeDashoffset: -120,
      duration: 2.8,
      ease: 'none',
      repeat: -1,
      scrollTrigger: {
        trigger: '.skill-tree-board',
        start: 'top bottom',
        end: 'bottom top',
        toggleActions: 'play pause resume pause',
      },
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
          <div className="skill-tree-board" aria-label="技能树">
            <svg className="skill-link-layer" viewBox="0 0 1000 520" preserveAspectRatio="none" aria-hidden="true">
              {skillTrees.map((tree, treeIndex) => {
                const baseY = treeIndex === 0 ? 118 : 378;
                return tree.branches.map((branch, branchIndex) => {
                  const branchY = baseY - 92 + branchIndex * 46;
                  const toolY = branchY + (branchIndex - 2) * 7;
                  const pathA = `M 192 ${baseY} C 260 ${baseY}, 252 ${branchY}, 330 ${branchY}`;
                  const pathB = `M 500 ${branchY} C 602 ${branchY}, 608 ${toolY}, 706 ${toolY}`;
                  return (
                    <g key={`${tree.id}-${branch.tag}`}>
                      <path className={`skill-link-path skill-link-${tree.accent}`} d={pathA} />
                      <path className={`skill-link-path skill-link-${tree.accent}`} d={pathB} />
                      <path className={`skill-link-flow skill-link-${tree.accent}`} d={pathA} />
                      <path className={`skill-link-flow skill-link-${tree.accent}`} d={pathB} />
                    </g>
                  );
                });
              })}
            </svg>

            {skillTrees.map((tree, treeIndex) => (
              <article key={tree.id} className={`skill-tree-row skill-tree-row--${tree.accent}`}>
                <div className="skill-root-card skill-tree-card">
                  <span>{tree.eyebrow}</span>
                  <h3>{tree.title}</h3>
                </div>

                <div className="skill-branch-column">
                  {tree.branches.map((branch) => (
                    <div key={branch.tag} className="skill-tree-node skill-branch-node">
                      <span>{branch.tag}</span>
                      <strong>{branch.label}</strong>
                    </div>
                  ))}
                </div>

                <div className="skill-tool-column">
                  {tree.branches.map((branch) => (
                    <div key={branch.tag} className="skill-tree-node skill-tool-node">
                      <span>{branch.label}</span>
                      <div className="skill-tool-list">
                        {branch.tools.map((tool) => (
                          <em key={tool} className="skill-tool-chip">{tool}</em>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="ai-section">
          <h2 className="section-title">关于 AI 的思考</h2>
          <div className="ai-content glass ai-thinking-card">
            <div className="ai-lead">
              <span>AI Thinking</span>
              <h3>AI 不是替代判断，而是放大解决问题的半径。</h3>
            </div>
            <div className="ai-statement">
              <p>我并不把“会用 AI”当成核心能力，因为工具门槛会越来越低。真正重要的是能不能把问题讲清楚，把上下文组织好，把判断标准建立起来。</p>
              <p>AI 对我来说不只是工作里的提效工具，它更像一种新的解决问题方式。工作里，我会用它做设计脑暴、脚本开发、素材处理和流程搭建；生活里，我也会用它辅助炒股分析、规划旅行、寻找美食、整理信息，甚至 coding 一些养花、养宠的小工具。</p>
              <p>我越来越觉得，AI 真正有价值的地方，是能把模糊想法推成可执行方案。它能帮我把经验显性化，把重复流程工具化，把零散需求整理成上下文、规则和步骤。</p>
              <p>但最后，人还是要负责提出问题、定义边界、判断结果。AI 不是替代判断，而是放大一个人的好奇心、执行力和解决问题的半径。</p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
};

export default About;
