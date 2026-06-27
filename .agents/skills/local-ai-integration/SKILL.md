---
name: local-ai-integration
description: Use when configuring local AI calls, OpenAI-compatible endpoints, model routing, environment variables, API key handling, or endpoint health checks.
---

# Local AI Integration Skill

## Rules

- Read keys only from environment variables or `.env.local`.
- Never commit real keys.
- Never print real keys.
- Never place keys in reports.
- Redact secrets in diagnostics.

## Procedure

1. Check `.env.example` for required variables.
2. Check `.gitignore` protects `.env.local`.
3. Use `scripts/init-local-env.sh` if `.env.local` is missing.
4. Use `node scripts/ai-call.mjs "health check"` for a minimal test.
5. If Responses API fails, try or recommend `OPENAI_API_MODE=chat-completions`.
6. Report endpoint mode, model, and status without exposing key.
