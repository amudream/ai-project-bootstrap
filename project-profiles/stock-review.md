# Project Profile: Stock Screening and Review

## Objective

Build an AI-assisted stock research and market replay system that screens setups, labels observable structures, visualizes price/volume behavior, records hypotheses, and evaluates results with data.

## Primary docs and skills

- `docs/domain-packs/stock-review.md`
- `docs/finance-safety.md`
- `.agents/skills/stock-review/SKILL.md`

## Required datasets

- OHLCV bars.
- Turnover/amount.
- Limit-up/limit-down event data where relevant.
- Sector/concept tags.
- Index and sector regime data.
- News/announcement data if used.
- User-defined strategy and risk rules.

## Key metrics

- Return distribution after trigger.
- Hit rate.
- False-positive rate.
- Maximum drawdown.
- Risk/reward.
- Turnover and liquidity.
- Theme/sector strength.
- Continuation probability after limit-up, if backtested.

## Report visuals

- Annotated candlestick chart.
- Volume/turnover panel.
- Sector heatmap.
- Limit-up history timeline.
- Watchlist score distribution.
- Backtest equity and drawdown curves.

## Forbidden behavior

- Do not fabricate current market data.
- Do not guarantee buy points or continuation.
- Do not label “吸筹” as fact without observable evidence.
- Do not omit invalidation, drawdown, slippage, and liquidity.

