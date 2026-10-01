import {problems} from '../problems/index.js';
import {execute, normalizeOutput} from './judge.js';

const app = document.querySelector('#app');
const crumb = document.querySelector('#crumb');
const starter = '#include <bits/stdc++.h>\nusing namespace std;\n\nint main() {\n    \n    return 0;\n}\n';
const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let schedule = [], editor = null, currentId = null;

function getRoute() {
  const match = /^#\/day\/(\d+)(?:\/([\w-]+))?$/.exec(location.hash);
  return match ? {day:Number(match[1]), problemId:match[2]} : {};
}
function disposeEditor() { if (editor) { editor.dispose(); editor = null; } currentId = null; }
function renderHome() {
  crumb.textContent = 'Lịch học 2026';
  app.innerHTML = `<div class="container"><h1>Luyện HSG Tin học</h1><p class="muted">Lộ trình 01/10–31/12/2026 · Chọn ngày để xem bài tập.</p><div class="days">${schedule.map(day => {
    const count = problems.filter(p => p.day === day.day).length;
    return `<a class="card" href="#/day/${day.day}"><span class="number">NGÀY ${day.day}</span><h2>${esc(day.topic)}</h2><div class="meta">${dateVN(day.date)} · ${day.minutes} phút · ${count ? count + ' bài đã đăng' : 'Bài đang chuẩn bị'}</div><div class="action">${count ? 'Làm bài →' : 'Xem lịch →'}</div></a>`;
  }).join('')}</div></div>`;
}
function dateVN(date) { const [y,m,d] = date.split('-'); return `${d}/${m}/${y}`; }
function renderDay(day) {
  const items = problems.filter(p => p.day === day.day);
  crumb.textContent = `Ngày ${day.day} · ${day.topic}`;
  app.innerHTML = `<div class="container"><a class="back" href="#">← Tất cả các ngày</a><h1>Ngày ${day.day} — ${esc(day.topic)}</h1><p class="muted">${dateVN(day.date)} · ${day.minutes} phút · Mục tiêu ${day.target} bài</p><div class="panel"><h2>Việc cần làm</h2><p>${esc(day.tasks)}</p><p class="muted"><strong>Tiêu chí đạt:</strong> ${esc(day.criteria)}</p></div><div class="panel"><h2>Bài tập (${items.length})</h2>${items.length ? items.map((p,i) => `<a class="problem-link" href="#/day/${day.day}/${p.id}"><span>${i+1}. ${esc(p.title)}</span><span>${localStorage.getItem('hsg:accepted:'+p.id) === '1' ? '✓ Đã đạt' : 'Làm bài →'}</span></a>`).join('') : '<p class="muted">Chưa đăng đề cho ngày này. Giáo viên sẽ thêm bài sau.</p>'}</div></div>`;
}
function paragraph(title, value) { return value ? `<h3>${title}</h3><p>${esc(value)}</p>` : ''; }
function renderProblem(day, p) {
  currentId = p.id;
  crumb.textContent = `Ngày ${day.day} / ${p.title}`;
  app.innerHTML = `<div class="workspace"><section class="statement"><a class="back" href="#/day/${day.day}">← Bài tập ngày ${day.day}</a><h1>${esc(p.title)}</h1><p class="muted">Ngày ${day.day} · ${esc(day.topic)}</p>${paragraph('Đề bài',p.description)}${paragraph('Input',p.inputDescription)}${paragraph('Output',p.outputDescription)}${paragraph('Giới hạn',p.constraints)}${(p.samples || []).map((s,i) => `<h3>Ví dụ ${i+1}</h3><strong>Input</strong><pre class="sample">${esc(s.input)}</pre><strong>Output</strong><pre class="sample">${esc(s.output)}</pre>`).join('')}</section><section class="editor-side"><div class="toolbar"><span>Code C++</span><span class="muted">Ctrl + Enter để Run</span></div><div class="editor" id="editor"></div><div class="console"><div class="tabs">Custom Input · Kết quả</div><textarea id="custom-input" aria-label="Custom Input" placeholder="Nhập dữ liệu để chạy thử...">${esc(p.samples?.[0]?.input || '')}</textarea><pre class="result" id="result" aria-live="polite">Sẵn sàng chạy.</pre></div><div class="actions"><button id="run">Run</button><button id="submit" class="primary">Submit</button></div></section></div>`;
  const saved = localStorage.getItem('hsg:code:'+p.id) ?? starter;
  require.config({paths:{vs:'vendor/monaco-editor-0.44.0/min/vs'}});
  require(['vs/editor/editor.main'], () => {
    if (currentId !== p.id) return;
    editor = monaco.editor.create(document.querySelector('#editor'), {value:saved,language:'cpp',theme:'vs',automaticLayout:true,fontSize:14,minimap:{enabled:false}});
    editor.onDidChangeModelContent(() => localStorage.setItem('hsg:code:'+p.id, editor.getValue()));
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => document.querySelector('#run')?.click());
  });
  const result = document.querySelector('#result');
  const buttons = [document.querySelector('#run'),document.querySelector('#submit')];
  async function busy(action) {
    if (!editor || !editor.getValue().trim()) { result.textContent='Hãy nhập mã C++ trước khi chạy.'; return; }
    buttons.forEach(b => b.disabled=true);
    try { await action(); } catch (error) { result.textContent=`Không gọi được Judge0: ${error.message}`; result.className='result fail'; }
    finally { buttons.forEach(b => b.disabled=false); }
  }
  buttons[0].onclick = () => busy(async () => {
    result.textContent='Đang chạy...'; result.className='result';
    const r = await execute(editor.getValue(),document.querySelector('#custom-input').value);
    result.textContent=`${r.status}${r.time ? ' · '+r.time+'s' : ''}\nstdout:\n${r.stdout || '(trống)'}\n${r.stderr ? 'stderr:\n'+r.stderr+'\n' : ''}${r.compileOutput ? 'Lỗi biên dịch:\n'+r.compileOutput+'\n' : ''}${r.message ? r.message : ''}`;
    result.className=`result ${r.statusId === 3 ? 'ok' : 'fail'}`;
  });
  buttons[1].onclick = () => busy(async () => {
    if (!p.tests?.length) { result.textContent='Bài này chưa có test.'; return; }
    const source = editor.getValue(); let passed=0;
    const lines=[]; result.className='result';
    for (let i=0;i<p.tests.length;i++) {
      result.textContent=`Đang chấm ${i+1}/${p.tests.length}...\n${lines.join('\n')}`;
      const r=await execute(source,p.tests[i].input);
      const correct=r.statusId === 3 && normalizeOutput(r.stdout) === normalizeOutput(p.tests[i].output);
      if(correct) passed++;
      lines.push(`Test ${i+1} ${correct ? '✓ Accepted' : '✗ '+(r.statusId === 3 ? 'Wrong Answer' : r.status)}${!correct && r.compileOutput ? '\n'+r.compileOutput : ''}${!correct && r.stderr ? '\n'+r.stderr : ''}`);
      if (r.statusId !== 3) break;
    }
    if (passed===p.tests.length) localStorage.setItem('hsg:accepted:'+p.id,'1');
    result.textContent=`${passed===p.tests.length ? '✓ Accepted' : 'Chưa đạt'} · ${passed}/${p.tests.length} tests passed\n${lines.join('\n')}`;
    result.className=`result ${passed===p.tests.length ? 'ok' : 'fail'}`;
  });
}
function route() {
  disposeEditor();
  const {day,problemId}=getRoute();
  const item=schedule.find(d => d.day===day);
  if (!item) return renderHome();
  if (!problemId) return renderDay(item);
  const p=problems.find(p => p.day===day && p.id===problemId);
  if (!p) return renderDay(item);
  renderProblem(item,p);
}
async function init() {
  try { const r=await fetch('data/schedule.json'); if (!r.ok) throw Error(`HTTP ${r.status}`); schedule=await r.json(); route(); }
  catch(e) { app.innerHTML=`<div class="container"><h1>Không tải được lịch học</h1><p>${esc(e.message)}. Hãy mở bằng web server hoặc GitHub Pages.</p></div>`; }
}
window.addEventListener('hashchange',route);
init();
