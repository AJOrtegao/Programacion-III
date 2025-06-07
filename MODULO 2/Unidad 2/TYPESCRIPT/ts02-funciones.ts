// Función básica
function saludar(nombre: string): string {
    return `Hola ${nombre}`;
}
console.log(saludar("Betty Marmol")); 

// Parámetros opcionales
function obtenerApellido(apellido?: string): string {
    return `Mi apellido es: ${apellido ?? "invitado"}`;
}
console.log(obtenerApellido("Picapiedra"));
console.log(obtenerApellido()); 

// Parámetros por defecto
function obtenerEdad(edad: number = 18): string {
    return `Mi edad es: ${edad}`;
}
console.log(obtenerEdad(25));
console.log(obtenerEdad());

// Función de flecha
const sumar = (a: number, b: number): number => {
    return a + b;
}
console.log("La suma es: ", sumar(5, 10));

// Función que no retorna nada (void)
function mostrarInformacion(informacion: string): void {
    console.log(informacion);
}
mostrarInformacion("Suceso en norte de Quito");

// Tipar funciones como variables
let operacion: (x: number, y: number) => number;
operacion = function(a, b) {
    return a + b;
}
console.log("Resultado suma: ", operacion(5, 10));

////////////// TRABAJO BIBLIOTECA /////////
function buscarLibro(titulo: string): string {
    return `Buscando el libro: ${titulo}`;
}
console.log(buscarLibro("Don Quijote"));


function prestarLibro(titulo: string, usuario?: string): string {
    return `Libro ${titulo} prestado a ${usuario ?? "usuario anónimo"}`;
}
console.log(prestarLibro("El Principito", "Juan"));
console.log(prestarLibro("Cien años de soledad"));


function calcularFechaDevolucion(dias: number = 7): string {
    return `Fecha de devolución en ${dias} días`;
}
console.log(calcularFechaDevolucion(14));
console.log(calcularFechaDevolucion());


const calcularMulta = (diasAtraso: number, costoPorDia: number): number => {
    return diasAtraso * costoPorDia;
}
console.log("Multa a pagar: $", calcularMulta(5, 0.50));


function registrarEvento(evento: string): void {
    console.log(`Registro: ${evento}`);
}
registrarEvento("Nuevo préstamo realizado");


let verificarDisponibilidad: (titulo: string, copias: number) => boolean;
verificarDisponibilidad = function(titulo, copias) {
    return copias > 0;
}
console.log("¿Está disponible?:", verificarDisponibilidad("El Principito", 3));