let cantidad: number = 19;
let nombre: string = "jOSE ZAMBRANO";
let opcion: boolean = true;
console.log('cantidad', cantidad);
console.log('nombre', nombre);
console.log('opcion', opcion);

let opcional: any = "comodin any";

opcional = 100;

// tipos de datos compuestos 

let equipos: string[] = ["Barcelona", "Real Madrid", "ecuador", "vino tinto","la liga"];
console.log("equipos",  equipos);
let edades: Array<number> = [10, 12, 23, 456]
console.log("edades",  edades);

// tuplas
let persona: [string, number] = ["Pedro", 616161];
console.log("Alumnoa",persona);

//enums
enum Estados {
    PENDIENTE,
    ENVIADO,
    ENTREGADO,
}

let miEstado: Estados = Estados.ENTREGADO;
console.log(miEstado);


//////////////////TRABAJO BIBLIOTECA////////////////
enum EstadoLibro {
    DISPONIBLE,
    PRESTADO,
    EN_REPARACION
}

let libro: [string, number] = ["Don Quijote", 12345];
let catalogoLibros: string[] = ["El Principito", "Cien años de soledad", "1984", "El Hobbit"];
let añosPublicacion: Array<number> = [1943, 1967, 1949, 1937];

let copiasDisponibles: number = 3; 
let titulo: string = "Don Quijote";
let disponible: boolean = true;

let informacionExtra: string | number = "Primera edición";
informacionExtra = 1605; 
informacionExtra = "Edición especial";
let estadoActual: EstadoLibro = EstadoLibro.DISPONIBLE;

console.log('Libro:', libro);
console.log('Catálogo:', catalogoLibros);
console.log('Años de publicación:', añosPublicacion);
console.log('Copias disponibles:', copiasDisponibles);
console.log('Estado:', estadoActual);