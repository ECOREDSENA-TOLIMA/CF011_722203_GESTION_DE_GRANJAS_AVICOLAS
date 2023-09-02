<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Métodos de recolección

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-md-8.col-12
        .cajon.color-acento-contenido.p-3
          p.mb-0 El primer paso para llevar a cabo un estudio o análisis respecto a cualquier tema, es identificar la necesidad de información que surge. Usualmente, las empresas identifican debilidades u oportunidades sobre las cuales esperan implementar estrategias que reduzcan las primeras o aprovechen las últimas, y una vez definida la temática sobre la que se quiere investigar, lo siguiente es determinar cuál de las técnicas de recolección va a ser utilizada.
      .col-md-4.col-12 
        img(src="@/assets/curso/temas/tema3/tema3-1.png")
        
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Criterios de selección

    p.mb-5(data-aos="fade-down") La selección de una metodología para recolectar la información y debe estar siempre en función de la problemática a tratar. Sumado a ello, la persona encargada de efectuar el proceso de investigación debe tener pleno conocimiento de cómo utilizarla, puesto que, en caso contrario se incrementa las posibilidades de cometer errores. En general, algunos de los elementos que se recomienda tener presentes a la hora de elegir el método de recolección de datos son los siguientes:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul" data-aos="fade-down-left")
      .row(titulo="Naturaleza del estudio")
        .col-md-8.mb-4.mb-md-0
          p Definir si la perspectiva de lo que se espera estudiar se compone de elementos cuantitativos o cualitativos. Existen instrumentos más apropiados que otros para cada naturaleza, por lo que es importante tener claridad sobre el qué se quiere saber o conocer.
        .col-md-4
          figure
            img(src='@/assets/curso/temas/tema3/tema3-2.png', alt='')
      .row(titulo="Objeto o hipótesis de investigación")
        .col-md-8.mb-4.mb-md-0
          p La definición apropiada de la problemática a abordar o la hipótesis que se espera validar durante la investigación, serán de vital importancia para perfilar el trabajo posterior. Toda la información recolectada tiene que estar debidamente justificada para facilitar o enriquecer el análisis del objeto de estudio.
        .col-md-4
          figure
            img(src='@/assets/curso/temas/tema3/tema3-3.png', alt='')
      .row(titulo="Recursos disponibles")
        .col-md-8.mb-4.mb-md-0
          p El capital y el tiempo con el que se cuenten pueden ser determinantes a la hora de elegir la metodología. Si bien es importante que siempre se busquen los resultados más precisos y fiables, en algunas ocasiones las limitaciones de recursos imposibilitan aplicar las herramientas más efectivas.
        .col-md-4
          figure
            img(src='@/assets/curso/temas/tema3/tema3-4.png', alt='')
      .row(titulo="Trabajo en equipo")
        .col-md-8.mb-4.mb-md-0
          p La distribución de tareas en tiempos determinados favorece la efectividad a la hora de hacer uso de las herramientas de investigación. Si bien los datos pueden recolectarse a través de variadas estrategias, la coordinación adecuada puede minimizar costos y aportar para el cumplimiento efectivo de los objetivos planteados.
        .col-md-4
          figure
            img(src='@/assets/curso/temas/tema3/tema3-5.png', alt='')

    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Observación


</template>

<script>
export default {
  name: 'Tema3',
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
