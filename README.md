# AI Project Bootstrap

一个面向所有 AI 项目的通用启动框架。它的目标不是让 AI “听话地多写一点”，而是让 AI 在每个项目中形成可验证、可复盘、可扩展的工作系统：明确需求、主动补全上下文、反驳薄弱假设、复用成熟方案、调用工具、分配子代理、运行验证、生成可视化 HTML 报告，并持续通过评估循环改进。

## 适用场景

- 新建软件项目、AI agent 项目、数据分析项目、自动化项目、知识库项目。
- 阿里巴巴国际站运营、产品发布、产品优化、访客/询盘/类目/推广数据分析。
- 股票复盘、选股研究、涨停结构、板块轮动、买点假设、回测和风控。
- 独立站客户开发、客户网站分析、产品匹配、开发信和跟进序列。
- X/Twitter 内容重构、发品、文章口语化、去 AI 味、hook 和 thread。
- 客户需求总结、客服回复、CRM 记录、异议处理和跟进。
- 希望 AI 不被用户浅层提示词限制，而是主动指出盲区、扩展视角、追踪原始目标、避免需求漂移。
- 希望本地模型、代理模型、OpenAI API 或兼容 OpenAI API 的服务都能接入。
- 希望 AI 主动寻找 GitHub / 开源 / 官方 SDK / 安装包等已有方案，低风险依赖可本地自行安装，高风险操作再请求确认。

## 核心设计

这个仓库把 AI 项目启动框架拆成八层：

1. `AGENTS.md`：所有 agent 每次进入项目都必须读取的硬约束。
2. `.agents/skills/*/SKILL.md`：可复用的深度工作流，例如需求澄清、深度研究、代码审查、loop engineering、HTML 报告、开源复用。
3. `PROJECT_CHARTER.md`：项目宪章，用于记录最初目标、不可偏离的需求、验收标准和战略边界。
4. `docs/`：方法论、OpenAI 官方实践提炼、密钥管理、本地 AI 调用、行业报告设计、优化清单、依赖策略。
5. `prompts/`：可直接复制的高完整性提示词、子代理编排提示词、行业提示词和复用提示词。
6. `reports/` + `scripts/render-report.mjs`：自包含 HTML 报告模板和可视化报告生成器。
7. `project-profiles/` + `docs/domain-packs/`：垂直行业项目配置和领域知识包。
8. `evals/` + `scripts/validate-repo.mjs`：评估、验证、反漂移和质量控制入口。

## 垂直项目 Profile

这个框架采用“通用内核 + 行业 Profile + Domain Pack”的结构。通用内核负责 AI 的基本工作方式：需求澄清、反迎合、反漂移、验证、报告、密钥保护、本地 AI 调用和开源复用。行业 Profile 负责把这些能力映射到具体业务。

已内置的 Profile：

- `project-profiles/alibaba-international-b2b.md`：阿里巴巴国际站 / B2B 出口运营，覆盖产品发布、产品优化、关键词、类目、访客、询盘、推广复盘。
- `project-profiles/customer-support-crm.md`：客户需求总结、客服回复、CRM 字段、异议和跟进。
- `project-profiles/stock-review.md`：股票筛选、复盘、涨停结构、买点假设、板块轮动、回测和风控。
- `project-profiles/independent-site-outreach.md`：独立站客户开发、网站分析、产品匹配、开发信和跟进序列。
- `project-profiles/x-content-ops.md`：X/Twitter 发品、文章重构、口语化、去 AI 味、hook 和 thread。

初始化某个垂直项目：

```bash
npm run init:profile -- alibaba-international-b2b
# 或
npm run init:profile -- stock-review
```

这会生成本地项目的 `PROJECT_PROFILE.md`，之后让 agent 同时读取 `AGENTS.md`、`PROJECT_CHARTER.md` 和 `PROJECT_PROFILE.md`。

Profile 路由规则见 `docs/profile-routing.md`，垂直化策略见 `docs/verticalization-strategy.md`。

## 开源复用与依赖安装策略

本框架默认要求 AI 不要重复造轮子。对于非平凡功能，AI 应先判断是否存在仓库已有代码、标准库、官方 SDK、成熟开源库、GitHub 项目、平台插件或行业标准实现。

