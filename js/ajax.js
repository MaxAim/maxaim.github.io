$(document).ready(function(){
	if ($("main").is(":empty")){
  		$("main").load("home.html");
  	}
  	$("a").click(function(){
    	toLoad = (this.id)
    	$("main").load(toLoad);
 	})
})