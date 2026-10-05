import { M } from './helpers.js';

export default {
  id: 'interp',
  name: 'Interpretação, repertório e palco',
  desc: 'Como estudar uma música do zero, dar sentido à letra, usar o microfone, lidar com o nervosismo, gravar e se ouvir, e montar a rotina de quem canta de verdade.',
  lessons: [
    {
      id: 'interp-1',
      name: 'Estudar uma música do zero',
      level: 2,
      goal: 'Aprender uma música nova com método: ouvir, falar a letra no ritmo, cantar a melodia em "lá", escolher o tom, isolar os trechos difíceis, juntar e gravar.',
      text: [
        'O jeito mais comum de aprender uma música é cantar junto com a gravação até "ir saindo". Funciona no karaokê, mas esconde problemas: você copia o tom, as respirações e os vícios de quem gravou, e nunca sabe se consegue cantar a música sem a gravação por baixo. Um método simples economiza semanas e poupa a voz.',
        'A ordem é esta. Primeiro, ouça muitas vezes com atenção, fazendo um mapa: introdução, verso, refrão, ponte, onde a música sobe, onde a voz respira. Depois, fale a letra no ritmo, sem melodia, até sair sem olhar. Em seguida, cante a melodia só em "lá", sem a letra, para firmar as notas sem a dificuldade das palavras. Só então junte letra e melodia.',
        'O tom da gravação foi escolhido para a voz de quem gravou, não para a sua. Use a ferramenta "Tom certo para a música" na aba Voz: ela compara a extensão da música com a sua e sugere um tom. Mudar o tom não é trapaça, é o que todo profissional faz. Música no tom errado é a principal causa de grito e de desafinação em quem está começando.',
        'Depois, isole os trechos difíceis. Quase sempre são dois ou três: uma nota alta, uma passagem rápida, uma frase longa demais. Treine cada um separado, devagar, primeiro em vogal e depois com a letra, e só então devolva o trecho para o meio da música, cantando junto a frase de antes e a de depois, porque é na emenda que costuma falhar. Por fim, cante a música inteira, grave e ouça.'
      ],
      steps: [
        'Escolha uma música que você quer cantar e faça o "Ouvir com mapa": três audições atentas, com papel e caneta.',
        'Faça o "Letra falada no ritmo" junto com a gravação até conseguir sem olhar a letra.',
        'Treine o "Melodia em lá" do app para pegar o jeito de aprender notas sem palavras, e faça o mesmo com a sua música.',
        'Use a ferramenta "Tom certo para a música" na aba Voz e procure uma versão instrumental ou um playback no seu tom.',
        'Faça o "Trecho difícil devagar" e aplique a mesma ideia aos trechos difíceis da sua música: lento, limpo e depois acelerando.',
        'Junte tudo, cante a música inteira e grave. Ouça no dia seguinte.'
      ],
      mistakes: [
        'Cantar junto com a gravação original o tempo todo. Correção: use a gravação para ouvir e para conferir, mas treine com playback ou só com um instrumento. Se a voz da gravação cobre a sua, você não está se ouvindo.',
        'Começar pela letra e pela emoção sem saber as notas. Correção: melodia em "lá" primeiro. Com as notas firmes, sobra atenção para o texto.',
        'Cantar a música inteira várias vezes seguidas. Correção: repetir a música inteira repete os erros. Gaste o tempo nos trechos difíceis e cante inteira só no fim.'
      ],
      tips: [
        'Muitos aplicativos e sites de playback permitem mudar o tom da música. Procure versões instrumentais ou de karaokê no tom sugerido.',
        'Escreva a letra à mão: ajuda a memorizar e vira o lugar para marcar respirações e palavras-chave.',
        'Uma música bem estudada em uma ou duas semanas vale mais do que dez músicas mais ou menos.'
      ],
      ex: [
        { id: 'interp-1a', name: 'Ouvir com mapa', desc: 'Ouça a música escolhida três vezes, com papel e caneta, e anote as partes (verso, refrão, ponte), onde a voz respira e qual é o trecho mais agudo.', syl: 'ouvir e anotar (sem cantar)', mode: 'livre', goal: { m: 'rep', v: 3 } },
        { id: 'interp-1b', name: 'Letra falada no ritmo', desc: 'Fale a letra junto com a gravação, no ritmo exato e sem melodia, até conseguir do começo ao fim sem olhar.', syl: 'letra falada no ritmo', mode: 'livre', goal: { m: 'rep', v: 4 } },
        { id: 'interp-1c', name: 'Melodia em "lá"', desc: 'Uma melodia nova: ouça, repita em "lá" e veja no resultado quais notas ainda não estão firmes.', syl: 'lá', mode: 'eco', mel: '5, 1 2 3:2 3 2 1 2:2 r:1 5, 1 2 3:2 5 4 3 2 1:3', bpm: 88, zone: 'mid', dir: 'up', steps: 4, goal: { m: 'afin', v: 75 } },
        { id: 'interp-1d', name: 'Trecho difícil devagar', desc: 'Um trecho com salto e notas rápidas: comece lento e só acelere quando sair limpo e afinado.', syl: 'lá', mode: 'junto', mel: '1 3 5 8:2 7:0.5 6:0.5 5:0.5 4:0.5 3:0.5 2:0.5 1:2', bpm: 60, zone: 'mid', dir: 'up', steps: 4, goal: { m: 'bpm', v: 96 } }
      ]
    },
    {
      id: 'interp-2',
      name: 'Texto e emoção',
      level: 2,
      goal: 'Entender a história da música, dizer a letra com intenção e destacar as palavras-chave sem deixar a emoção travar a garganta.',
      text: [
        'As pessoas não lembram das notas; lembram do que sentiram ouvindo você. Uma música é um texto com melodia: alguém dizendo algo para alguém. A técnica existe para entregar esse texto. Uma voz perfeita sem intenção soa vazia, e uma voz simples que quer dizer cada palavra emociona.',
        'Comece entendendo a história. Quem está cantando? Para quem? Onde? O que aconteceu antes de a música começar? O que essa pessoa quer: pedir perdão, convencer, se despedir, comemorar? Escreva as respostas em três linhas. A mesma frase "eu te amo" é uma coisa num pedido de casamento e outra numa despedida no aeroporto.',
        'Em cada frase existe uma palavra-chave, a que carrega o sentido. Dê a ela um pouco mais: um pouco mais de duração, uma consoante mais clara, um pouco mais de volume ou, ao contrário, uma cor mais íntima e baixa. Não destaque tudo, porque se tudo é importante nada é. Fale a letra em voz alta como quem conta a história para alguém de confiança e repare onde a sua fala põe o peso naturalmente.',
        'Emoção não é aperto. Quando a emoção toma conta a ponto do choro, a garganta fecha e a voz falha. Atores trabalham com a intenção, isto é, com o que o personagem quer, e não tentam sentir a emoção à força; faça o mesmo. A emoção aparece no rosto, na cor da voz e no jeito de dizer, enquanto a garganta continua solta. Ensaie bastante as músicas que mexem com você até conseguir cantá-las inteiras.'
      ],
      steps: [
        'Escolha a música que você está estudando e escreva a história em três linhas: quem canta, para quem e o que quer.',
        'Faça "Uma frase, cinco intenções" com uma frase dessa música.',
        'Marque na letra uma palavra-chave por frase. Fale a letra inteira destacando só essas palavras.',
        'Cante "Olha pra mim" destacando a cada repetição uma palavra diferente, e depois a versão em tom menor.',
        'Cante a sua música com a história na cabeça e grave. Ouça: dá para entender o que a pessoa da música quer?'
      ],
      mistakes: [
        'Fazer cara de emoção sem intenção. Correção: pense no que você quer da pessoa para quem canta. O rosto e a voz acompanham.',
        'Destacar todas as palavras. Correção: uma palavra-chave por frase. O contraste é o que faz ela aparecer.',
        'Deixar a emoção fechar a garganta. Correção: ensaie a música muitas vezes até a emoção estar na interpretação, e não no pescoço. Se a voz tremer, faça uma respiração longa e lenta antes de seguir.'
      ],
      tips: [
        'Leia a letra em voz alta como um poema antes de cantar. Aparece muita coisa que você nunca tinha percebido.',
        'Cante para uma pessoa imaginária, sempre a mesma, num lugar específico. A voz muda quando existe alguém do outro lado.',
        'Compare duas gravações diferentes da mesma música: você vai ouvir como a intenção muda tudo, mesmo com as mesmas notas.'
      ],
      listen: [
        'Atrás da Porta — Elis Regina (interpretação teatral, cada palavra com intenção)',
        'Codinome Beija-Flor — Cazuza (palavras ditas como um segredo, sem exagero vocal)'
      ],
      ex: [
        { id: 'interp-2a', name: 'Uma frase, cinco intenções', desc: 'Fale a mesma frase da sua música cinco vezes: como um segredo, um pedido, uma bronca, uma lembrança feliz e uma despedida.', syl: 'frase da sua música (falada)', mode: 'livre', goal: { m: 'rep', v: 5 } },
        { id: 'interp-2b', name: 'A história em três linhas', desc: 'Escreva quem canta, para quem e o que quer na música que você está estudando; depois fale a letra inteira com essa história na cabeça.', syl: 'letra falada com intenção', mode: 'livre', goal: { m: 'rep', v: 3 } },
        { id: 'interp-2c', name: 'Olha pra mim', desc: 'Cante "olha pra mim, fica comigo" destacando a cada repetição uma palavra diferente (olha, mim, comigo) e escolha a que conta melhor a história.', syl: 'olha pra mim, fica comigo', mode: 'junto', mel: '5 3:0.5 4:0.5 5:2 6 5:0.5 4:0.5 3 1:2', lyr: 'o lha pra mim fi ca co mi go', bpm: 76, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 75 } },
        { id: 'interp-2d', name: 'Olha pra mim em menor', desc: 'A mesma frase em tom menor: a cor fica mais escura e íntima, e a intenção muda junto, sem perder a afinação.', syl: 'olha pra mim, fica comigo', mode: 'junto', minor: true, mel: '5 3:0.5 4:0.5 5:2 6 5:0.5 4:0.5 3 1:2', lyr: 'o lha pra mim fi ca co mi go', bpm: 72, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 75 } }
      ]
    },
    {
      id: 'interp-3',
      name: 'Técnica de microfone',
      level: 2,
      goal: 'Usar a distância e o ângulo do microfone a favor da voz: perto nas partes suaves e graves, mais longe nas notas fortes e agudas.',
      text: [
        'O microfone é parte do instrumento. A maioria dos microfones de voz para palco é dinâmica e direcional: capta bem o que está na frente e pouco o que está atrás. Eles precisam de proximidade, cerca de dois a quatro dedos da boca para o canto normal. Longe demais, a voz some, o técnico de som aumenta o volume e aparece a microfonia, aquele apito agudo.',
        'Aponte o microfone para a boca, com a cabeça dele alinhada com os lábios. Um pequeno ângulo, vindo de baixo do queixo ou levemente de lado, diminui os estouros das consoantes "p" e "b", chamados de plosivas. Segure pelo corpo do microfone, com firmeza e com o cotovelo solto. Não abrace a grade (o globo) com a mão: o som fica abafado e a microfonia aparece com mais facilidade.',
        'A distância é o seu controle de volume. Nas notas fortes e agudas, afaste o microfone até um palmo para o som não estourar na caixa; nas partes suaves e graves, chegue perto. Cantores experientes fazem isso o tempo todo, e a plateia ouve uma voz equilibrada do começo ao fim. Esse movimento precisa ser treinado até virar automático.',
        'Microfones direcionais têm o efeito de proximidade: quanto mais perto da boca, mais graves eles captam. É por isso que locutores de rádio soam tão encorpados. Para quem tem voz grave, isso é um presente: nos trechos suaves e graves, chegue perto e a voz fica quente e presente sem nenhum esforço. Só não fique colado o tempo todo, porque o som embola e as palavras perdem a clareza.',
        'No palco, a caixa de retorno ou o fone de retorno serve para você se ouvir. Sem se ouvir, você empurra a voz sem perceber; peça ao técnico mais da sua voz no retorno antes de começar. E nunca aponte o microfone para uma caixa de som, que é o caminho mais curto para a microfonia.'
      ],
      steps: [
        'Faça o "Três distâncias" com o celular gravando, como se fosse um microfone, e compare o som.',
        'Treine a pegada: segure pelo corpo, aponte para a boca, cotovelo solto. Fale "papai pediu pipoca" de frente e depois com o microfone levemente inclinado, e ouça os estouros diminuírem.',
        'No "Afastar no forte", movimente a mão durante a frase: perto no começo suave, até um palmo de distância na nota alta e forte.',
        'No "Grave perto do microfone", cante suave a dois dedos de distância e repare como o efeito de proximidade encorpa o som.',
        'Se tiver acesso a um microfone de verdade ligado numa caixa, mesmo simples, repita tudo nele.'
      ],
      mistakes: [
        'Segurar o microfone longe por timidez. Correção: chegue perto, a dois a quatro dedos. Longe, a voz some e você acaba empurrando a voz para ela aparecer.',
        'Abraçar o globo do microfone. Correção: segure pelo corpo. A mão na grade abafa o som e provoca microfonia.',
        'Ficar sempre na mesma distância. Correção: a distância acompanha a música. Notas fortes pedem um pouco de distância; notas suaves pedem proximidade.'
      ],
      tips: [
        'Gravar com o celular segue a mesma lógica: um palmo de distância costuma ser um bom começo, um pouco mais longe nas partes fortes.',
        'Grave o mesmo trecho com e sem o movimento de afastar e compare. A diferença costuma convencer na hora.',
        'Antes de cantar num lugar novo, teste o microfone falando e cantando um trecho forte e um trecho suave.'
      ],
      listen: [
        'Ainda Bem — Marisa Monte (voz suave e próxima do microfone, cheia de detalhes)'
      ],
      ex: [
        { id: 'interp-3a', name: 'Três distâncias', desc: 'Grave a mesma frase três vezes, com o celular ou o microfone encostado na boca, a quatro dedos e a um palmo, e compare o grave, a clareza e o volume.', syl: 'uma frase da sua música', mode: 'livre', goal: { m: 'rep', v: 3 } },
        { id: 'interp-3b', name: 'Afastar no forte', desc: 'Segure o microfone (ou o celular, como se fosse um) perto no começo suave, afaste até um palmo na nota alta e forte e volte a aproximar na descida.', syl: 'lá', mode: 'junto', mel: '1 2 3 5:2 6 8:3 r:1 8 6 5 3:2 2 1:3', bpm: 80, zone: 'mid', dir: 'up', steps: 4, goal: { m: 'afin', v: 75 } },
        { id: 'interp-3c', name: 'Grave perto do microfone', desc: 'Frase grave e suave a dois dedos do microfone: deixe o efeito de proximidade encorpar o som, sem empurrar o grave.', syl: 'lu', mode: 'junto', mel: '5 4 3 2 1:3 r:1 3 2 1 6, 5,:4', bpm: 72, zone: 'low', dir: 'up', steps: 4, goal: { m: 'afin', v: 75 } }
      ]
    },
    {
      id: 'interp-4',
      name: 'Gravar e se ouvir',
      level: 2,
      goal: 'Gravar uma vez por semana nas mesmas condições e avaliar a gravação com uma lista objetiva, escolhendo um ponto para melhorar.',
      text: [
        'Enquanto canta, você ouve a própria voz também por dentro, pelos ossos da cabeça, e isso faz ela parecer mais grave e mais cheia do que é. Por isso a primeira gravação costuma ser um susto. A gravação é o jeito como os outros ouvem você, e se acostumar com ela faz parte do treino. Com o tempo, o estranhamento passa e ela vira uma ferramenta.',
        'Grave uma vez por semana nas mesmas condições: a mesma música (ou o mesmo trecho), o mesmo lugar, o celular na mesma posição e distância, de preferência no mesmo horário. Assim a comparação é justa. Guarde os arquivos com a data no nome. Depois de dois meses, ouça a primeira e a última gravação em seguida; a diferença costuma surpreender.',
        'Ouça com uma lista, e não com "gostei" ou "não gostei". Dê uma nota de 1 a 5 para cada item: afinação nas notas longas e nos finais de frase; ritmo e entradas; respiração no lugar planejado e sem barulho; dicção (dá para entender sem ler a letra?); som (grito, aperto ou ar demais?); fraseado (as frases vão para algum lugar e terminam?); interpretação (dá vontade de continuar ouvindo?). No fim, escolha um único item para trabalhar na semana seguinte.',
        'Ouça no dia seguinte, com fone de ouvido e com o ouvido descansado. Descreva o que ouviu como um treinador descreveria, por exemplo "a nota longa do refrão caiu no final", e não como quem dá uma sentença ("sou horrível"). A gravação dá informação, não veredito. Compare também com a gravação original da música, mas só para entender o estilo, e não para virar cópia.'
      ],
      steps: [
        'Escolha a música da semana. Defina o lugar e a posição do celular e anote, para repetir sempre igual.',
        'Faça a "Gravação da semana": aqueça, cante a "Frase de referência" e a música uma vez inteira, sem parar.',
        'No dia seguinte, faça o "Ouvir com a lista", dando notas de 1 a 5 para cada item.',
        'Escolha um item para a próxima semana e diga em uma frase o que vai fazer, por exemplo "respirar antes da frase do refrão".',
        'A cada quatro semanas, ouça a primeira gravação e a mais recente em seguida.'
      ],
      mistakes: [
        'Gravar várias vezes até sair perfeito e só guardar a melhor. Correção: a gravação da semana é a primeira tentativa inteira, como num show. Ela mostra onde você está de verdade.',
        'Ouvir só com a emoção. Correção: use a lista e dê notas. Fica mais fácil ver o progresso e mais difícil se perder em autocrítica.',
        'Querer corrigir tudo de uma vez. Correção: um item por semana. Pequenas correções acumuladas fazem a diferença.'
      ],
      tips: [
        'O traço do microfone deste app e a gravação se completam: o traço mostra a afinação, a gravação mostra todo o resto.',
        'Peça a alguém de confiança para ouvir com a mesma lista. Um ouvido de fora percebe coisas que você não percebe.',
        'Uma pasta no celular só para as gravações de canto, com a data no nome dos arquivos, já resolve a organização.'
      ],
      ex: [
        { id: 'interp-4a', name: 'Gravação da semana', desc: 'Uma vez por semana, no mesmo lugar e com o celular na mesma posição, aqueça e grave a frase de referência e a sua música inteira, sem parar.', syl: 'sua música inteira', mode: 'livre', goal: { m: 'rep', v: 4 } },
        { id: 'interp-4b', name: 'Ouvir com a lista', desc: 'Ouça a gravação no dia seguinte, com fone, e dê notas de 1 a 5 para afinação, ritmo, respiração, dicção, som, fraseado e interpretação; depois escolha um item para a semana.', syl: 'ouvir e avaliar (sem cantar)', mode: 'livre', goal: { m: 'rep', v: 4 } },
        { id: 'interp-4c', name: 'Frase de referência', desc: 'Uma frase fixa cantada só com o acorde inicial, sempre no mesmo tom, para gravar toda semana e comparar a evolução.', syl: 'lá', mode: 'junto', solo: true, mel: '1 3 5 6 5:2 3 4 2:2 r:1 5 4 3 2 1:4', bpm: 84, zone: 'mid', dir: 'stay', steps: 3, goal: { m: 'afin', v: 80 } }
      ]
    },
    {
      id: 'interp-5',
      name: 'Ansiedade de palco e preparação',
      level: 3,
      goal: 'Ter uma rotina antes de cantar, usar a respiração para acalmar o corpo e manter o foco na música, e não no medo.',
      text: [
        'O nervosismo antes de cantar é normal e acontece até com profissionais com décadas de palco. O corpo entende a situação como um perigo e solta adrenalina: o coração acelera, a boca seca, as pernas tremem, a respiração fica curta e alta, e a voz pode tremer. O objetivo não é eliminar o nervosismo, e sim cantar bem com ele e usar essa energia a seu favor.',
        'A respiração é o freio mais direto que existe. Soltar o ar mais devagar do que ele entra acalma o corpo: inspire pelo nariz em 4 segundos e solte pela boca em 6 a 8, devagar, como num "fff" suave. Alguns minutos disso antes de entrar baixam o ritmo do coração e soltam os ombros. Funciona melhor quando você treina todos os dias, e não só no dia da apresentação.',
        'Preparação tira metade do medo. Saiba a música tão bem que ela funcione no piloto automático: letra, tom, entrada e respirações. Ensaie muito a primeira frase, porque é nela que o nervosismo pega mais. Ensaie em pé, com microfone e na frente de pessoas: uma amizade, uma chamada de vídeo, a família no almoço de domingo. E tenha sempre a mesma rotina antes de cantar, para o corpo reconhecer o caminho.',
        'Na hora, a ansiedade puxa a atenção para dentro ("vão rir de mim"). Leve a atenção para fora: a história que você conta, a pessoa para quem canta, a banda, o ritmo. Se errar, siga em frente; a plateia quase nunca percebe um erro quando a música não para. Evite álcool para relaxar: ele resseca e piora a coordenação. Se a ansiedade for muito intensa ou atrapalhar outras áreas da vida, um psicólogo pode ajudar, e procurar essa ajuda é muito comum.'
      ],
      steps: [
        'Treine a "Respiração que acalma" todos os dias por uma semana, e não só antes de cantar.',
        'Monte a sua rotina com o exercício "Rotina antes de cantar" e repita sempre na mesma ordem.',
        'Faça a "Primeira frase sem ajuda": o piano dá só o acorde e você começa sem apoio, como num palco.',
        'Marque um "Ensaio com plateia" por semana, mesmo que seja para uma pessoa só.',
        'Depois de cada apresentação ou ensaio, anote uma coisa que funcionou e uma coisa para melhorar.'
      ],
      mistakes: [
        'Esperar o nervosismo passar para cantar. Correção: ele não passa antes; ele diminui cantando. Prepare-se e cante com ele.',
        'Parar a música depois de um erro. Correção: continue no tempo como se nada tivesse acontecido. Treine isso nos ensaios: errar e seguir.',
        'Ensaiar sempre numa cadeira e sem ninguém por perto. Correção: ensaie como vai ser: em pé, com microfone e com alguém olhando.'
      ],
      tips: [
        'Sapato confortável, garrafa de água e a letra de reserva por perto tiram preocupações bobas da cabeça.',
        'Abra com uma música que você domina e que fica no meio da sua voz. Começar bem acalma o resto da apresentação.',
        'Chegue cedo, faça o aquecimento e conheça o lugar e o microfone antes de cantar.'
      ],
      ex: [
        { id: 'interp-5a', name: 'Respiração que acalma', desc: 'Inspire pelo nariz em 4 segundos e solte bem devagar pela boca, num "fff" suave, em 8 segundos, com os ombros soltos.', syl: 'fff (sopro suave)', mode: 'livre', breath: [['Inspire pelo nariz, devagar', 4], ['Solte pela boca em "fff", bem devagar', 8]], cycles: 6, goal: { m: 'rep', v: 5 } },
        { id: 'interp-5b', name: 'Rotina antes de cantar', desc: 'Siga as fases da rotina na ordem, com calma: corpo, respiração, lábios, sirene e a primeira frase da música.', syl: 'rotina de corpo, ar e voz', mode: 'livre', breath: [['Solte ombros, pescoço e mandíbula com movimentos lentos', 45], ['Respire: 4 segundos para dentro, 8 para fora', 60], ['Vibre os lábios em "brr" subindo e descendo', 45], ['Sirene suave em "u", do grave ao agudo confortável', 45], ['Imagine a primeira frase da música por dentro', 20], ['Fale a primeira frase com intenção', 15]], cycles: 1, goal: { m: 'rep', v: 5 } },
        { id: 'interp-5c', name: 'Primeira frase sem ajuda', desc: 'O piano dá só o acorde e você começa a frase sem apoio, firme no tom e no tempo, como no início de uma apresentação.', syl: 'lá', mode: 'junto', solo: true, mel: '1 2 3:2 5 3 2:2 r:1 3 4 5:2 6 5 3:2 r:1 2 3 1:4', bpm: 84, zone: 'mid', dir: 'up', steps: 4, goal: { m: 'afin', v: 80 } },
        { id: 'interp-5d', name: 'Ensaio com plateia', desc: 'Cante uma música inteira, em pé, para uma pessoa ou numa chamada de vídeo, do começo ao fim sem parar, mesmo se errar.', syl: 'sua música inteira', mode: 'livre', goal: { m: 'rep', v: 3 } }
      ]
    },
    {
      id: 'interp-6',
      name: 'Rotina profissional de canto',
      level: 3,
      goal: 'Montar uma rotina diária e semanal de estudo, manter um repertório pronto e cuidar da saúde vocal com acompanhamento profissional.',
      text: [
        'Voz profissional é constância, não talento em dia bom. Quem canta profissionalmente canta bem até em dias ruins porque tem uma rotina: aquece todos os dias, estuda técnica, cuida do repertório e descansa. A voz responde a doses regulares, como um treino físico, e não a maratonas. Meia hora concentrada todos os dias vale mais do que três horas no domingo.',
        'O dia de estudo tem uma ordem: aquecimento de 10 a 15 minutos (lábios vibrando, canudo, "mmm", sirenes e escalas no meio da voz), depois a técnica do dia, depois o repertório e, no fim, um desaquecimento suave, com sons descendo de boca fechada. Beba água ao longo do dia, e não só na hora de cantar. Se a voz estiver cansada, faça só o aquecimento e um repertório leve.',
        'Na semana, alterne os focos. Um exemplo: dois dias de técnica e extensão, dois dias de repertório, um dia de ritmo e estilo, um dia de gravar e se ouvir e um dia de descanso vocal, falando pouco e sem cantar. Mantenha um repertório pronto, com músicas no seu tom, letra decorada e mapa de respirações, separadas por estilo e por energia. Acrescente uma música nova por vez sem abandonar as que já estão prontas.',
        'O app ajuda muito, mas não vê o seu corpo e não ouve tudo o que um professor ouve na sala. Faça aulas presenciais de vez em quando, por exemplo uma vez por mês, para conferir a técnica, principalmente se você vai trabalhar com agudos fortes, belting ou drive. Um fonoaudiólogo especializado em voz avalia e orienta a saúde vocal, e quem canta profissionalmente costuma fazer esse acompanhamento de forma regular.',
        'Conheça os sinais de alerta: dor, ardor, rouquidão que dura mais de duas semanas, perda de notas que você alcançava ou cansaço vocal que não melhora com descanso. Nesses casos, pare de cantar e procure um otorrinolaringologista, o médico que examina as pregas vocais com uma câmera, além do fonoaudiólogo. Durma bem, evite gritar em lugares barulhentos e troque o pigarro por um gole de água ou por engolir a saliva.'
      ],
      steps: [
        'Faça o "Aquecimento de 10 minutos" todos os dias, antes de qualquer canto.',
        'Use a "Escala de nona" como termômetro da voz: se ela sai fácil, o dia pode ter mais técnica; se sai pesada, o dia pede repertório leve.',
        'Monte o seu plano semanal e a lista de repertório no exercício "Plano da semana e repertório" e revise toda semana.',
        'Termine todo dia de estudo com o "Desaquecimento".',
        'Agende uma aula presencial por mês e uma avaliação com fonoaudiólogo, principalmente se você pretende cantar com frequência ou profissionalmente.'
      ],
      mistakes: [
        'Estudar muito num dia e nada nos outros. Correção: doses diárias e menores. A voz e a coordenação se constroem com frequência, não com volume de horas.',
        'Cantar com a voz cansada ou rouca para "não perder o treino". Correção: voz cansada pede descanso. Um dia de repouso não apaga o progresso; uma lesão pode apagar meses.',
        'Achar que o app basta para sempre. Correção: o app dá a base e o treino diário; o professor presencial e o fonoaudiólogo ajustam o que a tela não mostra.'
      ],
      tips: [
        'Uma planilha ou um caderno com a semana, as músicas e as notas das gravações já é um diário de estudo de profissional.',
        'Repertório pronto é aquele que você canta mesmo se alguém te acordar no meio da noite. Teste isso de vez em quando.',
        'Pigarrear bate as pregas vocais uma contra a outra com força. Quando sentir vontade, engula ou tome um gole de água.'
      ],
      ex: [
        { id: 'interp-6a', name: 'Aquecimento de 10 minutos', desc: 'Siga as fases do aquecimento na ordem, sempre em volume confortável, antes de qualquer canto do dia.', syl: 'brr, u, mmm e lu', mode: 'livre', breath: [['Lábios vibrando em "brr", em sirenes suaves', 120], ['"U" ou canudo deslizando pela extensão confortável', 120], ['"Mmm" de boca fechada em escalas de cinco notas', 120], ['Escalas e arpejos em "lu" no meio da voz', 120], ['Uma frase da música do dia, devagar', 120]], cycles: 1, goal: { m: 'rep', v: 8 } },
        { id: 'interp-6b', name: 'Escala de nona', desc: 'Arpejo até a nona e descida em escala, ligada e afinada, subindo e descendo de tom.', syl: 'lu', mode: 'junto', mel: M.nona, bpm: 96, zone: 'mid', dir: 'updown', steps: 7, goal: { m: 'afin', v: 85 } },
        { id: 'interp-6c', name: 'Plano da semana e repertório', desc: 'Escreva o plano da semana (técnica, repertório, estilo, gravação e um dia de descanso) e a lista de músicas prontas no seu tom; no fim da semana, confira o que cumpriu e ajuste.', syl: 'planejar (sem cantar)', mode: 'livre', goal: { m: 'rep', v: 4 } },
        { id: 'interp-6d', name: 'Desaquecimento', desc: 'Escala descendo de boca fechada, bem suave, para a voz voltar ao tom de fala no fim do estudo.', syl: 'mmm (boca fechada, bem suave)', mode: 'junto', mel: M.cincoDesce, bpm: 66, zone: 'mid', dir: 'down', steps: 5, cool: true, goal: { m: 'afin', v: 75 } }
      ]
    }
  ]
};
