console.log("recorrer arreglos");
let numeros = [ 5, 6, 7, 8, 9, 10];
for(let num of numeros){
    console.log("numero:", num);
}

let ciudades = ["quito", "guayaquil", "Caracas", "Maracaibo", "Tunbaco"];
for(let i=0; i < ciudades.length; i++){
    console.log("ciudad:", ciudades[i]);
}

let colores = ["azul","amallio", "verde", "rojo"];
colores.forEach(function(valor, indice){
    console.log("color:", indice, ":", valor);
}
)