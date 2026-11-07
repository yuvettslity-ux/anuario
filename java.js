const ORDEN = 'apellido'; // cambia a 'nombre' para ordenar por nombre de pila

const ESTUDIANTES = [
 {
  "nombre": "heilyn yireth sanchez dussan",
  "frase": "ya quisiera yo",
  "recuerdo": "el compartir de la salchipapa",
  "aspiraciones": "llegar ser una persona exitosa que no necesita ayuda de los demás",
  "agradecimientos": "agradezco a mi familia, amigos , compañeros y profesores por darme enseñanzas , ejemplos y aprendizaje que me ayudaron a formarme como la persona que soy ahora .",
  "foto": "12Tii4J_3ZgtwgLNvEnbNpfGyLnpIs7Sz",
  "firma": "",
  "apellido": "Sanchez"
 },
 {
  "nombre": "Mariana García Pérez",
  "frase": "Falsos",
  "recuerdo": "La vez que hicieron caer a Edwin y de paso a Natalia en el puente de guaunda y quedó cochino",
  "aspiraciones": "Psicología o licenciatura en lengua castellana",
  "agradecimientos": "Agradezco principalmente a Dios y a mis padres sobre todo a mi hermana Nubia quien ah hecho el papel principal en apoyarme tanto académica como financieramente, los amo.",
  "foto": "1_rXuwN0kDITTVxw6ePxjUmOAvFQ94fqY",
  "firma": "1NTbYW0xUXR2IAa6DKy6tT6dcD0rnBMpk",
  "apellido": "García"
 },
 {
  "nombre": "Julieth Valentina Mora Esquivel",
  "frase": "somos la resistencia",
  "recuerdo": "en 7mo cuando jugábamos futbol la mayoría del salón unidos",
  "aspiraciones": "estudiar lo que me gusta y terminarlo, trabajar en eso y formar una hermosa familia",
  "agradecimientos": "agradezco primeramente a Dios por haberme permitirme estar donde estoy y con vida, y a mis padres por apoyarme en cada momento de mi vida y supliendo cada necesidad q tengo",
  "foto": "1EqxH5j63XALoksrbppNzSTxeHmKbYDRb",
  "firma": "1jUO3JInobkAUrlmebcsbfF90jS6yUD6k",
  "apellido": "Mora"
 },
 {
  "nombre": "saory valentina montaña piñeros",
  "frase": "tengo hambre",
  "recuerdo": "cuando me la pasaba jugando voleibol",
  "aspiraciones": "salir del colegio y formar una carrera",
  "agradecimientos": "agradecimiento a todos los que me acompañaron en mi formación académica",
  "foto": "1NRKmorWYuMnlvDMlhQkCtvTxb8UTHe_W",
  "firma": "172aTK0HVy1QYD4oOlxepQkC5UAZL-cwD",
  "apellido": "Montaña"
 },
 {
  "nombre": "Danna Valentina Caviedes Perdomo",
  "frase": "ay Dios mio",
  "recuerdo": "Mi recuerdo favorito es cuando unos compañeros estaban jugando con una pelota de papel, y accidentalmente le pegaron a una profesora casi dañándole las gafas.",
  "aspiraciones": "Estudiar psicología, o seguir con el técnico.",
  "agradecimientos": "Les doy las gracias a mis padres por su apoyo emocional, económico, a mis maestros por su paciencia, y todas las enseñanzas que me han dejado.",
  "foto": "18uI9sY0pgl0awPkb-AJUyk9YocEH_jZI",
  "firma": "1Ck-IuPGAJcg_NJnxECB9U5rnTCrFv6km",
  "apellido": "Caviedes"
 },
 {
  "nombre": "Nikoll Lizeth Bocanegra Giraldo",
  "frase": "En nombre de Dios, todo lo lograre",
  "recuerdo": "Todos los recuerdos de octavo, pero especialmente cuando dañamos un candado para no tener clases con una profesora",
  "aspiraciones": "Estudiar la carrera de mis sueños",
  "agradecimientos": "Gracias a mi familia por el apoyo",
  "foto": "1z53NTeELCuo_n4iFVHHHIoCAUnGw0mt2",
  "firma": "1o6RCWXn0QQU-Dji6nyHquBYXT6ed-ZIw",
  "apellido": "Bocanegra"
 },
 {
  "nombre": "Jesus Fernando Gutierres Diz",
  "frase": "Los errores ocurren",
  "recuerdo": "Cuando obtuve las 80horas sociales sin hacer practicamente nada.",
  "aspiraciones": "Convertirme en un Medico o Convertirme en un Medico .",
  "agradecimientos": "Gracias a mis padres, hermano y profesores que me apoyaron en todo para poder salir adelante.",
  "foto": "1sfRXUOKSXYskq6o-q2E6FUUv91bJ3Au2",
  "firma": "10t7ZC-UdMbHzy3BVwn3Uk7Ngksh6OvZg",
  "apellido": "Gutierres"
 },
 {
  "nombre": "Narly Lizeth Amaya Losada",
  "frase": "No entendí nada",
  "recuerdo": "Mi +´}favorito es conocer a amistades que me ayudaron en el peor momento y me sacaban una sonrisa",
  "aspiraciones": "1. Seguir estudiando\n2. Terminar hasta sacar el tecnólogo\n3. Trabajar para conseguir mis cosas",
  "agradecimientos": "A mis padres y a todos los docentes que me acompañaron",
  "foto": "1fGMBAenGLS86sfqOlHCNcN9lYbg5jpmL",
  "firma": "19-rsYfIzTJYstmzLoP5_3SOlLnSpMgjX",
  "apellido": "Amaya"
 },
 {
  "nombre": "Alex Felipe Ortiz narvaez",
  "frase": "No mienta",
  "recuerdo": "cuando jugaba micro con mi compañeros",
  "aspiraciones": "estudiar mi carrera de mis sueños y ser un gran profecional",
  "agradecimientos": "Primero que todo, quiero dar gracias a Dios por haberme permitido vivir esta experiencia escolar con salud y vida. También agradecer a los profesores que se esforzaron por enseñarnos con dedicación, paciencia y esfuerzo todos sus conocimientos y valores que nos puedan servir en nuestra vida cotidiana. Por último, estaré infinitamente agradecido con mis padres por haberme acompañado y apoyado en todos mis proyectos y en mi trayectoria como estudiante a través del tiempo.",
  "foto": "1BElPcguZokclbu8LSIFmBHssYehEBLB6",
  "firma": "10YoPdJHBt4_EnPQYELcZgV5ZrfCVXzvM",
  "apellido": "Ortiz"
 },
 {
  "nombre": "joan sebastian ramirez garcia",
  "frase": "sapa",
  "recuerdo": "ninguno",
  "aspiraciones": "ser un gran empresario",
  "agradecimientos": "mi familia",
  "foto": "1Apw-0FYsWWQyt0P77iYRjirCVIYNgCwK",
  "firma": "1cMGdF6zeFoJ_S6f1ajfVl95hgqg5NqnA",
  "apellido": "Ramirez"
 },
 {
  "nombre": "Duvan Felipe Ortiz Sarmiento",
  "frase": "yo si estudie pero se me olvido todo",
  "recuerdo": "cuando jugué futbol con mis compañeros y nos golearon pero no faltaron las risas",
  "aspiraciones": "Mis aspiraciones son terminar mis estudios, graduarme del colegio, estudiar lo que me gusta convertirme en un gran profesional. Sueño con tener un buen trabajo, una casa propia, ayudar económicamente a mi familia, hacer sentir orgullosos a mi mamá y hermano, viajar y conocer nuevos lugares. Aspiro a ser una persona responsable, humilde y respetuosa, cumplir cada uno de mis sueños y construir un futuro lleno de felicidad, éxitos y bendiciones, siempre con la ayuda de Dios.",
  "agradecimientos": "Gracias, Dios, por permitirme vivir esta hermosa etapa de mi vida, por darme la oportunidad de aprender, por cada compañero que puso una sonrisa en mis días y por cada maestro que me enseñó algo más que una lección. Gracias por los momentos felices, por las dificultades que me hicieron más fuerte y por los recuerdos que siempre llevaré en mi corazón. Hoy entiendo que el colegio no solo me dejó conocimientos, sino también amistades, experiencias y enseñanzas que me acompañarán toda la vida.",
  "foto": "1iaiZ-2vis8RWQvonJT2TzTX3r7vh2FiG",
  "firma": "1gbaKgYNO5AGJZB_nJOIfv_Bn_YUejFil",
  "apellido": "Ortiz"
 },
 {
  "nombre": "Nicolas soto calderon",
  "frase": "yo que me saque un 3 me conformo",
  "recuerdo": "cuando jugamos un partido con mis amigos y nos golearon",
  "aspiraciones": "tener un trabajo estable, tener un titulo profesional de ingeniero y estar junto a mis padres",
  "agradecimientos": "Primero que todo darle el agradecimiento a mis padres que son los que me han apoyado siempre y en cualquier circunstancia también a mis abuelas que es otro mérito de orgullo saber que tengo una familia unida y que me apoya en todo y gracias a eso es podido con todo y siempre salir adelante afrontando todo",
  "foto": "1cXOVlypcZyFssF8mzYwHz0uJrMjJGSaL",
  "firma": "1Enyh8QnHeBoJuEmIYkQrKVFcOA0PHXUC",
  "apellido": "Soto"
 },
 {
  "nombre": "zaidy LICETH CUELLAR CAVIEDES",
  "frase": "Ay no que pena",
  "recuerdo": "Mi recuerdo favorito de decimo fue compartir risas, locuras y momento inovidables con mis compañeros, creando recuerdos que siempre llevare en mi corazó.",
  "aspiraciones": "1. Estudiar en el SENA\n2. Hacer el orgullosa de mi familia\n3. Cumpli mi sueño sin rendirme\n4.Crecer como persona y aprender de mis errores",
  "agradecimientos": "Agradezco a mis padres por su amor incondicional, por apoyarme en cada momento y por hacer tantos esfuerzos para darme lo mejor. Gracias por sus consejos, por confiar en mí y por motivarme a seguir adelante, incluso cuando las cosas se ponen difíciles. Ustedes son una parte fundamental de mi vida y una de mis mayores motivaciones para cumplir mis sueños. Todo lo que hacen por mí lo llevo en mi corazón, y espero algún día poder devolverles un poquito de todo lo que me han dado. Los amo mucho y me siento muy afortunada de tenerlos en mi vida.",
  "foto": "1Gv5Iq1TnqNBqJaM-5BNUbpgSLDmaeyVu",
  "firma": "1WOkskp784Sf-w2qNwVQcMScbgXvZrlMA",
  "apellido": "Cuellar"
 },
 {
  "nombre": "Laura sofia",
  "frase": "uy no atrás satanás",
  "recuerdo": "mi recuerdo favorito es cuando todos fuimos a la casa de el man que me gustaba y ellos se pusieron a de serenata la canción de la ventana marroncita",
  "aspiraciones": "- Quiero graduarme feliz junto a mis amigos\n- Terminar el tecnólogo \n- Homologar y estudiar diseño\n- Estudiar mas cursos en el sena\n- Entrar en la universidad y estudiar biología\n- Graduarme de la universidad\n- Ser profesional con lo estudiado",
  "agradecimientos": "gracias a mis amigos: Laura fuentes, Ancizar Triana, Joan Ramírez, Isabella moje, Yuvettslit Yunda... y a todo el salón por ser tan especial para mi y por ser tan unidos a pesar de nuestras diferencias",
  "foto": "1xaD5-0lkBCOQ7l_OANPiaPjTm4YsZLHt",
  "firma": "1mRmD3oL2RemUl23xSBuKdmDXAUFP0oPO",
  "apellido": ""
 },
 {
  "nombre": "Yuvettslit Yunda Cortes",
  "frase": "Life goes on",
  "recuerdo": "mi mamá y yo en la graduación de 9no, por como se veía y sentí su orgullo",
  "aspiraciones": "ayudar a mi llegar a ser profesional en marketing,amá, viajar, tener un trabajo estable, obtener dinero y especializarme en algo",
  "agradecimientos": "A mi mamá y a mi hermano, por acompañarme durante todo este proceso, por su esfuerzo para conseguir lo que yo necesitaba y, sobre todo por demostrarme su apoyo, amor y orgullo",
  "foto": "1nnCBhK8HLKlHwWTWW6npgM1t_qBRPaO4",
  "firma": "1KAYVPbtKyzA5Uw4rdCBrgbQiDVcPYzqj",
  "apellido": "Yunda"
 },
 {
  "nombre": "thaliana sofia sanchez rocha",
  "frase": "vive la vida",
  "recuerdo": "el 2022 con mis amigas",
  "aspiraciones": "ser feliz",
  "agradecimientos": "agradezco a mdzs , a mis padres, a mis profesores y a los compañeros para ayudarme a lograr mis metas",
  "foto": "1Yf0nQMO3T7Qx5qXfuwujg4tkAoNs08TR",
  "firma": "1J0jxNV3DfrN8CVZrQDg4dA88P6edZpCU",
  "apellido": "Sanchez"
 },
 {
  "nombre": "Hillary Natalia Serrato Acosta",
  "frase": "\"No todo es para siempre, pero tú sí vas a poder con todo.\"",
  "recuerdo": "Una vez que estaba caminando con mis amigos por el patio del colegio y después nos fuimos para un lado el cual había un río esa vez me lanzaron al río con otro compañero yo no quería culpar ni avisar a la responsable pero ya la habían delatado en coordinación nos llevaron para allá le pusieron observación y nos regañaron",
  "aspiraciones": "Quiero terminar mi bachillerato con la ayuda de Dios graduarme y estudiar para ser un gran licenciada en educación infantil",
  "agradecimientos": "Quiero terminar mi bachillerato con la ayuda de Dios graduarme y estudiar para ser un gran licenciada en educación infantil",
  "foto": "105cQQ4GJrk37KC280fGPFzoot1Mh4SQm",
  "firma": "1LuRtGpqdPrLMoLgXrwzmJdQIcJGUj_0f",
  "apellido": "Serrato"
 },
 {
  "nombre": "Cristian Rene Muñoz Quintero",
  "frase": "amo a angeline",
  "recuerdo": "Cuando fui novio de angeline",
  "aspiraciones": "hacer un tecnologo en el SENA, ir a la UNI y estudiar lo que me gusta para ganar mucha plata",
  "agradecimientos": "cc",
  "foto": "1rhm62Kw6RgOgc05TjKzKwuERA0cXU1m3",
  "firma": "1SL19OeUyHtSL6d2y_aObhV_aJdYnUyhY",
  "apellido": "Muñoz"
 },
 {
  "nombre": "Nycolt Danihela Barrera Mosquera",
  "frase": "\" Su Madreeee \"",
  "recuerdo": "Mi recuerdo favorito fue cuando iniciamos nuestro grupito de 4 en septimo con unas amigas",
  "aspiraciones": "Estudiar en el Sena \nHacer orgullosa a mi madre \nInfante de Marina \nInfante de Marina \nChef",
  "agradecimientos": "Le doy gracias a mi madre por darme u apoyo incondicional en mis etudios y por siempre confiar en mi",
  "foto": "1Afics_wPmXbKt6b2k2HJhtzJhwtqH3CQ",
  "firma": "1lIuyzfjk_gTg_C7dMygCoYW7qEzw3o2d",
  "apellido": "Barrera"
 },
 {
  "nombre": "Laura Valentina Galindo Diaz",
  "frase": "Tengo Sueño",
  "recuerdo": "Mi recuerdo favorito es cuando conocí por primera vez a mi mejor amiga Valeria en sexto",
  "aspiraciones": "Poder especializarme en lo que mas aspiro.",
  "agradecimientos": "Le agradezco a mis padres por darme motivación y fuerzas para lograr mis metas y poder seguir adelante.",
  "foto": "11ufYvLxGH21KwTB_1CELVFFOaQ_HOEg7",
  "firma": "1xOEPp4iYRi_qSyw_vHDqTloY9BGHDXsB",
  "apellido": "Galindo"
 },
 {
  "nombre": "Francy Fidelina Medina Garcia",
  "frase": "Todo es mental",
  "recuerdo": "mi recuerdo favorito en general es cuando compartimos",
  "aspiraciones": "Graduarme, ingresar a la universidad, estudiar Medicina, crecer como persona, ayudar a mi familia, conocer nuevos lugares y cumplir cada uno de mis sueños.",
  "agradecimientos": "Agradezco a mi familia, docentes y compañeros por su apoyo, dedicación y enseñanzas durante esta etapa, que han contribuido a mi formación personal y académica.",
  "foto": "1ehy9tYF3NRYSQelvJ5GhRCuWtTw5NCDd",
  "firma": "1ks6Xli0UV0blsupAvkBm2pJebN8IAVPT",
  "apellido": "Medina"
 },
 {
  "nombre": "Isabella Monje Vega",
  "frase": "Te cuento un chiste amisga",
  "recuerdo": "Cuando estaba en el puente con mis amigos y nos inventamos un caso para un juicio",
  "aspiraciones": "Tener mi propia empresa y llegar a componer mis propias canciones",
  "agradecimientos": "le agradezco a mi mamá, tío y abuela por nunca dejarme sola y confiar en mi incluso cuando yo no lo podía hacer",
  "foto": "198YHO7iwlGUdWOCUxQqHgJbaFc7EadRC",
  "firma": "17xfhc6I-iyRS62w0pUB4lDzj_5KjetVU",
  "apellido": "Monje"
 },
 {
  "nombre": "Laura Fuentes Aranda",
  "frase": "Estoy siendo victima de Xenofobia por parte de mi compañero Benítez",
  "recuerdo": "Todos los días a partir de 9no (2024) han sido como el mejor de todos. Pero los mejores como Prom fueron las horas lúdicas a la ultima hora de todos los miércoles.",
  "aspiraciones": "Ser programadora y tener una vida tranquila y digna.",
  "agradecimientos": "Agradezco a cada uno de mis compañeros por haber formado parte de los recuerdos más bonitos de mi último año escolar. Me llevo conmigo las risas, las enseñanzas, los momentos compartidos y la tristeza de saber que una etapa tan especial está llegando a su fin.\nA Yuvettslit Yunda, por ser mi primera amiga al llegar a la institución, por permitirme verla crecer y por ocupar un lugar en mi corazón que el tiempo nunca podrá borrar. A Julieta Rocha, por ser mi compañía, cómplice, apoyo incondicional y una de las amistades más valiosas de este camino. A Isabella Monje, por tenderme la mano cuando más lo necesité; a Laura Serrato, por los momentos vividos; a Estiven Benítez, por su liderazgo, amistad y por hacerme bullying de vez en cuando ; a Laura Marinez, por tantas risas y su apoyo; a Cristian Muñoz, por su compañía; a Heilyn Sánchez y Saory Montaña, por estar presentes cuando pudieron; a Laura Galindo, por su cariño y confianza; y a Johan Ramírez, por su carisma y honestidad. Gracias a todos por dejar un pedacito de ustedes en esta historia que siempre recordaré con cariño.\nA mis profesores, especialmente al profe Sebastián Masmelas, gracias por despertar en mí el amor por la programación.\n\nA mi padre, Leonardo Fuentes, por su apoyo económico durante mi formación; a mis hermanos mayores, Cristian Galindo y Yonatan Galindo, por tenderme la mano cuando lo necesité; y a Esther Hernández, por acompañarme espiritual y emocionalmente en este proceso.\n\nPero, sobre todo, mi agradecimiento más profundo es para mi mamá, Lina Aranda. Gracias por cada sacrificio, por cada esfuerzo silencioso y por luchar incansablemente para darme un futuro mejor. Gracias por salvarme de la ignorancia, por creer en mí incluso en medio de las dificultades y por dejarlo todo con tal de verme llegar lejos. Si hoy puedo soñar con un futuro lleno de oportunidades, es porque tú has construido el camino con tus propias manos.",
  "foto": "14QqznC7cIClQJI3b_LetyBoWnrJehtyC",
  "firma": "1hQRvj96ZDvIuxYmWEMlhNXH4aBoVYnCe",
  "apellido": "Fuentes"
 },
 {
  "nombre": "Julieta",
  "frase": "Todo pasa por algo, los planes de Dios son perfectos",
  "recuerdo": "Cuando me cay en un rio con mis amigos y aprovechamos y nos bañamos.",
  "aspiraciones": "quiero cumplir mis dos sueño que es llegar a ser profesora de pedagogía infantil para mostrar esa amor tan grande que tengo con los niños y a enseñarles las base que les van a servir para el resto de su vida , y también después de cumplir eso estudiar para ser azafata es unos de mis mayores sueños y también después de cumplir eso estudiar para ser azafata es unos de mis mayores sueños",
  "agradecimientos": "A mis papas que han estado en el momento en que naci y me han apollado en todo",
  "foto": "1A-kdHoGADSSK0ifUBhS6XBSOg6l7xPoA",
  "firma": "1xJmvRGSIdFMgkE-v0dmxD6N3zWXABzhP",
  "apellido": ""
 },
 {
  "nombre": "Laura Liney Alarcon Cortes",
  "frase": "El que persevera alcanza",
  "recuerdo": "Haber encontrado una persona realmente leal en mi vida",
  "aspiraciones": "enfermera, doctora, ingeniera",
  "agradecimientos": "Agradezco a Dios y a mi familia que me acompañaron en esta etapa, por su apoyo, consejos y paciencia.",
  "foto": "1Gwy4a1iObBHX734ieWDZN-e-kEWaoGAc",
  "firma": "1IPv--clJ5UyswHYTJjTlMi9K1ZtPqRyA",
  "apellido": "Alarcon"
 },
 {
  "nombre": "Ancizar Steven Triana Murcia",
  "frase": "six seven",
  "recuerdo": "El día del compartir en 10°",
  "aspiraciones": "-Terminar el tecnólogo\n-Irme del país junto a mi familia\n-Hacer la Universidad\n-Tener hijos",
  "agradecimientos": "Agradezco a mis padres por el gran amor que me han dado, a mis hermanos, al profe sebas por ser tan buen docente y a mis amigos por hacer los dias tan divertidos y mas faciles",
  "foto": "18NzJ3TYERWqcAsLJ6jMvL-mYRMPS6aIB",
  "firma": "1Cv-TT4F97KgUwTNO3nb_1UJP5PnoxZ8J",
  "apellido": "Triana"
 },
 {
  "nombre": "Andres Felipe Bastidas Lombana",
  "frase": "Relax que yo remonto",
  "recuerdo": "Mi noviazgo",
  "aspiraciones": "Odontologo",
  "agradecimientos": "Agradezco a mis padre por todo el esfuerzo que hicieron todos estos años para que yo pudiera llegar hasta acá MI GRADO DE BACHILLER",
  "foto": "1Q_BcZBFbvz2IffUyVuvChQdZh5PIwRjf",
  "firma": "1gPg5rH-Mg6t2HjcoHEmtcMcEaEAtzpJH",
  "apellido": "Bastidas"
 },
 {
  "nombre": "kewin daniel escobar ramirez",
  "frase": "ole no",
  "recuerdo": "el dia que jugue un torneo departamental",
  "aspiraciones": "ser profesional en multimedia\ndebutar como jugador",
  "agradecimientos": "le agradesco a mi familia por apoyarme",
  "foto": "1ej6XjqP9CyFix8nZVUa3uNpYwbALRO0r",
  "firma": "1nqxymZ5gGT2csSPludqqVY95I_iQcLoB",
  "apellido": "Escobar"
 },
 {
  "nombre": "Estiven Julian Benitez castro",
  "frase": "Mire a este negro",
  "recuerdo": "Sin duda, mi recuerdo favorito fue el día en que me organizaron una fiesta de cumpleaños sorpresa. Ver reunidos a mis 4 mejores amigos, para celebrar conmigo es un momento que guardo con muchísimo cariño en el corazón.",
  "aspiraciones": "Mi mayor aspiración es convertirme en doctor y alcanzar todas mis metas profesionales, preparándome con dedicación para proteger la salud de las personas y cumplir con éxito cada objetivo que me proponga en el futuro.",
  "agradecimientos": "Agradezco profundamente a mis compañeros, familiares y profesores por haberme acompañado y guiado en esta etapa. Su apoyo y compañía fueron fundamentales durante todo mi proceso educativo en la secundaria.",
  "foto": "19NPaWe31ZieErbXIKnrIL4fTH5w1MJm-",
  "firma": "1wh3YCSf83k3EoFq0GOVR_vjlGKgD1vXc",
  "apellido": "Benitez"
 },
 {
  "nombre": "Laura Angeline Marinez Olaya",
  "frase": "no joda",
  "recuerdo": "Con mis padres de pequeña",
  "aspiraciones": "Estudiar derecho",
  "agradecimientos": "agradezco a mi familia",
  "foto": "1-VsQzhQRQvmCZT4B3xWrRsIFqdZ3regx",
  "firma": "15We6yfCRc4oQIAI8ZgdkGyxfmi307jaI",
  "apellido": "Marinez"
 },
 {
  "nombre": "Johan Sebastian Masmelas Vega",
  "frase": "La constancia consede la victoria",
  "recuerdo": "Cuando me gradue de Ingeniero",
  "aspiraciones": "Doctorado en Educacion\nTener Salud\nSer feliz",
  "agradecimientos": "a mi familia quiero agradecerles por ser mi mayor refujio y mi equipo incondicional.",
  "foto": "1wC6z4B7fxdYV0s4u2i_p3jRRc6w9JS_r",
  "firma": "1Lz-OtVKWva1mLcI3HVq1IirdXPn3x436",
  "etiqueta": "Docente",
  "apellido": "Masmelas"
 }
];

