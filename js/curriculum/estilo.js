import { M, rep } from './helpers.js';

export default {
  id: 'estilo',
  name: 'Estilos brasileiros e populares',
  desc: 'O que caracteriza a voz na MPB e na bossa nova, no sertanejo, no samba e no pagode, no gospel, no pop e no rock, no R&B e no soul, com frases para treinar cada estilo.',
  lessons: [
    {
      id: 'estilo-1',
      name: 'MPB e bossa nova',
      level: 2,
      goal: 'Cantar leve e perto da fala, com pouco vibrato, dicção natural e afinação precisa nas notas de cor da harmonia.',
      text: [
        'A bossa nova nasceu no fim dos anos 1950, com João Gilberto, Tom Jobim e Vinicius de Moraes, e mudou o jeito de cantar no Brasil. Em vez da voz grande e cheia de vibrato dos cantores da era do rádio, João Gilberto cantava baixinho, quase falando, colado no violão. A MPB que veio depois é muito variada, de Elis Regina a Djavan e Marisa Monte, mas herdou o essencial: a palavra tem que ser entendida, e a dicção é a do português falado.',
        'O canto falado é o coração do estilo. A melodia segue o ritmo da fala, com muitas notas repetidas e sílabas encaixadas em síncopes. O segredo não é cantar "bonito", com vogais enormes, e sim cantar como quem conta algo para alguém ao seu lado. Para quem sente que grita, este estilo é um ótimo remédio: ele é o oposto do grito.',
        'O vibrato é pouco ou nenhum. As notas longas são retas e tranquilas, e quando o vibrato aparece é pequeno e só no fim. Como a harmonia da bossa é rica, cheia de acordes com sétima e nona, a melodia pousa muitas vezes nessas notas de cor, que não são as notas mais "confortáveis" do acorde. Elas exigem afinação precisa: um pouco abaixo já soa errado.',
        'Leve não quer dizer soprado. Voz com ar demais perde o foco, some no microfone e cansa mais rápido do que parece. Busque um som pequeno, mas limpo e claro, em volume de conversa. As notas graves são muito bem-vindas na bossa, então quem tem a voz mais grave encontra aqui um estilo que valoriza exatamente o que já tem.'
      ],
      steps: [
        'Escolha uma bossa ou uma MPB de que você goste e fale a letra no ritmo, em volume de conversa, antes de cantar qualquer nota.',
        'Na "Frase de bossa", cante quase falando, em "du", com as notas repetidas bem iguais e o volume baixo e claro.',
        'Em "Notas de cor, sem vibrato", segure as notas longas retas, olhando o traço. A sétima e a nona precisam ficar em cima da barra.',
        'No exercício livre, fale e cante a mesma frase da sua música e grave as duas versões. A cantada deve soar tão natural quanto a falada.',
        'Se o microfone mostrar as notas longas caindo, apoie o ar até o fim sem aumentar o volume.'
      ],
      mistakes: [
        'Cantar soprado achando que é leve. Correção: menos volume, mas com o som limpo. Faça o teste: se a voz some quando você se afasta meio metro do celular que grava, tem ar demais.',
        'Vibrato em todas as notas. Correção: na bossa as notas são retas. Deixe o vibrato, se vier, só para o fim de uma ou outra nota longa.',
        'Pronúncia "de cantor", com vogais exageradas. Correção: diga as palavras como você fala no dia a dia, com o "r" e o "s" do seu sotaque.'
      ],
      tips: [
        'Cantar numa cadeira, com o corpo relaxado e um violão ou um teclado tocando baixinho, ajuda a encontrar o volume certo do estilo.',
        'Notas longas e retas sobre acordes ricos são um ótimo treino de afinação para qualquer estilo.',
        'A bossa nova é uma escola de economia: depois de treinar este estilo, você percebe quanta força era desnecessária no resto.'
      ],
      listen: [
        'Chega de Saudade — João Gilberto (canto quase falado, sem vibrato, colado no violão)',
        'Águas de Março — Elis Regina e Tom Jobim (dicção natural e a conversa entre as duas vozes)',
        'Oceano — Djavan (melodia sincopada e voz leve nas notas longas)'
      ],
      ex: [
        { id: 'estilo-1a', name: 'Frase de bossa', desc: 'Uma frase com notas repetidas e síncopes, cantada quase falando, em volume de conversa.', syl: 'du (quase falado)', mode: 'junto', mel: '5:0.5 5:0.5 5:0.5 3 5:0.5 5:0.5 3:0.5 2:0.5 3:0.5 2:0.5 1:2.5', bpm: 76, zone: 'low', dir: 'up', steps: 5, goal: { m: 'afin', v: 75 } },
        { id: 'estilo-1b', name: 'Notas de cor, sem vibrato', desc: 'Frases que pousam na sétima e na nona: segure as notas longas retas, leves e afinadas.', syl: 'u', mode: 'junto', mel: '1 3 5 7:3 r:1 6 5 3 2:3 r:1 3 5 7 9:4', bpm: 72, zone: 'mid', dir: 'up', steps: 4, goal: { m: 'afin', v: 75 } },
        { id: 'estilo-1c', name: 'Falar e cantar a mesma frase', desc: 'Escolha uma frase de uma bossa ou MPB, fale no ritmo em volume de conversa, cante logo em seguida com a mesma naturalidade e grave as duas versões para comparar.', syl: 'frase da sua música (falada e cantada)', mode: 'livre', goal: { m: 'rep', v: 4 } }
      ]
    },
    {
      id: 'estilo-2',
      name: 'Sertanejo e música caipira',
      level: 2,
      goal: 'Cantar com o brilho da ressonância frontal, em terças com outra voz, e segurar notas longas sem empurrar o agudo pelo nariz.',
      text: [
        'A música caipira nasceu no interior do Sudeste e do Centro-Oeste, com a viola caipira e as duplas cantando em terças, isto é, duas vozes caminhando juntas a três notas de distância na escala. Modas de viola, toadas e cururus contam histórias da roça, e a voz é firme, clara e sem muitos enfeites. O sertanejo romântico e o universitário vieram dessa raiz e mantiveram a dupla e o som brilhante.',
        'Esse brilho vem da ressonância frontal: a sensação de que o som está na frente do rosto, na região da boca, dos dentes e do nariz, que os professores chamam de máscara. Uma voz assim se ouve de longe sem precisar de força, o que era essencial nas festas sem microfone. O cuidado é não confundir som frontal com som anasalado. No agudo empurrado pelo nariz, o palato mole (a parte mole do céu da boca, lá no fundo) desce, o som fica fanho e a garganta aperta para alcançar a nota.',
        'Existe um teste simples. Cante um "é" e, no meio da nota, tampe o nariz com os dedos. Numa vogal sem "m" ou "n" por perto, o som quase não deve mudar. Se ele muda muito ou fica abafado, há som demais saindo pelo nariz. Volte a abrir o espaço do fundo da boca, como no começo de um bocejo, e mantenha o brilho na frente.',
        'Outra marca do estilo são as notas longas no fim das frases do refrão, muitas vezes agudas. Para segurá-las sem gritar, chegue nelas com ar, com a vogal aberta e com volume moderado. Muitas músicas sertanejas foram gravadas em tons altos para a voz dos artistas originais; use a ferramenta "Tom certo para a música" na aba Voz e abaixe o tom sem culpa. Se aparecer dor, ardor ou rouquidão, pare.'
      ],
      steps: [
        'Na "Toada", cante a melodia com som claro e firme, sem enfeites, em "lá".',
        'Em "Segunda voz em terça", o piano toca a melodia e você canta três notas acima. Ouça as duas vozes juntas: elas devem soar como um acorde.',
        'Na "Nota longa sem anasalar", faça o teste do nariz numa das repetições: tampe o nariz no meio da nota longa e veja se o som muda.',
        'Se o som mudar muito, repita a série pensando em mais espaço no fundo da boca e no brilho saindo pelos dentes.',
        'Leve o aprendizado para uma música: cante o refrão no tom que a ferramenta da aba Voz indicar.'
      ],
      mistakes: [
        'Som fanho no agudo. Correção: faça o teste do nariz e abra o espaço do fundo da boca. O brilho fica na frente, mas o caminho do som é pela boca.',
        'Perder a própria linha ao cantar em terças. Correção: cante primeiro a sua voz até decorar, depois junto com o piano em volume baixo, ouvindo as duas.',
        'Segurar a nota longa empurrando o volume. Correção: notas longas em volume moderado. Se faltar ar, respire antes da frase e abaixe o tom da música.'
      ],
      tips: [
        'Treinar com outra pessoa é o jeito mais divertido de aprender terças: cada uma canta uma voz e depois vocês trocam.',
        'O "é" aberto e o "ê" fechado do português são ótimos para encontrar o brilho frontal sem anasalar.',
        'Se a voz cansar rápido no agudo, volte para notas mais baixas no mesmo dia. Brilho não depende de altura.'
      ],
      listen: [
        'Chico Mineiro — Tonico e Tinoco (duas vozes em terças, o som clássico da dupla caipira)',
        'Menino da Porteira — Sérgio Reis (voz firme e clara contando uma história)',
        'Evidências — Chitãozinho e Xororó (terças e notas longas no refrão)'
      ],
      ex: [
        { id: 'estilo-2a', name: 'Toada', desc: 'Uma frase em compasso de três, no estilo das toadas, cantada com som claro e firme, sem enfeites.', syl: 'lá', mode: 'junto', mel: '3 4 5 5:2 3 4 3 2 3:3 2 3 4 4:2 2 3 2 7, 1:3', bpm: 100, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 75 } },
        { id: 'estilo-2b', name: 'Segunda voz em terça', desc: 'O piano toca a melodia da toada e você canta a voz de cima, sempre três notas acima dela, como numa dupla.', syl: 'lá', mode: 'junto', mel: '5 6 7 7:2 5 6 5 4 5:3 4 5 6 6:2 4 5 4 2 3:3', acc: '3 4 5 5:2 3 4 3 2 3:3 2 3 4 4:2 2 3 2 7, 1:3', bpm: 92, zone: 'mid', dir: 'up', steps: 4, goal: { m: 'afin', v: 75 } },
        { id: 'estilo-2c', name: 'Nota longa sem anasalar', desc: 'Frase com uma nota longa no alto, em "é" aberto e brilhante; numa das repetições, tampe o nariz no meio da nota longa: o som quase não deve mudar.', syl: 'é', mode: 'junto', mel: '3 4 5:2 6:4 r:1 5 4 3 2:2 1:4', bpm: 76, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 75 } }
      ]
    },
    {
      id: 'estilo-3',
      name: 'Samba e pagode',
      level: 2,
      goal: 'Encaixar as sílabas na síncope do samba com dicção rítmica e leveza, cantando junto e respondendo como na roda.',
      text: [
        'O samba urbano se formou no Rio de Janeiro no começo do século 20, com raízes no samba de roda da Bahia e em outras tradições afro-brasileiras, e virou a cara musical do país. O pagode é o samba de fundo de quintal, das rodas em volta da mesa, que nos anos 1980 chegou ao rádio com grupos como o Fundo de Quintal e depois se espalhou com o pagode romântico. Nos dois, a voz está a serviço do ritmo: cada sílaba tem o seu lugar no balanço da percussão.',
        'A melodia do samba quase nunca cai quadrada em cima do tempo. Ela é cheia de síncopes, com notas curtas que empurram para a frente e notas que atravessam a batida. Além disso, as notas curtas não são todas exatamente iguais: existe um balanço que só se aprende ouvindo muito e cantando junto com as gravações. Primeiro aprenda a frase certinha no tempo; o balanço vem depois, como um tempero.',
        'A dicção é rítmica. As consoantes funcionam quase como parte da percussão, rápidas e precisas, e as vogais das passagens rápidas são curtas. Já as notas longas do fim das frases ficam relaxadas e soltas. Pense em quem improvisa versos no partido-alto: fala cantando, com cada sílaba no lugar e sem esforço nenhum na garganta.',
        'O samba também é coletivo. O puxador canta e a roda responde em coro, e responder no tempo, em uníssono e com afinação, é tão importante quanto cantar o solo. Na escola de samba o puxador canta por cima de uma bateria enorme, mas na roda e no estudo a voz deve ser projetada e alegre, não gritada. Se a garganta arranhar ou arder, diminua o volume ou pare.'
      ],
      steps: [
        'Antes de cantar, bata palmas no ritmo da "Síncope do samba" falando "pá" em cada nota.',
        'Cante a frase em "lá" com o pé marcando o tempo. As notas curtas são leves; não acentue todas.',
        'Em "Sílabas no balanço", comece no andamento lento e suba aos poucos, com as consoantes rápidas e a mandíbula solta.',
        'No "Puxador e coro", ouça a frase do piano e responda igual, como a roda responde ao puxador.',
        'Coloque um samba ou um pagode de que você gosta e cante só os refrãos junto, prestando atenção em onde cada sílaba cai.'
      ],
      mistakes: [
        'Quadrar o samba. Correção: deixe as notas sincopadas no contratempo. Fale o ritmo com "pá" antes de cantar e mantenha o pé no tempo.',
        'Acentuar todas as sílabas. Correção: no samba as notas curtas são leves, quase faladas, e o acento cai em poucas sílabas. Ouça a percussão: ela também não acentua tudo.',
        'Gritar para "ter energia". Correção: energia no samba é ritmo e alegria, não volume. Sorria de leve com os olhos e mantenha a garganta solta.'
      ],
      tips: [
        'Cantar sambas junto com as gravações, só os refrãos no começo, é o jeito mais rápido de pegar o balanço.',
        'Bater a mão na mesa no ritmo do pandeiro enquanto canta ajuda a juntar o corpo e a voz.',
        'O pagode romântico tem melodias mais ligadas no meio da voz: é um ótimo repertório para quem está começando.'
      ],
      listen: [
        'Deixa a Vida Me Levar — Zeca Pagodinho (dicção rítmica relaxada e balanço sem pressa)',
        'Vou Festejar — Beth Carvalho (síncope firme e voz projetada sem gritar)',
        'Trem das Onze — Demônios da Garoa (sílabas encaixadas no ritmo e vozes em coro)'
      ],
      ex: [
        { id: 'estilo-3a', name: 'Síncope do samba', desc: 'Uma frase com a figura curta, longa, curta do samba: as notas curtas leves e as sincopadas no lugar.', syl: 'lá', mode: 'junto', mel: '5:0.25 6:0.5 5:0.25 3:0.5 2:0.5 1:0.25 2:0.5 3:0.25 5 6:0.25 5:0.5 3:0.25 2:0.5 3:0.5 1:2', bpm: 72, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 75 } },
        { id: 'estilo-3b', name: 'Sílabas no balanço', desc: 'Sílabas rápidas encaixadas no ritmo, com consoantes de percussão e mandíbula solta; suba o andamento aos poucos.', syl: 'pa ra pá', mode: 'junto', mel: '1:0.25 2:0.25 3:0.5 3:0.25 4:0.25 5:0.5 5:0.25 4:0.25 3:0.5 2:0.5 1', lyr: 'pa ra pá pa ra pá pa ra pá pa pá', bpm: 66, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'bpm', v: 96 } },
        { id: 'estilo-3c', name: 'Puxador e coro', desc: 'O piano faz o puxador: ouça a frase sincopada e responda igual, no tempo, como o coro da roda.', syl: 'laiá', mode: 'eco', mel: '5:0.5 5:0.5 6:0.5 5 3:0.5 2:0.5 3 1:0.5 1:2', bpm: 80, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 75 } }
      ]
    },
    {
      id: 'estilo-4',
      name: 'Gospel e louvor',
      level: 3,
      goal: 'Construir uma música que cresce do íntimo ao clímax com voz mista forte e sem grito, cantar melismas afinados e conduzir quem canta junto.',
      text: [
        'O gospel nasceu nas igrejas negras dos Estados Unidos, misturando hinos, spirituals e blues, com vozes potentes, ornamentos e o diálogo entre solista e coro. No Brasil, a música gospel e de louvor é enorme e mistura pop, adoração e influências do gospel americano. Uma marca comum é a música que começa íntima, quase sussurrada, e cresce até um clímax forte, muitas vezes repetindo o refrão e subindo o tom no final.',
        'Crescer bem é planejar. Se você gasta toda a energia no primeiro refrão, chega ao final sem ter para onde ir, ou começa a empurrar. Pense em degraus: o verso leve, o refrão mais cheio, o último refrão no máximo saudável. O forte vem de mais apoio do ar e mais ressonância, usando a voz mista, que é a coordenação que junta a força da voz de peito com a facilidade da voz de cabeça. Forte nunca é garganta apertada.',
        'Melisma é cantar várias notas numa só sílaba, aquele "ô-ô-ô" que desce e sobe enfeitando a frase. Cada nota do melisma precisa ser afinada e clara; um borrão de notas soa como insegurança. Aprenda devagar, nota por nota, e só depois acelere. E lembre que o ornamento serve à emoção da música: melisma em todo verso cansa quem ouve.',
        'No louvor congregacional, quem canta na frente conduz pessoas que vão cantar junto. Isso pede entradas claras, tempo firme, letra bem dita e um tom em que a maioria consiga cantar, e não o tom que mostra o seu agudo. Ter a voz ouvida não é cantar mais alto: uma voz segura no tom certo conduz melhor do que uma voz forçada. Se o clímax arranhar, doer ou deixar rouquidão, pare e reveja o tom.'
      ],
      steps: [
        'No "Refrão que cresce", cante a mesma frase três vezes: suave, média e cheia. A terceira é mais forte por causa do ar e do brilho, não da garganta.',
        'No "Melisma em câmera lenta", cante todas as notas numa sílaba só, começando devagar. Suba o andamento apenas quando todas as notas estiverem no lugar.',
        'No hino "Amazing Grace", cante a melodia ligada e afinada, com os pequenos ornamentos de duas notas.',
        'No "Clímax em voz mista", suba até a nota alta com brilho e corpo, sem levantar o queixo nem apertar o pescoço.',
        'Escolha uma música de louvor de que você gosta, marque onde ela cresce e planeje quanta energia vai em cada parte.'
      ],
      mistakes: [
        'Começar no máximo. Correção: guarde energia. O verso pode e deve ser leve; o clímax só impressiona se houver contraste.',
        'Melisma embolado. Correção: cante devagar, em "ô" separado nota por nota, e depois ligue. Velocidade sem precisão é ruído.',
        'Gritar no clímax. Correção: abra a vogal, use o brilho do "nê" e o apoio da barriga. Se ainda arranhar, o tom está alto: abaixe meio tom ou um tom.',
        'Escolher o tom pela sua voz e não pela congregação. Correção: no louvor coletivo, prefira tons em que as pessoas consigam cantar junto. Seu agudo pode aparecer nos improvisos.'
      ],
      tips: [
        'Grave uma música inteira e ouça só o desenho de volume: ela precisa crescer como uma escada, e não ficar no máximo o tempo todo.',
        'Melismas curtos, de três ou quatro notas no fim das frases, já trazem o sabor do gospel sem exagero.',
        'O microfone ajuda a crescer: afaste um pouco no clímax para o som não estourar.'
      ],
      listen: [
        'Raridade — Anderson Freire (verso íntimo que cresce até um refrão forte)',
        'Lugar Secreto — Gabriela Rocha (voz leve que se abre aos poucos)',
        'Oh Happy Day — The Edwin Hawkins Singers (solista e coro respondendo, a força da voz coletiva)'
      ],
      ex: [
        { id: 'estilo-4a', name: 'Refrão que cresce', desc: 'A mesma frase três vezes, suave, média e cheia, com a terceira mais forte por causa do ar e do brilho.', syl: 'ô', mode: 'junto', mel: rep('5 5 6 5 3:2 2 3 1:3', 3, 1), bpm: 80, zone: 'mid', dir: 'up', steps: 4, goal: { m: 'afin', v: 75 } },
        { id: 'estilo-4b', name: 'Melisma em câmera lenta', desc: 'Sete notas numa sílaba só; comece devagar e acelere apenas quando todas estiverem afinadas e claras.', syl: 'ô (todas as notas numa sílaba só)', mode: 'junto', mel: '5:0.5 6:0.5 5:0.5 3:0.5 2:0.5 3:0.5 1:2', bpm: 56, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'bpm', v: 88 } },
        { id: 'estilo-4c', name: 'Hino "Amazing Grace"', desc: 'A primeira metade do hino tradicional (domínio público), ligada e afinada, com os ornamentos de duas notas.', syl: 'lu', mode: 'junto', mel: '5,:1 1:2 3:0.5 1:0.5 3:2 2 1:2 6, 5,:2 5, 1:2 3:0.5 1:0.5 3:2 2 5:3', bpm: 80, zone: 'mid', dir: 'up', steps: 4, goal: { m: 'afin', v: 80 } },
        { id: 'estilo-4d', name: 'Clímax em voz mista', desc: 'Suba até a nota alta com brilho e corpo de voz mista, sem levantar o queixo nem apertar; pare se arranhar.', syl: 'nê', mode: 'junto', mel: '1 3 5 6:2 5 6 8:3 r:1 8 6 5 3:2 1:3', bpm: 76, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 75 } }
      ]
    },
    {
      id: 'estilo-5',
      name: 'Pop e rock',
      level: 3,
      goal: 'Cantar com a energia da fala intensificada, usar o twang para ganhar presença e conhecer o belting saudável e os limites do drive.',
      text: [
        'No pop e no rock, a base da voz é a fala intensificada: a mesma dicção de quando você conversa, só que com mais energia, mais perto do microfone e com mais intenção. Não é a voz redonda do canto lírico. Os versos costumam ficar perto da fala, e os refrãos sobem e ganham força. O estilo vai do pop leve e conversado ao rock com ataque e volume, e em todos eles a palavra precisa chegar clara.',
        'Twang é um som brilhante e meio metálico que você consegue estreitando um pouco o espaço logo acima das pregas vocais. É o mesmo ajuste que usamos para imitar um pato, uma criança fazendo birra com "nhé" ou uma bruxa de desenho animado. Ele deixa a voz mais presente no meio da banda com menos esforço. No começo soa feio, e tudo bem: depois você mistura um pouco de twang com vogais abertas, e o som fica brilhante sem ficar estridente.',
        'Belting é o som forte, perto do grito, dos refrãos de pop, rock e teatro musical. Feito com saúde, ele parece o chamado de quem grita "ei!" para alguém do outro lado da rua: energia de fala, vogal aberta, twang e apoio firme, com o pescoço solto. Use com moderação: frases curtas, poucas séries por dia e descanso depois. O ideal é aprender belting com um professor ouvindo você de perto, porque o limite entre um belting bom e um grito é fácil de cruzar sem perceber.',
        'Drive, rasp e distorção são os sons ásperos do rock, que também aparecem em alguns cantores de sertanejo e de gospel. Eles são feitos por estruturas acima das pregas vocais, como as pregas vestibulares (as falsas pregas), vibrando junto com o som. Bem feitos, podem ser usados com segurança; aprendidos por conta própria em vídeos, são um dos jeitos mais comuns de machucar a voz. Por isso este app não treina drive. Se quiser aprender, procure um professor presencial com experiência em distorção, depois de ter uma base técnica estável, e pare imediatamente diante de dor, ardor ou rouquidão.'
      ],
      steps: [
        'No "Chamado", cante como quem chama alguém do outro lado da rua: energia de fala, vogal aberta e pescoço solto, no meio da voz.',
        'No "Twang de pato", cante a escala em "nhé" com som pequeno e brilhante. Não precisa ser alto; o brilho faz o volume.',
        'No "Gancho pop", encaixe as entradas no contratempo e a nota que atravessa a batida, com dicção de fala.',
        'No "Belting curto", faça no máximo uma série por dia, com descanso de voz depois. Se arranhar, pare na hora.',
        'Leve para uma música: cante o verso perto da fala e só o refrão com mais energia.'
      ],
      mistakes: [
        'Confundir belting com grito. Correção: o grito aperta o pescoço e sobe o queixo; o belting é um chamado com apoio, vogal aberta e brilho. Se a garganta dói ou arranha, não é belting saudável.',
        'Twang pelo nariz. Correção: o brilho do twang não vem do nariz. Faça o teste de tampar o nariz no "é": o som quase não deve mudar.',
        'Cantar o verso no volume do refrão. Correção: o pop vive de contraste. Verso perto da fala, refrão com energia.',
        'Imitar a aspereza das gravações de rock. Correção: não tente distorcer por conta própria. Cante essas músicas com a voz limpa até ter acompanhamento presencial.'
      ],
      tips: [
        'O microfone é parte do estilo: no verso fique perto e cante quase falando; no refrão forte, afaste um pouco.',
        'Antes de uma série de belting, aqueça com vibração de lábios ou canudo e faça o chamado em volume médio.',
        'Depois de cantar forte, faça um desaquecimento suave com "mmm" descendo e beba água.'
      ],
      listen: [
        'Tempo Perdido — Legião Urbana (fala intensificada: a voz grave cresce sem virar grito)',
        'Velha Infância — Tribalistas (pop leve e conversado, perto do microfone)',
        'Rolling in the Deep — Adele (belting no refrão; ouça e analise, sem imitar o volume antes de ter base)',
        'Admirável Chip Novo — Pitty (rock com ataque e energia; ouça a intensidade sem tentar imitar a aspereza por conta própria)'
      ],
      ex: [
        { id: 'estilo-5a', name: 'O chamado', desc: 'Frases curtas como quem chama alguém do outro lado da rua, com energia de fala, vogal aberta e pescoço solto.', syl: 'ê ô (como um chamado)', mode: 'junto', mel: '5:1.5 3:2.5 r:1 5:1.5 3:2.5 r:1 6 5 3:2', lyr: 'ê ô ê ô ê ê ô', bpm: 88, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 70 } },
        { id: 'estilo-5b', name: 'Twang de pato', desc: 'A escala de cinco notas em "nhé", com som pequeno, brilhante e meio feio, como um pato; nada de volume.', syl: 'nhé', mode: 'junto', mel: M.cinco, bpm: 90, zone: 'mid', dir: 'up', steps: 6, goal: { m: 'afin', v: 75 } },
        { id: 'estilo-5c', name: 'Gancho pop', desc: 'Um refrão curto de pop com entradas no contratempo e uma nota que atravessa a batida, cantado com dicção de fala.', syl: 'na', mode: 'junto', mel: 'r:0.5 1:0.5 1:0.5 2:0.5 3 2:0.5 1:0.5 r:0.5 1:0.5 1:0.5 2:0.5 3:0.5 5:1.5 3:0.5 2 1:0.5 1:2', bpm: 92, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 75 } },
        { id: 'estilo-5d', name: 'Belting curto', desc: 'Frases curtas com a força do chamado no meio da voz; no máximo uma série por dia, e pare se arranhar.', syl: 'éi (aberto, como no chamado)', mode: 'junto', mel: '1 3 5:3 r:1 5 6 5 3:2 1:2', bpm: 84, zone: 'mid', dir: 'up', steps: 4, goal: { m: 'afin', v: 70 } }
      ]
    },
    {
      id: 'estilo-6',
      name: 'R&B e soul',
      level: 3,
      goal: 'Cantar com groove, colorir a melodia com blue notes e fazer runs curtos, afinados e na medida.',
      text: [
        'O soul nasceu quando a voz do gospel saiu da igreja e foi para o rádio, com Ray Charles, Sam Cooke e Aretha Franklin. No Brasil, o soul ganhou voz com Tim Maia, Cassiano e Hyldon nos anos 1970 e com Sandra de Sá nos anos 1980, misturado com o nosso balanço. O R&B de hoje é o pop herdeiro dessa tradição. Em todos eles aparecem três marcas: o groove, as blue notes e os ornamentos rápidos, chamados de runs.',
        'Blue note é uma nota "entre" as notas da escala maior, herdada do blues: a terça um pouco abaixada, a sétima abaixada e, às vezes, a quinta abaixada. Cantada sobre um acorde maior, ela cria aquela cor de dor gostosa que define o estilo. Muitas vezes a voz encosta na terça abaixada e desliza para a terça normal. Nos exercícios, essas notas aparecem como b3 e b7, e também na escala menor.',
        'Run é uma sequência rápida de notas numa só sílaba, quase sempre na escala pentatônica, que tem cinco notas e nenhum semitom. Cada nota precisa existir: um run embolado soa como insegurança, um run limpo soa como domínio. O treino é sempre o mesmo, devagar no começo e subindo o andamento aos poucos, com a voz leve e pequena. Run pesado e forte cansa a voz e perde a precisão; se aparecer dor ou ardor, pare.',
        'Groove é o jeito de colocar as sílabas no ritmo: consoantes percussivas, notas de um quarto de tempo (as semicolcheias) bem precisas e o corpo se mexendo junto. Ornamento demais mata o groove, e esse é o erro mais comum de quem descobre os runs. Use os enfeites no fim das frases e deixe o meio da frase limpo e rítmico. Menos é mais, e o melhor ornamento é o que parece inevitável.'
      ],
      steps: [
        'Em "Blue note na terça", sinta a terça abaixada encostando e deslizando para a terça normal. Ouça a diferença de cor.',
        'No "Groove em semicolcheias", fale o ritmo com "du" antes de cantar e mexa o corpo junto com o tempo.',
        'No "Run pentatônico", comece no andamento lento e registre o andamento mais rápido em que todas as notas saem limpas.',
        'Em "Enfeite no fim da frase", ouça o ornamento no piano e repita igual. Depois experimente o mesmo enfeite no fim de uma frase da sua música.',
        'Grave e ouça: se há enfeites em toda frase, tire metade.'
      ],
      mistakes: [
        'Runs embolados. Correção: diminua o andamento até cada nota aparecer no traço do microfone e suba de 4 em 4 batidas por minuto.',
        'Ornamento em todo lugar. Correção: escolha um ou dois momentos por estrofe. O resto da melodia fica limpo.',
        'Blue note que parece desafinação. Correção: a blue note é intencional e firme. Cante a terça abaixada com segurança e deslize de propósito.',
        'Run com a voz pesada. Correção: runs se fazem com a voz leve e pequena. Se o pescoço endurece, cante mais baixo.'
      ],
      tips: [
        'Aprenda runs de cantores de que você gosta, devagar, como se fossem melodias. Depois crie os seus com as mesmas notas.',
        'Cante a escala pentatônica todos os dias no aquecimento, subindo e descendo, para os runs ficarem naturais.',
        'Groove se aprende com o corpo: cante em pé, passando o peso de um pé para o outro no tempo.'
      ],
      listen: [
        'Azul da Cor do Mar — Tim Maia (soul brasileiro com groove e ornamentos na medida)',
        'Olhos Coloridos — Sandra de Sá (voz cheia e expressiva no soul brasileiro)',
        "Ain't No Sunshine — Bill Withers (groove simples, sem nenhum enfeite sobrando)",
        "Fallin' — Alicia Keys (blue notes e runs curtos no fim das frases)"
      ],
      ex: [
        { id: 'estilo-6a', name: 'Blue note na terça', desc: 'Frase com a terça abaixada deslizando para a terça normal e com a sétima abaixada, a cor típica do soul.', syl: 'ô', mode: 'junto', mel: '1 b3:0.5 3:1.5 5:2 r:1 5 b7:0.5 6:0.5 5 b3:0.5 3:0.5 1:3', bpm: 72, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 75 } },
        { id: 'estilo-6b', name: 'Groove em semicolcheias', desc: 'Frase em tom menor com sílabas curtas e percussivas encaixadas entre as batidas, com o corpo marcando o tempo.', syl: 'du', mode: 'junto', minor: true, mel: 'r:0.5 5:0.25 5:0.25 7:0.5 5:0.5 4:0.25 3:0.25 1 r:0.75 1:0.25 3:0.5 4:0.5 3:0.25 1:0.75 7,:0.5 1', bpm: 76, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 75 } },
        { id: 'estilo-6c', name: 'Run pentatônico', desc: 'Subida e descida rápida na pentatônica menor, numa sílaba só, com a voz leve; acelere só quando todas as notas saírem limpas.', syl: 'ô', mode: 'junto', minor: true, mel: '1:0.5 3:0.5 4:0.5 5:0.5 7:0.5 8:1.5 7:0.5 5:0.5 4:0.5 3:0.5 1:2', bpm: 60, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'bpm', v: 92 } },
        { id: 'estilo-6d', name: 'Enfeite no fim da frase', desc: 'Ouça a frase com um pequeno enfeite antes da última nota e repita igual, com leveza e afinação.', syl: 'ô', mode: 'eco', mel: '3 5 6:2 5:0.25 6:0.25 5:0.5 3:0.5 2:0.5 1:3', bpm: 72, zone: 'mid', dir: 'up', steps: 5, goal: { m: 'afin', v: 80 } }
      ]
    }
  ]
};
