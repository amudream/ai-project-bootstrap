# OpenAI Practice Synthesis

This document condenses current OpenAI developer guidance into reusable project rules. It is not a verbatim mirror of every article; it is a practical synthesis for this starter framework.

## Durable project guidance: AGENTS.md

OpenAI Codex reads `AGENTS.md` before work begins. Guidance can be layered globally and per project; files closer to the working directory override earlier guidance. Therefore, `AGENTS.md` should hold durable project rules: build commands, test commands, conventions, review expectations, and definition of done.

Sources:
- https://developers.openai.com/codex/guides/agents-md
- https://developers.openai.com/codex/concepts/customization

Framework rule:
- Keep `AGENTS.md` compact and operational.
- Put large reusable workflows into Skills or docs.
- Put project-specific goals into `PROJECT_CHARTER.md`.

## Skills: progressive disclosure for reusable workflows

OpenAI Codex Skills package instructions, resources, optional scripts, references, assets, and specialized agent workflows. Skills use progressive disclosure: the model initially sees the skill name, description, and path, and loads the full instructions only when relevant.

Sources:
- https://developers.openai.com/codex/skills
- https://developers.openai.com/codex/use-cases/reusable-codex-skills

Framework rule:
- Use Skills for repeatable workflows: deep review, research, report generation, requirement clarification, loop engineering, local AI integration.
- Keep descriptions specific so the agent can select the right skill.

## Subagents: parallel specialist review

OpenAI Codex can spawn subagents when explicitly asked. This is useful for broad reviews where independent dimensions can be analyzed in parallel, such as security, bugs, architecture, maintainability, and tests.

Source:
- https://developers.openai.com/codex/subagents

Framework rule:
- Use subagents for high-risk or broad tasks.
- The orchestrator must synthesize, deduplicate, rank, and convert findings into a single execution plan.

## Tool use and function calling

OpenAI guidance treats tools as the way models access external data, actions, and systems. Function calling lets models interface with application functionality; built-in tools and remote MCP can extend agents with search, file retrieval, or external services.

Sources:
- https://developers.openai.com/api/docs/guides/tools
- https://developers.openai.com/api/docs/guides/function-calling
- https://developers.openai.com/api/docs/guides/agents

Framework rule:
- Use tools when the answer depends on current, external, private, project-specific, or executable information.
- Do not pretend tool results were inspected if they were not.

## Structured outputs

OpenAI Structured Outputs ensure model responses adhere to a JSON Schema. This is preferable to “please output JSON” prompts when downstream code expects reliable fields.

Source:
- https://developers.openai.com/api/docs/guides/structured-outputs

Framework rule:
- Use schemas for reports, eval results, task plans, risk registers, and agent handoffs.
- Human-facing reports can be HTML, but the underlying data should remain structured.

## Loop engineering

OpenAI’s agent improvement loop connects traces, human feedback, evals, analysis, and code changes. The durable insight is that agents improve when real behavior, feedback, testing, and implementation are connected in a loop.

Sources:
- https://developers.openai.com/cookbook/examples/agents_sdk/agent_improvement_loop
- https://developers.openai.com/cookbook/examples/codex/build_iterative_repair_loops_with_codex
- https://developers.openai.com/codex/use-cases/iterate-on-difficult-problems

Framework rule:
- Define success metrics before improvement begins.
- Run baseline evals.
- Make one focused change per iteration.
- Re-run evals.
- Keep a running loop log.
- Stop only when explicit thresholds are met or constraints are reached.

## Prompting and verbosity

OpenAI prompt guidance emphasizes clear success criteria, task context, output shape, persistence, and explicit reasoning/verbosity controls. Prompt optimizers and model-specific prompting guides are useful, but prompt clarity still matters.

Sources:
- https://developers.openai.com/api/docs/guides/prompt-guidance
- https://developers.openai.com/cookbook/examples/gpt-5/gpt-5_prompting_guide
- https://developers.openai.com/cookbook/examples/gpt-5/gpt-5-2_prompting_guide
- https://developers.openai.com/api/docs/guides/latest-model

Framework rule:
- Tell the agent whether the task values completeness, speed, or cost.
- For serious work, ask for assumptions, alternatives, risks, verification, and anti-drift checks.
- Avoid vague phrases such as “do your best” unless paired with concrete acceptance criteria.

## Anti-sycophancy

OpenAI has publicly discussed sycophancy as an issue where a model becomes overly agreeable or validating. Project agents should be helpful without merely reinforcing the user’s assumptions.

Sources:
- https://openai.com/index/sycophancy-in-gpt-4o/
- https://openai.com/index/expanding-on-sycophancy/

Framework rule:
- The agent should identify disagreement, missing evidence, weak assumptions, and strategic blind spots.
- “Supportive” means helping the project succeed, not flattering the user.

## Model optimization flywheel

OpenAI model optimization guidance emphasizes evals, prompts, representative test data, feedback, and tuning where appropriate.

Source:
- https://developers.openai.com/api/docs/guides/model-optimization

Framework rule:
- Treat prompts as versioned project assets.
- Evaluate behavior with representative cases.
- Use failures to improve prompts, tools, schemas, and tests.
