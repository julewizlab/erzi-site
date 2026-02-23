# agent.md

## 项目定位
- `erzi-site` 是纯静态站点，主入口为 `index.html`。
- `prophet/` 是独立展示页面与数据目录。
- 部署方式是 GitHub Pages（推送 `main` 自动发布）。

## 目录约定（2026-02-23）
- `index.html`：线上主页面。
- `prophet/`：预言家子页面与相关脚本、样式、数据。
- `archive/versions/`：历史版本归档（`backup-v1/`、`erzi-site-v2/`）。
- `archive/snapshots/`：历史快照页面（`index-abstract.html`、`index-readable.html`、`index-v3-backup.html`）。
- `SITE-TODO.md`：任务清单。
- `CHANGELOG.md`：完整变更记录。
- `CLAUDE.md`：必须保留在项目根目录。

## Agent 操作规则
1. 不移动、不删除根目录 `CLAUDE.md`。
2. 不修改 `CNAME`（避免影响自定义域名）。
3. 优先最小改动，只改当前任务所需文件。
4. 历史版本与快照统一放入 `archive/`，避免根目录继续堆积备份文件。
5. Git 提交时只 `git add` 具体文件，不使用 `git add .` 或 `git add -A`。
