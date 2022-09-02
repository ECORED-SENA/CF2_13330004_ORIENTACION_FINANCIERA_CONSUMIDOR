<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade")
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Productos financieros
    .row
      .col-lg-7
        p Los productos financieros son, en pocas palabras, contratos que se compran y venden en un mercado, esta es una definición muy general debido a que los productos financieros, también llamados vehículos financieros, son diversos y vienen en varias formas diferentes.
        p El concepto central detrás de un producto financiero es que le permite convertir su moneda fiduciaria en algo que se puede comprar y vender con otros en un mercado, cuando se trata de productos financieros, hay varias formas posibles de clasificarlos según las características técnicas que presenta cada producto y que sean relevantes para sus intereses actuales.
      .col-lg-5(data-aos="fade-left")
        img(src='@/assets/curso/tema5/img1.png', alt='Texto que describa la imagen')  
    p.mt-4 Existen varios tipos de productos financieros comprados y vendidos en los mercados, los cuales son:
    .tarjeta.tarjeta--azul.p-4.mb-5.color1
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-11.mt-5
            .row
              .col-md-6.mb-4.mb-md-0
                h4 Los valores
                p.mb-0 Son un tipo de instrumento que se utiliza para financiar directamente las  empresas, bancos, entidades públicas o gobiernos. Esencialmente, los valores representan un derecho a algo, como un activo o un contrato.  

                p Las acciones son probablemente el tipo de valor más común y representan una parte de la propiedad de una empresa. Cuando compra una acción, está comprando una parte de la propiedad de una empresa.
              .col-md-6
                figure
                  img(src='@/assets/curso/tema5/img2.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-lg-11.mt-5
            .row
              .col-md-6.mb-4.mb-md-0
                h4 Los bonos 
                p Son básicamente préstamos que un individuo otorga a alguna empresa, entidad pública o gobierno. Al igual que las acciones, las empresas venden bonos para financiar operaciones.
              .col-md-6
                figure
                  img(src='@/assets/curso/tema5/img3.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-lg-11.mt-5
            .row
              .col-md-6.mb-4.mb-md-0
                h4 Los fondos de inversión 
                p Son un tipo especial de vehículo financiero que se compone de varias personas que juntan su dinero para comprar valores, a continuación.
              .col-md-6
                figure
                  img(src='@/assets/curso/tema5/img4.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-lg-11.mt-5
            .row
              .col-md-6.mb-4.mb-md-0
                h4 Los fondos de inversión / Derivados
                p Son un tipo de valor que se deriva de un individuo o grupo que representan un contrato entre el comprador y el vendedor, y el precio de los derivados cambia según los movimientos de precios del activo subyacente.
              .col-md-6
                figure
                  img(src='@/assets/curso/tema5/img5.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-lg-11.mt-5
            .row
              .col-md-6.mb-4.mb-md-0
                h4 Los fondos de inversión / Materias primas
                p Son un tipo de producto financiero que representa la propiedad o una parte de algún bien físico o materia prima, en general, el comercio de estas implica elementos como metales preciosos (oro, plata, platino) o recursos naturales (carbón, petróleo, gas natural, etc.), pero también puede incluir las denominadas materias primas “suaves”, que incluyen productos agrícolas o ganaderos.
              .col-md-6
                figure
                  img(src='@/assets/curso/tema5/img6.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-lg-11.mt-5
            .row
              .col-md-6.mb-4.mb-md-0
                h4 Los fondos de inversión / Monedas
                p Las divisas generalmente no se consideran una clase de activo o producto financiero distinto, pero las incluimos aquí, simplemente porque se pueden negociar en un mercado en bolsas de divisas o criptobolsas y permiten a las personas convertirlas un tipo de moneda en otra.
              .col-md-6
                figure
                  img(src='@/assets/curso/tema5/img7.png', alt='Texto que describa la imagen')
    separador
    #t_5_1.titulo-segundo.color-acento-contenido
      h2 5.1  Características         
    p Hay ciertos productos financieros que son muy complejos por naturaleza y, por este motivo, su gestión entraña un mayor riesgo, se trata de alternativas indicadas para inversores más experimentados, entre las que se encuentran las siguientes:
    .row.mb-5
      .col-lg-6.mb-3
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/tema5/1.png' alt='AvatarTop' style='width:600px')
          .tarjetas-up_card.bg--2-claro.p-4
            .title.d-flex.align-items-center.mb-4
              span.c--4
                i.fas.fa-caret-up.fa-2x.color-primario.me-3
                i.fas.fa-caret-down.fa-2x.color-primario.me-3
              h4.mb-0 <i>Swaps</i> de incumplimiento crediticio 
            p.mt-4 Son contratos altamente apalancados que se negocian de forma privada entre dos partes, asegurando contra pérdidas en caso de incumplimiento.
      .col-lg-6.mb-3
        .tarjetas-up
          img(src='@/assets/curso/tema5/2.png' alt='AvatarTop' style='width:600px')
          .tarjetas-up_card.bg--2-claro.p-4
            .title.d-flex.align-items-center.mb-4
              span.c--4
                i.fas.fa-caret-up.fa-2x.color-primario.me-3
                i.fas.fa-caret-down.fa-2x.color-primario.me-3
              h4.mb-0 Obligaciones de deuda con garantía  
            p.mt-4 Son valores que se crean mediante la garantía de varias obligaciones de deuda similares, como bonos y préstamos, este tipo de obligaciones se pueden comprar y vender, teniendo en cuenta que en la operación, el comprador gana el derecho a una parte de los ingresos de capital e intereses del fondo común de la deuda.

    .row.mt-5.justify-content-center
      .col-lg-10
        .cajon.color-acento-contenido.p-4.mb-4
          p Uno de los factores más importantes a considerar al elegir productos financieros es el apetito por el riesgo, las inversiones con mayor riesgo, generalmente, se asocian con rendimientos más altos, y las que tiene menos riesgo son inversiones más seguras y con rendimientos más moderados.
    p.mt-4 A la hora de escoger productos financieros las acciones pueden ser una buena alternativa, en términos de rentabilidad, puesto que suelen superar a todas las demás inversiones a largo plazo, sin embargo, a corto plazo pueden resultar extremadamente arriesgadas debido a su naturaleza aleatoria y volátil.          
    separador
    #t_5_2.titulo-segundo.color-acento-contenido
      h2 5.2  Informes financieros y sus composiciones  
    p Los informes financieros precisos son una parte esencial de la gestión, organización y comprensión de las finanzas de las empresas, se integran con herramientas de contabilidad existentes para ayudar a que los informes financieros sean una parte perfecta de la gestión diaria.
    p Un estado financiero es un registro escrito que revela los detalles financieros y las actividades comerciales de una empresa, estas declaraciones son auditadas para verificar su exactitud por parte del gobierno, firmas contables o contadores independientes.
    .row.mt-5
      .col-lg-5.mt-5
        p.mt-5 Existen cuatro tipos de estados financieros que se encuentran dentro de un informe financiero e incluyen estados de resultados, balances, un estado de ganancias retenidas y estados de flujo de efectivo, los cuales se describen a continuación:
      .col-lg-7
        SlyderF.mb-5(columnas="col-lg-6 col-xl-6")
          .tarjeta.color-primario.p-4
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/tema5/ico1.svg' alt='AvatarTop')
            h5.text-center.text-white Estado de resultados

            p.text-center.mt-4.text-white También conocido como estado de pérdidas y ganancias, resume los ingresos, gastos y ganancias de una empresa,  esencialmente muestra cuánto ganó o perdió el negocio durante un período de tiempo y en última instancia, determina el ingreso neto o “resultado final” de una empresa.
          .tarjeta.color-primario.p-4
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/tema5/ico2.svg' alt='AvatarTop')
            h5.text-center.text-white Balance General


            p.text-center.mb-5.mt-3.text-white Ofrece una visión general de los activos, pasivos y capital contable de una empresa en un solo momento.
            .row.mb-5
            .row.mb-5
          .tarjeta.color-primario.p-4
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/tema5/ico3.svg' alt='AvatarTop')
            h5.text-center.text-white Estado de ganancias retenidas


            p.text-center.mt-4.mb-5.text-white Este revela los cambios en el patrimonio de una empresa durante un período contable estándar.
            .row.mb-5
            .row.mb-5
          .tarjeta.color-primario.p-4
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/tema5/ico4.svg' alt='AvatarTop')
            h5.text-center.text-white Estado de flujo de efectivo (CFS)
            p.text-center.mt-4.text-white Muestra la cantidad de efectivo que entra y sale de un negocio, entregando a las partes interesadas una idea de cómo opera una empresa y administra el efectivo para pagar la deuda y financiar los gastos actuales y las inversiones futuras.
    .row.mt-5
      .col-lg-6(data-aos="fade-right")
        img(src='@/assets/curso/tema5/img8.png' alt='AvatarTop')
      .col-lg-6
        p.mb-0 Otros documentos financieros hacen referencia a cualquier comunicación, documento o información financiera que se comparta con el público y que pueda incluirse en el informe financiero de una empresa.
        p Los informes financieros pueden incluir lo siguiente:
        .col-sm.mb-5.mb-sm-0
          ul.lista-ul.mb-0 
            li 
              i.fas.fa-angle-right.color3
              | Estados financieros y notas al pie relacionadas.
          ul.lista-ul.mb-0 
            li
              i.fas.fa-angle-right.color3
              | Cualquier información financiera que aparezca en el sitio web de una empresa.
          ul.lista-ul.mb-0 
            li
              i.fas.fa-angle-right.color3
              | Registros relacionados con acciones ordinarias y valores adicionales.
          ul.lista-ul.mb-0 
            li
              i.fas.fa-angle-right.color3
              | Informes trimestrales y anuales a los accionistas.


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

<style lang="sass">
.tarjetas-up:hover .tarjetas-up_card
  background-color: #819FB8
.tarjetas-up_card
  background-color: #BECEDB
</style>
