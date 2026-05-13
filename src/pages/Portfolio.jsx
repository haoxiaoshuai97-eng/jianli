import { motion } from 'framer-motion';
import './Portfolio.css';

const Portfolio = () => {
  // 示例作品数据 - 你可以根据实际情况修改
  const projects = [
    {
      id: 1,
      title: '抖音直播活动动效',
      description: '负责抖音直播各类大型活动的创意动效设计，通过丰富的动态风格演绎和情感化的动效表达，提升直播间用户的产品体验',
      category: '抖音产品动效',
      media: {
        type: 'video',
        url: 'https://jianli-1308836110.cos.ap-beijing.myqcloud.com/douyin-activity.mp4',
      },
      tags: ['After Effects', 'Spine', '直播动效'],
    },
    {
      id: 2,
      title: '抖音产品端内功能动态设计',
      description: '各类产品端内功能的动态创意设计，完善自研SAR引擎内相关模块的交付标准制定',
      category: '产品功能动效',
      media: {
        type: 'video',
        url: 'https://jianli-1308836110.cos.ap-beijing.myqcloud.com/douyin-function.mp4',
      },
      tags: ['Spine', 'SAR引擎', '标准制定'],
    },
    {
      id: 3,
      title: '海外游戏项目动效',
      description: '负责海外成熟游戏项目的图标动效、交互动效、活动页面动效制作，使用SPINE制作角色物品动画及特效',
      category: '游戏动效',
      media: {
        type: 'video',
        url: 'https://jianli-1308836110.cos.ap-beijing.myqcloud.com/game-motion.mp4',
      },
      tags: ['Spine', 'Unity粒子', 'SHADER'],
    },
    {
      id: 4,
      title: '瓜瓜龙启蒙英语动画',
      description: '负责瓜瓜龙启蒙英语美术项目的动画制作，精通角色动画、绑定、特效，包含动效制作、后期包装等',
      category: '教育动画',
      media: {
        type: 'video',
        url: 'https://jianli-1308836110.cos.ap-beijing.myqcloud.com/guagualong.mp4',
      },
      tags: ['AE', 'DUIK', 'PARTICULAR'],
    },
    {
      id: 5,
      title: '小象编程动画',
      description: '负责小象编程的动画制作，参与香蕉学堂三维部分，利用MAYA制作三渲二场景、角色造型建模、三维角色动画',
      category: '教育动画',
      media: {
        type: 'video',
        url: 'https://jianli-1308836110.cos.ap-beijing.myqcloud.com/Xiaoxiang.mp4',
      },
      tags: ['Maya', '三渲二', '角色动画'],
    },
    {
      id: 6,
      title: '《小亲圪蛋之囧囧有神》',
      description: '文化部重点动漫品牌保护计划项目，负责layout、三维动画、角色绑定、建模等工作',
      category: '三维动画',
      media: {
        type: 'video',
        url: 'https://jianli-1308836110.cos.ap-beijing.myqcloud.com/xiaoqin.mp4',
      },
      tags: ['Maya', '三维动画', '角色绑定'],
    },
  ];

  return (
    <div className="portfolio">
      <motion.div
        className="portfolio-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="gradient-text">作品集</h1>
        <p className="portfolio-subtitle">精选项目展示</p>
      </motion.div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card glass"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-50px' }}
            whileHover={{ y: -8 }}
          >
            <div className="project-media">
              {project.media.type === 'video' ? (
                <video
                  src={project.media.url}
                  controls
                  preload="none"
                  loop
                  muted
                  playsInline
                  className="media-video"
                  poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Cdefs%3E%3CradialGradient id='g' cx='50%25' cy='50%25' r='50%25'%3E%3Cstop offset='0%25' stop-color='white' stop-opacity='0.25'/%3E%3Cstop offset='100%25' stop-color='white' stop-opacity='0.08'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='black' width='400' height='300'/%3E%3Ccircle cx='200' cy='150' r='42' fill='url(%23g)' stroke='white' stroke-opacity='0.35' stroke-width='1.5'/%3E%3Ccircle cx='200' cy='150' r='42' fill='none' stroke='white' stroke-opacity='0.15' stroke-width='3' transform='translate(0 1)'/%3E%3Cpolygon points='192,132 192,168 222,150' fill='white' fill-opacity='0.95'/%3E%3C/svg%3E"
                >
                  您的浏览器不支持视频播放
                </video>
              ) : project.media.type === 'gif' ? (
                <img
                  src={project.media.url}
                  alt={project.title}
                  className="media-gif"
                />
              ) : (
                <img
                  src={project.media.url}
                  alt={project.title}
                  className="media-image"
                />
              )}
            </div>

            <div className="project-info">
              <div className="project-category">{project.category}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
