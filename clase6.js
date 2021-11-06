//-------------- ACTIVIDAD 1 --------------//
function pedirNombre (){
    let entrada = prompt ("ingrese un nombre")
    console.log("nombre" +entrada +"ingresado")

let nombrel = "camila";
if (entrada == nombrel) {
    alert("Hello Camila");
} 

else {
     alert("Welcome " + entrada);
}}
 pedirNombre();


 function elegirProducto (){
 let producto6 = prompt("Ahora que ya ingresaste, podés elegir: Smartphone,Tablet o Computer");
let precioTablet = 1000
let precioSmartphone = 2000
let precioComputer = 3000
var Tablet = Tablet
if (producto6 == "tablet") {
     alert("El precio es de $" + precioTablet)}
var Smartphone = Smartphone   
if (producto6 == "Smartphone") {
     alert("El precio es de $" + precioSmartphone)}
var Computer = Computer  
   if (producto6 == "computer") {
     alert("El precio es de $" + precioComputer)} 
     else {
    "Ingresá un valor válido"
}}
elegirProducto()

function suma (numero1,numero2)
 { console.log (numero1+ numero2)}
 suma ( 5,10)


 
 function suma ( numeroS , numero2)
 { return  numeroS+ numero2}
 let numeroS = parseFloat ( prompt ("ingresa un numero")) 
 let numero2S = parseFloat ( prompt ("ingresa un numero"))
let resultado = suma ( numeroS,numero2S)
console.log(resultado)


function precio_descuento (numero3, numero4){
    return (numero3 - (numero3 * numero4 )) }
 let numero3 = parseFloat (prompt("ingrese monto"))
 let numero4 = 0.10
 alert ( "su producto con descuento cuesta $"+ (numero3 - (numero3*numero4)))

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
const iva1   = x => x * 0.21;
const suma1  = (a,b) => a + b;
const resta = (a,b) => a - b;
let precioProducto  = parseFloat ( prompt ("ingresa monto")); 
let precioDescuento = parseFloat ( prompt ("ingresa descuento")); 
let nuevoPrecio = resta(suma(precioProducto, iva1(precioProducto)), precioDescuento); 
console.log(nuevoPrecio);
alert("su producto pagando con tarjeta cuesta $"+ nuevoPrecio);


//-------------- ACTIVIDAD 5 --------------//
const personaPago1 ={
 nombrePago : "camila",
 apellido: "rodriguez", 
formaPago : "tarjeta", 
 tarjeta : 12335465, 
 telefono : 1169154712, }
 console.log (personaPago1)
 for (let atributo in personaPago1){
    console.log (atributo)
    console.log (personaPago1[atributo])
 }
personaPago1.tarjeta= 3213165
console.log(personaPago1.tarjeta)

 let personaPago2 ={
 nombrePago : "malena",
apellido: "rodriguez", 
formaPago : "tarjeta", 
 tarjeta : 66654654, 
 telefono : 1167280301, }
 console.log (personaPago2)
 for (let atributo in personaPago2){
    console.log (atributo)
    console.log (personaPago2[atributo])
 }


function Persona(nombre,apellido,formaPago,edad,tarjeta,telefono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.formaPago = formaPago;
        this.tarjeta = tarjeta;
        this.telefono = telefono;
    }
const persona1 = new Persona ("camila","rodriguez",20, "tarjeta", 12335465, 1169154712,)
const persona2 = new Persona ("malena","rodriguez",26, "tarjeta",  66654654, 1167280301,)


//-------------- ACTIVIDAD 6 --------------//
  class Persona1 {
    constructor(nombre,apellido,formaPago,edad,tarjeta,telefono){
        this.nombre = nombre;
        this.apellido=apellido;
        this.edad = edad;
        this.formaPago = formaPago;
        this.tarjeta = tarjeta;
        this.telefono = telefono;
    }
  

mostrsrNombreCompleto(){
    console.log('$(this.nombrePago this.apellido)')}
}

let arrayProductos = [ persona1]
console.log(arrayProductos[3])
for (let i =0; i < 4; i ++){
    console.log(arrayProductos[i])
}
arrayProductos.push(persona1)
console.log(arrayProductos)

const arrayProductos2 = [persona1,"gente",10]
const arrayProductos3 = arrayProductos.concat(arrayProductos2)
console.log (arrayProductos3.join("*"))
let arrayProductos4 = []
console.log(arrayProductos4.slice(0,1).concat(arrayProductos4.slice(2,4)))

const persona3 = new Persona("cynthia","rodriguez", 20, "tarjeta", 12132165, 132165416,)
const persona4= new Persona("marta","suarez",40, "tarjeta", 1456455, 145645642,)
const persona5=new Persona("jose","rolon",18, "tarjeta", 156464564, 45645645,)
const persona6=new Persona ("ezequiel",33,"martinez", "tarjeta", 54645645, 45645645,)
const personas = [persona3,persona4,persona5,persona6]
console.log(personas)

for (indice in personas){
    console.log(indice)
    console.log(personas[indice])
}

for(let persona of personas){
    console.log(persona)
    for(atributo in persona){
    console.log(personas.edad)
}}

console.log (typeof personas)
console.log(personas.find(persona=>persona.edad > 35))

console.log (typeof personas)
let nombreBuscar = prompt ("Producto a buscar")
let personaEncontrada = personas.find(persona=>persona.nombre === nombreBuscar)
if(personaEncontrada === undefined){
    console.log ( "persona no encontrada")
} else {
    console.log('el producto que buscas existe y su precio es $(personaEncontrada.apellido')
}
console.log (personas.filter(persona=>persona.edad < 20))
console.log (personas.map(personas => persona.edad))