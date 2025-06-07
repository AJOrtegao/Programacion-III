const persona ={
    nombre : 'Pedro',
    apellido: 'Perez',
    edad: 10 ,
    direccion: 'ave',
    telefono: '0655454'

}
console.log("nombre:",persona['nombre']);
console.log("apellido:",persona['apellido']);

console.log('ciclo for-in');
for (const clave in persona){
    console.log(clave,':',persona [clave])
}

const producto ={
    nombre: 'laptop',
    precio: 1000,
    descripcion: 'i7 13va generacion 500gb ssd 32GbRAM'
}

for (const clave in producto){
    console.log(clave,':',producto[clave])
}