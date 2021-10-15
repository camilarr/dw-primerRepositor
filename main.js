  
/*..........ACTIVIDAD 1 .................*/
let entrada = prompt("Ingrese su nombre");
let nombre = "camila";
if (entrada == nombre) {
    alert("Hello Camila");
} else {
    alert("Welcome!");
}
var numeroA =1; 
let numeroB = 2;
const NUMEROC = 3;

let resultadoSuma = numeroA + numeroB;
let resultadoResta = numeroB - numeroA ;
let resultadoProducto = numeroB * NUMEROC;




//-------------- ACTIVIDAD 2 --------------//
let entrada2 = prompt("INGRESAR UN  TECLA");
if ((entrada2 == "d") || (entrada2 == "d")) {
    alert("CORRECTO");
} else {
    alert("ERROR");
}

let entrada3 = prompt("INGRESAR UN NUMERO");
if (entrada3 == 1) {
    alert("ELEGISTE smartphones");
}else if (entrada3 == 2) {
    alert("ELEGISTE tablets");
}else if (entrada3 == 3) {
    alert("ELEGISTE Computers");
}else if (entrada3 == 4) {
    alert("ELEGISTE Products");
}
else {
    alert("ERROR");
}

let entrada4 = parseFloat(prompt("INGRESAR UN NUMERO"));
if ((entrada4 >= 0) && (entrada4 <= 100)) {
    alert("PRESUPUESTO BAJO");
} 
else if ((entrada4 >= 101) && (entrada4 <= 3000)) {
    alert("PRESUPUESTO MEDIO");
} else if (entrada4 > 3000) {
    alert("PRESUPUESTO ALTO");
}
else {
    alert("ERROR");
}

let producto1 = prompt('INGRESAR 1er PRODUCTO');
let producto2 = prompt('INGRESAR 2do PRODUCTO');
let producto3 = prompt('INGRESAR 3er PRODUCTO');
let producto4 = prompt('INGRESAR 4to PRODUCTO');

if ((producto1 != "") && (producto2 != "") && (producto3 != "") && (producto4 != "")) {
    let Smartphone = "1) " + producto1 + " " +
        "2) " + producto2 + " " +
        "3) " + producto3 + " " +
        "4) " + producto4;
    console.log(Smartphone);
} else {
    console.log("ERROR: ES NECESARIO CARGAR TODOS LOS PRODUCTOS")}