$(document).ready(function(){

$('.dropdown-button').dropdown({
    inDuration: 300,
    outDuration: 225,
    constrainWidth: true,
    hover: true, // Activate on hover
    belowOrigin: true, // Displays dropdown below the button
    alignment: 'right', // Displays dropdown with edge aligned to the left of button
    gutter: 0
  });

$('#slider').carousel({
    fullWidth: false,
    padding: 400,
    noWrap: false,
    dist: 20,
  });
  setInterval(function(){
    $('#slider').carousel('next');
  }, 2000);

$('#testimonials').carousel({
    fullWidth: false,
    padding: 2000,
    noWrap: false,
    dist: 20,
  });
  setInterval(function(){
    $('#testimonials').carousel('next');
  }, 20000);

  var stats_counter = function() {
    if($('.counter').length > 0) { 
      function increment($this, speed){
        var current = parseInt($this.html(), 10);
        $this.html(++current);
        if(current !== $this.data('to')){
          setTimeout(function(){increment($this, speed)}, speed);
        }
      }  
      $('.counter').each(function(index) {
        increment($(this), parseInt($(this).data('speed')));
      });
    }
  }

stats_counter();

});
