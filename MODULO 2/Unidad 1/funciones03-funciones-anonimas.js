//funcion anonima
console.log(" funcion anonima");
setTimeout(function () {
    console.log("HOLA desde funcion setTime");
}, 3000); // 3 segundos

let  mensaje = function () {
    return "mensaje desde funcion anonima";

}
console.log(mensaje()); //llamada a la funcion anonima