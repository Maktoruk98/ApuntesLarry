/*
 * Subida a Firestore — Japonés de Viaje (18 lecciones)
 *
 * Cómo usar:
 * 1. Abre ApuntesLarry en el navegador (local o en producción) e inicia sesión con tu cuenta Google.
 * 2. Abre la consola de DevTools (F12 → pestaña "Console").
 * 3. Pega TODO este archivo y pulsa Enter.
 * 4. Ejecuta:  subirJapones()
 *
 * Reutiliza el objeto `db` ya inicializado por la propia app (mismo Firebase que usa el panel admin).
 * Escribe en: temas/japones-viaje/puntos/{firestoreId}
 * Es seguro volver a ejecutarlo: sobreescribe (no duplica) cada lección.
 *
 * NOTA: el día 1 se dejó tal cual (ya lo hizo el usuario y no quería rehacerlo).
 * Desde el día 2 en adelante, el vocabulario y los juegos están ampliados
 * (más contenido por día, a petición del usuario tras probar el día 1).
 */

var LECCIONES_JAPONES = {

  '01-fundamentos-y-cortesia': {
    contenido: `## Desarrollo
Día 1: los cimientos. Cinco vocales que se leen siempre igual (nada de trampas tipo inglés) y cuatro palabras de cortesía que te sacan de cualquier apuro desde que pisas el aeropuerto. Con esto ya puedes pedir perdón, dar las gracias, pedir algo por favor y responder sí o no.

## ⚡ En 10 segundos
**Sumimasen** = perdón / disculpe (sirve para casi todo). **Arigatou gozaimasu** = muchas gracias. **Onegaishimasu** = por favor, al pedir algo. **Hai / iie** = sí / no. Las vocales a-i-u-e-o se leen igual que en español, siempre.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| すみません | sumimasen | perdón / disculpe (llamar la atención, pedir paso, disculparse) |
| ありがとうございます | arigatou gozaimasu | muchas gracias (formal, la que usarás casi siempre) |
| お願いします | onegaishimasu | por favor (al pedir algo concreto) |
| はい | hai | sí |
| いいえ | iie | no |

**Vocales:** a · i · u · e · o — se pronuncian exactamente como en español. La u no es "iu" y la e no es "i", como pasaría leyéndolas a la inglesa.

## 🧠 Truco para recordar
Sumimasen es tu comodín: perdón, disculpe, oiga por favor, todo vale. Si dudas entre varias palabras, di sumimasen y listo. Para arigatou gozaimasu, imagina un gato (ari-**gato**-u) haciendo una reverencia agradecida. Y para las vocales: no le pongas acento inglés, léelas tal cual las leerías en español — a, i, u, e, o.

## 👁 confusión
Hai no siempre significa "sí" en el sentido de estar de acuerdo — muchas veces solo confirma que te están escuchando (como nuestro "ajá"), no que acepten lo que dices. Y arigatou a secas es informal entre amigos; con desconocidos o en tiendas, lo natural es siempre arigatou gozaimasu.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada palabra con su significado', instruccion: 'Toca una palabra japonesa y luego su significado en español.', pares: [
        { a: 'すみません (sumimasen)', b: 'Perdón / disculpe' },
        { a: 'ありがとうございます (arigatou gozaimasu)', b: 'Muchas gracias' },
        { a: 'お願いします (onegaishimasu)', b: 'Por favor' },
        { a: 'はい (hai)', b: 'Sí' },
        { a: 'いいえ (iie)', b: 'No' }
      ]},
      { tipo: 'clasifica', titulo: 'Cortesía o respuesta', instruccion: 'Arrastra cada palabra a su grupo.', categorias: ['Fórmulas de cortesía', 'Respuestas sí/no'], items: [
        { texto: 'Sumimasen', cat: 'Fórmulas de cortesía' }, { texto: 'Arigatou gozaimasu', cat: 'Fórmulas de cortesía' }, { texto: 'Onegaishimasu', cat: 'Fórmulas de cortesía' },
        { texto: 'Hai', cat: 'Respuestas sí/no' }, { texto: 'Iie', cat: 'Respuestas sí/no' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la situación', instruccion: 'Elige la palabra correcta para cada hueco.', banco: ['sumimasen', 'onegaishimasu', 'arigatou gozaimasu'], frases: [
        { texto: 'Se te cae algo delante de alguien. Dices: "___".', respuestas: ['sumimasen'] },
        { texto: 'Señalas un plato en el menú y quieres pedirlo: "Esto, ___".', respuestas: ['onegaishimasu'] },
        { texto: 'Te dan un regalo y quieres agradecerlo formalmente: "___".', respuestas: ['arigatou gozaimasu'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la interacción', instruccion: 'Pon los pasos en el orden correcto para pedir algo con educación.', pasos: [
        'Sumimasen (llamas la atención)', 'Señalas lo que quieres', 'Onegaishimasu (por favor)', 'Arigatou gozaimasu (al recibirlo)'
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: '"Hai" significa siempre que la otra persona está de acuerdo contigo.', esVerdadero: false },
        { texto: 'Las vocales japonesas se pronuncian igual que en español.', esVerdadero: true },
        { texto: '"Arigatou" a secas es la forma más formal de dar las gracias.', esVerdadero: false },
        { texto: '"Onegaishimasu" se usa para pedir algo concreto.', esVerdadero: true }
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la palabra que no pertenece al grupo.', preguntas: [
        { grupo: '¿Cuál de estas palabras NO es una respuesta de sí/no?', explicacion: 'Hai e iie responden sí/no; sumimasen sirve para disculparse o llamar la atención.', opciones: [
          { texto: 'Hai', intruso: false }, { texto: 'Iie', intruso: false }, { texto: 'Sumimasen', intruso: true }
        ]}
      ]}
    ]
  },

  '02-saludos-y-presentarte': {
    contenido: `## Desarrollo
Día 2: saluda según la hora del día, pregunta y responde cómo estás, di de dónde vienes, y despídete de varias formas. Además, los números del 1 al 20, la base de casi todo lo que vendrá después (contadores, precios, horas).

## ⚡ En 10 segundos
**Ohayou gozaimasu** (mañana), **konnichiwa** (tarde), **konbanwa** (al anochecer) son los tres saludos según la hora; **oyasumi nasai** es distinto, es para ir a dormir. **Hajimemashite** + **yoroshiku onegaishimasu** es el combo para presentarte. **O-genki desu ka?** = ¿cómo estás? Números: ichi a juu (1-10), luego juu-ichi, juu-ni... hasta ni-juu (20).

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| おはようございます | ohayou gozaimasu | buenos días |
| こんにちは | konnichiwa | hola / buenas tardes |
| こんばんは | konbanwa | buenas noches (al llegar, no al dormir) |
| おやすみなさい | oyasumi nasai | buenas noches (al irte a dormir) |
| はじめまして | hajimemashite | encantado (solo la primera vez que conoces a alguien) |
| 私は［nombre］です | watashi wa [nombre] desu | soy [nombre] |
| よろしくお願いします | yoroshiku onegaishimasu | mucho gusto / espero llevarme bien contigo |
| お元気ですか？ | o-genki desu ka? | ¿cómo estás? |
| 元気です | genki desu | estoy bien |
| お名前は？ | o-namae wa? | ¿cómo te llamas? (te preguntan) |
| ［país］から来ました | [país] kara kimashita | vengo de [país] (ej. Supein kara kimashita = vengo de España) |
| また明日 | mata ashita | hasta mañana |
| またね | mata ne | hasta luego (informal, con amigos) |

**Números 1-20:** 一 ichi, 二 ni, 三 san, 四 yon, 五 go, 六 roku, 七 nana, 八 hachi, 九 kyuu, 十 juu, 十一 juu-ichi, 十二 juu-ni... 十九 juu-kyuu, 二十 ni-juu. (Del 11 al 19 es simplemente "diez + número": juu-ichi = 10+1, juu-ni = 10+2...)

## 🧠 Truco para recordar
Konnichiwa suena a "¿qué día es hoy?" (nichi = día). Ohayou gozaimasu, de madrugada, como si dijeras "oh, ya voy". Oyasumi nasai solo se dice cuando de verdad te vas a la cama — nunca al despedirte en la calle. Del 11 al 20, japonés es más lógico que el español: 11 es literalmente "diez-uno" (juu-ichi), 12 es "diez-dos" (juu-ni), y así hasta el 19 — no hay que memorizar palabras nuevas, solo combinar.

## 👁 confusión
Konbanwa no es una despedida para ir a dormir — eso es oyasumi nasai, una palabra totalmente distinta. Konbanwa es un saludo, como konnichiwa pero de noche: se usa al llegar a un sitio, no al marcharte. Y yoroshiku onegaishimasu no tiene traducción literal exacta al español; es simplemente lo que se dice después de presentarte, sin más.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada saludo con su significado', instruccion: 'Toca un saludo y luego su significado.', pares: [
        { a: 'おはようございます (ohayou gozaimasu)', b: 'Buenos días' },
        { a: 'こんにちは (konnichiwa)', b: 'Hola / buenas tardes' },
        { a: 'こんばんは (konbanwa)', b: 'Buenas noches (al llegar)' },
        { a: 'おやすみなさい (oyasumi nasai)', b: 'Buenas noches (al dormir)' },
        { a: 'はじめまして (hajimemashite)', b: 'Encantado' },
        { a: 'お元気ですか？ (o-genki desu ka)', b: '¿Cómo estás?' },
        { a: 'また明日 (mata ashita)', b: 'Hasta mañana' }
      ]},
      { tipo: 'clasifica', titulo: 'Saludo, despedida o presentación', instruccion: 'Arrastra cada expresión a su grupo.', categorias: ['Saludo según la hora', 'Despedida', 'Al presentarte'], items: [
        { texto: 'Ohayou gozaimasu', cat: 'Saludo según la hora' }, { texto: 'Konnichiwa', cat: 'Saludo según la hora' }, { texto: 'Konbanwa', cat: 'Saludo según la hora' },
        { texto: 'Oyasumi nasai', cat: 'Despedida' }, { texto: 'Mata ashita', cat: 'Despedida' }, { texto: 'Mata ne', cat: 'Despedida' },
        { texto: 'Hajimemashite', cat: 'Al presentarte' }, { texto: 'Yoroshiku onegaishimasu', cat: 'Al presentarte' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la situación', instruccion: 'Elige la expresión correcta.', banco: ['ohayou gozaimasu', 'hajimemashite', 'oyasumi nasai', 'o-genki desu ka'], frases: [
        { texto: 'Son las 8 de la mañana. Saludas con: "___".', respuestas: ['ohayou gozaimasu'] },
        { texto: 'Conoces a alguien por primera vez. Lo primero que dices es: "___".', respuestas: ['hajimemashite'] },
        { texto: 'Te vas a la cama en el ryokan. Dices: "___".', respuestas: ['oyasumi nasai'] },
        { texto: 'Quieres preguntarle a alguien cómo está: "___".', respuestas: ['o-genki desu ka'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la presentación', instruccion: 'Pon en orden los pasos para presentarte correctamente.', pasos: [
        'Hajimemashite', 'Watashi wa [nombre] desu', '[País] kara kimashita', 'Yoroshiku onegaishimasu'
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Konbanwa se usa para despedirte antes de dormir.', esVerdadero: false },
        { texto: 'Oyasumi nasai se dice justo antes de irte a la cama.', esVerdadero: true },
        { texto: 'Juu-ichi significa "11".', esVerdadero: true },
        { texto: 'Ohayou gozaimasu se usa a cualquier hora del día.', esVerdadero: false }
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la palabra que no pertenece al grupo.', preguntas: [
        { grupo: '¿Cuál de estos NO es un saludo según la hora del día?', explicacion: 'Oyasumi nasai es para irte a dormir, no un saludo de llegada.', opciones: [
          { texto: 'Ohayou gozaimasu', intruso: false }, { texto: 'Konnichiwa', intruso: false }, { texto: 'Konbanwa', intruso: false }, { texto: 'Oyasumi nasai', intruso: true }
        ]}
      ]}
    ]
  },

  '03-pedir-ayuda-basica': {
    contenido: `## Desarrollo
Día 3: qué decir cuando algo no sale como esperabas. No entender, no saber si te van a entender a ti, pedir que repitan o vayan despacio, admitir que te has perdido, pedir ayuda urgente y localizar el baño (una de las preguntas que más vas a repetir en el viaje).

## ⚡ En 10 segundos
**Wakarimasen** = no entiendo. **Eigo ga hanasemasu ka?** = ¿habla inglés? **Mou ichido onegaishimasu** = repita, por favor. **Yukkuri onegaishimasu** = más despacio, por favor. **Mayoimashita** = me he perdido. **Daijoubu desu** = estoy bien / no pasa nada (muy versátil). **Toire wa doko desu ka?** = ¿dónde está el baño?

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| わかりません | wakarimasen | no entiendo |
| 英語が話せますか？ | eigo ga hanasemasu ka? | ¿habla inglés? |
| もう一度お願いします | mou ichido onegaishimasu | otra vez, por favor (repita) |
| ゆっくりお願いします | yukkuri onegaishimasu | más despacio, por favor |
| 迷いました | mayoimashita | me he perdido |
| 大丈夫です | daijoubu desu | estoy bien / no pasa nada / tranquilo |
| 大丈夫ですか？ | daijoubu desu ka? | ¿estás bien? (te lo preguntan) |
| 助けてください | tasukete kudasai | ¡ayúdeme, por favor! (más urgente que sumimasen) |
| ちょっと待ってください | chotto matte kudasai | espere un momento, por favor |
| トイレはどこですか？ | toire wa doko desu ka? | ¿dónde está el baño? |
| ここはどこですか？ | koko wa doko desu ka? | ¿dónde estoy? |
| 日本語が下手です | nihongo ga heta desu | hablo mal japonés (para dar contexto antes de pedir ayuda) |

## 🧠 Truco para recordar
Wakarimasen: wakaru = entender, + masen (negativo). Mou ichido = literalmente "una vez más". Daijoubu es tu palabra comodín para casi cualquier situación tranquila: "estoy bien", "no pasa nada", "vale, tranquilo" — todo con la misma palabra. Toire suena casi como "toilet" en inglés, muy fácil de recordar.

## 👁 confusión
Eigo ga hanasemasu ka no significa que tú hables inglés, sino que preguntas si LA OTRA PERSONA lo habla. Y daijoubu desu ka (con "ka" al final, pregunta) es distinto de daijoubu desu (sin "ka", afirmación) — la diferencia de una sola sílaba cambia si preguntas o respondes.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: 'わかりません (wakarimasen)', b: 'No entiendo' },
        { a: '英語が話せますか？ (eigo ga hanasemasu ka)', b: '¿Habla inglés?' },
        { a: 'もう一度お願いします', b: 'Repita, por favor' },
        { a: '迷いました (mayoimashita)', b: 'Me he perdido' },
        { a: '大丈夫です (daijoubu desu)', b: 'Estoy bien / no pasa nada' },
        { a: 'トイレはどこですか？', b: '¿Dónde está el baño?' },
        { a: '助けてください (tasukete kudasai)', b: '¡Ayúdeme, por favor!' }
      ]},
      { tipo: 'clasifica', titulo: 'Facilitar, expresar problema o preguntar', instruccion: 'Arrastra cada frase a su grupo.', categorias: ['Para facilitar la comunicación', 'Para expresar un problema urgente', 'Para preguntar dónde está algo'], items: [
        { texto: 'Mou ichido onegaishimasu', cat: 'Para facilitar la comunicación' }, { texto: 'Yukkuri onegaishimasu', cat: 'Para facilitar la comunicación' },
        { texto: 'Mayoimashita', cat: 'Para expresar un problema urgente' }, { texto: 'Tasukete kudasai', cat: 'Para expresar un problema urgente' },
        { texto: 'Toire wa doko desu ka', cat: 'Para preguntar dónde está algo' }, { texto: 'Koko wa doko desu ka', cat: 'Para preguntar dónde está algo' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la situación', instruccion: 'Elige la frase correcta.', banco: ['wakarimasen', 'toire wa doko desu ka', 'daijoubu desu', 'tasukete kudasai'], frases: [
        { texto: 'No entiendes lo que te acaban de decir: "___".', respuestas: ['wakarimasen'] },
        { texto: 'Necesitas ir al baño urgentemente: "___".', respuestas: ['toire wa doko desu ka'] },
        { texto: 'Alguien te pregunta si estás bien tras un tropiezo leve, respondes: "___".', respuestas: ['daijoubu desu'] },
        { texto: 'Es una situación realmente urgente: "___".', respuestas: ['tasukete kudasai'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la situación', instruccion: 'Estás perdido y pides ayuda. Ordena los pasos.', pasos: [
        'Sumimasen (llamas la atención)', 'Mayoimashita (explicas que estás perdido)', 'Eigo ga hanasemasu ka (preguntas si te pueden ayudar en inglés)', 'Mou ichido onegaishimasu (si no entiendes la respuesta)'
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Eigo ga hanasemasu ka pregunta si TÚ hablas japonés.', esVerdadero: false },
        { texto: 'Daijoubu desu ka (con "ka") es una pregunta.', esVerdadero: true },
        { texto: 'Yukkuri onegaishimasu sirve para pedir que hablen más despacio.', esVerdadero: true },
        { texto: 'Tasukete kudasai se usa para pedir la cuenta en un restaurante.', esVerdadero: false }
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la expresión que no pertenece al grupo.', preguntas: [
        { grupo: '¿Cuál de estas NO sirve para pedir que te repitan o vayan más despacio?', explicacion: 'Mayoimashita es "me he perdido", no tiene que ver con pedir que repitan.', opciones: [
          { texto: 'Mou ichido onegaishimasu', intruso: false }, { texto: 'Yukkuri onegaishimasu', intruso: false }, { texto: 'Mayoimashita', intruso: true }
        ]}
      ]}
    ]
  },

  '04-contadores': {
    contenido: `## Desarrollo
Día 4: en japonés no se cuenta igual a objetos que a personas — hay dos series de números distintas, y hoy las completas del 1 al 10 en ambas, más las preguntas para usarlas ("¿cuántos?" y "¿cuántas personas?"). Es uno de los puntos donde más se enreda todo el mundo al principio, así que vamos con calma.

## ⚡ En 10 segundos
Para **objetos** (1-10): hitotsu, futatsu, mittsu, yottsu, itsutsu, muttsu, nanatsu, yattsu, kokonotsu, tou. Para **personas** (1-10): hitori, futari, san-nin, yonin, gonin, rokunin, nananin, hachinin, kyuunin, juunin. Para preguntar: **ikutsu desu ka?** (¿cuántos objetos?) y **nan-nin desu ka?** (¿cuántas personas?). Para "4 personas" se dice siempre **yonin**, nunca "shinin".

## ✅ Lo esencial

| Cantidad | Objetos (contador genérico) | Personas |
|---|---|---|
| 1 | 一つ hitotsu | 一人 hitori |
| 2 | 二つ futatsu | 二人 futari |
| 3 | 三つ mittsu | 三人 san-nin |
| 4 | 四つ yottsu | 四人 yonin |
| 5 | 五つ itsutsu | 五人 gonin |
| 6 | 六つ muttsu | 六人 rokunin |
| 7 | 七つ nanatsu | 七人 nananin |
| 8 | 八つ yattsu | 八人 hachinin |
| 9 | 九つ kokonotsu | 九人 kyuunin |
| 10 | 十 tou | 十人 juunin |

**Preguntas:** いくつですか (ikutsu desu ka) = ¿cuántos objetos? · 何人ですか (nan-nin desu ka) = ¿cuántas personas?

## 🧠 Truco para recordar
Los contadores de objetos del 1 al 9 siempre terminan en "-tsu" (hitotsu, futatsu... kokonotsu); el 10 rompe el patrón y es simplemente "tou". Los de personas usan "-ri" solo en el 1 y el 2 (hitori, futari) y a partir de 3 cambian a "-nin" (san-nin, yonin... juunin) — fíjate que a partir de aquí "-nin" se pega directamente al número normal que ya sabes del día 2 (roku=6 → rokunin, hachi=8 → hachinin).

## 👁 confusión
Para "4 personas" se dice **yonin**, casi nunca "shinin". El número 4 tiene dos lecturas posibles (yon / shi), pero shi también significa "muerte" — shinin (死人) literalmente significa "persona muerta". Por eso los japoneses evitan shi en muchos contextos y usan yon, especialmente al contar personas. Lo mismo pasa con el 7: nananin es más habitual que "shichinin" para personas.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada contador con su cantidad', instruccion: 'Toca un contador y luego su cantidad.', pares: [
        { a: '一つ (hitotsu)', b: '1 objeto' }, { a: '五つ (itsutsu)', b: '5 objetos' }, { a: '十 (tou)', b: '10 objetos' },
        { a: '一人 (hitori)', b: '1 persona' }, { a: '四人 (yonin)', b: '4 personas' }, { a: '十人 (juunin)', b: '10 personas' }
      ]},
      { tipo: 'clasifica', titulo: 'Contador de objetos o de personas', instruccion: 'Arrastra cada palabra a su grupo.', categorias: ['Contador de objetos', 'Contador de personas'], items: [
        { texto: 'Hitotsu', cat: 'Contador de objetos' }, { texto: 'Muttsu', cat: 'Contador de objetos' }, { texto: 'Kokonotsu', cat: 'Contador de objetos' },
        { texto: 'Hitori', cat: 'Contador de personas' }, { texto: 'Rokunin', cat: 'Contador de personas' }, { texto: 'Kyuunin', cat: 'Contador de personas' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la situación', instruccion: 'Elige el contador o la pregunta correcta.', banco: ['hitori', 'nan-nin desu ka', 'ikutsu desu ka'], frases: [
        { texto: 'Vas a comer solo. Dices: "___ desu" (para una persona).', respuestas: ['hitori'] },
        { texto: 'Quieres saber cuántas personas sois en el grupo de al lado: "___".', respuestas: ['nan-nin desu ka'] },
        { texto: 'Quieres saber cuántas manzanas hay en la cesta: "___".', respuestas: ['ikutsu desu ka'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la secuencia', instruccion: 'Pon los contadores de objetos en orden ascendente.', pasos: [
        'Hitotsu (1)', 'Yottsu (4)', 'Nanatsu (7)', 'Tou (10)'
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Yonin significa "4 personas".', esVerdadero: true },
        { texto: '"Shinin" es una forma correcta y común de decir "4 personas".', esVerdadero: false },
        { texto: 'El contador de objetos hasta 9 siempre termina en "-tsu".', esVerdadero: true },
        { texto: 'Tou (10 objetos) sigue el mismo patrón que hitotsu, futatsu...', esVerdadero: false }
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la palabra que no pertenece al grupo.', preguntas: [
        { grupo: '¿Cuál de estos NO es un contador de objetos?', explicacion: 'Hitori es contador de personas; el resto son de objetos.', opciones: [
          { texto: 'Hitotsu', intruso: false }, { texto: 'Muttsu', intruso: false }, { texto: 'Kokonotsu', intruso: false }, { texto: 'Hitori', intruso: true }
        ]}
      ]}
    ]
  },

  '05-restaurantes-i': {
    contenido: `## Desarrollo
Día 5: entrar en un restaurante japonés tiene su propio pequeño ritual. Hoy aprendes a reconocerlo, decir si tienes reserva o no, elegir entre mesa y barra, y responder cuando te preguntan cuántos sois — reutilizando los contadores de personas del día 4.

## ⚡ En 10 segundos
Al entrar te dirán **irasshaimase** (no hace falta responder). Te preguntarán **nan-mei sama desu ka?** (¿cuántos sois?) y respondes con hitori desu / futari desu, o el número + mei. Si tienes reserva: **yoyaku shite imasu**; si no: **yoyaku shite imasen**. Luego **kochira e douzo** (por aquí, por favor) te lleva a la mesa.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| いらっしゃいませ | irasshaimase | "¡bienvenido!" (lo dice el personal, tú no respondes nada) |
| 何名様ですか？ | nan-mei sama desu ka? | ¿cuántas personas son? (te lo preguntan a ti) |
| 一人です / 二人です | hitori desu / futari desu | soy solo / somos dos |
| 予約しています | yoyaku shite imasu | tengo una reserva |
| 予約していません | yoyaku shite imasen | no tengo reserva |
| 待ちますか？ | machimasu ka? | ¿esperará? (si hay cola, te preguntan) |
| 待ちます | machimasu | esperaré |
| カウンター席 | kauntaa seki | sitio en la barra |
| テーブル席 | teeburu seki | mesa |
| メニューをください | menyuu o kudasai | la carta, por favor |
| こちらへどうぞ | kochira e douzo | por aquí, por favor |
| すみません | sumimasen | (para llamar al camarero desde la mesa) |

## 🧠 Truco para recordar
Mei es la versión formal/educada de nin (personas) que se usa en restaurantes y hoteles — pero puedes responder igual con los contadores que ya sabes del día 4. Yoyaku shite imasu / yoyaku shite imasen es la misma raíz (yoyaku = reserva) con o sin negación (-masu / -masen), un patrón que verás una y otra vez en japonés.

## 👁 confusión
No confundas irasshaimase con algo que tengas que contestar — es un saludo de bienvenida que no requiere respuesta, ni siquiera un "gracias". Y llamar al camarero levantando la mano y diciendo sumimasen en voz clara es totalmente normal en Japón, no se considera maleducado como podría parecer.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: 'いらっしゃいませ (irasshaimase)', b: '"¡Bienvenido!" (no se responde)' },
        { a: '何名様ですか？', b: '¿Cuántas personas son?' },
        { a: '予約しています', b: 'Tengo una reserva' },
        { a: '予約していません', b: 'No tengo reserva' },
        { a: 'カウンター席 (kauntaa seki)', b: 'Sitio en la barra' },
        { a: 'メニューをください', b: 'La carta, por favor' },
        { a: 'こちらへどうぞ', b: 'Por aquí, por favor' }
      ]},
      { tipo: 'clasifica', titulo: 'Lo dice el personal o lo dices tú', instruccion: 'Arrastra cada frase a su grupo.', categorias: ['Lo dice el personal', 'Lo dices tú'], items: [
        { texto: 'Irasshaimase', cat: 'Lo dice el personal' }, { texto: 'Nan-mei sama desu ka', cat: 'Lo dice el personal' }, { texto: 'Kochira e douzo', cat: 'Lo dice el personal' }, { texto: 'Machimasu ka', cat: 'Lo dice el personal' },
        { texto: 'Hitori desu', cat: 'Lo dices tú' }, { texto: 'Yoyaku shite imasu', cat: 'Lo dices tú' }, { texto: 'Menyuu o kudasai', cat: 'Lo dices tú' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la situación', instruccion: 'Elige la frase correcta.', banco: ['futari desu', 'yoyaku shite imasu', 'kauntaa seki'], frases: [
        { texto: 'Entráis dos personas y os preguntan cuántos sois. Respondes: "___".', respuestas: ['futari desu'] },
        { texto: 'Reservaste mesa online y quieres confirmarlo: "___".', respuestas: ['yoyaku shite imasu'] },
        { texto: 'Prefieres sentarte en la barra en vez de en una mesa, pides: "___".', respuestas: ['kauntaa seki'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la llegada al restaurante', instruccion: 'Pon los pasos en orden.', pasos: [
        'Irasshaimase (te reciben)', 'Nan-mei sama desu ka (te preguntan cuántos sois)', 'Futari desu (respondes)', 'Kochira e douzo (os llevan a la mesa)'
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Hay que responder algo cuando te dicen "irasshaimase".', esVerdadero: false },
        { texto: 'Yoyaku shite imasen significa que SÍ tienes reserva.', esVerdadero: false },
        { texto: 'Decir "sumimasen" en voz alta para llamar al camarero se considera maleducado.', esVerdadero: false },
        { texto: 'Kauntaa seki es sentarse en la barra.', esVerdadero: true }
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la frase que no pertenece al grupo.', preguntas: [
        { grupo: '¿Cuál de estas frases NO la dice el personal del restaurante?', explicacion: 'Futari desu es tu respuesta, no algo que diga el personal.', opciones: [
          { texto: 'Irasshaimase', intruso: false }, { texto: 'Nan-mei sama desu ka', intruso: false }, { texto: 'Kochira e douzo', intruso: false }, { texto: 'Futari desu', intruso: true }
        ]}
      ]}
    ]
  },

  '06-restaurantes-ii': {
    contenido: `## Desarrollo
Día 6: ya estás sentado en la mesa. Ahora toca pedir, preguntar por recomendaciones y si algo pica, avisar de alergias, pedir agua o un plato extra, pagar y despedirte como es debido — con una frase que los japoneses dicen siempre, hasta en casa.

## ⚡ En 10 segundos
**Kore o kudasai** (esto, por favor, señalando). **Osusume wa nan desu ka?** (¿qué recomienda?). **[Alérgeno] arerugii ga arimasu** (tengo alergia a...). **Okaikei onegaishimasu** (la cuenta, por favor). **Gochisousama deshita** (gracias por la comida) se dice siempre al terminar, sin excepción.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| これをください | kore o kudasai | esto, por favor (señalando) |
| ［comida］はありますか？ | [comida] wa arimasu ka? | ¿tienen [comida]? |
| おすすめは何ですか？ | osusume wa nan desu ka? | ¿qué recomienda? |
| 辛いですか？ | karai desu ka? | ¿es picante? |
| 美味しいです | oishii desu | está rico (para elogiar la comida) |
| お水をください | o-mizu o kudasai | agua, por favor |
| ［alérgeno］アレルギーがあります | [alérgeno] arerugii ga arimasu | tengo alergia a [alérgeno] |
| 取り皿をください | torizara o kudasai | un plato para compartir, por favor |
| お会計お願いします | okaikei onegaishimasu | la cuenta, por favor |
| ごちそうさまでした | gochisousama deshita | gracias por la comida (al terminar) |

## 🧠 Truco para recordar
Kudasai = "por favor, dame" — más directo que onegaishimasu, perfecto cuando señalas algo en el menú. Karai suena parecido a "curry" (que suele ser picante) — asociación fácil. Oishii es de las primeras palabras que aprende cualquier turista porque se usa constantemente: dilo mientras comes y hará sonreír a cualquier camarero.

## 👁 confusión
Kudasai y onegaishimasu no son intercambiables al 100%: kudasai va pegado a algo que señalas o nombras ("kore o kudasai"), mientras que onegaishimasu funciona suelto para peticiones de servicio (la cuenta, un plato extra...). Y gochisousama deshita no es un "gracias" genérico (eso es arigatou) — es específico para la comida, y se dice siempre, sin excepción, al terminar.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: 'これをください (kore o kudasai)', b: 'Esto, por favor' },
        { a: 'おすすめは何ですか？', b: '¿Qué recomienda?' },
        { a: '辛いですか？ (karai desu ka)', b: '¿Es picante?' },
        { a: '美味しいです (oishii desu)', b: 'Está rico' },
        { a: 'お水をください', b: 'Agua, por favor' },
        { a: 'お会計お願いします', b: 'La cuenta, por favor' },
        { a: 'ごちそうさまでした', b: 'Gracias por la comida' }
      ]},
      { tipo: 'clasifica', titulo: 'Al pedir o al terminar', instruccion: 'Arrastra cada frase a su grupo.', categorias: ['Al pedir', 'Al terminar'], items: [
        { texto: 'Kore o kudasai', cat: 'Al pedir' }, { texto: 'Osusume wa nan desu ka', cat: 'Al pedir' }, { texto: 'O-mizu o kudasai', cat: 'Al pedir' }, { texto: 'Torizara o kudasai', cat: 'Al pedir' },
        { texto: 'Okaikei onegaishimasu', cat: 'Al terminar' }, { texto: 'Gochisousama deshita', cat: 'Al terminar' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la situación', instruccion: 'Elige la frase correcta.', banco: ['osusume wa nan desu ka', 'karai desu ka', 'gochisousama deshita'], frases: [
        { texto: 'No sabes qué pedir, preguntas: "___".', respuestas: ['osusume wa nan desu ka'] },
        { texto: 'No te gusta el picante y quieres asegurarte antes de pedir: "___".', respuestas: ['karai desu ka'] },
        { texto: 'Al salir del restaurante, dices: "___".', respuestas: ['gochisousama deshita'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la comida', instruccion: 'Pon los pasos en orden, desde pedir hasta despedirte.', pasos: [
        'Osusume wa nan desu ka (preguntas qué recomiendan)', 'Kore o kudasai (pides)', 'Okaikei onegaishimasu (pides la cuenta)', 'Gochisousama deshita (te despides)'
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Gochisousama deshita es un "gracias" genérico para cualquier situación.', esVerdadero: false },
        { texto: 'Oishii desu significa "está rico".', esVerdadero: true },
        { texto: 'Karai desu ka pregunta si algo es picante.', esVerdadero: true },
        { texto: 'Torizara es "la cuenta".', esVerdadero: false }
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la frase que no pertenece al grupo.', preguntas: [
        { grupo: '¿Cuál de estas frases NO se usa al terminar de comer?', explicacion: 'Kore o kudasai es para pedir, no para despedirte.', opciones: [
          { texto: 'Okaikei onegaishimasu', intruso: false }, { texto: 'Gochisousama deshita', intruso: false }, { texto: 'Kore o kudasai', intruso: true }
        ]}
      ]}
    ]
  },

  '07-repaso-dias-1-6': {
    contenido: `## Desarrollo
Día 7: repaso. Sin vocabulario nuevo — hoy toca consolidar cortesía, saludos, ayuda básica, contadores y restaurantes (días 1 a 6) antes de seguir con el transporte.

## ⚡ En 10 segundos
Si has hecho los días 1-6, ya sabes pedir perdón, saludar según la hora, presentarte y decir de dónde vienes, pedir ayuda cuando no entiendes o te pierdes, contar personas y objetos del 1 al 10, y moverte en un restaurante de principio a fin, incluyendo preguntar por recomendaciones y alergias.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| すみません | sumimasen | perdón / disculpe |
| ありがとうございます | arigatou gozaimasu | muchas gracias |
| こんにちは | konnichiwa | hola / buenas tardes |
| はじめまして | hajimemashite | encantado |
| ［país］から来ました | [país] kara kimashita | vengo de [país] |
| 大丈夫です | daijoubu desu | estoy bien / no pasa nada |
| 四人 | yonin | 4 personas |
| 二人です | futari desu | somos dos (personas) |
| おすすめは何ですか？ | osusume wa nan desu ka? | ¿qué recomienda? |
| これをください | kore o kudasai | esto, por favor |
| お会計お願いします | okaikei onegaishimasu | la cuenta, por favor |
| ごちそうさまでした | gochisousama deshita | gracias por la comida |

## 🧠 Truco para recordar
Agrupa mentalmente por bloques: cortesía (día 1), saludos y presentación (día 2), pedir ayuda (día 3), contar (día 4), restaurante (días 5-6). Si te atascas en un juego, piensa primero a qué bloque pertenece la situación.

## 👁 confusión
Los tres tropiezos más comunes de este bloque: hai no siempre significa "de acuerdo", irasshaimase no se responde, y para "4 personas" se dice yonin — nunca "shinin".`,
    juegos: [
      { tipo: 'conecta', titulo: 'Repaso: conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: 'Sumimasen', b: 'Perdón / disculpe' }, { a: 'Konnichiwa', b: 'Hola / buenas tardes' }, { a: 'Hajimemashite', b: 'Encantado' },
        { a: 'Mayoimashita', b: 'Me he perdido' }, { a: 'Futari desu', b: 'Somos dos' }, { a: 'Osusume wa nan desu ka', b: '¿Qué recomienda?' }, { a: 'Gochisousama deshita', b: 'Gracias por la comida' }, { a: 'Yonin', b: '4 personas' }
      ]},
      { tipo: 'clasifica', titulo: 'Repaso: ¿de qué día es cada frase?', instruccion: 'Arrastra cada frase a su bloque.', categorias: ['Cortesía y saludos (días 1-2)', 'Ayuda y contadores (días 3-4)', 'Restaurante (días 5-6)'], items: [
        { texto: 'Arigatou gozaimasu', cat: 'Cortesía y saludos (días 1-2)' }, { texto: 'O-genki desu ka', cat: 'Cortesía y saludos (días 1-2)' },
        { texto: 'Wakarimasen', cat: 'Ayuda y contadores (días 3-4)' }, { texto: 'Nan-nin desu ka', cat: 'Ayuda y contadores (días 3-4)' },
        { texto: 'Kore o kudasai', cat: 'Restaurante (días 5-6)' }, { texto: 'Okaikei onegaishimasu', cat: 'Restaurante (días 5-6)' }
      ]},
      { tipo: 'rellena', titulo: 'Repaso general', instruccion: 'Elige la frase correcta.', banco: ['mayoimashita', 'futari desu', 'gochisousama deshita', 'toire wa doko desu ka'], frases: [
        { texto: 'Te has perdido por la calle: "___".', respuestas: ['mayoimashita'] },
        { texto: 'Entráis dos al restaurante: "___".', respuestas: ['futari desu'] },
        { texto: 'Terminas de comer y sales: "___".', respuestas: ['gochisousama deshita'] },
        { texto: 'Necesitas encontrar un baño urgentemente: "___".', respuestas: ['toire wa doko desu ka'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena una comida completa', instruccion: 'Desde que entras hasta que sales del restaurante.', pasos: [
        'Irasshaimase (te reciben)', 'Futari desu (respondes cuántos sois)', 'Osusume wa nan desu ka (preguntas qué recomiendan)', 'Okaikei onegaishimasu (pides la cuenta)', 'Gochisousama deshita (te despides)'
      ]},
      { tipo: 'vf', titulo: 'Repaso: verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Hai significa siempre que la otra persona está de acuerdo.', esVerdadero: false },
        { texto: 'Irasshaimase requiere que respondas algo.', esVerdadero: false },
        { texto: 'Yonin es la forma correcta de decir "4 personas".', esVerdadero: true },
        { texto: 'Oyasumi nasai se usa para saludar al llegar a un sitio.', esVerdadero: false }
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la palabra que no pertenece al grupo.', preguntas: [
        { grupo: '¿Cuál de estas NO es un contador de personas?', explicacion: 'Yottsu es contador de objetos, no de personas.', opciones: [
          { texto: 'Hitori', intruso: false }, { texto: 'Futari', intruso: false }, { texto: 'Yonin', intruso: false }, { texto: 'Yottsu', intruso: true }
        ]}
      ]}
    ]
  },

  '08-transporte-i': {
    contenido: `## Desarrollo
Día 8: la estación de tren, tu punto de partida casi a diario en Japón. Preguntar dónde está, sacar billete, distinguir los tipos de tren, encontrar el andén correcto y no perder el último tren de la noche — un clásico que pilla a más de un turista.

## ⚡ En 10 segundos
**Eki wa doko desu ka?** = ¿dónde está la estación? **[Destino] made onegaishimasu** = hasta [destino], por favor. **Nan-ban-sen desu ka?** = ¿qué andén es? **Norikae** = transbordo. **Shuuden** = el último tren del día (¡ojo con perderlo!). Un **IC kaado** (Suica/Pasmo) te ahorra sacar billete cada vez.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| 駅はどこですか？ | eki wa doko desu ka? | ¿dónde está la estación? |
| 切符売り場はどこですか？ | kippu-uriba wa doko desu ka? | ¿dónde está la taquilla de billetes? |
| ［destino］までお願いします | [destino] made onegaishimasu | un billete hasta [destino], por favor |
| 何番線ですか？ | nan-ban-sen desu ka? | ¿qué andén / vía es? |
| 次の電車は何時ですか？ | tsugi no densha wa nanji desu ka? | ¿a qué hora es el próximo tren? |
| 特急 / 急行 / 各駅停車 | tokkyuu / kyuukou / kakueki-teisha | tren expreso limitado / expreso / local (para todas las paradas) |
| 終電 | shuuden | el último tren del día |
| 改札 | kaisatsu | control de acceso / torniquetes |
| 乗り換え | norikae | transbordo (cambiar de línea o tren) |
| ICカード | IC kaado | tarjeta prepago (Suica/Pasmo) para tocar y pasar |

## 🧠 Truco para recordar
"[Lugar] made" siempre significa "hasta [lugar]" — te sirve también fuera del tren, por ejemplo en taxi (lo verás mañana). Nan-ban-sen: nan = qué, ban = número, sen = vía. De los tres tipos de tren, quédate con que tokkyuu es el más rápido (para menos) y kakueki-teisha el más lento (para en todas) — cuanto más "exprés" suena la palabra, más rápido va.

## 👁 confusión
El shuuden (último tren) en Japón puede ser bastante más temprano de lo que esperarías, sobre todo fuera de las grandes ciudades — no des por hecho que hay trenes toda la noche como en tu ciudad. Y norikae no es "bajarse del tren y ya está" — es "cambiar de tren o de línea", normalmente en la misma estación o una conectada.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: '駅はどこですか？', b: '¿Dónde está la estación?' },
        { a: '何番線ですか？', b: '¿Qué andén es?' },
        { a: '乗り換え (norikae)', b: 'Transbordo' },
        { a: '終電 (shuuden)', b: 'El último tren del día' },
        { a: '改札 (kaisatsu)', b: 'Control de acceso' },
        { a: 'ICカード', b: 'Tarjeta prepago' },
        { a: '切符売り場', b: 'Taquilla de billetes' }
      ]},
      { tipo: 'clasifica', titulo: 'Preguntar o moverse/pagar', instruccion: 'Arrastra cada elemento a su grupo.', categorias: ['Preguntar', 'Moverse / pagar'], items: [
        { texto: 'Eki wa doko desu ka', cat: 'Preguntar' }, { texto: 'Nan-ban-sen desu ka', cat: 'Preguntar' }, { texto: 'Tsugi no densha wa nanji desu ka', cat: 'Preguntar' },
        { texto: 'Norikae', cat: 'Moverse / pagar' }, { texto: 'IC kaado', cat: 'Moverse / pagar' }, { texto: 'Kaisatsu', cat: 'Moverse / pagar' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la situación', instruccion: 'Elige la frase correcta.', banco: ['nan-ban-sen desu ka', 'shuuden', 'kippu-uriba wa doko desu ka'], frases: [
        { texto: 'Ya tienes billete pero no sabes a qué vía ir: "___".', respuestas: ['nan-ban-sen desu ka'] },
        { texto: 'Es tarde y no quieres quedarte tirado sin tren, preguntas por: "___".', respuestas: ['shuuden'] },
        { texto: 'Necesitas comprar el billete primero, buscas: "___".', respuestas: ['kippu-uriba wa doko desu ka'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena el trayecto en tren', instruccion: 'Pon los pasos en orden.', pasos: [
        'Eki wa doko desu ka (encuentras la estación)', 'Kippu-uriba wa doko desu ka (buscas la taquilla)', '[Destino] made onegaishimasu (sacas billete)', 'Nan-ban-sen desu ka (preguntas el andén)', 'Norikae (haces transbordo si toca)'
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Norikae significa bajarte del tren y salir de la estación.', esVerdadero: false },
        { texto: 'Shuuden es el último tren del día.', esVerdadero: true },
        { texto: 'Tokkyuu es el tipo de tren más lento, que para en todas las estaciones.', esVerdadero: false },
        { texto: 'Un IC kaado te permite tocar y pasar sin sacar billete cada vez.', esVerdadero: true }
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la palabra que no pertenece al grupo.', preguntas: [
        { grupo: '¿Cuál de estas NO es un tipo de tren?', explicacion: 'Norikae es "transbordo", no un tipo de tren.', opciones: [
          { texto: 'Tokkyuu', intruso: false }, { texto: 'Kyuukou', intruso: false }, { texto: 'Kakueki-teisha', intruso: false }, { texto: 'Norikae', intruso: true }
        ]}
      ]}
    ]
  },

  '09-transporte-ii': {
    contenido: `## Desarrollo
Día 9: taxis, autobuses y saber decir por dónde. Reutilizas el patrón "made onegaishimasu" del día 8, ahora aplicado a un taxi y a un autobús, con direcciones básicas.

## ⚡ En 10 segundos
**Takushii** = taxi. **[Lugar] made onegaishimasu** = hasta [lugar], por favor. **Migi / hidari** = derecha / izquierda; **mae / ushiro** = delante / detrás. **Massugu** = recto. **Koko de tomete kudasai** = pare aquí, por favor. **Kono basu wa ~ ni ikimasu ka?** = ¿este autobús va a...?

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| タクシー | takushii | taxi |
| ［lugar］までお願いします | [lugar] made onegaishimasu | hasta [lugar], por favor (en el taxi) |
| 右 / 左 | migi / hidari | derecha / izquierda |
| 前 / うしろ | mae / ushiro | delante / detrás |
| まっすぐ | massugu | recto, todo recto |
| 曲がってください | magatte kudasai | gire, por favor |
| 近いです / 遠いです | chikai desu / tooi desu | está cerca / está lejos |
| ここで止めてください | koko de tomete kudasai | pare aquí, por favor |
| バス停 | basu-tei | parada de autobús |
| このバスは［lugar］に行きますか？ | kono basu wa [lugar] ni ikimasu ka? | ¿este autobús va a [lugar]? |

## 🧠 Truco para recordar
Reutilizas "made onegaishimasu" del día 8 — mismo patrón, ahora en taxi. Para no confundir migi/hidari, practica señalando con tu propia mano derecha mientras dices "migi". "Kono basu wa ~ ni ikimasu ka" es una plantilla: cambia solo el nombre del lugar al final.

## 👁 confusión
Las puertas traseras de los taxis japoneses se abren y cierran solas, controladas por el conductor — no tires ni empujes la puerta tú mismo, es un fallo típico de turistas. Y en autobús, en muchas ciudades de Japón se sube por la puerta trasera y se paga al bajar por delante — justo al revés de lo que esperarías en muchos países.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: 'タクシー (takushii)', b: 'Taxi' }, { a: '右 (migi)', b: 'Derecha' }, { a: '左 (hidari)', b: 'Izquierda' }, { a: 'まっすぐ (massugu)', b: 'Recto' },
        { a: 'ここで止めてください', b: 'Pare aquí, por favor' }, { a: 'バス停 (basu-tei)', b: 'Parada de autobús' }, { a: '曲がってください', b: 'Gire, por favor' }
      ]},
      { tipo: 'clasifica', titulo: 'Direcciones o vehículo', instruccion: 'Arrastra cada palabra a su grupo.', categorias: ['Dar direcciones', 'Sobre el taxi o el bus'], items: [
        { texto: 'Migi', cat: 'Dar direcciones' }, { texto: 'Hidari', cat: 'Dar direcciones' }, { texto: 'Massugu', cat: 'Dar direcciones' }, { texto: 'Chikai desu', cat: 'Dar direcciones' },
        { texto: 'Takushii', cat: 'Sobre el taxi o el bus' }, { texto: 'Basu-tei', cat: 'Sobre el taxi o el bus' }, { texto: 'Koko de tomete kudasai', cat: 'Sobre el taxi o el bus' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la situación', instruccion: 'Elige la palabra correcta.', banco: ['migi', 'massugu', 'kono basu wa'], frases: [
        { texto: 'Le indicas al taxista que gire a la derecha: "___".', respuestas: ['migi'] },
        { texto: 'Le dices que siga todo recto: "___".', respuestas: ['massugu'] },
        { texto: 'No sabes si el autobús va a tu destino, preguntas: "___ [lugar] ni ikimasu ka?".', respuestas: ['kono basu wa'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena el trayecto en taxi', instruccion: 'Pon los pasos en orden.', pasos: [
        'Takushii (subes al taxi)', '[Lugar] made onegaishimasu (dices el destino)', 'Migi / hidari / massugu (guías si hace falta)', 'Koko de tomete kudasai (pides parar)'
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Debes abrir tú mismo la puerta trasera del taxi.', esVerdadero: false },
        { texto: 'Massugu significa "recto".', esVerdadero: true },
        { texto: 'Mae significa "detrás".', esVerdadero: false },
        { texto: 'En muchos autobuses japoneses se sube por detrás y se paga al bajar.', esVerdadero: true }
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la palabra que no pertenece al grupo.', preguntas: [
        { grupo: '¿Cuál de estas NO es una dirección?', explicacion: 'Takushii es "taxi", no una dirección.', opciones: [
          { texto: 'Migi', intruso: false }, { texto: 'Hidari', intruso: false }, { texto: 'Massugu', intruso: false }, { texto: 'Takushii', intruso: true }
        ]}
      ]}
    ]
  },

  '10-alojamiento': {
    contenido: `## Desarrollo
Día 10: llegar al hotel o ryokan, hacer el check-in, dejar el equipaje si llegas antes de hora, y preguntar lo básico sobre tu habitación (llave, ascensor, desayuno, wifi).

## ⚡ En 10 segundos
**Chekku-in onegaishimasu** = check-in, por favor. **Yoyaku shite imasu** = tengo una reserva. **Nimotsu o azukete mo ii desu ka?** = ¿puedo dejar el equipaje? **Heya** = habitación, **kagi** = llave. **Chekku-auto wa nanji desu ka?** = ¿a qué hora es el check-out? **Wifi wa arimasu ka?** = ¿hay wifi?

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| チェックインお願いします | chekku-in onegaishimasu | check-in, por favor |
| 予約しています | yoyaku shite imasu | tengo una reserva |
| 荷物を預けてもいいですか？ | nimotsu o azukete mo ii desu ka? | ¿puedo dejar el equipaje? |
| 部屋 | heya | habitación |
| 鍵 | kagi | llave |
| エレベーターはどこですか？ | erebeetaa wa doko desu ka? | ¿dónde está el ascensor? |
| タオルをください | taoru o kudasai | una toalla, por favor |
| 朝食は何時からですか？ | choushoku wa nanji kara desu ka? | ¿desde qué hora es el desayuno? |
| チェックアウトは何時ですか？ | chekku-auto wa nanji desu ka? | ¿a qué hora es el check-out? |
| Wi-Fiはありますか？ | wifi wa arimasu ka? | ¿hay wifi? |

## 🧠 Truco para recordar
Chekku-in / chekku-auto son préstamos directos del inglés — fáciles de reconocer. "[Algo] wa arimasu ka?" (¿hay...?) y "[Algo] o kudasai" (deme..., por favor) son dos plantillas que ya conoces y que aquí se repiten con palabras nuevas: heya, kagi, taoru... solo cambia la pieza central.

## 👁 confusión
En un ryokan tradicional es normal quitarte los zapatos ya en la entrada (genkan) y usar zapatillas. Y los horarios pueden sorprender: el check-in a veces empieza más tarde (sobre las 15h) y el check-out es más temprano (sobre las 10h) que en muchos hoteles occidentales — por eso "nimotsu o azukete mo ii desu ka" es tan útil si llegas pronto o te vas tarde.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: 'チェックインお願いします', b: 'Check-in, por favor' }, { a: '荷物を預けてもいいですか？', b: '¿Puedo dejar el equipaje?' }, { a: '部屋 (heya)', b: 'Habitación' },
        { a: '鍵 (kagi)', b: 'Llave' }, { a: 'エレベーターはどこですか？', b: '¿Dónde está el ascensor?' }, { a: '朝食は何時からですか？', b: '¿Desde qué hora es el desayuno?' }
      ]},
      { tipo: 'clasifica', titulo: 'Llegada o preguntas del hotel', instruccion: 'Arrastra cada frase a su grupo.', categorias: ['Al llegar', 'Preguntas sobre el hotel'], items: [
        { texto: 'Chekku-in onegaishimasu', cat: 'Al llegar' }, { texto: 'Yoyaku shite imasu', cat: 'Al llegar' }, { texto: 'Nimotsu o azukete mo ii desu ka', cat: 'Al llegar' },
        { texto: 'Chekku-auto wa nanji desu ka', cat: 'Preguntas sobre el hotel' }, { texto: 'Choushoku wa nanji kara desu ka', cat: 'Preguntas sobre el hotel' }, { texto: 'Wifi wa arimasu ka', cat: 'Preguntas sobre el hotel' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la situación', instruccion: 'Elige la frase correcta.', banco: ['nimotsu o azukete mo ii desu ka', 'taoru o kudasai', 'erebeetaa wa doko desu ka'], frases: [
        { texto: 'Llegas 3 horas antes del check-in con las maletas: "___".', respuestas: ['nimotsu o azukete mo ii desu ka'] },
        { texto: 'Necesitas una toalla extra: "___".', respuestas: ['taoru o kudasai'] },
        { texto: 'No encuentras el ascensor: "___".', respuestas: ['erebeetaa wa doko desu ka'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena el check-in', instruccion: 'Pon los pasos en orden.', pasos: [
        'Chekku-in onegaishimasu (pides hacer el check-in)', 'Yoyaku shite imasu (confirmas tu reserva)', 'Wifi wa arimasu ka (preguntas por el wifi)', 'Chekku-auto wa nanji desu ka (preguntas la hora de salida)'
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Chekku-in y chekku-auto son préstamos del inglés.', esVerdadero: true },
        { texto: 'En un ryokan tradicional puedes entrar con zapatos hasta tu habitación.', esVerdadero: false },
        { texto: 'Nimotsu o azukete mo ii desu ka sirve para pedir dejar el equipaje.', esVerdadero: true },
        { texto: 'El check-out en Japón suele ser más tarde que en hoteles occidentales.', esVerdadero: false }
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la palabra que no pertenece al grupo.', preguntas: [
        { grupo: '¿Cuál de estas NO tiene que ver con el hotel?', explicacion: 'Norikae es del día de transporte, no de alojamiento.', opciones: [
          { texto: 'Chekku-in', intruso: false }, { texto: 'Heya', intruso: false }, { texto: 'Kagi', intruso: false }, { texto: 'Norikae', intruso: true }
        ]}
      ]}
    ]
  },

  '11-compras-i': {
    contenido: `## Desarrollo
Día 11: entrar en una tienda, preguntar precio y talla, pedir permiso para probarte algo, preguntar por otros colores, y saber decir que te lo vas a pensar sin resultar brusco.

## ⚡ En 10 segundos
**Ikura desu ka?** = ¿cuánto cuesta? **Saizu** = talla. **Shichaku shite mo ii desu ka?** = ¿puedo probármelo? **Chiisai / ookii** = pequeño / grande. **Hoka no iro wa arimasu ka?** = ¿hay de otro color? **Chotto kangaemasu** = lo voy a pensar (para salir de la tienda sin comprar, con educación).

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| いくらですか？ | ikura desu ka? | ¿cuánto cuesta? |
| これは | kore wa | esto (señalando) |
| サイズ | saizu | talla |
| 試着してもいいですか？ | shichaku shite mo ii desu ka? | ¿puedo probármelo? |
| 小さい / 大きい | chiisai / ookii | pequeño / grande |
| 他の色はありますか？ | hoka no iro wa arimasu ka? | ¿hay de otro color? |
| 何色がありますか？ | nani-iro ga arimasu ka? | ¿qué colores hay? |
| 気に入りました | ki ni irimashita | me gusta (esto) |
| ちょっと考えます | chotto kangaemasu | lo voy a pensar |

## 🧠 Truco para recordar
"[Verbo] te mo ii desu ka" es tu plantilla mágica para pedir permiso de hacer casi cualquier cosa — hoy "probarte algo", más adelante servirá para pedir permiso de hacer fotos. Chotto kangaemasu es tu salida educada perfecta: literal "lo pienso un poco", y nadie insistirá más después de oírlo.

## 👁 confusión
No es habitual regatear en tiendas japonesas — el precio de la etiqueta es fijo casi siempre, a diferencia de mercados de otros países. No lo intentes, puede resultar incómodo para el vendedor. Y decir directamente "no, gracias" puede sonar más brusco de lo que pretendes — chotto kangaemasu es la forma natural de irte sin comprar.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: 'いくらですか？ (ikura desu ka)', b: '¿Cuánto cuesta?' }, { a: 'サイズ (saizu)', b: 'Talla' }, { a: '試着してもいいですか？', b: '¿Puedo probármelo?' },
        { a: '他の色はありますか？', b: '¿Hay de otro color?' }, { a: '気に入りました', b: 'Me gusta (esto)' }, { a: 'ちょっと考えます', b: 'Lo voy a pensar' }
      ]},
      { tipo: 'clasifica', titulo: 'Preguntar o decidir', instruccion: 'Arrastra cada palabra a su grupo.', categorias: ['Preguntar', 'Decidir / responder'], items: [
        { texto: 'Ikura desu ka', cat: 'Preguntar' }, { texto: 'Shichaku shite mo ii desu ka', cat: 'Preguntar' }, { texto: 'Hoka no iro wa arimasu ka', cat: 'Preguntar' },
        { texto: 'Ki ni irimashita', cat: 'Decidir / responder' }, { texto: 'Chotto kangaemasu', cat: 'Decidir / responder' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la situación', instruccion: 'Elige la palabra correcta.', banco: ['ikura desu ka', 'hoka no iro wa arimasu ka', 'chotto kangaemasu'], frases: [
        { texto: 'No ves el precio en la etiqueta: "___".', respuestas: ['ikura desu ka'] },
        { texto: 'Te gusta la prenda pero no el color: "___".', respuestas: ['hoka no iro wa arimasu ka'] },
        { texto: 'No estás seguro de comprarlo, quieres salir sin ser brusco: "___".', respuestas: ['chotto kangaemasu'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la compra', instruccion: 'Pon los pasos en orden.', pasos: [
        'Ikura desu ka (preguntas el precio)', 'Saizu (preguntas por la talla)', 'Shichaku shite mo ii desu ka (pides probártelo)', 'Ki ni irimashita (decides que te gusta)'
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Es normal regatear el precio en tiendas japonesas.', esVerdadero: false },
        { texto: '"Te mo ii desu ka" sirve para pedir permiso.', esVerdadero: true },
        { texto: 'Chotto kangaemasu significa "me lo llevo ahora mismo".', esVerdadero: false },
        { texto: 'Ikura desu ka pregunta el precio.', esVerdadero: true }
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la palabra que no pertenece al grupo.', preguntas: [
        { grupo: '¿Cuál de estas NO describe un tamaño?', explicacion: 'Saizu es "talla" en general, no un tamaño concreto como chiisai/ookii.', opciones: [
          { texto: 'Chiisai', intruso: false }, { texto: 'Ookii', intruso: false }, { texto: 'Saizu', intruso: true }
        ]}
      ]}
    ]
  },

  '12-compras-ii': {
    contenido: `## Desarrollo
Día 12: llega el momento de pagar. Tarjeta o efectivo, tax-free si compras algo caro, el recibo, la típica pregunta sobre la bolsa, y un detalle muy japonés del konbini: separar lo frío de lo caliente.

## ⚡ En 10 segundos
**Kaado de haraemasu ka?** = ¿puedo pagar con tarjeta? **Genkin** = efectivo. **Men-zei** = libre de impuestos. **Reshiito o kudasai** = el recibo, por favor. Te preguntarán **fukuro wa irimasu ka?** (¿necesita bolsa?) — puedes responder **fukuro wa iranai desu**.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| カードで払えますか？ | kaado de haraemasu ka? | ¿puedo pagar con tarjeta? |
| 現金 | genkin | efectivo |
| 免税 | men-zei | libre de impuestos (tax-free) |
| レシートをください | reshiito o kudasai | el recibo, por favor |
| ポイントカードはありますか？ | pointo kaado wa arimasu ka? | ¿tiene tarjeta de puntos? (te preguntan) |
| 割引はありますか？ | waribiki wa arimasu ka? | ¿hay descuento? |
| 袋は要りますか？ | fukuro wa irimasu ka? | ¿necesita bolsa? (te preguntan) |
| 袋は要らないです | fukuro wa iranai desu | no necesito bolsa |
| 温かいものと冷たいものを分けてください | atatakai mono to tsumetai mono o wakete kudasai | separe lo caliente de lo frío, por favor (muy útil en konbini) |

## 🧠 Truco para recordar
"[Algo] de haraemasu ka" (¿puedo pagar con...?) es una plantilla reutilizable: kaado de / genkin de + haraemasu ka. El men-zei suele requerir enseñar el pasaporte en caja — llévalo encima cuando compres algo caro. La frase de "caliente y frío" es larga pero muy útil: en un konbini, si compras algo caliente (como un onigiri templado) junto con algo frío (un refresco), te lo separan en bolsas distintas si lo pides.

## 👁 confusión
Muchas tiendas pequeñas y restaurantes en Japón siguen siendo solo efectivo, aunque el país parezca muy tecnológico — no des por hecho que aceptan tarjeta en todas partes, lleva siempre algo de genkin encima. Y "pointo kaado" (tarjeta de puntos) es de la propia tienda, no tiene nada que ver con tu tarjeta de crédito — si no tienes una, simplemente di "iie, daijoubu desu" (no, tranquilo).`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: 'カードで払えますか？', b: '¿Puedo pagar con tarjeta?' }, { a: '現金 (genkin)', b: 'Efectivo' }, { a: '免税 (men-zei)', b: 'Libre de impuestos' },
        { a: 'レシートをください', b: 'El recibo, por favor' }, { a: '割引はありますか？', b: '¿Hay descuento?' }, { a: '袋は要らないです', b: 'No necesito bolsa' }
      ]},
      { tipo: 'clasifica', titulo: 'Pagar o bolsa', instruccion: 'Arrastra cada frase a su grupo.', categorias: ['Sobre el pago', 'Sobre la bolsa'], items: [
        { texto: 'Kaado de haraemasu ka', cat: 'Sobre el pago' }, { texto: 'Genkin', cat: 'Sobre el pago' }, { texto: 'Men-zei', cat: 'Sobre el pago' }, { texto: 'Reshiito o kudasai', cat: 'Sobre el pago' },
        { texto: 'Fukuro wa irimasu ka', cat: 'Sobre la bolsa' }, { texto: 'Fukuro wa iranai desu', cat: 'Sobre la bolsa' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la situación', instruccion: 'Elige la frase correcta.', banco: ['kaado de haraemasu ka', 'reshiito o kudasai', 'genkin'], frases: [
        { texto: 'Quieres saber si aceptan tarjeta: "___".', respuestas: ['kaado de haraemasu ka'] },
        { texto: 'Necesitas el ticket para justificar un gasto: "___".', respuestas: ['reshiito o kudasai'] },
        { texto: 'La tienda solo acepta dinero en mano, es decir: "___".', respuestas: ['genkin'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena el pago', instruccion: 'Pon los pasos en orden.', pasos: [
        'Kaado de haraemasu ka (preguntas si aceptan tarjeta)', 'Genkin (pagas en efectivo si no aceptan)', 'Fukuro wa irimasu ka (te preguntan por la bolsa)', 'Reshiito o kudasai (pides el recibo)'
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Todas las tiendas en Japón aceptan tarjeta sin excepción.', esVerdadero: false },
        { texto: 'Men-zei significa "libre de impuestos".', esVerdadero: true },
        { texto: 'Pointo kaado es tu propia tarjeta de crédito.', esVerdadero: false },
        { texto: 'Fukuro significa "efectivo".', esVerdadero: false }
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la palabra que no pertenece al grupo.', preguntas: [
        { grupo: '¿Cuál de estas NO tiene que ver con la forma de pago?', explicacion: 'Fukuro es "bolsa", no una forma de pago.', opciones: [
          { texto: 'Kaado', intruso: false }, { texto: 'Genkin', intruso: false }, { texto: 'Fukuro', intruso: true }
        ]}
      ]}
    ]
  },

  '13-repaso-dias-8-12': {
    contenido: `## Desarrollo
Día 13: repaso de transporte, alojamiento y compras (días 8 a 12). Sin vocabulario nuevo — toca consolidar antes de seguir con salud y cultura.

## ⚡ En 10 segundos
Ya sabes moverte en tren y en taxi, evitar quedarte tirado sin el último tren, hacer el check-in en tu alojamiento, y comprar preguntando precio, talla, color y forma de pago.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| 駅はどこですか？ | eki wa doko desu ka? | ¿dónde está la estación? |
| 終電 | shuuden | el último tren del día |
| ここで止めてください | koko de tomete kudasai | pare aquí, por favor |
| チェックインお願いします | chekku-in onegaishimasu | check-in, por favor |
| 荷物を預けてもいいですか？ | nimotsu o azukete mo ii desu ka? | ¿puedo dejar el equipaje? |
| いくらですか？ | ikura desu ka? | ¿cuánto cuesta? |
| 他の色はありますか？ | hoka no iro wa arimasu ka? | ¿hay de otro color? |
| カードで払えますか？ | kaado de haraemasu ka? | ¿puedo pagar con tarjeta? |

## 🧠 Truco para recordar
El patrón "[lugar] made onegaishimasu" (hasta [lugar], por favor) te sirve igual en tren que en taxi — es el hilo conductor de los días 8 y 9. Y "[algo] te mo ii desu ka" (¿puedo...?) reaparece en alojamiento (dejar equipaje) y compras (probarte ropa) — la misma plantilla, distinto contexto.

## 👁 confusión
Recuerda: muchas tiendas pequeñas solo aceptan efectivo (día 12), en Japón no se regatea (día 11), y el shuuden puede llegar antes de lo que crees (día 8) — tres hábitos y datos que conviene tener asumidos antes de llegar.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Repaso: conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: 'Eki wa doko desu ka', b: '¿Dónde está la estación?' }, { a: 'Shuuden', b: 'El último tren del día' }, { a: 'Chekku-in onegaishimasu', b: 'Check-in, por favor' },
        { a: 'Ikura desu ka', b: '¿Cuánto cuesta?' }, { a: 'Kaado de haraemasu ka', b: '¿Puedo pagar con tarjeta?' }, { a: 'Fukuro wa iranai desu', b: 'No necesito bolsa' }
      ]},
      { tipo: 'clasifica', titulo: 'Repaso: ¿de qué bloque es cada frase?', instruccion: 'Arrastra cada frase a su bloque.', categorias: ['Transporte (días 8-9)', 'Alojamiento y compras (días 10-12)'], items: [
        { texto: 'Nan-ban-sen desu ka', cat: 'Transporte (días 8-9)' }, { texto: 'Koko de tomete kudasai', cat: 'Transporte (días 8-9)' },
        { texto: 'Nimotsu o azukete mo ii desu ka', cat: 'Alojamiento y compras (días 10-12)' }, { texto: 'Genkin', cat: 'Alojamiento y compras (días 10-12)' }
      ]},
      { tipo: 'rellena', titulo: 'Repaso general', instruccion: 'Elige la frase correcta.', banco: ['yoyaku shite imasu', 'ikura desu ka', 'massugu'], frases: [
        { texto: 'Llegas al hotel y confirmas tu reserva: "___".', respuestas: ['yoyaku shite imasu'] },
        { texto: 'Quieres saber el precio de algo: "___".', respuestas: ['ikura desu ka'] },
        { texto: 'Le indicas al taxista que siga recto: "___".', respuestas: ['massugu'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena un día de viaje', instruccion: 'Desde llegar a la estación hasta pagar una compra.', pasos: [
        'Eki wa doko desu ka (buscas la estación)', 'Chekku-in onegaishimasu (llegas al hotel)', 'Ikura desu ka (preguntas precio en una tienda)', 'Kaado de haraemasu ka (preguntas si aceptan tarjeta)'
      ]},
      { tipo: 'vf', titulo: 'Repaso: verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'En Japón es normal regatear en las tiendas.', esVerdadero: false },
        { texto: 'Todas las tiendas japonesas aceptan siempre tarjeta.', esVerdadero: false },
        { texto: 'El shuuden puede ser más temprano de lo esperado fuera de las grandes ciudades.', esVerdadero: true },
        { texto: 'El check-in en un ryokan puede implicar quitarte los zapatos.', esVerdadero: true }
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la palabra que no pertenece al grupo.', preguntas: [
        { grupo: '¿Cuál de estas NO tiene que ver con comprar?', explicacion: 'Heya es "habitación", del bloque de alojamiento.', opciones: [
          { texto: 'Saizu', intruso: false }, { texto: 'Genkin', intruso: false }, { texto: 'Heya', intruso: true }
        ]}
      ]}
    ]
  },

  '14-salud-y-emergencias': {
    contenido: `## Desarrollo
Día 14: ojalá no lo necesites, pero conviene tenerlo preparado. Decir que te duele algo o que tienes fiebre, encontrar una farmacia o un hospital, y pedir ayuda urgente si hace falta.

## ⚡ En 10 segundos
**[Parte] ga itai desu** = me duele [parte] (ej. atama ga itai desu = me duele la cabeza). **Netsu ga arimasu** = tengo fiebre. **Kibun ga warui desu** = me encuentro mal. **Yakkyoku** = farmacia, **byouin** = hospital. **Kyuukyuusha o yonde kudasai** = llame a una ambulancia. Emergencias: **119** (ambulancia/bomberos), **110** (policía).

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| ［parte del cuerpo］が痛いです | [parte] ga itai desu | me duele [parte] (ej. atama = cabeza, onaka = estómago, nodo = garganta) |
| 熱があります | netsu ga arimasu | tengo fiebre |
| 気分が悪いです | kibun ga warui desu | me encuentro mal |
| 薬局 | yakkyoku | farmacia |
| 薬をください | kusuri o kudasai | deme una medicina, por favor |
| 病院はどこですか？ | byouin wa doko desu ka? | ¿dónde está el hospital? |
| 保険証 | hoken-shou | seguro médico (documento) |
| 救急車を呼んでください | kyuukyuusha o yonde kudasai | llame a una ambulancia, por favor |
| 警察を呼んでください | keisatsu o yonde kudasai | llame a la policía, por favor |
| 119 / 110 | hyaku-juu-kyuu / hyaku-juu | ambulancia y bomberos (119) / policía (110) |

## 🧠 Truco para recordar
"[Parte] ga itai desu" es una plantilla: solo cambias la primera palabra — atama ga itai (cabeza), onaka ga itai (estómago), nodo ga itai (garganta). Netsu ga arimasu literalmente es "tengo calor/fiebre" (netsu = fiebre, arimasu = hay/tengo) — mismo patrón que "arerugii ga arimasu" del día 6. Para los números de emergencia: 119 = ambulancia/fuego, 110 = policía.

## 👁 confusión
En Japón, la ambulancia y los bomberos comparten el mismo número (119); la policía tiene uno distinto (110) — al revés de lo que ocurre en muchos países donde todo va por un único número de emergencias. Y kibun ga warui desu ("me encuentro mal", sensación general) es distinto de [parte] ga itai desu ("me duele X", dolor localizado) — no son intercambiables.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: '薬局 (yakkyoku)', b: 'Farmacia' }, { a: '病院 (byouin)', b: 'Hospital' }, { a: '熱があります', b: 'Tengo fiebre' }, { a: '気分が悪いです', b: 'Me encuentro mal' },
        { a: '救急車を呼んでください', b: 'Llame a una ambulancia' }, { a: '警察を呼んでください', b: 'Llame a la policía' }, { a: '119', b: 'Ambulancia y bomberos' }
      ]},
      { tipo: 'clasifica', titulo: 'Molestia leve o emergencia', instruccion: 'Arrastra cada elemento a su grupo.', categorias: ['Molestia leve', 'Emergencia'], items: [
        { texto: 'Yakkyoku', cat: 'Molestia leve' }, { texto: 'Atama ga itai desu', cat: 'Molestia leve' }, { texto: 'Kusuri o kudasai', cat: 'Molestia leve' },
        { texto: 'Kyuukyuusha o yonde kudasai', cat: 'Emergencia' }, { texto: 'Keisatsu o yonde kudasai', cat: 'Emergencia' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la situación', instruccion: 'Elige la frase correcta.', banco: ['netsu ga arimasu', 'yakkyoku', 'kyuukyuusha o yonde kudasai'], frases: [
        { texto: 'Te encuentras raro y al tocarte la frente notas calor: "___".', respuestas: ['netsu ga arimasu'] },
        { texto: 'Necesitas comprar medicinas, buscas: "___".', respuestas: ['yakkyoku'] },
        { texto: 'Es una emergencia grave: "___".', respuestas: ['kyuukyuusha o yonde kudasai'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena una emergencia médica', instruccion: 'Pon los pasos en orden, de menos a más grave.', pasos: [
        'Atama ga itai desu (molestia leve)', 'Yakkyoku (vas a la farmacia)', 'Byouin wa doko desu ka (si no mejora, buscas hospital)', 'Kyuukyuusha o yonde kudasai (si es grave, pides ambulancia)'
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'En Japón, ambulancia y policía comparten el mismo número.', esVerdadero: false },
        { texto: 'El 119 sirve para ambulancia y bomberos.', esVerdadero: true },
        { texto: 'Kibun ga warui desu y [parte] ga itai desu significan exactamente lo mismo.', esVerdadero: false },
        { texto: 'Netsu ga arimasu significa "tengo fiebre".', esVerdadero: true }
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la palabra que no pertenece al grupo.', preguntas: [
        { grupo: '¿Cuál de estos NO es un número de emergencia?', explicacion: '119 y 110 son de emergencia; 15 no corresponde a nada en Japón.', opciones: [
          { texto: '119', intruso: false }, { texto: '110', intruso: false }, { texto: '15', intruso: true }
        ]}
      ]}
    ]
  },

  '15-cultura-practica': {
    contenido: `## Desarrollo
Día 15: normas no escritas que marcan la diferencia entre sentirte perdido o encajar. Japón funciona con un código de comportamiento en espacios compartidos bastante distinto al nuestro, con carteles y gestos que conviene reconocer.

## ⚡ En 10 segundos
No se deja propina en restaurantes. En transporte público se pone el móvil en silencio. Antes de entrar a un santuario se pasa bajo un **torii** y se purifican manos y boca en el **temizuya**. Casi no hay papeleras en la calle: te guardas la basura. Se hacen colas ordenadas para casi todo.

## ✅ Lo esencial

| Situación | Norma o palabra |
|---|---|
| Restaurantes | No se deja propina — el servicio ya está incluido en el precio |
| Transporte público | El móvil se pone en silencio (modo manner), no se habla por teléfono |
| Templos y santuarios | Se cruza un 鳥居 (torii) al entrar y se purifican manos y boca en el 手水舎 (temizuya) |
| Calzado | En ryokan, algunos restaurantes y casas, te descalzas al entrar (土足禁止 dosoku kinshi = prohibido con zapatos) |
| Fotos | 撮影禁止 (satsuei kinshi) = prohibido hacer fotos, un cartel muy habitual en museos y templos |
| Saludo | お辞儀 (ojigi) = la reverencia, el saludo/agradecimiento no verbal más común |
| Basura | ゴミ箱 (gomibako) = papelera — hay muy pocas en la calle, guarda tu basura hasta encontrar una |
| Colas | Se espera en fila ordenada, sin adelantar, para el tren, la tienda o el ascensor |

## 🧠 Truco para recordar
Piensa en Japón como "el país del silencio y el orden": casi todas las normas culturales giran en torno a no molestar a los demás en espacios compartidos. Los carteles con 禁止 (kinshi) al final siempre significan "prohibido" — dosoku kinshi, satsuei kinshi... reconocer ese kanji te avisa aunque no entiendas el resto.

## 👁 confusión
Dejar propina no es un gesto extra amable en Japón — muchos camareros lo interpretarán como un error, e incluso pueden salir corriendo detrás de ti para devolverte el dinero que "se te olvidó". El servicio ya está incluido en el precio, siempre. Y no esperes encontrar papeleras fácilmente en la calle como en otros países — es normal llevar tu basura contigo un buen rato.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada palabra con su significado', instruccion: 'Toca una palabra y luego su significado.', pares: [
        { a: '鳥居 (torii)', b: 'Puerta tradicional de entrada a un santuario' },
        { a: '手水舎 (temizuya)', b: 'Fuente para purificarte antes de entrar' },
        { a: '土足禁止', b: 'Prohibido entrar con zapatos' },
        { a: '撮影禁止', b: 'Prohibido hacer fotos' },
        { a: 'お辞儀 (ojigi)', b: 'La reverencia' },
        { a: 'ゴミ箱 (gomibako)', b: 'Papelera' }
      ]},
      { tipo: 'clasifica', titulo: 'Templos, carteles o vida diaria', instruccion: 'Arrastra cada elemento a su grupo.', categorias: ['En templos y santuarios', 'Carteles de prohibición', 'En la vida diaria'], items: [
        { texto: 'Torii', cat: 'En templos y santuarios' }, { texto: 'Temizuya', cat: 'En templos y santuarios' },
        { texto: 'Dosoku kinshi', cat: 'Carteles de prohibición' }, { texto: 'Satsuei kinshi', cat: 'Carteles de prohibición' },
        { texto: 'No dejar propina', cat: 'En la vida diaria' }, { texto: 'Móvil en silencio en el tren', cat: 'En la vida diaria' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la norma', instruccion: 'Elige la palabra correcta.', banco: ['torii', 'temizuya', 'kinshi'], frases: [
        { texto: 'Antes de entrar a un santuario, cruzas un: "___".', respuestas: ['torii'] },
        { texto: 'Te purificas las manos y la boca en el: "___".', respuestas: ['temizuya'] },
        { texto: 'Un cartel que termina en esta palabra significa "prohibido": "___".', respuestas: ['kinshi'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la visita a un santuario', instruccion: 'Pon los pasos en orden.', pasos: [
        'Cruzas el torii', 'Te purificas en el temizuya', 'Visitas el santuario en silencio y respeto'
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Dejar propina es un gesto de amabilidad muy apreciado en Japón.', esVerdadero: false },
        { texto: 'Hay papeleras abundantes en cualquier calle japonesa.', esVerdadero: false },
        { texto: 'El torii es la fuente donde te purificas antes de entrar al templo.', esVerdadero: false },
        { texto: 'Kinshi al final de un cartel significa "prohibido".', esVerdadero: true }
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la norma que no pertenece al grupo.', preguntas: [
        { grupo: '¿Cuál de estas NO es una norma cultural japonesa?', explicacion: 'Regatear el precio no forma parte de las normas japonesas — el precio es fijo.', opciones: [
          { texto: 'No dejar propina', intruso: false }, { texto: 'Hacer colas ordenadas', intruso: false }, { texto: 'Regatear el precio en las tiendas', intruso: true }
        ]}
      ]}
    ]
  },

  '16-vida-diaria': {
    contenido: `## Desarrollo
Día 16: pequeñas frases para el día a día — el clima, la hora, pedir permiso para una foto, cargar el móvil, encontrar un cajero, tirar la basura correctamente, y tu mejor aliado de viaje: el konbini.

## ⚡ En 10 segundos
**Kyou wa atsui/samui desu** = hoy hace calor/frío. **Ima nanji desu ka?** = ¿qué hora es? **Shashin o totte mo ii desu ka?** = ¿puedo hacer una foto? **Konbini** = tienda de conveniencia, abierta 24h. **Juuden dekimasu ka?** = ¿puedo cargar el móvil?

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| 今日は暑い/寒いです | kyou wa atsui/samui desu | hoy hace calor / frío |
| 晴れ / 雨 / 曇り | hare / ame / kumori | soleado / lluvia / nublado |
| 今何時ですか？ | ima nanji desu ka? | ¿qué hora es? |
| 写真を撮ってもいいですか？ | shashin o totte mo ii desu ka? | ¿puedo hacer una foto? |
| コンビニ | konbini | tienda de conveniencia (abierta 24h) |
| Wi-Fiのパスワードは何ですか？ | wifi no pasuwaado wa nan desu ka? | ¿cuál es la contraseña del wifi? |
| 充電できますか？ | juuden dekimasu ka? | ¿puedo cargar el móvil? |
| ATMはどこですか？ | ATM wa doko desu ka? | ¿dónde hay un cajero? |
| ゴミはどこに捨てますか？ | gomi wa doko ni sutemasu ka? | ¿dónde tiro la basura? |

## 🧠 Truco para recordar
Reutilizas otra vez "...te mo ii desu ka" (¿puedo...?) del día 11, tanto para fotos como para cargar el móvil. El konbini es tu mejor amigo de viaje: comida, cajero, baño, wifi, casi de todo, a cualquier hora del día o de la noche. "Doko ni sutemasu ka" (¿dónde tiro...?) conecta directamente con lo que viste ayer sobre las papeleras escasas.

## 👁 confusión
No todo se puede fotografiar libremente — en templos, museos o delante de otras personas conviene preguntar primero (shashin o totte mo ii desu ka) en vez de dar por hecho que está permitido. Y no todos los cajeros automáticos de Japón aceptan tarjetas extranjeras — los de los konbini (especialmente 7-Eleven) suelen ser los más fiables para esto.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: '今日は暑いです', b: 'Hoy hace calor' }, { a: '今何時ですか？', b: '¿Qué hora es?' }, { a: '写真を撮ってもいいですか？', b: '¿Puedo hacer una foto?' },
        { a: 'コンビニ (konbini)', b: 'Tienda de conveniencia' }, { a: '充電できますか？', b: '¿Puedo cargar el móvil?' }, { a: 'ATMはどこですか？', b: '¿Dónde hay un cajero?' }
      ]},
      { tipo: 'clasifica', titulo: 'Clima/hora o pedir permiso/ayuda', instruccion: 'Arrastra cada frase a su grupo.', categorias: ['Clima y hora', 'Pedir permiso o ayuda práctica'], items: [
        { texto: 'Kyou wa atsui desu', cat: 'Clima y hora' }, { texto: 'Ima nanji desu ka', cat: 'Clima y hora' }, { texto: 'Hare', cat: 'Clima y hora' },
        { texto: 'Shashin o totte mo ii desu ka', cat: 'Pedir permiso o ayuda práctica' }, { texto: 'Juuden dekimasu ka', cat: 'Pedir permiso o ayuda práctica' }, { texto: 'Gomi wa doko ni sutemasu ka', cat: 'Pedir permiso o ayuda práctica' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la situación', instruccion: 'Elige la frase correcta.', banco: ['ima nanji desu ka', 'juuden dekimasu ka', 'gomi wa doko ni sutemasu ka'], frases: [
        { texto: 'No sabes qué hora es: "___".', respuestas: ['ima nanji desu ka'] },
        { texto: 'Se te está agotando la batería del móvil: "___".', respuestas: ['juuden dekimasu ka'] },
        { texto: 'Llevas un rato con basura en la mano sin encontrar papelera: "___".', respuestas: ['gomi wa doko ni sutemasu ka'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la visita a un templo', instruccion: 'Pon los pasos en orden.', pasos: [
        'Ima nanji desu ka (compruebas la hora)', 'Shashin o totte mo ii desu ka (pides permiso para fotografiar)', '(haces la foto si te dicen que sí)'
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Se puede fotografiar libremente en cualquier templo sin preguntar.', esVerdadero: false },
        { texto: 'Konbini son tiendas abiertas 24 horas.', esVerdadero: true },
        { texto: 'Samui significa "hace calor".', esVerdadero: false },
        { texto: 'Los cajeros de los konbini suelen aceptar tarjetas extranjeras con fiabilidad.', esVerdadero: true }
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la palabra que no pertenece al grupo.', preguntas: [
        { grupo: '¿Cuál de estas NO tiene que ver con el clima?', explicacion: 'Konbini es una tienda, no tiene que ver con el clima.', opciones: [
          { texto: 'Atsui', intruso: false }, { texto: 'Samui', intruso: false }, { texto: 'Konbini', intruso: true }
        ]}
      ]}
    ]
  },

  '17-repaso-general': {
    contenido: `## Desarrollo
Día 17: repaso de todo el curso, mezclando cortesía, saludos, transporte, restaurante, compras, salud y cultura. Última parada antes del quiz final.

## ⚡ En 10 segundos
Un repaso rápido de las categorías: cortesía (sumimasen, arigatou gozaimasu), saludos (konnichiwa, hajimemashite), transporte (made onegaishimasu, shuuden), restaurante (kore o kudasai, gochisousama deshita), compras (ikura desu ka, kaado de haraemasu ka), salud ([parte] ga itai desu, 119/110) y cultura (no propina, torii/temizuya).

## ✅ Lo esencial

| Categoría | Japonés | Español |
|---|---|---|
| Cortesía | すみません (sumimasen) | perdón / disculpe |
| Saludos | こんにちは (konnichiwa) | hola / buenas tardes |
| Ayuda | 迷いました (mayoimashita) | me he perdido |
| Contadores | 四人 (yonin) | 4 personas |
| Transporte | 終電 (shuuden) | el último tren del día |
| Restaurante | これをください (kore o kudasai) | esto, por favor |
| Alojamiento | チェックイン (chekku-in) | check-in |
| Compras | いくらですか？ (ikura desu ka) | ¿cuánto cuesta? |
| Salud | ［parte］が痛いです | me duele [parte] |
| Cultura | 撮影禁止 (satsuei kinshi) | prohibido hacer fotos |

## 🧠 Truco para recordar
Si te bloqueas en un juego, pregúntate primero: "¿esto es cortesía, transporte, comida, compras, salud o cultura?". Ubicar la categoría suele hacer que la respuesta salga sola.

## 👁 confusión
Los errores más repetidos del curso: hai no siempre es "de acuerdo", para "4 personas" es yonin (nunca "shinin"), no se deja propina en ningún sitio de Japón, y el shuuden puede llegar antes de lo esperado.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Repaso general: conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: 'Sumimasen', b: 'Perdón / disculpe' }, { a: 'Konnichiwa', b: 'Hola / buenas tardes' }, { a: 'Shuuden', b: 'El último tren del día' },
        { a: 'Gochisousama deshita', b: 'Gracias por la comida' }, { a: 'Ikura desu ka', b: '¿Cuánto cuesta?' }, { a: 'Kyuukyuusha o yonde kudasai', b: 'Llame a una ambulancia' }, { a: 'Satsuei kinshi', b: 'Prohibido hacer fotos' }
      ]},
      { tipo: 'clasifica', titulo: 'Repaso general: ¿de qué categoría es cada frase?', instruccion: 'Arrastra cada frase a su categoría.', categorias: ['Transporte y alojamiento', 'Compras, salud y cultura'], items: [
        { texto: 'Nan-ban-sen desu ka', cat: 'Transporte y alojamiento' }, { texto: 'Chekku-in onegaishimasu', cat: 'Transporte y alojamiento' },
        { texto: 'Saizu', cat: 'Compras, salud y cultura' }, { texto: 'Yakkyoku', cat: 'Compras, salud y cultura' }, { texto: 'Torii', cat: 'Compras, salud y cultura' }
      ]},
      { tipo: 'rellena', titulo: 'Repaso general', instruccion: 'Elige la frase correcta.', banco: ['hajimemashite', 'okaikei onegaishimasu', 'fukuro wa iranai desu'], frases: [
        { texto: 'Conoces a alguien por primera vez: "___".', respuestas: ['hajimemashite'] },
        { texto: 'Habéis terminado de comer, pedís: "___".', respuestas: ['okaikei onegaishimasu'] },
        { texto: 'No quieres bolsa en la tienda: "___".', respuestas: ['fukuro wa iranai desu'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena un día completo de viaje', instruccion: 'Desde que sales del hotel hasta que vuelves a dormir.', pasos: [
        'Ohayou gozaimasu (te levantas y saludas)', 'Eki wa doko desu ka (vas a la estación)', 'Kore o kudasai (comes fuera)', 'Ikura desu ka (haces alguna compra)', 'Oyasumi nasai (te vas a dormir)'
      ]},
      { tipo: 'vf', titulo: 'Repaso general: verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Konbanwa es una despedida para ir a dormir.', esVerdadero: false },
        { texto: 'El 119 es el número de ambulancia y bomberos en Japón.', esVerdadero: true },
        { texto: 'Se puede regatear el precio en tiendas japonesas.', esVerdadero: false },
        { texto: '"[Lugar] made onegaishimasu" sirve tanto en tren como en taxi.', esVerdadero: true }
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la palabra que no pertenece al grupo.', preguntas: [
        { grupo: '¿Cuál de estas NO es una fórmula de despedida?', explicacion: 'Hajimemashite es de presentación, no de despedida.', opciones: [
          { texto: 'Gochisousama deshita', intruso: false }, { texto: 'Oyasumi nasai', intruso: false }, { texto: 'Hajimemashite', intruso: true }
        ]}
      ]}
    ]
  },

  '18-quiz-final-y-chuleta': {
    contenido: `## Desarrollo
Día 18: último día. Aquí tienes la chuleta completa del curso — guárdala o haz captura para llevarla el día del vuelo — y el quiz final que mezcla las 17 lecciones anteriores.

## ✅ Lo esencial — Chuleta de viaje

**Cortesía y saludos**

| Japonés | Rōmaji | Español |
|---|---|---|
| すみません | sumimasen | perdón / disculpe |
| ありがとうございます | arigatou gozaimasu | muchas gracias |
| お願いします | onegaishimasu | por favor |
| はい / いいえ | hai / iie | sí / no |
| こんにちは / こんばんは | konnichiwa / konbanwa | hola / buenas noches (al llegar) |
| おやすみなさい | oyasumi nasai | buenas noches (al dormir) |

**Ayuda y emergencias**

| Japonés | Rōmaji | Español |
|---|---|---|
| わかりません | wakarimasen | no entiendo |
| 迷いました | mayoimashita | me he perdido |
| トイレはどこですか？ | toire wa doko desu ka? | ¿dónde está el baño? |
| ［parte］が痛いです | [parte] ga itai desu | me duele [parte] |
| 119 / 110 | hyaku-juu-kyuu / hyaku-juu | ambulancia-bomberos / policía |

**Transporte y alojamiento**

| Japonés | Rōmaji | Español |
|---|---|---|
| ［lugar］までお願いします | [lugar] made onegaishimasu | hasta [lugar], por favor |
| 終電 | shuuden | el último tren del día |
| チェックインお願いします | chekku-in onegaishimasu | check-in, por favor |

**Restaurante y compras**

| Japonés | Rōmaji | Español |
|---|---|---|
| これをください | kore o kudasai | esto, por favor |
| ごちそうさまでした | gochisousama deshita | gracias por la comida |
| いくらですか？ | ikura desu ka? | ¿cuánto cuesta? |
| カードで払えますか？ | kaado de haraemasu ka? | ¿puedo pagar con tarjeta? |

**Cultura práctica**

| Norma | Recordatorio |
|---|---|
| Propina | No se deja en ningún sitio de Japón |
| Templos | Torii al entrar, temizuya para purificarte |
| Carteles | "Kinshi" al final = prohibido |

## 🧠 Truco para recordar
El día del vuelo, no intentes repasarlo todo — repasa solo esta chuleta cinco minutos antes de aterrizar. Es lo mínimo con lo que puedes sobrevivir con soltura desde el primer momento.

## 👁 confusión
Los fallos más comunes de todo el curso: hai no siempre significa estar de acuerdo, yonin (nunca "shinin") para 4 personas, la propina no se deja en ningún sitio, y el shuuden puede llegar antes de lo que esperas.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Quiz final: conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: 'Sumimasen', b: 'Perdón / disculpe' }, { a: 'Yoroshiku onegaishimasu', b: 'Mucho gusto' }, { a: 'Shuuden', b: 'El último tren del día' },
        { a: 'Gochisousama deshita', b: 'Gracias por la comida' }, { a: 'Kaado de haraemasu ka', b: '¿Puedo pagar con tarjeta?' }, { a: 'Kyuukyuusha o yonde kudasai', b: 'Llame a una ambulancia' }, { a: 'Torii', b: 'Puerta de entrada a un santuario' }
      ]},
      { tipo: 'clasifica', titulo: 'Quiz final: ¿de qué categoría es cada frase?', instruccion: 'Arrastra cada frase a su categoría.', categorias: ['Cortesía y saludos', 'Transporte, compras, salud y cultura'], items: [
        { texto: 'Arigatou gozaimasu', cat: 'Cortesía y saludos' }, { texto: 'Hajimemashite', cat: 'Cortesía y saludos' },
        { texto: 'Norikae', cat: 'Transporte, compras, salud y cultura' }, { texto: 'Ikura desu ka', cat: 'Transporte, compras, salud y cultura' }, { texto: 'Yakkyoku', cat: 'Transporte, compras, salud y cultura' }, { texto: 'Temizuya', cat: 'Transporte, compras, salud y cultura' }
      ]},
      { tipo: 'rellena', titulo: 'Quiz final', instruccion: 'Elige la frase correcta para cada situación.', banco: ['mayoimashita', 'shichaku shite mo ii desu ka', 'fukuro wa iranai desu'], frases: [
        { texto: 'Te has perdido por la calle: "___".', respuestas: ['mayoimashita'] },
        { texto: 'Quieres probarte una prenda: "___".', respuestas: ['shichaku shite mo ii desu ka'] },
        { texto: 'No quieres que te den bolsa en la tienda: "___".', respuestas: ['fukuro wa iranai desu'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena el día del vuelo', instruccion: 'Un repaso final: pon estos momentos del viaje en orden lógico.', pasos: [
        'Ohayou gozaimasu (te despides del alojamiento)', 'Chekku-auto wa nanji desu ka (confirmas el check-out)', 'Eki wa doko desu ka (vas a la estación o al taxi)', 'Arigatou gozaimasu (te despides de Japón)'
      ]},
      { tipo: 'vf', titulo: 'Quiz final: verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Hai significa siempre que la otra persona está de acuerdo.', esVerdadero: false },
        { texto: 'Para "4 personas" se dice yonin, no "shinin".', esVerdadero: true },
        { texto: 'Se puede dejar propina en restaurantes japoneses sin problema.', esVerdadero: false },
        { texto: 'El 119 es el número de ambulancia y bomberos en Japón.', esVerdadero: true }
      ]},
      { tipo: 'descarte', titulo: 'Quiz final: encuentra el intruso', instruccion: 'Selecciona la palabra que no pertenece al grupo.', preguntas: [
        { grupo: '¿Cuál de estas NO es una forma de pedir ayuda o disculparte?', explicacion: 'Ikura desu ka es para preguntar precio, no para pedir ayuda.', opciones: [
          { texto: 'Sumimasen', intruso: false }, { texto: 'Wakarimasen', intruso: false }, { texto: 'Mayoimashita', intruso: false }, { texto: 'Ikura desu ka', intruso: true }
        ]}
      ]}
    ]
  }

};

async function subirJapones() {
  if (typeof db === 'undefined') { console.error('No se encuentra `db`. ¿Estás en la página de ApuntesLarry, logueado?'); return; }
  var col = db.collection('temas').doc('japones-viaje').collection('puntos');
  var ids = Object.keys(LECCIONES_JAPONES);
  for (var i = 0; i < ids.length; i++) {
    var id = ids[i];
    try {
      await col.doc(id).set(LECCIONES_JAPONES[id]);
      console.log('✅ Subido: ' + id);
    } catch (e) {
      console.error('❌ Error en ' + id + ': ' + e.message);
    }
  }
  console.log('Terminado. ' + ids.length + ' lección(es) procesada(s).');
}
