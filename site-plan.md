# AI Tools Hub — 站点完整规划

## 1. 站点定位

**AI Tools Hub** — 全球最实用的AI工具导航、深度评测与实战教程平台。

- 语言：英文（面向全球用户）
- 核心价值：帮用户快速找到最适合的AI工具，提供真实评测而非软文
- 差异化：每个工具都有真实使用体验、对比评分、替代方案推荐

## 2. 域名建议

| 域名 | 优势 |
|------|------|
| `aitoolshub.com` | 直观、好记、关键词匹配 |
| `toolpilot.ai` | 品牌感强，.ai域名加分 |
| `ainavigator.com` | 导航定位明确 |
| `pickaitools.com` | 动作导向，暗示帮你选 |
| `smarttoolbox.ai` | 工具箱概念，.ai域名 |

建议首选：`aitoolshub.com`（SEO友好 + 好记 + .com信任度高）

## 3. 技术方案

```
Next.js 15 (App Router) + MDX + Tailwind CSS 4
├── 静态生成 (SSG) — 极致性能 + SEO友好
├── MDX — 内容即代码，灵活嵌入组件
├── Tailwind — 快速开发，一致的设计系统
└── 部署到 Vercel — 零配置、全球CDN、自动HTTPS
```

关键技术选型：
- `next-mdx-remote` — 动态加载MDX内容
- `gray-matter` — 解析frontmatter元数据
- `next-sitemap` — 自动生成sitemap.xml
- `@vercel/analytics` — 流量分析

## 4. 站点结构

```
/                          → 首页（精选工具 + 分类入口 + 最新文章）
/tools                     → 工具总览（筛选、搜索、排序）
/tools/[slug]              → 工具详情页（评测、评分、替代方案）
/categories/[category]     → 分类页（按用途分类的工具列表）
/blog                      → 博客列表（教程、对比、趋势）
/blog/[slug]               → 博客文章详情
/about                     → 关于我们
/submit                    → 提交工具（UGC入口）
```

### 工具分类体系

| 分类 | Slug | 描述 |
|------|------|------|
| AI Writing | `writing` | 写作、文案、内容生成 |
| AI Image | `image` | 图片生成、编辑、增强 |
| AI Video | `video` | 视频生成、编辑 |
| AI Coding | `coding` | 代码助手、开发工具 |
| AI Chat | `chatbots` | 聊天机器人、对话AI |
| AI Audio | `audio` | 语音合成、音乐生成 |
| AI Productivity | `productivity` | 效率工具、自动化 |
| AI Marketing | `marketing` | 营销、SEO、社媒 |
| AI Design | `design` | UI/UX、平面设计 |
| AI Research | `research` | 学术、数据分析 |

## 5. 初始内容规划（20篇种子文章）

### 工具评测（10篇）

| # | 标题 | 目标关键词 | 类型 |
|---|------|-----------|------|
| 1 | ChatGPT Review 2025: Features, Pricing & Honest Assessment | chatgpt review, chatgpt pros cons | 工具评测 |
| 2 | Midjourney vs DALL-E 3: Which AI Image Generator Wins? | midjourney vs dall-e, best ai image generator | 对比评测 |
| 3 | Claude AI Review: Is It Better Than ChatGPT? | claude ai review, claude vs chatgpt | 工具评测 |
| 4 | Cursor IDE Review: The AI Code Editor That Changes Everything | cursor ide review, ai code editor | 工具评测 |
| 5 | Jasper AI Review: Is It Worth $49/Month for Content Creation? | jasper ai review, jasper ai pricing | 工具评测 |
| 6 | Runway ML Review: AI Video Generation for Creators | runway ml review, ai video generator | 工具评测 |
| 7 | Notion AI vs Clickup AI: Best AI Productivity Tool | notion ai vs clickup ai | 对比评测 |
| 8 | ElevenLabs Review: The Most Realistic AI Voice Generator | elevenlabs review, ai voice generator | 工具评测 |
| 9 | Perplexity AI Review: The AI Search Engine You Need | perplexity ai review, ai search engine | 工具评测 |
| 10 | GitHub Copilot vs Cursor vs Cody: Best AI Coding Assistant 2025 | best ai coding assistant, github copilot alternatives | 对比评测 |

### 教程 & 指南（7篇）

| # | 标题 | 目标关键词 | 类型 |
|---|------|-----------|------|
| 11 | 15 Best Free AI Tools You Should Try in 2025 | best free ai tools, free ai tools | 列表文章 |
| 12 | How to Use ChatGPT for SEO: Complete Guide | chatgpt for seo, ai seo tools | 教程 |
| 13 | Best AI Tools for Small Business Owners (2025 Guide) | ai tools for small business | 指南 |
| 14 | How to Create AI Art: Beginner's Complete Guide | how to create ai art, ai art tutorial | 教程 |
| 15 | 10 AI Tools That Will Save You 10+ Hours Per Week | ai productivity tools, save time with ai | 列表文章 |
| 16 | How to Write Better Prompts: The Ultimate Prompt Engineering Guide | prompt engineering guide, how to write prompts | 教程 |
| 17 | AI Tools for Students: Study Smarter in 2025 | ai tools for students, ai study tools | 指南 |

