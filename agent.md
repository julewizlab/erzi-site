# agent.md

## 项目概况
- 项目是纯静态站点，当前主入口为 `index.html`。
- 页面逻辑、样式、交互都以内联方式集中在 `index.html`。
- 部署方式是 GitHub Pages（`main` 分支触发部署）。

## 当前目录约定（2026-02-23）
- `index.html`：线上主页面（包含视觉与交互核心逻辑）。
- `CLAUDE.md`：项目主说明，必须保留在根目录。
- `SITE-TODO.md`：任务清单与执行记录。
- `CNAME`：自定义域名配置（`erzi.site`）。
- `og-image.png`：分享卡片图。
- `.github/workflows/deploy.yml`：Pages 部署工作流。

## Agent 执行规则
1. 不移动、不删除根目录 `CLAUDE.md`。
2. 不修改 `CNAME`，除非用户明确要求。
3. 优先最小改动，避免无关重构。
4. 视觉和交互改动要同时兼容桌面与移动端。
5. 保持“简洁、科技感、科幻感”的整体风格一致性。

## 提交与验证
1. 仅 `git add` 具体文件，不使用 `git add .` 或 `git add -A`。
2. 改动 `index.html` 后，先做脚本语法检查再提交（例如提取后 `node --check`）。
3. 不使用破坏性命令（如 `git reset --hard`）。
