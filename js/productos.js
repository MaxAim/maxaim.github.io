function Producto(nombre, precio, modelo, tipo, numero){
	this.nombre = nombre;
	this.precio = precio;
	this.modelo = modelo;
	this.numero = numero;
	this.tipo = tipo;
}

var kimetsu = new Producto("Kimetsu movie book", 1000, "Especial", "Libro", 1)
var kimetsu2 = new Producto("Parca Kimetsu no yaiba", 6000, "L", "Ropa", 2)
var onePiece = new Producto("Llavero One piece", 200, "Unico", "Llavero", 3)
var onePiece2 = new Producto("Funko Pop Chopper One Piece", 3000, "Unico", "Funko Pop", 4)
var onePiece3 = new Producto("Llavero y tsuka para llave Kimetsu", 400, "Unico", "Llavero", 5)
var pocky = new Producto("Pocky", 290, "50g", "Comida", 6)
var kracie = new Producto("Kracie Popin’ Cookin' Animal Pancake", 490, "Unico", "Comida", 7)
var kracie2 = new Producto("Kracie Popin' Cookin' Ice Cream Cake ", 460, "Unico", "Comida", 8)
var kimetsu3 = new Producto("Nendoroid Nezuko Kamado", 6000, "Unico", "Nendroid", 9)
var jojo = new Producto("Llavero mascara JoJo", 600, "Unico", "Llavero", 10)
var list = [0, kimetsu, kimetsu2, onePiece, onePiece2, onePiece3, pocky, kracie, kracie2, kimetsu3, jojo]