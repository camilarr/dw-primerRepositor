
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





    //-------------- ACTIVIDAD 3 --------------//
    


   

let ingresarNumero = parseInt(prompt("Ingresar Numero"));
for (let i = 1; i <= 10; i++) {
    let resultado = ingresarNumero * i ;
    alert(ingresarNumero +" X "+ i +" = "+ resultado);
}

let repetir = true;
while(repetir){
    console.log("Al infinito y...¡Más allá!");
}


let entrada6 = prompt("Ingresar un dato");

while(entrada6 != "ESC" ){
    alert("El usuario ingresó "+ entrada);
   
    entrada6 = prompt("Ingresar otro dato");
}
let entrada5 = prompt("Ingresar un nombre");

while(entrada5 != "ESC" ){
   switch (entrada5) {
       case "ana":
            alert("HOLA ANA");
            break;
        case "juan":
            alert("HOLA JUAN");
            break;
       default:
           alert("¿QUIÉN SOS?")
           break;
   }
   entrada5 = prompt("Ingresar un nombre");
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

for (let i= 0; i < 10; i++ ) {
    console.log(i+1)
}
function de1a10() {}
    for (let i= 0; i < 100; i++ ) {
    console.log(i+1)
}



function pedirNombre (){
    let nombre = prompt ("ingrese un nombre")
    console.log("nombre" +nombre +"ingresado")
}

 pedirNombre();
 pedirNombre();

 


//variable local
function sumar(primerNumero, segundoNumero) {
    let resultado2 = primerNumero + segundoNumero;
}
let primerNumero = 20
let segundoNumero = 20
console.log(resultado2 = (primerNumero+segundoNumero));


//constante global

const iva = 0.21; 

function sumariva ( producto){
    return productos * iva}
    let productos = 2000
console.log (sumariva (100))

function calcularIva(precioCosto) {
   return (precioConIva * 0.21)}
   let precioConIva= 2000
   console.log (calcularIva ( precioConIva * 0.21))

 ivaM= iva.toFixed(2);

 alert("El IVA del producto ingresado es: "+ivaM); 
 console.log("El IVA del producto ingresado es: "+ivaM); 
  document.write("<h3> El IVA del producto ingresado es: "+iva+"</h3>");


function SumarIva (precioCosto){
    return (precioCosto + (precioCosto * 0.21));
}
let precioCosto = 10
console.log ( SumarIva (precioCosto + (precioCosto * 0.21)))
 var precioConiva = SumarIva(precioCosto); 
 let precioConIvaM = precioConIva.toFixed(2);
 alert("El precio del producto con IVA incluido es: "+precioConIvaM); 
 console.log("El precio del producto con IVA incluido es: "+precioConIvaM); 
  document.write("<h3> El precio del producto con IVA incluido es: "+precioConIvaM+"</h3>")

 function Calculaprecioventa(precioConIva) { 
  return (precioConIva * 1.25); }
console.log (Calculaprecioventa (precioConIva * 1.25) )
 var precioVenta = Calculaprecioventa(precioConIva); 
 let precioVentaM= precioVenta.toFixed(2);
 alert("El precio Sugerido de venta del producto es: "+precioVentaM); 
 console.log("El precio Sugerido de venta del producto es: "+precioVentaM); 
  document.write("<h3> El precio Sugerido de venta del producto es: "+precioVentaM+"</h3>")


//-------------- ACTIVIDAD 4 (complementario) --------------//

function calculaDescuento(numero1,numero2){
    return (numero1-(numero1*numero2))
}
let numero1 = parseFloat ( prompt ("ingresa monto"))
let numero2=parseFloat ( prompt ("ingresa descuento"))
document.write("<h3> El precio del producto con descuento es: "+(numero1-(numero1*numero2))+"</h3>")
alert("su producto con descuento en efectivo cuesta $"+ (numero1-(numero1*numero2)))

//iva 
const iva   = x => x * 0.21;
const suma  = (a,b) => a + b;
const resta = (a,b) => a - b;
let precioProducto  = parseFloat ( prompt ("ingresa monto")); 
let precioDescuento = parseFloat ( prompt ("ingresa descuento")); 
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), precioDescuento); 
console.log(nuevoPrecio);
alert("su producto pagando con tarjeta cuesta $"+ nuevoPrecio)



//-------------- ACTIVIDAD 5 --------------//

class producto{
    comprador(nombre,formaPago,tarjeta,telefono){
        this.nombre = nombre;
        this.formaPago = parseFloat(formaDePago);
        this.tarjeta = tarjeta;
        this.telefono = telefono;
    }

    transferirDinero(valor){
        if((this.presupuesto > 0)&&(valor < this.presupuesto)){
            this.presupuesto -= valor;
            return valor
        }else{
            return 0;
        }
    }
}

const productoS = new producto("smartphone", 2000, true, "1234560");
const productoT = new producto("tableta", "1000", false, "21234560");
const productoC = new producto("computadora", "50", false, "231234560");
for (let index = 0; index < 5; index++) {
    let entrada = parseFloat(prompt("INGRESAR MONTO"));
    if (producto1.transferirDinero(entrada)){
        alert("EL PRODUCTO " + producto1.nombre+ " PAGAR "+entrada);
    }
    if (producto2.transferirDinero(entrada)){
        alert("EL PRODUCTO " + producto2.nombre+ " PAGAR "+entrada);
    }
    if (producto3.transferirDinero(entrada)){
        alert("EL PRODUCTO " + producto3.nombre+ " PAGAR "+entrada);
    }
}

