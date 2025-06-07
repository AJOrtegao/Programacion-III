var cantidad = 19;
var nombre = "jOSE ZAMBRANO";
var opcion = true;
console.log('cantidad', cantidad);
console.log('nombre', nombre);
console.log('opcion', opcion);
var opcional = "comodin any";
opcional = 100;
// tipos de datos compuestos 
var equipos = ["Barcelona", "Real Madrid", "ecuador", "vino tinto", "la liga"];
console.log("equipos", equipos);
var edades = [10, 12, 23, 456];
console.log("edades", edades);
// tuplas
var persona = ["Pedro", 616161];
console.log("Alumnoa", persona);
//enums
var Estados;
(function (Estados) {
    Estados[Estados["PENDIENTE"] = 0] = "PENDIENTE";
    Estados[Estados["ENVIADO"] = 1] = "ENVIADO";
    Estados[Estados["ENTREGADO"] = 2] = "ENTREGADO";
})(Estados || (Estados = {}));
var miEstado = Estados.ENTREGADO;
console.log(miEstado);



//TRABAJO 
var EstadoLibro;
(function (EstadoLibro) {
    EstadoLibro[EstadoLibro["DISPONIBLE"] = 0] = "DISPONIBLE";
    EstadoLibro[EstadoLibro["PRESTADO"] = 1] = "PRESTADO";
    EstadoLibro[EstadoLibro["EN_REPARACION"] = 2] = "EN_REPARACION";
})(EstadoLibro || (EstadoLibro = {}));
var libro = ["Don Quijote", 12345];
var catalogoLibros = ["El Principito", "Cien años de soledad", "1984", "El Hobbit"];
var añosPublicacion = [1943, 1967, 1949, 1937];
var copiasDisponibles = 3;
var titulo = "Don Quijote";
var disponible = true;
var informacionExtra = "Primera edición";
informacionExtra = 1605;
var estadoActual = EstadoLibro.DISPONIBLE;
console.log('Libro:', libro);
console.log('Catálogo:', catalogoLibros);
console.log('Años de publicación:', añosPublicacion);
console.log('Copias disponibles:', copiasDisponibles);
console.log('Estado:', estadoActual);