import { M } from './helpers.js';

export default {
  id: 'harm',
  name: 'Harmonia: segunda voz e backing vocal',
  desc: 'Cantar uma voz diferente da melodia: graus contra o bordão, terças acima e abaixo, sextas, segunda voz em melodias conhecidas e vozes de apoio sustentadas.',
  lessons: [
    {
      id: 'harm-1',
      name: 'Graus contra o bordão',
      level: 2,
      goal: 'Sentir, contra uma nota fixa, quais intervalos soam estáveis e quais soam tensos, e ouvir o batimento quando a nota sai do lugar.',
      text: [
        'Cantar harmonia é cantar uma nota diferente da que está soando ao lado, sem que a sua voz seja puxada para ela. O primeiro passo é ouvir como duas notas soam juntas. Algumas combinações soam estáveis e fundidas, como a oitava e a quinta. Outras soam doces, como a terça e a sexta. E outras soam ásperas, como a segunda, que parece pedir para mudar. Os nomes técnicos são consonância (estável) e dissonância (tensa), e as duas fazem parte da música.',
        'O bordão é uma nota que fica tocando sem parar: a tônica. Sobre ele, você canta outras notas e ouve como cada uma combina. Quando a sua nota está afinada num intervalo consonante, o som fica liso. Quando está um pouco fora, aparece o batimento, uma pulsação no som, como um "uá-uá-uá", que fica mais rápida quanto mais longe você estiver. Afinar é fazer o batimento diminuir até sumir.',
        'Esse ouvido para o batimento é o que separa uma segunda voz afinada de uma que briga com a melodia. Ao fazer harmonia, você não tem uma nota igual à sua para seguir; precisa confiar no encaixe. Treinar contra o bordão ensina exatamente esse encaixe, uma nota de cada vez e sem pressa.',
        'Use fone de ouvido nesta lição e nas próximas. Com o piano saindo pelo alto-falante, o microfone pode ouvir o piano em vez de você. Cante em volume médio: voz alta demais encobre o bordão, e aí você deixa de ouvir o batimento.'
      ],
      steps: [
        'Coloque o fone. Em "Tônica e quinta", ouça o piano tocar a sua parte sobre o bordão e depois cante, segurando cada nota até ela ficar lisa.',
        'Em "Terça e sexta", perceba a doçura desses intervalos. Eles são a base da segunda voz na música popular.',
        'Em "A segunda e a volta", sinta o choque da segunda contra o bordão e o alívio ao voltar para a tônica.',
        'Em "Até o batimento sumir", deslize devagar até a quinta e pare no ponto em que a pulsação desaparece.',
        'Se ficar difícil ouvir o batimento, diminua o volume da voz até ouvir o bordão com clareza.'
      ],
      mistakes: [
        'Deixar a voz escorregar para a nota do bordão. Correção: o bordão puxa. Pense na sua nota como um alvo próprio e segure firme, ouvindo os dois sons ao mesmo tempo.',
        'Cantar alto para não se perder. Correção: volume alto encobre o bordão e esconde o batimento. Volume médio deixa você ouvir os dois sons.',
        'Achar que a segunda está errada. Correção: ela é dissonante de propósito. A meta é cantá-la afinada e sentir a tensão, e não fugir dela.'
      ],
      tips: [
        'Feche os olhos durante as notas longas. Sem a tela, o ouvido presta mais atenção no batimento.',
        'Depois do exercício, cante qualquer nota sobre o bordão e tente dizer se ela é estável ou tensa. É um ótimo jogo de ouvido.'
      ],
      listen: [
        'Amazing Grace — Royal Scots Dragoon Guards (as gaitas de fole tocam a melodia sobre um bordão contínuo)'
      ],
      ex: [
        { id: 'harm-1a', name: 'Tônica e quinta', desc: 'Sobre o bordão, segure a tônica, a quinta e a tônica de novo até cada nota ficar lisa.', syl: 'u', mode: 'eco', drone: true, mel: '1:4 5:4 1:4', bpm: 60, zone: 'mid', dir: 'up', steps: 4, goal: { m: 'afin', v: 75 } },
        { id: 'harm-1b', name: 'Terça e sexta', desc: 'Sobre o bordão, segure a terça e depois a sexta, sentindo a doçura de cada uma.', syl: 'a', mode: 'eco', drone: true, mel: '1:2 3:4 r:1 5:2 6:4 5:2', bpm: 60, zone: 'mid', dir: 'up', steps: 4, goal: { m: 'afin', v: 75 } },
        { id: 'harm-1c', name: 'A segunda e a volta', desc: 'Sobre o bordão, segure a segunda com a tensão que ela tem e volte para a tônica.', syl: 'u', mode: 'eco', drone: true, mel: '1:2 2:4 1:4', bpm: 60, zone: 'mid', dir: 'up', steps: 4, goal: { m: 'afin', v: 75 } },
        { id: 'harm-1d', name: 'Até o batimento sumir', desc: 'Deslize devagar de um pouco abaixo até a quinta e pare quando a pulsação sumir.', syl: 'u', mode: 'eco', drone: true, mel: '4~5:3 5:3', bpm: 60, zone: 'mid', dir: 'up', steps: 4, goal: { m: 'afin', v: 75 } }
      ]
    },
    {
      id: 'harm-2',
      name: 'Terças acima da melodia',
      level: 2,
      goal: 'Cantar uma voz uma terça acima de uma melodia simples, mantendo a sua linha enquanto o piano toca a outra.',
      text: [
        'A terça é o intervalo mais usado em segunda voz. Quando duas pessoas cantam a mesma melodia separadas por terças, o som fica cheio e doce, e é esse o som das duplas caipiras, dos corais de igreja e de muitos refrões de música pop. Nesta lição você canta a voz de cima: a sua linha anda junto com a melodia, sempre uma terça acima.',
        'Na escala, terça acima quer dizer dois graus acima. Se a melodia está no 1, você está no 3; se ela vai para o 2, você vai para o 4; se ela vai para o 5, você vai para o 7. Repare que nem todas as terças têm o mesmo tamanho: algumas são maiores e outras menores, conforme a posição na escala. São as terças diatônicas, e é por seguirem a escala que a segunda voz soa como parte da mesma música.',
        'O grande desafio da harmonia é não deixar a melodia puxar a sua voz. O ouvido está acostumado a seguir a linha principal, e no começo é comum a voz escorregar para ela sem você perceber. Por isso os primeiros exercícios são em eco: o piano toca primeiro a sua voz, você guarda a linha, e depois canta enquanto ele toca a melodia.',
        'Comece pelas terças em melodias curtas e só depois passe para as de cinco notas e para as que têm saltos. Se em algum ponto você se perder, pare de cantar, ouça e volte na repetição seguinte. Segunda voz se constrói como um quebra-cabeça: primeiro as peças, depois a imagem inteira.'
      ],
      steps: [
        'Coloque o fone. No primeiro exercício, ouça a sua linha tocada sozinha, guarde o desenho e cante enquanto o piano toca a melodia.',
        'Na linha de cinco notas, preste atenção na nota mais alta da sua voz: ela fica uma terça acima da nota mais alta da melodia.',
        'Em "Terça acima, junto com a melodia", o piano toca só a melodia desde o começo. Se você se perder, recomece na repetição seguinte.',
        'Em "Terças com saltos", a melodia pula e a sua voz pula junto, sempre na mesma distância de graus.',
        'Confira no resultado as notas que saíram fora. Em harmonia, o erro mais comum é cair para a nota da melodia.'
      ],
      mistakes: [
        'Cair para a melodia. Correção: cante a sua linha sem acompanhamento algumas vezes antes, até ela ficar familiar. Uma linha conhecida resiste melhor ao puxão.',
        'Fazer todas as terças do mesmo tamanho. Correção: siga os graus da escala, e não uma distância fixa. O ouvido percebe quando uma terça sai da escala.',
        'Cantar mais alto que a melodia para não se perder. Correção: a segunda voz soa melhor um pouco abaixo do volume da principal. Volume igual ou menor, sempre ouvindo as duas.'
      ],
      tips: [
        'Cante a sua linha com o nome das notas (mi, fá, sol, fá, mi) fora do treino. Saber os nomes ajuda a não se perder.',
        'Ouça duplas que cantam em terças e tente cantar a voz de cima junto com a gravação.'
      ],
      listen: [
        'All I Have to Do Is Dream — The Everly Brothers (duas vozes juntas o tempo todo, em harmonia fechada)',
        'Evidências — Chitãozinho & Xororó (o refrão, com as duas vozes cantando em intervalos paralelos)'
      ],
      ex: [
        { id: 'harm-2a', name: 'Terça acima em três notas', desc: 'Ouça a sua linha e depois cante-a uma terça acima da melodia que o piano toca.', syl: 'u', mode: 'eco', mel: '3 4 5 4 3:2', acc: '1 2 3 2 1:2', bpm: 72, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 70 } },
        { id: 'harm-2b', name: 'Terça acima em cinco notas', desc: 'Ouça a sua linha e cante a terça acima de uma escala de cinco notas tocada no piano.', syl: 'nô', mode: 'eco', mel: '3 4 5 6 7 6 5 4 3:2', acc: M.cinco, bpm: 76, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 70 } },
        { id: 'harm-2c', name: 'Terça acima, junto com a melodia', desc: 'Cante a terça acima ao mesmo tempo em que o piano toca a escala de cinco notas.', syl: 'nô', mode: 'junto', mel: '3 4 5 6 7 6 5 4 3:2', acc: M.cinco, bpm: 80, zone: 'mid', dir: 'updown', steps: 5, goal: { m: 'afin', v: 75 } },
        { id: 'harm-2d', name: 'Terças com saltos', desc: 'Cante uma terça acima de uma melodia com saltos, pulando junto com ela.', syl: 'lá', mode: 'junto', mel: '3 5 4 6 5 7 6 4 3:2', acc: '1 3 2 4 3 5 4 2 1:2', bpm: 76, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 75 } }
      ]
    },
    {
      id: 'harm-3',
      name: 'Terças abaixo da melodia',
      level: 2,
      goal: 'Cantar uma voz uma terça abaixo da melodia, sustentando a harmonia por baixo.',
      text: [
        'A terça abaixo é a outra metade da segunda voz. Em vez de cantar por cima, você canta por baixo da melodia, sempre dois graus abaixo. Para quem tem voz mais grave, essa costuma ser a posição mais natural, e ela é muito usada em duplas, corais e backing vocals. A voz de baixo dá apoio e chão para a melodia.',
        'Cantar por baixo tem uma dificuldade específica: a melodia está acima, e o ouvido tende a prestar mais atenção na nota mais aguda. Por isso é ainda mais fácil escorregar para a melodia. A dica é pensar na sua linha como uma melodia própria, com começo, meio e fim, e não como uma sombra da outra. Nos exercícios desta lição, a sua linha faz sentido mesmo cantada sem a outra.',
        'Repare num detalhe: quando a melodia vai para o 2, a terça abaixo dela é o 7 de baixo, a nota que fica logo abaixo da tônica. Essa nota é chamada de sensível, porque ela quer subir para a tônica. Quando você chega nela, já sabe que a próxima nota provavelmente será a tônica. Perceber essas tendências deixa a segunda voz mais segura.',
        'Mantenha o volume um pouco abaixo da melodia e a voz relaxada. Uma terça abaixo afinada e suave soa mais bonita do que uma forte e pesada. Se a nota mais grave da sua linha ficar desconfortável, use o botão +½ para subir o tom.'
      ],
      steps: [
        'Em "Terça abaixo em três notas", ouça a sua linha, guarde e cante enquanto o piano toca a melodia por cima.',
        'Em "Cadência por baixo", preste atenção no 7 de baixo e sinta a vontade que ele tem de subir para a tônica.',
        'Passe para "Terça abaixo, junto com a melodia", cantando ao mesmo tempo em que o piano toca a melodia.',
        'Grave e ouça: a sua voz deve soar como apoio, sem encobrir a melodia.'
      ],
      mistakes: [
        'Subir para a melodia sem perceber. Correção: cante a sua linha sem acompanhamento antes e pense nela como uma música própria.',
        'Deixar as notas graves caírem. Correção: mesmo por baixo, a voz precisa de energia. Mantenha o ar firme até a última nota.',
        'Cantar pesado para segurar a voz de baixo. Correção: leveza e afinação seguram a harmonia mais do que força.'
      ],
      tips: [
        'Se puder, cante com outra pessoa: ela faz a melodia e você faz a terça abaixo. É o treino mais próximo da vida real.',
        'Comece a reparar nas vozes de baixo das músicas que você gosta. Elas costumam estar lá, discretas, sustentando o refrão.'
      ],
      listen: [
        'Chico Mineiro — Tonico e Tinoco (as duas vozes juntas em intervalos paralelos, do jeito da música caipira)',
        'If I Fell — The Beatles (a harmonia de duas vozes nas estrofes)'
      ],
      ex: [
        { id: 'harm-3a', name: 'Terça abaixo em três notas', desc: 'Ouça a sua linha e depois cante-a uma terça abaixo da melodia que o piano toca.', syl: 'u', mode: 'eco', mel: '1 2 3 2 1:2', acc: '3 4 5 4 3:2', bpm: 72, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 70 } },
        { id: 'harm-3b', name: 'Cadência por baixo', desc: 'Ouça e cante a terça abaixo de uma melodia que desce, passando pela sensível antes da tônica.', syl: 'nô', mode: 'eco', mel: "3 2 1 7, 1:2", acc: '5 4 3 2 3:2', bpm: 72, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 70 } },
        { id: 'harm-3c', name: 'Terça abaixo, junto com a melodia', desc: 'Cante a terça abaixo ao mesmo tempo em que o piano toca uma melodia com saltos.', syl: 'lá', mode: 'junto', mel: '1 3 2 4 3 2 1:2', acc: '3 5 4 6 5 4 3:2', bpm: 76, zone: 'mid', dir: 'updown', steps: 5, goal: { m: 'afin', v: 75 } }
      ]
    },
    {
      id: 'harm-4',
      name: 'Sextas',
      level: 3,
      goal: 'Cantar uma voz uma sexta abaixo e uma sexta acima da melodia, com saltos maiores e o mesmo encaixe das terças.',
      text: [
        'A sexta é parente próxima da terça. Se você pega uma terça e leva a nota de cima uma oitava para baixo, ela vira uma sexta. Por isso as duas soam com a mesma doçura, mas a sexta é mais aberta e espaçosa. Ela aparece muito quando as vozes estão mais afastadas, por exemplo quando uma voz grave acompanha uma voz aguda.',
        'Na escala, sexta abaixo quer dizer cinco graus abaixo, o que dá a mesma nota de uma terça acima, só que uma oitava mais grave. Se a melodia está no 3, a sexta abaixo é o 5 de baixo; se a melodia está no 1, a sexta abaixo é o 3 de baixo. Sexta acima são cinco graus acima: com a melodia no 1, você canta o 6. Como as terças, as sextas da escala têm dois tamanhos, maior e menor, e as duas pertencem ao tom.',
        'Para uma voz grave, a sexta abaixo é um presente: deixa você cantar na sua região confortável enquanto a melodia fica lá em cima. Por outro lado, a distância maior faz o ouvido perder a referência com mais facilidade, e é comum a voz derivar para uma quinta ou uma terça sem perceber. O microfone vai mostrar quando isso acontecer.',
        'Trabalhe primeiro em eco, ouvindo bem a sua linha, e só depois cante junto com a melodia. Se a sexta ficar confusa, volte por alguns minutos à terça acima da lição anterior e depois retorne. O ouvido costuma entender a sexta abaixo como uma terça acima deslocada para o grave.'
      ],
      steps: [
        'Em "Sexta abaixo", ouça a sua linha grave, guarde e cante enquanto o piano toca a melodia por cima.',
        'Em "Sexta acima", a sua linha fica bem acima da melodia. Mantenha a voz leve na nota mais alta.',
        'Em "Sexta abaixo, junto com a melodia", cante a sexta abaixo de uma escala de cinco notas ao mesmo tempo em que o piano a toca.',
        'Confira no resultado as notas que saíram fora e para que lado. Ajuste pensando no grau certo, e não na nota da melodia.'
      ],
      mistakes: [
        'Derivar para uma quinta. Correção: a quinta soa oca e a sexta soa doce. Se o som ficou oco, você está um grau fora; veja no traço para que lado e ajuste.',
        'Perder a linha quando a melodia sobe. Correção: na sexta paralela, as duas vozes andam na mesma direção. Quando a melodia sobe, a sua voz sobe também.',
        'Forçar a nota mais alta na sexta acima. Correção: ela é a nota mais aguda da sua linha; deixe-a leve, quase de cabeça.'
      ],
      tips: [
        'Para treinar o ouvido, cante a mesma linha de duas formas: em terça acima e em sexta abaixo. As notas têm os mesmos nomes, só em oitavas diferentes.',
        'Use os botões −½ e +½ se a sua linha sair da região confortável.'
      ],
      ex: [
        { id: 'harm-4a', name: 'Sexta abaixo', desc: 'Ouça a sua linha e depois cante-a uma sexta abaixo da melodia que o piano toca.', syl: 'u', mode: 'eco', mel: '5, 6, 7, 6, 5,:2', acc: '3 4 5 4 3:2', bpm: 72, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 75 } },
        { id: 'harm-4b', name: 'Sexta acima', desc: 'Ouça a sua linha e depois cante-a uma sexta acima da melodia, com a nota mais alta leve.', syl: 'nô', mode: 'eco', mel: '6 7 8 7 6:2', acc: '1 2 3 2 1:2', bpm: 72, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 75 } },
        { id: 'harm-4c', name: 'Sexta abaixo, junto com a melodia', desc: 'Cante a sexta abaixo ao mesmo tempo em que o piano toca a escala de cinco notas.', syl: 'lá', mode: 'junto', mel: '3, 4, 5, 6, 7, 6, 5, 4, 3,:2', acc: M.cinco, bpm: 80, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 80 } }
      ]
    },
    {
      id: 'harm-5',
      name: 'Segunda voz em melodias conhecidas',
      level: 3,
      goal: 'Cantar a segunda voz completa de melodias de domínio público, em terça acima e em terça abaixo.',
      text: [
        'Agora é hora de juntar tudo numa melodia de verdade. Brilha, Brilha, Estrelinha é perfeita para isso: é conhecida, tem notas repetidas, um salto e uma descida em degraus. A sua voz vai uma terça acima, nota por nota. Quando a melodia canta 1, 1, 5, 5, 6, 6, 5, você canta 3, 3, 7, 7, 8, 8, 7. Na segunda metade, quando a melodia desce 4, 4, 3, 3, 2, 2, 1, você desce 6, 6, 5, 5, 4, 4, 3.',
        'Melodias conhecidas trazem um desafio a mais: o ouvido conhece tão bem a melodia que quer cantá-la. É o teste final contra o puxão. O modo eco ajuda no começo, porque você ouve a sua linha antes; depois, no modo junto, você precisa sustentá-la com a melodia soando ao lado o tempo todo.',
        'Na Ode à Alegria, de Beethoven, você faz a terça abaixo. A melodia caminha quase toda por graus vizinhos, e a sua voz anda junto, dois graus abaixo. Repare no fim: quando a melodia termina na segunda nota da escala, você termina no 7 de baixo, uma nota em suspenso. Isso é proposital, porque essa frase termina com cara de pergunta, esperando a próxima.',
        'Cante com "lá" ou "u" primeiro. Quando a linha estiver firme, experimente cantar a segunda voz de Brilha, Brilha enquanto alguém canta a melodia. É assim que a harmonia sai do exercício e vai para a música de verdade, numa roda de amigos, num coral ou num palco.'
      ],
      steps: [
        'Ouça em eco a segunda voz de Brilha, Brilha e cante-a algumas vezes até ela ficar familiar.',
        'Faça a mesma segunda voz no modo junto, com o piano tocando a melodia. Confira nota a nota no resultado.',
        'Na Ode à Alegria, ouça a sua linha em eco e repare no final em suspenso.',
        'Cante a terça abaixo da Ode junto com o piano, mantendo o volume um pouco abaixo da melodia.',
        'Grave a melhor versão e ouça como as duas vozes soam juntas.'
      ],
      mistakes: [
        'Cantar a melodia nas notas repetidas. Correção: as notas repetidas são onde o ouvido mais se distrai. Pense no nome da sua nota (mi, mi, si, si) enquanto canta.',
        'Acertar o começo e se perder no meio. Correção: divida a música em duas metades e treine cada uma até ficar firme.',
        'Achar que o final da Ode está errado. Correção: a frase termina em suspenso de propósito. Segure a nota com firmeza, sem consertar para a tônica.'
      ],
      tips: [
        'Saber a segunda voz de uma cantiga é algo que você leva para qualquer roda de música. Comece pelas mais simples.',
        'Use fone de ouvido. Com o piano no alto-falante, o microfone pode medir a melodia em vez da sua voz.'
      ],
      listen: [
        'The Sound of Silence — Simon & Garfunkel (as duas vozes cantando juntas, uma delas fazendo a harmonia)'
      ],
      ex: [
        { id: 'harm-5a', name: 'Brilha, Brilha: segunda voz em eco', desc: 'Ouça a terça acima de Brilha, Brilha, Estrelinha e depois cante-a enquanto o piano toca a melodia.', syl: 'lá', mode: 'eco', mel: '3 3 7 7 8 8 7:2 6 6 5 5 4 4 3:2', acc: M.brilha, bpm: 84, zone: 'mid', dir: 'up', steps: 3, goal: { m: 'afin', v: 75 } },
        { id: 'harm-5b', name: 'Brilha, Brilha: segunda voz junto', desc: 'Cante a terça acima de Brilha, Brilha ao mesmo tempo em que o piano toca a melodia.', syl: 'lá', mode: 'junto', mel: '3 3 7 7 8 8 7:2 6 6 5 5 4 4 3:2', acc: M.brilha, bpm: 88, zone: 'mid', dir: 'up', steps: 3, goal: { m: 'afin', v: 80 } },
        { id: 'harm-5c', name: 'Ode à Alegria: terça abaixo em eco', desc: 'Ouça a terça abaixo da Ode à Alegria e depois cante-a enquanto o piano toca a melodia.', syl: 'u', mode: 'eco', mel: '1 1 2 3 3 2 1 7, 6, 6, 7, 1 1:1.5 7,:0.5 7,:2', acc: M.ode, bpm: 88, zone: 'mid', dir: 'up', steps: 3, goal: { m: 'afin', v: 75 } },
        { id: 'harm-5d', name: 'Ode à Alegria: terça abaixo junto', desc: 'Cante a terça abaixo da Ode à Alegria ao mesmo tempo em que o piano toca a melodia.', syl: 'lá', mode: 'junto', mel: '1 1 2 3 3 2 1 7, 6, 6, 7, 1 1:1.5 7,:0.5 7,:2', acc: M.ode, bpm: 92, zone: 'mid', dir: 'up', steps: 3, goal: { m: 'afin', v: 80 } }
      ]
    },
    {
      id: 'harm-6',
      name: 'Vozes de apoio sustentadas',
      level: 3,
      goal: 'Sustentar notas longas em "uh" e "ah" por baixo de uma melodia, como fazem as vozes de apoio (backing vocals).',
      text: [
        'Nem toda harmonia anda nota por nota com a melodia. Muitas vezes as vozes de apoio, os backing vocals, seguram notas longas em "uh" ou "ah" enquanto a voz principal canta. Elas formam uma espécie de tapete sonoro: preenchem o acorde, dão corpo ao refrão e fazem a música soar maior. É um trabalho discreto e muito valorizado, no estúdio e no palco.',
        'O desafio aqui é diferente das terças. A sua nota fica parada enquanto a melodia passa por cima dela, e a cada nota da melodia o intervalo entre vocês muda. Às vezes soa doce, às vezes soa com um pouco de tensão. O ouvido sente essas mudanças e quer mexer a sua nota junto. O treino é segurá-la firme, afinada e no mesmo volume, até a hora certa de mudar.',
        'Quando a sua nota muda, ela normalmente anda pouco, um grau ou um salto pequeno, acompanhando a troca de acorde. É o que os arranjadores chamam de condução de vozes, e é o que deixa o apoio suave. Nos exercícios desta lição a sua linha tem poucas notas, todas escolhidas para combinar com o acorde que a melodia sugere naquele momento.',
        'Vozes de apoio pedem um som estável e um pouco mais suave que o da voz principal, sem vibrato exagerado e sem ataques bruscos. Comece cada nota com delicadeza e mantenha o ar constante até o fim. Um bom backing vocal quase não aparece sozinho, mas faz muita falta quando sai.'
      ],
      steps: [
        'Em "Pedal sob a escala", ouça a sua nota longa e depois sustente-a enquanto o piano toca a escala por cima.',
        'Em "Apoio em Brilha, Brilha", ouça em eco a sua linha de seis notas longas e repare como cada uma combina com a melodia.',
        'Cante o mesmo apoio no modo junto, segurando cada nota firme enquanto a melodia passa.',
        'Na Ode à Alegria, sustente o "ah" e repare que a nota longa continua certa mesmo quando a melodia passa por notas de tensão.',
        'Mantenha o volume abaixo do piano. Se a sua voz encobre a melodia, você está cantando como voz principal.'
      ],
      mistakes: [
        'Mexer a nota junto com a melodia. Correção: a sua nota fica parada até a hora de mudar. Pense nela como uma linha reta enquanto a melodia passa.',
        'Deixar a nota longa cair no fim. Correção: ar constante até o último instante. Nota de apoio tem que terminar tão afinada quanto começou.',
        'Atacar cada nota com força. Correção: comece suave, como quem acende uma luz devagar. Ataques bruscos chamam atenção demais para o apoio.'
      ],
      tips: [
        'Em "uh", pense numa boca relaxada e arredondada; em "ah", numa boca aberta mas sem esticar. As duas vogais devem soar do mesmo tamanho.',
        'Preste atenção nos backing vocals das músicas que você ouve. Eles costumam aparecer nos refrões, segurando notas longas atrás da voz principal.'
      ],
      listen: [
        'My Girl — The Temptations (as vozes de apoio sustentando a harmonia atrás da voz principal)',
        'Sweet Home Alabama — Lynyrd Skynyrd (as vozes de apoio femininas no refrão)',
        'Walk on the Wild Side — Lou Reed (as vozes de apoio que respondem com sílabas sem letra)'
      ],
      ex: [
        { id: 'harm-6a', name: 'Pedal sob a escala', desc: 'Ouça a sua nota longa e sustente-a em "uh" enquanto o piano toca a escala de cinco notas por cima.', syl: 'uh', mode: 'eco', mel: '1:10', acc: M.cinco, bpm: 76, zone: 'mid', dir: 'up', steps: 4, goal: { m: 'afin', v: 75 } },
        { id: 'harm-6b', name: 'Apoio em Brilha, Brilha', desc: 'Ouça a sua linha de notas longas e cante-a em "uh" por baixo de Brilha, Brilha, Estrelinha.', syl: 'uh', mode: 'eco', mel: '3,:4 4,:2 3,:2 6,:2 5,:4 3,:2', acc: M.brilha, bpm: 84, zone: 'mid', dir: 'up', steps: 3, goal: { m: 'afin', v: 75 } },
        { id: 'harm-6c', name: 'Apoio em Brilha, Brilha, junto', desc: 'Sustente as notas longas em "uh" ao mesmo tempo em que o piano toca a melodia.', syl: 'uh', mode: 'junto', mel: '3,:4 4,:2 3,:2 6,:2 5,:4 3,:2', acc: M.brilha, bpm: 88, zone: 'mid', dir: 'up', steps: 3, goal: { m: 'afin', v: 80 } },
        { id: 'harm-6d', name: 'Apoio na Ode à Alegria', desc: 'Sustente quatro notas longas em "ah" por baixo da Ode à Alegria, sem mexer a nota junto com a melodia.', syl: 'ah', mode: 'junto', mel: '1:4 7,:4 5,:4 7,:4', acc: M.ode, bpm: 88, zone: 'mid', dir: 'up', steps: 3, goal: { m: 'afin', v: 80 } }
      ]
    }
  ]
};
