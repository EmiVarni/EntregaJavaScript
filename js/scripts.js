// Simulador de préstamos

// Filtro de edadSolicitante, si el solicitante es menor de edad no lo deja continuar y vuelve a pedir la edad

let edadSolicitante;
let edadIngresada;

do{
    edadSolicitante = parseInt(prompt("Por favor, ingrese su edad"));
    edadIngresada = edadSolicitante;
    if(isNaN(edadIngresada)){
        alert("Por favor ingrese un valor numerico")
    }
    else if(edadIngresada <18 || edadIngresada >70){
        alert("La edad ingresada es: " + edadIngresada + ", no puede solicitar el prestamo");
    }
}
while(edadIngresada <18 || edadIngresada >70 || isNaN(edadIngresada));

// Si cumple con la edad, pasa a la carga de datos personales

let nombreCompletoSolicitante = prompt("Por favor, ingrese su nombre y apellido");
    console.log("Los datos ingresados son: " + nombreCompletoSolicitante);

let emailSolicitante = prompt("Por favor, ingrese su e-mail");
    console.log("El email ingresado es " + emailSolicitante);

// Calculador del interes del prestamo

let montoSolicitado;
let monto = montoSolicitado

// Verificacion que el monto y plazo ingresados no contengan texto
do{
    montoSolicitado = parseInt(prompt("Por favor, ingrese el monto a solicitar"));
    monto = montoSolicitado;
    if(isNaN(monto)){
        alert("Por favor ingrese un valor numerico")
    }
}
while(isNaN(monto));

let plazoPrestamo;
let plazo;

do{
    plazoPrestamo = parseInt(prompt("Por favor, ingrese el plazo deseado"));
    plazo = plazoPrestamo
    if(isNaN(plazo)){
        alert("Por favor ingrese un valor numerico")
    }
}
while(isNaN(plazo));

// Conversion de la tna a tasa mensual

let tna = 82.60;
let tasaInteresMensual = tna/12/100;

function calculoInteres(monto, plazo, tasaMensual){
    let interes = parseFloat(monto * plazo * tasaMensual);
    return interes;
}

let interes = calculoInteres(montoSolicitado, plazoPrestamo, tasaInteresMensual);
alert("El interés del préstamo es: " + interes);

// Calculo del valor de cuotas mensuales

function valorCuotas(monto, plazo, tasaMensual){
    let cuotas = parseFloat((monto + (monto * plazo * tasaMensual))/plazo);
    return cuotas;
}

let cuotas = valorCuotas(montoSolicitado, plazoPrestamo, tasaInteresMensual);
alert("El valor de las cuotas es: " + cuotas.toFixed(2));

// Calculo del total a devolver

function valorPagare(monto, plazo, tasaMensual){
    let pagare = parseFloat(monto + (monto * plazo * tasaMensual));
    return pagare;
}

let pagare = valorPagare(montoSolicitado, plazoPrestamo, tasaInteresMensual);
alert("El valor del pagare es: " + pagare.toFixed(2));
