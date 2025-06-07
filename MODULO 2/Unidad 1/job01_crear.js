/multiplicar precio unitario por cantidad y sumarle Iva y asignar el valor subtotal/

Item = { 
    preciounitario: 23,
    cantidad: 3,
    iva: 3.4,
    nombre: 'Laptop',
    subtotal: 0
}	

item.subtotal = (item.precioUnitario * item.cantidad) + item.iva;

console.log("Subtotal:", item.subtotal);



// run with `node server.mjs`