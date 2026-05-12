import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* 装饰性渐变球 - 固定在视口，滚动时始终可见 */}
      <div className="gradient-orb orb-1"></div>
      <div className="gradient-orb orb-2"></div>

      <div className="hero-section">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            你好，我是
            <span className="gradient-text"> 郝晓帅</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            动画设计师 · 抖音产品动效设计师
          </motion.p>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            负责抖音各类大型活动创意动效设计
            <br />
            通过丰富的动态风格演绎和情感化的动效表达，提升产品体验
            <br />
            精通SPINE、Unity、AE等动效工具，探索AI在设计工作流中的应用
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Link to="/portfolio" className="btn-primary glass">
              查看作品
            </Link>
            <Link to="/about" className="btn-secondary glass">
              联系我
            </Link>
          </motion.div>
        </motion.div>

        {/* 装饰性渐变球 */}
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      {/* 技能展示区域 */}
      <motion.section
        className="skills-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title gradient-text">核心技能</h2>
        <div className="skills-grid">
          {[
            { name: 'After Effects', level: '精通' },
            { name: 'Photoshop', level: '精通' },
            { name: 'Spine', level: '熟练' },
            { name: 'Unity', level: '熟练' },
            { name: 'Cinema 4D', level: '熟练' },
            { name: 'Blender', level: '熟练' },
            { name: 'Maya', level: '熟练' },
            { name: 'SAI', level: '熟练' },
            { name: 'AI工作流', level: '深度理解' },
          ].map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card glass"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ y: -5 }}
            >
              <h3>{skill.name}</h3>
              <p className="skill-level">{skill.level}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
