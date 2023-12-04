window.addEventListener("load", function()
{
  var loadingScreen =this.document.getElementById("loading-screen");
  var content = this.document.getElementById("content");

  this.setTimeout(function(){
    loadingScreen.style.display="none";
    content.classList.remove("hidden");
  }, 2500)
})