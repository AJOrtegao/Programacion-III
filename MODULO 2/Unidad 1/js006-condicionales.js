console.log("CONDICIONALES");
console.log("if Simple");
temperatura = 35;
if (temperatura > 30){
    console.log("Hace calor");
}
console.log("if else");
usuarioLogueado = true;
if (usuarioLogueado){
    console.log("Bienvenido de nuevo");
} else {
    console.log("Por favor, inicia sesión");
}
console.log("if else if else ");
nota = 9;
if (nota>=9){
    console.log("Excelente");
} else if (nota>=6){
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}
console.log("if anidado ");
edad = 18
tieneLicencia = true;
if (edad>=18){
    if (tieneLicencia){
        console.log("Puede conducir")
    } else {
        console.log("Necesita licencia para conducir")
    }
} else {
    console.log("Es menor de edad");
}

console.log("if con operadores lógicos ");
let esEstudiante = true;
let tieneDescuento = true;
if (esEstudiante && tieneDescuento){
    console.log("Aplica a tarifa reducida");
}
esAdmin = true;
esEditor = false;
if (esAdmin||esEditor){
    console.log("Puede editar contenido");
}