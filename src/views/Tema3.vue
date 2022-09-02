<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade")
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Estados financieros
    .row
      .col-lg-6(data-aos="fade-up")
        img(src='@/assets/curso/tema3/img1.png', alt='Texto que describa la imagen')

      .col-lg-6
        p Estos son una colección de informes a nivel de resumen sobre los resultados financieros, la posición financiera y los flujos de efectivo de una organización, incluyen:
        .col-sm.mb-5.mb-sm-0
          ul.lista-ul.mb-0 
            li 
              i.fas.fa-angle-right.color3
              | El estado de resultados.
          ul.lista-ul.mb-0 
            li
              i.fas.fa-angle-right.color3
              | El balance general.
          ul.lista-ul.mb-0
            li
              i.fas.fa-angle-right.color3
              | El estado de flujos de efectivo.
    p.text-center.mt-4 <strong> Los estados financieros son útiles por las siguientes razones:</strong>
    img.mt-5(src='@/assets/curso/tema3/img2.svg', alt='Texto que describa la imagen')(data-aos="zoom-in")
    .row.mt-5
      .col-lg-9.mt-5
        .row
          .col-lg-8
            p Existen pocas desventajas en la emisión de estados financieros, una posible preocupación que podría presentarse es que pueden manipularse de manera fraudulenta, lo que lleva a los inversores a creer que la entidad emisora ha producido mejores resultados de los que realmente obtuvo. Tal manipulación también podría llevar a un prestamista a emitir deuda a una empresa que no puede pagarla de manera realista.
          .col-lg-4
            img(src='@/assets/curso/tema3/img4.png', alt='Texto que describa la imagen')
        .row.azq.p-2
          p Uno de los estados financieros más representativos es el <strong>Balance General:</strong> donde se presentan los activos, pasivos y capital contable de una entidad a la fecha del informe, relacionando el total de todos los activos y donde debe coincidir con el total combinado de todos los pasivos y el patrimonio. La información de activos en el balance general se subdivide en activos corrientes y a largo plazo. De igual manera, la información de pasivos se subdivide en pasivos corrientes y de largo plazo. 
        p Esta estratificación es útil para determinar la liquidez de un negocio, donde idealmente, el total de todos los activos corrientes debe exceder el total de todos los pasivos corrientes, lo que implica que si una empresa tiene activos suficientes para pagar sus obligaciones corrientes, también se usa para comparar los niveles de deuda con la cantidad de capital invertido en el negocio, para ver si su nivel de apalancamiento es apropiado.
      .col-lg-3.mt-5(data-aos="fade-left")
        img(src='@/assets/curso/tema3/img3.png', alt='Texto que describa la imagen')
    p.mt-4 El estado muestra lo que posee el negocio, lo que debe y el capital que se ha invertido, y el Balance de una empresa presenta la siguiente estructura: 
    .row.justify-content-center.mt-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Tabla 6.
          span Ejemplo de Balance  
        .tabla-a.color-acento-contenido.mb-5 
          table
            thead
              tr
                <th colspan="2"> ACTIVO</th>
                <th colspan="2"> PASIVO / PATRIMONIO</th>

            tbody
              tr
                td Activo circulante
                td $4.000.000,00
                td Pasivo Circulante
                td $1.200.000,00 
              tr
                td Activo fijo
                td $1.500.000,00 
                td Pasivo fijo
                td $ 900.000,00
              tr
                td Otros activos
                td $1.500.000,00
                td Otros Pasivos
                td $2.100.000,00 
              tr
                td TOTAL ACTIVO
                td $7.000.000,00 
                td Total Pasivo
                td $ 4.200.000,00 
              tr
                td 
                td 
                td Capital contable
                td $ 2.800.000,00           
              tr
                td 
                td 
                td TOTAL PASIVO + PATRIMONIO
                td   $7.000.000,00 
    p Este se divide en dos lados (o secciones) el lado izquierdo del balance general describe todos los activos y el lado derecho describe los pasivos de la empresa y el patrimonio de los accionistas.
    p Los activos y pasivos se separan en dos categorías: 
    .row.justify-content-center
      .col-lg-10
        .row.mb-5
          .col-sm-6.col-lg-6.mb-4.mb-lg-0
            .tarjeta--boton.color-secundario.p-4
              .row.justify-content-center.mb-3
                .col-6
                  figure
                    img(src='@/assets/curso/tema3/ico1.svg', alt='Texto que describa la imagen')
              h4.text-center Activos y pasivos corrientes

              p.text-center.mb-5.mt-4 Tales como inventario, efectivo y cuentas comerciales y se ubican en la sección de las cuentas líquidas porque se establecen a corto y mediano plazo.
          .col-sm-6.col-lg-6.mb-4.mb-lg-0
            .tarjeta--boton.color-secundario.p-4
              .row.justify-content-center.mb-3
                .col-6
                  figure
                    img(src='@/assets/curso/tema3/ico2.svg', alt='Texto que describa la imagen')
              h4.text-center Activos y pasivos no corrientes

              p.text-center.mb-5.mt-4 Tales como planta, propiedad y equipo y deudas extensas de tiempo, se colocan en la sección de cuentas ilíquidas porque se establecen a largo plazo.
    .cajon.color-primario.p-4.mb-4
      p El balance general es un estado financiero muy importante, junto con otros informes como el estado de resultados y el estado de flujo de efectivo, permiten obtener una imagen completa de la salud de una empresa.
    .row.mt-5
      .col-lg-7
        .row
          .col-lg-6
            .row
              .col-lg-7.fon1
                p.mt-2.mb-0 <strong> El estado de resultados </strong>
              .col-lg-2.tt
                img(src='@/assets/curso/tema2/ico1.svg', alt='Texto que describa la imagen')  
    .row.mt-4
      .col-lg-7
        p Muestra los resultados de las operaciones y actividades financieras de una entidad para el período sobre el que se informa, por lo general, contiene los resultados del último mes o del último año, y puede incluir varios períodos con fines comparativos. Su estructura general comienza con todos los ingresos generados, de los cuales se resta el costo de los bienes vendidos, y luego todos los gastos de venta, generales y administrativos, el cual indicará como resultado una ganancia o una pérdida neta de impuestos sobre la renta.
        p Este trata de determinar el monto por el cual los ingresos contables superan a los gastos contables, y al remanente se le llama resultado, el cual puede ser positivo o negativo. Si es positivo se le llama utilidad y si es negativo se le denomina pérdida.  El formato del estado de resultados se compone de: 
        .col-sm.mb-5.mb-sm-0
          ul.lista-ul.mb-0 
            li 
              i.fas.fa-angle-right
              | Encabezado.     
          ul.lista-ul.mb-0 
            li 
              i.fas.fa-angle-right
              | Sección de ingresos.   
          ul.lista-ul.mb-0 
            li 
              i.fas.fa-angle-right
              | Sección de gastos.  
          ul.lista-ul.mb-0 
            li 
              i.fas.fa-angle-right
              | Saldo de utilidad neta o pérdida neta.             
      .col-lg-5(data-aos="fade-up-right")
        img(src='@/assets/curso/tema3/img5.png', alt='Texto que describa la imagen')  
    .row.justify-content-center.mt-4
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-up")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/img6.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Si los ingresos son mayores que los gastos la diferencia se llama utilidad neta, la utilidad neta aumenta el capital, pero si los gastos son mayores que los ingresos, la compañía habría incurrido en una pérdida neta y consecuentemente habrá una disminución en la cuenta de capital.
        p.mt-4 El Estado de Resultados puede tener pequeñas variaciones entre las diferentes empresas, debido a que los gastos e ingresos dependen del tipo de operaciones o negocios realizados. Sin embargo, existen varias partidas genéricas que se ven comúnmente en cualquier estado de resultados.
    p.mt-4 Las partidas más comunes del Estado de Resultados incluyen:
    .row.mt-4
      .col-lg-6
        .row.mb-5
          .col-md-12.mb-5.mb-md-0
            LineaTiempoD.color-secundario
              p(numero="1" titulo="Ingresos/Ventas") Son los ingresos de la empresa por ventas o servicios, que se muestran en la parte superior del estado de cuenta. Este valor será el bruto de los costes asociados a la creación de los bienes vendidos a la prestación de los servicios. Algunas empresas tienen múltiples fuentes de ingresos que se suman a una línea de ingresos total.
              p(numero="2" titulo="Costo de los bienes vendidos") Es un elemento de línea que agrega los costos directos asociados con la venta de productos para generar ingresos, también se puede llamar Costo de ventas si la empresa es un negocio de servicios. Los costos directos pueden incluir mano de obra, piezas, materiales y una asignación de otros gastos, como la depreciación.              
              p(numero="3" titulo="Ganancia bruta") Se calcula restando el costo de los bienes vendidos (o el costo de las ventas) de los ingresos por ventas.
              p(numero="4" titulo="Gastos de <i>marketing</i>, publicidad y promoción") La mayoría de las empresas tienen algunos gastos relacionados con la venta de bienes y/o servicios. Los gastos de <i>marketing</i>, publicidad y promoción a menudo se agrupan porque son gastos similares, todos relacionados con la venta.
              p(numero="5" titulo="Gastos generales y administrativos") Los gastos de venta, generales y administrativos se incluyen la sección de ventas, general y administrativa que contiene todos los demás costos indirectos asociados con el funcionamiento del negocio. Esto incluye sueldos y salarios, alquiler y gastos de oficina, seguros, gastos de viaje y, en ocasiones, depreciación y amortización, junto con otros gastos operativos. Sin embargo, las entidades pueden optar por separar la depreciación y la amortización en su propia sección.
              p(numero="6" titulo="Ganancias antes de intereses, impuestos, depreciación y amortización") Si bien no está presente en todos los estados de resultados, se calcula restando los gastos de venta, generales y administrativos (excluyendo la amortización y la depreciación) de la ganancia bruta.
      .col-lg-6
        img(src='@/assets/curso/tema3/img7.png', alt='Texto que describa la imagen')  
    .row.mt-4
      .col-lg-6
        img(src='@/assets/curso/tema3/img8.png', alt='Texto que describa la imagen')  
      .col-lg-6
        .row.mb-5
          .col-md-12.mb-5.mb-md-0
            LineaTiempoD.color-secundario
              p(numero="7" titulo="Gastos de depreciación y amortización") Son gastos que no son en efectivo, y los crean los contadores para distribuir el costo de los activos de capital, como propiedades, planta y equipo.
              p(numero="8" titulo="Utilidad operativa") Es la ganancia antes de restar de los ingresos cualquier ingreso no operativo, gastos no operativos, intereses o impuestos. EBIT es un término comúnmente utilizado en finanzas y significa ganancias antes de intereses e impuestos.
              p(numero="9" titulo="Ingresos antes de impuestos") Significa ganancias antes de impuestos, y se calcula restando los gastos por intereses de los ingresos operativos. Este es el subtotal final antes de llegar al ingreso neto.
              p(numero="10" titulo="Interés") Es común que las empresas dividan los gastos por intereses y los ingresos por intereses en una línea separada en el estado de resultados. Esto se hace para conciliar la diferencia entre EBIT y EBT. El gasto por intereses está determinado por el programa de la deuda.
              p(numero="11" titulo="Otros gastos") Las empresas a menudo tienen otros gastos que son exclusivos de su industria. Otros gastos pueden incluir cumplimiento, tecnología, investigación y desarrollo (I+D), compensación basada en acciones (SBC), cargos por deterioro, ganancias/pérdidas en la venta de inversiones, impactos cambiarios y muchos otros gastos que son específicos de la industria o de la empresa. 
              p(numero="12" titulo="Impuestos sobre la Renta") Se refieren a los impuestos relevantes que se cargan sobre la renta antes de impuestos. El gasto fiscal total puede consistir tanto en impuestos actuales como en impuestos futuros.
    .row.mt-5
      .col-lg-9
        .row
          .col-lg-6
            .row
              .col-lg-7.fon1
                p.mt-2.mb-0 <strong> El estado de flujos de efectivo </strong>
              .col-lg-2.tt
                img(src='@/assets/curso/tema2/ico1.svg', alt='Texto que describa la imagen')  
    .row.mt-4
      .col-lg-7
        p Es el estado financiero final, muestra los cambios en los flujos de efectivo de una entidad durante el período sobre el que se informa, estos flujos se dividen en flujos de efectivo de actividades operativas, actividades de inversión y actividades de financiación, la mayor parte generalmente se enumeran en la sección de actividades operativas, que establece las entradas y salidas de efectivo relacionadas con las operaciones básicas del negocio, como los cambios en los saldos de cuentas por cobrar, inventario y cuentas por pagar. La sección de actividades de inversión contiene los flujos de efectivo de la compra o venta de instrumentos de inversión, activos u otros negocios y la sección de actividades de financiación contiene flujos de efectivo relacionados con la adquisición o pago de deuda, emisión de dividendos, venta de acciones, etc.
        p Cuando los estados financieros se emitan a terceros, se deben incluir las notas complementarias, estas incluyen explicaciones de diversas actividades, detalles adicionales sobre algunas cuentas y otros elementos según lo exige el marco contable aplicable, como las NIIF. El nivel y los tipos de detalles proporcionados dependen de la naturaleza del negocio de la entidad emisora y los tipos de transacciones en las que participe.
        p Si una empresa planea emitir Estados financieros para usuarios externos (como inversionistas o prestamistas) estos deben presentarse de acuerdo con los principales marcos contables, que permiten cierto margen de maniobra en la forma en que se pueden estructurar los estados financieros, por lo que es probable que los estados emitidos por diferentes empresas, incluso en la misma industria, tengan apariencias algo diferentes. 
      .col-lg-5(data-aos="fade-left")
        img(src='@/assets/curso/tema3/img9.png', alt='Texto que describa la imagen')  
    .row.mt-5
      .col-lg-3
        img(src='@/assets/curso/tema3/img10.png', alt='Texto que describa la imagen')  
      .col-lg-9
        .cajon.color-acento-contenido.p-4.mb-4
          p Los estados financieros que se emiten a terceros pueden ser auditados para verificar su exactitud y equidad de presentación.
    p Si los estados financieros se emiten estrictamente para uso interno, no existen pautas, aparte del uso común, sobre cómo se deben presentar los estados, como mínimo, se espera que una empresa emita un estado de resultados y un balance general para documentar sus resultados mensuales y su situación financiera final. Se espera el conjunto completo de estados financieros cuando una empresa informa los resultados de un año fiscal completo, o cuando una empresa que cotiza en bolsa informa los resultados de sus trimestres fiscales.
    separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1  Características y componentes
    p Una de las primeras consideraciones para tener en cuenta es la necesidad de disponer de un esquema general para entender las finanzas de la empresa, este debe permitir comprender las interacciones que se producen entre las inversiones, el financiamiento y el rendimiento de la empresa. 
    .row
      .col-lg-7
        p Con el esquema claro, se debe saber relacionar el modelo de negocio con los Estados Financieros, la realidad del negocio debe verse reflejada en los estos y dar cuenta de: cómo se vende, cuánta es la inversión en existencias necesarias para ofrecer adecuadamente los productos y con qué financiamiento de los proveedores se cuenta.
        .row.p-2.backga
          p Es muy importante tener claro que, para poder obtener un rendimiento económico, se debe considerar que es necesario invertir, sin las inversiones, lamentablemente, la mayoría de las veces no es posible obtener la venta de un producto o un servicio, por eso es necesario saber y gestionarlas adecuadamente para que sean inversiones eficientes. Además, para sostenerlas, es imprescindible un adecuado financiamiento en las condiciones y plazos convenientes para poder cumplir con los objetivos trazados.
      .col-lg-5
        img(src='@/assets/curso/tema3/img11.png', alt='Texto que describa la imagen')  
    p.mt-5 Por eso, es necesario entender las finanzas de la empresa, porque facilita comprender los mecanismos para garantizar la sostenibilidad, lograr la rentabilidad y una adecuada liquidez para protegerla en contextos difíciles.
    p Una de las herramientas más importantes para obtener el diagnóstico financiero de una empresa en un período de tiempo determinado es el <strong>Flujo de Fondos</strong>, llamado también <strong>“Cuadro de Fuentes y Usos”</strong> o “Estado de Orígenes y Aplicaciones”, esta herramienta responde las siguientes preguntas:
    .row.justify-content-center.mt-5
      .col-lg-10
        .row
          .col-lg-6
            .row
              .col-lg-12
                .tarjeta-avatar-b.mb-5
                  .tarjeta-avatar-b__img
                    img(src='@/assets/curso/tema3/ico3.svg' alt='AvatarTop')
                  .tarjeta.tarjeta--azul.aqw
                    .p-4
                      h5.text-center ¿En qué se ha usado el dinero y de dónde se ha obtenido?
          .col-lg-6
            .row
              .col-lg-12
                .tarjeta-avatar-b.mb-5
                  .tarjeta-avatar-b__img
                    img(src='@/assets/curso/tema3/ico3.svg' alt='AvatarTop')
                  .tarjeta.tarjeta--azul.aqw
                    .p-4
                      h5.text-center.mb-4 ¿Dónde están las utilidades que hemos obtenido? 
        .cajon.color-acento-contenido.p-4.mb-4
          p En síntesis, responde qué se hizo con el dinero en un período y cómo se financió, es una herramienta muy poderosa para entender cómo han sido los movimientos de dinero en la empresa en un período determinado.
    separador  
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2  Fórmulas de liquidación  
    p Es una relación entre dos cuentas o grupo de cuentas del mismo estado financiero o de dos estados financieros, señalan los puntos fuertes y débiles de un negocio, el análisis de razones de los estados financieros de una empresa es importante para sus accionistas, sus acreedores y para la propia gerencia, las cuales son:         
    .row.justify-content-center
      .col-lg-8
        ImagenInfograficaB.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema3/img12.svg', alt='Texto que describa la imagen')


          div(x="30%" y="4%" tooltip="Razones de liquidez" )
            .row.justify-content-center.mt-5
              .row.info1
                h5.mt-4 Razones de liquidez 
              .row.info2
                p.mb-0.mt-3 Es un tipo de índice financiero utilizado para determinar la capacidad de una empresa para pagar sus obligaciones de deuda a corto plazo. La métrica ayuda a determinar si una empresa puede utilizar sus activos corrientes o líquidos para cubrir sus pasivos corrientes.
                p Generalmente se utilizan tres índices de liquidez: el índice actual, el índice rápido y el índice de efectivo. En cada una de las razones de liquidez, el monto del pasivo circulante se coloca en el denominador de la ecuación y el monto del activo líquido se coloca en el numerador.

          div(x="70%" y="4%" tooltip="Razón corriente ")
            .row.justify-content-center.mt-5
              .row.info1
                h5.mt-4 Razón corriente: 
              .row.info2
                p.mb-0.mt-3 Determina la capacidad de la empresa para cumplir sus obligaciones a corto plazo, se expresa de la manera siguiente: 
                .row.justify-content-center
                  .col-lg-8.mt-2.fon22
                    p.mb-0.text-center <i><strong>Razón corriente = Activo circulante/Pasivo circulante.</strong></i>
                .cajon.color-acento-contenido.p-4.mb-4.mt-4
                  h5.mb-0 Importante: 
                  p.mb-0 Siempre que la razón circulante de una empresa sea 1 el capital de trabajo neto será 0. 
                    
          div(x="97%" y="32%" tooltip="Razón rápida (Prueba ácida) ")
            .row.justify-content-center.mt-5
              .row.info1
                h5.mt-4 Razón rápida (Prueba Ácida): 

              .row.info2
                p.mb-0.mt-3 Este es uno de los tipos de ratios financieros más utilizados, ya que proporciona un indicador rápido de la liquidez empresarial, para calcularla se debe restar el inventario actual de los activos actuales y luego dividirlo entre los pasivos:
                .row.justify-content-center.mt-2
                  .col-lg-8.mt-2.fon22
                    p.mb-0.text-center <i><strong>(Activo corriente – Inventario) / Pasivo corriente</strong></i>
                p.mt-4 Esto le muestra con qué facilidad las deudas a corto plazo de una empresa se cubrirán con sus activos líquidos o efectivo existentes. 
                p Si la razón rápida es mayor que 1, el negocio está en una buena posición financiera.
          div(x="96%" y="70%" tooltip="Capital de trabajo neto ")
            .row.justify-content-center.mt-5
              .row.info1
                h5.mt-4 Capital de trabajo neto: 
              .row.info2
                p.mt-3 Otro índice relacionado con los pasivos es el índice de capital de trabajo, también conocido como índice circulante, al igual que la relación rápida, analiza qué tan bien una empresa puede pagar sus deudas existentes. Sin embargo, considera todos los activos actuales en lugar de simplemente los activos líquidos, por lo que no es necesario restar el inventario de la ecuación. 
                p El índice de capital de trabajo se ve así cuando se escribe como una fórmula: 
                .row.justify-content-center.mt-2
                  .col-lg-8.mt-2.fon22
                    p.mb-0.text-center <i><strong>Activo corriente / Pasivo corriente</strong></i>
                p.mt-4 Cuanto mayor sea el índice de capital de trabajo, más fácil será para una empresa pagar sus deudas utilizando sus activos circulantes.
          div(x="3%" y="70%" tooltip="Razones de endeudamiento o solvencia ")
            .row.justify-content-center.mt-5
              .row.info1
                h5.mt-4 Razones de endeudamiento o solvencia: 

              .row.info2
                p.mt-3 También conocidos como el índice de apalancamiento, es cualquier tipo de índice financiero que indica el nivel de deuda contraída por una entidad comercial contra varias otras cuentas en su balance general, estado de resultados o estado de flujo de efectivo. Estos índices proporcionan una indicación de cómo se financian los activos y las operaciones comerciales de la empresa (utilizando deuda o capital). 

                p.mb-0 Algunas cuentas que se considera que tienen una comparabilidad significativa con la deuda son los activos totales, el patrimonio total, los gastos operativos y los ingresos.
                p A continuación, se muestran 5 de los índices de apalancamiento más utilizados:
                .col-sm.mb-5.mb-sm-0
                  ul.lista-ul
                    li.mb-0 
                      i.fas.fa-angle-right.color3
                      | Relación deuda-activos = Deuda total / Activos totales
                    li.mb-0 
                      i.fas.fa-angle-right.color3
                      | Relación deuda-capital = Deuda total / Patrimonio total
                    li.mb-0 
                      i.fas.fa-angle-right.color3
                      | Relación deuda-capital = Deuda actual / (Deuda total + Patrimonio total)
                    li.mb-0 
                      i.fas.fa-angle-right.color3
                      | Razón de deuda a EBITDA = Deuda total / Ganancias antes de intereses Impuestos Depreciación y amortización (EBITDA)
                    li.mb-0 
                      i.fas.fa-angle-right.color3
                      | Relación de activos a capital = Activos totales / Patrimonio total
          div(x="3%" y="32%" tooltip="Razones de rentabilidad ")
            .row.justify-content-center.mt-5
              .row.info1
                h5.mt-4 Razones de rentabilidad:
              .row.info2
                p.mt-3 Las razones financieras se crean con el uso de valores numéricos tomados de los estados financieros para obtener información significativa sobre una empresa, los números que se encuentran en los estados financieros de una empresa (hoja de balance, estado de resultados y estado de flujo de efectivo) se utilizan para realizar análisis cuantitativos y evaluar la liquidez, el apalancamiento, el crecimiento, los márgenes, la rentabilidad, las tasas de rendimiento, la valoración y más de una empresa.
          div(x="30%" y="95%" tooltip="Rotación de inventarios ")
            .row.justify-content-center.mt-5
              .row.info1
                h5.mt-4 Rotación de inventarios: 
              .row.info2
                p.mt-3 La rotación de inventario, o índice de rotación de inventario, es la cantidad de veces que una empresa vende y reemplaza su stock de bienes durante un período determinado. Considera el costo de los bienes vendidos, en relación con su inventario promedio para un año o en cualquier período de tiempo determinado.
                .cajon.color-acento-contenido.p-4.mb-4.mt-4
                  p.mb-0 <strong>Una alta rotación de inventario generalmente significa que los bienes se venden más rápido y una baja tasa de rotación indica ventas débiles y exceso de inventario,</strong> lo que puede ser un desafío para una empresa.
                p La rotación de inventario se puede comparar con índices de rotación históricos, índices planificados y promedios de la industria para evaluar la competitividad y el desempeño dentro de la industria. La rotación del inventario puede variar significativamente según la industria.       
          div(x="70%" y="96%" tooltip="Razones de actividad  ")
            .row.justify-content-center.mt-5
              .row.info1
                h5.mt-4 Razones de actividad: 

              .row.info2
                p.mt-3 Es uno de los índices financieros fundamentales a tener en cuenta, este le muestra qué tan eficientemente una empresa está administrando sus costos generales, o qué tan bien convierte los ingresos en ganancias. La fórmula del margen de beneficio es: 
                .row.justify-content-center
                  .col-lg-8.mt-2.fon22
                    p.mb-0.text-center <i><strong>Beneficio / Ingresos</strong></i>
                p.mt-4 Luego puede <strong>multiplicar</strong> el resultado <strong>por 100</strong> para convertirlo en un <strong>porcentaje</strong>. Cuanto mayor sea el margen de beneficio, más eficiente será la empresa para convertir las ventas en beneficios.
    separador
    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3  Conversión de intereses
    p Para aplicar la conversión de intereses, se deben revisar primero los siguientes elementos, que lleva implícitos:
    .row.mt-5
      .col-lg-4(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img13.png', alt='Texto que describa la imagen')

      .col-lg-8
        .row.bdt.mt-4
          .col-lg-1.mt-4
            img(src='@/assets/curso/tema3/1.svg', alt='Texto que describa la imagen')

          .col-lg-11
            h5.mb-0 Causación
            p Informa el momento en el cual el interés se causa o tiene lugar según se haya estipulado en el contrato o por el negocio en cuestión, aquí el monto de interés se calcula y se da por cierto, pero no necesariamente se cancela, sino que se puede acumular aditivamente (interés simple, si se acumula sin capitalizarse) o se puede capitalizar (interés compuesto).
        .row.bdt.mt-4
          .col-lg-1.mt-4
            img(src='@/assets/curso/tema3/2.svg', alt='Texto que describa la imagen')

          .col-lg-11    
            h5.mb-0 Capitalización
            p Informa el momento en el cual el interés calculado o acumulado aditivamente se lleva a capital, o sea, se capitaliza.
        .row.bdt.mt-4
    p.mt-5 Según la manera como una tasa de interés proponga la información, se le denomina de una de estas maneras: 
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row.justify-content-center(titulo="Periódica")
        .col-md-12.mb-4.mb-md-0
          .row
            .col-lg-3
              img(src='@/assets/curso/tema3/img14.png', alt='Texto que describa la imagen')

            .col-lg-9
              p La tasa corresponde al período de composición (% por día, mes, bimestre, trimestre, semestre, año, etc.). Algunos sectores la conocen como tasa efectiva periódica (efectiva diaria, efectiva mensual, efectiva trimestral, etc.), pero aquí se denominará simplemente tasa periódica.
      

      div(titulo="Nominal")
        .col-md-12.mb-4.mb-md-0
          .row
            .col-lg-3
              img(src='@/assets/curso/tema3/img15.png', alt='Texto que describa la imagen')

            .col-lg-9
              p Es la expresión anualizada de la tasa periódica, contabilizada por acumulación simple de ella.
      div(titulo="Efectiva")
        .col-md-12.mb-4.mb-md-0
          .row
            .col-lg-3
              img(src='@/assets/curso/tema3/img16.png', alt='Texto que describa la imagen')

            .col-lg-9
              p Es la expresión equivalente de una tasa periódica en la que el período se hace igual a un año y la causación siempre se da al vencimiento. Algunos sectores emplean el nombre de tasa efectiva para aplicarla a un período distinto del año (efectiva diaria, efectiva mensual, efectiva trimestral, etc.), pero aquí no se empleará esta denominación, la cual la llamaremos simplemente tasa periódica. La tasa efectiva se conoce también como tasa efectiva anual, tasa anual efectiva o aun tasa anual.
    p Adicionalmente, como ya se ha indicado, la tasa debe definir la forma en que se causa el interés:
    .row
      .col-lg-8
        .col-lg-12
          .tarjeta-avatar-b.mb-4(data-aos="zoom-in")
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema3/i1.svg' alt='AvatarTop')
            .tarjeta.tarjeta--azul.col23
              .p-4
                p.mb-0 <strong>Anticipada:</strong> cuando el interés se causa en forma anticipada en el período, cabe anotar que la Tasa Efectiva no puede darse, por definición, en forma anticipada, es decir no existe una tasa efectiva anticipada.
        .col-lg-12
          .tarjeta-avatar-b.mb-5(data-aos="zoom-in")
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema3/i2.svg' alt='AvatarTop')
            .tarjeta.tarjeta--azul.col23
              .p-4
                p.mb-0 <strong>Vencida:</strong>  cuando el interés se causa en forma vencida en el período, cabe anotar que la tasa efectiva es siempre vencida y por lo tanto esta última palabra se omite en su declaración.

      .col-lg-4(data-aos="fade-down")                          
        img(src='@/assets/curso/tema3/img17.png', alt='Texto que describa la imagen')
    separador
    #t_3_4.titulo-segundo.color-acento-contenido
      h2 3.4  Normas aplicables
    .row
      .col-lg-3
        img(src='@/assets/curso/tema3/img18.png' alt='AvatarTop')

      .col-lg-9
        .row
          .col-lg-4
            img(src='@/assets/curso/tema3/img19.png' alt='AvatarTop')

          .col-lg-8
            p Las Normas Internacionales de Información Financiera conocidas por sus siglas NIIF, se crearon para brindar consistencia e integridad a las normas y prácticas contables, independientemente de la empresa o el país, fueron emitidos por el Consejo de Normas de Contabilidad (IASB) con sede en Londres y abordan el mantenimiento de registros, informes contables y otros aspectos de los informes financieros.
        .row.aq1.p-3
          p.mb-0 Las NIIF fomentan una mayor transparencia empresarial, especifican en detalle cómo las empresas deben mantener sus registros y reportar sus gastos e ingresos. Se establecieron para crear un lenguaje contable común que pudiera ser entendido globalmente por inversionistas, auditores, reguladores gubernamentales y otras partes interesadas.
        p.mt-2 Los estándares están diseñados para brindar coherencia al lenguaje, las prácticas y las declaraciones contables, y para ayudar a las empresas y los inversores a tomar decisiones y análisis financieros informados.
        p Fueron desarrollados por el Consejo de Normas Internacionales de Contabilidad, que forma parte de la Fundación IFRS sin fines de lucro con sede en Londres, estableciendo los estándares para brindar transparencia, responsabilidad y eficiencia a los mercados financieros de todo el mundo, estas también tienen diferentes requisitos para informar los gastos. Por ejemplo, si una empresa está gastando dinero en desarrollo o en inversiones para el futuro, no necesariamente tiene que declararse como un gasto. Se puede escribir en mayúscula en su lugar.
    p.mt-4 Las NIIF cubren una amplia gama de actividades contables y hay ciertos aspectos de la práctica comercial para los cuales establece reglas obligatorias:
    .row.mb-5.mt-4
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              .row.justify-content-center
                .col-lg-9.mt-4
                  img(src='@/assets/curso/tema3/11.svg', alt='Texto que describa la imagen')
              .row.justify-content-center
                .col-lg-9
                  h4.text-white.mt-5.text-center Estado de situación financiera 
            .tarjeta-flip__contenido.p-4.p-xl-5
              h4 Estado de situación financiera

              p Este es el balance general. Las NIIF influyen en la forma en que se informan los componentes de un balance.

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              .row.justify-content-center
                .col-lg-9.mt-4
                  img(src='@/assets/curso/tema3/12.svg', alt='Texto que describa la imagen')
              .row.justify-content-center
                .col-lg-9
                  h4.text-white.mt-5.text-center Estado de resultados integrales
            .tarjeta-flip__contenido.p-4.p-xl-5
              h4 Estado de resultados integrales
              p Puede tomar la forma de un estado o estar separado en un estado de pérdidas y ganancias y un estado de otros ingresos, incluidos los bienes y equipos.

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              .row.justify-content-center
                .col-lg-10.mt-4
                  img(src='@/assets/curso/tema3/13.svg', alt='Texto que describa la imagen')
              .row.justify-content-center
                .col-lg-9
                  h4.text-white.mt-5.text-center Estado de cambios en el patrimonio

            .tarjeta-flip__contenido.p-4.p-xl-5
              h4 Estado de cambios en el patrimonio

              p También conocido como estado de ganancias retenidas, documenta el cambio en las ganancias o ganancias de la empresa para el período financiero dado.
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              .row.justify-content-center
                .col-lg-9.mt-4
                  img(src='@/assets/curso/tema3/14.svg', alt='Texto que describa la imagen')
              .row.justify-content-center
                .col-lg-7
                  h4.text-white.mt-5.text-center Estado de flujos de efectivo

            .tarjeta-flip__contenido.p-4.p-xl-5
              h4 Estado de flujos de efectivo

              p Este informe resume las transacciones financieras de la empresa en el período dado, separando el flujo de efectivo en operaciones, inversiones y financiamiento.
   
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

<style lang="sass">
.cajon.color-primario
  background-color: #C8D5E0
.linea-tiempo-d.color-secundario .linea-tiempo-d__item--selected .linea-tiempo-d__item__number
  background-color:#BFCEDB
.linea-tiempo-d__item.row.linea-tiempo-d__item--selected
  .linea-tiempo-d__item__content.tarjeta.tarjeta--gris
    background-color:#BFCEDB
.tarjeta.tarjeta--azul.acordion__activo
  background-color: #F9F7EC!important
.tarjeta.tarjeta--azul
  background-color: #92BFB1
.acordion__accion__btn--a
  background-color: #FFC631
.tarjeta-avatar-b__img
  min-width: 9%
  max-width: 9%
.tarjeta-flip.color-primario .tarjeta-flip__contenido
  background-color: #B7C8D6
.tarjeta.color-primario *
  color: #12263F
.tarjeta-flip.color-primario .tarjeta-flip__img
  background-color: #2E5F87
.carousel-control-next, .carousel-control-prev
  background-color: #FFC631
</style>
