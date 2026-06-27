#!/usr/bin/env node
import fs from 'node:fs';

const file = 'evals/cases/domain-routing-cases.jsonl';
if (!fs.existsSync(file)) {
  console.error(`Missing ${file}`);
  process.exit(1);
}

const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/).filter(Boolean);
if (!lines.length) {
  console.error('No domain routing eval cases found.');
  process.exit(1);
}

let failed = false;
for (const [index, line] of lines.entries()) {
  let item;
  try {
    item = JSON.parse(line);
  } catch (error) {
    console.error(`Invalid JSONL at line ${index + 1}: ${error.message}`);
    failed = true;
    continue;
  }
  const profilePath = `project-profiles/${item.expected_profile}.md`;
  if (!fs.existsSync(profilePath)) {
    console.error(`Missing expected profile for case ${item.id}: ${profilePath}`);
    failed = true;
  }
  for (const required of item.must_load ?? []) {
    if (!fs.existsSync(required)) {
      console.error(`Missing must_load path for case ${item.id}: ${required}`);
      failed = true;
    }
  }
}

if (failed) process.exit(1);
console.log(`Profile routing validation passed for ${lines.length} cases.`);
