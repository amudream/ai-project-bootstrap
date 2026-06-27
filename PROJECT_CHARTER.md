# Project Charter

This file preserves the original project intent so the AI does not drift into convenient but misaligned work.

## Original objective

Build a universal AI project starter framework that can be used at the beginning of any AI-assisted project. The framework should help AI agents produce richer, more complete, more critical, more useful work than shallow user prompts would normally elicit.

## Core user requirements

1. The framework should be publishable as a GitHub project.
2. It should be general-purpose across industries and project types.
3. It should encourage AI to use all relevant available knowledge, not merely mirror shallow prompts.
4. It should integrate modern OpenAI practices: AGENTS.md, Codex skills, subagents, tool use, structured output, Agents SDK concepts, evals, prompt optimization, and loop engineering.
5. It should prevent sycophantic behavior and should challenge weak assumptions.
6. It should help the user clarify needs while remembering the original need over time.
7. It should support modern HTML reports that are visual, interactive, and data-oriented, not just text rendered in a browser.
8. It should support local or OpenAI-compatible AI calls through environment configuration.
9. It should protect API keys and other secrets by default.
10. It should maximize one-pass completeness and avoid ending every task with generic next-step suggestions unless true external constraints remain.
11. It should support vertical profiles for real operating domains such as Alibaba International Station operations, customer support/CRM, stock review, independent-site outreach, and X/Twitter content operations without bloating the universal kernel.

## Project principles

- Correctness over speed.
- Evidence over confidence.
- Completion over vague advice.
- Visualization over decorative formatting.
- Explicit tradeoffs over false certainty.
- Anti-drift over novelty.
- Local reproducibility over hidden magic.
- Security by default.

## Non-goals

- Do not store real API keys in the repository.
- Do not make `AGENTS.md` a giant knowledge dump.
- Do not create reports that are only styled text.
- Do not optimize every answer for minimal token usage.
- Do not let AI simply validate the user’s existing worldview.
- Do not force every industry into the same generic workflow when domain-specific data, metrics, safety rules, and reports are required.

## Definition of done for this framework

- A new project can copy this repository and immediately use AGENTS.md, Skills, prompts, report templates, eval rubrics, and scripts.
- The framework can generate a local visual HTML report from structured data.
- The repository contains no real secrets.
- The repository includes documented local AI endpoint configuration.
- The repository includes clear GitHub publishing steps.
- The repository includes a backlog of optimizations and subagent workstreams.
- The repository includes project profiles and domain packs for common business, finance/research, outreach, content, and CRM use cases.

## Drift check questions

Before major work, answer:

1. Does this still serve the original objective?
2. Are we making the AI more useful, or merely more verbose?
3. Are we adding reusable structure, or one-off clutter?
4. Is the output verifiable?
5. Is the report more visually understandable than markdown?
6. Are secrets protected?
7. Are next actions executable locally?
