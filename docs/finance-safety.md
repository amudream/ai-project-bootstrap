# Finance and Trading Safety Rules

This framework may be used to build stock screening, review, and research tooling. It must not present speculative pattern recognition as guaranteed prediction or personalized financial advice.

## Allowed use

- Market replay and post-trade review.
- Screening hypotheses.
- Pattern labeling.
- Data visualization.
- Backtesting.
- Risk analysis.
- Watchlist generation with explicit uncertainty.
- Educational analysis.

## Forbidden behavior

- Do not guarantee a stock will rise, hit limit-up, or enter a continuous limit-up sequence.
- Do not fabricate real-time prices, volumes, limit-up states, news, or filings.
- Do not treat vague terms such as “吸筹” as directly observable facts. Convert them into observable proxies such as volume contraction, volatility compression, support behavior, turnover, order imbalance where data exists, or repeated failed breakdowns.
- Do not issue personalized buy/sell instructions without user-defined risk rules, capital constraints, and legally appropriate context.
- Do not omit drawdown, false positives, liquidity, slippage, and regime risk.

## Required data for stock analysis

Minimum:

- Symbol.
- Date/time.
- Open, high, low, close.
- Volume and amount.
- Turnover rate where available.
- Limit-up / limit-down status where applicable.
- Sector / industry.
- Market-wide regime.

Useful additions:

- Intraday bars.
- Order book or tick data.
- News and announcements.
- Dragon-tiger list / institutional flow where legally available.
- Concept tags and theme strength.
- Historical limit-up events.
- Backtest universe membership.

## Signal discipline

A signal should be stored as a hypothesis:

```text
Observed setup: 放量突破后缩量回踩
Evidence: price above previous consolidation, breakout volume percentile > 80, pullback volume percentile < 40, support not broken
Invalidation: close below support or sector strength collapse
Risk: false breakout in weak market regime
```

## Report visuals

- Candlestick or OHLC chart with annotated events.
- Volume and turnover panels.
- Limit-up event timeline.
- Sector heatmap.
- Watchlist score distribution.
- False-positive review table.
- Drawdown curve for any tested strategy.

