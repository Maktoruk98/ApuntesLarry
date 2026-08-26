/*
 * Subida a Firestore — Japonés, Semana 3 (Módulo 4: Día 13 a Día 17)
 *
 * Cómo usar:
 * 1. Abre ApuntesLarry logueado con tu cuenta Google.
 * 2. F12 → Console.
 * 3. Pega TODO este archivo y pulsa Enter.
 * 4. Ejecuta:  subirSemana3()
 *
 * Escribe en: temas/japones-semana3/puntos/{firestoreId}
 * Es seguro volver a ejecutarlo: sobreescribe, no duplica.
 */

var LECCIONES_SEMANA3 = {

  // ══════════════ DÍA 13 · Tecnología y comunicación ══════════════

  'd13-pc-1': {
    contenido: `## Desarrollo
Estar conectado en Japón es más fácil de lo que parece — el vocabulario básico de wifi, datos móviles y SIM.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| Wi-Fi | waifai | wifi |
| SIMカード | shimu kaado | tarjeta SIM |
| ローミング | roomingu | roaming |

## 🧠 Truco para recordar
Waifai, shimu kaado y roomingu son préstamos del inglés — reconoce el sonido y ya tienes la palabra medio aprendida.

## 👁 confusión
No todos los alojamientos tienen wifi gratuito garantizado, especialmente ryokan tradicionales — pregunta al reservar si es importante para ti.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada palabra con su significado', instruccion: 'Toca una palabra y luego su significado.', pares: [
        { a: 'Wi-Fi', b: 'Wifi' }, { a: 'SIMカード', b: 'Tarjeta SIM' }, { a: 'ローミング', b: 'Roaming' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Todos los ryokan garantizan wifi gratis.', esVerdadero: false },
        { texto: 'Shimu kaado es un préstamo de "SIM card".', esVerdadero: true }
      ]},
      { tipo: 'clasifica', titulo: 'Conexión local o desde fuera', instruccion: 'Arrastra cada palabra a su grupo.', categorias: ['Conexión ya en Japón', 'Relacionado con tu operador de fuera'], items: [
        { texto: 'Wi-Fi', cat: 'Conexión ya en Japón' }, { texto: 'SIM kaado', cat: 'Conexión ya en Japón' }, { texto: 'Roomingu', cat: 'Relacionado con tu operador de fuera' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige la palabra correcta.', banco: ['waifai', 'shimu kaado'], frases: [
        { texto: 'Preguntas por la conexión inalámbrica: "___".', respuestas: ['waifai'] },
        { texto: 'Compras una tarjeta para tener datos locales: "___".', respuestas: ['shimu kaado'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena las opciones de conexión', instruccion: 'De la más cara a la más económica normalmente.', pasos: [
        'Roomingu (con tu operador de fuera)', 'SIM kaado japonesa', 'Wifi gratis del alojamiento'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no es una forma de conectarte a internet.', preguntas: [
        { grupo: '¿Cuál de estas NO es una forma de tener conexión?', explicacion: 'Juuden es "cargar batería", no una forma de conectividad.', opciones: [
          { texto: 'Wi-Fi', intruso: false }, { texto: 'SIM kaado', intruso: false }, { texto: 'Juuden', intruso: true }
        ]}
      ]}
    ]
  },

  'd13-pc-2': {
    contenido: `## Desarrollo
El vocabulario para hablar de traducción — útil cuando decides recurrir al móvil en vez de intentarlo todo en japonés.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| 翻訳 | honyaku | traducción |
| アプリ | apuri | aplicación (app) |
| 通訳 | tsuuyaku | interpretación (oral, en tiempo real) |

## 🧠 Truco para recordar
Honyaku es traducción de textos escritos; tsuuyaku es interpretación oral en el momento — son conceptos relacionados pero distintos, igual que en español.

## 👁 confusión
No confíes ciegamente en traducciones automáticas para frases importantes o delicadas (médicas, legales) — para eso, mejor recurrir a alguien humano si es posible.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada palabra con su significado', instruccion: 'Toca una palabra y luego su significado.', pares: [
        { a: '翻訳 (honyaku)', b: 'Traducción (texto)' }, { a: 'アプリ (apuri)', b: 'Aplicación' }, { a: '通訳 (tsuuyaku)', b: 'Interpretación oral' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Honyaku y tsuuyaku significan exactamente lo mismo.', esVerdadero: false },
        { texto: 'Apuri es un préstamo de "app".', esVerdadero: true }
      ]},
      { tipo: 'clasifica', titulo: 'Texto u oral', instruccion: 'Arrastra cada palabra a su grupo.', categorias: ['Relacionado con texto', 'Relacionado con habla'], items: [
        { texto: 'Honyaku', cat: 'Relacionado con texto' }, { texto: 'Tsuuyaku', cat: 'Relacionado con habla' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige la palabra correcta.', banco: ['honyaku', 'apuri'], frases: [
        { texto: 'Traducir un cartel escrito es un ejemplo de: "___".', respuestas: ['honyaku'] },
        { texto: 'Usas una "___" en el móvil para ayudarte con el idioma.', respuestas: ['apuri'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la idea', instruccion: 'Pon los pasos en orden lógico.', pasos: [
        'No entiendes un cartel escrito', 'Usas honyaku (traducción de texto)', 'Si es una conversación en directo, usas tsuuyaku'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no tiene que ver con traducción.', preguntas: [
        { grupo: '¿Cuál de estas NO tiene que ver con traducir o interpretar?', explicacion: 'Roomingu es sobre datos móviles, no sobre traducción.', opciones: [
          { texto: 'Honyaku', intruso: false }, { texto: 'Tsuuyaku', intruso: false }, { texto: 'Roomingu', intruso: true }
        ]}
      ]}
    ]
  },

  'd13-pc-3': {
    contenido: `## Desarrollo
La batería del móvil se agota rápido cuando lo usas para todo (mapas, traducción, fotos) — el vocabulario para gestionarlo.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| 充電 | juuden | carga (de batería) |
| モバイルバッテリー | mobairu batterii | batería externa |
| 電池 | denchi | pila / batería |

## 🧠 Truco para recordar
Juuden ya lo viste el día 16 del bloque anterior (cargar el móvil) — mobairu batterii es simplemente el objeto físico que necesitas para hacerlo sin enchufe.

## 👁 confusión
Denchi (pila/batería) es un término más general que puede referirse tanto a pilas sueltas como a la batería interna de un dispositivo — el contexto aclara a cuál te refieres.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada palabra con su significado', instruccion: 'Toca una palabra y luego su significado.', pares: [
        { a: '充電 (juuden)', b: 'Carga de batería' }, { a: 'モバイルバッテリー', b: 'Batería externa' }, { a: '電池 (denchi)', b: 'Pila / batería' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Mobairu batterii es un dispositivo físico para cargar sin enchufe.', esVerdadero: true },
        { texto: 'Juuden significa "wifi".', esVerdadero: false }
      ]},
      { tipo: 'clasifica', titulo: 'Acción u objeto', instruccion: 'Arrastra cada palabra a su grupo.', categorias: ['Es una acción', 'Es un objeto'], items: [
        { texto: 'Juuden', cat: 'Es una acción' }, { texto: 'Mobairu batterii', cat: 'Es un objeto' }, { texto: 'Denchi', cat: 'Es un objeto' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige la palabra correcta.', banco: ['juuden', 'mobairu batterii'], frases: [
        { texto: 'La acción de cargar el móvil es: "___".', respuestas: ['juuden'] },
        { texto: 'Llevas una "___" para cargar sin enchufe.', respuestas: ['mobairu batterii'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la situación', instruccion: 'Pon los pasos en orden.', pasos: [
        'Se te agota la batería', 'Usas tu mobairu batterii', 'Si no tienes, preguntas juuden dekimasu ka'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no tiene que ver con la batería.', preguntas: [
        { grupo: '¿Cuál de estas NO tiene que ver con la batería del móvil?', explicacion: 'Apuri es "aplicación", no tiene que ver con batería.', opciones: [
          { texto: 'Juuden', intruso: false }, { texto: 'Mobairu batterii', intruso: false }, { texto: 'Apuri', intruso: true }
        ]}
      ]}
    ]
  },

  'd13-fc-1': {
    contenido: `## Desarrollo
Preguntar por conexión a internet en cualquier sitio, reutilizando la plantilla "wa arimasu ka" que ya conoces bien.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| Wi-Fiはありますか？ | wifi wa arimasu ka? | ¿hay wifi? |
| Wi-Fiのパスワードは何ですか？ | wifi no pasuwaado wa nan desu ka? | ¿cuál es la contraseña del wifi? |

## 🧠 Truco para recordar
"[Algo] no pasuwaado wa nan desu ka" es una plantilla útil más allá del wifi — cualquier cosa que necesite contraseña puede preguntarse igual.

## 👁 confusión
En espacios públicos (estaciones, konbini) el wifi gratuito a menudo requiere registrarte con tu email o pasar por una pantalla de aceptación — no siempre es tan simple como conectarte y ya está.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: 'Wi-Fiはありますか？', b: '¿Hay wifi?' }, { a: 'Wi-Fiのパスワードは何ですか？', b: '¿Cuál es la contraseña del wifi?' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'El wifi público a veces requiere registro previo.', esVerdadero: true },
        { texto: '"No pasuwaado wa nan desu ka" solo sirve para el wifi.', esVerdadero: false }
      ]},
      { tipo: 'rellena', titulo: 'Completa la pregunta', instruccion: 'Elige la frase correcta.', banco: ['wifi wa arimasu ka', 'pasuwaado wa nan desu ka'], frases: [
        { texto: 'Preguntas si hay conexión: "___".', respuestas: ['wifi wa arimasu ka'] },
        { texto: 'Ya sabes que hay wifi, preguntas la clave: "wifi no ___".', respuestas: ['pasuwaado wa nan desu ka'] }
      ]},
      { tipo: 'clasifica', titulo: 'Existencia o detalle de acceso', instruccion: 'Arrastra cada pregunta a su grupo.', categorias: ['Pregunta si existe', 'Pregunta cómo acceder'], items: [
        { texto: 'Wifi wa arimasu ka', cat: 'Pregunta si existe' }, { texto: 'Wifi no pasuwaado wa nan desu ka', cat: 'Pregunta cómo acceder' }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la conexión', instruccion: 'Pon los pasos en orden.', pasos: [
        'Wifi wa arimasu ka (preguntas si hay)', 'Wifi no pasuwaado wa nan desu ka (pides la clave)', 'Te conectas'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no tiene que ver con el wifi.', preguntas: [
        { grupo: '¿Cuál de estas NO tiene que ver con conectarte a wifi?', explicacion: 'Juuden dekimasu ka es sobre cargar el móvil, no sobre wifi.', opciones: [
          { texto: 'Wifi wa arimasu ka', intruso: false }, { texto: 'Wifi no pasuwaado wa nan desu ka', intruso: false }, { texto: 'Juuden dekimasu ka', intruso: true }
        ]}
      ]}
    ]
  },

  'd13-fc-2': {
    contenido: `## Desarrollo
Usar el traductor con alguien delante — no es de mala educación, es una práctica habitual y aceptada.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| アプリで翻訳してもいいですか？ | apuri de honyaku shite mo ii desu ka? | ¿puedo traducir con la app? |
| ここに書いてもらえますか？ | koko ni kaite moraemasu ka? | ¿puede escribirlo aquí? |

## 🧠 Truco para recordar
"Te mo ii desu ka" reaparece una vez más — la plantilla de pedir permiso funciona hasta para sacar el móvil y traducir en directo.

## 👁 confusión
Koko ni kaite moraemasu ka (¿puede escribirlo?) es especialmente útil para nombres de lugares o cantidades — evita errores de comprensión oral, sobre todo con números.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: 'アプリで翻訳してもいいですか？', b: '¿Puedo traducir con la app?' }, { a: 'ここに書いてもらえますか？', b: '¿Puede escribirlo aquí?' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Usar el traductor delante de alguien es una práctica habitual en Japón.', esVerdadero: true },
        { texto: 'Koko ni kaite moraemasu ka es útil sobre todo para evitar errores con números.', esVerdadero: true }
      ]},
      { tipo: 'rellena', titulo: 'Completa la petición', instruccion: 'Elige la frase correcta.', banco: ['apuri de honyaku shite mo ii desu ka', 'koko ni kaite moraemasu ka'], frases: [
        { texto: 'Quieres sacar el móvil para traducir: "___".', respuestas: ['apuri de honyaku shite mo ii desu ka'] },
        { texto: 'Prefieres que te lo escriban para no confundirte: "___".', respuestas: ['koko ni kaite moraemasu ka'] }
      ]},
      { tipo: 'clasifica', titulo: 'Con app o a mano', instruccion: 'Arrastra cada frase a su grupo.', categorias: ['Usar el móvil', 'Pedir algo escrito a mano'], items: [
        { texto: 'Apuri de honyaku shite mo ii desu ka', cat: 'Usar el móvil' }, { texto: 'Koko ni kaite moraemasu ka', cat: 'Pedir algo escrito a mano' }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la situación', instruccion: 'Pon los pasos en orden.', pasos: [
        'Wakarimasen (no entiendes)', 'Apuri de honyaku shite mo ii desu ka (usas el traductor)', 'Koko ni kaite moraemasu ka (si aún hay dudas, pides que lo escriban)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no tiene que ver con resolver un malentendido.', preguntas: [
        { grupo: '¿Cuál de estas NO ayuda a resolver un malentendido de idioma?', explicacion: 'Ikura desu ka es sobre precio, no sobre comunicación.', opciones: [
          { texto: 'Apuri de honyaku shite mo ii desu ka', intruso: false }, { texto: 'Koko ni kaite moraemasu ka', intruso: false }, { texto: 'Ikura desu ka', intruso: true }
        ]}
      ]}
    ]
  },

  'd13-fc-3': {
    contenido: `## Desarrollo
Gestionar la batería en apuros: pedir cargar el móvil o preguntar dónde comprar una batería externa.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| 充電できますか？ | juuden dekimasu ka? | ¿puedo cargar el móvil? |
| モバイルバッテリーはどこで買えますか？ | mobairu batterii wa doko de kaemasu ka? | ¿dónde puedo comprar una batería externa? |

## 🧠 Truco para recordar
"[Objeto] wa doko de kaemasu ka" (¿dónde puedo comprar...?) es una plantilla nueva y muy reutilizable — sirve para cualquier objeto que necesites encontrar para comprar.

## 👁 confusión
Muchos konbini venden baterías externas económicas — no hace falta ir a una tienda de electrónica especializada si solo necesitas algo básico para el día.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: '充電できますか？', b: '¿Puedo cargar el móvil?' }, { a: 'モバイルバッテリーはどこで買えますか？', b: '¿Dónde puedo comprar una batería externa?' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Los konbini suelen vender baterías externas económicas.', esVerdadero: true },
        { texto: 'Solo se puede comprar batería externa en tiendas especializadas.', esVerdadero: false }
      ]},
      { tipo: 'rellena', titulo: 'Completa la pregunta', instruccion: 'Elige la frase correcta.', banco: ['juuden dekimasu ka', 'doko de kaemasu ka'], frases: [
        { texto: 'Preguntas si puedes cargar ahí mismo: "___".', respuestas: ['juuden dekimasu ka'] },
        { texto: 'Preguntas dónde comprar algo: "[objeto] wa ___".', respuestas: ['doko de kaemasu ka'] }
      ]},
      { tipo: 'clasifica', titulo: 'Pedir cargar o comprar', instruccion: 'Arrastra cada frase a su grupo.', categorias: ['Pedir cargar en el sitio', 'Preguntar dónde comprar'], items: [
        { texto: 'Juuden dekimasu ka', cat: 'Pedir cargar en el sitio' }, { texto: 'Mobairu batterii wa doko de kaemasu ka', cat: 'Preguntar dónde comprar' }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la situación', instruccion: 'Pon los pasos en orden.', pasos: [
        'La batería se agota', 'Juuden dekimasu ka (preguntas si puedes cargar ahí)', 'Si no es posible, mobairu batterii wa doko de kaemasu ka'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no tiene que ver con la batería.', preguntas: [
        { grupo: '¿Cuál de estas NO tiene que ver con gestionar la batería?', explicacion: 'Wifi wa arimasu ka es sobre conexión, no sobre batería.', opciones: [
          { texto: 'Juuden dekimasu ka', intruso: false }, { texto: 'Mobairu batterii wa doko de kaemasu ka', intruso: false }, { texto: 'Wifi wa arimasu ka', intruso: true }
        ]}
      ]}
    ]
  },

  'd13-co-1': {
    contenido: `## Desarrollo
Los konbini y las estaciones no son solo para comprar o viajar — se han convertido en puntos de referencia para conectarte y cargar dispositivos.

## ✅ Lo esencial

| Dato | Detalle |
|---|---|
| Wifi en konbini | Muchas cadenas grandes (7-Eleven, Lawson, FamilyMart) ofrecen wifi gratuito |
| Enchufes en estaciones | Algunas estaciones grandes tienen zonas con enchufes públicos |
| Cajeros en konbini | Ya lo viste antes: fiables para sacar dinero con tarjeta extranjera |

## 🧠 Truco para recordar
Cuando tengas cualquier problema tecnológico o práctico sin resolver, la respuesta por defecto suele ser: "busca el konbini más cercano".

## 👁 confusión
No todos los enchufes públicos son fáciles de encontrar ni están señalizados de forma obvia — pregunta al personal si necesitas cargar con urgencia en una estación grande.`,
    juegos: [
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Muchas cadenas de konbini ofrecen wifi gratuito.', esVerdadero: true },
        { texto: 'Ningún konbini en Japón tiene wifi.', esVerdadero: false }
      ]},
      { tipo: 'conecta', titulo: 'Conecta cada lugar con su utilidad', instruccion: 'Toca un lugar y luego su utilidad.', pares: [
        { a: 'Konbini', b: 'Wifi, cajero, de todo' }, { a: 'Estaciones grandes', b: 'A veces tienen enchufes públicos' }
      ]},
      { tipo: 'clasifica', titulo: 'Konbini o estación', instruccion: 'Arrastra cada servicio a su lugar.', categorias: ['Típico del konbini', 'Típico de la estación'], items: [
        { texto: 'Wifi gratuito', cat: 'Típico del konbini' }, { texto: 'Cajero automático', cat: 'Típico del konbini' }, { texto: 'Enchufes públicos', cat: 'Típico de la estación' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige la palabra correcta.', banco: ['konbini'], frases: [
        { texto: 'Ante casi cualquier problema práctico, la solución suele ser buscar un: "___".', respuestas: ['konbini'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la idea', instruccion: 'Pon los pasos en orden lógico.', pasos: [
        'Tienes un problema práctico (batería, wifi, dinero)', 'Buscas el konbini más cercano', 'Casi seguro que resuelves el problema ahí'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona el servicio que NO es típico del konbini.', preguntas: [
        { grupo: '¿Cuál de estos servicios NO se asocia típicamente al konbini?', explicacion: 'El check-in de hotel se hace en el hotel, no en el konbini.', opciones: [
          { texto: 'Wifi gratuito', intruso: false }, { texto: 'Cajero automático', intruso: false }, { texto: 'Check-in de hotel', intruso: true }
        ]}
      ]}
    ]
  },

  'd13-co-2': {
    contenido: `## Desarrollo
Curiosamente, muchos japoneses también usan apps de traducción para comunicarse contigo — no es solo un recurso de turista, es una herramienta normalizada en ambos sentidos.

## ✅ Lo esencial

| Dato | Detalle |
|---|---|
| Uso bidireccional | Es normal que el propio personal japonés use su móvil para traducirte algo |
| Actitud | Nadie lo considera raro ni maleducado, es una solución práctica aceptada |
| Ventaja | Reduce la presión de tener que hablar japonés perfecto |

## 🧠 Truco para recordar
Si ves que la persona con la que hablas también saca su móvil para traducir, tómalo como una señal positiva de que está intentando ayudarte de verdad.

## 👁 confusión
No esperes que la traducción automática capture matices o bromas — para lo esencial funciona bien, pero no sustituye una conversación fluida real.`,
    juegos: [
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Es normal que el personal japonés también use apps de traducción contigo.', esVerdadero: true },
        { texto: 'Usar el traductor se considera maleducado en Japón.', esVerdadero: false }
      ]},
      { tipo: 'conecta', titulo: 'Conecta cada idea con su descripción', instruccion: 'Toca una idea y luego su descripción.', pares: [
        { a: 'Uso bidireccional', b: 'Japoneses también traducen para ti' }, { a: 'Ventaja', b: 'Menos presión de hablar perfecto' }
      ]},
      { tipo: 'clasifica', titulo: 'Correcto o incorrecto', instruccion: 'Arrastra cada idea a su grupo.', categorias: ['Correcto sobre el traductor', 'Incorrecto'], items: [
        { texto: 'Se usa en ambos sentidos', cat: 'Correcto sobre el traductor' }, { texto: 'Captura perfectamente bromas y matices', cat: 'Incorrecto' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige la palabra correcta.', banco: ['bidireccional'], frases: [
        { texto: 'El uso del traductor en Japón es: "___" — lo usan ambas partes.', respuestas: ['bidireccional'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la idea', instruccion: 'Pon los pasos en orden lógico.', pasos: [
        'No entiendes algo', 'Sacas tu traductor', 'A veces, la otra persona también saca el suyo'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la idea que NO es correcta sobre traducción en Japón.', preguntas: [
        { grupo: '¿Cuál de estas ideas es incorrecta?', explicacion: 'Los traductores automáticos no son perfectos con matices o bromas.', opciones: [
          { texto: 'Es una herramienta normalizada', intruso: false }, { texto: 'La usan también los propios japoneses', intruso: false }, { texto: 'Captura bromas y matices perfectamente', intruso: true }
        ]}
      ]}
    ]
  },

  'd13-co-3': {
    contenido: `## Desarrollo
Ya viste la etiqueta del móvil en el tren (silencio, sin llamadas). Esa misma sensibilidad se extiende a otros espacios compartidos de la vida diaria.

## ✅ Lo esencial

| Espacio | Norma sobre el móvil |
|---|---|
| Restaurantes | Evitar hablar alto por teléfono en la mesa |
| Templos y santuarios | Silenciar el móvil, evitar fotos con flash o vídeos intrusivos |
| Colas y esperas | Consultarlo en silencio está bien, hablar por él no tanto |

## 🧠 Truco para recordar
La norma general en Japón es simple: usar el móvil en silencio (mirar, escribir) está bien en casi cualquier sitio; usarlo para hablar en voz alta, mucho menos.

## 👁 confusión
Hacer fotos con el móvil suele estar permitido en más sitios de lo que crees, pero siempre evita el flash y los vídeos que puedan molestar a otros visitantes o feligreses.`,
    juegos: [
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Consultar el móvil en silencio suele estar bien visto.', esVerdadero: true },
        { texto: 'Hablar alto por teléfono en un restaurante es totalmente aceptado.', esVerdadero: false }
      ]},
      { tipo: 'conecta', titulo: 'Conecta cada espacio con su norma', instruccion: 'Toca un espacio y luego su norma.', pares: [
        { a: 'Restaurantes', b: 'Evitar hablar alto por teléfono' }, { a: 'Templos', b: 'Evitar flash y vídeos intrusivos' }
      ]},
      { tipo: 'clasifica', titulo: 'Aceptable o evitar', instruccion: 'Arrastra cada comportamiento a su grupo.', categorias: ['Aceptable', 'Mejor evitar'], items: [
        { texto: 'Consultar el móvil en silencio', cat: 'Aceptable' }, { texto: 'Hablar alto por teléfono en la mesa', cat: 'Mejor evitar' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige la palabra correcta.', banco: ['silencio'], frases: [
        { texto: 'La norma general del móvil en Japón es usarlo en: "___".', respuestas: ['silencio'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la idea', instruccion: 'Pon los pasos en orden lógico.', pasos: [
        'Estás en un espacio compartido', 'Silencias el móvil', 'Lo usas para mirar, no para hablar alto'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona el comportamiento que NO respeta la etiqueta del móvil.', preguntas: [
        { grupo: '¿Cuál de estos comportamientos NO respeta la etiqueta típica del móvil en Japón?', explicacion: 'Hacer una videollamada en voz alta en un templo rompe claramente la norma de silencio.', opciones: [
          { texto: 'Mirar el móvil en silencio en una cola', intruso: false }, { texto: 'Silenciar el móvil en un templo', intruso: false }, { texto: 'Hacer una videollamada en voz alta en un templo', intruso: true }
        ]}
      ]}
    ]
  },

  // ══════════════ DÍA 14 · Salud y emergencias ══════════════

  'd14-pc-1': {
    contenido: `## Desarrollo
Las partes del cuerpo más útiles para describir un dolor concreto, combinadas con la plantilla que ya conoces.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| 頭 | atama | cabeza |
| お腹 | onaka | estómago |
| のど | nodo | garganta |
| 歯 | ha | diente |

## 🧠 Truco para recordar
Combina cualquiera con la plantilla ya conocida: "[parte] ga itai desu" — atama ga itai (dolor de cabeza), ha ga itai (dolor de muelas).

## 👁 confusión
Ha (diente) es una sola sílaba y puede confundirse fácilmente con otras palabras cortas — el contexto (tocarte la boca) suele aclarar el significado si hay dudas.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada palabra con su significado', instruccion: 'Toca una palabra y luego su significado.', pares: [
        { a: '頭 (atama)', b: 'Cabeza' }, { a: 'お腹 (onaka)', b: 'Estómago' }, { a: 'のど (nodo)', b: 'Garganta' }, { a: '歯 (ha)', b: 'Diente' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Atama significa "cabeza".', esVerdadero: true },
        { texto: 'Onaka significa "diente".', esVerdadero: false }
      ]},
      { tipo: 'clasifica', titulo: 'Parte superior o interna', instruccion: 'Arrastra cada palabra a su grupo.', categorias: ['Parte de la cabeza', 'Parte del torso'], items: [
        { texto: 'Atama', cat: 'Parte de la cabeza' }, { texto: 'Nodo', cat: 'Parte de la cabeza' }, { texto: 'Ha', cat: 'Parte de la cabeza' }, { texto: 'Onaka', cat: 'Parte del torso' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la frase de dolor', instruccion: 'Elige la parte del cuerpo correcta.', banco: ['atama', 'onaka'], frases: [
        { texto: 'Te duele la cabeza: "___ ga itai desu".', respuestas: ['atama'] },
        { texto: 'Te duele el estómago: "___ ga itai desu".', respuestas: ['onaka'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena el uso de la plantilla', instruccion: 'Reconstruye la frase en orden.', pasos: [
        'Nodo (garganta)', 'ga (partícula)', 'itai desu (duele)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no es una parte del cuerpo.', preguntas: [
        { grupo: '¿Cuál de estas NO es una parte del cuerpo?', explicacion: 'Yakkyoku es "farmacia", no una parte del cuerpo.', opciones: [
          { texto: 'Atama', intruso: false }, { texto: 'Onaka', intruso: false }, { texto: 'Yakkyoku', intruso: true }
        ]}
      ]}
    ]
  },

  'd14-pc-2': {
    contenido: `## Desarrollo
El vocabulario de la farmacia: dónde está, qué pedir, y cómo se llaman las medicinas básicas.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| 薬局 | yakkyoku | farmacia |
| 薬 | kusuri | medicina |
| 熱冷まし | netsu-zamashi | antipirético (baja fiebre) |

## 🧠 Truco para recordar
Netsu-zamashi se descompone en netsu (fiebre) + samasu (enfriar) — literalmente "lo que enfría la fiebre", una palabra que tiene sentido una vez la desmontas.

## 👁 confusión
Muchas medicinas comunes en tu país pueden no estar disponibles con el mismo nombre o composición en Japón — si tomas algo específico de forma habitual, mejor traerlo de casa.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada palabra con su significado', instruccion: 'Toca una palabra y luego su significado.', pares: [
        { a: '薬局 (yakkyoku)', b: 'Farmacia' }, { a: '薬 (kusuri)', b: 'Medicina' }, { a: '熱冷まし', b: 'Antipirético' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Netsu-zamashi es una medicina para bajar la fiebre.', esVerdadero: true },
        { texto: 'Todas las medicinas de tu país están garantizadas en Japón con el mismo nombre.', esVerdadero: false }
      ]},
      { tipo: 'clasifica', titulo: 'Lugar o producto', instruccion: 'Arrastra cada palabra a su grupo.', categorias: ['Es un lugar', 'Es un producto'], items: [
        { texto: 'Yakkyoku', cat: 'Es un lugar' }, { texto: 'Kusuri', cat: 'Es un producto' }, { texto: 'Netsu-zamashi', cat: 'Es un producto' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige la palabra correcta.', banco: ['yakkyoku', 'netsu-zamashi'], frases: [
        { texto: 'Necesitas comprar medicinas, buscas la: "___".', respuestas: ['yakkyoku'] },
        { texto: 'Tienes fiebre, pides un: "___".', respuestas: ['netsu-zamashi'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la visita a la farmacia', instruccion: 'Pon los pasos en orden.', pasos: [
        'Yakkyoku wa doko desu ka (buscas la farmacia)', 'Kusuri o kudasai (pides medicina)', 'Netsu-zamashi (especificas qué necesitas)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no es de la farmacia.', preguntas: [
        { grupo: '¿Cuál de estas NO tiene que ver con la farmacia?', explicacion: 'Byouin es "hospital", un lugar distinto.', opciones: [
          { texto: 'Yakkyoku', intruso: false }, { texto: 'Kusuri', intruso: false }, { texto: 'Byouin', intruso: true }
        ]}
      ]}
    ]
  },

  'd14-pc-3': {
    contenido: `## Desarrollo
Los números y servicios de emergencia, y el vocabulario para pedir ayuda urgente médica o policial.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| 救急車 | kyuukyuusha | ambulancia |
| 警察 | keisatsu | policía |
| 119 / 110 | hyaku-juu-kyuu / hyaku-juu | ambulancia-bomberos / policía |

## 🧠 Truco para recordar
Ya viste esta distinción antes: 119 cubre ambulancia y bomberos juntos, 110 es solo policía — un reparto distinto al de muchos países.

## 👁 confusión
En una emergencia real, si no consigues comunicarte bien, seguir en la línea y repetir la palabra clave (kyuukyuusha o keisatsu) suele bastar para que te envíen ayuda, incluso con japonés limitado.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada palabra con su significado', instruccion: 'Toca una palabra y luego su significado.', pares: [
        { a: '救急車 (kyuukyuusha)', b: 'Ambulancia' }, { a: '警察 (keisatsu)', b: 'Policía' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'El 119 sirve para ambulancia y bomberos.', esVerdadero: true },
        { texto: 'El 110 es el número de ambulancia.', esVerdadero: false }
      ]},
      { tipo: 'clasifica', titulo: 'Médico o policial', instruccion: 'Arrastra cada palabra a su grupo.', categorias: ['Servicio médico', 'Servicio policial'], items: [
        { texto: 'Kyuukyuusha', cat: 'Servicio médico' }, { texto: '119', cat: 'Servicio médico' }, { texto: 'Keisatsu', cat: 'Servicio policial' }, { texto: '110', cat: 'Servicio policial' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige el número correcto.', banco: ['119', '110'], frases: [
        { texto: 'Llamas pidiendo una ambulancia al: "___".', respuestas: ['119'] },
        { texto: 'Llamas pidiendo la policía al: "___".', respuestas: ['110'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena una emergencia', instruccion: 'Pon los pasos en orden.', pasos: [
        'Identificas si es médica o policial', 'Marcas 119 o 110 según el caso', 'Repites kyuukyuusha o keisatsu si hace falta'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona el que no es un número de emergencia.', preguntas: [
        { grupo: '¿Cuál de estos NO es un número de emergencia en Japón?', explicacion: 'El 112 es el número europeo, no el japonés.', opciones: [
          { texto: '119', intruso: false }, { texto: '110', intruso: false }, { texto: '112', intruso: true }
        ]}
      ]}
    ]
  },

  'd14-fc-1': {
    contenido: `## Desarrollo
Combinar las partes del cuerpo con la plantilla de dolor para comunicar exactamente qué te pasa.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| 頭が痛いです | atama ga itai desu | me duele la cabeza |
| お腹が痛いです | onaka ga itai desu | me duele el estómago |
| のどが痛いです | nodo ga itai desu | me duele la garganta |

## 🧠 Truco para recordar
Es la misma plantilla de siempre, simplemente aplicada a las palabras nuevas de hoy — no hay gramática nueva que aprender aquí.

## 👁 confusión
Si el dolor es en varias zonas a la vez, puedes simplemente decir varias frases seguidas ("atama ga itai desu, nodo mo itai desu") en vez de buscar una única frase compleja.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: '頭が痛いです', b: 'Me duele la cabeza' }, { a: 'お腹が痛いです', b: 'Me duele el estómago' }, { a: 'のどが痛いです', b: 'Me duele la garganta' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Puedes combinar varias frases si te duele más de una zona.', esVerdadero: true },
        { texto: 'Hace falta una gramática distinta para cada parte del cuerpo.', esVerdadero: false }
      ]},
      { tipo: 'rellena', titulo: 'Completa la frase', instruccion: 'Elige la parte del cuerpo correcta.', banco: ['atama', 'nodo'], frases: [
        { texto: 'Tienes dolor de cabeza: "___ ga itai desu".', respuestas: ['atama'] },
        { texto: 'Tienes la garganta irritada: "___ ga itai desu".', respuestas: ['nodo'] }
      ]},
      { tipo: 'clasifica', titulo: 'Cabeza o torso', instruccion: 'Arrastra cada frase a su grupo.', categorias: ['Dolor de cabeza/garganta', 'Dolor de torso'], items: [
        { texto: 'Atama ga itai desu', cat: 'Dolor de cabeza/garganta' }, { texto: 'Nodo ga itai desu', cat: 'Dolor de cabeza/garganta' }, { texto: 'Onaka ga itai desu', cat: 'Dolor de torso' }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la situación', instruccion: 'Pon los pasos en orden.', pasos: [
        'Sientes molestia', 'Identificas qué parte te duele', 'Dices "[parte] ga itai desu"'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no describe dolor.', preguntas: [
        { grupo: '¿Cuál de estas NO describe un dolor?', explicacion: 'Kibun ga warui desu es "me encuentro mal" en general, no un dolor localizado.', opciones: [
          { texto: 'Atama ga itai desu', intruso: false }, { texto: 'Onaka ga itai desu', intruso: false }, { texto: 'Kibun ga warui desu', intruso: true }
        ]}
      ]}
    ]
  },

  'd14-fc-2': {
    contenido: `## Desarrollo
Pedir en la farmacia lo que necesitas, combinando síntoma y producto.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| 熱冷ましをください | netsu-zamashi o kudasai | deme un antipirético, por favor |
| これに効く薬はありますか？ | kore ni kiku kusuri wa arimasu ka? | ¿tiene alguna medicina para esto? |

## 🧠 Truco para recordar
La segunda frase es una plantilla comodín para cuando no sabes el nombre exacto del medicamento que necesitas — señala el síntoma o el producto y pregunta así.

## 👁 confusión
El personal de farmacia puede no hablar inglés fluido — combinar la frase con gestos (señalarte la zona que duele) suele ayudar mucho a que te entiendan rápido.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: '熱冷ましをください', b: 'Deme un antipirético, por favor' }, { a: 'これに効く薬はありますか？', b: '¿Tiene alguna medicina para esto?' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'La segunda frase es útil cuando no sabes el nombre exacto del medicamento.', esVerdadero: true },
        { texto: 'Todo el personal de farmacia habla inglés fluido.', esVerdadero: false }
      ]},
      { tipo: 'rellena', titulo: 'Completa la petición', instruccion: 'Elige la frase correcta.', banco: ['netsu-zamashi o kudasai', 'kore ni kiku kusuri wa arimasu ka'], frases: [
        { texto: 'Sabes exactamente lo que necesitas: "___".', respuestas: ['netsu-zamashi o kudasai'] },
        { texto: 'No sabes el nombre, señalas el síntoma: "___".', respuestas: ['kore ni kiku kusuri wa arimasu ka'] }
      ]},
      { tipo: 'clasifica', titulo: 'Petición específica o genérica', instruccion: 'Arrastra cada frase a su grupo.', categorias: ['Petición específica', 'Petición genérica'], items: [
        { texto: 'Netsu-zamashi o kudasai', cat: 'Petición específica' }, { texto: 'Kore ni kiku kusuri wa arimasu ka', cat: 'Petición genérica' }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la visita a la farmacia', instruccion: 'Pon los pasos en orden.', pasos: [
        'Onaka ga itai desu (explicas el síntoma)', 'Kore ni kiku kusuri wa arimasu ka (preguntas por medicina)', 'Recibes el producto'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no tiene que ver con pedir en la farmacia.', preguntas: [
        { grupo: '¿Cuál de estas NO tiene que ver con pedir algo en la farmacia?', explicacion: 'Kaisatsu es del tren, no de la farmacia.', opciones: [
          { texto: 'Netsu-zamashi o kudasai', intruso: false }, { texto: 'Kore ni kiku kusuri wa arimasu ka', intruso: false }, { texto: 'Kaisatsu', intruso: true }
        ]}
      ]}
    ]
  },

  'd14-fc-3': {
    contenido: `## Desarrollo
Llamar a emergencias y comunicar lo esencial con claridad, aunque tu japonés sea limitado.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| 救急車を呼んでください | kyuukyuusha o yonde kudasai | llame a una ambulancia, por favor |
| 警察を呼んでください | keisatsu o yonde kudasai | llame a la policía, por favor |

## 🧠 Truco para recordar
"[Servicio] o yonde kudasai" (llame a..., por favor) es la plantilla — cambia solo el servicio que necesitas.

## 👁 confusión
En una llamada de emergencia real, repetir claramente tu ubicación (nombre del lugar, estación cercana) es tan importante como pedir el servicio correcto — practica mentalmente cómo dirías dónde estás.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: '救急車を呼んでください', b: 'Llame a una ambulancia, por favor' }, { a: '警察を呼んでください', b: 'Llame a la policía, por favor' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: '"[Servicio] o yonde kudasai" es una plantilla reutilizable.', esVerdadero: true },
        { texto: 'La ubicación no es importante en una llamada de emergencia.', esVerdadero: false }
      ]},
      { tipo: 'rellena', titulo: 'Completa la petición', instruccion: 'Elige la palabra correcta.', banco: ['kyuukyuusha', 'keisatsu'], frases: [
        { texto: 'Necesitas asistencia médica urgente: "___ o yonde kudasai".', respuestas: ['kyuukyuusha'] },
        { texto: 'Necesitas asistencia policial: "___ o yonde kudasai".', respuestas: ['keisatsu'] }
      ]},
      { tipo: 'clasifica', titulo: 'Médica o policial', instruccion: 'Arrastra cada frase a su grupo.', categorias: ['Emergencia médica', 'Emergencia policial'], items: [
        { texto: 'Kyuukyuusha o yonde kudasai', cat: 'Emergencia médica' }, { texto: 'Keisatsu o yonde kudasai', cat: 'Emergencia policial' }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la llamada de emergencia', instruccion: 'Pon los pasos en orden.', pasos: [
        'Identificas el tipo de emergencia', 'Kyuukyuusha/keisatsu o yonde kudasai (pides el servicio)', 'Indicas tu ubicación con claridad'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no es una petición de emergencia.', preguntas: [
        { grupo: '¿Cuál de estas NO es una petición de emergencia?', explicacion: 'Kusuri o kudasai es una petición normal en farmacia, no de emergencia.', opciones: [
          { texto: 'Kyuukyuusha o yonde kudasai', intruso: false }, { texto: 'Keisatsu o yonde kudasai', intruso: false }, { texto: 'Kusuri o kudasai', intruso: true }
        ]}
      ]}
    ]
  },

  'd14-co-1': {
    contenido: `## Desarrollo
Recordatorio del sistema de emergencias japonés y un dato adicional: cómo funciona la llamada en sí.

## ✅ Lo esencial

| Dato | Detalle |
|---|---|
| 119 | Ambulancia y bomberos, mismo número |
| 110 | Policía, número distinto |
| Idioma | Algunos centros de emergencia tienen líneas con soporte en inglés, aunque no siempre inmediato |

## 🧠 Truco para recordar
Si dudas entre 119 y 110, piensa: "119 es para tu cuerpo o un incendio, 110 es para un delito o un problema de seguridad".

## 👁 confusión
No cuelgues si tarda en atenderte alguien que hable tu idioma — mantente en la línea y repite palabras clave simples (kyuukyuusha, byouin, keisatsu) hasta que te entiendan o te transfieran.`,
    juegos: [
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Algunos centros de emergencia japoneses tienen soporte en inglés.', esVerdadero: true },
        { texto: 'El 119 es solo para incendios, nunca para temas médicos.', esVerdadero: false }
      ]},
      { tipo: 'conecta', titulo: 'Conecta cada número con su uso', instruccion: 'Toca un número y luego su uso.', pares: [
        { a: '119', b: 'Cuerpo o incendio' }, { a: '110', b: 'Delito o seguridad' }
      ]},
      { tipo: 'clasifica', titulo: 'Médico/incendio o seguridad', instruccion: 'Arrastra cada situación a su número.', categorias: ['Llamas al 119', 'Llamas al 110'], items: [
        { texto: 'Alguien se ha desmayado', cat: 'Llamas al 119' }, { texto: 'Te han robado algo', cat: 'Llamas al 110' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige el número correcto.', banco: ['119', '110'], frases: [
        { texto: 'Para un problema médico urgente llamas al: "___".', respuestas: ['119'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la llamada de emergencia', instruccion: 'Pon los pasos en orden.', pasos: [
        'Identificas si es médico o de seguridad', 'Marcas 119 o 110', 'Repites palabras clave si no te entienden al momento'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la idea que NO es correcta.', preguntas: [
        { grupo: '¿Cuál de estas ideas es incorrecta?', explicacion: 'Colgar y volver a llamar no ayuda; hay que mantenerse en línea.', opciones: [
          { texto: 'Repetir palabras clave ayuda', intruso: false }, { texto: 'Algunos centros tienen soporte en inglés', intruso: false }, { texto: 'Es mejor colgar si tardan en atenderte en tu idioma', intruso: true }
        ]}
      ]}
    ]
  },

  'd14-co-2': {
    contenido: `## Desarrollo
Qué esperar al entrar en una farmacia japonesa, un poco distinta de lo que quizás conoces.

## ✅ Lo esencial

| Dato | Detalle |
|---|---|
| Sin receta | Muchas medicinas básicas se venden sin receta, similar a otros países |
| Asesoramiento | El personal (a veces farmacéutico, a veces dependiente) puede ayudarte a elegir |
| Drugstores | Muchas farmacias japonesas también venden cosmética, higiene y snacks, no solo medicinas |

## 🧠 Truco para recordar
Si ves una tienda grande y colorida con cosmética, snacks y medicinas mezclados, probablemente sea una "drugstore" japonesa — el equivalente ampliado de una farmacia.

## 👁 confusión
No todo el personal de estas tiendas es farmacéutico cualificado — para algo serio o una duda médica real, mejor ve a un byouin (hospital/clínica) en vez de fiarte solo del consejo del dependiente.`,
    juegos: [
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Muchas farmacias japonesas venden también cosmética y snacks.', esVerdadero: true },
        { texto: 'Todo el personal de una drugstore es farmacéutico cualificado.', esVerdadero: false }
      ]},
      { tipo: 'conecta', titulo: 'Conecta cada concepto con su descripción', instruccion: 'Toca un concepto y luego su descripción.', pares: [
        { a: 'Drugstore', b: 'Mezcla medicinas, cosmética y snacks' }, { a: 'Sin receta', b: 'Muchas medicinas básicas no la requieren' }
      ]},
      { tipo: 'clasifica', titulo: 'Farmacia simple o drugstore', instruccion: 'Arrastra cada producto a dónde lo encontrarías.', categorias: ['Típico de una drugstore', 'Solo en hospital'], items: [
        { texto: 'Cosmética', cat: 'Típico de una drugstore' }, { texto: 'Snacks', cat: 'Típico de una drugstore' }, { texto: 'Tratamiento médico serio', cat: 'Solo en hospital' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige la palabra correcta.', banco: ['byouin'], frases: [
        { texto: 'Para algo serio, mejor acudir a un: "___" (hospital), no solo a la farmacia.', respuestas: ['byouin'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la idea', instruccion: 'Pon los pasos en orden lógico.', pasos: [
        'Molestia leve', 'Vas a una drugstore/yakkyoku', 'Si es grave, vas a un byouin en vez de solo la farmacia'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona lo que NO suele venderse en una drugstore japonesa.', preguntas: [
        { grupo: '¿Cuál de estos NO es típico de una drugstore japonesa?', explicacion: 'El equipaje de viaje no es típico de estas tiendas.', opciones: [
          { texto: 'Cosmética', intruso: false }, { texto: 'Snacks', intruso: false }, { texto: 'Maletas de viaje', intruso: true }
        ]}
      ]}
    ]
  },

  'd14-co-3': {
    contenido: `## Desarrollo
Un dato práctico importante antes de viajar: el seguro de viaje y cómo funciona la atención hospitalaria para extranjeros en Japón.

## ✅ Lo esencial

| Dato | Detalle |
|---|---|
| Coste sin seguro | La atención médica en Japón puede ser cara sin seguro adecuado |
| Pago | Muchos hospitales piden pago en el momento, luego reclamas a tu seguro |
| Documentación | Lleva encima los datos de tu seguro de viaje y el número de contacto de emergencia |

## 🧠 Truco para recordar
Antes de viajar, guarda una foto o copia de tu póliza de seguro en el móvil — te la pueden pedir directamente en el hospital.

## 👁 confusión
No todos los hospitales japoneses trabajan directamente con aseguradoras extranjeras — lo habitual es pagar tú primero y reclamar el reembolso después con las facturas y justificantes.`,
    juegos: [
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Muchos hospitales japoneses piden el pago en el momento.', esVerdadero: true },
        { texto: 'Todos los hospitales trabajan directamente con cualquier aseguradora extranjera.', esVerdadero: false }
      ]},
      { tipo: 'conecta', titulo: 'Conecta cada consejo con su motivo', instruccion: 'Toca un consejo y luego su motivo.', pares: [
        { a: 'Llevar copia del seguro', b: 'Te lo pueden pedir en el hospital' }, { a: 'Guardar facturas', b: 'Para reclamar el reembolso después' }
      ]},
      { tipo: 'clasifica', titulo: 'Antes o después del viaje', instruccion: 'Arrastra cada acción a su momento.', categorias: ['Antes de viajar', 'Durante/después de la emergencia'], items: [
        { texto: 'Contratar seguro de viaje', cat: 'Antes de viajar' }, { texto: 'Pagar y guardar justificantes', cat: 'Durante/después de la emergencia' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige la palabra correcta.', banco: ['seguro'], frases: [
        { texto: 'Antes de viajar, conviene contratar un buen: "___" de viaje.', respuestas: ['seguro'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena el proceso ante una emergencia médica', instruccion: 'Pon los pasos en orden.', pasos: [
        'Vas al hospital', 'Pagas en el momento', 'Guardas las facturas', 'Reclamas el reembolso a tu seguro'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que NO es una buena práctica antes de un viaje.', preguntas: [
        { grupo: '¿Cuál de estas NO es una buena práctica antes de viajar?', explicacion: 'No llevar ningún tipo de seguro es un riesgo, no una buena práctica.', opciones: [
          { texto: 'Contratar seguro de viaje', intruso: false }, { texto: 'Llevar copia de la póliza', intruso: false }, { texto: 'No llevar ningún seguro', intruso: true }
        ]}
      ]}
    ]
  },

  // ══════════════ DÍA 15 · Cultura práctica ══════════════

  'd15-pc-1': {
    contenido: `## Desarrollo
Vocabulario para reconocer los elementos de un templo o santuario, más allá de lo ya visto.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| 神社 | jinja | santuario sintoísta |
| お寺 | otera | templo budista |
| お守り | omamori | amuleto protector |

## 🧠 Truco para recordar
Jinja (sintoísta) y otera (budista) son las dos grandes tradiciones religiosas de Japón — no son lo mismo, aunque a veces coexistan en un mismo recinto.

## 👁 confusión
Omamori no son simples souvenirs — son amuletos con significado real para muchos japoneses (protección, buena suerte, salud); trátalos con cierto respeto aunque los compres como turista.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada palabra con su significado', instruccion: 'Toca una palabra y luego su significado.', pares: [
        { a: '神社 (jinja)', b: 'Santuario sintoísta' }, { a: 'お寺 (otera)', b: 'Templo budista' }, { a: 'お守り (omamori)', b: 'Amuleto protector' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Jinja y otera son exactamente lo mismo.', esVerdadero: false },
        { texto: 'Omamori tienen un significado real para muchos japoneses.', esVerdadero: true }
      ]},
      { tipo: 'clasifica', titulo: 'Sintoísta o budista', instruccion: 'Arrastra cada palabra a su tradición.', categorias: ['Sintoísta', 'Budista'], items: [
        { texto: 'Jinja', cat: 'Sintoísta' }, { texto: 'Otera', cat: 'Budista' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige la palabra correcta.', banco: ['jinja', 'omamori'], frases: [
        { texto: 'Un santuario sintoísta es un: "___".', respuestas: ['jinja'] },
        { texto: 'Compras un amuleto de protección: un "___".', respuestas: ['omamori'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la visita', instruccion: 'Pon los pasos en orden.', pasos: [
        'Llegas a un jinja o otera', 'Sigues las normas del lugar (torii, temizuya)', 'Quizás compras un omamori'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no es un lugar de culto ni objeto religioso.', preguntas: [
        { grupo: '¿Cuál de estas NO tiene que ver con templos/santuarios?', explicacion: 'Konbini es una tienda, no un lugar de culto.', opciones: [
          { texto: 'Jinja', intruso: false }, { texto: 'Otera', intruso: false }, { texto: 'Konbini', intruso: true }
        ]}
      ]}
    ]
  },

  'd15-pc-2': {
    contenido: `## Desarrollo
Reconocer carteles y señalización habitual, más allá de "kinshi" (prohibido) que ya conoces.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| 立入禁止 | tachiiri kinshi | prohibido el paso |
| 撮影禁止 | satsuei kinshi | prohibido hacer fotos |
| 火気厳禁 | kaki genkin | prohibido el fuego (llamas) |

## 🧠 Truco para recordar
Todos terminan reconociendo el mismo patrón de "kinshi" (prohibido) que ya viste — solo cambia lo que va delante para saber qué está prohibido exactamente.

## 👁 confusión
Kaki genkin usa "genkin" con un significado distinto al "efectivo" que ya conoces (現金) — aquí el kanji es diferente (厳禁, "estrictamente prohibido"), aunque suenen parecido al oído.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada cartel con su significado', instruccion: 'Toca un cartel y luego su significado.', pares: [
        { a: '立入禁止', b: 'Prohibido el paso' }, { a: '撮影禁止', b: 'Prohibido hacer fotos' }, { a: '火気厳禁', b: 'Prohibido el fuego' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Todos estos carteles comparten la idea de "prohibido".', esVerdadero: true },
        { texto: 'El "genkin" de kaki genkin es el mismo kanji que "efectivo".', esVerdadero: false }
      ]},
      { tipo: 'clasifica', titulo: 'Prohíbe paso, fotos o fuego', instruccion: 'Arrastra cada cartel a su prohibición.', categorias: ['Prohíbe pasar', 'Prohíbe hacer fotos'], items: [
        { texto: 'Tachiiri kinshi', cat: 'Prohíbe pasar' }, { texto: 'Satsuei kinshi', cat: 'Prohíbe hacer fotos' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige el cartel correcto.', banco: ['tachiiri kinshi', 'satsuei kinshi'], frases: [
        { texto: 'Ves una zona restringida con este cartel: "___".', respuestas: ['tachiiri kinshi'] },
        { texto: 'No puedes fotografiar esta obra de arte: "___".', respuestas: ['satsuei kinshi'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la lectura de un cartel', instruccion: 'Pon los pasos en orden lógico.', pasos: [
        'Ves un cartel con kanji desconocidos', 'Identificas "kinshi" al final', 'Sabes que algo está prohibido, aunque no sepas exactamente qué'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona el que no es un cartel de prohibición.', preguntas: [
        { grupo: '¿Cuál de estos NO es un cartel de prohibición?', explicacion: 'Irasshaimase es un saludo, no una prohibición.', opciones: [
          { texto: 'Tachiiri kinshi', intruso: false }, { texto: 'Satsuei kinshi', intruso: false }, { texto: 'Irasshaimase', intruso: true }
        ]}
      ]}
    ]
  },

  'd15-pc-3': {
    contenido: `## Desarrollo
Vocabulario de etiqueta social: el saludo no verbal más importante y algunos matices de la comunicación no verbal japonesa.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| お辞儀 | ojigi | la reverencia |
| 名刺 | meishi | tarjeta de presentación (contexto de negocios) |

## 🧠 Truco para recordar
Ojigi tiene distintos grados de inclinación según el contexto — no necesitas dominarlos todos, un pequeño gesto de la cabeza ya se interpreta como un intento respetuoso.

## 👁 confusión
El intercambio de meishi (tarjeta de presentación) en contexto de negocios tiene su propio ritual (se entrega y recibe con ambas manos, se examina con atención) — poco relevante para un viaje turístico normal, pero interesante como curiosidad cultural.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada palabra con su significado', instruccion: 'Toca una palabra y luego su significado.', pares: [
        { a: 'お辞儀 (ojigi)', b: 'La reverencia' }, { a: '名刺 (meishi)', b: 'Tarjeta de presentación' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Un pequeño gesto de cabeza ya se interpreta como intento de ojigi respetuoso.', esVerdadero: true },
        { texto: 'El intercambio de meishi es irrelevante en contextos de negocios japoneses.', esVerdadero: false }
      ]},
      { tipo: 'clasifica', titulo: 'Turístico o de negocios', instruccion: 'Arrastra cada elemento a su contexto principal.', categorias: ['Relevante en cualquier contexto', 'Sobre todo en negocios'], items: [
        { texto: 'Ojigi', cat: 'Relevante en cualquier contexto' }, { texto: 'Meishi', cat: 'Sobre todo en negocios' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige la palabra correcta.', banco: ['ojigi'], frases: [
        { texto: 'El saludo/agradecimiento no verbal más común en Japón es el: "___".', respuestas: ['ojigi'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la idea', instruccion: 'Pon los pasos en orden lógico.', pasos: [
        'Agradeces algo a alguien', 'Añades un pequeño ojigi', 'El gesto se interpreta como cortesía'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no es un elemento de etiqueta social.', preguntas: [
        { grupo: '¿Cuál de estas NO es un elemento de etiqueta social japonesa?', explicacion: 'Kippu-uriba es sobre trenes, no sobre etiqueta social.', opciones: [
          { texto: 'Ojigi', intruso: false }, { texto: 'Meishi', intruso: false }, { texto: 'Kippu-uriba', intruso: true }
        ]}
      ]}
    ]
  },

  'd15-fc-1': {
    contenido: `## Desarrollo
Preguntar normas concretas en un templo o santuario antes de arriesgarte a hacer algo indebido.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| ここに入ってもいいですか？ | koko ni haitte mo ii desu ka? | ¿puedo entrar aquí? |
| 写真を撮ってもいいですか？ | shashin o totte mo ii desu ka? | ¿puedo hacer una foto? |

## 🧠 Truco para recordar
Sigues usando la plantilla "te mo ii desu ka" que ya dominas desde hace varios días — aquí simplemente la aplicas a espacios religiosos.

## 👁 confusión
Preguntar antes de entrar en zonas que parecen "solo para visitas" es más seguro que asumir que todo el recinto es de libre acceso — algunas áreas de templos/santuarios están reservadas a rituales o personal.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: 'ここに入ってもいいですか？', b: '¿Puedo entrar aquí?' }, { a: '写真を撮ってもいいですか？', b: '¿Puedo hacer una foto?' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Algunas áreas de templos están reservadas y no son de libre acceso.', esVerdadero: true },
        { texto: 'Todo el recinto de un templo es siempre de libre acceso.', esVerdadero: false }
      ]},
      { tipo: 'rellena', titulo: 'Completa la pregunta', instruccion: 'Elige la frase correcta.', banco: ['haitte mo ii desu ka', 'totte mo ii desu ka'], frases: [
        { texto: 'Dudas si puedes entrar en una zona: "koko ni ___".', respuestas: ['haitte mo ii desu ka'] },
        { texto: 'Quieres hacer una foto: "shashin o ___".', respuestas: ['totte mo ii desu ka'] }
      ]},
      { tipo: 'clasifica', titulo: 'Entrar o fotografiar', instruccion: 'Arrastra cada frase a su grupo.', categorias: ['Pedir permiso para entrar', 'Pedir permiso para fotografiar'], items: [
        { texto: 'Koko ni haitte mo ii desu ka', cat: 'Pedir permiso para entrar' }, { texto: 'Shashin o totte mo ii desu ka', cat: 'Pedir permiso para fotografiar' }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la visita respetuosa', instruccion: 'Pon los pasos en orden.', pasos: [
        'Koko ni haitte mo ii desu ka (preguntas antes de entrar)', 'Shashin o totte mo ii desu ka (preguntas antes de fotografiar)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no tiene que ver con pedir permiso en un templo.', preguntas: [
        { grupo: '¿Cuál de estas NO tiene que ver con pedir permiso en un espacio religioso?', explicacion: 'Ikura desu ka es sobre precio, no sobre pedir permiso.', opciones: [
          { texto: 'Koko ni haitte mo ii desu ka', intruso: false }, { texto: 'Shashin o totte mo ii desu ka', intruso: false }, { texto: 'Ikura desu ka', intruso: true }
        ]}
      ]}
    ]
  },

  'd15-fc-2': {
    contenido: `## Desarrollo
Pedir permiso cultural en situaciones más generales, más allá de templos — cualquier duda sobre si algo está bien visto.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| これは大丈夫ですか？ | kore wa daijoubu desu ka? | ¿esto está bien / es aceptable? |
| すみません、これでいいですか？ | sumimasen, kore de ii desu ka? | disculpe, ¿esto está bien así? |

## 🧠 Truco para recordar
Estas dos frases son comodines para cualquier duda cultural puntual — desde cómo colocarte en una cola hasta cómo sujetar algo, sin necesitar vocabulario específico de cada situación.

## 👁 confusión
Kore wa daijoubu desu ka pregunta sobre una cosa/acción concreta que señalas — no es lo mismo que preguntar por tu propio estado de salud (daijoubu desu ka a secas, dirigido a una persona).`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: 'これは大丈夫ですか？', b: '¿Esto está bien/es aceptable?' }, { a: 'すみません、これでいいですか？', b: 'Disculpe, ¿esto está bien así?' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Estas frases sirven como comodín cultural para muchas dudas puntuales.', esVerdadero: true },
        { texto: 'Kore wa daijoubu desu ka solo se puede usar sobre la salud de una persona.', esVerdadero: false }
      ]},
      { tipo: 'rellena', titulo: 'Completa la duda cultural', instruccion: 'Elige la frase correcta.', banco: ['kore wa daijoubu desu ka'], frases: [
        { texto: 'Dudas si algo que has hecho es aceptable: "___".', respuestas: ['kore wa daijoubu desu ka'] }
      ]},
      { tipo: 'clasifica', titulo: 'Sobre objeto/acción o sobre persona', instruccion: 'Arrastra cada uso a su grupo.', categorias: ['Sobre un objeto o acción', 'Sobre el estado de una persona'], items: [
        { texto: 'Kore wa daijoubu desu ka (señalando algo)', cat: 'Sobre un objeto o acción' }, { texto: 'Daijoubu desu ka (a una persona)', cat: 'Sobre el estado de una persona' }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la duda cultural', instruccion: 'Pon los pasos en orden.', pasos: [
        'Tienes una duda sobre si algo está bien', 'Sumimasen (llamas la atención)', 'Kore wa daijoubu desu ka (preguntas)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no es una forma de pedir confirmación cultural.', preguntas: [
        { grupo: '¿Cuál de estas NO es una forma de pedir confirmación sobre algo?', explicacion: 'Ikutsu desu ka pregunta cantidad, no confirmación.', opciones: [
          { texto: 'Kore wa daijoubu desu ka', intruso: false }, { texto: 'Kore de ii desu ka', intruso: false }, { texto: 'Ikutsu desu ka', intruso: true }
        ]}
      ]}
    ]
  },

  'd15-fc-3': {
    contenido: `## Desarrollo
Disculparte específicamente por un fallo cultural, distinto de un sumimasen genérico.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| 知りませんでした、すみません | shirimasen deshita, sumimasen | no lo sabía, disculpe |
| 失礼しました | shitsurei shimashita | he sido descortés, disculpe |

## 🧠 Truco para recordar
Shitsurei shimashita es una disculpa más formal y específica que sumimasen — resérvala para cuando sientas que de verdad has cometido un error de etiqueta, no para situaciones triviales.

## 👁 confusión
Shirimasen (no sabía/no lo sé) es distinto de wakarimasen (no entiendo) que ya conoces — shirimasen es sobre conocimiento previo, wakarimasen es sobre comprensión en el momento.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: '知りませんでした、すみません', b: 'No lo sabía, disculpe' }, { a: '失礼しました', b: 'He sido descortés, disculpe' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Shirimasen y wakarimasen significan exactamente lo mismo.', esVerdadero: false },
        { texto: 'Shitsurei shimashita es una disculpa más formal que un sumimasen simple.', esVerdadero: true }
      ]},
      { tipo: 'rellena', titulo: 'Completa la disculpa', instruccion: 'Elige la frase correcta.', banco: ['shirimasen deshita', 'shitsurei shimashita'], frases: [
        { texto: 'No conocías esa norma cultural: "___, sumimasen".', respuestas: ['shirimasen deshita'] },
        { texto: 'Sientes que has sido descortés: "___".', respuestas: ['shitsurei shimashita'] }
      ]},
      { tipo: 'clasifica', titulo: 'Falta de conocimiento o descortesía', instruccion: 'Arrastra cada frase a su grupo.', categorias: ['No sabías la norma', 'Reconoces descortesía'], items: [
        { texto: 'Shirimasen deshita', cat: 'No sabías la norma' }, { texto: 'Shitsurei shimashita', cat: 'Reconoces descortesía' }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la situación', instruccion: 'Pon los pasos en orden.', pasos: [
        'Cometes un error cultural sin saberlo', 'Alguien te lo indica', 'Shirimasen deshita, sumimasen (te disculpas)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no es una disculpa.', preguntas: [
        { grupo: '¿Cuál de estas NO es una forma de disculparse?', explicacion: 'Ki ni irimashita es "me gusta esto", no una disculpa.', opciones: [
          { texto: 'Shirimasen deshita', intruso: false }, { texto: 'Shitsurei shimashita', intruso: false }, { texto: 'Ki ni irimashita', intruso: true }
        ]}
      ]}
    ]
  },

  'd15-co-1': {
    contenido: `## Desarrollo
Recordatorio ampliado del torii y el temizuya, con un paso intermedio que quizás no viste con detalle: cómo se hace la reverencia y el aplauso en un santuario sintoísta.

## ✅ Lo esencial

| Paso | Detalle |
|---|---|
| 二礼二拍手一礼 (nirei nihakushu ichirei) | Dos reverencias, dos palmadas, una reverencia final — ritual típico en santuarios sintoístas |
| Cuándo se hace | Al rezar frente al edificio principal del santuario |
| No obligatorio para turistas | Puedes simplemente observar con respeto si no quieres participar |

## 🧠 Truco para recordar
El nombre del ritual es literalmente su descripción: ni (dos) + rei (reverencia) + ni (dos) + hakushu (palmadas) + ichi (una) + rei (reverencia) — 2-2-1.

## 👁 confusión
Este ritual es específico de santuarios sintoístas (jinja) — en templos budistas (otera) el gesto de oración es distinto, normalmente solo juntar las manos sin aplaudir.`,
    juegos: [
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'El ritual "2 reverencias, 2 palmadas, 1 reverencia" es típico de santuarios sintoístas.', esVerdadero: true },
        { texto: 'Es obligatorio que los turistas participen en este ritual.', esVerdadero: false }
      ]},
      { tipo: 'conecta', titulo: 'Conecta cada número con su acción', instruccion: 'Toca un número y luego su acción.', pares: [
        { a: 'Dos primero', b: 'Reverencias' }, { a: 'Dos después', b: 'Palmadas' }, { a: 'Una al final', b: 'Reverencia final' }
      ]},
      { tipo: 'clasifica', titulo: 'Sintoísta o budista', instruccion: 'Arrastra cada gesto a su tradición.', categorias: ['Santuario sintoísta (jinja)', 'Templo budista (otera)'], items: [
        { texto: '2 reverencias + 2 palmadas + 1 reverencia', cat: 'Santuario sintoísta (jinja)' }, { texto: 'Juntar las manos sin aplaudir', cat: 'Templo budista (otera)' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la secuencia', instruccion: 'Elige el número correcto.', banco: ['dos', 'una'], frases: [
        { texto: 'Se hacen "___" reverencias al principio del ritual.', respuestas: ['dos'] },
        { texto: 'Se hace "___" reverencia al final.', respuestas: ['una'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena el ritual sintoísta', instruccion: 'Pon los pasos en orden.', pasos: [
        'Dos reverencias', 'Dos palmadas', 'Una reverencia final'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona el paso que NO forma parte de este ritual.', preguntas: [
        { grupo: '¿Cuál de estos pasos NO forma parte del ritual "2-2-1"?', explicacion: 'Quitarse los zapatos no forma parte de este ritual concreto de oración.', opciones: [
          { texto: 'Dos reverencias', intruso: false }, { texto: 'Dos palmadas', intruso: false }, { texto: 'Quitarse los zapatos', intruso: true }
        ]}
      ]}
    ]
  },

  'd15-co-2': {
    contenido: `## Desarrollo
Recordatorio ampliado sobre propinas y regalos: la lógica cultural detrás de por qué no se espera propina, pero sí se valoran mucho los pequeños regalos (omiyage).

## ✅ Lo esencial

| Concepto | Detalle |
|---|---|
| Propina | No se espera ni se dan en casi ningún contexto |
| お土産 (omiyage) | Pequeño regalo/recuerdo que se trae de un viaje para compañeros, familia o amigos |
| Costumbre del omiyage | Es casi una obligación social tras un viaje, incluso corto |

## 🧠 Truco para recordar
Piensa en el omiyage como el reverso cultural de la propina: en vez de "pagar de más" a un desconocido por un servicio, "compartes" tu viaje con la gente cercana trayéndoles un pequeño detalle.

## 👁 confusión
Un omiyage no necesita ser caro ni elaborado — dulces regionales envueltos individualmente (muy comunes en estaciones y aeropuertos) son la opción más típica y apreciada.`,
    juegos: [
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Omiyage es un pequeño regalo que se trae de viaje.', esVerdadero: true },
        { texto: 'Se espera dejar propina en casi cualquier contexto en Japón.', esVerdadero: false }
      ]},
      { tipo: 'conecta', titulo: 'Conecta cada concepto con su descripción', instruccion: 'Toca un concepto y luego su descripción.', pares: [
        { a: 'Propina', b: 'No se espera ni se da' }, { a: 'Omiyage', b: 'Regalo de vuelta del viaje' }
      ]},
      { tipo: 'clasifica', titulo: 'Costumbre esperada o no esperada', instruccion: 'Arrastra cada práctica a su grupo.', categorias: ['Costumbre esperada', 'No es costumbre'], items: [
        { texto: 'Traer omiyage tras un viaje', cat: 'Costumbre esperada' }, { texto: 'Dejar propina', cat: 'No es costumbre' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige la palabra correcta.', banco: ['omiyage'], frases: [
        { texto: 'El pequeño regalo que se trae de un viaje se llama: "___".', respuestas: ['omiyage'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la idea', instruccion: 'Pon los pasos en orden lógico.', pasos: [
        'Viajas a algún sitio', 'Compras dulces regionales típicos', 'Los reparte al volver como omiyage'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que NO es correcta sobre el omiyage.', preguntas: [
        { grupo: '¿Cuál de estas ideas sobre el omiyage es incorrecta?', explicacion: 'El omiyage no necesita ser caro, al contrario de lo que dice esta opción.', opciones: [
          { texto: 'Suele ser dulces regionales', intruso: false }, { texto: 'Es casi una costumbre social', intruso: false }, { texto: 'Debe ser siempre caro y elaborado', intruso: true }
        ]}
      ]}
    ]
  },

  'd15-co-3': {
    contenido: `## Desarrollo
Recordatorio ampliado sobre el comportamiento en espacios compartidos: la lógica de fondo detrás de tantas normas ya vistas.

## ✅ Lo esencial

| Concepto | Detalle |
|---|---|
| 迷惑 (meiwaku) | "Molestia" — la idea que casi todas las normas sociales japonesas intentan evitar causar a otros |
| Aplicación práctica | Silencio en el tren, no propina, hacer cola, guardar basura... todo reduce el meiwaku |
| Mentalidad de fondo | Pensar primero en el impacto sobre los demás antes que en la comodidad propia |

## 🧠 Truco para recordar
Si memorizas una sola palabra cultural de toda la semana, que sea meiwaku — casi todas las normas que has visto (trenes, colas, basura, móvil) tienen la misma raíz: evitar molestar a los demás.

## 👁 confusión
Esto no significa que los japoneses no tengan vida social ruidosa o divertida — en contextos apropiados (izakaya, festivales) el ambiente puede ser tan animado como en cualquier otro país; la norma de "no molestar" aplica sobre todo a espacios compartidos neutros (transporte, colas, zonas de trabajo).`,
    juegos: [
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Meiwaku significa "molestia" y explica muchas normas sociales japonesas.', esVerdadero: true },
        { texto: 'Los japoneses nunca son ruidosos o animados en ningún contexto.', esVerdadero: false }
      ]},
      { tipo: 'conecta', titulo: 'Conecta cada norma con el concepto que explica', instruccion: 'Toca una norma y luego su concepto.', pares: [
        { a: 'Silencio en el tren', b: 'Evitar meiwaku' }, { a: 'Guardar tu basura', b: 'Evitar meiwaku' }
      ]},
      { tipo: 'clasifica', titulo: 'Espacio neutro o contexto festivo', instruccion: 'Arrastra cada contexto a su grupo.', categorias: ['Se evita el ruido/molestia', 'Ambiente animado aceptado'], items: [
        { texto: 'Tren de cercanías', cat: 'Se evita el ruido/molestia' }, { texto: 'Izakaya con amigos', cat: 'Ambiente animado aceptado' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige la palabra correcta.', banco: ['meiwaku'], frases: [
        { texto: 'La idea de "molestia a los demás" en japonés es: "___".', respuestas: ['meiwaku'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la lógica cultural', instruccion: 'Pon los pasos en orden.', pasos: [
        'Piensas en el impacto de tu acción sobre otros', 'Evitas causar meiwaku', 'Ajustas tu comportamiento al espacio (neutro o festivo)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no está relacionada con el concepto de meiwaku.', preguntas: [
        { grupo: '¿Cuál de estas NO tiene relación directa con evitar molestias (meiwaku)?', explicacion: 'Elegir un color de ropa es una preferencia personal, no una norma social de meiwaku.', opciones: [
          { texto: 'Guardar silencio en el tren', intruso: false }, { texto: 'Hacer cola ordenadamente', intruso: false }, { texto: 'Elegir el color de tu ropa', intruso: true }
        ]}
      ]}
    ]
  },

  // ══════════════ DÍA 16 · Vida diaria ══════════════

  'd16-pc-1': {
    contenido: `## Desarrollo
El vocabulario básico del clima y la hora, útil para el día a día y para planificar tus salidas.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| 天気 | tenki | tiempo (meteorológico) |
| 晴れ / 雨 | hare / ame | soleado / lluvia |
| 今何時ですか？ | ima nanji desu ka? | ¿qué hora es? |

## 🧠 Truco para recordar
Tenki (tiempo meteorológico) no debe confundirse con "jikan" (tiempo como duración/horas) — son dos conceptos de "tiempo" completamente distintos en japonés, como en muchos otros idiomas.

## 👁 confusión
Hare (soleado) y ame (lluvia) son sustantivos, no adjetivos — para decir "hoy hace sol" necesitas la estructura completa "kyou wa hare desu", no solo la palabra suelta.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada palabra con su significado', instruccion: 'Toca una palabra y luego su significado.', pares: [
        { a: '天気 (tenki)', b: 'Tiempo (meteorológico)' }, { a: '晴れ (hare)', b: 'Soleado' }, { a: '雨 (ame)', b: 'Lluvia' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Tenki se refiere al tiempo meteorológico.', esVerdadero: true },
        { texto: 'Ame significa "soleado".', esVerdadero: false }
      ]},
      { tipo: 'clasifica', titulo: 'Clima u hora', instruccion: 'Arrastra cada palabra a su grupo.', categorias: ['Sobre el clima', 'Sobre la hora'], items: [
        { texto: 'Tenki', cat: 'Sobre el clima' }, { texto: 'Hare', cat: 'Sobre el clima' }, { texto: 'Ima nanji desu ka', cat: 'Sobre la hora' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige la palabra correcta.', banco: ['hare', 'ame'], frases: [
        { texto: 'Hoy hace sol: "kyou wa ___ desu".', respuestas: ['hare'] },
        { texto: 'Está lloviendo: "kyou wa ___ desu".', respuestas: ['ame'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la pregunta de la hora', instruccion: 'Reconstruye la frase en orden.', pasos: [
        'Ima (ahora)', 'nanji (qué hora)', 'desu ka (pregunta)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no tiene que ver con el clima.', preguntas: [
        { grupo: '¿Cuál de estas NO tiene que ver con el clima?', explicacion: 'Konbini es una tienda, no un concepto climático.', opciones: [
          { texto: 'Tenki', intruso: false }, { texto: 'Hare', intruso: false }, { texto: 'Konbini', intruso: true }
        ]}
      ]}
    ]
  },

  'd16-pc-2': {
    contenido: `## Desarrollo
El konbini merece su propio bloque de vocabulario — es la palabra que probablemente más vas a usar en todo el viaje.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| コンビニ | konbini | tienda de conveniencia |
| おにぎり | onigiri | bola de arroz rellena |
| レジ | reji | caja/mostrador de pago |

## 🧠 Truco para recordar
Reji viene de "register" (caja registradora) — un préstamo más del inglés adaptado a la fonética japonesa.

## 👁 confusión
Onigiri no es simplemente "arroz" — tiene un relleno (atún, salmón, ciruela...) envuelto en alga nori, y es uno de los productos estrella de cualquier konbini para comer rápido y barato.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada palabra con su significado', instruccion: 'Toca una palabra y luego su significado.', pares: [
        { a: 'コンビニ', b: 'Tienda de conveniencia' }, { a: 'おにぎり', b: 'Bola de arroz rellena' }, { a: 'レジ (reji)', b: 'Caja de pago' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Onigiri suele llevar un relleno envuelto en alga nori.', esVerdadero: true },
        { texto: 'Reji significa "estación de tren".', esVerdadero: false }
      ]},
      { tipo: 'clasifica', titulo: 'Lugar, comida o proceso', instruccion: 'Arrastra cada palabra a su grupo.', categorias: ['Lugar', 'Comida'], items: [
        { texto: 'Konbini', cat: 'Lugar' }, { texto: 'Reji', cat: 'Lugar' }, { texto: 'Onigiri', cat: 'Comida' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige la palabra correcta.', banco: ['onigiri', 'reji'], frases: [
        { texto: 'Compras una bola de arroz rellena: un "___".', respuestas: ['onigiri'] },
        { texto: 'Pagas en la: "___".', respuestas: ['reji'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena una visita al konbini', instruccion: 'Pon los pasos en orden.', pasos: [
        'Entras al konbini', 'Coges un onigiri', 'Pagas en la reji'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no tiene que ver con el konbini.', preguntas: [
        { grupo: '¿Cuál de estas NO tiene que ver con el konbini?', explicacion: 'Jinja es un santuario, no tiene que ver con el konbini.', opciones: [
          { texto: 'Onigiri', intruso: false }, { texto: 'Reji', intruso: false }, { texto: 'Jinja', intruso: true }
        ]}
      ]}
    ]
  },

  'd16-pc-3': {
    contenido: `## Desarrollo
Vocabulario para hacer fotos y pedir permiso, algo que vas a necesitar constantemente como turista.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| 写真 | shashin | fotografía |
| 一緒に | issho ni | juntos |
| 撮ってもらえますか？ | totte moraemasu ka? | ¿me la puede hacer usted? |

## 🧠 Truco para recordar
Totte moraemasu ka es distinto de totte mo ii desu ka: el primero pide que TE hagan la foto a ti, el segundo pide permiso para hacerla TÚ.

## 👁 confusión
"Issho ni shashin o totte moraemasu ka?" (¿nos puede hacer una foto juntos?) es la frase completa más útil si quieres salir tú también en la imagen, no solo el paisaje.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada palabra con su significado', instruccion: 'Toca una palabra y luego su significado.', pares: [
        { a: '写真 (shashin)', b: 'Fotografía' }, { a: '一緒に (issho ni)', b: 'Juntos' }, { a: '撮ってもらえますか？', b: '¿Me la puede hacer usted?' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Totte moraemasu ka pide que te hagan la foto a ti.', esVerdadero: true },
        { texto: 'Totte mo ii desu ka y totte moraemasu ka significan exactamente lo mismo.', esVerdadero: false }
      ]},
      { tipo: 'clasifica', titulo: 'Pedir que te hagan la foto o pedir permiso', instruccion: 'Arrastra cada frase a su grupo.', categorias: ['Pides que te hagan la foto', 'Pides permiso para hacerla tú'], items: [
        { texto: 'Totte moraemasu ka', cat: 'Pides que te hagan la foto' }, { texto: 'Totte mo ii desu ka', cat: 'Pides permiso para hacerla tú' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la petición', instruccion: 'Elige la palabra correcta.', banco: ['issho ni', 'totte moraemasu ka'], frases: [
        { texto: 'Quieres salir en la foto con alguien: "___ shashin o totte moraemasu ka".', respuestas: ['issho ni'] },
        { texto: 'Le pides a un desconocido que te la haga: "___".', respuestas: ['totte moraemasu ka'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la petición de foto', instruccion: 'Pon los pasos en orden.', pasos: [
        'Sumimasen (llamas la atención)', 'Issho ni shashin o totte moraemasu ka (pides la foto juntos)', 'Arigatou gozaimasu (agradeces)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no tiene que ver con hacer fotos.', preguntas: [
        { grupo: '¿Cuál de estas NO tiene que ver con hacer fotos?', explicacion: 'Netsu-zamashi es sobre medicinas, no sobre fotos.', opciones: [
          { texto: 'Shashin', intruso: false }, { texto: 'Totte moraemasu ka', intruso: false }, { texto: 'Netsu-zamashi', intruso: true }
        ]}
      ]}
    ]
  },

  'd16-fc-1': {
    contenido: `## Desarrollo
Hablar del tiempo, un tema de conversación tan común en Japón como en cualquier otro sitio.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| 今日はいい天気ですね | kyou wa ii tenki desu ne | hoy hace buen tiempo, ¿verdad? |
| 寒いですね | samui desu ne | hace frío, ¿verdad? |

## 🧠 Truco para recordar
La partícula "ne" al final (¿verdad?/¿no crees?) es clave para sonar natural en pequeñas conversaciones triviales — invita a la otra persona a estar de acuerdo contigo.

## 👁 confusión
Hablar del tiempo como tema neutro para romper el hielo funciona igual de bien en japonés que en español — no subestimes el poder de una frase tan simple para iniciar una interacción amable.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: '今日はいい天気ですね', b: 'Hoy hace buen tiempo, ¿verdad?' }, { a: '寒いですね', b: 'Hace frío, ¿verdad?' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'La partícula "ne" al final invita a que estén de acuerdo contigo.', esVerdadero: true },
        { texto: 'Hablar del tiempo es un tema raro para iniciar conversación en Japón.', esVerdadero: false }
      ]},
      { tipo: 'rellena', titulo: 'Completa la frase', instruccion: 'Elige la palabra correcta.', banco: ['ne', 'ka'], frases: [
        { texto: 'Para invitar a estar de acuerdo, terminas la frase con: "___".', respuestas: ['ne'] }
      ]},
      { tipo: 'clasifica', titulo: 'Afirmación con "ne" o pregunta con "ka"', instruccion: 'Arrastra cada frase a su grupo.', categorias: ['Afirmación con "ne"', 'Pregunta con "ka"'], items: [
        { texto: 'Kyou wa ii tenki desu ne', cat: 'Afirmación con "ne"' }, { texto: 'Ima nanji desu ka', cat: 'Pregunta con "ka"' }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena una pequeña conversación', instruccion: 'Pon los pasos en orden.', pasos: [
        'Konnichiwa (saludas)', 'Kyou wa ii tenki desu ne (comentas el tiempo)', 'Arigatou gozaimasu (te despides con cortesía)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no habla del clima.', preguntas: [
        { grupo: '¿Cuál de estas NO es un comentario sobre el clima?', explicacion: 'Ikura desu ka pregunta precio, no clima.', opciones: [
          { texto: 'Kyou wa ii tenki desu ne', intruso: false }, { texto: 'Samui desu ne', intruso: false }, { texto: 'Ikura desu ka', intruso: true }
        ]}
      ]}
    ]
  },

  'd16-fc-2': {
    contenido: `## Desarrollo
Preguntar la hora en distintos contextos, útil para no perder horarios de trenes, tiendas o actividades.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| 今何時ですか？ | ima nanji desu ka? | ¿qué hora es? |
| 何時に閉まりますか？ | nanji ni shimarimasu ka? | ¿a qué hora cierra? |

## 🧠 Truco para recordar
"Nanji ni [verbo] ka" es una plantilla ampliable — nanji ni shimarimasu ka (cierra), nanji ni akimasu ka (abre) — cambia solo el verbo.

## 👁 confusión
Muchas tiendas y atracciones turísticas en Japón cierran más temprano de lo que esperarías (a veces sobre las 17-18h) — pregunta el horario de cierre en cuanto llegues, no des por hecho que estará abierto hasta tarde.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: '今何時ですか？', b: '¿Qué hora es?' }, { a: '何時に閉まりますか？', b: '¿A qué hora cierra?' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Muchas tiendas japonesas cierran más temprano de lo esperado.', esVerdadero: true },
        { texto: 'Nanji ni shimarimasu ka pregunta el precio.', esVerdadero: false }
      ]},
      { tipo: 'rellena', titulo: 'Completa la pregunta', instruccion: 'Elige la palabra correcta.', banco: ['nanji desu ka', 'shimarimasu ka'], frases: [
        { texto: 'Preguntas la hora actual: "ima ___".', respuestas: ['nanji desu ka'] },
        { texto: 'Preguntas la hora de cierre: "nanji ni ___".', respuestas: ['shimarimasu ka'] }
      ]},
      { tipo: 'clasifica', titulo: 'Hora actual u horario', instruccion: 'Arrastra cada pregunta a su grupo.', categorias: ['Pregunta hora actual', 'Pregunta horario de un lugar'], items: [
        { texto: 'Ima nanji desu ka', cat: 'Pregunta hora actual' }, { texto: 'Nanji ni shimarimasu ka', cat: 'Pregunta horario de un lugar' }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la planificación del día', instruccion: 'Pon los pasos en orden.', pasos: [
        'Ima nanji desu ka (compruebas la hora)', 'Nanji ni shimarimasu ka (preguntas cuándo cierra tu destino)', 'Planificas el resto del día'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no tiene que ver con horarios.', preguntas: [
        { grupo: '¿Cuál de estas NO tiene que ver con preguntar por horarios?', explicacion: 'Hoka no iro wa arimasu ka es sobre color, no sobre horarios.', opciones: [
          { texto: 'Ima nanji desu ka', intruso: false }, { texto: 'Nanji ni shimarimasu ka', intruso: false }, { texto: 'Hoka no iro wa arimasu ka', intruso: true }
        ]}
      ]}
    ]
  },

  'd16-fc-3': {
    contenido: `## Desarrollo
Pedir una foto de forma completa, combinando lo aprendido hoy en una petición natural.

## ✅ Lo esencial

| Japonés | Rōmaji | Español |
|---|---|---|
| すみません、写真を撮ってもらえますか？ | sumimasen, shashin o totte moraemasu ka? | disculpe, ¿me puede hacer una foto? |
| 一緒に撮ってもらえますか？ | issho ni totte moraemasu ka? | ¿nos la puede hacer juntos? |

## 🧠 Truco para recordar
Encadena sumimasen + la petición + arigatou gozaimasu — la misma estructura de cortesía que ya usas para casi cualquier petición del curso.

## 👁 confusión
Si la persona parece dudar o con prisa, no insistas — puedes simplemente decir "daijoubu desu" (no pasa nada) y buscar a otra persona o usar un trípode/temporizador si llevas uno.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Conecta cada frase con su significado', instruccion: 'Toca una frase y luego su significado.', pares: [
        { a: 'すみません、写真を撮ってもらえますか？', b: 'Disculpe, ¿me puede hacer una foto?' }, { a: '一緒に撮ってもらえますか？', b: '¿Nos la puede hacer juntos?' }
      ]},
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Si alguien duda en hacerte la foto, es mejor no insistir.', esVerdadero: true },
        { texto: 'Nunca se debe decir daijoubu desu si te dicen que no.', esVerdadero: false }
      ]},
      { tipo: 'rellena', titulo: 'Completa la petición', instruccion: 'Elige la frase correcta.', banco: ['sumimasen', 'issho ni'], frases: [
        { texto: 'Empiezas la petición llamando la atención: "___, shashin o totte moraemasu ka".', respuestas: ['sumimasen'] },
        { texto: 'Quieres salir tú también: "___ totte moraemasu ka".', respuestas: ['issho ni'] }
      ]},
      { tipo: 'clasifica', titulo: 'Solo o acompañado', instruccion: 'Arrastra cada frase a su grupo.', categorias: ['Foto solo del paisaje/objeto', 'Foto contigo incluido'], items: [
        { texto: 'Shashin o totte moraemasu ka', cat: 'Foto solo del paisaje/objeto' }, { texto: 'Issho ni totte moraemasu ka', cat: 'Foto contigo incluido' }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la petición completa', instruccion: 'Pon los pasos en orden.', pasos: [
        'Sumimasen (llamas la atención)', 'Shashin o totte moraemasu ka (pides la foto)', 'Arigatou gozaimasu (agradeces)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no tiene que ver con pedir una foto.', preguntas: [
        { grupo: '¿Cuál de estas NO tiene que ver con pedir que te hagan una foto?', explicacion: 'Nanji ni shimarimasu ka es sobre horarios, no sobre fotos.', opciones: [
          { texto: 'Shashin o totte moraemasu ka', intruso: false }, { texto: 'Issho ni totte moraemasu ka', intruso: false }, { texto: 'Nanji ni shimarimasu ka', intruso: true }
        ]}
      ]}
    ]
  },

  'd16-co-1': {
    contenido: `## Desarrollo
El konbini como institución social, no solo comercial — un fenómeno único de la vida diaria japonesa.

## ✅ Lo esencial

| Dato | Detalle |
|---|---|
| Horario | Muchos abren 24 horas, todos los días del año |
| Servicios | Pagos de facturas, envíos, fotocopias, entradas de eventos, además de comida |
| Densidad | En muchas zonas urbanas hay varios konbini en pocas manzanas |

## 🧠 Truco para recordar
Si alguna vez no sabes cómo resolver algo práctico en Japón, la respuesta casi universal es: "seguramente el konbini lo resuelve".

## 👁 confusión
No todos los konbini son idénticos — las tres grandes cadenas (7-Eleven, Lawson, FamilyMart) tienen ligeras diferencias en productos y servicios, aunque el concepto general es el mismo.`,
    juegos: [
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Muchos konbini abren 24 horas todos los días.', esVerdadero: true },
        { texto: 'Los konbini solo venden comida, nada más.', esVerdadero: false }
      ]},
      { tipo: 'conecta', titulo: 'Conecta cada servicio con el konbini', instruccion: 'Toca un servicio y luego confirma que es del konbini.', pares: [
        { a: 'Pago de facturas', b: 'Servicio típico de konbini' }, { a: 'Fotocopias', b: 'Servicio típico de konbini' }
      ]},
      { tipo: 'clasifica', titulo: 'Servicio o cadena', instruccion: 'Arrastra cada palabra a su grupo.', categorias: ['Es un servicio', 'Es una cadena de konbini'], items: [
        { texto: 'Fotocopias', cat: 'Es un servicio' }, { texto: '7-Eleven', cat: 'Es una cadena de konbini' }, { texto: 'Lawson', cat: 'Es una cadena de konbini' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige la palabra correcta.', banco: ['konbini'], frases: [
        { texto: 'Para casi cualquier necesidad práctica del día a día, la solución suele ser el: "___".', respuestas: ['konbini'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la idea', instruccion: 'Pon los pasos en orden lógico.', pasos: [
        'Tienes una necesidad práctica cualquiera', 'Piensas primero en el konbini más cercano', 'Casi seguro que resuelve tu problema'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no es una cadena de konbini.', preguntas: [
        { grupo: '¿Cuál de estas NO es una cadena de konbini?', explicacion: 'Yakkyoku es "farmacia", una categoría de tienda distinta.', opciones: [
          { texto: '7-Eleven', intruso: false }, { texto: 'Lawson', intruso: false }, { texto: 'Yakkyoku', intruso: true }
        ]}
      ]}
    ]
  },

  'd16-co-2': {
    contenido: `## Desarrollo
La puntualidad social japonesa va más allá de los trenes — también aplica a citas, quedadas y reservas.

## ✅ Lo esencial

| Dato | Detalle |
|---|---|
| Llegar pronto | Es habitual llegar unos minutos antes de la hora acordada, no justo a tiempo |
| Reservas | Llegar tarde a una reserva de restaurante puede hacer que la pierdas sin previo aviso |
| Percepción | Llegar tarde se interpreta como falta de respeto hacia el tiempo del otro |

## 🧠 Truco para recordar
Piensa en la puntualidad japonesa con el mismo rasero que el tren: si quedas a las 10, "a las 10" significa a las 10, no "sobre las 10".

## 👁 confusión
Esta puntualidad estricta aplica sobre todo a contextos formales o de servicio (reservas, citas de trabajo) — entre amigos cercanos puede haber algo más de flexibilidad, aunque menos que en muchos países mediterráneos.`,
    juegos: [
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Es habitual llegar unos minutos antes de la hora acordada.', esVerdadero: true },
        { texto: 'Llegar tarde a una reserva nunca tiene consecuencias.', esVerdadero: false }
      ]},
      { tipo: 'conecta', titulo: 'Conecta cada idea con su descripción', instruccion: 'Toca una idea y luego su descripción.', pares: [
        { a: 'Llegar pronto', b: 'Práctica social habitual' }, { a: 'Llegar tarde', b: 'Se percibe como falta de respeto' }
      ]},
      { tipo: 'clasifica', titulo: 'Contexto formal o entre amigos', instruccion: 'Arrastra cada situación a su grupo.', categorias: ['Puntualidad muy estricta', 'Algo más de flexibilidad'], items: [
        { texto: 'Reserva de restaurante', cat: 'Puntualidad muy estricta' }, { texto: 'Quedada informal con amigos cercanos', cat: 'Algo más de flexibilidad' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige la palabra correcta.', banco: ['pronto', 'tarde'], frases: [
        { texto: 'Lo habitual en Japón es llegar un poco: "___" a una cita.', respuestas: ['pronto'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la idea', instruccion: 'Pon los pasos en orden lógico.', pasos: [
        'Tienes una reserva o cita a una hora fija', 'Planificas llegar unos minutos antes', 'Evitas llegar justo o tarde'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la idea que NO es correcta sobre la puntualidad social.', preguntas: [
        { grupo: '¿Cuál de estas ideas es incorrecta?', explicacion: 'Llegar tarde SÍ puede tener consecuencias, como perder una reserva.', opciones: [
          { texto: 'Llegar pronto es habitual', intruso: false }, { texto: 'Llegar tarde se percibe como falta de respeto', intruso: false }, { texto: 'Llegar tarde nunca tiene ninguna consecuencia', intruso: true }
        ]}
      ]}
    ]
  },

  'd16-co-3': {
    contenido: `## Desarrollo
La gestión de basura y reciclaje en Japón es mucho más meticulosa que en muchos países, con categorías específicas que conviene conocer.

## ✅ Lo esencial

| Categoría | Ejemplo |
|---|---|
| 燃えるゴミ (moeru gomi) | Basura "quemable" — orgánico, papel sucio |
| 燃えないゴミ (moenai gomi) | Basura "no quemable" — cerámica, metales pequeños |
| リサイクル (risaikuru) | Reciclaje — plástico, latas, botellas, papel limpio |

## 🧠 Truco para recordar
Moeru (quemable) y moenai (no quemable) son opuestos con el mismo patrón de negación que ya viste en otras palabras (-nai al final para negar).

## 👁 confusión
Las normas de separación de basura pueden variar bastante entre ciudades y municipios — lo que es "moeru gomi" en un sitio puede clasificarse distinto en otro; en alojamientos turísticos suele haber carteles explicativos.`,
    juegos: [
      { tipo: 'vf', titulo: 'Verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Moeru gomi es la basura considerada "quemable".', esVerdadero: true },
        { texto: 'Las normas de separación de basura son idénticas en toda Japón.', esVerdadero: false }
      ]},
      { tipo: 'conecta', titulo: 'Conecta cada categoría con su ejemplo', instruccion: 'Toca una categoría y luego su ejemplo.', pares: [
        { a: 'Moeru gomi', b: 'Orgánico, papel sucio' }, { a: 'Moenai gomi', b: 'Cerámica, metales pequeños' }, { a: 'Risaikuru', b: 'Plástico, latas, botellas' }
      ]},
      { tipo: 'clasifica', titulo: 'Quemable o no quemable', instruccion: 'Arrastra cada residuo a su categoría.', categorias: ['Moeru gomi (quemable)', 'Moenai gomi (no quemable)'], items: [
        { texto: 'Restos de comida', cat: 'Moeru gomi (quemable)' }, { texto: 'Una taza rota', cat: 'Moenai gomi (no quemable)' }
      ]},
      { tipo: 'rellena', titulo: 'Completa la idea', instruccion: 'Elige la palabra correcta.', banco: ['moeru', 'risaikuru'], frases: [
        { texto: 'La basura orgánica es: "___ gomi".', respuestas: ['moeru'] },
        { texto: 'Las botellas de plástico van a: "___".', respuestas: ['risaikuru'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la separación de basura', instruccion: 'Pon los pasos en orden lógico.', pasos: [
        'Miras el cartel explicativo del alojamiento', 'Separas quemable, no quemable y reciclaje', 'Tiras cada uno en su contenedor correcto'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no es una categoría de basura.', preguntas: [
        { grupo: '¿Cuál de estas NO es una categoría de gestión de basura?', explicacion: 'Omiyage es un regalo de viaje, no una categoría de basura.', opciones: [
          { texto: 'Moeru gomi', intruso: false }, { texto: 'Risaikuru', intruso: false }, { texto: 'Omiyage', intruso: true }
        ]}
      ]}
    ]
  },

  // ══════════════ DÍA 17 · Repaso semana 3 ══════════════

  'd17-pc-1': {
    contenido: `## Desarrollo
Repaso de palabras del día 13: tecnología y comunicación.

## ✅ Lo esencial

| Japonés | Español |
|---|---|
| Wi-Fi | wifi |
| 翻訳 | traducción |
| 充電 | carga de batería |

## 🧠 Truco para recordar
Recuerda las tres soluciones típicas a problemas técnicos: conexión (wifi/SIM), comunicación (traducción) y energía (carga).`,
    juegos: [
      { tipo: 'conecta', titulo: 'Repaso: conecta cada palabra con su significado', instruccion: 'Toca una palabra y luego su significado.', pares: [
        { a: 'Wi-Fi', b: 'Wifi' }, { a: 'Honyaku', b: 'Traducción' }, { a: 'Juuden', b: 'Carga de batería' }
      ]},
      { tipo: 'vf', titulo: 'Repaso: verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Apuri significa "aplicación".', esVerdadero: true },
        { texto: 'Mobairu batterii significa "tarjeta SIM".', esVerdadero: false }
      ]},
      { tipo: 'clasifica', titulo: 'Conexión, traducción o batería', instruccion: 'Arrastra cada palabra a su grupo.', categorias: ['Conexión', 'Traducción o batería'], items: [
        { texto: 'Wi-Fi', cat: 'Conexión' }, { texto: 'SIM kaado', cat: 'Conexión' }, { texto: 'Honyaku', cat: 'Traducción o batería' }, { texto: 'Juuden', cat: 'Traducción o batería' }
      ]},
      { tipo: 'rellena', titulo: 'Repaso general', instruccion: 'Elige la palabra correcta.', banco: ['honyaku', 'juuden'], frases: [
        { texto: 'Traducir un texto es: "___".', respuestas: ['honyaku'] },
        { texto: 'Cargar el móvil es: "___".', respuestas: ['juuden'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la idea', instruccion: 'Pon los pasos en orden.', pasos: [
        'Wifi wa arimasu ka (conexión)', 'Apuri de honyaku shite mo ii desu ka (traducción)', 'Juuden dekimasu ka (batería)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no es del día 13.', preguntas: [
        { grupo: '¿Cuál de estas es del día 14, no del día 13?', explicacion: 'Kusuri es del día 14 (salud).', opciones: [
          { texto: 'Wi-Fi', intruso: false }, { texto: 'Honyaku', intruso: false }, { texto: 'Kusuri', intruso: true }
        ]}
      ]}
    ]
  },

  'd17-pc-2': {
    contenido: `## Desarrollo
Repaso de palabras del día 14: salud y emergencias.

## ✅ Lo esencial

| Japonés | Español |
|---|---|
| 頭が痛いです | me duele la cabeza |
| 薬局 | farmacia |
| 119 / 110 | ambulancia-bomberos / policía |

## 🧠 Truco para recordar
Recuerda la escala de gravedad: molestia leve (farmacia) → algo más serio (hospital) → emergencia real (119/110).`,
    juegos: [
      { tipo: 'conecta', titulo: 'Repaso: conecta cada palabra con su significado', instruccion: 'Toca una palabra y luego su significado.', pares: [
        { a: 'Atama ga itai desu', b: 'Me duele la cabeza' }, { a: 'Yakkyoku', b: 'Farmacia' }, { a: '119', b: 'Ambulancia y bomberos' }
      ]},
      { tipo: 'vf', titulo: 'Repaso: verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'El 110 es el número de la policía.', esVerdadero: true },
        { texto: 'Byouin significa "farmacia".', esVerdadero: false }
      ]},
      { tipo: 'clasifica', titulo: 'Molestia leve o emergencia', instruccion: 'Arrastra cada elemento a su grupo.', categorias: ['Molestia leve', 'Emergencia'], items: [
        { texto: 'Yakkyoku', cat: 'Molestia leve' }, { texto: 'Kyuukyuusha o yonde kudasai', cat: 'Emergencia' }
      ]},
      { tipo: 'rellena', titulo: 'Repaso general', instruccion: 'Elige la palabra correcta.', banco: ['yakkyoku', '119'], frases: [
        { texto: 'Vas por medicinas básicas a la: "___".', respuestas: ['yakkyoku'] },
        { texto: 'Necesitas una ambulancia, llamas al: "___".', respuestas: ['119'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena por gravedad', instruccion: 'De leve a grave.', pasos: [
        'Atama ga itai desu (molestia leve)', 'Yakkyoku (farmacia)', 'Kyuukyuusha o yonde kudasai (emergencia)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no es del día 14.', preguntas: [
        { grupo: '¿Cuál de estas es del día 15, no del día 14?', explicacion: 'Jinja es del día 15 (cultura).', opciones: [
          { texto: 'Yakkyoku', intruso: false }, { texto: '119', intruso: false }, { texto: 'Jinja', intruso: true }
        ]}
      ]}
    ]
  },

  'd17-pc-3': {
    contenido: `## Desarrollo
Repaso de palabras de los días 15 y 16: cultura práctica y vida diaria.

## ✅ Lo esencial

| Japonés | Español |
|---|---|
| 神社 | santuario |
| お守り | amuleto |
| コンビニ | tienda de conveniencia |

## 🧠 Truco para recordar
Agrupa mentalmente: lo "sagrado" (jinja, omamori) frente a lo "cotidiano" (konbini, onigiri) — dos caras de la vida diaria en Japón.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Repaso: conecta cada palabra con su significado', instruccion: 'Toca una palabra y luego su significado.', pares: [
        { a: 'Jinja', b: 'Santuario' }, { a: 'Omamori', b: 'Amuleto' }, { a: 'Konbini', b: 'Tienda de conveniencia' }
      ]},
      { tipo: 'vf', titulo: 'Repaso: verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Onigiri es una bola de arroz rellena.', esVerdadero: true },
        { texto: 'Otera es un santuario sintoísta.', esVerdadero: false }
      ]},
      { tipo: 'clasifica', titulo: 'Cultura o vida diaria', instruccion: 'Arrastra cada palabra a su bloque.', categorias: ['Cultura práctica (día 15)', 'Vida diaria (día 16)'], items: [
        { texto: 'Jinja', cat: 'Cultura práctica (día 15)' }, { texto: 'Omamori', cat: 'Cultura práctica (día 15)' }, { texto: 'Konbini', cat: 'Vida diaria (día 16)' }, { texto: 'Onigiri', cat: 'Vida diaria (día 16)' }
      ]},
      { tipo: 'rellena', titulo: 'Repaso general', instruccion: 'Elige la palabra correcta.', banco: ['jinja', 'konbini'], frases: [
        { texto: 'Un santuario sintoísta es un: "___".', respuestas: ['jinja'] },
        { texto: 'Compras algo rápido en el: "___".', respuestas: ['konbini'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena por bloque', instruccion: 'Del día 15 al día 16.', pasos: [
        'Jinja (día 15)', 'Omamori (día 15)', 'Konbini (día 16)', 'Onigiri (día 16)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no es de días 15-16.', preguntas: [
        { grupo: '¿Cuál de estas es del día 13, no de días 15-16?', explicacion: 'Apuri es del día 13 (tecnología).', opciones: [
          { texto: 'Jinja', intruso: false }, { texto: 'Konbini', intruso: false }, { texto: 'Apuri', intruso: true }
        ]}
      ]}
    ]
  },

  'd17-fc-1': {
    contenido: `## Desarrollo
Repaso de frases del día 13: pedir wifi, traducir, y gestionar la batería.

## ✅ Lo esencial

| Situación | Frase |
|---|---|
| Preguntar wifi | Wi-Fiはありますか？ |
| Traducir con la app | アプリで翻訳してもいいですか？ |
| Cargar el móvil | 充電できますか？ |

## 🧠 Truco para recordar
Las tres frases comparten estructura de petición educada ("te mo ii desu ka" o "wa arimasu ka") — plantillas que ya dominas desde hace semanas.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Repaso: conecta situación y frase', instruccion: 'Toca una situación y luego su frase.', pares: [
        { a: 'Preguntar wifi', b: 'Wifi wa arimasu ka' }, { a: 'Traducir con la app', b: 'Apuri de honyaku shite mo ii desu ka' }, { a: 'Cargar el móvil', b: 'Juuden dekimasu ka' }
      ]},
      { tipo: 'vf', titulo: 'Repaso: verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Juuden dekimasu ka pregunta si puedes cargar el móvil.', esVerdadero: true },
        { texto: 'Wifi wa arimasu ka pregunta el precio del wifi.', esVerdadero: false }
      ]},
      { tipo: 'rellena', titulo: 'Repaso general', instruccion: 'Elige la frase correcta.', banco: ['wifi wa arimasu ka', 'juuden dekimasu ka'], frases: [
        { texto: 'Preguntas si hay conexión: "___".', respuestas: ['wifi wa arimasu ka'] },
        { texto: 'Preguntas si puedes cargar: "___".', respuestas: ['juuden dekimasu ka'] }
      ]},
      { tipo: 'clasifica', titulo: 'Conexión o batería', instruccion: 'Arrastra cada frase a su grupo.', categorias: ['Sobre conexión', 'Sobre batería'], items: [
        { texto: 'Wifi wa arimasu ka', cat: 'Sobre conexión' }, { texto: 'Juuden dekimasu ka', cat: 'Sobre batería' }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la situación tecnológica', instruccion: 'Pon los pasos en orden.', pasos: [
        'Wifi wa arimasu ka', 'Apuri de honyaku shite mo ii desu ka', 'Juuden dekimasu ka'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no es del día 13.', preguntas: [
        { grupo: '¿Cuál de estas es del día 16, no del día 13?', explicacion: 'Shashin o totte moraemasu ka es del día 16 (fotos).', opciones: [
          { texto: 'Wifi wa arimasu ka', intruso: false }, { texto: 'Juuden dekimasu ka', intruso: false }, { texto: 'Shashin o totte moraemasu ka', intruso: true }
        ]}
      ]}
    ]
  },

  'd17-fc-2': {
    contenido: `## Desarrollo
Repaso de frases del día 14: describir dolor, pedir en farmacia, y llamar a emergencias.

## ✅ Lo esencial

| Situación | Frase |
|---|---|
| Describir dolor | ［parte］が痛いです |
| Pedir en farmacia | これに効く薬はありますか？ |
| Emergencia | 救急車を呼んでください |

## 🧠 Truco para recordar
Ordena mentalmente por gravedad creciente: describir síntoma → ir a farmacia → llamar a emergencias si hace falta.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Repaso: conecta situación y frase', instruccion: 'Toca una situación y luego su frase.', pares: [
        { a: 'Describir dolor', b: '[Parte] ga itai desu' }, { a: 'Pedir en farmacia', b: 'Kore ni kiku kusuri wa arimasu ka' }, { a: 'Emergencia grave', b: 'Kyuukyuusha o yonde kudasai' }
      ]},
      { tipo: 'vf', titulo: 'Repaso: verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Kyuukyuusha o yonde kudasai se usa en emergencias graves.', esVerdadero: true },
        { texto: 'Kore ni kiku kusuri wa arimasu ka se usa para llamar a la policía.', esVerdadero: false }
      ]},
      { tipo: 'rellena', titulo: 'Repaso general', instruccion: 'Elige la frase correcta.', banco: ['ga itai desu', 'yonde kudasai'], frases: [
        { texto: 'Describes un dolor: "[parte] ___".', respuestas: ['ga itai desu'] },
        { texto: 'Pides ayuda urgente: "kyuukyuusha o ___".', respuestas: ['yonde kudasai'] }
      ]},
      { tipo: 'clasifica', titulo: 'Leve o grave', instruccion: 'Arrastra cada frase a su nivel.', categorias: ['Situación leve', 'Situación grave'], items: [
        { texto: '[Parte] ga itai desu', cat: 'Situación leve' }, { texto: 'Kyuukyuusha o yonde kudasai', cat: 'Situación grave' }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena por gravedad', instruccion: 'De leve a grave.', pasos: [
        '[Parte] ga itai desu', 'Kore ni kiku kusuri wa arimasu ka', 'Kyuukyuusha o yonde kudasai'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no es del día 14.', preguntas: [
        { grupo: '¿Cuál de estas es del día 13, no del día 14?', explicacion: 'Wifi wa arimasu ka es del día 13 (tecnología).', opciones: [
          { texto: '[Parte] ga itai desu', intruso: false }, { texto: 'Kyuukyuusha o yonde kudasai', intruso: false }, { texto: 'Wifi wa arimasu ka', intruso: true }
        ]}
      ]}
    ]
  },

  'd17-fc-3': {
    contenido: `## Desarrollo
Repaso de frases de los días 15 y 16: pedir permiso cultural y hacer una foto.

## ✅ Lo esencial

| Situación | Frase |
|---|---|
| Pedir permiso en templo | ここに入ってもいいですか？ |
| Disculpa cultural | 失礼しました |
| Pedir una foto | 写真を撮ってもらえますか？ |

## 🧠 Truco para recordar
Todas comparten la misma actitud de fondo: pedir permiso o disculparse con respeto antes de actuar, la esencia de la etiqueta social japonesa.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Repaso: conecta situación y frase', instruccion: 'Toca una situación y luego su frase.', pares: [
        { a: 'Pedir permiso en templo', b: 'Koko ni haitte mo ii desu ka' }, { a: 'Disculpa cultural', b: 'Shitsurei shimashita' }, { a: 'Pedir una foto', b: 'Shashin o totte moraemasu ka' }
      ]},
      { tipo: 'vf', titulo: 'Repaso: verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Shitsurei shimashita es una disculpa más formal que sumimasen.', esVerdadero: true },
        { texto: 'Shashin o totte moraemasu ka pide permiso para entrar en un templo.', esVerdadero: false }
      ]},
      { tipo: 'rellena', titulo: 'Repaso general', instruccion: 'Elige la frase correcta.', banco: ['haitte mo ii desu ka', 'totte moraemasu ka'], frases: [
        { texto: 'Preguntas si puedes entrar: "koko ni ___".', respuestas: ['haitte mo ii desu ka'] },
        { texto: 'Pides que te hagan una foto: "shashin o ___".', respuestas: ['totte moraemasu ka'] }
      ]},
      { tipo: 'clasifica', titulo: 'Cultura o vida diaria', instruccion: 'Arrastra cada frase a su bloque.', categorias: ['Cultura práctica (día 15)', 'Vida diaria (día 16)'], items: [
        { texto: 'Koko ni haitte mo ii desu ka', cat: 'Cultura práctica (día 15)' }, { texto: 'Shitsurei shimashita', cat: 'Cultura práctica (día 15)' }, { texto: 'Shashin o totte moraemasu ka', cat: 'Vida diaria (día 16)' }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la actitud de respeto', instruccion: 'Pon los pasos en orden.', pasos: [
        'Koko ni haitte mo ii desu ka (pides permiso)', 'Shashin o totte moraemasu ka (pides una foto)', 'Shitsurei shimashita (te disculpas si hace falta)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no es de días 15-16.', preguntas: [
        { grupo: '¿Cuál de estas es del día 14, no de días 15-16?', explicacion: 'Kyuukyuusha o yonde kudasai es del día 14 (salud).', opciones: [
          { texto: 'Koko ni haitte mo ii desu ka', intruso: false }, { texto: 'Shashin o totte moraemasu ka', intruso: false }, { texto: 'Kyuukyuusha o yonde kudasai', intruso: true }
        ]}
      ]}
    ]
  },

  'd17-co-1': {
    contenido: `## Desarrollo
Repaso de las costumbres del día 13: la vida tecnológica cotidiana en Japón.

## ✅ Lo esencial

| Costumbre | Recordatorio |
|---|---|
| Konbini como hub tecnológico | Wifi, carga, cajero |
| Traducción bidireccional | Los japoneses también la usan contigo |
| Etiqueta del móvil | Silencio en espacios compartidos |

## 🧠 Truco para recordar
Todo el bloque tecnológico gira en torno a una idea: la tecnología está para facilitar la comunicación, no para sustituir el respeto al espacio compartido.`,
    juegos: [
      { tipo: 'vf', titulo: 'Repaso: verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Muchos konbini ofrecen wifi gratuito.', esVerdadero: true },
        { texto: 'Usar el traductor se considera de mala educación en Japón.', esVerdadero: false }
      ]},
      { tipo: 'conecta', titulo: 'Repaso: conecta cada idea con su descripción', instruccion: 'Toca una idea y luego su descripción.', pares: [
        { a: 'Konbini', b: 'Hub tecnológico práctico' }, { a: 'Traducción bidireccional', b: 'La usan ambas partes' }
      ]},
      { tipo: 'clasifica', titulo: 'Sobre tecnología o etiqueta', instruccion: 'Arrastra cada idea a su grupo.', categorias: ['Sobre tecnología práctica', 'Sobre etiqueta del móvil'], items: [
        { texto: 'Wifi en konbini', cat: 'Sobre tecnología práctica' }, { texto: 'Silencio en espacios compartidos', cat: 'Sobre etiqueta del móvil' }
      ]},
      { tipo: 'rellena', titulo: 'Repaso general', instruccion: 'Elige la palabra correcta.', banco: ['konbini'], frases: [
        { texto: 'El lugar de referencia para resolver casi cualquier problema tecnológico es el: "___".', respuestas: ['konbini'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la idea', instruccion: 'Pon los pasos en orden lógico.', pasos: [
        'Tienes un problema tecnológico', 'Buscas el konbini más cercano', 'Usas la tecnología con respeto al espacio compartido'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no es del día 13.', preguntas: [
        { grupo: '¿Cuál de estas es del día 14, no del día 13?', explicacion: 'El sistema de emergencias 119/110 es del día 14.', opciones: [
          { texto: 'Konbini como hub tecnológico', intruso: false }, { texto: 'Traducción bidireccional', intruso: false }, { texto: 'Sistema de emergencias 119/110', intruso: true }
        ]}
      ]}
    ]
  },

  'd17-co-2': {
    contenido: `## Desarrollo
Repaso de las costumbres del día 14: el sistema de salud y emergencias japonés.

## ✅ Lo esencial

| Costumbre | Recordatorio |
|---|---|
| 119 / 110 | Ambulancia-bomberos / policía, números distintos |
| Drugstore | Mezcla medicinas, cosmética y snacks |
| Seguro de viaje | Pagas primero, reclamas después |

## 🧠 Truco para recordar
Si memorizas una sola cosa de este bloque, que sea: lleva siempre tu seguro de viaje a mano y sabes distinguir 119 de 110.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Repaso: conecta cada idea con su descripción', instruccion: 'Toca una idea y luego su descripción.', pares: [
        { a: '119', b: 'Ambulancia y bomberos' }, { a: '110', b: 'Policía' }
      ]},
      { tipo: 'vf', titulo: 'Repaso: verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Muchos hospitales japoneses piden el pago en el momento.', esVerdadero: true },
        { texto: 'Todas las drugstores solo venden medicinas, nada más.', esVerdadero: false }
      ]},
      { tipo: 'clasifica', titulo: 'Emergencia o farmacia', instruccion: 'Arrastra cada elemento a su grupo.', categorias: ['Emergencia', 'Farmacia/drugstore'], items: [
        { texto: '119', cat: 'Emergencia' }, { texto: '110', cat: 'Emergencia' }, { texto: 'Cosmética', cat: 'Farmacia/drugstore' }
      ]},
      { tipo: 'rellena', titulo: 'Repaso general', instruccion: 'Elige la palabra correcta.', banco: ['seguro'], frases: [
        { texto: 'Antes de viajar, es importante contratar un: "___" de viaje.', respuestas: ['seguro'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena la idea', instruccion: 'Pon los pasos en orden lógico.', pasos: [
        'Contratas seguro antes del viaje', 'Si hay emergencia médica, vas al hospital y pagas', 'Reclamas el reembolso después'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no es del día 14.', preguntas: [
        { grupo: '¿Cuál de estas es del día 15, no del día 14?', explicacion: 'Omamori es del día 15 (cultura práctica).', opciones: [
          { texto: '119', intruso: false }, { texto: 'Drugstore', intruso: false }, { texto: 'Omamori', intruso: true }
        ]}
      ]}
    ]
  },

  'd17-co-3': {
    contenido: `## Desarrollo
Repaso de las costumbres de los días 15 y 16: cultura práctica y vida diaria, cerrando el bloque completo de la Semana 3.

## ✅ Lo esencial

| Costumbre | Recordatorio |
|---|---|
| Meiwaku | La idea de "no molestar" detrás de casi toda norma social japonesa |
| Omiyage | Regalo de vuelta del viaje, casi obligación social |
| Separación de basura | Moeru / moenai / risaikuru |

## 🧠 Truco para recordar
Si tuvieras que resumir toda la cultura práctica del curso en una palabra, sería meiwaku: pensar siempre en el impacto de tus acciones sobre los demás.`,
    juegos: [
      { tipo: 'conecta', titulo: 'Repaso: conecta cada palabra con su significado', instruccion: 'Toca una palabra y luego su significado.', pares: [
        { a: 'Meiwaku', b: 'Molestia (a evitar)' }, { a: 'Omiyage', b: 'Regalo de vuelta del viaje' }, { a: 'Moeru gomi', b: 'Basura quemable' }
      ]},
      { tipo: 'vf', titulo: 'Repaso: verdadero o falso', instruccion: 'Indica si cada afirmación es verdadera o falsa.', frases: [
        { texto: 'Meiwaku explica muchas normas sociales japonesas.', esVerdadero: true },
        { texto: 'El omiyage debe ser siempre caro y elaborado.', esVerdadero: false }
      ]},
      { tipo: 'clasifica', titulo: 'Norma social o práctica concreta', instruccion: 'Arrastra cada idea a su grupo.', categorias: ['Norma social general', 'Práctica concreta'], items: [
        { texto: 'Meiwaku', cat: 'Norma social general' }, { texto: 'Separar la basura en moeru/moenai', cat: 'Práctica concreta' }
      ]},
      { tipo: 'rellena', titulo: 'Repaso general', instruccion: 'Elige la palabra correcta.', banco: ['meiwaku', 'omiyage'], frases: [
        { texto: 'La idea de "no molestar a los demás" es: "___".', respuestas: ['meiwaku'] },
        { texto: 'El regalo que traes de tu viaje es el: "___".', respuestas: ['omiyage'] }
      ]},
      { tipo: 'ordenar', titulo: 'Ordena toda la semana 3 en un resumen', instruccion: 'Pon estos bloques temáticos en el orden del curso.', pasos: [
        'Tecnología y comunicación (día 13)', 'Salud y emergencias (día 14)', 'Cultura práctica (día 15)', 'Vida diaria (día 16)'
      ]},
      { tipo: 'descarte', titulo: 'Encuentra el intruso', instruccion: 'Selecciona la que no es una costumbre del día 15 o 16.', preguntas: [
        { grupo: '¿Cuál de estas es del día 13, no de días 15-16?', explicacion: 'La traducción bidireccional es del día 13 (tecnología).', opciones: [
          { texto: 'Meiwaku', intruso: false }, { texto: 'Omiyage', intruso: false }, { texto: 'Traducción bidireccional', intruso: true }
        ]}
      ]}
    ]
  }

};

async function subirSemana3() {
  if (typeof db === 'undefined') { console.error('No se encuentra `db`. ¿Estás en la página de ApuntesLarry, logueado?'); return; }
  var col = db.collection('temas').doc('japones-semana3').collection('puntos');
  var ids = Object.keys(LECCIONES_SEMANA3);
  for (var i = 0; i < ids.length; i++) {
    var id = ids[i];
    try {
      await col.doc(id).set(LECCIONES_SEMANA3[id]);
      console.log('✅ Subido: ' + id);
    } catch (e) {
      console.error('❌ Error en ' + id + ': ' + e.message);
    }
  }
  console.log('Terminado. ' + ids.length + ' puntos procesados.');
}
