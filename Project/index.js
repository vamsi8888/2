let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
  console.log(slideIndex);
}

// Thumbnail image controls
function currentSlide(n) { 
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  var slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    if(i==n && i<slides.length-2){
        slides[i].style.display = "block";
        slides[i+1].style.display = "block";
        slides[i+2].style.display = "block";
    }else{
        slides[i].style.display = "none";
    }
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}