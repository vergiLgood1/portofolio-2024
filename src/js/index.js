document.addEventListener('DOMContentLoaded', function() {


    const navBottom = document.getElementById('navBottom')
    const scrollText = document.getElementById('scrollText')
    
    navBottom.style.display = 'none'
    

// Slide up animation text 
const txts = document.querySelector(".slideUp-text").children,
    txtsLen = txts.length;
let index = 0;
const textInTimer = 3000,
    textOutTimer = 2800;

function slideUp() {
    for (let i = 0; i < txtsLen; i++) {
        txts[i].classList.remove("text-in", "text-out");
    }
    txts[index].classList.add("text-in");

    setTimeout(function () {
        txts[index].classList.add("text-out");
    }, textOutTimer)

    setTimeout(function () {

        if (index == txtsLen - 1) {
            index = 0;
        }
        else {
            index++;
        }
        slideUp();
    }, textInTimer);
}

window.onload = slideUp;


// Fade up animation text
window.addEventListener('scroll', function() {
    const aboutContentRight = document.getElementById('about-content-right');
    const sectionS2 = document.getElementById('s2');
    const windowHeight = window.innerHeight;
    const sectionTop = sectionS2.getBoundingClientRect().top;

    if (sectionTop < windowHeight * 0.8) {
      aboutContentRight.classList.add('fade-up-active');
    }
  });
  


})

