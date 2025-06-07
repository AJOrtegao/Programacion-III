//forma clasica 
function saludar (){
    console.log("Hola desde una funcion");
}
saludar(); // Llamada a la funcion saludar
saludar(); 
saludar(); 

function sumar (){
    console.log("suma 1+2 =",1+2);
}

function restar (){
    console.log("resta 10-2 =",10-2);
}

sumar();
restar();
sumar();
restar();
restar();

//funcion con parametros y retornos

function dividir (a,b){
    return a/b;
}

let resultado = dividir(40,8); 
console.log("Resultado:", resultado); 

//hacer una funcion que se le pase un numero e imprima la tabla de multiplicar de ese numero
// gane un punto extra sandra y damian  
function tablaMultiplicar (num){
    for (let i = 1; i <= 10; i++){
        console.log(num, "*", i, "=", num*i);
    }
}   

tablaMultiplicar(5); 

function tabla (num){
    let i = 1;
    while (i <= 10){
        console.log(i, "*", num,'=',i* num);
        i++;
    }
}
tabla(5);