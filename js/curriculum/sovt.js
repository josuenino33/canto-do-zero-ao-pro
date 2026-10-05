import { M, rep } from './helpers.js';

// Repete uma sílaba n vezes (para o campo lyr).
const vezes = (s, n) => Array(n).fill(s).join(' ');

export default {
  id: 'sovt',
  name: 'Voz sem grito: semioclusão',
  desc: 'Lábios e língua vibrando, "mmm", "ng" e canudo: exercícios de trato vocal semiocluído que equilibram a pressão do ar e deixam a voz soar inteira sem empurrar.',
  lessons: [
    {
      id: 'sovt-1',
      name: 'Vibração de lábios',
      level: 1,
      goal: 'Entender por que a semioclusão tira o esforço da voz e conseguir vibrar os lábios com som em notas confortáveis.',
      text: [
        'Semioclusão quer dizer "fechar pela metade". Nos exercícios de trato vocal semiocluído, a saída do som fica parcialmente fechada: pelos lábios vibrando, pela língua vibrando, pela boca fechada no "mmm" ou por um canudo. Parece estranho treinar a voz com a boca quase fechada, mas esses estão entre os exercícios mais estudados e mais usados por fonoaudiólogos e professores de canto no mundo inteiro.',
        'O motivo é físico. Quando a saída é estreita, parte da pressão do ar volta da boca em direção às pregas vocais, como um colchão de ar logo acima delas. Esse colchão equilibra a pressão de baixo, que vem dos pulmões, com a pressão de cima. Com as pressões equilibradas, as pregas vibram soltas, sem bater com força uma na outra, e o som sai com menos esforço. É exatamente o contrário do grito, em que o ar empurra de baixo e a garganta aperta para segurar.',
        'A vibração de lábios, o "brr" de criança imitando motor, é o exercício mais conhecido do grupo. Ela também funciona como termômetro: se você empurra ar demais, os lábios se abrem e o som vira sopro; se trava, a vibração para. Ela só acontece com ar constante e lábios soltos, e por isso ensina, quase sem você perceber, a quantidade certa de ar para cantar.',
        'Muita gente não consegue vibrar os lábios de primeira, e está tudo bem. Coloque as pontas dos dedos indicadores nas bochechas, perto dos cantos da boca, e empurre a pele de leve para a frente: isso solta os lábios e quase sempre faz a vibração aparecer. Umedecer os lábios também ajuda. Se mesmo assim não sair, use "vvv" ou o canudo enquanto treina, e volte a tentar todos os dias.'
      ],
      steps: [
        'Primeiro sem voz: solte o ar pelos lábios fechados e moles até eles vibrarem, como um cavalo bufando.',
        'Se não vibrar, apoie os dedos nas bochechas, perto dos cantos da boca, empurrando a pele de leve para a frente.',
        'Agora ligue a voz numa nota confortável. Repare como o som sai fácil, quase sem esforço na garganta.',
        'Passe para as três notas e para a escala de cinco, mantendo a vibração sem parar entre as notas.',
        'Guarde a sensação da garganta neste exercício. Ela é a referência para todo o resto: som presente e garganta tranquila.'
      ],
      mistakes: [
        'Encher as bochechas de ar como um balão. Correção: as bochechas ficam soltas e o ar passa direto pelos lábios. Os dedos nas bochechas ajudam.',
        'Soprar forte para a vibração não parar. Correção: menos ar e mais constância. Se os lábios se abrem, o fluxo está forte demais.',
        'Parar a vibração entre as notas. Correção: as notas são ligadas, como um deslize em degraus. O ar não para.',
        'Apertar os lábios. Correção: lábios encostados e moles, como quando você está distraído.'
      ],
      tips: [
        'Umedecer os lábios com a língua ou usar um pouco de protetor labial facilita muito a vibração.',
        'Dá para fazer em qualquer lugar: no banho, no carro, antes de uma reunião. Dois minutos já aquecem a voz.',
        'Se der cócegas e você rir, ótimo: rir solta o corpo inteiro. Se der ardor na garganta, pare.'
      ],
      ex: [
        { id: 'sovt-1a', name: 'Lábios sem voz', desc: 'Vibre os lábios só com ar, como um cavalo bufando, com os dedos nas bochechas se precisar.', syl: 'brr sem voz (só ar nos lábios)', mode: 'livre', breath: [['Inspire baixo', 3], ['Vibre os lábios só com ar, constante', 6]], cycles: 5, goal: { m: 'rep', v: 3 } },
        { id: 'sovt-1b', name: 'Lábios numa nota', desc: 'Ouça a nota e repita vibrando os lábios, com a voz ligada do começo ao fim da barra.', syl: 'brr (vibração de lábios)', mode: 'eco', mel: '1:3', bpm: 70, zone: 'low', dir: 'up', steps: 6, goal: { m: 'afin', v: 65 } },
        { id: 'sovt-1c', name: 'Lábios em três notas', desc: 'Três notas subindo e descendo, sem parar a vibração entre elas.', syl: 'brr (vibração de lábios)', mode: 'eco', mel: M.tres, bpm: 80, zone: 'mid', dir: 'up', steps: 6, goal: { m: 'afin', v: 65 } },
        { id: 'sovt-1d', name: 'Lábios na escala de cinco', desc: 'A escala de cinco notas junto com o piano, sempre vibrando os lábios.', syl: 'brr (vibração de lábios)', mode: 'junto', mel: M.cinco, bpm: 90, zone: 'mid', dir: 'updown', steps: 6, goal: { m: 'afin', v: 70 } }
      ]
    },
    {
      id: 'sovt-2',
      name: 'Vibração de língua',
      level: 1,
      goal: 'Vibrar a ponta da língua com som, num "rrr" contínuo, e usar essa vibração para soltar a língua e a garganta.',
      text: [
        'A vibração de língua funciona como a de lábios, mas a semioclusão acontece na ponta da língua, que bate rápido logo atrás dos dentes de cima. É o "r" vibrado do espanhol e do italiano, como em "perro" ou em "terra" dito à italiana. Além de equilibrar a pressão do ar, ela tem um bônus: a língua só vibra se estiver solta, então o exercício denuncia a tensão de língua que costuma apertar a voz.',
        'A posição é esta: a ponta da língua encosta de leve atrás dos dentes de cima, na gengiva, e o ar passa por ali fazendo a ponta tremer. As laterais da língua ficam soltas e a mandíbula fica parada. O som parece um motor de moto, "trrr" ou "drrr". Depois de conseguir sem voz, você liga a voz e passeia pelas notas.',
        'Nem todo mundo consegue vibrar a língua logo de cara, e isso não tem nada a ver com talento para cantar. Alguns truques ajudam: repetir "tê-dê-tê-dê" bem rápido até a ponta da língua começar a tremer, ou começar com um "d" e deixar o ar empurrar a ponta da língua num "drrr". Algumas pessoas levam dias ou semanas para conseguir. Enquanto isso, a vibração de lábios cumpre o mesmo papel no treino.',
        'Como em todos os exercícios semiocluídos, o volume é baixo ou médio. Se a vibração parar quando a nota sobe, não aumente o ar: diminua o volume e deixe a ponta da língua mais solta. Se aparecer ardor ou cansaço na garganta, pare e volte para a vibração de lábios.'
      ],
      steps: [
        'Sem voz, encoste a ponta da língua atrás dos dentes de cima e solte o ar até ela tremer. Se não tremer, repita "tê-dê-tê-dê" rápido e depois tente "drrr".',
        'Ligue a voz numa nota confortável e ouça o som de motor. Mandíbula parada, lábios soltos.',
        'Faça a sirene de quinta: a vibração não pode parar nem na subida nem na descida.',
        'Passe para a escala de cinco notas. Se a língua travar numa nota, volte meio tom e tente de novo, mais leve.'
      ],
      mistakes: [
        'Mexer a mandíbula para ajudar a vibração. Correção: a mandíbula fica parada e solta; quem trabalha é só a ponta da língua.',
        'Usar o "r" de garganta, o "r" de "rato" na maior parte do Brasil. Correção: a vibração é na ponta da língua, na frente da boca, e não no fundo da garganta.',
        'Empurrar ar demais para a vibração não parar. Correção: menos ar e língua mais solta. A vibração nasce da soltura, não da força.'
      ],
      tips: [
        'Treine a vibração sem voz em momentos parados do dia. É uma coordenação de língua e ar que melhora com repetições curtas e frequentes.',
        'Se conseguir só por um segundo, comemore: é o começo. Aumente aos poucos.',
        'Alternar lábios e língua no mesmo treino é ótimo, porque cada um solta uma parte diferente.'
      ],
      ex: [
        { id: 'sovt-2a', name: 'Língua numa nota', desc: 'Ouça a nota e repita com a ponta da língua vibrando, sem mexer a mandíbula.', syl: 'rrr (vibração da ponta da língua)', mode: 'eco', mel: '1:3', bpm: 70, zone: 'low', dir: 'up', steps: 6, goal: { m: 'afin', v: 65 } },
        { id: 'sovt-2b', name: 'Sirene de quinta com a língua', desc: 'Suba e desça uma quinta deslizando, com a língua vibrando o tempo todo.', syl: 'rrr (vibração da ponta da língua)', mode: 'junto', mel: M.sirene5, bpm: 70, zone: 'mid', dir: 'up', steps: 6, goal: { m: 'afin', v: 65 } },
        { id: 'sovt-2c', name: 'Língua na escala de cinco', desc: 'A escala de cinco notas com a língua vibrando, subindo e descendo de tom.', syl: 'rrr (vibração da ponta da língua)', mode: 'junto', mel: M.cinco, bpm: 88, zone: 'mid', dir: 'updown', steps: 6, goal: { m: 'afin', v: 70 } }
      ]
    },
    {
      id: 'sovt-3',
      name: 'Humming e "ng"',
      level: 1,
      goal: 'Cantar de boca fechada em "mmm" e em "ng", sentindo a vibração na frente do rosto sem apertar a garganta.',
      text: [
        'O humming, cantar de boca fechada em "mmm", é a semioclusão mais simples de todas. Os lábios encostam de leve, os dentes ficam separados por dentro e a língua repousa larga no fundo da boca. O som sai pelo nariz, e você sente uma vibração nos lábios, no nariz e nas bochechas. Essa vibração é um bom sinal: quer dizer que o som está saindo com eficiência, sem ficar preso na garganta.',
        'O "ng" é parecido, mas o fechamento acontece mais atrás: a parte de trás da língua encosta no céu da boca mole, como no fim da palavra inglesa "sing", ou no meio de "manga" quando você segura o som antes do "g". A boca pode ficar entreaberta, o que deixa o "ng" ainda mais perto do canto com vogal. Ele é ótimo para encontrar uma voz leve e focada e para atravessar a região onde a voz costuma quebrar.',
        'Um bom humming é confortável e zumbido, não abafado. Se você sente pressão na garganta ou o som fica escuro e engolido, provavelmente está apertando os dentes ou empurrando a língua para trás. Separe os dentes por dentro, com os lábios ainda fechados, e imagine um sorriso leve dentro da boca. Mastigar enquanto faz "mmm" é um truque antigo que solta a mandíbula e a língua ao mesmo tempo.'
      ],
      steps: [
        'Faça um "mmm" de quem prova algo gostoso, numa nota confortável. Coloque os dedos nos lábios e no nariz e sinta a vibração.',
        'Cante a escala de cinco notas em "mmm" em eco, com a vibração igual em todas as notas.',
        'Faça o "mmm" mastigando: mexa a mandíbula como quem mastiga um chiclete enquanto canta as três notas.',
        'Passe para o "ng" na sirene de quinta, com a boca entreaberta e o som saindo pelo nariz.'
      ],
      mistakes: [
        'Apertar os dentes por trás dos lábios. Correção: lábios fechados e dentes separados. Coloque a ponta da língua atrás dos dentes de baixo para garantir o espaço.',
        'Fazer um humming forte, que vibra a garganta e não o rosto. Correção: diminua o volume até a vibração aparecer nos lábios e no nariz.',
        'Engolir o "ng" para o fundo da garganta. Correção: o contato é entre a língua e o céu da boca mole, e o som segue livre pelo nariz. Tampe o nariz por um instante: se o som parar, você está no lugar certo.'
      ],
      tips: [
        'O humming é o aquecimento mais discreto que existe: dá para fazer no trânsito ou no corredor sem chamar atenção.',
        'Se o "ng" não sair, diga "manga" bem devagar e pare no meio, antes do "g".',
        'Use o humming como teste de tensão: se até o "mmm" sai apertado, o problema está no corpo, e não na nota.'
      ],
      ex: [
        { id: 'sovt-3a', name: 'Hum em cinco notas', desc: 'Ouça a escala de cinco notas e repita em "mmm", com a vibração igual do começo ao fim.', syl: 'mmm (boca fechada, dentes separados)', mode: 'eco', mel: M.cinco, bpm: 88, zone: 'mid', dir: 'up', steps: 6, goal: { m: 'afin', v: 70 } },
        { id: 'sovt-3b', name: 'Hum mastigando', desc: 'Três notas em "mmm" mexendo a mandíbula como quem mastiga, sem deixar o som travar.', syl: 'mmm mastigando (mandíbula solta)', mode: 'junto', mel: M.tres, bpm: 80, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 65 } },
        { id: 'sovt-3c', name: 'Ng em sirene', desc: 'Sirene de quinta em "ng", com a boca entreaberta e o som saindo pelo nariz.', syl: 'ng (como no meio de "manga")', mode: 'junto', mel: M.sirene5, bpm: 70, zone: 'mid', dir: 'up', steps: 6, goal: { m: 'afin', v: 65 } }
      ]
    },
    {
      id: 'sovt-4',
      name: 'Canudo: no ar e na água',
      level: 1,
      goal: 'Cantar dentro de um canudo, no ar e num copo com água, para treinar ar constante e voz sem pressão.',
      text: [
        'O canudo é um dos exercícios de semioclusão mais estudados pela ciência da voz, e um dos mais fáceis de fazer certo. Você coloca a ponta de um canudo entre os lábios, fecha bem a boca em volta dele e canta em "u". Todo o som passa pelo tubo estreito, o que cria aquele colchão de ar sobre as pregas vocais. O resultado é uma voz fácil, quase sem esforço, mesmo em notas que normalmente apertam.',
        'Quanto mais fino o canudo, mais resistência e mais efeito; quanto mais grosso, mais fácil. Comece com um canudo comum e, se ficar fácil, experimente um mais fino. Canudos reutilizáveis de metal ou de silicone funcionam bem. O ar precisa sair todo pelo canudo: para conferir, aperte as narinas por um instante; se o som não mudar, está certo.',
        'Na versão com água, a ponta do canudo fica mergulhada num copo, de dois a cinco centímetros de profundidade, e você canta fazendo bolhas. A água mostra o seu ar: bolhas pequenas e constantes significam fluxo equilibrado; bolhas grandes e furiosas significam que você está empurrando. As bolhas também fazem a pressão oscilar de leve, o que muitos profissionais descrevem como uma massagem suave nas pregas. Comece raso e aprofunde aos poucos.',
        'O volume é sempre baixo. Com canudo, cantar forte não faz sentido e cansa à toa. Segure o copo na altura do peito, com a postura alongada, e não incline a cabeça para alcançar a água. Se aparecer tontura, ardor ou cansaço, pause e respire normalmente.'
      ],
      steps: [
        'Coloque o canudo entre os lábios, com a boca bem fechada em volta dele, e cante uma nota longa em "u". Confira se nenhum ar escapa pelo nariz.',
        'Faça a sirene de quinta no canudo, subindo e descendo sem parar o som.',
        'Encha um copo até a metade, mergulhe a ponta do canudo uns três centímetros e solte ar sem voz, fazendo bolhas pequenas e constantes.',
        'Ligue a voz e faça a escala de cinco notas com bolhas. Elas devem continuar pequenas e iguais em todas as notas.',
        'Depois de cada série, tire o canudo e cante a mesma nota em "u" sem ele, tentando manter a mesma facilidade.'
      ],
      mistakes: [
        'Encher as bochechas. Correção: as bochechas ficam paradas e o ar vai direto para o canudo. Se elas incham, diminua o ar.',
        'Fazer bolhas grandes e barulhentas. Correção: isso é ar demais. Bolhas pequenas e constantes são a meta.',
        'Abaixar a cabeça para chegar ao copo. Correção: segure o copo na altura do peito e mantenha a cabeça nivelada.',
        'Morder o canudo. Correção: quem segura o canudo são os lábios, não os dentes. Mandíbula solta.'
      ],
      tips: [
        'Leve um canudo na bolsa ou na mochila. É um aquecimento discreto e eficiente para antes de cantar ou de falar em público.',
        'Lave o canudo depois de usar e troque a água do copo a cada treino.',
        'Em dias de voz cansada, alguns minutos de canudo no copo, em volume baixo, costumam deixar a voz mais leve. Se doer, pare.'
      ],
      ex: [
        { id: 'sovt-4a', name: 'Nota longa no canudo', desc: 'Segure uma nota em "u" dentro do canudo, com a boca bem fechada em volta dele.', syl: 'u no canudo', mode: 'junto', mel: '1:4', bpm: 60, zone: 'low', dir: 'up', steps: 6, goal: { m: 'afin', v: 65 } },
        { id: 'sovt-4b', name: 'Sirene no canudo', desc: 'Suba e desça uma quinta deslizando dentro do canudo, sem parar o som.', syl: 'u no canudo', mode: 'junto', mel: M.sirene5, bpm: 70, zone: 'mid', dir: 'up', steps: 6, goal: { m: 'afin', v: 65 } },
        { id: 'sovt-4c', name: 'Bolhas sem voz', desc: 'Com o canudo dentro de um copo com água, sopre bolhas pequenas e iguais, sem voz.', syl: 'sopro no canudo dentro da água (sem voz)', mode: 'livre', breath: [['Inspire baixo', 3], ['Sopre bolhas pequenas e iguais no copo, sem voz', 10]], cycles: 4, goal: { m: 'rep', v: 3 } },
        { id: 'sovt-4d', name: 'Escala com bolhas', desc: 'A escala de cinco notas cantada em "u" no canudo dentro da água, com bolhas pequenas e constantes.', syl: 'u no canudo dentro da água (bolhas)', mode: 'junto', mel: M.cinco, bpm: 84, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 65 } }
      ]
    },
    {
      id: 'sovt-5',
      name: 'Sirenes: a voz inteira sem empurrar',
      level: 2,
      goal: 'Passear com a voz do grave ao agudo em semioclusão, sem quebras bruscas nem esforço, e descobrir que dá para ir mais alto sem gritar.',
      text: [
        'A sirene é um deslize contínuo pela voz, como o som de uma ambulância. Feita em semioclusão, ela é o melhor exercício para quem só alcança os graves e grita nos agudos. O colchão de ar dos lábios ou do canudo protege as pregas, e o deslize impede que a garganta trave numa posição. Assim a voz atravessa as regiões sozinha, ajustando o que precisa no caminho.',
        'Toda voz tem regiões que soam diferente: uma mais grossa e falada embaixo, que costuma ser chamada de voz de peito, e uma mais leve em cima, a voz de cabeça. Entre elas fica a passagem, onde a voz de quem está começando costuma quebrar, dar um salto ou falhar. Quem grita está tentando levar o peso da voz grave para cima à força. Na sirene semiocluída, você deixa a voz ficar mais leve conforme sobe, e a passagem vai ficando cada vez mais lisa.',
        'Nos exercícios acima do conforto, o app leva a sirene alguns semitons além da sua nota aguda confortável do teste de voz. O objetivo não é forçar: é deixar a nota alta acontecer leve, mesmo que saia fina, soprosa ou com cara de voz de criança. Esse som leve é a semente do agudo. Com o tempo ele ganha corpo; o grito, ao contrário, nunca vira técnica.',
        'Se a voz quebrar no meio da sirene, não pare. Continue o deslize em volume mais baixo e deixe a quebra acontecer, porque ela diminui com a repetição. Pare de verdade se sentir ardor, aperto ou dor, ou se a voz ficar rouca. A meta de agudo é pequena de propósito: dois ou três semitons novos, sem esforço, já são uma conquista.'
      ],
      steps: [
        'Comece com a sirene de lábios de uma oitava no meio da voz, em volume baixo, sem cortar o som.',
        'Faça a sirene em "ng" na parte de cima da voz, subindo e descendo de tom. Repare onde a voz quer quebrar e passe por ali mais leve.',
        'No exercício "Lábios acima do conforto", deixe a voz afinar e ficar leve no alto. Não empurre: se a nota não vier, ela não veio hoje.',
        'Faça o canudo acima do conforto. O canudo dá ainda mais proteção, e muita gente alcança nele notas que ainda não saem na vogal.',
        'Registre a nota mais alta que saiu leve. É essa, e não a mais alta que saiu com esforço, que conta.'
      ],
      mistakes: [
        'Subir o volume junto com a nota. Correção: volume igual ou menor no agudo. Quem sobe com volume chega ao grito.',
        'Levantar o queixo e esticar o pescoço no alto. Correção: cabeça nivelada. Olhe para a frente, como se a nota alta estivesse à sua frente, e não acima.',
        'Parar a sirene quando a voz quebra. Correção: continue deslizando mais baixinho. A quebra só se resolve passando por ela muitas vezes, com leveza.',
        'Insistir na nota mais alta com esforço. Correção: a meta é pequena e sem força. Ardor ou aperto é sinal para parar.'
      ],
      tips: [
        'Desenhe a sirene no ar com a mão, como uma onda. O movimento ajuda a voz a não travar.',
        'O agudo leve pode soar "estranho" ou "fino demais" no começo. É normal: ele é o caminho, não o resultado final.',
        'Faça sirenes de cima para baixo também. Começar no alto, leve, e descer ajuda a não carregar peso para o agudo.'
      ],
      listen: [
        'Sangue Latino — Secos & Molhados (Ney Matogrosso canta agudo com leveza e brilho, sem empurrar)',
        'How Deep Is Your Love — Bee Gees (agudos leves em falsete, macios do começo ao fim)'
      ],
      ex: [
        { id: 'sovt-5a', name: 'Sirene de lábios de oitava', desc: 'Suba e desça uma oitava vibrando os lábios, sem cortar o som e sem aumentar o volume.', syl: 'brr (vibração de lábios)', mode: 'junto', mel: M.sirene8, bpm: 70, zone: 'mid', dir: 'up', steps: 6, goal: { m: 'afin', v: 65 } },
        { id: 'sovt-5b', name: 'Sirene em "ng" no alto', desc: 'Sirene de oitava em "ng" na parte de cima da voz, passando leve pela região onde ela quer quebrar.', syl: 'ng (boca entreaberta, som pelo nariz)', mode: 'junto', mel: M.sirene8, bpm: 70, zone: 'high', dir: 'updown', steps: 7, goal: { m: 'afin', v: 65 } },
        { id: 'sovt-5c', name: 'Lábios acima do conforto', desc: 'Sirene de lábios que sobe alguns semitons acima do seu agudo confortável, sempre leve e sem grito.', syl: 'brr (vibração de lábios)', mode: 'junto', mel: M.sirene8, bpm: 70, zone: 'top', dir: 'up', steps: 6, goal: { m: 'top', v: 2 } },
        { id: 'sovt-5d', name: 'Canudo acima do conforto', desc: 'A mesma sirene dentro do canudo, que protege ainda mais a voz no agudo novo.', syl: 'u no canudo', mode: 'junto', mel: M.sirene8, bpm: 70, zone: 'top', dir: 'up', steps: 7, goal: { m: 'top', v: 3 } }
      ]
    },
    {
      id: 'sovt-6',
      name: 'Da semioclusão para a vogal',
      level: 2,
      goal: 'Levar a facilidade dos sons semiocluídos para as vogais abertas, cantando "mmm-a", "brr-ê" e "ng-a" sem perder a soltura.',
      text: [
        'Os exercícios semiocluídos ensinam a sensação certa, mas ninguém canta uma música inteira de boca fechada. O passo seguinte é abrir para a vogal sem perder o que foi conquistado: a garganta tranquila, o ar constante e a vibração na frente do rosto. Quando a boca abre, o colchão de ar diminui, e o corpo tende a voltar ao velho hábito de empurrar. Este treino ensina a abrir sem empurrar.',
        'A estratégia é encadear. No "mmm-a", você começa a nota de boca fechada e, sem parar o som, separa os lábios para o "a", que nasce do "mmm". No "brr-ê", a primeira escala é em lábios e a segunda, igual, em "ê", copiando a sensação. No "ngá", a língua sai do céu da boca e o som se abre para o "a". Em todos, a vogal deve soar tão fácil quanto o som que veio antes.',
        'Compare sempre. Se o "a" sai mais alto, mais duro ou com a garganta apertando, volte ao "mmm" e abra mais devagar, ou com menos volume. Se a vogal sai abafada, procure de novo a vibração no rosto e abra a boca sem engolir o som. Se sentir ardor ou aperto, pare e volte aos semiocluídos por alguns minutos.',
        'Com o tempo você vai sentir a vogal "morando" no mesmo lugar que o humming. Esse é o fim do grito: a voz soa porque ressoa, e não porque empurra. Daqui para a frente, sempre que uma nota de música apertar, você tem um caminho de volta: cante a frase em lábios ou em "mmm" e só então devolva a vogal.'
      ],
      steps: [
        'Cante o "mmm" numa nota e, sem parar o som, abra os lábios para o "a". A nota e o volume não mudam.',
        'Na escala com "brr" e "ê", faça a primeira volta em lábios prestando atenção na sensação. Na segunda, em "ê", copie essa sensação.',
        'No arpejo em "ngá", comece cada nota com o "ng" e abra rápido para o "a", sentindo a vibração continuar na frente.',
        'No arpejo de oitava, a primeira volta é em lábios e a segunda em "a". A nota mais alta deve sair tão leve em "a" quanto saiu em "brr".',
        'Grave as duas versões, a semiocluída e a vogal, e compare. A vogal deve parecer tão fácil quanto o semiocluído.'
      ],
      mistakes: [
        'Aumentar o volume quando a boca abre. Correção: o "a" tem o mesmo esforço do "mmm". Ele já vai soar mais forte sozinho, porque a boca aberta deixa o som sair.',
        'Mexer a cabeça ou o queixo ao abrir a boca. Correção: só a mandíbula e os lábios se movem; a cabeça fica nivelada.',
        'Abrir para a vogal e perder a vibração na frente do rosto. Correção: abra mais devagar, como uma flor abrindo, e mantenha a sensação de zumbido nos lábios e no nariz.'
      ],
      tips: [
        'Use a sequência sempre que uma nota de música estiver difícil: frase em lábios, depois em "mmm" e só então com a letra.',
        'O "ngá" também treina o céu da boca mole: ele desce no "ng" e sobe no "a". Esse movimento vai ser útil no módulo de ressonância.',
        'Se a vogal "a" puxa grito, comece por "u" ou "ô", que ficam mais perto da semioclusão, e chegue ao "a" depois.'
      ],
      listen: [
        'Velha Infância — Tribalistas (vozes soltas, em volume de conversa, sem nenhum empurrão)'
      ],
      ex: [
        { id: 'sovt-6a', name: 'Mmm-a numa nota', desc: 'Comece a nota em "mmm" e, sem parar o som, abra para "a" mantendo a mesma altura e o mesmo volume.', syl: 'mmm-a (abre a boca sem mudar o som)', mode: 'eco', mel: '1:2 1:2', lyr: 'mmm a', bpm: 70, zone: 'mid', dir: 'up', steps: 6, goal: { m: 'afin', v: 70 } },
        { id: 'sovt-6b', name: 'Brr e depois "ê"', desc: 'A escala de cinco notas duas vezes: a primeira vibrando os lábios, a segunda em "ê" com a mesma facilidade.', syl: 'brr, depois ê', mode: 'junto', mel: rep(M.cinco, 2, 1), lyr: vezes('brr', 9) + ' ' + vezes('ê', 9), bpm: 88, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 70 } },
        { id: 'sovt-6c', name: '"Ngá" no arpejo', desc: 'Ouça o arpejo e repita começando cada nota em "ng" e abrindo para o "a".', syl: 'ngá (começa em ng e abre para a)', mode: 'eco', mel: M.arpejo, bpm: 80, zone: 'mid', dir: 'up', steps: 6, goal: { m: 'afin', v: 70 } },
        { id: 'sovt-6d', name: 'Brr e depois "a" na oitava', desc: 'O arpejo até a oitava duas vezes: primeiro em lábios, depois em "a", com a nota de cima igualmente leve.', syl: 'brr, depois a', mode: 'junto', mel: rep(M.arpejo8, 2, 1), lyr: vezes('brr', 7) + ' ' + vezes('a', 7), bpm: 84, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 70 } }
      ]
    }
  ]
};
