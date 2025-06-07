var empleado = {
    nombre: "Bot",
    apellido: "Marley"
};
console.log('Empleado:', empleado);
function login(credencial) {
    console.log("Bienvenido:", credencial.usuario); // ← CORREGIDO "Biemvenido"
}
var miUsuario = {
    clave: "123",
    usuario: "Jesus"
};
login(miUsuario);
// FIGURAS Y CÁLCULO DE ÁREA
var TipoFigura;
(function (TipoFigura) {
    TipoFigura["CUADRADO"] = "cuadrado";
    TipoFigura["RECTANGULO"] = "rectangulo";
})(TipoFigura || (TipoFigura = {}));
function calcularArea(figura) {
    return figura.tipo === TipoFigura.CUADRADO
        ? figura.base * figura.base
        : figura.base * figura.altura;
}
var cuadrado = {
    base: 5,
    altura: 5,
    tipo: TipoFigura.CUADRADO
};
var rectangulo = {
    base: 4,
    altura: 6,
    tipo: TipoFigura.RECTANGULO
};
console.log("Área del cuadrado:", calcularArea(cuadrado));
console.log("Área del rectángulo:", calcularArea(rectangulo));
var libro1 = {
    titulo: "Don Quijote",
    autor: "Miguel de Cervantes",
    isbn: "123-456"
};
var usuario1 = {
    codigo: "U001",
    nombre: "María López"
};
var prestamo1 = {
    libro: libro1,
    usuario: usuario1,
    fechaPrestamo: "2025-05-07"
};
function registrarPrestamo(prestamo) {
    console.log("Préstamo registrado:");
    console.log("Libro: ".concat(prestamo.libro.titulo));
    console.log("Usuario: ".concat(prestamo.usuario.nombre));
    console.log("Fecha: ".concat(prestamo.fechaPrestamo));
}
registrarPrestamo(prestamo1);