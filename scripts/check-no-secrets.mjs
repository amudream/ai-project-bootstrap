#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const ignoreDirs = new Set(['.git', 'node_modules', 'dist', 'build', 'coverage', '.cache', '.tmp']);
const ignoreFiles = new Set(['package-lock.json']);
const patterns = [
  { name: 'OpenAI-style key', re: /sk-[A-Za-z0-9_-]{20,}/g },
  { name: 'GitHub token', re: /gh[pousr]_[A-Za-z0-9_]{30,}/g },
  { name: 'JWT', re: /eyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}/g },
  { name: 'Private key block', re: /-----BEGIN (RSA |EC |OPENSSH |DSA |)?PRIVATE KEY-----/g }
];

function* walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ignoreDirs.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    const rel = path.relative(root, full);
    if (entry.isDirectory()) yield* walk(full);
    else if (!ignoreFiles.has(entry.name)) yield rel;
  }
}

let failed = false;
for (const rel of walk(root)) {
  const stat = fs.statSync(rel);
  if (stat.size > 2_000_000) continue;
  const text = fs.readFileSync(rel, 'utf8');
  for (const { name, re } of patterns) {
    re.lastIndex = 0;
    if (re.test(text)) {
      console.error(`Potential secret detected: ${name} in ${rel}`);
      failed = true;
    }
  }
}

if (failed) process.exit(1);
console.log('Secret scan passed.');
