// Professor local: lê seus registros e o microfone e devolve orientações, sem internet e sem custo.
import { MODULES, MOD, EX } from './curriculum/index.js';
import { Store } from './store.js';
import { stats, metric, QUAL } from './stats.js';
import { noteName, voiceOf, baseOf, VOICE_TYPES, semis } from './music.js';
import { dkey, addDays, daysBetween, mean, fmtDate } from './util.js';

const ORD = n => `${n}ª`;
const DEG = { 0: 'tônica', 1: '2ª menor', 2: '2ª', 3: '3ª menor', 4: '3ª', 5: '4ª', 6: '4ª aumentada', 7: '5ª', 8: '6ª menor', 9: '6ª', 10: '7ª menor', 11: '7ª', 12: 'oitava' };
const degName = s => s >= 12 ? (s === 12 ? 'oitava' : `${DEG[s - 12] || ''} da oitava de cima`) : s < 0 ? `${DEG[s + 12] || ''} de baixo` : DEG[s];

// Interpreta uma análise do microfone em frases curtas.
export function pitchVerdict(r, e) {
  if (!r) return [];
  const out = [];
  const q = r.score >= 90 ? 'Excelente' : r.score >= 80 ? 'Muito bom' : r.score >= 65 ? 'Bom, com pontos a ajustar' : r.score >= 45 ? 'Irregular' : 'Fora do tom na maior parte';
  out.push({ k: r.score >= 80 ? 'good' : r.score >= 60 ? 'info' : 'warn', t: `${q}: nota ${r.score} de 100. ${r.within}% do tempo você ficou a até 25 cents (um quarto de semitom) da nota.` });
  if (r.mean <= -15) out.push({ k: 'warn', t: `Na média você cantou ${Math.abs(r.mean)} cents abaixo das notas (calante). É o desvio mais comum: falta de ar no fim da frase, vogal escura demais ou cansaço. Pense a nota "por cima", mantenha o ar saindo até o fim e abra um pouco mais a vogal.` });
  else if (r.mean >= 15) out.push({ k: 'warn', t: `Na média você cantou ${r.mean} cents acima das notas (crescente). Isso costuma vir de pressão demais: volume alto e garganta apertada. Cante mais baixo e solte a mandíbula; o grito sempre puxa a nota para cima.` });
  else out.push({ k: 'good', t: `Sem tendência de cantar acima ou abaixo (média ${r.mean > 0 ? '+' : ''}${r.mean} cents).` });
  if (r.sd >= 28) out.push({ k: 'warn', t: `A nota balança por dentro (oscila cerca de ${r.sd} cents). Isso é tensão ou ar irregular. Faça as notas longas sobre o bordão (módulo Afinação) e mantenha o volume médio.` });
  else if (r.sd <= 14) out.push({ k: 'good', t: `Notas firmes: oscilação de só ${r.sd} cents dentro de cada nota.` });
  const pos = (r.pos || []).filter(p => p.n >= 2);
  if (pos.length >= 3) {
    const worst = pos.reduce((a, b) => Math.abs(b.mean) > Math.abs(a.mean) ? b : a);
    if (Math.abs(worst.mean) >= 25) out.push({ k: 'warn', t: `A ${ORD(worst.idx + 1)} nota da melodia (a ${degName(worst.semi)}) sai ${worst.mean < 0 ? 'baixa' : 'alta'}, ${Math.abs(worst.mean)} cents em média. Cante devagar só o trecho que chega nela até acertar.` });
  }
  const roots = r.roots || [];
  if (roots.length >= 4) {
    const firstHalf = roots.slice(0, Math.ceil(roots.length / 2)), rising = roots.every((x, i) => i === 0 || x.root >= roots[i - 1].root);
    const okUntil = roots.findIndex((x, i) => i > 0 && x.score < 55 && mean(firstHalf.map(y => y.score)) >= 70);
    if (rising && okUntil > 0) out.push({ k: 'info', t: `Até a escada chegar em ${noteName(roots[okUntil - 1].top)} você foi bem; a partir de ${noteName(roots[okUntil].top)} a afinação caiu. Provavelmente é a sua região de passagem: ali a voz precisa ficar mais leve, não mais forte. Veja o módulo "Agudos sem gritar".` });
  }
  if (r.misses >= Math.max(2, r.n * 0.15)) out.push({ k: 'info', t: `${r.misses} notas não foram ouvidas. Cante um pouco mais perto do aparelho ou aumente a sensibilidade do microfone.` });
  if (r.octave >= 40) out.push({ k: 'info', t: `Em ${r.octave}% do tempo você cantou uma oitava longe do piano. O app conta como certo (é a mesma nota), mas tente cantar na altura das barras: os exercícios já estão no seu tom.` });
  if (e && e.goal.m === 'top' && r.topOk) out.push({ k: 'good', t: `Nota mais aguda afinada nesta série: ${noteName(r.topOk)}.` });
  if (e && e.goal.m === 'low' && r.lowOk) out.push({ k: 'good', t: `Nota mais grave afinada nesta série: ${noteName(r.lowOk)}.` });
  return out;
}

