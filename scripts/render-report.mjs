#!/usr/bin/env node
import fs from 'node:fs';

const input = process.argv[2] ?? 'reports/sample-data.json';
const output = process.argv[3] ?? 'reports/report-output.html';

const data = JSON.parse(fs.readFileSync(input, 'utf8'));
const html = `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(data.title)}</title>
  <style>
    body{font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;margin:0;background:#0f172a;color:#e5e7eb;}
    main{max-width:1120px;margin:0 auto;padding:32px 20px 56px;}
    .hero{padding:28px;border:1px solid #334155;border-radius:24px;background:linear-gradient(135deg,#111827,#1e293b);}
    h1{margin:0 0 8px;font-size:34px}.muted{color:#94a3b8}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;margin-top:20px}.card{background:#111827;border:1px solid #334155;border-radius:18px;padding:18px}.value{font-size:28px;font-weight:700}.delta.up{color:#86efac}.delta.down{color:#fca5a5}.section{margin-top:28px}.bar{height:12px;background:#1f2937;border-radius:999px;overflow:hidden}.bar span{display:block;height:100%;background:#38bdf8}.risk{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.risk div{padding:12px;border-radius:12px;background:#1f2937}.risk .high{background:#7f1d1d}.risk .medium{background:#78350f}.risk .low{background:#14532d}table{width:100%;border-collapse:collapse}td,th{border-bottom:1px solid #334155;padding:10px;text-align:left}svg{width:100%;height:160px;background:#020617;border-radius:14px}
  </style>
</head>
<body><main>
  <section class="hero"><h1>${escapeHtml(data.title)}</h1><p class="muted">${escapeHtml(data.subtitle)}</p><p class="muted">Generated from structured sample data. Replace this with project data.</p></section>
  <section class="grid">${data.kpis.map(kpiCard).join('')}</section>
  <section class="section card"><h2>趋势</h2>${sparkline(data.trend)}</section>
  <section class="section card"><h2>流动图</h2>${flow(data.flow)}</section>
  <section class="section card"><h2>风险热力</h2><div class="risk">${data.risks.map(riskCard).join('')}</div></section>
  <section class="section card"><h2>发现与行动</h2><table><thead><tr><th>发现</th><th>证据</th><th>行动</th></tr></thead><tbody>${data.findings.map(row).join('')}</tbody></table></section>
</main></body></html>`;
fs.mkdirSync('reports', { recursive: true });
fs.writeFileSync(output, html);
console.log(`Wrote ${output}`);

function escapeHtml(value){return String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');}
function kpiCard(k){const dir=Number(k.delta)>=0?'up':'down';return `<article class="card"><div class="muted">${escapeHtml(k.label)}</div><div class="value">${escapeHtml(k.value)}</div><div class="delta ${dir}">${Number(k.delta)>=0?'+':''}${escapeHtml(k.delta)}%</div><p class="muted">${escapeHtml(k.note)}</p></article>`;}
function sparkline(points){const max=Math.max(...points),min=Math.min(...points);const coords=points.map((p,i)=>`${(i/(points.length-1))*1000},${130-((p-min)/(max-min||1))*100}`).join(' ');return `<svg viewBox="0 0 1000 160"><polyline fill="none" stroke="currentColor" stroke-width="6" points="${coords}" /></svg>`;}
function flow(items){return `<svg viewBox="0 0 1000 160">${items.map((f,i)=>`<text x="${60+i*220}" y="48" fill="#e5e7eb">${escapeHtml(f.label)}</text><rect x="${60+i*220}" y="70" width="150" height="28" rx="14" fill="#38bdf8" opacity="${0.35+f.weight/100}"/>${i<items.length-1?`<path d="M${215+i*220} 84 L${270+i*220} 84" stroke="#94a3b8" stroke-width="4" marker-end="url(#a)"/>`:''}`).join('')}<defs><marker id="a" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#94a3b8"/></marker></defs></svg>`;}
function riskCard(r){return `<div class="${escapeHtml(r.level)}"><strong>${escapeHtml(r.name)}</strong><br><span>${escapeHtml(r.note)}</span></div>`;}
function row(f){return `<tr><td>${escapeHtml(f.title)}</td><td>${escapeHtml(f.evidence)}</td><td>${escapeHtml(f.action)}</td></tr>`;}
