import { M, rep } from './helpers.js';

export default {
  id: 'corpo',
  name: 'Corpo, postura e respiração',
  desc: 'O corpo é o instrumento: postura de cantor, respiração baixa, controle da saída do ar sem trancar a garganta e como soltar as tensões que deixam a voz presa.',
  lessons: [
    {
      id: 'corpo-1',
      name: 'Postura de cantor',
      level: 1,
      goal: 'Montar uma postura alinhada e solta, que deixa o ar entrar sem esforço e a garganta livre para cantar.',
      text: [
        'Antes de qualquer nota, a voz depende do corpo que a sustenta. Se os ombros estão erguidos, o pescoço vai para a frente e o queixo sobe, os músculos em volta da laringe (a estrutura do gogó, onde ficam as pregas vocais) passam a trabalhar para segurar a cabeça em vez de ficarem livres para a voz. Muita gente que sente que "grita" está, na verdade, cantando com o pescoço inteiro tenso. Arrumar a postura é o jeito mais barato de tirar esforço da voz.',
        'A postura de cantor parece a de quem está em pé esperando uma coisa boa acontecer: alerta, mas sem rigidez. Os pés ficam afastados na largura do quadril, com o peso dividido entre os calcanhares e a parte da frente dos pés. Os joelhos ficam destravados, nem esticados até o fim nem dobrados. O quadril fica neutro, sem empinar e sem encaixar demais, e a coluna se alonga como se um fio puxasse o topo da cabeça para o teto.',
        'Em cima, os ombros ficam baixos e largos, sem serem puxados para trás à força. O peito fica aberto, como se o esterno (o osso do meio do peito) estivesse levemente alto, mas sem estufar. A cabeça fica equilibrada sobre a coluna, com o queixo paralelo ao chão e o olhar no horizonte. Levantar o queixo para alcançar uma nota aguda é um dos hábitos que mais atrapalham: estica a frente do pescoço, puxa a laringe para cima e deixa a nota mais apertada, não mais fácil.',
        'Postura boa não é posição de soldado. Se você trava tudo para "ficar certo", só troca uma tensão por outra. O teste é simples: na postura certa você consegue respirar fundo, balançar levemente o corpo e virar a cabeça sem perder o alinhamento. Sentado vale a mesma ideia: use a parte da frente da cadeira, com os pés no chão e a coluna longa, sem desabar no encosto.'
      ],
      steps: [
        'Fique em pé, tire os sapatos se puder e afaste os pés na largura do quadril. Balance o peso para a frente e para trás até achar o meio.',
        'Destrave os joelhos: dobre de leve e volte, sem esticar até o fim.',
        'Suba os ombros até as orelhas, segure dois segundos e deixe cair de uma vez. Onde eles caírem é o lugar deles.',
        'Alinhe a cabeça imaginando um fio que puxa o topo dela para o teto, com o queixo paralelo ao chão. Confira de lado, num espelho ou numa foto.',
        'Faça o exercício "Montar a postura" e depois cante as notas em "mmm" sem deixar a cabeça nem os ombros se mexerem.'
      ],
      mistakes: [
        'Levantar o queixo nas notas mais altas. Correção: deixe o queixo parado e nivelado. Se a nota só sai com o queixo para cima, ela ainda está alta demais para hoje; volte meio tom.',
        'Travar os joelhos e o quadril para ficar "reto". Correção: postura de cantor é alinhada e solta. Faça um pequeno balanço com o corpo; se não consegue balançar, está rígido.',
        'Estufar o peito e puxar os ombros para trás com força. Correção: deixe os ombros caírem para baixo e para os lados, com o peito aberto mas sem esforço.',
        'Cantar olhando para o celular no colo. Correção: coloque a tela na altura dos olhos, num suporte ou numa estante, para não dobrar o pescoço.'
      ],
      tips: [
        'Encoste as costas numa parede com os calcanhares a um palmo dela. A parte de trás da cabeça, as costas e o quadril encostam de leve, sem forçar: essa é uma boa referência de alinhamento.',
        'Tire uma foto de lado enquanto canta. É comum descobrir que a cabeça vai para a frente sem você perceber.',
        'Quem passa muitas horas sentado ganha muito alongando o pescoço e os ombros antes de treinar.'
      ],
      ex: [
        { id: 'corpo-1a', name: 'Montar a postura', desc: 'Siga o guia e monte a postura parte por parte, respirando tranquilo no fim de cada ciclo.', syl: 'sem som (respiração tranquila)', mode: 'livre', breath: [['Pés na largura do quadril, peso no meio', 5], ['Joelhos destravados', 3], ['Ombros sobem até as orelhas', 3], ['Ombros caem e ficam soltos', 3], ['Cabeça alta, queixo paralelo ao chão', 4], ['Respire tranquilo sem mexer os ombros', 8]], cycles: 3, goal: { m: 'rep', v: 3 } },
        { id: 'corpo-1b', name: 'Hum com a cabeça parada', desc: 'Repita a nota em "mmm" olhando para a frente, sem mexer ombros, queixo nem cabeça.', syl: 'mmm (boca fechada)', mode: 'eco', mel: '1:4', bpm: 60, zone: 'low', dir: 'up', steps: 6, goal: { m: 'afin', v: 65 } },
        { id: 'corpo-1c', name: 'Três notas sem levantar o queixo', desc: 'Ouça e repita as três notas em "mmm"; na nota de cima, o queixo continua paralelo ao chão.', syl: 'mmm (boca fechada)', mode: 'eco', mel: M.tres, bpm: 80, zone: 'mid', dir: 'up', steps: 6, goal: { m: 'afin', v: 70 } }
      ]
    },
    {
      id: 'corpo-2',
      name: 'Respiração baixa',
      level: 1,
      goal: 'Inspirar abrindo as costelas para os lados e a barriga para a frente, com os ombros parados.',
      text: [
        'Quando alguém diz "respire fundo", a maioria das pessoas sobe o peito e os ombros. Parece muito ar, mas é pouco, e ainda deixa o pescoço tenso bem na hora de cantar. A respiração que os cantores usam é baixa: o ar entra e quem se mexe é a cintura, não os ombros. O nome técnico é respiração costo-diafragmática, porque envolve as costelas (costo) e o diafragma.',
        'O diafragma é um músculo em forma de cúpula que fica embaixo dos pulmões, como um guarda-chuva aberto. Quando você inspira, ele se contrai e desce, abrindo espaço para o ar. Ao descer, empurra os órgãos da barriga para baixo e para fora, e por isso a barriga se expande. Ao mesmo tempo, as costelas de baixo se abrem para os lados, como uma sanfona. Você não sente o diafragma diretamente; sente os efeitos dele na barriga, na cintura e nas costas.',
        'Na prática, imagine uma boia em volta da cintura que enche em todas as direções: para a frente, para os lados e um pouco para trás. Os ombros e a parte de cima do peito ficam quase parados. A inspiração é tranquila e silenciosa, pelo nariz quando há tempo e pela boca quando a música tem pressa. Não é preciso encher até o limite, porque ar demais também gera tensão.',
        'Deitar de barriga para cima é o melhor jeito de aprender, porque nessa posição o corpo já respira assim sozinho. Depois você leva a mesma sensação para a postura em pé. Se ficar tonto durante os exercícios, pare e respire normalmente por um minuto: é sinal de que está puxando ar demais ou rápido demais.'
      ],
      steps: [
        'Deite de barriga para cima, com os joelhos dobrados, e coloque um livro leve sobre a barriga. Respire normalmente e observe o livro subir e descer.',
        'Fique em pé na postura da lição anterior e coloque as mãos na cintura, logo acima do quadril, com os polegares para trás.',
        'Inspire pelo nariz em quatro tempos tentando afastar as mãos para os lados. Os ombros não se mexem; confira no espelho.',
        'Solte o ar em "sss" devagar, mantendo as costelas abertas o máximo que conseguir sem endurecer.',
        'Para ligar o ar ao som, faça a nota longa em "mmm" logo depois de uma respiração baixa.'
      ],
      mistakes: [
        'Subir os ombros ao inspirar. Correção: fique de frente para o espelho ou apoie as mãos sobre os ombros; se eles sobem, recomece com menos ar e mais devagar.',
        'Encolher a barriga na inspiração. Correção: é o contrário. Na inspiração a barriga e a cintura se expandem; a barriga entra aos poucos na hora de soltar o ar.',
        'Fazer barulho ao puxar o ar. Correção: barulho na inspiração quer dizer garganta fechada. Imagine o começo de um bocejo e deixe o ar entrar sem esforço.',
        'Encher até não caber mais. Correção: inspire até sentir a cintura cheia e confortável, não estufada. Pulmão lotado trava a garganta.'
      ],
      tips: [
        'Sentado, incline o tronco para a frente com os cotovelos nos joelhos e respire. Nessa posição você sente as costas se expandindo, o que é difícil de perceber em pé.',
        'Treine a respiração baixa fora do treino, em momentos parados do dia, como numa fila ou no ônibus. O hábito vem da repetição.',
        'Tontura é sinal para parar e respirar normalmente. Respiração de canto não é respirar mais; é respirar melhor.'
      ],
      ex: [
        { id: 'corpo-2a', name: 'Livro na barriga', desc: 'Deitado de barriga para cima, inspire e veja o livro subir; solte em "fff" e veja o livro descer devagar.', syl: 'fff (lábio de baixo encostado nos dentes de cima)', mode: 'livre', breath: [['Inspire pelo nariz e veja o livro subir', 4], ['Solte em "fff" e deixe o livro descer devagar', 8]], cycles: 5, goal: { m: 'rep', v: 3 } },
        { id: 'corpo-2b', name: 'Mãos na cintura e "sss"', desc: 'Em pé, inspire abrindo as costelas contra as mãos e solte um "sss" fino e constante pelo máximo de tempo sem apertar.', syl: 'sss (como pneu esvaziando)', mode: 'livre', breath: [['Inspire baixo, abrindo as costelas para os lados', 4], ['Solte em "sss" fino e constante', 20]], cycles: 3, goal: { m: 'sec', v: 15 } },
        { id: 'corpo-2c', name: 'Hum depois do ar baixo', desc: 'Respire baixo durante o acorde e segure uma nota em "mmm", sentindo a cintura entrar devagar enquanto o som acontece.', syl: 'mmm (boca fechada)', mode: 'junto', mel: '1:6', bpm: 60, zone: 'low', dir: 'up', steps: 5, goal: { m: 'afin', v: 65 } }
      ]
    },
    {
      id: 'corpo-3',
      name: 'Soltar as tensões',
      level: 1,
      goal: 'Reconhecer e soltar as tensões de mandíbula, língua, pescoço e ombros que apertam a voz.',
      text: [
        'Quem acha que grita ao cantar quase sempre tem uma ou mais "travas" no corpo: mandíbula presa, língua empurrando para trás, pescoço duro ou ombros subindo. Essas tensões não produzem som nenhum; elas só atrapalham as pregas vocais, que precisam vibrar livres. O resultado é aquela sensação de força na garganta e uma voz que parece apertada, mesmo quando a nota nem é tão alta.',
        'A mandíbula é movida por um dos músculos mais fortes do corpo, o masseter, que você sente no canto do rosto, perto da orelha, quando aperta os dentes. Muita gente aperta esse músculo sem perceber, por estresse ou dormindo. Uma mandíbula tensa fecha a boca, prende a língua e passa a tensão para o pescoço. Para cantar, ela precisa estar solta, como uma porta que abre pelo próprio peso, e não empurrada para baixo nem para a frente.',
        'A língua é um músculo grande, e a base dela está ligada ao osso que sustenta a laringe. Se a língua puxa para trás ou endurece, a laringe sente na hora. Em repouso para cantar, a ponta da língua encosta de leve atrás dos dentes de baixo e o resto fica largo e solto. O bocejo-suspiro (começar um bocejo e soltar um suspiro com som, descendo) é uma das melhores ferramentas para isso, porque abre o fundo da boca e solta a garganta ao mesmo tempo.',
        'Soltar tensão não é ficar mole. A ideia é deixar trabalhar só o que precisa trabalhar. Faça estes exercícios devagar e sem estalar o pescoço. Se algum movimento causar dor, diminua a amplitude ou pule o movimento: alongamento não precisa doer para funcionar.'
      ],
      steps: [
        'Massageie o masseter com as pontas dos dedos, em círculos lentos, por uns 15 segundos. Deixe a boca abrir sozinha enquanto massageia.',
        'Faça os movimentos de pescoço e ombros do guia devagar, respirando durante cada um.',
        'No bocejo-suspiro, comece um bocejo de verdade, com o fundo da boca abrindo, e solte o ar com um "ha" leve e descendente, sem empurrar.',
        'Cante as três notas em "a" com a ponta da língua para fora, apoiada no lábio de baixo. Isso impede a língua de puxar para trás.',
        'Repare em qual parte do corpo a tensão aparece primeiro. Esse é o lugar que você vai vigiar em todos os outros exercícios.'
      ],
      mistakes: [
        'Abrir a boca forçando a mandíbula para baixo. Correção: deixe a mandíbula cair pelo próprio peso, como quem está distraído. Se estala ou dói, abra menos.',
        'Fazer o suspiro com força, quase um grito descendo. Correção: o suspiro é leve, como um "ah, que alívio". Pouco volume e muita soltura.',
        'Girar a cabeça rápido ou em círculos completos. Correção: movimentos lentos, de um lado para o outro, sem jogar a cabeça para trás.'
      ],
      tips: [
        'Um teste rápido antes de cantar: mexa a mandíbula de leve de um lado para o outro enquanto segura um "mmm". Se o som não muda e o movimento é fácil, ela está solta.',
        'Se você aperta os dentes durante o dia ou acorda com o rosto dolorido, vale contar ao dentista. A tensão da mandíbula aparece na voz.',
        'Bocejar de verdade no meio do treino é ótimo sinal, não falta de educação. É o corpo soltando a garganta.'
      ],
      ex: [
        { id: 'corpo-3a', name: 'Massagem do masseter', desc: 'Massageie os músculos do canto do rosto, deixe a boca abrir sozinha e termine com um suspiro leve.', syl: 'haaa (suspiro leve)', mode: 'livre', breath: [['Dedos no canto do rosto, perto das orelhas: massageie em círculos', 15], ['Deixe a boca abrir pelo peso da mandíbula', 5], ['Suspire leve em "haaa"', 4]], cycles: 3, goal: { m: 'rep', v: 3 } },
        { id: 'corpo-3b', name: 'Pescoço e ombros', desc: 'Movimentos lentos de pescoço e ombros, cada um acompanhado de uma respiração tranquila.', syl: 'haaa (suspiro leve)', mode: 'livre', breath: [['Inspire subindo os ombros até as orelhas', 3], ['Solte os ombros de uma vez com um "haaa"', 3], ['Orelha direita em direção ao ombro direito, devagar', 6], ['Orelha esquerda em direção ao ombro esquerdo, devagar', 6], ['Queixo em direção ao peito, nuca alongada', 6]], cycles: 3, goal: { m: 'rep', v: 3 } },
        { id: 'corpo-3c', name: 'Bocejo-suspiro', desc: 'Comece um bocejo e solte o som em "ha", descendo devagar junto com o guia, sem empurrar.', syl: 'ha (suspiro com som)', mode: 'junto', mel: '5~1:3', bpm: 60, zone: 'mid', dir: 'down', steps: 5, goal: { m: 'afin', v: 65 } },
        { id: 'corpo-3d', name: 'Língua para fora', desc: 'Repita as três notas em "a" com a ponta da língua para fora, apoiada no lábio de baixo, sem esticar.', syl: 'a (ponta da língua para fora, no lábio de baixo)', mode: 'eco', mel: M.tres, bpm: 80, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 65 } }
      ]
    },
    {
      id: 'corpo-4',
      name: 'Apoio: o ar sob controle',
      level: 2,
      goal: 'Controlar a saída do ar com a musculatura do tronco, sem trancar a garganta, para o som sair constante.',
      text: [
        'Apoio é uma das palavras mais usadas e mais mal explicadas do canto. Não é empurrar a barriga para fora, nem endurecer o abdômen como quem espera um soco. Apoio é a capacidade de controlar a velocidade com que o ar sai: os músculos da cintura e das costelas freiam o ar para que ele saia num fluxo constante, nem desperdiçado nem preso.',
        'Pense no ar como a água de uma mangueira. Se você abre toda a torneira, a água sai de uma vez e acaba; se fecha demais, não sai nada. O apoio é a mão na torneira. Na prática, você inspira baixo, abrindo as costelas, e tenta manter essa abertura enquanto canta, deixando a barriga entrar aos poucos. As costelas fecham devagar no fim da frase, não no começo.',
        'O erro mais comum de quem quer apoiar é trancar: endurecer a barriga e fechar a garganta para segurar o ar. Isso aumenta a pressão embaixo das pregas vocais e a voz sai empurrada, exatamente o contrário do que você quer. O "sss" é o melhor treino, porque um "s" fino e constante só acontece com o ar controlado pelo corpo e a garganta solta. Se o "s" sai em ondas ou fica mais forte no fim, o controle ainda está vindo da força.',
        'Os pulsos curtos de "tss" e "sh" treinam o outro lado: a musculatura responde rápido, dá um pequeno toque para dentro a cada pulso e logo solta. Essa soltura entre os pulsos é tão importante quanto o pulso. O começo do som também merece cuidado: a nota deve nascer suave, sem um estalo na garganta antes da vogal e sem um sopro antes do som. Se sentir tontura, dor ou ardor, pare e respire normalmente.'
      ],
      steps: [
        'Faça o "sss" igual: inspire baixo e solte um "s" fino, como um pneu esvaziando devagar, com o mesmo volume do começo ao fim.',
        'Enquanto solta o "sss", mantenha as mãos na cintura e tente deixar as costelas abertas. A barriga entra devagar e o peito não afunda.',
        'Faça os pulsos de "tss" e de "sh": cada pulso é um toque curto da barriga para dentro, e entre um e outro a barriga solta e o ar volta sozinho.',
        'No hum longo, use o mesmo controle do "sss", agora com som. A nota deve ficar reta do começo ao fim.',
        'Por último, faça o "sss" de fôlego. Registre os segundos e compare semana a semana: o número sobe com treino, não com força.'
      ],
      mistakes: [
        'Endurecer a barriga como uma tábua. Correção: o abdômen trabalha, mas continua se mexendo. Se você não consegue balançar o corpo enquanto faz o "sss", está trancado.',
        'Começar o "sss" forte e deixar sumir. Correção: comece com menos ar do que acha que precisa. Constância vale mais que volume.',
        'Apertar a garganta para o ar durar mais. Correção: o freio fica no tronco, não no pescoço. Se a garganta aperta, encerre o "sss" ali e recomece.',
        'Espremer até o último fio de ar no exercício de fôlego. Correção: termine quando o som perder a qualidade. Espremer ensina o corpo a travar.'
      ],
      tips: [
        'O número de segundos importa menos que a qualidade: 20 segundos iguais valem mais que 40 tremidos.',
        'Faça os pulsos devagar no começo. A velocidade vem depois, quando o movimento estiver solto.',
        'Uma boa imagem para o apoio é a de quem lê em voz alta para alguém do outro lado da sala: corpo ativo e garganta tranquila.'
      ],
      listen: [
        'Hallelujah — Jeff Buckley (notas longas e suaves, com o ar controlado até o fim de cada frase)'
      ],
      ex: [
        { id: 'corpo-4a', name: 'Sss igual', desc: 'Inspire baixo e solte um "sss" fino e constante, com as costelas abertas, até o som começar a mudar.', syl: 'sss (como pneu esvaziando)', mode: 'livre', breath: [['Inspire baixo, abrindo as costelas', 4], ['Solte em "sss" fino e igual, costelas abertas', 30]], cycles: 3, goal: { m: 'sec', v: 20 } },
        { id: 'corpo-4b', name: 'Pulsos de "tss" e "sh"', desc: 'Pulsos curtos com um toque da barriga para dentro em cada um, soltando a barriga entre eles.', syl: 'tss e sh (pulsos curtos)', mode: 'livre', breath: [['Inspire baixo', 3], ['Oito pulsos de "tss", um toque da barriga em cada', 6], ['Solte a barriga e deixe o ar entrar sozinho', 2], ['Oito pulsos de "sh"', 6], ['Solte a barriga e respire', 3]], cycles: 4, goal: { m: 'rep', v: 3 } },
        { id: 'corpo-4c', name: 'Hum longo apoiado', desc: 'Segure uma nota em "mmm" com o mesmo controle do "sss": volume igual e linha reta do começo ao fim.', syl: 'mmm (boca fechada)', mode: 'junto', mel: '1:8', bpm: 60, zone: 'mid', dir: 'up', steps: 4, goal: { m: 'afin', v: 70 } },
        { id: 'corpo-4d', name: 'Sss de fôlego', desc: 'Um "sss" pelo máximo de tempo com qualidade, sem trancar a garganta nem espremer o fim.', syl: 'sss (como pneu esvaziando)', mode: 'livre', breath: [['Inspire baixo, sem levantar os ombros', 5], ['Solte em "sss" fino e igual pelo máximo de tempo', 45]], cycles: 2, goal: { m: 'sec', v: 40 } }
      ]
    },
    {
      id: 'corpo-5',
      name: 'Respirar entre as frases',
      level: 2,
      goal: 'Respirar rápido, baixo e em silêncio entre as frases, usando só o ar que cada frase pede.',
      text: [
        'Na música não há quatro segundos para inspirar. Entre uma frase e outra costuma haver um tempo, às vezes menos. O treino agora é fazer a mesma respiração baixa das lições anteriores num instante: a boca abre de leve, a cintura solta e o ar cai para dentro, sem barulho. Quem puxa o ar com força faz um chiado na garganta, que é sinal de garganta fechada e ainda resseca a voz.',
        'O segredo da respiração rápida é soltar, não puxar. Se no fim da frase você relaxa de uma vez a barriga e a cintura, o ar entra quase sozinho, como uma bola de borracha amassada que volta ao formato. Por isso é importante não terminar as frases espremido: quem gasta até o último fio de ar fica com o corpo travado e não consegue soltar para a próxima inspiração.',
        'Outro erro comum é guardar ar demais. A pessoa respira enorme para uma frase curta e canta com o peito cheio e pressionado, ou chega ao fim da frase ainda com ar e inspira por cima, acumulando. A regra é respirar na medida da frase: frase curta, respiração pequena; frase longa, respiração maior. Com o tempo você vai planejar as respirações de uma música como quem marca vírgulas num texto.',
        'Nos exercícios desta lição as pausas são curtas de propósito. Use cada uma para soltar e deixar o ar entrar, e não para encher ao máximo. Se perceber que está ficando ofegante, diminua o volume do canto, porque volume alto gasta ar mais rápido e cansa a voz.'
      ],
      steps: [
        'No exercício livre, solte o "sss" como se fosse uma frase e, no fim, relaxe a barriga e deixe o ar entrar pela boca em um segundo, sem barulho.',
        'Repare se a inspiração faz chiado. Se fizer, abra um pouco mais o fundo da boca, como no começo de um bocejo.',
        'Cante as duas escalas em "mmm" respirando só na pausa curta entre elas.',
        'Na melodia de "Brilha, brilha, estrelinha", respire apenas na pausa do meio. Se o ar não chegar até o fim, cante mais baixo em vez de respirar no meio da frase.',
        'Depois, escolha uma música de que você gosta, escreva a letra e marque com uma barra onde vai respirar.'
      ],
      mistakes: [
        'Inspirar com barulho, como um soluço. Correção: solte a barriga e deixe o ar entrar com a boca e a garganta abertas, no formato de um "a" silencioso.',
        'Respirar no meio de uma palavra por falta de planejamento. Correção: marque as respirações antes de cantar e use as pausas que a própria música oferece.',
        'Encher ao máximo para toda frase. Correção: respire na medida da frase. Ar sobrando também é tensão.',
        'Levantar os ombros na pressa. Correção: na respiração rápida a regra é a mesma, quem se mexe é a cintura. Treine devagar primeiro e acelere aos poucos.'
      ],
      tips: [
        'Ouça seus cantores preferidos prestando atenção só nas respirações. Você vai notar que eles respiram mais vezes do que parece, e em lugares escolhidos.',
        'Inspirar pela boca é normal na música. Pelo nariz é ótimo quando há tempo, porque aquece e umedece o ar.',
        'Se a respiração rápida deixar você tonto, faça pausas maiores entre as séries e respire normalmente por um minuto.'
      ],
      listen: [
        'Sozinho — Caetano Veloso (frases calmas cantadas em volume de conversa: repare onde ele respira)',
        'Construção — Chico Buarque (frases longas e seguidas: perceba onde cabem as respirações rápidas)'
      ],
      ex: [
        { id: 'corpo-5a', name: 'Respiração de um segundo', desc: 'Solte um "sss" curto como se fosse uma frase e, no fim, solte a barriga e deixe o ar entrar pela boca em um segundo, sem barulho.', syl: 'sss (frase) e inspiração silenciosa', mode: 'livre', breath: [['Solte em "sss" como se fosse uma frase', 6], ['Solte a barriga: o ar entra rápido e sem barulho', 1]], cycles: 10, goal: { m: 'rep', v: 3 } },
        { id: 'corpo-5b', name: 'Duas escalas, uma respiração', desc: 'Duas escalas de cinco notas em "mmm" com uma pausa de um tempo entre elas: respire rápido e em silêncio na pausa.', syl: 'mmm (boca fechada)', mode: 'junto', mel: rep(M.cinco, 2, 1), bpm: 84, zone: 'mid', dir: 'up', steps: 4, goal: { m: 'afin', v: 70 } },
        { id: 'corpo-5c', name: 'Brilha, brilha com respiração no meio', desc: 'A melodia de domínio público em "nô", respirando só na pausa do meio.', syl: 'nô', mode: 'junto', mel: '1 1 5 5 6 6 5:2 r:1 4 4 3 3 2 2 1:2', bpm: 88, zone: 'mid', dir: 'up', steps: 4, goal: { m: 'afin', v: 70 } }
      ]
    }
  ]
};
