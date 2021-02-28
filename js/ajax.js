$(document).ready(function(){
  $("a").click(function(){
    toLoad = (this.id)
    $("main").load(toLoad);
    $("main").css("margin-top", "-8%");
  })
})