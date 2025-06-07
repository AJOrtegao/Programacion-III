console.log("TIPOS DE VARIABLES ");
console.log("1. Variables Primitivas");
let mensaje = 'Hola como esás?'; // string
let edad = 10; // number
let activo = true; // boolean
let vacio = null; // null
let x; // undefined

console.log("Mensaje ", mensaje, "tipo de variable: ", typeof mensaje);
console.log("Edad ", edad, "tipo de variable: ", typeof edad);
console.log("activo ", activo, "tipo de variable: ", typeof activo);
console.log("vacio ", vacio, "tipo de variable: ", typeof vacio);
console.log("x ", x, "tipo de variable: ", typeof x);
console.log("2. Variables No Primitivas");
const persona = {
    nombre: "Francisco",
    apellido: "Higuera"
}
console.log("Apellido ", persona.apellido, "tipo de variable: ", typeof persona);
persona.apellido="Gonzalez";
console.log("Apellido ", persona.apellido, "tipo de variable: ", typeof persona);

const frutas = ["peras", "manzana", "naranja", "piña"];
console.log("Fruetas ", frutas, "tipo de variable: ", typeof frutas);
const hoy = new Date();
console.log("Fecha actual ", hoy, "tipo de variable: ", typeof hoy);
console.log("Expresiones regulares");
const regex =/[a-z]+/;
console.log(regex.test("9999"));

console.log("CONVERSIONES");
a = "10";
b = 5;
multiplicacion = a * b;
console.log("a  ", a, "tipo de variable: ", typeof a);
console.log("b  ", b, "tipo de variable: ", typeof b);
console.log("Resultado multiplicación  ", multiplicacion, "tipo de variable: ", typeof multiplicacion);