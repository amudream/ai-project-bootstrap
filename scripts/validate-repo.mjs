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
  'docs/final-solution.md',
  'docs/openai-principles.md',
  'docs/loop-engineering.md',
  'docs/report-design.md',
  'docs/reuse-and-dependency-policy.md',
  'docs/profile-routing.md',
  'project-profiles/README.md',
  'reports/sample-data.json',
  'reports/domain-report-blueprints.md',
  'schemas/report.schema.json',
  'scripts/check-no-secrets.mjs',
  'scripts/render-report.mjs',
  'scripts/validate-schemas.mjs',
  'scripts/validate-skills.mjs',
  'scripts/validate-profile-routing.mjs',
  'scripts/init-project-profile.mjs',
  'scripts/ai-call.mjs',
  'scripts/audit-dependencies.mjs'
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

const profiles = fs.readdirSync('project-profiles').filter((file) => file.endsWith('.md') && file !== 'README.md');
if (profiles.length < 5) {
  console.error('Repository validation failed. Expected domain project profiles.');
  process.exit(1);
}

console.log('Repository structure validation passed.');
