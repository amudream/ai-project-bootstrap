#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const schemaDir = 'schemas';
if (!fs.existsSync(schemaDir)) {
  console.error('Missing schemas directory.');
  process.exit(1);
}

for (const file of fs.readdirSync(schemaDir).filter((name) => name.endsWith('.json'))) {
  JSON.parse(fs.readFileSync(path.join(schemaDir, file), 'utf8'));
}

const report = JSON.parse(fs.readFileSync('reports/sample-data.json', 'utf8'));
const requiredReportKeys = ['title', 'subtitle', 'kpis', 'trend', 'flow', 'risks', 'findings'];
for (const key of requiredReportKeys) {
  if (!(key in report)) {
    console.error(`reports/sample-data.json is missing required key: ${key}`);
    process.exit(1);
  }
}

for (const key of ['kpis', 'trend', 'flow', 'risks', 'findings']) {
  if (!Array.isArray(report[key])) {
    console.error(`reports/sample-data.json key must be an array: ${key}`);
    process.exit(1);
  }
}

console.log('Schema and sample data validation passed.');
