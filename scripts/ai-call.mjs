#!/usr/bin/env node
import fs from 'node:fs';

loadEnvLocal();

const prompt = process.argv.slice(2).join(' ') || 'Return a one-sentence health check.';
const baseUrl = process.env.OPENAI_BASE_URL;
const apiKey = process.env.OPENAI_API_KEY;
const model = process.env.OPENAI_MODEL || 'gpt-5.5';
const mode = process.env.OPENAI_API_MODE || 'responses';

if (!baseUrl || !apiKey) {
  console.error('Missing OPENAI_BASE_URL or OPENAI_API_KEY. Copy .env.example to .env.local and edit it locally.');
  process.exit(1);
}

const redactedBase = redactUrl(baseUrl);
console.log(`Calling ${redactedBase} with model ${model} using mode ${mode}.`);

try {
  const output = mode === 'chat-completions'
    ? await callChatCompletions(prompt)
    : await callResponses(prompt);
  console.log(output);
} catch (error) {
  console.error(`AI call failed: ${error.message}`);
  if (mode === 'responses') {
    console.error('If your endpoint does not support the Responses API, set OPENAI_API_MODE="chat-completions" in .env.local.');
  }
  process.exit(1);
}

async function callResponses(input) {
  const res = await fetch(`${baseUrl.replace(/\/$/, '')}/responses`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({ model, input })
  });
  const data = await readJson(res);
  if (!res.ok) throw new Error(formatApiError(res, data));
  return data.output_text ?? JSON.stringify(data, null, 2);
}

async function callChatCompletions(input) {
  const res = await fetch(`${baseUrl.replace(/\/$/, '')}/chat/completions`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({ model, messages: [{ role: 'user', content: input }] })
  });
  const data = await readJson(res);
  if (!res.ok) throw new Error(formatApiError(res, data));
  return data.choices?.[0]?.message?.content ?? JSON.stringify(data, null, 2);
}

function headers() {
  return {
    'content-type': 'application/json',
    authorization: `Bearer ${apiKey}`
  };
}

async function readJson(res) {
  const text = await res.text();
  try {
    return JSON.parse(text);
  } catch {
    return { raw: text };
  }
}

function formatApiError(res, data) {
  return `HTTP ${res.status}: ${data?.error?.message ?? data?.raw ?? JSON.stringify(data)}`;
}

function loadEnvLocal() {
  if (!fs.existsSync('.env.local')) return;
  const text = fs.readFileSync('.env.local', 'utf8');
  for (const line of text.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const index = trimmed.indexOf('=');
    if (index === -1) continue;
    const key = trimmed.slice(0, index).trim();
    let value = trimmed.slice(index + 1).trim();
    value = value.replace(/^['"]|['"]$/g, '');
    if (!(key in process.env)) process.env[key] = value;
  }
}

function redactUrl(url) {
  try {
    const parsed = new URL(url);
    return `${parsed.protocol}//${parsed.host}${parsed.pathname.replace(/\/$/, '')}`;
  } catch {
    return '[configured endpoint]';
  }
}
