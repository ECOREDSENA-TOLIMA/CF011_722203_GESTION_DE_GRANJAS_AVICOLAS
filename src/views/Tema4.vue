<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Ofimática 


    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/tema4-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El crecimiento de las empresas y la implementación de procesos productivos cada vez más complejos, han llevado a la búsqueda de herramientas tecnológicas que permitan seguir llevando control de las operaciones, documentación y registro de la información para garantizar una apropiada gestión de todas las áreas de la compañía. 
          br
          br
          | La ofimática surge como el paso evolutivo necesario para mantener bajo control las innumerables tareas que son ejecutadas al interior de una organización. El término es un acrónimo de las palabras oficina e informática, por lo que es fácil deducir, que surge como una herramienta tecnológica de apoyo a las labores propias de una oficina.  

    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-down")
      .col-md-11.col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 La  ofimática comprende todas aquellas herramientas, métodos y sistemas que se pueden aplicar en oficina y que facilitan la ejecución de tareas a través de su automatización, el procesamiento computarizado de datos, o la simplificación de procesos. Hoy en día, sus ventajas no se limitan al registro y procesamiento de datos, sino también a la comunicación simultánea, la planeación asistida y la programación de tareas y designación de responsables. 


    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Usos 

    .cajon-b.color-acento-botones.p-3.mb-4(data-aos="fade-down")
      p.mb-4 La ofimática comprende cualquier herramienta que permita facilitar el trabajo propio de una oficina, en este aspecto cualquier sistema que ofrezca apoyo a estas tareas podría catalogarse como tal, con miras a aterrizar el concepto, se presentan las siguientes funciones para las que existen aplicaciones que apoyan su ejecución:

    ImagenInfografica.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema4/tema4-info.svg', alt='')
      .tarjeta.color-primario.basico.p-3(x="36%" y="87%" numero="1")
        .h5.mb-2 Elaboración y procesamiento de documentos
        p Diseñar documentos desde cero, cumpliendo con los estándares establecidos por la organización, dota de uniformidad la documentación creada y le otorga una identidad característica. Para esto existen herramientas como los procesadores de texto y las hojas de cálculo, que abarcan dos de las tareas administrativas más recurrentes en la ejecución administrativa de la empresa.
      .tarjeta.color-primario.basico.p-3(x="44%" y="27%" numero="2")
        .h5.mb-2 Registro documental
        p Existen herramientas ofimáticas que permiten llevar un control de los documentos elaborados y sus cambios, así como un registro de todos los documentos creados previamente. Esta labor de archivo garantiza el respaldo de la información a través de distintos mecanismos, lo que dota de seguridad la conservación de estos.
      .tarjeta.color-primario.basico.p-3(x="58%" y="78%" numero="3")
        .h5.mb-2 Consulta automatizada
        p Una correcta parametrización a la hora de conservar la documentación facilitará labores de búsqueda posteriores. Algunas herramientas tecnológicas ofrecen la posibilidad de realizar consultas a partir de criterios de búsqueda específicos, ya sea por tipo de documento, palabra clave, dimensiones, entre otros.
      .tarjeta.color-primario.basico.p-3(x="20%" y="70%" numero="4")
        .h5.mb-2 Comunicación instantánea
        p La cooperación entre áreas e incluso el trabajo en equipo se han visto muy favorecidos con el avance de las telecomunicaciones. En la actualidad es posible compartir archivos de manera inmediata, o modificar documentos de manera simultánea por varias personas; la ofimática ha agilizado las tareas de comunicación y envío de información a tal punto que los tiempos de espera son casi inexistentes.
      .tarjeta.color-primario.basico.p-3(x="80%" y="70%" numero="5")
        .h5.mb-2 Teletrabajo
        p Ha tomado mucha relevancia esta modalidad de trabajo a distancia, que ofrece ventajas relevantes como la disminución de costos de transporte o de mantenimiento de instalaciones físicas, así como diversas erogaciones asociadas a la creación de un ambiente laboral adecuado. Este sistema es cada vez más popular en las empresas, y podría considerarse una evolución lógica al trabajo presencial tradicional debido a la implementación de aplicaciones centradas en la creación de ambientes de trabajo colaborativo, así como videollamadas.

    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Herramientas ofimáticas

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-down")
      .col-md-3.col-lg-2.col-10
        img(src='@/assets/curso/temas/tema4/tema4-2.svg', alt='')
      .col-md-9.col-12.col-lg-10
        p Son aquellos programas informáticos que buscan facilitar las tareas de oficina a través de aplicativos. Las actividades que pueden desarrollar son tan variadas como las exigencias de la labor organizacional. Las siguientes son algunas de las herramientas más demandadas a la hora de hablar de ofimática:

    TabsB.color-primario.mb-5(data-aos="fade-down")
      .py-4.py-md-5(titulo="Procesadores de texto")
        .row
          .col-12.mb-4.mb-md-0
            p.mb-0 Permiten redactar contenido en documentos como cartas, comunicados o memorandos. Su punto fuerte es la generación de texto y las modificaciones de presentación, redacción u ortografía. Han evolucionado para ofrecer cada vez más herramientas, como la evaluación de la sintaxis, redacción, proposición de sinónimos, personalización de los textos, inserción de imágenes, entre otros.
      .py-4.py-md-5(titulo="Hojas de cálculo")
        .row
          .col-12.mb-4.mb-md-0
            p.mb-0 Facilitan la tabulación de datos y las operaciones matemáticas y estadísticas a través de una hoja compuesta por una cantidad significativa de casillas. Estos sistemas se enfocan en el apoyo para análisis cuantitativos, ya que automatizan las operaciones y permiten efectuar cálculos avanzados en cuestión de segundos. Actualmente permiten la inserción de gráficos o diagramas, estimaciones o proyecciones.
      .py-4.py-md-5(titulo="Presentación multimedia")
        .row
          .col-12.mb-4.mb-md-0
            p.mb-0 Son aquellos reproductores de contenido multimedia que permiten visualizar o escuchar grabaciones, videos o fotografías. Aportan herramientas para aplicar nuevas metodologías asociadas a la creación de evidencias, puesto que facilitan el registro de información no textual, enriqueciendo los contenidos a disposición de la compañía.
      .py-4.py-md-5(titulo="Bases de datos")
        .row
          .col-12.mb-4.mb-md-0
            p.mb-0 Aplicativos destinados a la gestión de información a través de parámetros determinados. Son conocidos por las facilidades de búsqueda que brindan a los usuarios, puesto que su función es la de conservar grandes cantidades de información relevante en ambientes de fácil y rápido acceso.
      .py-4.py-md-5(titulo="Programas de mensajería")
        .row
          .col-12.mb-4.mb-md-0
            p.mb-0 En esta categoría se encuentran, todas las aplicaciones que facilitan la comunicación simultánea o diferida, así como el envío y recepción de documentos o paquetes de información a través de la red. En la actualidad es virtualmente posible enviar cualquier contenido que pueda ser reproducido a través de una computadora o celular.
      .py-4.py-md-5(titulo="Utilidades")
        .row
          .col-12.mb-4.mb-md-0
            p.mb-0 Son programas enfocados a desarrollar actividades simples y concretas como calculadoras, agendas, o gestores de notas de audio o texto. Buscan ejecutar tareas sencillas que podrían ser abordadas con otros programas más complejos, pero consumen menos recursos.

    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.3 #[em Software] de recolección de datos 

    p.mb-4(data-aos="fade-down") Son sistemas computarizados que facilitan la recolección y almacenamiento de información según parámetros establecidos por el usuario. Surgen a raíz de las problemáticas generadas por la recolección de información en medios físicos donde es común cometer errores de transcripción o inexactitudes.

    .tarjeta.color-secundario.mb-4(data-aos="fade-down-left")
      .row.justify-content-center.align-items-center
        .col-md-4.ps-4.py-3
          img(src="@/assets/curso/temas/tema4/tema4-3.png")
        .col-md-8.p-3.px-5
          p.mb-0 Las herramientas ofimáticas enfocadas a este tipo de actividades existen desde el siglo XX, pero ha sido en las últimas dos décadas que han tomado una mayor utilidad y relevancia. La popularización del internet, hace que sea cada vez más accesible para la población, lo que amplía las posibilidades de recolección, al tener un público más variado y significativo al que dirigirse.  

    .tarjeta.color-secundario.mb-5(data-aos="fade-down-left")
      .row.justify-content-center.align-items-center
        .col-md-4.ps-4.py-3
          img(src="@/assets/curso/temas/tema4/tema4-4.png")
        .col-md-8.p-3.px-5
          p.mb-0 La masificación de los dispositivos móviles fue el segundo gran impulsor de estas tecnologías, los teléfonos inteligentes permiten el uso de este tipo de aplicaciones, por lo que la recolección de datos en campo puede hacerse ahora de una forma más eficiente y segura. 

    .cajon.color-acento-contenido.p-4.mb-5(data-aos="fade-down")
      p.mb-0 Apoyarse de herramientas tecnológicas para la recolección de datos es una actividad tan cotidiana en la actualidad, que puede desestimarse la utilidad que se esconde detrás de ello, algunos de los sistemas más utilizados pueden presentarse así: 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-8.col-md-9.col-12
        p #[b Grabadoras de audio y video:] prácticamente cualquier celular inteligente vendido en la última década, cuenta con por lo menos una cámara fotográfica. Gracias a esto es posible recolectar evidencia en imágenes o videos en campo, para su posterior análisis o documentación. Adicionalmente, es posible grabar notas de voz, haciendo uso de otras aplicaciones compatibles con estos dispositivos; lo que puede ser un apoyo adicional, para metodologías de recolección de datos, como las entrevistas o la observación. 
      .col-lg-3.col-md-3.col-12
          img(src="@/assets/curso/temas/tema4/tema4-5.png")

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-3.col-md-3.col-12
          img(src="@/assets/curso/temas/tema4/tema4-6.png")
      .col-lg-8.col-md-9.col-12
        p #[b Encuestas electrónicas:] la elaboración de encuestas de forma tradicional se encuentra limitada por varios factores; el costo del papel, su impresión, incluso el transporte de la documentación, hasta la población objetivo y su posterior retorno, son algunos de los costos que se pueden asociar a este sistema. Adicionalmente, tras la toma de datos viene la transcripción y tabulación de estos, lo que representa una inversión de tiempo y una oportunidad para cometer errores en la consignación de los datos. 
        p Las encuestas electrónicas minimizan estas situaciones al permitir elaborarse y diligenciarse a través de celulares o computadoras, reduciendo el costo de impresión, manejo y transporte del papel; además, al poderse diligenciar en la nube, cualquier persona puede acceder a ellas, en un periodo de tiempo muy corto. Si se hace uso de las herramientas disponibles en el mercado, enfocadas a este tipo de actividades, la tabulación de la información será automática, algunas de ellas incluso permiten la elaboración de gráficos, que faciliten la comprensión de los datos recolectados. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-8.col-md-9.col-12
        p #[b Sistemas modulares integrados:] funcionan como programas complejos, que integran la información de diversas áreas de la empresa para consolidar información y generar reportes cruzados. Funcionan haciendo uso de un sistema modular, en el que cada área organizacional tiene una interfaz propia, con funciones específicas. La magnitud y complejidad de estos aplicativos puede ajustarse a las necesidades de cada empresa, por ello, su oferta se centra en los módulos y no en la solución integral, ya que cada organización podrá adquirir aquellos que le sean útiles. 
        p Aunque, hace unos años este tipo de programas se encontraba limitado a un número reducido de empresas, debido a su complejidad de usos y sus altos costos, en la actualidad es cada vez más fácil hacerse con estas herramientas. Sus bondades van desde la integración de todos los procesos administrativos, productivos y comerciales, hasta la elaboración de informes hechos a la medida y la conservación de los datos con sistemas de seguridad avanzados.  
      .col-lg-3.col-md-3.col-12
          img(src="@/assets/curso/temas/tema4/tema4-7.png")


    Separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.4 Licencias

    p.mb-4(data-aos="fade-down") Para hacer uso de los programas informáticos, se debe contar con las autorizaciones por parte del equipo desarrollador y titular de la propiedad intelectual. Existen diversas modalidades que van desde el #[em software] libre hasta las licencias de pago por periodo de tiempo. A continuación, se presentan algunas de ellas: 

    TabsB.color-primario.mb-5(data-aos="fade-down")
      .py-4.py-md-5(titulo="<em>Software</em> libre")
        .row
          .col-12.mb-4.mb-md-0
            p.mb-0 El programa puede usarse para cualquier propósito, ya que se tiene acceso a su funcionamiento y se le pueden hacer las modificaciones que el usuario desee para adaptarlo a sus necesidades. De esta misma forma se puede distribuir al público sin ninguna limitación. Este tipo de programas terminan siendo desarrollos comunitarios, donde todos los autores pueden aportar en cierto campo, para hacerlo más completo. Uno de los más populares, para labores de ofimática y gestión de datos es “Apache #[em OpenOffice]”, el cual funciona como una #[em suite], que incluye procesador de texto, hoja de cálculo, gestor de bases de datos y gráficos dinámicos.
      .py-4.py-md-5(titulo="<em>Software</em> semilibre")
        .row
          .col-12.mb-4.mb-md-0
            p.mb-0 Al igual que el <em>Software</em> libre, tiene la posibilidad de ser modificado, usado y distribuido, sin embargo, a diferencia del libre cuenta con algunas limitaciones asociadas, como su uso comercial o su vinculación con sistemas operativos libres.
      .py-4.py-md-5(titulo="<em>Software freeware</em>")
        .row
          .col-12.mb-4.mb-md-0
            p.mb-0 Este tipo de programas son de uso gratuito, pero los usuarios no tienen la posibilidad de modificarlo. Ejemplos de este tipo de programa son los incluidos en la #[em suite] de #[em Google], como #[em Drive], #[em Gmail], hojas de cálculo, calendario, entre otros. Este tipo de licencias, suelen incluir limitaciones asociadas al almacenamiento o funciones avanzadas, que pueden ser desbloqueadas al adquirir una versión paga.
      .py-4.py-md-5(titulo="<em>Software</em> propietario")
        .row
          .col-12.mb-4.mb-md-0
            p.mb-0 Estos programas tienen restricciones asociadas a su uso, distribución y modificaciones. De hecho, su principal característica es que no se puede acceder a su código fuente, debido a que se encuentra protegido por derechos de autor. Estos #[em software], pueden otorgar permisos a usuarios específicos, para ser utilizados o modificados, pero salvo expresa autorización, ningún otro usuario podrá acceder a ellos.
      .py-4.py-md-5(titulo="<em>Software</em> comercial")
        .row
          .col-12.mb-4.mb-md-0
            p.mb-0 Aplica a programas con restricciones, como las descritas en el #[em software] propietario, pero que ofrecen acceso a cambio de un pago. El ejemplo más claro de todos es la #[em suite] de #[em office], desarrollada por #[em Microsoft]. El acceso a las versiones completas de sus programas, requiere de una suscripción anual llamada #[em Office 365], o la compra de la licencia vitalicia.
      .py-4.py-md-5(titulo="<em>Demo</em>")
        .row
          .col-12.mb-4.mb-md-0
            p.mb-0 Se refiere a una versión de prueba o demostración de un programa o aplicación que permite a los usuarios evaluar y probar sus características y funcionalidades antes de adquirir la versión completa o de pago. La demostración generalmente tiene ciertas limitaciones, como una duración limitada o funcionalidades restringidas, con el propósito de motivar a los usuarios a comprar la versión completa para acceder a todas las características.

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
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
