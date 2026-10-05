# Como escrever o currículo do Método Ressoar

Cada módulo é um arquivo em `js/curriculum/<id>.js` que exporta um objeto por `export default`.
Depois de editar, rode `node tools/validate-curriculum.mjs` (ou só o módulo: `node tools/validate-curriculum.mjs afin`).

O módulo `afin.js` serve de exemplo completo.

## Módulo

```js
import { M, SOLFA, rep } from './helpers.js';

export default {
  id: 'afin',                       // igual ao nome do arquivo
  name: 'Afinação',
  desc: 'Uma frase dizendo o que o módulo ensina.',
  lessons: [ /* lições, em ordem de dificuldade */ ]
};
```

## Lição

```js
{
  id: 'afin-1',                     // começa com o id do módulo
  name: 'Ouvir e acertar uma nota',
  level: 1,                         // 1 iniciante, 2 intermediário, 3 avançado
  goal: 'Uma frase com o objetivo da lição.',
  text: ['Parágrafo 1', 'Parágrafo 2', '...'],   // explicação: 2 a 5 parágrafos
  steps: ['Passo 1', 'Passo 2', 'Passo 3'],       // como estudar, em ordem (3 a 6)
  mistakes: ['Erro comum e como corrigir', '...'],// 2 a 4
  tips: ['Dica', '...'],                          // 2 a 4
  listen: ['Música — Artista (o que ouvir nela)'],// opcional: referências reais
  ex: [ /* exercícios */ ]
}
```

## Exercício

```js
{
  id: 'afin-1a',                    // único no currículo inteiro
  name: 'Uma nota em "u"',
  desc: 'Uma frase dizendo o que fazer.',
  syl: 'u',                         // o que cantar: vogal, sílaba ou som (brr, mmm, ng...)
  mode: 'eco',                      // eco | junto | livre (padrão: junto)
  mel: '1:3',                       // melodia em graus (obrigatória em eco e junto)
  bpm: 70,                          // andamento da melodia, de 30 a 220 (padrão 80)
  zone: 'mid', dir: 'up', steps: 5, // escada de tons (veja abaixo)
  goal: { m: 'afin', v: 70 },       // métrica e meta (veja abaixo)
  // opcionais:
  lyr: 'dó ré mi fá sol fá mi ré dó', // uma sílaba por nota cantada (aparece dentro das barras)
  acc: '1 1 1 1 1',                 // o que o piano toca enquanto você canta (harmonia, segunda voz)
  minor: true,                      // graus na escala menor natural
  drone: true,                      // bordão (nota contínua da tônica) ligado por padrão
  solo: true,                       // no modo junto, o piano só dá o acorde inicial e você canta sozinho
  breath: [['Inspire pelo nariz', 4], ['Solte em "sss"', 8]], // só no modo livre: fases em segundos
  cycles: 4,                        // só no modo livre: quantas vezes o ciclo de breath se repete
  cool: true                        // exercício de desaquecimento (entra no fim da aula do dia)
}
```

### Modos

- `eco`: o piano dá o acorde, toca a melodia, e você repete sozinho. É o melhor modo para treinar o ouvido e
  para o microfone medir só a sua voz.
- `junto`: o piano dá o acorde e você canta junto com a melodia (ou só com `acc`, se houver).
- `livre`: sem piano. Respiração (com `breath`), relaxamento, leitura de texto. O app mostra um guia e um cronômetro.

### Melodia (`mel`, `acc`)

Graus da escala separados por espaço. O app escolhe a tônica de acordo com a voz da pessoa.

- `1` a `7`: graus; `8` é a oitava, `9` a segunda acima da oitava, até `15`.
- `b3`, `#4`: bemol e sustenido.
- `5,` uma oitava abaixo; `1'` uma oitava acima.
- `5:2` dura 2 tempos; `3:0.5` meio tempo. Padrão: 1 tempo.
- `1~8:4` glissando (sirene) do 1 até o 8 em 4 tempos.
- `r:1` pausa de 1 tempo.

Melodias prontas em `M` (helpers.js): `M.nota`, `M.tres`, `M.cinco`, `M.arpejo`, `M.arpejo8`, `M.oitava`, `M.escala`,
`M.nona`, `M.sirene5`, `M.sirene8`, `M.suspiro`, `M.brilha`, `M.ode` e outras. `SOLFA.cinco` tem as sílabas
dó ré mi para `M.cinco`. `rep(mel, n, pausa)` repete uma melodia.

Mantenha a melodia dentro de uma oitava e meia. Para a pessoa iniciante, uma quinta já basta.

### Escada de tons (`zone`, `dir`, `steps`)

Cada repetição da melodia acontece em um tom; `steps` é quantos tons. O app calcula a tônica pela extensão
confortável da pessoa (teste de voz) para a melodia caber inteira nela.

- `zone`: `low` (parte grave), `mid` (meio), `high` (parte aguda), `top` (termina alguns semitons acima do agudo
  confortável: exercícios de extensão), `bottom` (termina abaixo do grave confortável).
- `dir`: `up` sobe de meio em meio tom, `down` desce, `updown` sobe e desce, `stay` repete no mesmo tom.

### Metas (`goal`)

| `m` | o que mede | `v` |
| --- | --- | --- |
| `afin` | nota de afinação do microfone (0 a 100) | 40 a 100 (iniciante 65 a 75, avançado 85 a 90) |
| `top` | nota mais aguda cantada livre, sem grito | semitons acima do agudo confortável do primeiro teste (1 a 12) |
| `low` | nota mais grave com som | semitons abaixo do grave confortável do primeiro teste (1 a 12) |
| `sec` | segundos sustentando (fôlego, nota longa) | 3 a 120 |
| `bpm` | andamento limpo (agilidade) | maior que `bpm` do exercício, até 240 |
| `rep` | treinos registrados como "Solto" ou melhor | 1 a 20 |

Um exercício fica dominado quando a pessoa registra a meta com qualidade 4 ("Solto") ou 5 ("Solto e afinado").
Exercícios livres só podem usar `sec` ou `rep`.

## Estilo do texto

Português do Brasil, frases diretas, segunda pessoa ("você"). Sem travessão (—) no texto das aulas.
Nada de promessas milagrosas: canto é coordenação treinável. Sempre que houver esforço, lembre que dor,
rouquidão ou ardor são sinais para parar.
