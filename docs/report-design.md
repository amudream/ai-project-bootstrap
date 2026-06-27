# HTML Report Design System

A modern HTML report should not be markdown with CSS. It should compress complexity into visual reasoning.

## Report goals

A report should answer:

1. What changed?
2. Why did it change?
3. How large was the movement?
4. What are the leading indicators?
5. What should be done?
6. What is uncertain?
7. What evidence supports the conclusion?

## Required visual primitives

Use the primitives that match the problem:

| Problem type | Better visual |
|---|---|
| Growth / decline | Time-series line chart, area chart, sparkline |
| Funding / capital movement | Flow diagram, waterfall, allocation map |
| Funnel conversion | Funnel or stage progression |
| Segment performance | Heatmap, small multiples |
| Risk | Probability-impact matrix, heatmap |
| Project execution | Timeline, dependency graph, kanban |
| Portfolio allocation | Treemap, stacked bar, flow |
| Anomaly | Control chart, highlighted outlier |
| Comparison | Bar chart, dumbbell chart, index chart |

## Industry lenses

### SaaS

- MRR / ARR
- Net revenue retention
- Logo churn
- Activation
- CAC payback
- Expansion revenue
- Cohort retention

### E-commerce

- GMV
- Conversion rate
- AOV
- Refund rate
- Inventory turnover
- Traffic source quality
- Contribution margin

### Finance / trading / capital allocation

- Capital inflow/outflow
- Drawdown
- Rotation by sector/asset
- Risk exposure
- Volatility
- Liquidity
- Correlation

### Content / media

- Reach
- Watch time
- Retention curve
- Subscriber growth
- Content topic clusters
- Funnel from impression to conversion

### Engineering

- Lead time
- Deployment frequency
- Change failure rate
- MTTR
- Test coverage
- Defect escape rate
- Dependency risk

## Interaction rules

Use interaction when it improves reasoning:

- Filter by industry or segment.
- Sort findings by severity or impact.
- Expand evidence details.
- Toggle absolute vs percentage change.
- Highlight anomalies.
- Compare current vs baseline.

Do not add animation or decoration that hides the message.

## Data contract

Reports should be generated from structured data. See `schemas/report.schema.json` and `reports/sample-data.json`.

## Local generation

```bash
npm run report
open reports/report-output.html
```
