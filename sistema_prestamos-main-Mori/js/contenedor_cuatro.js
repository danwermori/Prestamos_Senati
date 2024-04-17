window.addEventListener('load', function(){
    let btnCalculadoraPrestamos = document.getElementById("btnCalcular");
    btnCalculadoraPrestamos.addEventListener("click", function(){
    
    let varNombre = document.getElementById("pantalla").value;
    let datosPersona = varNombre.split(" ");
    console.log(datosPersona);
    let datoPersonaNombre = datosPersona[0];
    let datoPersonaApellido = datosPersona[1];


    let varMonto = document.getElementById("pantalla2").value;

    let varInteres = document.getElementById("interes").value;

    const interes = varInteres/100;
    const dias = 24;
    let ganancia = varMonto * interes
    let pagoFinal = parseFloat(varMonto) + parseFloat(ganancia)
    let pagoDiario = pagoFinal/dias

    console.log("NOMBRE: " +varNombre)
    console.log("Dinero prestado: " +varMonto)
    console.log("Interes: " +interes)
    console.log("Días: " +dias)
    console.log("Monto x Interes: " +ganancia)
    console.log("Pago final: " +pagoFinal)
    console.log("Pago diario: " +pagoDiario)

    let cajaResultado = document.getElementById("cajaResultado");
    cajaResultado.innerHTML = ` <td>${datoPersonaNombre}</td>
                                <td>${datoPersonaApellido}</td>
                                <td>${varMonto}</td>
                                <td>${varInteres}%</td>
                                <td>${pagoDiario}</td>
                                <td>${dias}</td>
                                <td>${pagoFinal}</td>`
    });
});