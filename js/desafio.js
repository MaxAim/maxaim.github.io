$(document).ready(function(){
    $.ajax({type: "GET",
          url: "js/productos.js",
          dataType: "script",
    });
});

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

function vaciar(){
	$(".table button").text("Agregar")
	localStorage.clear()
	$("#crt").text("Nada Aun")
	$("#ttl").text("El total seria de ¥0")

}

function enCarrito(){
	for (const [key, value] of Object.entries(storage)){
		var btn = document.getElementById("btn-" + key);
		btn.innerHTML = "Agregar(" + parseInt(storage[key]) + " en carrito)";
	}
}

$(function(){
	$("#carrito-dropdown").on({
	  	mouseenter: function(){
	    	$(this).css("background-color", "lightgray");
	},
		mouseleave: function(){
	   		$(this).css("background-color", "lightblue");
			},
	  	click: function(){
	    	for (const [key, value] of Object.entries(storage)){
				carrito.push(list[key].nombre + " x" + storage[key]);
			}
			for (const [key, value] of Object.entries(storage)){
				sub = parseInt(list[key].precio * storage[key])
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
			$(".carrito-dropdown").show();
			$("#close").click(function(){
				$(".carrito-dropdown").hide();
			});
			carrito = []
			total = 0
		},
	})
});


$(document).mouseup(function(e) 
{
    var container = $(".carrito-dropdown");

    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.hide();
    }
});