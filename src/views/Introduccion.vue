<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.mb-4(data-aos="fade-down")
      .col-12
        .cajon.color-primario.p-4
          p.mb-0 La información es uno de los activos intangibles más importantes de cualquier empresa. Esto incluye aspectos como el conocimiento necesario para operar de forma eficiente; las recetas o fórmulas para elaborar productos distintivos de la competencia o la información financiera que da cuenta del manejo de los recursos. Comprender de dónde proviene esta información, cómo trabajar con ella y qué herramientas utilizar para recolectarla y conservarla son pilares de la gestión de las empresas.

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/9WXYSdpXzRU" title="Registros y recolección de datos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Registros y recolección de datos
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
