function productos(){
	var productos = parseInt(prompt("Cuantos productos?"))
	var total = 0
	var num = 1
  	var input = ""
	while(productos < 1 || isNaN(productos)){
		productos = parseInt(prompt("Ingrese un numero valido"))
	}
  	for(;productos > 0; productos--){
			input = parseInt(prompt("Precio del producto " + num))
			while(input < 1 || isNaN(input)){
      			input = parseInt(prompt("Ingrese un numero valido"))
      		}
	     total = total + input
	     num++
	}
  	alert("El precio total seria de $" + total)
}