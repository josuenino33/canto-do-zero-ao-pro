import { M, SOLFA } from './helpers.js';

export default {
  id: 'ouvido',
  name: 'Ouvido para cantores',
  desc: 'Treinar o ouvido que guia a voz: intervalos subindo e descendo, escalas maior e menor, arpejos, frases de memória, graus contra o bordão e solfejo com dó móvel.',
  lessons: [
    {
      id: 'ouvido-1',
      name: 'Intervalos subindo',
      level: 1,
      goal: 'Reconhecer e cantar a segunda, a terça, a quarta e a quinta subindo, usando músicas conhecidas como referência.',
      text: [
        'Intervalo é a distância entre duas notas. Toda melodia é uma sequência de intervalos: um passo pequeno aqui, um salto maior ali. Quem sai do tom com frequência quase sempre erra o tamanho do salto, e não a nota em si: a voz sobe, mas sobe de menos ou de mais. Treinar intervalos é calibrar a régua que o ouvido usa para medir cada passo da música.',
        'Os intervalos recebem o nome pela quantidade de notas da escala que abrangem, contando a primeira e a última. De dó para ré é uma segunda (duas notas), de dó para mi é uma terça (dó, ré, mi), de dó para fá é uma quarta e de dó para sol é uma quinta. Cada um tem um jeito próprio de soar: a segunda parece um passo, a terça é doce, a quarta soa como um chamado e a quinta é aberta e firme.',
        'Para lembrar de cada intervalo, ligue o som a uma música que você já conhece. O começo do Parabéns a Você tem duas notas iguais e depois sobe uma segunda. When the Saints Go Marching In começa com uma terça subindo. A marcha nupcial de Wagner, tocada em tantas entradas de casamento, começa com uma quarta, e Brilha, Brilha, Estrelinha começa com uma quinta. Antes de cantar um salto, lembre a música de referência por dentro.',
        'Neste módulo o modo é quase sempre eco: o piano toca, para, e só depois você canta. Use esse silêncio para imaginar o salto antes de soltar a voz. Cantar uma nota que você já ouviu por dentro é muito mais fácil do que procurá-la com a garganta. Se o traço mostrar a nota de cima abaixo da barra, o salto foi curto; se ficou acima, foi longo.'
      ],
      steps: [
        'Comece pela segunda. Ouça as duas notas inteiras, imagine-as por dentro e só então repita em "nô".',
        'Antes de cada exercício, cante baixinho por dentro o começo da música de referência daquele intervalo.',
        'Segure a nota de cima até o fim da barra e confira no traço se ela ficou em cima, abaixo ou acima.',
        'Siga para a terça, a quarta e a quinta. Depois volte à segunda e repare como ela ficou mais fácil de medir.',
        'Passe para a próxima lição quando a nota de afinação passar de 70 nos quatro exercícios.'
      ],
      mistakes: [
        'Chegar na nota de cima escorregando. Correção: imagine a nota de cima antes de cantar e vá direto a ela. O deslize esconde se o salto estava certo.',
        'Fazer o salto curto demais, principalmente na quarta e na quinta. Correção: pense na nota de cima um pouquinho mais alta do que parece. A tendência natural é parar antes.',
        'Empurrar a voz para subir. Correção: os saltos desta lição cabem na sua voz. Se a garganta apertar, cante mais baixo; volume não ajuda a afinar.'
      ],
      tips: [
        'Monte a sua própria lista de referências: qualquer música que você conhece bem e que começa com um salto serve, desde que você confira o intervalo no piano.',
        'Mexa a mão para cima no tamanho do salto enquanto canta. O gesto ajuda o corpo a sentir a distância.',
        'Poucos minutos todos os dias rendem mais do que uma sessão longa por semana. O ouvido aprende por repetição frequente.'
      ],
      listen: [
        'When the Saints Go Marching In — Louis Armstrong (a terça maior subindo no começo da melodia)',
        'Amazing Grace — Judy Collins (a quarta subindo nas duas primeiras notas)',
        'Star Wars (Main Title) — John Williams (as duas primeiras notas longas do tema formam uma quinta subindo)'
      ],
      ex: [
        { id: 'ouvido-1a', name: 'Segunda subindo', desc: 'Ouça duas notas vizinhas subindo e repita, segurando a nota de cima.', syl: 'nô', mode: 'eco', mel: '1:2 2:2', bpm: 72, zone: 'mid', dir: 'up', steps: 6, goal: { m: 'afin', v: 70 } },
        { id: 'ouvido-1b', name: 'Terça subindo', desc: 'Ouça o salto de terça, o mesmo do começo de When the Saints, e repita.', syl: 'nô', mode: 'eco', mel: '1:2 3:2', bpm: 72, zone: 'mid', dir: 'up', steps: 6, goal: { m: 'afin', v: 70 } },
        { id: 'ouvido-1c', name: 'Quarta subindo', desc: 'Ouça o salto da marcha nupcial e repita indo direto à nota de cima.', syl: 'mô', mode: 'eco', mel: '1:2 4:2', bpm: 72, zone: 'mid', dir: 'up', steps: 6, goal: { m: 'afin', v: 70 } },
        { id: 'ouvido-1d', name: 'Quinta subindo', desc: 'Ouça o salto de Brilha, Brilha, Estrelinha e repita sem chegar baixo na nota de cima.', syl: 'mô', mode: 'eco', mel: '1:2 5:2', bpm: 72, zone: 'mid', dir: 'up', steps: 6, goal: { m: 'afin', v: 70 } }
      ]
    },
    {
      id: 'ouvido-2',
      name: 'Intervalos descendo',
      level: 1,
      goal: 'Cantar a segunda, as terças, a quarta e a quinta descendo, sem deixar a nota de baixo cair além do lugar.',
      text: [
        'Descer parece mais fácil do que subir, e é justamente por isso que muita gente erra sem perceber. Ao descer, a voz relaxa e tende a cair demais: a nota de baixo sai abaixo do lugar certo. O mesmo intervalo soa diferente subindo e descendo, então o ouvido precisa aprender as duas direções separadamente.',
        'Aqui aparece uma diferença importante entre as terças. A terça maior tem dois tons inteiros (quatro semitons) e a terça menor tem um tom e meio (três semitons). Parece pouco, mas é a diferença entre um som mais alegre e um som mais melancólico. Na escala maior, de mi para dó é uma terça maior, e de sol para mi é uma terça menor. Um dos exercícios coloca as duas lado a lado para você comparar.',
        'As referências ajudam de novo. Yesterday, dos Beatles, começa com uma segunda descendo. Hey Jude começa com uma terça menor descendo, o mesmo intervalo do canto do cuco. A Quinta Sinfonia de Beethoven abre com três notas iguais e uma terça maior abaixo. A Pequena Serenata Noturna de Mozart começa com uma quarta descendo. Para a quinta descendo, pense em Brilha, Brilha ao contrário: da nota alta de volta para a primeira.',
        'Ao descer, mantenha o mesmo cuidado que você tem ao subir. A nota de baixo também é um alvo, e não um lugar onde a voz simplesmente cai. Uma imagem que funciona: em vez de pular a escada de uma vez, desça pisando exatamente no degrau certo, com a mesma energia do começo ao fim.'
      ],
      steps: [
        'Comece pela segunda descendo: ouça, imagine e repita, segurando a nota de baixo até o fim da barra.',
        'Nas terças, compare as duas antes de cantar. A primeira é maior (mais larga), a segunda é menor (mais estreita).',
        'Na quarta e na quinta descendo, mire a nota de baixo e confira no traço se ela não ficou abaixo da barra.',
        'Feche com "Ida e volta": cada salto sobe e desce, e a volta tem que cair exatamente na primeira nota.',
        'Se uma direção for bem mais difícil que a outra, dedique a ela os primeiros minutos de cada treino.'
      ],
      mistakes: [
        'Deixar a nota de baixo despencar. Correção: mantenha o ar e a energia na nota de baixo, como se ela fosse tão importante quanto a de cima.',
        'Confundir a terça maior com a terça menor. Correção: cante devagar e compare. A maior soa mais aberta e alegre, a menor mais fechada. Volte ao exercício de terças sempre que tiver dúvida.',
        'Abaixar o queixo para chegar na nota de baixo. Correção: a cabeça fica parada e nivelada. A nota grave vem do ouvido e da voz solta, não do pescoço.'
      ],
      tips: [
        'Grave você cantando os saltos e ouça só as notas de baixo. É ali que costuma estar o erro.',
        'Se a referência não vier na hora, repita o exercício e cante a referência por dentro junto com o piano.'
      ],
      listen: [
        'Yesterday — The Beatles (a segunda descendo nas duas primeiras notas)',
        'Hey Jude — The Beatles (a terça menor descendo nas duas primeiras notas)',
        'Sinfonia nº 5 — Ludwig van Beethoven (o começo: três notas iguais e uma terça maior abaixo)',
        'Eine kleine Nachtmusik — Wolfgang Amadeus Mozart (a quarta descendo nas duas primeiras notas)'
      ],
      ex: [
        { id: 'ouvido-2a', name: 'Segunda descendo', desc: 'Ouça duas notas vizinhas descendo, como o começo de Yesterday, e repita.', syl: 'nô', mode: 'eco', mel: '2:2 1:2', bpm: 72, zone: 'mid', dir: 'up', steps: 6, goal: { m: 'afin', v: 70 } },
        { id: 'ouvido-2b', name: 'Terça maior e terça menor', desc: 'Repita uma terça maior descendo e depois uma terça menor, comparando o tamanho das duas.', syl: 'mô', mode: 'eco', mel: '3:2 1:2 r:1 5:2 3:2', bpm: 72, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 70 } },
        { id: 'ouvido-2c', name: 'Quarta e quinta descendo', desc: 'Repita dois saltos maiores que descem até a mesma nota, mirando a nota de baixo.', syl: 'nô', mode: 'eco', mel: '4:2 1:2 r:1 5:2 1:2', bpm: 72, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 70 } },
        { id: 'ouvido-2d', name: 'Ida e volta', desc: 'Terça, quarta e quinta subindo e voltando; a volta cai sempre na primeira nota.', syl: 'lá', mode: 'eco', mel: '1 3 1:2 r:1 1 4 1:2 r:1 1 5 1:2', bpm: 80, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 70 } }
      ]
    },
    {
      id: 'ouvido-3',
      name: 'A oitava e as escalas maior e menor',
      level: 2,
      goal: 'Cantar a oitava e as escalas maior e menor de memória, sentindo a diferença de cor entre as duas.',
      text: [
        'A oitava é o intervalo em que a nota de cima parece a mesma nota de baixo, só que mais aguda. Por isso as duas têm o mesmo nome: de um dó a outro dó é uma oitava. Over the Rainbow começa com um salto de oitava subindo. Para quem sente que só tem graves, a oitava parece grande; o app coloca o salto dentro da sua extensão, e a nota de cima deve sair leve, sem empurrar.',
        'Entre uma nota e a sua oitava cabem as sete notas da escala. A escala maior tem um desenho fixo de distâncias: tom, tom, semitom, tom, tom, tom, semitom. É esse desenho que dá a ela o som luminoso e resolvido das cantigas de roda e da maior parte das músicas que você conhece. A melodia de natal Joy to the World, por exemplo, começa descendo a escala maior inteira, da oitava até a primeira nota.',
        'A escala menor natural muda três notas: a terceira, a sexta e a sétima ficam meio tom abaixo. Só isso já muda a cor da música inteira, que fica mais sombria, mais séria ou mais melancólica. A mudança mais importante é a da terça, porque é ela que decide se uma melodia soa maior ou menor. Por isso um dos exercícios desta lição troca só a terceira nota e mantém todo o resto igual.',
        'Para cantar uma escala de memória, não pense em oito notas soltas. Pense no caminho e em onde ficam os passos pequenos, os semitons. Na escala maior, eles aparecem ao chegar na quarta nota e ao chegar na oitava. Na menor, aparecem ao chegar na terceira e na sexta. Sentir onde a voz quase não se mexe é o que deixa a escala afinada.'
      ],
      steps: [
        'Comece pela oitava. Ouça as duas notas e perceba como a de cima soa igual, só que mais alta. Cante a de cima leve, sem empurrar.',
        'Na escala maior, ouça a escala inteira antes de cantar. Preste atenção nos dois passos pequenos: o que chega na quarta nota e o que chega na oitava.',
        'Faça a escala menor e perceba a mudança de cor. A terceira nota já chega mais baixa logo no começo.',
        'No exercício "Maior ou menor", só a terceira nota muda. Cante a segunda metade pensando nessa nota mais baixa.',
        'Se a escala inteira ficar longa demais para lembrar, cante só a subida algumas vezes e depois junte a descida.'
      ],
      mistakes: [
        'Fazer a oitava curta, parando numa nota abaixo. Correção: imagine a nota de cima como a mesma nota de baixo, mais aguda e mais leve. Pense no começo de Over the Rainbow antes de cantar.',
        'Cantar a escala menor com a terça da maior. Correção: o ouvido tende a voltar para o maior porque ouve maior o tempo todo. Cante devagar e pense "mais baixo" na terceira nota.',
        'Fazer os semitons grandes demais. Correção: entre a terceira e a quarta nota da escala maior, e entre a sétima e a oitava, a voz quase não se mexe. Pense em encostar uma nota na outra.'
      ],
      tips: [
        'Cante a escala menor logo depois da maior, no mesmo tom. A comparação direta treina o ouvido mais rápido do que cada uma separada.',
        'Na oitava, pense no começo de um bocejo: espaço por dentro da boca ajuda a nota de cima a sair leve.',
        'Se a nota mais aguda da escala ficar desconfortável, use o botão −½ ou pare naquele tom. Dor, ardor ou rouquidão são sinal para parar.'
      ],
      listen: [
        'Over the Rainbow — Judy Garland (o salto de oitava subindo nas duas primeiras notas)',
        'Hit the Road Jack — Ray Charles (a linha que desce por notas da escala menor e se repete a música inteira)'
      ],
      ex: [
        { id: 'ouvido-3a', name: 'Oitava', desc: 'Repita um salto de oitava subindo e outro descendo, com a nota de cima leve.', syl: 'nô', mode: 'eco', mel: '1:2 8:2 r:1 8:2 1:2', bpm: 72, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 70 } },
        { id: 'ouvido-3b', name: 'Escala maior em eco', desc: 'Ouça a escala maior inteira, subindo e descendo, e repita sem o piano.', syl: 'lá', mode: 'eco', mel: M.escala, bpm: 88, zone: 'mid', dir: 'up', steps: 4, goal: { m: 'afin', v: 75 } },
        { id: 'ouvido-3c', name: 'Escala menor em eco', desc: 'Ouça a escala menor natural, com a terceira, a sexta e a sétima mais baixas, e repita.', syl: 'lá', mode: 'eco', mel: M.escala, minor: true, bpm: 88, zone: 'mid', dir: 'up', steps: 4, goal: { m: 'afin', v: 75 } },
        { id: 'ouvido-3d', name: 'Maior ou menor', desc: 'Repita cinco notas na versão maior e depois na menor, em que só a terceira nota muda.', syl: 'nô', mode: 'eco', mel: '1 2 3 4 5:2 r:1 1 2 b3 4 5:2', bpm: 84, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 75 } }
      ]
    },
    {
      id: 'ouvido-4',
      name: 'Arpejos e as notas do acorde',
      level: 2,
      goal: 'Cantar arpejos maiores e menores e encontrar com a voz as notas de um acorde que o piano toca.',
      text: [
        'Um acorde é um grupo de notas tocadas juntas. O mais comum, a tríade, tem três notas: a tônica (que dá nome ao acorde), a terça e a quinta. Quando você canta essas notas uma de cada vez, em vez de juntas, isso se chama arpejo. Muitas melodias são feitas de pedaços de arpejo, e saber cantá-los afinado ajuda muito a acertar saltos.',
        'A diferença entre o acorde maior e o menor está, de novo, na terça. No maior, da tônica até a terça há uma terça maior (quatro semitons) e da terça até a quinta há uma terça menor (três semitons). No menor é o contrário: primeiro a terça menor, depois a maior. A quinta é a mesma nos dois. Se você percebe que é a nota do meio que muda, já entendeu o principal.',
        'Cantores precisam encontrar notas dentro de acordes o tempo todo: para começar uma música depois da introdução, para fazer uma segunda voz, para não se perder quando a banda toca. Por isso um exercício desta lição dá só o acorde, sem melodia. Você ouve as três notas juntas e encontra, por conta própria, a tônica, a terça e a quinta. No começo o acorde soa como um bloco único; com prática, o ouvido aprende a separar as notas.',
        'Uma ajuda prática: no acorde que o app toca, a tônica é a nota mais grave e a mais fácil de achar. Encontre essa nota primeiro, cantando baixinho, e depois suba para a terça e a quinta. Se ficar em dúvida sobre a terça, cante por dentro o caminho da escala até ela: dó, ré, mi.'
      ],
      steps: [
        'Ouça o arpejo maior e repita. Perceba o desenho: sobe em saltos até a oitava e desce pelo mesmo caminho.',
        'Faça o arpejo menor e compare. Só a nota do meio muda, mas a cor muda inteira.',
        'Em "Maior e menor seguidos", ouça os dois arpejos lado a lado e repita prestando atenção na terça.',
        'Em "Achar as notas no acorde", o piano toca só o acorde. Cante a tônica baixinho, depois a terça e a quinta, e confira no traço.',
        'Quando os arpejos passarem de 75 de afinação, siga para a próxima lição.'
      ],
      mistakes: [
        'Fazer curto o salto da quinta para a oitava. Correção: esse salto é uma quarta, o mesmo do começo da marcha nupcial. Lembre dela antes de cantar.',
        'Passar pelas notas do arpejo escorregando. Correção: arpejo é feito de saltos. Cada nota é um alvo separado; articule "nô, nô, nô" com clareza.',
        'Procurar a nota mais aguda do acorde em vez da tônica. Correção: procure a mais grave. Se ela ficar baixa demais, cante a mesma nota uma oitava acima, onde for confortável.'
      ],
      tips: [
        'Toque o exercício do acorde algumas vezes sem cantar, só tentando ouvir as três notas separadas. Escutar também é treino.',
        'Quando ouvir música, tente perceber os trechos em que a melodia salta pelas notas do acorde. Eles aparecem o tempo todo.'
      ],
      listen: [
        'Danúbio Azul — Johann Strauss II (o tema principal sobe pelas notas do acorde maior)',
        'Assim Falou Zaratustra — Richard Strauss (a abertura sobe da tônica para a quinta e para a oitava)'
      ],
      ex: [
        { id: 'ouvido-4a', name: 'Arpejo maior', desc: 'Ouça tônica, terça, quinta e oitava, subindo e descendo, e repita.', syl: 'nô', mode: 'eco', mel: M.arpejo8, bpm: 80, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 75 } },
        { id: 'ouvido-4b', name: 'Arpejo menor', desc: 'Repita o mesmo desenho com a terça menor e ouça como a cor muda.', syl: 'nô', mode: 'eco', mel: M.arpejo8, minor: true, bpm: 80, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 75 } },
        { id: 'ouvido-4c', name: 'Maior e menor seguidos', desc: 'Repita um arpejo maior e logo depois o menor, com a terça um pouco mais baixa.', syl: 'lá', mode: 'eco', mel: '1 3 5 3 1:2 r:1 1 b3 5 b3 1:2', bpm: 84, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 75 } },
        { id: 'ouvido-4d', name: 'Achar as notas no acorde', desc: 'O piano toca só o acorde; encontre nele a tônica, a terça e a quinta e cante sem ajuda.', syl: 'nô', mode: 'junto', solo: true, mel: '1:2 3:2 5:2 3:2 1:2', bpm: 70, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 70 } }
      ]
    },
    {
      id: 'ouvido-5',
      name: 'Memória melódica',
      level: 2,
      goal: 'Ouvir uma frase de quatro a oito notas e repeti-la de memória, com as alturas e o ritmo certos.',
      text: [
        'Aprender música de ouvido é guardar frases. Quem canta bem não decora nota por nota: guarda o desenho da frase (onde sobe, onde desce, onde salta) e o ritmo. Essa memória curta se treina como qualquer outra habilidade, e é ela que permite aprender uma música nova depois de ouvir poucas vezes.',
        'Uma técnica que ajuda muito é dividir a frase em pedaços. Uma frase de oito notas são dois pedaços de quatro. Enquanto o piano toca, preste atenção no começo e no fim de cada pedaço, que é onde a memória se apoia. Repare também em padrões: notas que se repetem, um desenho que aparece de novo mais abaixo, um salto que volta para o lugar.',
        'O ritmo faz parte da frase. Uma nota curta e uma nota longa na mesma altura são coisas diferentes, e quem escuta percebe. Algumas frases desta lição têm notas de meio tempo: cante-as curtas e leves, sem atrasar a nota seguinte. Se você acertar as notas e errar um pouco o ritmo, ainda assim é progresso.',
        'Errar na primeira tentativa faz parte. A escada de tons repete a mesma frase em vários tons, e a cada repetição o ouvido grava um pouco mais. Se a frase de oito notas ficar difícil, volte para a de quatro por alguns dias. A memória musical cresce devagar, mas o que ela guarda fica.'
      ],
      steps: [
        'Antes de o piano começar, prepare a atenção. Fechar os olhos ajuda a ouvir.',
        'Na primeira repetição, só ouça. Nas seguintes, cante por dentro junto com o piano antes de cantar em voz alta.',
        'Repita em voz alta e confira no resultado quais notas saíram fora. Normalmente são as do meio da frase.',
        'Na frase de oito notas, pense em dois pedaços de quatro e respire bem antes de começar.',
        'Termine com a frase em menor e repare que ela tem outra cor, mesmo com um desenho parecido.'
      ],
      mistakes: [
        'Cantar o começo certo e inventar o final. Correção: preste atenção especial nas últimas notas enquanto o piano toca. O fim da frase é o que a memória perde primeiro.',
        'Acelerar para não esquecer. Correção: siga o andamento da frase original. A pressa embaralha as notas.',
        'Tentar decorar nota por nota. Correção: guarde o desenho, como "sobe, sobe, desce, salta". Um desenho se lembra mais fácil do que uma lista.'
      ],
      tips: [
        'Desenhe a frase no ar com a mão enquanto ouve. O gesto ajuda a memória.',
        'Fora do app, brinque de repetir pequenos trechos das músicas que você ouve. É o mesmo treino.',
        'Se uma frase não fica de jeito nenhum, cante só as três primeiras notas algumas vezes e acrescente uma nota por vez.'
      ],
      listen: [
        'Day-O (The Banana Boat Song) — Harry Belafonte (o coro repete as frases que o cantor propõe, como no modo eco)',
        'Minnie the Moocher — Cab Calloway (o trecho de pergunta e resposta, em que a banda repete as frases improvisadas)'
      ],
      ex: [
        { id: 'ouvido-5a', name: 'Frase de quatro notas', desc: 'Ouça uma frase curta de quatro notas e repita de memória.', syl: 'lá', mode: 'eco', mel: '1 3 2 5:2', bpm: 80, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 75 } },
        { id: 'ouvido-5b', name: 'Frase de seis notas', desc: 'Repita uma frase de seis notas que desce em pequenos saltos até a casa.', syl: 'lá', mode: 'eco', mel: '5 3 4 2 3 1:2', bpm: 84, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 75 } },
        { id: 'ouvido-5c', name: 'Frase de oito notas com ritmo', desc: 'Repita uma frase de oito notas com notas curtas e longas, respeitando o ritmo.', syl: 'lá', mode: 'eco', mel: '1:0.5 2:0.5 3 5 6:0.5 5:0.5 3 1:3', bpm: 84, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 75 } },
        { id: 'ouvido-5d', name: 'Frase em menor', desc: 'Repita uma frase de oito notas na escala menor, guardando o desenho e a cor.', syl: 'lá', mode: 'eco', mel: '1 3 5 4 3:0.5 2:0.5 3 1:2', minor: true, bpm: 84, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 75 } }
      ]
    },
    {
      id: 'ouvido-6',
      name: 'Graus contra o bordão e solfejo com dó móvel',
      level: 3,
      goal: 'Sentir a função de cada grau da escala contra a tônica e cantar melodias com o nome das notas no dó móvel.',
      text: [
        'Cada nota da escala tem uma função, que o ouvido sente mesmo sem saber o nome. A tônica (o grau 1) é a casa e soa como repouso. A terça e a quinta também soam estáveis. Já a segunda, a quarta e a sétima soam em suspenso, como se pedissem para andar: a segunda quer descer para a tônica, a quarta quer descer para a terça e a sétima quer subir para a oitava. Essa tensão e esse repouso dão direção à melodia.',
        'O bordão deixa essa sensação muito clara. Com a tônica soando sem parar, você canta cada grau por cima e ouve como ele conversa com ela. Quando a nota está afinada, o som fica limpo; quando está um pouco fora, aparece um tremor áspero, o batimento. Treinar contra o bordão afina o ouvido para detalhes que o piano sozinho não mostra.',
        'O solfejo com dó móvel junta tudo isso a um nome. A tônica é sempre "dó", em qualquer tom; a segunda é sempre "ré", a quinta é sempre "sol", e assim por diante. Com o tempo, cada sílaba fica ligada à função da nota: "si" passa a soar como a nota que quer subir para "dó", e "sol" como a nota firme do meio. Isso ajuda a aprender melodias, a ler música e a não se perder ao cantar com outras pessoas.',
        'Nesta lição as frases são mais longas e a meta de afinação é mais alta. Vá com calma e use fone de ouvido, para o microfone não confundir o bordão com a sua voz. Se a voz cansar, faça uma pausa: ouvido treinado também precisa de descanso, e voz cansada desafina.'
      ],
      steps: [
        'Coloque o fone e faça "Tensão e repouso". Segure cada nota de tensão e sinta a vontade de ir para a nota seguinte.',
        'Em "Graus em salto", cante cada nota sobre o bordão e ouça se o som fica limpo ou se aparece tremor.',
        'Cante a escala com o nome das notas, falando as sílabas com clareza e sem perder a afinação.',
        'Termine com a melodia em solfejo. Antes de cantar, imagine os nomes junto com as notas.',
        'Fora do app, tente solfejar o começo de músicas conhecidas descobrindo onde está o "dó".'
      ],
      mistakes: [
        'Corrigir a nota olhando só a tela. Correção: feche os olhos por alguns segundos e escute o batimento. A tela confirma, mas quem afina é o ouvido.',
        'Achar que "dó" é sempre a mesma tecla do piano. Correção: no dó móvel, dó é a tônica do tom em que você está, qualquer que seja. O que importa é a função, e não a tecla.',
        'Deixar a sétima cair em vez de subir. Correção: o "si" quer subir para o "dó". Cante a sétima pensando que ela já está quase chegando à tônica.'
      ],
      tips: [
        'Cante cada exercício uma vez em "lá" e outra com o nome das notas. Trocar a sílaba mostra se a afinação depende do som da vogal.',
        'Com o bordão ligado, cante em volume médio. Voz alta demais encobre o batimento e dificulta ouvir se a nota está limpa.',
        'Na versão original em inglês de Do-Re-Mi, a sétima nota se chama "ti"; em português ela é "si". É a mesma nota, com a mesma função.'
      ],
      listen: [
        'Do-Re-Mi — Julie Andrews (a canção de A Noviça Rebelde que ensina a escala pelo nome das notas)'
      ],
      ex: [
        { id: 'ouvido-6a', name: 'Tensão e repouso', desc: 'Sobre o bordão, repita três notas de tensão e a nota de repouso que vem depois de cada uma.', syl: 'u', mode: 'eco', drone: true, mel: '2:2 1:2 r:1 4:2 3:2 r:1 7,:2 1:2', bpm: 66, zone: 'mid', dir: 'up', steps: 4, goal: { m: 'afin', v: 80 } },
        { id: 'ouvido-6b', name: 'Graus em salto', desc: 'Sobre o bordão, repita uma linha que salta por todos os graus da escala até voltar à tônica.', syl: 'nô', mode: 'eco', drone: true, mel: '1:2 5:2 3:2 6:2 4:2 2:2 7,:2 1:2', bpm: 66, zone: 'mid', dir: 'up', steps: 4, goal: { m: 'afin', v: 80 } },
        { id: 'ouvido-6c', name: 'Escala em solfejo', desc: 'Repita a escala maior inteira cantando o nome das notas, com dó na tônica.', syl: 'dó ré mi', mode: 'eco', mel: M.escala, lyr: SOLFA.escala, bpm: 88, zone: 'mid', dir: 'up', steps: 4, goal: { m: 'afin', v: 80 } },
        { id: 'ouvido-6d', name: 'Melodia em solfejo', desc: 'Repita uma melodia de oito notas cantando o nome de cada nota no dó móvel.', syl: 'dó ré mi', mode: 'eco', mel: '1 3 5 3 4 2 7, 1:2', lyr: 'dó mi sol mi fá ré si dó', bpm: 84, zone: 'mid', dir: 'up', steps: 4, goal: { m: 'afin', v: 85 } }
      ]
    }
  ]
};
