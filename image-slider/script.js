let slideIndex = 1;
let slideShow = false;
let slideInterval;
const bgcolors = ["#1f2231", "#ffc777"];


$("#left").click ( () => {
  toSlide(slideIndex - 1);
});

$("#mid").click ( () => {
    if(slideShow) {
        slideShowOff();
        $('#mid').html('▶');
    }
    else {
        slideShowOn();
        $('#mid').html('||');
    }
});

$("#right").click( () => {
  toSlide(slideIndex + 1);
});

function toSlide(n) {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  n = n > slides.length ? 1 : n;
  n = n === 0 ? slides.length : n;
  slides[slideIndex - 1].classList.add("slide-out");
  slides[slideIndex - 1].addEventListener(
    "animationend",
    () => {
      slides[slideIndex - 1].classList.remove("slide-out");
      slides[slideIndex - 1].classList.remove('visible');
      dots[slideIndex - 1].classList.remove("active-dot");
      slides[n - 1].classList.add('visible');
      dots[n - 1].classList.add("active-dot");
      document.querySelector('body').style.backgroundColor = bgcolors[n-1];
      slideIndex = n;
    },
    { once: true }
  );
}

function slideShowOn() {
    toSlide(slideIndex+1);
    slideInterval = setInterval(()=>{
        toSlide(slideIndex+1);
    },3000);
    slideShow = true;
}

function slideShowOff() {
    clearInterval(slideInterval);
    slideShow = false;
}

slideShowOn();
toSlide(slideIndex);