/* ===== Utilidades ===== */
const sinTildes = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
const slug = n => sinTildes(n).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const capitalizar = n => n.toLowerCase().split(/\s+/)
  .map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(' ');
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const iniciales = n => n.split(' ').slice(0, 2).map(p => p[0]).join('');

/* Convierte "1. algo 2. algo" o "- algo - algo" en lista; si no, en párrafo */
function formatearTexto(t) {
  if (!t) return '<p class="vacio">—</p>';
  if (/^\s*(-|1\.)/.test(t)) {
    const items = t.split(/(?:^|\s)(?:-|\d+\.)\s*/).map(s => s.trim()).filter(Boolean);
    if (items.length > 1) return '<ul>' + items.map(i => `<li>${esc(i)}</li>`).join('') + '</ul>';
  }
  return `<p>${esc(t)}</p>`;
}

/* ===== Datos ordenados alfabéticamente por nombre ===== */
const estudiantes = ESTUDIANTES
  .map(e => ({ ...e, nombre: capitalizar(e.nombre) }))
  .sort((a, b) => {
    const clave = e => sinTildes((ORDEN === 'apellido' && e.apellido ? e.apellido + ' ' : '') + e.nombre);
    return clave(a).localeCompare(clave(b), 'es');
  });

/* ===== Páginas ===== */
function crearPortada() {
  return `<article class="pagina portada">
    <div class="franjas"><i></i><i></i><i></i></div>
    <div class="portada-centro">
      <img class="escudo" src="escudo.png" alt="Escudo del colegio Eugenio Ferro Falla">
      <p class="colegio">Colegio Eugenio Ferro Falla</p>
      <h1>Anuario<span>PROM 2026</span></h1>
      <p class="lema">Ciencia y Virtud</p>
    </div>
    <p class="portada-pie">Promoción 2026 · Hojea con las flechas →</p>
  </article>`;
}