const productoS = new producto("smartphone", 2000, true, "1234560");
const productoT = new producto("tableta",1000, false, "21234560");
const productoC = new producto("computadora", 50, false, "231234560");
for (let index = 0; index < 5; index++) {
    let entrada = parseFloat(prompt("INGRESAR MONTO"));
    if (producto1.transferirDinero(entrada)){
        alert("EL PRODUCTO " + producto1.nombre+ " PAGAR "+entrada);
    }
    if (producto2.transferirDinero(entrada)){
        alert("EL PRODUCTO " + producto2.nombre+ " PAGAR "+entrada);
    }
    if (producto3.transferirDinero(entrada)){
        alert("EL PRODUCTO " + producto3.nombre+ " PAGAR "+entrada);
    }
}  transferirDinero(valor){
        if((this.presupuesto > 0)&&(valor < this.presupuesto)){
            this.presupuesto == valor;
            return valor
        }else{
            return 0;
        }
    }






const prototipoCarrito = {
  agregarProducto: function(producto){
    if(!this.productos){
     this.productos = [producto]
    } else {
     this.productos.push(producto);
    }
  },
  obtenerPrecioTotal: function(){
    return this.productos.reduce((total, p) => total + p.precio, 0);
  }
}const carrito = Object.create(prototipoCarrito);
carrito.agregarProducto({nombre: 'naranja', precio: 1.25});
carrito.agregarProducto({nombre: 'limon', precio: 1.75});

console.log(carrito.obtenerPrecioTotal());
//3


const prototipoCarrito = {
  productos:[],
  agregarProducto: function(producto){
      this.productos.push(producto);
  },
  obtenerPrecioTotal: function(){}
}

const carrito1 = Object.create(prototipoCarrito);
carrito1.agregarProducto({nombre: 'naranja', precio: 1.25});
carrito1.agregarProducto({nombre: 'limon', precio: 1.75});
console.log(carrito1.obtenerPrecioTotal());
//3

const carrito2 = Object.create(prototipoCarrito);
console.log(carrito2.obtenerPrecioTotal());
//3

class Carrito{
  constructor(){
    this.productos = [];
  }
  
  agregarProducto(producto){
      this.productos.push(producto);
  }
  
  obtenerPrecioTotal(){
    return this.productos.reduce((total, p) => total + p.precio, 0);
  }
}

const carrito = new Carrito();
cart.agregarProducto({nombre: 'naranja', precio: 1.25});
cart.agregarProducto({nombre: 'limon', precio: 1.75});
console.log(carrito.obtenerPrecioTotal());
//3

const carrito2 = new Carrito();
console.log(carrito2.obtenerPrecioTotal());
//0
console.log(carrito.productos);
//[{nombre: "naranja", precio: 1.25}
// {nombre: "limon", precio: 1.75}]


function Carrito() {
  const productos = [];
  
  function agregarProducto(producto){
    productos.push(producto);
  }
  
  function obtenerPrecioTotal(){
    return productos.reduce((total, p) => total + p.precio, 0);
  }
  
  return {
   agregarProducto,
   obtenerPrecioTotal
  }
}

const carrito = Carrito();
cart.agregarProducto({nombre: 'naranja', precio: 1.25});
cart.agregarProducto({nombre: 'limon', precio: 1.75});
console.log(carrito.obtenerPrecioTotal());
//3




Crear un Array

let frutas = ["Manzana", "Banana"]

console.log(frutas.length)
// 2

Acceder a un elemento de Array mediante su índice

let primero = frutas[0]
// Manzana

let ultimo = frutas[frutas.length - 1]
// Banana

Recorrer un Array

frutas.forEach(function(elemento, indice, array) {
    console.log(elemento, indice);
})
// Manzana 0
// Banana 1
Copy to Clipboard
Añadir un elemento al final de un Array

let nuevaLongitud = frutas.push('Naranja') // Añade "Naranja" al final
// ["Manzana", "Banana", "Naranja"]
Copy to Clipboard
Eliminar el último elemento de un Array

let ultimo = frutas.pop() // Elimina "Naranja" del final
// ["Manzana", "Banana"]
Copy to Clipboard
Añadir un elemento al principio de un Array

let nuevaLongitud = frutas.unshift('Fresa') // Añade "Fresa" al inicio
// ["Fresa" ,"Manzana", "Banana"]
Copy to Clipboard
Eliminar el primer elemento de un Array

let primero = frutas.shift() // Elimina "Fresa" del inicio
// ["Manzana", "Banana"]
Copy to Clipboard
Encontrar el índice de un elemento del Array

frutas.push('Fresa')
// ["Manzana", "Banana", "Fresa"]

let pos = frutas.indexOf('Banana') // (pos) es la posición para abreviar
// 1

let arr = ['este es el primer elemento', 'este es el segundo elemento', 'este es el último elemento']
console.log(arr[0])              // escribe en consola 'este es el primer elemento'
console.log(arr[1])              // escribe en consola 'este es el segundo elemento'
console.log(arr[arr.length - 1]) // escribe en consola 'este es el último elemento'