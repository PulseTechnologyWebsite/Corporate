$(document).ready(function(){
	$('#carousel').carousel({fullWidth: true});
});

var slideIndex = 0;
carousel2();

function carousel2() {
    var j;
    var z = document.getElementsByClassName("slide2");
    for (j = 0; j < z.length; j++) {
      z[j].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > z.length) {slideIndex = 1} 
    z[slideIndex-1].style.display = "block"; 
    setTimeout(carousel2, 10000); 
}
