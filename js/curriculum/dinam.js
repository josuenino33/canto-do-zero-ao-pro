import { M, rep } from './helpers.js';

// "Frère Jacques", canção tradicional francesa (domínio público). Cada frase aparece duas vezes.
const FRERE = '1 2 3 1 1 2 3 1 3 4 5:2 3 4 5:2 5:0.5 6:0.5 5:0.5 4:0.5 3 1 5:0.5 6:0.5 5:0.5 4:0.5 3 1 1 5, 1:2 1 5, 1:2';

export default {
  id: 'dinam',
  name: 'Volume e dinâmica sem gritar',
  desc: 'Começar a nota sem sopro e sem golpe, cantar baixo e afinado, crescer e diminuir numa nota, projetar a voz sem empurrar e usar o volume para dar forma à frase.',
  lessons: [
    {
      id: 'dinam-1',
      name: 'O começo da nota',
      level: 1,
      goal: 'Reconhecer os três jeitos de começar uma nota (soprado, duro e equilibrado) e treinar o começo equilibrado.',
      text: [
        'O começo de cada nota se chama ataque, e ele decide muito do que vem depois. Existem três jeitos de começar. No ataque aspirado, o ar sai antes do som, como em "ha", e a nota nasce soprada e sem foco. No ataque duro, as pregas vocais se fecham com força antes do som e se abrem com um estalo na garganta, chamado golpe de glote. No ataque equilibrado, ar e som começam juntos, e a nota já nasce limpa.',
        'O golpe de glote aparece na fala de vez em quando e não é um problema como recurso ocasional, para dar ênfase a uma palavra. O problema é quando ele vira o jeito padrão de começar todas as notas: as pregas vocais batem uma contra a outra com força centenas de vezes por dia, e isso irrita e cansa a voz. Quem sente que grita muito costuma começar as notas com golpe, principalmente as que começam com vogal.',
        'O ataque aspirado é o oposto: gentil com a voz, mas gasta ar e deixa a nota sem firmeza. Por isso ele é uma boa ferramenta para quem tem o hábito do golpe, mas não é o destino. O caminho desta lição é ir do aspirado ao equilibrado: começar com "ha", diminuir o "h" até ele quase sumir e ficar com uma vogal que começa limpa, sem sopro e sem estalo.',
        'Treine em volume médio e numa região confortável da voz. O ataque equilibrado é mais fácil de sentir do que de explicar: a nota parece simplesmente acender, como uma lâmpada, sem barulho antes. Se você ouvir o estalo, faça a próxima com um pouco de "h"; se ouvir o sopro, comece a próxima nota com um pouco mais de decisão, sem apertar.'
      ],
      steps: [
        'Fale "a" de três jeitos: soprado ("ha"), com golpe (como um "a!" de susto) e equilibrado. Repare na diferença de sensação na garganta.',
        'No primeiro exercício, cante cada nota com "ha", ouvindo o ar sair um instante antes do som.',
        'No segundo, diminua o "h" a cada nota até ficar só a vogal, limpa. Esse é o ataque equilibrado.',
        'Passe para as cinco vogais. Comece cada uma limpa, sem estalo, como se ela já estivesse lá.',
        'Se algum começo sair com estalo, volte ao "ha" naquela vogal e tente de novo.'
      ],
      mistakes: [
        'Começar as vogais com um estalo na garganta. Correção: pense num "h" quase invisível antes da vogal. O estalo some sem a nota perder firmeza.',
        'Soprar tanto que a nota nunca firma. Correção: o "h" é curto. Depois dele, a nota precisa ficar limpa e sem chiado.',
        'Trancar a garganta entre a respiração e a nota. Correção: inspire e comece a nota no mesmo movimento, sem uma pausa de trava no meio.'
      ],
      tips: [
        'Um suspiro de alívio começa naturalmente equilibrado. Comece a nota como se fosse suspirar.',
        'Coloque a mão em frente à boca: no aspirado você sente bastante ar; no equilibrado, quase nada.',
        'Palavras que começam com vogal ("amor", "eu", "olha") são as que mais puxam o golpe. Treine-as faladas com início suave.'
      ],
      listen: [
        'Chega de Saudade — João Gilberto (notas que começam limpas, sem sopro antes e sem golpe)'
      ],
      ex: [
        { id: 'dinam-1a', name: 'Começo com "ha"', desc: 'Cante cada nota começando com "ha", ouvindo o ar sair um instante antes do som.', syl: 'ha', mode: 'junto', mel: '1:2 r:1 1:2 r:1 1:2', bpm: 72, zone: 'low', dir: 'up', steps: 5, goal: { m: 'afin', v: 65 } },
        { id: 'dinam-1b', name: 'Do "ha" ao "a"', desc: 'Cinco notas: as três primeiras em "ha", com o "h" cada vez menor, e as duas últimas em "a" limpo, sem sopro e sem estalo.', syl: 'ha, depois a', mode: 'junto', mel: '1:2 r:1 1:2 r:1 1:2 r:1 1:2 r:1 1:2', lyr: 'ha ha ha a a', bpm: 72, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 70 } },
        { id: 'dinam-1c', name: 'Cinco vogais com começo limpo', desc: 'Uma nota para cada vogal, cada uma começando limpa, como uma lâmpada que acende.', syl: 'a é i ó u', mode: 'junto', mel: '1:2 r:1 1:2 r:1 1:2 r:1 1:2 r:1 1:2', lyr: 'a é i ó u', bpm: 72, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 70 } }
      ]
    },
    {
      id: 'dinam-2',
      name: 'Cantar baixo e afinado',
      level: 1,
      goal: 'Cantar em volume baixo (piano) com a nota afinada e o som firme, o melhor treino de controle da voz.',
      text: [
        'Parece estranho, mas cantar baixo é mais difícil do que cantar forte. No forte, a força do ar disfarça a falta de controle. No baixo, chamado piano na música, você precisa manter a nota firme e afinada com pouco ar, e qualquer descuido aparece: a voz falha, fica soprada ou cai. Por isso o piano é o melhor treino de controle que existe, e cantores experientes o usam todos os dias.',
        'Baixo não é sussurro. A nota piano tem som de verdade, com as pregas vocais vibrando, só que com menos ar e menos pressão. Se você colocar a mão na frente da boca, deve sentir pouco ar saindo. Se o som virar chiado, você está soprando: pense numa nota menor, mas inteira, como uma lâmpada com menos luz, e não uma lâmpada piscando.',
        'A tendência no piano é a nota cair, porque, com menos energia, o corpo relaxa demais e a afinação escorrega para baixo. O microfone vai mostrar isso. A correção não é aumentar o volume, é manter a atenção e a postura de quem canta forte, só que para alguém perto. Pense na nota "por cima", como se ela estivesse um fio acima de onde você imagina.',
        'Para quem sente que grita muito, este treino é especialmente valioso: ele ensina que a voz pode existir sem empurrar. Ele também é seguro e pode ser feito todos os dias. Mesmo assim, se a garganta arranhar ou você sentir vontade de pigarrear o tempo todo, pare, beba água e descanse.'
      ],
      steps: [
        'Cante a nota longa em "u" bem baixinho, mas com som, e veja no traço se ela fica reta e no lugar.',
        'Passe para a escala de cinco notas em "nu", em volume baixo do começo ao fim. A nota de cima não pode crescer.',
        'Na melodia, cante baixinho como quem canta para uma criança dormir, sem perder a afinação.',
        'Compare a nota de afinação do microfone com a que você tira cantando em volume médio. A meta é chegar perto.'
      ],
      mistakes: [
        'Sussurrar em vez de cantar baixo. Correção: a nota precisa ter som. Diminua o ar, não a vibração.',
        'Deixar a afinação cair. Correção: mantenha a postura e a atenção de quem canta forte e pense a nota um pouco "acima".',
        'Crescer sem querer na nota mais alta. Correção: a nota alta é a mais delicada da frase. Pense em diminuir enquanto sobe.'
      ],
      tips: [
        'Imagine que tem alguém dormindo no quarto ao lado e você quer que só a pessoa à sua frente escute.',
        'Use fone de ouvido: em volume baixo, o microfone tem mais dificuldade de separar a sua voz do piano.',
        'Nos dias de voz cansada, o piano é um bom aquecimento. Se a voz falhar o tempo todo, porém, ela está pedindo descanso.'
      ],
      listen: [
        'Atrás da Porta — Elis Regina (começa baixinho, quase falado e afinado, e cresce aos poucos)'
      ],
      ex: [
        { id: 'dinam-2a', name: 'Nota longa em piano', desc: 'Segure uma nota em "u" em volume baixo, com som de verdade e a linha reta no traço.', syl: 'u', mode: 'junto', mel: '1:4', bpm: 60, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 70 } },
        { id: 'dinam-2b', name: 'Cinco notas em piano', desc: 'A escala de cinco notas em "nu", baixinho do começo ao fim, sem crescer na nota de cima.', syl: 'nu', mode: 'junto', mel: M.cinco, bpm: 84, zone: 'mid', dir: 'up', steps: 6, goal: { m: 'afin', v: 70 } },
        { id: 'dinam-2c', name: 'Brilha, brilha em piano', desc: 'A melodia de "Brilha, brilha, estrelinha" em "lu", baixinho como uma canção de ninar.', syl: 'lu', mode: 'junto', mel: M.brilha, bpm: 84, zone: 'mid', dir: 'stay', steps: 3, goal: { m: 'afin', v: 75 } }
      ]
    },
    {
      id: 'dinam-3',
      name: 'Crescer e diminuir numa nota',
      level: 2,
      goal: 'Fazer crescendo e decrescendo numa nota só (a messa di voce) sem mudar a afinação e sem apertar.',
      text: [
        'Messa di voce é um nome italiano para um exercício antigo e muito usado: cantar uma nota começando baixo, crescer até um volume médio-forte e voltar ao baixo, tudo numa nota só e numa respiração só. Ele treina ao mesmo tempo o ar, a afinação e o equilíbrio da voz. Cantores de ópera e de música popular usam esse exercício há séculos.',
        'A dificuldade é que volume e altura andam juntos sem você perceber. Ao crescer, a voz tende a subir de afinação e a apertar; ao diminuir, tende a cair, ficar soprada ou falhar no meio do caminho. Fazer a messa di voce bem é manter a nota no mesmo lugar enquanto só o volume muda. Acompanhe o traço do microfone: ele deve ficar reto o tempo todo.',
        'O crescendo vem do ar e do corpo, não da garganta. Pense em abrir mais espaço e deixar mais ar passar, como quem aumenta o fogo da panela, e não em apertar para empurrar o som. O decrescendo é a parte mais difícil: é preciso diminuir o ar sem deixar a voz desligar. Por isso você vai treinar os dois separados antes de juntar.',
        'O app mede a afinação e o tempo, não o volume, então a qualidade do crescendo é você quem julga. Grave e ouça: o volume tem que mudar de forma suave, sem degraus, e o som no ponto mais forte tem que continuar redondo, não estridente. O ponto mais forte é só médio-forte; este exercício nunca pede volume máximo.'
      ],
      steps: [
        'Faça primeiro o decrescendo: comece em volume médio e diminua até quase sumir, sem deixar a nota cair.',
        'Depois o crescendo: comece baixinho e cresça até médio-forte, sem deixar a nota subir.',
        'Junte os dois na messa di voce: baixo, médio-forte, baixo, numa respiração só.',
        'Divida a nota em duas metades iguais: metade crescendo, metade diminuindo. O ponto mais forte fica no meio.',
        'Grave e ouça. Se o volume mudou aos saltos, faça mais devagar.'
      ],
      mistakes: [
        'Crescer apertando a garganta. Correção: cresça com mais ar e mais espaço na boca. Se o pescoço endurecer, o crescendo está grande demais.',
        'Gastar todo o ar no crescendo e não ter para o decrescendo. Correção: cresça pouco no começo do treino; o máximo é médio-forte.',
        'Deixar a nota cair no final. Correção: o fim baixinho precisa de mais atenção, não de menos. Pense a nota "por cima" enquanto diminui.'
      ],
      tips: [
        'Use as mãos: elas se afastam enquanto você cresce e se aproximam enquanto diminui. Isso ajuda a mudança a ficar suave.',
        'Comece em "ô" ou "u", que seguram melhor a afinação, e só depois tente "a".',
        'Se a voz falhar no fim do decrescendo, pare um pouco antes. Com o treino esse limite vai ficando mais baixo.'
      ],
      listen: [
        'Caro Mio Ben — Cecilia Bartoli (notas longas que crescem e diminuem sem sair do lugar)'
      ],
      ex: [
        { id: 'dinam-3a', name: 'Decrescendo', desc: 'Comece a nota em "ô" em volume médio e diminua aos poucos até quase sumir, sem deixar a nota cair.', syl: 'ô', mode: 'junto', mel: '1:6', bpm: 60, zone: 'mid', dir: 'up', steps: 4, goal: { m: 'afin', v: 70 } },
        { id: 'dinam-3b', name: 'Crescendo', desc: 'Comece baixinho em "ô" e cresça até médio-forte, sem deixar a nota subir nem a garganta apertar.', syl: 'ô', mode: 'junto', mel: '1:6', bpm: 60, zone: 'mid', dir: 'up', steps: 4, goal: { m: 'afin', v: 70 } },
        { id: 'dinam-3c', name: 'Messa di voce', desc: 'Numa respiração só, cresça do baixo ao médio-forte e volte ao baixo em "a", com a nota parada no lugar.', syl: 'a', mode: 'junto', mel: '1:8', bpm: 56, zone: 'mid', dir: 'up', steps: 4, goal: { m: 'afin', v: 75 } },
        { id: 'dinam-3d', name: 'Messa di voce longa', desc: 'Uma messa di voce mais longa em "u": metade do tempo crescendo, metade diminuindo, sem perder a nota no fim.', syl: 'u', mode: 'junto', mel: '1:10', bpm: 50, zone: 'mid', dir: 'stay', steps: 3, goal: { m: 'sec', v: 10 } }
      ]
    },
    {
      id: 'dinam-4',
      name: 'Projetar sem empurrar',
      level: 2,
      goal: 'Ganhar volume usando a voz de chamar alguém de longe, que é forte e saudável, e levar essa sensação da fala para o canto.',
      text: [
        'Quando você chama alguém do outro lado da rua, "ô, Zé!", a voz sai alta e clara sem que você pense em técnica. Repare: você não grita com o pescoço, você projeta. O corpo se prepara, a boca abre, o som vai para a frente e para longe, e a garganta continua aberta. Essa voz de chamar é um dos melhores modelos de volume saudável, porque o corpo já sabe fazer.',
        'A diferença entre chamar e gritar está no aperto. No grito, o pescoço endurece, as veias saltam, o queixo vai para a frente e o som fica rasgado e áspero. Na chamada, o som é brilhante e falado, o esforço fica no corpo (barriga e costas trabalhando) e a garganta não trava. Uma boa pista é a intenção: você quer que o som chegue numa pessoa lá longe, não quer fazer barulho.',
        'Volume no canto vem mais de ressonância do que de força. Uma voz com brilho, aquele som com "ponta" que aparece na fala animada, atravessa uma sala com pouca pressão de ar. Por isso a chamada usa vogais como "ô" e "ei", com a boca moderadamente aberta, e não um "a" escancarado. No módulo de agudos, essa mesma sensação será a base do agudo forte, chamado belting.',
        'Neste treino o volume é médio-forte, nunca o máximo. Faça poucas repetições, descanse entre elas e fique numa região confortável, perto da sua fala. Se a voz arranhar, ficar rouca ou você sentir ardor, pare: era grito, não chamada. Volte para o volume de conversa e tente mais leve na próxima vez.'
      ],
      steps: [
        'Fale "ô, Zé!" em voz normal, como se a pessoa estivesse ao seu lado. Depois chame alguém imaginário do outro lado da sala, e depois do outro lado da rua.',
        'Ao chamar de longe, mantenha o pescoço solto e o queixo nivelado. Sinta a barriga trabalhar, não a garganta.',
        'No exercício em eco, cante o "ô, Zé!" nas duas notas, com a mesma sensação da fala.',
        'Suba de tom aos poucos sem aumentar o volume a cada tom. O volume é o mesmo; só a nota muda.',
        'Termine falando uma frase qualquer em voz normal e repare se a voz continua limpa.'
      ],
      mistakes: [
        'Chamar com o pescoço. Correção: se as veias saltam ou o queixo vai para a frente, diminua o volume e pense em mandar o som longe, não em fazer força.',
        'Abrir a boca num "á" escancarado. Correção: use "ô" e "ei", com a boca moderadamente aberta e o som na frente.',
        'Aumentar o volume a cada tom que sobe. Correção: o volume fica igual ou diminui um pouco ao subir. Mais nota com mais volume é a receita do grito.'
      ],
      tips: [
        'Imagine que a pessoa está do outro lado da rua e você quer que ela se vire, não que ela se assuste.',
        'Quando puder, faça este treino ao ar livre ou numa sala grande: a sensação de mandar o som longe fica mais natural.',
        'Cantores de samba e de forró fazem isso há décadas: voz projetada, falada e brilhante, sem grito.'
      ],
      listen: [
        'Asa Branca — Luiz Gonzaga (voz aberta e projetada, com cara de fala e sem aperto)',
        'Canta, Canta, Minha Gente — Martinho da Vila (voz de roda de samba: alta, clara e sem grito)'
      ],
      ex: [
        {
          id: 'dinam-4a', name: 'Chamar alguém de longe', desc: 'Fale "ô, Zé!" chamando alguém cada vez mais longe: ao seu lado, do outro lado da sala e do outro lado da rua.',
          syl: 'ô, Zé! (falado)', mode: 'livre',
          breath: [['Inspire', 3], ['"Ô, Zé!" para alguém ao seu lado', 2], ['Inspire', 3], ['"Ô, Zé!" para o outro lado da sala', 2], ['Inspire', 3], ['"Ô, Zé!" para o outro lado da rua', 3], ['Descanse e solte o pescoço', 5]],
          cycles: 3, goal: { m: 'rep', v: 5 }
        },
        { id: 'dinam-4b', name: '"Ô, Zé!" na nota', desc: 'Ouça e repita o "ô, Zé!" nas duas notas, com a mesma sensação da chamada falada e volume médio-forte.', syl: 'ô, Zé!', mode: 'eco', mel: '5:2 3:2', lyr: 'ô Zé', bpm: 76, zone: 'low', dir: 'up', steps: 6, goal: { m: 'afin', v: 65 } },
        { id: 'dinam-4c', name: 'Chamada que sobe', desc: 'A mesma chamada junto com o piano, subindo de tom, com o volume igual em todos os tons.', syl: 'ô, Zé!', mode: 'junto', mel: '5:2 3:2', lyr: 'ô Zé', bpm: 76, zone: 'mid', dir: 'up', steps: 6, goal: { m: 'afin', v: 70 } },
        { id: 'dinam-4d', name: 'Escala projetada', desc: 'Escala de cinco notas em "nê", no volume médio-forte da chamada, igual do começo ao fim.', syl: 'nê', mode: 'junto', mel: M.cinco, bpm: 88, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 70 } }
      ]
    },
    {
      id: 'dinam-5',
      name: 'Afinação em qualquer volume',
      level: 2,
      goal: 'Manter a nota no lugar ao mudar de volume, sabendo que o forte tende a subir e o piano tende a cair.',
      text: [
        'Volume e afinação estão ligados. Quando você canta mais forte, a pressão de ar aumenta e a nota tende a subir um pouco. Quando canta mais baixo, a energia cai e a nota tende a escorregar para baixo. Quase todo cantor iniciante tem as duas tendências, e quem grita costuma desafinar justamente para cima nos trechos fortes.',
        'A solução não é evitar o forte nem o piano, é treinar o ouvido para conferir a nota enquanto o volume muda. Nos exercícios desta lição você canta a mesma coisa em volumes diferentes e compara no traço do microfone. O desenho tem que ser igual; só a intensidade muda. Se a parte forte aparece acima da barra, você está empurrando; se a parte baixa aparece abaixo, você está largando a nota.',
        'Duas imagens ajudam. No forte, pense em "mais largo", não em "mais alto": mais espaço na boca e mais corpo, sem subir a pressão na garganta. No piano, pense em "mais perto", não em "mais fraco": a nota continua com a mesma energia, só que dirigida a alguém próximo. Com o tempo, o ajuste fica automático.',
        'O forte desta lição é médio-forte, nunca o máximo. Ninguém precisa do volume máximo para treinar afinação, e a voz agradece. Se a garganta arder ou a voz ficar rouca depois do treino, diminua o forte nos próximos dias e descanse.'
      ],
      steps: [
        'Cante a nota em três volumes, baixo, médio e médio-forte, com uma pausa entre eles. Confira se o traço fica na mesma altura nos três.',
        'Na escala dupla, cante a primeira vez em piano e a segunda em médio-forte. As duas têm que cair no mesmo lugar.',
        'No arpejo sem piano, cante a primeira vez em médio-forte e a segunda em piano, só com o acorde de referência.',
        'Use o resultado do microfone para descobrir a sua tendência e corrija só ela na próxima série.'
      ],
      mistakes: [
        'Subir a nota no forte. Correção: pense "mais largo, não mais alto". Abra espaço em vez de aumentar a pressão.',
        'Deixar a nota cair no piano. Correção: pense "mais perto, não mais fraco", com a mesma postura do forte.',
        'Mudar o volume aos trancos. Correção: entre um volume e outro, respire e prepare. Cada volume é uma decisão.'
      ],
      tips: [
        'Grave as duas versões da escala e ouça uma seguida da outra. Na gravação, a diferença de afinação fica mais clara.',
        'Se uma das tendências for muito forte, treine só aquele volume por alguns dias antes de voltar a alternar.'
      ],
      listen: [
        'Someone Like You — Adele (versos baixos e refrão forte, com a afinação firme nos dois)'
      ],
      ex: [
        { id: 'dinam-5a', name: 'Uma nota, três volumes', desc: 'Segure a mesma nota em "a" três vezes, baixo, médio e médio-forte, sempre no mesmo lugar.', syl: 'a', mode: 'junto', mel: '1:4 r:1 1:4 r:1 1:4', bpm: 66, zone: 'mid', dir: 'up', steps: 4, goal: { m: 'afin', v: 75 } },
        { id: 'dinam-5b', name: 'Escala em piano e em forte', desc: 'A escala de cinco notas duas vezes em "nô": a primeira em piano, a segunda em médio-forte, com o mesmo desenho no traço.', syl: 'nô', mode: 'junto', mel: rep(M.cinco, 2, 1), bpm: 88, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 75 } },
        { id: 'dinam-5c', name: 'Arpejo em dois volumes sem piano', desc: 'O arpejo duas vezes em "lá", primeiro em médio-forte e depois em piano, só com o acorde de referência.', syl: 'lá', mode: 'junto', solo: true, mel: rep(M.arpejo, 2, 1), bpm: 84, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 75 } }
      ]
    },
    {
      id: 'dinam-6',
      name: 'Dinâmica dentro da frase',
      level: 3,
      goal: 'Decidir onde a frase cresce e onde ela segura, e cantar melodias com forma, sem empurrar as notas altas.',
      text: [
        'Uma frase cantada no mesmo volume do começo ao fim soa reta, como uma fala sem entonação. Dinâmica é o que dá forma a ela: algumas notas crescem, outras recuam, e quem ouve entende para onde a música vai. A boa notícia é que você já faz isso na fala, porque ninguém fala uma frase inteira no mesmo volume.',
        'Algumas regras práticas funcionam na maioria das músicas. A frase costuma crescer em direção à sua palavra ou nota mais importante e recuar depois dela. Notas longas podem crescer ou diminuir por dentro, como na messa di voce. O fim da frase quase sempre recua, mas sem cair de afinação. E as repetições pedem contraste: se uma frase volta igual, cantá-la mais baixo da segunda vez soa como um eco.',
        'Cuidado com a armadilha da nota alta. A tendência é cantar a nota mais aguda da frase como a mais forte, e muitas vezes não é ela a mais importante. Lembre da regra dos agudos: ao subir, menos peso. Você pode dar intensidade à nota alta com brilho e intenção, sem volume a mais, e em muitas músicas a nota alta cantada leve emociona mais do que gritada.',
        'Para treinar, decida antes de cantar o que cada frase vai fazer, como um mapa: onde cresce, onde segura, onde recua. Depois cante e grave. Na gravação, confira se o que você planejou aconteceu de verdade e se a afinação se manteve nas partes fortes e nas fracas. Com o tempo, essas decisões ficam naturais e passam a fazer parte do seu jeito de cantar.'
      ],
      steps: [
        'Na escala de oitava, cresça de forma suave até a nota de cima e recue na descida, sem empurrar a oitava.',
        'Em "Frère Jacques", cante cada frase em médio-forte e a repetição dela em piano, como um eco.',
        'Na "Ode à Alegria", faça um mapa antes: cresça na primeira metade, segure no meio e recue no fim.',
        'Grave as melodias e confira se a dinâmica planejada aparece e se a afinação ficou firme.',
        'Leve o mesmo mapa para uma música de que você gosta: marque na letra onde cresce e onde recua.'
      ],
      mistakes: [
        'Crescer sempre na nota mais alta. Correção: decida qual é a nota importante da frase. A nota alta pode ser leve.',
        'Fazer a dinâmica só na cabeça. Correção: grave. O que parece muito diferente por dentro costuma soar quase igual por fora; exagere um pouco.',
        'Deixar o fim da frase cair de afinação ao recuar. Correção: recuar é diminuir o volume, não a energia. A última nota merece atenção.'
      ],
      tips: [
        'Pense na frase como uma onda: ela sobe até um ponto e desce. Cada frase tem um ponto principal só.',
        'Ouça uma música de que você gosta prestando atenção só no volume, como se fosse a única coisa que existisse. Os bons cantores mudam de volume o tempo todo.'
      ],
      listen: [
        'Bridge over Troubled Water — Simon & Garfunkel (a música cresce aos poucos até o final, que é o ponto mais forte)',
        'Hallelujah — Jeff Buckley (contraste entre trechos quase sussurrados e trechos mais cheios)'
      ],
      ex: [
        { id: 'dinam-6a', name: 'Escala de oitava com forma', desc: 'A escala de uma oitava em "lá", crescendo suave até o topo sem empurrar e recuando na descida.', syl: 'lá', mode: 'junto', mel: M.escala, bpm: 88, zone: 'mid', dir: 'up', steps: 4, goal: { m: 'afin', v: 80 } },
        { id: 'dinam-6b', name: 'Frère Jacques com eco', desc: 'A canção tradicional francesa em "lá": cada frase em médio-forte e a repetição dela em piano, como um eco.', syl: 'lá', mode: 'junto', mel: FRERE, bpm: 96, zone: 'mid', dir: 'stay', steps: 3, goal: { m: 'afin', v: 80 } },
        { id: 'dinam-6c', name: 'Ode à Alegria com mapa', desc: 'O tema de Beethoven só com o acorde de referência: cresça na primeira metade e recue no fim sem deixar a nota cair.', syl: 'lá', mode: 'junto', solo: true, mel: M.ode, bpm: 96, zone: 'mid', dir: 'stay', steps: 3, goal: { m: 'afin', v: 85 } }
      ]
    }
  ]
};
