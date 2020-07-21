function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }
  function openNav1() {
    document.getElementById("create").style.height = "100%";
  }
  function closeNav1() {
    document.getElementById("create").style.height = "0%";
  }
  
  var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}



function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.border = "none";
    document.getElementById("navbar").style.backgroundColor="#f4cc2ac9"
    document.getElementById("img").style.display="none"
    scrollFunction(); 
  }else {
    document.getElementById("navbar").style.top = "-500px";
      
  }
  prevScrollpos = currentScrollPos;
}
function scrollFunction() {
if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
 document.getElementById("navbar").style.border = "border: none"
  
} else {
  document.getElementById("navbar").style.border = ".3em solid #F2EFE5";
  document.getElementById("navbar").style.backgroundColor = "#F4CB2A;";
  document.getElementById("navbar").style.backgroundColor="#F4CB2A";
  document.getElementById("img").style.display="block"

}
}
AOS.init({
  easing: 'ease-in-quad',
});



