# Contributing

## Rules

- Do not commit secrets.
- Keep `AGENTS.md` enforceable and compact.
- Put reusable workflows into `.agents/skills`.
- Put long-form explanations into `docs`.
- Run `npm run validate` before opening a PR.
- Update `PROJECT_CHARTER.md` only when changing the framework’s strategic direction.

## PR checklist

- [ ] No real keys or private endpoints.
- [ ] Generated report still works.
- [ ] New skill has clear `name` and `description` metadata.
- [ ] Docs are updated when behavior changes.
- [ ] Changes preserve the original project objective.
