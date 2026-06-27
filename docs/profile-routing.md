# Profile Routing

Use this file to decide which project profile and skill should be loaded for a task.

## Routing table

| User intent | Primary profile | Primary skill | Required docs |
|---|---|---|---|
| Alibaba International Station product posting, optimization, category, visitor, inquiry, B2B operations | `alibaba-international-b2b` | `alibaba-international-ops` | `docs/domain-packs/alibaba-international-b2b.md` |
| Customer needs summary, support replies, CRM notes, objection handling | `customer-support-crm` | `customer-support-crm` | `docs/domain-packs/customer-support-crm.md` |
| Stock screening, limit-up review, buy-point hypotheses, market replay | `stock-review` | `stock-review` | `docs/domain-packs/stock-review.md`, `docs/finance-safety.md` |
| Independent site prospecting, product matching, email development | `independent-site-outreach` | `independent-site-outreach` | `docs/domain-packs/independent-site-outreach.md` |
| X / Twitter post rewriting, article reconstruction, anti-AI style editing | `x-content-ops` | `x-content-ops` | `docs/domain-packs/x-content-ops.md` |
| General project bootstrapping | `generic-ai-project` | `demand-clarifier` | `AGENTS.md`, `PROJECT_CHARTER.md` |

## Routing protocol

1. Read `PROJECT_CHARTER.md`.
2. Identify whether the task is generic or domain-specific.
3. Load only the profile and domain pack that match the task.
4. Use schemas when the output will be reused by code, reports, or future agents.
5. Use HTML report templates when the task involves trends, flows, segments, funnels, risks, or decisions.
6. If the task depends on current data, call the relevant data connector or ask for/import the dataset. Do not invent metrics.

## Composite tasks

For broad projects, run a small orchestrator plan:

```text
Agent 1: requirements and charter alignment
Agent 2: domain analysis
Agent 3: data and metrics
Agent 4: report design
Agent 5: risk and compliance
Agent 6: execution plan
```

The main agent must merge results into one concrete plan. Do not leave the user with generic next steps if the next action can be completed locally.

