# Maximum Optimization Backlog

This backlog is intentionally broad. Use it to distribute work across subagents or to run a one-pass project audit.

## 1. Instruction architecture

- Separate global, project, and directory-level instructions.
- Keep `AGENTS.md` concise and enforceable.
- Move large workflows into Skills.
- Add an anti-drift rule tied to `PROJECT_CHARTER.md`.
- Add an anti-sycophancy rule requiring evidence-based disagreement.
- Add final response formats by task type.
- Add explicit verification requirements.
- Add “do not fabricate validation” rule.
- Add “complete locally before suggesting next steps” rule.
- Add a scope escalation rule for broad changes.

## 2. Prompt system

- Maintain prompts as versioned files.
- Add universal high-integrity prompt.
- Add requirement clarification prompt.
- Add multi-agent orchestration prompt.
- Add report generation prompt.
- Add deep review prompt.
- Add local AI diagnostic prompt.
- Add prompt review rubric.
- Add prompt changelog.
- Add prompt eval cases.

## 3. Requirement clarity

- Create a project charter before implementation.
- Define non-goals.
- Define acceptance criteria.
- Define user persona and stakeholder map.
- Define constraints.
- Define measurable success metrics.
- Define “unknowns that matter.”
- Define assumptions and what would invalidate them.
- Define review cadence.
- Define decision records.

## 4. Context and knowledge retrieval

- Add docs routing rules.
- Add source hierarchy: project files > official docs > current web > memory.
- Add stale-fact detection.
- Add citation requirements for research tasks.
- Add local knowledge index.
- Add file search workflow.
- Add artifact inspection workflow for visual outputs.
- Add domain glossary.
- Add data dictionary.
- Add architecture map.

## 5. Tool use

- Add environment-based API configuration.
- Add OpenAI-compatible wrapper.
- Add Responses API mode.
- Add Chat Completions fallback.
- Add function calling schema examples.
- Add structured output schemas.
- Add MCP integration notes.
- Add tool failure handling.
- Add retry and timeout rules.
- Add cost and latency controls.

## 6. Local AI support

- Support `OPENAI_BASE_URL`.
- Support `OPENAI_API_KEY`.
- Support `OPENAI_MODEL`.
- Support `OPENAI_API_MODE`.
- Add `.env.local` initialization.
- Add `.gitignore` protection.
- Add local endpoint health check.
- Add model compatibility matrix.
- Add routing by task complexity.
- Add logs with secrets redacted.

## 7. Security

- Add secret scanner.
- Add GitHub Actions validation.
- Add `.env.example` only.
- Add rotation policy.
- Add least-privilege API key guidance.
- Add no-secrets-in-report rule.
- Add no-secrets-in-prompt rule.
- Add no-private-data-in-sample-data rule.
- Add dependency audit step.
- Add human approval for high-impact actions.

## 8. Reports and visualization

- Add report schema.
- Add static HTML report template.
- Add KPI cards.
- Add time-series chart.
- Add flow visualization.
- Add risk heatmap.
- Add sortable findings table.
- Add industry lens switcher.
- Add decision log section.
- Add data provenance section.
- Add exportable single-file output.
- Add visual rubric.
- Add accessibility checks.
- Add print/PDF-friendly CSS.
- Add mobile layout.

## 9. Evals and quality gates

- Add deterministic evals.
- Add LLM judge rubrics.
- Add baseline recording.
- Add loop log.
- Add score thresholds.
- Add regression cases.
- Add report quality rubric.
- Add anti-drift rubric.
- Add hallucination and citation checks.
- Add schema validation.
- Add CI quality gate.

## 10. Multi-agent work allocation

- Agent: requirements.
- Agent: architecture.
- Agent: implementation.
- Agent: security.
- Agent: data and metrics.
- Agent: reports and visualization.
- Agent: testing and evals.
- Agent: documentation.
- Agent: operations.
- Agent: user challenge / red team.

## 11. Documentation

- Add README quickstart.
- Add GitHub publishing guide.
- Add project charter guide.
- Add local AI setup guide.
- Add report design guide.
- Add skill authoring guide.
- Add prompt library guide.
- Add contribution guide.
- Add decision record template.
- Add troubleshooting guide.

## 12. Operating cadence

- Start every project with charter.
- Run context gathering before implementation.
- Run validation before final response.
- Log major decisions.
- Update charter when strategy changes.
- Use evals for repeated work.
- Use report artifacts for stakeholder review.
- Convert repeated successful workflows into Skills.
- Keep generated artifacts inspectable.
- Review secrets before publishing.

## Dependency and open-source reuse

- Search for existing repository utilities, official SDKs, mature packages, and GitHub projects before custom implementation.
- Prefer package-manager installation over vendoring code.
- Add low-risk workspace dependencies autonomously when needed; require approval for high-risk or system-level installs.
- Maintain lockfiles, run dependency audits where available, and document significant dependency decisions.


## Dependency and reuse optimization

- Add dependency decision records for every non-trivial new package or reused open-source project.
- Prefer official SDKs and maintained packages over custom implementations when the external solution is safer and more complete.
- Add package audits and license checks to CI when the project starts adding production dependencies.
- Track dependency bloat, runtime cost, bundle size, install scripts, and security advisories in reports when relevant.
- Build domain-specific connector adapters instead of hard-coding platform logic into prompts.
