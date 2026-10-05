export default {
  id: 'ritmo',
  name: 'Ritmo, dicção e fraseado',
  desc: 'Cantar no tempo, encaixar contratempos e síncopes, pronunciar com clareza sem travar a mandíbula, respirar no lugar certo e dar forma às frases.',
  lessons: [
    {
      id: 'ritmo-1',
      name: 'Cantar no tempo',
      level: 1,
      goal: 'Sentir o pulso da música, entrar no lugar certo depois das pausas e dar a cada nota a duração que ela tem.',
      text: [
        'Ritmo é metade da música. Uma nota afinada que entra antes ou depois da hora soa tão errada quanto uma nota fora do tom, e muita gente que acha que desafina está, na verdade, perdida no tempo. A boa notícia é que ritmo se treina do mesmo jeito que afinação: com repetição, devagar no começo e com alguma referência mostrando onde você errou.',
        'Toda música tem um pulso, uma batida regular como o coração ou como os passos numa caminhada. É onde o pé bate sozinho quando você gosta de uma música. Os pulsos se agrupam de 4 em 4 na maioria das músicas pop, de 2 em 2 no samba e de 3 em 3 na valsa e em muitas toadas caipiras. Contar "1, 2, 3, 4" junto com o pé é o primeiro passo para cantar no tempo.',
        'O erro mais comum não está nas notas, está nas entradas. Depois de uma pausa ou de uma introdução, a pessoa entra cedo por ansiedade ou tarde por insegurança. A solução é contar a pausa por dentro, como se ela também fosse uma nota. Outro erro frequente é cortar as notas longas antes da hora, porque o ar acabou ou porque a nota parece "parada": uma nota de dois tempos dura até a próxima começar.',
        'Nestes exercícios o piano marca o tempo para você. Bata o pé de leve no pulso enquanto canta e procure grudar a voz no som do piano, começando e terminando junto com ele. Se o andamento parecer rápido, não corra para alcançar: ouça com atenção e entre na próxima repetição.'
      ],
      steps: [
        'Comece pelo exercício livre: coloque uma música de que você gosta e encontre o pulso batendo o pé e contando "1, 2, 3, 4" em voz alta.',
        'Em "Curta, curta, longa", cante batendo o pé. A nota longa tem que durar os dois tempos inteiros, até o pé bater de novo.',
        'Em "Entrar depois da pausa", conte a pausa por dentro e entre exatamente junto com o piano.',
        'Em "Nota longa até o fim", segure cada nota até o último instante e termine o som junto com o piano, sem deixar a voz morrer antes.',
        'Quando os exercícios cantados saírem com a nota de afinação acima de 70 e as entradas no lugar, siga para a próxima lição.'
      ],
      mistakes: [
        'Entrar antes do piano, com pressa. Correção: conte a pausa em voz baixa e só cante quando o tempo da entrada chegar. Pausa também é música.',
        'Cortar a nota longa no meio. Correção: pense na nota longa como uma linha que vai até a próxima batida do pé. Se falta ar, respire antes da frase e cante um pouco mais baixo.',
        'Acelerar nas partes fáceis e frear nas difíceis. Correção: o pulso é sempre o mesmo. O pé não muda de velocidade, e a voz acompanha o pé.'
      ],
      tips: [
        'Bater o pé de leve, sem barulho, ajuda o corpo a guardar o pulso enquanto a cabeça cuida das notas.',
        'Ouça músicas de que você gosta só marcando o pulso, no ônibus ou na cozinha. Esse treino não cansa a voz e melhora muito o tempo.',
        'Se o andamento estiver rápido demais, faça com calma o que der e deixe o resto para a próxima série. Ritmo firme e devagar vale mais que ritmo corrido.'
      ],
      listen: [
        'Aquarela — Toquinho (pulso tranquilo e notas longas que duram até o fim)',
        'Mas Que Nada — Jorge Ben Jor (pulso firme e fácil de marcar com o pé)'
      ],
      ex: [
        { id: 'ritmo-1a', name: 'Achar o pulso', desc: 'Com uma música de que você gosta tocando, bata o pé no pulso e conte "1, 2, 3, 4" em voz alta até o fim da fase, sem perder o pé; na pausa, troque de música ou de trecho.', syl: 'contar 1, 2, 3, 4 (falado)', mode: 'livre', breath: [['Bata o pé no pulso da música e conte em voz alta', 40], ['Pare, respire e escolha outro trecho', 10]], cycles: 3, goal: { m: 'rep', v: 3 } },
        { id: 'ritmo-1b', name: 'Curta, curta, longa', desc: 'Duas notas de um tempo e uma de dois, batendo o pé: a longa dura até o pé bater de novo.', syl: 'nô', mode: 'junto', mel: '1 1 3:2 3 3 5:2 5 5 3:2 1:4', bpm: 80, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 70 } },
        { id: 'ritmo-1c', name: 'Entrar depois da pausa', desc: 'Conte as pausas por dentro e entre exatamente junto com o piano em cada frase.', syl: 'pa', mode: 'junto', mel: 'r:1 1 2 3:2 r:2 3 2 1:2 r:1 5 3 1:2', bpm: 80, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 70 } },
        { id: 'ritmo-1d', name: 'Nota longa até o fim', desc: 'Notas de dois e de quatro tempos: segure cada uma até o último instante e termine junto com o piano.', syl: 'ma', mode: 'junto', mel: '1:2 3:2 5:4 r:1 5:2 3:2 1:4', bpm: 72, zone: 'low', dir: 'up', steps: 5, goal: { m: 'afin', v: 70 } }
      ]
    },
    {
      id: 'ritmo-2',
      name: 'Dicção sem travar a mandíbula',
      level: 1,
      goal: 'Pronunciar consoantes claras com lábios e língua, sem travar a mandíbula, e manter as vogais com a mesma forma ao cantar.',
      text: [
        'Dicção é o quanto as pessoas entendem o que você canta. No canto, as vogais carregam o som, porque são elas que ficam soando durante a nota, e as consoantes carregam o sentido, porque são elas que separam as palavras. Por isso a regra é simples: vogais longas e estáveis, consoantes rápidas e precisas. Uma consoante clara não precisa ser forte, precisa estar no lugar certo.',
        'Quem está começando costuma usar a mandíbula para articular tudo, mordendo as palavras. A mandíbula travada aperta a língua e a garganta, o som fica espremido e o agudo fica mais difícil. As consoantes são feitas por partes pequenas e rápidas: o "p" nos lábios, o "t" na ponta da língua atrás dos dentes de cima, o "k" no fundo da língua tocando o céu da boca. A mandíbula fica solta, quase parada, como quando bate o sono e o rosto relaxa.',
        'O "pa ta ka" treina esses três pontos separadamente e depois em sequência. Os trava-línguas fazem o mesmo com palavras de verdade. O caminho é sempre o mesmo: falar devagar e exagerando, depois falar rápido sem travar, e só então cantar. Se a frase falada sai limpa, a cantada sai também.',
        'As vogais também precisam de cuidado. É comum abrir um sorriso largo no "i" e no "é", o que deixa o som fino e apertado, ou fechar a boca nas notas mais altas. Mantenha um espaço por dentro da boca, como no começo de um bocejo, e mude só a língua e os lábios de uma vogal para outra. Assim todas as vogais soam da mesma família, e a voz não muda de cor a cada palavra.'
      ],
      steps: [
        'Faça o exercício falado com a mão apoiada no queixo: a mão quase não deve se mexer. Quem trabalha são os lábios e a língua.',
        'Fale os trava-línguas devagar e exagerando, depois na velocidade normal. Só passe para a versão cantada quando a falada sair sem tropeço.',
        'No "Pa ta ka cantado", comece no andamento do exercício e suba aos poucos. Registre o andamento mais rápido em que as sílabas ainda saem limpas e afinadas.',
        'No exercício das vogais, cante em frente ao espelho: a boca muda pouco, e o espaço por dentro fica igual.',
        'Se sentir a mandíbula cansada ou dura, pare, massageie as bochechas com movimentos circulares e boceje uma ou duas vezes antes de continuar.'
      ],
      mistakes: [
        'Morder as palavras com a mandíbula. Correção: apoie a mão no queixo e fale "pa ta ka" sem deixar a mão subir e descer. No começo parece estranho; em poucos dias vira hábito.',
        'Explodir as consoantes com força. Correção: consoante clara é consoante rápida e precisa, não forte. Fale como quem cochicha um segredo que precisa ser entendido.',
        'Sorriso largo no "i" e no "é". Correção: deixe os cantos da boca relaxados e pense essas vogais com o mesmo espaço interno do "ó".',
        'Acelerar antes de o som estar limpo. Correção: a velocidade vem com a repetição. Se tropeçar, volte ao andamento anterior.'
      ],
      tips: [
        'Trava-língua é ótimo para fazer no trânsito ou no banho: não cansa a voz e treina a língua.',
        'Grave um trecho cantado e ouça sem olhar a letra. Se você não entende alguma palavra, a plateia também não vai entender.',
        'Nas palavras com som nasal, como "coração" e "também", cante a vogal tranquila e deixe o som nasal aparecer sem apertar a garganta.'
      ],
      listen: [
        'Construção — Chico Buarque (palavras longas encaixadas no ritmo, com dicção limpa)',
        'Diariamente — Marisa Monte (uma lista de frases em que cada palavra é clara, sem exagero)'
      ],
      ex: [
        { id: 'ritmo-2a', name: 'Pa ta ka e trava-línguas falados', desc: 'Siga as fases falando, sem cantar, com a mandíbula solta: "pa ta ka" devagar e depois rápido, e em seguida os dois trava-línguas, três vezes cada.', syl: 'pa ta ka e trava-línguas (falado)', mode: 'livre', breath: [['Fale "pa ta ka" devagar e depois rápido, sem travar', 15], ['"O rato roeu a roupa do rei de Roma"', 15], ['"Três pratos de trigo para três tigres tristes"', 15], ['Respire e solte a mandíbula', 5]], cycles: 3, goal: { m: 'rep', v: 5 } },
        { id: 'ritmo-2b', name: 'Pa ta ka cantado', desc: 'Uma sílaba por nota na escala de cinco notas, com consoantes rápidas e a mandíbula quieta; suba o andamento aos poucos.', syl: 'pa ta ka', mode: 'junto', mel: '1:0.5 2:0.5 3:0.5 4:0.5 5:0.5 4:0.5 3:0.5 2:0.5 1:2', lyr: 'pa ta ka pa ta ka pa ta ka', bpm: 70, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'bpm', v: 110 } },
        { id: 'ritmo-2c', name: 'Trava-língua cantado', desc: 'Cante "três pratos de trigo para três tigres tristes", uma sílaba por nota, sem tropeçar e sem morder as palavras.', syl: 'três pratos de trigo para três tigres tristes', mode: 'junto', mel: '1:0.5 1:0.5 2:0.5 2:0.5 3:0.5 3:0.5 4:0.5 4:0.5 5:0.5 5:0.5 4:0.5 3:0.5 1:2', lyr: 'três pra tos de tri go pa ra três ti gres tris tes', bpm: 72, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 70 } },
        { id: 'ritmo-2d', name: 'Vogais da mesma família', desc: 'Uma vogal diferente em cada nota, descendo, com o mesmo espaço dentro da boca em todas.', syl: 'mi mé má mó mu', mode: 'junto', mel: '5:2 4:2 3:2 2:2 1:4', lyr: 'mi mé má mó mu', bpm: 72, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 75 } }
      ]
    },
    {
      id: 'ritmo-3',
      name: 'Contratempo e síncope',
      level: 2,
      goal: 'Cantar notas que começam fora da batida do pé e frases sincopadas, sem empurrar as notas de volta para cima do tempo.',
      text: [
        'Cada pulso tem duas metades. A primeira é o tempo, quando o pé bate no chão. A segunda é o contratempo, quando o pé está no ar. Contando em voz alta fica assim: "1 e 2 e 3 e 4 e", e o contratempo é cada "e". Uma nota que começa no "e" está no contratempo, e é isso que dá a sensação de balanço em tanta música brasileira.',
        'Síncope é uma nota que começa numa parte fraca e se prolonga por cima da parte forte seguinte. O acento sai do lugar esperado e a música ganha ginga. O samba é feito disso, com a famosa figura curta, longa, curta. A MPB, o pop, o sertanejo e o R&B também usam síncope o tempo todo, principalmente quando a sílaba chega meio tempo antes da batida, o que se chama antecipação.',
        'O erro natural de quem está aprendendo é "quadrar" a síncope: puxar a nota de volta para cima da batida do pé, porque é onde o corpo espera que ela esteja. A frase fica certinha e sem graça, ou então a pessoa se perde e chega atrasada na frase seguinte. O remédio é separar as tarefas: o pé fica fixo no tempo, sempre, e a voz se encaixa entre as batidas.',
        'Treine na ordem: primeiro com palmas, depois falando "pá" no ritmo, depois cantando. Se uma figura não sai, fale o ritmo devagar contando "1 e 2 e" e marque com o dedo onde cada sílaba começa. Sentir a síncope no corpo leva algumas semanas para quem nunca treinou, e com repetição ela fica natural.'
      ],
      steps: [
        'No exercício livre, coloque um samba ou um pop animado, bata o pé no tempo e dê palmas só no contratempo, quando o pé está no ar.',
        'Em "Notas no contratempo", o pé bate na pausa e a voz entra no "e". Fale "pá" no ritmo uma vez antes de cantar.',
        'Em "Curta, longa, curta", sinta a nota longa atravessando a batida do pé. Não corte a longa para cair no tempo.',
        'Na "Frase sincopada", junte tudo: entradas no contratempo e notas que atravessam a batida. Comece devagar e só suba de tom quando o ritmo estiver firme.',
        'Se o microfone mostrar notas fora no meio da frase, quase sempre foi o ritmo que desorganizou a afinação. Fale a frase no ritmo e cante de novo.'
      ],
      mistakes: [
        'Empurrar a nota sincopada para cima da batida. Correção: deixe o pé no tempo e cante a nota enquanto o pé está no ar. Se ajudar, fale "e" baixinho no lugar da nota antes de cantar.',
        'Parar de bater o pé quando a síncope aparece. Correção: o pé é a sua régua. Se ele para, você perde a referência; diminua o andamento até conseguir os dois juntos.',
        'Correr depois da síncope. Correção: a nota longa da síncope dura de verdade. Conte a duração dela por dentro antes de seguir.'
      ],
      tips: [
        'Palmas no contratempo enquanto ouve samba e pagode é um dos melhores treinos de síncope que existem, e não gasta voz.',
        'Falar o ritmo com "pá" antes de cantar resolve a maior parte dos problemas. Ritmo primeiro, nota depois.',
        'Se uma frase sincopada travar, cante só as duas primeiras notas várias vezes e vá acrescentando uma nota por vez.'
      ],
      listen: [
        'Desafinado — João Gilberto (a voz quase nunca cai em cima da batida do violão)',
        'País Tropical — Jorge Ben Jor (síncopes e contratempos do começo ao fim)'
      ],
      ex: [
        { id: 'ritmo-3a', name: 'Palmas no contratempo', desc: 'Com um samba ou um pop tocando, bata o pé no tempo e dê palmas só no contratempo, quando o pé está no ar, até o fim de cada fase.', syl: 'palmas (sem cantar)', mode: 'livre', breath: [['Pé no tempo e palmas no "e"', 40], ['Pare e respire', 10]], cycles: 3, goal: { m: 'rep', v: 4 } },
        { id: 'ritmo-3b', name: 'Notas no contratempo', desc: 'O pé bate na pausa e a voz entra no "e" de cada tempo; só a última nota cai em cima da batida.', syl: 'pá', mode: 'junto', mel: 'r:0.5 1:0.5 r:0.5 1:0.5 r:0.5 3:0.5 r:0.5 3:0.5 r:0.5 5:0.5 r:0.5 3:0.5 1:2', bpm: 76, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 70 } },
        { id: 'ritmo-3c', name: 'Curta, longa, curta', desc: 'A figura clássica do samba: a nota do meio começa no contratempo e atravessa a batida do pé.', syl: 'tá', mode: 'junto', mel: '1:0.5 2 3:0.5 3:0.5 4 5:0.5 5:0.5 4 3:0.5 2:0.5 3 2:0.5 1:2', bpm: 72, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 70 } },
        { id: 'ritmo-3d', name: 'Frase sincopada', desc: 'Uma frase com entradas no contratempo e notas que atravessam a batida, como nas melodias de pop e MPB.', syl: 'dá', mode: 'junto', mel: 'r:0.5 1:0.5 2:0.5 3 2:0.5 1 r:0.5 3:0.5 4:0.5 5 4:0.5 3 2:0.5 3 2:0.5 1:2', bpm: 84, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 75 } }
      ]
    },
    {
      id: 'ritmo-4',
      name: 'Respirar no lugar certo',
      level: 2,
      goal: 'Planejar onde respirar em cada frase, usando pausas e pontuação, e fazer respirações rápidas e silenciosas quando a pausa é curta.',
      text: [
        'O lugar onde você respira muda tanto o som quanto o sentido. Respirar no meio de uma palavra ou de uma ideia quebra a frase, como uma vírgula no lugar errado. Não respirar quando precisa é pior: o fim da frase chega sem ar, a nota cai, a garganta aperta e a voz sai espremida. Quem canta com experiência planeja as respirações como quem desenha um mapa antes da viagem.',
        'Os lugares naturais para respirar são as pausas da música, a pontuação da letra (vírgula e ponto), o espaço entre duas ideias e o momento antes de uma frase longa ou aguda. Pegue a letra da música e marque com uma barra "/" as respirações completas e com um "v" as respirações rápidas. Depois, cante sempre respeitando o mapa, até ele virar automático.',
        'Existem dois tipos de respiração no canto. A completa acontece nas pausas maiores: calma, baixa, sentindo a barriga e as costelas se abrirem, sem levantar os ombros. A rápida, ou de reposição, acontece em meio tempo: um gole curto de ar pela boca, com a garganta aberta como no começo de um bocejo. Se a respiração rápida faz barulho, é sinal de garganta fechada; abra o espaço e o ruído some.',
        'Não encha demais. Pegar ar demais para uma frase curta cria tensão no peito e no pescoço, e a primeira nota sai empurrada. Respire na medida da frase que vem e termine cada frase com um pouco de ar sobrando. Se você sente que precisa de muito ar o tempo todo, provavelmente está soltando ar demais no começo das frases; cante as primeiras notas um pouco mais leves.'
      ],
      steps: [
        'No exercício livre, escolha uma música, copie a letra e marque "/" e "v" onde vai respirar. Leia a letra em voz alta no ritmo, respeitando as marcas.',
        'Em "Respirar na pausa", use cada pausa de um tempo para uma respiração completa e calma, sem levantar os ombros.',
        'Em "Respiração rápida", a pausa é de meio tempo: pegue só um gole de ar pela boca, sem barulho, e entre no tempo.',
        'Na "Frase longa num fôlego só", respire antes de começar e distribua o ar até a última nota. Comece leve para sobrar ar no fim.',
        'Volte à sua música e cante com o mapa de respirações. Ajuste o mapa se alguma frase ainda chegar sem ar.'
      ],
      mistakes: [
        'Respiração barulhenta, com chiado. Correção: o chiado vem da garganta fechada. Abra a boca e a garganta como no começo de um bocejo, e o ar entra rápido e em silêncio.',
        'Levantar os ombros para respirar. Correção: os ombros ficam parados. O ar entra embaixo, e quem se mexe é a barriga, a cintura e as costelas.',
        'Respirar em toda pausa, mesmo sem precisar. Correção: respiração demais também cansa e quebra o fraseado. Siga o mapa e pule as pausas em que ainda há ar.',
        'Entrar com atraso depois de respirar. Correção: a respiração cabe dentro da pausa. Comece a respirar logo que a frase anterior termina, e não no último instante.'
      ],
      tips: [
        'Lápis na letra é o melhor amigo de quem canta. Profissionais marcam as respirações em tudo o que vão cantar.',
        'Se uma frase é longa demais para o seu fôlego de hoje, escolha uma respiração rápida escondida, num lugar onde ela não quebre o sentido.',
        'Respirar pelo nariz é mais calmo; pela boca é mais rápido. Nas pausas longas use o nariz, nas curtas use a boca.',
        'Se sentir tontura de tanto respirar fundo, pare um minuto e respire normalmente antes de continuar.'
      ],
      listen: [
        'Como Nossos Pais — Elis Regina (frases longas e intensas, com respirações escolhidas a dedo)'
      ],
      ex: [
        { id: 'ritmo-4a', name: 'Mapa de respiração', desc: 'Copie a letra de uma música, marque "/" para respirar fundo e "v" para respirar rápido, e leia em voz alta no ritmo respeitando as marcas.', syl: 'letra falada no ritmo', mode: 'livre', goal: { m: 'rep', v: 3 } },
        { id: 'ritmo-4b', name: 'Respirar na pausa', desc: 'Quatro frases com pausa de um tempo entre elas: use cada pausa para uma respiração completa e calma.', syl: 'lá', mode: 'junto', mel: '1 2 3 4 5:3 r:1 5 4 3 2 1:3 r:1 3 4 5 6 5:3 r:1 4 3 2 7, 1:3', bpm: 84, zone: 'mid', dir: 'up', steps: 4, goal: { m: 'afin', v: 75 } },
        { id: 'ritmo-4c', name: 'Respiração rápida', desc: 'Arpejos com pausa de meio tempo entre eles: só um gole de ar pela boca, sem barulho, e a próxima frase entra no tempo.', syl: 'nô', mode: 'junto', mel: '1 3 5 3 1:1.5 r:0.5 2 4 6 4 2:1.5 r:0.5 3 5 7 5 3:1.5 r:0.5 4 6 8 6 4:1.5 r:0.5 5 4 3 2 1:2', bpm: 96, zone: 'mid', dir: 'up', steps: 4, goal: { m: 'afin', v: 75 } },
        { id: 'ritmo-4d', name: 'Frase longa num fôlego só', desc: 'Uma frase longa e ligada sem respirar no meio: comece leve e distribua o ar até a última nota.', syl: 'a', mode: 'junto', mel: '1 2 3 2 3 4 3 4 5 4 5 6 5 4 3 2 1:3', bpm: 90, zone: 'mid', dir: 'up', steps: 4, goal: { m: 'afin', v: 75 } }
      ]
    },
    {
      id: 'ritmo-5',
      name: 'Legato e staccato',
      level: 2,
      goal: 'Ligar as notas numa linha contínua de som e, no contraste, cantar notas curtas e soltas com um impulso leve da barriga, sem golpe na garganta.',
      text: [
        'Legato é cantar com as notas ligadas, sem buracos entre elas, como uma linha desenhada sem tirar a caneta do papel. O ar não para entre uma nota e outra, as consoantes são rápidas e a vogal ocupa quase todo o tempo. Baladas, MPB, sertanejo romântico e louvor são cantados quase sempre em legato, e é ele que dá a sensação de voz bonita e contínua.',
        'Legato não é escorregar. Se a voz desliza devagar de uma nota para outra o tempo todo, a melodia fica mole e a afinação parece imprecisa. A passagem entre as notas é rápida e limpa: o som continua, mas cada nota chega no seu lugar. Pense em subir uma escada sem tirar a mão do corrimão, e não em subir uma rampa.',
        'Staccato é o contrário: notas curtas e separadas, com silêncio entre elas. Cada nota começa com um impulso pequeno da barriga, como uma risada curta, e não com um golpe na garganta. Golpe de glote é aquele estalo seco que aparece quando as pregas vocais (o nome correto das "cordas vocais") se apertam e se soltam de uma vez; repetido muitas vezes, ele irrita a voz. Staccato bem feito é leve e treina o apoio do ar e o início limpo das notas.',
        'A maior parte das músicas mistura os dois: frases ligadas nas partes calmas e sílabas curtas nas partes rítmicas. Saber escolher faz parte do estilo. Faça os staccatos em volume médio para baixo e, se aparecer arranhado, ardor ou rouquidão, pare e volte para o legato suave.'
      ],
      steps: [
        'Na "Escala ligada", cante em "ô" com o ar contínuo. Ouça se existe algum buraco entre as notas e procure apagá-lo.',
        'Coloque a mão na barriga e faça três "ha" curtos, como uma risada. Sinta o impulso embaixo, e não na garganta.',
        'No "Arpejo em staccato", cante cada nota curta e solta, com o mesmo impulso leve da risada. As pausas entre as notas são silêncio de verdade.',
        'Em "Ligado e solto", cante a subida ligada em "lu" e a descida solta em "pá", mudando de caráter sem perder a afinação.',
        'Escolha uma música de que você gosta e descubra quais trechos pedem legato e quais pedem notas curtas.'
      ],
      mistakes: [
        'Escorregar entre todas as notas no legato. Correção: ligue o som, mas chegue em cada nota de uma vez. Cante devagar olhando o traço: ele deve parecer uma escada, não uma rampa.',
        'Fazer staccato com golpe na garganta. Correção: comece com um "h" levíssimo antes da vogal e deixe a barriga dar o impulso. Se ouvir um estalo seco no início da nota, suavize.',
        'Staccato forte demais. Correção: notas curtas pedem pouco volume. Volume alto no staccato cansa a voz em minutos.'
      ],
      tips: [
        'O traço do microfone mostra o legato: uma linha contínua com degraus. No staccato aparecem tracinhos separados.',
        'Um bom teste de legato é cantar a escala só na vogal e depois com consoantes ("lu lu lu"): o som deve continuar ligado nas duas versões.'
      ],
      listen: [
        'Travessia — Milton Nascimento (frases longas e ligadas, sem buracos entre as notas)',
        'Brasil Pandeiro — Novos Baianos (sílabas curtas, rítmicas e bem soltas)'
      ],
      ex: [
        { id: 'ritmo-5a', name: 'Escala ligada', desc: 'Escala lenta em "ô" com o ar contínuo, sem buracos entre as notas e sem escorregar.', syl: 'ô', mode: 'junto', mel: '1:2 2:2 3:2 4:2 5:4 4:2 3:2 2:2 1:4', bpm: 84, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 80 } },
        { id: 'ritmo-5b', name: 'Arpejo em staccato', desc: 'Notas curtas e soltas com impulso leve da barriga, como uma risada, e silêncio de verdade entre elas.', syl: 'ha (curto e leve)', mode: 'junto', mel: '1:0.5 r:0.5 3:0.5 r:0.5 5:0.5 r:0.5 8:0.5 r:0.5 5:0.5 r:0.5 3:0.5 r:0.5 1:1', bpm: 80, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 70 } },
        { id: 'ritmo-5c', name: 'Ligado e solto', desc: 'Suba ligado em "lu" e desça solto em "pá", mudando o caráter sem perder a afinação.', syl: 'lu (ligado) e pá (solto)', mode: 'junto', mel: '1 2 3 4 5:2 5:0.5 r:0.5 4:0.5 r:0.5 3:0.5 r:0.5 2:0.5 r:0.5 1:2', lyr: 'lu lu lu lu lu pá pá pá pá pá', bpm: 84, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 75 } }
      ]
    },
    {
      id: 'ritmo-6',
      name: 'Fraseado: para onde a frase vai',
      level: 3,
      goal: 'Dar direção a cada frase, destacar a palavra importante e terminar as frases com intenção, em vez de largá-las.',
      text: [
        'Frase musical é como uma frase falada: tem começo, um ponto principal e um fim. Fraseado é o jeito como você dá forma a ela. Duas pessoas podem cantar as mesmas notas, no mesmo tempo e afinadas, e soar completamente diferentes; a diferença quase sempre está no fraseado. É aqui que a técnica começa a virar música.',
        'Quase toda frase vai para algum lugar: a nota mais alta, a nota mais longa ou a palavra mais importante. Pense na frase como uma flecha. Ela cresce um pouco até esse ponto e relaxa depois dele. O contrário disso é cantar "quadrado", com todas as sílabas do mesmo tamanho e do mesmo volume, o que soa como um robô lendo a letra.',
        'A palavra importante recebe um pouco mais: um pouco mais de duração, de volume, uma consoante mais clara ou uma cor mais íntima. Para descobrir qual é, fale a letra como se estivesse contando aquilo para alguém. Respeite também a sílaba forte das palavras em português; quando a melodia coloca uma sílaba fraca num tempo forte, alivie essa sílaba para a palavra continuar natural.',
        'O fim da frase é onde a maioria das pessoas larga. A voz cai, o ar some, a última consoante desaparece e a nota final sai abaixo do tom. Termine a frase de propósito: a última nota tem a mesma afinação e o mesmo cuidado da primeira, e o som acaba no momento certo, junto com a música. Uma frase bem terminada faz quem ouve esperar a próxima.'
      ],
      steps: [
        'Faça o exercício falado da palavra que muda o sentido. Perceba como a mesma frase vira outra coisa só mudando o destaque.',
        'Em "Crescer até o ponto alto", descubra o ponto de chegada de cada frase e cresça até ele, relaxando depois.',
        'Em "Terminar a frase", cante com atenção total na última nota: afinada, inteira e terminando junto com o piano.',
        'Em "Frase com direção sem piano", mantenha a forma da frase sem a ajuda do piano, só com o acorde inicial.',
        'Escolha uma frase da sua música, marque na letra a palavra importante e o ponto de chegada, e cante três versões diferentes. Grave e escolha a melhor.'
      ],
      mistakes: [
        'Todas as notas com o mesmo peso. Correção: escolha um ponto de chegada por frase e deixe o resto servir a ele. Nem tudo pode ser importante.',
        'Largar o fim da frase. Correção: pense na última nota como o destino da viagem. Mantenha o ar e a afinação até o corte, e corte no tempo.',
        'Destacar com volume demais. Correção: destaque é contraste, não grito. Às vezes a palavra importante fica mais forte cantada mais baixo e mais perto.'
      ],
      tips: [
        'Fale a frase uma vez com a intenção de quem conta uma história. Depois cante as notas mantendo exatamente aquela intenção.',
        'Ouça cantores de que você gosta prestando atenção só nos finais de frase. Você vai notar como eles cuidam desse momento.',
        'Um desenho ajuda: escreva a letra e trace uma seta subindo até a palavra principal e descendo depois dela.'
      ],
      listen: [
        'O Bêbado e a Equilibrista — Elis Regina (cada frase tem direção e palavras destacadas)',
        'Detalhes — Roberto Carlos (fraseado de quem conversa e finais de frase bem cuidados)'
      ],
      ex: [
        { id: 'ritmo-6a', name: 'A palavra que muda o sentido', desc: 'Fale "eu não falei que você ia voltar hoje" seis vezes, destacando a cada vez uma palavra diferente (eu, não, falei, você, voltar, hoje), e repare como o sentido muda.', syl: 'frase falada', mode: 'livre', goal: { m: 'rep', v: 4 } },
        { id: 'ritmo-6b', name: 'Crescer até o ponto alto', desc: 'Duas frases que sobem até um ponto de chegada: cresça um pouco até a nota mais alta e relaxe depois dela, sem deixar a voz cair.', syl: 'lá', mode: 'junto', mel: '1 2 3 5 6:2 5 3 2:2 r:1 2 3 5 8:3 6 5 3 2 1:3', bpm: 80, zone: 'mid', dir: 'up', steps: 4, goal: { m: 'afin', v: 80 } },
        { id: 'ritmo-6c', name: 'Terminar a frase', desc: 'Cante "fica mais um pouco aqui" com a palavra "pouco" como ponto alto e a última nota afinada e inteira até o corte.', syl: 'fica mais um pouco aqui', mode: 'junto', mel: '3 2:0.5 3 4:0.5 5:1.5 4:0.5 2 1:3', lyr: 'fi ca mais um pou co a qui', bpm: 76, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 80 } },
        { id: 'ritmo-6d', name: 'Frase com direção sem piano', desc: 'O piano dá só o acorde; você canta a frase inteira sem ajuda, crescendo até o ponto alto e com o final afinado.', syl: 'lá', mode: 'junto', solo: true, mel: '5 6 5 3 1:2 2 3 4 5:3 r:1 5 6 8 6 5:2 4 3 2 1:4', bpm: 80, zone: 'mid', dir: 'stay', steps: 3, goal: { m: 'afin', v: 80 } }
      ]
    }
  ]
};
