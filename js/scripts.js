// Simulador de préstamos

// Filtro de edadSolicitante, si el solicitante es menor de edad no lo deja continuar y vuelve a pedir la edad

let edadSolicitante;
let edadIngresada;

do{
    edadSolicitante = parseInt(prompt("Por favor, ingrese su edad"));
    edadIngresada = edadSolicitante;

    if(edadIngresada <18 || edadIngresada >70){
        alert("La edad ingresada es: " + edadIngresada + ", no puede solicitar el prestamo");
    }
}
while(edadIngresada <18 || edadIngresada >70);

// Si cumple con la edadpasa a la carga de datos personales

let nombreSolicitante = prompt("Por favor, ingrese su nombre");
    console.log("El nombre ingresado es " + nombreSolicitante);

let apellidoSolicitante = prompt("Por favor, ingrese su apellido"); 
    console.log("El apellido ingresado es " + apellidoSolicitante);

let emailSolicitante = prompt("Por favor, ingrese su e-mail");
    console.log("El email ingresado es " + emailSolicitante);

// Calculador del interes del prestamo

let montoSolicitado = parseInt(prompt("Por favor, ingrese el monto a solicitar"));
let plazoPrestamo = parseInt(prompt("Por favor, ingrese el plazo deseado"));
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
    let cuotas = parseFloat((monto + tasaMensual)/plazo);
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
