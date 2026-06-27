# Local AI / OpenAI-Compatible Endpoint Integration

This project supports OpenAI-compatible endpoints through environment variables. This includes OpenAI’s public API, local model routers, private gateways, or proxy services that implement OpenAI-compatible routes.

## Required variables

Create `.env.local`:

```bash
cp .env.example .env.local
chmod 600 .env.local
```

Then set:

```env
OPENAI_BASE_URL="https://api.openai.com/v1"
OPENAI_API_KEY="your-key-here"
OPENAI_MODEL="gpt-5.5"
OPENAI_API_MODE="responses"
```

For a local or proxy endpoint, replace `OPENAI_BASE_URL` with your endpoint. Do not commit the file.

## Responses API vs Chat Completions

Many modern OpenAI workflows use the Responses API. Some local gateways only implement Chat Completions. This framework supports both at the wrapper level:

```env
OPENAI_API_MODE="responses"
# or
OPENAI_API_MODE="chat-completions"
```

Run a test call:

```bash
node scripts/ai-call.mjs "Return a one-sentence health check."
```

## Security rules

- Never store real keys in `AGENTS.md`.
- Never paste keys into committed docs or example reports.
- Never print keys in logs.
- Never put keys in screenshots.
- If a key was pasted into chat, issue tracker, commit, or report, treat it as compromised and rotate it.
- Prefer separate keys per environment and minimum required permissions.

## Recommended local files

```text
.env.local                 # real local secrets, ignored by git
~/.config/ai-projects/...  # optional private machine-level config
OS keychain                # best for long-lived personal secrets
```

## Troubleshooting

- 401: API key invalid, missing, revoked, or not accepted by the gateway.
- 404: API mode path not supported by your endpoint. Try `OPENAI_API_MODE=chat-completions`.
- 429: rate limit or insufficient quota.
- TLS/network error: proxy, DNS, firewall, or endpoint availability.
- Empty response: model name mismatch or gateway incompatibility.
