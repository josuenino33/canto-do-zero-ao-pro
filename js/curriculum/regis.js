import { M } from './helpers.js';

export default {
  id: 'regis',
  name: 'Registros: peito, cabeça e falsete',
  desc: 'Conhecer a voz de peito, o falsete e a voz de cabeça, quebrar de propósito entre eles e aprender a ligar os registros sem degrau.',
  lessons: [
    {
      id: 'regis-1',
      name: 'Registros e a voz de peito sem empurrar',
      level: 2,
      goal: 'Entender o que são os registros da voz e cantar na voz de peito sem empurrar ao subir.',
      text: [
        'A voz não funciona do mesmo jeito do grave ao agudo. Ela tem modos diferentes de vibrar, que os cantores chamam de registros. Na voz de peito, que é a voz da fala, as pregas vocais vibram mais grossas e se encostam bastante: o som é cheio e você sente o peito vibrar. No falsete, elas vibram finas e se encostam pouco: o som é leve e soproso. A voz de cabeça fica no meio do caminho, leve como o falsete, mas com mais corpo e brilho.',
        'Entre o peito e o falsete existe uma região de passagem, e é ali que muita gente sente a voz quebrar, como um soluço ou uma falha no som. Essa quebra é normal: acontece em vozes de todos os tipos e não é sinal de que você não tem jeito para cantar. É só a voz trocando de modo sem coordenação. A coordenação se treina, e é exatamente isso que os exercícios deste módulo fazem.',
        'Se hoje você só alcança os graves e sente que grita ao subir, o mais provável é que esteja levando a voz de peito para cima com força, sem deixar que ela fique mais fina e leve. O peito tem um limite natural, e passar dele empurrando dá a sensação de grito, aperta a garganta e tira a afinação. Por isso a primeira lição é sobre usar o peito bem, no lugar dele.',
        'Voz de peito sem empurrar soa como uma conversa animada, e não como uma briga. Quando a melodia sobe, o volume não precisa subir junto. Na verdade, deixar o volume diminuir um pouco nas notas mais altas é o que permite à voz começar a mudar de modo sem quebra e sem grito. Dor, ardor ou rouquidão são sinal para parar.'
      ],
      steps: [
        'Diga "mã, mã, mã" com voz de conversa e sinta o peito vibrar. Esse é o seu registro de peito.',
        'Em "Peito falado", repita em eco as três notas com a mesma leveza da fala.',
        'Em "Chamado sem grito", chame como quem acena para alguém do outro lado da rua, com volume médio.',
        'Na escala de cinco notas, suba de tom aos poucos. No tom em que a nota mais alta começar a pesar, diminua o volume em vez de empurrar.',
        'Anote em que tom a voz começa a pesar. Esse ponto é a sua região de passagem, que as próximas lições vão trabalhar.'
      ],
      mistakes: [
        'Aumentar o volume a cada nota mais alta. Correção: mantenha o volume igual, ou até um pouco menor, ao subir. Volume crescente é o caminho mais curto para o grito.',
        'Esticar o pescoço e levantar o queixo nas notas de cima. Correção: cabeça nivelada e queixo solto. Se precisar esticar, a nota está alta demais para a voz de peito hoje.',
        'Achar que voz de peito é voz forte. Correção: peito é o modo de vibrar, e não o volume. Dá para cantar em voz de peito bem baixinho.'
      ],
      tips: [
        'Ponha uma mão no peito e outra na frente do pescoço. O peito vibra; o pescoço fica macio, sem endurecer.',
        'Se a escala ficar pesada logo no começo da série, use o botão −½ e recomece mais grave.'
      ],
      listen: [
        'Ainda Bem — Marisa Monte (voz de peito leve e próxima da fala)',
        'Fico Assim Sem Você — Adriana Calcanhotto (voz de peito simples, quase falada, sem nenhum empurrão)'
      ],
      ex: [
        { id: 'regis-1a', name: 'Peito falado', desc: 'Repita três notas em "mã" com a leveza e o som da fala.', syl: 'mã', mode: 'eco', mel: M.tres, bpm: 80, zone: 'low', dir: 'up', steps: 6, goal: { m: 'afin', v: 70 } },
        { id: 'regis-1b', name: 'Chamado sem grito', desc: 'Repita um chamado alegre em "ei", como quem acena para alguém, em volume médio.', syl: 'ei', mode: 'eco', mel: '1 3 5:2 3 1:2', bpm: 80, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 70 } },
        { id: 'regis-1c', name: 'Peito até o meio', desc: 'Cante a escala de cinco notas subindo de tom e, quando pesar, diminua o volume em vez de empurrar.', syl: 'nê', mode: 'junto', mel: M.cinco, bpm: 88, zone: 'mid', dir: 'up', steps: 6, goal: { m: 'afin', v: 70 } }
      ]
    },
    {
      id: 'regis-2',
      name: 'Explorar o falsete',
      level: 2,
      goal: 'Encontrar o falsete com sons leves e brincalhões e descobrir que existem notas agudas na sua voz.',
      text: [
        'Para quem acha que só tem voz grave, esta lição costuma ser uma surpresa. O falsete existe em praticamente todas as vozes e alcança notas bem acima das que a voz de peito alcança. Ele não é uma voz "falsa" nem exclusiva de um tipo de cantor: é um modo leve de vibrar, usado como recurso no soul, no pop, no R&B e em muitos outros estilos.',
        'O jeito mais fácil de achar o falsete é brincando. Faça uma voz de fantasminha, um "uuu" leve e agudo como nos desenhos animados. Imite uma coruja com um "ui" curto e agudo. Ou faça o som de quem vê um filhote fofo, aquele "óóó" agudo e suave. Nenhum desses sons exige força, e é justamente por isso que eles funcionam.',
        'O falsete costuma soar soproso e fraco no começo, e isso é esperado. Não tente deixá-lo forte agora. O objetivo é só descobrir que ele está lá e se acostumar com a sensação de cantar agudo sem esforço. Se a voz falhar, chiar ou sair só ar, tudo bem: continue leve e com pouco volume, e o som vai firmando com o tempo.',
        'Repare onde você sente a voz no falsete: geralmente na cabeça, atrás dos olhos ou no alto do rosto, e quase nada no peito. Essa troca de sensação é normal e mostra que a voz mudou de registro. Se a garganta apertar ou arranhar, pare e recomece mais baixo. Dor, ardor ou rouquidão são sinal para parar.'
      ],
      steps: [
        'Antes de abrir o exercício, faça a voz de fantasminha algumas vezes, bem leve e brincalhona.',
        'Em "Fantasminha", deslize de cima para baixo em "uuu", com pouco volume, deixando a voz flutuar.',
        'Em "Coruja", repita os "u-i" curtos e leves, sem empurrar ar.',
        'Na "Sirene leve até o alto", suba e desça em "u" enquanto a escada passa do seu agudo confortável. Leveza é a regra.',
        'Feche com "Melodia em falsete" e perceba que dá para cantar afinado nessa voz leve.'
      ],
      mistakes: [
        'Tentar fazer o falsete forte. Correção: falsete é leve. Volume baixo e som de brincadeira; a força vem muito depois, e por outro caminho.',
        'Empurrar a voz de peito para cima achando que é falsete. Correção: se o peito vibra forte e a garganta aperta, ainda é peito. Volte ao som de fantasminha e comece pela nota de cima.',
        'Desistir porque o som sai soproso. Correção: falsete soproso é o começo normal. O ar diminui com a prática, sem você forçar nada.'
      ],
      tips: [
        'Comece o falsete sempre de cima para baixo. Descer no falsete é bem mais fácil do que subir nele.',
        'Se o falsete não aparecer, boceje e solte um "uuu" agudo no fim do bocejo.',
        'Grave e ouça. Muita gente se surpreende com a altura que a própria voz alcança.'
      ],
      listen: [
        "Stayin' Alive — Bee Gees (falsete leve e brilhante do começo ao fim)",
        'Kiss — Prince (o falsete agudo e leve nas estrofes)'
      ],
      ex: [
        { id: 'regis-2a', name: 'Fantasminha', desc: 'Deslize de cima para baixo em "uuu", leve e com pouco volume, como uma voz de fantasminha.', syl: 'uuu (fantasminha)', mode: 'junto', mel: '5~1:3 1:1', bpm: 70, zone: 'high', dir: 'up', steps: 5, goal: { m: 'afin', v: 65 } },
        { id: 'regis-2b', name: 'Coruja', desc: 'Repita pares curtos de "u-i" no agudo, leves como o pio de uma coruja.', syl: 'u-i (coruja)', mode: 'eco', mel: '5:0.5 3:1.5 r:1 5:0.5 3:1.5', lyr: 'u i u i', bpm: 76, zone: 'high', dir: 'up', steps: 5, goal: { m: 'afin', v: 65 } },
        { id: 'regis-2c', name: 'Sirene leve até o alto', desc: 'Faça a sirene de oitava em "u", leve, enquanto a escada passa um pouco do seu agudo confortável.', syl: 'u', mode: 'junto', mel: M.sirene8, bpm: 70, zone: 'top', dir: 'up', steps: 6, goal: { m: 'top', v: 3 } },
        { id: 'regis-2d', name: 'Melodia em falsete', desc: 'Repita cinco notas descendo em falsete, leves e afinadas.', syl: 'u', mode: 'eco', mel: M.cincoDesce, bpm: 80, zone: 'high', dir: 'up', steps: 5, goal: { m: 'afin', v: 65 } }
      ]
    },
    {
      id: 'regis-3',
      name: 'Do falsete à voz de cabeça',
      level: 2,
      goal: 'Dar corpo e brilho ao falsete, transformando o som soproso numa voz de cabeça leve e clara.',
      text: [
        'O falsete e a voz de cabeça moram na mesma região e são parecidos: os dois são leves, e você sente o som mais na cabeça do que no peito. A diferença está no ar e no brilho. No falsete, as pregas vocais deixam passar bastante ar e o som fica soproso. Na voz de cabeça, elas se encostam um pouco mais, o ar sobrando diminui e o som ganha foco, brilho e corpo, sem ficar pesado.',
        'O caminho do falsete para a voz de cabeça passa por sons que ajudam a voz a se fechar sem força. O "ng" (como no fim de "ping-pong", com a parte de trás da língua tocando o céu da boca e o som saindo pelo nariz) e o "n" deixam a voz focada. O "nhé" e o "mi" trazem brilho. A ideia é sempre a mesma: manter a leveza do falsete e tirar o ar que sobra.',
        'Um bom teste é o som de manha, um "nhééé" agudo e pequeno, como o de uma criança pedindo alguma coisa. Ele costuma sair na voz de cabeça logo de cara, com brilho e quase sem ar. Para muita gente com voz grave, esse é o primeiro agudo com som de verdade, e não só sopro. Só não confunda brilho com aperto: a voz de cabeça é clara, mas a garganta continua solta.',
        'Nesta lição o volume continua baixo a médio. A voz de cabeça ganha força com o tempo, conforme a coordenação melhora; tentar ganhar força agora só faz a voz voltar a empurrar o peito para cima. Se arranhar, doer ou deixar a voz rouca, pare e volte para o falsete leve.'
      ],
      steps: [
        'Comece com "Ng de cima para baixo". Sinta o som saindo pelo nariz, focado e sem ar sobrando.',
        'Em "Do fantasminha ao foco", cante a mesma nota primeiro em "u" soproso e depois em "nu" mais claro.',
        'Em "Nhé de manha", repita em eco as notas com brilho, sem empurrar.',
        'Na "Escala de cabeça", em "mi", mantenha o brilho do começo ao fim, em volume baixo.',
        'Compare a gravação do falsete da lição anterior com a desta. A voz de cabeça soa mais clara e menos soprada.'
      ],
      mistakes: [
        'Trocar ar por aperto. Correção: tirar o ar sobrando não é fechar a garganta. Se o som ficar estrangulado, volte ao "ng" e diminua o volume.',
        'Voltar para o peito sem perceber. Correção: se o peito começa a vibrar forte e o som engrossa, você saiu da voz de cabeça. Comece a frase pela nota mais alta e mais leve.',
        'Fazer o "nhé" com a boca muito esticada. Correção: boca solta, sem sorriso forçado. O brilho vem do som, e não do rosto.'
      ],
      tips: [
        'Pense em "pequeno e brilhante", e não em "grande e forte". Na voz de cabeça, menos esforço dá mais resultado.',
        'Faça esta lição com a voz descansada. Cansaço faz a voz voltar para o peito e para o aperto.'
      ],
      listen: [
        'Wuthering Heights — Kate Bush (voz de cabeça aguda e brilhante do começo ao fim)',
        'Happy — Pharrell Williams (voz aguda leve, com brilho e sem esforço)'
      ],
      ex: [
        { id: 'regis-3a', name: 'Ng de cima para baixo', desc: 'Deslize em "ng" da quinta até a terça e segure, com o som focado saindo pelo nariz.', syl: 'ng', mode: 'junto', mel: '5~3:2 3:2', bpm: 66, zone: 'high', dir: 'down', steps: 5, goal: { m: 'afin', v: 70 } },
        { id: 'regis-3b', name: 'Do fantasminha ao foco', desc: 'Cante a mesma nota duas vezes, primeiro em "u" soproso e depois em "nu" claro e focado.', syl: 'u, depois nu', mode: 'junto', mel: '1:2 1:2', lyr: 'u nu', bpm: 66, zone: 'high', dir: 'up', steps: 5, goal: { m: 'afin', v: 70 } },
        { id: 'regis-3c', name: 'Nhé de manha', desc: 'Repita cinco notas curtas em "nhé", com brilho e sem empurrar.', syl: 'nhé', mode: 'eco', mel: '5 3 4 2 1:2', bpm: 80, zone: 'high', dir: 'up', steps: 5, goal: { m: 'afin', v: 70 } },
        { id: 'regis-3d', name: 'Escala de cabeça', desc: 'Cante a escala de cinco notas em "mi", leve e brilhante do começo ao fim.', syl: 'mi', mode: 'junto', mel: M.cinco, bpm: 88, zone: 'high', dir: 'up', steps: 5, goal: { m: 'afin', v: 70 } }
      ]
    },
    {
      id: 'regis-4',
      name: 'A quebra de propósito',
      level: 2,
      goal: 'Passar de propósito do peito para o falsete e de volta, o iodelei, para conhecer os dois lados da quebra.',
      text: [
        'Normalmente a gente tenta esconder a quebra da voz. Nesta lição você vai fazer o contrário: quebrar de propósito. O iodelei, o canto típico dos Alpes e de parte da música country, é exatamente isso: a voz salta do peito para o falsete e volta, com a quebra bem audível. Fazer a quebra de propósito ensina você a controlar onde e como ela acontece.',
        'O exercício é simples: um "ô" mais grave na voz de peito e um "ú" mais agudo no falsete, alternando. O "ô" é cheio, como na fala. O "ú" é leve, como o fantasminha. Entre os dois a voz dá um pequeno estalo, e esse estalo é o objetivo: ele mostra que você consegue escolher o registro, em vez de a quebra pegar você de surpresa.',
        'Conhecer os dois lados da quebra é muito útil para quem sente que só tem graves. Muitas vezes a pessoa nunca deixou a voz passar para o falsete porque, assim que sentia a quebra chegando, empurrava mais o peito. Ao fazer o iodelei, você percebe que a quebra não é perigosa nem feia; é só uma porta entre dois cômodos da mesma casa.',
        'Faça tudo em volume médio para baixo. Quanto mais forte o "ô", maior e mais brusco fica o salto para o "ú". O ideal é um "ô" confortável e um "ú" leve, com a passagem clara, mas sem violência. Se a garganta arranhar, pare e descanse.'
      ],
      steps: [
        'Antes do exercício, faça "ô-ú" livremente algumas vezes, numa altura confortável, até ouvir o estalo.',
        'Em "Ô-ú em quinta", alterne as duas notas: peito embaixo, falsete em cima.',
        'Em "Ô-ú em sexta", o salto é maior. Deixe o "ú" leve e solto, sem tentar alcançá-lo com o peito.',
        'Em "Achar a quebra", deslize devagar em "ô" de baixo para cima e deixe a voz virar "u" quando ela quiser. Repare em que altura isso acontece.',
        'Compare o lugar da quebra em dias diferentes. Ele muda um pouco com o cansaço e com o aquecimento.'
      ],
      mistakes: [
        'Levar o peito até a nota de cima. Correção: a nota de cima é falsete, leve como um fantasminha. Se ela saiu pesada e alta, diminua o volume do "ô" também.',
        'Fazer o salto sem quebra, escorregando. Correção: nesta lição a quebra é bem-vinda. Deixe a voz trocar de uma vez, com um estalo limpo.',
        'Cantar forte para garantir o estalo. Correção: a quebra aparece com leveza. Volume alto deixa o salto brusco e cansa a garganta.'
      ],
      tips: [
        'Pense no "ú" como se ele já estivesse lá em cima esperando, e não como algo a ser alcançado.',
        'Brinque com o iodelei fora do treino. Quanto mais divertido, mais solta a voz fica.'
      ],
      listen: [
        'Lovesick Blues — Hank Williams (as quebras de iodelei entre o peito e o falsete)',
        'Blue Yodel No. 1 (T for Texas) — Jimmie Rodgers (o iodelei no fim das frases)'
      ],
      ex: [
        { id: 'regis-4a', name: 'Ô-ú em quinta', desc: 'Alterne "ô" no peito e "ú" no falsete num salto de quinta, deixando a voz estalar.', syl: 'ô-ú', mode: 'junto', mel: '1 5 1 5 1:2', lyr: 'ô ú ô ú ô', bpm: 76, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 65 } },
        { id: 'regis-4b', name: 'Ô-ú em sexta', desc: 'O mesmo iodelei num salto de sexta, com o "ú" leve lá em cima.', syl: 'ô-ú', mode: 'junto', mel: '1 6 1 6 1:2', lyr: 'ô ú ô ú ô', bpm: 76, zone: 'high', dir: 'up', steps: 5, goal: { m: 'afin', v: 65 } },
        { id: 'regis-4c', name: 'Achar a quebra', desc: 'Deslize devagar em "ô" de baixo para cima e deixe a voz virar "u" no ponto em que ela quiser.', syl: 'ô, virando u no alto', mode: 'junto', mel: '1~8:4 8:2', bpm: 60, zone: 'mid', dir: 'up', steps: 4, goal: { m: 'afin', v: 60 } }
      ]
    },
    {
      id: 'regis-5',
      name: 'Da cabeça para o peito sem quebrar',
      level: 2,
      goal: 'Descer da voz leve para a voz de peito num deslize contínuo, sem estalo e sem trocar de peso de repente.',
      text: [
        'Depois de conhecer a quebra, é hora de aprender a passar por ela sem degrau. O jeito mais fácil é descendo. Quando você começa leve, na voz de cabeça, e desliza para o grave, a voz vai ganhando corpo aos poucos, como uma luz que acende num botão giratório, e não num interruptor. Subindo é mais difícil, porque a tendência é levar o peso do peito junto.',
        'O segredo é não decidir a troca. Na lição anterior você trocou de registro de uma vez, de propósito. Agora você deixa a voz se ajustar enquanto mantém três coisas constantes: o volume baixo, o ar contínuo e a vogal. Se o volume cresce no grave, a voz troca de repente e estala. Se o volume fica igual, a mudança acontece aos poucos.',
        'Sons semiocluídos, como "u", "ng" e a vibração de lábios ("brrr"), ajudam muito aqui. Eles deixam a saída do som parcialmente fechada, o que equilibra a pressão do ar e facilita a passagem. Comece com eles e só depois passe para vogais abertas. Se o estalo aparecer, tudo bem: repita mais leve, mais devagar e com menos volume.',
        'Este treino também é uma das melhores formas de aumentar a extensão para cima sem grito. Quando a passagem fica lisa descendo, ela começa a ficar lisa subindo também. Respeite o cansaço: se a voz ficar áspera ou a garganta arranhar, pare. Dor, ardor ou rouquidão são sinal para parar.'
      ],
      steps: [
        'Comece com o "Suspiro de cima" em "u": parta de uma nota alta e leve e deslize até embaixo sem cortar o som.',
        'Na "Sirene descendente em ng", repare no ponto em que a voz quer estalar e diminua o volume ali.',
        'Em "Escala descendo leve", repita as oito notas começando bem leve e deixe o corpo do som aparecer sozinho no grave.',
        'Feche com a "Sirene completa" em vibração de lábios, subindo e descendo, sempre leve. A escada passa um pouco do seu agudo confortável.',
        'Se o estalo aparecer sempre na mesma nota, pratique o deslize só ao redor dela, bem devagar.'
      ],
      mistakes: [
        'Aumentar o volume ao chegar no grave. Correção: o volume fica igual do começo ao fim. O grave ganha corpo sozinho, sem você empurrar.',
        'Deslizar rápido demais para passar logo pela quebra. Correção: desça devagar, principalmente na região da quebra. A pressa esconde o problema, mas não resolve.',
        'Começar a sirene pesada, já no peito. Correção: a primeira nota é leve, de cabeça. Se começou pesada, recomece com o som de fantasminha.'
      ],
      tips: [
        'Desça a mão devagar junto com a voz, sem trancos. O gesto contínuo ajuda a voz a ficar contínua.',
        'Se o "ng" não sair, use a vibração de lábios ("brrr"). Para muita gente, é o som que mais facilita a passagem.'
      ],
      listen: [
        'Águas de Março — Elis Regina e Tom Jobim (vozes leves que passam pelas notas sem trocar de peso)',
        'I Will Always Love You — Whitney Houston (o começo sem acompanhamento, leve e ligado)'
      ],
      ex: [
        { id: 'regis-5a', name: 'Suspiro de cima', desc: 'Deslize em "u" da oitava até a tônica, começando leve e sem cortar o som.', syl: 'u', mode: 'junto', mel: M.suspiro, bpm: 66, zone: 'high', dir: 'down', steps: 6, goal: { m: 'afin', v: 65 } },
        { id: 'regis-5b', name: 'Sirene descendente em ng', desc: 'Deslize em "ng" da oitava até a tônica e segure, diminuindo o volume onde a voz quer estalar.', syl: 'ng', mode: 'junto', mel: '8~1:4 1:2', bpm: 60, zone: 'high', dir: 'down', steps: 5, goal: { m: 'afin', v: 65 } },
        { id: 'regis-5c', name: 'Escala descendo leve', desc: 'Repita oito notas descendo em "nu", começando leve e sem trocar de peso na descida.', syl: 'nu', mode: 'eco', mel: '8 7 6 5 4 3 2 1:2', bpm: 84, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 70 } },
        { id: 'regis-5d', name: 'Sirene completa', desc: 'Faça a sirene de oitava em vibração de lábios, leve, enquanto a escada passa um pouco do seu agudo confortável.', syl: 'brrr (vibração de lábios)', mode: 'junto', mel: M.sirene8, bpm: 70, zone: 'top', dir: 'up', steps: 6, goal: { m: 'top', v: 4 } }
      ]
    },
    {
      id: 'regis-6',
      name: 'A ponte: ligar os registros',
      level: 2,
      goal: 'Cantar escalas e arpejos que atravessam a passagem em volume baixo, ligando peito e cabeça numa voz só.',
      text: [
        'A ponte é a região da voz onde o peito e a cabeça se encontram. Os cantores chamam essa região de passagem, e o som que a atravessa sem quebra de voz mista: uma voz com um pouco do corpo do peito e um pouco da leveza da cabeça. É ela que permite cantar notas médias e agudas com som de verdade, sem grito e sem falsete soproso.',
        'A voz mista não é um botão que se aperta; é uma coordenação que se constrói. O caminho mais seguro é de cima para baixo e com volume baixo: você leva a leveza da cabeça para a região média, em vez de levar o peso do peito para cima. Por isso os exercícios desta lição usam "nu", "nô" e "mu", sílabas que mantêm a voz focada e a garganta solta.',
        'Ao subir pela escala, deixe a voz ficar mais leve a cada nota, como se a nota de cima custasse menos esforço, e não mais. Na região da passagem, estreite um pouco a vogal: o "a" vai na direção do "ó", e o "é" na direção do "ê". Essa pequena mudança, que os cantores chamam de modificação de vogal, ajuda a voz a atravessar a ponte sem abrir demais e sem quebrar.',
        'Esta é uma das habilidades mais importantes do canto, e ela leva tempo: semanas, às vezes meses, de treino curto e frequente. Volume baixo agora é o que vai permitir volume com saúde depois. E vale sempre a regra: dor, ardor ou rouquidão são sinal para parar.'
      ],
      steps: [
        'Comece com "Ponte em nu" na parte alta confortável, em volume baixo, sem deixar a voz pesar na nota de cima.',
        'No "Arpejo ligado", suba e desça a oitava com a mesma qualidade de som na nota mais alta e na mais baixa.',
        'Na "Escala de nona leve", deixe a voz mais leve a cada nota que sobe e estreite a vogal na região da passagem.',
        'Feche com a "Sirene ligada", com a escada passando um pouco do seu agudo confortável. Leveza e continuidade, sem estalo.',
        'De vez em quando, grave a série inteira e compare com as gravações das primeiras lições do módulo.'
      ],
      mistakes: [
        'Empurrar o peito para atravessar a ponte. Correção: diminua o volume antes da passagem, e não depois. Se a nota de cima veio gritada, recomece mais leve.',
        'Abrir muito a boca e a vogal nas notas de cima. Correção: estreite a vogal ("nu", "nô") e mantenha a boca solta e moderada.',
        'Querer a voz mista forte desde o começo. Correção: primeiro ela fica lisa e baixinha; a força vem depois, aos poucos, com o tempo de treino.'
      ],
      tips: [
        'Faça esta lição depois de aquecer com sirenes e vibração de lábios. Voz aquecida atravessa a passagem com muito mais facilidade.',
        'Se uma nota da ponte sempre quebra, cante a escala começando nela e descendo. Depois volte a subir até ela.'
      ],
      listen: [
        'Just the Way You Are — Bruno Mars (as notas agudas do refrão, claras e sem grito)',
        'Oceano — Djavan (a voz leve e ligada que sobe sem esforço aparente)'
      ],
      ex: [
        { id: 'regis-6a', name: 'Ponte em "nu"', desc: 'Cante a escala de cinco notas em "nu" na parte alta da voz, em volume baixo.', syl: 'nu', mode: 'junto', mel: M.cinco, bpm: 88, zone: 'high', dir: 'up', steps: 6, goal: { m: 'afin', v: 75 } },
        { id: 'regis-6b', name: 'Arpejo ligado', desc: 'Repita o arpejo até a oitava em "nô", com o mesmo som em cima e embaixo.', syl: 'nô', mode: 'eco', mel: M.arpejo8, bpm: 80, zone: 'high', dir: 'up', steps: 5, goal: { m: 'afin', v: 75 } },
        { id: 'regis-6c', name: 'Escala de nona leve', desc: 'Suba em arpejo até a nona e desça pela escala em "mu", cada vez mais leve ao subir.', syl: 'mu', mode: 'junto', mel: M.nona, bpm: 92, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 75 } },
        { id: 'regis-6d', name: 'Sirene ligada', desc: 'Faça a sirene de oitava em "nu", sem estalo, enquanto a escada passa um pouco do seu agudo confortável.', syl: 'nu', mode: 'junto', mel: M.sirene8, bpm: 70, zone: 'top', dir: 'up', steps: 6, goal: { m: 'top', v: 5 } }
      ]
    }
  ]
};
