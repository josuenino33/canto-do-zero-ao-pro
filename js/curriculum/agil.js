// Padrões de agilidade em graus da escala. Notas de meio tempo (:0.5) e de um quarto de tempo (:0.25).
const CINCO_ST = '1:0.5 r:0.5 2:0.5 r:0.5 3:0.5 r:0.5 4:0.5 r:0.5 5:0.5 r:0.5 4:0.5 r:0.5 3:0.5 r:0.5 2:0.5 r:0.5 1:2';
const CINCO_RAP = '1:0.5 2:0.5 3:0.5 4:0.5 5:0.5 4:0.5 3:0.5 2:0.5 1:2';
const CINCO_DUAS = '1:0.5 2:0.5 3:0.5 4:0.5 5:0.5 4:0.5 3:0.5 2:0.5 1:0.5 2:0.5 3:0.5 4:0.5 5:0.5 4:0.5 3:0.5 2:0.5 1:2';
const ARP8_RAP = '1:0.5 3:0.5 5:0.5 8:0.5 5:0.5 3:0.5 1:0.5 3:0.5 5:0.5 8:0.5 5:0.5 3:0.5 1:2';
const TRINADO = '1:0.25 2:0.25 1:0.25 2:0.25 1:0.25 2:0.25 1:0.25 2:0.25 1:0.25 2:0.25 1:0.25 2:0.25 1:0.25 2:0.25 1:0.25 2:0.25 1:2';

