# Loop Engineering Playbook

Loop engineering is the practice of connecting production behavior, traces, feedback, evals, repair, and implementation into one improvement loop. It is the opposite of one-off prompt tweaking.

## The loop

```text
Goal -> Baseline -> Trace -> Evaluate -> Diagnose -> Repair -> Validate -> Log -> Repeat -> Ship
```

## Step 1: Define the target

A task must have explicit success criteria before an agent begins optimizing.

Bad:

```text
Make this report better.
```

Good:

```text
Improve the report until:
- It explains the top 3 drivers of change.
- It includes at least one time-series chart and one flow visualization.
- It includes a risk heatmap.
- It passes the visual-report rubric with score >= 90.
- It contains no secrets or private raw data.
```

## Step 2: Baseline

Record the initial state before making changes:

- Current score.
- Current artifact path.
- Known failures.
- Relevant commands.
- Date/time.

Use `logs/loop-log.md` or a project-specific log.

## Step 3: Evaluate

Combine deterministic checks with judgment checks.

Deterministic examples:

- Schema validation.
- Test pass/fail.
- Chart count.
- Missing required sections.
- Secret scan.
- Accessibility checks.
- File size budget.

Judgment examples:

- Strategic usefulness.
- Visual clarity.
- Executive readability.
- Completeness.
- Novel insight.
- Decision support.

## Step 4: Diagnose

Identify the bottleneck. Do not change everything at once.

```text
The biggest failure is not visual polish; it is that the report lacks a causal explanation for revenue movement.
```

## Step 5: Repair

Make one focused change tied to the bottleneck.

## Step 6: Re-run evals

Save scores and compare with baseline.

## Step 7: Stop rule

Stop only when one of these is true:

- All explicit thresholds are met.
- A required external input is missing.
- A safety, permission, or cost constraint blocks progress.
- The task owner changes the objective.

## Loop log template

```markdown
# Loop Log

## Iteration 0: Baseline
- Artifact:
- Scores:
- Biggest failure:
- Evidence:

## Iteration 1
- Change made:
- Why:
- Scores before:
- Scores after:
- Improved:
- Regressed:
- Next bottleneck:
```
