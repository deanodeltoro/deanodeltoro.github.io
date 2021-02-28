
var counter = 0;
all = document.getElementsByClassName('hike');


function nextHike() {

  if (counter == all.length -1){
    hideHike(counter);
    counter = 0;
    showHike(counter);
    }
  else {
    counter += 1;
    showHike(counter);
    hideHike(counter-1)
  }

}



function showHike(n) {
  all[n].style.display="block";
}

function hideHike(n) {
  all[n].style.display="none";
}


var slideIndex = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

var slideId = ["gambuesaSlideshow", "pintoSlideshow",
"tirajanaSlideshow","berrielSlideshow","Ayagaures2TunteSlideshow",
"BcodelToroSlideshow","llanosCircularoSlideshow",
"guayadequeSlideshow","oscuroSlideshow","ventanaNubloSlideshow",
"hornosSlideshow","nievesSlideshow", "hondoSlideshow",
"azuajeVirgenSlideshow","charcoAzulSlideshow","teriscalSlideshow",
"gambuesaDataSlideshow", "mimbreDataSlideshow", "playaAldeaSlideshow",
"pinoGordoSlideshow"]



function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
}
