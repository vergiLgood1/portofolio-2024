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



// {Awal fungsi untuk menangani mouse hover pada collection item} -------------------------------->

// Menyiapkan objek yang menyimpan referensi ke elemen-elemen yang dibutuhkan
const elements = {
  collectionItems: document.querySelectorAll("[id^='collection-item']"),
  iconSvgs: document.querySelectorAll("[id^='icon-svg']"),
  borderContacts: document.querySelectorAll("[id^='border-contact']"),
  textContacts: document.querySelectorAll("[id^='text-contact']"),
  iconSrcs: document.querySelectorAll("[id^='icon-src']"),
  // tambahkan referensi elemen lainnya di sini jika diperlukan
};

// Fungsi untuk menangani event mouseenter dan mouseleave
function mouseEnter(event) {
  const index = event.target.id.slice(-1); // Mendapatkan indeks dari ID elemen

  // Memperbarui gaya sesuai dengan indeks
  elements.iconSvgs[index - 1].style.borderColor = "#ffff";
  elements.borderContacts[index - 1].style.borderColor = "#ffffff";
  elements.borderContacts[index - 1].style.backgroundColor = "#ffffff";
  elements.textContacts[index - 1].style.color = "#051118";

  // Mengubah src iconSvg berdasarkan ID elemen
  switch (event.target.id) {
    case 'collection-item1':
      elements.iconSrcs[index - 1].src = "/src/assets/svg-content/vsCode2.svg";
      break;
    case 'collection-item2':
      elements.iconSrcs[index - 1].src = "/src/assets/svg-content/vsCode2.svg";
      break;
    case 'collection-item3': 
      elements.iconSrcs[index - 1].src = "/src/assets/svg-content/vsCode2.svg";
      break;
    case 'collection-item4': 
      elements.iconSrcs[index - 1].src = "/src/assets/svg-content/vsCode2.svg";
      break;
    case 'collection-item5': 
      elements.iconSrcs[index - 1].src = "/src/assets/svg-content/vsCode2.svg";
      break;
    case 'collection-item6': 
      elements.iconSrcs[index - 1].src = "/src/assets/svg-content/figma2.svg";
      break;
    case 'collection-item7': 
      elements.iconSrcs[index - 1].src = "/src/assets/svg-content/Ai2.svg";
      break;
    default:
      // Jika ID tidak sesuai dengan case yang didefinisikan, tidak melakukan perubahan src
      break;
  }
}

function mouseleave(event) {
  const index = event.target.id.slice(-1); // Mendapatkan indeks dari ID elemen

  // Memperbarui gaya sesuai dengan indeks
  elements.iconSvgs[index - 1].style.borderColor = "#051118";
  elements.borderContacts[index - 1].style.borderColor = "#051118";
  elements.borderContacts[index - 1].style.backgroundColor = "transparent";
  elements.textContacts[index - 1].style.color = "#051118";

  // Mengubah src iconSvg berdasarkan ID elemen
  switch (event.target.id) {
    case 'collection-item1':
      elements.iconSrcs[index - 1].src = "/src/assets/svg-content/vsCode.svg";
      break;
    case 'collection-item2':
      elements.iconSrcs[index - 1].src = "/src/assets/svg-content/vsCode.svg";
      break;
    case 'collection-item3': 
      elements.iconSrcs[index - 1].src = "/src/assets/svg-content/vsCode.svg";
      break;
    case 'collection-item4': 
      elements.iconSrcs[index - 1].src = "/src/assets/svg-content/vsCode.svg";
      break;
    case 'collection-item5': 
      elements.iconSrcs[index - 1].src = "/src/assets/svg-content/vsCode.svg";
      break;
    case 'collection-item6': 
      elements.iconSrcs[index - 1].src = "/src/assets/svg-content/figma.svg";
      break;
    case 'collection-item7': 
      elements.iconSrcs[index - 1].src = "/src/assets/svg-content/Ai.svg";
      break;
    default:
      // Jika ID tidak sesuai dengan case yang didefinisikan, tidak melakukan perubahan src
      break;
  }
}

// Menambahkan event listener untuk setiap elemen koleksi
elements.collectionItems.forEach((item) => {
  item.addEventListener("mouseenter", mouseEnter);
  item.addEventListener("mouseleave", mouseleave);
});

// <-------------------------------- {Akhir fungsi untuk menangani mouse hover pada collection item} 
  
});
