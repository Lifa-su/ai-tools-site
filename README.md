# AI Tools Hub

AI工具导航 + 评测 + 教程 — 英文niche站，面向全球用户。

## 技术栈

- **Next.js 15** (App Router, SSG)
- **MDX** (内容管理)
- **Tailwind CSS 4**
- **TypeScript**
- **Vercel** (部署)

## 快速开始

```bash
npm install
npm run dev        # 本地开发 http://localhost:3000
npm run build      # 生产构建
```

## 项目结构

```
src/
├── app/                  # Next.js App Router 页面
│   ├── page.tsx          # 首页
│   ├── tools/            # 工具列表 & 详情
│   ├── categories/       # 分类页
│   └── blog/             # 博客列表 & 文章
├── components/           # 可复用组件
├── lib/                  # 工具函数、类型定义
└── content/              # MDX 内容文件
    ├── tools/            # 工具评测 MDX
    └── blog/             # 博客文章 MDX
```

## 内容管理

所有内容以 MDX 文件管理，放在 `src/content/` 目录下。

### 添加新工具

在 `src/content/tools/` 创建 `tool-name.mdx`：

```mdx
---
name: "Tool Name"
slug: "tool-name"
description: "One-line description"
category: "writing"
rating: 4.5
pricing: "Freemium"
website: "https://example.com"
affiliate: "https://example.com?ref=aitoolshub"
logo: "/images/tools/tool-name.png"
pros: ["Pro 1", "Pro 2"]
cons: ["Con 1", "Con 2"]
publishedAt: "2025-01-15"
updatedAt: "2025-01-15"
---

Your detailed review content here...
```

### 添加博客文章

在 `src/content/blog/` 创建 `article-slug.mdx`：

```mdx
---
title: "Article Title"
slug: "article-slug"
description: "Meta description for SEO"
category: "tutorial"
keywords: ["keyword1", "keyword2"]
publishedAt: "2025-01-15"
updatedAt: "2025-01-15"
author: "AI Tools Hub"
image: "/images/blog/article-cover.jpg"
---

Article content with MDX components...
```

## 部署

```bash
# 推送到 GitHub 后，Vercel 自动部署
git push origin main
```

## 详细规划

查看 [site-plan.md](./site-plan.md) 了解完整的站点规划、SEO策略和变现方案。
