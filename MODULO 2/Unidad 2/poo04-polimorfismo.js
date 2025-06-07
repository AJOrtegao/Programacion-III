//sobreescritura de métodos
class Figura {
    calcularArea(){
        return 0;
    }
}
class Circulo extends Figura{
    _radio;
    constructor(radio){
        super();
        this._radio=radio;
    }
    calcularArea(){
        return Math.PI * this._radio**2;
    }
}

class Rectangulo extends Figura{
    _ancho;
    _alto;
    constructor(ancho,alto){
        super();
        this._ancho=ancho;
        this._alto=alto;
    }
    calcularArea(){
        return this._ancho * this._alto;
    }
}
 //clacular el area de un cuadrado
class Cuadrado extends Figura{
    _lado;
    constructor(lado){
        super();
        this._lado=lado;
    }
    calcularArea(){
        return this._lado * this._lado; 
    }
}
const miCuadrado=new Cuadrado(4);
console.log(miCuadrado.calcularArea());


const miCirculo=new Circulo(5);
console.log(miCirculo.calcularArea());
const miRectangulo=new Rectangulo(4,6);
console.log(miRectangulo.calcularArea());