依赖安装采用分级策略：

- 已经写在 manifest / lockfile 里的依赖缺失时，agent 可以直接用项目现有包管理器安装，例如 `npm ci`、`pnpm install --frozen-lockfile`、`pip install -r requirements.txt`、`uv sync`、`poetry install`、`go mod download`、`cargo fetch`。
- 为完成当前任务而新增的低风险、本地、dev-only、许可证兼容依赖，可以自动添加、安装、更新 lockfile，并运行验证。
- 生产运行时依赖、全局/系统安装、`sudo`、`curl | sh`、原生二进制、许可证不明、GPL/AGPL 风险、认证/支付/金融交易/安全/隐私核心依赖、框架替换、数据库迁移、云资源和付费服务，必须先说明决策并取得确认。
- 复用 GitHub 项目时优先包管理器安装或 adapter 接入，不要静默复制整套项目代码；复制代码必须处理许可证、署名和维护风险。

详细规则见 `docs/reuse-and-dependency-policy.md`，任务工作流见 `.agents/skills/reuse-and-dependency-management/SKILL.md`，可复制提示词见 `prompts/reuse-existing-solutions.md`。

## 快速开始

```bash
git clone <your-repo-url>
cd ai-project-bootstrap
npm run validate
npm run report
open reports/report-output.html
```

本项目没有默认三方依赖。报告生成和基础验证只使用 Node.js 内置模块。

## 本地 API / 兼容 OpenAI API 服务

不要把 API key 写进 `AGENTS.md`、README、代码、报告或任何会上传到 GitHub 的文件。

本地使用：

```bash
cp .env.example .env.local
chmod 600 .env.local
# 编辑 .env.local，填入你的 OPENAI_BASE_URL / OPENAI_API_KEY / OPENAI_MODEL
```

也可以使用：

```bash
./scripts/init-local-env.sh
```

`.env.local` 已被 `.gitignore` 忽略。`.env.example` 只保留占位符。

## 推荐工作方式

### 1. 启动一个项目

先让 AI 读取并更新：

```text
请读取 AGENTS.md、PROJECT_CHARTER.md、docs/optimization-backlog.md。
根据我的业务目标，补全项目宪章、任务分解、验收标准、风险清单和第一轮执行计划。
不要迎合我的初始表述；请指出我没有想到的约束、机会、反例和潜在误判。
如已有成熟开源方案、官方 SDK、安装包或 GitHub 项目，请主动比较并复用；低风险本地依赖可以直接安装，高风险依赖必须先给出决策。
```

### 2. 复杂任务启用子代理

```text
请使用多代理并行审查。Spawn one agent per dimension, wait for all results, then synthesize.
Agent 1: 需求和原始目标一致性
Agent 2: 技术架构和可维护性
Agent 3: 数据、评估和可验证性
Agent 4: 安全、隐私和密钥风险
Agent 5: 外部方案复用、依赖、许可证和供应链风险
Agent 6: 可视化报告和用户理解效率
最后合并去重，给出一次性完成计划，而不是泛泛的下一步建议。
```

### 3. 需要报告时

```bash
npm run report
```

生成的 `reports/report-output.html` 是单文件静态报告，包含 KPI 卡片、趋势图、资金/数据流动图、热力图、行业视角、发现表、决策追踪等模块。

## 官方实践来源

本框架融合了 OpenAI 官方关于 Codex、AGENTS.md、Skills、Subagents、Responses API、Function calling、Structured Outputs、Agents SDK、Prompt guidance、Loop engineering、Evals / optimization flywheel 等实践。具体引用见 `docs/openai-principles.md`。

## 安全原则

- 不提交 `.env.local`、密钥、token、cookie、会话文件。
- 不把密钥写入 prompt 模板、报告、日志或截图。
- 默认使用最小权限。
- 高影响操作必须有人类确认。
- AI 可以指出你错在哪里，但不能伪造验证结果。
- AI 可以主动安装低风险项目本地依赖，但不能静默执行系统级、全局、付费、生产、破坏性或许可证不明操作。

## License

MIT
