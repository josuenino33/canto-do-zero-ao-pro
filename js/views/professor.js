// Tela: Professor (orientações locais + IA opcional com Gemini).
import { registerView, registerActions, renderTab, el } from '../ui.js';
import { Store, saveProfessor } from '../store.js';
import { insights, studentContext, curriculumIndex } from '../teacher.js';
import { chat } from '../ai.js';
import { insightHTML } from './hoje.js';
import { esc, mdHTML, toast, $$ } from '../util.js';

const PF = { busy: false, ctl: null, analysis: '', chat: [], chatBusy: false, chatCtl: null };

const RULES = () => `Você é o professor de canto do aluno dentro do app "Método Ressoar". Fale em português do Brasil, de forma direta, calorosa e cuidadosa com a saúde da voz, como um professor de canto experiente que também canta profissionalmente.
Contexto do aluno: sente que "não tem jeito pra coisa", só consegue cantar notas graves, não alcança os agudos, sente que grita muito e sai do tom com frequência. Quer evoluir do zero ao profissional. Não presuma o gênero do aluno.
Regras:
- Use só os dados fornecidos. Nunca invente treinos ou números. Se não houver registros, diga isso e dê um plano para começar.
- Ao recomendar exercícios, use o nome exato de um exercício do currículo abaixo.
- "microfone" nos registros é a medida real de afinação: nota 0 a 100, média em cents (negativo = abaixo da nota, positivo = acima) e oscilação em cents (menor = nota mais firme). 100 cents = 1 semitom.
- Agudo se conquista com leveza, semioclusão (lábios, canudo, "ng"), vogais estreitas e passagem de registro, nunca com mais força. Desencoraje gritar e empurrar a voz de peito para cima.
- Se houver sinais de dor, ardor, rouquidão ou cansaço, oriente repouso vocal e hidratação; rouquidão por mais de 15 dias, dor ou perda de voz: procurar otorrinolaringologista e fonoaudiólogo.
- Seja concreto e curto. Use markdown simples (títulos com ##, listas com -, negrito com **). Nada de tabelas.

Currículo do app (módulo: lições [exercícios]):
${curriculumIndex()}`;

const hasKey = () => !!(Store.settings.aiKey || '').trim();

function render(v) {
  const list = insights(), saved = Store.professor, key = hasKey();
  const analysis = PF.busy ? PF.analysis : (PF.analysis || (saved && saved.text) || '');
  v.innerHTML = `
  <div class="stack8"><div class="eyebrow">Acompanhamento</div><h1 class="h-page">Professor</h1>
  <p class="lead">O professor lê os seus registros, as medidas do microfone e os testes de voz. As orientações abaixo funcionam sem internet. A conversa com IA é opcional e usa uma chave gratuita do Google Gemini.</p></div>
  <div class="card">
    <h3>Orientações de hoje</h3>
    <div class="insights">${list.map(insightHTML).join('')}</div>
  </div>
  ${key ? `
  <div class="prof">
    <div class="card stack14">
      <div class="row between"><div><h3>Análise com IA</h3><div class="sub">${PF.busy ? 'Analisando…' : saved && !PF.analysis ? `Última análise em ${new Date(saved.at).toLocaleDateString('pt-BR')}` : 'Diagnóstico, prioridades da semana e correções'}</div></div>
        ${PF.busy ? `<button class="btn" data-act="stopAnalysis">Parar</button>` : `<button class="btn primary" data-act="analyze">${analysis ? 'Analisar de novo' : 'Analisar minha evolução'}</button>`}</div>
      <div class="answer" id="anaOut">${analysis ? mdHTML(analysis) : PF.busy ? '<p class="thinking">Pensando…</p>' : '<p class="muted">Funciona melhor depois de alguns dias de registros, mas já dá um plano de início se você ainda não treinou.</p>'}</div>
    </div>
    <div class="card stack14">
      <div><h3>Pergunte ao professor</h3><div class="sub">Técnica, agudos, afinação, repertório, saúde da voz, rotina. Ctrl+Enter envia.</div></div>
      <div class="chat" id="chatBox">${PF.chat.map(m => `<div class="msg ${m.role === 'user' ? 'u' : 'a'}">${m.role === 'user' ? esc(m.content) : `<div class="answer">${m.content ? mdHTML(m.content) : '<p class="thinking">Pensando…</p>'}</div>`}</div>`).join('')}</div>
      ${PF.chat.length ? '' : `<div class="sugg">${['Como paro de gritar quando a música sobe?', 'Por que eu saio do tom e como corrijo?', 'Monte um plano de 4 semanas para ganhar agudos', 'Que músicas combinam com a minha voz?', 'Como cuidar da voz antes de cantar em público?'].map(q => `<button class="chip" data-act="askSugg" data-q="${esc(q)}">${esc(q)}</button>`).join('')}</div>`}
      <div class="stack8"><textarea id="chatIn" placeholder="Escreva sua pergunta…"></textarea>
        <div class="row">${PF.chatBusy ? '<button class="btn" data-act="stopChat">Parar</button>' : '<button class="btn primary" data-act="sendChat">Enviar</button>'}${PF.chat.length ? '<button class="btn ghost sm" data-act="clearChat">Limpar conversa</button>' : ''}</div></div>
    </div>
  </div>` : `
  <div class="card stack12">
    <h3>Conversar com o professor IA (opcional e gratuito)</h3>
    <p class="muted">Com uma chave gratuita do Google Gemini, o professor escreve análises da sua evolução e responde perguntas livres.</p>
    <ol class="steps">
      <li>Abra <a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener">aistudio.google.com/apikey</a> e entre com sua conta Google.</li>
      <li>Clique em "Create API key" e copie a chave.</li>
      <li>Cole a chave em Ajustes, no campo "Chave do Gemini", e toque em "Testar chave".</li>
    </ol>
    <p class="small muted">A chave fica só neste aparelho. No plano gratuito há limite de pedidos por dia, e o Google pode usar as perguntas para melhorar os produtos dele.</p>
    <button class="btn" data-act="tab" data-tab="ajustes">Ir para Ajustes</button>
  </div>`}`;
  const cb = el('chatBox'); if (cb) cb.scrollTop = cb.scrollHeight;
  el('chatIn')?.addEventListener('keydown', ev => { if (ev.key === 'Enter' && (ev.ctrlKey || ev.metaKey)) { ev.preventDefault(); sendChat(); } });
}

