# DESIGN.md — MY Portfolio Design System

> **维护指南** · 本文件是整个 portfolio 站点的单一设计真相来源（Single Source of Truth）。  
> 修改任何颜色、间距、组件规范前，请先更新此文件，再同步到代码。

---

## 目录

1. [设计哲学](#1-设计哲学)
2. [色彩系统](#2-色彩系统)
3. [排版系统](#3-排版系统)
4. [间距与圆角](#4-间距与圆角)
5. [阴影系统](#5-阴影系统)
6. [渐变边框模式](#6-渐变边框模式)
7. [动效规范](#7-动效规范)
8. [组件目录](#8-组件目录)
   - [Navigation.astro](#navigationastro)
   - [SidebarProfile.astro](#sidebarprofileastro)
   - [MusicPlayer.astro](#musicplayerastro)
   - [HeroBanner.astro](#herobannerastro)
   - [ProjectCollections.astro](#projectcollectionsastro)
9. [徽章 & 标签规范](#9-徽章--标签规范)
10. [页面布局](#10-页面布局)
11. [新增组件 Checklist](#11-新增组件-checklist)

---

## 1. 设计哲学

| 原则 | 说明 |
|------|------|
| **Anime × Tech** | 将 anime.astro 的收藏卡片美学延伸到整个站点，青绿 + 橙色双主题 |
| **白卡 + 浅灰底** | 所有卡片白底，页面背景统一 `#f1f5f9`，形成层次感 |
| **边框即装饰** | 用渐变边框环（gradient ring wrapper）替代纯色 `border`，是本系统最标志性的视觉语言 |
| **徽章叙事** | 每个模块都应有序列号徽章（`PRJ-001`、`HRO-001`）和分类标签，强化 archive 氛围 |
| **光晕点缀** | 背景固定位置的 teal/橙 `blur-3xl` 光晕，提升空间深度，但保持克制 |

---

## 2. 色彩系统

### 主色板

| Token | 值 | 用途 |
|-------|----|------|
| `--color-teal` | `#39c5bb` | 主强调色：链接激活、按钮、徽章、边框环、脉冲点 |
| `--color-teal-dark` | `#2ba8a0` | teal 渐变终止色、hover 深化 |
| `--color-orange` | `#FF9500` | 补充强调：次级按钮、徽章、分类标签 |
| `--color-orange-alt` | `#FFA500` | 橙色渐变变体 |

### 背景色板

| Token | 值 | 用途 |
|-------|----|------|
| `--bg-page` | `#f1f5f9` | 页面根背景（与 `anime.astro` 完全一致） |
| `--bg-card` | `#ffffff` | 所有卡片背景 |
| `--bg-muted` | `#f8fafc` | 卡片内嵌区块（poster 区域、状态栏） |
| `--bg-dark` | `#0f172a` | 深色元素（vinyl、Hero 叠加层底色） |

### 文字色板

| Token | Tailwind | 用途 |
|-------|----------|------|
| `--text-heading` | `text-slate-900` | 标题 |
| `--text-body` | `text-slate-600` / `text-slate-700` | 正文 |
| `--text-muted` | `text-slate-400` | 辅助文字、标签、时间戳 |
| `--text-teal` | `text-[#39c5bb]` | teal 高亮文字 |
| `--text-orange` | `text-orange-500` | 橙色高亮文字 |

### 透明度使用规范

```
teal 背景叠加：  /5  /10  /20  /30  /40  /60  /80  /90
orange 背景叠加：/10  /20  /30  /50  /80  /90
白色叠加（毛玻璃）：/10  /20（backdrop-blur-sm 配合使用）
```

---

## 3. 排版系统

### 字体

```
主字体：Plus Jakarta Sans
引入：https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap
```

在 `BaseLayout.astro` 的 `<head>` 中引入，全局生效。  
代码区域（序列号、目录路径）使用系统 `font-mono`。

### 字阶规范

| 用途 | Tailwind class | 说明 |
|------|----------------|------|
| 页面大标题 | `text-4xl md:text-5xl font-extrabold` | Hero 主标题 |
| 区块标题 | `text-2xl font-black tracking-tight` | Collections 标题、Profile 名称 |
| 卡片标题 | `text-xl font-black tracking-tight` | 项目卡片 |
| 小卡片标题 | `text-[11px] font-black` | anime 卡片标题 |
| 分区标签 | `text-[9px] font-black uppercase tracking-[0.2em~0.35em]` | 所有 section 小标签 |
| 正文 | `text-sm` / `text-[13px] font-medium` | 描述文字 |
| 辅助 | `text-[10px] text-slate-400` | 副标题、时间戳 |

---

## 4. 间距与圆角

### 圆角层级

| 层级 | 值 | 使用场景 |
|------|----|----------|
| `rounded-[34px]` | 渐变边框环外层（+2px 补偿） | 所有卡片的 gradient ring wrapper |
| `rounded-[32px]` | 大卡片（Profile、ProjectCard、Hero）| 主视觉卡片 |
| `rounded-[24px]` | 中卡片（MusicPlayer、状态栏）| 次要卡片 |
| `rounded-[20px]` | anime 收藏卡片卡体 | anime.astro 专用 |
| `rounded-[16px]` | anime 卡片内嵌图片区域 | anime.astro 专用 |
| `rounded-full` | 头像、标签 pill、按钮、脉冲点 | |
| `rounded-lg` | 序列号徽章、分类徽章 | |
| `rounded-md` | 小徽章（CV:01、HRO-001）| |

### Padding 规范

```
大卡片内边距：  p-8  (32px)
中卡片内边距：  p-5  (20px)
小徽章内边距：  px-2.5 py-1  /  px-2 py-0.5
导航内边距：    px-6 pt-10
页面内边距：    px-6 pb-24 pt-6
```

---

## 5. 阴影系统

```css
/* 卡片默认阴影（subtle，避免过重） */
shadow-[0_8px_30px_rgb(0,0,0,0.04)]

/* 卡片 teal 调阴影（带品牌色） */
shadow-[0_8px_40px_rgba(57,197,187,0.08)]

/* Hero teal 光晕阴影 */
shadow-[0_20px_60px_rgba(57,197,187,0.15)]

/* 主按钮 teal 发光 */
shadow-[0_4px_20px_rgba(57,197,187,0.4)]
hover:shadow-[0_4px_28px_rgba(57,197,187,0.6)]

/* Navigation Contact 按钮 hover */
hover:shadow-[0_4px_20px_rgba(57,197,187,0.3)]

/* vinyl 中心点发光 */
shadow-[0_0_8px_rgba(57,197,187,0.8)]
```

---

## 6. 渐变边框模式

这是本系统的**核心视觉语言**，所有主要卡片都应使用此模式。

### 标准实现

```astro
<!-- 外层 relative wrapper -->
<div class="relative">
  <!-- 渐变环：-inset-[2px] 确保刚好包住圆角卡片 -->
  <div class="absolute -inset-[2px] rounded-[34px] bg-gradient-to-br from-[#39c5bb]/40 to-orange-300/30 -z-10"></div>
  
  <!-- 实际卡片 -->
  <div class="bg-white rounded-[32px] p-8 ...">
    ...内容...
  </div>
</div>
```

### 变体

| 变体 | gradient class | 使用场景 |
|------|----------------|----------|
| 默认 teal→橙 | `from-[#39c5bb]/40 to-orange-300/30` | SidebarProfile、MusicPlayer |
| 强调 teal→橙（premium） | `from-[#39c5bb]/50 to-orange-300/40` | 偶数 ProjectCard |
| 强调 橙→teal | `from-orange-400/50 to-[#39c5bb]/30` | 奇数 ProjectCard |
| Hero 边框 | `from-[#39c5bb]/60 via-orange-400/40 to-[#39c5bb]/30` | HeroBanner |

### 注意
- 外层 `rounded-[34px]` = 内层卡片圆角 `32px` + 2px 边框宽度
- 必须在外层添加 `-z-10`，否则会遮住卡片内容
- 对于 `position: absolute` 的内层元素，确保它们 `z-index` > 0

---

## 7. 动效规范

### 悬停动效

```css
/* 卡片上浮（标准） */
hover:-translate-y-1.5 transition-transform

/* 轻微上浮（MusicPlayer 等小组件） */
hover:-translate-y-1 transition-transform

/* 图片 zoom-in */
group-hover:scale-110 transition-transform duration-700

/* Hero 图片轻微 zoom */
group-hover:scale-[1.02] transition-transform duration-700
```

### Shimmer 光效覆盖层

每个带 `group` 的卡片在悬停时应叠加光效：

```astro
<!-- 放在卡片末尾，pointer-events-none -->
<div class="pointer-events-none absolute inset-0 rounded-[32px] 
            bg-gradient-to-br from-white/0 via-orange-100/20 to-[#39c5bb]/10 
            opacity-0 group-hover:opacity-100 transition-opacity duration-500">
</div>
```

### 脉冲动效

```css
/* 在线状态点、系统状态指示灯 */
animate-pulse

/* anime.astro premium 卡片边框 */
@keyframes pulse-border {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.6; }
}
.premium-ring { animation: pulse-border 2s ease-in-out infinite; }
```

### 过渡时长规范

```
颜色/透明度过渡：  duration-200（快）/ duration-300（默认）/ duration-500（慢，shimmer）
transform 过渡：   duration-200（按钮）/ duration-300（卡片）/ duration-700（图片 zoom）
```

---

## 8. 组件目录

---

### `Navigation.astro`

**位置**：`src/components/Navigation.astro`  
**职责**：全局顶部导航栏

#### Props
无（静态组件）

#### 关键样式
```
Logo：          bg-gradient-to-r from-[#39c5bb] to-[#2ba8a0] bg-clip-text text-transparent
激活链接：      text-[#39c5bb] + 下方 w-3 h-[2px] bg-[#39c5bb] 指示线
Anime Labs 徽章：bg-orange-100 text-orange-500（"New" pill）
版本标签：      白色 pill + teal 脉冲点 + border-slate-200
Contact 按钮：  bg-slate-900 hover:shadow-[...teal glow]
```

#### 修改指南
- **新增导航项**：复制现有 `<a>` 标签，激活页添加 flex-col + 下划线 div
- **更换 Logo 文字**：直接修改 `FIDELITY.` 文字内容
- **更换版本号**：修改 `Astro_Sys_v1.0`

---

### `SidebarProfile.astro`

**位置**：`src/components/SidebarProfile.astro`  
**职责**：左侧个人档案卡

#### Props
```typescript
profile: {
  name: string;
  tagline: string;
  tags: string[];        // 渲染为彩色 pill 标签
  currentFocus: string;  // 渲染为状态行
  avatarFallback: string; // 头像 URL
}
```

#### 标签颜色映射
在组件内的 `tagColors` 对象中维护：

```typescript
const tagColors: Record<string, [bgClass, textClass, borderClass]> = {
  "UI/UX":   ["bg-[#39c5bb]/10", "text-[#2ba8a0]", "border-[#39c5bb]/30"],
  "Astro":   ["bg-orange-50",    "text-orange-500", "border-orange-200"],
  "Next.js": ["bg-slate-100",    "text-slate-600",  "border-slate-200"],
  "Otaku":   ["bg-orange-50",    "text-orange-500", "border-orange-200"],
  // 新增 tag 在此添加
};
```

#### 目录链接
在 `Directory / Pages` 区块中手动维护，每个链接格式：

```astro
<a href="/路径" class="flex items-center gap-3 ... hover:text-[#39c5bb]">
  <div class="w-2 h-2 rounded-full bg-[#39c5bb]"></div>
  filename.astro
</a>
```

颜色约定：`anime.astro` → teal，`projects.astro` → orange，其余 → slate-300

#### 修改指南
- **新增 tag**：在 `index.astro` 的 `profile.tags` 数组添加，并在 `tagColors` 中注册颜色
- **新增目录项**：在 Directory 区块 copy 一行，调整 href 和 dot 颜色
- **更换头像**：修改 `profile.avatarFallback`，或保留点击生成功能

---

### `MusicPlayer.astro`

**位置**：`src/components/MusicPlayer.astro`  
**职责**：侧边栏音乐播放器（纯 UI，无实际音频）

#### Props
```typescript
playlist: Array<{
  id: number;
  title: string;
  artist: string;
  durationStr: string;  // 显示用，如 "3:58"
  durationSec: number;  // 预留，暂未使用
}>
```

#### 交互行为
- **点击播放按钮**：切换 play/pause 图标，触发 `vinyl-record` playing 动画类
- **点击 vinyl 圆盘**：切换至下一首曲目（循环）

#### 修改指南
- **修改歌单**：在 `index.astro` 的 `playlist` 数组中增删对象
- **接入真实音频**：在 `<script>` 中实例化 `Audio` 对象，监听 `play/pause` 事件
- **样式变更**：vinyl 背景色 `bg-slate-900`，中心点 `bg-[#39c5bb]`

---

### `HeroBanner.astro`

**位置**：`src/components/HeroBanner.astro`  
**职责**：主内容区顶部英雄横幅，支持 AI 图片生成替换背景

#### Props
无（由 `index.astro` 的 script 通过 DOM ID 控制）

#### 关键 DOM ID
| ID | 用途 |
|----|------|
| `heroWallpaper` | 背景图 `<img>`，AI 生成后替换 `src` |
| `wallpaper-loader` | loading shimmer 遮罩，生成时显示 |
| `generate-trigger` | "Anime Labs" 按钮，点击触发 AI 生成 |

#### 角落徽章
```
左上：  LIVE  → bg-[#39c5bb]/80（teal）
右上：  HRO-001 → bg-orange-500/80（orange）
```
修改右上角序列号时直接改 `HRO-001` 文字。

#### 修改指南
- **替换默认背景图**：修改 `<img>` 的 `src` 属性（Unsplash URL）
- **修改标题文字**：找到 `Crafting Digital` 和 `<span class="text-[#39c5bb]">Experiences</span>`
- **修改副标题**：找到 `Astro-powered precision...` 段落
- **修改 CTA 按钮文字**：找到 `Browse Work` / `Anime Labs`
- **更换 AI 生成 prompts**：在 `index.astro` 的 `vibes` 数组中修改

---

### `ProjectCollections.astro`

**位置**：`src/components/ProjectCollections.astro`  
**职责**：最新项目卡片网格（2列），支持动态 posts 或静态 fallback

#### Props
```typescript
posts: any[]  // 来自 getCollection('posts')，空数组时显示 fallback 卡片
```

#### 卡片色彩交替逻辑
```typescript
const cardAccents = [
  // 偶数卡片 (i=0,2,...): teal 主
  { ring: "from-[#39c5bb]/50 to-orange-300/30", badge: "bg-[#39c5bb]/80", ... },
  // 奇数卡片 (i=1,3,...): orange 主
  { ring: "from-orange-400/50 to-[#39c5bb]/30", badge: "bg-orange-500/80", ... },
];
// 取色：cardAccents[i % 2]
```

#### 序列号格式
```typescript
const toSerial = (i: number) => `PRJ-${String(i + 1).padStart(3, '0')}`;
// 输出：PRJ-001, PRJ-002, ...
```

#### Fallback 卡片
当 `posts.length === 0` 时显示静态示例卡片。修改静态标题：

```typescript
{ title: "Lumina Dashboard",  category: "Case Study",   idx: 0 },
{ title: "Cyber-Neko UI",     category: "Experimental", idx: 1 },
```

#### 修改指南
- **更改显示数量**：`posts.slice(0, 2)` → 改 `2` 为目标数量，同时调整 grid cols
- **新增卡片颜色变体**：在 `cardAccents` 数组添加第 3 个对象
- **修改标题样式**：找到 `text-xl font-black` 的 `<h4>`

---

## 9. 徽章 & 标签规范

### 序列号徽章（右上角 badge）

用于：HeroBanner、ProjectCard、anime 卡片

```astro
<!-- 橙色序列号 -->
<div class="px-2.5 py-1 bg-orange-500/80 backdrop-blur-sm rounded-lg border border-white/20">
  <span class="text-[9px] font-mono text-white font-bold">PRJ-001</span>
</div>
```

命名规范：
- Hero：`HRO-001`
- 项目卡片：`PRJ-001`, `PRJ-002`...
- Anime 卡片：`03-ANM-001`（anime.astro 专用格式）

### 功能徽章（左上角 badge）

用于：HeroBanner `LIVE`、anime 卡片 `CV:01`

```astro
<!-- teal 功能徽章 -->
<div class="px-2.5 py-1 bg-[#39c5bb]/80 backdrop-blur-sm rounded-lg border border-white/20">
  <span class="text-[9px] font-black text-white italic">LIVE</span>
</div>
```

### 分类标签 pill（卡片内）

```astro
<!-- teal 系 -->
<span class="bg-[#39c5bb]/10 text-[#2ba8a0] border-[#39c5bb]/30 px-3.5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border">
  UI/UX
</span>

<!-- orange 系 -->
<span class="bg-orange-50 text-orange-500 border-orange-200 px-3.5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border">
  Astro
</span>
```

### Section 小标签（卡片内顶部）

```astro
<div class="flex items-center gap-1">
  <!-- teal 小图标 -->
  <svg class="w-2 h-2 text-[#39c5bb]" .../>
  <span class="text-[9px] text-[#39c5bb] font-bold tracking-[0.2em] uppercase">
    SECTION_LABEL
  </span>
</div>
```

---

## 10. 页面布局

### 根布局

```astro
<!-- index.astro -->
<div class="min-h-screen bg-[#f1f5f9] text-slate-800">
  <!-- 固定背景光晕 -->
  <div class="fixed top-0 left-1/4 w-96 h-96 bg-[#39c5bb]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
  <div class="fixed bottom-1/4 right-1/4 w-80 h-80 bg-orange-300/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
  
  <Navigation />
  
  <main class="max-w-[1100px] mx-auto px-6 pb-24 pt-6">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <aside class="lg:col-span-4 space-y-5"> ... </aside>
      <section class="lg:col-span-8 space-y-8"> ... </section>
    </div>
  </main>
</div>
```

### 网格比例
```
Sidebar  : Main = 4 : 8 (总 12 列)
断点：lg (1024px) 以下堆叠为单列
```

### 最大宽度
```
页面容器：  max-w-[1100px]
anime 页：  max-w-7xl (1280px)
```

---

## 11. 新增组件 Checklist

新建一个组件时，按此清单逐项确认：

```
□ 背景色使用 bg-white（卡片）或 bg-[#f1f5f9]（嵌套区块）
□ 圆角使用系统圆角层级（rounded-[32px] / [24px] / full）
□ 主强调色使用 #39c5bb，次强调色使用 orange-500
□ 标题字体添加 font-[Plus_Jakarta_Sans,sans-serif]
□ 卡片使用渐变边框模式（gradient ring wrapper）
□ 有 group 类时末尾添加 shimmer 光效覆盖层
□ 悬停动效：hover:-translate-y-1.5 transition-transform
□ 阴影使用系统阴影 token（不使用 Tailwind 默认 shadow-md 等）
□ 序列号徽章（右上橙色）和功能徽章（左上 teal）按需添加
□ Section 标签使用 text-[9px] font-black uppercase tracking-[0.2em] 格式
□ 在此 DESIGN.md 的「组件目录」章节添加文档
```

---

*最后更新：与 anime.astro 色彩系统对齐后的第一个稳定版本*  
*维护者：Fidelity Designer · `index.astro` system*