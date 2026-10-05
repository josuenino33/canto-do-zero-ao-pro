import { M } from './helpers.js';

const NG = 'ng (boca entreaberta, a parte de trás da língua encostada no céu da boca, som saindo pelo nariz)';

export default {
  id: 'agudo',
  name: 'Agudos sem gritar',
  desc: 'Subir sem grito: entender por que a voz aperta, achar a sua passagem, usar consoantes e vogais a seu favor, construir a voz mista e ganhar notas aos poucos.',
  lessons: [
    {
      id: 'agudo-1',
      name: 'Por que a voz grita ao subir',
      level: 2,
      goal: 'Entender o que acontece no corpo quando a voz vira grito e aplicar a regra de ouro: ao subir, menos volume e menos peso.',
      text: [
        'Quase todo mundo que diz que "não alcança os agudos" faz a mesma coisa sem perceber: leva para cima a voz de peito, a mesma da fala, inteira e pesada, e tenta compensar a subida com mais ar e mais força. Funciona por algumas notas. Depois a laringe (a caixinha onde ficam as pregas vocais, que aparece no pescoço como o gogó) sobe junto, o pescoço trava, o queixo vai para a frente e o som vira grito. Cansa rápido, costuma desafinar para cima ou quebrar, e deixa a garganta ardendo no fim do dia.',
        'Isso acontece porque a voz funciona ao contrário do que a intuição manda. Para a nota subir, as pregas vocais precisam ficar mais esticadas e mais finas. Quando você mantém o peso da fala e empurra mais ar, elas continuam grossas, a pressão embaixo delas aumenta e o corpo tenta segurar tudo apertando a garganta. É como tentar tirar uma nota mais aguda do violão batendo mais forte na corda: o som fica mais alto, não mais agudo.',
        'Por isso a regra de ouro deste módulo é simples: ao subir, diminua o volume e deixe a voz ficar mais leve e mais estreita. Menos ar, não mais. O lugar que a força ocupava passa a ser da ressonância, que é o jeito como o som se amplifica dentro da boca e do rosto, e ela não cansa. No começo o agudo leve vai parecer fraco e pequeno, e isso é normal: primeiro vem a nota livre, e só depois, com semanas de treino, ela ganha corpo.',
        'Agudo é coordenação, não força, e coordenação se ganha devagar. Faça estes exercícios sempre depois de aquecer, em volume de conversa ou menos. Dor, ardor, coceira forte ou rouquidão são sinais para parar na hora, beber água e descansar a voz até o dia seguinte. Agudo bem feito não dói.'
      ],
      steps: [
        'Aqueça antes: alguns minutos de vibração de lábios ("brr") e deslizes em "u", em volume baixo.',
        'No exercício "Subir diminuindo", cante a escala de cinco notas e diminua o volume a cada nota que sobe. A nota mais alta é a mais leve da escala.',
        'Coloque dois dedos de leve no pescoço, na altura do gogó. Se ele sobe muito ou a região endurece na nota alta, diminua ainda mais o volume.',
        'Na sirene com os lábios, deixe a vibração fazer o trabalho. Se os lábios param de vibrar, é sinal de ar demais ou de aperto.',
        'Pare a série quando a voz começar a apertar, mesmo que faltem tons. A nota que sai com aperto ainda não é sua.',
        'No fim, faça os suspiros para descer. Eles devolvem a voz para a região da fala.'
      ],
      mistakes: [
        'Aumentar o volume para "chegar" na nota. Correção: faça o contrário. Quanto mais alta a nota, mais baixo o volume, até a voz aprender o caminho.',
        'Levantar o queixo e esticar o pescoço para a frente. Correção: queixo nivelado e nuca longa. Imagine que a nota alta está à sua frente, não acima da cabeça.',
        'Abrir a boca ao máximo na nota alta. Correção: boca solta e moderadamente aberta. Escancarar puxa o som para o grito.',
        'Achar que o agudo leve "não vale". Correção: ele é a base. Força em cima de aperto vira grito; com o tempo, leveza bem treinada vira um agudo cheio.'
      ],
      tips: [
        'Pense na escala como uma ladeira que você desce de bicicleta, não como uma escada que você sobe carregando peso.',
        'Grave um trecho antes e outro depois do exercício. A diferença de aperto na voz costuma ser fácil de ouvir.',
        'Um gole de água entre as séries ajuda. Se a garganta pedir descanso, pare e volte amanhã.'
      ],
      listen: [
        'Sozinho — Caetano Veloso (agudos leves e soltos, sem empurrar a voz)',
        'Flor de Lis — Djavan (frases que sobem com a voz cada vez mais leve, não mais forte)'
      ],
      ex: [
        { id: 'agudo-1a', name: 'Subir diminuindo', desc: 'Cante a escala de cinco notas em "u" e diminua o volume a cada nota que sobe; a mais alta é a mais leve.', syl: 'u', mode: 'junto', mel: M.cinco, bpm: 84, zone: 'high', dir: 'up', steps: 6, goal: { m: 'afin', v: 70 } },
        { id: 'agudo-1b', name: 'Sirene com os lábios', desc: 'Faça a vibração de lábios subindo e descendo uma quinta, sem deixar os lábios pararem.', syl: 'brr (vibração de lábios)', mode: 'junto', mel: M.sirene5, bpm: 70, zone: 'high', dir: 'up', steps: 6, goal: { m: 'afin', v: 65 } },
        { id: 'agudo-1c', name: 'Arpejo leve em "nô"', desc: 'Ouça tônica, terça, quinta e volta, e repita em "nô" com a quinta mais leve que a tônica.', syl: 'nô', mode: 'eco', mel: M.arpejo, bpm: 80, zone: 'high', dir: 'up', steps: 6, goal: { m: 'afin', v: 70 } },
        { id: 'agudo-1d', name: 'Suspiros para descer', desc: 'Desaquecimento: deslizes leves de cima para baixo em "u", como suspiros de alívio, descendo de tom até a região da fala.', syl: 'u', mode: 'junto', mel: '5~1:3', bpm: 60, zone: 'mid', dir: 'down', steps: 4, goal: { m: 'rep', v: 3 }, cool: true }
      ]
    },
    {
      id: 'agudo-2',
      name: 'Encontrar a sua passagem',
      level: 2,
      goal: 'Descobrir, com deslizes leves, em que altura a sua voz quer mudar de jeito e aprender a deixar essa mudança acontecer.',
      text: [
        'Ao subir devagar, toda voz chega a uma região em que o jeito de vibrar precisa mudar. Embaixo, as pregas vocais vibram grossas e com bastante contato, e o som tem cara de fala: é a voz de peito. Em cima, vibram mais finas e esticadas, e o som fica mais leve: é a voz de cabeça (o falsete, mais soprado, é o parente mais leve dela). A região onde uma coisa vira a outra se chama passagem. Os nomes vêm das sensações de vibração no peito e na cabeça; o som, na verdade, é feito sempre na laringe.',
        'Se você só canta notas graves, provavelmente nunca deixou essa troca acontecer. Quando a voz chega na passagem ela "quer" virar, e você segura a voz de peito com força para ela não virar. É aí que nasce o grito. A quebra, aquele estalo em que a voz pula de repente para um som fino, é a mesma troca acontecendo sem controle. Ela não é defeito: é a prova de que você tem as duas vozes, e o treino é aprender a passar de uma para a outra sem degrau.',
        'A passagem é diferente em cada pessoa e muda com o tipo de voz, com o cansaço e até com a vogal. Por isso não adianta decorar uma nota de tabela. Os deslizes desta lição servem para você ouvir e sentir onde a sua voz quer mudar: um ponto em que o som afina, fica instável, falha ou pede mais força. Muita gente tem uma primeira mudança mais embaixo e outra mais em cima. Anote em que tom da escada isso aconteceu, porque esse é o mapa da sua voz.',
        'Deslize sempre em volume baixo e com vogal fechada, como "u", ou com "ng". Volume baixo deixa a troca acontecer sem briga; volume alto obriga a garganta a segurar. Se a voz quebrar, ótimo, você achou o lugar. Repita o deslize mais leve ainda, deixando a voz mudar um pouco antes e mais devagar, até a quebra virar uma curva.',
        'O último exercício desta lição passa um pouco do seu agudo confortável, sempre em "ng" e leve como um gemido. Você não precisa cantar todos os tons: pare no primeiro em que a voz apertar ou desafinar. A meta de agudo sobe aos poucos, ao longo de semanas, e cada meio tom ganho sem esforço vale mais do que três ganhos no grito.'
      ],
      steps: [
        'Faça a sirene de oitava em "u", subindo e descendo em volume baixo. Preste atenção no ponto em que a voz muda de cor ou falha.',
        'Repita deixando a mudança acontecer nesse ponto. Não segure a voz de peito: deixe o som ficar mais fino.',
        'Faça o suspiro: comece leve em cima e desça deslizando, como um suspiro de alívio. Descer de cima ensina a voz leve a se misturar com a de baixo.',
        'Na sirene em "ng", deslize de novo. O "ng" mantém o som na frente e a quebra costuma diminuir.',
        'Anote em que tom da escada a voz começou a mudar. Daqui a algumas semanas, compare.'
      ],
      mistakes: [
        'Segurar a voz de peito para não quebrar. Correção: deixe quebrar no começo. A quebra mostra onde treinar; segurar ensina o grito.',
        'Deslizar alto para a voz "não falhar". Correção: o volume baixo é o que permite a troca. Se falhou baixo, faça ainda mais leve e mais devagar.',
        'Achar que a voz de cabeça é "voz de outra pessoa" e evitar. Correção: é a sua voz, ainda sem treino. Ela fica mais firme e menos soprada nas próximas lições.'
      ],
      tips: [
        'Desenhe uma curva no ar com a mão enquanto desliza. Ajuda a não travar o corpo.',
        'A passagem fica mais difícil no fim do dia, com cansaço ou com gripe. Nesses dias, faça só deslizes leves e pare cedo.',
        'Imitar um cachorrinho choramingando, bem baixinho, costuma soltar a voz de cabeça em quem nunca usou.'
      ],
      listen: [
        'Travessia — Milton Nascimento (a passagem entre a voz cheia e a voz leve, usada como expressão)',
        'Hallelujah — Jeff Buckley (a voz fica mais leve ao subir, sem forçar as notas altas)'
      ],
      ex: [
        { id: 'agudo-2a', name: 'Sirene de oitava em "u"', desc: 'Deslize uma oitava para cima e volte, em volume baixo, notando onde a voz quer mudar.', syl: 'u', mode: 'junto', mel: M.sirene8, bpm: 70, zone: 'high', dir: 'up', steps: 6, goal: { m: 'afin', v: 65 } },
        { id: 'agudo-2b', name: 'Suspiro de cima', desc: 'Comece leve na nota de cima e desça deslizando até a tônica, como um suspiro de alívio.', syl: 'u', mode: 'junto', mel: M.suspiro, bpm: 70, zone: 'high', dir: 'up', steps: 6, goal: { m: 'afin', v: 65 } },
        { id: 'agudo-2c', name: 'Sirene em "ng" um pouco além', desc: 'Deslize em "ng" até um pouco acima do seu agudo confortável, leve como um gemido; pare no tom em que apertar.', syl: NG, mode: 'junto', mel: M.sirene8, bpm: 70, zone: 'top', dir: 'up', steps: 6, goal: { m: 'top', v: 2 } }
      ]
    },
    {
      id: 'agudo-3',
      name: 'Consoantes que ajudam a atravessar',
      level: 2,
      goal: 'Usar "gu", "gê", "mum" e "ng" para atravessar a passagem em escalas e arpejos sem empurrar a voz.',
      text: [
        'Algumas consoantes funcionam como rodinhas de bicicleta para o agudo. O "g", o "ng" e o "m" levam a garganta e a boca, sozinhas, para uma posição boa para subir, sem você precisar pensar em músculo nenhum. Por isso professores de canto usam tanto sílabas como "gu", "gê" e "mum" para treinar a passagem. Elas fazem o trabalho difícil enquanto a voz aprende o caminho.',
        'O "g" se forma com a parte de trás da língua encostando no céu da boca. Soltar o "g" faz a nota começar com as pregas vocais bem fechadas, sem vazar ar e sem golpe, e isso dá firmeza à voz leve, que no começo costuma sair soprada. O "u" logo depois mantém a laringe mais baixa e a garganta aberta. O "gê" é mais brilhante e treina a mesma coisa numa vogal que tende a abrir e gritar, então é um passo a mais.',
        'O "mum" e o "ng" deixam parte do som sair pelo nariz e reforçam a vibração na frente do rosto, nos lábios e no nariz. Essa sensação de som "na máscara" é um bom guia: quando você sente esse zumbido na frente, raramente está empurrando com o pescoço. Cante o "m" com os lábios soltos e um sorriso leve por dentro, sem apertar a boca.',
        'Use estas sílabas exatamente onde a voz quer quebrar ou apertar, em volume médio para baixo. Quando a escala atravessar a passagem com uma sílaba, repita com outra mais aberta. O objetivo é a voz cruzar a região de troca sem degrau, sem mudar de força e sem desafinar. Se em algum tom a voz apertar, pare a série ali e volte no dia seguinte.'
      ],
      steps: [
        'Comece com a escala de cinco notas em "gu", com um "g" leve em cada nota e volume médio-baixo do começo ao fim.',
        'Repare se a quebra aparece no mesmo lugar que nos deslizes da lição anterior. Se aparecer, diminua o volume e deixe a voz afinar nessa nota.',
        'Passe para o arpejo em "gê". Mantenha o "ê" fechado, quase um "i", nas notas de cima.',
        'Faça a escala em "mum" sentindo o zumbido nos lábios. Os lábios se tocam de leve entre as notas, sem apertar.',
        'Termine com o arpejo em "ng", só com o zumbido, e confira se a voz atravessou a passagem sem degrau.'
      ],
      mistakes: [
        'Explodir o "g" com força. Correção: o "g" é um toque leve da língua. Força no "g" vira golpe na garganta.',
        'Abrir o "gê" para "é" na nota alta. Correção: mantenha o "ê" fechado e estreito; no agudo ele pode até ficar parecido com "i".',
        'Fechar os lábios com força no "mum". Correção: lábios soltos e dentes separados por dentro, como se houvesse uma uva na boca.'
      ],
      tips: [
        'O "gu" de brincar com bebê ("gugu-dadá") é o som certo: pequeno, bobo e sem esforço.',
        'Alterne as sílabas na mesma série: um tom em "gu", o seguinte em "mum". Assim a voz aprende que a passagem não depende da sílaba.',
        'Se a voz cansar, volte à vibração de lábios por um minuto antes de continuar.'
      ],
      ex: [
        { id: 'agudo-3a', name: 'Cinco notas em "gu"', desc: 'Escala de cinco notas com um "g" leve em cada nota, atravessando a passagem em volume médio-baixo.', syl: 'gu', mode: 'junto', mel: M.cinco, bpm: 88, zone: 'high', dir: 'up', steps: 7, goal: { m: 'afin', v: 70 } },
        { id: 'agudo-3b', name: 'Arpejo em "gê"', desc: 'Tônica, terça, quinta e volta em "gê", com o "ê" fechado e estreito nas notas de cima.', syl: 'gê', mode: 'junto', mel: M.arpejo, bpm: 84, zone: 'high', dir: 'up', steps: 7, goal: { m: 'afin', v: 70 } },
        { id: 'agudo-3c', name: 'Cinco notas em "mum"', desc: 'A escala de cinco notas em "mum", sentindo o zumbido nos lábios em todas as notas.', syl: 'mum', mode: 'junto', mel: M.cinco, bpm: 88, zone: 'high', dir: 'up', steps: 7, goal: { m: 'afin', v: 70 } },
        { id: 'agudo-3d', name: 'Arpejo em "ng"', desc: 'O arpejo com a boca entreaberta em "ng", ligando as notas sem cortar o som.', syl: NG, mode: 'junto', mel: M.arpejo, bpm: 80, zone: 'high', dir: 'updown', steps: 7, goal: { m: 'afin', v: 70 } }
      ]
    },
    {
      id: 'agudo-4',
      name: '"Nhé" e "nei": a voz mista',
      level: 2,
      goal: 'Encontrar a voz mista, que soa clara como a fala mas leve o bastante para subir, usando um "nhé" levemente anasalado.',
      text: [
        'Voz mista é o nome que se dá ao jeito de cantar que fica no meio do caminho entre a voz de peito e a de cabeça: tem o brilho e a clareza da fala, com a leveza que deixa a nota subir. Não é um terceiro órgão nem um truque; é uma coordenação em que as pregas vocais ficam finas o bastante para o agudo e fechadas o bastante para o som não sair soprado. É ela que a maioria dos cantores populares usa nos agudos que parecem fáceis.',
        'Um atalho conhecido para achar essa coordenação é o "nhé", feito com um som levemente anasalado e meio provocador, como uma criança implicando com alguém: "nhé, nhé, nhé". Esse som estreita um pouco o tubo logo acima das pregas vocais e deixa a voz mais brilhante e mais "na frente", sem precisar de volume. Com ele, muita gente consegue subir de forma clara pela primeira vez, sem gritar e sem cair no falsete soprado.',
        'O "nhé" soa feio de propósito. Não é para cantar assim na música; é um andaime. Depois que a voz entende o caminho, você tira o nasal aos poucos ("nhé" vira "né", depois "nei") e mantém a mesma sensação de leveza e brilho. O "nei" é o passo seguinte porque o "ei" mantém a língua alta e o som estreito, o que ajuda na passagem.',
        'O volume aqui é médio para baixo, sempre. Se o "nhé" começar a doer, arranhar ou apertar, o som está sendo empurrado: diminua e deixe mais leve e mais bobo. O último exercício vai além do seu agudo confortável; pare no tom em que a voz apertar e lembre que essa meta é para as próximas semanas. Quando a voz mista aparecer, ela vai soar pequena e talvez estranha, e ganha corpo com o tempo, desde que você não a engorde com força.'
      ],
      steps: [
        'Fale "nhé, nhé, nhé" no tom de quem implica com alguém, leve e meio nasal. Sinta o som vibrando no nariz e atrás dos dentes da frente.',
        'Cante a escala de cinco notas em "nhé", com a mesma sensação da fala. O som é pequeno e brilhante, não grosso.',
        'No exercício "Do nhé ao né", cante o arpejo em "nhé" e repita em "né", mudando só o nasal.',
        'Passe para "nei" no arpejo. Se a voz voltar a apertar no agudo, volte um passo, para o "nhé".',
        'Termine com a escada que passa um pouco do seu agudo confortável, em "nhé". Pare no tom em que a voz apertar.'
      ],
      mistakes: [
        'Fazer o "nhé" alto e agressivo. Correção: o som é pequeno e brincalhão, não bravo. Pense em provocar, não em brigar.',
        'Mandar todo o som para o nariz, abafado. Correção: tape o nariz por um instante no meio do "é". O som deve mudar pouco; a maior parte dele sai pela boca.',
        'Levar a voz de peito pesada para dentro do "nhé". Correção: se no agudo o "nhé" virou grito, comece a escala mais leve e deixe a voz afinar nas notas de cima.',
        'Abandonar o exercício porque o som é feio. Correção: é exercício, não interpretação. O som bonito vem depois, quando você tira o nasal.'
      ],
      tips: [
        'Imitar personagens de desenho com voz fina e anasalada treina a mesma coordenação, desde que sem esforço.',
        'Grave o "nhé" e o "nei" no mesmo tom. Quando o "nei" tiver o mesmo brilho do "nhé", você achou a voz mista.',
        'Um sorriso leve nos olhos, sem esticar a boca, ajuda a manter o som brilhante.'
      ],
      listen: [
        'Lilás — Djavan (agudos claros e leves, com brilho na frente do rosto)',
        'Ainda Bem — Marisa Monte (voz leve e clara, que sobe sem ganhar peso)'
      ],
      ex: [
        { id: 'agudo-4a', name: 'Cinco notas em "nhé"', desc: 'A escala de cinco notas em "nhé", leve e meio nasal, como uma implicância de criança.', syl: 'nhé', mode: 'junto', mel: M.cinco, bpm: 88, zone: 'high', dir: 'up', steps: 7, goal: { m: 'afin', v: 70 } },
        { id: 'agudo-4b', name: 'Do "nhé" ao "né"', desc: 'Cante o arpejo em "nhé" e repita em "né", mudando só o nasal e mantendo o brilho.', syl: 'nhé, depois né', mode: 'junto', mel: '1 3 5 3 1 r:1 1 3 5 3 1:2', lyr: 'nhé nhé nhé nhé nhé né né né né né', bpm: 84, zone: 'high', dir: 'up', steps: 6, goal: { m: 'afin', v: 70 } },
        { id: 'agudo-4c', name: 'Arpejo em "nei"', desc: 'Ouça o arpejo e repita em "nei", com o "ei" estreito e o som na frente do rosto.', syl: 'nei', mode: 'eco', mel: M.arpejo, bpm: 84, zone: 'high', dir: 'up', steps: 7, goal: { m: 'afin', v: 75 } },
        { id: 'agudo-4d', name: 'Um pouco além em "nhé"', desc: 'Escala de cinco notas em "nhé" que termina acima do seu agudo confortável; pare no tom em que a voz apertar.', syl: 'nhé', mode: 'junto', mel: M.cinco, bpm: 88, zone: 'top', dir: 'up', steps: 7, goal: { m: 'top', v: 3 } }
      ]
    },
    {
      id: 'agudo-5',
      name: 'Vogais que se ajustam no agudo',
      level: 3,
      goal: 'Ajustar as vogais ao subir (o "a" para "ó", o "é" para "ê", o "i" mais aberto) para o agudo soar cheio sem a boca escancarar em grito.',
      text: [
        'Cada vogal é uma forma diferente dentro da boca e da garganta, e cada forma favorece algumas notas. Na fala todas funcionam, porque falamos numa região pequena. No agudo, as vogais muito abertas e largas, como o "a" e o "é" escancarados, empurram a voz para o grito: a boca abre, a laringe sobe e o som fica estridente. Cantores de todos os estilos resolvem isso ajustando um pouco a vogal conforme sobem.',
        'O ajuste é pequeno e segue um padrão. Ao subir, o "a" vai para algo entre "ó" e "â", mais redondo e mais alto por dentro, e o "é" vai para "ê". O "i" e o "u", que são muito fechados, fazem o contrário e abrem um pouquinho: o "i" puxa para "ê" e o "u" para "ô". As vogais ficam mais parecidas entre si no agudo, e quem ouve continua entendendo a palavra, porque o ouvido completa.',
        'A boca não precisa escancarar. Abra mais por dentro do que por fora: o queixo cai solto, o fundo da boca se levanta como no começo de um bocejo, e os lábios podem ficar levemente arredondados. Quando a vogal está no lugar, a nota alta parece encaixar e precisa de menos esforço. Quando está larga demais, você sente a garganta apertando para segurar.',
        'Comece o ajuste um pouco antes da passagem, não em cima dela. Se você espera chegar na nota difícil para mudar a vogal, a voz já travou. Nos exercícios a mudança é gradual: cada nota que sobe fica um pouquinho mais redonda, como uma lente girando, e na descida a vogal volta ao normal. O último exercício passa do seu agudo confortável; pare no tom em que apertar, porque a meta é para ser alcançada em semanas.'
      ],
      steps: [
        'Cante a escala em "a" sem pensar em nada e ouça onde ela fica aberta e estridente. Normalmente é na passagem.',
        'Repita arredondando o "a" a cada nota que sobe, quase "ó" na mais alta, com o queixo solto e sem abrir mais a boca.',
        'Faça o arpejo em "é", fechando para "ê" na subida e deixando voltar para "é" na descida.',
        'No "i", faça o contrário: abra levemente para "ê" na nota de cima, sem sorrir largo.',
        'Termine com a escada que passa do agudo confortável, em "ó" redondo, parando no tom em que a voz apertar.'
      ],
      mistakes: [
        'Mudar a vogal de repente na nota alta. Correção: a mudança é gradual e começa antes da passagem, nota a nota.',
        'Arredondar tanto que a palavra vira outra. Correção: o ajuste é pequeno. Grave e ouça: a palavra precisa continuar compreensível.',
        'Esticar a boca num sorriso largo no "i" e no "é" agudos. Correção: lábios relaxados, cantos da boca levemente para a frente e espaço por dentro.'
      ],
      tips: [
        'No espelho, a boca no agudo deve parecer mais um "ó" vertical do que um "a" largo.',
        'Apoie um dedo no queixo: ele deve cair solto, sem ser empurrado para baixo nem para a frente.',
        'Cantores líricos fazem esse ajuste o tempo todo. Ouvir como as vogais deles ficam redondas no agudo ajuda a entender a ideia.'
      ],
      listen: [
        'Nessun Dorma — Luciano Pavarotti (como as vogais ficam redondas e altas por dentro nas notas agudas)'
      ],
      ex: [
        { id: 'agudo-5a', name: '"A" que arredonda', desc: 'Escala de cinco notas em "a", arredondando para "ó" à medida que sobe e voltando ao "a" na descida.', syl: 'a (arredondando para ó na subida)', mode: 'junto', mel: M.cinco, bpm: 88, zone: 'high', dir: 'up', steps: 7, goal: { m: 'afin', v: 75 } },
        { id: 'agudo-5b', name: 'Do "é" ao "ê"', desc: 'Arpejo de oitava em "é" que se fecha para "ê" nas notas de cima e volta a abrir na descida.', syl: 'é (fechando para ê no alto)', mode: 'junto', mel: M.arpejo8, bpm: 84, zone: 'high', dir: 'up', steps: 6, goal: { m: 'afin', v: 75 } },
        { id: 'agudo-5c', name: '"I" que abre um pouco', desc: 'Cinco notas em "i", abrindo levemente para "ê" na nota mais alta, sem sorrir largo.', syl: 'i (abrindo para ê no alto)', mode: 'junto', mel: M.cinco, bpm: 88, zone: 'high', dir: 'up', steps: 7, goal: { m: 'afin', v: 75 } },
        { id: 'agudo-5d', name: 'Notas novas em "ó"', desc: 'Arpejo em "ó" redondo que termina acima do seu agudo confortável; pare no tom em que a voz apertar.', syl: 'ó', mode: 'junto', mel: M.arpejo, bpm: 84, zone: 'top', dir: 'up', steps: 7, goal: { m: 'top', v: 4 } }
      ]
    },
    {
      id: 'agudo-6',
      name: 'Atravessar a passagem e ganhar notas',
      level: 3,
      goal: 'Atravessar a passagem em arpejos de oitava e escalas de nona, e ganhar notas acima do agudo confortável aos poucos, semana a semana.',
      text: [
        'Até aqui você atravessou a passagem em escalas curtas. O arpejo de oitava (tônica, terça, quinta, oitava e volta) e a escala de nona (sobe em arpejo até a nona e desce pela escala) são os exercícios clássicos para ligar a voz de baixo com a de cima numa linha só. Eles saltam por cima da região de troca, e por isso mostram rápido se a voz ainda tem degrau.',
        'O segredo do salto é preparar a leveza antes dele. Se você começa a tônica pesada, chega na oitava pesada e grita. Comece a nota de baixo já um pouco mais leve do que a sua fala, use uma sílaba que já funcionou para você ("gu", "nei", "mum") e deixe o topo ser a nota mais leve. Na descida, não despenque: a voz volta para o peito aos poucos, nota a nota.',
        'Ganhar notas novas é lento e funciona assim: a cada semana, a nota mais alta que sai livre, sem aperto e afinada, sobe um pouco. Às vezes meio tom, às vezes nada. Os exercícios de extensão desta lição terminam acima do seu agudo confortável de propósito, e você não precisa cantar todos os tons. Pare no primeiro tom em que a voz apertar, ficar soprada demais ou desafinar; a nota registrada só vale se saiu livre.',
        'As metas de agudo sobem aos poucos: primeiro algumas notas acima do agudo do seu primeiro teste, depois mais. Elas foram pensadas para semanas de treino, não para o primeiro dia. Cantar acima do limite com força não amplia a voz, só machuca. Dor, ardor, rouquidão ou sensação de areia na garganta são sinais para parar na hora e descansar até o dia seguinte.',
        'Refaça o teste de voz na aba Voz a cada duas ou três semanas, para o app atualizar os tons dos exercícios. A extensão confortável cresce junto com a técnica, e é comum perceber que notas que antes eram o limite viraram parte do meio da voz. Esse é o sinal mais claro de progresso.'
      ],
      steps: [
        'Aqueça com deslizes em "u" ou vibração de lábios. Extensão nunca se treina com a voz fria.',
        'Faça o arpejo de oitava em "gu", com a tônica leve e a oitava mais leve ainda.',
        'Passe para a escala de nona em "nei". Na descida pela escala, mantenha cada nota no lugar, sem cair.',
        'Faça os exercícios de extensão depois dos arpejos. Em cada tom, pergunte: saiu livre? Se não, pare a série ali.',
        'Registre a nota mais alta que saiu livre. Compare semana a semana, não dia a dia.'
      ],
      mistakes: [
        'Encher a nota de baixo antes do salto. Correção: comece já leve. O peso da tônica vai junto para a oitava.',
        'Ir até o último tom da escada por teimosia. Correção: a escada passa do seu limite de propósito. Parar no tom certo faz parte do exercício.',
        'Comparar a sua extensão com a de outra pessoa. Correção: cada voz tem um tamanho. O que importa é a sua nota livre subir com o tempo.',
        'Despencar na descida. Correção: desça com o mesmo cuidado da subida; o caminho de volta pela passagem também é treino.'
      ],
      tips: [
        'Faça a extensão em dias de voz descansada. Depois de um dia falando muito, faça só os arpejos.',
        'Se uma nota sai livre num dia e não sai no outro, é normal. A voz varia com sono, hidratação e cansaço.',
        'Termine com os suspiros para descer da primeira lição, para a voz voltar à região da fala.'
      ],
      listen: [
        'Sina — Djavan (frases que atravessam a passagem sem degrau, com a voz leve no alto)'
      ],
      ex: [
        { id: 'agudo-6a', name: 'Arpejo de oitava em "gu"', desc: 'Tônica, terça, quinta, oitava e volta em "gu", com a oitava sendo a nota mais leve.', syl: 'gu', mode: 'junto', mel: M.arpejo8, bpm: 84, zone: 'high', dir: 'up', steps: 6, goal: { m: 'afin', v: 75 } },
        { id: 'agudo-6b', name: 'Escala de nona em "nei"', desc: 'Suba em arpejo até a nona e desça pela escala em "nei", sem deixar a voz cair na descida.', syl: 'nei', mode: 'junto', mel: M.nona, bpm: 88, zone: 'high', dir: 'up', steps: 6, goal: { m: 'afin', v: 75 } },
        { id: 'agudo-6c', name: 'Extensão em arpejo', desc: 'Arpejo de oitava em "gu" que termina acima do seu agudo confortável; pare no tom em que a voz apertar.', syl: 'gu', mode: 'junto', mel: M.arpejo8, bpm: 84, zone: 'top', dir: 'up', steps: 7, goal: { m: 'top', v: 5 } },
        { id: 'agudo-6d', name: 'Extensão descendo do alto', desc: 'Comece leve na nota de cima e desça em arpejo em "u"; a escada vai além do agudo confortável, então pare no tom em que apertar.', syl: 'u', mode: 'junto', mel: M.arpejoDesce, bpm: 80, zone: 'top', dir: 'up', steps: 8, goal: { m: 'top', v: 7 } }
      ]
    },
    {
      id: 'agudo-7',
      name: 'Frases que sobem e o agudo forte',
      level: 3,
      goal: 'Levar a voz mista para frases curtas que sobem e conhecer, com cautela, o primeiro passo do belting saudável.',
      text: [
        'Nos exercícios você sobe em sílabas escolhidas para ajudar, como "nei" e "gu". Na música aparecem palavras com vogais abertas, consoantes que travam e, principalmente, emoção. É na frase de verdade que o hábito antigo volta: a nota alta chega, a vontade de "dar tudo" aparece e a voz pesada sobe junto, em grito. Levar a voz mista para a música é um treino à parte.',
        'O caminho é ir da sílaba para a palavra em etapas. Cante a frase primeiro na sílaba que funciona para você, depois em "lá", depois com a letra, mantendo a mesma leveza na nota alta. Prepare a subida antes de chegar nela: respire antes da frase, comece já leve e deixe a nota mais aguda ser a mais estreita, não a mais forte. E confira o tom, porque uma música alta demais para a sua voz vai pedir grito por mais técnica que você tenha; a ferramenta "Tom certo para a música", na aba Voz, ajuda nisso.',
        'A intensidade de uma frase não precisa vir do volume. Ela vem do texto, da cor da voz, das consoantes bem ditas e da intenção. Uma nota alta cantada leve e com significado costuma emocionar mais do que a mesma nota gritada. Com o tempo a voz mista ganha corpo, e você vai poder escolher entre o agudo leve e o agudo cheio.',
        'O agudo cheio e forte que se ouve no musical, no gospel e em muita MPB se chama belting. Ele não é grito: é a fala intensificada levada para cima, com brilho, a palavra clara, o pescoço livre e o esforço no corpo, não na garganta. A porta de entrada é a chamada que você treina no módulo de volume, o "ei!" de quem chama alguém do outro lado da rua, em volume moderado e na região média da voz.',
        'O belting exige uma voz mista estável e cuidado redobrado. Treine poucos minutos, em volume moderado, só na região confortável, e pare ao menor sinal de ardor, aperto ou rouquidão. Esta é a técnica em que um professor presencial faz mais diferença, porque ele vê e ouve detalhes que nenhum aplicativo capta; se você quer usar o belting com frequência, procure esse acompanhamento.'
      ],
      steps: [
        'Ouça a primeira frase em eco e repita em "nei", com a nota mais alta sendo a mais leve.',
        'Na frase com salto de oitava, prepare o salto: respire antes, comece leve e deixe a vogal arredondar no topo.',
        'Cante a frase em degraus só com o acorde. Ela sobe três vezes; a terceira subida é a mais alta e a mais leve.',
        'Escolha uma frase que sobe numa música de que você gosta e cante na ordem: sílaba, "lá", letra.',
        'Só depois disso, com a voz aquecida, faça a chamada "ei!" na região média, em volume moderado e poucas vezes.'
      ],
      mistakes: [
        'Voltar a empurrar quando entra a letra. Correção: volte um passo. Cante a frase na sílaba e depois em "lá" até a letra caber na mesma sensação.',
        'Usar volume na nota alta para mostrar emoção. Correção: dê intensidade com a palavra e com o brilho, não com força.',
        'Confundir belting com grito. Correção: se o pescoço endurece, as veias saltam ou a voz arranha, é grito. Diminua o volume e volte para a chamada falada.',
        'Cantar a música no tom original sem pensar. Correção: ajuste o tom para a sua voz. Cantores profissionais fazem isso o tempo todo.'
      ],
      tips: [
        'Grave a mesma frase cantada leve e cantada com força. Ouça as duas no dia seguinte e repare qual soa mais segura.',
        'Marque na letra da música a nota mais alta de cada frase e escreva "leve" em cima dela.',
        'Rouquidão que dura mais de duas semanas precisa ser avaliada por um otorrinolaringologista, mesmo sem dor.'
      ],
      listen: [
        'Aquarela — Toquinho (frases que sobem e descem com a voz leve e a palavra sempre clara)',
        'Como Nossos Pais — Elis Regina (agudo forte que soa como fala intensificada, nunca como grito)',
        'Defying Gravity — Idina Menzel (belting de musical: brilho, palavra clara e garganta livre)'
      ],
      ex: [
        { id: 'agudo-7a', name: 'Frase que sobe em eco', desc: 'Ouça uma frase curta que sobe até a sexta e repita em "nei", com a nota mais alta sendo a mais leve.', syl: 'nei', mode: 'eco', mel: '1 2 3 5 6:2 5 3 2 1:2', bpm: 84, zone: 'high', dir: 'up', steps: 5, goal: { m: 'afin', v: 75 } },
        { id: 'agudo-7b', name: 'Frase com salto de oitava', desc: 'Uma frase que salta para a oitava e desce pela escala, em "lá", com o salto preparado antes.', syl: 'lá', mode: 'junto', mel: '1 5 8:2 7 6 5:2 3 2 1:2', bpm: 84, zone: 'high', dir: 'up', steps: 5, goal: { m: 'afin', v: 75 } },
        { id: 'agudo-7c', name: 'Frase em degraus sem piano', desc: 'Uma frase que sobe três vezes, cada vez mais alto, cantada em "lá" só com o acorde de referência.', syl: 'lá', mode: 'junto', solo: true, mel: '1 3 5:2 2 4 6:2 3 5 8:2 7 6 5 3 2 1:2', bpm: 88, zone: 'high', dir: 'up', steps: 4, goal: { m: 'afin', v: 80 } },
        { id: 'agudo-7d', name: '"Ei!" de chamar na nota', desc: 'Ouça e repita a chamada "ei!" descendo da quinta à tônica, com sensação de fala, volume moderado e pescoço solto.', syl: 'ei! (chamada, volume moderado)', mode: 'eco', mel: '5:2 3 1:2', bpm: 80, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'rep', v: 5 } }
      ]
    }
  ]
};