async function analyze() {
  if (PF.busy || !hasKey()) return;
  PF.busy = true; PF.analysis = ''; PF.ctl = new AbortController(); renderTab();
  const prompt = `Dados do aluno (JSON):\n${studentContext()}\n\nEscreva a análise da evolução do aluno com estas seções:\n## Diagnóstico\n(2 a 4 frases sobre o momento atual, citando números reais: extensão, afinação do microfone, constância)\n## Prioridades desta semana\n(3 itens, cada um com um exercício do currículo e o que observar nele)\n## Correção técnica\n(1 ou 2 orientações ligadas aos dados, por exemplo tendência a cantar abaixo, notas que balançam, grito no agudo)\n## Para a voz crescer\n(um passo concreto para os agudos ou para a afinação, sem forçar)\nMáximo de 350 palavras.`;
  try {
    const text = await chat({ key: Store.settings.aiKey.trim(), model: Store.settings.aiModel, system: RULES(), messages: [{ role: 'user', content: prompt }], signal: PF.ctl.signal, onText: t => { PF.analysis = t; const o = el('anaOut'); if (o) o.innerHTML = mdHTML(t); } });
    PF.analysis = text; saveProfessor(text);
  } catch (e) { PF.analysis = (e && e.text) || PF.analysis; if (e && e.message) toast(e.message, 4500); }
  finally { PF.busy = false; PF.ctl = null; renderTab(); }
}
async function sendChat(text) {
  const box = el('chatIn'), q = (text || (box && box.value) || '').trim();
  if (!q || PF.chatBusy || !hasKey()) return;
  if (box) box.value = '';
  PF.chat.push({ role: 'user', content: q }); PF.chat.push({ role: 'assistant', content: '' });
  PF.chatBusy = true; PF.chatCtl = new AbortController(); renderTab();
  const msg = PF.chat[PF.chat.length - 1];
  const turns = PF.chat.slice(0, -1).filter(m => m.content).slice(-12);
  const messages = [{ role: 'user', content: `Dados atuais do aluno (JSON):\n${studentContext()}\n\nResponda às perguntas a seguir com até 250 palavras, a menos que eu peça um plano detalhado.` }, { role: 'assistant', content: 'Certo, li seus dados. Pode perguntar.' }, ...turns];
  try {
    msg.content = await chat({ key: Store.settings.aiKey.trim(), model: Store.settings.aiModel, system: RULES(), messages, signal: PF.chatCtl.signal, onText: t => { msg.content = t; const b = $$('#chatBox .msg.a .answer'); const last = b[b.length - 1]; if (last) last.innerHTML = mdHTML(t); const cb = el('chatBox'); if (cb) cb.scrollTop = cb.scrollHeight; } });
  } catch (e) { msg.content = (e && e.text) || ''; if (e && e.message) toast(e.message, 4500); if (!msg.content) PF.chat.pop(); }
  finally { PF.chatBusy = false; PF.chatCtl = null; renderTab(); }
}

registerView('professor', render);
registerActions({
  analyze: () => analyze(), stopAnalysis: () => PF.ctl?.abort(),
  sendChat: () => sendChat(), stopChat: () => PF.chatCtl?.abort(),
  clearChat: () => { PF.chat = []; renderTab(); }, askSugg: a => sendChat(a.dataset.q)
});
