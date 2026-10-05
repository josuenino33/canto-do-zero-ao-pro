import { M, SOLFA } from './helpers.js';

export default {
  id: 'afin',
  name: 'Afinação',
  desc: 'Ouvir uma nota e acertar com a voz: notas soltas, deslizes, escalas, notas longas e melodias sem a ajuda do piano.',
  lessons: [
    {
      id: 'afin-1',
      name: 'Ouvir e acertar uma nota',
      level: 1,
      goal: 'Repetir com a voz uma nota tocada no piano e perceber, pelo traço na tela, se ficou acima, abaixo ou em cima dela.',
      text: [
        'Sair do tom quase nunca é falta de dom. Na grande maioria das pessoas, o ouvido escuta a diferença entre as notas, mas o caminho entre o que o ouvido escuta e o que a voz faz ainda não foi treinado. É uma coordenação, como acertar uma bola na cesta: no começo erra muito, com repetição e com alguém mostrando onde a bola caiu, o corpo ajusta sozinho. Só uma pequena minoria das pessoas, algo em torno de 1 a 4 em cada 100, tem amusia de verdade, que é uma dificuldade real de perceber diferenças de altura.',
        'Neste app quem mostra onde a bola caiu é o microfone. Enquanto você canta, um traço aparece sobre a barra da nota certa. Verde quer dizer afinado (até um quarto de semitom de diferença), amarelo quer dizer perto e vermelho quer dizer longe. Olhe o traço, ouça a sua voz e corrija devagar. Com o tempo você vai perceber a diferença antes de ver a cor, e esse é o objetivo.',
        'Comece sempre na parte da voz que é fácil para você. Se você sente que só alcança os graves, ótimo: é por eles que se começa. Uma nota confortável sai mais afinada que uma nota esticada, porque a garganta não precisa brigar com a altura. O app escolhe as notas pela sua extensão; se ainda não fez o teste de voz na aba Voz, faça antes desta lição.',
        'Cante com volume médio, como quem conversa com alguém do outro lado da mesa. Cantar alto demais faz a nota subir e balançar, e cantar só com ar deixa a nota sem foco. O modo eco desta lição é o melhor para começar: o piano toca a nota, para, e só depois você canta. Assim você ouve com atenção, imagina a nota por dentro e só então solta a voz.'
      ],
      steps: [
        'Faça o teste de voz (aba Voz) se ainda não fez. Leva dois minutos e deixa os exercícios no seu tom.',
        'No exercício "Uma nota em u", ouça a nota do piano inteira antes de cantar. Imagine a nota por dentro, como se fosse cantar na cabeça.',
        'Cante em volume médio e segure a nota olhando o traço. Se ficou abaixo da barra, pense a nota "mais para cima"; se ficou acima, solte a pressão e deixe a nota descer.',
        'Ligue "Ouvir meu canto" no professor que ouve e faça a série inteira. No fim, veja a nota de afinação e se você tende a cantar abaixo ou acima.',
        'Repita com "mmm" e com "a". Quando a nota de afinação passar de 70 com qualidade "Solto", siga para a próxima lição.'
      ],
      mistakes: [
        'Começar a cantar antes de o piano terminar. Correção: espere a nota acabar, respire e só então cante. Ouvir com atenção é metade do exercício.',
        'Cantar alto para "garantir". Correção: volume de conversa. Grito sobe a afinação e cansa a voz em minutos.',
        'Mudar a nota o tempo todo procurando o verde. Correção: segure a nota firme por um segundo, olhe para onde ela foi e só então ajuste devagar, em um movimento só.',
        'Desistir no primeiro vermelho. Correção: errar é a informação que o ouvido precisa. Quem erra e corrige aprende mais rápido do que quem acerta por sorte.'
      ],
      tips: [
        'Se a nota do piano parecer alta ou baixa demais para você, use os botões −½ e +½ da sala de treino até ficar confortável.',
        'Use fone de ouvido quando puder: assim o microfone escuta só você, e não o piano.',
        'Grave e ouça. Ouvir a própria voz gravada é estranho no começo, mas é o espelho mais honesto que existe.'
      ],
      listen: [
        'Trem-Bala — Ana Vilela (melodia simples e confortável, boa para cantar junto)',
        'Tocando em Frente — Almir Sater (notas longas e calmas, sem pressa)'
      ],
      ex: [
        { id: 'afin-1a', name: 'Uma nota em "u"', desc: 'O piano toca uma nota e para. Você repete em "u" e segura até o fim da barra.', syl: 'u', mode: 'eco', mel: '1:3', bpm: 70, zone: 'low', dir: 'up', steps: 6, goal: { m: 'afin', v: 70 } },
        { id: 'afin-1b', name: 'Uma nota em "mmm"', desc: 'A mesma ideia de boca fechada, sentindo a vibração nos lábios e no nariz.', syl: 'mmm (boca fechada)', mode: 'eco', mel: '1:3', bpm: 70, zone: 'mid', dir: 'up', steps: 6, goal: { m: 'afin', v: 70 } },
        { id: 'afin-1c', name: 'Uma nota em "a"', desc: 'Agora com a boca aberta, em "a", descendo de meio em meio tom.', syl: 'a', mode: 'eco', mel: '1:3', bpm: 70, zone: 'mid', dir: 'down', steps: 6, goal: { m: 'afin', v: 75 } }
      ]
    },
    {
      id: 'afin-2',
      name: 'Deslizar até a nota',
      level: 1,
      goal: 'Encontrar a nota certa deslizando a voz até ela, e perceber quando ela "encaixa".',
      text: [
        'Quem sai do tom costuma pular direto para uma nota qualquer e ficar lá, sem perceber que errou. Um jeito ótimo de treinar o ouvido é o contrário: deslizar a voz devagar, como uma sirene, e parar quando a nota encaixar. Você sente quando chega: o som da sua voz e o do piano param de "brigar" e parecem um só.',
        'Esse encaixe tem até um nome técnico. Quando duas notas estão quase iguais, o som parece tremer, como se pulsasse. Quanto mais perto, mais lento fica esse tremor, até sumir. Treinar com deslizes ensina o ouvido a perceber esse tremor e a voz a corrigir sozinha, sem precisar olhar a tela.',
        'O deslize também solta a voz. Para deslizar, a garganta não pode estar travada numa posição, então ele tira a tensão que costuma aparecer quando a pessoa "mira" uma nota e aperta. Faça os deslizes em volume baixo, em "u", que é uma vogal fácil de manter afinada e que não puxa grito.'
      ],
      steps: [
        'No "Chegar por baixo", comece um pouco abaixo da nota, suba devagar junto com o som do guia e pare em cima da barra. Segure.',
        'Repare no momento em que a sua voz e o guia viram um som só. Esse é o ponto que você está procurando.',
        'Faça o "Chegar por cima": agora a nota vem de cima para baixo. Muita gente sobe com facilidade e erra ao descer, ou o contrário. Descubra qual é o seu lado fraco.',
        'Na sirene curta, suba e desça entre duas notas sem cortar o som, como se a voz fosse um elástico.',
        'Com o microfone ligado, o importante é o traço terminar verde e ficar reto na nota final.'
      ],
      mistakes: [
        'Deslizar rápido demais e passar da nota. Correção: deslize na mesma velocidade do guia, como quem desce uma escada segurando o corrimão.',
        'Parar antes de chegar e ficar um pouco abaixo. Correção: é o erro mais comum. Pense em chegar "um pouquinho acima" da nota; na prática você para em cima dela.',
        'Fazer força na subida. Correção: o deslize é pequeno, de poucas notas. Se a garganta aperta, diminua o volume.'
      ],
      tips: [
        'Mexa a mão junto com a voz: a mão sobe quando a voz sobe. Parece bobo, mas ajuda o ouvido a acompanhar a altura.',
        'Se o deslize falhar no meio (a voz "quebra"), não tem problema. Diminua o volume e tente de novo; com "u" isso melhora rápido.'
      ],
      ex: [
        { id: 'afin-2a', name: 'Chegar por baixo', desc: 'Deslize de baixo até a nota e segure. O guia desliza junto com você.', syl: 'u', mode: 'junto', mel: '5,~1:2 1:2', bpm: 70, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 70 } },
        { id: 'afin-2b', name: 'Chegar por cima', desc: 'Deslize de cima até a nota e segure, sem passar do ponto.', syl: 'u', mode: 'junto', mel: '5~1:2 1:2', bpm: 70, zone: 'mid', dir: 'down', steps: 5, goal: { m: 'afin', v: 70 } },
        { id: 'afin-2c', name: 'Sirene curta', desc: 'Suba e desça entre duas notas sem cortar o som.', syl: 'u', mode: 'junto', mel: M.sirene3, bpm: 70, zone: 'mid', dir: 'up', steps: 6, goal: { m: 'afin', v: 70 } }
      ]
    },
    {
      id: 'afin-3',
      name: 'Duas e três notas',
      level: 1,
      goal: 'Acertar a distância entre notas vizinhas, subindo e descendo, sem deixar a voz cair.',
      text: [
        'Uma música é feita de notas em sequência, e o que mais tira as pessoas do tom não é uma nota sozinha, é o caminho entre elas. Quando a melodia sobe, a tendência é chegar abaixo da nota, porque subir dá trabalho. Quando desce, a tendência é cair demais, porque a voz relaxa e despenca.',
        'Por isso a primeira distância a dominar é o passo de uma nota para a vizinha, que se chama segunda. É o passo mais usado em quase todas as melodias. Depois vêm três notas seguidas, que já formam uma pequena frase. Se você acerta o caminho de três notas, já consegue cantar muita coisa.',
        'Pense que cada nota tem um lugar fixo, como degraus de uma escada. Ao descer de volta para a primeira nota, ela tem que cair exatamente no mesmo degrau de onde você saiu. O microfone mostra isso: compare a primeira e a última nota da série. Se a última está mais baixa, você está deixando a voz cair no final.'
      ],
      steps: [
        'Comece em eco: ouça as notas, imagine-as por dentro e cante. Se errou, ouça de novo na próxima repetição.',
        'Preste atenção especial na última nota: ela é igual à primeira. Confira no traço se ela voltou para o mesmo lugar.',
        'Passe para "Três notas junto", cantando com o piano. Ouça se a sua voz e o piano soam como um só.',
        'Veja no resultado do microfone qual nota sai mais fora. É nela que você deve prestar atenção na próxima série.'
      ],
      mistakes: [
        'A nota de cima chega baixa. Correção: prepare a subida um pouco antes, com mais ar e a vogal mais aberta, como se a nota estivesse acima da cabeça.',
        'A última nota cai. Correção: mantenha a energia até o fim. A última nota merece o mesmo cuidado que a primeira.',
        'Emendar todas as notas num escorregão. Correção: cada nota tem o seu degrau. Cante "mo-mo-mo" separando de leve as sílabas.'
      ],
      tips: [
        'Mostrar a altura com a mão (sobe quando a nota sobe) continua ajudando.',
        'Se uma nota sempre sai fora, cante só ela e a anterior várias vezes, devagar, até acertar.'
      ],
      ex: [
        { id: 'afin-3a', name: 'Nota vizinha', desc: 'Sobe uma nota e volta. A volta tem que cair no mesmo lugar da primeira.', syl: 'mo', mode: 'eco', mel: M.dois, bpm: 80, zone: 'mid', dir: 'up', steps: 6, goal: { m: 'afin', v: 70 } },
        { id: 'afin-3b', name: 'Três notas em eco', desc: 'Ouça as três notas subindo e descendo e repita sozinho.', syl: 'nô', mode: 'eco', mel: M.tres, bpm: 80, zone: 'mid', dir: 'up', steps: 6, goal: { m: 'afin', v: 70 } },
        { id: 'afin-3c', name: 'Três notas junto', desc: 'Agora cante junto com o piano, com a voz grudada no som dele.', syl: 'mi', mode: 'junto', mel: M.tres, bpm: 84, zone: 'mid', dir: 'updown', steps: 5, goal: { m: 'afin', v: 75 } }
      ]
    },
    {
      id: 'afin-4',
      name: 'A escala de cinco notas',
      level: 1,
      goal: 'Cantar afinado a escala de cinco notas subindo e descendo, o aquecimento mais usado por cantores.',
      text: [
        'A escala de cinco notas (as cinco primeiras da escala maior, subindo e descendo) é a base de quase todo aquecimento vocal. Ela cabe em quase qualquer voz, tem passos pequenos e uma nota mais alta bem definida no meio. Se você canta essa escala afinada em vários tons, tem uma base sólida para melodias de verdade.',
        'A nota que mais sai fora nessa escala costuma ser a quinta, a mais alta. A pessoa chega cansada nela, com pouco ar e com a vogal fechando, e a nota sai baixa. A segunda nota que mais escorrega é a terceira na descida. O resultado do microfone mostra qual nota do padrão está fora; use isso para saber onde colocar atenção.',
        'Nos exercícios com o nome das notas, o app usa o dó móvel: a primeira nota da escala é sempre "dó", qualquer que seja o tom. Isso ajuda o ouvido a entender a função de cada nota (a de repouso, a mais alta, a que pede para voltar), que é o que realmente importa para cantar afinado.'
      ],
      steps: [
        'Faça primeiro em eco, ouvindo a escala inteira antes de cantar.',
        'Depois cante junto, subindo e descendo de tom. Respire no acorde que o piano dá antes de cada repetição.',
        'Na nota mais alta, pense em "espaço" (como no começo de um bocejo) em vez de força.',
        'Use o resultado do microfone: se a 5ª nota sai baixa, prepare a subida; se a 1ª do final sai baixa, mantenha a energia até o fim.',
        'Termine cantando com o nome das notas, sentindo a função de cada uma.'
      ],
      mistakes: [
        'Correr com as notas do meio. Correção: cada nota dura um tempo inteiro. O piano marca o tempo para você.',
        'Subir o queixo para alcançar a nota mais alta. Correção: queixo parado e nivelado; a altura vem do ar e da vogal, não do pescoço.',
        'Respirar no meio da escala. Correção: respire no acorde, antes de começar, com calma. Se faltar ar, cante mais baixo, não mais rápido.'
      ],
      tips: [
        'O traço do microfone deve ficar parecido com uma escada: degraus retos e bem separados.',
        'Se a escala ficar aguda demais no fim da série, pare ali. Avançar com esforço ensina esforço.'
      ],
      ex: [
        { id: 'afin-4a', name: 'Cinco notas em eco', desc: 'Ouça a escala de cinco notas e repita em "ma".', syl: 'ma', mode: 'eco', mel: M.cinco, bpm: 90, zone: 'mid', dir: 'up', steps: 6, goal: { m: 'afin', v: 70 } },
        { id: 'afin-4b', name: 'Cinco notas junto', desc: 'Escala de cinco notas junto com o piano, subindo e descendo de tom.', syl: 'nô', mode: 'junto', mel: M.cinco, bpm: 90, zone: 'mid', dir: 'updown', steps: 7, goal: { m: 'afin', v: 75 } },
        { id: 'afin-4c', name: 'Com o nome das notas', desc: 'A mesma escala cantando dó ré mi fá sol (dó móvel: a primeira nota é sempre dó).', syl: 'dó ré mi', mode: 'junto', mel: M.cinco, lyr: SOLFA.cinco, bpm: 90, zone: 'mid', dir: 'up', steps: 6, goal: { m: 'afin', v: 80 } }
      ]
    },
    {
      id: 'afin-5',
      name: 'Notas longas e firmes',
      level: 2,
      goal: 'Segurar uma nota afinada por vários segundos, sem deixar cair no fim e sem balançar.',
      text: [
        'Muita gente acerta a nota no começo e perde no meio do caminho. Nota longa exige ar contínuo: quando o ar enfraquece, a nota cai; quando você empurra para compensar, ela sobe. O controle do ar, que você estuda no módulo de corpo e respiração, aparece aqui como afinação.',
        'O bordão é uma nota grave que fica tocando sem parar, como a sanfona segurando o baixo. Cantar sobre ele é um dos melhores treinos de afinação que existem: quando a sua nota está certa, o som fica limpo e parece crescer; quando sai um pouco, aparece um tremor áspero entre a voz e o bordão. Você aprende a ouvir esse tremor e a corrigir antes que alguém perceba.',
        'Uma nota firme não é uma nota rígida. Mais para a frente você vai estudar vibrato, que é uma ondulação pequena e regular. Por enquanto, busque uma linha reta e tranquila no traço do microfone. Se a linha treme em zigue-zague, é tensão; se desce aos poucos, é falta de ar no fim.'
      ],
      steps: [
        'Ligue o bordão e cante a nota longa em "a". Ouça se a voz se encaixa no bordão ou se aparece um tremor.',
        'Divida a nota em três partes: começo, meio e fim. O fim tem que ter a mesma altura do começo.',
        'Na terça e quinta sobre o bordão, sinta como cada nota soa diferente contra o bordão, mas todas soam "limpas" quando afinadas.',
        'No exercício de fôlego, segure a nota o máximo que conseguir sem apertar a garganta. Pare quando o som piorar, não quando o ar acabar de vez.',
        'Registre os segundos que o microfone mediu. Eles vão subir com o treino de respiração.'
      ],
      mistakes: [
        'A nota cai no final. Correção: o final precisa de mais apoio, não de menos. Pense em manter a barriga firme e o ar saindo igual até o último segundo.',
        'Empurrar o volume para segurar a nota. Correção: nota longa se canta em volume médio. Volume alto gasta ar e sobe a afinação.',
        'Espremer até o último fio de ar. Correção: isso cria tensão no pescoço. Termine a nota com um pouco de ar sobrando.'
      ],
      tips: [
        'Coloque a mão na barriga e sinta ela entrando devagar enquanto a nota acontece. Se ela despenca de uma vez, o ar está saindo rápido demais.',
        'Use fone de ouvido com o bordão ligado: sem fone, o microfone pode ouvir o bordão em vez da sua voz.'
      ],
      ex: [
        { id: 'afin-5a', name: 'Nota longa sobre o bordão', desc: 'Segure a tônica em "a" sobre o bordão, com a linha reta do começo ao fim.', syl: 'a', mode: 'junto', mel: '1:6', bpm: 60, zone: 'mid', dir: 'up', steps: 4, drone: true, goal: { m: 'afin', v: 80 } },
        { id: 'afin-5b', name: 'Terça e quinta sobre o bordão', desc: 'Passeie entre tônica, terça e quinta sobre o bordão, segurando cada nota.', syl: 'u', mode: 'junto', mel: '1:3 3:3 5:3 3:3 1:3', bpm: 60, zone: 'mid', dir: 'up', steps: 3, drone: true, goal: { m: 'afin', v: 75 } },
        { id: 'afin-5c', name: 'Fôlego na nota', desc: 'Segure uma nota confortável pelo máximo de tempo, afinada e sem apertar.', syl: 'a', mode: 'junto', mel: '1:16', bpm: 50, zone: 'low', dir: 'stay', steps: 2, goal: { m: 'sec', v: 15 } }
      ]
    },
    {
      id: 'afin-6',
      name: 'Cantar sem o piano',
      level: 2,
      goal: 'Manter a afinação com o piano dando só o acorde inicial, como acontece ao cantar sem acompanhamento.',
      text: [
        'Enquanto o piano toca junto, a sua voz se apoia nele, como quem anda segurando no corrimão. O teste de verdade é soltar o corrimão. Nestes exercícios o piano dá o acorde para você saber o tom, e depois você canta sozinho. O microfone mostra se a voz se manteve no lugar.',
        'Sem referência, a afinação tende a ir caindo aos poucos ao longo da frase, principalmente nas notas que descem. Isso acontece até com cantores experientes quando estão cansados. Por isso o treino aqui é manter uma imagem firme do tom na cabeça: a primeira nota é a casa, e você sempre sabe onde ela está.',
        'Antes de cantar, imagine a escala inteira por dentro, no tom do acorde. Essa audição interna é a habilidade que separa quem canta afinado de quem depende do instrumento. Ela se treina exatamente assim: ouvindo, imaginando e conferindo.'
      ],
      steps: [
        'Ouça o acorde e cante a primeira nota baixinho por dentro antes de começar de verdade.',
        'Cante a escala de cinco notas sozinho e confira no traço se a última nota voltou para a casa.',
        'Passe para o arpejo, que tem saltos maiores, e depois para a escala inteira.',
        'Se a nota de afinação cair muito em relação ao modo com piano, volte uns dias para o modo junto e retorne.'
      ],
      mistakes: [
        'Começar na nota errada porque não ouviu o acorde. Correção: ouça o acorde inteiro e procure nele a nota mais grave; é a sua primeira nota.',
        'Ir caindo devagar ao longo da série. Correção: pense na última nota "por cima" e mantenha o ar firme até o fim.'
      ],
      tips: [
        'Grave e compare com o piano depois: tocar a gravação junto com o exercício mostra exatamente onde a voz escorregou.',
        'Fazer este exercício de olhos fechados e só depois olhar o resultado treina a audição interna.'
      ],
      ex: [
        { id: 'afin-6a', name: 'Cinco notas sem piano', desc: 'O piano dá o acorde; você canta a escala de cinco notas sozinho.', syl: 'ma', mode: 'junto', solo: true, mel: M.cinco, bpm: 90, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 75 } },
        { id: 'afin-6b', name: 'Arpejo sem piano', desc: 'Tônica, terça, quinta e volta, sozinho depois do acorde.', syl: 'nô', mode: 'junto', solo: true, mel: M.arpejo, bpm: 84, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 75 } },
        { id: 'afin-6c', name: 'Escala inteira sem piano', desc: 'Uma oitava inteira subindo e descendo, só com o acorde de referência.', syl: 'lá', mode: 'junto', solo: true, mel: M.escala, bpm: 92, zone: 'mid', dir: 'up', steps: 3, goal: { m: 'afin', v: 75 } }
      ]
    },
    {
      id: 'afin-7',
      name: 'Afinação em melodias',
      level: 3,
      goal: 'Cantar melodias conhecidas inteiras e afinadas, com e sem o piano.',
      text: [
        'Escalas e arpejos são o treino; a melodia é o jogo. Numa melodia de verdade aparecem saltos, notas repetidas, notas longas e ritmos diferentes, tudo misturado. Estas três melodias de domínio público cobrem quase tudo isso e são conhecidas, o que ajuda: o ouvido já sabe para onde a música vai.',
        'Ao cantar uma melodia, atenção às notas repetidas. Elas parecem fáceis, mas a voz tende a cair um pouquinho a cada repetição. Atenção também aos saltos: no "Parabéns", o salto para a nota mais alta da terceira frase é onde quase todo mundo sai do tom. Prepare esse salto com ar e espaço antes de chegar nele.',
        'Quando estas melodias saírem afinadas sem o piano, você está pronto para aplicar a mesma atenção nas músicas que gosta. Use a ferramenta "Tom certo para a música" na aba Voz para escolher o tom de cada música de acordo com a sua extensão. Música no tom errado é a causa número um de grito e de desafinação em quem está começando.'
      ],
      steps: [
        'Ouça a melodia em eco e repita. Na primeira vez, preste atenção só no desenho: onde sobe, onde desce.',
        'Cante junto com o piano. Veja no resultado quais notas da melodia saíram fora e cante esse trecho isolado.',
        'Cante sem o piano, só com o acorde inicial. A nota final tem que cair na casa.',
        'Grave a melhor versão e ouça no dia seguinte, com o ouvido descansado.'
      ],
      mistakes: [
        'Notas repetidas que vão caindo. Correção: cada repetição é a mesma nota; pense nelas na mesma altura, como pontos numa linha reta.',
        'Pular para a nota alta sem preparar. Correção: respire antes da frase do salto e abra um pouco mais a vogal na nota alta.',
        'Acelerar porque conhece a música. Correção: siga o tempo do piano; pressa tira atenção da afinação.'
      ],
      tips: [
        'Cante com "lá" primeiro. Depois, se quiser, cante com a letra que você conhece.',
        'Se uma melodia ficar alta ou baixa, ajuste o tom com −½ e +½.'
      ],
      listen: [
        'Garota de Ipanema — João Gilberto (afinação precisa com voz leve, sem esforço nenhum)'
      ],
      ex: [
        { id: 'afin-7a', name: 'Brilha, brilha, estrelinha', desc: 'Melodia de domínio público em eco: ouça a frase inteira e repita.', syl: 'lá', mode: 'eco', mel: M.brilha, bpm: 92, zone: 'mid', dir: 'up', steps: 3, goal: { m: 'afin', v: 80 } },
        { id: 'afin-7b', name: 'Parabéns (melodia)', desc: 'A melodia do parabéns, com o salto difícil da terceira frase.', syl: 'lá', mode: 'junto', mel: "5,:0.75 5,:0.25 6, 5, 1 7,:2 5,:0.75 5,:0.25 6, 5, 2 1:2 5,:0.75 5,:0.25 5 3 1 7, 6,:2 4:0.75 4:0.25 3 1 2 1:2", bpm: 100, zone: 'mid', dir: 'up', steps: 3, goal: { m: 'afin', v: 80 } },
        { id: 'afin-7c', name: 'Ode à Alegria sem piano', desc: 'O tema de Beethoven só com o acorde de referência.', syl: 'lá', mode: 'junto', solo: true, mel: M.ode, bpm: 100, zone: 'mid', dir: 'stay', steps: 3, goal: { m: 'afin', v: 85 } }
      ]
    }
  ]
};
