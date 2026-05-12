# 动效设计师作品集网站

一个现代化的动效设计师个人作品集网站，采用 React + Vite + Framer Motion 构建，具有玻璃拟态设计风格和流畅的动画效果。

## 技术栈

- **React 18** - 前端框架
- **Vite** - 构建工具
- **Framer Motion** - 动画库
- **React Router** - 路由管理

## 功能特性

- ✨ 玻璃拟态设计风格
- 🎨 渐变色彩系统
- 🎬 流畅的页面动画
- 📱 完全响应式设计
- 🎯 支持视频、GIF、图片多种作品展示格式
- 🚀 快速加载和优化性能

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 `http://localhost:5173` 查看网站

### 构建生产版本

```bash
npm run build
```

构建后的文件在 `dist` 目录

### 预览生产版本

```bash
npm run preview
```

## 自定义内容

### 1. 添加你的作品

将作品文件（视频、GIF、图片）放入 `public/projects/` 文件夹，然后编辑 `src/pages/Portfolio.jsx`：

```js
const projects = [
  {
    id: 1,
    title: '你的作品标题',
    description: '作品描述',
    category: '分类',
    media: {
      type: 'video', // 'video', 'gif', 'image'
      url: '/projects/your-file.mp4',
    },
    tags: ['After Effects', 'Lottie'],
  },
  // 添加更多作品...
];
```

### 2. 修改个人信息

编辑 `src/pages/About.jsx` 更新：
- 工作经历
- 技能列表
- 联系方式

### 3. 自定义样式

主要颜色变量在 `src/index.css` 中定义：

```css
:root {
  --gradient-1: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --gradient-2: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  --bg-dark: #0a0a0f;
  /* 更多变量... */
}
```

## 项目结构

```
portfolio/
├── public/
│   └── projects/          # 作品文件存放目录
├── src/
│   ├── components/        # 组件
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
│   ├── pages/            # 页面
│   │   ├── Home.jsx
│   │   ├── Portfolio.jsx
│   │   └── About.jsx
│   ├── App.jsx           # 主应用
│   ├── main.jsx          # 入口文件
│   └── index.css         # 全局样式
└── package.json
```

## 部署

### Vercel（推荐）

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 导入项目
3. 自动部署完成

### Netlify

1. 将代码推送到 GitHub
2. 在 [Netlify](https://netlify.com) 导入项目
3. 构建命令：`npm run build`
4. 发布目录：`dist`

### GitHub Pages

```bash
npm run build
# 将 dist 目录内容推送到 gh-pages 分支
```

## 浏览器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## License

MIT