function crearInterior(e, n) {
  const s = slug(e.nombre);
  const largo = (e.agradecimientos || '').length > 650 ? ' largo' : '';
  return `<article class="pagina interior${largo}">
    <header class="cinta"><span>Anuario PROM 2026</span><span>Eugenio Ferro Falla</span></header>
    <div class="contenido">
      <div class="perfil">
        <div class="foto" data-ini="${esc(iniciales(e.nombre))}">
          <img src="fotos/${s}.jpg" data-id="${e.foto || ''}" referrerpolicy="no-referrer" alt="Foto de ${esc(e.nombre)}">
        </div>
        <div class="titulo">
          ${e.etiqueta ? `<p class="etiqueta">${esc(e.etiqueta)}</p>` : ''}
          <h2>${esc(e.nombre)}</h2>
          <blockquote>${e.frase ? '“' + esc(e.frase) + '”' : ''}</blockquote>
        </div>
      </div>
      <section><h3>Recuerdo favorito</h3>${formatearTexto(e.recuerdo)}</section>
      <section><h3>Aspiraciones</h3>${formatearTexto(e.aspiraciones)}</section>
      <section><h3>Agradecimientos</h3>${formatearTexto(e.agradecimientos)}</section>
      <div class="firma">
        <img src="firmas/${s}.png" data-id="${e.firma || ''}" referrerpolicy="no-referrer" alt="Firma de ${esc(e.nombre)}">
        <span>Firma</span>
      </div>
    </div>
    <footer class="num">${n}</footer>
  </article>`;
}

