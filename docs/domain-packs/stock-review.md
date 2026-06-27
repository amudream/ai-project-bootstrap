# Domain Pack: Stock Screening and Review

Use this pack for stock screening, market replay, watchlist building, pattern labeling, and strategy review. It is for research, education, and tooling. It must not fabricate current market data or guarantee returns.

## Primary objectives

- Identify observable market structures and produce watchlist hypotheses.
- Convert vague trading language into measurable criteria.
- Review what happened, what worked, what failed, and what should be tested.
- Build reproducible stock analysis reports rather than impressionistic commentary.

## Typical tasks

- Screen stocks approaching a user-defined setup.
- Review limit-up stocks and continuation structures.
- Identify “涨停基因” as a historical behavior score, not a supernatural attribute.
- Label states: active, limit-up, pullback, consolidation, volume expansion, failed breakout, re-breakout, trend continuation.
- Analyze sector rotation and capital flow where data is available.
- Build a trading journal or replay report.
- Generate watchlists with invalidation rules.

## Required inputs

Minimum data:

- Symbol and exchange.
- Date range.
- OHLCV bars.
- Turnover / amount.
- Limit-up and limit-down status if relevant.
- Sector and concept tags.
- Market index and sector index data.

Optional data:

- Intraday bars.
- News and announcements.
- Corporate actions.
- Order flow / dragon-tiger list if available.
- Historical limit-up sequence data.
- User-defined strategy rules.

## Convert language into observable proxies

| User phrase | Safer measurable proxy |
|---|---|
| 涨停基因 | Historical frequency of limit-up events, continuation after first board, participation in strong themes, liquidity and volatility conditions. |
| 吸筹 | Repeated support holding, volatility compression, controlled pullbacks, volume distribution, relative strength versus sector. Label as hypothesis, not fact. |
| 放量增长 | Volume/amount percentile versus N-day baseline, price range expansion, close position within candle. |
| 震荡回落 | Pullback depth, duration, volume contraction/expansion, support levels, sector regime. |
| 突破 | Close above resistance, volume confirmation, failed-breakout risk, follow-through next bars. |
| 买点 | A hypothesis trigger with entry condition, invalidation, risk, and test result; not a guaranteed instruction. |

## Analysis protocol

1. Define the universe and date range.
2. Define the setup in measurable terms.
3. Calculate features: trend, volume, turnover, range, volatility, sector strength, prior limit-up history, distance to resistance/support.
4. Label current state with evidence.
5. Rank candidates by setup quality, liquidity, theme strength, and risk.
6. Include invalidation rules and false-positive risks.
7. Backtest or replay when possible.
8. Produce a report with annotated charts, sector context, and watchlist table.

## Example state machine

```text
Dormant -> Volume expansion -> First breakout -> Pullback / shakeout -> Re-breakout -> Limit-up continuation -> Exhaustion / failed continuation
```

Do not force every stock into this structure. The report should say “no valid setup” when evidence is insufficient.

## Report visuals

- Candlestick chart with annotated setup events.
- Volume and turnover panels.
- Sector heatmap.
- Limit-up history timeline.
- Watchlist score distribution.
- Risk table with invalidation levels.
- Backtest equity curve and drawdown if strategy is tested.

## Output standards

Each candidate should include:

- Symbol.
- Date/time of analysis.
- Setup label.
- Evidence.
- Trigger condition.
- Invalidation condition.
- Risk notes.
- Data freshness.
- Whether this is backtested, visually reviewed, or unverified.

