//funciones con parametros por defecto
console.log("Funciones con parametros por defecto");
function saludar(nombre = "invitado"){
    console.log("bienvenido ", nombre);
}

saludar("pedra fulano");
saludar();

function multiplicar(num1 = 5, num2 = 10){
    console.log("multiplicacion de ", num1, " * ", num2, " = ", num1 * num2);
}

multiplicar(3, 4);
multiplicar();

function areatriangulo(base = 5, altura = 10){
    console.log("base:", base, "*", altura, "=", base * altura / 2);
}

areatriangulo(3,6);
areatriangulo();

// calcular el promedio de 5 notas
notas =[8,5,8,7,9]
function promedio(notas = [0,0,0,0,0]){
    let suma = 0;
    for (let i = 0; i < notas.length; i++){
        suma += notas[i];
    }
    return suma / notas.length;
}
console.log("promedio de notas:", promedio(notas));
//2da forma
notas =[8,5,8,7,9]
function promedio(arreglo){
    let suma = 0;
    for (let num of arreglo){
        suma += num;
    }
    return suma / arreglo.length;
}
console.log("promedio de notas:", promedio(notas));