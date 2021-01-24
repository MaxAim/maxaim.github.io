function producto(nombre, precio, modelo, tipo, numero){
	this.nombre = nombre;
	this.precio = precio;
	this.modelo = modelo;
	this.numero = numero;
	this.tipo = tipo;
}
var kimetsu = new producto("Kimetsu movie book", 1000, "Especial", "Libro", "1")
var kimetsu2 = new producto("Parca Kimetsu no yaiba", 6000, "L", "Ropa", "2")
var onePiece = new producto("Llavero One piece", 200, "Unico", "Llavero", "3")
var onePiece2 = new producto("Funko Pop Chopper One Piece", 3000, "Unico", "Funko Pop", "4")
var onePiece3 = new producto("Llavero y tsuka para llave Kimetsu", 400, "Unico", "Llavero", "5")
var pocky = new producto("Pocky", 290, "50g", "Comida", "6")
var kracie = new producto("Kracie Popin’ Cookin' Animal Pancake", 490, "Unico", "Comida", "7")
var kracie2 = new producto("Kracie Popin' Cookin' Ice Cream Cake ", 460, "Unico", "Comida", "8")
var kimetsu3 = new producto("Nendoroid Nezuko Kamado", 6000, "Unico", "Nendroid", "9")
var jojo = new producto("Llavero mascara JoJo", 600, "Unico", "Llavero", "10")
var total = 0
list = [0, kimetsu, kimetsu2, onePiece, onePiece2, onePiece3, pocky, kracie, kracie2, kimetsu3, jojo]
function add(id){
	console.log("Se agrego el producto " + list[id].nombre)
	total = total + list[id].precio
}
function calcular(){
	console.log("El total seria de ¥" + total)
}