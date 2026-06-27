---
name: stock-review
description: Use for stock screening, market replay, watchlist construction, limit-up analysis, setup labeling, backtesting, and trading-journal style review.
---

# Stock Review Skill

This skill supports research and analysis tooling. It does not provide guaranteed predictions or personalized investment advice.

## Required context

Before ranking or labeling stocks, inspect or request:

- Date range and universe.
- OHLCV data.
- Turnover/amount data.
- Limit-up/limit-down rules and events where relevant.
- Sector/concept data.
- Market regime data.
- User-defined risk rules or strategy rules.

If current market data is not available, say so and restrict the answer to methodology or historical/replay analysis.

## Workflow

1. Convert the user’s language into measurable setup criteria.
2. Check data freshness and coverage.
3. Compute or request the features needed for the setup.
4. Label market state with evidence, not intuition.
5. Rank candidates by setup quality, liquidity, theme strength, and risk.
6. Add trigger, invalidation, and false-positive notes.
7. Backtest or replay if data and rules permit.
8. Produce a charted report when decisions depend on price/volume movement.

## Required output per candidate

- Symbol.
- Analysis timestamp.
- Setup label.
- Evidence.
- Trigger hypothesis.
- Invalidation condition.
- Risk.
- Data freshness.
- Verification status: backtested, replayed, visually reviewed, or unverified.

## Red flags

- Do not state “吸筹” as fact without observable proxies.
- Do not claim a buy point exists without invalidation and risk.
- Do not ignore drawdown, liquidity, slippage, and regime risk.
- Do not fabricate prices, limit-up status, or news.
