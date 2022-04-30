const tvs = [
  {
    backdrop_path: '/1uegR4uAxRxiMyX4nQnpzbXhrTw.jpg',
    first_air_date: '2022-03-30',
    genre_ids: [10759, 10765, 9648],
    id: 92749,
    name: 'Caballero luna',
    origin_country: ['US'],
    original_language: 'en',
    original_name: 'Moon Knight',
    overview:
      'Steven Grant, un amable empleado de una tienda de regalos, sufre pérdidas de memoria y experimenta recuerdos de otra vida. Steven descubre que tiene un trastorno de identidad disociativo y que comparte cuerpo con el mercenario Marc Spector. A medida que los enemigos de Steven/Marc van convergiendo, debe lidiar con la complejidad de sus identidades mientras se sumerge en un misterio letal que habita entre los poderosos dioses de Egipto.',
    popularity: 6862.845,
    poster_path: '/1HXBUVLacdJhJz0rYGz71qrczMM.jpg',
    vote_average: 8.5,
    vote_count: 466
  },
  {
    backdrop_path: '/4g5gK5eGWZg8swIZl6eX2AoJp8S.jpg',
    first_air_date: '2003-10-21',
    genre_ids: [18],
    id: 11250,
    name: 'Pasión de gavilanes',
    origin_country: ['CO'],
    original_language: 'es',
    original_name: 'Pasión de gavilanes',
    overview:
      'Los hermanos Reyes buscan vengar la muerte de su hermana, lo que les lleva a instalarse como trabajadores en la mansión de la familia Elizondo. El profundo odio comienza a cambiar cuando los hermanos Reyes se integran en la vida de la familia. Con lo que no cuenta Juan es con que su vida y las de sus dos hermanos se cruzará con la de las tres hermanas Elizondo, corriendo el riesgo de caer presos de su propia venganza...',
    popularity: 1905.718,
    poster_path: '/91UV7pNcDPhIzJl7EuK36sK5vRG.jpg',
    vote_average: 7.6,
    vote_count: 1789
  },
  {
    backdrop_path: '/dZw3JMoVunCHQzukpk7SIwhty3D.jpg',
    first_air_date: '2022-04-20',
    genre_ids: [10766, 9648],
    id: 158916,
    name: 'Pálpito',
    origin_country: ['CO'],
    original_language: 'es',
    original_name: 'Pálpito',
    overview:
      'Él quiere vengarse de los traficantes de órganos que mataron a su esposa. Ella fue la que recibió su corazón. Cuando se enamoran, ninguno sabe lo que los une.',
    popularity: 1912.977,
    poster_path: '/jHV0cRQQSBi2juHsvhOOosKHGJ8.jpg',
    vote_average: 6.6,
    vote_count: 10
  },
  {
    backdrop_path: '/osKPRa2nFjFItUR0MI5nnP2Yzd.jpg',
    first_air_date: '2022-04-01',
    genre_ids: [10751],
    id: 194922,
    name: 'Trivia Quest',
    origin_country: ['US'],
    original_language: 'en',
    original_name: 'Trivia Quest',
    overview: '',
    popularity: 1355.934,
    poster_path: '/zzGl5PdVkEbvIV7PiFZ9SdQln3i.jpg',
    vote_average: 5.3,
    vote_count: 11
  },
  {
    backdrop_path: '/wiE9doxiLwq3WCGamDIOb2PqBqc.jpg',
    first_air_date: '2013-09-12',
    genre_ids: [18, 80],
    id: 60574,
    name: 'Peaky Blinders',
    origin_country: ['GB'],
    original_language: 'en',
    original_name: 'Peaky Blinders',
    overview:
      'En Gran Bretaña, Reino Unido se recuperan de la desesperación de la Gran Guerra, las personas sobreviven a como pueden, y las bandas criminales proliferan en una nación sacudida económicamente.\n\nEs justamente aquí donde una familia de gánsteres irlandeses de origen nómada (a veces llamados gitanos o chatarreros) asentada en Birmingham (los Peaky Blinders) justo después de la Primera Guerra Mundial, dirigen un local de apuestas hípicas en la ciudad.  Las acciones del ambicioso, respetado, temerario y peligroso jefe de la banda, Thomas Shelby, llaman la atención del Inspector jefe Chester Campbell, un detective de la Real Policía Irlandesa que es enviado por el mismo Winston Churchill desde Belfast donde había sido enviado a limpiar la ciudad del Ejército Republicano Irlandés (IRA), comunistas, pandillas y delincuentes comunes.',
    popularity: 1165.574,
    poster_path: '/bGZn5RVzMMXju4ev7xbl1aLdXqq.jpg',
    vote_average: 8.6,
    vote_count: 6116
  },
  {
    backdrop_path: '/jT2Fyj1nzscW8yOR3DdtEJ08NTH.jpg',
    first_air_date: '2022-04-22',
    genre_ids: [18, 10751],
    id: 124834,
    name: 'Heartstopper',
    origin_country: ['GB'],
    original_language: 'en',
    original_name: 'Heartstopper',
    overview:
      'Dos adolescentes británicos, Nick Nelson y Charlie Spring, estudian en una escuela primaria exclusiva para varones. Charlie, un pensador demasiado nervioso y abiertamente gay, y Nick, un jugador de rugby alegre y de buen corazón, un día se sientan juntos en clase. La amistad florece rápidamente, pero ¿podría haber algo más...? Basada en la novela gráfica de Alice Oseman.',
    popularity: 1111.579,
    poster_path: '/wJJt1HG62h3WoGnLcRIbO2nNNkg.jpg',
    vote_average: 8.7,
    vote_count: 74
  },
  {
    backdrop_path: '/dpzC0ACzwkVporKvzZGvNFOBFr6.jpg',
    first_air_date: '2005-03-27',
    genre_ids: [18],
    id: 1416,
    name: 'Anatomía de Grey',
    origin_country: ['US'],
    original_language: 'en',
    original_name: "Grey's Anatomy",
    overview:
      'La vida de Meredith Grey no es nada fácil. Intenta tomar las riendas de su vida, aunque su trabajo sea de esos que te hacen la vida imposible. Meredith es una cirujana interna de primer año en el Hospital Grace de Seattle, el programa de prácticas más duro de la Facultad de Medicina de Harvard. Y ella lo va a comprobar. Pero no estará sola. Un elenco de compañeros de promoción tendrán que superar la misma prueba. Ahora están en el mundo real, son doctores del hospital. Y en un mundo donde la experiencia en el trabajo puede ser un factor de vida o muerte, todos ellos tendrán que lidiar con los altibajos de sus vidas personales.',
    popularity: 870.656,
    poster_path: '/9ii38fa8Vqb9dRv97qEvoGbGftE.jpg',
    vote_average: 8.3,
    vote_count: 7937
  },
  {
    backdrop_path: '/wvdWb5kTQipdMDqCclC6Y3zr4j3.jpg',
    first_air_date: '2010-10-31',
    genre_ids: [10759, 18, 10765],
    id: 1402,
    name: 'The Walking Dead',
    origin_country: ['US'],
    original_language: 'en',
    original_name: 'The Walking Dead',
    overview:
      '"The Walking Dead" está ambientada en un futuro apocalíptico con la Tierra devastada por el efecto de un cataclismo, que ha provocado la mutación en zombies de la mayor parte de los habitantes del planeta. La serie, explora las dificultades de los protagonistas para sobrevivir en un mundo poblado por el horror, así como las relaciones personales que se establecen entre ellos, en ocasiones también una amenaza para su supervivencia.',
    popularity: 801.482,
    poster_path: '/hUblG1KZCTRpHc3wqqoU0DW98Q3.jpg',
    vote_average: 8.1,
    vote_count: 12958
  },
  {
    backdrop_path: '/6Ys6koNajP5ld9EIMfOSQrRquki.jpg',
    first_air_date: '2017-09-25',
    genre_ids: [18],
    id: 71712,
    name: 'The Good Doctor',
    origin_country: ['US'],
    original_language: 'en',
    original_name: 'The Good Doctor',
    overview:
      'Un cirujano joven y autista que padece el síndrome del sabio empieza a trabajar en un hospital prestigioso. Allá tendrá que vencer el escepticismo con el que sus colegas lo reciben.',
    popularity: 754.383,
    poster_path: '/ubOaaQjDQ4lWtw1dkXhqsQWTsEY.jpg',
    vote_average: 8.5,
    vote_count: 10436
  },
  {
    backdrop_path: '/uU6YW3N11qECNfz18LNGAGg3Uir.jpg',
    first_air_date: '2018-10-05',
    genre_ids: [80, 9648, 18],
    id: 76669,
    name: 'Élite',
    origin_country: ['ES'],
    original_language: 'es',
    original_name: 'Élite',
    overview:
      'Las Encinas, un exclusivo colegio privado al que la élite social del país envía a sus hijos. Pero en el centro son admitidos tres adolescentes de familias humildes después de que un terremoto destruyera el colegio público en el que estudiaban. El choque de clases genera diversos problemas que se agravan hasta que, de repente, se produce un asesinato.',
    popularity: 706.663,
    poster_path: '/48CTZhwy2iZauhhxMo3KEWo7avF.jpg',
    vote_average: 8.1,
    vote_count: 8112
  },
  {
    backdrop_path: '/ktDJ21QQscbMNQfPpZBsNORxdDx.jpg',
    first_air_date: '2016-01-25',
    genre_ids: [80, 10765],
    id: 63174,
    name: 'Lucifer',
    origin_country: ['US'],
    original_language: 'en',
    original_name: 'Lucifer',
    overview:
      'La serie se centrará en Lucifer (Tom Ellis) quien, aburrido e infeliz como el Señor del Infierno, dimite de su trono y abandona su reino para trasladarse a la ciudad de Los Angeles y abrir un lujoso piano-bar llamado Lux. Una vez allí ayudará a la policía a castigar a los más peligrosos criminales de la ciudad.',
    popularity: 726.857,
    poster_path: '/wQh2ytX0f8IfC3b2mKpDGOpGTXS.jpg',
    vote_average: 8.5,
    vote_count: 11818
  },
  {
    backdrop_path: '/41yaWnIT8AjIHiULHtTbKNzZTjc.jpg',
    first_air_date: '2014-10-07',
    genre_ids: [18, 10765],
    id: 60735,
    name: 'The Flash',
    origin_country: ['US'],
    original_language: 'en',
    original_name: 'The Flash',
    overview:
      'Después de que un acelerador de partículas cause una extraña tormenta, al investigador científico de la policía, Barry Allen, le cae un rayo y entra en coma. Meses después despierta con el poder de moverse a súper velocidad permitiéndole ser el ángel de la guardia de Central City. Aunque al principio se siente entusiasmado con sus nuevos poderes, Barry descubre que no es el único “meta-humano” que se originó tras la explosión del acelerador – y no todo el mundo está usando sus nuevos poderes para el bien. Los compañeros del laboratorio STAR dedican su vida a ayudar a Barry a proteger a los inocentes. Por ahora, solo algunos amigos cercanos saben que Barry es, literalmente, el hombre más rápido del mundo, pero no pasará mucho hasta que el mundo conozca que ahora Barry Allen es … Flash.',
    popularity: 724.876,
    poster_path: '/v53HU0aV1Di8QCpS1NHaNWrwFv2.jpg',
    vote_average: 7.8,
    vote_count: 9568
  },
  {
    backdrop_path: '/8Xs20y8gFR0W9u8Yy9NKdpZtSu7.jpg',
    first_air_date: '2022-01-28',
    genre_ids: [18, 10765],
    id: 99966,
    name: 'Estamos muertos',
    origin_country: ['KR'],
    original_language: 'ko',
    original_name: '지금 우리 학교는',
    overview:
      'Un grupo de estudiantes se da cuenta de que tienen que enfrentarse con las pocas existencias que tienen a una situación de crisis extrema. Estos quedan atrapados en el instituto donde estudian mientras que un virus zombie se propaga por todo el mundo.\n\nLa escuela está llena de infectados, pero nadie puede salir de allí. El gupo de amigos deberá hacer todo lo posible para sobrevivir y salir del colegio sanos y salvos cuando el apocalipsis zombie termine.',
    popularity: 724.176,
    poster_path: '/pHaYhCTPg2fETRNiIpBsVWudazA.jpg',
    vote_average: 8.5,
    vote_count: 1959
  },
  {
    backdrop_path: '/k47JEUTQsSMN532HRg6RCzZKBdB.jpg',
    first_air_date: '2022-02-25',
    genre_ids: [10759, 18, 10768],
    id: 116135,
    name: 'Vikingos: Valhalla',
    origin_country: ['US'],
    original_language: 'en',
    original_name: 'Vikings: Valhalla',
    overview:
      "Secuela de 'Vikingos' ambientada 100 años después y centrada en las aventuras de Leif Erikson, Freydis, Harald Hardrada y el rey normando Guillermo el Conquistador.",
    popularity: 528.724,
    poster_path: '/izIMqapegdEZj0YVDyFATPR8adh.jpg',
    vote_average: 8.2,
    vote_count: 164
  },
  {
    backdrop_path: '/r2yHI6fKmMUdj4K33IKBRT893KE.jpg',
    first_air_date: '2022-04-20',
    genre_ids: [99, 80],
    id: 197248,
    name: 'Conversaciones con asesinos: Las cintas de John Wayne Gacy',
    origin_country: ['US'],
    original_language: 'en',
    original_name: 'Conversations with a Killer: The John Wayne Gacy Tapes',
    overview:
      'Cenaba con los poderosos. Se aprovechaba de los vulnerables. Bajo un exterior sonriente se escondía la horrible oscuridad de un sádico asesino en serie.',
    popularity: 828.057,
    poster_path: '/dc9IY0ZT2T3gw0RfjmQdsoWp992.jpg',
    vote_average: 9.1,
    vote_count: 7
  },
  {
    backdrop_path: '/pPKiIJEEcV0E1hpVcWRXyp73ZpX.jpg',
    first_air_date: '2021-02-23',
    genre_ids: [10765, 18],
    id: 95057,
    name: 'Superman & Lois',
    origin_country: ['US'],
    original_language: 'en',
    original_name: 'Superman & Lois',
    overview:
      'Sigue a la periodista y al superhéroe más famosos del mundo y los cómics, como lidian con todo el estrés, las presiones y las complejidades que conlleva ser padres trabajadores en la sociedad actual.',
    popularity: 507.386,
    poster_path: '/vlv1gn98GqMnKHLSh0dNciqGfBl.jpg',
    vote_average: 8.1,
    vote_count: 1667
  },
  {
    backdrop_path: '/rQ5pOJBSqWoRf9evZHkL8rzUD4n.jpg',
    first_air_date: '1989-12-17',
    genre_ids: [10751, 16, 35],
    id: 456,
    name: 'Los Simpson',
    origin_country: ['US'],
    original_language: 'en',
    original_name: 'The Simpsons',
    overview:
      'Comedia americana de animación creada por Matt Groening para la compañía Fox. La serie es una parodia satírica del estilo de la clase media americana encarnada por una familia con ese mismo nombre, compuesta por Homer, Marge, Bart, Lisa, y Maggie Simpson. La trama se desarrolla en la ciudad ficticia de Springfield y parodia la cultura, la sociedad, la televisión estadounidense y muchos otros aspectos de la condición humana.',
    popularity: 534.724,
    poster_path: '/u8BMLmwoc7YPHKSWawOOqC1c8lJ.jpg',
    vote_average: 7.9,
    vote_count: 7811
  },
  {
    backdrop_path: '/9KnIzPCv9XpWA0MqmwiKBZvV1Sj.jpg',
    first_air_date: '2019-06-16',
    genre_ids: [18],
    id: 85552,
    name: 'Euphoria',
    origin_country: ['US'],
    original_language: 'en',
    original_name: 'Euphoria',
    overview:
      'Una reflexión sobre la adolescencia a través de un grupo de estudiantes de instituto que tienen que hacer frente a temas recurrentes de su edad, como la droga, el sexo y la violencia.',
    popularity: 498.128,
    poster_path: '/3Q0hd3heuWwDWpwcDkhQOA6TYWI.jpg',
    vote_average: 8.4,
    vote_count: 7690
  },
  {
    backdrop_path: '/cJYLon9ejKJV7ua03ab8Tj9u067.jpg',
    first_air_date: '2009-09-10',
    genre_ids: [18, 10765],
    id: 18165,
    name: 'Crónicas vampíricas',
    origin_country: ['US'],
    original_language: 'en',
    original_name: 'The Vampire Diaries',
    overview:
      '"Crónicas Vampíricas" cuenta la historia de dos hermanos vampiros obsesionados con la misma chica en un pequeño pueblo, donde seres sobrenaturales viven en secreto entre sus residentes.',
    popularity: 479.038,
    poster_path: '/rKNnzmOA1REgxODY5wVe5UEr70w.jpg',
    vote_average: 8.3,
    vote_count: 7199
  },
  {
    backdrop_path: '/7j4ug9B6JXVeh5HhQjjPScrdj4Z.jpg',
    first_air_date: '2017-11-02',
    genre_ids: [10759, 80, 18],
    id: 71790,
    name: 'S.W.A.T.',
    origin_country: ['US'],
    original_language: 'en',
    original_name: 'S.W.A.T.',
    overview:
      'La serie sigue a Daniel "Hondo" Harrelson, un teniente S.W.A.T. que se ve dividido entre la lealtad a las calles y el deber con sus compañeros oficiales, cuando el agresivo y confiado líder del equipo 10-David SWAT, Jeff Mumford, lo asigna para dirigir una unidad altamente capacitada de la policía, que estará encargada de detener los crímenes en Los Ángeles.',
    popularity: 473.292,
    poster_path: '/ttzrYMdsKWR8PTRLw7uo4noqaOJ.jpg',
    vote_average: 8.1,
    vote_count: 913
  }
];

export default tvs;
