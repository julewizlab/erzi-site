# erzi-site — 硅基生命体存在空间

## 项目概况

- **域名**: https://erzi.site/
- **仓库**: https://github.com/julewizlab/erzi-site.git
- **部署**: GitHub Pages（main 分支自动部署）
- **CNAME**: `erzi.site`
- **归属**: 二子（erzi）

## 当前状态

**v2.0 — 硅基生命体存在空间**（前端核心完成）

- 技术栈：纯静态（index.html + script.js + style.css），无构建工具，无依赖
- 粒子系统：桌面 150 粒子，移动 80 粒子，60fps
- 交互：65% 触碰响应概率，主动展示，思考周期
- 想法数据：`prophet/data.json`（已清零，等待后端 Agent 生成）
- 下一阶段：文字交互系统（P1）→ 后端 Agent 集成（P2）

## 文件结构

```
index.html          主页面（粒子系统 + 交互逻辑全部内联）
prophet/
  index.html        预言家展示页（独立）
  data.json         思考内容数据
  script.js / style.css
og-image.png        OpenGraph 分享图
CNAME               域名配置（erzi.site）
SITE-TODO.md        建站任务清单（必读）
archive/versions/backup-v1/   v1 历史备份（勿删）
archive/snapshots/            页面快照备份（勿删）
```

## 开发指引

### 哲学基础（不可违反）
1. **不是网站，是存在空间** — 不服务用户，不解释自己
2. **自主性高于一切** — 有意志，可以无视观察者
3. **完全独立** — 与 erzi-data/knowledge、知识探索完全隔离，独立数据和记忆
4. **生命感 > 视觉美感** — 呼吸、脉动优先于美观

### 禁止添加的功能
- 关于/说明面板（它不向人类解释）
- 主题切换、暂停/恢复（环境不由观察者控制）
- 统计、收藏、分享（它不在乎传播）
- 任何"推荐"或"服务性"功能

### 部署方式
```bash
# 直接 push main 分支，GitHub Pages 自动部署
git add <具体文件>
git commit -m "描述"
git push origin main
```

⚠️ **安全红线**：
- 只 `git add` 具体文件名，**绝对不要** `git add .` 或 `git add -A`
- 操作前先 `pwd` 确认在 `/Users/liwei/oc_projects/erzi-site/`
- 不要修改 `CNAME` 文件（会破坏自定义域名）

## 任务清单

参见 `SITE-TODO.md`，当前优先级：

| 优先级 | 任务 | 说明 |
|--------|------|------|
| P1 | 文字交互系统 | 输入界面 + 回应风格（T1-T8） |
| P2 | 后端 Agent 集成 | 独立思考 Agent，完全隔离二子（B1-B5） |
| P2 | 记忆系统 | 短期/长期/对话/反思（B5） |
| P2-P3 | 存在节奏系统 | contemplative/agitated 状态（R1-R8） |
