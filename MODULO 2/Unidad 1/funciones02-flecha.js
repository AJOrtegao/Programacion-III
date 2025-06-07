// funciones flechas

const saludar = ()=> {
    console.log("Hola desde Arrow Function");
}
saludar();

const cuadrado1 = (num)=> {
    console.log("cuadrado de", 6 ,"igual a", num*num);
}
cuadrado1(6);

//Retorno directo
const cuadrado = x => x * x;
console.log("5x5=", cuadrado(5));

//imput y alert
const cuadrado2 = (num) => {
    alert("Cuadrado de " + num + " es igual a " + (num * num));
}

let entrada = prompt("Introduce un número:");
let numero = Number(entrada);

cuadrado2(numero);
