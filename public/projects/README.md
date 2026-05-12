# 作品文件放置说明

将你的作品文件放在这个目录下，然后在 `src/pages/Portfolio.jsx` 中更新对应的 URL 路径。

## 支持的格式

- 视频：`.mp4`（推荐）
- 动图：`.gif`
- 图片：`.jpg`、`.png`、`.webp`

## 示例文件命名

```
public/projects/
├── douyin-live.mp4       # 抖音直播活动动效
├── douyin-ug.gif         # 抖音UG活动动效
├── brand.mp4             # 品牌宣传动画
└── app-launch.gif        # APP启动动画
```

## 在 Portfolio.jsx 中更新路径

找到 `src/pages/Portfolio.jsx` 中的 `projects` 数组，将 `url` 字段替换为你的实际文件路径：

```js
media: {
  type: 'video',
  url: '/projects/your-file.mp4',  // 替换这里
}
```
