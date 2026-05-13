import { motion } from 'framer-motion';
import './About.css';

const About = () => {
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
      description: '负责瓜瓜龙启蒙英语美术项目的动画制作、组内日常管理、整体质量提升工作。熟练掌握DUIK、MOTION2、PARTICULAR等插件，并配合PS、PR、AI的使用。精通角色动画、绑定、特效，项目流程清晰。包含三维建模、动效制作、后期包装、视频剪辑、真人抠像等工作。',
      highlights: ['项目管理', '角色动画绑定', 'AE插件应用', '后期包装', '视频剪辑'],
    },
    {
      company: '北京小盒科技有限公司',
      role: '动画师',
      period: '2018.08 - 2020.01',
      description: '主要负责小象编程动画制作。负责参与香蕉学堂三维部分，主要利用MAYA制作三渲二场景、角色造型建模、三维角色动画、摄像机动画等。包含建模、UV、绑定、动画、渲染全流程。',
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
    { category: '动效工具', items: ['After Effects', 'Spine', 'Unity'] },
    { category: '设计工具', items: ['Photoshop', 'SAI', 'Illustrator'] },
    { category: '3D工具', items: ['Cinema 4D', 'Blender', 'Maya'] },
    { category: 'AI工作流', items: ['Skill构建', '上下文工程', '设计脑暴协作'] },
  ];

  return (
    <div className="about">
      <motion.div
        className="about-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="gradient-text">关于我</h1>
        <p className="about-subtitle">郝晓帅 · 动画设计师</p>
      </motion.div>

      <div className="about-content">
        {/* 个人简介 */}
        <motion.div
          className="bio-section glass"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bio-avatar">
            <img src="/avatar.jpg" alt="郝晓帅" className="avatar-image" />
          </div>
          <div className="bio-text">
            <h2>个人简介</h2>
            <p>
              我是郝晓帅，动画设计师，毕业于山西传媒学院动画专业，拥有 8 年动效设计经验。
            </p>
            <p>
              我的职业路径覆盖了教育动画、游戏动效到产品动效的完整领域。从早期在教育项目中深耕二三维动画与角色绑定、场景合成、后期包装，到后来在游戏项目中使用 Spine、Unity 制作角色动画与交互动效，再到现在在字节跳动负责抖音直播的核心动效设计——这些经历让我既有扎实的动画基础，也有产品思维。
            </p>
            <p>
              我不只是在"做动效"，而是在理解业务之后做动效。直播的本质是一个实时的社交场，动效的作用是强化社交临场感、触发付费动机、明确价效体系。这套思维框架让我的设计决策有据可依。
            </p>
            <p>
              在 AI 工具应用上，我关注的不是"用了多少 AI"，而是在哪个环节用、怎么用能真正提效。我不满足于简单地把 AI 塞进传统工作流，而是探索恰到好处的整合点与自动化工具的介入时机——通过自动化脚本 + AI 能力的组合，让重复性工作（如素材变体、格式转换）自动化，把时间留给创意和业务思考。
            </p>
            <p>
              AI 的输出质量取决于上下文质量，而维护上下文的成本由人来承担——这是使用 AI 的核心矛盾。我通过构建可复用的 Skill 模块（预制上下文），解决了"反复交代"的问题，让 AI 从"需要反复教"的助手，变成了能主动理解业务逻辑的协作伙伴——它不只是生成素材，更能参与方案验证和设计决策。
            </p>
            <div className="contact-info">
              <a href="mailto:934453059@qq.com" className="contact-link">
                📧 934453059@qq.com
              </a>
              <a href="tel:18434370828" className="contact-link">
                📱 18434370828
              </a>
            </div>
          </div>
        </motion.div>

        {/* 工作经历 */}
        <motion.section
          className="experience-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title gradient-text">工作经历</h2>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="timeline-item glass"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
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
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 技能矩阵 */}
        <motion.section
          className="skills-matrix"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title gradient-text">技能矩阵</h2>
          <div className="skills-categories">
            {skills.map((category, index) => (
              <motion.div
                key={category.category}
                className="skill-category glass"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="category-name">{category.category}</h3>
                <div className="skill-items">
                  {category.items.map((item) => (
                    <span key={item} className="skill-item">{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* AI理解与方法论 */}
        <motion.section
          className="ai-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title gradient-text">AI工作流理解</h2>
          <div className="ai-content glass">
            <h3>核心矛盾：上下文地狱</h3>
            <p>
              AI的输出质量 = f(上下文质量)，但维护上下文的成本由人类承担。
              这是使用AI的核心痛点：重复交代、不可控性、上下文过载。
            </p>

            <h3>解决方案：Skill机制</h3>
            <p>
              Skill的本质是预制的上下文模块，在需要时自动切入。
              我构建了两个核心Skill：
            </p>
            <ul>
              <li><strong>设计脑暴Skill</strong> - 定义AI作为创意搭档的角色、脑暴节奏（对齐→发散→收敛）和沟通风格</li>
              <li><strong>直播业务Skill</strong> - 封装直播业务的底层框架（社交场→停留→付费→价值感知），让AI理解业务本质</li>
            </ul>

            <h3>实践效果</h3>
            <p>
              通过Skill机制，我不需要每次都从头教AI"你是谁、业务是什么"，
              而是直接进入高质量的设计讨论。这让AI从"搜索引擎"变成了真正的"协作伙伴"。
            </p>
          </div>
        </motion.section>

        {/* 教育背景 */}
        <motion.section
          className="education-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title gradient-text">教育背景</h2>
          <div className="education-card glass">
            <div className="education-header">
              <div>
                <h3 className="school-name">山西传媒学院</h3>
                <p className="major-name">动画专业（本科）</p>
              </div>
              <span className="period">2014.09 - 2018.07</span>
            </div>
            <p className="education-description">
              系统学习动画制作流程、角色设计、分镜构图、视觉叙事等专业知识。
              在校期间参与多个动画和漫画项目，为后续的动效设计工作打下坚实基础。
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