const PAIN = /\b(dor|doendo|doeu|d[oó]i|ard(e|eu|endo|ência)|rouc|rouquid|falh(ou|ando|a)|machuc|irrit|queim|cansad[ao]|sem voz|afon)/i;

// Orientações gerais a partir de todo o histórico.
export function insights() {
  const st = stats(), P = Store.perfil, today = st.today, out = [];
  const add = (k, title, text, action) => out.push({ k, title, text, action });
  const v = voiceOf(P), ranges = Store.ranges;
  if (!P.voice) add('info', 'Primeiro passo: o teste de voz', 'Antes de tudo, descubra a sua extensão na aba Voz. Leva dois minutos e faz todos os exercícios caberem na sua voz, sem esticar para onde ainda não dá. É o que mais evita grito no começo.', { tab: 'voz', label: 'Fazer o teste de voz' });
  if (!st.all.length) {
    add('info', 'Bem-vindo', 'Ainda não há treinos registrados. Comece pela aula de hoje: cada bloco tem o piano para guiar e o microfone para mostrar a sua afinação. No fim de cada exercício, registre como foi. Com alguns dias de registro eu começo a apontar o que melhorar.');
    return out;
  }
  // dor, rouquidão, cansaço
  const recentNotes = st.all.filter(e => e.note && daysBetween(e.d, today) <= 14);
  const forced = st.all.filter(e => daysBetween(e.d, today) <= 7 && e.q === 1).length;
  if (recentNotes.some(e => PAIN.test(e.note))) add('alert', 'Cuidado com a voz', 'Você anotou dor, ardor, rouquidão ou cansaço nos últimos dias. Pare de forçar: faça só exercícios leves de semioclusão (canudo, "brr") em volume baixo, beba água e descanse a voz um ou dois dias. Rouquidão que dura mais de 15 dias, dor ou perda de voz pedem consulta com otorrinolaringologista e fonoaudiólogo.');
  else if (forced >= 2) add('alert', 'Muitos treinos "Forçado"', `Você marcou "Forçado" ${forced} vezes nesta semana. Cantar forçando é o caminho mais rápido para a rouquidão. Baixe o volume, diminua a escada de tons (use −½) e volte aos exercícios de semioclusão até a voz sair solta.`, EX['sovt-1a'] ? { ex: 'sovt-1a', label: 'Voltar para a semioclusão' } : null);
  // tempo de canto por dia
  const todayMin = st.days[today] || 0;
  if (todayMin >= 60) add('warn', 'Já deu por hoje', `Você somou ${Math.round(todayMin)} minutos de canto hoje. A voz é um músculo pequeno: no começo, 20 a 30 minutos de técnica por dia, com pausas, rendem mais do que uma hora seguida. Faça um desaquecimento e descanse.`);
  // constância
  let daysWeek = 0; for (let i = 0; i < 7; i++) if (st.days[dkey(addDays(new Date(), -i))]) daysWeek++;
  const usingFor = daysBetween(st.all[0].d, today);
  if (daysWeek >= P.daysPerWeek) add('good', 'Constância em dia', `Você cantou ${daysWeek} dos últimos 7 dias. A voz muda com repetição, e é a constância que faz o agudo e a afinação aparecerem.`);
  else if (usingFor >= 6 && daysWeek <= Math.max(1, P.daysPerWeek - 2)) add('warn', 'Pouca constância', `${daysWeek === 1 ? 'Foi 1 dia' : `Foram ${daysWeek} dias`} de treino nos últimos 7, e sua meta é ${P.daysPerWeek}. Quinze minutos todo dia valem mais do que uma hora no fim de semana.`);
  else if (usingFor < 6) add('info', 'Primeira semana', 'Nesta primeira semana o mais importante é criar o hábito: um pouco todo dia, com o microfone ligado e registrando como foi. Não se cobre agudos agora; eles vêm depois da afinação e da voz sem grito.');
  // afinação pelo microfone
  const pr = st.pitch.slice(-8).map(e => e.pitch);
  if (pr.length >= 3) {
    const m = mean(pr.map(p => p.mean)), s = mean(pr.map(p => p.sd)), sc = Math.round(mean(pr.map(p => p.score)));
    if (m <= -12) add('warn', 'Você tende a cantar baixo', `Nas últimas ${pr.length} análises você ficou em média ${Math.abs(Math.round(m))} cents abaixo das notas. Mais ar no fim das frases, vogais mais abertas e pensar a nota "por cima" corrigem isso. As notas longas sobre o bordão ajudam muito.`, EX['afin-5a'] ? { ex: 'afin-5a', label: 'Nota longa sobre o bordão' } : null);
    else if (m >= 12) add('warn', 'Você tende a cantar alto', `Nas últimas análises você ficou em média ${Math.round(m)} cents acima das notas. Quase sempre é pressão: volume alto e garganta apertada. Cante mais baixo; os exercícios de semioclusão tiram essa pressão.`, EX['sovt-1a'] ? { ex: 'sovt-1a', label: 'Exercício de semioclusão' } : null);
    if (s >= 25) add('info', 'Notas que balançam', `A oscilação dentro das notas está em ${Math.round(s)} cents. O alvo é abaixo de 15. Notas longas, volume médio e ar contínuo resolvem com o tempo.`);
    if (sc >= 85) add('good', 'Afinação sólida', `Média ${sc}/100 nas últimas análises do microfone. Hora de testar sem o piano (lições "Cantar sem o piano").`);
    else if (sc < 55) add('info', 'Calma com a afinação', `A média recente é ${sc}/100. Volte para exercícios em eco (o piano toca, depois você canta) e para melodias de três notas. Acertar pouco e bem vale mais do que tentar muito e errar.`, EX['afin-3b'] ? { ex: 'afin-3b', label: 'Três notas em eco' } : null);
  } else if (st.all.length >= 5) add('info', 'Use o professor que ouve', 'Você ainda quase não usou o microfone. Ele mostra se você canta abaixo ou acima, qual nota da melodia sai fora e em que tom a voz começa a apertar. É o espelho mais honesto para quem sai do tom.');
  // agudos com tensão
  const highTense = st.all.filter(e => EX[e.ex] && ['agudo', 'regis'].includes(EX[e.ex].module.id) && daysBetween(e.d, today) <= 14);
  if (highTense.length >= 3 && highTense.slice(-3).every(e => e.q <= 2)) add('warn', 'Agudo com grito', 'Os últimos treinos de agudo saíram "Tenso" ou "Forçado". É o sinal de que a voz de peito está sendo empurrada para cima. Diminua o volume pela metade, deixe a voz ficar mais leve (até virar falsete, se precisar) e use "gu", "ng" e o canudo para atravessar a passagem.', MOD.agudo ? { ex: MOD.agudo.exList[0].id, label: 'Rever "Agudos sem gritar"' } : null);
  // por exercício
  for (const [id, s] of Object.entries(st.ex)) {
    const e = EX[id]; if (!e) continue;
    const h = s.hist, last3 = h.slice(-3), mt = metric(e);
    if (last3.length === 3 && last3.every(x => x.q <= 2) && daysBetween(last3[2].d, today) <= 10 && !['agudo', 'regis'].includes(e.module.id)) {
      add('warn', `Travando em "${e.name}"`, `Os três últimos registros foram "${QUAL[last3[2].q]}" ou pior. Isso é tensão. Baixe o volume, use a escada mais curta ou meio tom abaixo, e só volte a subir quando sair solto.`, { ex: id, label: 'Treinar mais leve' });
      continue;
    }
    if (!s.mastered && mt.m !== 'rep' && h.length >= 6) {
      const vals = x => x.filter(y => y.q >= 4 && y.v > 0).map(y => y.v);
      const bestOf = arr => arr.length ? (mt.lower ? Math.min(...arr) : Math.max(...arr)) : null;
      const before = bestOf(vals(h.slice(0, -4))), recent = bestOf(vals(h.slice(-4)));
      if (before != null && (recent == null || !mt.better(recent, before)) && daysBetween(h[h.length - 1].d, today) <= 14) {
        const prev = e.lesson.ex[e.lesson.ex.indexOf(e) - 1];
        add('warn', `Platô em "${e.name}"`, `Seu melhor (${mt.fmt(before)}) não melhora há 4 treinos. Alterne dias com outro exercício${prev ? ` (por exemplo "${prev.name}")` : ''}, grave e ouça, e faça a série com menos volume. Platô é normal: a voz consolida antes de dar o próximo passo.`, prev ? { ex: prev.id, label: `Abrir "${prev.name}"` } : null);
      }
    }
    if (s.mastered && daysBetween(s.masteredAt, today) <= 7) add('good', `Dominado: ${e.name}`, `Você chegou à meta (${mt.fmt(mt.goal)}) com a voz solta. ${s.verified ? 'O microfone confirmou a afinação.' : e.goal.m === 'afin' ? '' : 'Confira com o professor que ouve para ter certeza da afinação.'}`);
  }
  // extensão
  if (ranges.length >= 2) {
    const first = ranges[0], last = ranges[ranges.length - 1], gainHi = last.comfHigh - first.comfHigh, gainLo = first.comfLow - last.comfLow;
    if (gainHi > 0 || gainLo > 0) add('good', 'Sua voz cresceu', `Desde o primeiro teste (${fmtDate(first.d)}) você ganhou ${[gainHi > 0 ? `${semis(gainHi)} no agudo` : '', gainLo > 0 ? `${semis(gainLo)} no grave` : ''].filter(Boolean).join(' e ')} na zona confortável.`);
  }
  if (P.voice && P.voice.at && daysBetween(P.voice.at, today) >= 30 && st.all.length >= 10) add('info', 'Refaça o teste de voz', `O último teste foi em ${fmtDate(P.voice.at)}. Refaça para ver quanto a sua extensão mudou e deixar os exercícios no tom certo.`, { tab: 'voz', label: 'Fazer o teste de voz' });
  // amplitude do estudo
  const lastByMod = {};
  for (const e of st.all) { const x = EX[e.ex]; if (x) lastByMod[x.module.id] = e.d; }
  const totalDays = Object.keys(st.days).length;
  if (totalDays >= 5 && !lastByMod.saude && MOD.saude) add('info', 'Saúde vocal', 'Você ainda não abriu o módulo de saúde vocal. Cinco minutos de leitura ali evitam meses de rouquidão: água, sono, aquecer, desaquecer e os sinais de alerta.', { ex: MOD.saude.exList[0].id, label: 'Abrir saúde vocal' });
  if (totalDays >= 10 && !lastByMod.ouvido && MOD.ouvido) add('info', 'Treino de ouvido', 'Quem sai do tom ganha muito com treino de ouvido: intervalos, escalas e memória de melodias. Coloque o módulo "Ouvido para cantores" no foco por uma semana.', { ex: MOD.ouvido.exList[0].id, label: 'Começar treino de ouvido' });
  const stale = Object.entries(lastByMod).filter(([, d]) => daysBetween(d, today) >= 21).map(([id]) => MOD[id]?.name).filter(Boolean);
  if (stale.length) add('info', 'Revisão', `Faz mais de 3 semanas que você não treina ${stale.slice(0, 3).join(', ')}. Uma revisão rápida evita perder o que já conquistou.`);
  const order = { alert: 0, warn: 1, info: 2, good: 3 };
  return out.sort((a, b) => order[a.k] - order[b.k]).slice(0, 12);
}

