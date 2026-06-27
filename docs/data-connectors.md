# Data Connectors and Evidence Layer

This framework can guide many industries, but it cannot produce reliable operational or financial conclusions without data. A domain pack defines the reasoning pattern; a connector supplies evidence.

## Connector types

| Data source | Typical use | Notes |
|---|---|---|
| CSV / Excel export | Alibaba data, category reports, ad reports, product data, stock OHLCV, CRM export | Safest starting point; reproducible and auditable. |
| Database | Internal product, order, visitor, customer, or event data | Requires schema and read-only credentials. |
| Official API | Market data, CRM, e-commerce, analytics, ad platforms | Prefer official APIs over scraping. |
| Browser automation | Platforms without adequate export/API | Must respect terms, rate limits, and account security. |
| Web search / public pages | Competitor research, prospect websites, public company info | Cite sources and record timestamps. |
| Local AI endpoint | Model inference through OpenAI-compatible gateway | Store base URL and key only in `.env.local` or OS keychain. |

## Evidence hierarchy

1. User-provided source files and exports.
2. Official APIs and authenticated platform exports.
3. Internal databases and logs.
4. Public official sources.
5. Current web sources.
6. Model memory.

Do not use model memory for prices, rankings, traffic, stock state, customer records, or platform metrics.

## Required metadata

Every imported dataset should record:

- Source.
- Export time.
- Covered date range.
- Time zone.
- Currency.
- Granularity.
- Known missing fields.
- Transformation steps.
- Owner or reviewer.

## Connector safety

- Use read-only credentials where possible.
- Do not store cookies, sessions, or credentials in the repo.
- Do not scrape private areas without authorization.
- Do not bypass platform restrictions.
- Redact secrets from logs and reports.
- Treat customer messages, contact information, and trading records as private data.

## Local connector environment

Use `.env.local` for local-only configuration:

```env
OPENAI_BASE_URL="https://api.openai.com/v1"
OPENAI_API_KEY="key"
OPENAI_MODEL="gpt-5.5"
OPENAI_API_MODE="responses"

# Optional examples for future projects; keep blank in public repo.
MARKET_DATA_PROVIDER=""
MARKET_DATA_API_KEY=""
CRM_EXPORT_PATH=""
ALIBABA_EXPORT_PATH=""
ANALYTICS_EXPORT_PATH=""
```

