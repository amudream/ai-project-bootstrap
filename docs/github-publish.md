# GitHub Publishing Guide

## 1. Create a local repository

```bash
git init
git add .
git commit -m "Initial AI project bootstrap framework"
```

## 2. Create a GitHub repository

Recommended repository name:

```text
ai-project-bootstrap
```

Recommended visibility:

- Public, if you want others to reuse the framework.
- Private, if your first version includes private endpoint details, private business logic, or internal playbooks.

## 3. Push

```bash
git branch -M main
git remote add origin git@github.com:<your-user-or-org>/ai-project-bootstrap.git
git push -u origin main
```

## 4. Before publishing

Run:

```bash
npm run validate
```

Check:

- No `.env.local`.
- No real API key.
- No private endpoint if you do not want it public.
- No private sample data.
- Generated report does not expose secrets.

## 5. Recommended GitHub settings

- Enable branch protection for `main`.
- Require status checks before merge.
- Require pull request review if used by a team.
- Enable secret scanning.
- Enable Dependabot alerts.
- Add repository topics: `ai`, `agents`, `codex`, `prompt-engineering`, `html-report`, `loop-engineering`.
