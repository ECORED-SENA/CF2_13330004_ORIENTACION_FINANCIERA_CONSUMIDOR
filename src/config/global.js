export default {
  global: {
    componenteFormativo: 'Teorías de la información, contabilidad y finanzas',
    descripcionCurso:
      'En este componente se desarrollan temáticas para reconocer y diagnosticar el estado de situación financiera de una empresa, teniendo en cuenta la importancia de los estados financieros y cómo estos aportan a la toma de decisiones relevantes que permitan el fortalecimiento y crecimiento previsto, estableciendo la base para creación de estrategias oportunas siempre enmarcadas con las NIIF (Normas Internacionales de la Información Financiera) y la reglamentación nacional. ',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Tecnologías de la información para las finanzas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Contextualización general',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Hoja electrónica',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Sector financiero',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Contabilidad básica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos de registro',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Clasificación',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Estados financieros',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Características y componentes',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: ' Fórmulas de liquidación',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Conversión de intereses',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Normas aplicables',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Análisis financiero',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Conceptos generales',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Tipos de análisis',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Productos financieros',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Características',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Informes financieros y sus composiciones',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Comunicación organizacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Canales y conceptos',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Tipos',
            hash: 't_6_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.3',
            titulo: 'Procesos de recepción y procesamiento',
            hash: 't_6_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Ayuso Sahogar, S. (2016). Manual Excel Financiero. Formación para el Empleo. Editorial CEP, S.L. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/50976',
    },
    {
      referencia:
        'Bermeo-Giraldo, M.C., Montoya-Restrepo, L.A., Valencia-Arias, A., y Mejía Cardona, M.A. (2020). Incursión de las TIC en la gestión de la información financiera en las empresas pyme comerciales: estudio de caso.',
    },

    {
      referencia:
        'Guevara Sanabria, J. A., y Henao Castrillón, D. (2018). Revelaciones de instrumentos financieros: cumplimiento con la implementación de NIIF en Colombia. Contaduría Universidad De Antioquia, (72), 131–150',
      link: 'https://doi.org/10.17533/udea.rc.n72a07',
    },

    {
      referencia:
        'Lavalle Burguete, A. C. (2017). Análisis financiero. Editorial Digital UNID. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/41183',
    },
    {
      referencia: 'Raffino, M. (2020). Concepto de Empresa.',
      link: 'https://concepto.de/empresa/',
    },
    {
      referencia:
        'Rodríguez, D. (2015). Normas Internacionales de Contabilidad (NIC). ',
      link:
        'https://contabilidad.com.do/normas-internacionales-de-contabilidad-nic/',
    },
    {
      referencia:
        'SENA. [Ecosistema de Recursos Educativos Digitales SENA]. (2021, 13 DE JULIO). Fundamentos contables. [vídeo]. Youtube. ',
      link: 'https://youtu.be/lok_ojpOwcc',
    },
  ],
  glosario: [
    {
      termino: 'Análisis ',
      significado:
        'Es un proceso de verificación, investigación que se hace a través de una evaluación específica sobre alguna área en general.',
    },
    {
      termino: 'Contabilidad',
      significado:
        'A través de ella se mide y registra por vía sistemática toda acción financiera y económica referente a los hechos que ocurran en una empresa.',
    },
    {
      termino: 'Endeudamiento',
      significado:
        'Es considerado un nivel financiero que establece la capacidad de adquirir una deuda teniendo en cuenta todas las entradas de recursos.',
    },
    {
      termino: 'Estados Financieros',
      significado:
        'Son reportes que reflejan cómo se encuentra la empresa en cuestión financiera y económica.',
    },
    {
      termino: 'Finanzas',
      significado:
        'Es la encargada de administrar y valorar los recursos económicos a través de diversos procesos que corresponden a planes de inversión, ahorro y financiamiento.',
    },
    {
      termino: 'Liquidez',
      significado:
        'Es considerada la situación en la cual se posee recursos en el momento, de manera frecuente por un periodo determinado. ',
    },
    {
      termino: 'NIIF',
      significado: 'Normas Internacionales de información financiera.',
    },
    {
      termino: 'Rentabilidad',
      significado:
        'Es considerada la ganancia que proviene de unas buenas acciones financieras, casi siempre requiere una inversión previa.',
    },
  ],
  complementario: [
    {
      tema: 'Tecnologías de la información para las finanzas',
      referencia:
        'Retina Tendencias. (2021). <i>Cómo la tecnología puede ayudar a la función financiera en las empresas</i> (Video). YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/r1YzF006sUA',
    },
    {
      tema: 'Hoja electrónica',
      referencia:
        'Educación Continua EBC. (2020). <i>Excel para financieros</i> (Vídeo) YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/gLvNqjIkzyM',
    },
    {
      tema: 'Hoja electrónica',
      referencia:
        'Wally, O. (2019). <i>Modelo Financiero en Excel</i> (Video). YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/iRVhABNVmRw',
    },
    {
      tema: 'Sector financiero',
      referencia:
        'Luna Restrepo, J. (2011). Colombia: hacia la adopción y aplicación de las NIIF y su importancia. Adversia. pp 26-43.',
      tipo: 'Artículo',
      link:
        'https://revistas.udea.edu.co/index.php/adversia/article/view/10954/10047',
    },
    {
      tema: 'Contabilidad básica',
      referencia:
        'Cervera Oliver, M. & Gómez Carrasco, P. (2021). <i>Contabilidad básica</i>. 1. ',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/215440',
    },
    {
      tema: 'Contabilidad básica',
      referencia:
        'Ayuso Sahogar, S. (2016). <i>Manual Excel Financiero. Formación para el Empleo</i>. ',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/50976',
    },
    {
      tema: 'Contabilidad básica',
      referencia:
        'Izaguirre Olmedo, J., Carhuancho Mendoza, I. & Silva Siu, D. (2020). <i>Finanzas para no financieros</i> . ',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/136839',
    },
    {
      tema: 'Estados financieros',
      referencia:
        'Palomares, J. & José Peset, M. (2016). <i>Estados financieros: interpretación y análisis</i>. ',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/49106',
    },
    {
      tema: 'Análisis financiero',
      referencia:
        'Leptru007. (2014). <i>Análisis Vertical y Horizontal: Ejemplos y Explicación</i> (Video). ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=7oJHwioBpVI',
    },
    {
      tema: 'Productos financieros',
      referencia:
        'Morales Vera, E. (2021). Productos Financieros (Video). YouTube.  ',
      tipo: 'Video',
      link: 'https://youtu.be/hKW5fEmWAhM',
    },
    {
      tema: 'Comunicación organizacional',
      referencia:
        'Castro, A. D. (2014).<i> Comunicación organizacional: técnicas y estrategias.</i> ',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/69924',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'José Francisco Chará Carrero',
        cargo: 'Experto temático',
        centro:
          'Regional Norte de Santander - - Centro de la Industria, la Empresa y Los Servicios.',
      },
      {
        nombre: 'Giovanna Andrea Escobar',
        cargo: 'Diseñadora instruccional',
        centro:
          'Regional Norte de Santander - Centro de la Industria, la Empresa y Los Servicios.',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora metodológica',
        centro: 'Regional Distrito Capital – Centro de Diseño y Metrología.',
      },
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable equipo de desarrollo curricular',
        centro:
          'Regional Santander - Centro Industrial del Diseño y la Manufactura.',
      },
      {
        nombre: 'Sandra Paticia Hoyos Sepúlveda',
        cargo: 'Corrección de estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Sofía Suarez Suarez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: ['Daniel Mutis'],
        cargo: 'Validación diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Sergio Mauricio Valencia Martínez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Luis Gabriel Urueta Alvarez',
        cargo: 'Actividades didácticas',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona ',
        cargo: 'Validación contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guión audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Pedro Nel Calao Zabala',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Jhon Fredy Rodriguez Castiblanco',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
