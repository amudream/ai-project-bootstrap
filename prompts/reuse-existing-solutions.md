# Reuse Existing Solutions Prompt

Use this when you want the agent to avoid reinventing solved problems.

```text
Before implementing from scratch, actively check whether this problem already has a credible existing solution: built-in platform feature, current repository pattern, official SDK, standard protocol, maintained package, or open-source GitHub project.

Default to reusing proven solutions when they are lower risk than custom implementation. Do not ask me for confirmation for low-risk workspace-local dependency installation that uses the existing package manager, is clearly needed, has a compatible license, and does not require secrets, sudo, system services, paid accounts, production changes, or architectural replacement.

Ask for approval before global installs, sudo/system packages, remote install scripts, paid services, cloud resources, model/data downloads, framework replacement, database migrations, unclear licenses, or security/privacy/finance-sensitive integrations.

For every external solution considered, compare fit, maintenance, license, security, integration cost, footprint, and testability. If you add a dependency, update the lockfile, run validation, and explain why the dependency is justified.

Final output must include a Reuse / dependency decision section.
```
