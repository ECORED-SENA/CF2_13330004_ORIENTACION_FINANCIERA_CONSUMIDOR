<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade")
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Contabilidad básica
    p La contabilidad es la técnica que se encarga de registrar las operaciones de las empresas con el objetivo de reflejar una imagen del patrimonio, situación financiera y resultados económicos (pérdidas o ganancias), analizando los activos, los pasivos y el patrimonio y aplicando diferentes fórmulas para calcularlos.
    p Para una mejor comprensión, se desglosan los conceptos básicos:
    .row
      .col-lg-7
        .row
          .col-lg-6
            .row
              .col-lg-4.fon1
                p.mt-2.mb-0 <strong> Activos </strong>
              .col-lg-2.tt
                img(src='@/assets/curso/tema2/ico1.svg', alt='Texto que describa la imagen')
        p.mt-2 En términos contables, un activo es cualquier artículo de valor para la empresa: tangible (propiedad, inventario, equipo) o intangible (patentes, marcas, derechos de autor, cuentas por cobrar e incluso reputación), fundamentalmente, se reduce a una simple ecuación:
        .row.justify-content-center
          .col-lg-5.mt-2.fon2
            p.mb-0.text-center <strong>Activos = Pasivos + Patrimonio</strong>
        p.mt-2 Considere qué activos tiene, incluidos los recursos actuales, fijos e incluso intangibles que podrían tener un valor financiero para su negocio. Por ejemplo:
      .col-lg-5(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img1.png', alt='Texto que describa la imagen')
    .row.mb-5.mt-4
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              .row.justify-content-center
                .col-lg-9.mt-4
                  img(src='@/assets/curso/tema2/ico2.svg', alt='Texto que describa la imagen')
              .row.justify-content-center
                .col-lg-7
                  h4.text-white.mt-5 Activos circulantes 
            .tarjeta-flip__contenido.p-4.p-xl-5
              h4 Activos circulantes
              p Son activos que se pueden convertir en efectivo dentro de un año o menos, como efectivo, facturas pendientes que se le deben e inventario que se puede vender.

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              .row.justify-content-center
                .col-lg-10.mt-4
                  img(src='@/assets/curso/tema2/ico3.svg', alt='Texto que describa la imagen')
              .row.justify-content-center
                .col-lg-5
                  h4.text-white.mt-5 Activos fijos
            .tarjeta-flip__contenido.p-4.p-xl-5
              h4 Activos fijos
              p Son cosas de valor que son más difíciles de convertir en efectivo, como bienes raíces, maquinaria pesada, muebles, vehículos, etc.

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              .row.justify-content-center
                .col-lg-10.mt-4
                  img(src='@/assets/curso/tema2/ico4.svg', alt='Texto que describa la imagen')
              .row.justify-content-center
                .col-lg-9
                  h4.text-white.mt-3 Inversiones a largo plazo
            .tarjeta-flip__contenido.p-4.p-xl-5
              h4 Inversiones a largo plazo
              p Como acciones y bonos.
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              .row.justify-content-center
                .col-lg-10.mt-4
                  img(src='@/assets/curso/tema2/ico5.svg', alt='Texto que describa la imagen')
              .row.justify-content-center
                .col-lg-7
                  h4.text-white.mt-3 Activos intangibles
            .tarjeta-flip__contenido.p-4.p-xl-5
              h4 Activos intangibles
              p Son los que tienen valor, como la marca de su empresa, la reputación, el seguimiento en las redes sociales y el estado de su empresa o empleados como personas influyentes.
    .row
      .col-lg-7
        .row
          .col-lg-6
            .row
              .col-lg-4.fon1
                p.mt-2.mb-0 <strong> Pasivos </strong>
              .col-lg-2.tt
                img(src='@/assets/curso/tema2/ico1.svg', alt='Texto que describa la imagen')
    p.mt-3 Se refieren a las deudas u obligaciones medibles financieramente, se clasifican como: 
    .row.mb-5
      .col-lg-6.mb-3
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/tema2/1.png' alt='AvatarTop' style='width:600px')
          .tarjetas-up_card.bg--2-claro.p-4
            .title.d-flex.align-items-center.mb-4
              span.c--4
                i.fas.fa-caret-up.fa-2x.color-primario.me-3
                i.fas.fa-caret-down.fa-2x.color-primario.me-3
              h4.mb-0 Pasivos circulantes
            
            p.mt-4 Son obligaciones que la empresa debe liquidar en un año o menos.<br>Consiste en pagos de deuda a corto plazo, pagos a proveedores y costos operativos mensuales (alquiler, electricidad, devengos) que se conocen de antemano.<br>Estos generalmente se pagan con <strong>activos circulantes</strong>.
      .col-lg-6.mb-3
        .tarjetas-up
          img(src='@/assets/curso/tema2/2.png' alt='AvatarTop' style='width:600px')
          .tarjetas-up_card.bg--2-claro.p-4
            .title.d-flex.align-items-center.mb-4
              span.c--4
                i.fas.fa-caret-up.fa-2x.color-primario.me-3
                i.fas.fa-caret-down.fa-2x.color-primario.me-3
              h4.mb-0 Pasivos a largo plazo
            
            p.mt-4 En este se incluyen deudas como hipotecas o préstamos utilizados para comprar activos fijos. Estos se pagan durante años en lugar de meses.

    p Estos son importantes, porque el <strong>capital de trabajo</strong> de una empresa es la diferencia entre sus activos y pasivos circulantes.
    .row.mt-5
      .col-lg-7
        .row
          .col-lg-6
            .row
              .col-lg-4.fon1
                p.mt-2.mb-0 <strong> Patrimonio </strong>
              .col-lg-2.tt
                img(src='@/assets/curso/tema2/ico1.svg', alt='Texto que describa la imagen')
    p.mt-3 Se refiere al valor del propietario en un activo o grupo de activos, al igual que los propietarios de viviendas acumulan valor patrimonial a medida que pagan su hipoteca, el patrimonio del propietario se define como la proporción del valor total de los activos de una empresa que pueden reclamar sus propietarios (ya sea una empresa unipersonal o una sociedad). El patrimonio también se conoce como patrimonio neto o capital y patrimonio de los accionistas.
    .row
      .col-lg-3(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img2.png', alt='Texto que describa la imagen')

      .col-lg-9
        p Esta equidad se convierte en un activo, porque es algo contra lo que un propietario puede pedir prestado si es necesario. Puede calcularse deduciendo todos los pasivos del valor total de un activo: 
        .row.justify-content-center
          .col-lg-5.mt-2.fon2
            p.mb-0.text-center <strong>Patrimonio = Activos - Pasivos</strong>
        p.mt-3 En contabilidad, el valor total de las acciones de la empresa es la suma de las acciones de los propietarios, el valor de los activos aportados por los propietarios, y el ingreso total que la empresa gana y retiene.
        .row.bgaq
          .col-lg-1.mt-4.mb-3
            img(src='@/assets/curso/tema2/ico6.svg', alt='Texto que describa la imagen')
          .col-lg-11.mt-4
            p.mb-0 Consideremos una empresa cuyos activos totales están valorados en $1000. Con una deuda de $900 (pasivo).
            p En este ejemplo, el valor del propietario en los activos es de $100, lo que representa el patrimonio de la empresa.
    .row.mt-5
      .col-lg-7
        .row
          .col-lg-6
            .row
              .col-lg-7.fon1
                p.mt-2.mb-0 <strong> La ecuación contable </strong>
              .col-lg-2.tt
                img(src='@/assets/curso/tema2/ico1.svg', alt='Texto que describa la imagen')
    p.mt-4 Es fundamental para el sistema contable de partida doble común en la contabilidad en el que cada transacción financiera tiene efectos iguales y opuestos en al menos dos cuentas diferentes.
    p Esta ecuación contable básica “equilibra” el balance de la empresa, mostrando que los activos totales de una empresa son iguales a la suma de sus pasivos y el patrimonio de los accionistas. Esta fórmula, <strong>también conocida como la ecuación del balance,</strong> muestra que lo que una empresa posee (activos), se compara con lo que debe (pasivos) o con lo que invierten sus propietarios (capital).
    .row.justify-content-center.mt-5
      .col-lg-8
        .row
          .col-lg-12
            .tarjeta-avatar-b.mb-5(data-aos="zoom-in")
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/ico7.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul.col23
                .p-4
                  p Si una empresa quiere fabricar una pieza de automóvil, deberá comprar la máquina X que cuesta $1000. 

                  p Pide prestado $400 al banco y gasta otros $600 para comprar la máquina. 
                  p Sus activos ahora valen $1000, que es la suma de sus pasivos ($400) y su patrimonio ($600).
    p Es importante prestar mucha atención al equilibrio entre pasivos y patrimonio, el riesgo financiero de una empresa aumenta cuando los pasivos financian los activos, esto a veces se denomina palanca de la empresa.
    p Para comprender mejor este concepto, revisaremos el siguiente el ejemplo del Balance de una empresa:
    .row.justify-content-center.mt-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Ejemplo de Balance sin valor de capital      
        .tabla-a.color-acento-contenido.mb-5 
          table
            thead
              tr
                <th colspan="2"> ACTIVO</th>
                <th colspan="2"> PASIVO / PATRIMONIO</th>

            tbody
              tr
                td Terrenos
                  td $4.000.000,00
                td Proveedores
                td $1.200.000,00 
              tr
                td Mobiliario
                td $500.000,00 
                td Hacienda
                td $ 900.000,00
              tr
                td Maquinaria
                td $1.500.000,00
                td Cuentas por pagar
                td $2.100.000,00 
              tr
                td Bancos
                td $1.200.000,00 
                td Créditos
                td $ 600.000,00 
              tr
                td Existencias
                td $1.300.000,00 
                td Total Pasivo
                td $ 4.800.000,00              
              tr
                td Edificios
                td $5.000.000,00 
                td Capital
                td ¿?   
              tr
                td TOTAL ACTIVO
                td $13.500.000,00 
                td TOTAL
                td ¿?    
    .row.justify-content-center
      .col-lg-10
        p Observe que falta por calcular el valor de <strong>Capital</strong>, para su cálculo primero debe saber que: en el Balance un <strong>ACTIVO tiene que ser igual al PASIVO</strong>, es decir, que el capital será la diferencia entre el ACTIVO y el PASIVO. De acuerdo con el ejemplo que estamos revisando podemos decir:                                        
        .row.mb-5
          .col-sm-6.col-lg-4.mb-4.mb-lg-0
            .tarjeta--boton.color-secundario.p-4
              .row.justify-content-center.mb-3
                .col-4
                  figure
                    img(src='@/assets/curso/tema2/ico8.svg', alt='Texto que describa la imagen')
              p.text-center.mb-5 Total Activo = $13.500.000 
              <br><br>
          .col-sm-6.col-lg-4.mb-4.mb-lg-0
            .tarjeta--boton.color-secundario.p-4
              .row.justify-content-center.mb-3
                .col-4
                  figure
                    img(src='@/assets/curso/tema2/ico9.svg', alt='Texto que describa la imagen')
              p.text-center.mb-5  Total Pasivo =   $4.800.000 
              <br><br>
          .col-sm-6.col-lg-4.mb-4.mb-lg-0
            .tarjeta--boton.color-secundario.p-4
              .row.justify-content-center.mb-3
                .col-4
                  figure
                    img(src='@/assets/curso/tema2/ico10.svg', alt='Texto que describa la imagen')
              p.text-center  Total  Capital (la diferencia) = $8.700.000 (este valor se calcula realizando la resta entre Activo – Pasivo
    p Por tanto, el Balance quedaría de la siguiente manera:
    .row.justify-content-center.mt-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Ejemplo de Balance con valor de capital    
        .tabla-a.color-acento-contenido.mb-5 
          table
            thead
              tr
                <th colspan="2"> ACTIVO</th>
                <th colspan="2"> PASIVO / PATRIMONIO</th>

            tbody
              tr
                td Terrenos
                  td $4.000.000,00
                td Proveedores
                td $1.200.000,00 
              tr
                td Mobiliario
                td $500.000,00 
                td Hacienda
                td $ 900.000,00
              tr
                td Maquinaria
                td $1.500.000,00
                td Cuentas por pagar
                td $2.100.000,00 
              tr
                td Bancos
                td $1.200.000,00 
                td Créditos
                td $ 600.000,00 
              tr
                td Existencias
                td $1.300.000,00 
                td Total Pasivo
                td $ 4.800.000,00              
              tr
                td Edificios
                td $5.000.000,00 
                td Capital
                td  $8.700.000,00 
              tr
                td TOTAL ACTIVO
                td $13.500.000,00 
                td TOTAL
                td $13.500.000,00    
    p Una vez calculado el valor del capital, se puede realizar el cálculo total; observe que el total de <strong>ACTIVO ahora queda igual al total del PASIVO.</strong>
    separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1  Tipos de registro
    .tarjeta.tarjeta--azul.p-4.mb-5.color1
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-11.mt-5
            .row
              .col-md-6.mb-4.mb-md-0
                p Inicialmente se debe conocer que el término “Cuenta” es el elemento básico de la contabilidad, es como una ficha individual donde se anotan todos los movimientos contables como caja, cliente, bancos, etc., la cuenta se representa en forma de T y tiene la siguiente estructura:
                .row.justify-content-center
                  .col-lg-8
                    .titulo-sexto.color-acento-contenido
                      h5 Tabla 3.
                      span Ejemplo de Cuenta / Debe
                    img(src='@/assets/curso/tema2/img3.svg', alt='Texto que describa la imagen')

              .col-md-1
              .col-md-5
                figure
                  img(src='@/assets/curso/tema2/img4.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-lg-11.mt-5
            .row
              .col-md-6.mb-4.mb-md-0
                p Cuando en una cuenta se anota una cantidad en él “DEBE”, se entiende que estamos realizando un CARGO. Cuando es en el “HABER”, se dice que estamos haciendo un ABONO, por ejemplo, tenemos en la Caja $1000 y vamos a realizar un abono de $500:
                .row.justify-content-center 
                  .col-lg-8
                    .titulo-sexto.color-acento-contenido
                      h5 Tabla 4.
                      span Ejemplo de Cuenta / Haber
                    img(src='@/assets/curso/tema2/img6.svg', alt='Texto que describa la imagen')                  
              .col-md-5
                figure
                  img(src='@/assets/curso/tema1/img5.png', alt='Texto que describa la imagen')
    p Dependiendo de la naturaleza de la cuenta, las cantidades se colocarán en el DEBE o en el HABER, cada cuenta solo puede ser de 4 tipos: ACTIVO, PASIVO, INGRESOS o GASTOS. Por ejemplo, la cuenta de CAJA que estamos utilizando es una cuenta de ACTIVO, por lo que las entradas en la caja (ingresos de dinero) se sitúan en el DEBE. En el ejemplo se ha realizado un ingreso de $1.000 y una extracción de $500.                  
    .row.mt-5
      .col-lg-7
        .row
          .col-lg-6
            .row
              .col-lg-7.fon1
                p.mt-2.mb-0 <strong> Saldo en cuenta </strong>
              .col-lg-2.tt
                img(src='@/assets/curso/tema2/ico1.svg', alt='Texto que describa la imagen')
    p.mt-4 Se denomina saldo de una cuenta a la diferencia entre el DEBE y el HABER de la misma, existen tres tipos de saldo: DEUDOR, ACREEDOR y saldo NULO. Observe estos tres ejemplos:
    .row.justify-content-center
      .col-lg-10
        TabsA.color-acento-botones.mb-5
          .tarjeta.color-acento-botones--borde.p-4(titulo="Saldo deudor")
            h4 Saldo deudor
            p.p-2 Es donde el “DEBE” es mayor que el “HABER”.
            .row.justify-content-center
              .col-lg-10
                .tabla-b.color-acento-contenido.mb-5
                  .tabla-b__header
                    h4.mb-0 BANCOS
                  table
                    tr.colort
                      th <strong>DEBE</strong>
                      td <strong>HABER</strong>
                    tr.colort2
                      th $          1.000
                      td  $              500
                    tr.colort2
                      th $             300 
                      td 
                    tr.colort2
                      th $          1.300 
                      td $              500 
                    tr.colort2
                      th $             800 
                      td 
          .tarjeta.color-acento-botones--borde.p-4(titulo="Saldo acreedor")
            h4 Saldo acreedor
            p.p-2 Es donde el “HABER” es mayor que el “DEBE”.
            .row.justify-content-center
              .col-lg-10
                .tabla-b.color-acento-contenido.mb-5
                  .tabla-b__header
                    h4.mb-0 BANCOS
                  table
                    tr.colort
                      th <strong>DEBE</strong>
                      td <strong>HABER</strong>
                    tr.colort2
                      th $          1.000
                      td  $              1.500 
                    tr.colort2
                      th 
                      td 
                    tr.colort2
                      th $          1.000 
                      td $              1.500 
                    tr.colort2
                      th 
                      td $                  500
          .tarjeta.color-acento-botones--borde.p-4(titulo="Saldo nulo")
            h4 Saldo nulo
            p.p-2 Se da cuando en ambos saldos los valores son  iguales.
            .row.justify-content-center
              .col-lg-10
                .tabla-b.color-acento-contenido.mb-5
                  .tabla-b__header
                    h4.mb-0 BANCOS
                  table
                    tr.colort
                      th <strong>DEBE</strong>
                      td <strong>HABER</strong>
                    tr.colort2
                      th $          1.000
                      td  $          1.000
                    tr.colort2
                      th 
                      td 
                    tr.colort2
                      th $          1.000 
                      td $              1.000 
                    tr.colort2
                      th $              0
                      td $              0
    p Ahora bien, ¿en qué momento se debe poner una cantidad en DEBE o en HABER? Todo dependerá del tipo de cuenta que sea, observe el siguiente esquema para más claridad:
    .titulo-sexto.color-acento-contenido
      h5 Tabla 5.
      span Ejemplo de tipos de cuentas         
    .row
      .col-lg-6
        .tabla-b.color-acento-contenido.mb-5
          .tabla-b__header
            h4.mb-0 CUENTA X
          table
            tr.colort
              th <strong>DEBE</strong>
              td <strong>HABER</strong>
            tr.colort2
              th Aumentos de activos
              td Disminuciones de pasivos
            tr.colort2
              th Disminuciones de pasivos
              td Aumento de pasivos
            tr.colort2
              th Compras
              td Ingresos 
            tr.colort2
              th Gastos 
              td Ventas

      .col-lg-6.mt-5
        p.mt-5 Es necesario entonces conocer la naturaleza de la cuenta para saber dónde ubicar la cantidad, por ejemplo, la cuenta BANCOS es una cuenta de ACTIVO, así que, si ingresamos dinero, debemos colocarlo en el DEBE, y si sacamos, en el HABER, es así como según el esquema anterior, BANCOS es una cuenta de ACTIVO.                   
    separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2  Clasificación
    p Existen principalmente tres subcampos de contabilidad, como contabilidad de costos, contabilidad de gestión y contabilidad financiera:
    .row.mt-4
      .col-lg-9
        .row
          .col-lg-8
            .row
              .col-lg-7
                .row
                  .col-lg-9
                    .row
                      .col-lg-10.fon1
                        p.mt-2.mb-0 <strong> Contabilidad de costos </strong>
                      .col-lg-2.tt
                        img(src='@/assets/curso/tema2/ico1.svg', alt='Texto que describa la imagen')
              p.mt-4 Es el tipo de contabilidad que se ocupa de mantener los registros, analizar y resumir los costos de un producto de servicio, de esta manera una organización puede acceder fácilmente a la clasificación de los gastos en la contabilidad de costes. 
          .col-lg-4
            img(src='@/assets/curso/tema2/img8.png', alt='Texto que describa la imagen')
        p.mt-4 La contabilidad de costos puede ser vital para cualquier empresa, porque ayuda a los ejecutivos a observar los niveles de costos en diferentes aspectos de la producción y tomar las decisiones necesarias. 
        p Toman la ayuda de algunos elementos prominentes como mano de obra, material y gastos varios para calcular los costos totales, además, los elementos anteriores son costos para una empresa que pueden ser directos o indirectos. La clasificación moderna de las cuentas da paso a varios tipos de costos, como se observa a continuación:
      .col-lg-3(data-aos="fade-up-right")
        img(src='@/assets/curso/tema2/img7.png', alt='Texto que describa la imagen')
    .tarjeta--container.row.mb-5.mt-5(data-aos="zoom-in-up")
      .col-md.tarjeta.color-primario.p-5.cal1
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/tema2/ico11.svg', alt='Texto que describa la imagen')
          
        h5.text-center Costo variable
        p.mb-0 También se conoce como el costo cuantitativamente, generalmente es directamente proporcional a la producción. 
        p Los costos de mano de obra y materiales son los dos costos variables.

      .col-md.tarjeta.color-primario.p-5.cal2
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/tema2/ico12.svg', alt='Texto que describa la imagen')
          
        h5.text-center Costo fijo
        p Son estáticos en contraste con el nivel de producción, como sueldos y salarios.
      .col-md.tarjeta.color-primario.p-5.cal3
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/tema2/ico13.svg', alt='Texto que describa la imagen')
          
        h5.text-center Costo semivariable
        p Es el costo que puede ser variable o fijo dependiendo del elemento. Hay otros dos costos conocidos como costo hundido y costo de oportunidad que están relacionados con el nivel de producción y el costo semivariable.
    .row
      .col-lg-7
        .row
          .col-lg-9
            .row
              .col-lg-8
                .row
                  .col-lg-7.fon1
                    p.mt-2.mb-0 <strong> Contabilidad financiera </strong>
                  .col-lg-2.tt
                    img(src='@/assets/curso/tema2/ico1.svg', alt='Texto que describa la imagen')
        p.mt-4 Se ocupa de las finanzas de la empresa comercial durante un período de tiempo específico, los documentos que se incluyen en este tipo de contabilidad son las facturas de ingresos, los estados de cuenta y los balances. 
        p Los ejecutivos pueden derivar informes relacionados con las transacciones de la empresa a partir de la contabilidad financiera, siguiendo los principios financieros para obtener informes de contabilidad financiera, mejorando la transparencia y facilitando el proceso de elaboración de los informes anuales.
      .col-lg-5(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img.png', alt='Texto que describa la imagen')
    .row.mt-5
      .col-lg-7
        .row
          .col-lg-6
            .row
              .col-lg-7.fon1
                p.mt-2.mb-0 <strong> Contabilidad de gestión </strong>
              .col-lg-2.tt
                img(src='@/assets/curso/tema2/ico1.svg', alt='Texto que describa la imagen')
    img.mt-4(src='@/assets/curso/tema2/imgi.png', alt='Texto que describa la imagen')(data-aos="fade-right")
    p.mt-2 La junta ejecutiva de la organización gestiona completamente la contabilidad de gestión, por eso esta se relaciona con la toma de decisiones organizacionales en diferentes aspectos. Se realiza principalmente sobre la base de los informes sobre contabilidad de costos y contabilidad financiera y otros datos, ocupando un lugar importante en el caso de la clasificación de la contabilidad.


</template>

<script>
export default {
  name: 'Tema2',
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
.tarjeta-flip.color-primario .tarjeta-flip__contenido
  background-color: #B7C8D6
.tarjeta.color-primario *
  color: #12263F
.tarjeta-flip.color-primario .tarjeta-flip__img
  background-color: #2E5F87
.tarjeta-avatar-b__img
  min-width: 13%
  max-width: 13%
.tabla-a thead
  .tabla-a th
    widows: 50%!important
.tabla-b.color-acento-contenido .tabla-b__header, .color-acento-contenido.tabla-c .tabla-b__header
  background-color: #C0FCEF
.tabla-b.color-acento-contenido .tabla-b__header *, .color-acento-contenido.tabla-c .tabla-b__header *
  color: #12263F
.tabs-a.color-acento-botones .tabs-a__tab__selected
  background-color: #00F2BD
.tabs-a.color-acento-botones .tabs-a__tab__selected:before
  background-color: #00F2BD
.tabs-a.color-acento-botones .tabs-a__tab:hover
  background-color: #00F2BD
</style>