export default {
  id: 'agil',
  name: 'Agilidade e precisão',
  desc: 'Notas curtas com apoio, escalas e arpejos rápidos, trinados e as voltas do gospel, do soul e do R&B, sempre com precisão antes de velocidade.',
  lessons: [
    {
      id: 'agil-1',
      name: 'Staccato com apoio',
      level: 2,
      goal: 'Cantar notas curtas e separadas, com o impulso vindo da barriga e a garganta solta.',
      text: [
        'Staccato é o nome das notas curtas e separadas, com um pequeno silêncio entre elas. É o primeiro passo da agilidade, porque ensina a voz a começar e terminar cada nota com precisão. No canto, o staccato não nasce na garganta: ele nasce de pequenos impulsos dos músculos da barriga, como quando você ri ("ha, ha, ha") ou late de brincadeira.',
        'Faça um teste: coloque a mão logo abaixo das costelas, no meio do corpo, e dê três risadas curtas. Você sente a barriga pular para dentro a cada risada. Esse pulo é o apoio do staccato. Se, em vez disso, a garganta fizer o trabalho, você ouve estalos secos (golpes de glote) a cada nota, e a voz cansa rápido.',
        'O "h" antes da vogal ajuda: "ha" e "hu" começam com um pouquinho de ar, o que impede o golpe e deixa a nota começar limpa. Entre as notas a garganta fica aberta e você não precisa prender nada; o corpo repõe o ar sozinho. Cada nota curta tem que sair afinada mesmo assim, porque staccato rápido e desafinado não serve.',
        'Nos exercícios com meta de andamento, o app começa num tempo lento e você sobe aos poucos. Só aumente a velocidade quando as notas estiverem limpas, separadas e afinadas no tempo atual. Se a barriga cansar, é sinal de que ela está trabalhando; se a garganta cansar ou arranhar, pare e volte ao andamento lento no dia seguinte.'
      ],
      steps: [
        'Ria "ha, ha, ha" com a mão na barriga e sinta o pulo a cada risada.',
        'Cante as notas curtas na mesma altura em "ha", com o mesmo pulo da risada e um silêncio entre elas.',
        'Passe para a escala de cinco notas em staccato. Cada nota é curta, separada e afinada.',
        'No arpejo em "hu", deixe o "h" bem leve e as notas pulando como uma bolinha.',
        'Quando uma série sair limpa, aumente um pouco o andamento. Se sujar, volte.'
      ],
      mistakes: [
        'Fazer o staccato com a garganta, com estalos secos. Correção: use o "h" e o pulo da barriga. A garganta só deixa o som passar.',
        'Soprar demais entre as notas. Correção: o "h" é pequeno. O som de cada nota precisa ser maior do que o sopro.',
        'Perder a afinação na pressa de separar as notas. Correção: devagar. Primeiro afinado, depois curto, depois rápido.'
      ],
      tips: [
        'Imagine as notas como gotas caindo de uma torneira: cada uma inteira, redonda e separada.',
        'Rir de verdade antes do exercício solta o corpo e mostra o movimento certo melhor do que qualquer explicação.',
        'Se sentir tontura pelo excesso de ar, pause alguns segundos. Isso é comum no começo e passa.'
      ],
      listen: [
        'Chiclete com Banana — Jackson do Pandeiro (sílabas curtas e precisas, cada uma no seu lugar)'
      ],
      ex: [
        { id: 'agil-1a', name: 'Ha, ha, ha na mesma nota', desc: 'Quatro notas curtas e uma longa na mesma altura, em "ha", com o pulo da barriga a cada uma e silêncio entre elas.', syl: 'ha', mode: 'junto', mel: '1:0.5 r:0.5 1:0.5 r:0.5 1:0.5 r:0.5 1:0.5 r:0.5 1:2', bpm: 80, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 70 } },
        { id: 'agil-1b', name: 'Cinco notas em staccato', desc: 'A escala de cinco notas em "ha", cada nota curta e separada; aumente o andamento só quando sair limpa.', syl: 'ha', mode: 'junto', mel: CINCO_ST, bpm: 72, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'bpm', v: 112 } },
        { id: 'agil-1c', name: 'Arpejo saltado em "hu"', desc: 'O arpejo de oitava em "hu", com notas curtas que pulam como uma bolinha.', syl: 'hu', mode: 'junto', mel: '1:0.5 r:0.5 3:0.5 r:0.5 5:0.5 r:0.5 8:0.5 r:0.5 5:0.5 r:0.5 3:0.5 r:0.5 1:2', bpm: 72, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 70 } }
      ]
    },
    {
      id: 'agil-2',
      name: 'Escala rápida de cinco notas',
      level: 2,
      goal: 'Cantar a escala de cinco notas em notas rápidas e ligadas, com cada nota afinada, e subir o andamento aos poucos.',
      text: [
        'Agilidade é a capacidade de mudar de nota rápido sem perder a afinação e sem deixar as notas virarem um borrão. Ela aparece em quase todo estilo: nas voltas do samba e do pagode, nos enfeites do sertanejo e do forró, nas escalas da música clássica e nos "runs" do gospel. E, como tudo no canto, é treinável.',
        'A regra de ouro da agilidade é precisão antes de velocidade. Uma escala rápida e borrada ensina o cérebro a errar rápido. Uma escala lenta e limpa, repetida e acelerada aos poucos, ensina o cérebro a acertar cada vez mais rápido. Por isso os exercícios deste módulo começam num andamento lento e têm uma meta mais alta, que você alcança em dias ou semanas, não na primeira série.',
        'A voz ágil é uma voz leve. Quanto mais peso e volume, mais devagar a voz responde, como um carro carregado fazendo curvas. Cante as escalas rápidas em volume médio para baixo, com a vogal estável e o queixo parado. O movimento entre as notas é pequeno e acontece por dentro; se a boca, o queixo ou a cabeça "mastigam" cada nota, a escala fica pesada.',
        'Cada nota precisa existir. No traço do microfone, as notas rápidas aparecem como degraus curtos; se os degraus somem e vira uma rampa, você está deslizando em vez de cantar notas. Para limpar, ajuda colocar um "h" muito leve no começo de cada nota no início do treino e ir tirando conforme a escala fica clara.'
      ],
      steps: [
        'Cante a escala rápida com um "h" leve em cada nota ("ha-ha-ha"), para cada nota aparecer separada no traço.',
        'Passe para a versão ligada em "a", em volume médio-baixo, mantendo os degraus claros no traço.',
        'Na escala de cinco notas duas vezes seguidas, mantenha a mesma vogal do começo ao fim e respire só no acorde.',
        'Aumente o andamento de pouco em pouco, só quando a série atual sair limpa e afinada.',
        'Registre o andamento mais rápido em que a escala saiu limpa. Ele é a sua marca do dia.'
      ],
      mistakes: [
        'Correr antes de acertar. Correção: volte ao andamento em que a escala sai limpa e suba de pouco em pouco.',
        'Mexer o queixo a cada nota. Correção: queixo parado; segure de leve com a mão se precisar. A mudança de nota acontece por dentro.',
        'Borrar a nota de cima. Correção: a nota do topo é a que mais escapa. Pense nela como um ponto de chegada, mesmo rápido.'
      ],
      tips: [
        'Cante a escala lenta uma vez antes de cada série rápida. O cérebro usa a versão lenta como mapa.',
        'Use vogais diferentes em dias diferentes: "a", "i", "u". Cada vogal treina a agilidade de um jeito.',
        'Agilidade melhora com treinos curtos e frequentes: cinco minutos todo dia valem mais do que meia hora uma vez por semana.'
      ],
      listen: [
        'Una Voce Poco Fa — Cecilia Bartoli (escalas rápidas em que cada nota aparece, sem borrão)'
      ],
      ex: [
        { id: 'agil-2a', name: 'Cinco notas com "h" leve', desc: 'A escala de cinco notas em notas rápidas, com um "h" leve em cada nota para todas aparecerem separadas.', syl: 'ha', mode: 'junto', mel: CINCO_RAP, bpm: 80, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 75 } },
        { id: 'agil-2b', name: 'Cinco notas rápidas e ligadas', desc: 'A mesma escala ligada em "a", subindo o andamento aos poucos sem deixar as notas virarem rampa.', syl: 'a', mode: 'junto', mel: CINCO_RAP, bpm: 80, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'bpm', v: 140 } },
        { id: 'agil-2c', name: 'Cinco notas duas vezes', desc: 'Sobe e desce a escala de cinco notas duas vezes seguidas em "i", sem respirar no meio.', syl: 'i', mode: 'junto', mel: CINCO_DUAS, bpm: 76, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'bpm', v: 132 } }
      ]
    },
    {
      id: 'agil-3',
      name: 'Arpejos rápidos',
      level: 2,
      goal: 'Cantar arpejos rápidos, maiores e menores, com cada salto afinado e a voz leve no topo.',
      text: [
        'No arpejo as notas não são vizinhas: elas pulam de terça em terça (tônica, terça, quinta, oitava). Rápido, isso é mais difícil do que a escala, porque cada salto pede que a voz ache a nota sem passar pelas do meio. Arpejos rápidos aparecem em melodias de todos os estilos e são um ótimo treino de afinação em movimento.',
        'O erro mais comum no arpejo rápido é deslizar entre as notas, como se cada salto fosse uma pequena sirene. Para evitar, imagine as notas do acorde como pontos fixos e pouse em cada uma, mesmo que por um instante. Ouça o acorde que o piano toca antes: as notas do arpejo são exatamente as notas desse acorde, e o ouvido as reconhece com facilidade.',
        'Conforme o arpejo sobe, ele chega na parte de cima da sua voz. A regra dos agudos continua valendo: a nota de cima é a mais leve, e arpejo rápido pesado engasga no topo. Comece pelo arpejo de quinta (tônica, terça, quinta) e passe para o de oitava quando o primeiro estiver limpo num andamento confortável.',
        'O arpejo menor tem a terça um pouco mais baixa e um som mais escuro, mais triste. Cantar os dois treina o ouvido a perceber essa diferença, que é uma das mais importantes da música. Se a terça menor sair igual à maior, ouça o acorde de novo e cante devagar antes de acelerar.'
      ],
      steps: [
        'Ouça o acorde e cante o arpejo de quinta devagar uma vez, pousando em cada nota.',
        'No exercício rápido, mantenha a vogal e o volume iguais. A nota de cima é a mais leve.',
        'Passe para o arpejo de oitava quando o de quinta sair limpo.',
        'No arpejo menor, ouça o acorde com atenção antes: a terça é mais baixa.',
        'Suba o andamento aos poucos, sempre com as notas afinadas no traço.'
      ],
      mistakes: [
        'Deslizar entre as notas. Correção: pouse em cada nota. Faça uma série em staccato leve ("ha") e depois ligue de novo.',
        'Chegar na oitava com peso. Correção: comece mais leve e deixe a oitava ser a nota mais fina do arpejo.',
        'Cantar a terça maior no arpejo menor. Correção: ouça o acorde, cante a terça menor sozinha e devagar, e só depois acelere.'
      ],
      tips: [
        'Pense no arpejo como uma bola quicando escada acima: ela toca cada degrau, não rola.',
        'Pequenos toques da mão no ar, um para cada nota, ajudam a separar as notas no início.'
      ],
      ex: [
        { id: 'agil-3a', name: 'Arpejo de quinta rápido', desc: 'Tônica, terça, quinta e volta duas vezes em notas rápidas, em "a", pousando em cada nota.', syl: 'a', mode: 'junto', mel: '1:0.5 3:0.5 5:0.5 3:0.5 1:0.5 3:0.5 5:0.5 3:0.5 1:2', bpm: 80, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'bpm', v: 132 } },
        { id: 'agil-3b', name: 'Arpejo de oitava rápido', desc: 'O arpejo até a oitava e de volta, duas vezes, em "ô", com a oitava leve.', syl: 'ô', mode: 'junto', mel: ARP8_RAP, bpm: 76, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'bpm', v: 126 } },
        { id: 'agil-3c', name: 'Arpejo menor rápido', desc: 'O arpejo de oitava no modo menor, com a terça mais baixa, em notas rápidas em "a".', syl: 'a', mode: 'junto', minor: true, mel: ARP8_RAP, bpm: 76, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'bpm', v: 120 } }
      ]
    },
    {
      id: 'agil-4',
      name: 'Escalas de oitava e de nona em velocidade',
      level: 3,
      goal: 'Cantar escalas longas e rápidas, de uma oitava e de nona, atravessando a passagem com leveza e afinação.',
      text: [
        'Escalas longas juntam tudo o que você treinou: velocidade, afinação, fôlego e passagem. Numa escala de oitava rápida, a voz atravessa a região de troca em poucos décimos de segundo, e não há tempo de arrumar nada no meio. Se a voz está pesada embaixo, ela engasga na passagem; se está leve e equilibrada, a escala corre como água.',
        'Por isso a escala rápida também é um ótimo teste da voz mista. Comece leve e mantenha o volume médio-baixo. Deixe a vogal se ajustar de leve ao subir, como no módulo de agudos, mas sem mexer o queixo. Na descida a voz tende a acelerar e cair; siga o tempo do piano e mantenha cada nota afinada até a última.',
        'A escala de nona sobe em arpejo até a nona e desce pela escala inteira. Ela é ótima para agilidade porque mistura saltos e passos, e porque a descida longa exige controle do ar até o fim. Respire no acorde, antes de começar, e não no meio. Se faltar ar, cante mais baixo, não mais rápido.',
        'Treine com metas de andamento como nas lições anteriores. Escalas longas pedem mais paciência, e é comum ficar dias no mesmo andamento. Quando a garganta cansar, pare: agilidade forçada vira tensão, e tensão deixa a voz mais lenta, não mais rápida.'
      ],
      steps: [
        'Cante a escala de oitava devagar uma vez, ouvindo cada nota, e só depois faça a versão rápida.',
        'Na versão rápida, mantenha o volume médio-baixo e a vogal estável, com atenção especial na passagem.',
        'Faça a escala de nona: arpejo na subida, escala na descida, sem respirar no meio.',
        'Cante a escala de oitava sem o piano, só com o acorde, e confira se a última nota voltou para a casa.',
        'Suba o andamento aos poucos e registre o melhor andamento limpo do dia.'
      ],
      mistakes: [
        'Engasgar na passagem. Correção: comece mais leve e diminua o volume ao subir. Se precisar, faça algumas séries em "u" antes de voltar ao "a".',
        'Acelerar na descida. Correção: siga o piano. A descida tem o mesmo tempo da subida.',
        'Respirar no meio da escala. Correção: respire no acorde e cante mais baixo se o ar não estiver dando.'
      ],
      tips: [
        'Divida a escala em pedaços: treine só a subida rápida, depois só a descida, depois junte.',
        'Pense em grupos de quatro notas, como se cada grupo fosse um passo só. Fica mais fácil manter o tempo.',
        'Se a escala sai limpa em "u" e borrada em "a", a dificuldade é a vogal, não a velocidade. Treine o "a" mais devagar.'
      ],
      listen: [
        'Rejoice Greatly, O Daughter of Zion — Handel (do oratório O Messias; escalas longas e rápidas com cada nota clara)'
      ],
      ex: [
        { id: 'agil-4a', name: 'Escala de oitava rápida', desc: 'Uma oitava inteira subindo e descendo em notas rápidas, em "a", com a passagem leve.', syl: 'a', mode: 'junto', mel: '1:0.5 2:0.5 3:0.5 4:0.5 5:0.5 6:0.5 7:0.5 8:0.5 7:0.5 6:0.5 5:0.5 4:0.5 3:0.5 2:0.5 1:2', bpm: 72, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'bpm', v: 132 } },
        { id: 'agil-4b', name: 'Escala de nona rápida', desc: 'Suba em arpejo até a nona e desça pela escala em notas rápidas, em "i", sem respirar no meio.', syl: 'i', mode: 'junto', mel: '1:0.5 3:0.5 5:0.5 8:0.5 9:0.5 8:0.5 7:0.5 6:0.5 5:0.5 4:0.5 3:0.5 2:0.5 1:2', bpm: 72, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'bpm', v: 132 } },
        { id: 'agil-4c', name: 'Oitava rápida sem piano', desc: 'A escala de oitava em notas rápidas, em "lá", só com o acorde de referência; a última nota tem que voltar para a casa.', syl: 'lá', mode: 'junto', solo: true, mel: '1:0.5 2:0.5 3:0.5 4:0.5 5:0.5 6:0.5 7:0.5 8:0.5 7:0.5 6:0.5 5:0.5 4:0.5 3:0.5 2:0.5 1:2', bpm: 100, zone: 'mid', dir: 'up', steps: 4, goal: { m: 'afin', v: 80 } }
      ]
    },
    {
      id: 'agil-5',
      name: 'Trinado e alternância rápida',
      level: 3,
      goal: 'Alternar rápido entre duas notas vizinhas, primeiro devagar e medido, até chegar a um trinado leve e afinado.',
      text: [
        'O trinado é a alternância muito rápida entre duas notas vizinhas, como o canto de um passarinho. Ele aparece na música clássica como enfeite e, numa forma mais livre, nos enfeites curtos da música popular, quando o cantor balança rapidamente entre duas notas numa palavra. É um dos exercícios de agilidade mais difíceis, porque exige que a voz mude de nota muito rápido sem perder nenhuma das duas.',
        'Não confunda trinado com vibrato. O vibrato é uma ondulação pequena e natural da nota, que aparece quando a voz está livre. O trinado é uma alternância entre duas notas de verdade, com distância maior, feita de propósito. No começo ele se treina medido: duas notas alternadas no tempo do piano, devagar, depois cada vez mais rápido.',
        'Há dois tamanhos de passo: o tom inteiro (como dó e ré) e o meio tom (como mi e fá). O meio tom é mais estreito e mais difícil de manter limpo, porque as duas notas são muito próximas e tendem a se fundir. Treine primeiro o tom inteiro e depois o meio tom. Nos dois, a nota de baixo é a principal e a de cima é um toque rápido.',
        'Um trinado bom vem de uma voz solta: queixo, língua e pescoço quietos, volume médio-baixo. Se o queixo ou a cabeça começarem a balançar junto, você está fazendo a alternância com músculos de fora; volte para o andamento lento. É normal levar semanas ou meses para um trinado rápido aparecer, e o treino medido prepara o caminho.'
      ],
      steps: [
        'Cante a alternância entre a tônica e a nota de cima em notas de meio tempo, ouvindo cada uma.',
        'Aumente o andamento aos poucos até as notas ficarem curtas, mas ainda separadas.',
        'Passe para o trinado medido, em notas de um quarto de tempo, começando devagar.',
        'Treine o meio tom entre a terceira e a quarta nota da escala, que é o passo mais estreito.',
        'Observe o queixo no espelho durante todo o treino: ele deve ficar parado.'
      ],
      mistakes: [
        'Balançar o queixo ou a cabeça. Correção: segure o queixo de leve com a mão e deixe a alternância acontecer por dentro.',
        'Deixar as duas notas virarem uma só, tremida. Correção: volte ao andamento em que as duas aparecem claramente e suba devagar.',
        'Fazer o trinado forte. Correção: trinado é leve. Volume médio-baixo deixa a voz responder rápido.'
      ],
      tips: [
        'Pense na nota de cima como um toque, não como uma nota inteira.',
        'Experimente vogais diferentes: algumas pessoas acham o trinado mais fácil em "i", outras em "a".',
        'Cinco minutos por dia, todo dia, funcionam melhor do que treinos longos de vez em quando.'
      ],
      listen: [
        'I Will Always Love You — Whitney Houston (enfeites rápidos de duas e três notas na abertura cantada sem acompanhamento)'
      ],
      ex: [
        { id: 'agil-5a', name: 'Alternância de tom inteiro', desc: 'Alterne entre a tônica e a segunda em notas de meio tempo, em "a", aumentando o andamento aos poucos.', syl: 'a', mode: 'junto', mel: '1:0.5 2:0.5 1:0.5 2:0.5 1:0.5 2:0.5 1:0.5 2:0.5 1:2', bpm: 80, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'bpm', v: 140 } },
        { id: 'agil-5b', name: 'Trinado medido', desc: 'A mesma alternância em notas de um quarto de tempo, como um trinado lento e contado.', syl: 'a', mode: 'junto', mel: TRINADO, bpm: 60, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'bpm', v: 100 } },
        { id: 'agil-5c', name: 'Trinado de meio tom', desc: 'Alterne entre a terceira e a quarta nota da escala, que ficam a meio tom de distância, sem fundir as duas, e termine na tônica.', syl: 'i', mode: 'junto', mel: '3:0.5 4:0.5 3:0.5 4:0.5 3:0.5 4:0.5 3:0.5 4:0.5 3:0.5 2:0.5 1:2', bpm: 72, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'bpm', v: 120 } }
      ]
    },
    {
      id: 'agil-6',
      name: 'Melismas e runs: gospel, soul e R&B',
      level: 3,
      goal: 'Cantar as voltas rápidas do gospel, do soul e do R&B (os runs) com cada nota no lugar, começando pela escala pentatônica.',
      text: [
        'Melisma é quando uma sílaba só é cantada em várias notas. No gospel, no soul, no R&B e também em muito samba, pagode e sertanejo, os cantores usam melismas rápidos, chamados de "runs", para enfeitar o fim das frases. Um run bom parece improvisado e fácil, mas por trás dele existe muita escala treinada devagar.',
        'A maioria dos runs usa a escala pentatônica, que tem cinco notas e deixa de fora as que criam mais tensão. Na pentatônica maior, as notas são a tônica, a segunda, a terça, a quinta e a sexta, e o run mais clássico é descer por ela da oitava até a tônica. A pentatônica menor (tônica, terça menor, quarta, quinta e sétima menor) tem o som mais "blues" e é a base de muitos runs do soul e do gospel. Uma nota de passagem entre a quarta e a quinta, chamada blue note, dá o tempero.',
        'A regra deste módulo vale em dobro aqui: precisão antes de velocidade. Ouvir um run rápido e tentar imitar direto gera um borrão afinado só no começo e no fim. O método que funciona é aprender o desenho devagar, nota por nota, depois acelerar aos poucos e, por último, soltar o ritmo. Os exercícios começam em andamentos lentos com metas mais rápidas para você seguir esse caminho.',
        'Runs pedem voz leve e flexível: volume médio-baixo, vogal estável (como "ô", "é" ou "a") e o queixo quieto. Um run pesado perde as notas do meio, então não use runs para mostrar força. E lembre que o enfeite está a serviço da música: os melhores cantores usam runs com economia, nos lugares certos.',
        'Muitos runs famosos passam pela parte aguda da voz e pela passagem. Treine os desenhos primeiro na região confortável, como nestes exercícios, e só depois leve para cima. Se a garganta arranhar ou arder, pare; nenhum enfeite vale uma voz cansada.'
      ],
      steps: [
        'Ouça a pentatônica maior descendo e repita devagar em "ô", nota por nota. Repare no som característico dela.',
        'Acelere aos poucos, conferindo no traço do microfone se cada nota apareceu.',
        'Passe para a volta que sobe e desce e depois para a pentatônica menor, que tem o som do blues.',
        'Treine a blue note devagar antes de acelerar: ela é uma nota de passagem rápida, não de parada.',
        'Quando os desenhos estiverem limpos, experimente encaixar um deles no fim de uma frase de uma música que você conhece.'
      ],
      mistakes: [
        'Imitar o run do cantor favorito na velocidade dele. Correção: aprenda o desenho devagar. Velocidade é a última coisa a chegar.',
        'Borrar as notas do meio. Correção: o microfone mostra quais notas sumiram. Cante só esse trecho devagar, com um "h" leve em cada nota.',
        'Cantar o run forte. Correção: leve e médio-baixo. Força deixa a voz lenta e pesada.',
        'Encher toda frase de enfeite. Correção: um run bem colocado vale mais do que dez espalhados.'
      ],
      tips: [
        'Ouça o run do cantor que você admira em velocidade reduzida (muitos aplicativos de música permitem). Você descobre as notas escondidas.',
        'Agrupe as notas: um run de seis notas fica mais fácil pensado como dois grupos de três.',
        'Use o mesmo desenho em vogais diferentes. Runs em "ô" costumam ser mais fáceis no começo.'
      ],
      listen: [
        "Ain't No Way — Aretha Franklin (melismas de soul com cada nota no lugar)",
        'Azul da Cor do Mar — Tim Maia (voltas de soul brasileiro no fim das frases)',
        "If I Ain't Got You — Alicia Keys (runs curtos e precisos, usados com economia)"
      ],
      ex: [
        { id: 'agil-6a', name: 'Pentatônica descendo', desc: 'Ouça e repita a descida da oitava até a tônica pela pentatônica maior, em "ô", subindo o andamento aos poucos.', syl: 'ô', mode: 'eco', mel: '8:0.5 6:0.5 5:0.5 3:0.5 2:0.5 1:2', bpm: 70, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'bpm', v: 120 } },
        { id: 'agil-6b', name: 'Volta pentatônica', desc: 'Um run que sobe da quinta até a nona e desce pela pentatônica até a tônica, em notas de um quarto de tempo, em "ê".', syl: 'ê', mode: 'junto', mel: '5:0.25 6:0.25 8:0.25 9:0.25 8:0.25 6:0.25 5:0.25 3:0.25 2:0.25 1:1.75', bpm: 60, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'bpm', v: 96 } },
        { id: 'agil-6c', name: 'Pentatônica menor', desc: 'O run do soul: desça da oitava pela pentatônica menor (com a terça e a sétima menores) em "ô".', syl: 'ô', mode: 'junto', minor: true, mel: '8:0.5 7:0.5 5:0.5 4:0.5 3:0.5 1:2', bpm: 70, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'bpm', v: 120 } },
        { id: 'agil-6d', name: 'Run com blue note', desc: 'A pentatônica menor descendo com a blue note entre a quinta e a quarta, em notas de um quarto de tempo, em "a".', syl: 'a', mode: 'junto', minor: true, mel: '8:0.25 7:0.25 5:0.25 #4:0.25 4:0.25 3:0.25 1:2.5', bpm: 60, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'bpm', v: 100 } }
      ]
    }
  ]
};
