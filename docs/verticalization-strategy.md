# Verticalization Strategy

This framework is a universal AI project kernel. It should not try to store every industry rule in `AGENTS.md`. The correct architecture is layered:

```text
Core kernel
  AGENTS.md
  PROJECT_CHARTER.md
  docs/openai-principles.md
  docs/loop-engineering.md
  docs/report-design.md
  schemas/*
  evals/*

Project profile
  project-profiles/<profile>.md
  PROJECT_PROFILE.md in the target project

Domain pack
  docs/domain-packs/<domain>.md
  .agents/skills/<domain>/SKILL.md
  prompts/<domain>.md
  schemas/<domain>.schema.json
  evals/cases/<domain>.jsonl

Data and tool layer
  .env.local
  API wrappers
  database connectors
  file imports
  web or browser automation where permitted
```

## Why not put all domains into AGENTS.md

A universal `AGENTS.md` must remain short, durable, and enforceable. If it contains every Alibaba, trading, CRM, content, and e-commerce rule, the agent receives too much irrelevant context and becomes less precise. Put only stable behavior in `AGENTS.md`: challenge weak assumptions, preserve the charter, use evidence, validate, protect secrets, and complete locally when possible.

## Profile selection rule

At the beginning of a project, choose one primary profile and zero to two secondary profiles.

Examples:

- Alibaba International Station operator: primary `alibaba-international-b2b`; secondary `customer-support-crm`.
- Stock review project: primary `stock-review`; secondary `html-report-factory` and `loop-engineering`.
- Independent site outreach: primary `independent-site-outreach`; secondary `x-content-ops` and `customer-support-crm`.
- X content project: primary `x-content-ops`; secondary `deep-research`.

Do not load every profile at once. Load profiles by task.

## What each profile must define

Each profile should define:

- Objective.
- Typical tasks.
- Required inputs.
- Output artifacts.
- Data fields and schemas.
- Industry-specific risks.
- Report visuals.
- Eval criteria.
- Tool or connector requirements.
- Forbidden behavior.

## Minimum viable verticalization

A profile is useful when it can answer these questions:

1. What data must be inspected before conclusions are allowed?
2. What metrics matter in this domain?
3. What false conclusions are common?
4. What visuals make the report easier to understand than markdown?
5. What actions are allowed, require approval, or are forbidden?
6. What eval cases prove the agent is not merely sounding plausible?

