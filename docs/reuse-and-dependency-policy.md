# Reuse and Dependency Policy

This policy tells agents when to search for existing solutions, when to reuse open-source software, and when dependency installation can proceed without user confirmation.

## Core principle

Prefer proven reuse over unnecessary reinvention, but treat every dependency as supply-chain risk. A package is not automatically acceptable because it is popular, and custom code is not automatically better because it avoids dependencies. Choose the option with the best balance of correctness, maintainability, security, license compatibility, operational cost, and exit cost.

## When the agent must search for existing solutions

Before implementing a non-trivial feature, the agent should look for existing solutions when any of the following are true:

- The feature is common infrastructure: auth, payments, email, charts, forms, scraping, crawling, scheduling, database access, validation, logging, observability, queueing, file conversion, report rendering, or API clients.
- The task mentions a platform with known SDKs or APIs: Alibaba, Shopify, Stripe, GitHub, Google, OpenAI, X/Twitter, CRM systems, stock data providers, analytics platforms, cloud providers.
- The task would require complex protocol work, security-sensitive logic, parsing, cryptography, file formats, or browser automation.
- The user asks for speed, robustness, or production readiness.
- The repository already uses a library family or framework that likely has a plugin or official integration.

The agent should compare at least two approaches when practical:

1. Native platform capability or standard library.
2. Official SDK or first-party package.
3. Mature third-party library.
4. Existing GitHub project or template.
5. Custom implementation.

## Build-vs-buy decision record

When adding a dependency or adopting an open-source project, record a concise decision:

```markdown
## Dependency decision

- Need: [what problem must be solved]
- Selected option: [package/project/version]
- Alternatives checked: [option A, option B, custom]
- Reason: [why this option wins]
- License: [license and compatibility]
- Maintenance signal: [recent release, issue health, maintainers, usage]
- Security check: [audit/advisory/scorecard/manual review]
- Risk: [transitive deps, postinstall, native code, API stability, lock-in]
- Verification: [commands/tests run]
- Exit plan: [how to replace/remove if needed]
```

For small dev-only utilities, this can be one paragraph in the final response. For production dependencies, use `docs/decision-record-template.md` or `schemas/dependency-decision.schema.json`.

## Installation policy

### Allowed without user confirmation

The agent may run these locally without asking first, as long as the operation is confined to the workspace and does not expose secrets:

- Restore existing dependencies from project manifests or lockfiles.
- Run package-manager install commands required by the repository instructions.
- Install a missing dependency already declared in the manifest.
- Add a low-risk dev dependency needed for tests, linting, formatting, schema validation, local report rendering, or code generation.
- Add a low-risk runtime dependency when it is clearly necessary, well-maintained, license-compatible, and materially safer or more correct than writing custom code.

The agent must update lockfiles when the package manager creates them and must run relevant verification afterward.

### Requires confirmation

The agent must ask before doing any of the following:

- Global installs, system package installs, kernel/driver changes, shell profile changes, or PATH mutations.
- Docker daemon changes, long-running local services, database servers, message brokers, browser extensions, or background agents.
- Dependencies requiring API keys, OAuth credentials, private registry tokens, billing, paid accounts, cloud resources, or external login.
- Packages with unclear provenance, very low adoption, recent ownership transfer, suspicious names, typosquatting risk, or weak documentation.
- Packages with native binaries, postinstall downloads, dynamic code loading, telemetry, or broad filesystem/network permissions.
- Security-sensitive dependencies for auth, crypto, payment, finance, browser automation, scraping at scale, or user data handling unless the package is official or strongly justified.
- License-incompatible dependencies, copyleft dependencies in incompatible projects, or packages with missing/ambiguous licenses.
- Replacing the project’s package manager, framework, build system, database, or architectural foundation.

### Never allowed

The agent must not:

- Commit real tokens, credentials, cookies, private registry config, `.env.local`, or machine-local auth files.
- Hide dependency changes in unrelated diffs.
- Claim a security scan or test passed unless it actually ran.
- Install a package only because it has many stars.
- Add a large framework for a small local problem without comparison.

## Evaluation checklist

Use this checklist before adopting a dependency or GitHub project:

- Fit: solves the exact problem with minimal glue code.
- Officialness: first-party SDK or platform-recommended integration when available.
- Maintenance: recent releases, active commits, issue response, changelog, stable maintainers.
- Security: known vulnerabilities, advisory history, OpenSSF Scorecard when applicable, signed releases or provenance if available.
- License: compatible with the project and distribution model.
- Dependency weight: reasonable transitive dependency tree.
- Runtime behavior: no unexpected telemetry, broad permissions, postinstall downloads, shell execution, or secret capture.
- Stability: semantic versioning, stable APIs, migration notes.
- Testability: can be mocked, tested, and removed.
- Exit cost: feasible replacement path.

## Package-manager defaults

Respect the repository’s existing package manager and lockfile. Do not switch package managers unless explicitly requested.

Examples:

- Node.js: prefer `npm ci` when `package-lock.json` exists in CI or clean installs; use `npm install <pkg>` only when intentionally adding a dependency.
- pnpm: prefer `pnpm install --frozen-lockfile` for restore and `pnpm add` for intentional additions.
- Yarn: respect the existing Yarn major version and lockfile.
- Python: respect `requirements.txt`, `pyproject.toml`, `poetry.lock`, or `uv.lock`; do not mix Poetry, pipenv, uv, and raw pip without reason.
- Go: use `go mod tidy` only when module changes require it.
- Rust: respect `Cargo.lock`; use `cargo add` if available or edit `Cargo.toml` carefully.

## Verification after dependency changes

After dependency changes, run the strongest relevant checks available:

- Unit/integration tests.
- Typecheck, lint, build.
- Package-manager audit when available.
- License check if available.
- Smoke test of the feature that required the dependency.
- Secret scan before committing.

If a check cannot be run, state why and provide the exact command the user should run.

## Final response requirements

When dependencies or external projects are used, the final response must include:

- What was reused or installed.
- Why it was chosen over alternatives or custom code.
- Whether lockfiles changed.
- What validation ran.
- Any security, license, compatibility, or maintenance risk.
