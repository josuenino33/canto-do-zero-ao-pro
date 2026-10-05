# Canto do zero ao pro

**Método Ressoar** é uma escola de canto grátis que roda no navegador e instala no celular. Tem currículo do primeiro som ao palco, piano que guia cada exercício no seu tom, um professor que ouve a sua afinação pelo microfone, teste de extensão vocal e registro da sua evolução.

Feito para quem acha que "não tem jeito pra coisa": só alcança os graves, grita quando a música sobe ou sai do tom. Canto é coordenação treinável, e o app mostra a cada exercício onde a voz está.

Não precisa de servidor, de conta nem de mensalidade. Seus dados ficam no seu aparelho.

## O que tem

- **Trilha:** 15 módulos, 89 lições e 311 exercícios, com aula completa (explicação, passo a passo, erros comuns, dicas e músicas para ouvir). Os módulos são corpo, postura e respiração; saúde vocal e desaquecimento; voz sem grito (semioclusão: lábios, língua, "ng", canudo); afinação; ressonância e vogais; ouvido para cantores; graves com corpo; registros (peito, cabeça e falsete); agudos sem gritar (passagem e voz mista); volume e dinâmica; ritmo, dicção e fraseado; agilidade; harmonia e segunda voz; estilos brasileiros e populares; interpretação, repertório e palco.
- **Sala de treino:** o piano dá o acorde e toca a melodia no modo eco (você ouve e depois repete) ou junto. A escada de tons sobe e desce de meio em meio tom dentro da sua extensão, com bordão, tom suave para deslizes, ajuste de tom (−½ e +½) e andamento. Exercícios de respiração têm um guia com círculo que cresce e diminui.
- **Professor que ouve:** pelo microfone, desenha a sua voz sobre as notas em tempo real (verde = afinado), dá a nota de afinação de 0 a 100, diz se você tende a cantar abaixo ou acima, qual nota da melodia sai fora, em que tom a afinação cai (sua região de passagem) e a nota mais aguda que saiu afinada. Também grava o treino.
- **Minha voz:** teste de extensão guiado (grave, agudo sem grito e falsete), com tipo de voz provável e zona confortável que ajusta todos os exercícios; afinador de voz com nota de referência e bordão; teclado; "tom certo para a música" (diz quantos semitons subir ou descer para a melodia caber na sua voz); registro de treino livre.
- **Aula de hoje:** aquecimento, afinação, foco nos seus objetivos, revisão e desaquecimento, no tempo que você tiver.
- **Evolução:** extensão vocal a cada teste, afinação do microfone ao longo do tempo, minutos por semana, calendário, curva de cada exercício e progresso por módulo.
- **Professor:** orientações automáticas a partir dos seus registros, sem internet (inclui alertas de rouquidão e de agudo com grito). Opcionalmente, conversa com IA usando uma chave gratuita do Google Gemini.
- **Funciona sem internet** depois de instalado. Só o Gemini precisa de conexão.

**Abrir o app:** https://josuenino33.github.io/canto-do-zero-ao-pro/

## Usar no celular

- **Android (APK):** baixe [canto-do-zero-ao-pro.apk](https://github.com/josuenino33/apps-android/releases/latest/download/canto-do-zero-ao-pro.apk) no celular, toque no arquivo e em **Instalar** (na primeira vez o Android pede para permitir instalar apps do navegador). O APK é montado no repositório [apps-android](https://github.com/josuenino33/apps-android) e abre este site em tela cheia, então as atualizações chegam sozinhas.
- **Android (Chrome), sem APK:** menu ⋮, depois "Instalar app" ou "Adicionar à tela inicial".
- **iPhone (Safari):** botão Compartilhar, depois "Adicionar à Tela de Início".

O microfone só funciona por endereço seguro (https), como o do GitHub Pages. Use fone de ouvido quando puder: assim o microfone escuta só a sua voz. Sem fone, com o microfone ligado, o piano só dá o acorde e as notas do modo eco.

## Seus dados

Tudo fica no navegador do aparelho (IndexedDB). Para não perder nada:

1. Em **Ajustes → Backup**, toque em "Baixar backup" ou "Compartilhar backup" de vez em quando. O app lembra você depois de 7 dias.
2. Guarde o arquivo `.json` no Google Drive, no e-mail ou onde preferir.
3. Para trocar de aparelho, use "Restaurar de um arquivo".

As gravações de áudio não entram no backup; baixe as que quiser guardar em Ajustes → Gravações.

## Professor com IA (opcional)

1. Entre em [aistudio.google.com/apikey](https://aistudio.google.com/apikey) com sua conta Google e crie uma chave.
2. No app, vá em **Ajustes → Professor IA**, cole a chave e toque em "Testar chave".

A chave fica só no seu aparelho e não vai para o backup nem para o repositório.

## Publicar no GitHub Pages

O site é servido pelo GitHub Pages a partir da branch `main`, pasta `/ (root)`, do repositório [josuenino33/canto-do-zero-ao-pro](https://github.com/josuenino33/canto-do-zero-ao-pro). A cada `git push` na `main`, a versão nova sai sozinha em um ou dois minutos, inclusive para quem usa o APK.

Não há etapa de compilação: o GitHub Pages serve os arquivos como estão.

## Desenvolvimento

Precisa só de Node.js (para os scripts de conferência) e de qualquer servidor estático.

```bash
python -m http.server 8081
```

Depois abra `http://localhost:8081`. O microfone funciona em `localhost`.

Scripts:

- `node tools/validate-curriculum.mjs` confere melodias, metas, campos das aulas e ids do currículo.
- `node tools/check-offline.mjs` confere se todos os arquivos estão na lista do modo offline (`sw.js`).
- `node tools/make-icons.mjs` gera os ícones.

Ao alterar qualquer arquivo do app, aumente `VERSION` no `sw.js` para os aparelhos instalados baixarem a versão nova.

### Estrutura

```
index.html, manifest.webmanifest, sw.js   página, instalação e modo offline
css/app.css                                visual (tema claro e escuro)
js/app.js                                  início, navegação e teclado
js/music.js                                notas, tipos de voz, escada de tons, linha do tempo, tom certo
js/audio.js                                piano, tom suave, bordão e o motor que toca os exercícios
js/pitch.js                                microfone: detecção de altura (YIN por FFT) e nota de afinação
js/roll.js                                 rolo de notas em tempo real (canvas)
js/store.js                                dados no aparelho, backup e restauração
js/stats.js, js/teacher.js                 metas, estatísticas, aula do dia e professor local
js/ai.js                                   professor com Gemini
js/charts.js                               gráficos e teclado em SVG
js/views/                                  telas
js/curriculum/                             currículo (um arquivo por módulo)
docs/CURRICULO.md                          como escrever ou editar aulas
```

Para criar ou corrigir aulas, veja [docs/CURRICULO.md](docs/CURRICULO.md).

## Limitações

- O microfone mede a altura (afinação), não o timbre nem o volume. Ele não sabe se você está gritando: por isso o registro pede "como a voz se sentiu", e é aí que você marca "Tenso" ou "Forçado".
- Ambiente barulhento e alto-falante alto atrapalham a medida. Fone de ouvido ajuda muito.
- A classificação de voz é uma referência a partir da extensão; timbre e região de passagem também contam.
- Nenhum app substitui uma aula presencial de vez em quando, e rouquidão que dura mais de 15 dias pede otorrinolaringologista e fonoaudiólogo.
