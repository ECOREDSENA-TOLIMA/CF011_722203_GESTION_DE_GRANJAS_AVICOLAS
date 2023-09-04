export default {
  global: {
    componenteFormativo: 'Registros y recolección de datos',
    descripcionCurso:
      'Los sistemas de recolección de información permiten poner a prueba estrategias diseñadas por la empresa y obtener la retroalimentación necesaria para mejorarlas. Su análisis e interpretación siempre estarán supeditados a la calidad de los datos recolectados. <br><br> Hacer uso de las herramientas actuales posibilitará la consecución de los objetivos relacionados con la recolección, análisis y custodia de la información.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      // {
      //   clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
      //   imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      // },
      // {
      //   clases: ['banner-principal-decorativo-2'],
      //   imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      // },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Clasificación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Estructura',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Ciclo de vida',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Lenguaje técnico',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Confidencialidad',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Fuentes',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Métodos de recolección',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Criterios de selección',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Observación',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Entrevista',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Encuesta',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Análisis de contenido',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Ofimática',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Usos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Herramientas ofimáticas',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: '<em>Softwares</em> de recolección de datos',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Licencias',
            hash: 't_4_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_11_722203.zip',
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
  complementario: [
    {
      tema: 'Confidencialidad',
      referencia:
        '<em>Ley 1266 de 2008.</em> Por la cual se dictan las disposiciones generales del hábeas data y se regula el manejo de la información contenida en bases de datos personales, en especial la financiera, crediticia, comercial, de servicios y la proveniente de terceros países y se dictan otras disposiciones. 31 de diciembre de 2008. D.O. N° 47.219. ',
      tipo: 'Otro',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=34488',
    },
    {
      tema: 'Confidencialidad',
      referencia:
        'Ley Estatutaria 158.1 Por la cual se dictan disposiciones generales para la protección de datos personales. 18 de octubre de 2012.  D.O. N° 51788.',
      tipo: 'Página <em>web</em>',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_1581_2012.html',
    },
    {
      tema: 'Confidencialidad',
      referencia:
        'Decreto 1377 de 2013. [Presidencia de la República de Colombia]. Por el cual se reglamenta parcialmente la Ley 1581 de 2012. 27 de junio de 2013.',
      tipo: 'Página <em>web</em>',
      link:
        'http://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Decretos/1276081',
    },
    {
      tema: 'Métodos de recolección',
      referencia:
        'UNICEF Innocenti. (2014). <em>Métodos de recolección y análisis de datos en la evaluación de impacto</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Ph1WX0cH5-4',
    },
    {
      tema: 'Ofimática',
      referencia:
        'Escobar, J. (2020). <em>Qué es la Ofimática</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=N1Jwap5uOhY',
    },
    {
      tema: '<em>Softwares</em> de recolección de datos',
      referencia:
        'Regalado, J. (2020). <em>Crea CUESTIONARIOS autoevaluables con Google FORMULARIOS</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=4kp-csZQXqU',
    },
  ],
  glosario: [
    {
      termino: 'Código fuente',
      significado:
        'listado de instrucciones que parametrizan el funcionamiento de un <em>software</em>.',
    },
    {
      termino: 'Encriptación',
      significado:
        'sistema de seguridad en la que se modifican los archivos digitales mediante algoritmos, para hacerlos ilegibles en caso de ser sustraídos sin autorización.',
    },
    {
      termino: 'Fenómeno',
      significado:
        'cualquier situación o manifestación que se percibe con los sentidos.',
    },
    {
      termino: 'Inferencia',
      significado: 'que deduce una afirmación a partir de otras.',
    },
    {
      termino: 'Propiedad intelectual',
      significado:
        'derecho que se posee sobre una idea, concepto o cualquier creación surgida del intelecto humano.',
    },
    {
      termino: '<em>Software</em>',
      significado: 'conjunto de programas para computadora.',
    },
    {
      termino: 'Unívoco',
      significado: 'algo que siempre tiene el mismo significado.',
    },
  ],
  referencias: [
    {
      referencia:
        'Castillo, I. (2018). <em>Lenguaje técnico: características y ejemplos.</em> Lifeder. ',
      link: 'https://www.lifeder.com/lenguaje-tecnico/',
    },
    {
      referencia:
        'Comisión Económica para América Latina y el Caribe – CEPAL. (2020). <em>Gestión de datos de investigación.</em> ',
      link:
        'https://biblioguias.cepal.org/gestion-de-datos-de-investigacion/tipos-datos',
    },
    {
      referencia:
        'Constitución Política de Colombia [Const]. Art. 15. 7 de julio de 1991. (Colombia). ',
      link: 'https://www.acnur.org/fileadmin/Documentos/BDL/2001/0219.pdf',
    },
    {
      referencia:
        'Decreto 1377 de 2013. [Presidencia de la República] por el cual se reglamenta parcialmente la Ley 1581 de 2012. Junio 27 de 2013. ',
      link:
        'http://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Decretos/1276081',
    },
    {
      referencia:
        'Emanuelli et al. (2012). <em>Herramientas de Metodología para investigar en comunicación: Técnicas de recolección y análisis de la información.</em> Primera edición. Editorial Copy-Rápido. ',
      link:
        'https://filadd.com/doc/tomo2-1-manual-herramientas-de-metodol-para',
    },
    {
      referencia:
        'Ley estatutaria 1266 de 2008. Por la cual se dictan las disposiciones generales del hábeas data y se regula el manejo de la información contenida en bases de datos personales, en especial la financiera, crediticia, comercial, de servicios y la proveniente de terceros países y se dictan otras disposiciones. Diciembre 31 de 2008. DO. Nº 47.219. ',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_1266_2008.html',
    },
    {
      referencia:
        'Ley estatutaria 1581 de 2012. Por la cual se dictan disposiciones generales para la protección de datos personales. Octubre 17 de 2012. DO. Nº 48.587 ',
      link:
        'https://www.minambiente.gov.co/politica-de-proteccion-de-datos-personales/#:~:text=Ley%20de%20Protecci%C3%B3n%20de%20Datos,de%20naturaleza%20p%C3%BAblica%20o%20privada',
    },
    {
      referencia:
        'Pérez, A. (2020). <em>Las 4 fases del ciclo de vida de los datos.</em> OBS Business School ',
      link:
        'https://www.obsbusiness.school/blog/las-4-fases-del-ciclo-de-vida-de-los-datos',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Mercedes Orduz Gómez',
          cargo: 'Experta Temática',
          centro:
            'Regional Santander - Centro de Atención al Sector Agropecuario',
        },
        {
          nombre: 'Giovanna Andrea Escobar Ospina',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios (CIES)',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrector de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Juan Gilberto Giraldo Cortés',
          cargo: 'Diseñador instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Viviana Herrera Quiñonez',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Yobani Penagos Mora',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oscar Daniel Espitia Marin',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y Vinculación en Plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de Contenidos Accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