function crearGracias() {
  return `<article class="pagina cierre">
    <img class="escudo" src="escudo.png" alt="">
    <h2>¡Gracias por estos años!</h2>
    <p>Promoción 2026 · Colegio Eugenio Ferro Falla</p>
  </article>`;
}

function crearContraportada() {
  return `<article class="pagina cierre">
    <div class="franjas"><i></i><i></i><i></i></div>
    <p class="lema">Ciencia y Virtud</p>
  </article>`;
}

const paginasHTML = [crearPortada(), ...estudiantes.map((e, i) => crearInterior(e, i + 1)), crearGracias()];
if (paginasHTML.length % 2) paginasHTML.push(crearContraportada());
const N = paginasHTML.length;

/* Cada hoja tiene un frente (derecha al abrir) y un dorso (izquierda al voltear) */
const marcar = (html, i) => html.replace('class="pagina ', `class="pagina ${i % 2 ? 'izq dorso' : 'der frente'} `);
const libro = document.getElementById('libro');
libro.innerHTML = Array.from({ length: N / 2 }, (_, h) =>
  `<div class="hoja">${marcar(paginasHTML[2 * h], 2 * h)}${marcar(paginasHTML[2 * h + 1], 2 * h + 1)}</div>`
).join('');
const hojas = [...libro.querySelectorAll('.hoja')];

