---
name: loop-engineering
description: Use when improving an agent, prompt, report, code artifact, dataset, or workflow through repeated baseline, evaluation, repair, validation, and logging cycles.
---

# Loop Engineering Skill

## Procedure

1. Define success metrics and stop rules.
2. Run or record a baseline.
3. Inspect the current artifact, not only logs.
4. Run deterministic checks where possible.
5. Use rubric-based judgment where deterministic checks are insufficient.
6. Identify the biggest bottleneck.
7. Make one focused change.
8. Re-run checks.
9. Log whether the change helped or hurt.
10. Continue until thresholds are met or a real blocker is reached.

## Loop log

Use `logs/loop-log.md` or create it if missing.

## Stop rule

Do not continue indefinitely. Stop when thresholds are met, cost/permission/safety blocks progress, or a human decision is required.
