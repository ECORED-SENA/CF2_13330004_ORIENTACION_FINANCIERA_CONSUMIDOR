<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade")
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Análisis financiero
    .row
      .col-lg-7
        p El análisis financiero es el proceso de examinar el desempeño de una empresa en el contexto de su industria y entorno económico para llegar a una decisión o recomendación, a menudo, las decisiones y recomendaciones abordadas por los analistas financieros se refieren a proporcionar capital a las empresas, específicamente, si invertir en títulos de deuda o de capital de la empresa y a qué precio. 
        p Un inversor en títulos de deuda se preocupa por la capacidad de la empresa para pagar intereses y reembolsar el principal prestado, un inversor en valores de renta variable es un propietario con una participación residual en la empresa y está preocupado por la capacidad de la empresa para pagar dividendos y la probabilidad de que aumente el precio de sus acciones.
      .col-lg-5(data-aos="fade-left")
        img(src='@/assets/curso/tema4/img1.png', alt='Texto que describa la imagen')
    .row.mt-4
      .col-lg-5(data-aos="fade-right")
        img(src='@/assets/curso/tema4/img2.png', alt='Texto que describa la imagen')
      .col-lg-7
        .row.azq1.p-4
          p En general, un enfoque central del análisis financiero es evaluar la capacidad de la empresa para obtener un rendimiento de su capital que sea al menos igual al costo de ese capital, para hacer crecer sus operaciones de manera rentable y generar suficiente efectivo para cumplir con las obligaciones y buscar oportunidades.
        p El análisis financiero fundamental comienza con la información que se encuentra en los informes financieros de una empresa, estos informes financieros incluyen estados financieros auditados, divulgaciones adicionales requeridas por las autoridades reguladoras y cualquier comentario adjunto (no auditado) de la gerencia. El análisis básico de los estados financieros proporciona una base que permite comprender mejor otra información recopilada de la investigación más allá de los informes financieros.
    p.mt-4 La información presentada en los informes financieros y otros, incluidos los estados financieros, las notas y los comentarios de la gerencia, ayudan a evaluar el desempeño y la posición financiera de una empresa. Se puede pedir a un analista que realice un análisis financiero por una variedad de razones, incluida la valoración de valores de renta variable, la evaluación del riesgo crediticio, la realización de la diligencia debida en una adquisición y la evaluación del rendimiento de una subsidiaria en relación con otros negocios. Las principales consideraciones tanto en el análisis de capital, como en el análisis crediticio son la evaluación de la posición financiera de una empresa, su capacidad para generar ganancias y flujo de efectivo, y su potencial para generar un crecimiento futuro en las ganancias y el flujo de efectivo.
    separador
    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1  Conceptos generales
    p El análisis de estados financieros implica obtener una comprensión de la situación financiera de una organización mediante la revisión de sus informes financieros, los resultados se pueden utilizar para tomar decisiones de inversión y préstamo. Esta revisión implica identificar los siguientes elementos para los estados financieros de una empresa durante una serie de períodos de informe:
    .row.justify-content-center
      .col-lg-10
        #carouselExampleIndicators.carousel.slide(data-bs-ride='carousel')
          .carousel-indicators
            button.active(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='3' aria-label='Slide 4')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='4' aria-label='Slide 5')

          .carousel-inner
            .carousel-item.active
              .row.justify-content-center
                .col-lg-8
                  .row.bgb
                    .col-lg-2.mb-5.mt-5
                      img.mt-4(src='@/assets/curso/tema4/ico1.svg', alt='Texto que describa la imagen')

                    .col-lg-10.mb-5.mt-5
                      h5 Tendencias
                      p Se crean líneas de tendencia para elementos clave en los estados financieros durante varios períodos de tiempo, para ver cómo se está desempeñando la empresa. Las líneas de tendencia típicas son para los ingresos, el margen bruto, las ganancias netas, el efectivo, las cuentas por cobrar y la deuda.
            
            .carousel-item
              .row.justify-content-center
                .col-lg-8
                  .row.bgb
                    .col-lg-2.mb-5.mt-5
                      img.mt-4(src='@/assets/curso/tema4/ico2.svg', alt='Texto que describa la imagen')

                    .col-lg-10.mb-5.mt-5
                      h5 Análisis de proporciones
                      p Hay disponible una serie de razones para discernir la relación entre el tamaño de varias cuentas en los estados financieros. Por ejemplo, se puede calcular el índice rápido de una empresa para estimar su capacidad para pagar sus pasivos inmediatos, o su índice de deuda a capital para ver si se ha endeudado demasiado. 
                      p Estos análisis son frecuentemente entre los ingresos y gastos enumerados en el estado de resultados y las cuentas de activos, pasivos y patrimonio enumeradas en el balance general.
            
            .carousel-item
              .row.justify-content-center
                .col-lg-8
                  .row.bgb
                    .col-lg-2.mb-5.mt-5
                      img.mt-4(src='@/assets/curso/tema4/ico3.svg', alt='Texto que describa la imagen')

                    .col-lg-10.mb-5.mt-5
                      h5 El análisis de Estados Financieros
                      p Es una herramienta excepcionalmente poderosa para una variedad de usuarios de estados financieros, cada uno con diferentes objetivos para conocer las circunstancias financieras de la entidad.
            .carousel-item
              .row.justify-content-center
                .col-lg-8
                  .row.bgb
                    .col-lg-2.mb-5.mt-5
                      img.mt-4(src='@/assets/curso/tema4/ico4.svg', alt='Texto que describa la imagen')

                    .col-lg-10.mb-5.mt-5
                      h5 Inversores
                      p Tanto los inversores actuales como los potenciales examinan los estados financieros para conocer la capacidad de una empresa para seguir emitiendo dividendos, generar flujo de caja o seguir creciendo a su tasa histórica (según sus filosofías de inversión).
            .carousel-item
              .row.justify-content-center
                .col-lg-8
                  .row.bgb
                    .col-lg-2.mb-5.mt-5
                      img.mt-4(src='@/assets/curso/tema4/ico5.svg', alt='Texto que describa la imagen')

                    .col-lg-10.mb-5.mt-5
                      h5 Administración
                      p El contralor de la empresa prepara un análisis continuo de los resultados financieros de la empresa, particularmente en relación con una serie de métricas operativas que no son vistas por entidades externas (como el costo por entrega, el costo por canal de distribución, la ganancia por producto, etc.)
                                                
          button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
            span.carousel-control-prev-icon(aria-hidden='true')
            span.visually-hidden Previous
          button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
            span.carousel-control-next-icon(aria-hidden='true')
            span.visually-hidden Next
    separador
    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2  Tipos de análisis  
    p Existen dos métodos clave para analizar los estados financieros, el primer método es el análisis horizontal y el segundo es el análisis vertical, los cuales se definen a continuación:
    .row.mt-5
      .col-lg-7
        .row
          .col-lg-6
            .row
              .col-lg-7.fon1
                p.mt-2.mb-0 <strong> El análisis horizontal  </strong>
              .col-lg-2.tt
                img(src='@/assets/curso/tema2/ico1.svg', alt='Texto que describa la imagen')  
    .row.mt-5
      .col-lg-9
        .row
          .col-lg-8
            p Es la comparación de información financiera durante una serie de períodos de informes, mientras que el análisis vertical es el análisis proporcional de un estado financiero, donde cada elemento de línea en un estado financiero se enumera como un porcentaje de otro elemento. Por lo general, esto significa que cada elemento de línea en un estado de resultados se establece como un porcentaje de las ventas brutas, mientras que cada elemento de línea en un balance general se establece como un porcentaje de los activos totales. Por lo tanto, el análisis horizontal es la revisión de los resultados de múltiples períodos de tiempo, mientras que el análisis vertical es la revisión de la proporción de cuentas entre sí dentro de un solo período.
            .row.p-2
              h5.mb-0 La fórmula sería P2-P1. 
              p Ejemplo: en el año 1 se tenía un activo de 100 y en el año 2 el activo fue de 150, entonces tenemos 150 – 100 = 50. 
          .col-lg-4
            img(src='@/assets/curso/tema4/img4.png', alt='Texto que describa la imagen')  
        p Es decir, que el activo se incrementó o tuvo una variación positiva de 50 en el periodo en cuestión, para determinar la variación relativa (en porcentaje) de un período respecto a otro, se debe aplicar una regla de tres.  Para esto se divide el período 2 por el período 1, se le resta 1, y ese resultado se multiplica por 100 para convertirlo a porcentaje, quedando la fórmula de la siguiente manera:   ((P2/P1)-1) *100, suponiendo el mismo ejemplo anterior, tendríamos ((150/100)-1)*100 = 50%. Quiere decir que el activo obtuvo un crecimiento del 50% respecto al período anterior. 
      .col-lg-3(data-aos="fade-left")
        img(src='@/assets/curso/tema4/img3.png', alt='Texto que describa la imagen')  
    .row.mt-5
      .col-lg-7
        .row
          .col-lg-6
            .row
              .col-lg-7.fon1
                p.mt-2.mb-0 <strong> Análisis vertical  </strong>
              .col-lg-2.tt
                img(src='@/assets/curso/tema2/ico1.svg', alt='Texto que describa la imagen')  
    .row.mt-5
      .col-lg-5(data-aos="fade-right")
        img(src='@/assets/curso/tema4/img5.png', alt='Texto que describa la imagen')  

      .col-lg-7
        p Es el uso de muchos tipos de razones, las proporciones se utilizan para calcular el tamaño relativo de un número en relación con otro. Después de calcular una relación, puede compararla con la misma relación calculada para un período anterior, o que se basa en un promedio de la industria, para ver si la empresa se está desempeñando de acuerdo con las expectativas. En un análisis de estado financiero típico, la mayoría de las razones estarán dentro de las expectativas, mientras que una pequeña cantidad señalará problemas potenciales que atraerán la atención del revisor. 
        p Por ejemplo, una empresa que tenga unos activos totales de 5.000 y su cartera sea de 800, quiere decir que el 16% de sus activos está representado en cartera, lo cual puede significar que la empresa pueda tener problemas de liquidez, o también puede significar unas equivocadas o deficientes políticas de cartera. 
    p.mt-4 Como el objetivo del análisis vertical es determinar qué tanto representa cada cuenta del activo dentro del total del activo, se debe dividir la cuenta que se quiere determinar, por el total del activo, luego se procede a multiplicar por 100. Si el total del activo es de 200 y el disponible es de 20,  Formula:  <strong>cuenta del Activo x 100 Total Activo</strong>, Ejemplo (20/200)*100 = 10%, es decir que el disponible representa el 10% del total de los activos.
    p.mt-4 Existen varias categorías generales de índices, cada uno diseñado para examinar un aspecto diferente del desempeño de una empresa, los grupos generales de proporciones se indican a continuación:
    .row.mt-5
      .col-lg-5
        .col-sm.mb-5.mb-sm-0
          ul.lista-ul.mb-0 
            li.bb1
              i.fas.fa-angle-right
              p <strong>Razones de Liquidez:</strong>  es el conjunto de índices más fundamentalmente importante, porque miden la capacidad de una empresa para permanecer en el negocio.       
          ul.lista-ul.mb-0.mt-4
            li.bb1
              i.fas.fa-angle-right
              p <strong>Radio actual:</strong>   mide la cantidad de liquidez disponible para pagar los pasivos corrientes.
          ul.lista-ul.mb-0.mt-4
            li.bb1
              i.fas.fa-angle-right
              p <strong>Índice de liquidez:</strong>   mide la cantidad de tiempo necesario para convertir los activos en efectivo.
          ul.lista-ul.mb-0.mt-4
            li.bb1
              i.fas.fa-angle-right
              p <strong>Índice de rotación de cuentas por pagar:</strong>   mide la rapidez con la que una empresa paga a sus proveedores.
          ul.lista-ul.mb-0.mt-4
            li.bb1
              i.fas.fa-angle-right
              p <strong>Ratio de rotación de activos fijos:</strong>   mide la capacidad de una empresa para generar ventas a partir de una determinada base de activos fijos.
          ul.lista-ul.mb-0.mt-4
            li.bb1
              i.fas.fa-angle-right
              p <strong>Razón de ventas a capital de trabajo:</strong>   muestra la cantidad de capital de trabajo necesario para respaldar una determinada cantidad de ventas.
          ul.lista-ul.mb-0.mt-4
            li.bb1
              i.fas.fa-angle-right
              p <strong>Razones de apalancamiento:</strong>   estos índices revelan hasta qué punto una empresa depende de la deuda para financiar sus operaciones y su capacidad para pagar la deuda. Haga clic en los siguientes enlaces para obtener una revisión detallada de cada proporción.
          ul.lista-ul.mb-0.mt-4
            li.bb1
              i.fas.fa-angle-right
              p <strong>Ratio de cobertura de servicio de la deuda:</strong>   revela la capacidad de una empresa para pagar sus obligaciones de deuda.
          ul.lista-ul.mb-0.mt-4
            li.bb1
              i.fas.fa-angle-right
              p <strong>Razones de rentabilidad:</strong>   estos índices miden qué tan bien se desempeña una empresa en la generación de ganancias. 
          ul.lista-ul.mb-0.mt-4
            li.bb1
              i.fas.fa-angle-right
              p <strong>Ratio de margen de contribución:</strong>   muestra las ganancias que quedan después de restar los costos variables de las ventas.
          ul.lista-ul.mb-0.mt-4
            li.bb1
              i.fas.fa-angle-right
              p <strong>Margen de seguridad:</strong>   calcula la cantidad por la cual las ventas deben caer antes de que una empresa alcance su punto de equilibrio.
          ul.lista-ul.mb-0.mt-4
            li.bb1
              i.fas.fa-angle-right
              p <strong>Rentabilidad sobre recursos propios:</strong>  muestra el beneficio de la empresa como porcentaje del capital.
          ul.lista-ul.mb-0.mt-4
            li.bb1
              i.fas.fa-angle-right
              p <strong>Rendimiento de los activos operativos:</strong>  muestra el beneficio de la empresa como porcentaje de los activos utilizados.
                                                                                                                                                            
      .col-lg-1
      .col-lg-5
        .col-sm.mb-5.mb-sm-0
          ul.lista-ul.mb-0 
            li.bb1
              i.fas.fa-angle-right
              p <strong>Ratio de cobertura de caja:</strong>   muestra la cantidad de efectivo disponible para pagar intereses.
          ul.lista-ul.mb-0.mt-4
            li.bb1
              i.fas.fa-angle-right
              p <strong>Razón rápida:</strong>    igual que la razón circulante, pero no incluye inventario.
          ul.lista-ul.mb-0.mt-4
            li.bb1
              i.fas.fa-angle-right
              p <strong>Razones de actividad:</strong>    son un fuerte indicador de la calidad de la gestión, ya que revelan qué tan bien la gerencia está utilizando los recursos de la empresa. 
          ul.lista-ul.mb-0.mt-4
            li.bb1
              i.fas.fa-angle-right
              p <strong>Índice de rotación de cuentas por cobrar:</strong>   mide la capacidad de una empresa para cobrar las cuentas por cobrar.
          ul.lista-ul.mb-0.mt-4
            li.bb1
              i.fas.fa-angle-right
              p <strong>Índice de rotación de inventario:</strong>   mide la cantidad de inventario necesario para soportar un determinado nivel de ventas.
          ul.lista-ul.mb-0.mt-4
            li.bb1
              i.fas.fa-angle-right
              p <strong>Ratio de rotación del capital de trabajo:</strong>   mide la capacidad de una empresa para generar ventas a partir de una determinada base de capital de trabajo.
          ul.lista-ul.mb-0.mt-4
            li.bb1
              i.fas.fa-angle-right
              p <strong>Coeficiente de endeudamiento:</strong>   muestra hasta qué punto la gerencia está dispuesta a financiar operaciones con deuda, en lugar de capital.
          ul.lista-ul.mb-0.mt-4
            li.bb1
              i.fas.fa-angle-right
              p <strong>Cobertura de cargo fijo:</strong>   muestra la capacidad de una empresa para pagar sus costos fijos.
          ul.lista-ul.mb-0.mt-4
            li.bb1
              i.fas.fa-angle-right
              p <strong>Punto de equilibrio:</strong>   revela el nivel de ventas en el que una empresa alcanza el punto de equilibrio.
          ul.lista-ul.mb-0.mt-4
            li.bb1
              i.fas.fa-angle-right
              p <strong>Ratio de beneficio bruto:</strong>   muestra los ingresos menos el costo de los bienes vendidos, como proporción de las ventas.
          ul.lista-ul.mb-0.mt-4
            li.bb1
              i.fas.fa-angle-right
              p <strong>Ratio de beneficio neto:</strong>  calcula la cantidad de ganancias después de impuestos y todos los gastos han sido deducidos de las ventas netas.
          ul.lista-ul.mb-0.mt-4
            li.bb1
              i.fas.fa-angle-right
              p <strong>Rendimiento sobre los activos netos:</strong>  muestra las ganancias de la empresa como porcentaje de los activos fijos y el capital de trabajo.
                                                                                                                
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
.carousel-indicators [data-bs-target]
  background-color: #033F71
</style>