/* Imágenes: primero la carpeta local; si no existe, Drive; si falla, un sustituto limpio */
libro.querySelectorAll('.foto img, .firma img').forEach(img =>
  img.addEventListener('error', () => {
    const id = img.dataset.id;
    if (id && !img.dataset.drive) {
      img.dataset.drive = '1';
      img.src = `https://drive.google.com/thumbnail?id=${id}&sz=w600`;
    } else {
      if (img.closest('.foto')) img.closest('.foto').classList.add('sin-foto');
      img.remove();
    }
  }));

/* ===== Navegación y volteo =====
   p = índice de la página visible a la derecha (0 = portada).
   En escritorio se ven dos páginas (p-1 y p) y se avanza de 2 en 2.
   En celular se ve una sola página y se avanza de 1 en 1. */
const btnPrev = document.getElementById('anterior');
const btnNext = document.getElementById('siguiente');
const contador = document.getElementById('contador');
const movil = window.matchMedia('(max-width: 900px)');
let p = 0;
let ocupado = false;

const volteadas = pag => Math.floor((pag + 1) / 2);
const paso = () => (movil.matches ? 1 : 2);
const maxP = () => (movil.matches ? N - 1 : N);

function pintar() {
  const v = volteadas(p);
  hojas.forEach((h, i) => {
    h.classList.toggle('volteada', i < v);
    h.classList.toggle('visible', i === v - 1 || i === v);
    h.style.zIndex = i < v ? i : hojas.length - i;
  });
  let tx = 0;
  if (movil.matches) tx = p % 2 === 1 ? 0 : -50;
  else tx = p === 0 ? -25 : p >= N ? 25 : 0;
  libro.style.transform = `translateX(${tx}%)`;

  btnPrev.disabled = p === 0;
  btnNext.disabled = p >= maxP();
  if (p === 0) contador.textContent = 'Portada';
  else if (movil.matches) contador.textContent = `Página ${p}`;
  else contador.textContent = p >= N ? 'Contraportada' : `Páginas ${p - 1}–${p}`;
}

