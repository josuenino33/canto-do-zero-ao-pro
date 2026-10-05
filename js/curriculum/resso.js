import { M, rep } from './helpers.js';

// Repete uma sílaba n vezes (para o campo lyr).
const vezes = (s, n) => Array(n).fill(s).join(' ');

export default {
  id: 'resso',
  name: 'Ressonância e vogais',
  desc: 'Fazer a voz crescer porque ressoa, e não porque empurra: vogais puras, espaço na boca, vibração na frente do rosto, equilíbrio entre brilho e profundidade, twang e vogais no agudo.',
  lessons: [
    {
      id: 'resso-1',
      name: 'Vogais puras e estáveis',
      level: 1,
      goal: 'Cantar as sete vogais do português (a, é, ê, i, ó, ô, u) limpas e estáveis, sem mudar a vogal no meio da nota.',
      text: [
        'Ressonância é o que faz o som da voz crescer sem que você empurre. A vibração das pregas vocais, sozinha, é pequena e fraca; quem a transforma numa voz cheia é o espaço da garganta e da boca, como a caixa de um violão. E a forma desse espaço muda a cada vogal. Por isso o estudo de ressonância começa pelas vogais: cada uma é uma forma diferente do mesmo instrumento.',
        'O português do Brasil tem sete vogais orais: a, é (aberto, de "pé"), ê (fechado, de "você"), i, ó (aberto, de "avó"), ô (fechado, de "avô") e u. Cantar com vogal pura quer dizer escolher uma forma e mantê-la durante toda a nota. Na fala a gente escorrega o tempo todo: o "ê" vira "êi", o "ô" vira "ôu", o "a" do fim da palavra quase some. No canto, esse escorregão muda a ressonância no meio da nota e costuma tirar a afinação do lugar.',
        'Cada vogal tem um caráter. O "i" e o "ê" são mais brilhantes e fechados, com a língua alta e para a frente. O "a" é o mais aberto. O "ó", o "ô" e o "u" são mais escuros e arredondados, com os lábios para a frente. Nenhuma é melhor que a outra: o objetivo é que todas saiam com a mesma qualidade de voz, como se fossem do mesmo cantor e do mesmo instrumento.',
        'Use um espelho. Vogal estável aparece como uma boca que não se mexe durante a nota. E use o microfone: se o traço muda de altura quando você troca de vogal, é sinal de que a garganta está mudando junto com a boca. O treino é deixar só a boca mudar.'
      ],
      steps: [
        'Fale as sete vogais devagar na frente do espelho: a, é, ê, i, ó, ô, u. Repare no que muda na boca, na língua e nos lábios.',
        'Cante as sete vogais numa nota só, junto com o piano, uma por tempo. A nota não muda, só a vogal.',
        'Faça a sequência i, ê, a, ô, u ligada numa nota longa, passando de uma vogal para a outra sem cortar o som.',
        'Cante a escala de cinco notas em "a" e depois em "ô", com a vogal igual da primeira à última nota.'
      ],
      mistakes: [
        'Transformar "ê" em "êi" e "ô" em "ôu" no fim da nota. Correção: segure a mesma forma até o último instante e termine a nota com a boca parada.',
        'Abrir o "a" esticando a boca para os lados, num sorriso largo. Correção: abra o "a" mais na vertical, com a mandíbula solta e os cantos da boca relaxados.',
        'Deixar a afinação mudar ao trocar de vogal. Correção: pense na nota como uma linha fixa e nas vogais como cores pintadas sobre ela.'
      ],
      tips: [
        'Os pares "avó" e "avô", "pé" e "você" ajudam a sentir a diferença entre as vogais abertas e as fechadas.',
        'Pense na vogal antes de cantar. Quem imagina a forma com clareza acerta de primeira.',
        'Grave e ouça só as vogais, sem olhar a tela. Isso treina o ouvido para a qualidade do som.'
      ],
      listen: [
        'Águas de Março — Elis Regina e Tom Jobim (vogais claras e palavras bem desenhadas, sem nenhum esforço)'
      ],
      ex: [
        { id: 'resso-1a', name: 'Sete vogais numa nota', desc: 'Cante as sete vogais numa nota só, uma por tempo, sem deixar a altura mudar.', syl: 'a é ê i ó ô u', mode: 'junto', mel: '1 1 1 1 1 1 1:2', lyr: 'a é ê i ó ô u', bpm: 70, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 70 } },
        { id: 'resso-1b', name: 'Vogais ligadas', desc: 'Uma nota longa passando por i, ê, a, ô e u sem cortar o som e sem mudar a altura.', syl: 'i ê a ô u ligados', mode: 'junto', mel: '1:2 1:2 1:2 1:2 1:2', lyr: 'i ê a ô u', bpm: 70, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 70 } },
        { id: 'resso-1c', name: 'Escala em "a" e em "ô"', desc: 'A escala de cinco notas duas vezes, a primeira em "a" e a segunda em "ô", com a vogal estável em todas as notas.', syl: 'a, depois ô', mode: 'junto', mel: rep(M.cinco, 2, 1), lyr: vezes('a', 9) + ' ' + vezes('ô', 9), bpm: 88, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 70 } }
      ]
    },
    {
      id: 'resso-2',
      name: 'Espaço na boca',
      level: 1,
      goal: 'Criar espaço dentro da boca com o começo de bocejo, o céu da boca mole levantado e a língua solta, sem abrir a boca à força.',
      text: [
        'Um som com espaço é mais cheio e mais fácil. O espaço que importa não é a boca escancarada, e sim o de dentro: o fundo da boca e a garganta. A sensação é a do começo de um bocejo, aquele instante em que o fundo da boca se abre e o ar fica fresco, antes de virar o bocejo inteiro que aperta tudo. Esse começo de bocejo levanta o céu da boca mole e deixa a laringe numa posição baixa e natural, sem esforço.',
        'O céu da boca mole, ou palato mole, é a parte macia lá no fundo, onde fica a úvula, a "campainha". Passe a língua no céu da boca, da frente para trás: primeiro a parte dura, depois a mole. Quando o palato mole sobe, o som ganha espaço e deixa de escapar demais pelo nariz. A consoante "k" mostra onde ele fica: no "k" a parte de trás da língua encosta nele, e logo depois, no "á", ele pode subir e abrir espaço.',
        'A língua é a outra metade do espaço. Ela deve ficar larga e solta, com a ponta encostada de leve atrás dos dentes de baixo em todas as vogais. Quando a ponta da língua foge para trás, a base dela empurra a garganta e o som fica abafado e preso. Esse hábito é muito comum em quem está aprendendo e se corrige com atenção e espelho.',
        'A mandíbula abre o suficiente para a vogal e para a nota, sem forçar. Nos graves e no meio da voz, a boca pode ficar pouco aberta; nos agudos, abre mais. Abrir demais no grave, ou abrir com tensão, cria o problema oposto. Se a mandíbula estalar ou doer, abra menos.'
      ],
      steps: [
        'Comece um bocejo de verdade e pare no começo, quando o fundo da boca se abre. Sinta o ar fresco atrás da língua: esse é o espaço.',
        'Faça o suspiro em "ó" a partir desse começo de bocejo, deslizando de cima para baixo.',
        'Cante "ká" nas três notas. No "k", sinta onde fica o céu da boca mole; no "á", deixe o espaço abrir.',
        'Cante a escala em "lá": a ponta da língua toca o céu da boca no "l" e volta para trás dos dentes de baixo no "á".',
        'Confira no espelho: língua visível, larga, com a ponta encostada nos dentes de baixo.'
      ],
      mistakes: [
        'Bocejar inteiro e cantar com a garganta esticada. Correção: use só o começo do bocejo. O bocejo completo aperta e deixa o som escuro e engolido.',
        'Ponta da língua recolhida para trás. Correção: a ponta mora atrás dos dentes de baixo. Confira no espelho em todas as vogais.',
        'Escancarar a boca em todas as notas. Correção: abra conforme a nota pede. Graves e médios pedem pouca abertura; o agudo pede mais.',
        'Abaixar a laringe à força para "ter espaço". Correção: o espaço vem do começo de bocejo, que é leve. Forçar a laringe para baixo engrossa e abafa a voz.'
      ],
      tips: [
        'Inspire como quem sente um cheiro bom de comida. Essa inspiração de surpresa abre o fundo da boca sozinha.',
        'Um sorriso leve nos olhos e nas bochechas ajuda o céu da boca a subir sem tensão.',
        'Se sentir ardor ou cansaço, o espaço virou força. Volte ao humming e recomece mais leve.'
      ],
      listen: [
        'Nessun Dorma — Luciano Pavarotti (vogais redondas e espaço de bocejo no canto lírico)'
      ],
      ex: [
        { id: 'resso-2a', name: 'Suspiro em "ó"', desc: 'A partir do começo de um bocejo, deslize de cima para baixo em "ó", com o fundo da boca aberto.', syl: 'ó (começo de bocejo)', mode: 'junto', mel: '5~1:3', bpm: 60, zone: 'mid', dir: 'down', steps: 5, goal: { m: 'afin', v: 65 } },
        { id: 'resso-2b', name: '"Ká" em três notas', desc: 'Repita as três notas em "ká": o "k" mostra o céu da boca mole, e o "á" mantém o espaço aberto.', syl: 'ká', mode: 'eco', mel: M.tres, bpm: 80, zone: 'mid', dir: 'up', steps: 6, goal: { m: 'afin', v: 70 } },
        { id: 'resso-2c', name: 'Escala em "lá"', desc: 'A escala de cinco notas em "lá", com a ponta da língua voltando para trás dos dentes de baixo a cada nota.', syl: 'lá', mode: 'junto', mel: M.cinco, bpm: 88, zone: 'mid', dir: 'updown', steps: 6, goal: { m: 'afin', v: 70 } }
      ]
    },
    {
      id: 'resso-3',
      name: 'Ressonância na frente',
      level: 2,
      goal: 'Sentir a vibração na frente do rosto com "mi", "nê" e "nhá", e usar essa sensação para a voz soar clara sem esforço.',
      text: [
        'Professores de canto falam muito em "cantar na máscara", a região do rosto em volta do nariz, das bochechas e dos lábios. O som não sai de verdade pelo rosto, e os ossos da face não são caixas de som. Mas, quando a voz está bem coordenada, com as pregas vibrando com eficiência e o trato vocal bem ajustado, você sente uma vibração clara nessa região. Essa sensação é uma bússola útil: quando ela aparece, a voz costuma estar soando sem esforço.',
        'As consoantes nasais, como "m", "n" e "nh", são o atalho para encontrar essa sensação, porque nelas o som passa pelo nariz e vibra bem ali. A ideia é usar a consoante para acender a vibração e manter a vogal seguinte no mesmo lugar. Vogais mais fechadas e brilhantes, como "i" e "ê", também ajudam, porque naturalmente soam mais na frente.',
        'Cuidado para não confundir ressonância na frente com voz fanhosa. Na voz fanhosa o som fica preso no nariz, como o de alguém resfriado. Aqui é diferente: a vibração é sentida na frente, mas a vogal é clara e sai pela boca. O teste é tampar o nariz por um instante enquanto canta a vogal: se o som muda muito, está nasal demais; se continua quase igual, está bem.',
        'Para quem grita, esta lição é uma virada de chave. O grito tenta conseguir volume com pressão. A ressonância na frente consegue presença com eficiência: o som fica claro, é ouvido de longe e cansa muito menos. Mantenha o volume médio e, se sentir aperto ou ardor na garganta, volte ao humming e reconstrua a sensação devagar.'
      ],
      steps: [
        'Faça um "mmm" e encontre a vibração nos lábios e no nariz. Depois cante "mi" mantendo a vibração no mesmo lugar.',
        'Cante a escala de cinco notas em "mi", em eco. A vibração deve continuar em todas as notas, inclusive na mais alta.',
        'Passe para o arpejo em "nê", sentindo o "n" acender a vibração a cada nota.',
        'Cante "nhá" na escala. O "nh" coloca a vibração na frente e o "á" abre sem perder esse lugar.',
        'Faça o teste do nariz: tampe as narinas por um instante durante a vogal. Se o som quase não muda, está ótimo.'
      ],
      mistakes: [
        'Deixar a voz fanhosa achando que é ressonância na frente. Correção: a vibração é no rosto, mas o som da vogal sai pela boca. Faça o teste de tampar o nariz.',
        'Empurrar o som para a frente com força. Correção: a vibração aparece quando você solta, não quando empurra. Diminua o volume.',
        'Perder a vibração no "a". Correção: cante "nhá" curto e repetido até o "á" herdar o lugar do "nh".'
      ],
      tips: [
        'Dedos de leve nas laterais do nariz são um bom termômetro: se a vibração some, alguma coisa mudou.',
        'Muitas vozes graves se surpreendem com o brilho que aparece nesta lição. Não estranhe: brilho não é voz fina, é voz clara.',
        'Use "mi" e "nê" como aquecimento antes de cantar músicas. Eles preparam a voz para soar clara desde a primeira frase.'
      ],
      listen: [
        'Travessia — Milton Nascimento (voz cheia que enche o ambiente sem parecer esforço)'
      ],
      ex: [
        { id: 'resso-3a', name: 'Do "mmm" ao "mi"', desc: 'Comece a nota em "mmm" e abra para "mi" sem perder a vibração nos lábios e no nariz.', syl: 'mmm-mi', mode: 'eco', mel: '1:2 1:2', lyr: 'mmm mi', bpm: 70, zone: 'mid', dir: 'up', steps: 6, goal: { m: 'afin', v: 70 } },
        { id: 'resso-3b', name: '"Mi" na escala de cinco', desc: 'Ouça a escala e repita em "mi", com a vibração na frente do rosto em todas as notas.', syl: 'mi', mode: 'eco', mel: M.cinco, bpm: 90, zone: 'mid', dir: 'up', steps: 6, goal: { m: 'afin', v: 75 } },
        { id: 'resso-3c', name: '"Nê" no arpejo', desc: 'O arpejo em "nê", com o "n" acendendo a vibração a cada nota.', syl: 'nê', mode: 'junto', mel: M.arpejo, bpm: 84, zone: 'mid', dir: 'updown', steps: 6, goal: { m: 'afin', v: 75 } },
        { id: 'resso-3d', name: '"Nhá" na escala', desc: 'A escala de cinco notas em "nhá": o "nh" põe a vibração na frente e o "á" abre sem perder esse lugar.', syl: 'nhá', mode: 'junto', mel: M.cinco, bpm: 90, zone: 'mid', dir: 'up', steps: 6, goal: { m: 'afin', v: 75 } }
      ]
    },
    {
      id: 'resso-4',
      name: 'Brilho e profundidade',
      level: 2,
      goal: 'Equilibrar brilho e profundidade na voz, sem engrossar artificialmente nem deixar o som fino e estridente.',
      text: [
        'Uma voz bem ressoada tem duas qualidades ao mesmo tempo: brilho, a parte clara, que atravessa e se ouve de longe, e profundidade, a parte cheia, redonda e quente. Os antigos professores italianos chamavam esse equilíbrio de "chiaroscuro", claro e escuro juntos. Quando falta brilho, a voz fica abafada e engolida. Quando falta profundidade, ela fica estridente e cansativa de ouvir.',
        'Um erro muito comum, principalmente em quem tem voz grave ou acha que precisa soar "mais forte", é engrossar a voz de propósito. A pessoa abaixa a laringe à força, recua a língua e escurece todas as vogais. Por dentro parece uma voz grande e bonita; por fora ela soa abafada, sem palavras claras, e cansa a garganta. A afinação também sofre e costuma ficar abaixo da nota, porque o som perde o foco.',
        'O caminho é partir da sua voz de fala, a que você usa para conversar sem esforço, e somar espaço e brilho a ela. O brilho vem da vibração na frente que você estudou na lição anterior e de vogais nítidas. A profundidade vem do espaço do começo de bocejo, sem exagero. Vozes graves continuam graves e vozes leves continuam leves: o objetivo é a sua voz inteira, não a imitação de outra.',
        'Exercícios que alternam vogais brilhantes e escuras ajudam a achar o meio. No "mi-ô", o "i" traz o brilho e o "ô" traz o espaço, e a meta é que um empreste ao outro o que tem de melhor. Grave tudo: ouvido de fora, o equilíbrio é muito mais fácil de julgar do que de dentro da própria cabeça.'
      ],
      steps: [
        'Diga em voz de fala tranquila uma frase qualquer, como "bom dia, tudo bem?". Depois cante essa frase numa nota só, com a mesma voz.',
        'Cante "ma mé mi mó mu" numa nota, como quem fala cantando, sem engrossar nem afinar a voz.',
        'No "mi-ô" na escala, leve o brilho do "i" para o "ô" e o espaço do "ô" para o "i".',
        'Cante o arpejo de oitava em "nô", com som redondo e palavra clara.',
        'Grave e ouça: a voz soa natural, como você falando, só que cantando? Se soar abafada, falta brilho; se soar estridente, falta espaço.'
      ],
      mistakes: [
        'Engrossar a voz para parecer mais potente. Correção: volte à sua voz de fala. Ela já tem a profundidade de que você precisa; o resto vem do espaço, não da força.',
        'Esticar a boca para os lados, num sorriso largo, para ganhar brilho. Correção: o brilho vem da vibração na frente e da vogal nítida, não da boca esticada.',
        'Escurecer todas as vogais até elas soarem iguais. Correção: o "i" continua "i" e o "a" continua "a". Se a palavra não se entende, está escuro demais.'
      ],
      tips: [
        'Pense em falar com alguém a três metros de distância: o som precisa de brilho para chegar e de corpo para ser agradável.',
        'Peça para alguém ouvir e dizer se entende as palavras. Clareza é o melhor teste de equilíbrio.',
        'Se a voz cansar ou arranhar, pare. Equilíbrio é leve; esforço é sinal de que um dos lados está sendo forçado.'
      ],
      listen: [
        'Gracias a la Vida — Mercedes Sosa (voz grave e cheia, mas sempre clara nas palavras)',
        'Olhos nos Olhos — Maria Bethânia (voz grave com brilho, sem soar abafada)'
      ],
      ex: [
        { id: 'resso-4a', name: 'Fala cantada', desc: 'Cante "ma mé mi mó mu" numa nota, com a naturalidade da sua voz de fala.', syl: 'ma mé mi mó mu (como quem fala)', mode: 'junto', mel: '1 1 1 1 1:2', lyr: 'ma mé mi mó mu', bpm: 80, zone: 'low', dir: 'up', steps: 5, goal: { m: 'afin', v: 70 } },
        { id: 'resso-4b', name: '"Mi-ô" na escala', desc: 'A escala de cinco notas alternando "mi" e "ô" a cada nota, com o mesmo brilho e o mesmo espaço nas duas vogais.', syl: 'mi ô alternados', mode: 'junto', mel: M.cinco, lyr: 'mi ô mi ô mi ô mi ô mi', bpm: 84, zone: 'mid', dir: 'up', steps: 6, goal: { m: 'afin', v: 75 } },
        { id: 'resso-4c', name: '"Nô" no arpejo de oitava', desc: 'Arpejo até a oitava em "nô", redondo e claro, sem engrossar na descida.', syl: 'nô', mode: 'junto', mel: M.arpejo8, bpm: 84, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 75 } }
      ]
    },
    {
      id: 'resso-5',
      name: 'Twang: projetar sem força',
      level: 3,
      goal: 'Usar o twang leve, o "nhé" de pato, para dar brilho e projeção à voz sem aumentar a força.',
      text: [
        'Twang é uma palavra inglesa para um som brilhante e penetrante, como a voz de um pato de desenho animado, de uma bruxa de história infantil ou de um bebê choramingando. Por trás desse som há um ajuste pequeno logo acima das pregas vocais: a entrada da laringe se estreita, como um funil. Esse funil reforça frequências agudas às quais o ouvido humano é muito sensível, e por isso a voz soa mais alta e mais presente sem você fazer mais força.',
        'É a ferramenta que muitos cantores de música popular, de teatro musical e de música sertaneja usam para serem ouvidos sobre uma banda sem gritar. Para quem tem o hábito de gritar, o twang ensina uma troca valiosa: em vez de mais ar e mais pressão, um ajuste de forma. O volume percebido aumenta, e o esforço na garganta pode até diminuir.',
        'Comece pelo som de pato, "nhé", agudo, curto, meio bobo e de propósito exagerado. Depois diminua o exagero até sobrar só um brilho a mais no som. O twang pode ser nasal, com o som saindo pelo nariz, ou oral, só com o brilho; para cantar, o objetivo é chegar ao oral, que soa claro e não fanhoso. O "nhé" ajuda a encontrar o ajuste, e o "ê" logo depois ensina a mantê-lo com a boca.',
        'Twang bem feito não arranha. Ele é estreito, mas não apertado: a garganta fica tranquila, e o estreitamento acontece só lá em cima, na entrada da laringe. Se sentir ardor, aperto, coceira ou cansaço, pare na hora e faça um humming leve. No começo, use volume médio e treine por pouco tempo, alguns minutos por dia, intercalando com exercícios semiocluídos.'
      ],
      steps: [
        'Imite um pato de desenho dizendo "nhé nhé nhé", curto e brilhante, numa nota confortável. Exagere sem forçar.',
        'Cante as três notas em "nhé", em eco, com o mesmo brilho em todas.',
        'Na escala, faça a primeira volta em "nhé" e a segunda em "ê", mantendo o brilho com menos nasalidade.',
        'No chamado, cante "ê-ô" como quem chama alguém do outro lado da rua, com brilho e sem gritar.',
        'Grave e ouça: o som deve parecer mais presente e mais claro, e não mais forte nem mais apertado.'
      ],
      mistakes: [
        'Confundir twang com aperto na garganta. Correção: twang é um ajuste pequeno e leve. Se a garganta aperta ou arranha, diminua o exagero e o volume.',
        'Ficar no som fanhoso. Correção: use o teste do nariz. No "ê" depois do "nhé", tampe o nariz por um instante; o som deve continuar quase igual.',
        'Aumentar o volume junto com o twang. Correção: o twang já faz a voz soar mais alta. Mantenha o volume médio e deixe o brilho fazer o trabalho.',
        'Usar twang em tudo, o tempo todo. Correção: ele é um tempero. Alterne com sons redondos e com o espaço das lições anteriores.'
      ],
      tips: [
        'Uma risada de bruxa malvada, "hi-hi-hi", também ativa o twang. Se o "nhé" não vier, comece por ela.',
        'O twang ajuda muito em ambientes barulhentos e em músicas com banda. Treine leve em casa para ter a ferramenta pronta quando precisar.',
        'Dor, ardor ou rouquidão depois do treino de twang são sinal de que ele virou força. Volte aos semiocluídos por alguns dias.'
      ],
      listen: [
        'Jolene — Dolly Parton (brilho e projeção do country, com muito twang e nenhum grito)',
        'Asa Branca — Luiz Gonzaga (voz brilhante e projetada do baião)'
      ],
      ex: [
        { id: 'resso-5a', name: '"Nhé" de pato', desc: 'Repita as três notas em "nhé", curto e brilhante como um pato de desenho, sem apertar.', syl: 'nhé (som de pato, curto e leve)', mode: 'eco', mel: M.tres, bpm: 80, zone: 'mid', dir: 'up', steps: 6, goal: { m: 'afin', v: 80 } },
        { id: 'resso-5b', name: 'Do "nhé" ao "ê"', desc: 'A escala de cinco notas duas vezes: a primeira em "nhé", a segunda em "ê" com o mesmo brilho e menos nariz.', syl: 'nhé, depois ê', mode: 'junto', mel: rep(M.cinco, 2, 1), lyr: vezes('nhé', 9) + ' ' + vezes('ê', 9), bpm: 90, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 80 } },
        { id: 'resso-5c', name: 'Chamado sem grito', desc: 'Ouça e repita o chamado "ê-ô", como quem chama alguém do outro lado da rua, com brilho e volume médio.', syl: 'ê-ô (chamando alguém)', mode: 'eco', mel: '5:2 3:2', lyr: 'ê ô', bpm: 70, zone: 'mid', dir: 'up', steps: 6, goal: { m: 'afin', v: 80 } },
        { id: 'resso-5d', name: 'Twang no arpejo de oitava', desc: 'Arpejo até a oitava em "nhê" com twang leve, mantendo o brilho sem aumentar o volume no alto.', syl: 'nhê (twang leve)', mode: 'junto', mel: M.arpejo8, bpm: 90, zone: 'high', dir: 'up', steps: 5, goal: { m: 'afin', v: 80 } }
      ]
    },
    {
      id: 'resso-6',
      name: 'Vogais nas notas altas',
      level: 3,
      goal: 'Ajustar levemente as vogais nas notas mais altas para o agudo soar livre, sem apertar e sem perder a palavra.',
      text: [
        'Nas notas graves e médias você canta as vogais quase como fala. Conforme a nota sobe, isso deixa de funcionar: um "i" ou um "a" de fala, levado igualzinho para o agudo, costuma apertar ou ficar estridente. O motivo é que cada vogal tem as próprias ressonâncias, e no agudo a nota começa a esbarrar nelas. A solução que os cantores usam há séculos tem nome: modificação de vogal.',
        'Modificar a vogal é ajustar a forma da boca aos poucos enquanto a nota sobe, para o espaço acompanhar a altura. Em geral a boca abre um pouco mais e as vogais ficam mais abertas ou mais arredondadas: o "i" vai na direção do "ê", o "ê" na direção do "é", o "a" na direção do "ó" e o "u" na direção do "ô". A mudança é pequena e gradual, como trocar de marcha, e não uma troca brusca de vogal.',
        'A palavra continua compreensível: quem ouve entende "amor" mesmo que, no agudo, o seu "a" esteja um pouquinho mais redondo. O que muda é a facilidade, e muitas notas que pareciam o limite da voz se abrem quando a vogal se ajusta. O caminho exato depende do estilo: no canto lírico as vogais costumam arredondar, e em estilos populares mais brilhantes o ajuste pode ir para vogais mais abertas e faladas. Aqui você aprende o princípio, que serve para todos.',
        'Os exercícios desta lição sobem até a parte aguda e um pouco além. Vá com calma: a meta de agudo é pequena e sem força, e a nota deve sair livre, mesmo que leve. Se sentir aperto ou ardor, ou se a voz ficar rouca, pare. Agudo bom é consequência de coordenação, ar constante e vogal certa, nunca de empurrar.'
      ],
      steps: [
        'Cante o arpejo de oitava em "i" do jeito que você fala e repare se a nota mais alta aperta.',
        'Repita deixando o "i" abrir um pouco em direção ao "ê" conforme sobe, e voltar a ser "i" na descida. Compare a facilidade.',
        'Faça o mesmo em "a", deixando a nota mais alta arredondar um pouco em direção ao "ó".',
        'Na escala de nona, aplique o ajuste gradual nos pontos mais altos, sem trocar a vogal de uma vez.',
        'No exercício acima do conforto, use tudo junto: ar constante, espaço, vogal ajustada e volume moderado.'
      ],
      mistakes: [
        'Trocar a vogal de repente na nota alta. Correção: a mudança começa algumas notas antes e é gradual, quase imperceptível.',
        'Modificar tanto que a palavra vira outra. Correção: ajuste só o suficiente para a nota ficar livre. Grave e confira se dá para entender.',
        'Abrir a boca à força no agudo. Correção: a mandíbula solta abre mais, sim, mas sem empurrar. Espaço com tensão aperta a garganta do mesmo jeito.',
        'Levar o peso da voz grave para o agudo. Correção: deixe a voz ficar mais leve conforme sobe. A vogal ajustada ajuda nisso; a força não.'
      ],
      tips: [
        'Teste com palavras: cante "sim" numa nota alta com o "i" de fala e depois com o "i" levemente aberto. A diferença ensina mais que qualquer explicação.',
        'Se uma nota aguda de uma música sempre aperta, olhe para a vogal dela antes de culpar a sua voz.',
        'Ouça cantores líricos prestando atenção nas vogais das notas mais altas: elas soam mais redondas do que na fala.'
      ],
      listen: [
        'Con te partirò — Andrea Bocelli (vogais que arredondam nas notas mais altas sem perder a palavra)'
      ],
      ex: [
        { id: 'resso-6a', name: 'Arpejo em "i" que abre', desc: 'Arpejo até a oitava em "i"; conforme sobe, deixe o "i" abrir um pouco em direção ao "ê", e volte ao "i" na descida.', syl: 'i (abrindo para ê no alto)', mode: 'junto', mel: M.arpejo8, bpm: 84, zone: 'high', dir: 'up', steps: 5, goal: { m: 'afin', v: 80 } },
        { id: 'resso-6b', name: 'Arpejo em "a" que arredonda', desc: 'Arpejo até a oitava em "a"; na nota mais alta, deixe o "a" arredondar um pouco em direção ao "ó".', syl: 'a (arredondando para ó no alto)', mode: 'junto', mel: M.arpejo8, bpm: 84, zone: 'high', dir: 'up', steps: 5, goal: { m: 'afin', v: 80 } },
        { id: 'resso-6c', name: 'Escala de nona com vogal ajustada', desc: 'Sobe em arpejo e desce em escala em "lá", ajustando a vogal aos poucos nos pontos mais altos.', syl: 'lá (arredondando no alto)', mode: 'junto', mel: M.nona, bpm: 92, zone: 'high', dir: 'up', steps: 4, goal: { m: 'afin', v: 80 } },
        { id: 'resso-6d', name: 'Acima do conforto em "nô"', desc: 'Arpejo de oitava em "nô" que passa alguns semitons do seu agudo confortável, com a vogal abrindo para "nó" no alto e sem empurrar.', syl: 'nô (abrindo para nó no alto)', mode: 'junto', mel: M.arpejo8, bpm: 80, zone: 'top', dir: 'up', steps: 6, goal: { m: 'top', v: 3 } }
      ]
    }
  ]
};
