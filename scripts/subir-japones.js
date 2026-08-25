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
Día 2: saluda según la hora del día y preséntate como un local. Además, los números del 1 al 10, la base de casi todo lo que vendrá después (contadores, precios, horas).

## ⚡ En 10 segundos
**Ohayou gozaimasu** (mañana), **konnichiwa** (tarde), **konbanwa** (al anochecer) son los tres saludos según la hora. **Hajimemashite** + **yoroshiku onegaishimasu** es el combo para presentarte. Números: ichi, ni, san, yon, go, roku, nana, hachi, kyuu, juu.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| おはようございます | ohayou gozaimasu | buenos días |
| こんにちは | konnichiwa | hola / buenas tardes |
| こんばんは | konbanwa | buenas noches (al llegar, no al dormir) |
| はじめまして | hajimemashite | encantado (solo la primera vez que conoces a alguien) |
| 私は［nombre］です | watashi wa [nombre] desu | soy [nombre] |
| よろしくお願いします | yoroshiku onegaishimasu | mucho gusto / espero llevarme bien contigo |

**Números 1-10:** 一 ichi, 二 ni, 三 san, 四 yon, 五 go, 六 roku, 七 nana, 八 hachi, 九 kyuu, 十 juu.

## 🧠 Truco para recordar
Konnichiwa suena a "¿qué día es hoy?" (nichi = día) — pregúntatelo mentalmente al saludar. Ohayou gozaimasu, de madrugada, como si dijeras "oh, ya voy". Para los números, practícalos siempre en el mismo orden hasta que salgan solos: ichi-ni-san-yon-go-roku-nana-hachi-kyuu-juu, como una cancioncilla.