function ir(dir) {
  const destino = p + dir * paso();
  if (ocupado || destino < 0 || destino > maxP()) return;
  ocupado = true;
  const a = volteadas(p), b = volteadas(destino);
  for (let i = Math.min(a, b); i < Math.max(a, b); i++) hojas[i].classList.add('girando');
  p = destino;
  pintar();
  setTimeout(() => { hojas.forEach(h => h.classList.remove('girando')); ocupado = false; }, 900);
}

btnPrev.addEventListener('click', () => ir(-1));
btnNext.addEventListener('click', () => ir(1));
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') ir(1);
  if (e.key === 'ArrowLeft') ir(-1);
});

/* Deslizar con el dedo en celulares */
let inicioX = null;
libro.addEventListener('touchstart', e => { inicioX = e.touches[0].clientX; }, { passive: true });
libro.addEventListener('touchend', e => {
  if (inicioX === null) return;
  const dx = e.changedTouches[0].clientX - inicioX;
  if (Math.abs(dx) > 50) ir(dx < 0 ? 1 : -1);
  inicioX = null;
}, { passive: true });

/* Al cambiar entre celular y escritorio, se ajusta la vista */
movil.addEventListener('change', () => {
  if (!movil.matches && p % 2) p = Math.min(p + 1, N);
  pintar();
});

pintar();