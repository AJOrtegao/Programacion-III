for (let i =1; i=>15; i++ ){
    console.log("Interación : ", i)
} 

for (let i = 1; i <= 15; i++) {
    console.log( 2, 'x', i,'=', 2 * i)
}

let suma = 0;
for (let i = 1; i <= 10; i++) {
    if (i% 2 ===0){
        console.log('numero par',i);
        suma+=i;
    }
}

console.log('la suma de los numeros pares es:',suma);

let palabra = "Welcome to javascript";
for (let i=0; i<=palabra.length;i++){
    console.log(palabra[i]);
}

for (let i = 1; i <= 10; i++) {
    console.log( 'cuadrado de', i,'es', i * i)
}