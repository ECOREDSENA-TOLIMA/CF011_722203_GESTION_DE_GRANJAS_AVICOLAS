<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p El componente formativo sobre Registros y recolección de datos abarca una serie de temas cruciales para obtener, clasificar y manejar información de manera efectiva. Comienza con una comprensión de los datos, donde se explora la clasificación y estructura de los mismos. La conversión de datos en Información se destaca en el ciclo de vida, el uso de lenguaje técnico, la confidencialidad y las fuentes de datos. Para recopilar datos, se presentan diferentes métodos de recolección, incluyendo criterios de selección, observación, entrevistas, encuestas y análisis de contenido. La sección final explora el rol de la ofimática en este proceso, con usos y herramientas ofimáticas relevantes, así como <i>software</i> específicos de recolección de datos y consideración sobre licencias. 
    p.mb-5 A continuación, se muestra un mapa conceptual con los elementos más importantes desarrollados en este componente.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis registros y recolección de datos se muestran por medio de un diagrama los temas que se trataran en el componente como lo son: datos , información, métodos de recolección y ofimática.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
