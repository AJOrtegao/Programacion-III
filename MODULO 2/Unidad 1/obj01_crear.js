// manipulacion de objetos
let alumno ={
    nombre: "Juan",
    apellido: "Pérez",
    direccion: 'Av. america',
    telefono: 123456789
}
console.log(alumno); 
// accceder a propiedades de un objeto
console.log('nombre del alumno:',alumno.nombre);
console.log('apellido del alumno:',alumno['apellido']);
//modificar propiedades 
alumno.apellido = "lopez";
alumno['direccion'] = "Av. bolivar";

console.log(alumno);

//incluir nueva propiedad 
alumno.promedio = 9;
console.log(alumno);
//eliminar propiedad
delete alumno.promedio;
console.log(alumno);

alumnoclonado = {...alumno}
alumnoclonado.nombre = "Antonio";
alumnoclonado.apellido = "Apellido";
console.log(alumnoclonado); 

//multiplicar precio unitario * cantidad y sumale iva 
//y asignar el valor subtotal 
itm ={
    ppreciounitario:23,
    cantidad: 5,
    iva: 3.4,
    nombre: "laptop",
    subtotal: 0
}

itm.subtotal = itm.ppreciounitario * itm.cantidad + itm.iva;
console.log(item);
for (let clave in item){
    console.log(clave + ':'+ item[clave]); 
}
//listar las claves o propiedades
console.log(Object.keys(item));

//listar los valores
console.log(Object.values(item));

//mertodo o funcion en un objeto

usuario = {
    nombre: 'luis',
    saludar: function(){
        return 'Hola soy ' + this.nombre;
    }
}
console.log(usuario.saludar()); 

//objeto animado 

categoria={
    nombre: 'electronica',
    productodos: ['Laptop', 'Monitor ', 'Teclado',{cantidad:12, marca:'sony'}],
    descripcion: {
        capacidad: '16hz',
        tamaño: '12pulgadas'
    }
}
console.log(categoria);