#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const root = '.agents/skills';
const skillFiles = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name === 'SKILL.md') skillFiles.push(full);
  }
}

walk(root);
if (!skillFiles.length) {
  console.error('No SKILL.md files found.');
  process.exit(1);
}

let failed = false;
for (const file of skillFiles) {
  const text = fs.readFileSync(file, 'utf8');
  if (!text.startsWith('---')) {
    console.error(`${file} is missing frontmatter.`);
    failed = true;
  }
  if (!/^name:\s*.+$/m.test(text)) {
    console.error(`${file} is missing name metadata.`);
    failed = true;
  }
  if (!/^description:\s*.+$/m.test(text)) {
    console.error(`${file} is missing description metadata.`);
    failed = true;
  }
}

if (failed) process.exit(1);
console.log(`Skill metadata validation passed for ${skillFiles.length} skills.`);
