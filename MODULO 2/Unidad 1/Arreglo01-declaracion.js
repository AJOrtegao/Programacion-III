console.log("declaracion de arreglos");
let numeros = [1, 2, 3, 4, 5];
for(let num of numeros){
    console.log("numero:", num);
}

let vacio = new Array();
for (let v of vacio){
    console.log("elementos:", v);
}
console.log(vacio);

// Acceder a un elemento 
console.log(" elemento 0:", numeros[0]);
console.log("elemento 1:", numeros[1]);
console.log("elemento 2 :", numeros[2]);

//modificacion de elementos de arreglo 
console.log("Array de numeros", numeros);
numeros[0] = 8888;
numeros[2] = 98;
numeros[5] = 1000;
console.log("Array de numeros modificados ", numeros);

// Agregar elementos a un array
// Agregar un elemento al final del array
numeros.push(50);
// Agregar un elemento al inicio del array
numeros.unshift(70);
console.log("Array  con elementos incluidos", numeros);

//borrar elementos de un array
numeros.pop(); 
//eliminar el primer elemento
numeros.shift();
console.log("Array con elementos eliminados:", numeros);