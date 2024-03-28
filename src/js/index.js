document.addEventListener("DOMContentLoaded", function () {
  const navBottom = document.getElementById("navBottom");
  const scrollText = document.getElementById("scrollText");

  navBottom.style.display = "none";

  // Linktree button click
  document
    .getElementById("btn-linktree")
    .addEventListener("click", function () {
      window.location.href = "https://linktr.ee/diyoanggara";
    });

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
    }, textOutTimer);

    setTimeout(function () {
      if (index == txtsLen - 1) {
        index = 0;
      } else {
        index++;
      }
      slideUp();
    }, textInTimer);
  }

  window.onload = slideUp;

  // Fade up animation text
  window.addEventListener("scroll", function () {
    const aboutContentRight = document.getElementById("about-content-right");
    const sectionS2 = document.getElementById("s2");
    const windowHeight = window.innerHeight;
    const sectionTop = sectionS2.getBoundingClientRect().top;

    if (sectionTop < windowHeight * 0.8) {
      aboutContentRight.classList.add("fade-up-active");
    }
  });

  // Animate scroll marque
  const scrollers = document.querySelectorAll(".scroller");

  // If a user hasn't opted in for recuded motion, then we add the animation
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  }

  function addAnimation() {
    scrollers.forEach((scroller) => {
      // add data-animated="true" to every `.scroller` on the page
      scroller.setAttribute("data-animated", true);

      // Make an array from the elements within `.scroller-inner`
      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      // For each item in the array, clone it
      // add aria-hidden to it
      // add it into the `.scroller-inner`
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }

  // Buat sebuah fungsi untuk mengambil tinggi scroll halaman
  // function getScrollHeight() {
  //   return document.documentElement.scrollHeight || document.body.scrollHeight;
  // }

  // Panggil fungsi getScrollHeight() saat ingin mendapatkan tinggi scroll saat ini
  // const scrollHeight = getScrollHeight();
  // console.log("Tinggi scroll halaman:", scrollHeight);

  // Tambahkan event listener untuk event scroll pada window
  // window.addEventListener("scroll", () => {
  //   const scrollHeight = getScrollHeight();
  //   console.log("Tinggi scroll halaman:", scrollHeight);
  // });

  window.addEventListener("scroll", function (event) {
    let scroll = window.scrollY;
    console.log(scroll);
  });

  // Change heigth on scroll event
  // var content = document.getElementById("content");
  // var contentMaxHeight = 200; // Tinggi maksimum yang ingin ditambahkan
  // var initialScroll = window.pageYOffset; // Mengambil posisi scroll awal

  // window.addEventListener("scroll", function () {
  //   var currentScroll = window.pageYOffset;
  //   var scrollDifference = currentScroll - initialScroll;

  //   // Menghitung tinggi baru untuk div content
  //   var newHeight = content.clientHeight + scrollDifference;

  //   // Membatasi tinggi maksimum agar tidak melebihi contentMaxHeight
  //   if (newHeight > contentMaxHeight) {
  //     newHeight = contentMaxHeight;
  //   }

  //   content.style.height = newHeight + "px";

  //   initialScroll = currentScroll; // Update posisi scroll awal
  // });
});
