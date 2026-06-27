#!/usr/bin/env node
import fs from 'node:fs';

const required = [
  'AGENTS.md',
  'PROJECT_CHARTER.md',
  'README.md',
  'package.json',
  '.env.example',
  '.gitignore',
  '.github/workflows/validate.yml',
  'docs/openai-principles.md',
  'docs/loop-engineering.md',
  'docs/report-design.md',
  'docs/reuse-and-dependency-policy.md',
  'project-profiles/README.md',
  'reports/sample-data.json',
  'scripts/check-no-secrets.mjs',
  'scripts/render-report.mjs'
];

const missing = required.filter((file) => !fs.existsSync(file));
if (missing.length) {
  console.error('Repository validation failed. Missing required files:');
  for (const file of missing) console.error(`- ${file}`);
  process.exit(1);
}

const skillsDir = '.agents/skills';
if (!fs.existsSync(skillsDir)) {
  console.error('Repository validation failed. Missing .agents/skills directory.');
  process.exit(1);
}

console.log('Repository structure validation passed.');
