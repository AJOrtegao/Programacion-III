// Función básica
function saludar(nombre) {
    return "Hola ".concat(nombre);
}
console.log(saludar("Betty Marmol"));
// Parámetros opcionales
function obtenerApellido(apellido) {
    return "Mi apellido es: ".concat(apellido !== null && apellido !== void 0 ? apellido : "invitado");
}
console.log(obtenerApellido("Picapiedra"));
console.log(obtenerApellido());
// Parámetros por defecto
function obtenerEdad(edad) {
    if (edad === void 0) { edad = 18; }
    return "Mi edad es: ".concat(edad);
}
console.log(obtenerEdad(25));
console.log(obtenerEdad());
// Función de flecha
var sumar = function (a, b) {
    return a + b;
};
console.log("La suma es: ", sumar(5, 10));
// Función que no retorna nada (void)
function mostrarInformacion(informacion) {
    console.log(informacion);
}
mostrarInformacion("Suceso en norte de Quito");
// Tipar funciones como variables
var operacion;
operacion = function (a, b) {
    return a + b;
};
console.log("Resultado suma: ", operacion(5, 10));
// TRABAJO BIBLIOTECA
function buscarLibro(titulo) {
    return "Buscando el libro: ".concat(titulo);
}
console.log(buscarLibro("Don Quijote"));
function prestarLibro(titulo, usuario) {
    return "Libro ".concat(titulo, " prestado a ").concat(usuario !== null && usuario !== void 0 ? usuario : "usuario anónimo");
}
console.log(prestarLibro("El Principito", "Juan"));
console.log(prestarLibro("Cien años de soledad"));
function calcularFechaDevolucion(dias) {
    if (dias === void 0) { dias = 7; }
    return "Fecha de devoluci\u00F3n en ".concat(dias, " d\u00EDas");
}
console.log(calcularFechaDevolucion(14));
console.log(calcularFechaDevolucion());
var calcularMulta = function (diasAtraso, costoPorDia) {
    return diasAtraso * costoPorDia;
};
console.log("Multa a pagar: $", calcularMulta(5, 0.50));
function registrarEvento(evento) {
    console.log("Registro: ".concat(evento));
}
registrarEvento("Nuevo préstamo realizado");
var verificarDisponibilidad;
verificarDisponibilidad = function (titulo, copias) {
    return copias > 0;
};
console.log("¿Está disponible?:", verificarDisponibilidad("El Principito", 3));