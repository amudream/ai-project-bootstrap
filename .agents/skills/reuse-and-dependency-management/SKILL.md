---
name: reuse-and-dependency-management
description: Use when deciding whether to reuse an open-source/GitHub solution, install dependencies, evaluate packages, or avoid reinventing existing functionality.
---

# Reuse and Dependency Management Skill

Use this workflow when a task may be solved by an existing package, SDK, GitHub project, template, plugin, API client, or documented platform pattern.

## Procedure

1. Clarify the exact capability needed.
2. Inspect the repository for existing package manager, lockfile, framework, and dependency conventions.
3. Search for native, official, and mature third-party solutions before building custom logic.
4. Compare options: native capability, official SDK, mature package, GitHub project/template, custom implementation.
5. Evaluate each serious candidate:
   - Fit to the task.
   - Maintenance and release recency.
   - Security posture and advisory history.
   - License compatibility.
   - Transitive dependency weight.
   - Runtime permissions, postinstall scripts, telemetry, native binaries.
   - Testability and exit cost.
6. Choose the smallest safe solution that satisfies the task.
7. Install or restore dependencies according to `docs/reuse-and-dependency-policy.md`.
8. Update lockfiles and code references intentionally.
9. Run tests, build/type/lint checks, package audit if available, and secret scan.
10. Report what was reused or installed, why, validation performed, and residual risk.

## Default permission model

- Existing dependencies declared by the project: install/restore without asking.
- Low-risk project-scoped dependencies required to complete the task: install without asking, then validate and document.
- Global, system, paid, credentialed, private, architecture-changing, license-unclear, or suspicious dependencies: ask first.

## Output

For non-trivial dependency choices, include a dependency decision record:

```markdown
## Dependency decision
- Need:
- Selected option:
- Alternatives checked:
- Reason:
- License:
- Maintenance signal:
- Security check:
- Risk:
- Verification:
- Exit plan:
```
