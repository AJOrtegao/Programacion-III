// INTERFACE PERSONA
interface Persona {
    nombre: string;
    apellido: string;
}

let empleado: Persona = {
    nombre: "Bot",
    apellido: "Marley"
};

console.log('Empleado:', empleado);

// INTERFACE CREDENCIALES Y LOGIN
interface Credenciales {
    clave: string;
    usuario: string;
}

function login(credencial: Credenciales): void {
    console.log("Bienvenido:", credencial.usuario); // ← CORREGIDO "Biemvenido"
}

let miUsuario: Credenciales = {
    clave: "123",
    usuario: "Jesus"
};

login(miUsuario);

// FIGURAS Y CÁLCULO DE ÁREA
enum TipoFigura {
    CUADRADO = "cuadrado",
    RECTANGULO = "rectangulo"
}

interface Figura {
    base: number;
    altura: number;
    tipo: TipoFigura;
}

function calcularArea(figura: Figura): number {
    return figura.tipo === TipoFigura.CUADRADO 
        ? figura.base * figura.base 
        : figura.base * figura.altura;
}

let cuadrado: Figura = {
    base: 5,
    altura: 5,
    tipo: TipoFigura.CUADRADO
};

let rectangulo: Figura = {
    base: 4,
    altura: 6,
    tipo: TipoFigura.RECTANGULO
};

console.log("Área del cuadrado:", calcularArea(cuadrado));      
console.log("Área del rectángulo:", calcularArea(rectangulo));  

// TRABAJO BIBLIOTECA
interface Libro {
    titulo: string;
    autor: string;
    isbn: string;
}

interface Usuario {
    codigo: string;
    nombre: string;
}

interface Prestamo {
    libro: Libro;
    usuario: Usuario;
    fechaPrestamo: string;
}

let libro1: Libro = {
    titulo: "Don Quijote",
    autor: "Miguel de Cervantes",
    isbn: "123-456"
};

let usuario1: Usuario = {
    codigo: "U001",
    nombre: "María López"
};

let prestamo1: Prestamo = {
    libro: libro1,
    usuario: usuario1,
    fechaPrestamo: "2025-05-07"
};

function registrarPrestamo(prestamo: Prestamo): void {
    console.log("Préstamo registrado:");
    console.log(`Libro: ${prestamo.libro.titulo}`);
    console.log(`Usuario: ${prestamo.usuario.nombre}`);
    console.log(`Fecha: ${prestamo.fechaPrestamo}`);
}

registrarPrestamo(prestamo1);