#!/usr/bin/env node

const [name] = process.argv.slice(2);
if (!name) {
  console.error('Usage: npm run dep:evaluate -- <package-or-project-name>');
  process.exit(1);
}

const report = {
  need: 'Describe the capability this dependency would provide before adopting it.',
  selectedOption: name,
  alternativesChecked: [],
  reason: '',
  license: 'Check package metadata or repository LICENSE before adding.',
  maintenanceSignal: 'Check recent releases, commits, issues, and adoption.',
  securityCheck: 'Run package-manager audit and check advisories where available.',
  risk: 'Assess transitive dependencies, postinstall scripts, native binaries, telemetry, and lock-in.',
  verification: 'After adoption, run tests, lint/typecheck/build, audit, and secret scan.',
  exitPlan: 'Document how to replace or remove the dependency if it becomes unsafe or unmaintained.'
};

console.log(JSON.stringify(report, null, 2));
