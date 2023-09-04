<template lang="pug">
.curso-main-container.pb-3.tema1
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Datos

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Son el conjunto de información referente a un hecho, persona u objeto. Usualmente son útiles tras un proceso de transformación para ser dirigidos a un público objetivo en concreto y para ello, existen diferentes mecánicas que facilitan su organización y análisis. Adicionalmente, la información está a su disposición dentro de un contexto específico, en este sentido, los datos por sí solos no aportan nada si no atraviesan por el proceso que los convierta en información y para esto es importante tener en cuenta su clasificación y estructura.

      
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Clasificación

    .row.mb-4(data-aos="fade-down")
      .col-12
        .cajon.color-acento-contenido.p-4
          p.mb-0 Los datos pueden clasificarse en diferentes criterios. Según la Comisión Económica para América Latina y el Caribe - CEPAL (2020), las siguientes son algunas de las formas de clasificación aceptadas, ver figura 1:

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-lg-10(data-aos="fade-right")
        .titulo-sexto.color-primario
          p.titulo.pb-0.mb-0 #[b Figura 1.] #[i Clasificación de datos] 
        figure
          img(src='@/assets/curso/temas/tema1/tema1-2.svg', alt='En la figura 1 se muestra por medio de un diagrama la clasificación de los datos, según su naturaleza, su procesamiento y su fuente.')  
          figcaption.mt-2 Nota. Adaptada de CEPAL (2020).
        
    .cajon-b.color-acento-botones.p-3.mb-4(data-aos="fade-down")
      p.mb-4 Según su naturaleza, se dividen en: 

    .row.justify-content-center.align-items-center.mb-4
      .col-md-6.col-lg-5.mb-5.mb-lg-0(data-aos="fade-right")
        div
          img(src='@/assets/curso/temas/tema1/tema1-3.png' alt='')
        .tarjeta-c.color-acento-contenido
          .p-3.text-black
            h4.text-center Cuantitativos
            p.text-center Son aquellos datos que se pueden contar o medir, y, por lo tanto, pueden expresarse con el uso de expresiones numéricas. Por ejemplo, calificaciones, edades o número de hijos. Este sistema facilita la tabulación de la información y su análisis estadístico; su naturaleza suele ser más estructurada, lo que implica que los datos son más rígidos (no están abiertos a interpretaciones), y por esto son más objetivos.
      .col-md-6.col-lg-5.mb-5.mb-lg-0(data-aos="fade-left")
        div
          img(src='@/assets/curso/temas/tema1/tema1-4.png' alt='')
        .tarjeta-c.color-acento-contenido
          .p-3.py-md-4.text-black
            h4.text-center Cualitativos
            p.text-center Son datos conceptuales y se centran en describir las características del objeto de estudio. No suelen estar estructurados como los cuantitativos, por lo que están abiertos a interpretaciones, y, por lo tanto, a un factor subjetivo. Ejemplos de este tipo de datos son el color de un material, alguna postura frente a una idea, y cualquier otra información que no requiera de números para ser recolectada.

    .tarjeta.color-primario.p-4.mb-5(data-aos="fade-down-left")
      .row.justify-content-around.align-items-center
        .col-md-2.col-lg-2.mb-4.mb-md-0
          img(src="@/assets/curso/temas/tema1/tema1-5.png")
        .col-md-10.col-lg-10
          p.mb-0 Este  sistema es el más común para clasificar los tipos de datos, dado que su distinción salta a la vista de forma muy sencilla. Cualquier tipo de investigación o recolección de información puede tener datos de ambas naturalezas, por lo que no son sistemas excluyentes, sino complementarios. La recopilación de la información para ofrecer interpretaciones suele ser mucho más sencilla bajo el modelo cuantitativo debido a lo estructurado de los datos; la información cualitativa puede ser más difícil de analizar o recopilar dado  a que no cuenta con un formato definido, y, por lo tanto, la variedad de la información será más amplia. 


    .cajon-b.color-acento-contenido.p-3.mb-4(data-aos="fade-down")
      p.mb-4 Según su nivel de procesamiento, se dividen en: 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down-right")
      .col-md-4
        img(src='@/assets/curso/temas/tema1/tema1-6.png' alt='')
      .col-md-8
        LineaTiempoD.color-acento-botones
          p.text-small(numero="1" titulo="Primarios") Son los datos recopilados de forma directa de la fuente, es decir, que no han sufrido ningún tipo de procesamiento o análisis. Por ejemplo, fotografías, grabaciones, testimonios o datos de experimentos.
          p.text-small(numero="2" titulo="Procesados") Son los datos primarios después de una ligera transformación, por ejemplo, que han sido traducidos, digitalizados o verificados. Es decir, se encuentran en una etapa en la que pueden ser dispuestos para el análisis de los investigadores o de los usuarios de la información.
          p.text-small(numero="3" titulo="Analizados") Comprenden los datos que ya han sido interpretados, como las conclusiones de un trabajo investigativo o estadístico, unas gráficas o modelos. En este caso, a los usuarios de la información se les entregan ya los resultados de la investigación, por lo que no suelen quedar abiertos a interpretaciones, sino que las ofrecen ya plasmadas en los documentos.

    .tarjeta.color-primario.p-4.mb-5(data-aos="fade-down-left")
      .row.justify-content-around.align-items-center
        .col-md-2.col-lg-2.mb-4.mb-md-0
          img(src="@/assets/curso/temas/tema1/tema1-5.png")
        .col-md-10.col-lg-10
          p.mb-0 Los documentos que suelen presentarse al público en general suelen contener por lo menos dos de las tres categorías anteriores de datos. Algunos estudios incluyen las grabaciones originales de las personas entrevistadas, o los formatos diligenciados de forma manuscrita por ellas. Por otra parte, si los datos fueron recolectados en otro idioma, posteriormente, vendrá la transcripción traducida o la tabulación de las respuestas. Finalmente, los análisis, gráficas o identificación de tendencias junto con las conclusiones alcanzadas y la evaluación de las teorías puestas a prueba cierran la labor investigativa que se busca transmitir al lector u observador del estudio.


    .cajon-b.color-acento-botones.p-3.mb-3(data-aos="fade-down")
      p.mb-4 Según su fuente, se dividen en: 

    TabsB.color-primario.mb-5(data-aos="fade-down-left")
      .py-4.py-md-5(titulo="Canónicos o de referencia")
        .row
          .col-12.mb-4.mb-md-0
            p Son los datos utilizados para comparar o validar, estos funcionan como estándares que enmarcan la información obtenida en el estudio. Por ejemplo, los estratos socio económicos, las estadísticas macroeconómicas, los estudios demográficos de fuentes oficiales, las tablas de precio, entre otras.
      .py-4.py-md-5(titulo="Experimentales")
        .row
          .col-12.mb-4.mb-md-0
            p Son generados a partir de las pruebas realizadas. Surgen de experimentos efectuados en situaciones controladas, a través de los cuales se busca corroborar una hipótesis. Por ejemplo, la forma en que reacciona una persona ante una situación de riesgo, o un animal a un estímulo. 
      .py-4.py-md-5(titulo="Modelos o simulaciones")
        .row
          .col-12.mb-4.mb-md-0
            p Se generan a través de algoritmos o modelos matemáticos ejecutados por computadoras. Ejemplo de ellos son los simuladores de conducción, o los de mercado que buscan determinar el impacto de estrategias comerciales. 
      .py-4.py-md-5(titulo="Derivados")
        .row
          .col-12.mb-4.mb-md-0
            p Son el resultado de tomar datos ya existentes y efectuarles modificaciones para generar nuevos resultados. Por ejemplo, de la preferencia de los animales carnívoros a comer carne, se puede deducir que probablemente gustarán alimentarse de alguna de sus versiones procesadas, como los embutidos.
      .py-4.py-md-5(titulo="Observaciones")
        .row
          .col-12.mb-4.mb-md-0
            p Obtenidos al evidenciar un evento en un momento y lugar en específico. Por ejemplo, el comportamiento de una persona al enterarse de que tiene una condición especial, o la reacción de un animal ante un estímulo concreto como el sonido de una campana.

    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Clasificación

    .tarjeta.tarjeta--azul.mb-5(data-aos="fade-down-left")
      .row 
        .col-md-8.p-3.px-5
          p.text-small La estructura de los datos es la forma en la que estos se disponen y presentan, de tal manera, que faciliten los análisis y la identificación de patrones, con esto se busca que el estudio de la información recolectada sea más eficiente.
          p.text-small.mb-0 Usualmente, la información cuantitativa puede estructurarse de forma más sencilla, por ejemplo, si se busca identificar la gestión comercial o de producción de una empresa, esto puede medirse en función de las unidades producidas o vendidas o los valores de venta o de costo de producción. Esta puede categorizarse como numérica o gráfica; la primera compuesta por cifras, mientras que la segunda, consta de diagramas o ilustraciones.
        .col-md-4
          img(src="@/assets/curso/temas/tema1/tema1-7.png")


    .row.justify-content-center.align-items-center.mb-4
      .col-md-4
        img(src="@/assets/curso/temas/tema1/tema1-8.png")
      .col-md-8
        p La información cualitativa, en cambio, recopila datos no medibles, como comportamientos o características que no pueden ser expresadas con el uso de números. En este sentido, no cuenta con formatos o estructuras estandarizadas, y será a juicio de cada autor, la forma en la que este se presente para que los intérpretes accedan a la mayor cantidad de datos posibles.
        .cajon.color-primario.p-4
          p.mb-0 Como se mencionó previamente, es posible que la información recopilada resulte de una mezcla de datos cualitativos y cuantitativos, de la pericia del experto dependerá la forma como esta se consolide. Al fin y al cabo, lo más importante es presentar toda la información relevante de la manera más práctica y eficiente. El siguiente ejemplo presenta una estructura de datos cualitativos y cuantitativos recopilados a través de la tabla 1:


    .row.justify-content-center.align-items-center.mb-4
      .col-12(data-aos="fade-right")
        .titulo-sexto.color-primario
          p.titulo.pb-0.mb-0 #[b Tabla 1.] #[i Ejemplo de tabla de datos] 
      .col-12(data-aos="fade-right")
        .tabla-b.color-acento-contenido.mb-5
          table.text-small
            thead
              tr.cabecera-a.text-center
                th(rowspan="2") Entrevistado
                th(colspan="2") Género
                th(colspan="3") Edad
                th(colspan="3") Inclinación política
                th Ingresos mensuales
              tr.cabecera-b.text-center
                th Masculino
                th Femenino
                th Mayor de 18 y menor de 30
                th Mayor de 30 y menor de 60
                th Mayor de 60
                th Izquierda
                th Centro
                th Derecha
                th 
            tbody
              tr.text-center
                th.cabecera-b Persona 1
                td X
                td 
                td X
                td 
                td 
                td 
                td 
                td X
                td 1.200.000
              tr.text-center
                th.cabecera-b Persona 2
                td 
                td X
                td 
                td X
                td 
                td 
                td X
                td 
                td 1.800.000
              tr.text-center
                th.cabecera-b Persona 3
                td X
                td 
                td 
                td 
                td X
                td 
                td 
                td X
                td 5.400.000
              tr.text-center
                th.cabecera-b Persona 4
                td X
                td 
                td X
                td 
                td 
                td X
                td 
                td 
                td 2.100.000
              tr.text-center
                th.cabecera-b Persona 5
                td 
                td X
                td 
                td 
                td X
                td 
                td X
                td 
                td 3.000.000
              tr.text-center
                th.cabecera-b Total
                td 3
                td 2
                td 2
                td 1
                td 2
                td 1
                td 2
                td 2
                td 13.500.000
    
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