// Resumo em JSON enviado à IA (Gemini) junto com a pergunta.
export function studentContext() {
  const st = stats(), P = Store.perfil, v = voiceOf(P), b = baseOf(P);
  const exs = Object.entries(st.ex).map(([id, s]) => { const mt = metric(EX[id]); return { nome: EX[id].name, modulo: EX[id].module.name, metrica: mt.label, melhor: s.best != null ? mt.fmt(s.best) : null, meta: mt.fmt(mt.goal), ultima_qualidade: QUAL[s.lastQ], treinos: s.n, dominado: s.mastered, ultimo_treino: s.lastD }; });
  const recent = st.all.slice(-25).map(e => { const X = EX[e.ex]; const mt = X ? metric(X) : null; return { data: e.d, exercicio: X?.name || e.name || 'Treino livre', valor: mt && e.v ? mt.fmt(e.v) : undefined, qualidade: `${e.q} (${QUAL[e.q]})`, minutos: e.min, obs: e.note || undefined, microfone: e.pitch ? { nota: e.pitch.score, media_cents: e.pitch.mean, oscilacao_cents: e.pitch.sd, afinadas_pct: e.pitch.within } : undefined }; });
  return JSON.stringify({
    hoje: st.today,
    voz: {
      testada: !!P.voice, tipo_provavel: VOICE_TYPES[v.type]?.name, extensao: P.voice ? `${noteName(v.low)} a ${noteName(v.high)}` : 'sem teste',
      zona_confortavel: `${noteName(v.comfLow)} a ${noteName(v.comfHigh)}`, falsete_ate: v.head ? noteName(v.head) : null,
      zona_do_primeiro_teste: `${noteName(b.comfLow)} a ${noteName(b.comfHigh)}`,
      historico_testes: Store.ranges.slice(-8).map(r => ({ data: r.d, de: noteName(r.low), ate: noteName(r.high), falsete: r.head ? noteName(r.head) : null }))
    },
    objetivos: { minutos_por_dia: P.dailyMin, dias_por_semana: P.daysPerWeek, foco: (P.focus || []).map(id => MOD[id]?.name).filter(Boolean) },
    resumo: { minutos_totais: Math.round(st.totalMin), sequencia_dias: st.streak, dominados: st.mastered, minutos_ultimas_4_semanas: st.weeks.slice(-4).map(w => ({ semana: w.start, minutos: Math.round(w.min), dias: w.days })) },
    observacoes_do_professor_local: insights().map(i => i.title + ': ' + i.text),
    exercicios_praticados: exs, registros_recentes: recent,
    proximos_por_modulo: MODULES.map(m => ({ modulo: m.name, proximos: m.exList.filter(e => !st.ex[e.id]?.mastered).slice(0, 2).map(e => e.name) }))
  });
}
export function curriculumIndex() {
  return MODULES.map(m => `${m.name}: ` + m.lessons.map(l => `${l.name} [${l.ex.map(e => e.name).join('; ')}]`).join(' | ')).join('\n');
}
