#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const profile = process.argv[2];
if (!profile) {
  const profiles = fs.readdirSync('project-profiles')
    .filter((file) => file.endsWith('.md') && file !== 'README.md')
    .map((file) => file.replace(/\.md$/, ''));
  console.error('Usage: npm run init:profile -- <profile-name>');
  console.error('Available profiles:');
  for (const item of profiles) console.error(`- ${item}`);
  process.exit(1);
}

const source = path.join('project-profiles', `${profile}.md`);
if (!fs.existsSync(source)) {
  console.error(`Unknown project profile: ${profile}`);
  process.exit(1);
}

const target = 'PROJECT_PROFILE.md';
if (fs.existsSync(target)) {
  const backup = `PROJECT_PROFILE.${new Date().toISOString().replaceAll(':', '-').replaceAll('.', '-')}.bak.md`;
  fs.copyFileSync(target, backup);
  console.log(`Existing PROJECT_PROFILE.md backed up to ${backup}`);
}

const content = fs.readFileSync(source, 'utf8');
fs.writeFileSync(target, `${content}\n\n---\n\nGenerated from \`${source}\`. Review and customize before using in a real project.\n`);
console.log(`Initialized ${target} from ${source}`);