## 👁 confusión
Konbanwa no es una despedida para ir a dormir — eso sería oyasumi nasai. Konbanwa es un saludo, como konnichiwa pero de noche: se usa al llegar a un sitio por la tarde-noche, no al marcharte. Y yoroshiku onegaishimasu no tiene traducción literal exacta al español; es simplemente lo que se dice después de presentarte, sin más.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada saludo con su significado', instruccion: 'Toca un saludo y luego su significado.', pares: [
        { a: 'おはようございます (ohayou gozaimasu)', b: 'Buenos días' },
        { a: 'こんにちは (konnichiwa)', b: 'Hola / buenas tardes' },
        { a: 'こんばんは (konbanwa)', b: 'Buenas noches (al llegar)' },
        { a: 'はじめまして (hajimemashite)', b: 'Encantado' },
        { a: 'よろしくお願いします (yoroshiku onegaishimasu)', b: 'Mucho gusto' }
      ]},
      { tipo: 'clasifica', titulo: 'Saludo por hora o presentación', instruccion: 'Arrastra cada expresión a su grupo.', categorias: ['Saludo según la hora', 'Al presentarte'], items: [
        { texto: 'Ohayou gozaimasu', cat: 'Saludo según la hora' }, { texto: 'Konnichiwa', cat: 'Saludo según la hora' }, { texto: 'Konbanwa', cat: 'Saludo según la hora' },
        { texto: 'Hajimemashite', cat: 'Al presentarte' }, { texto: 'Yoroshiku onegaishimasu', cat: 'Al presentarte' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la situación', instruccion: 'Elige la expresión correcta.', banco: ['ohayou gozaimasu', 'hajimemashite', 'yoroshiku onegaishimasu'], frases: [
        { texto: 'Son las 8 de la mañana. Saludas con: "___".', respuestas: ['ohayou gozaimasu'] },
        { texto: 'Conoces a alguien por primera vez. Lo primero que dices es: "___".', respuestas: ['hajimemashite'] },
        { texto: 'Después de presentarte, cierras con: "___".', respuestas: ['yoroshiku onegaishimasu'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la presentación', instruccion: 'Pon en orden los pasos para presentarte correctamente.', pasos: [
        'Hajimemashite', 'Watashi wa [nombre] desu', 'Yoroshiku onegaishimasu'
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Konbanwa se usa para despedirte antes de dormir.', esVerdadero: false },
        { texto: 'Ichi, ni, san son los números 1, 2 y 3.', esVerdadero: true },
        { texto: 'Hajimemashite se dice solo la primera vez que conoces a alguien.', esVerdadero: true },
        { texto: 'Ohayou gozaimasu se usa a cualquier hora del día.', esVerdadero: false }
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la palabra que no pertenece al grupo.', preguntas: [
        { grupo: '¿Cuál de estos NO es un saludo según la hora del día?', explicacion: 'Yoroshiku onegaishimasu es de presentación, no un saludo horario.', opciones: [
          { texto: 'Ohayou gozaimasu', intruso: false }, { texto: 'Konnichiwa', intruso: false }, { texto: 'Konbanwa', intruso: false }, { texto: 'Yoroshiku onegaishimasu', intruso: true }
        ]}
      ]}
    ]
  },

  '03-pedir-ayuda-basica': {
    contenido: `## Desarrollo
Día 3: qué decir cuando algo no sale como esperabas. No entender, no saber si te van a entender a ti, pedir que repitan o vayan despacio, y admitir que te has perdido.

## ⚡ En 10 segundos
**Wakarimasen** = no entiendo. **Eigo ga hanasemasu ka?** = ¿habla inglés? (le preguntas a la otra persona, no hablas tú de ti). **Mou ichido onegaishimasu** = repita, por favor. **Yukkuri onegaishimasu** = más despacio, por favor. **Mayoimashita** = me he perdido.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| わかりません | wakarimasen | no entiendo |
| 英語が話せますか？ | eigo ga hanasemasu ka? | ¿habla inglés? |
| もう一度お願いします | mou ichido onegaishimasu | otra vez, por favor (repita) |
| ゆっくりお願いします | yukkuri onegaishimasu | más despacio, por favor |
| 迷いました | mayoimashita | me he perdido |

## 🧠 Truco para recordar
Wakarimasen: wakaru = entender, + masen (negativo) = "no entiendo". Mou ichido = literalmente "una vez más" (mou = ya/más, ichido = una vez). Yukkuri suena alargado, como si lo dijeras despacio — combina sonido y significado. Mayoimashita: "may... oh, me perdí".

## 👁 confusión
Eigo ga hanasemasu ka no significa que tú hables inglés, sino que preguntas si LA OTRA PERSONA lo habla — es fácil confundir quién es el sujeto de la pregunta. Y wakarimasen (no entiendo lo que dices) no es lo mismo que "no lo sé" — para eso se usa otra expresión distinta, no la mezcles.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: 'わかりません (wakarimasen)', b: 'No entiendo' },
        { a: '英語が話せますか？ (eigo ga hanasemasu ka)', b: '¿Habla inglés?' },
        { a: 'もう一度お願いします (mou ichido onegaishimasu)', b: 'Repita, por favor' },
        { a: 'ゆっくりお願いします (yukkuri onegaishimasu)', b: 'Más despacio, por favor' },
        { a: '迷いました (mayoimashita)', b: 'Me he perdido' }
      ]},
      { tipo: 'clasifica', titulo: 'Facilitar o expresar problema', instruccion: 'Arrastra cada frase a su grupo.', categorias: ['Para facilitar la comunicación', 'Para expresar un problema'], items: [
        { texto: 'Mou ichido onegaishimasu', cat: 'Para facilitar la comunicación' }, { texto: 'Yukkuri onegaishimasu', cat: 'Para facilitar la comunicación' }, { texto: 'Eigo ga hanasemasu ka', cat: 'Para facilitar la comunicación' },
        { texto: 'Wakarimasen', cat: 'Para expresar un problema' }, { texto: 'Mayoimashita', cat: 'Para expresar un problema' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la situación', instruccion: 'Elige la frase correcta.', banco: ['wakarimasen', 'yukkuri onegaishimasu', 'mayoimashita'], frases: [
        { texto: 'No entiendes lo que te acaban de decir: "___".', respuestas: ['wakarimasen'] },
        { texto: 'Te hablan demasiado rápido: "___".', respuestas: ['yukkuri onegaishimasu'] },
        { texto: 'Llevas 20 minutos dando vueltas sin encontrar la calle: "___".', respuestas: ['mayoimashita'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la situación', instruccion: 'Estás perdido y pides ayuda. Ordena los pasos.', pasos: [
        'Sumimasen (llamas la atención)', 'Mayoimashita (explicas que estás perdido)', 'Eigo ga hanasemasu ka (preguntas si te pueden ayudar en inglés)', 'Mou ichido onegaishimasu (si no entiendes la respuesta)'
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Eigo ga hanasemasu ka pregunta si TÚ hablas japonés.', esVerdadero: false },
        { texto: 'Wakarimasen significa "no entiendo".', esVerdadero: true },
        { texto: 'Yukkuri onegaishimasu sirve para pedir que hablen más despacio.', esVerdadero: true },
        { texto: 'Mayoimashita se usa quieras decir que tienes hambre.', esVerdadero: false }
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
Día 4: en japonés no se cuenta igual a objetos que a personas — hay dos series de números distintas. Es uno de los puntos donde más se enreda todo el mundo al principio, así que vamos con calma.

## ⚡ En 10 segundos
Para **objetos**: hitotsu, futatsu, mittsu, yottsu, itsutsu (1 a 5, terminan en "-tsu"). Para **personas**: hitori, futari, san-nin, yonin, gonin (1 a 5; "-ri" solo en 1 y 2, luego "-nin"). Para "4 personas" se dice siempre **yonin**, nunca "shinin".

## ✅ Lo esencial

| Cantidad | Objetos (contador genérico) | Personas |
|---|---|---|
| 1 | 一つ hitotsu | 一人 hitori |
| 2 | 二つ futatsu | 二人 futari |
| 3 | 三つ mittsu | 三人 san-nin |
| 4 | 四つ yottsu | 四人 yonin |
| 5 | 五つ itsutsu | 五人 gonin |

## 🧠 Truco para recordar
Los contadores de objetos siempre terminan en "-tsu" hasta el 10 (hitotsu, futatsu, mittsu, yottsu, itsutsu...). Los de personas usan "-ri" solo en el 1 y el 2 (hitori, futari) y a partir de 3 cambian a "-nin" (san-nin, yonin, gonin).

## 👁 confusión
Para "4 personas" se dice **yonin**, casi nunca "shinin". El número 4 tiene dos lecturas posibles (yon / shi), pero shi también significa "muerte" — shinin (死人) literalmente significa "persona muerta". Por eso los japoneses evitan shi en muchos contextos y usan yon, especialmente al contar personas.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada contador con su cantidad', instruccion: 'Toca un contador y luego su cantidad.', pares: [
        { a: '一つ (hitotsu)', b: '1 objeto' }, { a: '二つ (futatsu)', b: '2 objetos' }, { a: '一人 (hitori)', b: '1 persona' }, { a: '二人 (futari)', b: '2 personas' }, { a: '四人 (yonin)', b: '4 personas' }
      ]},
      { tipo: 'clasifica', titulo: 'Contador de objetos o de personas', instruccion: 'Arrastra cada palabra a su grupo.', categorias: ['Contador de objetos', 'Contador de personas'], items: [
        { texto: 'Hitotsu', cat: 'Contador de objetos' }, { texto: 'Futatsu', cat: 'Contador de objetos' }, { texto: 'Yottsu', cat: 'Contador de objetos' },
        { texto: 'Hitori', cat: 'Contador de personas' }, { texto: 'Futari', cat: 'Contador de personas' }, { texto: 'Yonin', cat: 'Contador de personas' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la situación', instruccion: 'Elige el contador correcto.', banco: ['hitori', 'futari', 'mittsu'], frases: [
        { texto: 'Vas a comer solo. Dices: "___ desu" (para una persona).', respuestas: ['hitori'] },
        { texto: 'Vais dos personas. Dices: "___ desu".', respuestas: ['futari'] },
        { texto: 'Pides 3 unidades de algo: "___ onegaishimasu".', respuestas: ['mittsu'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la secuencia', instruccion: 'Pon los contadores de objetos en orden ascendente.', pasos: [
        'Hitotsu (1)', 'Futatsu (2)', 'Mittsu (3)', 'Yottsu (4)', 'Itsutsu (5)'
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Yonin significa "4 personas".', esVerdadero: true },
        { texto: '"Shinin" es una forma correcta y común de decir "4 personas".', esVerdadero: false },
        { texto: 'Hitori significa "1 persona".', esVerdadero: true },
        { texto: 'Yottsu se usa para contar personas.', esVerdadero: false }
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la palabra que no pertenece al grupo.', preguntas: [
        { grupo: '¿Cuál de estos NO es un contador de objetos?', explicacion: 'Hitori es contador de personas; el resto son de objetos.', opciones: [
          { texto: 'Hitotsu', intruso: false }, { texto: 'Futatsu', intruso: false }, { texto: 'Mittsu', intruso: false }, { texto: 'Hitori', intruso: true }
        ]}
      ]}
    ]
  },

  '05-restaurantes-i': {
    contenido: `## Desarrollo
Día 5: entrar en un restaurante japonés tiene su propio pequeño ritual. Hoy aprendes a reconocerlo y a responder cuando te preguntan cuántos sois — reutilizando los contadores de personas del día 4.

## ⚡ En 10 segundos
Al entrar te dirán **irasshaimase** (no hace falta responder). Te preguntarán **nan-mei sama desu ka?** (¿cuántos sois?) y respondes con hitori desu / futari desu, o el número + mei. Luego **kochira e douzo** (por aquí, por favor) te lleva a la mesa.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| いらっしゃいませ | irasshaimase | "¡bienvenido!" (lo dice el personal, tú no respondes nada) |
| 何名様ですか？ | nan-mei sama desu ka? | ¿cuántas personas son? (te lo preguntan a ti) |
| 一人です / 二人です | hitori desu / futari desu | soy solo / somos dos |
| こちらへどうぞ | kochira e douzo | por aquí, por favor |
| すみません | sumimasen | (para llamar al camarero desde la mesa) |

## 🧠 Truco para recordar
Mei es la versión formal/educada de nin (personas) que se usa en restaurantes y hoteles — pero puedes responder igual con los contadores que ya sabes del día 4 (hitori, futari...), te van a entender perfectamente.

## 👁 confusión
No confundas irasshaimase con algo que tengas que contestar — es un saludo de bienvenida que no requiere respuesta, ni siquiera un "gracias". Y llamar al camarero levantando la mano y diciendo sumimasen en voz clara es totalmente normal en Japón, no se considera maleducado como podría parecer.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: 'いらっしゃいませ (irasshaimase)', b: '"¡Bienvenido!" (no se responde)' },
        { a: '何名様ですか？ (nan-mei sama desu ka)', b: '¿Cuántas personas son?' },
        { a: '二人です (futari desu)', b: 'Somos dos' },
        { a: 'こちらへどうぞ (kochira e douzo)', b: 'Por aquí, por favor' },
        { a: 'すみません (sumimasen)', b: 'Para llamar al camarero' }
      ]},
      { tipo: 'clasifica', titulo: 'Lo dice el personal o lo dices tú', instruccion: 'Arrastra cada frase a su grupo.', categorias: ['Lo dice el personal', 'Lo dices tú'], items: [
        { texto: 'Irasshaimase', cat: 'Lo dice el personal' }, { texto: 'Nan-mei sama desu ka', cat: 'Lo dice el personal' }, { texto: 'Kochira e douzo', cat: 'Lo dice el personal' },
        { texto: 'Hitori desu', cat: 'Lo dices tú' }, { texto: 'Sumimasen', cat: 'Lo dices tú' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la situación', instruccion: 'Elige la frase correcta.', banco: ['futari desu', 'sumimasen', 'irasshaimase'], frases: [
        { texto: 'Entráis dos personas y os preguntan cuántos sois. Respondes: "___".', respuestas: ['futari desu'] },
        { texto: 'Quieres llamar al camarero desde la mesa: "___".', respuestas: ['sumimasen'] },
        { texto: 'Al cruzar la puerta del restaurante, lo primero que oyes es: "___".', respuestas: ['irasshaimase'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la llegada al restaurante', instruccion: 'Pon los pasos en orden.', pasos: [
        'Irasshaimase (te reciben)', 'Nan-mei sama desu ka (te preguntan cuántos sois)', 'Futari desu (respondes)', 'Kochira e douzo (os llevan a la mesa)'
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Hay que responder algo cuando te dicen "irasshaimase".', esVerdadero: false },
        { texto: 'Nan-mei sama desu ka pregunta cuántas personas sois.', esVerdadero: true },
        { texto: 'Decir "sumimasen" en voz alta para llamar al camarero se considera maleducado.', esVerdadero: false },
        { texto: 'Kochira e douzo significa "por aquí, por favor".', esVerdadero: true }
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
Día 6: ya estás sentado en la mesa. Ahora toca pedir, avisar de alergias si las tienes, pagar y despedirte como es debido — con una frase que los japoneses dicen siempre, hasta en casa.

## ⚡ En 10 segundos
**Kore o kudasai** (esto, por favor, señalando). **[Alérgeno] arerugii ga arimasu** (tengo alergia a...). **Okaikei onegaishimasu** (la cuenta, por favor). **Gochisousama deshita** (gracias por la comida) se dice siempre al terminar, sin excepción.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| これをください | kore o kudasai | esto, por favor (señalando) |
| ［comida］はありますか？ | [comida] wa arimasu ka? | ¿tienen [comida]? |
| ［alérgeno］アレルギーがあります | [alérgeno] arerugii ga arimasu | tengo alergia a [alérgeno] |
| お会計お願いします | okaikei onegaishimasu | la cuenta, por favor |
| ごちそうさまでした | gochisousama deshita | gracias por la comida (al terminar) |

## 🧠 Truco para recordar
Kudasai = "por favor, dame" — más directo que onegaishimasu, perfecto cuando señalas algo en el menú. Arerugii es un préstamo del inglés "allergy", se pronuncia casi igual. Gochisousama deshita: dilo siempre al terminar de comer, sea donde sea, es casi un acto reflejo para los japoneses.

## 👁 confusión
Kudasai y onegaishimasu no son intercambiables al 100%: kudasai va pegado a algo que señalas o nombras ("kore o kudasai"), mientras que onegaishimasu funciona suelto para peticiones de servicio (la cuenta, una mesa...). Y gochisousama deshita no es un "gracias" genérico (eso es arigatou) — es específico para la comida, y se dice siempre, sin excepción, al terminar.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: 'これをください (kore o kudasai)', b: 'Esto, por favor' },
        { a: 'アレルギーがあります (arerugii ga arimasu)', b: 'Tengo alergia a...' },
        { a: 'お会計お願いします (okaikei onegaishimasu)', b: 'La cuenta, por favor' },
        { a: 'ごちそうさまでした (gochisousama deshita)', b: 'Gracias por la comida' },
        { a: '［comida］はありますか？ (arimasu ka)', b: '¿Tienen [comida]?' }
      ]},
      { tipo: 'clasifica', titulo: 'Al pedir o al terminar', instruccion: 'Arrastra cada frase a su grupo.', categorias: ['Al pedir', 'Al terminar'], items: [
        { texto: 'Kore o kudasai', cat: 'Al pedir' }, { texto: '[comida] wa arimasu ka', cat: 'Al pedir' }, { texto: 'Arerugii ga arimasu', cat: 'Al pedir' },
        { texto: 'Okaikei onegaishimasu', cat: 'Al terminar' }, { texto: 'Gochisousama deshita', cat: 'Al terminar' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la situación', instruccion: 'Elige la frase correcta.', banco: ['kore o kudasai', 'okaikei onegaishimasu', 'gochisousama deshita'], frases: [
        { texto: 'Señalas un plato en la carta: "___".', respuestas: ['kore o kudasai'] },
        { texto: 'Habéis terminado de comer y queréis pagar: "___".', respuestas: ['okaikei onegaishimasu'] },
        { texto: 'Al salir del restaurante, dices: "___".', respuestas: ['gochisousama deshita'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la comida', instruccion: 'Pon los pasos en orden, desde pedir hasta despedirte.', pasos: [
        'Kore o kudasai (pides)', 'Okaikei onegaishimasu (pides la cuenta)', 'Gochisousama deshita (te despides)'
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Gochisousama deshita es un "gracias" genérico para cualquier situación.', esVerdadero: false },
        { texto: 'Kudasai se usa pegado a algo que señalas o nombras.', esVerdadero: true },
        { texto: 'Arerugii viene del inglés "allergy".', esVerdadero: true },
        { texto: 'Gochisousama deshita solo se dice en restaurantes caros.', esVerdadero: false }
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
Si has hecho los días 1-6, ya sabes pedir perdón, saludar según la hora, presentarte, pedir ayuda cuando no entiendes, contar personas y objetos, y moverte en un restaurante de principio a fin.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| すみません | sumimasen | perdón / disculpe |
| ありがとうございます | arigatou gozaimasu | muchas gracias |
| こんにちは | konnichiwa | hola / buenas tardes |
| はじめまして | hajimemashite | encantado |
| 二人です | futari desu | somos dos (personas) |
| これをください | kore o kudasai | esto, por favor |
| お会計お願いします | okaikei onegaishimasu | la cuenta, por favor |
| ごちそうさまでした | gochisousama deshita | gracias por la comida |

## 🧠 Truco para recordar
Agrupa mentalmente por bloques: cortesía (día 1), saludos (día 2), pedir ayuda (día 3), contar (día 4), restaurante (días 5-6). Si te atascas en un juego, piensa primero a qué bloque pertenece la situación.

## 👁 confusión
Los tres tropiezos más comunes de este bloque: hai no siempre significa "de acuerdo", irasshaimase no se responde, y para "4 personas" se dice yonin — nunca "shinin".`,
    juegos: [
      { tipo: 'conecta', titulo: 'Repaso: conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: 'Sumimasen', b: 'Perdón / disculpe' }, { a: 'Konnichiwa', b: 'Hola / buenas tardes' }, { a: 'Hajimemashite', b: 'Encantado' },
        { a: 'Futari desu', b: 'Somos dos' }, { a: 'Gochisousama deshita', b: 'Gracias por la comida' }, { a: 'Yonin', b: '4 personas' }
      ]},
      { tipo: 'clasifica', titulo: 'Repaso: ¿de qué día es cada frase?', instruccion: 'Arrastra cada frase a su bloque.', categorias: ['Cortesía y saludos (días 1-2)', 'Restaurante (días 5-6)'], items: [
        { texto: 'Arigatou gozaimasu', cat: 'Cortesía y saludos (días 1-2)' }, { texto: 'Ohayou gozaimasu', cat: 'Cortesía y saludos (días 1-2)' },
        { texto: 'Kore o kudasai', cat: 'Restaurante (días 5-6)' }, { texto: 'Okaikei onegaishimasu', cat: 'Restaurante (días 5-6)' }
      ]},
      { tipo: 'rellena', titulo: 'Repaso general', instruccion: 'Elige la frase correcta.', banco: ['mayoimashita', 'futari desu', 'gochisousama deshita'], frases: [
        { texto: 'Te has perdido por la calle: "___".', respuestas: ['mayoimashita'] },
        { texto: 'Entráis dos al restaurante: "___".', respuestas: ['futari desu'] },
        { texto: 'Terminas de comer y sales: "___".', respuestas: ['gochisousama deshita'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena una comida completa', instruccion: 'Desde que entras hasta que sales del restaurante.', pasos: [
        'Irasshaimase (te reciben)', 'Futari desu (respondes cuántos sois)', 'Kore o kudasai (pides)', 'Okaikei onegaishimasu (pides la cuenta)', 'Gochisousama deshita (te despides)'
      ]},
      { tipo: 'vf', titulo: 'Repaso: verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Hai significa siempre que la otra persona está de acuerdo.', esVerdadero: false },
        { texto: 'Irasshaimase requiere que respondas algo.', esVerdadero: false },
        { texto: 'Yonin es la forma correcta de decir "4 personas".', esVerdadero: true },
        { texto: 'Konbanwa sirve para despedirte antes de dormir.', esVerdadero: false }
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
Día 8: la estación de tren, tu punto de partida casi a diario en Japón. Preguntar dónde está, sacar billete y encontrar el andén correcto.

## ⚡ En 10 segundos
**Eki wa doko desu ka?** = ¿dónde está la estación? **[Destino] made onegaishimasu** = hasta [destino], por favor. **Nan-ban-sen desu ka?** = ¿qué andén es? **Norikae** = transbordo. Un **IC kaado** (Suica/Pasmo) te ahorra sacar billete cada vez.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| 駅はどこですか？ | eki wa doko desu ka? | ¿dónde está la estación? |
| ［destino］までお願いします | [destino] made onegaishimasu | un billete hasta [destino], por favor |
| 何番線ですか？ | nan-ban-sen desu ka? | ¿qué andén / vía es? |
| 乗り換え | norikae | transbordo (cambiar de línea o tren) |
| ICカード | IC kaado | tarjeta prepago (Suica/Pasmo) para tocar y pasar |

## 🧠 Truco para recordar
"[Lugar] made" siempre significa "hasta [lugar]" — te sirve también fuera del tren, por ejemplo en taxi (lo verás mañana). Nan-ban-sen: nan = qué, ban = número, sen = vía — literalmente "qué número de vía".

## 👁 confusión
Norikae no es "bajarse del tren y ya está" — es "cambiar de tren o de línea", normalmente en la misma estación o una conectada. Y llevar un IC kaado cargado suele ser más rápido que sacar billete individual cada vez: no hace falta memorizar tarifas exactas.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: '駅はどこですか？ (eki wa doko desu ka)', b: '¿Dónde está la estación?' },
        { a: '何番線ですか？ (nan-ban-sen desu ka)', b: '¿Qué andén es?' },
        { a: '乗り換え (norikae)', b: 'Transbordo' },
        { a: 'ICカード (IC kaado)', b: 'Tarjeta prepago' },
        { a: '［destino］までお願いします', b: 'Hasta [destino], por favor' }
      ]},
      { tipo: 'clasifica', titulo: 'Preguntar o pagar/moverse', instruccion: 'Arrastra cada elemento a su grupo.', categorias: ['Preguntar', 'Moverse / pagar'], items: [
        { texto: 'Eki wa doko desu ka', cat: 'Preguntar' }, { texto: 'Nan-ban-sen desu ka', cat: 'Preguntar' },
        { texto: 'Norikae', cat: 'Moverse / pagar' }, { texto: 'IC kaado', cat: 'Moverse / pagar' }, { texto: '[destino] made onegaishimasu', cat: 'Moverse / pagar' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la situación', instruccion: 'Elige la frase correcta.', banco: ['eki wa doko desu ka', 'nan-ban-sen desu ka', 'norikae'], frases: [
        { texto: 'No ves la estación por ningún lado: "___".', respuestas: ['eki wa doko desu ka'] },
        { texto: 'Ya tienes billete pero no sabes a qué vía ir: "___".', respuestas: ['nan-ban-sen desu ka'] },
        { texto: 'Tu ruta requiere cambiar de línea a mitad de camino: eso es un "___".', respuestas: ['norikae'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena el trayecto en tren', instruccion: 'Pon los pasos en orden.', pasos: [
        'Eki wa doko desu ka (encuentras la estación)', '[Destino] made onegaishimasu (sacas billete)', 'Nan-ban-sen desu ka (preguntas el andén)', 'Norikae (haces transbordo si toca)'
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Norikae significa bajarte del tren y salir de la estación.', esVerdadero: false },
        { texto: 'Un IC kaado te permite tocar y pasar sin sacar billete cada vez.', esVerdadero: true },
        { texto: '"[Lugar] made" significa "hasta [lugar]".', esVerdadero: true },
        { texto: 'Nan-ban-sen desu ka pregunta la hora del tren.', esVerdadero: false }
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la palabra que no pertenece al grupo.', preguntas: [
        { grupo: '¿Cuál de estas NO es una pregunta?', explicacion: 'Norikae es un sustantivo (transbordo), no una pregunta.', opciones: [
          { texto: 'Eki wa doko desu ka', intruso: false }, { texto: 'Nan-ban-sen desu ka', intruso: false }, { texto: 'Norikae', intruso: true }
        ]}
      ]}
    ]
  },

  '09-transporte-ii': {
    contenido: `## Desarrollo
Día 9: taxis, autobuses y saber decir por dónde. Reutilizas el patrón "made onegaishimasu" del día 8, ahora aplicado a un taxi.

## ⚡ En 10 segundos
**Takushii** = taxi. **[Lugar] made onegaishimasu** = hasta [lugar], por favor (mismo patrón de ayer). **Migi / hidari** = derecha / izquierda. **Massugu** = recto. **Koko de tomete kudasai** = pare aquí, por favor.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| タクシー | takushii | taxi |
| ［lugar］までお願いします | [lugar] made onegaishimasu | hasta [lugar], por favor (en el taxi) |
| 右 / 左 | migi / hidari | derecha / izquierda |
| まっすぐ | massugu | recto, todo recto |
| ここで止めてください | koko de tomete kudasai | pare aquí, por favor |

## 🧠 Truco para recordar
Reutilizas "made onegaishimasu" del día 8 — mismo patrón, ahora en taxi en vez de en tren. Para no confundir migi/hidari, practica señalando con tu propia mano derecha mientras dices "migi".

## 👁 confusión
Las puertas traseras de los taxis japoneses se abren y cierran solas, controladas por el conductor — no tires ni empujes la puerta tú mismo, es un fallo típico de turistas.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: 'タクシー (takushii)', b: 'Taxi' }, { a: '右 (migi)', b: 'Derecha' }, { a: '左 (hidari)', b: 'Izquierda' }, { a: 'まっすぐ (massugu)', b: 'Recto' }, { a: 'ここで止めてください', b: 'Pare aquí, por favor' }
      ]},
      { tipo: 'clasifica', titulo: 'Direcciones o vehículo', instruccion: 'Arrastra cada palabra a su grupo.', categorias: ['Dar direcciones', 'Sobre el taxi'], items: [
        { texto: 'Migi', cat: 'Dar direcciones' }, { texto: 'Hidari', cat: 'Dar direcciones' }, { texto: 'Massugu', cat: 'Dar direcciones' },
        { texto: 'Takushii', cat: 'Sobre el taxi' }, { texto: 'Koko de tomete kudasai', cat: 'Sobre el taxi' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la situación', instruccion: 'Elige la palabra correcta.', banco: ['migi', 'massugu', 'koko de tomete kudasai'], frases: [
        { texto: 'Le indicas al taxista que gire a la derecha: "___".', respuestas: ['migi'] },
        { texto: 'Le dices que siga todo recto: "___".', respuestas: ['massugu'] },
        { texto: 'Habéis llegado, quieres bajarte: "___".', respuestas: ['koko de tomete kudasai'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena el trayecto en taxi', instruccion: 'Pon los pasos en orden.', pasos: [
        'Takushii (subes al taxi)', '[Lugar] made onegaishimasu (dices el destino)', 'Migi / hidari / massugu (guías si hace falta)', 'Koko de tomete kudasai (pides parar)'
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Debes abrir tú mismo la puerta trasera del taxi.', esVerdadero: false },
        { texto: 'Massugu significa "recto".', esVerdadero: true },
        { texto: 'Migi significa "izquierda".', esVerdadero: false },
        { texto: 'Koko de tomete kudasai sirve para pedir que el taxi pare.', esVerdadero: true }
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
Día 10: llegar al hotel o ryokan, hacer el check-in y preguntar lo básico sobre tu habitación.

## ⚡ En 10 segundos
**Chekku-in onegaishimasu** = check-in, por favor. **Yoyaku shite imasu** = tengo una reserva. **Heya** = habitación. **Chekku-auto wa nanji desu ka?** = ¿a qué hora es el check-out? **Wifi wa arimasu ka?** = ¿hay wifi?

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| チェックインお願いします | chekku-in onegaishimasu | check-in, por favor |
| 予約しています | yoyaku shite imasu | tengo una reserva |
| 部屋 | heya | habitación |
| チェックアウトは何時ですか？ | chekku-auto wa nanji desu ka? | ¿a qué hora es el check-out? |
| Wi-Fiはありますか？ | wifi wa arimasu ka? | ¿hay wifi? |

## 🧠 Truco para recordar
Chekku-in / chekku-auto son préstamos directos del inglés "check-in"/"check-out" — fáciles de reconocer aunque suenen "a la japonesa". "[Algo] wa arimasu ka?" (¿hay...?) es una plantilla reutilizable para casi cualquier cosa: wifi wa arimasu ka, menu no eigo wa arimasu ka...

## 👁 confusión
En un ryokan tradicional es normal quitarte los zapatos ya en la entrada (genkan) y usar zapatillas. Y los horarios pueden sorprender: el check-in a veces empieza más tarde (sobre las 15h) y el check-out es más temprano (sobre las 10h) que en muchos hoteles occidentales.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: 'チェックインお願いします', b: 'Check-in, por favor' }, { a: '予約しています (yoyaku shite imasu)', b: 'Tengo una reserva' }, { a: '部屋 (heya)', b: 'Habitación' },
        { a: 'チェックアウトは何時ですか？', b: '¿A qué hora es el check-out?' }, { a: 'Wi-Fiはありますか？', b: '¿Hay wifi?' }
      ]},
      { tipo: 'clasifica', titulo: 'Llegada o preguntas', instruccion: 'Arrastra cada frase a su grupo.', categorias: ['Al llegar', 'Preguntas sobre el hotel'], items: [
        { texto: 'Chekku-in onegaishimasu', cat: 'Al llegar' }, { texto: 'Yoyaku shite imasu', cat: 'Al llegar' },
        { texto: 'Chekku-auto wa nanji desu ka', cat: 'Preguntas sobre el hotel' }, { texto: 'Wifi wa arimasu ka', cat: 'Preguntas sobre el hotel' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la situación', instruccion: 'Elige la frase correcta.', banco: ['yoyaku shite imasu', 'chekku-auto wa nanji desu ka', 'wifi wa arimasu ka'], frases: [
        { texto: 'Llegas al mostrador y quieres decir que ya reservaste: "___".', respuestas: ['yoyaku shite imasu'] },
        { texto: 'Quieres saber hasta qué hora puedes quedarte mañana: "___".', respuestas: ['chekku-auto wa nanji desu ka'] },
        { texto: 'Preguntas si hay conexión a internet: "___".', respuestas: ['wifi wa arimasu ka'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena el check-in', instruccion: 'Pon los pasos en orden.', pasos: [
        'Chekku-in onegaishimasu (pides hacer el check-in)', 'Yoyaku shite imasu (confirmas tu reserva)', 'Wifi wa arimasu ka (preguntas por el wifi)', 'Chekku-auto wa nanji desu ka (preguntas la hora de salida)'
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Chekku-in y chekku-auto son préstamos del inglés.', esVerdadero: true },
        { texto: 'En un ryokan tradicional puedes entrar con zapatos hasta tu habitación.', esVerdadero: false },
        { texto: '"[Algo] wa arimasu ka" sirve para preguntar si algo está disponible.', esVerdadero: true },
        { texto: 'El check-out en Japón suele ser más tarde que en hoteles occidentales.', esVerdadero: false }
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la palabra que no pertenece al grupo.', preguntas: [
        { grupo: '¿Cuál de estas NO tiene que ver con el hotel?', explicacion: 'Norikae es del día de transporte, no de alojamiento.', opciones: [
          { texto: 'Chekku-in', intruso: false }, { texto: 'Heya', intruso: false }, { texto: 'Norikae', intruso: true }
        ]}
      ]}
    ]
  },

  '11-compras-i': {
    contenido: `## Desarrollo
Día 11: entrar en una tienda, preguntar precio y talla, y pedir permiso para probarte algo.

## ⚡ En 10 segundos
**Ikura desu ka?** = ¿cuánto cuesta? **Saizu** = talla. **Shichaku shite mo ii desu ka?** = ¿puedo probármelo? **Chiisai / ookii** = pequeño / grande.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| いくらですか？ | ikura desu ka? | ¿cuánto cuesta? |
| これは | kore wa | esto (señalando) |
| サイズ | saizu | talla |
| 試着してもいいですか？ | shichaku shite mo ii desu ka? | ¿puedo probármelo? |
| 小さい / 大きい | chiisai / ookii | pequeño / grande |

## 🧠 Truco para recordar
"[Verbo] te mo ii desu ka" es tu plantilla mágica para pedir permiso de hacer casi cualquier cosa — hoy "probarte algo", más adelante servirá para pedir permiso de hacer fotos. Literal: "¿está bien si hago...?".

## 👁 confusión
No es habitual regatear en tiendas japonesas — el precio de la etiqueta es fijo casi siempre, a diferencia de mercados de otros países. No lo intentes, puede resultar incómodo para el vendedor.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: 'いくらですか？ (ikura desu ka)', b: '¿Cuánto cuesta?' }, { a: 'サイズ (saizu)', b: 'Talla' }, { a: '試着してもいいですか？', b: '¿Puedo probármelo?' },
        { a: '小さい (chiisai)', b: 'Pequeño' }, { a: '大きい (ookii)', b: 'Grande' }
      ]},
      { tipo: 'clasifica', titulo: 'Preguntar o describir', instruccion: 'Arrastra cada palabra a su grupo.', categorias: ['Preguntar', 'Describir tamaño'], items: [
        { texto: 'Ikura desu ka', cat: 'Preguntar' }, { texto: 'Shichaku shite mo ii desu ka', cat: 'Preguntar' },
        { texto: 'Chiisai', cat: 'Describir tamaño' }, { texto: 'Ookii', cat: 'Describir tamaño' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la situación', instruccion: 'Elige la palabra correcta.', banco: ['ikura desu ka', 'shichaku shite mo ii desu ka', 'chiisai'], frases: [
        { texto: 'No ves el precio en la etiqueta: "___".', respuestas: ['ikura desu ka'] },
        { texto: 'Quieres probarte una prenda: "___".', respuestas: ['shichaku shite mo ii desu ka'] },
        { texto: 'La talla que te han dado te queda grande, necesitas una: "___".', respuestas: ['chiisai'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la compra', instruccion: 'Pon los pasos en orden.', pasos: [
        'Ikura desu ka (preguntas el precio)', 'Saizu (preguntas por la talla)', 'Shichaku shite mo ii desu ka (pides probártelo)'
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Es normal regatear el precio en tiendas japonesas.', esVerdadero: false },
        { texto: '"Te mo ii desu ka" sirve para pedir permiso.', esVerdadero: true },
        { texto: 'Ookii significa "pequeño".', esVerdadero: false },
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
Día 12: llega el momento de pagar. Tarjeta o efectivo, tax-free si compras algo caro, y la típica pregunta sobre la bolsa.

## ⚡ En 10 segundos
**Kaado de haraemasu ka?** = ¿puedo pagar con tarjeta? **Genkin** = efectivo. **Men-zei** = libre de impuestos. Te preguntarán **fukuro wa irimasu ka?** (¿necesita bolsa?) — puedes responder **fukuro wa iranai desu** (no la necesito).

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| カードで払えますか？ | kaado de haraemasu ka? | ¿puedo pagar con tarjeta? |
| 現金 | genkin | efectivo |
| 免税 | men-zei | libre de impuestos (tax-free) |
| 袋は要りますか？ | fukuro wa irimasu ka? | ¿necesita bolsa? (te preguntan) |
| 袋は要らないです | fukuro wa iranai desu | no necesito bolsa |

## 🧠 Truco para recordar
"[Algo] de haraemasu ka" (¿puedo pagar con...?) es una plantilla reutilizable: kaado de / genkin de + haraemasu ka. El men-zei suele requerir enseñar el pasaporte en caja para compras por encima de cierto importe — llévalo encima cuando compres algo caro.

## 👁 confusión
Muchas tiendas pequeñas y restaurantes en Japón siguen siendo solo efectivo, aunque el país parezca muy tecnológico — no des por hecho que aceptan tarjeta en todas partes, lleva siempre algo de genkin encima.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: 'カードで払えますか？', b: '¿Puedo pagar con tarjeta?' }, { a: '現金 (genkin)', b: 'Efectivo' }, { a: '免税 (men-zei)', b: 'Libre de impuestos' },
        { a: '袋は要りますか？', b: '¿Necesita bolsa?' }, { a: '袋は要らないです', b: 'No necesito bolsa' }
      ]},
      { tipo: 'clasifica', titulo: 'Pagar o bolsa', instruccion: 'Arrastra cada frase a su grupo.', categorias: ['Sobre el pago', 'Sobre la bolsa'], items: [
        { texto: 'Kaado de haraemasu ka', cat: 'Sobre el pago' }, { texto: 'Genkin', cat: 'Sobre el pago' }, { texto: 'Men-zei', cat: 'Sobre el pago' },
        { texto: 'Fukuro wa irimasu ka', cat: 'Sobre la bolsa' }, { texto: 'Fukuro wa iranai desu', cat: 'Sobre la bolsa' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la situación', instruccion: 'Elige la frase correcta.', banco: ['kaado de haraemasu ka', 'fukuro wa iranai desu', 'genkin'], frases: [
        { texto: 'Quieres saber si aceptan tarjeta: "___".', respuestas: ['kaado de haraemasu ka'] },
        { texto: 'No quieres que te den bolsa: "___".', respuestas: ['fukuro wa iranai desu'] },
        { texto: 'La tienda solo acepta dinero en mano, es decir: "___".', respuestas: ['genkin'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena el pago', instruccion: 'Pon los pasos en orden.', pasos: [
        'Kaado de haraemasu ka (preguntas si aceptan tarjeta)', 'Genkin (pagas en efectivo si no aceptan)', 'Fukuro wa irimasu ka (te preguntan por la bolsa)', 'Fukuro wa iranai desu (respondes que no la necesitas)'
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Todas las tiendas en Japón aceptan tarjeta sin excepción.', esVerdadero: false },
        { texto: 'Men-zei significa "libre de impuestos".', esVerdadero: true },
        { texto: 'Puede que te pidan el pasaporte para una compra tax-free.', esVerdadero: true },
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
Ya sabes moverte en tren y en taxi, hacer el check-in en tu alojamiento, y comprar preguntando precio, talla y forma de pago.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| 駅はどこですか？ | eki wa doko desu ka? | ¿dónde está la estación? |
| 何番線ですか？ | nan-ban-sen desu ka? | ¿qué andén es? |
| ここで止めてください | koko de tomete kudasai | pare aquí, por favor |
| チェックインお願いします | chekku-in onegaishimasu | check-in, por favor |
| いくらですか？ | ikura desu ka? | ¿cuánto cuesta? |
| カードで払えますか？ | kaado de haraemasu ka? | ¿puedo pagar con tarjeta? |

## 🧠 Truco para recordar
El patrón "[lugar] made onegaishimasu" (hasta [lugar], por favor) te sirve igual en tren que en taxi — es el hilo conductor de los días 8 y 9.

## 👁 confusión
Recuerda: muchas tiendas pequeñas solo aceptan efectivo (día 12), y en Japón no se regatea (día 11) — dos hábitos que conviene desaprender antes de llegar.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Repaso: conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: 'Eki wa doko desu ka', b: '¿Dónde está la estación?' }, { a: 'Norikae', b: 'Transbordo' }, { a: 'Chekku-in onegaishimasu', b: 'Check-in, por favor' },
        { a: 'Ikura desu ka', b: '¿Cuánto cuesta?' }, { a: 'Kaado de haraemasu ka', b: '¿Puedo pagar con tarjeta?' }, { a: 'Fukuro wa iranai desu', b: 'No necesito bolsa' }
      ]},
      { tipo: 'clasifica', titulo: 'Repaso: ¿de qué bloque es cada frase?', instruccion: 'Arrastra cada frase a su bloque.', categorias: ['Transporte (días 8-9)', 'Compras (días 11-12)'], items: [
        { texto: 'Nan-ban-sen desu ka', cat: 'Transporte (días 8-9)' }, { texto: 'Koko de tomete kudasai', cat: 'Transporte (días 8-9)' },
        { texto: 'Shichaku shite mo ii desu ka', cat: 'Compras (días 11-12)' }, { texto: 'Genkin', cat: 'Compras (días 11-12)' }
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
        { texto: 'Norikae significa "cambiar de tren o de línea".', esVerdadero: true },
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
Día 14: ojalá no lo necesites, pero conviene tenerlo preparado. Decir que te duele algo, encontrar una farmacia y pedir ayuda urgente si hace falta.

## ⚡ En 10 segundos
**[Parte] ga itai desu** = me duele [parte] (ej. onaka ga itai desu = me duele el estómago). **Yakkyoku** = farmacia. **Kyuukyuusha o yonde kudasai** = llame a una ambulancia. **Keisatsu o yonde kudasai** = llame a la policía. Emergencias: **119** (ambulancia/bomberos), **110** (policía).

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| 薬局 | yakkyoku | farmacia |
| ［parte del cuerpo］が痛いです | [parte] ga itai desu | me duele [parte] |
| 救急車を呼んでください | kyuukyuusha o yonde kudasai | llame a una ambulancia, por favor |
| 警察を呼んでください | keisatsu o yonde kudasai | llame a la policía, por favor |
| 119 / 110 | hyaku-juu-kyuu / hyaku-juu | ambulancia y bomberos (119) / policía (110) |

## 🧠 Truco para recordar
"[Parte] ga itai desu" es una plantilla: solo cambias la primera palabra — atama ga itai (cabeza), onaka ga itai (estómago), nodo ga itai (garganta). Para los números de emergencia: 119 = ambulancia/fuego (como el 112 europeo), 110 = policía.

## 👁 confusión
En Japón, la ambulancia y los bomberos comparten el mismo número (119); la policía tiene uno distinto (110) — al revés de lo que ocurre en muchos países donde todo va por un único número de emergencias.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: '薬局 (yakkyoku)', b: 'Farmacia' }, { a: 'お腹が痛いです (onaka ga itai desu)', b: 'Me duele el estómago' }, { a: '救急車を呼んでください', b: 'Llame a una ambulancia' },
        { a: '警察を呼んでください', b: 'Llame a la policía' }, { a: '119', b: 'Ambulancia y bomberos' }
      ]},
      { tipo: 'clasifica', titulo: 'Farmacia o emergencia', instruccion: 'Arrastra cada elemento a su grupo.', categorias: ['Molestia leve', 'Emergencia'], items: [
        { texto: 'Yakkyoku', cat: 'Molestia leve' }, { texto: 'Atama ga itai desu', cat: 'Molestia leve' },
        { texto: 'Kyuukyuusha o yonde kudasai', cat: 'Emergencia' }, { texto: 'Keisatsu o yonde kudasai', cat: 'Emergencia' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la situación', instruccion: 'Elige la frase correcta.', banco: ['onaka ga itai desu', 'yakkyoku', 'kyuukyuusha o yonde kudasai'], frases: [
        { texto: 'Te duele el estómago: "___".', respuestas: ['onaka ga itai desu'] },
        { texto: 'Necesitas comprar medicinas, buscas: "___".', respuestas: ['yakkyoku'] },
        { texto: 'Es una emergencia grave: "___".', respuestas: ['kyuukyuusha o yonde kudasai'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena una emergencia médica', instruccion: 'Pon los pasos en orden, de menos a más grave.', pasos: [
        'Atama ga itai desu (molestia leve)', 'Yakkyoku (vas a la farmacia)', 'Kyuukyuusha o yonde kudasai (si es grave, pides ambulancia)'
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'En Japón, ambulancia y policía comparten el mismo número.', esVerdadero: false },
        { texto: 'El 119 sirve para ambulancia y bomberos.', esVerdadero: true },
        { texto: 'El 110 es el número de la policía.', esVerdadero: true },
        { texto: '"[Parte] ga itai desu" sirve para decir que algo te duele.', esVerdadero: true }
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
Día 15: normas no escritas que marcan la diferencia entre sentirte perdido o encajar. Japón funciona con un código de comportamiento en espacios compartidos bastante distinto al nuestro.

## ⚡ En 10 segundos
No se deja propina en restaurantes. En transporte público se pone el móvil en silencio. Antes de entrar a un santuario se pasa bajo un **torii** y se purifican manos y boca en el **temizuya**. Se hacen colas ordenadas para casi todo.

## ✅ Lo esencial

| Situación | Norma |
|---|---|
| Restaurantes | No se deja propina — el servicio ya está incluido en el precio |
| Transporte público | El móvil se pone en silencio (modo manner), no se habla por teléfono |
| Templos y santuarios | Se cruza un 鳥居 (torii) al entrar y se purifican manos y boca en el 手水舎 (temizuya) |
| Calzado | En ryokan, algunos restaurantes y casas, te descalzas al entrar |
| Colas | Se espera en fila ordenada, sin adelantar, para el tren, la tienda o el ascensor |

## 🧠 Truco para recordar
Piensa en Japón como "el país del silencio y el orden": casi todas las normas culturales giran en torno a no molestar a los demás en espacios compartidos. Si dudas si algo está bien, pregúntate: "¿esto molestaría a alguien cerca de mí?".

## 👁 confusión
Dejar propina no es un gesto extra amable en Japón — muchos camareros lo interpretarán como un error, e incluso pueden salir corriendo detrás de ti para devolverte el dinero que "se te olvidó". El servicio ya está incluido en el precio, siempre.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada palabra con su significado', instruccion: 'Toca una palabra y luego su significado.', pares: [
        { a: '鳥居 (torii)', b: 'Puerta tradicional de entrada a un santuario' },
        { a: '手水舎 (temizuya)', b: 'Fuente para purificarte antes de entrar' },
        { a: 'Propina', b: 'No se deja en restaurantes' },
        { a: 'Colas', b: 'Se hacen ordenadas, sin adelantar' }
      ]},
      { tipo: 'clasifica', titulo: 'Templos o vida diaria', instruccion: 'Arrastra cada elemento a su grupo.', categorias: ['En templos y santuarios', 'En la vida diaria'], items: [
        { texto: 'Torii', cat: 'En templos y santuarios' }, { texto: 'Temizuya', cat: 'En templos y santuarios' },
        { texto: 'No dejar propina', cat: 'En la vida diaria' }, { texto: 'Móvil en silencio en el tren', cat: 'En la vida diaria' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la norma', instruccion: 'Elige la palabra correcta.', banco: ['torii', 'temizuya', 'propina'], frases: [
        { texto: 'Antes de entrar a un santuario, cruzas un: "___".', respuestas: ['torii'] },
        { texto: 'Te purificas las manos y la boca en el: "___".', respuestas: ['temizuya'] },
        { texto: 'Esto NO se deja en un restaurante japonés: "___".', respuestas: ['propina'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la visita a un santuario', instruccion: 'Pon los pasos en orden.', pasos: [
        'Cruzas el torii', 'Te purificas en el temizuya', 'Visitas el santuario en silencio y respeto'
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Dejar propina es un gesto de amabilidad muy apreciado en Japón.', esVerdadero: false },
        { texto: 'Se espera en fila ordenada para el tren, la tienda o el ascensor.', esVerdadero: true },
        { texto: 'El torii es la fuente donde te purificas antes de entrar al templo.', esVerdadero: false },
        { texto: 'En transporte público se pone el móvil en silencio.', esVerdadero: true }
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
Día 16: pequeñas frases para el día a día — el clima, la hora, pedir permiso para una foto, y tu mejor aliado de viaje: el konbini.

## ⚡ En 10 segundos
**Kyou wa atsui/samui desu** = hoy hace calor/frío. **Ima nanji desu ka?** = ¿qué hora es? **Shashin o totte mo ii desu ka?** = ¿puedo hacer una foto? **Konbini** = tienda de conveniencia, abierta 24h.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| 今日は暑い/寒いです | kyou wa atsui/samui desu | hoy hace calor / frío |
| 今何時ですか？ | ima nanji desu ka? | ¿qué hora es? |
| 写真を撮ってもいいですか？ | shashin o totte mo ii desu ka? | ¿puedo hacer una foto? |
| コンビニ | konbini | tienda de conveniencia (abierta 24h) |

## 🧠 Truco para recordar
Reutilizas otra vez "...te mo ii desu ka" (¿puedo...?) del día 11, ahora con fotos. El konbini es tu mejor amigo de viaje: comida, cajero, baño, casi de todo, a cualquier hora del día o de la noche.

## 👁 confusión
No todo se puede fotografiar libremente — en templos, museos o delante de otras personas conviene preguntar primero (shashin o totte mo ii desu ka) en vez de dar por hecho que está permitido.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: '今日は暑いです (kyou wa atsui desu)', b: 'Hoy hace calor' }, { a: '今何時ですか？', b: '¿Qué hora es?' }, { a: '写真を撮ってもいいですか？', b: '¿Puedo hacer una foto?' }, { a: 'コンビニ (konbini)', b: 'Tienda de conveniencia' }
      ]},
      { tipo: 'clasifica', titulo: 'Clima/hora o permiso', instruccion: 'Arrastra cada frase a su grupo.', categorias: ['Clima y hora', 'Pedir permiso'], items: [
        { texto: 'Kyou wa atsui desu', cat: 'Clima y hora' }, { texto: 'Ima nanji desu ka', cat: 'Clima y hora' },
        { texto: 'Shashin o totte mo ii desu ka', cat: 'Pedir permiso' }, { texto: 'Shichaku shite mo ii desu ka', cat: 'Pedir permiso' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la situación', instruccion: 'Elige la frase correcta.', banco: ['ima nanji desu ka', 'shashin o totte mo ii desu ka', 'konbini'], frases: [
        { texto: 'No sabes qué hora es: "___".', respuestas: ['ima nanji desu ka'] },
        { texto: 'Quieres hacer una foto en un templo: "___".', respuestas: ['shashin o totte mo ii desu ka'] },
        { texto: 'Necesitas comprar algo rápido a las 2 de la madrugada, vas a un: "___".', respuestas: ['konbini'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la visita a un templo', instruccion: 'Pon los pasos en orden.', pasos: [
        'Ima nanji desu ka (compruebas la hora)', 'Shashin o totte mo ii desu ka (pides permiso para fotografiar)', '(haces la foto si te dicen que sí)'
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Se puede fotografiar libremente en cualquier templo sin preguntar.', esVerdadero: false },
        { texto: 'Konbini son tiendas abiertas 24 horas.', esVerdadero: true },
        { texto: 'Samui significa "hace calor".', esVerdadero: false },
        { texto: '"Te mo ii desu ka" se usa para pedir permiso.', esVerdadero: true }
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
Día 17: repaso de todo el curso, mezclando cortesía, saludos, transporte, restaurante, compras y salud. Última parada antes del quiz final.

## ⚡ En 10 segundos
Un repaso rápido de las categorías: cortesía (sumimasen, arigatou gozaimasu), saludos (konnichiwa, hajimemashite), transporte (made onegaishimasu, norikae), restaurante (kore o kudasai, gochisousama deshita), compras (ikura desu ka, kaado de haraemasu ka) y salud ([parte] ga itai desu, 119/110).

## ✅ Lo esencial

| Categoría | Japonés | Español |
|---|---|---|
| Cortesía | すみません (sumimasen) | perdón / disculpe |
| Saludos | こんにちは (konnichiwa) | hola / buenas tardes |
| Transporte | ［lugar］までお願いします | hasta [lugar], por favor |
| Restaurante | これをください (kore o kudasai) | esto, por favor |
| Compras | いくらですか？ (ikura desu ka) | ¿cuánto cuesta? |
| Salud | ［parte］が痛いです | me duele [parte] |

## 🧠 Truco para recordar
Si te bloqueas en un juego, pregúntate primero: "¿esto es cortesía, transporte, comida, compras o salud?". Ubicar la categoría suele hacer que la respuesta salga sola.

## 👁 confusión
Los tres errores más repetidos del curso: hai no siempre es "de acuerdo", para "4 personas" es yonin (nunca "shinin"), y no se deja propina en ningún sitio de Japón.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Repaso general: conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: 'Sumimasen', b: 'Perdón / disculpe' }, { a: 'Konnichiwa', b: 'Hola / buenas tardes' }, { a: 'Norikae', b: 'Transbordo' },
        { a: 'Gochisousama deshita', b: 'Gracias por la comida' }, { a: 'Ikura desu ka', b: '¿Cuánto cuesta?' }, { a: 'Kyuukyuusha o yonde kudasai', b: 'Llame a una ambulancia' }
      ]},
      { tipo: 'clasifica', titulo: 'Repaso general: ¿de qué categoría es cada frase?', instruccion: 'Arrastra cada frase a su categoría.', categorias: ['Transporte y alojamiento', 'Compras y salud'], items: [
        { texto: 'Nan-ban-sen desu ka', cat: 'Transporte y alojamiento' }, { texto: 'Chekku-in onegaishimasu', cat: 'Transporte y alojamiento' },
        { texto: 'Saizu', cat: 'Compras y salud' }, { texto: 'Yakkyoku', cat: 'Compras y salud' }
      ]},
      { tipo: 'rellena', titulo: 'Repaso general', instruccion: 'Elige la frase correcta.', banco: ['hajimemashite', 'okaikei onegaishimasu', 'fukuro wa iranai desu'], frases: [
        { texto: 'Conoces a alguien por primera vez: "___".', respuestas: ['hajimemashite'] },
        { texto: 'Habéis terminado de comer, pedís: "___".', respuestas: ['okaikei onegaishimasu'] },
        { texto: 'No quieres bolsa en la tienda: "___".', respuestas: ['fukuro wa iranai desu'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena un día completo de viaje', instruccion: 'Desde que sales del hotel hasta que vuelves a dormir.', pasos: [
        'Ohayou gozaimasu (te levantas y saludas)', 'Eki wa doko desu ka (vas a la estación)', 'Kore o kudasai (comes fuera)', 'Ikura desu ka (haces alguna compra)', 'Gochisousama deshita (cierras el día)'
      ]},
      { tipo: 'vf', titulo: 'Repaso general: verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Konbanwa es una despedida para ir a dormir.', esVerdadero: false },
        { texto: 'El 119 es el número de ambulancia y bomberos en Japón.', esVerdadero: true },
        { texto: 'Se puede regatear el precio en tiendas japonesas.', esVerdadero: false },
        { texto: '"[Lugar] made onegaishimasu" sirve tanto en tren como en taxi.', esVerdadero: true }
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la palabra que no pertenece al grupo.', preguntas: [
        { grupo: '¿Cuál de estas NO es una fórmula de despedida?', explicacion: 'Hajimemashite es de presentación, no de despedida.', opciones: [
          { texto: 'Gochisousama deshita', intruso: false }, { texto: 'Arigatou gozaimasu', intruso: false }, { texto: 'Hajimemashite', intruso: true }
        ]}
      ]}
    ]
  },

  '18-quiz-final-y-chuleta': {
    contenido: `## Desarrollo
Día 18: último día. Aquí tienes la chuleta completa del curso — guárdala o haz captura para llevarla el día del vuelo — y el quiz final que mezcla las 17 lecciones anteriores.

## ✅ Lo esencial — Chuleta de viaje

**Cortesía**

| Japonés | Rōmaji | Español |
|---|---|---|
| すみません | sumimasen | perdón / disculpe |
| ありがとうございます | arigatou gozaimasu | muchas gracias |
| お願いします | onegaishimasu | por favor |
| はい / いいえ | hai / iie | sí / no |

**Saludos**

| Japonés | Rōmaji | Español |
|---|---|---|
| おはようございます | ohayou gozaimasu | buenos días |
| こんにちは | konnichiwa | hola / buenas tardes |
| こんばんは | konbanwa | buenas noches (al llegar) |
| はじめまして | hajimemashite | encantado |

**Transporte**

| Japonés | Rōmaji | Español |
|---|---|---|
| ［lugar］までお願いします | [lugar] made onegaishimasu | hasta [lugar], por favor |
| 何番線ですか？ | nan-ban-sen desu ka? | ¿qué andén es? |
| ここで止めてください | koko de tomete kudasai | pare aquí, por favor |

**Restaurante**

| Japonés | Rōmaji | Español |
|---|---|---|
| これをください | kore o kudasai | esto, por favor |
| お会計お願いします | okaikei onegaishimasu | la cuenta, por favor |
| ごちそうさまでした | gochisousama deshita | gracias por la comida |

**Compras**

| Japonés | Rōmaji | Español |
|---|---|---|
| いくらですか？ | ikura desu ka? | ¿cuánto cuesta? |
| カードで払えますか？ | kaado de haraemasu ka? | ¿puedo pagar con tarjeta? |

**Salud y emergencias**

| Japonés | Rōmaji | Español |
|---|---|---|
| ［parte］が痛いです | [parte] ga itai desu | me duele [parte] |
| 119 / 110 | hyaku-juu-kyuu / hyaku-juu | ambulancia-bomberos / policía |

## 🧠 Truco para recordar
El día del vuelo, no intentes repasarlo todo — repasa solo esta chuleta cinco minutos antes de aterrizar. Es lo mínimo con lo que puedes sobrevivir con soltura desde el primer momento.

## 👁 confusión
Los tres fallos más comunes de todo el curso: hai no siempre significa estar de acuerdo, yonin (nunca "shinin") para 4 personas, y la propina no se deja en ningún sitio de Japón — nunca.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Quiz final: conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: 'Sumimasen', b: 'Perdón / disculpe' }, { a: 'Yoroshiku onegaishimasu', b: 'Mucho gusto' }, { a: 'Nan-ban-sen desu ka', b: '¿Qué andén es?' },
        { a: 'Gochisousama deshita', b: 'Gracias por la comida' }, { a: 'Kaado de haraemasu ka', b: '¿Puedo pagar con tarjeta?' }, { a: 'Kyuukyuusha o yonde kudasai', b: 'Llame a una ambulancia' }
      ]},
      { tipo: 'clasifica', titulo: 'Quiz final: ¿de qué categoría es cada frase?', instruccion: 'Arrastra cada frase a su categoría.', categorias: ['Cortesía y saludos', 'Transporte, compras y salud'], items: [
        { texto: 'Arigatou gozaimasu', cat: 'Cortesía y saludos' }, { texto: 'Hajimemashite', cat: 'Cortesía y saludos' },
        { texto: 'Norikae', cat: 'Transporte, compras y salud' }, { texto: 'Ikura desu ka', cat: 'Transporte, compras y salud' }, { texto: 'Yakkyoku', cat: 'Transporte, compras y salud' }
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
