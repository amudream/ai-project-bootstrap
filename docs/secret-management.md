# Secret Management Policy

## Rule

No secret belongs in a Git repository unless it is intentionally encrypted and the decryption key is managed elsewhere. For this starter framework, do not commit secrets at all.

## Files that may contain secrets locally

- `.env.local`
- shell profile files on your own machine
- OS keychain
- password manager
- CI secret store

## Files that must never contain secrets

- `AGENTS.md`
- `README.md`
- `PROJECT_CHARTER.md`
- `docs/*.md`
- `prompts/*.md`
- `reports/*.html`
- `reports/*.json`
- source code
- screenshots
- logs
- GitHub issues or PR comments

## GitHub setup

Use GitHub repository secrets for CI/CD:

- `OPENAI_API_KEY`
- `OPENAI_BASE_URL`
- `OPENAI_MODEL`

Do not hardcode them in workflow YAML.

## Rotation rule

If a key appears in chat, terminal history, issue text, commit history, logs, or screenshots, consider it compromised. Revoke it and generate a new one.

## Local initialization

Use:

```bash
./scripts/init-local-env.sh
```

This creates `.env.local` with `chmod 600` and avoids committing it.
