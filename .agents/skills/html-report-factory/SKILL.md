---
name: html-report-factory
description: Use when creating or improving HTML reports, dashboards, visual executive summaries, industry-specific data reports, KPI reports, or decision-support artifacts.
---

# HTML Report Factory Skill

## Goal

Produce reports that improve visual understanding. Avoid styled markdown.

## Required checks

1. Is there structured data?
2. Are key changes shown visually?
3. Is movement shown with charts or flows?
4. Are risks shown as matrix/heatmap rather than prose only?
5. Is the report adapted to the industry?
6. Are assumptions, data sources, and limitations visible?
7. Does the report support decisions?
8. Are secrets and private raw data excluded?

## Visual selection

- Trend: line chart.
- Flow: Sankey-like SVG or waterfall.
- Risk: heatmap or probability-impact matrix.
- Portfolio/capital: allocation map and rotation flow.
- Funnel: stage progression.
- Operations: kanban/timeline/dependency view.

## Procedure

1. Validate or define report data schema.
2. Select industry lens.
3. Generate or update HTML.
4. Generate static output.
5. Inspect the output artifact if possible.
6. Run secret checks.
7. Report changed files and validation.
