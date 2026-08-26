/*
 * Subida a Firestore — Japonés, Semana 1 (Módulo 2: Día 3 a Día 7)
 *
 * Cómo usar:
 * 1. Abre ApuntesLarry logueado con tu cuenta Google.
 * 2. F12 → Console.
 * 3. Pega TODO este archivo y pulsa Enter.
 * 4. Ejecuta:  subirSemana1()
 *
 * Escribe en: temas/japones-semana1/puntos/{firestoreId}
 * Es seguro volver a ejecutarlo: sobreescribe, no duplica.
 */

var LECCIONES_SEMANA1 = {

  // ══════════════ DÍA 3 · Pedir ayuda y orientarte ══════════════

  'd3-pc-1': {
    contenido: `## Desarrollo
Cuando algo no sale como esperabas, estas cuatro frases son tu primera línea de defensa: admitir que no entiendes, avisar de que tu japonés es limitado, y pedir que te repitan o vayan más despacio.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| わかりません | wakarimasen | no entiendo |
| 日本語が下手です | nihongo ga heta desu | hablo mal japonés |
| もう一度お願いします | mou ichido onegaishimasu | repita, por favor |
| ゆっくりお願いします | yukkuri onegaishimasu | más despacio, por favor |

## 🧠 Truco para recordar
Di primero nihongo ga heta desu ("hablo mal japonés") y verás que la otra persona automáticamente simplifica lo que dice — es casi un atajo mágico para que te hablen más despacio sin tener que pedirlo.

## 👁 confusión
Wakarimasen (no entiendo lo que dices) no es lo mismo que "no sé" — es específicamente sobre no comprender un mensaje, no sobre desconocimiento general.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: 'わかりません (wakarimasen)', b: 'No entiendo' }, { a: '日本語が下手です', b: 'Hablo mal japonés' }, { a: 'もう一度お願いします', b: 'Repita, por favor' }, { a: 'ゆっくりお願いします', b: 'Más despacio, por favor' }
      ]},
      { tipo: 'clasifica', titulo: 'Admitir o pedir', instruccion: 'Arrastra cada frase a su grupo.', categorias: ['Admitir que no entiendes', 'Pedir un cambio'], items: [
        { texto: 'Wakarimasen', cat: 'Admitir que no entiendes' }, { texto: 'Nihongo ga heta desu', cat: 'Admitir que no entiendes' },
        { texto: 'Mou ichido onegaishimasu', cat: 'Pedir un cambio' }, { texto: 'Yukkuri onegaishimasu', cat: 'Pedir un cambio' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la situación', instruccion: 'Elige la frase correcta.', banco: ['wakarimasen', 'yukkuri onegaishimasu'], frases: [
        { texto: 'No entiendes nada de lo que te acaban de decir: "___".', respuestas: ['wakarimasen'] },
        { texto: 'Te hablan demasiado rápido: "___".', respuestas: ['yukkuri onegaishimasu'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la reacción', instruccion: 'Pon los pasos en orden.', pasos: [
        'Wakarimasen (dices que no entiendes)', 'Nihongo ga heta desu (das contexto)', 'Yukkuri onegaishimasu (pides que vayan despacio)'
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Wakarimasen significa "no entiendo".', esVerdadero: true },
        { texto: 'Mou ichido onegaishimasu pide que hablen más despacio.', esVerdadero: false }
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la palabra que no pertenece al grupo.', preguntas: [
        { grupo: '¿Cuál de estas NO pide que te repitan o vayan despacio?', explicacion: 'Wakarimasen es admitir que no entiendes, no una petición de cambio.', opciones: [
          { texto: 'Mou ichido onegaishimasu', intruso: false }, { texto: 'Yukkuri onegaishimasu', intruso: false }, { texto: 'Wakarimasen', intruso: true }
        ]}
      ]}
    ]
  },

  'd3-pc-2': {
    contenido: `## Desarrollo
Tres palabras de lugar que te sacan de un apuro cuando necesitas orientarte: el baño, la estación, y el camino en general.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| トイレ | toire | baño |
| 駅 | eki | estación |
| 道 | michi | camino / calle |
| ここ | koko | aquí |

## 🧠 Truco para recordar
Toire suena casi como "toilet" en inglés — de las palabras más fáciles de recordar de todo el curso. Koko (aquí) rima con "aquí, aquí" repetido, fácil de memorizar por sonido.

## 👁 confusión
Michi (camino/calle en general) no es lo mismo que "dirección" — para pedir indicaciones necesitas combinarlo con una pregunta como "doko desu ka" (¿dónde está?), no basta con decir la palabra sola.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada palabra con su significado', instruccion: 'Toca una palabra y luego su significado.', pares: [
        { a: 'トイレ (toire)', b: 'Baño' }, { a: '駅 (eki)', b: 'Estación' }, { a: '道 (michi)', b: 'Camino / calle' }, { a: 'ここ (koko)', b: 'Aquí' }
      ]},
      { tipo: 'clasifica', titulo: 'Lugar específico o genérico', instruccion: 'Arrastra cada palabra a su grupo.', categorias: ['Lugar concreto', 'Palabra de ubicación'], items: [
        { texto: 'Toire', cat: 'Lugar concreto' }, { texto: 'Eki', cat: 'Lugar concreto' }, { texto: 'Koko', cat: 'Palabra de ubicación' }, { texto: 'Michi', cat: 'Palabra de ubicación' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la situación', instruccion: 'Elige la palabra correcta.', banco: ['toire', 'eki'], frases: [
        { texto: 'Necesitas ir al baño urgentemente, buscas el: "___".', respuestas: ['toire'] },
        { texto: 'Quieres coger el tren, buscas la: "___".', respuestas: ['eki'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la pregunta completa', instruccion: 'Reconstruye la pregunta "¿dónde está el baño?" en orden.', pasos: [
        'Toire (baño)', 'wa (partícula)', 'doko desu ka (¿dónde está?)'
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Toire significa "baño".', esVerdadero: true },
        { texto: 'Michi significa "estación".', esVerdadero: false }
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la palabra que no pertenece al grupo.', preguntas: [
        { grupo: '¿Cuál de estas NO es un lugar físico?', explicacion: 'Koko es "aquí", una palabra de ubicación relativa, no un lugar en sí.', opciones: [
          { texto: 'Toire', intruso: false }, { texto: 'Eki', intruso: false }, { texto: 'Koko', intruso: true }
        ]}
      ]}
    ]
  },

  'd3-pc-3': {
    contenido: `## Desarrollo
Cuando la situación pasa de "un poco perdido" a "necesito ayuda de verdad", estas son las palabras que suben el nivel de urgencia sin dejar de ser educado.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| 助けてください | tasukete kudasai | ¡ayúdeme, por favor! |
| 大丈夫です | daijoubu desu | estoy bien / no pasa nada |
| 大丈夫ですか？ | daijoubu desu ka? | ¿estás bien? |
| ちょっと待ってください | chotto matte kudasai | espere un momento, por favor |

## 🧠 Truco para recordar
Daijoubu es tu comodín para casi cualquier situación tranquila — con o sin "ka" al final cambia entre pregunta y respuesta, un patrón que verás mucho en japonés.

## 👁 confusión
Tasukete kudasai es más urgente que sumimasen — resérvalo para situaciones donde de verdad necesitas ayuda inmediata, no lo uses para cosas triviales como llamar a un camarero.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: '助けてください', b: '¡Ayúdeme, por favor!' }, { a: '大丈夫です', b: 'Estoy bien / no pasa nada' }, { a: '大丈夫ですか？', b: '¿Estás bien?' }, { a: 'ちょっと待ってください', b: 'Espere un momento' }
      ]},
      { tipo: 'clasifica', titulo: 'Pregunta o respuesta', instruccion: 'Arrastra cada frase a su grupo.', categorias: ['Es una pregunta', 'Es una afirmación/petición'], items: [
        { texto: 'Daijoubu desu ka', cat: 'Es una pregunta' }, { texto: 'Daijoubu desu', cat: 'Es una afirmación/petición' }, { texto: 'Tasukete kudasai', cat: 'Es una afirmación/petición' }, { texto: 'Chotto matte kudasai', cat: 'Es una afirmación/petición' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la situación', instruccion: 'Elige la frase correcta.', banco: ['tasukete kudasai', 'daijoubu desu'], frases: [
        { texto: 'Es una emergencia de verdad: "___".', respuestas: ['tasukete kudasai'] },
        { texto: 'Te preguntan si estás bien tras un tropiezo leve, respondes: "___".', respuestas: ['daijoubu desu'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena por nivel de urgencia', instruccion: 'De menos a más urgente.', pasos: [
        'Chotto matte kudasai (espere un momento)', 'Daijoubu desu ka (preguntas si algo va bien)', 'Tasukete kudasai (pides ayuda urgente)'
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Tasukete kudasai es más urgente que sumimasen.', esVerdadero: true },
        { texto: 'Daijoubu desu ka (con "ka") es una afirmación, no una pregunta.', esVerdadero: false }
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la frase que no pertenece al grupo.', preguntas: [
        { grupo: '¿Cuál de estas NO expresa urgencia?', explicacion: 'Daijoubu desu es tranquilizador, no urgente.', opciones: [
          { texto: 'Tasukete kudasai', intruso: false }, { texto: 'Daijoubu desu', intruso: true }
        ]}
      ]}
    ]
  },

  'd3-fc-1': {
    contenido: `## Desarrollo
Un mini-diálogo real: alguien te habla y no entiendes nada. Aquí tienes la secuencia completa de tres frases que combinadas resuelven la situación con educación.

## ✅ Lo esencial

| Situación | Qué decir |
|---|---|
| No entiendes nada | すみません、わかりません (sumimasen, wakarimasen) |
| Quieres que repitan | もう一度お願いします (mou ichido onegaishimasu) |
| Sigues sin entender | 日本語が下手です、すみません (nihongo ga heta desu, sumimasen) |

## 🧠 Truco para recordar
Encadena las tres frases en este orden si hace falta: primero admites que no entiendes, luego pides que repitan, y si sigue sin funcionar, explicas que tu japonés es limitado — la otra persona suele cambiar a gestos o inglés básico en ese punto.

## 👁 confusión
No hace falta disculparte varias veces seguidas en la misma frase — un sumimasen al principio del intercambio es suficiente, repetirlo constantemente puede sonar forzado.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada momento con su frase', instruccion: 'Toca un momento y luego su frase.', pares: [
        { a: 'No entiendes nada', b: 'Sumimasen, wakarimasen' }, { a: 'Quieres que repitan', b: 'Mou ichido onegaishimasu' }, { a: 'Sigues sin entender', b: 'Nihongo ga heta desu' }
      ]},
      { tipo: 'clasifica', titulo: 'Primer paso o segundo paso', instruccion: 'Arrastra cada frase a su momento en la conversación.', categorias: ['Al principio', 'Si sigue sin funcionar'], items: [
        { texto: 'Sumimasen, wakarimasen', cat: 'Al principio' }, { texto: 'Mou ichido onegaishimasu', cat: 'Al principio' },
        { texto: 'Nihongo ga heta desu', cat: 'Si sigue sin funcionar' }
      ]},
      { tipo: 'rellena', titulo: 'Completa el diálogo', instruccion: 'Elige la frase correcta.', banco: ['wakarimasen', 'mou ichido onegaishimasu'], frases: [
        { texto: 'Primera reacción al no entender: "sumimasen, ___".', respuestas: ['wakarimasen'] },
        { texto: 'Pides que lo digan otra vez: "___".', respuestas: ['mou ichido onegaishimasu'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena el mini-diálogo', instruccion: 'Pon las tres frases en el orden natural de la conversación.', pasos: [
        'Sumimasen, wakarimasen', 'Mou ichido onegaishimasu', 'Nihongo ga heta desu, sumimasen'
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Conviene disculparse varias veces seguidas en la misma frase.', esVerdadero: false },
        { texto: 'Nihongo ga heta desu se usa cuando ya has intentado wakarimasen y mou ichido sin éxito.', esVerdadero: true }
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la frase que no encaja en este diálogo.', preguntas: [
        { grupo: '¿Cuál de estas NO tiene que ver con no entender algo?', explicacion: 'Toire wa doko desu ka es sobre el baño, no sobre entender.', opciones: [
          { texto: 'Wakarimasen', intruso: false }, { texto: 'Mou ichido onegaishimasu', intruso: false }, { texto: 'Toire wa doko desu ka', intruso: true }
        ]}
      ]}
    ]
  },

  'd3-fc-2': {
    contenido: `## Desarrollo
Preguntar si la otra persona habla tu idioma (o inglés) y saber decir "un poco" cuando sí entiendes algo, aunque no todo.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| 英語が話せますか？ | eigo ga hanasemasu ka? | ¿habla inglés? |
| スペイン語が話せますか？ | supein-go ga hanasemasu ka? | ¿habla español? |
| 少しわかります | sukoshi wakarimasu | entiendo un poco |

## 🧠 Truco para recordar
"[Idioma]-go" es el patrón para nombrar idiomas: eigo (inglés), supein-go (español), nihongo (japonés) — cambia solo la primera parte. Sukoshi (un poco) es lo contrario de zenzen (nada en absoluto).

## 👁 confusión
Preguntar por español (supein-go) en Japón suele obtener un "no" con más frecuencia que preguntar por inglés — el inglés se enseña en el colegio, el español no tanto, así que ten el plan B (gestos, traductor) preparado.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: '英語が話せますか？', b: '¿Habla inglés?' }, { a: 'スペイン語が話せますか？', b: '¿Habla español?' }, { a: '少しわかります', b: 'Entiendo un poco' }
      ]},
      { tipo: 'clasifica', titulo: 'Pregunta o respuesta', instruccion: 'Arrastra cada frase a su grupo.', categorias: ['Preguntas por un idioma', 'Respuesta sobre comprensión'], items: [
        { texto: 'Eigo ga hanasemasu ka', cat: 'Preguntas por un idioma' }, { texto: 'Supein-go ga hanasemasu ka', cat: 'Preguntas por un idioma' }, { texto: 'Sukoshi wakarimasu', cat: 'Respuesta sobre comprensión' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la situación', instruccion: 'Elige la frase correcta.', banco: ['eigo ga hanasemasu ka', 'sukoshi wakarimasu'], frases: [
        { texto: 'Quieres saber si te pueden atender en inglés: "___".', respuestas: ['eigo ga hanasemasu ka'] },
        { texto: 'Entiendes parte de lo que te dicen, no todo: "___".', respuestas: ['sukoshi wakarimasu'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena el patrón de idiomas', instruccion: 'Reconstruye cómo se nombra un idioma en japonés.', pasos: [
        '[Nombre del idioma]', '+ go (idioma)', '+ ga hanasemasu ka (¿se puede hablar?)'
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Eigo significa "inglés".', esVerdadero: true },
        { texto: 'Es igual de probable encontrar alguien que hable español que inglés en Japón.', esVerdadero: false }
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la palabra que no pertenece al grupo.', preguntas: [
        { grupo: '¿Cuál de estas NO es un idioma?', explicacion: 'Sukoshi significa "un poco", no un idioma.', opciones: [
          { texto: 'Eigo', intruso: false }, { texto: 'Supein-go', intruso: false }, { texto: 'Sukoshi', intruso: true }
        ]}
      ]}
    ]
  },

  'd3-fc-3': {
    contenido: `## Desarrollo
Te has desviado del camino y necesitas admitirlo y pedir orientación — el bloque de frases que junta "estoy perdido" con "¿dónde estoy?".

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| 迷いました | mayoimashita | me he perdido |
| ここはどこですか？ | koko wa doko desu ka? | ¿dónde estoy? |
| 道に迷いました | michi ni mayoimashita | me he perdido por el camino |

## 🧠 Truco para recordar
Mayoimashita ("me he perdido") y koko wa doko desu ka ("¿dónde estoy?") son casi intercambiables en la práctica — usa la que te salga primero, ambas comunican lo mismo.

## 👁 confusión
Michi ni mayoimashita es más específico ("perdido en el camino/ruta") que mayoimashita a secas — para la mayoría de situaciones, la versión corta es más que suficiente.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: '迷いました', b: 'Me he perdido' }, { a: 'ここはどこですか？', b: '¿Dónde estoy?' }, { a: '道に迷いました', b: 'Me he perdido por el camino' }
      ]},
      { tipo: 'clasifica', titulo: 'Afirmación o pregunta', instruccion: 'Arrastra cada frase a su grupo.', categorias: ['Afirmación', 'Pregunta'], items: [
        { texto: 'Mayoimashita', cat: 'Afirmación' }, { texto: 'Michi ni mayoimashita', cat: 'Afirmación' }, { texto: 'Koko wa doko desu ka', cat: 'Pregunta' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la situación', instruccion: 'Elige la frase correcta.', banco: ['mayoimashita', 'koko wa doko desu ka'], frases: [
        { texto: 'Llevas 20 minutos dando vueltas: "___".', respuestas: ['mayoimashita'] },
        { texto: 'Necesitas saber en qué punto exacto del mapa estás: "___".', respuestas: ['koko wa doko desu ka'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la situación', instruccion: 'Pon los pasos en orden al perderte.', pasos: [
        'Mayoimashita (admites que estás perdido)', 'Koko wa doko desu ka (preguntas dónde estás)', 'Eigo ga hanasemasu ka (buscas ayuda en otro idioma si hace falta)'
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Mayoimashita significa "me he perdido".', esVerdadero: true },
        { texto: 'Koko wa doko desu ka es una afirmación, no una pregunta.', esVerdadero: false }
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la frase que no pertenece al grupo.', preguntas: [
        { grupo: '¿Cuál de estas NO tiene que ver con estar perdido?', explicacion: 'Daijoubu desu es sobre estar bien, no sobre perderte.', opciones: [
          { texto: 'Mayoimashita', intruso: false }, { texto: 'Koko wa doko desu ka', intruso: false }, { texto: 'Daijoubu desu', intruso: true }
        ]}
      ]}
    ]
  },

  'd3-co-1': {
    contenido: `## Desarrollo
En japonés, decir "no" de forma directa se considera brusco. En su lugar, se usan fórmulas indirectas que técnicamente no niegan nada, pero que cualquier japonés entiende como un "no" educado.

## ✅ Lo esencial

| Frase indirecta | Lo que realmente significa |
|---|---|
| ちょっと難しいです (chotto muzukashii desu) | "Eso es un poco difícil" = no, no va a pasar |
| 考えておきます (kangaete okimasu) | "Lo pensaré" = probablemente no |
| ちょっと... (chotto...) | Silencio incómodo + "un poco..." = no |

## 🧠 Truco para recordar
Si oyes "chotto" (un poco) seguido de una pausa o de una palabra vaga, casi siempre es un "no" disfrazado. Cuanto más vaga la respuesta, más clara es la negativa real.

## 👁 confusión
No insistas si te dan una de estas respuestas esperando un "sí" más claro — en la cultura japonesa, seguir presionando después de un "chotto..." puede resultar incómodo para la otra persona.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado real', instruccion: 'Toca una frase y luego lo que realmente significa.', pares: [
        { a: 'ちょっと難しいです', b: 'No, no va a pasar' }, { a: '考えておきます', b: 'Probablemente no' }, { a: 'ちょっと...', b: 'Un "no" con silencio incómodo' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Chotto muzukashii desu significa literalmente que algo es imposible.', esVerdadero: false },
        { texto: 'Insistir después de un "chotto..." puede resultar incómodo.', esVerdadero: true }
      ]},
      { tipo: 'clasifica', titulo: 'Directo o indirecto', instruccion: 'Arrastra cada expresión a su grupo.', categorias: ['Forma directa (poco usada)', 'Forma indirecta (habitual)'], items: [
        { texto: 'Iie (no)', cat: 'Forma directa (poco usada)' }, { texto: 'Chotto muzukashii desu', cat: 'Forma indirecta (habitual)' }, { texto: 'Kangaete okimasu', cat: 'Forma indirecta (habitual)' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la situación', instruccion: 'Elige la frase correcta.', banco: ['chotto muzukashii desu', 'kangaete okimasu'], frases: [
        { texto: 'Te dicen esto cuando algo no va a poder ser: "___".', respuestas: ['chotto muzukashii desu'] },
        { texto: 'Te dicen esto para posponer un "no" claro: "___".', respuestas: ['kangaete okimasu'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena de más sutil a menos sutil', instruccion: 'De la negativa más suave a la más clara.', pasos: [
        'Chotto... (silencio)', 'Kangaete okimasu (lo pensaré)', 'Chotto muzukashii desu (es un poco difícil)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no es una forma indirecta de decir que no.', preguntas: [
        { grupo: '¿Cuál de estas ES una negativa directa, no indirecta?', explicacion: 'Iie es la negación directa; las otras son fórmulas suavizadas.', opciones: [
          { texto: 'Chotto muzukashii desu', intruso: false }, { texto: 'Kangaete okimasu', intruso: false }, { texto: 'Iie', intruso: true }
        ]}
      ]}
    ]
  },

  'd3-co-2': {
    contenido: `## Desarrollo
Sumimasen no es solo "perdón" — es casi un tic verbal en la conversación japonesa, usado constantemente para suavizar cualquier interacción, acompañado casi siempre de una pequeña inclinación de cabeza.

## ✅ Lo esencial

| Situación | Uso de sumimasen |
|---|---|
| Molestar a alguien un segundo | Antes de hacer casi cualquier petición |
| Recibir un favor | En lugar de (o además de) arigatou |
| Pasar por delante de alguien | Casi automático, sin pensarlo |

## 🧠 Truco para recordar
Cuenta cuántas veces oyes sumimasen en un solo día en Japón — perderás la cuenta. Es la palabra más repetida del idioma en situaciones cotidianas.

## 👁 confusión
Usar sumimasen para agradecer (en vez de arigatou) es totalmente normal en japonés — reconoce implícitamente la "molestia" que ha supuesto para el otro ayudarte, algo que en español no tiene un equivalente exacto.`,
    juegos: [
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Sumimasen se usa solo para pedir perdón por errores graves.', esVerdadero: false },
        { texto: 'Es normal usar sumimasen para agradecer un favor.', esVerdadero: true }
      ]},
      { tipo: 'conecta', titulo: 'Conecta cada situación con su uso', instruccion: 'Toca una situación y luego su uso de sumimasen.', pares: [
        { a: 'Molestar un segundo', b: 'Antes de pedir algo' }, { a: 'Recibir un favor', b: 'En vez de arigatou' }, { a: 'Pasar por delante', b: 'Casi automático' }
      ]},
      { tipo: 'clasifica', titulo: 'Uso frecuente o excepcional', instruccion: 'Arrastra cada uso a su grupo.', categorias: ['Uso muy frecuente', 'Uso excepcional'], items: [
        { texto: 'Al pedir algo', cat: 'Uso muy frecuente' }, { texto: 'Al pasar por delante de alguien', cat: 'Uso muy frecuente' }, { texto: 'Solo por errores graves', cat: 'Uso excepcional' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige la palabra correcta.', banco: ['sumimasen', 'arigatou'], frases: [
        { texto: 'La palabra más repetida en la vida diaria japonesa es: "___".', respuestas: ['sumimasen'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena por frecuencia de uso', instruccion: 'De menos a más frecuente en el día a día.', pasos: [
        'Tasukete kudasai (poco frecuente, solo emergencias)', 'Arigatou gozaimasu (frecuente)', 'Sumimasen (muy frecuente, constante)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona el uso que NO es típico de sumimasen.', preguntas: [
        { grupo: '¿Cuál de estos NO es un uso típico de sumimasen?', explicacion: 'Sumimasen no se usa para dar la enhorabuena.', opciones: [
          { texto: 'Antes de pedir algo', intruso: false }, { texto: 'Al recibir un favor', intruso: false }, { texto: 'Al felicitar a alguien por una boda', intruso: true }
        ]}
      ]}
    ]
  },

  'd3-co-3': {
    contenido: `## Desarrollo
Un turista perdido en Japón suele encontrar más ayuda de la que esperaba — es habitual que la gente se desvíe de su camino para acompañarte, incluso sin hablar tu idioma.

## ✅ Lo esencial

| Lo que puedes esperar | Detalle |
|---|---|
| Ayuda activa, no solo indicaciones | A veces te acompañan físicamente hasta el sitio |
| Uso de gestos y dibujos | Si no hay idioma común, recurren a mapas dibujados o el móvil |
| Incomodidad si no pueden ayudar | Algunas personas se disculpan mucho si no saben la respuesta |

## 🧠 Truco para recordar
Si alguien saca su móvil para traducir o dibuja un mapa en un papel, no es raro ni exagerado — es una reacción muy común cuando quieren asegurarse de que llegas bien.

## 👁 confusión
No te sorprendas si la persona que te ayuda parece más preocupada por resolver tu problema que tú mismo — ayudar a un extranjero perdido se vive como una responsabilidad social importante en muchos casos.`,
    juegos: [
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Es común que alguien te acompañe físicamente hasta tu destino.', esVerdadero: true },
        { texto: 'Los japoneses evitan ayudar a turistas perdidos por timidez.', esVerdadero: false }
      ]},
      { tipo: 'conecta', titulo: 'Conecta cada reacción con su descripción', instruccion: 'Toca una reacción y luego su descripción.', pares: [
        { a: 'Te acompañan', b: 'Van contigo hasta el sitio' }, { a: 'Usan el móvil', b: 'Traducen para comunicarse' }, { a: 'Se disculpan mucho', b: 'Si no saben ayudarte' }
      ]},
      { tipo: 'clasifica', titulo: 'Esperado o inesperado', instruccion: 'Arrastra cada reacción a su grupo.', categorias: ['Es habitual', 'Es poco probable'], items: [
        { texto: 'Que te acompañen físicamente', cat: 'Es habitual' }, { texto: 'Que usen el móvil para traducir', cat: 'Es habitual' }, { texto: 'Que te ignoren directamente', cat: 'Es poco probable' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige la palabra correcta.', banco: ['acompañan', 'ignoran'], frases: [
        { texto: 'Muchas veces, en vez de solo indicarte, te "___" hasta el sitio.', respuestas: ['acompañan'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la ayuda recibida', instruccion: 'Pon los pasos en un orden típico.', pasos: [
        'Preguntas mayoimashita (te has perdido)', 'La persona intenta explicarte, quizás con gestos', 'Si es complicado, te acompaña o usa el móvil'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la reacción que NO es típica.', preguntas: [
        { grupo: '¿Cuál de estas NO es una reacción típica ante un turista perdido?', explicacion: 'Cobrar por ayudar no es una práctica cultural japonesa.', opciones: [
          { texto: 'Acompañarte hasta el sitio', intruso: false }, { texto: 'Usar el móvil para traducir', intruso: false }, { texto: 'Cobrarte por la indicación', intruso: true }
        ]}
      ]}
    ]
  },

  // ══════════════ DÍA 4 · Contadores y cantidades ══════════════

  'd4-pc-1': {
    contenido: `## Desarrollo
El contador genérico de objetos, del 1 al 10 completo — la serie que necesitas para pedir cantidades de casi cualquier cosa que no sean personas.

## ✅ Lo esencial

| # | Japonés | Rōmaji |
|---|---|---|
| 1 | 一つ | hitotsu |
| 2 | 二つ | futatsu |
| 3 | 三つ | mittsu |
| 4 | 四つ | yottsu |
| 5 | 五つ | itsutsu |
| 6 | 六つ | muttsu |
| 7 | 七つ | nanatsu |
| 8 | 八つ | yattsu |
| 9 | 九つ | kokonotsu |
| 10 | 十 | tou |

## 🧠 Truco para recordar
Del 1 al 9 todos terminan en "-tsu" — apréndetelos como una cadena rítmica: hitotsu, futatsu, mittsu, yottsu, itsutsu, muttsu, nanatsu, yattsu, kokonotsu. El 10 (tou) rompe el patrón, así que es el que más te costará recordar en su sitio.

## 👁 confusión
Este contador es genérico — sirve para casi cualquier objeto, pero hay contadores especiales más precisos para cosas concretas (que verás más adelante). Para el día a día del viaje, este basta casi siempre.`,
    juegos: [
      { tipo: 'ordenar', titulo: 'Ordena la secuencia', instruccion: 'Pon los contadores en orden ascendente.', pasos: [
        'Hitotsu (1)', 'Mittsu (3)', 'Itsutsu (5)', 'Nanatsu (7)', 'Tou (10)'
      ]},
      { tipo: 'conecta', titulo: 'Conecta cada número con su contador', instruccion: 'Toca un número y luego su contador.', pares: [
        { a: '1', b: 'Hitotsu' }, { a: '4', b: 'Yottsu' }, { a: '7', b: 'Nanatsu' }, { a: '10', b: 'Tou' }
      ]},
      { tipo: 'clasifica', titulo: 'Termina en -tsu o no', instruccion: 'Arrastra cada contador a su grupo.', categorias: ['Termina en -tsu', 'No sigue el patrón'], items: [
        { texto: 'Hitotsu', cat: 'Termina en -tsu' }, { texto: 'Kokonotsu', cat: 'Termina en -tsu' }, { texto: 'Tou', cat: 'No sigue el patrón' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la secuencia', instruccion: 'Elige el contador correcto.', banco: ['futatsu', 'itsutsu'], frases: [
        { texto: 'Después de hitotsu viene: "___".', respuestas: ['futatsu'] },
        { texto: 'El número 5 se dice: "___".', respuestas: ['itsutsu'] }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Tou (10) sigue el mismo patrón "-tsu" que los anteriores.', esVerdadero: false },
        { texto: 'Yottsu significa "4 objetos".', esVerdadero: true }
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona el que no pertenece al grupo.', preguntas: [
        { grupo: '¿Cuál de estos NO es un contador de objetos del 1 al 10?', explicacion: 'Hitori es contador de personas, no de objetos.', opciones: [
          { texto: 'Hitotsu', intruso: false }, { texto: 'Yottsu', intruso: false }, { texto: 'Hitori', intruso: true }
        ]}
      ]}
    ]
  },

  'd4-pc-2': {
    contenido: `## Desarrollo
El contador de personas completo, del 1 al 10 — con el cambio de patrón que ya viste el primer día del curso (día 4 original): "-ri" solo para 1 y 2, luego "-nin" para el resto.

## ✅ Lo esencial

| # | Japonés | Rōmaji |
|---|---|---|
| 1 | 一人 | hitori |
| 2 | 二人 | futari |
| 3 | 三人 | san-nin |
| 4 | 四人 | yonin |
| 5 | 五人 | gonin |
| 6 | 六人 | rokunin |
| 7 | 七人 | nananin |
| 8 | 八人 | hachinin |
| 9 | 九人 | kyuunin |
| 10 | 十人 | juunin |

## 🧠 Truco para recordar
A partir del 3, "-nin" se pega directamente al número normal que ya conoces: roku (6) → rokunin, hachi (8) → hachinin. Solo el 1 y el 2 son irregulares (hitori, futari).

## 👁 confusión
Para "4 personas" y "7 personas" se usan yonin y nananin — no "shinin" ni "shichinin" — por la asociación de shi con "muerte" que ya viste. Este es uno de los errores más comunes entre estudiantes.`,
    juegos: [
      { tipo: 'ordenar', titulo: 'Ordena la secuencia', instruccion: 'Pon los contadores en orden ascendente.', pasos: [
        'Hitori (1)', 'San-nin (3)', 'Gonin (5)', 'Hachinin (8)', 'Juunin (10)'
      ]},
      { tipo: 'conecta', titulo: 'Conecta cada número con su contador', instruccion: 'Toca un número y luego su contador.', pares: [
        { a: '1', b: 'Hitori' }, { a: '2', b: 'Futari' }, { a: '4', b: 'Yonin' }, { a: '10', b: 'Juunin' }
      ]},
      { tipo: 'clasifica', titulo: '-ri o -nin', instruccion: 'Arrastra cada contador a su grupo.', categorias: ['Termina en -ri', 'Termina en -nin'], items: [
        { texto: 'Hitori', cat: 'Termina en -ri' }, { texto: 'Futari', cat: 'Termina en -ri' }, { texto: 'Yonin', cat: 'Termina en -nin' }, { texto: 'Juunin', cat: 'Termina en -nin' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la secuencia', instruccion: 'Elige el contador correcto.', banco: ['yonin', 'rokunin'], frases: [
        { texto: '4 personas se dice: "___".', respuestas: ['yonin'] },
        { texto: '6 personas se dice: "___".', respuestas: ['rokunin'] }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Solo el 1 y el 2 son irregulares en el contador de personas.', esVerdadero: true },
        { texto: '"Shinin" es la forma correcta de decir "4 personas".', esVerdadero: false }
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona el que no pertenece al grupo.', preguntas: [
        { grupo: '¿Cuál de estos NO es un contador de personas?', explicacion: 'Itsutsu es contador de objetos, no de personas.', opciones: [
          { texto: 'Hitori', intruso: false }, { texto: 'Yonin', intruso: false }, { texto: 'Itsutsu', intruso: true }
        ]}
      ]}
    ]
  },

  'd4-pc-3': {
    contenido: `## Desarrollo
Las dos preguntas que activan todo lo anterior: cómo preguntar "¿cuántos objetos?" y "¿cuántas personas?".

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| いくつですか？ | ikutsu desu ka? | ¿cuántos objetos? |
| 何人ですか？ | nan-nin desu ka? | ¿cuántas personas? |

## 🧠 Truco para recordar
Ikutsu ("¿cuántos?") rima con la serie que termina en "-tsu" que ya aprendiste — no es casualidad, viene de la misma familia de palabras. Nan-nin combina "nan" (qué/cuántos) con "-nin" (personas), el mismo patrón que usarás en muchas otras preguntas.

## 👁 confusión
No mezcles las dos preguntas: ikutsu desu ka es solo para objetos, nan-nin desu ka es solo para personas — usar la incorrecta puede generar una respuesta confusa.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada pregunta con lo que pregunta', instruccion: 'Toca una pregunta y luego su uso.', pares: [
        { a: 'いくつですか？', b: '¿Cuántos objetos?' }, { a: '何人ですか？', b: '¿Cuántas personas?' }
      ]},
      { tipo: 'clasifica', titulo: 'Objetos o personas', instruccion: 'Arrastra cada pregunta a su grupo.', categorias: ['Pregunta por objetos', 'Pregunta por personas'], items: [
        { texto: 'Ikutsu desu ka', cat: 'Pregunta por objetos' }, { texto: 'Nan-nin desu ka', cat: 'Pregunta por personas' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la situación', instruccion: 'Elige la pregunta correcta.', banco: ['ikutsu desu ka', 'nan-nin desu ka'], frases: [
        { texto: 'Quieres saber cuántas manzanas hay en la cesta: "___".', respuestas: ['ikutsu desu ka'] },
        { texto: 'Quieres saber cuántas personas hay en el grupo: "___".', respuestas: ['nan-nin desu ka'] }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Ikutsu desu ka se usa para preguntar por personas.', esVerdadero: false },
        { texto: 'Nan-nin desu ka se usa para preguntar por personas.', esVerdadero: true }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la pregunta y respuesta', instruccion: 'Pon en orden pregunta y respuesta lógica.', pasos: [
        'Nan-nin desu ka (te preguntan cuántos sois)', 'Yonin desu (respondes: 4 personas)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no pertenece al grupo.', preguntas: [
        { grupo: '¿Cuál de estas NO es una pregunta de cantidad?', explicacion: 'Ikura desu ka pregunta precio, no cantidad.', opciones: [
          { texto: 'Ikutsu desu ka', intruso: false }, { texto: 'Nan-nin desu ka', intruso: false }, { texto: 'Ikura desu ka', intruso: true }
        ]}
      ]}
    ]
  },

  'd4-fc-1': {
    contenido: `## Desarrollo
Poner en práctica los contadores de objetos: pedir varias unidades de algo en una tienda o puesto de comida.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| これを三つください | kore o mittsu kudasai | esto, tres unidades, por favor |
| それを二つください | sore o futatsu kudasai | eso, dos unidades, por favor |

## 🧠 Truco para recordar
El patrón es siempre el mismo: [objeto] + o + [contador] + kudasai. Cambia solo el contador según cuántas unidades quieras.

## 👁 confusión
Kore (esto) se usa para algo cerca de ti; sore (eso) para algo cerca de la otra persona pero no de ti — un matiz pequeño pero que los japoneses sí notan.`,
    juegos: [
      { tipo: 'rellena', titulo: 'Completa la petición', instruccion: 'Elige el contador correcto.', banco: ['mittsu', 'futatsu'], frases: [
        { texto: 'Quieres 3 unidades de algo que señalas: "kore o ___ kudasai".', respuestas: ['mittsu'] },
        { texto: 'Quieres 2 unidades de algo un poco más lejos: "sore o ___ kudasai".', respuestas: ['futatsu'] }
      ]},
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: 'これを三つください', b: 'Esto, tres unidades, por favor' }, { a: 'それを二つください', b: 'Eso, dos unidades, por favor' }
      ]},
      { tipo: 'clasifica', titulo: 'Kore o sore', instruccion: 'Arrastra cada palabra a su grupo.', categorias: ['Cerca de ti (kore)', 'Cerca de la otra persona (sore)'], items: [
        { texto: 'Kore', cat: 'Cerca de ti (kore)' }, { texto: 'Sore', cat: 'Cerca de la otra persona (sore)' }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la petición', instruccion: 'Reconstruye la frase en orden.', pasos: [
        'Kore (esto)', 'o (partícula)', 'mittsu (tres unidades)', 'kudasai (por favor)'
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Kore se usa para algo lejos de ambos.', esVerdadero: false },
        { texto: 'El patrón es [objeto] + o + [contador] + kudasai.', esVerdadero: true }
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la palabra que no encaja en la petición.', preguntas: [
        { grupo: '¿Cuál de estas NO forma parte de pedir varias unidades?', explicacion: 'Ikura desu ka es para preguntar precio, no para pedir cantidad.', opciones: [
          { texto: 'Kore', intruso: false }, { texto: 'Mittsu', intruso: false }, { texto: 'Ikura desu ka', intruso: true }
        ]}
      ]}
    ]
  },

  'd4-fc-2': {
    contenido: `## Desarrollo
Cómo describir cuántas personas sois en un grupo con más detalle, no solo el número total.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| 全部で四人です | zenbu de yonin desu | somos 4 en total |
| 子供が二人います | kodomo ga futari imasu | hay dos niños |

## 🧠 Truco para recordar
Zenbu de ("en total") es útil cuando quieres aclarar el número global antes de dar detalles, como cuántos son niños o adultos.

## 👁 confusión
Imasu (hay/hay personas) es distinto de arimasu (hay/hay objetos) — imasu se usa para seres vivos (personas, animales), arimasu para cosas. Es un error muy común mezclarlos.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: '全部で四人です', b: 'Somos 4 en total' }, { a: '子供が二人います', b: 'Hay dos niños' }
      ]},
      { tipo: 'clasifica', titulo: 'Imasu o arimasu', instruccion: 'Arrastra cada palabra a su grupo.', categorias: ['Para seres vivos (imasu)', 'Para objetos (arimasu)'], items: [
        { texto: 'Kodomo (niño)', cat: 'Para seres vivos (imasu)' }, { texto: 'Hon (libro)', cat: 'Para objetos (arimasu)' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la frase', instruccion: 'Elige la palabra correcta.', banco: ['zenbu de', 'imasu'], frases: [
        { texto: 'Para decir "en total" antes del número: "___ yonin desu".', respuestas: ['zenbu de'] },
        { texto: 'Para decir que hay niños (seres vivos): "kodomo ga futari ___".', respuestas: ['imasu'] }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Imasu se usa para seres vivos.', esVerdadero: true },
        { texto: 'Arimasu se usa también para personas.', esVerdadero: false }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la frase', instruccion: 'Reconstruye la frase en orden.', pasos: [
        'Kodomo (niño)', 'ga (partícula)', 'futari (2 personas)', 'imasu (hay)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la palabra que no pertenece al grupo.', preguntas: [
        { grupo: '¿Cuál de estas NO se usa con "imasu"?', explicacion: 'Hon (libro) es un objeto, va con arimasu.', opciones: [
          { texto: 'Kodomo', intruso: false }, { texto: 'Hitori', intruso: false }, { texto: 'Hon', intruso: true }
        ]}
      ]}
    ]
  },

  'd4-fc-3': {
    contenido: `## Desarrollo
Combinar precio y cantidad: preguntar cuánto cuesta cada unidad o un lote de varias.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| これは一つ、いくらですか？ | kore wa hitotsu, ikura desu ka? | ¿cuánto cuesta cada uno? |
| 三つで、いくらですか？ | mittsu de, ikura desu ka? | ¿cuánto son 3? |

## 🧠 Truco para recordar
Combina lo que ya sabes: ikura desu ka (¿cuánto cuesta?) del bloque de compras, más el contador de objetos que aprendiste hoy — así de simple es construir frases nuevas a partir de piezas conocidas.

## 👁 confusión
Hitotsu ikura (precio por unidad) y mittsu de ikura (precio del lote de 3) dan respuestas muy distintas — asegúrate de preguntar la que realmente te interesa, sobre todo si hay descuento por cantidad.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: 'これは一つ、いくらですか？', b: '¿Cuánto cuesta cada uno?' }, { a: '三つで、いくらですか？', b: '¿Cuánto son 3?' }
      ]},
      { tipo: 'clasifica', titulo: 'Por unidad o por lote', instruccion: 'Arrastra cada frase a su grupo.', categorias: ['Precio por unidad', 'Precio del lote'], items: [
        { texto: 'Kore wa hitotsu, ikura desu ka', cat: 'Precio por unidad' }, { texto: 'Mittsu de, ikura desu ka', cat: 'Precio del lote' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la pregunta', instruccion: 'Elige la palabra correcta.', banco: ['hitotsu', 'mittsu'], frases: [
        { texto: 'Preguntas el precio de cada unidad: "kore wa ___, ikura desu ka".', respuestas: ['hitotsu'] },
        { texto: 'Preguntas el precio de un lote de 3: "___ de, ikura desu ka".', respuestas: ['mittsu'] }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Hitotsu ikura y mittsu de ikura preguntan exactamente lo mismo.', esVerdadero: false },
        { texto: 'Puede haber descuento por comprar varias unidades a la vez.', esVerdadero: true }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la pregunta', instruccion: 'Reconstruye la frase en orden.', pasos: [
        'Kore wa (esto)', 'hitotsu (una unidad)', 'ikura desu ka (¿cuánto cuesta?)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la palabra que no pertenece al grupo.', preguntas: [
        { grupo: '¿Cuál de estas NO tiene que ver con preguntar precio?', explicacion: 'Nan-nin desu ka pregunta por personas, no por precio.', opciones: [
          { texto: 'Ikura desu ka', intruso: false }, { texto: 'Hitotsu ikura', intruso: false }, { texto: 'Nan-nin desu ka', intruso: true }
        ]}
      ]}
    ]
  },

  'd4-co-1': {
    contenido: `## Desarrollo
Ya viste que el 4 (shi) se asocia con "muerte" y se prefiere yon. Lo mismo pasa con el 9: una de sus lecturas (ku) suena igual que "sufrimiento", así que también se evita en ciertos contextos.

## ✅ Lo esencial

| Número | Lectura evitada | Por qué |
|---|---|---|
| 4 | shi | Suena igual que 死 (muerte) |
| 9 | ku | Suena igual que 苦 (sufrimiento) |

## 🧠 Truco para recordar
En hospitales y hoteles japoneses es habitual que falten la habitación/planta 4 y la 9 — igual que en muchos edificios occidentales se salta el piso 13. Si ves esa ausencia, ya sabes por qué.

## 👁 confusión
No es que el número 4 o el 9 estén "prohibidos" siempre — en muchos contextos cotidianos (contar objetos, precios) se usan sin problema. La evitación es más fuerte en contextos relacionados con la salud, regalos o números de habitación.`,
    juegos: [
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'El número 9 también tiene una lectura asociada al sufrimiento.', esVerdadero: true },
        { texto: 'El 4 y el 9 están completamente prohibidos en cualquier contexto.', esVerdadero: false }
      ]},
      { tipo: 'conecta', titulo: 'Conecta cada número con su razón de evitarse', instruccion: 'Toca un número y luego su razón.', pares: [
        { a: '4 (shi)', b: 'Suena como "muerte"' }, { a: '9 (ku)', b: 'Suena como "sufrimiento"' }
      ]},
      { tipo: 'clasifica', titulo: 'Contexto sensible o cotidiano', instruccion: 'Arrastra cada situación a su grupo.', categorias: ['Contexto sensible (se evita)', 'Contexto cotidiano (sin problema)'], items: [
        { texto: 'Número de habitación de hospital', cat: 'Contexto sensible (se evita)' }, { texto: 'Contar manzanas en el mercado', cat: 'Contexto cotidiano (sin problema)' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige el número correcto.', banco: ['4', '9'], frases: [
        { texto: 'El número que suena como "muerte" es el: "___".', respuestas: ['4'] },
        { texto: 'El número que suena como "sufrimiento" es el: "___".', respuestas: ['9'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la explicación', instruccion: 'Pon los pasos en orden lógico.', pasos: [
        'El número 4 tiene la lectura "shi"', 'Shi suena igual que la palabra "muerte"', 'Por eso se prefiere "yon" para el 4'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona el número que no se evita por motivos fonéticos.', preguntas: [
        { grupo: '¿Cuál de estos números NO se evita por sonar como algo negativo?', explicacion: 'El 5 no tiene ninguna asociación negativa conocida.', opciones: [
          { texto: '4', intruso: false }, { texto: '9', intruso: false }, { texto: '5', intruso: true }
        ]}
      ]}
    ]
  },

  'd4-co-2': {
    contenido: `## Desarrollo
Japón tiene dos formas de contar: una de origen nativo (wago), como hitotsu-futatsu-mittsu, y otra de origen chino (kango), como ichi-ni-san. Ambas coexisten y cada una se usa en contextos distintos.

## ✅ Lo esencial

| Sistema | Ejemplo | Se usa para |
|---|---|---|
| Wago (nativo) | hitotsu, futatsu, mittsu | Contador genérico de objetos, hasta el 10 |
| Kango (de origen chino) | ichi, ni, san | Números "puros" (fecha, teléfono, dinero, contadores especializados) |

## 🧠 Truco para recordar
Si estás contando objetos sueltos sin más (como manzanas en una cesta), usa wago (hitotsu, futatsu...). Si estás dando un número de teléfono, una fecha o un precio, usa kango (ichi, ni, san...).

## 👁 confusión
El sistema wago (hitotsu-tou) solo llega hasta el 10 — a partir de ahí, todo se cuenta con kango (juu-ichi, juu-ni...). No existe una versión "wago" para el 11 en adelante.`,
    juegos: [
      { tipo: 'clasifica', titulo: 'Wago o kango', instruccion: 'Arrastra cada palabra a su sistema.', categorias: ['Wago (nativo)', 'Kango (de origen chino)'], items: [
        { texto: 'Hitotsu', cat: 'Wago (nativo)' }, { texto: 'Futatsu', cat: 'Wago (nativo)' }, { texto: 'Ichi', cat: 'Kango (de origen chino)' }, { texto: 'San', cat: 'Kango (de origen chino)' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'El sistema wago llega hasta el 10 y luego se usa kango.', esVerdadero: true },
        { texto: 'Kango se usa exclusivamente para contar objetos sueltos.', esVerdadero: false }
      ]},
      { tipo: 'conecta', titulo: 'Conecta cada sistema con su uso típico', instruccion: 'Toca un sistema y luego su uso.', pares: [
        { a: 'Wago', b: 'Contar objetos sueltos hasta 10' }, { a: 'Kango', b: 'Fechas, teléfonos, precios' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige el sistema correcto.', banco: ['wago', 'kango'], frases: [
        { texto: 'Hitotsu, futatsu, mittsu pertenecen al sistema: "___".', respuestas: ['wago'] },
        { texto: 'Ichi, ni, san pertenecen al sistema: "___".', respuestas: ['kango'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la explicación', instruccion: 'Pon los pasos en orden lógico.', pasos: [
        'Japón tiene dos sistemas de contar', 'Wago es de origen nativo (hitotsu...)', 'Kango es de origen chino (ichi, ni, san...)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la palabra que no pertenece al sistema wago.', preguntas: [
        { grupo: '¿Cuál de estas NO pertenece al sistema wago?', explicacion: 'San es del sistema kango, no wago.', opciones: [
          { texto: 'Hitotsu', intruso: false }, { texto: 'Mittsu', intruso: false }, { texto: 'San', intruso: true }
        ]}
      ]}
    ]
  },

  'd4-co-3': {
    contenido: `## Desarrollo
Además del contador genérico, el japonés tiene contadores especiales según la forma del objeto — algo que no existe en español y que resulta curioso incluso si nunca los usas activamente.

## ✅ Lo esencial

| Contador | Se usa para |
|---|---|
| 本 (hon) | Objetos largos y delgados: botellas, bolígrafos, paraguas |
| 枚 (mai) | Objetos planos y finos: billetes, camisetas, hojas de papel |
| 匹 (hiki) | Animales pequeños: gatos, perros, insectos |

## 🧠 Truco para recordar
No necesitas memorizar estos para el viaje — con el contador genérico (hitotsu-tou) te entenderán casi siempre. Consérvalos como curiosidad cultural, útil para impresionar si te animas a usarlos.

## 👁 confusión
Usar el contador genérico en vez del específico no es un error grave ni sonará raro — los propios japoneses a veces dudan entre contadores para objetos poco comunes.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada contador con su uso', instruccion: 'Toca un contador y luego su uso.', pares: [
        { a: '本 (hon)', b: 'Objetos largos: botellas, bolígrafos' }, { a: '枚 (mai)', b: 'Objetos planos: billetes, hojas' }, { a: '匹 (hiki)', b: 'Animales pequeños' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Hon se usa para objetos largos y delgados.', esVerdadero: true },
        { texto: 'Es obligatorio usar el contador específico o no te entenderán.', esVerdadero: false }
      ]},
      { tipo: 'clasifica', titulo: 'Forma del objeto', instruccion: 'Arrastra cada objeto a su contador.', categorias: ['Largo y delgado (hon)', 'Plano y fino (mai)'], items: [
        { texto: 'Botella', cat: 'Largo y delgado (hon)' }, { texto: 'Paraguas', cat: 'Largo y delgado (hon)' }, { texto: 'Billete de dinero', cat: 'Plano y fino (mai)' }, { texto: 'Hoja de papel', cat: 'Plano y fino (mai)' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige el contador correcto.', banco: ['hon', 'mai'], frases: [
        { texto: 'Para contar botellas se usa el contador: "___".', respuestas: ['hon'] },
        { texto: 'Para contar hojas de papel se usa el contador: "___".', respuestas: ['mai'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la idea', instruccion: 'Pon los pasos en orden lógico.', pasos: [
        'El contador genérico sirve para casi todo', 'Existen contadores especiales según la forma', 'No hace falta memorizarlos para el viaje'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona el que no es un contador de objetos por forma.', preguntas: [
        { grupo: '¿Cuál de estos NO es un contador especializado por forma?', explicacion: 'Nin es contador de personas, no de forma de objeto.', opciones: [
          { texto: 'Hon', intruso: false }, { texto: 'Mai', intruso: false }, { texto: 'Nin', intruso: true }
        ]}
      ]}
    ]
  },

  // ══════════════ DÍA 5 · Restaurantes I (llegada) ══════════════

  'd5-pc-1': {
    contenido: `## Desarrollo
El vocabulario exacto del momento de cruzar la puerta de un restaurante japonés: el saludo que recibes y la pregunta que te hacen.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| いらっしゃいませ | irasshaimase | "¡bienvenido!" (no se responde) |
| 何名様ですか？ | nan-mei sama desu ka? | ¿cuántas personas son? |
| 名（mei） | mei | contador formal de personas (en restaurantes/hoteles) |

## 🧠 Truco para recordar
Mei es literalmente la versión "de gala" de nin — la usan camareros y recepcionistas por cortesía extra, pero tú puedes responder con los contadores normales (hitori, futari) sin problema.

## 👁 confusión
Irasshaimase se dice tan rápido y con tanta energía que a veces cuesta reconocerlo la primera vez — no te preocupes si no lo entiendes bien, solo significa "bienvenido" y no requiere respuesta.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: 'いらっしゃいませ', b: '"¡Bienvenido!"' }, { a: '何名様ですか？', b: '¿Cuántas personas son?' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Hay que responder algo cuando te dicen irasshaimase.', esVerdadero: false },
        { texto: 'Mei es una versión más formal de nin.', esVerdadero: true }
      ]},
      { tipo: 'clasifica', titulo: 'Lo dice el personal o lo dices tú', instruccion: 'Arrastra cada frase a su grupo.', categorias: ['Lo dice el personal', 'Lo dices tú'], items: [
        { texto: 'Irasshaimase', cat: 'Lo dice el personal' }, { texto: 'Nan-mei sama desu ka', cat: 'Lo dice el personal' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige la palabra correcta.', banco: ['irasshaimase', 'nan-mei'], frases: [
        { texto: 'Lo primero que oyes al entrar es: "___".', respuestas: ['irasshaimase'] },
        { texto: 'La versión formal del contador de personas es: "___".', respuestas: ['nan-mei'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la llegada', instruccion: 'Pon los pasos en orden.', pasos: [
        'Irasshaimase (te reciben)', 'Nan-mei sama desu ka (te preguntan cuántos sois)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no la dice el personal al llegar.', preguntas: [
        { grupo: '¿Cuál de estas NO es algo que te dice el personal al entrar?', explicacion: 'Okaikei onegaishimasu es al final, cuando tú pides la cuenta.', opciones: [
          { texto: 'Irasshaimase', intruso: false }, { texto: 'Nan-mei sama desu ka', intruso: false }, { texto: 'Okaikei onegaishimasu', intruso: true }
        ]}
      ]}
    ]
  },

  'd5-pc-2': {
    contenido: `## Desarrollo
No todos los sitios en un restaurante son iguales — conocer las opciones te ayuda a pedir lo que realmente prefieres.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| カウンター席 | kauntaa seki | sitio en la barra |
| テーブル席 | teeburu seki | mesa |
| 個室 | koshitsu | reservado / sala privada |

## 🧠 Truco para recordar
Kauntaa suena a "counter" en inglés, teeburu suena a "table" — dos préstamos fáciles de reconocer. Koshitsu es la única palabra realmente nueva de este punto: guárdala para ocasiones especiales o grupos grandes.

## 👁 confusión
No en todos los restaurantes hay koshitsu (reservado) disponible, y suele requerir reserva previa — no esperes poder pedirlo siempre sobre la marcha.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada palabra con su significado', instruccion: 'Toca una palabra y luego su significado.', pares: [
        { a: 'カウンター席', b: 'Sitio en la barra' }, { a: 'テーブル席', b: 'Mesa' }, { a: '個室', b: 'Reservado / sala privada' }
      ]},
      { tipo: 'clasifica', titulo: 'Compartido o privado', instruccion: 'Arrastra cada opción a su grupo.', categorias: ['Espacio compartido', 'Espacio privado'], items: [
        { texto: 'Kauntaa seki', cat: 'Espacio compartido' }, { texto: 'Teeburu seki', cat: 'Espacio compartido' }, { texto: 'Koshitsu', cat: 'Espacio privado' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la situación', instruccion: 'Elige la palabra correcta.', banco: ['kauntaa seki', 'koshitsu'], frases: [
        { texto: 'Prefieres sentarte en la barra: "___".', respuestas: ['kauntaa seki'] },
        { texto: 'Vais un grupo grande y queréis privacidad: "___".', respuestas: ['koshitsu'] }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Koshitsu está siempre disponible sin reserva.', esVerdadero: false },
        { texto: 'Teeburu seki significa "mesa".', esVerdadero: true }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena por nivel de privacidad', instruccion: 'De menos a más privado.', pasos: [
        'Kauntaa seki (barra, muy expuesto)', 'Teeburu seki (mesa, algo de espacio)', 'Koshitsu (reservado, privado)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no es un tipo de asiento.', preguntas: [
        { grupo: '¿Cuál de estas NO es un tipo de sitio para sentarte?', explicacion: 'Machimasu es "esperar", no un tipo de asiento.', opciones: [
          { texto: 'Kauntaa seki', intruso: false }, { texto: 'Koshitsu', intruso: false }, { texto: 'Machimasu', intruso: true }
        ]}
      ]}
    ]
  },

  'd5-pc-3': {
    contenido: `## Desarrollo
Cuando el restaurante está lleno, necesitas saber gestionar la espera con educación.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| 待ちます | machimasu | esperaré |
| 順番 | junban | turno |
| 待っています | matte imasu | estoy esperando |

## 🧠 Truco para recordar
Machimasu (esperaré) y matte imasu (estoy esperando) comparten la misma raíz (matsu = esperar) con distinta terminación — un patrón gramatical que verás repetirse mucho en japonés.

## 👁 confusión
Junban (turno) no es lo mismo que "cola" — se refiere al orden asignado, a menudo mediante una lista o ticket, no necesariamente una fila física de pie.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada palabra con su significado', instruccion: 'Toca una palabra y luego su significado.', pares: [
        { a: '待ちます', b: 'Esperaré' }, { a: '順番', b: 'Turno' }, { a: '待っています', b: 'Estoy esperando' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Machimasu y matte imasu comparten la misma raíz.', esVerdadero: true },
        { texto: 'Junban significa exactamente "cola física de pie".', esVerdadero: false }
      ]},
      { tipo: 'clasifica', titulo: 'Acción futura o en curso', instruccion: 'Arrastra cada palabra a su grupo.', categorias: ['Acción futura', 'Acción en curso'], items: [
        { texto: 'Machimasu', cat: 'Acción futura' }, { texto: 'Matte imasu', cat: 'Acción en curso' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige la palabra correcta.', banco: ['machimasu', 'junban'], frases: [
        { texto: 'Confirmas que vas a esperar: "___".', respuestas: ['machimasu'] },
        { texto: 'Te dan un número para saber cuándo te toca: eso es tu "___".', respuestas: ['junban'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la espera', instruccion: 'Pon los pasos en orden.', pasos: [
        'Machimasu ka (te preguntan si esperarás)', 'Machimasu (respondes que sí)', 'Junban o matte imasu (esperas tu turno)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no tiene que ver con esperar.', preguntas: [
        { grupo: '¿Cuál de estas NO tiene que ver con esperar turno?', explicacion: 'Okaikei onegaishimasu es sobre pagar, no sobre esperar.', opciones: [
          { texto: 'Machimasu', intruso: false }, { texto: 'Junban', intruso: false }, { texto: 'Okaikei onegaishimasu', intruso: true }
        ]}
      ]}
    ]
  },

  'd5-fc-1': {
    contenido: `## Desarrollo
Poner en práctica los contadores de personas del día 4, ahora en el contexto exacto de un restaurante.

## ✅ Lo esencial

| Situación | Respuesta |
|---|---|
| Vas solo | 一人です (hitori desu) |
| Sois dos | 二人です (futari desu) |
| Sois cuatro | 四人です (yonin desu) |

## 🧠 Truco para recordar
No necesitas memorizar nada nuevo aquí — es exactamente aplicar los contadores de personas del día 4 a la pregunta nan-mei sama desu ka.

## 👁 confusión
Puedes responder con mei en vez de nin (ej. yon-mei en vez de yonin) para sonar aún más formal, pero no es necesario — nin/ri es perfectamente correcto y natural.`,
    juegos: [
      { tipo: 'rellena', titulo: 'Completa la respuesta', instruccion: 'Elige la respuesta correcta.', banco: ['hitori desu', 'yonin desu'], frases: [
        { texto: 'Vas a comer solo: "___".', respuestas: ['hitori desu'] },
        { texto: 'Sois 4 personas: "___".', respuestas: ['yonin desu'] }
      ]},
      { tipo: 'conecta', titulo: 'Conecta cada situación con su respuesta', instruccion: 'Toca una situación y luego su respuesta.', pares: [
        { a: 'Vas solo', b: 'Hitori desu' }, { a: 'Sois dos', b: 'Futari desu' }, { a: 'Sois cuatro', b: 'Yonin desu' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Se puede responder también con mei en vez de nin/ri.', esVerdadero: true },
        { texto: 'Para responder cuántos sois hace falta aprender palabras nuevas.', esVerdadero: false }
      ]},
      { tipo: 'clasifica', titulo: 'Correcto o incorrecto', instruccion: 'Arrastra cada respuesta a su grupo.', categorias: ['Respuesta correcta a nan-mei sama desu ka', 'No es una respuesta a esa pregunta'], items: [
        { texto: 'Futari desu', cat: 'Respuesta correcta a nan-mei sama desu ka' }, { texto: 'Ikura desu ka', cat: 'No es una respuesta a esa pregunta' }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena el intercambio', instruccion: 'Pon los pasos en orden.', pasos: [
        'Nan-mei sama desu ka (te preguntan)', 'Futari desu (respondes)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no es un contador de personas.', preguntas: [
        { grupo: '¿Cuál de estas NO es una respuesta válida a "cuántos sois"?', explicacion: 'Mittsu desu es un contador de objetos, no de personas.', opciones: [
          { texto: 'Hitori desu', intruso: false }, { texto: 'Futari desu', intruso: false }, { texto: 'Mittsu desu', intruso: true }
        ]}
      ]}
    ]
  },

  'd5-fc-2': {
    contenido: `## Desarrollo
Decir si tenéis reserva o no, la primera información clave tras confirmar cuántos sois.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| 予約しています | yoyaku shite imasu | tengo una reserva |
| 予約していません | yoyaku shite imasen | no tengo reserva |

## 🧠 Truco para recordar
Misma raíz (yoyaku = reserva), y el cambio de -imasu a -imasen convierte la afirmación en negación — memoriza este patrón, lo verás una y otra vez en japonés.

## 👁 confusión
No confundas yoyaku (reserva de restaurante/hotel) con kippu (billete de tren) — son conceptos y palabras completamente distintos, aunque ambos impliquen "haber pagado o apartado algo por adelantado".`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: '予約しています', b: 'Tengo una reserva' }, { a: '予約していません', b: 'No tengo reserva' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Yoyaku shite imasen significa que SÍ tienes reserva.', esVerdadero: false },
        { texto: 'Ambas frases comparten la misma raíz "yoyaku".', esVerdadero: true }
      ]},
      { tipo: 'clasifica', titulo: 'Afirmación o negación', instruccion: 'Arrastra cada frase a su grupo.', categorias: ['Afirmación', 'Negación'], items: [
        { texto: 'Yoyaku shite imasu', cat: 'Afirmación' }, { texto: 'Yoyaku shite imasen', cat: 'Negación' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la situación', instruccion: 'Elige la frase correcta.', banco: ['yoyaku shite imasu', 'yoyaku shite imasen'], frases: [
        { texto: 'Reservaste mesa hace unos días: "___".', respuestas: ['yoyaku shite imasu'] },
        { texto: 'Habéis venido sin avisar antes: "___".', respuestas: ['yoyaku shite imasen'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la conversación', instruccion: 'Pon los pasos en orden.', pasos: [
        'Nan-mei sama desu ka (te preguntan cuántos sois)', 'Futari desu (respondes)', 'Yoyaku shite imasu (aclaras que tienes reserva)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no tiene que ver con la reserva.', preguntas: [
        { grupo: '¿Cuál de estas NO tiene que ver con tener o no reserva?', explicacion: 'Machimasu es sobre esperar turno, no sobre reservas.', opciones: [
          { texto: 'Yoyaku shite imasu', intruso: false }, { texto: 'Yoyaku shite imasen', intruso: false }, { texto: 'Machimasu', intruso: true }
        ]}
      ]}
    ]
  },

  'd5-fc-3': {
    contenido: `## Desarrollo
Combinar lo aprendido hoy para pedir explícitamente el tipo de sitio que prefieres, en vez de aceptar lo que te asignen.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| カウンター席でお願いします | kauntaa seki de onegaishimasu | en la barra, por favor |
| 個室はありますか？ | koshitsu wa arimasu ka? | ¿hay reservado disponible? |

## 🧠 Truco para recordar
"[Tipo de sitio] de onegaishimasu" es la plantilla para pedir un sitio concreto — cambia solo la primera parte según lo que prefieras.

## 👁 confusión
Pedir un tipo de sitio concreto no siempre se puede garantizar si el restaurante está lleno — prepárate para que te digan que solo hay disponible otra opción.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: 'カウンター席でお願いします', b: 'En la barra, por favor' }, { a: '個室はありますか？', b: '¿Hay reservado disponible?' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la petición', instruccion: 'Elige la frase correcta.', banco: ['kauntaa seki de onegaishimasu', 'koshitsu wa arimasu ka'], frases: [
        { texto: 'Prefieres sentarte en la barra: "___".', respuestas: ['kauntaa seki de onegaishimasu'] },
        { texto: 'Preguntas si hay sala privada: "___".', respuestas: ['koshitsu wa arimasu ka'] }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Siempre se puede garantizar el tipo de sitio que pides.', esVerdadero: false },
        { texto: '"[Tipo de sitio] de onegaishimasu" es una plantilla reutilizable.', esVerdadero: true }
      ]},
      { tipo: 'clasifica', titulo: 'Petición o pregunta', instruccion: 'Arrastra cada frase a su grupo.', categorias: ['Petición directa', 'Pregunta sobre disponibilidad'], items: [
        { texto: 'Kauntaa seki de onegaishimasu', cat: 'Petición directa' }, { texto: 'Koshitsu wa arimasu ka', cat: 'Pregunta sobre disponibilidad' }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la petición', instruccion: 'Reconstruye la frase en orden.', pasos: [
        'Kauntaa seki (sitio en la barra)', 'de (partícula)', 'onegaishimasu (por favor)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no tiene que ver con pedir un tipo de sitio.', preguntas: [
        { grupo: '¿Cuál de estas NO tiene que ver con pedir un tipo de asiento?', explicacion: 'Osusume wa nan desu ka es sobre pedir recomendación de comida.', opciones: [
          { texto: 'Kauntaa seki de onegaishimasu', intruso: false }, { texto: 'Koshitsu wa arimasu ka', intruso: false }, { texto: 'Osusume wa nan desu ka', intruso: true }
        ]}
      ]}
    ]
  },

  'd5-co-1': {
    contenido: `## Desarrollo
El irasshaimase que oyes al entrar no es solo una fórmula de cortesía suelta — es parte de una cultura de servicio (omotenashi) donde recibir con energía y entusiasmo a cada cliente se considera esencial.

## ✅ Lo esencial

| Dato cultural | Detalle |
|---|---|
| Omotenashi | Filosofía de hospitalidad japonesa: anticiparse a las necesidades del cliente |
| Irasshaimase | Se grita con energía, a veces por varios empleados a la vez |
| No respuesta esperada | Es unidireccional, parte del ambiente, no una conversación |

## 🧠 Truco para recordar
Piensa en irasshaimase como el equivalente a una campanita de tienda que suena al abrir la puerta — es parte del ambiente, no te están hablando a ti personalmente esperando una respuesta.

## 👁 confusión
No es maleducado ignorarlo — de hecho, intentar responder puede generar una situación un poco rara, ya que el personal no espera ni necesita una reacción de tu parte.`,
    juegos: [
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Omotenashi es la filosofía japonesa de anticiparse a las necesidades del cliente.', esVerdadero: true },
        { texto: 'Es maleducado no responder a irasshaimase.', esVerdadero: false }
      ]},
      { tipo: 'conecta', titulo: 'Conecta cada concepto con su descripción', instruccion: 'Toca un concepto y luego su descripción.', pares: [
        { a: 'Omotenashi', b: 'Filosofía de hospitalidad japonesa' }, { a: 'Irasshaimase', b: 'Saludo de bienvenida enérgico' }
      ]},
      { tipo: 'clasifica', titulo: 'Requiere respuesta o no', instruccion: 'Arrastra cada saludo a su grupo.', categorias: ['Requiere respuesta', 'No requiere respuesta'], items: [
        { texto: 'Hajimemashite', cat: 'Requiere respuesta' }, { texto: 'Irasshaimase', cat: 'No requiere respuesta' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige la palabra correcta.', banco: ['omotenashi', 'irasshaimase'], frases: [
        { texto: 'La filosofía japonesa de hospitalidad se llama: "___".', respuestas: ['omotenashi'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la idea', instruccion: 'Pon los pasos en orden lógico.', pasos: [
        'Cruzas la puerta del restaurante', 'Oyes irasshaimase con energía', 'No respondes, simplemente continúas'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la idea que NO es correcta sobre irasshaimase.', preguntas: [
        { grupo: '¿Cuál de estas ideas sobre irasshaimase es incorrecta?', explicacion: 'No es necesario ni esperado responder, al contrario de lo que se afirma aquí.', opciones: [
          { texto: 'Se dice con energía', intruso: false }, { texto: 'Es parte del ambiente del local', intruso: false }, { texto: 'Debes responder con otro saludo', intruso: true }
        ]}
      ]}
    ]
  },

  'd5-co-2': {
    contenido: `## Desarrollo
En muchos restaurantes de comida rápida japonesa (sobre todo ramen-ya) el pedido no se hace hablando con un camarero, sino a través de una máquina expendedora de tickets.

## ✅ Lo esencial

| Concepto | Detalle |
|---|---|
| 券売機 (shokken-ki) | Máquina expendedora de tickets de pedido, a la entrada |
| Funcionamiento | Pagas primero, eliges botón con el plato, sale un ticket, se lo das al personal |
| Ventaja | No hace falta hablar japonés para pedir — solo elegir el botón correcto |

## 🧠 Truco para recordar
Si ves fotos de platos con botones numerados junto a la puerta al entrar, es un shokken-ki — inserta el dinero primero, luego pulsa el plato que quieras.

## 👁 confusión
Muchas de estas máquinas son solo en efectivo (no aceptan tarjeta), así que lleva genkin encima si vas a un sitio que parece funcionar así.`,
    juegos: [
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'En un shokken-ki, primero pagas y luego eliges el plato.', esVerdadero: true },
        { texto: 'Todas las máquinas de tickets aceptan tarjeta.', esVerdadero: false }
      ]},
      { tipo: 'conecta', titulo: 'Conecta cada paso con su descripción', instruccion: 'Toca un paso y luego su descripción.', pares: [
        { a: 'Pagas primero', b: 'Insertas el dinero en la máquina' }, { a: 'Eliges el plato', b: 'Pulsas el botón correspondiente' }, { a: 'Recibes el ticket', b: 'Se lo das al personal' }
      ]},
      { tipo: 'clasifica', titulo: 'Ventaja o precaución', instruccion: 'Arrastra cada idea a su grupo.', categorias: ['Ventaja del shokken-ki', 'Precaución a tener'], items: [
        { texto: 'No hace falta hablar japonés', cat: 'Ventaja del shokken-ki' }, { texto: 'Puede que solo acepte efectivo', cat: 'Precaución a tener' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige la palabra correcta.', banco: ['shokken-ki', 'genkin'], frases: [
        { texto: 'La máquina expendedora de tickets se llama: "___".', respuestas: ['shokken-ki'] },
        { texto: 'Conviene llevar "___" (efectivo) por si no aceptan tarjeta.', respuestas: ['genkin'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena el proceso', instruccion: 'Pon los pasos en orden.', pasos: [
        'Insertas el dinero', 'Pulsas el botón del plato', 'Recoges el ticket', 'Se lo das al personal'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona el que no forma parte del proceso.', preguntas: [
        { grupo: '¿Cuál de estos NO forma parte de usar un shokken-ki?', explicacion: 'Yoyaku shite imasu (reserva) no tiene que ver con este sistema de pedido.', opciones: [
          { texto: 'Insertar dinero', intruso: false }, { texto: 'Pulsar un botón', intruso: false }, { texto: 'Yoyaku shite imasu', intruso: true }
        ]}
      ]}
    ]
  },

  'd5-co-3': {
    contenido: `## Desarrollo
Nada más sentarte, es habitual que te den una pequeña toallita húmeda — un detalle que sorprende a muchos turistas la primera vez.

## ✅ Lo esencial

| Concepto | Detalle |
|---|---|
| おしぼり (oshibori) | Toallita húmeda (fría o caliente) para limpiarte las manos antes de comer |
| Uso correcto | Solo para las manos, no para la cara ni la mesa |
| Otros detalles | Vaso de agua o té gratis nada más sentarte, sin pedirlo |

## 🧠 Truco para recordar
Oshibori suena parecido a "sacudir" en español (shibori significa "escurrir/exprimir") — la toallita viene escurrida y lista para usar.

## 👁 confusión
Aunque en algunos países usar la toallita para la cara o el cuello es aceptable, en Japón se considera de mala educación — resérvala solo para las manos.`,
    juegos: [
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'El oshibori es solo para limpiarte las manos.', esVerdadero: true },
        { texto: 'Usar el oshibori en la cara es bien visto en Japón.', esVerdadero: false }
      ]},
      { tipo: 'conecta', titulo: 'Conecta cada palabra con su significado', instruccion: 'Toca una palabra y luego su significado.', pares: [
        { a: 'おしぼり (oshibori)', b: 'Toallita húmeda para las manos' }
      ]},
      { tipo: 'clasifica', titulo: 'Uso correcto o incorrecto', instruccion: 'Arrastra cada uso a su grupo.', categorias: ['Uso correcto del oshibori', 'Uso incorrecto'], items: [
        { texto: 'Limpiarse las manos', cat: 'Uso correcto del oshibori' }, { texto: 'Limpiarse la cara', cat: 'Uso incorrecto' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige la palabra correcta.', banco: ['oshibori'], frases: [
        { texto: 'La toallita húmeda que te dan al sentarte se llama: "___".', respuestas: ['oshibori'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la llegada a la mesa', instruccion: 'Pon los pasos en orden.', pasos: [
        'Te sientas', 'Te dan el oshibori', 'Te limpias las manos', 'Te traen agua o té gratis'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona el que no es un detalle típico de la mesa.', preguntas: [
        { grupo: '¿Cuál de estos NO es un detalle típico al sentarte?', explicacion: 'Pedir la cuenta es al final, no un detalle de bienvenida.', opciones: [
          { texto: 'Oshibori', intruso: false }, { texto: 'Vaso de agua gratis', intruso: false }, { texto: 'Okaikei onegaishimasu', intruso: true }
        ]}
      ]}
    ]
  },

  // ══════════════ DÍA 6 · Restaurantes II (pedir y pagar) ══════════════

  'd6-pc-1': {
    contenido: `## Desarrollo
Refuerzo de los verbos clave para pedir en un restaurante: dar, recomendar, y describir sabor.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| ください | kudasai | por favor, deme |
| おすすめ | osusume | recomendación |
| 辛い | karai | picante |
| 美味しい | oishii | rico, delicioso |

## 🧠 Truco para recordar
Estas cuatro palabras son la base de casi cualquier conversación en la mesa: pedir (kudasai), preguntar qué recomiendan (osusume), preguntar si pica (karai) y elogiar la comida (oishii).

## 👁 confusión
Karai no es lo mismo que "amargo" ni "ácido" — se refiere específicamente al picante. Si buscas otro sabor, necesitarás otra palabra distinta.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada palabra con su significado', instruccion: 'Toca una palabra y luego su significado.', pares: [
        { a: 'ください', b: 'Por favor, deme' }, { a: 'おすすめ', b: 'Recomendación' }, { a: '辛い', b: 'Picante' }, { a: '美味しい', b: 'Rico, delicioso' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Karai significa "picante".', esVerdadero: true },
        { texto: 'Karai significa "ácido".', esVerdadero: false }
      ]},
      { tipo: 'clasifica', titulo: 'Pedir o describir', instruccion: 'Arrastra cada palabra a su grupo.', categorias: ['Para pedir', 'Para describir sabor'], items: [
        { texto: 'Kudasai', cat: 'Para pedir' }, { texto: 'Osusume', cat: 'Para pedir' }, { texto: 'Karai', cat: 'Para describir sabor' }, { texto: 'Oishii', cat: 'Para describir sabor' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige la palabra correcta.', banco: ['osusume', 'oishii'], frases: [
        { texto: 'No sabes qué pedir, preguntas por la: "___".', respuestas: ['osusume'] },
        { texto: 'Te encanta el plato, dices: "___ desu".', respuestas: ['oishii'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena el uso', instruccion: 'Pon las palabras en el orden en que las usarías al comer.', pasos: [
        'Osusume (preguntas qué recomiendan)', 'Kudasai (lo pides)', 'Oishii (lo elogias al comer)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no tiene que ver con pedir comida.', preguntas: [
        { grupo: '¿Cuál de estas NO tiene que ver con pedir en un restaurante?', explicacion: 'Toire wa doko desu ka es sobre el baño.', opciones: [
          { texto: 'Kudasai', intruso: false }, { texto: 'Osusume', intruso: false }, { texto: 'Toire wa doko desu ka', intruso: true }
        ]}
      ]}
    ]
  },

  'd6-pc-2': {
    contenido: `## Desarrollo
Vocabulario clave si tienes alergias alimentarias: los ingredientes más comunes que conviene poder nombrar.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| 肉 | niku | carne |
| 魚 | sakana | pescado |
| 卵 | tamago | huevo |
| えび | ebi | gamba |

## 🧠 Truco para recordar
Combina cualquiera de estas cuatro con la plantilla que ya conoces: "[ingrediente] arerugii ga arimasu" (tengo alergia a...).

## 👁 confusión
Sakana (pescado) no incluye automáticamente el marisco — ebi (gamba) y otros mariscos son categorías aparte, así que menciónalos por separado si tienes alergia a varios tipos.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada palabra con su significado', instruccion: 'Toca una palabra y luego su significado.', pares: [
        { a: '肉 (niku)', b: 'Carne' }, { a: '魚 (sakana)', b: 'Pescado' }, { a: '卵 (tamago)', b: 'Huevo' }, { a: 'えび (ebi)', b: 'Gamba' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Sakana incluye automáticamente el marisco como ebi.', esVerdadero: false },
        { texto: 'Tamago significa "huevo".', esVerdadero: true }
      ]},
      { tipo: 'clasifica', titulo: 'De origen animal terrestre o acuático', instruccion: 'Arrastra cada palabra a su grupo.', categorias: ['Origen terrestre', 'Origen acuático'], items: [
        { texto: 'Niku', cat: 'Origen terrestre' }, { texto: 'Tamago', cat: 'Origen terrestre' }, { texto: 'Sakana', cat: 'Origen acuático' }, { texto: 'Ebi', cat: 'Origen acuático' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la frase de alergia', instruccion: 'Elige la palabra correcta.', banco: ['ebi', 'niku'], frases: [
        { texto: 'Eres alérgico al marisco: "___ arerugii ga arimasu".', respuestas: ['ebi'] },
        { texto: 'Eres vegetariano y evitas: "___".', respuestas: ['niku'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la frase de alergia', instruccion: 'Reconstruye la frase en orden.', pasos: [
        'Ebi (gamba)', 'arerugii (alergia)', 'ga arimasu (tengo)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no es un ingrediente.', preguntas: [
        { grupo: '¿Cuál de estas NO es un ingrediente?', explicacion: 'Oishii es "rico/delicioso", una descripción, no un ingrediente.', opciones: [
          { texto: 'Niku', intruso: false }, { texto: 'Sakana', intruso: false }, { texto: 'Oishii', intruso: true }
        ]}
      ]}
    ]
  },

  'd6-pc-3': {
    contenido: `## Desarrollo
El cierre de la comida: pedir la cuenta, la forma de pago, y la despedida ritual.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| お会計 | okaikei | la cuenta |
| 現金 | genkin | efectivo |
| ごちそうさま | gochisousama | gracias por la comida |

## 🧠 Truco para recordar
Este bloque de tres palabras es tu "kit de cierre" para cualquier comida — cuenta, forma de pago, despedida, en ese orden.

## 👁 confusión
Gochisousama a secas (sin "deshita" al final) es la versión más informal — con desconocidos o camareros, añade "deshita" para sonar más educado: gochisousama deshita.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada palabra con su significado', instruccion: 'Toca una palabra y luego su significado.', pares: [
        { a: 'お会計 (okaikei)', b: 'La cuenta' }, { a: '現金 (genkin)', b: 'Efectivo' }, { a: 'ごちそうさま', b: 'Gracias por la comida' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Gochisousama deshita es más formal que gochisousama a secas.', esVerdadero: true },
        { texto: 'Okaikei significa "efectivo".', esVerdadero: false }
      ]},
      { tipo: 'clasifica', titulo: 'Al pagar o al despedirte', instruccion: 'Arrastra cada palabra a su grupo.', categorias: ['Al pagar', 'Al despedirte'], items: [
        { texto: 'Okaikei', cat: 'Al pagar' }, { texto: 'Genkin', cat: 'Al pagar' }, { texto: 'Gochisousama', cat: 'Al despedirte' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige la palabra correcta.', banco: ['okaikei', 'gochisousama'], frases: [
        { texto: 'Pides la cuenta: "___ onegaishimasu".', respuestas: ['okaikei'] },
        { texto: 'Te despides tras comer: "___ deshita".', respuestas: ['gochisousama'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena el cierre de la comida', instruccion: 'Pon los pasos en orden.', pasos: [
        'Okaikei onegaishimasu (pides la cuenta)', 'Genkin de haraemasu ka (preguntas si aceptan efectivo)', 'Gochisousama deshita (te despides)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no forma parte del cierre.', preguntas: [
        { grupo: '¿Cuál de estas NO tiene que ver con cerrar la comida?', explicacion: 'Irasshaimase es de la llegada, no del cierre.', opciones: [
          { texto: 'Okaikei', intruso: false }, { texto: 'Gochisousama', intruso: false }, { texto: 'Irasshaimase', intruso: true }
        ]}
      ]}
    ]
  },

  'd6-fc-1': {
    contenido: `## Desarrollo
Combinar la petición de recomendación con la pregunta sobre el picante, algo muy útil si eres sensible al picante o simplemente indeciso.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| おすすめは何ですか？ | osusume wa nan desu ka? | ¿qué recomienda? |
| 辛いですか？ | karai desu ka? | ¿es picante? |
| あまり辛くないものは何ですか？ | amari karakunai mono wa nan desu ka? | ¿qué plato no es muy picante? |

## 🧠 Truco para recordar
Amari + [adjetivo negativo] es la plantilla para decir "no muy...": amari karakunai (no muy picante). Es una estructura que reaparecerá en más contextos.

## 👁 confusión
Preguntar karai desu ka no garantiza una respuesta objetiva — lo que es "poco picante" para un camarero japonés puede seguir siendo intenso para tu paladar.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: 'おすすめは何ですか？', b: '¿Qué recomienda?' }, { a: '辛いですか？', b: '¿Es picante?' }, { a: 'あまり辛くないものは何ですか？', b: '¿Qué plato no es muy picante?' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: '"Amari + negativo" significa "no muy...".', esVerdadero: true },
        { texto: 'Lo que un camarero considera poco picante siempre coincide con tu percepción.', esVerdadero: false }
      ]},
      { tipo: 'rellena', titulo: 'Completa la situación', instruccion: 'Elige la frase correcta.', banco: ['osusume wa nan desu ka', 'karai desu ka'], frases: [
        { texto: 'No sabes qué pedir: "___".', respuestas: ['osusume wa nan desu ka'] },
        { texto: 'No te gusta el picante y quieres confirmar antes de pedir: "___".', respuestas: ['karai desu ka'] }
      ]},
      { tipo: 'clasifica', titulo: 'Preguntar o pedir sin picante', instruccion: 'Arrastra cada frase a su grupo.', categorias: ['Preguntar recomendación', 'Evitar el picante'], items: [
        { texto: 'Osusume wa nan desu ka', cat: 'Preguntar recomendación' }, { texto: 'Amari karakunai mono wa nan desu ka', cat: 'Evitar el picante' }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la conversación', instruccion: 'Pon los pasos en orden.', pasos: [
        'Osusume wa nan desu ka (preguntas qué recomiendan)', 'Karai desu ka (preguntas si pica)', 'Amari karakunai mono wa nan desu ka (pides alternativa suave)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no tiene que ver con el sabor.', preguntas: [
        { grupo: '¿Cuál de estas NO pregunta sobre el sabor de la comida?', explicacion: 'Okaikei onegaishimasu es sobre pagar, no sobre sabor.', opciones: [
          { texto: 'Karai desu ka', intruso: false }, { texto: 'Amari karakunai mono wa nan desu ka', intruso: false }, { texto: 'Okaikei onegaishimasu', intruso: true }
        ]}
      ]}
    ]
  },

  'd6-fc-2': {
    contenido: `## Desarrollo
Cómo avisar de una alergia alimentaria de forma clara, y cómo preguntar si un plato concreto lleva cierto ingrediente antes de pedirlo.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| ［ingrediente］アレルギーがあります | [ingrediente] arerugii ga arimasu | tengo alergia a [ingrediente] |
| ［ingrediente］は入っていますか？ | [ingrediente] wa haitte imasu ka? | ¿lleva [ingrediente]? |

## 🧠 Truco para recordar
Haitte imasu (literal "está incluido/dentro") es la pregunta perfecta para verificar antes de comprometerte a pedir algo — combínala con cualquier ingrediente del punto anterior.

## 👁 confusión
Avisar de la alergia después de pedir es mucho menos efectivo que preguntar antes — usa "[ingrediente] wa haitte imasu ka" de forma proactiva en vez de esperar a que surja el problema.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: 'アレルギーがあります', b: 'Tengo alergia a...' }, { a: 'は入っていますか？', b: '¿Lleva...?' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Es mejor preguntar antes de pedir que avisar después.', esVerdadero: true },
        { texto: 'Haitte imasu ka pregunta el precio de un plato.', esVerdadero: false }
      ]},
      { tipo: 'rellena', titulo: 'Completa la pregunta', instruccion: 'Elige la palabra correcta.', banco: ['haitte imasu ka', 'arerugii ga arimasu'], frases: [
        { texto: 'Preguntas si el plato lleva gamba: "ebi wa ___".', respuestas: ['haitte imasu ka'] },
        { texto: 'Avisas de que eres alérgico al huevo: "tamago ___".', respuestas: ['arerugii ga arimasu'] }
      ]},
      { tipo: 'clasifica', titulo: 'Preguntar antes o avisar', instruccion: 'Arrastra cada frase a su grupo.', categorias: ['Preguntar antes de pedir', 'Avisar de tu alergia'], items: [
        { texto: '[ingrediente] wa haitte imasu ka', cat: 'Preguntar antes de pedir' }, { texto: '[ingrediente] arerugii ga arimasu', cat: 'Avisar de tu alergia' }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la precaución con alergias', instruccion: 'Pon los pasos en el orden más seguro.', pasos: [
        '[Ingrediente] arerugii ga arimasu (avisas primero)', '[Ingrediente] wa haitte imasu ka (preguntas por el plato concreto)', 'Pides con seguridad'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no tiene que ver con alergias.', preguntas: [
        { grupo: '¿Cuál de estas NO tiene que ver con alergias alimentarias?', explicacion: 'Ikutsu desu ka pregunta cantidad, no alergias.', opciones: [
          { texto: 'Arerugii ga arimasu', intruso: false }, { texto: 'Haitte imasu ka', intruso: false }, { texto: 'Ikutsu desu ka', intruso: true }
        ]}
      ]}
    ]
  },

  'd6-fc-3': {
    contenido: `## Desarrollo
El cierre completo de la comida en frases reales, encadenando pedir la cuenta con la despedida.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| お会計お願いします | okaikei onegaishimasu | la cuenta, por favor |
| ごちそうさまでした | gochisousama deshita | gracias por la comida |

## 🧠 Truco para recordar
Este es el combo final que ya usaste en el día 6 original — aquí lo practicas de forma aislada para automatizarlo del todo.

## 👁 confusión
Gochisousama deshita se dice tanto al salir del restaurante como en general al terminar de comer en cualquier sitio, incluida tu propia casa — no es exclusivo de restaurantes.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: 'お会計お願いします', b: 'La cuenta, por favor' }, { a: 'ごちそうさまでした', b: 'Gracias por la comida' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Gochisousama deshita solo se dice en restaurantes.', esVerdadero: false },
        { texto: 'Okaikei onegaishimasu se usa para pedir la cuenta.', esVerdadero: true }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena el cierre', instruccion: 'Pon los pasos en orden.', pasos: [
        'Okaikei onegaishimasu (pides la cuenta)', 'Pagas', 'Gochisousama deshita (te despides)'
      ]},
      { tipo: 'rellena', titulo: 'Completa la situación', instruccion: 'Elige la frase correcta.', banco: ['okaikei onegaishimasu', 'gochisousama deshita'], frases: [
        { texto: 'Habéis terminado y queréis pagar: "___".', respuestas: ['okaikei onegaishimasu'] },
        { texto: 'Sales por la puerta del restaurante: "___".', respuestas: ['gochisousama deshita'] }
      ]},
      { tipo: 'clasifica', titulo: 'Antes o después de pagar', instruccion: 'Arrastra cada frase a su grupo.', categorias: ['Antes de pagar', 'Después de pagar'], items: [
        { texto: 'Okaikei onegaishimasu', cat: 'Antes de pagar' }, { texto: 'Gochisousama deshita', cat: 'Después de pagar' }
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no pertenece al cierre de la comida.', preguntas: [
        { grupo: '¿Cuál de estas NO es parte del cierre de una comida?', explicacion: 'Nan-mei sama desu ka es del principio, no del final.', opciones: [
          { texto: 'Okaikei onegaishimasu', intruso: false }, { texto: 'Gochisousama deshita', intruso: false }, { texto: 'Nan-mei sama desu ka', intruso: true }
        ]}
      ]}
    ]
  },

  'd6-co-1': {
    contenido: `## Desarrollo
Itadakimasu y gochisousama son dos rituales verbales que enmarcan cualquier comida japonesa, desde un bento en el tren hasta una cena formal.

## ✅ Lo esencial

| Momento | Frase | Significado literal |
|---|---|---|
| Antes de comer | いただきます (itadakimasu) | "Recibo humildemente" (agradeces la comida y a quien la preparó) |
| Después de comer | ごちそうさまでした (gochisousama deshita) | "Ha sido un festín" (agradeces de nuevo al terminar) |

## 🧠 Truco para recordar
Piensa en itadakimasu/gochisousama como el "que aproveche" y el "gracias por la comida" combinados en un solo gesto ritual — se dicen incluso comiendo solo, casi como un hábito automático.

## 👁 confusión
Itadakimasu no es solo darle las gracias al camarero — es un agradecimiento más amplio, hacia los ingredientes, el cocinero, y quien pagó, todo junto en una sola palabra.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada momento con su frase', instruccion: 'Toca un momento y luego su frase.', pares: [
        { a: 'Antes de comer', b: 'Itadakimasu' }, { a: 'Después de comer', b: 'Gochisousama deshita' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Itadakimasu se dice antes de empezar a comer.', esVerdadero: true },
        { texto: 'Itadakimasu solo se dice en restaurantes con camarero.', esVerdadero: false }
      ]},
      { tipo: 'clasifica', titulo: 'Antes o después', instruccion: 'Arrastra cada frase a su momento.', categorias: ['Antes de comer', 'Después de comer'], items: [
        { texto: 'Itadakimasu', cat: 'Antes de comer' }, { texto: 'Gochisousama deshita', cat: 'Después de comer' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige la frase correcta.', banco: ['itadakimasu', 'gochisousama deshita'], frases: [
        { texto: 'Antes del primer bocado, dices: "___".', respuestas: ['itadakimasu'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la comida completa', instruccion: 'Pon los rituales en orden.', pasos: [
        'Itadakimasu (antes de comer)', '(comes)', 'Gochisousama deshita (después de comer)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no es un ritual de la comida.', preguntas: [
        { grupo: '¿Cuál de estas NO es un ritual verbal de la comida japonesa?', explicacion: 'Sumimasen es de uso general, no específico de comer.', opciones: [
          { texto: 'Itadakimasu', intruso: false }, { texto: 'Gochisousama deshita', intruso: false }, { texto: 'Sumimasen', intruso: true }
        ]}
      ]}
    ]
  },

  'd6-co-2': {
    contenido: `## Desarrollo
Dividir la cuenta entre varios (warikan) es común en Japón, aunque el proceso puede ser distinto al que estás acostumbrado.

## ✅ Lo esencial

| Concepto | Detalle |
|---|---|
| 割り勘 (warikan) | Dividir la cuenta a partes iguales entre el grupo |
| Práctica habitual | Muchas veces una sola persona paga en caja y luego el grupo le da su parte en efectivo |
| Cajas separadas | Algunos restaurantes ofrecen dividir la cuenta directamente en caja si lo pides |

## 🧠 Truco para recordar
Warikan viene de "wari" (dividir) — cualquier palabra con esa raíz suele tener que ver con repartir o dividir algo entre varias personas.

## 👁 confusión
No des por hecho que puedes pagar cada uno por separado directamente en caja — pregunta antes con "betsu betsu ni haraemasu ka?" (¿podemos pagar por separado?) porque no todos los sitios lo permiten.`,
    juegos: [
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Warikan significa dividir la cuenta a partes iguales.', esVerdadero: true },
        { texto: 'Todos los restaurantes japoneses permiten pagar por separado sin preguntar.', esVerdadero: false }
      ]},
      { tipo: 'conecta', titulo: 'Conecta cada palabra con su significado', instruccion: 'Toca una palabra y luego su significado.', pares: [
        { a: '割り勘 (warikan)', b: 'Dividir la cuenta' }, { a: 'betsu betsu ni haraemasu ka', b: '¿Podemos pagar por separado?' }
      ]},
      { tipo: 'clasifica', titulo: 'Habitual o poco habitual', instruccion: 'Arrastra cada práctica a su grupo.', categorias: ['Práctica habitual', 'No siempre posible'], items: [
        { texto: 'Uno paga y el grupo le devuelve en efectivo', cat: 'Práctica habitual' }, { texto: 'Pagar cada uno por separado directamente en caja', cat: 'No siempre posible' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige la palabra correcta.', banco: ['warikan', 'betsu betsu'], frases: [
        { texto: 'Dividir la cuenta a partes iguales se llama: "___".', respuestas: ['warikan'] },
        { texto: 'Preguntas si podéis pagar por separado: "___ ni haraemasu ka".', respuestas: ['betsu betsu'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena el proceso habitual', instruccion: 'Pon los pasos en orden.', pasos: [
        'Una persona paga la cuenta completa', 'El resto del grupo calcula su parte', 'Le devuelven el dinero en efectivo'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no tiene que ver con dividir la cuenta.', preguntas: [
        { grupo: '¿Cuál de estas NO tiene que ver con warikan?', explicacion: 'Oishii desu es sobre el sabor, no sobre pagar.', opciones: [
          { texto: 'Warikan', intruso: false }, { texto: 'Betsu betsu ni haraemasu ka', intruso: false }, { texto: 'Oishii desu', intruso: true }
        ]}
      ]}
    ]
  },

  'd6-co-3': {
    contenido: `## Desarrollo
Los restaurantes de especialidad única (ramen-ya, sushi-ya, soba-ya...) funcionan distinto a un restaurante de menú amplio — el pedido suele ser más simple y directo.

## ✅ Lo esencial

| Tipo de local | Cómo pedir |
|---|---|
| ラーメン屋 (ramen-ya) | A menudo con shokken-ki (máquina de tickets), pedido simple |
| 寿司屋 (sushi-ya) | En barra, pides pieza a pieza o menús cerrados (omakase) |
| そば屋 (soba-ya) | Menú corto, variantes de fideos fríos o calientes |

## 🧠 Truco para recordar
El sufijo "-ya" (屋) significa "tienda/local de" — ramen-ya (tienda de ramen), sushi-ya (tienda de sushi). Reconocer este sufijo te ayuda a identificar el tipo de sitio en cualquier cartel.

## 👁 confusión
Omakase (dejar la elección al chef) no significa "lo que sea, cualquier cosa" en un sentido despectivo — es una forma respetada de comer, confiando en la selección del cocinero, y suele costar más, no menos.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada local con su tipo de pedido', instruccion: 'Toca un local y luego cómo se pide.', pares: [
        { a: 'ラーメン屋', b: 'Máquina de tickets, pedido simple' }, { a: '寿司屋', b: 'Pieza a pieza o menú omakase' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'El sufijo "-ya" significa "tienda/local de".', esVerdadero: true },
        { texto: 'Omakase significa que no importa lo que te den, es lo más barato.', esVerdadero: false }
      ]},
      { tipo: 'clasifica', titulo: 'Tipo de especialidad', instruccion: 'Arrastra cada palabra a su grupo.', categorias: ['Tipo de local (-ya)', 'Forma de pedir'], items: [
        { texto: 'Ramen-ya', cat: 'Tipo de local (-ya)' }, { texto: 'Sushi-ya', cat: 'Tipo de local (-ya)' }, { texto: 'Omakase', cat: 'Forma de pedir' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige la palabra correcta.', banco: ['-ya', 'omakase'], frases: [
        { texto: 'El sufijo que significa "tienda de" es: "___".', respuestas: ['-ya'] },
        { texto: 'Dejar que el chef elija por ti se llama: "___".', respuestas: ['omakase'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la idea', instruccion: 'Pon los pasos en orden lógico.', pasos: [
        'Ves un cartel con "-ya" al final', 'Identificas el tipo de especialidad', 'Pides de forma simple y directa'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no termina con el sufijo de tienda especializada.', preguntas: [
        { grupo: '¿Cuál de estas NO es un tipo de restaurante especializado?', explicacion: 'Koshitsu es "sala privada", no un tipo de restaurante.', opciones: [
          { texto: 'Ramen-ya', intruso: false }, { texto: 'Sushi-ya', intruso: false }, { texto: 'Koshitsu', intruso: true }
        ]}
      ]}
    ]
  },

  // ══════════════ DÍA 7 · Repaso semana 1 ══════════════

  'd7-pc-1': {
    contenido: `## Desarrollo
Repaso de palabras de los días 3 y 4: pedir ayuda, orientarte, y los dos sistemas de contadores.

## ✅ Lo esencial

| Japonés | Español |
|---|---|
| わかりません | no entiendo |
| トイレ | baño |
| 助けてください | ¡ayúdeme! |
| 一つ / 一人 | 1 objeto / 1 persona |

## 🧠 Truco para recordar
Si dudas entre contador de objetos y de personas, recuerda: "-tsu" es para cosas, "-ri/-nin" es para gente.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Repaso: conecta cada palabra con su significado', instruccion: 'Toca una palabra y luego su significado.', pares: [
        { a: 'Wakarimasen', b: 'No entiendo' }, { a: 'Toire', b: 'Baño' }, { a: 'Tasukete kudasai', b: '¡Ayúdeme!' }, { a: 'Yonin', b: '4 personas' }
      ]},
      { tipo: 'vf', titulo: 'Repaso: verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Yottsu es un contador de personas.', esVerdadero: false },
        { texto: 'Wakarimasen significa "no entiendo".', esVerdadero: true }
      ]},
      { tipo: 'clasifica', titulo: 'Repaso: ayuda o contadores', instruccion: 'Arrastra cada palabra a su bloque.', categorias: ['Pedir ayuda (día 3)', 'Contadores (día 4)'], items: [
        { texto: 'Mayoimashita', cat: 'Pedir ayuda (día 3)' }, { texto: 'Tasukete kudasai', cat: 'Pedir ayuda (día 3)' },
        { texto: 'Hitotsu', cat: 'Contadores (día 4)' }, { texto: 'Yonin', cat: 'Contadores (día 4)' }
      ]},
      { tipo: 'rellena', titulo: 'Repaso general', instruccion: 'Elige la palabra correcta.', banco: ['toire', 'yonin'], frases: [
        { texto: 'Buscas el baño: "___ wa doko desu ka".', respuestas: ['toire'] },
        { texto: 'Sois 4 personas: "___ desu".', respuestas: ['yonin'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena por bloque', instruccion: 'Del día 3 al día 4.', pasos: [
        'Wakarimasen (día 3)', 'Mayoimashita (día 3)', 'Hitotsu (día 4)', 'Yonin (día 4)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no es de días 3-4.', preguntas: [
        { grupo: '¿Cuál de estas es del día 5, no de días 3-4?', explicacion: 'Irasshaimase es del día 5 (restaurantes).', opciones: [
          { texto: 'Wakarimasen', intruso: false }, { texto: 'Yonin', intruso: false }, { texto: 'Irasshaimase', intruso: true }
        ]}
      ]}
    ]
  },

  'd7-pc-2': {
    contenido: `## Desarrollo
Repaso de palabras del día 5: la llegada a un restaurante japonés.

## ✅ Lo esencial

| Japonés | Español |
|---|---|
| いらっしゃいませ | "¡bienvenido!" |
| 何名様ですか？ | ¿cuántas personas son? |
| カウンター席 | sitio en la barra |

## 🧠 Truco para recordar
Recuerda la secuencia completa: te saludan (irasshaimase), te preguntan cuántos sois (nan-mei sama), tú eliges dónde sentarte (kauntaa/teeburu/koshitsu).`,
    juegos: [
      { tipo: 'conecta', titulo: 'Repaso: conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: 'Irasshaimase', b: '"¡Bienvenido!"' }, { a: 'Nan-mei sama desu ka', b: '¿Cuántas personas son?' }, { a: 'Kauntaa seki', b: 'Sitio en la barra' }
      ]},
      { tipo: 'vf', titulo: 'Repaso: verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Hay que responder algo a irasshaimase.', esVerdadero: false },
        { texto: 'Koshitsu es una sala privada.', esVerdadero: true }
      ]},
      { tipo: 'clasifica', titulo: 'Personal o cliente', instruccion: 'Arrastra cada frase a su grupo.', categorias: ['Lo dice el personal', 'Lo dices tú'], items: [
        { texto: 'Irasshaimase', cat: 'Lo dice el personal' }, { texto: 'Nan-mei sama desu ka', cat: 'Lo dice el personal' },
        { texto: 'Yoyaku shite imasu', cat: 'Lo dices tú' }, { texto: 'Kauntaa seki de onegaishimasu', cat: 'Lo dices tú' }
      ]},
      { tipo: 'rellena', titulo: 'Repaso general', instruccion: 'Elige la frase correcta.', banco: ['yoyaku shite imasu', 'koshitsu'], frases: [
        { texto: 'Confirmas que tienes reserva: "___".', respuestas: ['yoyaku shite imasu'] },
        { texto: 'Quieres una sala privada: "___ wa arimasu ka".', respuestas: ['koshitsu'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la llegada', instruccion: 'Pon los pasos en orden.', pasos: [
        'Irasshaimase (te reciben)', 'Nan-mei sama desu ka (te preguntan)', 'Futari desu (respondes)', 'Yoyaku shite imasu (aclaras reserva)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no es del día 5.', preguntas: [
        { grupo: '¿Cuál de estas es del día 6, no del día 5?', explicacion: 'Okaikei onegaishimasu es del día 6 (pagar).', opciones: [
          { texto: 'Irasshaimase', intruso: false }, { texto: 'Kauntaa seki', intruso: false }, { texto: 'Okaikei onegaishimasu', intruso: true }
        ]}
      ]}
    ]
  },

  'd7-pc-3': {
    contenido: `## Desarrollo
Repaso de palabras del día 6: pedir, alergias, pagar y despedirte.

## ✅ Lo esencial

| Japonés | Español |
|---|---|
| おすすめ | recomendación |
| アレルギー | alergia |
| お会計 | la cuenta |
| ごちそうさま | gracias por la comida |

## 🧠 Truco para recordar
El recorrido completo de una comida en 4 palabras: pides recomendación, avisas de alergias si las tienes, pagas, y te despides.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Repaso: conecta cada palabra con su significado', instruccion: 'Toca una palabra y luego su significado.', pares: [
        { a: 'おすすめ', b: 'Recomendación' }, { a: 'アレルギー', b: 'Alergia' }, { a: 'お会計', b: 'La cuenta' }, { a: 'ごちそうさま', b: 'Gracias por la comida' }
      ]},
      { tipo: 'vf', titulo: 'Repaso: verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Gochisousama se dice antes de comer.', esVerdadero: false },
        { texto: 'Okaikei significa "la cuenta".', esVerdadero: true }
      ]},
      { tipo: 'clasifica', titulo: 'Pedir o cerrar', instruccion: 'Arrastra cada palabra a su grupo.', categorias: ['Al pedir', 'Al cerrar la comida'], items: [
        { texto: 'Osusume', cat: 'Al pedir' }, { texto: 'Arerugii', cat: 'Al pedir' }, { texto: 'Okaikei', cat: 'Al cerrar la comida' }, { texto: 'Gochisousama', cat: 'Al cerrar la comida' }
      ]},
      { tipo: 'rellena', titulo: 'Repaso general', instruccion: 'Elige la palabra correcta.', banco: ['okaikei', 'gochisousama'], frases: [
        { texto: 'Pides la cuenta: "___ onegaishimasu".', respuestas: ['okaikei'] },
        { texto: 'Te despides tras comer: "___ deshita".', respuestas: ['gochisousama'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la comida completa', instruccion: 'Del principio al final.', pasos: [
        'Osusume wa nan desu ka (preguntas recomendación)', 'Arerugii ga arimasu (avisas si hace falta)', 'Okaikei onegaishimasu (pagas)', 'Gochisousama deshita (te despides)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no es del día 6.', preguntas: [
        { grupo: '¿Cuál de estas es del día 3, no del día 6?', explicacion: 'Wakarimasen es del día 3 (pedir ayuda).', opciones: [
          { texto: 'Osusume', intruso: false }, { texto: 'Okaikei', intruso: false }, { texto: 'Wakarimasen', intruso: true }
        ]}
      ]}
    ]
  },

  'd7-fc-1': {
    contenido: `## Desarrollo
Repaso de frases de los días 3 y 4 en contexto real, mezclando pedir ayuda con cantidades.

## ✅ Lo esencial

| Situación | Frase |
|---|---|
| No entiendes | もう一度お願いします |
| Estás perdido | 迷いました |
| Pides varias unidades | これを三つください |

## 🧠 Truco para recordar
Combina mentalmente: si te pierdes buscando una tienda, primero usas las frases de ayuda del día 3, y una vez dentro, usas los contadores del día 4 para comprar.`,
    juegos: [
      { tipo: 'rellena', titulo: 'Repaso: completa la situación', instruccion: 'Elige la frase correcta.', banco: ['mayoimashita', 'mou ichido onegaishimasu', 'mittsu kudasai'], frases: [
        { texto: 'Te has perdido: "___".', respuestas: ['mayoimashita'] },
        { texto: 'No has entendido, pides que repitan: "___".', respuestas: ['mou ichido onegaishimasu'] },
        { texto: 'Quieres 3 unidades de algo: "kore o ___".', respuestas: ['mittsu kudasai'] }
      ]},
      { tipo: 'conecta', titulo: 'Repaso: conecta situación y frase', instruccion: 'Toca una situación y luego su frase.', pares: [
        { a: 'No entiendes', b: 'Mou ichido onegaishimasu' }, { a: 'Estás perdido', b: 'Mayoimashita' }, { a: 'Pides varias unidades', b: 'Kore o mittsu kudasai' }
      ]},
      { tipo: 'vf', titulo: 'Repaso: verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Mayoimashita se usa para pedir cantidad de algo.', esVerdadero: false },
        { texto: 'Mou ichido onegaishimasu pide que repitan.', esVerdadero: true }
      ]},
      { tipo: 'clasifica', titulo: 'Ayuda o cantidad', instruccion: 'Arrastra cada frase a su bloque.', categorias: ['Pedir ayuda', 'Pedir cantidad'], items: [
        { texto: 'Mayoimashita', cat: 'Pedir ayuda' }, { texto: 'Tasukete kudasai', cat: 'Pedir ayuda' }, { texto: 'Kore o mittsu kudasai', cat: 'Pedir cantidad' }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la situación mixta', instruccion: 'Pon los pasos en orden.', pasos: [
        'Mayoimashita (te pierdes buscando la tienda)', 'Toire wa doko desu ka (o cualquier pregunta de orientación)', 'Kore o mittsu kudasai (una vez dentro, compras)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no es de los días 3-4.', preguntas: [
        { grupo: '¿Cuál de estas es del día 6, no de días 3-4?', explicacion: 'Gochisousama deshita es del día 6.', opciones: [
          { texto: 'Mayoimashita', intruso: false }, { texto: 'Kore o mittsu kudasai', intruso: false }, { texto: 'Gochisousama deshita', intruso: true }
        ]}
      ]}
    ]
  },

  'd7-fc-2': {
    contenido: `## Desarrollo
Repaso de frases del día 5: responder cuántos sois y aclarar si tenéis reserva.

## ✅ Lo esencial

| Situación | Frase |
|---|---|
| Te preguntan cuántos sois | 二人です |
| Tienes reserva | 予約しています |
| No tienes reserva | 予約していません |

## 🧠 Truco para recordar
Recuerda el par de opuestos: -imasu (sí) / -imasen (no) — el mismo patrón te servirá en muchas otras frases del curso.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Repaso: conecta situación y frase', instruccion: 'Toca una situación y luego su frase.', pares: [
        { a: 'Te preguntan cuántos sois', b: 'Futari desu' }, { a: 'Tienes reserva', b: 'Yoyaku shite imasu' }, { a: 'No tienes reserva', b: 'Yoyaku shite imasen' }
      ]},
      { tipo: 'vf', titulo: 'Repaso: verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Yoyaku shite imasen significa que sí tienes reserva.', esVerdadero: false },
        { texto: 'Futari desu significa "somos dos".', esVerdadero: true }
      ]},
      { tipo: 'clasifica', titulo: 'Con o sin reserva', instruccion: 'Arrastra cada frase a su grupo.', categorias: ['Con reserva', 'Sin reserva'], items: [
        { texto: 'Yoyaku shite imasu', cat: 'Con reserva' }, { texto: 'Yoyaku shite imasen', cat: 'Sin reserva' }
      ]},
      { tipo: 'rellena', titulo: 'Repaso general', instruccion: 'Elige la frase correcta.', banco: ['futari desu', 'yoyaku shite imasu'], frases: [
        { texto: 'Sois dos personas: "___".', respuestas: ['futari desu'] },
        { texto: 'Confirmas tu reserva: "___".', respuestas: ['yoyaku shite imasu'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la llegada', instruccion: 'Pon los pasos en orden.', pasos: [
        'Nan-mei sama desu ka (te preguntan)', 'Futari desu (respondes)', 'Yoyaku shite imasu (aclaras reserva)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no es del día 5.', preguntas: [
        { grupo: '¿Cuál de estas es del día 4, no del día 5?', explicacion: 'Nan-nin desu ka es del día 4 (contadores).', opciones: [
          { texto: 'Futari desu', intruso: false }, { texto: 'Yoyaku shite imasu', intruso: false }, { texto: 'Nan-nin desu ka', intruso: true }
        ]}
      ]}
    ]
  },

  'd7-fc-3': {
    contenido: `## Desarrollo
Repaso de frases del día 6: pedir recomendación, avisar de alergias, y cerrar la comida.

## ✅ Lo esencial

| Situación | Frase |
|---|---|
| Pides recomendación | おすすめは何ですか？ |
| Avisas de alergia | ［ingrediente］アレルギーがあります |
| Cierras la comida | お会計お願いします → ごちそうさまでした |

## 🧠 Truco para recordar
Estas tres frases cubren el 90% de lo que necesitarás decir en cualquier restaurante — repásalas hasta que salgan sin pensar.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Repaso: conecta situación y frase', instruccion: 'Toca una situación y luego su frase.', pares: [
        { a: 'Pides recomendación', b: 'Osusume wa nan desu ka' }, { a: 'Avisas de alergia', b: 'Arerugii ga arimasu' }, { a: 'Pides la cuenta', b: 'Okaikei onegaishimasu' }
      ]},
      { tipo: 'vf', titulo: 'Repaso: verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Osusume wa nan desu ka pregunta por una recomendación.', esVerdadero: true },
        { texto: 'Gochisousama deshita se dice antes de pedir la comida.', esVerdadero: false }
      ]},
      { tipo: 'rellena', titulo: 'Repaso general', instruccion: 'Elige la frase correcta.', banco: ['osusume wa nan desu ka', 'okaikei onegaishimasu'], frases: [
        { texto: 'No sabes qué pedir: "___".', respuestas: ['osusume wa nan desu ka'] },
        { texto: 'Habéis terminado, queréis pagar: "___".', respuestas: ['okaikei onegaishimasu'] }
      ]},
      { tipo: 'clasifica', titulo: 'Inicio o cierre', instruccion: 'Arrastra cada frase a su momento.', categorias: ['Al pedir', 'Al cerrar'], items: [
        { texto: 'Osusume wa nan desu ka', cat: 'Al pedir' }, { texto: 'Arerugii ga arimasu', cat: 'Al pedir' }, { texto: 'Okaikei onegaishimasu', cat: 'Al cerrar' }, { texto: 'Gochisousama deshita', cat: 'Al cerrar' }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la comida completa', instruccion: 'Del principio al final.', pasos: [
        'Osusume wa nan desu ka', 'Arerugii ga arimasu (si hace falta)', 'Okaikei onegaishimasu', 'Gochisousama deshita'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no es del día 6.', preguntas: [
        { grupo: '¿Cuál de estas es del día 3, no del día 6?', explicacion: 'Tasukete kudasai es del día 3 (pedir ayuda urgente).', opciones: [
          { texto: 'Osusume wa nan desu ka', intruso: false }, { texto: 'Okaikei onegaishimasu', intruso: false }, { texto: 'Tasukete kudasai', intruso: true }
        ]}
      ]}
    ]
  },

  'd7-co-1': {
    contenido: `## Desarrollo
Repaso de las costumbres de los días 3 y 4: comunicación indirecta y evitación de ciertos números.

## ✅ Lo esencial

| Costumbre | Recordatorio |
|---|---|
| La indirecta japonesa | "Chotto..." o "kangaete okimasu" suelen ser un "no" |
| Números evitados | 4 (shi = muerte) y 9 (ku = sufrimiento) |

## 🧠 Truco para recordar
Ambas costumbres comparten una lógica: evitar lo directo o lo negativo, ya sea en palabras (indirectas) o en números (evitando los que suenan mal).`,
    juegos: [
      { tipo: 'vf', titulo: 'Repaso: verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: '"Chotto muzukashii desu" suele ser un "no" disfrazado.', esVerdadero: true },
        { texto: 'El número 9 se evita porque suena como "felicidad".', esVerdadero: false }
      ]},
      { tipo: 'conecta', titulo: 'Repaso: conecta cada costumbre con su explicación', instruccion: 'Toca una costumbre y luego su explicación.', pares: [
        { a: 'Chotto muzukashii desu', b: 'Un "no" indirecto' }, { a: 'Evitar el 4', b: 'Suena como "muerte"' }
      ]},
      { tipo: 'clasifica', titulo: 'Comunicación o números', instruccion: 'Arrastra cada idea a su bloque.', categorias: ['Comunicación indirecta (día 3)', 'Números evitados (día 4)'], items: [
        { texto: 'Chotto...', cat: 'Comunicación indirecta (día 3)' }, { texto: 'Kangaete okimasu', cat: 'Comunicación indirecta (día 3)' },
        { texto: 'Shi (4)', cat: 'Números evitados (día 4)' }, { texto: 'Ku (9)', cat: 'Números evitados (día 4)' }
      ]},
      { tipo: 'rellena', titulo: 'Repaso general', instruccion: 'Elige la palabra correcta.', banco: ['chotto', 'shi'], frases: [
        { texto: 'Un "no" suave suele empezar con: "___".', respuestas: ['chotto'] },
        { texto: 'La lectura del 4 que se evita es: "___".', respuestas: ['shi'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la idea', instruccion: 'Pon los pasos en orden lógico.', pasos: [
        'Te dicen "chotto..." con una pausa', 'Entiendes que es un "no" indirecto', 'No insistes más'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no es del bloque días 3-4.', preguntas: [
        { grupo: '¿Cuál de estas es del día 5, no de días 3-4?', explicacion: 'Omotenashi es del día 5 (restaurantes).', opciones: [
          { texto: 'Chotto muzukashii desu', intruso: false }, { texto: 'Shi (4)', intruso: false }, { texto: 'Omotenashi', intruso: true }
        ]}
      ]}
    ]
  },

  'd7-co-2': {
    contenido: `## Desarrollo
Repaso de las costumbres del día 5: el ritual de bienvenida y los detalles prácticos de sentarse a comer.

## ✅ Lo esencial

| Costumbre | Recordatorio |
|---|---|
| Omotenashi | Filosofía de hospitalidad japonesa |
| Shokken-ki | Máquina de tickets en muchos restaurantes rápidos |
| Oshibori | Toallita húmeda, solo para las manos |

## 🧠 Truco para recordar
Las tres costumbres del día 5 giran en torno al mismo tema: cuidar al cliente desde el primer segundo, con detalles que en muchos países no existen.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Repaso: conecta cada palabra con su descripción', instruccion: 'Toca una palabra y luego su descripción.', pares: [
        { a: 'Omotenashi', b: 'Filosofía de hospitalidad' }, { a: 'Shokken-ki', b: 'Máquina de tickets' }, { a: 'Oshibori', b: 'Toallita húmeda para manos' }
      ]},
      { tipo: 'vf', titulo: 'Repaso: verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'El oshibori es solo para las manos.', esVerdadero: true },
        { texto: 'Todas las máquinas de tickets aceptan tarjeta.', esVerdadero: false }
      ]},
      { tipo: 'clasifica', titulo: 'Filosofía o detalle práctico', instruccion: 'Arrastra cada idea a su grupo.', categorias: ['Filosofía general', 'Detalle práctico concreto'], items: [
        { texto: 'Omotenashi', cat: 'Filosofía general' }, { texto: 'Shokken-ki', cat: 'Detalle práctico concreto' }, { texto: 'Oshibori', cat: 'Detalle práctico concreto' }
      ]},
      { tipo: 'rellena', titulo: 'Repaso general', instruccion: 'Elige la palabra correcta.', banco: ['omotenashi', 'oshibori'], frases: [
        { texto: 'La filosofía de hospitalidad japonesa se llama: "___".', respuestas: ['omotenashi'] },
        { texto: 'La toallita húmeda que te dan al sentarte es el: "___".', respuestas: ['oshibori'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la llegada al restaurante', instruccion: 'Pon los pasos en orden.', pasos: [
        'Irasshaimase (te reciben con energía)', 'Te sientas', 'Te dan el oshibori'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no es del día 5.', preguntas: [
        { grupo: '¿Cuál de estas es del día 6, no del día 5?', explicacion: 'Warikan es del día 6 (pagar).', opciones: [
          { texto: 'Omotenashi', intruso: false }, { texto: 'Oshibori', intruso: false }, { texto: 'Warikan', intruso: true }
        ]}
      ]}
    ]
  },

  'd7-co-3': {
    contenido: `## Desarrollo
Repaso de las costumbres del día 6: los rituales verbales de la comida y cómo se gestiona el pago en grupo.

## ✅ Lo esencial

| Costumbre | Recordatorio |
|---|---|
| Itadakimasu / gochisousama | Rituales antes y después de comer |
| Warikan | Dividir la cuenta entre el grupo |
| Locales "-ya" | Ramen-ya, sushi-ya: especialidad única, pedido simple |

## 🧠 Truco para recordar
Si memorizas solo tres cosas de toda la semana 1 de costumbres, que sean estas: itadakimasu/gochisousama, warikan, y que "-ya" significa "tienda de".`,
    juegos: [
      { tipo: 'conecta', titulo: 'Repaso: conecta cada palabra con su significado', instruccion: 'Toca una palabra y luego su significado.', pares: [
        { a: 'Itadakimasu', b: 'Antes de comer' }, { a: 'Warikan', b: 'Dividir la cuenta' }, { a: '-ya', b: 'Sufijo de "tienda de"' }
      ]},
      { tipo: 'vf', titulo: 'Repaso: verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Warikan significa dividir la cuenta.', esVerdadero: true },
        { texto: 'Itadakimasu se dice después de comer.', esVerdadero: false }
      ]},
      { tipo: 'clasifica', titulo: 'Ritual o práctica de pago', instruccion: 'Arrastra cada idea a su grupo.', categorias: ['Ritual verbal', 'Práctica de pago'], items: [
        { texto: 'Itadakimasu', cat: 'Ritual verbal' }, { texto: 'Gochisousama', cat: 'Ritual verbal' }, { texto: 'Warikan', cat: 'Práctica de pago' }
      ]},
      { tipo: 'rellena', titulo: 'Repaso general', instruccion: 'Elige la palabra correcta.', banco: ['itadakimasu', 'warikan'], frases: [
        { texto: 'Antes de comer se dice: "___".', respuestas: ['itadakimasu'] },
        { texto: 'Dividir la cuenta entre el grupo se llama: "___".', respuestas: ['warikan'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena toda la semana 1 en un resumen', instruccion: 'Pon estos bloques temáticos en el orden del curso.', pasos: [
        'Pedir ayuda y orientarte (día 3)', 'Contadores y cantidades (día 4)', 'Restaurantes I: llegada (día 5)', 'Restaurantes II: pedir y pagar (día 6)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no es una costumbre del día 6.', preguntas: [
        { grupo: '¿Cuál de estas es del día 4, no del día 6?', explicacion: 'Wago/kango es del día 4 (contadores).', opciones: [
          { texto: 'Itadakimasu', intruso: false }, { texto: 'Warikan', intruso: false }, { texto: 'Wago y kango', intruso: true }
        ]}
      ]}
    ]
  }

};

async function subirSemana1() {
  if (typeof db === 'undefined') { console.error('No se encuentra `db`. ¿Estás en la página de ApuntesLarry, logueado?'); return; }
  var col = db.collection('temas').doc('japones-semana1').collection('puntos');
  var ids = Object.keys(LECCIONES_SEMANA1);
  for (var i = 0; i < ids.length; i++) {
    var id = ids[i];
    try {
      await col.doc(id).set(LECCIONES_SEMANA1[id]);
      console.log('✅ Subido: ' + id);
    } catch (e) {
      console.error('❌ Error en ' + id + ': ' + e.message);
    }
  }
  console.log('Terminado. ' + ids.length + ' puntos procesados.');
}
