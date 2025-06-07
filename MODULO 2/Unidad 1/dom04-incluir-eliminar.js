let parrafo =null;
document.getElementById("crear")
.addEventListener("click", ()=> {
    parrafo = document.createElement("p");
    parrafo.textContent = "parrafo dinamico";
    document.getElementById("contenedor")
    .appendChild(parrafo); 
});
document.getElementById("eliminar")
.addEventListener("click", ()=> {
    if(parrafo ) parrafo.remove();
});

let PRODUCTO =null;
document.getElementById("crear")
.addEventListener("click", ()=> {
    PRODUCTO = document.createElement("p");
    PRODUCTO.textContent = "PRODUCTO DINAM";
    document.getElementById("contenedor")
    .appendChild(PRODUCTO); 
});
document.getElementById("eliminar")
.addEventListener("click", ()=> {
    if(PRODUCTO ) PRODUCTO.remove();
});