/*
 * Subida a Firestore — Japonés, Semana 2 (Módulo 3: Día 8 a Día 12)
 *
 * Cómo usar:
 * 1. Abre ApuntesLarry logueado con tu cuenta Google.
 * 2. F12 → Console.
 * 3. Pega TODO este archivo y pulsa Enter.
 * 4. Ejecuta:  subirSemana2()
 *
 * Escribe en: temas/japones-semana2/puntos/{firestoreId}
 * Es seguro volver a ejecutarlo: sobreescribe, no duplica.
 */

var LECCIONES_SEMANA2 = {

  // ══════════════ DÍA 8 · Transporte I (estación y tren) ══════════════

  'd8-pc-1': {
    contenido: `## Desarrollo
El vocabulario básico de la estación: dónde comprar el billete y dónde pasar el control de acceso.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| 駅 | eki | estación |
| 切符売り場 | kippu-uriba | taquilla de billetes |
| 改札 | kaisatsu | control de acceso / torniquetes |

## 🧠 Truco para recordar
Kaisatsu es el punto donde pasas tu billete o tarjeta antes de llegar al andén — recuerda que está siempre entre la calle y las vías, nunca después.

## 👁 confusión
En muchas estaciones grandes, kippu-uriba puede estar lejos del kaisatsu que necesitas — si vas con IC kaado no hace falta pasar por la taquilla en absoluto.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada palabra con su significado', instruccion: 'Toca una palabra y luego su significado.', pares: [
        { a: '駅 (eki)', b: 'Estación' }, { a: '切符売り場', b: 'Taquilla de billetes' }, { a: '改札 (kaisatsu)', b: 'Control de acceso' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Con un IC kaado no hace falta pasar por la taquilla.', esVerdadero: true },
        { texto: 'Kaisatsu está después del andén.', esVerdadero: false }
      ]},
      { tipo: 'clasifica', titulo: 'Lugar o proceso', instruccion: 'Arrastra cada palabra a su grupo.', categorias: ['Un lugar físico', 'Parte del proceso de acceso'], items: [
        { texto: 'Eki', cat: 'Un lugar físico' }, { texto: 'Kippu-uriba', cat: 'Un lugar físico' }, { texto: 'Kaisatsu', cat: 'Parte del proceso de acceso' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la situación', instruccion: 'Elige la palabra correcta.', banco: ['kippu-uriba', 'kaisatsu'], frases: [
        { texto: 'No llevas IC kaado, necesitas comprar billete en la: "___".', respuestas: ['kippu-uriba'] },
        { texto: 'Antes de llegar al andén, pasas por el: "___".', respuestas: ['kaisatsu'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena el proceso', instruccion: 'Pon los pasos en orden.', pasos: [
        'Eki (llegas a la estación)', 'Kippu-uriba (compras billete si hace falta)', 'Kaisatsu (pasas el control de acceso)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no es parte de la estación.', preguntas: [
        { grupo: '¿Cuál de estas NO es parte de la estación de tren?', explicacion: 'Basu-tei es la parada de autobús, no de la estación de tren.', opciones: [
          { texto: 'Eki', intruso: false }, { texto: 'Kaisatsu', intruso: false }, { texto: 'Basu-tei', intruso: true }
        ]}
      ]}
    ]
  },

  'd8-pc-2': {
    contenido: `## Desarrollo
Los tres tipos de tren que te vas a encontrar en cualquier línea japonesa, de más lento a más rápido.

## ✅ Lo esencial

| Japonés | Rōmaji | Velocidad |
|---|---|---|
| 各駅停車 | kakueki-teisha | para en todas las estaciones (el más lento) |
| 急行 | kyuukou | expreso, se salta algunas paradas |
| 特急 | tokkyuu | expreso limitado, el más rápido |

## 🧠 Truco para recordar
Cuantos más kanji "especiales" tiene el nombre, más rápido suele ser el tren: tokkyuu (特急, "extra urgente") es el más rápido; kakueki-teisha (各駅停車, "para en cada estación") es literal y lento.

## 👁 confusión
Algunos tokkyuu requieren un suplemento de pago aparte del billete base — revisa el panel o pregunta antes de subir si no quieres sorpresas.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada tren con su velocidad', instruccion: 'Toca un tren y luego su velocidad.', pares: [
        { a: '各駅停車', b: 'El más lento, para en todo' }, { a: '急行', b: 'Expreso, se salta paradas' }, { a: '特急', b: 'El más rápido' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Tokkyuu puede requerir un suplemento de pago.', esVerdadero: true },
        { texto: 'Kakueki-teisha es el tren más rápido.', esVerdadero: false }
      ]},
      { tipo: 'clasifica', titulo: 'Rápido o lento', instruccion: 'Arrastra cada tren a su grupo.', categorias: ['Más rápido', 'Más lento'], items: [
        { texto: 'Tokkyuu', cat: 'Más rápido' }, { texto: 'Kyuukou', cat: 'Más rápido' }, { texto: 'Kakueki-teisha', cat: 'Más lento' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige la palabra correcta.', banco: ['tokkyuu', 'kakueki-teisha'], frases: [
        { texto: 'Si tienes prisa, buscas un tren: "___".', respuestas: ['tokkyuu'] },
        { texto: 'Si no te importa parar en todas las estaciones: "___".', respuestas: ['kakueki-teisha'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena de más lento a más rápido', instruccion: 'Pon los tipos de tren en orden de velocidad.', pasos: [
        'Kakueki-teisha (más lento)', 'Kyuukou (medio)', 'Tokkyuu (más rápido)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona el que no es un tipo de tren.', preguntas: [
        { grupo: '¿Cuál de estos NO es un tipo de tren?', explicacion: 'Norikae es "transbordo", no un tipo de tren.', opciones: [
          { texto: 'Tokkyuu', intruso: false }, { texto: 'Kyuukou', intruso: false }, { texto: 'Norikae', intruso: true }
        ]}
      ]}
    ]
  },

  'd8-pc-3': {
    contenido: `## Desarrollo
Las palabras que necesitas para no perder el hilo dentro de la estación: qué vía coger, cómo cambiar de línea, y no perder el último tren.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| 何番線 | nan-ban-sen | qué andén / vía |
| 乗り換え | norikae | transbordo |
| 終電 | shuuden | el último tren del día |

## 🧠 Truco para recordar
Nan-ban-sen se descompone en nan (qué) + ban (número) + sen (vía) — literalmente "qué número de vía".

## 👁 confusión
Shuuden en muchas líneas fuera de las grandes ciudades puede ser bastante más temprano de lo que esperarías — nunca des por hecho que hay trenes hasta muy tarde.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada palabra con su significado', instruccion: 'Toca una palabra y luego su significado.', pares: [
        { a: '何番線', b: 'Qué andén / vía' }, { a: '乗り換え', b: 'Transbordo' }, { a: '終電', b: 'El último tren del día' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Norikae significa "cambiar de tren o línea".', esVerdadero: true },
        { texto: 'El shuuden siempre es de madrugada en toda Japón.', esVerdadero: false }
      ]},
      { tipo: 'clasifica', titulo: 'Pregunta o concepto', instruccion: 'Arrastra cada palabra a su grupo.', categorias: ['Parte de una pregunta', 'Concepto sobre el trayecto'], items: [
        { texto: 'Nan-ban-sen', cat: 'Parte de una pregunta' }, { texto: 'Norikae', cat: 'Concepto sobre el trayecto' }, { texto: 'Shuuden', cat: 'Concepto sobre el trayecto' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la situación', instruccion: 'Elige la palabra correcta.', banco: ['nan-ban-sen', 'shuuden'], frases: [
        { texto: 'No sabes a qué vía ir: "___ desu ka?".', respuestas: ['nan-ban-sen'] },
        { texto: 'Es tarde, no quieres quedarte sin tren: buscas el "___".', respuestas: ['shuuden'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena el trayecto', instruccion: 'Pon los pasos en orden.', pasos: [
        'Nan-ban-sen desu ka (preguntas la vía)', 'Norikae (haces transbordo si toca)', 'Shuuden (compruebas el último tren de vuelta)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no tiene que ver con la vía o el trayecto.', preguntas: [
        { grupo: '¿Cuál de estas NO tiene que ver con vías o trayecto?', explicacion: 'Kippu-uriba es la taquilla, no algo del propio trayecto.', opciones: [
          { texto: 'Nan-ban-sen', intruso: false }, { texto: 'Norikae', intruso: false }, { texto: 'Kippu-uriba', intruso: true }
        ]}
      ]}
    ]
  },

  'd8-fc-1': {
    contenido: `## Desarrollo
Las preguntas exactas para encontrar la estación y comprar tu billete al llegar a un sitio nuevo.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| 駅はどこですか？ | eki wa doko desu ka? | ¿dónde está la estación? |
| 切符売り場はどこですか？ | kippu-uriba wa doko desu ka? | ¿dónde está la taquilla? |

## 🧠 Truco para recordar
Las dos preguntas usan la misma plantilla que ya conoces: "[lugar] wa doko desu ka" (¿dónde está...?) — solo cambia el sustantivo.

## 👁 confusión
Si llevas IC kaado, puedes saltarte directamente esta segunda pregunta e ir al kaisatsu — la taquilla solo hace falta si necesitas billete físico.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: '駅はどこですか？', b: '¿Dónde está la estación?' }, { a: '切符売り場はどこですか？', b: '¿Dónde está la taquilla?' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Con IC kaado no hace falta preguntar por la taquilla.', esVerdadero: true },
        { texto: 'La plantilla "[lugar] wa doko desu ka" solo sirve para la estación.', esVerdadero: false }
      ]},
      { tipo: 'rellena', titulo: 'Completa la pregunta', instruccion: 'Elige la palabra correcta.', banco: ['eki', 'kippu-uriba'], frases: [
        { texto: 'Buscas la estación en general: "___ wa doko desu ka".', respuestas: ['eki'] },
        { texto: 'Necesitas billete físico, buscas la: "___".', respuestas: ['kippu-uriba'] }
      ]},
      { tipo: 'clasifica', titulo: 'Con IC kaado o sin él', instruccion: 'Arrastra cada situación a su grupo.', categorias: ['Necesario con IC kaado', 'Solo necesario sin IC kaado'], items: [
        { texto: 'Eki wa doko desu ka', cat: 'Necesario con IC kaado' }, { texto: 'Kippu-uriba wa doko desu ka', cat: 'Solo necesario sin IC kaado' }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la llegada a la estación', instruccion: 'Pon los pasos en orden.', pasos: [
        'Eki wa doko desu ka (encuentras la estación)', 'Kippu-uriba wa doko desu ka (buscas la taquilla si hace falta)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no es una pregunta de ubicación.', preguntas: [
        { grupo: '¿Cuál de estas NO es una pregunta sobre dónde está algo?', explicacion: 'Nan-ban-sen desu ka pregunta por un número, no por ubicación general.', opciones: [
          { texto: 'Eki wa doko desu ka', intruso: false }, { texto: 'Kippu-uriba wa doko desu ka', intruso: false }, { texto: 'Nan-ban-sen desu ka', intruso: true }
        ]}
      ]}
    ]
  },

  'd8-fc-2': {
    contenido: `## Desarrollo
La frase clave para comprar un billete a un destino concreto — el mismo patrón "made onegaishimasu" que verás en todo el bloque de transporte.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| ［destino］までお願いします | [destino] made onegaishimasu | un billete hasta [destino], por favor |
| 次の電車は何時ですか？ | tsugi no densha wa nanji desu ka? | ¿a qué hora es el próximo tren? |

## 🧠 Truco para recordar
"Made" siempre significa "hasta" — memorízalo bien porque reaparece constantemente, no solo en tren.

## 👁 confusión
Esta frase pide un billete de ida — si necesitas ida y vuelta, tendrás que especificarlo aparte o comprar dos billetes por separado en la mayoría de máquinas.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: '［destino］までお願いします', b: 'Un billete hasta [destino], por favor' }, { a: '次の電車は何時ですか？', b: '¿A qué hora es el próximo tren?' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: '"Made" significa "hasta".', esVerdadero: true },
        { texto: 'Esta frase incluye automáticamente el billete de vuelta.', esVerdadero: false }
      ]},
      { tipo: 'rellena', titulo: 'Completa la petición', instruccion: 'Elige la palabra correcta.', banco: ['made', 'tsugi'], frases: [
        { texto: 'Un billete hasta Kioto: "Kyoto ___ onegaishimasu".', respuestas: ['made'] },
        { texto: 'Preguntas por el próximo tren: "___ no densha wa nanji desu ka".', respuestas: ['tsugi'] }
      ]},
      { tipo: 'clasifica', titulo: 'Comprar o preguntar horario', instruccion: 'Arrastra cada frase a su grupo.', categorias: ['Comprar billete', 'Preguntar horario'], items: [
        { texto: '[Destino] made onegaishimasu', cat: 'Comprar billete' }, { texto: 'Tsugi no densha wa nanji desu ka', cat: 'Preguntar horario' }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la compra del billete', instruccion: 'Pon los pasos en orden.', pasos: [
        'Kippu-uriba wa doko desu ka (buscas la taquilla)', '[Destino] made onegaishimasu (compras el billete)', 'Nan-ban-sen desu ka (preguntas el andén)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no tiene que ver con comprar billete.', preguntas: [
        { grupo: '¿Cuál de estas NO tiene que ver con comprar un billete?', explicacion: 'Kauntaa seki es de restaurantes, no de trenes.', opciones: [
          { texto: '[Destino] made onegaishimasu', intruso: false }, { texto: 'Tsugi no densha wa nanji desu ka', intruso: false }, { texto: 'Kauntaa seki', intruso: true }
        ]}
      ]}
    ]
  },

  'd8-fc-3': {
    contenido: `## Desarrollo
Localizar tu andén y planificar la vuelta antes de que sea demasiado tarde.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| 何番線ですか？ | nan-ban-sen desu ka? | ¿qué andén es? |
| 終電は何時ですか？ | shuuden wa nanji desu ka? | ¿a qué hora es el último tren? |

## 🧠 Truco para recordar
Pregunta por el shuuden de vuelta nada más llegar a un sitio de noche — así evitas cálculos de última hora con prisa.

## 👁 confusión
El shuuden que te interesa es el de TU línea y dirección concreta — no asumas que es la misma hora para todas las líneas de una misma estación.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: '何番線ですか？', b: '¿Qué andén es?' }, { a: '終電は何時ですか？', b: '¿A qué hora es el último tren?' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'El shuuden es siempre la misma hora para todas las líneas de una estación.', esVerdadero: false },
        { texto: 'Conviene preguntar por el shuuden nada más llegar de noche.', esVerdadero: true }
      ]},
      { tipo: 'rellena', titulo: 'Completa la pregunta', instruccion: 'Elige la palabra correcta.', banco: ['nan-ban-sen', 'shuuden'], frases: [
        { texto: 'Ya tienes el billete, ahora preguntas: "___ desu ka?".', respuestas: ['nan-ban-sen'] },
        { texto: 'Planificas la vuelta, preguntas por el: "___ wa nanji desu ka".', respuestas: ['shuuden'] }
      ]},
      { tipo: 'clasifica', titulo: 'Al llegar o al planificar la vuelta', instruccion: 'Arrastra cada pregunta a su momento.', categorias: ['Al buscar el andén', 'Al planificar la vuelta'], items: [
        { texto: 'Nan-ban-sen desu ka', cat: 'Al buscar el andén' }, { texto: 'Shuuden wa nanji desu ka', cat: 'Al planificar la vuelta' }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena el día de viaje', instruccion: 'Pon los pasos en orden.', pasos: [
        'Nan-ban-sen desu ka (buscas el andén de ida)', '(pasas el día fuera)', 'Shuuden wa nanji desu ka (planificas la vuelta)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no es una pregunta sobre el trayecto.', preguntas: [
        { grupo: '¿Cuál de estas NO es una pregunta sobre horarios o andenes?', explicacion: 'Ikura desu ka pregunta precio, no horario ni andén.', opciones: [
          { texto: 'Nan-ban-sen desu ka', intruso: false }, { texto: 'Shuuden wa nanji desu ka', intruso: false }, { texto: 'Ikura desu ka', intruso: true }
        ]}
      ]}
    ]
  },

  'd8-co-1': {
    contenido: `## Desarrollo
El IC kaado (Suica, Pasmo y similares) es probablemente el objeto que más va a simplificarte la vida en Japón — una tarjeta que resuelve trenes, autobuses, y hasta compras en konbini.

## ✅ Lo esencial

| Dato | Detalle |
|---|---|
| Qué es | Tarjeta prepago recargable para transporte |
| Dónde se usa | Trenes, autobuses, taquillas de consigna, konbini, máquinas expendedoras |
| Cómo se usa | Se toca contra el lector, sin sacar billete cada vez |

## 🧠 Truco para recordar
Piensa en el IC kaado como una tarjeta monedero universal para casi cualquier pago pequeño en tu día a día japonés, no solo transporte.

## 👁 confusión
Puedes conseguirlo directamente en máquinas de la estación al llegar — no hace falta comprarlo con antelación desde fuera de Japón.`,
    juegos: [
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'El IC kaado se puede usar en konbini, no solo en trenes.', esVerdadero: true },
        { texto: 'Hace falta comprarlo desde fuera de Japón antes del viaje.', esVerdadero: false }
      ]},
      { tipo: 'conecta', titulo: 'Conecta cada uso con su descripción', instruccion: 'Toca un uso y luego su descripción.', pares: [
        { a: 'Trenes y autobuses', b: 'Tocas y pasas sin billete' }, { a: 'Konbini', b: 'Pagas pequeñas compras' }
      ]},
      { tipo: 'clasifica', titulo: 'Uso principal o secundario', instruccion: 'Arrastra cada uso a su grupo.', categorias: ['Uso principal', 'Uso adicional'], items: [
        { texto: 'Trenes', cat: 'Uso principal' }, { texto: 'Autobuses', cat: 'Uso principal' }, { texto: 'Compras en konbini', cat: 'Uso adicional' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige la palabra correcta.', banco: ['IC kaado'], frases: [
        { texto: 'La tarjeta prepago que sirve para casi todo el transporte es el: "___".', respuestas: ['IC kaado'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena el uso', instruccion: 'Pon los pasos en orden.', pasos: [
        'Compras el IC kaado en la estación', 'Lo recargas con dinero', 'Lo tocas contra el lector para pasar'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona el lugar donde NO se puede usar típicamente.', preguntas: [
        { grupo: '¿Dónde NO es típico poder usar el IC kaado?', explicacion: 'En un templo no hay lector de IC kaado para donativos.', opciones: [
          { texto: 'Tren', intruso: false }, { texto: 'Konbini', intruso: false }, { texto: 'Donativo en un templo', intruso: true }
        ]}
      ]}
    ]
  },

  'd8-co-2': {
    contenido: `## Desarrollo
La puntualidad del tren japonés es legendaria — y no es exageración, es un rasgo cultural real que afecta a cómo debes planificar tus trayectos.

## ✅ Lo esencial

| Dato | Detalle |
|---|---|
| Puntualidad | Los retrasos se miden en segundos, no en minutos |
| Certificado de retraso | Si un tren se retrasa, la empresa emite un papel justificante para tu trabajo/escuela |
| Implicación práctica | Llega al andén con margen — el tren no te va a esperar ni un segundo de más |

## 🧠 Truco para recordar
Si el horario dice que el tren sale a las 10:03, sale a las 10:03 en punto — no "sobre las 10". Ajusta tu mentalidad de puntualidad en consecuencia.

## 👁 confusión
Esta puntualidad extrema aplica sobre todo a trenes urbanos y de alta velocidad — en zonas rurales puede haber algo más de margen, aunque sigue siendo mucho más estricto que en la mayoría de países.`,
    juegos: [
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Los retrasos de tren en Japón se miden en segundos.', esVerdadero: true },
        { texto: 'Si llegas 2 minutos tarde, el tren probablemente te espera.', esVerdadero: false }
      ]},
      { tipo: 'conecta', titulo: 'Conecta cada concepto con su descripción', instruccion: 'Toca un concepto y luego su descripción.', pares: [
        { a: 'Puntualidad extrema', b: 'Retrasos medidos en segundos' }, { a: 'Certificado de retraso', b: 'Justificante oficial si hay demora' }
      ]},
      { tipo: 'clasifica', titulo: 'Zona urbana o rural', instruccion: 'Arrastra cada idea a su grupo.', categorias: ['Más estricto (urbano)', 'Algo más de margen (rural)'], items: [
        { texto: 'Trenes de alta velocidad', cat: 'Más estricto (urbano)' }, { texto: 'Líneas rurales', cat: 'Algo más de margen (rural)' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige la palabra correcta.', banco: ['segundos', 'minutos'], frases: [
        { texto: 'Los retrasos en Japón se miden en: "___", no en minutos.', respuestas: ['segundos'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la mentalidad de puntualidad', instruccion: 'Pon los pasos en orden.', pasos: [
        'Miras el horario exacto', 'Llegas al andén con margen', 'El tren sale exactamente a su hora'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la idea que NO es correcta sobre la puntualidad japonesa.', preguntas: [
        { grupo: '¿Cuál de estas ideas es incorrecta?', explicacion: 'Los trenes NO suelen esperar a pasajeros que llegan tarde.', opciones: [
          { texto: 'Los retrasos se justifican con un certificado', intruso: false }, { texto: 'Conviene llegar con margen al andén', intruso: false }, { texto: 'El tren espera un par de minutos a los rezagados', intruso: true }
        ]}
      ]}
    ]
  },

  'd8-co-3': {
    contenido: `## Desarrollo
Dentro del tren japonés rigen normas de comportamiento no escritas que conviene conocer para no destacar por los motivos equivocados.

## ✅ Lo esencial

| Norma | Detalle |
|---|---|
| Silencio | Se habla en voz baja o no se habla; el móvil va en silencio |
| Asientos prioritarios | 優先席 (yuusenseki), reservados para embarazadas, mayores, personas con discapacidad |
| Comer en el tren | Aceptable en trayectos largos (shinkansen), raro en trenes de cercanías cortos |

## 🧠 Truco para recordar
Yuusenseki (asiento prioritario) suele estar marcado con un color o pegatina distinta — evítalo aunque esté libre, salvo que realmente lo necesites.

## 👁 confusión
Hablar por teléfono en un tren de cercanías japonés está mucho peor visto que en la mayoría de países — si necesitas contestar, lo normal es susurrar brevemente o esperar a bajar.`,
    juegos: [
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Hablar por teléfono alto en un tren de cercanías está mal visto.', esVerdadero: true },
        { texto: 'Comer siempre está prohibido en cualquier tren japonés.', esVerdadero: false }
      ]},
      { tipo: 'conecta', titulo: 'Conecta cada norma con su descripción', instruccion: 'Toca una norma y luego su descripción.', pares: [
        { a: 'Silencio', b: 'Móvil en silencio, hablar bajo' }, { a: 'Yuusenseki', b: 'Asiento prioritario' }
      ]},
      { tipo: 'clasifica', titulo: 'Aceptable o mal visto', instruccion: 'Arrastra cada comportamiento a su grupo.', categorias: ['Aceptable', 'Mal visto'], items: [
        { texto: 'Comer en el shinkansen', cat: 'Aceptable' }, { texto: 'Hablar alto por teléfono', cat: 'Mal visto' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige la palabra correcta.', banco: ['yuusenseki'], frases: [
        { texto: 'El asiento reservado para embarazadas y mayores se llama: "___".', respuestas: ['yuusenseki'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena el comportamiento correcto', instruccion: 'Pon los pasos en orden.', pasos: [
        'Pones el móvil en silencio', 'Evitas el yuusenseki si no lo necesitas', 'Hablas en voz baja si hace falta'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona el comportamiento que NO es propio del tren japonés.', preguntas: [
        { grupo: '¿Cuál de estos comportamientos NO es típico ni recomendable en un tren japonés?', explicacion: 'Hablar alto por teléfono está mal visto, al contrario de las otras opciones.', opciones: [
          { texto: 'Móvil en silencio', intruso: false }, { texto: 'Ceder el yuusenseki', intruso: false }, { texto: 'Hablar alto por teléfono', intruso: true }
        ]}
      ]}
    ]
  },

  // ══════════════ DÍA 9 · Transporte II (taxi y autobús) ══════════════

  'd9-pc-1': {
    contenido: `## Desarrollo
El vocabulario básico para moverte en taxi: cómo se llama, y cómo pedir que pare.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| タクシー | takushii | taxi |
| ここで止めてください | koko de tomete kudasai | pare aquí, por favor |

## 🧠 Truco para recordar
Takushii es un préstamo directo del inglés "taxi" — de las palabras más fáciles del curso.

## 👁 confusión
No confundas tomete kudasai (pare, imperativo educado) con tomarimasu (voy a parar/quedarme) — son palabras relacionadas pero con función distinta.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada palabra con su significado', instruccion: 'Toca una palabra y luego su significado.', pares: [
        { a: 'タクシー', b: 'Taxi' }, { a: 'ここで止めてください', b: 'Pare aquí, por favor' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Takushii es un préstamo del inglés.', esVerdadero: true },
        { texto: 'Koko de tomete kudasai significa "vamos al aeropuerto".', esVerdadero: false }
      ]},
      { tipo: 'rellena', titulo: 'Completa la situación', instruccion: 'Elige la frase correcta.', banco: ['takushii', 'koko de tomete kudasai'], frases: [
        { texto: 'Necesitas parar un vehículo con conductor: "___".', respuestas: ['takushii'] },
        { texto: 'Habéis llegado, quieres bajarte: "___".', respuestas: ['koko de tomete kudasai'] }
      ]},
      { tipo: 'clasifica', titulo: 'Vehículo o petición', instruccion: 'Arrastra cada palabra a su grupo.', categorias: ['Nombra un vehículo', 'Es una petición'], items: [
        { texto: 'Takushii', cat: 'Nombra un vehículo' }, { texto: 'Koko de tomete kudasai', cat: 'Es una petición' }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena el trayecto en taxi', instruccion: 'Pon los pasos en orden.', pasos: [
        'Takushii (subes al taxi)', 'Koko de tomete kudasai (pides parar al llegar)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no tiene que ver con el taxi.', preguntas: [
        { grupo: '¿Cuál de estas NO tiene que ver con moverte en taxi?', explicacion: 'Basu-tei es la parada de autobús.', opciones: [
          { texto: 'Takushii', intruso: false }, { texto: 'Koko de tomete kudasai', intruso: false }, { texto: 'Basu-tei', intruso: true }
        ]}
      ]}
    ]
  },

  'd9-pc-2': {
    contenido: `## Desarrollo
Las palabras de dirección que necesitas para guiar a un conductor o entender indicaciones: izquierda, derecha, delante, detrás y recto.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| 右 / 左 | migi / hidari | derecha / izquierda |
| 前 / うしろ | mae / ushiro | delante / detrás |
| まっすぐ | massugu | recto |

## 🧠 Truco para recordar
Practica físicamente: señala con tu mano derecha mientras dices "migi", con la izquierda mientras dices "hidari" — el gesto ayuda a fijar la palabra.

## 👁 confusión
Migi e hidari se confunden con mucha facilidad al principio por lo parecido de su sonido — no te frustres si tardas en automatizarlos.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada palabra con su significado', instruccion: 'Toca una palabra y luego su significado.', pares: [
        { a: '右 (migi)', b: 'Derecha' }, { a: '左 (hidari)', b: 'Izquierda' }, { a: '前 (mae)', b: 'Delante' }, { a: 'まっすぐ', b: 'Recto' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Migi significa "derecha".', esVerdadero: true },
        { texto: 'Ushiro significa "delante".', esVerdadero: false }
      ]},
      { tipo: 'clasifica', titulo: 'Lado o posición', instruccion: 'Arrastra cada palabra a su grupo.', categorias: ['Lado (izquierda/derecha)', 'Posición (delante/detrás)'], items: [
        { texto: 'Migi', cat: 'Lado (izquierda/derecha)' }, { texto: 'Hidari', cat: 'Lado (izquierda/derecha)' }, { texto: 'Mae', cat: 'Posición (delante/detrás)' }, { texto: 'Ushiro', cat: 'Posición (delante/detrás)' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la dirección', instruccion: 'Elige la palabra correcta.', banco: ['migi', 'massugu'], frases: [
        { texto: 'Indicas girar a la derecha: "___".', respuestas: ['migi'] },
        { texto: 'Indicas seguir todo recto: "___".', respuestas: ['massugu'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena unas indicaciones', instruccion: 'Pon los pasos en un orden lógico de indicaciones.', pasos: [
        'Massugu (sigue recto)', 'Migi (gira a la derecha)', 'Koko de tomete kudasai (para aquí)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no es una dirección.', preguntas: [
        { grupo: '¿Cuál de estas NO es una palabra de dirección?', explicacion: 'Takushii es "taxi", no una dirección.', opciones: [
          { texto: 'Migi', intruso: false }, { texto: 'Massugu', intruso: false }, { texto: 'Takushii', intruso: true }
        ]}
      ]}
    ]
  },

  'd9-pc-3': {
    contenido: `## Desarrollo
El vocabulario del autobús: dónde se espera y cómo se dice subir y bajar.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| バス停 | basu-tei | parada de autobús |
| 乗る | noru | subir (a un vehículo) |
| 降りる | oriru | bajar (de un vehículo) |

## 🧠 Truco para recordar
Noru y oriru son opuestos exactos — memorízalos siempre en pareja, como "subir/bajar" en español.

## 👁 confusión
Noru se usa para "subir a" cualquier vehículo (tren, autobús, taxi, avión), no solo autobuses — es un verbo mucho más general de lo que parece a primera vista.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada palabra con su significado', instruccion: 'Toca una palabra y luego su significado.', pares: [
        { a: 'バス停', b: 'Parada de autobús' }, { a: '乗る (noru)', b: 'Subir (a un vehículo)' }, { a: '降りる (oriru)', b: 'Bajar (de un vehículo)' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Noru solo se usa para autobuses.', esVerdadero: false },
        { texto: 'Oriru significa "bajar de un vehículo".', esVerdadero: true }
      ]},
      { tipo: 'clasifica', titulo: 'Subir o bajar', instruccion: 'Arrastra cada palabra a su grupo.', categorias: ['Subir', 'Bajar'], items: [
        { texto: 'Noru', cat: 'Subir' }, { texto: 'Oriru', cat: 'Bajar' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige la palabra correcta.', banco: ['basu-tei', 'noru'], frases: [
        { texto: 'Esperas el autobús en la: "___".', respuestas: ['basu-tei'] },
        { texto: 'Subes al autobús: "basu ni ___".', respuestas: ['noru'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena el trayecto en autobús', instruccion: 'Pon los pasos en orden.', pasos: [
        'Basu-tei (esperas en la parada)', 'Noru (subes)', 'Oriru (bajas en tu parada)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no tiene que ver con el autobús.', preguntas: [
        { grupo: '¿Cuál de estas NO tiene que ver con el autobús?', explicacion: 'Kaisatsu es del tren, no del autobús.', opciones: [
          { texto: 'Basu-tei', intruso: false }, { texto: 'Noru', intruso: false }, { texto: 'Kaisatsu', intruso: true }
        ]}
      ]}
    ]
  },

  'd9-fc-1': {
    contenido: `## Desarrollo
Comunicar tu destino al taxista, reutilizando el patrón "made onegaishimasu" que ya conoces del tren.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| ［lugar］までお願いします | [lugar] made onegaishimasu | hasta [lugar], por favor |

## 🧠 Truco para recordar
Es exactamente la misma plantilla que usaste para comprar billetes de tren — mismo patrón, distinto vehículo.

## 👁 confusión
Es recomendable enseñar el nombre del destino escrito (en el móvil o en una tarjeta del hotel) además de decirlo — la pronunciación de nombres de lugares poco comunes puede fallar.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: '［lugar］までお願いします', b: 'Hasta [lugar], por favor' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Es la misma plantilla que se usa para comprar billetes de tren.', esVerdadero: true },
        { texto: 'Enseñar el destino por escrito nunca ayuda.', esVerdadero: false }
      ]},
      { tipo: 'rellena', titulo: 'Completa la petición', instruccion: 'Elige la palabra correcta.', banco: ['made'], frases: [
        { texto: 'Vas hasta el hotel: "hoteru ___ onegaishimasu".', respuestas: ['made'] }
      ]},
      { tipo: 'clasifica', titulo: 'Se usa en taxi o solo en tren', instruccion: 'Arrastra cada situación a su grupo.', categorias: ['Sirve en taxi y en tren', 'Solo en tren'], items: [
        { texto: '[Lugar] made onegaishimasu', cat: 'Sirve en taxi y en tren' }, { texto: 'Nan-ban-sen desu ka', cat: 'Solo en tren' }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena el trayecto en taxi', instruccion: 'Pon los pasos en orden.', pasos: [
        'Takushii (subes)', '[Lugar] made onegaishimasu (dices el destino)', 'Koko de tomete kudasai (pides parar)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no tiene que ver con comunicar un destino.', preguntas: [
        { grupo: '¿Cuál de estas NO comunica un destino?', explicacion: 'Migi es una dirección puntual, no un destino final.', opciones: [
          { texto: '[Lugar] made onegaishimasu', intruso: false }, { texto: 'Migi', intruso: true }
        ]}
      ]}
    ]
  },

  'd9-fc-2': {
    contenido: `## Desarrollo
Guiar activamente con direcciones cuando el conductor no conoce bien la zona o necesitas ajustar la ruta.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| 右に曲がってください | migi ni magatte kudasai | gire a la derecha, por favor |
| 左に曲がってください | hidari ni magatte kudasai | gire a la izquierda, por favor |

## 🧠 Truco para recordar
"[Dirección] ni magatte kudasai" es la plantilla — cambia solo migi/hidari según lo que necesites.

## 👁 confusión
Magatte kudasai (gire) es distinto de massugu (siga recto) — no los mezcles si estás dando indicaciones en directo, la confusión puede hacer que os perdáis.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: '右に曲がってください', b: 'Gire a la derecha, por favor' }, { a: '左に曲がってください', b: 'Gire a la izquierda, por favor' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Magatte kudasai significa "gire, por favor".', esVerdadero: true },
        { texto: 'Magatte kudasai y massugu significan lo mismo.', esVerdadero: false }
      ]},
      { tipo: 'rellena', titulo: 'Completa la indicación', instruccion: 'Elige la palabra correcta.', banco: ['migi', 'hidari'], frases: [
        { texto: 'Indicas girar a la derecha: "___ ni magatte kudasai".', respuestas: ['migi'] },
        { texto: 'Indicas girar a la izquierda: "___ ni magatte kudasai".', respuestas: ['hidari'] }
      ]},
      { tipo: 'clasifica', titulo: 'Girar o seguir recto', instruccion: 'Arrastra cada frase a su grupo.', categorias: ['Pide girar', 'Pide seguir recto'], items: [
        { texto: 'Migi ni magatte kudasai', cat: 'Pide girar' }, { texto: 'Massugu', cat: 'Pide seguir recto' }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena las indicaciones', instruccion: 'Pon los pasos en un trayecto lógico.', pasos: [
        'Massugu (recto un tramo)', 'Migi ni magatte kudasai (giras a la derecha)', 'Koko de tomete kudasai (paras)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no es una indicación de giro.', preguntas: [
        { grupo: '¿Cuál de estas NO es una indicación de giro?', explicacion: 'Basu-tei es un lugar, no una indicación de giro.', opciones: [
          { texto: 'Migi ni magatte kudasai', intruso: false }, { texto: 'Hidari ni magatte kudasai', intruso: false }, { texto: 'Basu-tei', intruso: true }
        ]}
      ]}
    ]
  },

  'd9-fc-3': {
    contenido: `## Desarrollo
Antes de subir a un autobús desconocido, conviene confirmar que va a tu destino — los mapas de rutas no siempre están claros para un turista.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| このバスは［lugar］に行きますか？ | kono basu wa [lugar] ni ikimasu ka? | ¿este autobús va a [lugar]? |

## 🧠 Truco para recordar
"Kono [vehículo] wa [lugar] ni ikimasu ka" es una plantilla que también funciona con trenes: "kono densha wa..." — muy reutilizable.

## 👁 confusión
Muchas rutas de autobús tienen variantes (expreso, todas las paradas) bajo el mismo número — confirmar el destino final es más fiable que fiarte solo del número de línea.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: 'このバスは［lugar］に行きますか？', b: '¿Este autobús va a [lugar]?' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Esta plantilla también funciona con "kono densha" (este tren).', esVerdadero: true },
        { texto: 'El número de línea de autobús siempre garantiza la misma ruta exacta.', esVerdadero: false }
      ]},
      { tipo: 'rellena', titulo: 'Completa la pregunta', instruccion: 'Elige la palabra correcta.', banco: ['kono basu', 'ikimasu'], frases: [
        { texto: 'Preguntas si el autobús que tienes delante va a tu destino: "___ wa [lugar] ni ikimasu ka".', respuestas: ['kono basu'] }
      ]},
      { tipo: 'clasifica', titulo: 'Antes o durante el trayecto', instruccion: 'Arrastra cada acción a su momento.', categorias: ['Antes de subir', 'Durante el trayecto'], items: [
        { texto: 'Kono basu wa [lugar] ni ikimasu ka', cat: 'Antes de subir' }, { texto: 'Koko de tomete kudasai', cat: 'Durante el trayecto' }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena el trayecto en autobús', instruccion: 'Pon los pasos en orden.', pasos: [
        'Basu-tei (esperas en la parada)', 'Kono basu wa [lugar] ni ikimasu ka (confirmas destino)', 'Noru (subes)', 'Oriru (bajas)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no tiene que ver con confirmar una ruta.', preguntas: [
        { grupo: '¿Cuál de estas NO tiene que ver con confirmar si un vehículo va a tu destino?', explicacion: 'Ikura desu ka pregunta precio, no destino.', opciones: [
          { texto: 'Kono basu wa [lugar] ni ikimasu ka', intruso: false }, { texto: 'Ikura desu ka', intruso: true }
        ]}
      ]}
    ]
  },

  'd9-co-1': {
    contenido: `## Desarrollo
Un detalle que sorprende a muchos turistas: las puertas traseras de los taxis japoneses se abren y cierran solas.

## ✅ Lo esencial

| Dato | Detalle |
|---|---|
| Puertas automáticas | El conductor las controla desde su asiento, no tú |
| Error típico | Intentar abrir o cerrar la puerta manualmente |
| Otros detalles | Asientos con funda de encaje blanco, conductores con guantes y uniforme |

## 🧠 Truco para recordar
Espera siempre a que la puerta se abra sola antes de moverte hacia ella — si la empujas mientras se abre automáticamente, puedes forzarla.

## 👁 confusión
Esto aplica solo a la puerta trasera (por donde entra el pasajero) — la puerta del conductor funciona de forma normal, manual.`,
    juegos: [
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'La puerta trasera del taxi se abre y cierra automáticamente.', esVerdadero: true },
        { texto: 'Debes abrir tú mismo la puerta trasera del taxi.', esVerdadero: false }
      ]},
      { tipo: 'conecta', titulo: 'Conecta cada detalle con su descripción', instruccion: 'Toca un detalle y luego su descripción.', pares: [
        { a: 'Puerta automática', b: 'La controla el conductor' }, { a: 'Asientos con funda blanca', b: 'Detalle estético habitual' }
      ]},
      { tipo: 'clasifica', titulo: 'Correcto o error típico', instruccion: 'Arrastra cada comportamiento a su grupo.', categorias: ['Comportamiento correcto', 'Error típico de turistas'], items: [
        { texto: 'Esperar a que la puerta se abra sola', cat: 'Comportamiento correcto' }, { texto: 'Intentar abrir la puerta trasera tú mismo', cat: 'Error típico de turistas' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige la palabra correcta.', banco: ['automáticamente'], frases: [
        { texto: 'La puerta trasera del taxi se abre y cierra: "___".', respuestas: ['automáticamente'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la subida al taxi', instruccion: 'Pon los pasos en orden.', pasos: [
        'El taxi se detiene', 'Esperas a que la puerta se abra sola', 'Subes'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que NO es correcta sobre los taxis japoneses.', preguntas: [
        { grupo: '¿Cuál de estas afirmaciones sobre taxis japoneses es incorrecta?', explicacion: 'La puerta trasera NO se abre manualmente, es automática.', opciones: [
          { texto: 'La puerta trasera es automática', intruso: false }, { texto: 'Los conductores suelen llevar guantes', intruso: false }, { texto: 'Debes abrir la puerta trasera manualmente', intruso: true }
        ]}
      ]}
    ]
  },

  'd9-co-2': {
    contenido: `## Desarrollo
En muchas ciudades japonesas fuera de Tokio, el sistema de autobús funciona al revés de lo que esperarías: se sube por detrás y se paga al bajar por delante.

## ✅ Lo esencial

| Dato | Detalle |
|---|---|
| Subida | Por la puerta trasera, sin pagar todavía |
| Pago | Al bajar, por la puerta delantera, junto al conductor |
| Cómo se calcula | A veces según distancia recorrida, con un panel que muestra el importe |

## 🧠 Truco para recordar
Recuerda la regla simple: "entras por detrás, pagas y sales por delante" — justo lo contrario de muchos sistemas de autobús urbano occidentales.

## 👁 confusión
Este sistema no es universal en todo Japón — en Tokio y otras grandes ciudades, muchos autobuses funcionan con tarifa plana y se paga al subir por delante. Confirma el sistema local si tienes dudas.`,
    juegos: [
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'En muchas ciudades se sube por detrás y se paga al bajar.', esVerdadero: true },
        { texto: 'Este sistema es exactamente igual en todo Japón sin excepción.', esVerdadero: false }
      ]},
      { tipo: 'conecta', titulo: 'Conecta cada acción con su puerta', instruccion: 'Toca una acción y luego su puerta.', pares: [
        { a: 'Subir', b: 'Puerta trasera' }, { a: 'Pagar y bajar', b: 'Puerta delantera' }
      ]},
      { tipo: 'clasifica', titulo: 'Al subir o al bajar', instruccion: 'Arrastra cada acción a su momento.', categorias: ['Al subir', 'Al bajar'], items: [
        { texto: 'Entrar por detrás', cat: 'Al subir' }, { texto: 'Pagar', cat: 'Al bajar' }, { texto: 'Salir por delante', cat: 'Al bajar' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige la palabra correcta.', banco: ['detrás', 'delante'], frases: [
        { texto: 'En muchos autobuses japoneses se sube por: "___".', respuestas: ['detrás'] },
        { texto: 'Se paga y se baja por: "___".', respuestas: ['delante'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena el proceso', instruccion: 'Pon los pasos en orden.', pasos: [
        'Subes por la puerta trasera', 'Viajas sin haber pagado aún', 'Pagas al bajar por delante'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no es correcta sobre este sistema.', preguntas: [
        { grupo: '¿Cuál de estas es incorrecta sobre el sistema de autobús descrito?', explicacion: 'Este sistema no es igual en toda Japón, varía por ciudad.', opciones: [
          { texto: 'Se sube por detrás', intruso: false }, { texto: 'Se paga al bajar', intruso: false }, { texto: 'Es exactamente igual en todo Japón', intruso: true }
        ]}
      ]}
    ]
  },

  'd9-co-3': {
    contenido: `## Desarrollo
Los taxis japoneses tienen fama merecida de limpieza, cuidado y profesionalidad — un nivel de servicio que sorprende a quien viene de otros países.

## ✅ Lo esencial

| Dato | Detalle |
|---|---|
| Limpieza | Interiores impecables, casi sin excepción |
| Uniforme del conductor | Traje formal, gorra y guantes blancos son habituales |
| Trato | Muy educado, sin necesidad ni costumbre de dar propina |

## 🧠 Truco para recordar
Si el conductor lleva guantes blancos y traje, no es un taxi de "categoría especial" — es simplemente el estándar del sector en Japón.

## 👁 confusión
No intentes dar propina al taxista pensando que es un gesto amable — igual que en restaurantes, se puede rechazar o generar una situación incómoda.`,
    juegos: [
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Es habitual que los taxistas japoneses lleven guantes blancos.', esVerdadero: true },
        { texto: 'Dar propina al taxista es una costumbre esperada.', esVerdadero: false }
      ]},
      { tipo: 'conecta', titulo: 'Conecta cada detalle con su descripción', instruccion: 'Toca un detalle y luego su descripción.', pares: [
        { a: 'Interior del taxi', b: 'Muy limpio y cuidado' }, { a: 'Uniforme del conductor', b: 'Traje, gorra, guantes blancos' }
      ]},
      { tipo: 'clasifica', titulo: 'Típico o atípico', instruccion: 'Arrastra cada idea a su grupo.', categorias: ['Típico en Japón', 'No es costumbre'], items: [
        { texto: 'Guantes blancos del conductor', cat: 'Típico en Japón' }, { texto: 'Dar propina', cat: 'No es costumbre' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige la palabra correcta.', banco: ['propina', 'limpieza'], frases: [
        { texto: 'No es necesario dar "___" al taxista.', respuestas: ['propina'] },
        { texto: 'Los taxis japoneses destacan por su: "___".', respuestas: ['limpieza'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la experiencia en taxi', instruccion: 'Pon los pasos en orden.', pasos: [
        'Subes a un taxi limpio y cuidado', 'El conductor, uniformado, te lleva con educación', 'Pagas el importe exacto, sin propina'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no es correcta sobre los taxis japoneses.', preguntas: [
        { grupo: '¿Cuál de estas afirmaciones es incorrecta?', explicacion: 'No es costumbre dar propina en taxis japoneses.', opciones: [
          { texto: 'Los interiores suelen estar muy cuidados', intruso: false }, { texto: 'Los conductores suelen vestir de forma formal', intruso: false }, { texto: 'Se espera que dejes propina', intruso: true }
        ]}
      ]}
    ]
  },

  // ══════════════ DÍA 10 · Alojamiento ══════════════

  'd10-pc-1': {
    contenido: `## Desarrollo
El vocabulario del check-in: hacer la entrada, tu reserva, la habitación y la llave.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| チェックイン | chekku-in | check-in |
| 予約 | yoyaku | reserva |
| 部屋 | heya | habitación |
| 鍵 | kagi | llave |

## 🧠 Truco para recordar
Chekku-in es un préstamo del inglés fácil de reconocer. Heya y kagi son palabras cortas — memorízalas como pareja: "la heya (habitación) necesita su kagi (llave)".

## 👁 confusión
Yoyaku (reserva) es la misma palabra que ya usaste en restaurantes — el concepto es idéntico, solo cambia el contexto (hotel en vez de restaurante).`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada palabra con su significado', instruccion: 'Toca una palabra y luego su significado.', pares: [
        { a: 'チェックイン', b: 'Check-in' }, { a: '予約', b: 'Reserva' }, { a: '部屋 (heya)', b: 'Habitación' }, { a: '鍵 (kagi)', b: 'Llave' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Yoyaku significa "reserva", igual que en restaurantes.', esVerdadero: true },
        { texto: 'Kagi significa "habitación".', esVerdadero: false }
      ]},
      { tipo: 'clasifica', titulo: 'Objeto o proceso', instruccion: 'Arrastra cada palabra a su grupo.', categorias: ['Es un objeto', 'Es un proceso/concepto'], items: [
        { texto: 'Kagi', cat: 'Es un objeto' }, { texto: 'Heya', cat: 'Es un objeto' }, { texto: 'Chekku-in', cat: 'Es un proceso/concepto' }, { texto: 'Yoyaku', cat: 'Es un proceso/concepto' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige la palabra correcta.', banco: ['kagi', 'heya'], frases: [
        { texto: 'Necesitas la "___" para entrar a tu "___".', respuestas: ['kagi'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la llegada al hotel', instruccion: 'Pon los pasos en orden.', pasos: [
        'Chekku-in (haces el registro)', 'Yoyaku (confirmas tu reserva)', 'Kagi (te dan la llave)', 'Heya (vas a tu habitación)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no tiene que ver con el alojamiento.', preguntas: [
        { grupo: '¿Cuál de estas NO tiene que ver con el hotel?', explicacion: 'Basu-tei es la parada de autobús.', opciones: [
          { texto: 'Chekku-in', intruso: false }, { texto: 'Heya', intruso: false }, { texto: 'Basu-tei', intruso: true }
        ]}
      ]}
    ]
  },

  'd10-pc-2': {
    contenido: `## Desarrollo
Los servicios que suelen preguntarse nada más llegar: desayuno, wifi, ascensor y toallas.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| 朝食 | choushoku | desayuno |
| Wi-Fi | waifai | wifi |
| エレベーター | erebeetaa | ascensor |
| タオル | taoru | toalla |

## 🧠 Truco para recordar
Waifai, erebeetaa y taoru son préstamos de palabras extranjeras (wifi, elevator, towel) — fáciles de reconocer una vez sabes cómo suenan "a la japonesa".

## 👁 confusión
No todos los alojamientos tienen ascensor, especialmente ryokan pequeños o edificios antiguos — pregunta si tienes equipaje pesado y hay varias plantas.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada palabra con su significado', instruccion: 'Toca una palabra y luego su significado.', pares: [
        { a: '朝食 (choushoku)', b: 'Desayuno' }, { a: 'Wi-Fi', b: 'Wifi' }, { a: 'エレベーター', b: 'Ascensor' }, { a: 'タオル', b: 'Toalla' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Erebeetaa viene de la palabra inglesa "elevator".', esVerdadero: true },
        { texto: 'Todos los alojamientos japoneses tienen ascensor.', esVerdadero: false }
      ]},
      { tipo: 'clasifica', titulo: 'Préstamo del inglés o palabra japonesa', instruccion: 'Arrastra cada palabra a su grupo.', categorias: ['Préstamo del inglés', 'Palabra japonesa original'], items: [
        { texto: 'Erebeetaa', cat: 'Préstamo del inglés' }, { texto: 'Taoru', cat: 'Préstamo del inglés' }, { texto: 'Choushoku', cat: 'Palabra japonesa original' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige la palabra correcta.', banco: ['choushoku', 'taoru'], frases: [
        { texto: 'La comida de la mañana es el: "___".', respuestas: ['choushoku'] },
        { texto: 'Necesitas secarte, pides una: "___".', respuestas: ['taoru'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena las preguntas típicas al llegar', instruccion: 'Pon los pasos en un orden lógico.', pasos: [
        'Wifi wa arimasu ka (preguntas por el wifi)', 'Choushoku wa nanji kara desu ka (preguntas por el desayuno)', 'Erebeetaa wa doko desu ka (buscas el ascensor)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no es un servicio de hotel.', preguntas: [
        { grupo: '¿Cuál de estas NO es un servicio típico de hotel?', explicacion: 'Kippu-uriba es la taquilla de tren, no un servicio de hotel.', opciones: [
          { texto: 'Choushoku', intruso: false }, { texto: 'Taoru', intruso: false }, { texto: 'Kippu-uriba', intruso: true }
        ]}
      ]}
    ]
  },

  'd10-pc-3': {
    contenido: `## Desarrollo
El otro extremo de la estancia: dejar el equipaje si llegas antes de hora, y saber la hora exacta del check-out.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| チェックアウト | chekku-auto | check-out |
| 荷物 | nimotsu | equipaje |
| 預ける | azukeru | dejar en depósito |

## 🧠 Truco para recordar
Azukeru (dejar en depósito/confiar algo a alguien) es un verbo útil más allá del equipaje — se usa también para dejar objetos de valor en consigna.

## 👁 confusión
El check-out suele ser bastante más temprano que en muchos países (a menudo las 10h) — no lo confundas con la hora de salida del vuelo o del tren, planifica con margen.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada palabra con su significado', instruccion: 'Toca una palabra y luego su significado.', pares: [
        { a: 'チェックアウト', b: 'Check-out' }, { a: '荷物 (nimotsu)', b: 'Equipaje' }, { a: '預ける (azukeru)', b: 'Dejar en depósito' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'El check-out suele ser más temprano que en muchos países occidentales.', esVerdadero: true },
        { texto: 'Azukeru significa "hacer las maletas".', esVerdadero: false }
      ]},
      { tipo: 'clasifica', titulo: 'Objeto o acción', instruccion: 'Arrastra cada palabra a su grupo.', categorias: ['Es un objeto', 'Es una acción'], items: [
        { texto: 'Nimotsu', cat: 'Es un objeto' }, { texto: 'Azukeru', cat: 'Es una acción' }, { texto: 'Chekku-auto', cat: 'Es una acción' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige la palabra correcta.', banco: ['nimotsu', 'azukeru'], frases: [
        { texto: 'Tus maletas son tu: "___".', respuestas: ['nimotsu'] },
        { texto: 'Quieres dejarlas en depósito: "___".', respuestas: ['azukeru'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la salida del hotel', instruccion: 'Pon los pasos en orden.', pasos: [
        'Chekku-auto wa nanji desu ka (preguntas la hora límite)', 'Nimotsu o azukete mo ii desu ka (pides dejar el equipaje si hace falta)', 'Chekku-auto (haces el check-out)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no tiene que ver con la salida del hotel.', preguntas: [
        { grupo: '¿Cuál de estas NO tiene que ver con salir del hotel?', explicacion: 'Choushoku es sobre el desayuno, no sobre la salida.', opciones: [
          { texto: 'Chekku-auto', intruso: false }, { texto: 'Nimotsu', intruso: false }, { texto: 'Choushoku', intruso: true }
        ]}
      ]}
    ]
  },

  'd10-fc-1': {
    contenido: `## Desarrollo
La frase exacta para hacer el check-in al llegar al mostrador, confirmando tu reserva.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| チェックインお願いします | chekku-in onegaishimasu | check-in, por favor |
| 予約しています | yoyaku shite imasu | tengo una reserva |

## 🧠 Truco para recordar
Combina las dos frases en orden: primero pides hacer el check-in, luego confirmas que tienes reserva — así el personal puede buscarte más rápido en el sistema.

## 👁 confusión
Si reservaste con una app o web extranjera, lleva el nombre exacto de la reserva (puede que en katakana suene distinto a como lo escribes tú) — puede ayudar a evitar confusiones.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: 'チェックインお願いします', b: 'Check-in, por favor' }, { a: '予約しています', b: 'Tengo una reserva' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Conviene llevar el nombre exacto de la reserva.', esVerdadero: true },
        { texto: 'Yoyaku shite imasu significa "no tengo reserva".', esVerdadero: false }
      ]},
      { tipo: 'rellena', titulo: 'Completa la situación', instruccion: 'Elige la frase correcta.', banco: ['chekku-in onegaishimasu', 'yoyaku shite imasu'], frases: [
        { texto: 'Llegas al mostrador del hotel: "___".', respuestas: ['chekku-in onegaishimasu'] },
        { texto: 'Confirmas que ya reservaste: "___".', respuestas: ['yoyaku shite imasu'] }
      ]},
      { tipo: 'clasifica', titulo: 'Primera frase o confirmación', instruccion: 'Arrastra cada frase a su momento.', categorias: ['Primera frase al llegar', 'Confirmación de reserva'], items: [
        { texto: 'Chekku-in onegaishimasu', cat: 'Primera frase al llegar' }, { texto: 'Yoyaku shite imasu', cat: 'Confirmación de reserva' }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena el check-in', instruccion: 'Pon los pasos en orden.', pasos: [
        'Chekku-in onegaishimasu (pides el check-in)', 'Yoyaku shite imasu (confirmas la reserva)', 'Kagi o morau (recibes la llave)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no tiene que ver con el check-in.', preguntas: [
        { grupo: '¿Cuál de estas NO es parte del check-in?', explicacion: 'Chekku-auto es del final de la estancia, no del check-in.', opciones: [
          { texto: 'Chekku-in onegaishimasu', intruso: false }, { texto: 'Yoyaku shite imasu', intruso: false }, { texto: 'Chekku-auto', intruso: true }
        ]}
      ]}
    ]
  },

  'd10-fc-2': {
    contenido: `## Desarrollo
Preguntar por los servicios del hotel usando la plantilla "wa arimasu ka" que ya conoces, adaptada a wifi, desayuno y ascensor.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| Wi-Fiはありますか？ | wifi wa arimasu ka? | ¿hay wifi? |
| 朝食は何時からですか？ | choushoku wa nanji kara desu ka? | ¿desde qué hora es el desayuno? |
| エレベーターはどこですか？ | erebeetaa wa doko desu ka? | ¿dónde está el ascensor? |

## 🧠 Truco para recordar
Cada pregunta usa una plantilla distinta que ya conoces: "wa arimasu ka" (¿hay...?), "nanji kara desu ka" (¿desde qué hora...?), "wa doko desu ka" (¿dónde está...?) — combínalas libremente con otros sustantivos.

## 👁 confusión
Choushoku wa nanji kara desu ka pregunta la hora de INICIO — si también quieres saber cuándo termina, necesitas preguntar aparte "nanji made desu ka" (¿hasta qué hora?).`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada pregunta con su plantilla', instruccion: 'Toca una pregunta y luego su plantilla.', pares: [
        { a: 'Wifi wa arimasu ka', b: '¿Hay...?' }, { a: 'Choushoku wa nanji kara desu ka', b: '¿Desde qué hora...?' }, { a: 'Erebeetaa wa doko desu ka', b: '¿Dónde está...?' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: '"Nanji kara desu ka" pregunta la hora de inicio.', esVerdadero: true },
        { texto: '"Nanji kara" y "nanji made" preguntan exactamente lo mismo.', esVerdadero: false }
      ]},
      { tipo: 'rellena', titulo: 'Completa la pregunta', instruccion: 'Elige la palabra correcta.', banco: ['arimasu ka', 'doko desu ka'], frases: [
        { texto: 'Preguntas si hay wifi: "wifi wa ___".', respuestas: ['arimasu ka'] },
        { texto: 'Preguntas dónde está el ascensor: "erebeetaa wa ___".', respuestas: ['doko desu ka'] }
      ]},
      { tipo: 'clasifica', titulo: 'Existencia, hora o ubicación', instruccion: 'Arrastra cada pregunta a su tipo.', categorias: ['Pregunta existencia', 'Pregunta ubicación'], items: [
        { texto: 'Wifi wa arimasu ka', cat: 'Pregunta existencia' }, { texto: 'Erebeetaa wa doko desu ka', cat: 'Pregunta ubicación' }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena las preguntas típicas', instruccion: 'Pon los pasos en un orden lógico al llegar.', pasos: [
        'Wifi wa arimasu ka', 'Choushoku wa nanji kara desu ka', 'Erebeetaa wa doko desu ka'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no usa ninguna de estas plantillas.', preguntas: [
        { grupo: '¿Cuál de estas NO es una pregunta sobre servicios del hotel?', explicacion: 'Osusume wa nan desu ka es de restaurantes.', opciones: [
          { texto: 'Wifi wa arimasu ka', intruso: false }, { texto: 'Erebeetaa wa doko desu ka', intruso: false }, { texto: 'Osusume wa nan desu ka', intruso: true }
        ]}
      ]}
    ]
  },

  'd10-fc-3': {
    contenido: `## Desarrollo
Gestionar el equipaje si llegas antes de la hora del check-in o te vas después del check-out.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| 荷物を預けてもいいですか？ | nimotsu o azukete mo ii desu ka? | ¿puedo dejar el equipaje? |
| チェックアウトは何時ですか？ | chekku-auto wa nanji desu ka? | ¿a qué hora es el check-out? |

## 🧠 Truco para recordar
Reutilizas otra vez "te mo ii desu ka" (¿puedo...?) — la misma plantilla que ya usaste para probarte ropa o hacer fotos, ahora con el equipaje.

## 👁 confusión
Que te dejen guardar el equipaje no significa que puedas acceder a tu habitación antes de hora — son dos cosas distintas, confírmalas por separado si necesitas ambas.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: '荷物を預けてもいいですか？', b: '¿Puedo dejar el equipaje?' }, { a: 'チェックアウトは何時ですか？', b: '¿A qué hora es el check-out?' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Dejar el equipaje en depósito garantiza acceso anticipado a la habitación.', esVerdadero: false },
        { texto: '"Te mo ii desu ka" es la misma plantilla usada para pedir permiso en otros contextos.', esVerdadero: true }
      ]},
      { tipo: 'rellena', titulo: 'Completa la situación', instruccion: 'Elige la frase correcta.', banco: ['nimotsu o azukete mo ii desu ka', 'chekku-auto wa nanji desu ka'], frases: [
        { texto: 'Llegas pronto con las maletas: "___".', respuestas: ['nimotsu o azukete mo ii desu ka'] },
        { texto: 'Quieres saber la hora límite para irte: "___".', respuestas: ['chekku-auto wa nanji desu ka'] }
      ]},
      { tipo: 'clasifica', titulo: 'Llegada temprana o salida', instruccion: 'Arrastra cada frase a su momento.', categorias: ['Llegada temprana', 'Antes de salir'], items: [
        { texto: 'Nimotsu o azukete mo ii desu ka', cat: 'Llegada temprana' }, { texto: 'Chekku-auto wa nanji desu ka', cat: 'Antes de salir' }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la estancia completa', instruccion: 'Pon los pasos en orden.', pasos: [
        'Nimotsu o azukete mo ii desu ka (si llegas pronto)', 'Chekku-in onegaishimasu (haces el check-in)', 'Chekku-auto wa nanji desu ka (confirmas la hora de salida)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no tiene que ver con el equipaje o el check-out.', preguntas: [
        { grupo: '¿Cuál de estas NO tiene que ver con equipaje o salida?', explicacion: 'Wifi wa arimasu ka es sobre servicios, no sobre equipaje o salida.', opciones: [
          { texto: 'Nimotsu o azukete mo ii desu ka', intruso: false }, { texto: 'Chekku-auto wa nanji desu ka', intruso: false }, { texto: 'Wifi wa arimasu ka', intruso: true }
        ]}
      ]}
    ]
  },

  'd10-co-1': {
    contenido: `## Desarrollo
Un ryokan (alojamiento tradicional japonés) funciona con normas bastante distintas a un hotel occidental — empezando por el propio suelo.

## ✅ Lo esencial

| Dato | Detalle |
|---|---|
| Genkan | Zona de entrada donde te quitas los zapatos, obligatorio |
| Futon | Cama tradicional que se extiende sobre el tatami por la noche |
| Yukata | Bata ligera que suele proporcionar el propio ryokan para andar por las instalaciones |

## 🧠 Truco para recordar
Piensa en el ryokan como una experiencia completa, no solo un sitio para dormir — genkan, tatami, futon y yukata forman parte del mismo paquete cultural.

## 👁 confusión
No confundas el yukata del ryokan con un pijama cualquiera — es aceptable e incluso habitual pasear por el edificio (y a veces por la calle cercana en zonas de aguas termales) vestido así.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada palabra con su significado', instruccion: 'Toca una palabra y luego su significado.', pares: [
        { a: 'Genkan', b: 'Zona de entrada, sin zapatos' }, { a: 'Futon', b: 'Cama tradicional en el suelo' }, { a: 'Yukata', b: 'Bata ligera del ryokan' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'En el genkan es obligatorio quitarse los zapatos.', esVerdadero: true },
        { texto: 'El yukata es ropa que debes traer tú mismo.', esVerdadero: false }
      ]},
      { tipo: 'clasifica', titulo: 'Lugar o prenda', instruccion: 'Arrastra cada palabra a su grupo.', categorias: ['Es un lugar', 'Es una prenda'], items: [
        { texto: 'Genkan', cat: 'Es un lugar' }, { texto: 'Yukata', cat: 'Es una prenda' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige la palabra correcta.', banco: ['genkan', 'futon'], frases: [
        { texto: 'Te quitas los zapatos en el: "___".', respuestas: ['genkan'] },
        { texto: 'Duermes en un: "___" sobre el tatami.', respuestas: ['futon'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la llegada a un ryokan', instruccion: 'Pon los pasos en orden.', pasos: [
        'Genkan (te quitas los zapatos)', 'Te ponen un yukata', 'Por la noche, preparan el futon'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no tiene que ver con el ryokan tradicional.', preguntas: [
        { grupo: '¿Cuál de estas NO es un elemento típico de un ryokan?', explicacion: 'Erebeetaa (ascensor) no es un elemento distintivo del ryokan.', opciones: [
          { texto: 'Genkan', intruso: false }, { texto: 'Futon', intruso: false }, { texto: 'Erebeetaa', intruso: true }
        ]}
      ]}
    ]
  },

  'd10-co-2': {
    contenido: `## Desarrollo
Los horarios de check-in y check-out en Japón pueden diferir de lo que estás acostumbrado, sobre todo en ryokan.

## ✅ Lo esencial

| Dato | Detalle |
|---|---|
| Check-in típico | Suele empezar sobre las 15:00, no antes |
| Check-out típico | Suele ser bastante temprano, sobre las 10:00 |
| Ryokan con cena incluida | El horario de cena suele ser fijo y temprano (18:00-19:00) |

## 🧠 Truco para recordar
Piensa en "15 y 10" como los horarios de referencia por defecto — luego confirma siempre con tu alojamiento concreto, pero es un buen punto de partida mental.

## 👁 confusión
Un ryokan con cena incluida (kaiseki) puede tener horarios muy fijos para la comida — llegar tarde puede significar perderte parte de la experiencia, así que planifica tu día en consecuencia.`,
    juegos: [
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'El check-in suele empezar sobre las 15:00.', esVerdadero: true },
        { texto: 'El check-out suele ser sobre las 14:00, muy tarde.', esVerdadero: false }
      ]},
      { tipo: 'conecta', titulo: 'Conecta cada horario con su momento', instruccion: 'Toca un horario y luego su momento.', pares: [
        { a: '15:00', b: 'Check-in típico' }, { a: '10:00', b: 'Check-out típico' }
      ]},
      { tipo: 'clasifica', titulo: 'Check-in o check-out', instruccion: 'Arrastra cada hora aproximada a su momento.', categorias: ['Check-in', 'Check-out'], items: [
        { texto: '15:00', cat: 'Check-in' }, { texto: '10:00', cat: 'Check-out' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige la palabra correcta.', banco: ['temprano', 'tarde'], frases: [
        { texto: 'El check-out en Japón suele ser más "___" de lo esperado.', respuestas: ['temprano'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena un día con cena en ryokan', instruccion: 'Pon los pasos en orden.', pasos: [
        'Chekku-in sobre las 15:00', 'Cena kaiseki sobre las 18:00-19:00', 'Chekku-auto sobre las 10:00 del día siguiente'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no es un horario típico de ryokan.', preguntas: [
        { grupo: '¿Cuál de estos NO es un horario aproximado típico?', explicacion: 'Un check-in a medianoche no es un horario típico de ryokan.', opciones: [
          { texto: 'Check-in a las 15:00', intruso: false }, { texto: 'Check-out a las 10:00', intruso: false }, { texto: 'Check-in a medianoche', intruso: true }
        ]}
      ]}
    ]
  },

  'd10-co-3': {
    contenido: `## Desarrollo
Muchos ryokan y hoteles con onsen (aguas termales) tienen baños comunales con normas estrictas que conviene conocer antes de sorprenderte in situ.

## ✅ Lo esencial

| Norma | Detalle |
|---|---|
| Desnudez | Se entra sin ropa ni bañador, es lo normal |
| Lavado previo | Te duchas y lavas por completo antes de entrar al agua compartida |
| Tatuajes | Algunos onsen todavía restringen la entrada a personas con tatuajes grandes |

## 🧠 Truco para recordar
Piensa en el onsen como una zona de higiene compartida antes que un "spa" al estilo occidental — el orden es siempre lavarse primero, sumergirse después.

## 👁 confusión
Si tienes tatuajes y te preocupa, muchos alojamientos modernos y orientados a turistas ya son más flexibles — conviene consultarlo antes de reservar si es tu caso.`,
    juegos: [
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'En el onsen se entra al agua sin ropa ni bañador.', esVerdadero: true },
        { texto: 'Se entra directamente al agua sin ducharse antes.', esVerdadero: false }
      ]},
      { tipo: 'conecta', titulo: 'Conecta cada norma con su detalle', instruccion: 'Toca una norma y luego su detalle.', pares: [
        { a: 'Desnudez', b: 'Sin ropa ni bañador' }, { a: 'Lavado previo', b: 'Te duchas antes de entrar' }
      ]},
      { tipo: 'clasifica', titulo: 'Antes o durante el baño', instruccion: 'Arrastra cada acción a su momento.', categorias: ['Antes de entrar al agua', 'Ya en el agua'], items: [
        { texto: 'Ducharte', cat: 'Antes de entrar al agua' }, { texto: 'Relajarte en el onsen', cat: 'Ya en el agua' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige la palabra correcta.', banco: ['lavarte', 'tatuajes'], frases: [
        { texto: 'Antes de entrar al onsen debes: "___" por completo.', respuestas: ['lavarte'] },
        { texto: 'Algunos onsen restringen la entrada a personas con: "___" grandes.', respuestas: ['tatuajes'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena el proceso del onsen', instruccion: 'Pon los pasos en orden.', pasos: [
        'Te desnudas en el vestuario', 'Te duchas y lavas por completo', 'Entras al agua compartida'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no es correcta sobre el onsen.', preguntas: [
        { grupo: '¿Cuál de estas afirmaciones sobre el onsen es incorrecta?', explicacion: 'No se entra con bañador, es una de las normas más estrictas.', opciones: [
          { texto: 'Se entra sin ropa', intruso: false }, { texto: 'Te duchas antes de entrar', intruso: false }, { texto: 'Se entra con bañador puesto', intruso: true }
        ]}
      ]}
    ]
  },

  // ══════════════ DÍA 11 · Compras ══════════════

  'd11-pc-1': {
    contenido: `## Desarrollo
El vocabulario de precio y talla, la base de cualquier compra.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| いくら | ikura | cuánto (precio) |
| サイズ | saizu | talla |
| 小さい / 大きい | chiisai / ookii | pequeño / grande |

## 🧠 Truco para recordar
Saizu es un préstamo directo de "size" en inglés. Chiisai/ookii son opuestos que conviene memorizar en pareja, como ya hiciste con otras palabras del curso.

## 👁 confusión
Las tallas de ropa japonesas (S, M, L) no siempre corresponden exactamente a las tallas occidentales — suelen ser más ajustadas, así que probarte antes de comprar es especialmente recomendable.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada palabra con su significado', instruccion: 'Toca una palabra y luego su significado.', pares: [
        { a: 'いくら', b: 'Cuánto (precio)' }, { a: 'サイズ', b: 'Talla' }, { a: '小さい', b: 'Pequeño' }, { a: '大きい', b: 'Grande' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Las tallas japonesas suelen ser más ajustadas que las occidentales.', esVerdadero: true },
        { texto: 'Ikura significa "talla".', esVerdadero: false }
      ]},
      { tipo: 'clasifica', titulo: 'Precio o tamaño', instruccion: 'Arrastra cada palabra a su grupo.', categorias: ['Sobre el precio', 'Sobre el tamaño'], items: [
        { texto: 'Ikura', cat: 'Sobre el precio' }, { texto: 'Saizu', cat: 'Sobre el tamaño' }, { texto: 'Chiisai', cat: 'Sobre el tamaño' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige la palabra correcta.', banco: ['ikura', 'saizu'], frases: [
        { texto: 'Preguntas el precio: "___ desu ka".', respuestas: ['ikura'] },
        { texto: 'Preguntas por la talla: "___ wa arimasu ka".', respuestas: ['saizu'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la compra', instruccion: 'Pon los pasos en orden.', pasos: [
        'Ikura desu ka (preguntas precio)', 'Saizu (preguntas talla)', 'Chiisai/ookii (ajustas si hace falta)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no tiene que ver con precio o talla.', preguntas: [
        { grupo: '¿Cuál de estas NO tiene que ver con precio ni talla?', explicacion: 'Genkin es sobre la forma de pago, no sobre precio ni talla.', opciones: [
          { texto: 'Ikura', intruso: false }, { texto: 'Saizu', intruso: false }, { texto: 'Genkin', intruso: true }
        ]}
      ]}
    ]
  },

  'd11-pc-2': {
    contenido: `## Desarrollo
Color y prueba: dos elementos clave antes de decidirte por una prenda.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| 色 | iro | color |
| 試着 | shichaku | probarse (ropa) |

## 🧠 Truco para recordar
Iro (color) aparece en muchas palabras compuestas — "nani-iro" (¿qué color?), "aka-iro" (rojo) — memorízala bien porque es una raíz muy productiva.

## 👁 confusión
Shichaku se refiere específicamente a probarse ropa — no confundas con "tameshi" (probar en general, como probar comida), son conceptos distintos con la misma idea de "probar".`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada palabra con su significado', instruccion: 'Toca una palabra y luego su significado.', pares: [
        { a: '色 (iro)', b: 'Color' }, { a: '試着 (shichaku)', b: 'Probarse ropa' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Shichaku se refiere específicamente a probarse ropa.', esVerdadero: true },
        { texto: 'Iro significa "talla".', esVerdadero: false }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige la palabra correcta.', banco: ['iro', 'shichaku'], frases: [
        { texto: 'Preguntas qué colores hay: "nani-___ ga arimasu ka".', respuestas: ['iro'] },
        { texto: 'Quieres probarte la prenda: "___ shite mo ii desu ka".', respuestas: ['shichaku'] }
      ]},
      { tipo: 'clasifica', titulo: 'Color o acción', instruccion: 'Arrastra cada palabra a su grupo.', categorias: ['Es un color/atributo', 'Es una acción'], items: [
        { texto: 'Iro', cat: 'Es un color/atributo' }, { texto: 'Shichaku', cat: 'Es una acción' }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la decisión de compra', instruccion: 'Pon los pasos en orden.', pasos: [
        'Nani-iro ga arimasu ka (preguntas los colores)', 'Shichaku shite mo ii desu ka (te lo pruebas)', 'Ki ni irimashita (decides que te gusta)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no tiene que ver con color o prueba.', preguntas: [
        { grupo: '¿Cuál de estas NO tiene que ver con color o probarte ropa?', explicacion: 'Reshiito o kudasai es sobre el recibo, no sobre color o prueba.', opciones: [
          { texto: 'Iro', intruso: false }, { texto: 'Shichaku', intruso: false }, { texto: 'Reshiito o kudasai', intruso: true }
        ]}
      ]}
    ]
  },

  'd11-pc-3': {
    contenido: `## Desarrollo
El vocabulario del pago: efectivo, tarjeta, bolsa y recibo, la parte final de cualquier compra.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| 現金 | genkin | efectivo |
| カード | kaado | tarjeta |
| 袋 | fukuro | bolsa |
| レシート | reshiito | recibo |

## 🧠 Truco para recordar
Kaado y reshiito son préstamos fáciles de reconocer ("card" y "receipt"). Genkin y fukuro son las dos palabras realmente nuevas de este bloque.

## 👁 confusión
En muchas tiendas japonesas ahora cobra un pequeño coste extra pedir bolsa de plástico (desde una reforma medioambiental) — no te sorprendas si te preguntan o cobran aparte por ella.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada palabra con su significado', instruccion: 'Toca una palabra y luego su significado.', pares: [
        { a: '現金 (genkin)', b: 'Efectivo' }, { a: 'カード', b: 'Tarjeta' }, { a: '袋 (fukuro)', b: 'Bolsa' }, { a: 'レシート', b: 'Recibo' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'En algunas tiendas la bolsa tiene un coste extra.', esVerdadero: true },
        { texto: 'Reshiito significa "efectivo".', esVerdadero: false }
      ]},
      { tipo: 'clasifica', titulo: 'Forma de pago o tras la compra', instruccion: 'Arrastra cada palabra a su grupo.', categorias: ['Forma de pago', 'Después de pagar'], items: [
        { texto: 'Genkin', cat: 'Forma de pago' }, { texto: 'Kaado', cat: 'Forma de pago' }, { texto: 'Fukuro', cat: 'Después de pagar' }, { texto: 'Reshiito', cat: 'Después de pagar' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige la palabra correcta.', banco: ['genkin', 'fukuro'], frases: [
        { texto: 'Pagas con dinero en mano: "___".', respuestas: ['genkin'] },
        { texto: 'Necesitas algo para llevar tus compras: "___".', respuestas: ['fukuro'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena el pago', instruccion: 'Pon los pasos en orden.', pasos: [
        'Genkin o kaado (eliges forma de pago)', 'Fukuro wa irimasu ka (te preguntan por la bolsa)', 'Reshiito o kudasai (pides el recibo)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no tiene que ver con el pago.', preguntas: [
        { grupo: '¿Cuál de estas NO tiene que ver con pagar?', explicacion: 'Shichaku es sobre probarte ropa, no sobre pagar.', opciones: [
          { texto: 'Genkin', intruso: false }, { texto: 'Kaado', intruso: false }, { texto: 'Shichaku', intruso: true }
        ]}
      ]}
    ]
  },

  'd11-fc-1': {
    contenido: `## Desarrollo
Combinar precio y talla en preguntas reales durante una compra.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| いくらですか？ | ikura desu ka? | ¿cuánto cuesta? |
| サイズはありますか？ | saizu wa arimasu ka? | ¿tiene esta talla? |

## 🧠 Truco para recordar
Ambas preguntas siguen plantillas que ya conoces: "desu ka" para precio, "wa arimasu ka" para disponibilidad — solo cambia el sustantivo central.

## 👁 confusión
Preguntar por una talla concreta (saizu wa arimasu ka) no garantiza que la tengan en el color que quieres — puede que tengas que combinar ambas preguntas.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: 'いくらですか？', b: '¿Cuánto cuesta?' }, { a: 'サイズはありますか？', b: '¿Tiene esta talla?' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Tener la talla no garantiza que la tengan en tu color favorito.', esVerdadero: true },
        { texto: 'Ikura desu ka pregunta por la talla.', esVerdadero: false }
      ]},
      { tipo: 'rellena', titulo: 'Completa la pregunta', instruccion: 'Elige la frase correcta.', banco: ['ikura desu ka', 'saizu wa arimasu ka'], frases: [
        { texto: 'No ves el precio en la etiqueta: "___".', respuestas: ['ikura desu ka'] },
        { texto: 'Quieres saber si tienen tu talla: "___".', respuestas: ['saizu wa arimasu ka'] }
      ]},
      { tipo: 'clasifica', titulo: 'Precio o disponibilidad', instruccion: 'Arrastra cada frase a su grupo.', categorias: ['Pregunta precio', 'Pregunta disponibilidad'], items: [
        { texto: 'Ikura desu ka', cat: 'Pregunta precio' }, { texto: 'Saizu wa arimasu ka', cat: 'Pregunta disponibilidad' }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la compra', instruccion: 'Pon los pasos en orden.', pasos: [
        'Ikura desu ka (preguntas precio)', 'Saizu wa arimasu ka (preguntas talla)', 'Shichaku shite mo ii desu ka (te lo pruebas)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no tiene que ver con precio o talla.', preguntas: [
        { grupo: '¿Cuál de estas NO tiene que ver con precio o talla?', explicacion: 'Fukuro wa irimasu ka es sobre la bolsa, no sobre precio o talla.', opciones: [
          { texto: 'Ikura desu ka', intruso: false }, { texto: 'Saizu wa arimasu ka', intruso: false }, { texto: 'Fukuro wa irimasu ka', intruso: true }
        ]}
      ]}
    ]
  },

  'd11-fc-2': {
    contenido: `## Desarrollo
Pedir probarte una prenda y preguntar por otros colores disponibles, combinando lo aprendido hoy.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| 試着してもいいですか？ | shichaku shite mo ii desu ka? | ¿puedo probármelo? |
| 他の色はありますか？ | hoka no iro wa arimasu ka? | ¿hay de otro color? |

## 🧠 Truco para recordar
Hoka no (otro/otros) es útil más allá de los colores — "hoka no saizu" (otra talla), "hoka no mise" (otra tienda) — una palabra muy reutilizable.

## 👁 confusión
No todas las tiendas tienen probador disponible, especialmente en tiendas pequeñas o de segunda mano — pregunta antes de dar por hecho que puedes probarte algo.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: '試着してもいいですか？', b: '¿Puedo probármelo?' }, { a: '他の色はありますか？', b: '¿Hay de otro color?' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Hoka no significa "otro/otros".', esVerdadero: true },
        { texto: 'Todas las tiendas tienen siempre probador disponible.', esVerdadero: false }
      ]},
      { tipo: 'rellena', titulo: 'Completa la petición', instruccion: 'Elige la frase correcta.', banco: ['shichaku shite mo ii desu ka', 'hoka no iro wa arimasu ka'], frases: [
        { texto: 'Quieres probarte la prenda: "___".', respuestas: ['shichaku shite mo ii desu ka'] },
        { texto: 'Te gusta pero no el color: "___".', respuestas: ['hoka no iro wa arimasu ka'] }
      ]},
      { tipo: 'clasifica', titulo: 'Pedir permiso o preguntar disponibilidad', instruccion: 'Arrastra cada frase a su grupo.', categorias: ['Pide permiso', 'Pregunta disponibilidad'], items: [
        { texto: 'Shichaku shite mo ii desu ka', cat: 'Pide permiso' }, { texto: 'Hoka no iro wa arimasu ka', cat: 'Pregunta disponibilidad' }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la decisión de compra', instruccion: 'Pon los pasos en orden.', pasos: [
        'Hoka no iro wa arimasu ka (preguntas por otros colores)', 'Shichaku shite mo ii desu ka (te lo pruebas)', 'Ki ni irimashita (decides que te gusta)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no tiene que ver con probarte o color.', preguntas: [
        { grupo: '¿Cuál de estas NO tiene que ver con probarte ropa o preguntar color?', explicacion: 'Genkin de haraemasu ka es sobre pagar, no sobre probarte ropa.', opciones: [
          { texto: 'Shichaku shite mo ii desu ka', intruso: false }, { texto: 'Hoka no iro wa arimasu ka', intruso: false }, { texto: 'Genkin de haraemasu ka', intruso: true }
        ]}
      ]}
    ]
  },

  'd11-fc-3': {
    contenido: `## Desarrollo
El cierre de la compra: elegir forma de pago, decidir sobre la bolsa, y pedir el recibo si lo necesitas.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| カードで払えますか？ | kaado de haraemasu ka? | ¿puedo pagar con tarjeta? |
| 袋は要りますか？ / 要らないです | fukuro wa irimasu ka? / iranai desu | ¿necesita bolsa? / no la necesito |
| レシートをください | reshiito o kudasai | el recibo, por favor |

## 🧠 Truco para recordar
Estas tres frases van casi siempre en el mismo orden en cualquier caja de Japón — memorízalas como una secuencia fija, no como frases sueltas.

## 👁 confusión
Iranai desu (no lo necesito) puede sonar un poco brusco solo — añadir "daijoubu desu" antes o después ("daijoubu desu, iranai desu") suaviza la respuesta.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: 'カードで払えますか？', b: '¿Puedo pagar con tarjeta?' }, { a: '袋は要りますか？', b: '¿Necesita bolsa?' }, { a: 'レシートをください', b: 'El recibo, por favor' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Añadir "daijoubu desu" suaviza una respuesta negativa.', esVerdadero: true },
        { texto: 'Reshiito o kudasai pregunta si necesitas bolsa.', esVerdadero: false }
      ]},
      { tipo: 'rellena', titulo: 'Completa la situación', instruccion: 'Elige la frase correcta.', banco: ['kaado de haraemasu ka', 'reshiito o kudasai'], frases: [
        { texto: 'Preguntas si aceptan tarjeta: "___".', respuestas: ['kaado de haraemasu ka'] },
        { texto: 'Necesitas el ticket: "___".', respuestas: ['reshiito o kudasai'] }
      ]},
      { tipo: 'clasifica', titulo: 'Pago, bolsa o recibo', instruccion: 'Arrastra cada frase a su grupo.', categorias: ['Sobre el pago', 'Sobre bolsa o recibo'], items: [
        { texto: 'Kaado de haraemasu ka', cat: 'Sobre el pago' }, { texto: 'Fukuro wa irimasu ka', cat: 'Sobre bolsa o recibo' }, { texto: 'Reshiito o kudasai', cat: 'Sobre bolsa o recibo' }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena el cierre de la compra', instruccion: 'Pon los pasos en orden.', pasos: [
        'Kaado de haraemasu ka (eliges pago)', 'Fukuro wa irimasu ka (te preguntan por la bolsa)', 'Reshiito o kudasai (pides el recibo)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no forma parte del cierre de la compra.', preguntas: [
        { grupo: '¿Cuál de estas NO forma parte de cerrar una compra?', explicacion: 'Shichaku shite mo ii desu ka es de antes de decidir comprar, no del cierre.', opciones: [
          { texto: 'Kaado de haraemasu ka', intruso: false }, { texto: 'Reshiito o kudasai', intruso: false }, { texto: 'Shichaku shite mo ii desu ka', intruso: true }
        ]}
      ]}
    ]
  },

  'd11-co-1': {
    contenido: `## Desarrollo
Regatear el precio, algo habitual en mercados de muchos países, no forma parte de la cultura de compra japonesa.

## ✅ Lo esencial

| Dato | Detalle |
|---|---|
| Precio fijo | El precio en la etiqueta es el precio final (más impuestos si aplica) |
| Regatear | No es una práctica aceptada ni esperada |
| Rebajas | Existen períodos de rebajas oficiales (seruzu), pero fuera de ahí el precio no se negocia |

## 🧠 Truco para recordar
Si vienes de un país donde regatear es normal, cambia el chip: en Japón, insistir en bajar el precio puede generar más incomodidad que ahorro.

## 👁 confusión
Esto no significa que no existan descuentos — simplemente no se consiguen negociando cara a cara, sino esperando a rebajas oficiales o usando cupones/promociones.`,
    juegos: [
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'El precio en la etiqueta es normalmente el precio final.', esVerdadero: true },
        { texto: 'Regatear el precio es una práctica bien vista en Japón.', esVerdadero: false }
      ]},
      { tipo: 'conecta', titulo: 'Conecta cada concepto con su descripción', instruccion: 'Toca un concepto y luego su descripción.', pares: [
        { a: 'Precio fijo', b: 'No se negocia' }, { a: 'Seruzu', b: 'Período oficial de rebajas' }
      ]},
      { tipo: 'clasifica', titulo: 'Aceptado o no aceptado', instruccion: 'Arrastra cada práctica a su grupo.', categorias: ['Práctica aceptada', 'Práctica no aceptada'], items: [
        { texto: 'Esperar a las rebajas oficiales', cat: 'Práctica aceptada' }, { texto: 'Regatear el precio', cat: 'Práctica no aceptada' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige la palabra correcta.', banco: ['fijo', 'regatear'], frases: [
        { texto: 'El precio en Japón suele ser: "___".', respuestas: ['fijo'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la idea', instruccion: 'Pon los pasos en orden lógico.', pasos: [
        'Ves el precio en la etiqueta', 'Sabes que es el precio final', 'No intentas negociarlo'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no es una forma real de ahorrar en Japón.', preguntas: [
        { grupo: '¿Cuál de estas NO es una forma habitual de conseguir mejor precio?', explicacion: 'Regatear en directo no es una práctica aceptada en Japón.', opciones: [
          { texto: 'Esperar a rebajas oficiales', intruso: false }, { texto: 'Usar cupones o promociones', intruso: false }, { texto: 'Regatear con el vendedor', intruso: true }
        ]}
      ]}
    ]
  },

  'd11-co-2': {
    contenido: `## Desarrollo
El sistema tax-free japonés te permite recuperar el impuesto al consumo en muchas compras si eres turista extranjero — con algunas condiciones que conviene conocer.

## ✅ Lo esencial

| Dato | Detalle |
|---|---|
| Requisito | Pasaporte físico en el momento de la compra (no una foto) |
| Importe mínimo | Suele requerir un mínimo de compra (varía por tienda/categoría) |
| Dónde se tramita | En el propio mostrador de la tienda, o en un counter tax-free del centro comercial |

## 🧠 Truco para recordar
Lleva siempre el pasaporte encima en tiendas grandes o de electrónica — es habitual que te lo pidan directamente antes de aplicar el descuento en caja.

## 👁 confusión
El tax-free no se aplica automáticamente ni se recupera después del viaje — tienes que gestionarlo EN EL MOMENTO de la compra, no puedes reclamarlo más tarde con el ticket.`,
    juegos: [
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'El tax-free se gestiona en el momento de la compra.', esVerdadero: true },
        { texto: 'Una foto del pasaporte en el móvil siempre es suficiente.', esVerdadero: false }
      ]},
      { tipo: 'conecta', titulo: 'Conecta cada dato con su detalle', instruccion: 'Toca un dato y luego su detalle.', pares: [
        { a: 'Requisito', b: 'Pasaporte físico' }, { a: 'Cuándo tramitarlo', b: 'En el momento de la compra' }
      ]},
      { tipo: 'clasifica', titulo: 'Correcto o incorrecto sobre tax-free', instruccion: 'Arrastra cada idea a su grupo.', categorias: ['Correcto sobre tax-free', 'Incorrecto sobre tax-free'], items: [
        { texto: 'Necesitas el pasaporte físico', cat: 'Correcto sobre tax-free' }, { texto: 'Se puede reclamar después del viaje', cat: 'Incorrecto sobre tax-free' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige la palabra correcta.', banco: ['pasaporte'], frases: [
        { texto: 'Para el tax-free necesitas llevar tu: "___" físico.', respuestas: ['pasaporte'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena el proceso de tax-free', instruccion: 'Pon los pasos en orden.', pasos: [
        'Compras algo por encima del mínimo', 'Enseñas el pasaporte en caja', 'Te aplican el descuento en el momento'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la idea que NO es correcta sobre el tax-free.', preguntas: [
        { grupo: '¿Cuál de estas ideas sobre tax-free es incorrecta?', explicacion: 'No se puede reclamar después con el ticket, hay que hacerlo en el momento.', opciones: [
          { texto: 'Requiere pasaporte físico', intruso: false }, { texto: 'Se tramita en el momento de comprar', intruso: false }, { texto: 'Se puede reclamar después con el ticket', intruso: true }
        ]}
      ]}
    ]
  },

  'd11-co-3': {
    contenido: `## Desarrollo
El envoltorio de regalo en Japón es casi un arte en sí mismo, y muchas tiendas ofrecen envolver tu compra gratis si se lo pides.

## ✅ Lo esencial

| Dato | Detalle |
|---|---|
| プレゼント用に包んでください (purezento you ni tsutsunde kudasai) | Envuélvalo para regalo, por favor |
| Coste | Normalmente gratuito, incluso en tiendas de gama media |
| Nivel de detalle | El envoltorio japonés suele ser muy cuidado, incluso en compras pequeñas |

## 🧠 Truco para recordar
Si vas a llevar algo de regalo, pedir el envoltorio en la propia tienda suele ser más bonito y rápido que intentarlo tú mismo después.

## 👁 confusión
No todas las tiendas ofrecen este servicio (sobre todo cadenas muy grandes de bajo coste) — pregunta antes de dar por hecho que está disponible.`,
    juegos: [
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'El envoltorio de regalo suele ser gratuito.', esVerdadero: true },
        { texto: 'Todas las tiendas sin excepción ofrecen este servicio.', esVerdadero: false }
      ]},
      { tipo: 'conecta', titulo: 'Conecta cada idea con su descripción', instruccion: 'Toca una idea y luego su descripción.', pares: [
        { a: 'Envoltorio de regalo', b: 'Suele ser gratuito y cuidado' }
      ]},
      { tipo: 'clasifica', titulo: 'Habitual o no garantizado', instruccion: 'Arrastra cada idea a su grupo.', categorias: ['Habitual en muchas tiendas', 'No siempre disponible'], items: [
        { texto: 'Ofrecer envoltorio de regalo gratis', cat: 'Habitual en muchas tiendas' }, { texto: 'Que TODAS las tiendas lo ofrezcan', cat: 'No siempre disponible' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige la palabra correcta.', banco: ['gratuito'], frases: [
        { texto: 'El envoltorio de regalo suele ser: "___", incluso en tiendas de gama media.', respuestas: ['gratuito'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la petición', instruccion: 'Pon los pasos en orden.', pasos: [
        'Compras el producto', 'Pides que lo envuelvan para regalo', 'Te lo entregan ya envuelto'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que NO es correcta sobre el envoltorio de regalo.', preguntas: [
        { grupo: '¿Cuál de estas ideas es incorrecta?', explicacion: 'No todas las tiendas, especialmente las de bajo coste, ofrecen este servicio.', opciones: [
          { texto: 'Suele ser gratuito', intruso: false }, { texto: 'Suele estar muy cuidado', intruso: false }, { texto: 'Todas las tiendas sin excepción lo ofrecen', intruso: true }
        ]}
      ]}
    ]
  },

  // ══════════════ DÍA 12 · Repaso semana 2 ══════════════

  'd12-pc-1': {
    contenido: `## Desarrollo
Repaso de palabras del día 8: vocabulario de estación, tipos de tren y proceso de acceso.

## ✅ Lo esencial

| Japonés | Español |
|---|---|
| 駅 | estación |
| 切符売り場 | taquilla |
| 特急 | tren expreso limitado |
| 終電 | último tren |

## 🧠 Truco para recordar
Repasa el recorrido completo mentalmente: llegas al eki, vas a kippu-uriba si hace falta, pasas el kaisatsu, y no te olvides del shuuden para la vuelta.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Repaso: conecta cada palabra con su significado', instruccion: 'Toca una palabra y luego su significado.', pares: [
        { a: 'Eki', b: 'Estación' }, { a: 'Kippu-uriba', b: 'Taquilla' }, { a: 'Tokkyuu', b: 'Tren expreso limitado' }, { a: 'Shuuden', b: 'Último tren' }
      ]},
      { tipo: 'vf', titulo: 'Repaso: verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Kakueki-teisha es el tren más rápido.', esVerdadero: false },
        { texto: 'Shuuden es el último tren del día.', esVerdadero: true }
      ]},
      { tipo: 'clasifica', titulo: 'Lugar o tipo de tren', instruccion: 'Arrastra cada palabra a su grupo.', categorias: ['Lugar en la estación', 'Tipo de tren'], items: [
        { texto: 'Eki', cat: 'Lugar en la estación' }, { texto: 'Kaisatsu', cat: 'Lugar en la estación' }, { texto: 'Tokkyuu', cat: 'Tipo de tren' }, { texto: 'Kyuukou', cat: 'Tipo de tren' }
      ]},
      { tipo: 'rellena', titulo: 'Repaso general', instruccion: 'Elige la palabra correcta.', banco: ['kippu-uriba', 'tokkyuu'], frases: [
        { texto: 'Compras el billete en la: "___".', respuestas: ['kippu-uriba'] },
        { texto: 'El tren más rápido es el: "___".', respuestas: ['tokkyuu'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena el trayecto en tren', instruccion: 'Pon los pasos en orden.', pasos: [
        'Eki (llegas)', 'Kippu-uriba (compras billete)', 'Kaisatsu (pasas el control)', 'Shuuden (planificas la vuelta)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no es del día 8.', preguntas: [
        { grupo: '¿Cuál de estas es del día 9, no del día 8?', explicacion: 'Basu-tei es del día 9 (autobús).', opciones: [
          { texto: 'Eki', intruso: false }, { texto: 'Shuuden', intruso: false }, { texto: 'Basu-tei', intruso: true }
        ]}
      ]}
    ]
  },

  'd12-pc-2': {
    contenido: `## Desarrollo
Repaso de palabras del día 9: taxi, direcciones y autobús.

## ✅ Lo esencial

| Japonés | Español |
|---|---|
| タクシー | taxi |
| 右 / 左 | derecha / izquierda |
| バス停 | parada de autobús |

## 🧠 Truco para recordar
Recuerda el patrón de opuestos que ya conoces: migi/hidari, mae/ushiro, noru/oriru — todos aparecen en pares que se aprenden mejor juntos.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Repaso: conecta cada palabra con su significado', instruccion: 'Toca una palabra y luego su significado.', pares: [
        { a: 'Takushii', b: 'Taxi' }, { a: 'Migi', b: 'Derecha' }, { a: 'Hidari', b: 'Izquierda' }, { a: 'Basu-tei', b: 'Parada de autobús' }
      ]},
      { tipo: 'vf', titulo: 'Repaso: verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Debes abrir tú mismo la puerta trasera del taxi.', esVerdadero: false },
        { texto: 'Noru significa "subir" a un vehículo.', esVerdadero: true }
      ]},
      { tipo: 'clasifica', titulo: 'Taxi o autobús', instruccion: 'Arrastra cada palabra a su grupo.', categorias: ['Sobre el taxi', 'Sobre el autobús'], items: [
        { texto: 'Takushii', cat: 'Sobre el taxi' }, { texto: 'Koko de tomete kudasai', cat: 'Sobre el taxi' }, { texto: 'Basu-tei', cat: 'Sobre el autobús' }, { texto: 'Noru', cat: 'Sobre el autobús' }
      ]},
      { tipo: 'rellena', titulo: 'Repaso general', instruccion: 'Elige la palabra correcta.', banco: ['migi', 'basu-tei'], frases: [
        { texto: 'Indicas girar a la derecha: "___".', respuestas: ['migi'] },
        { texto: 'Esperas el autobús en la: "___".', respuestas: ['basu-tei'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena el trayecto', instruccion: 'Pon los pasos en orden.', pasos: [
        'Takushii made onegaishimasu (subes al taxi)', 'Migi ni magatte kudasai (guías si hace falta)', 'Koko de tomete kudasai (paras)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no es del día 9.', preguntas: [
        { grupo: '¿Cuál de estas es del día 8, no del día 9?', explicacion: 'Kaisatsu es del día 8 (tren).', opciones: [
          { texto: 'Takushii', intruso: false }, { texto: 'Basu-tei', intruso: false }, { texto: 'Kaisatsu', intruso: true }
        ]}
      ]}
    ]
  },

  'd12-pc-3': {
    contenido: `## Desarrollo
Repaso de palabras de los días 10 y 11: alojamiento y compras.

## ✅ Lo esencial

| Japonés | Español |
|---|---|
| チェックイン | check-in |
| 部屋 | habitación |
| いくら | cuánto (precio) |
| 袋 | bolsa |

## 🧠 Truco para recordar
Agrupa mentalmente: todo lo relacionado con "entrar/salir de un sitio" (chekku-in, chekku-auto, heya) frente a todo lo de "comprar algo" (ikura, saizu, fukuro).`,
    juegos: [
      { tipo: 'conecta', titulo: 'Repaso: conecta cada palabra con su significado', instruccion: 'Toca una palabra y luego su significado.', pares: [
        { a: 'Chekku-in', b: 'Check-in' }, { a: 'Heya', b: 'Habitación' }, { a: 'Ikura', b: 'Cuánto (precio)' }, { a: 'Fukuro', b: 'Bolsa' }
      ]},
      { tipo: 'vf', titulo: 'Repaso: verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Kagi significa "llave".', esVerdadero: true },
        { texto: 'Saizu significa "efectivo".', esVerdadero: false }
      ]},
      { tipo: 'clasifica', titulo: 'Alojamiento o compras', instruccion: 'Arrastra cada palabra a su bloque.', categorias: ['Alojamiento (día 10)', 'Compras (día 11)'], items: [
        { texto: 'Chekku-in', cat: 'Alojamiento (día 10)' }, { texto: 'Heya', cat: 'Alojamiento (día 10)' }, { texto: 'Ikura', cat: 'Compras (día 11)' }, { texto: 'Saizu', cat: 'Compras (día 11)' }
      ]},
      { tipo: 'rellena', titulo: 'Repaso general', instruccion: 'Elige la palabra correcta.', banco: ['heya', 'ikura'], frases: [
        { texto: 'Tu habitación es tu: "___".', respuestas: ['heya'] },
        { texto: 'Preguntas el precio: "___ desu ka".', respuestas: ['ikura'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena por bloque', instruccion: 'Del día 10 al día 11.', pasos: [
        'Chekku-in (día 10)', 'Heya (día 10)', 'Ikura (día 11)', 'Fukuro (día 11)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no es de días 10-11.', preguntas: [
        { grupo: '¿Cuál de estas es del día 9, no de días 10-11?', explicacion: 'Migi es del día 9 (direcciones).', opciones: [
          { texto: 'Heya', intruso: false }, { texto: 'Ikura', intruso: false }, { texto: 'Migi', intruso: true }
        ]}
      ]}
    ]
  },

  'd12-fc-1': {
    contenido: `## Desarrollo
Repaso de frases de los días 8 y 9 en un trayecto completo: tren y taxi combinados.

## ✅ Lo esencial

| Situación | Frase |
|---|---|
| Comprar billete de tren | ［destino］までお願いします |
| Preguntar andén | 何番線ですか？ |
| Tomar un taxi | タクシー、［lugar］までお願いします |

## 🧠 Truco para recordar
"Made onegaishimasu" es el hilo conductor de todo el bloque de transporte — tren o taxi, la estructura es la misma.`,
    juegos: [
      { tipo: 'rellena', titulo: 'Repaso: completa la situación', instruccion: 'Elige la frase correcta.', banco: ['made onegaishimasu', 'nan-ban-sen desu ka'], frases: [
        { texto: 'Compras un billete de tren o dices tu destino en taxi: "[lugar] ___".', respuestas: ['made onegaishimasu'] },
        { texto: 'Preguntas por el andén: "___".', respuestas: ['nan-ban-sen desu ka'] }
      ]},
      { tipo: 'conecta', titulo: 'Repaso: conecta situación y frase', instruccion: 'Toca una situación y luego su frase.', pares: [
        { a: 'Comprar billete', b: '[Destino] made onegaishimasu' }, { a: 'Preguntar andén', b: 'Nan-ban-sen desu ka' }
      ]},
      { tipo: 'vf', titulo: 'Repaso: verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: '"Made onegaishimasu" sirve tanto en tren como en taxi.', esVerdadero: true },
        { texto: 'Nan-ban-sen desu ka pregunta el precio.', esVerdadero: false }
      ]},
      { tipo: 'clasifica', titulo: 'Tren o taxi', instruccion: 'Arrastra cada frase a su bloque.', categorias: ['Solo tren (día 8)', 'Solo taxi (día 9)'], items: [
        { texto: 'Nan-ban-sen desu ka', cat: 'Solo tren (día 8)' }, { texto: 'Koko de tomete kudasai', cat: 'Solo taxi (día 9)' }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena un día combinando tren y taxi', instruccion: 'Pon los pasos en orden.', pasos: [
        'Eki made onegaishimasu (billete de tren)', 'Nan-ban-sen desu ka (andén)', 'Takushii made onegaishimasu (taxi de vuelta)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no es de días 8-9.', preguntas: [
        { grupo: '¿Cuál de estas es del día 10, no de días 8-9?', explicacion: 'Chekku-in onegaishimasu es del día 10 (alojamiento).', opciones: [
          { texto: 'Nan-ban-sen desu ka', intruso: false }, { texto: 'Koko de tomete kudasai', intruso: false }, { texto: 'Chekku-in onegaishimasu', intruso: true }
        ]}
      ]}
    ]
  },

  'd12-fc-2': {
    contenido: `## Desarrollo
Repaso de frases del día 10: hacer el check-in y preguntar por servicios del hotel.

## ✅ Lo esencial

| Situación | Frase |
|---|---|
| Llegar al hotel | チェックインお願いします |
| Preguntar por wifi | Wi-Fiはありますか？ |
| Dejar equipaje | 荷物を預けてもいいですか？ |

## 🧠 Truco para recordar
Recuerda que "wa arimasu ka" y "te mo ii desu ka" son plantillas que ya has usado en varios contextos — aquí las aplicas al hotel.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Repaso: conecta situación y frase', instruccion: 'Toca una situación y luego su frase.', pares: [
        { a: 'Llegar al hotel', b: 'Chekku-in onegaishimasu' }, { a: 'Preguntar por wifi', b: 'Wifi wa arimasu ka' }, { a: 'Dejar equipaje', b: 'Nimotsu o azukete mo ii desu ka' }
      ]},
      { tipo: 'vf', titulo: 'Repaso: verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Chekku-in onegaishimasu se dice al llegar al hotel.', esVerdadero: true },
        { texto: 'Nimotsu o azukete mo ii desu ka pregunta por el desayuno.', esVerdadero: false }
      ]},
      { tipo: 'rellena', titulo: 'Repaso general', instruccion: 'Elige la frase correcta.', banco: ['chekku-in onegaishimasu', 'wifi wa arimasu ka'], frases: [
        { texto: 'Llegas al mostrador: "___".', respuestas: ['chekku-in onegaishimasu'] },
        { texto: 'Preguntas por internet: "___".', respuestas: ['wifi wa arimasu ka'] }
      ]},
      { tipo: 'clasifica', titulo: 'Al llegar o preguntar servicio', instruccion: 'Arrastra cada frase a su grupo.', categorias: ['Al llegar', 'Preguntar servicio'], items: [
        { texto: 'Chekku-in onegaishimasu', cat: 'Al llegar' }, { texto: 'Wifi wa arimasu ka', cat: 'Preguntar servicio' }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la llegada al hotel', instruccion: 'Pon los pasos en orden.', pasos: [
        'Chekku-in onegaishimasu', 'Yoyaku shite imasu', 'Wifi wa arimasu ka'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no es del día 10.', preguntas: [
        { grupo: '¿Cuál de estas es del día 11, no del día 10?', explicacion: 'Ikura desu ka es del día 11 (compras).', opciones: [
          { texto: 'Chekku-in onegaishimasu', intruso: false }, { texto: 'Wifi wa arimasu ka', intruso: false }, { texto: 'Ikura desu ka', intruso: true }
        ]}
      ]}
    ]
  },

  'd12-fc-3': {
    contenido: `## Desarrollo
Repaso de frases del día 11: comprar, probarte ropa, y pagar.

## ✅ Lo esencial

| Situación | Frase |
|---|---|
| Preguntar precio | いくらですか？ |
| Probarte ropa | 試着してもいいですか？ |
| Pagar y cerrar | カードで払えますか？ → レシートをください |

## 🧠 Truco para recordar
El recorrido de una compra en 3 pasos: precio, prueba, pago — el mismo orden lógico de cualquier compra real.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Repaso: conecta situación y frase', instruccion: 'Toca una situación y luego su frase.', pares: [
        { a: 'Preguntar precio', b: 'Ikura desu ka' }, { a: 'Probarte ropa', b: 'Shichaku shite mo ii desu ka' }, { a: 'Pagar con tarjeta', b: 'Kaado de haraemasu ka' }
      ]},
      { tipo: 'vf', titulo: 'Repaso: verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Shichaku shite mo ii desu ka pide permiso para probarte algo.', esVerdadero: true },
        { texto: 'Reshiito o kudasai pregunta el precio.', esVerdadero: false }
      ]},
      { tipo: 'rellena', titulo: 'Repaso general', instruccion: 'Elige la frase correcta.', banco: ['ikura desu ka', 'kaado de haraemasu ka'], frases: [
        { texto: 'No ves el precio: "___".', respuestas: ['ikura desu ka'] },
        { texto: 'Quieres saber si aceptan tarjeta: "___".', respuestas: ['kaado de haraemasu ka'] }
      ]},
      { tipo: 'clasifica', titulo: 'Antes de comprar o al pagar', instruccion: 'Arrastra cada frase a su momento.', categorias: ['Antes de decidir', 'Al pagar'], items: [
        { texto: 'Ikura desu ka', cat: 'Antes de decidir' }, { texto: 'Shichaku shite mo ii desu ka', cat: 'Antes de decidir' }, { texto: 'Kaado de haraemasu ka', cat: 'Al pagar' }, { texto: 'Reshiito o kudasai', cat: 'Al pagar' }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la compra completa', instruccion: 'Pon los pasos en orden.', pasos: [
        'Ikura desu ka', 'Shichaku shite mo ii desu ka', 'Kaado de haraemasu ka', 'Reshiito o kudasai'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no es del día 11.', preguntas: [
        { grupo: '¿Cuál de estas es del día 9, no del día 11?', explicacion: 'Massugu es del día 9 (direcciones).', opciones: [
          { texto: 'Ikura desu ka', intruso: false }, { texto: 'Reshiito o kudasai', intruso: false }, { texto: 'Massugu', intruso: true }
        ]}
      ]}
    ]
  },

  'd12-co-1': {
    contenido: `## Desarrollo
Repaso de las costumbres de los días 8 y 9: puntualidad del tren, comportamiento a bordo, y particularidades del taxi.

## ✅ Lo esencial

| Costumbre | Recordatorio |
|---|---|
| Puntualidad | Los retrasos se miden en segundos |
| Silencio en el tren | Móvil en silencio, respeto al yuusenseki |
| Puertas del taxi | Se abren y cierran solas |

## 🧠 Truco para recordar
Piensa en el transporte japonés como un sistema donde todo tiene su protocolo — puntualidad, silencio, y detalles automatizados que no controlas tú.`,
    juegos: [
      { tipo: 'vf', titulo: 'Repaso: verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Los retrasos de tren se miden en segundos.', esVerdadero: true },
        { texto: 'Debes abrir tú mismo la puerta trasera del taxi.', esVerdadero: false }
      ]},
      { tipo: 'conecta', titulo: 'Repaso: conecta cada costumbre con su bloque', instruccion: 'Toca una costumbre y luego su bloque.', pares: [
        { a: 'Puntualidad extrema', b: 'Día 8 (tren)' }, { a: 'Puertas automáticas', b: 'Día 9 (taxi)' }
      ]},
      { tipo: 'clasifica', titulo: 'Tren o taxi', instruccion: 'Arrastra cada costumbre a su bloque.', categorias: ['Costumbres del tren (día 8)', 'Costumbres del taxi (día 9)'], items: [
        { texto: 'Puntualidad extrema', cat: 'Costumbres del tren (día 8)' }, { texto: 'Yuusenseki', cat: 'Costumbres del tren (día 8)' }, { texto: 'Puertas automáticas', cat: 'Costumbres del taxi (día 9)' }
      ]},
      { tipo: 'rellena', titulo: 'Repaso general', instruccion: 'Elige la palabra correcta.', banco: ['segundos', 'automáticas'], frases: [
        { texto: 'Los retrasos se miden en: "___".', respuestas: ['segundos'] },
        { texto: 'Las puertas traseras del taxi son: "___".', respuestas: ['automáticas'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la idea', instruccion: 'Pon los pasos en orden lógico.', pasos: [
        'Llegas puntual al andén', 'Guardas silencio en el tren', 'Esperas a que la puerta del taxi se abra sola'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no es de días 8-9.', preguntas: [
        { grupo: '¿Cuál de estas es del día 10, no de días 8-9?', explicacion: 'Genkan es del día 10 (alojamiento).', opciones: [
          { texto: 'Puntualidad extrema', intruso: false }, { texto: 'Puertas automáticas del taxi', intruso: false }, { texto: 'Genkan', intruso: true }
        ]}
      ]}
    ]
  },

  'd12-co-2': {
    contenido: `## Desarrollo
Repaso de las costumbres del día 10: la experiencia del ryokan y las normas del onsen.

## ✅ Lo esencial

| Costumbre | Recordatorio |
|---|---|
| Genkan | Te quitas los zapatos al entrar |
| Horarios | Check-in ~15:00, check-out ~10:00 |
| Onsen | Sin ropa, ducha previa obligatoria |

## 🧠 Truco para recordar
El ryokan y el onsen comparten una misma lógica: normas claras y estrictas que, una vez las conoces, hacen la experiencia mucho más cómoda.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Repaso: conecta cada palabra con su significado', instruccion: 'Toca una palabra y luego su significado.', pares: [
        { a: 'Genkan', b: 'Zona sin zapatos' }, { a: 'Onsen', b: 'Baño termal comunal' }
      ]},
      { tipo: 'vf', titulo: 'Repaso: verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'El check-out suele ser temprano, sobre las 10:00.', esVerdadero: true },
        { texto: 'En el onsen se entra con bañador.', esVerdadero: false }
      ]},
      { tipo: 'clasifica', titulo: 'Ryokan o onsen', instruccion: 'Arrastra cada elemento a su grupo.', categorias: ['Del ryokan en general', 'Específico del onsen'], items: [
        { texto: 'Genkan', cat: 'Del ryokan en general' }, { texto: 'Futon', cat: 'Del ryokan en general' }, { texto: 'Ducharse antes de entrar al agua', cat: 'Específico del onsen' }
      ]},
      { tipo: 'rellena', titulo: 'Repaso general', instruccion: 'Elige la palabra correcta.', banco: ['genkan', 'onsen'], frases: [
        { texto: 'Te quitas los zapatos en el: "___".', respuestas: ['genkan'] },
        { texto: 'El baño termal comunal es el: "___".', respuestas: ['onsen'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la estancia en ryokan', instruccion: 'Pon los pasos en orden.', pasos: [
        'Genkan (te quitas los zapatos)', 'Chekku-in sobre las 15:00', 'Onsen (te duchas y entras al agua)', 'Chekku-auto sobre las 10:00'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no es del día 10.', preguntas: [
        { grupo: '¿Cuál de estas es del día 11, no del día 10?', explicacion: 'Regatear es del día 11 (compras).', opciones: [
          { texto: 'Genkan', intruso: false }, { texto: 'Onsen', intruso: false }, { texto: 'Regatear el precio', intruso: true }
        ]}
      ]}
    ]
  },

  'd12-co-3': {
    contenido: `## Desarrollo
Repaso de las costumbres del día 11: precio fijo, tax-free y el envoltorio de regalo.

## ✅ Lo esencial

| Costumbre | Recordatorio |
|---|---|
| Precio fijo | No se regatea |
| Tax-free | Pasaporte físico, en el momento de la compra |
| Envoltorio de regalo | Suele ser gratuito si lo pides |

## 🧠 Truco para recordar
Las tres costumbres de compras comparten un patrón: procesos claros y respetados por todos, sin margen para la improvisación o la negociación.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Repaso: conecta cada idea con su descripción', instruccion: 'Toca una idea y luego su descripción.', pares: [
        { a: 'Precio fijo', b: 'No se regatea' }, { a: 'Tax-free', b: 'Requiere pasaporte físico' }
      ]},
      { tipo: 'vf', titulo: 'Repaso: verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'El tax-free se puede reclamar después del viaje con el ticket.', esVerdadero: false },
        { texto: 'El envoltorio de regalo suele ser gratuito.', esVerdadero: true }
      ]},
      { tipo: 'clasifica', titulo: 'Sobre el precio o sobre el servicio', instruccion: 'Arrastra cada idea a su grupo.', categorias: ['Sobre el precio', 'Sobre un servicio adicional'], items: [
        { texto: 'Precio fijo', cat: 'Sobre el precio' }, { texto: 'Tax-free', cat: 'Sobre el precio' }, { texto: 'Envoltorio de regalo', cat: 'Sobre un servicio adicional' }
      ]},
      { tipo: 'rellena', titulo: 'Repaso general', instruccion: 'Elige la palabra correcta.', banco: ['pasaporte', 'regatear'], frases: [
        { texto: 'Para el tax-free necesitas el: "___".', respuestas: ['pasaporte'] },
        { texto: 'En Japón no se suele: "___" el precio.', respuestas: ['regatear'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena toda la semana 2 en un resumen', instruccion: 'Pon estos bloques temáticos en el orden del curso.', pasos: [
        'Transporte I: tren (día 8)', 'Transporte II: taxi y bus (día 9)', 'Alojamiento (día 10)', 'Compras (día 11)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no es una costumbre del día 11.', preguntas: [
        { grupo: '¿Cuál de estas es del día 8, no del día 11?', explicacion: 'La puntualidad del tren es del día 8.', opciones: [
          { texto: 'Precio fijo', intruso: false }, { texto: 'Tax-free', intruso: false }, { texto: 'Puntualidad del tren', intruso: true }
        ]}
      ]}
    ]
  }

};

async function subirSemana2() {
  if (typeof db === 'undefined') { console.error('No se encuentra `db`. ¿Estás en la página de ApuntesLarry, logueado?'); return; }
  var col = db.collection('temas').doc('japones-semana2').collection('puntos');
  var ids = Object.keys(LECCIONES_SEMANA2);
  for (var i = 0; i < ids.length; i++) {
    var id = ids[i];
    try {
      await col.doc(id).set(LECCIONES_SEMANA2[id]);
      console.log('✅ Subido: ' + id);
    } catch (e) {
      console.error('❌ Error en ' + id + ': ' + e.message);
    }
  }
  console.log('Terminado. ' + ids.length + ' puntos procesados.');
}
