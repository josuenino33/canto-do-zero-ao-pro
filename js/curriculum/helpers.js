// Melodias de aquecimento prontas, em graus da escala (veja docs/CURRICULO.md).
export const M = {
  nota: '1:4',                                   // uma nota longa
  notaCurta: '1:2',
  dois: '1 2 1:2',                               // vizinha de cima
  tres: '1 2 3 2 1:2',                           // três notas
  cinco: '1 2 3 4 5 4 3 2 1:2',                  // escala de cinco notas, sobe e desce
  cincoDesce: '5 4 3 2 1:3',                     // desce da quinta
  arpejo: '1 3 5 3 1:2',                         // tríade
  arpejo8: '1 3 5 8 5 3 1:2',                    // tríade até a oitava
  arpejoDesce: '8 5 3 1:2',
  quinta: '1 5 1:2',                             // salto de quinta
  oitava: '1 8 1:2',                             // salto de oitava
  escala: '1 2 3 4 5 6 7 8 7 6 5 4 3 2 1:2',     // escala maior de uma oitava
  nona: '1 3 5 8 9 8 7 6 5 4 3 2 1:2',           // "escala de nona" (sobe em arpejo, desce em escala)
  sirene3: '1~3:2 3~1:2',
  sirene5: '1~5:2 5~1:2',                        // glissando de quinta
  sirene8: '1~8:3 8~1:3',                        // glissando de oitava
  suspiro: "8~1:3",                              // deslizar de cima para baixo
  brilha: '1 1 5 5 6 6 5:2 4 4 3 3 2 2 1:2',     // "Brilha, brilha, estrelinha" (domínio público)
  ode: '3 3 4 5 5 4 3 2 1 1 2 3 3:1.5 2:0.5 2:2' // "Ode à Alegria", Beethoven (domínio público)
};

// Sílabas de solfejo para escalas de 5 notas e para a escala inteira.
export const SOLFA = {
  cinco: 'dó ré mi fá sol fá mi ré dó',
  escala: 'dó ré mi fá sol lá si dó si lá sol fá mi ré dó',
  arpejo8: 'dó mi sol dó sol mi dó'
};

// Repete uma melodia n vezes, separada por uma pausa (em tempos).
export const rep = (mel, n, rest = 1) => Array(n).fill(mel).join(rest ? ` r:${rest} ` : ' ');
