// Giữ giao thức Judge0 IDE gốc: POST base64, wait=false, poll theo token và region.
const BASE_URL = 'https://ce.judge0.com';
const LANGUAGE_ID = 105; // C++ (GCC 14.1.0) trên Judge0 CE.
const pause = ms => new Promise(resolve => setTimeout(resolve, ms));
const encode = value => btoa(Array.from(new TextEncoder().encode(value), b => String.fromCharCode(b)).join(''));
const decode = value => value == null ? '' : new TextDecoder().decode(Uint8Array.from(atob(value), c => c.charCodeAt(0)));

export async function execute(source, stdin, signal) {
  const response = await fetch(`${BASE_URL}/submissions?base64_encoded=true&wait=false`, {
    method: 'POST', headers: {'Content-Type':'application/json'}, signal,
    body: JSON.stringify({source_code:encode(source), stdin:encode(stdin), language_id:LANGUAGE_ID, redirect_stderr_to_stdout:false})
  });
  if (!response.ok) throw new Error(`Judge0 POST: HTTP ${response.status}`);
  const {token} = await response.json();
  if (!token) throw new Error('Judge0 không trả submission token.');
  const region = response.headers.get('X-Judge0-Region');
  for (let attempt = 0; attempt < 150; attempt++) {
    await pause(200);
    const result = await fetch(`${BASE_URL}/submissions/${encodeURIComponent(token)}?base64_encoded=true`, {
      headers: region ? {'X-Judge0-Region':region} : {}, signal
    });
    if (!result.ok) throw new Error(`Judge0 GET: HTTP ${result.status}`);
    const data = await result.json();
    if (data.status?.id <= 2) continue;
    return {status:data.status?.description || 'Unknown', statusId:data.status?.id,
      stdout:decode(data.stdout), stderr:decode(data.stderr), compileOutput:decode(data.compile_output),
      message:decode(data.message), time:data.time, memory:data.memory};
  }
  throw new Error('Judge0 xử lý quá lâu. Hãy thử lại.');
}

export function normalizeOutput(value) {
  return value.replace(/\r\n?/g, '\n').split('\n').map(line => line.trimEnd()).join('\n').trimEnd();
}
