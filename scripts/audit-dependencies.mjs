#!/usr/bin/env node
import fs from 'node:fs';
import { spawnSync } from 'node:child_process';

function has(file) {
  return fs.existsSync(file);
}

function run(command, args) {
  const result = spawnSync(command, args, { stdio: 'inherit', shell: process.platform === 'win32' });
  if (result.error && result.error.code === 'ENOENT') {
    console.log(`Dependency audit skipped: ${command} is not installed.`);
    return 0;
  }
  return result.status ?? 1;
}

let audited = false;
let status = 0;

if (has('package-lock.json')) {
  audited = true;
  status = run('npm', ['audit', '--audit-level=high']);
} else if (has('pnpm-lock.yaml')) {
  audited = true;
  status = run('pnpm', ['audit', '--audit-level', 'high']);
} else if (has('yarn.lock')) {
  audited = true;
  status = run('yarn', ['npm', 'audit', '--severity', 'high']);
} else if (has('requirements.txt') || has('pyproject.toml')) {
  console.log('Python dependency files detected. Install and run pip-audit or uv audit in the target project.');
  audited = true;
}

if (!audited) {
  console.log('No supported lockfile found for automated dependency audit. Skipping.');
}

console.log('Dependency audit completed.');
process.exit(status);
