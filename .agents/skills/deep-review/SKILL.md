---
name: deep-review
description: Use for exhaustive project, code, architecture, prompt, report, or security review where completeness, correctness, and risk discovery matter more than speed.
---

# Deep Review Skill

## Review dimensions

- Requirements and original-goal alignment.
- Correctness and edge cases.
- Architecture and maintainability.
- Security, privacy, and secrets.
- Performance, cost, and latency.
- Data quality and metric definitions.
- Test and eval coverage.
- UX and report clarity.
- Operational readiness.
- Documentation and handoff quality.

## Procedure

1. Identify the intended behavior and acceptance criteria.
2. Inspect relevant files, tests, docs, configs, data, and generated artifacts.
3. Search for similar patterns before recommending changes.
4. Separate confirmed issues from speculative risks.
5. Rank findings by impact and likelihood.
6. Give concrete fixes.
7. Recommend verification commands.

## Finding format

```markdown
### [Severity] Finding title
- Location:
- Evidence:
- Why it matters:
- Fix:
- Verification:
```
