# Project Context

## How To Resume Work

When starting a new Codex conversation or working from another computer, read this file first.

Recommended first message:

```text
先读 CONTEXT.md，再继续这个项目。
```

## Project Identity

This is Hao Xiaoshuai's personal portfolio website.

Owner:
- Name: 郝晓帅
- Role: 抖音产品动效设计师 / Motion Designer
- Email: 934453059@qq.com
- Phone: 18434370828
- Location: 北京朝阳区

Positioning:
- 8 years+ motion design experience.
- Work path covers education animation, game motion, product motion, and Douyin live/product motion.
- Current focus is product motion for Douyin live activities and in-app interaction flows.
- The site should communicate motion design judgment, business understanding, and AI workflow exploration.

## Repository Sync

This repository is the main project to sync between computers:

```text
https://github.com/haoxiaoshuai97-eng/jianli.git
```

Branch:

```text
main
```

Daily workflow:

```bash
git pull
# make changes
git add .
git commit -m "describe the change"
git push
```

Rule:
- Before switching computers, push changes.
- Before starting on another computer, pull changes.
- Avoid editing the same file on two computers at the same time.

## Important Scope

The actual website project is this folder:

```text
C:\Users\Admin\Desktop\jianli\portfolio
```

The parent folder `C:\Users\Admin\Desktop\jianli` also contains PSD resumes, backups, local agent files, and other materials. Do not treat the parent folder as the main sync target unless explicitly requested.

Resume PSD/PDF files are better synced separately with cloud drive or Git LFS if needed.

## Tech Stack

- React
- Vite
- React Router
- GSAP
- CSS modules/files by page and component

Common commands:

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Visual Direction

Overall style:
- Dark interface.
- Glass-like panels.
- Motion designer portfolio, not a marketing landing page.
- Clear, premium, energetic, and product-oriented.

Color language:
- Background: deep black / near-black.
- Main accent: cyan green `#24d1b2`.
- Secondary accents: yellow `#f7c948`, orange `#ff6e54`.
- Avoid making the UI feel like a single-hue purple/blue gradient theme.

Interaction direction:
- Smooth GSAP motion.
- Magnetic buttons.
- Cursor/motion background details.
- Respect reduced-motion preferences where possible.

## Content Sources

Main pages:
- `src/pages/Home.jsx`: homepage positioning, hero copy, feature cards, toolkit, design method.
- `src/pages/About.jsx`: profile, work experience, skills, AI workflow, education.
- `src/pages/Portfolio.jsx`: selected works and project metadata.

Important assets:
- `public/avatar.jpg`: personal avatar.
- `public/projects/`: project posters and videos.

## Current Personal Summary

Short summary:

```text
我是动画设计师，现负责抖音直播活动与产品端内功能动效。擅长把直播社交场、付费动机、价效体系转译成清晰、有情绪、有节奏的动态设计，并用 AI Skill 与自动化工作流提升方案验证效率。
```

Design method:
- Understand the business goal first: retention, interaction, payment motivation, value perception.
- Define the motion tone: subtle prompt, strong incentive, celebration, urgency, scarcity.
- Deliver practical assets: Lottie, video, CSS, components, and motion specs.

## Work Experience

Current and historical experience in order:

1. 字节跳动
   - 抖音产品动效设计师
   - 2022.06 - 至今
   - Focus: Douyin UG and Douyin live revenue activity motion, core interaction flows, Lottie/CSS/video delivery, motion component library, asset management, motion delivery specs, brand and promo motion, AI workflow exploration.

2. 智胜新格
   - 游戏动效设计师
   - 2021.12 - 2022.06
   - Focus: overseas Slots game motion, icon animation, character animation, UI interaction animation, event interface motion, Spine, Unity particles, Shader.

3. 字节跳动大力教育
   - 瓜瓜龙启蒙英语美术项目负责人 / 动画师
   - 2020.01 - 2021.12
   - Focus: animation production, team daily management, quality improvement, character animation, rigging, effects, 3D modeling, post-production, video editing.

4. 北京小盒科技有限公司
   - 动画师
   - 2018.08 - 2020.01
   - Focus: 小象编程 animation, 香蕉学堂 3D work, Maya NPR scenes, character modeling, 3D animation, camera animation.

5. 山西乐酷文化传媒
   - 三维动画师（实习）
   - 2017.06 - 2018.06
   - Focus: 《小亲圪蛋之囧囧有神》, 3D animation, rigging, modeling.

## Skills

Motion:
- After Effects
- Lottie
- Spine
- Unity

Design:
- Photoshop
- SAI
- Illustrator

3D:
- Cinema 4D
- Blender
- Maya

AI workflow:
- Skill construction
- Context engineering
- Design brainstorming collaboration
- Automation scripts
- AI-driven solution validation

## Selected Works

Current portfolio projects:

1. 抖音直播活动动效
2. 抖音产品端内功能动态设计
3. 海外游戏项目动效
4. 瓜瓜龙启蒙英语动画
5. 小象编程动画
6. 《小亲圪蛋之囧囧有神》

Project metadata lives in `src/pages/Portfolio.jsx`.

## Codex Working Preferences

When changing the project:
- Follow existing structure and styles.
- Keep the first screen as the actual portfolio experience, not a generic landing page.
- Verify frontend changes with `npm run build` when practical.
- If running a local server, use the Vite dev server and share the localhost URL.
- Do not commit parent-folder files from `C:\Users\Admin\Desktop\jianli` unless explicitly requested.

When syncing:
- Commit only meaningful project files.
- Do not add `node_modules`, `dist`, PSD files, or local Codex config unless specifically requested.
