let i; 
while (1<=2){
    console.log ("interacion while:", +i)
    i++;
}

let cont =1;
while (cont<=10) {
    console.log(3,"x",cont,"=", 3*cont);
    cont++;
}while (cont<=10);

let mult =1;
console.log ("Do...while");
do {
    console.log(5,"x",mult,"=", 3*mult);
    mult++;
}while (mult<=10);


let n =1;
do {
    console.log("n",n);
    n--;
}while (n>6);

let animales =['perro', 'gato','leon','tigre','aguila','gallina','pato','culebra', 'elefante', 'raton']
let animal =0;
do {
    console.log("Animal",animal, 'es',animales[animal]);
    animal++;
}while (animal<=9);