import { M } from './helpers.js';

export default {
  id: 'saude',
  name: 'Saúde vocal e desaquecimento',
  desc: 'Como a voz funciona e como cuidar dela: hábitos do dia a dia, aquecer antes e desaquecer depois, sinais de alerta e quanto treinar.',
  lessons: [
    {
      id: 'saude-1',
      name: 'Como a voz funciona',
      level: 1,
      goal: 'Entender, em linguagem simples, o que acontece no corpo quando você fala e canta: ar, pregas vocais e ressonância.',
      text: [
        'A voz nasce de três partes trabalhando juntas. O ar que sai dos pulmões é a energia. As pregas vocais, dentro da laringe (a estrutura do gogó), transformam esse ar em vibração. E o espaço da garganta, da boca e do nariz, chamado trato vocal, molda e amplia essa vibração até ela virar a voz que você reconhece. Um violão funciona parecido: a corda vibra, mas é a caixa de madeira que faz o som crescer.',
        'As pregas vocais (o nome antigo é "cordas vocais") são duas pequenas dobras de músculo cobertas por uma mucosa macia e úmida, com algo entre um e dois centímetros e meio de comprimento. Quando você fala, elas se aproximam e o ar que passa entre elas as faz vibrar muito rápido: numa conversa, algo como cem a duzentas e cinquenta vezes por segundo, e bem mais nas notas agudas. Para subir a nota, elas se alongam e ficam mais finas, como um elástico esticado que vibra mais rápido. Para descer, ficam mais curtas e mais grossas.',
        'Aqui está uma informação que muda tudo para quem grita: a altura da nota não vem da força do ar, e sim do ajuste fino das pregas. Quando a pessoa empurra mais ar para alcançar um agudo, as pregas se apertam uma contra a outra para resistir à pressão, e o som fica tenso, alto e cansativo. Isso é o grito. A boa técnica faz o contrário: pouco esforço na garganta, ar constante e um trato vocal que ajuda o som a ressoar.',
        'A mucosa das pregas é delicada. Quando elas batem com força por muito tempo, ficam inchadas e irritadas, como a pele das mãos depois de um dia carregando peso. Isso aparece como rouquidão, voz falhando e cansaço. Por isso, desde já, a regra deste app: dor, ardor ou rouquidão durante o treino são sinal para parar. Treinar a voz é treinar coordenação, não resistência à dor.'
      ],
      steps: [
        'Coloque dois dedos de leve na frente do pescoço, na altura do gogó, e engula. Você sente a laringe subir e descer: ali dentro estão as pregas vocais.',
        'Com os dedos no mesmo lugar, faça "sss" e depois "zzz". No "s" passa só ar; no "z" você sente a vibração das pregas.',
        'Cante a nota em "mmm" com a outra mão no nariz ou nos lábios e sinta a vibração se espalhar pelo rosto. Isso é ressonância.',
        'Termine com o suspiro de alívio, bem leve, e repare como a voz pode sair sem nenhum esforço.'
      ],
      mistakes: [
        'Achar que nota aguda se consegue com mais força. Correção: a altura vem do ajuste das pregas, não do volume. Agudo com força vira grito; agudo bem coordenado pode até ser suave.',
        'Apertar o pescoço com os dedos para sentir a vibração. Correção: o toque é leve, como quem confere se o celular está vibrando no bolso.',
        'Achar que a voz é "assim mesmo" e não muda. Correção: as pregas e os músculos em volta delas respondem a treino, como qualquer outra coordenação do corpo.'
      ],
      tips: [
        'Você não precisa decorar anatomia para cantar bem. Basta lembrar do trio: ar constante, pregas soltas e espaço para ressoar.',
        'Se tiver curiosidade, procure vídeos de exames de laringe (videolaringoscopia) de cantores. Ver como as pregas são pequenas ajuda a entender por que não se canta com força.'
      ],
      listen: [
        'Chega de Saudade — João Gilberto (voz pequena e sem esforço, que soa porque é bem coordenada)'
      ],
      ex: [
        { id: 'saude-1a', name: 'Sss e zzz', desc: 'Com os dedos de leve no gogó, alterne "sss" (só ar) e "zzz" (ar com vibração) e sinta a diferença.', syl: 'sss e zzz alternados', mode: 'livre', breath: [['Inspire baixo', 3], ['Solte em "sss": só ar, sem vibração', 5], ['Inspire baixo', 3], ['Solte em "zzz": sinta a vibração nos dedos', 5]], cycles: 3, goal: { m: 'rep', v: 3 } },
        { id: 'saude-1b', name: 'Sentir a ressonância', desc: 'Repita a nota em "mmm" com uma mão no rosto e sinta a vibração nos lábios, no nariz e nas bochechas.', syl: 'mmm (boca fechada)', mode: 'eco', mel: '1:4', bpm: 60, zone: 'low', dir: 'up', steps: 5, goal: { m: 'afin', v: 65 } },
        { id: 'saude-1c', name: 'Suspiro de alívio', desc: 'Deslize de cima para baixo num "ha" leve, como quem diz "ah, que alívio", sem empurrar.', syl: 'ha (suspiro leve com som)', mode: 'junto', mel: '5~1:2', bpm: 60, zone: 'mid', dir: 'down', steps: 5, goal: { m: 'rep', v: 3 }, cool: true }
      ]
    },
    {
      id: 'saude-2',
      name: 'Cuidar da voz no dia a dia',
      level: 1,
      goal: 'Conhecer os hábitos que protegem e os que prejudicam a voz, e trocar os mais comuns.',
      text: [
        'A voz que você leva para o treino é resultado do seu dia inteiro. As pregas vocais vibram melhor quando a mucosa está úmida e solta. A água que você bebe chega até elas pelo corpo, aos poucos, por isso o que conta é beber ao longo do dia, e não um copo cheio na hora de cantar. Respirar vapor, como no banho quente, ajuda a umedecer a superfície, e ambientes com ar-condicionado ou ar seco pedem mais água.',
        'Nada do que você engole passa pelas pregas vocais: a comida e a bebida descem por outro caminho, o esôfago. Por isso mel, gengibre, chá ou gargarejo podem até aliviar a garganta, mas não "limpam" nem "curam" a voz. Já pastilhas e sprays anestésicos são um risco, porque tiram a sensação de desconforto e você continua forçando uma voz que pedia descanso. O sono também conta muito: a voz de quem dormiu mal fica mais pesada, falha mais e cansa antes.',
        'Alguns hábitos irritam diretamente a laringe. O cigarro, inclusive o eletrônico, inflama e resseca a mucosa, e o tabaco é o principal fator de risco para o câncer de laringe. O álcool resseca e anestesia, e o canto depois de beber costuma passar do limite sem você perceber. O refluxo, quando o ácido do estômago sobe até a garganta, pode causar pigarro, sensação de bolo na garganta e rouquidão de manhã; comer pesado e deitar logo depois piora. Se você desconfia de refluxo, converse com um médico.',
        'Por fim, os hábitos de uso. Pigarrear faz as pregas baterem com força; troque por engolir a saliva, tomar um gole de água ou soltar um "hum" leve. Falar alto em lugar barulhento, como bar, academia ou show, cansa a voz rapidamente, porque você aumenta o volume sem perceber; chegue mais perto da pessoa. E cochichar com força, ao contrário do que muita gente pensa, também aperta a garganta. Para poupar a voz, fale menos e com voz suave, sem cochicho forçado.'
      ],
      steps: [
        'Deixe uma garrafa de água à vista durante o dia e beba aos poucos. Xixi claro é um bom sinal de hidratação.',
        'Durante uma semana, repare em quantas vezes você pigarreia. A cada vez, troque por engolir ou pelo "hum" leve do exercício.',
        'Repare nos lugares onde você fala alto sem perceber e combine consigo mesmo de chegar perto em vez de levantar a voz.',
        'Evite cantar nas duas ou três horas depois de uma refeição pesada, principalmente à noite.',
        'Em dias de voz cansada ou depois de uma noite mal dormida, faça um treino mais curto e mais leve.'
      ],
      mistakes: [
        'Beber água só na hora de cantar. Correção: a hidratação que chega às pregas vem do que você bebeu nas horas anteriores. Beba ao longo do dia.',
        'Usar pastilha anestésica para cantar com a garganta irritada. Correção: se a garganta incomoda, o recado é descansar, não anestesiar.',
        'Cochichar para "poupar" a voz. Correção: o cochicho forçado aperta a garganta. Fale pouco e com voz suave.',
        'Pigarrear toda hora. Correção: engula a saliva, tome água ou faça um "hum" leve. Se o pigarro não passa, investigue com um médico.'
      ],
      tips: [
        'Se você usa muito a voz no trabalho, dando aula, atendendo telefone ou vendendo, leve isso em conta: a voz falada também gasta e soma com o treino.',
        'Algumas horas falando pouco, de vez em quando, ajudam a voz a se recuperar depois de um dia puxado.',
        'Torcer gritando no futebol ou cantar no karaokê em cima de um som alto conta como treino pesado. Desaqueça depois e pegue leve no dia seguinte.'
      ],
      ex: [
        { id: 'saude-2a', name: 'Hum no lugar do pigarro', desc: 'Quando sentir vontade de pigarrear, faça este "hum" curto e leve, descendo, e depois engula.', syl: 'hum (leve, descendo)', mode: 'junto', mel: '3~1:2', bpm: 60, zone: 'low', dir: 'down', steps: 4, goal: { m: 'rep', v: 3 }, cool: true },
        { id: 'saude-2b', name: 'Voz suave, sem cochicho', desc: 'Repita as três notas em "nô" com volume baixo, mas com som de verdade, nunca soprado.', syl: 'nô (baixinho, com som)', mode: 'eco', mel: M.tres, bpm: 80, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 65 } }
      ]
    },
    {
      id: 'saude-3',
      name: 'Aquecer antes, desaquecer depois',
      level: 1,
      goal: 'Montar uma rotina curta de aquecimento antes de cantar e de desaquecimento depois, para a voz começar e terminar bem.',
      text: [
        'Ninguém corre uma prova sem aquecer, e a voz segue a mesma lógica. O aquecimento leva mais sangue aos músculos da laringe, deixa a mucosa mais flexível e, principalmente, lembra ao corpo a coordenação certa antes de pedir esforço. Cinco a dez minutos bastam. A ordem que funciona é: corpo, respiração, sons semiocluídos (como lábios vibrando e "mmm"), deslizes leves e só então escalas com vogais.',
        'O aquecimento começa no meio confortável da voz e em volume baixo, e vai abrindo a extensão aos poucos. Não comece pelo agudo nem pelo forte. Os sons semiocluídos, que você estuda no módulo "Voz sem grito", são os melhores para aquecer, porque deixam as pregas vibrarem com pouca pressão. Uma sirene de lábios passeando pela voz já faz metade do trabalho.',
        'Desaquecer é o passo que quase todo mundo pula, e ele faz diferença. Depois de um treino ou de um show, a musculatura da laringe continua ativa e a voz falada às vezes sai mais alta ou mais tensa. O desaquecimento leva a voz de volta para a região da fala com movimentos descendentes e leves: deslizes em "u", "mmm" descendo, lábios vibrando de cima para baixo e suspiros. Dois a cinco minutos resolvem.',
        'O app monta isso para você: os exercícios marcados como desaquecimento entram no fim da aula do dia. Mas vale saber fazer sozinho, para usar depois de cantar numa festa, num ensaio ou de falar muito no trabalho. Sempre termine falando algumas frases em voz tranquila para conferir se a voz voltou ao normal.'
      ],
      steps: [
        'Antes do primeiro exercício de voz, gaste um minuto soltando ombros, pescoço e mandíbula.',
        'Faça o aquecimento expresso: sirene de lábios no meio da voz, em volume baixo.',
        'No fim do treino, faça o deslize em "u", o "mmm" descendo e os lábios descendo, sempre leves e sem pressa.',
        'Termine dizendo uma frase qualquer em voz de conversa, como o seu nome e o dia de hoje, e repare se a voz está tranquila.'
      ],
      mistakes: [
        'Começar o treino pelas notas mais difíceis. Correção: comece no meio, em volume baixo, e vá abrindo a extensão aos poucos.',
        'Fazer o desaquecimento com força ou com pressa. Correção: desaquecer é leve e lento. Se está fazendo esforço, não está desaquecendo.',
        'Achar que só cantor profissional precisa disso. Correção: qualquer voz que vai ser usada com esforço se beneficia de começar e terminar com cuidado.'
      ],
      tips: [
        'Num dia corrido, uma sirene de lábios no carro ou no banho já é um aquecimento muito melhor que nenhum.',
        'Se depois do treino a voz falada parece mais grave, rouca ou cansada que o normal, o treino foi pesado demais. Diminua na próxima vez.',
        'Depois de cantar muito, evite sair falando alto. Dê alguns minutos de conversa tranquila para a voz.'
      ],
      ex: [
        { id: 'saude-3a', name: 'Aquecimento expresso', desc: 'Sirene de lábios no meio da voz, subindo e descendo uma quinta, em volume baixo.', syl: 'brr (vibração de lábios)', mode: 'junto', mel: M.sirene5, bpm: 70, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 65 } },
        { id: 'saude-3b', name: 'Deslize descendente em "u"', desc: 'Deslize de cima para baixo em "u", devagar e leve, a cada tom um pouco mais grave.', syl: 'u', mode: 'junto', mel: '5~1:3', bpm: 60, zone: 'mid', dir: 'down', steps: 5, goal: { m: 'rep', v: 3 }, cool: true },
        { id: 'saude-3c', name: 'Hum descendo a escala', desc: 'Desça cinco notas em "mmm", com volume baixo, levando a voz para a região da fala.', syl: 'mmm (boca fechada)', mode: 'junto', mel: M.cincoDesce, bpm: 70, zone: 'low', dir: 'down', steps: 4, goal: { m: 'afin', v: 65 }, cool: true },
        { id: 'saude-3d', name: 'Lábios descendo', desc: 'Vibração de lábios deslizando de cima para baixo, leve como um suspiro.', syl: 'brr (vibração de lábios)', mode: 'junto', mel: '5~1:3', bpm: 60, zone: 'mid', dir: 'down', steps: 4, goal: { m: 'rep', v: 3 }, cool: true }
      ]
    },
    {
      id: 'saude-4',
      name: 'Sinais de alerta',
      level: 1,
      goal: 'Reconhecer os sinais de que a voz está sendo forçada e saber quando parar, descansar ou procurar ajuda.',
      text: [
        'A voz avisa quando algo não vai bem, e quem aprende a ouvir esses avisos evita a maioria dos problemas. Durante o treino, os sinais para parar na hora são dor, ardor, sensação de arranhar, rouquidão e a voz falhando onde antes saía fácil. Nenhum exercício deste app deve doer. Se doer, pare, beba água, fique alguns minutos em silêncio e retome mais leve, ou deixe para o dia seguinte.',
        'Existe diferença entre cansaço e lesão. Depois de um treino bem feito, a musculatura pode ficar um pouco cansada, como as pernas depois de uma caminhada, e isso passa com descanso. Já rouquidão que aparece sempre depois de cantar, pigarro constante, voz que demora a "acordar" de manhã ou agudos suaves que somem são sinais de que as pregas podem estar inchadas ou irritadas. Nesses casos, diminua o treino e preste atenção.',
        'A regra mais importante: rouquidão que dura mais de 15 dias precisa de avaliação de um otorrinolaringologista, o médico que examina a laringe com uma pequena câmera, e de um fonoaudiólogo, o profissional que trata a voz. Procure ajuda antes disso se a voz sumir de repente depois de um grito ou de um esforço, se houver dor ao falar ou engolir, sangue, falta de ar ou um caroço no pescoço. Quanto antes, mais simples costuma ser o tratamento.',
        'Um teste simples para fazer de vez em quando é cantar uma nota aguda bem suave, em volume baixinho, numa região que costuma sair fácil. Pregas inchadas perdem justamente essa capacidade: a nota suave falha, sai soprosa ou demora a começar. Se o teste sair pior que o normal por vários dias seguidos, faça treinos leves e descanse; se não melhorar, procure ajuda.'
      ],
      steps: [
        'Antes de começar o treino, faça o teste do agudo suave e registre como saiu.',
        'Durante o treino, a cada exercício, pergunte a si mesmo: arranhou? ardeu? cansou? Se a resposta for sim, pare e descanse.',
        'Depois do treino, faça o desaquecimento e fale algumas frases. A voz deve estar igual ou melhor do que antes.',
        'Se a voz ficar rouca, conte os dias. Passou de 15 dias, marque consulta com otorrino e fonoaudiólogo.'
      ],
      mistakes: [
        'Continuar "só até terminar a série" com a garganta ardendo. Correção: ardor é sinal para parar na hora. A série pode esperar.',
        'Esperar meses a rouquidão passar sozinha. Correção: mais de 15 dias de rouquidão pede avaliação de otorrino e fonoaudiólogo, mesmo que não doa.',
        'Achar que a rouquidão deixa a voz com "cara de cantor". Correção: rouquidão é sinal de pregas inchadas ou irritadas. Um timbre mais rasgado, se for o seu estilo, se constrói com técnica, não com lesão.'
      ],
      tips: [
        'Fonoaudiólogo e otorrino trabalham juntos e são aliados de quem canta. Ir a um deles não é sinal de fracasso; é cuidado com o instrumento.',
        'Gripe, alergia e crise de refluxo também deixam a voz pior. Nesses dias, treine leve ou descanse.',
        'Anote num caderno ou no celular como a voz estava em cada treino. Esse histórico ajuda você e, se precisar, ajuda o profissional que for examinar.'
      ],
      ex: [
        { id: 'saude-4a', name: 'Teste do agudo suave', desc: 'Repita uma nota da parte aguda confortável em "u" bem suave e registre se saiu fácil, falhou ou saiu soprosa.', syl: 'u (bem suave)', mode: 'eco', mel: '1:3', bpm: 60, zone: 'high', dir: 'stay', steps: 3, goal: { m: 'rep', v: 5 } },
        { id: 'saude-4b', name: 'Silêncio que recupera', desc: 'Quando a voz estiver cansada, faça alguns ciclos de respiração tranquila e sem som para soltar a musculatura.', syl: 'sem som (respiração tranquila)', mode: 'livre', breath: [['Inspire pelo nariz, devagar', 4], ['Solte o ar pela boca, sem som', 6]], cycles: 6, goal: { m: 'rep', v: 3 } },
        { id: 'saude-4c', name: 'Hum em suspiro', desc: 'Um "mmm" que desliza de cima para baixo bem devagar, com a garganta solta.', syl: 'mmm (boca fechada)', mode: 'junto', mel: '5~1:3', bpm: 60, zone: 'low', dir: 'down', steps: 4, goal: { m: 'rep', v: 3 }, cool: true }
      ]
    },
    {
      id: 'saude-5',
      name: 'Quanto treinar',
      level: 1,
      goal: 'Saber quanto tempo treinar por dia no começo, como distribuir as pausas e como aumentar a carga sem machucar a voz.',
      text: [
        'Os músculos que controlam as pregas vocais são pequenos e delicados, muito diferentes de um bíceps. Eles respondem bem a treino frequente e curto, e mal a maratonas. No começo, 15 a 30 minutos de técnica por dia são suficientes, divididos em blocos com pausas. Vinte minutos todos os dias ensinam muito mais que duas horas no domingo.',
        'Uma boa divisão é assim: cinco minutos de aquecimento, dez a vinte de técnica, alguns minutos cantando uma música, se quiser, e dois a cinco de desaquecimento. A cada dez ou quinze minutos de voz, faça uma pausa curta, beba água e fique um pouco em silêncio. Um ou dois dias de descanso por semana também fazem parte do treino, porque é no descanso que o corpo consolida o que aprendeu.',
        'Conte também a voz que você usa fora do treino. Quem dá aula, atende telefone, vende ou fala muito no trabalho já chega ao treino com a voz em uso. Nesses dias, um treino mais curto e mais leve é o mais inteligente. O mesmo vale para o dia seguinte a festas, jogos e karaokês.',
        'Aumente a carga aos poucos, como numa academia: alguns minutos a mais por semana, desde que a voz termine o treino igual ou melhor do que começou. Qualidade vale mais que quantidade. Repetir um exercício com tensão só ensina a tensão, então é melhor fazer menos repetições, bem feitas, e parar enquanto ainda está fácil.'
      ],
      steps: [
        'Escolha um horário fixo para treinar, de preferência com a voz já acordada, e não logo depois de levantar.',
        'Comece com 15 minutos por dia nas primeiras semanas, contando aquecimento e desaquecimento.',
        'A cada bloco de dez a quinze minutos, faça a pausa ativa: água, silêncio e respiração tranquila.',
        'Quando 15 minutos estiverem fáceis e a voz terminar bem, acrescente cinco minutos. No começo, o teto é por volta de 30 minutos de técnica.',
        'Termine sempre com o desaquecimento e com o "uhum" de volta à fala.'
      ],
      mistakes: [
        'Treinar duas horas seguidas por empolgação. Correção: divida em dias. A voz aprende com repetição espaçada, não com cansaço.',
        'Treinar pesado com a voz cansada depois de um dia falando muito. Correção: nesses dias, faça só aquecimento leve, alguns exercícios semiocluídos e o desaquecimento.',
        'Medir o progresso pelo cansaço. Correção: treino bom deixa a voz mais solta, não exausta.'
      ],
      tips: [
        'De manhã cedo a voz costuma estar mais pesada. Se só der para treinar nesse horário, aqueça um pouco mais.',
        'Use um alarme para lembrar das pausas. No embalo do treino é fácil passar do ponto.',
        'Dia sem tempo? Cinco minutos de sirene de lábios e de desaquecimento mantêm o hábito vivo.'
      ],
      ex: [
        { id: 'saude-5a', name: 'Pausa ativa', desc: 'Entre blocos de treino, beba água, fique em silêncio e respire baixo e tranquilo.', syl: 'sem som (pausa ativa)', mode: 'livre', breath: [['Beba um gole de água, em silêncio', 10], ['Inspire baixo, pelo nariz', 4], ['Solte o ar devagar, sem som', 6]], cycles: 3, goal: { m: 'rep', v: 3 } },
        { id: 'saude-5b', name: 'Uhum de volta à fala', desc: 'Diga "uhum" como quem concorda numa conversa, descendo de tom a cada vez, para levar a voz de volta à fala.', syl: 'uhum (como quem concorda)', mode: 'junto', mel: '3 1:2', bpm: 70, zone: 'low', dir: 'down', steps: 4, goal: { m: 'rep', v: 3 }, cool: true }
      ]
    }
  ]
};
