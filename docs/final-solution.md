# Final Solution: Universal AI Project Bootstrap v1

This repository is finalized as a universal AI project starter framework, not as a single all-in-one vertical business application.

## Final positioning

`ai-project-bootstrap` provides a stable starting system for AI-assisted projects:

```text
Universal AI kernel
+ project charter
+ AGENTS.md working protocol
+ reusable Skills
+ prompt library
+ project profiles
+ domain packs
+ structured schemas
+ local AI configuration
+ open-source reuse policy
+ HTML report generator
+ CI validation
```

It is intentionally not a completed Alibaba International Station SaaS, a stock trading platform, a CRM product, or a Twitter content platform. Those are vertical projects that should be created from this template by selecting a profile and adding real data connectors.

## What is complete in v1

The following are considered part of the completed baseline:

- Durable AI behavior protocol: `AGENTS.md`.
- Original-intent preservation: `PROJECT_CHARTER.md`.
- Local AI / OpenAI-compatible endpoint configuration: `.env.example`, `scripts/ai-call.mjs`, `docs/local-ai.md`.
- Secret protection: `.gitignore`, `scripts/check-no-secrets.mjs`, `docs/secret-management.md`.
- Open-source and dependency reuse policy: `docs/reuse-and-dependency-policy.md`, `.agents/skills/reuse-and-dependency-management/SKILL.md`.
- Domain routing: `docs/profile-routing.md`, `project-profiles/`, `docs/domain-packs/`.
- Reusable Skills: `.agents/skills/`.
- Prompt library: `prompts/`.
- HTML report baseline: `reports/sample-data.json`, `scripts/render-report.mjs`, `reports/domain-report-blueprints.md`.
- Evaluation baseline: `evals/`, `scripts/validate-profile-routing.mjs`, rubric files.
- GitHub validation: `.github/workflows/validate.yml`.

## Final architecture

```text
AGENTS.md
  Defines invariant agent behavior.

PROJECT_CHARTER.md
  Preserves the original goal and prevents drift.

project-profiles/<profile>.md
  Selects the industry/task lens.

PROJECT_PROFILE.md
  Generated in a target project by `npm run init:profile -- <profile>`.

docs/domain-packs/<domain>.md
  Contains domain metrics, input requirements, false conclusions, and report visuals.

.agents/skills/<skill>/SKILL.md
  Contains executable agent workflow instructions.

prompts/*.md
  Provides direct reusable prompts.

schemas/*.json
  Defines machine-readable artifacts.

reports/*.json + scripts/render-report.mjs
  Generates a visual static HTML report.

scripts/*.mjs
  Validates structure, schemas, skills, profile routing, secrets, dependencies, and local AI calls.
```

## How to use it for your common scenarios

### Alibaba International Station

```bash
npm run init:profile -- alibaba-international-b2b
```

Then import/export real product, keyword, visitor, inquiry, category, and ad data. The profile and domain pack define how the AI should reason; the data connector supplies evidence.

### Stock screening and review

```bash
npm run init:profile -- stock-review
```

Then add real OHLCV, turnover, limit-up, sector, concept, and backtest data. The framework forces observable criteria, invalidation rules, and financial safety boundaries.

### Independent site outreach

```bash
npm run init:profile -- independent-site-outreach
```

Then add product catalog, prospect websites, target country, certifications, MOQ, price band, and outreach constraints.

### X / Twitter content operations

```bash
npm run init:profile -- x-content-ops
```

Then add source content, audience, voice profile, and performance data if available.

### Customer support / CRM

```bash
npm run init:profile -- customer-support-crm
```

Then add customer messages, product catalog, support policy, pricing/MOQ/lead-time rules, and CRM fields.

## How existing GitHub / open-source solutions are used

The framework does not vendor random GitHub projects into the core. Instead, it defines a policy for every future project:

1. Search the current repository first.
2. Prefer platform-native or standard library features.
3. Prefer official SDKs when available.
4. Evaluate mature third-party packages or GitHub projects.
5. Reuse safe solutions instead of reinventing.
6. Install low-risk workspace dependencies autonomously.
7. Ask for approval before high-risk installs or system-level changes.
8. Record significant dependency decisions.

This is deliberate. A universal starter should not hardcode every external solution because different projects will use different stacks, licenses, data sources, and risk profiles.

## What is intentionally left to target projects

These items belong in the project created from this template, not in the universal core:

- Real Alibaba International Station exports or API connectors.
- Real stock market data providers and backtest engines.
- Real CRM credentials and customer records.
- Real prospect scraping/crawling pipelines.
- Real X/Twitter publishing or analytics API integrations.
- Private product catalogs, price lists, buyer lists, and operational data.
- Production deployment configuration.

## Completion standard

The v1 framework is complete when:

```bash
npm run validate
```

passes, and when a new project can:

1. Select a profile.
2. Generate `PROJECT_PROFILE.md`.
3. Use the relevant Skill and domain pack.
4. Keep secrets local.
5. Generate a report from structured data.
6. Validate structure, schemas, skills, profile routing, and secret safety.

## Development rule after v1

Do not add more generic “optimization ideas” to the core unless they strengthen one of the final architecture layers. New industry-specific depth should be added as a new profile/domain pack/skill/schema or in a separate downstream project.
