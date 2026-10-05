import { M } from './helpers.js';

export default {
  id: 'grave',
  name: 'Graves com corpo',
  desc: 'Valorizar e usar bem a voz grave: relaxada, com ressonância de peito, presença e afinação, sem afundar a laringe e sem empurrar.',
  lessons: [
    {
      id: 'grave-1',
      name: 'Sua voz grave é um ponto forte',
      level: 1,
      goal: 'Cantar notas graves com a garganta solta e o som natural da fala, sem engrossar a voz.',
      text: [
        'Se hoje os graves são a parte mais fácil da sua voz, isso é um ótimo ponto de partida, e não um defeito. Vozes graves são lindas e muito usadas, do samba ao soul, do country à música romântica. Muitas cantoras e cantores profissionais têm quase todo o repertório na região grave e média. Aprender a usar bem o que você já tem é o primeiro passo, e é essa base que vai sustentar o crescimento do resto da voz.',
        'Grave bom é grave relaxado. O erro mais comum é tentar engrossar a voz para soar mais grave: a pessoa abaixa o queixo, aperta o fundo da garganta e afunda a laringe (a região do gogó, onde ficam as pregas vocais). O som fica abafado, pesado e cansa rápido. É a imitação de voz de locutor, que impressiona por alguns segundos e machuca com o tempo.',
        'O grave saudável nasce da fala. Diga "hum, hum" como quem concorda com alguém numa conversa, sem pensar em cantar. Repare como a voz sai solta e como dá para sentir uma leve vibração no peito. Esse é o ponto de partida. Os exercícios desta lição levam esse som de fala para a música: primeiro em deslizes, depois em pequenas frases e notas longas.',
        'Em todo exercício de grave, o volume é de conversa. Se para chegar numa nota você precisa apertar, abaixar a cabeça ou soltar só ar, essa nota fica para outro dia. Dor, ardor ou rouquidão são sinal para parar. A extensão grave também cresce com o treino, mas cresce sem força.'
      ],
      steps: [
        'Diga "hum, hum" algumas vezes, como quem concorda numa conversa, e sinta onde a voz sai fácil.',
        'Em "Suspiro até o grave", deslize até a nota de baixo como um suspiro de alívio, em volume baixo, e segure.',
        'Em "Fala cantada", repita as três notas que descem com a mesma leveza do "hum, hum".',
        'Na nota longa em "mmm", ponha a mão no peito e sinta a vibração. Os lábios se tocam sem apertar.',
        'Se em algum tom a voz ficar abafada ou começar a chiar, pare naquele tom. Ele é o limite de hoje.'
      ],
      mistakes: [
        'Abaixar o queixo em direção ao peito para alcançar o grave. Correção: cabeça reta, olhando para a frente. O queixo solto e nivelado deixa a garganta livre.',
        'Engrossar a voz para soar mais grave. Correção: cante com o mesmo som da fala. Uma voz grave natural já é grave e não precisa de enfeite.',
        'Sussurrar nas notas mais baixas. Correção: o grave precisa de som de verdade. Se só sai ar, a nota está baixa demais por enquanto.'
      ],
      tips: [
        'Boceje de leve antes de começar. O bocejo solta a garganta, mas não segure a posição de bocejo enquanto canta.',
        'Cante de pé, com os joelhos destravados e o peso bem distribuído. Uma postura solta ajuda o peito a vibrar.',
        'Grave e ouça. Muitas vezes a voz que parece sem graça por dentro soa cheia e bonita por fora.'
      ],
      listen: [
        "Can't Get Enough of Your Love, Babe — Barry White (a introdução falada, grave e relaxada, sem nenhum aperto)",
        'A Volta do Boêmio — Nelson Gonçalves (graves redondos e cheios, com a garganta solta)',
        'Fast Car — Tracy Chapman (voz grave, calma e próxima da fala)'
      ],
      ex: [
        { id: 'grave-1a', name: 'Suspiro até o grave', desc: 'Deslize até a nota de baixo como um suspiro de alívio e segure, em volume baixo.', syl: 'ah (suspiro)', mode: 'junto', mel: '3~1:2 1:2', bpm: 70, zone: 'low', dir: 'down', steps: 5, goal: { m: 'afin', v: 65 } },
        { id: 'grave-1b', name: 'Fala cantada', desc: 'Repita três notas descendo com a leveza de quem concorda numa conversa.', syl: 'hum', mode: 'eco', mel: '3 2 1:3', bpm: 76, zone: 'low', dir: 'down', steps: 6, goal: { m: 'afin', v: 70 } },
        { id: 'grave-1c', name: 'Nota grave em "mmm"', desc: 'Segure uma nota grave de boca fechada, com a mão no peito sentindo a vibração.', syl: 'mmm (boca fechada)', mode: 'junto', mel: '1:4', bpm: 66, zone: 'low', dir: 'down', steps: 6, goal: { m: 'afin', v: 70 } }
      ]
    },
    {
      id: 'grave-2',
      name: 'Ressonância de peito',
      level: 1,
      goal: 'Sentir a vibração da voz no peito e manter esse som cheio ao trocar de vogal e de nota.',
      text: [
        'Ressonância é o jeito como o som da voz ganha cor e volume ao passar pelo corpo. As pregas vocais produzem um som pequeno; quem o transforma são os espaços por onde ele passa, como a garganta, a boca e o nariz. Nas notas graves, você também sente uma vibração forte no peito. É essa sensação que os cantores chamam de ressonância de peito, e ela é um ótimo guia para saber se o grave está saindo solto.',
        'Para sentir, coloque a mão aberta no alto do peito, logo abaixo do pescoço, e diga "ô" numa nota grave e confortável. A mão vibra. Agora sussurre o mesmo "ô": a vibração some, porque no sussurro as pregas vocais não vibram. O objetivo desta lição é manter o peito vibrando ao trocar de vogal e de nota, sem precisar empurrar o som.',
        'As vogais mais fáceis para começar são "ô", "ó" e "a", que abrem espaço na boca e na garganta. O "u" também ajuda, por ser escuro e relaxado. Já o "i" e o "ê" deixam o som mais brilhante e mais fino; são ótimos, mas pedem mais cuidado para a garganta não fechar. A ideia não é escurecer o som artificialmente, e sim deixá-lo com espaço.',
        'Um aviso importante: ressonância de peito não é volume. Dá para sentir o peito vibrar cantando baixinho. Se você precisa cantar forte para sentir a vibração, provavelmente está empurrando. Volume médio, garganta solta e mão no peito: é só disso que você precisa.'
      ],
      steps: [
        'Mão no alto do peito, diga "ô" numa nota grave e confortável e sinta a vibração. Depois sussurre e perceba a diferença.',
        'Em "Vogais no peito", cante a mesma nota trocando "mô, mó, má" e mantenha a vibração igual nas três.',
        'Em "Três notas no peito", repita em eco a pequena frase com o som cheio nas três notas.',
        'No "Arpejo no peito", desça pelas notas do acorde e chegue na última com a mesma vibração da primeira.',
        'Se o som ficou cheio e solto, registre "Solto". Se precisou de força, registre mais baixo e repita amanhã.'
      ],
      mistakes: [
        'Cantar alto para sentir a vibração. Correção: volume de conversa. A vibração no peito vem do som solto, não da força.',
        'Perder o som cheio ao trocar de vogal. Correção: mude só a boca e mantenha a garganta no mesmo lugar, como se o "ô" continuasse por baixo do "a".',
        'Afundar o peito e curvar os ombros. Correção: peito aberto e ombros soltos. Uma postura fechada aperta o espaço por onde o som passa.'
      ],
      tips: [
        'Experimente fazer o "ô" de costas no chão, com a mão no peito. Nessa posição o corpo relaxa e a vibração fica mais fácil de sentir.',
        'Leia um texto qualquer em voz alta, devagar, sentindo o peito vibrar. O som que você busca no canto é esse mesmo, só que sustentado.'
      ],
      listen: [
        'Não Deixe o Samba Morrer — Alcione (voz de peito cheia e firme, sem aperto)',
        "Ol' Man River — Paul Robeson (o peito vibrando nas notas mais graves)",
        'Feeling Good — Nina Simone (o começo sem acompanhamento, só com a voz grave)'
      ],
      ex: [
        { id: 'grave-2a', name: 'Vogais no peito', desc: 'Cante a mesma nota em três vogais, mantendo a vibração no peito igual nas três.', syl: 'mô mó má', mode: 'junto', mel: '1:2 1:2 1:2', lyr: 'mô mó má', bpm: 70, zone: 'low', dir: 'down', steps: 6, goal: { m: 'afin', v: 70 } },
        { id: 'grave-2b', name: 'Três notas no peito', desc: 'Ouça três notas subindo e descendo e repita com o som cheio e solto.', syl: 'bô', mode: 'eco', mel: M.tres, bpm: 78, zone: 'low', dir: 'down', steps: 6, goal: { m: 'afin', v: 70 } },
        { id: 'grave-2c', name: 'Arpejo no peito', desc: 'Desça pelas notas do acorde em "ô", chegando na última com a mesma vibração da primeira.', syl: 'ô', mode: 'junto', mel: '5 3 1:3', bpm: 72, zone: 'low', dir: 'down', steps: 6, goal: { m: 'afin', v: 70 } }
      ]
    },
    {
      id: 'grave-3',
      name: 'Descer até o grave',
      level: 1,
      goal: 'Ampliar com calma a extensão grave, descendo por escalas e deslizes sem afundar a voz.',
      text: [
        'Mesmo sendo o seu lado forte, o grave também tem um limite, e ele pode crescer com cuidado. A nota mais grave que você alcança depende do tamanho das suas pregas vocais, que é coisa do corpo, mas também de quanto elas conseguem relaxar e encurtar. Muita gente perde duas ou três notas graves por pura tensão. Com treino, essas notas aparecem.',
        'O caminho mais seguro para o grave é descendo. Começar numa nota confortável e ir descendo pela escala deixa a voz chegar ao fundo já embalada, sem susto. Começar direto numa nota muito grave costuma fazer a pessoa apertar a garganta ou empurrar o queixo para baixo. Por isso todos os exercícios desta lição começam no meio e terminam embaixo.',
        'Nos exercícios de extensão, a escada de tons termina um pouco abaixo do seu grave confortável. A meta é a nota mais grave com som de verdade, com altura definida que o microfone consegue medir. Aquele som estalado e rouco das notas muito baixas, a fritura vocal (vocal fry), não conta. Um pouco de fritura no fim de uma frase é normal, mas usar fritura para alcançar o grave não treina a extensão.',
        'Desça só até onde a voz ainda soa solta. Quando a nota começar a sumir, a garganta apertar ou o som virar só ar, aquele é o seu limite de hoje: pare ali, mesmo que a escada continue. Forçar o grave cansa e pode deixar a voz rouca, e dor, ardor ou rouquidão são sinal para parar. A extensão cresce de meio em meio tom, ao longo de semanas.'
      ],
      steps: [
        'Comece com "Cinco notas descendo" na parte grave confortável. É o aquecimento para descer mais.',
        'Em "Até o fundo, devagar", a escada desce de meio em meio tom. Acompanhe enquanto o som estiver solto.',
        'No "Suspiro até o porão", deslize como um suspiro de alívio e segure a nota de baixo com som, sem fritura.',
        'Veja no resultado a nota mais grave com som e registre sem forçar números.',
        'Depois do treino de extensão, fale algumas frases em voz normal ou cante algo tranquilo, para a voz voltar ao meio.'
      ],
      mistakes: [
        'Apertar o queixo contra o pescoço nas notas mais graves. Correção: queixo solto e cabeça reta. Se precisar abaixar a cabeça para a nota sair, ela ainda não está disponível.',
        'Usar fritura para fingir a nota. Correção: a nota precisa ter som com altura definida. Se virou estalo rouco, você passou do limite de hoje.',
        'Querer bater a meta no primeiro dia. Correção: a extensão grave cresce devagar. Meio tom a mais depois de algumas semanas já é progresso de verdade.'
      ],
      tips: [
        'Ao acordar, a voz costuma estar mais grave, mas também mais rígida. Não use esse grave da manhã como medida; aqueça com deslizes leves antes do treino de extensão.',
        'Beba água ao longo do dia. Pregas vocais hidratadas vibram com mais facilidade, e isso aparece principalmente nas notas extremas.'
      ],
      listen: [
        'I Walk the Line — Johnny Cash (o cantarolar antes das estrofes e as notas graves no fim das frases)',
        'You Want It Darker — Leonard Cohen (graves muito baixos, cantados quase falando, sem empurrar)',
        'Long Black Train — Josh Turner (o grave do refrão, cheio e sem esforço aparente)'
      ],
      ex: [
        { id: 'grave-3a', name: 'Cinco notas descendo', desc: 'Ouça cinco notas descendo e repita, com a última tão cheia quanto a primeira.', syl: 'nô', mode: 'eco', mel: M.cincoDesce, bpm: 80, zone: 'low', dir: 'down', steps: 6, goal: { m: 'afin', v: 70 } },
        { id: 'grave-3b', name: 'Até o fundo, devagar', desc: 'Cante cinco notas descendo em "ô" enquanto a escada passa um pouco do seu grave confortável.', syl: 'ô', mode: 'junto', mel: M.cincoDesce, bpm: 72, zone: 'bottom', dir: 'down', steps: 7, goal: { m: 'low', v: 2 } },
        { id: 'grave-3c', name: 'Suspiro até o porão', desc: 'Deslize da quinta até a tônica em "u" e segure a nota de baixo com som, sem fritura.', syl: 'u', mode: 'junto', mel: '5~1:2 1:2', bpm: 66, zone: 'bottom', dir: 'down', steps: 7, goal: { m: 'low', v: 3 } }
      ]
    },
    {
      id: 'grave-4',
      name: 'Grave com presença',
      level: 2,
      goal: 'Deixar o grave audível e claro, com brilho na frente do rosto, sem engrossar e sem empurrar volume.',
      text: [
        'Um problema comum de quem tem voz grave é sumir: o som é bonito por dentro, mas quem ouve não entende as palavras, e a voz se perde quando entra um violão ou uma banda. A reação natural é empurrar mais ar e cantar mais forte, e aí aparecem o cansaço e a sensação de grito. A solução não é volume. É presença: um som com brilho e foco, que chega longe sem esforço.',
        'Presença vem da ressonância na frente do rosto. Sons como "nh", "m" e "n" e vogais como "ê" e "i" levam a vibração para a região da boca e do nariz, que muitos cantores chamam de máscara. Diga "nhé, nhé" como quem imita uma criança fazendo manha: o som fica mais brilhante e mais fácil de ouvir, sem ficar mais alto. O desafio desta lição é misturar esse brilho com o corpo do grave que você já tem.',
        'Um bom grave tem as duas coisas ao mesmo tempo: o peito vibrando e um ponto de brilho na frente. Só com peito, fica abafado; só com brilho, fica fino. Pense numa lanterna: o peito é a pilha e o brilho é o foco da luz. Com o foco certo, a mesma pilha ilumina muito mais longe.',
        'Na hora de cantar, imagine que você fala com alguém a três metros de distância, e não a trinta. A voz chega lá com clareza, sem força. Se a garganta apertar, o pescoço endurecer ou as veias saltarem, você está empurrando: diminua o volume e volte para o "nhé". Dor, ardor ou rouquidão são sinal para parar.'
      ],
      steps: [
        'Diga "nhé, nhé" de forma exagerada e perceba o brilho na frente do rosto. Depois diga "ô" e perceba o peito. Tente juntar os dois.',
        'Em "Grave com brilho", repita as três notas em "nhê", mantendo o brilho mesmo na nota mais baixa.',
        'Em "Contar no grave", conte de um a quatro cantando, com a clareza de quem fala com alguém do outro lado da sala.',
        'Na escala em "mê", mantenha o mesmo foco subindo e descendo, sem engrossar na descida.',
        'Na nota longa, segure o grave com presença pelo tempo da meta, sem aumentar o volume para compensar.'
      ],
      mistakes: [
        'Engrossar a voz na descida. Correção: a nota de baixo tem o mesmo foco da de cima. Pense em "nhé" e não em "ô" nas notas mais graves.',
        'Confundir presença com volume. Correção: grave com presença pode ser cantado baixo. Teste: diminua o volume e veja se as palavras continuam claras.',
        'Deixar o som anasalado demais. Correção: o brilho vem da frente, mas a vogal não pode sair toda pelo nariz. Tape o nariz por um instante cantando "a": se o som mudar muito, ele estava escapando pelo nariz.'
      ],
      tips: [
        'Grave você falando uma frase e depois cantando a mesma frase numa nota grave. A voz cantada deve ter a mesma clareza da falada.',
        'Sorrir de leve com os olhos, sem esticar a boca, costuma acrescentar brilho ao som.'
      ],
      listen: [
        'Gostava Tanto de Você — Tim Maia (grave com brilho e presença, que se destaca da banda sem grito)',
        'Relicário — Cássia Eller (grave relaxado e claro, perto da fala, no Acústico MTV)',
        'Back to Black — Amy Winehouse (grave com presença e palavras bem claras)'
      ],
      ex: [
        { id: 'grave-4a', name: 'Grave com brilho', desc: 'Repita três notas em "nhê", com o brilho na frente do rosto até a nota mais baixa.', syl: 'nhê', mode: 'eco', mel: M.tres, bpm: 80, zone: 'low', dir: 'down', steps: 6, goal: { m: 'afin', v: 75 } },
        { id: 'grave-4b', name: 'Contar no grave', desc: 'Conte de um a quatro cantando, com a clareza de quem fala com alguém do outro lado da sala.', syl: 'um, dois, três, quatro', mode: 'junto', mel: '1 1 1 2 1:2', lyr: 'um dois três qua tro', bpm: 80, zone: 'low', dir: 'down', steps: 6, goal: { m: 'afin', v: 75 } },
        { id: 'grave-4c', name: 'Cinco notas com presença', desc: 'Escala de cinco notas em "mê" na parte grave, com o mesmo foco subindo e descendo.', syl: 'mê', mode: 'junto', mel: M.cinco, bpm: 88, zone: 'low', dir: 'down', steps: 6, goal: { m: 'afin', v: 75 } },
        { id: 'grave-4d', name: 'Nota longa com presença', desc: 'Segure uma nota grave confortável em "ê", com brilho e sem aumentar o volume.', syl: 'ê', mode: 'junto', mel: '1:12', bpm: 60, zone: 'low', dir: 'stay', steps: 2, goal: { m: 'sec', v: 10 } }
      ]
    },
    {
      id: 'grave-5',
      name: 'Afinação nos graves',
      level: 2,
      goal: 'Manter os graves afinados até o fim das frases, sem deixar a nota cair por falta de energia e sem depender da fritura vocal.',
      text: [
        'Nos graves, a afinação tem um inimigo próprio: a falta de energia. Como a nota grave parece fácil, a tendência é relaxar demais, deixar o ar enfraquecer e a nota afundar um pouco abaixo do lugar. Isso aparece principalmente no fim das frases, quando o ar está acabando, e nas notas que descem. O microfone mostra esse desvio como um traço abaixo da barra.',
        'Relaxar a garganta não é o mesmo que relaxar o apoio. A garganta fica solta, mas o ar continua saindo firme e constante até o último instante, como uma torneira que não vai fechando aos poucos. Pense em sustentar a nota grave, e não em largá-la. Uma imagem que funciona: a nota grave é um tapete que você estica, e não uma pedra que você solta no chão.',
        'Cuidado também com a fritura vocal, aquele som estalado e rouco das notas muito baixas. Usada de vez em quando, como enfeite no começo ou no fim de uma frase, ela é um recurso de estilo. Mas quando vira hábito, a nota perde a altura definida, e nem o microfone nem quem escuta conseguem saber que nota era. Se as suas frases terminam sempre em fritura, você está saindo do tom no final.',
        'O bordão é o melhor aliado aqui. Com a tônica soando sem parar, qualquer queda de afinação vira um tremor áspero entre a sua voz e o bordão. Nos graves, esse tremor é mais lento e fácil de perceber, então use isso a seu favor: ouça, corrija e segure a nota limpa até o fim.'
      ],
      steps: [
        'Use fone de ouvido e comece com "Grave sobre o bordão". Segure cada nota até o fim, ouvindo se aparece tremor.',
        'Em "Descida afinada", ouça a frase em eco e repita sem deixar as últimas notas caírem.',
        'Na "Ode à Alegria no grave", cante a melodia inteira na parte grave da voz, com energia até a última nota.',
        'Confira no resultado se as notas finais ficaram abaixo da barra. Se ficaram, repita pensando nelas um pouco acima.',
        'Ao terminar, faça um suspiro leve de cima para baixo para soltar a voz.'
      ],
      mistakes: [
        'A última nota afunda. Correção: guarde ar para o fim e pense na nota final por cima. O fim da frase é onde a afinação no grave se perde.',
        'Terminar as frases em fritura. Correção: termine com som de verdade e corte a nota antes de o ar acabar. Fritura só como escolha, nunca como hábito.',
        'Cantar o grave sem energia porque ele parece fácil. Correção: nota grave também precisa de ar firme. Garganta solta, apoio ativo.'
      ],
      tips: [
        'Grave as notas longas e ouça só o final de cada uma. É ali que a queda aparece.',
        'Se uma nota muito grave só sai com fritura, suba meio tom com o botão +½. Afinação vem antes de extensão.'
      ],
      listen: [
        "Can't Help Falling in Love — Elvis Presley (notas graves longas e afinadas até o fim)",
        'Olhos nos Olhos — Maria Bethânia (graves sustentados com afinação firme)',
        'Sodade — Cesária Évora (grave tranquilo e afinado, sem nenhum empurrão)'
      ],
      ex: [
        { id: 'grave-5a', name: 'Grave sobre o bordão', desc: 'Sobre o bordão, segure a tônica, a quinta de baixo e a tônica de novo, cada nota limpa até o fim.', syl: 'ô', mode: 'junto', drone: true, mel: '1:4 5,:4 1:4', bpm: 60, zone: 'low', dir: 'down', steps: 4, goal: { m: 'afin', v: 80 } },
        { id: 'grave-5b', name: 'Descida afinada', desc: 'Ouça uma frase que desce até a quinta de baixo e volta à tônica, e repita sem deixar o fim cair.', syl: 'nô', mode: 'eco', mel: '5 4 3 2 1 5,:2 1:2', bpm: 84, zone: 'low', dir: 'down', steps: 5, goal: { m: 'afin', v: 80 } },
        { id: 'grave-5c', name: 'Ode à Alegria no grave', desc: 'Cante o tema de Beethoven na parte grave da voz, com energia até a última nota.', syl: 'lô', mode: 'junto', mel: M.ode, bpm: 92, zone: 'low', dir: 'down', steps: 3, goal: { m: 'afin', v: 80 } }
      ]
    }
  ]
};
