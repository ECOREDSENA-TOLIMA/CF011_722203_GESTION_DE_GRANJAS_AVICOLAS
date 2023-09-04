<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Información 
      
    .row.mb-4(data-aos="fade-down")
      .col-12
        .cajon.color-acento-contenido.p-4
          p.mb-0 Es la consolidación de los datos de una forma organizada y convertida a un contexto útil para los usuarios finales. Los datos son abstractos por sí mismos, por lo que requieren de la organización adecuada para tener alguna utilidad. Así, por ejemplo, una lista de números sin contexto no puede ser entendida, pero si se aclara que corresponde a valores de venta, y cada uno se asocia a un producto en específico, dichos datos se transforman en información útil, como un catálogo de productos con su listado de precios asociado.
      .col-12.col-md-8.mt-4
        .cajon-b.color-primario.p-3
          p El uso que se le da a la información es: 
    
    .tarjeta.color-secundario.p-3(data-aos="fade-down-left")
      SlyderB.mb-5(:datos="datosSlyder")

    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Ciclo de vida

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-down-left")
      .col-md-4
        img(src="@/assets/curso/temas/tema2/tema2-5.png")
      .col-md-8
        .cajon-b.color-acento-botones.p-3.mb-5
          p La información es un elemento de gran relevancia en la gestión de las empresas sin importar el sector al que pertenecen, la actividad que desarrollan o el tamaño que tienen. Sin información oportuna y bien estructurada, la toma de decisiones no tendrá bases lo suficientemente sólidas para garantizar que las estrategias aplicadas sean las más apropiadas. El ciclo de vida de la información ofrece una serie de parámetros centrados en mejorar la productividad a partir de una correcta planificación, una oportuna entrega de los datos y una custodia apropiada para conservar durante el tiempo que se desee la información necesaria. 
          p.mb-0 El ciclo de vida a detallar es el siguiente:  

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-10.col-lg-8(data-aos="fade-right")
        .titulo-sexto.color-primario
          p.titulo.pb-0.mb-0 #[b Figura 2.] #[i Ciclo de vida de la información.] 
        figure
          img(src='@/assets/curso/temas/tema2/tema2-6.svg', alt='En la figura 2, se muestra el ciclo de vida de la información, se puede dividir en cuatro etapas claves, creación, transmisión, gestión y análisis.')  
          figcaption.mt-2 Nota. Adaptado de Pérez (2020).

    .titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 Creación y captura

    p.mb-5(data-aos="fade-down") El primer paso en el ciclo de vida de la información es su creación, donde la generación del contenido relevante para la empresa puede provenir de diferentes fuentes, pero lo más común es que surjan de algunas de las siguientes: 

    .row.mb-5(data-aos="flip-down")
      .col-sm-6.col-md.mb-4.mb-lg-0
        .tarjeta.color-secundario.p-4
          .row.justify-content-center.mb-3
            .col-8.col-md-6.col-lg-5
              figure
                img(src='@/assets/curso/temas/tema2/tema2-7.svg', alt='')
          h5.text-center Datos preexistentes de otras empresas o negocios.

      .col-sm-6.col-md.mb-4.mb-lg-0
        .tarjeta.color-secundario.p-4
          .row.justify-content-center.mb-3
            .col-8.col-md-6.col-lg-5
              figure
                img(src='@/assets/curso/temas/tema2/tema2-8.svg', alt='')
          h5.text-center Creación propia por parte de los colaboradores de la compañía como empleados, propietarios, asesores.

      .col-sm-6.col-md.mb-4.mb-sm-0
        .tarjeta.color-secundario.p-4
          .row.justify-content-center.mb-3
            .col-8.col-md-6.col-lg-5.py-md-2
              figure
                img(src='@/assets/curso/temas/tema2/tema2-9.svg', alt='')
          h5.text-center Datos disponibles en la web o demás sistemas de información.

    .titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 Transmisión, almacenamiento y seguridad

    p.mb-5(data-aos="fade-down") Una vez se cuenta con los datos necesarios, es importante que estos puedan ser almacenados y transmitidos con seguridad, como se detalla a continuación.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down-right")
      .col-12
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="Transmisión")
            .col-md-6.mb-4.mb-md-0.pt-md-3
              p Los datos deben moverse entre las diferentes áreas de la empresa según donde sean necesarios. Por esto se deben implementar sistemas que aseguren la transmisión entre áreas internas o del exterior al interior de la empresa.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema2/tema2-10.png', alt='')
          .row(numero="2" titulo="Almacenamiento")
            .col-md-6.mb-4.mb-md-0.pt-md-3
              p La información requiere de un espacio para ser conservado. Para esto existen las bases de datos, que se encargan de almacenar y controlar el acceso a la información según los parámetros deseados.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema2/tema2-11.png', alt='')
          .row(numero="3" titulo="Seguridad")
            .col-md-6.mb-4.mb-md-0.pt-md-3
              p Todo proceso que involucre información debe contar con las medidas de seguridad suficientes para evitar la sustracción no deseada de datos. 
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema2/tema2-12.png', alt='')

    .tarjeta.color-primario.p-4.mb-5(data-aos="fade-down-left")
      .row.justify-content-around.align-items-center
        .col-md-2.col-lg-2.mb-4.mb-md-0
          img(src="@/assets/curso/temas/tema1/tema1-5.png")
        .col-md-10.col-lg-10
          p.mb-0 La  información es uno de los recursos más importantes de cualquier organización, ya que involucra no solo bases de datos de clientes, sino estandarización de procesos, fórmulas secretas, entre otros. Herramientas preventivas para la seguridad pueden ser las contraseñas de acceso, o la encriptación de datos, para que, en caso de ser robados, no puedan ser legibles.

    .titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 Gestión y trabajo colaborativo
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-md-8
        p En esta etapa debe otorgarse los permisos y autorizaciones para que los usuarios puedan acceder a los datos e interactuar con ellos según lo requieran. Se enfatiza en el aspecto del trabajo colaborativo, que consiste en otorgar acceso a un equipo conformado con varios funcionarios para que ejecuten sus labores de manera grupal y de manera simultánea, mejorando la productividad.
      .col-md-4
        img(src="@/assets/curso/temas/tema2/tema2-12.png")
      
    .titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 Análisis y explotación de datos
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-md-8
        p La última fase del ciclo de vida de la información consiste en su uso y aplicación a través de la interpretación de los datos. Existen diversas herramientas tecnológicas que integran la información para presentarla a través de informes o reportes elaborados a medida, de tal forma que se puedan efectuar los análisis de la forma más eficiente, y a partir de ellos tomar las decisiones a que haya lugar.
      .col-md-4
        img(src="@/assets/curso/temas/tema2/tema2-14.png")

    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Ciclo de vida

    p.mb-5(data-aos="fade-down") La forma en la que se presenta la información puede variar dependiendo de sus fuentes, aplicabilidad o destinatarios. Cuando la misma se encuentra dirigida a una profesión y oficio, puede expresarse haciendo uso de un lenguaje técnico, el cual cuenta con la particularidad de ser plenamente entendido, únicamente por los conocedores en la materia tratada.

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-15.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Debido a que cada profesión o área de estudio tiene terminología muy particular, dominar el lenguaje técnico de una disciplina no garantiza dominar el de otras. Su uso es cada vez más frecuente debido a que el conocimiento humano avanza en todas las direcciones y perspectivas; es normal que con las ciencias profundizando cada vez más, el lenguaje técnico sea el medio para enriquecer el idioma a través de terminología específica.

    p.mb-5(data-aos="fade-down") Castillo (2018), considera que las características que definen el lenguaje técnico son las siguientes:

    .tarjeta.tarjeta--azul.p-3(data-aos="fade-down-left")
      LineaTiempoB.color-primario.mb-5(:datos="datosLineaTiempoB")


    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Confidencialidad

    p.mb-5(data-aos="fade-down") La información resulta de especial atención y cuidado debido a los efectos que puede tener en terceros o en la misma empresa. La constitución política de 1991 ya consideró como derecho fundamental la intimidad personal, familiar y su buen nombre:

    .row.justify-content-center.mb-4
      .col-md-3.cajon.color-acento-botones(data-aos="fade-down-right")
        .row.justify-content-center.align-items-center(style="height:100%")
          .row.justify-content-center.align-items-center
            h4.text-center ARTÍCULO 15. Constitución Política
            .col-10.col-md-8
              img(src="@/assets/curso/temas/tema2/tema2-20.svg")
      .col-md-9.cajones.color-primario(data-aos="fade-down-left")
        .cajon.tarjeta--gris.mx-3.my-4.p-3
          p Todas las personas tienen derecho a su intimidad personal y familiar y a su buen nombre, y el Estado debe respetarlos y hacerlos respetar. De igual modo, tienen derecho a conocer, actualizar y rectificar las informaciones que se hayan recogido sobre ellas en bancos de datos y en archivos de entidades públicas y privadas.
          p En la recolección, tratamiento y circulación de datos se respetarán la libertad y demás garantías consagradas en la Constitución.
          p La correspondencia y demás formas de comunicación privada son inviolables. Sólo pueden ser interceptadas o registradas mediante orden judicial, en los casos y con las formalidades que establezca la ley.
          p.mb-0 Para efectos tributarios o judiciales y para los casos de inspección, vigilancia e intervención del Estado podrá exigirse la presentación de libros de contabilidad y demás documentos privados, en los términos que señale la ley. Constitución Política de Colombia [Const]. Art. 15. 7 de julio de 1991 (Colombia).

    .tarjeta.color-primario.p-4.mb-5(data-aos="fade-down-left")
      .row.justify-content-around.align-items-center
        .col-md-2.col-lg-2.mb-4.mb-md-0
          img(src="@/assets/curso/temas/tema1/tema1-5.png")
        .col-md-10.col-lg-10
          p.mb-0 Como puede entenderse no solo se busca garantizar el derecho a la intimidad de las personas al dar especial relevancia a la correspondencia y cualquier otro medio de comunicación privada, sino también el acceso a su información disponible en los bancos de datos. La reglamentación de este artículo se encuentra contenida en la ley estatutaria 1266 de 2008, encargada de regular el tratamiento de la información contenida en las bases de datos. 

    p.mb-5(data-aos="fade-down") La ley en mención presenta en su artículo 6º, una serie de derechos con los que cuentan los titulares de información y que aplican frente a los bancos de datos, las fuentes de información y los usuarios.  Así mismo, en su artículo 7º lista los deberes de los operadores, las fuentes y los usuarios de la información.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-12.col-md-10
        .cajon.color-acento-contenido.p-3
          p.mb-0 La ley 1581 de 2012 y su decreto reglamentario 1377 de 2013, enuncian otra serie de disposiciones asociadas a la autorización del uso de los datos personales y el manejo que se les debe dar por parte de los operadores de la información. Así mismo, se facultó a la Superintendencia de Industria y Comercio, para ejercer la vigilancia y garantizar el debido tratamiento de los datos personales.

    p.mb-5(data-aos="fade-down") Se recomienda profundizar en este tema consultando las siguientes leyes y decreto que se encuentran en el material complementario:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-12.col-md-4.mb-2
        .botones-info 
          h4.text-center.mb-0 Ley 1266 de 2008
      .col-12.col-md-4.mb-2
        .botones-info 
          h4.text-center.mb-0 Ley 1581 de 2012
      .col-12.col-md-4.mb-2
        .botones-info 
          h4.text-center.mb-0 Decreto 1377 de 2013


    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.4 Fuentes

    p.mb-5(data-aos="fade-down") Una fuente es el origen de la información, es decir, de donde provienen los datos. Este tipo de recursos pueden clasificarse según su procedencia:

    .row.justify-content-center.align-items-center.mb-4
      .col-md-6.col-lg-5.mb-5.mb-lg-0(data-aos="fade-right")
        .cabecera-tarjeta.text-center
          h4.mb-0 Fuentes primarias
        .tarjeta-c.color-secundario
          .p-3.text-black
            p Se componen por los documentos originales, su contenido permanece intacto porque el autor efectuó el trabajo intelectual pionero. Suelen ser más confiables, puesto que vienen directamente de la persona que genera la información, los datos pueden provenir de encuestas, entrevistas, libros, fotografías, videos, entre otros.
      .col-md-6.col-lg-5.mb-5.mb-lg-0(data-aos="fade-left")
        .cabecera-tarjeta.text-center
          h4.mb-0 Fuentes secundarias
        .tarjeta-c.color-secundario
          .p-3.text-black
            p.mb-0 Son documentos que surgen de las fuentes primarias, es decir, consisten en la interpretación o transformación de éstas. Ejemplos de este tipo de fuentes pueden ser resúmenes, reseñas, ensayos, gráficos o tabulaciones. Por norma general no son idóneas para efectuar investigaciones puesto que en el proceso de transformación puede omitirse información relevante. 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-10.col-lg-8(data-aos="fade-right")
        .titulo-sexto.color-primario
          p.titulo.pb-0.mb-0 #[b Figura 3.] #[i Fuentes de información.] 
        figure
          img(src='@/assets/curso/temas/tema2/tema2-21.png', alt='En la figura 3.  Se muestra el diagrama que destaca las fuentes de información primaria y secundaria utilizadas en la recopilación de datos.')  



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: '',
        texto:
          'La información tiene un papel fundamental en el enriquecimiento del conocimiento y la reducción de la incertidumbre, especialmente en el ámbito empresarial. En este contexto, la información orienta la toma de decisiones en todas las áreas al proporcionar criterio a quienes tienen responsabilidades específicas.',
        imagen: require('@/assets/curso/temas/tema2/tema2-1.png'),
      },
      {
        titulo: '',
        texto:
          'La calidad y la oportunidad de la información son cruciales para obtener resultados efectivos a través de su análisis. Esto se traduce en la capacidad de aplicar estrategias que minimicen riesgos y reduzcan los impactos negativos en las actividades económicas.',
        imagen: require('@/assets/curso/temas/tema2/tema2-2.png'),
      },
      {
        titulo: '',
        texto:
          'Sin embargo, la interpretación de la información requiere un criterio sólido, ya que siempre existe la posibilidad de que los datos sean inexactos o sesgados. Decisiones basadas en información incorrecta pueden llevar a cabo acciones equivocadas que no cumplen las expectativas.',
        imagen: require('@/assets/curso/temas/tema2/tema2-3.png'),
      },
      {
        titulo: '',
        texto:
          'En la era de múltiples fuentes de información, es esencial verificar cada fuente para evitar basarse en falacias sin fundamentos sólidos. La información es una herramienta valiosa, pero su utilidad depende de cómo se obtiene, interpreta y utiliza de manera efectiva.',
        imagen: require('@/assets/curso/temas/tema2/tema2-4.png'),
      },
    ],
    datosLineaTiempoB: [
      {
        titulo: 'Crecimiento exponencial',
        texto:
          'Con el paso del tiempo el crecimiento de este lenguaje se hace a ritmos más acelerados. El surgimiento de disciplinas asociadas a las nuevas tecnologías son los principales impulsores de este crecimiento.',
        icono: require('@/assets/curso/temas/tema2/tema2-16.svg'),
      },
      {
        titulo: 'Objetivo específico',
        texto:
          'Su uso se concentra en interactuar con otros expertos de una materia o disciplina específica. Se encuentra mucho más limitado que el lenguaje común, puesto que está enfocado a un público y tema particular.',
        icono: require('@/assets/curso/temas/tema2/tema2-17.svg'),
      },
      {
        titulo: 'Coherencia, cohesión y adecuación',
        texto:
          'Es coherente puesto que se enfoca a un tema en específico, su cohesión proviene del hecho de querer generar afirmaciones lógicas que surgen de la unión de diversas ideas que convergen en afirmaciones concretas; y finalmente, la adecuación es el proceso por el cual se dirige a un público determinado.',
        icono: require('@/assets/curso/temas/tema2/tema2-18.svg'),
      },
      {
        titulo: 'Carácter unívoco',
        texto:
          'Indica que es muy poco probable que se presenten interpretaciones equivocadas al leerlo, puesto que sus palabras cuentan con un solo significado o sentido. No es para nada común que se encuentren términos equivalentes, puesto que cada palabra siempre significa lo mismo dentro de ese contexto.',
        icono: require('@/assets/curso/temas/tema2/tema2-19.svg'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