### 趋势 & 行业（3篇）

| # | 标题 | 目标关键词 | 类型 |
|---|------|-----------|------|
| 18 | The State of AI Tools in 2025: Trends & Predictions | ai tools trends 2025, ai industry trends | 趋势 |
| 19 | AI Tools Pricing Compared: Free vs Paid — What's Worth It? | ai tools pricing, free vs paid ai | 对比 |
| 20 | Will AI Replace Content Writers? What the Data Actually Shows | ai replace writers, ai content creation future | 观点 |

## 6. SEO策略

### 关键词策略

**核心关键词（高竞争，长期目标）：**
- ai tools, best ai tools, ai tools directory

**长尾关键词（低竞争，快速排名）：**
- best ai tools for [use case]
- [tool name] review 2025
- [tool A] vs [tool B]
- free ai [category] tools
- how to use [tool name]

**关键词研究流程：**
1. 用 Ahrefs/Ubersuggest 找 KD < 30 的长尾词
2. 分析 SERP 意图（信息型 vs 商业型）
3. 每篇文章锁定 1 个主关键词 + 3-5 个相关词

### 内链结构

```
首页
├── 分类页（双向链接）
│   └── 工具详情页（面包屑 + 相关工具）
├── 博客文章
│   ├── → 相关工具详情页（文中自然链接）
│   ├── → 相关博客文章（"相关阅读"模块）
│   └── → 分类页（标签链接）
└── 工具详情页
    ├── → 替代方案（其他工具详情页）
    └── → 相关教程（博客文章）
```

规则：
- 每篇文章至少 3 个内链
- 新文章发布后，回溯更新旧文章添加链接
- 使用描述性锚文本，避免"点击这里"

### Schema标记

每种页面类型使用对应的结构化数据：

- **工具详情页**: `SoftwareApplication` + `Review` + `AggregateRating`
- **博客文章**: `Article` + `BreadcrumbList`
- **对比文章**: `Article` + `ItemList`
- **首页**: `WebSite` + `SearchAction`
- **所有页面**: `Organization` + `BreadcrumbList`

### 技术SEO

- 静态生成 → 极快的TTFB
- 自动生成 `sitemap.xml` 和 `robots.txt`
- 图片使用 `next/image` 自动优化（WebP、lazy loading）
- 每个页面自定义 `<title>` 和 `<meta description>`
- Open Graph + Twitter Card 标签
- Canonical URL 避免重复内容

## 7. 变现模式

### 阶段一（0-6个月）：基础变现

| 方式 | 预期收入 | 说明 |
|------|---------|------|
| Affiliate链接 | $200-1000/月 | 工具评测中嵌入推荐链接（大多数AI工具有affiliate计划） |
| Google AdSense | $50-200/月 | 博客文章页面展示广告 |

**重点Affiliate计划：**
- Jasper AI — 30% 循环佣金
- Writesonic — 30% 循环佣金
- Surfer SEO — 25% 循环佣金
- Hostinger/Vercel — 一次性佣金
- Amazon Associates — 通用链接

### 阶段二（6-12个月）：规模化

| 方式 | 预期收入 | 说明 |
|------|---------|------|
| 赞助评测 | $500-2000/篇 | AI工具公司付费获得深度评测 |
| 展示广告（Mediavine/Ezoic） | $500-2000/月 | 流量达标后切换高级广告网络 |
| Newsletter赞助 | $200-500/期 | 建立邮件列表后的变现渠道 |

### 阶段三（12个月+）：高级变现

| 方式 | 预期收入 | 说明 |
|------|---------|------|
| 付费工具目录 | $99-299/年 | 工具方付费获得"Featured"标签 |
| 课程/电子书 | $500-2000/月 | "AI工具使用大全"等数字产品 |
| 咨询服务 | 按项目定价 | 帮企业选择AI工具栈 |

## 8. 部署方案

### Vercel部署流程

```bash
# 1. 初始化Git仓库
cd ai-tools-site
git init
git add .
git commit -m "Initial commit: AI Tools Hub"

# 2. 推送到GitHub
gh repo create ai-tools-hub --public --push

# 3. 连接Vercel
npx vercel link
npx vercel --prod

# 4. 配置自定义域名（在Vercel Dashboard）
# Settings → Domains → 添加 aitoolshub.com
```

### 环境配置

```env
NEXT_PUBLIC_SITE_URL=https://aitoolshub.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### CI/CD

- 推送到 `main` 分支自动部署生产环境
- PR 自动生成预览环境
- Vercel自带的性能监控和Web Vitals

### 上线检查清单

- [ ] 域名注册 + DNS配置
- [ ] SSL证书（Vercel自动）
- [ ] Google Search Console 提交sitemap
- [ ] Google Analytics 配置
- [ ] robots.txt 确认
- [ ] Open Graph图片准备
- [ ] 至少5篇种子内容发布
- [ ] 移动端响应式测试
- [ ] Core Web Vitals 达标（LCP < 2.5s, CLS < 0.1）
