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
var carrito = []
var total = 0
var storage = localStorage
var crt = ""

function add(id){
	if(id in storage){
		storage[id] = parseInt(storage[id]) + 1
	}
	else{
		storage.setItem(id, 1);
	}
	enCarrito()
}

function enCarrito(){
	for (const [key, value] of Object.entries(storage)){
		var btn = document.getElementById("btn-" + key);
		btn.innerHTML = "Agregar(" + parseInt(storage[key]) + " en carrito)";
	}
}

function calcular(){
	for (const [key, value] of Object.entries(storage)){
		carrito.push(list[key].nombre + " x" + storage[key]);
	}
	for (const [key, value] of Object.entries(storage)){
		sub = parseInt(list[key].precio * storage[key]);
		total = total + sub;
	}
	final = (carrito.join("<br>"))
	var crt = document.getElementById("crt");
	if(final !== ""){
		crt.innerHTML = final
	}
	else{
		crt.innerHTML = "Nada Aun"
	}
	$("#ttl").text("El total seria de ¥" + total)
	carrito = []
	total = 0
}

function vaciar(){
	localStorage.clear()
	$(".table button").text("Agregar")
}