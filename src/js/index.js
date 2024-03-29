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

  // window.addEventListener("scroll", function (event) {
  //   let scroll = window.scrollY;
  //   console.log(scroll);
  // });

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

  // handle hover collection list item

  // const collectionItem1 = document.getElementById("collection-item1");
  // const collectionItem2 = document.getElementById("collection-item2");
  // const collectionItem3 = document.getElementById("collection-item3");
  // const collectionItem4 = document.getElementById("collection-item4");
  // const collectionItem5 = document.getElementById("collection-item5");
  // const collectionItem6 = document.getElementById("collection-item6");
  // const collectionItem7 = document.getElementById("collection-item7");
  // const iconSvg1 = document.getElementById("icon-svg1");
  // const iconSvg2 = document.getElementById("icon-svg2");
  // const iconSvg3 = document.getElementById("icon-svg3");
  // const iconSvg4 = document.getElementById("icon-svg4");
  // const iconSvg5 = document.getElementById("icon-svg5");
  // const iconSvg6 = document.getElementById("icon-svg6");
  // const iconSvg7 = document.getElementById("icon-svg7");
  // const borderContact1 = document.getElementById("border-contact1");
  // const borderContact2 = document.getElementById("border-contact2");
  // const borderContact3 = document.getElementById("border-contact3");
  // const borderContact4 = document.getElementById("border-contact4");
  // const borderContact5 = document.getElementById("border-contact5");
  // const borderContact6 = document.getElementById("border-contact6");
  // const borderContact7 = document.getElementById("border-contact7");
  // const textContact1 = document.getElementById("text-contact1");
  // const textContact2 = document.getElementById("text-contact2");
  // const textContact3 = document.getElementById("text-contact3");
  // const textContact4 = document.getElementById("text-contact4");
  // const textContact5 = document.getElementById("text-contact5");
  // const textContact6 = document.getElementById("text-contact6");
  // const textContact7 = document.getElementById("text-contact7");
  // const vsCodeSrc = document.getElementById("vsCodeSrc");
  // const figmaSrc = document.getElementById("figmaSrc");
  // const aiSrc = document.getElementById("aiSrc");
  
  // collectionItem1.addEventListener("mouseenter", () => {
  //   iconSvg1.style.borderColor = "#ffff";
  //   vsCodeSrc.src = "/src/assets/svg-content/vsCode2.svg";
  //   borderContact1.style.borderColor = "#ffffff";
  //   borderContact1.style.backgroundColor = "#ffffff";
  //   textContact1.style.color = "#000000";
  // });

  // collectionItem1.addEventListener("mouseleave", () => {
  //   iconSvg1.style.borderColor = "#000";
  //   vsCodeSrc.src = "/src/assets/svg-content/vsCode.svg";
  //   borderContact1.style.borderColor = "#000";
  //   borderContact1.style.backgroundColor = "none";
  //   textContact1.style.color = "#000";
  // });

  // collectionItem2.addEventListener("mouseenter", () => {
  //   iconSvg2.style.borderColor = "#ffff";
  //   borderContact2.style.borderColor = "#ffffff";
  //   borderContact2.style.backgroundColor = "#ffffff";
  //   textContact2.style.color = "#000000";
  // });

  // collectionItem2.addEventListener("mouseleave", () => {
  //   iconSvg2.style.borderColor = "#000";
  //   borderContact2.style.borderColor = "#000";
  //   borderContact2.style.backgroundColor = "none";
  //   textContact2.style.color = "#000";
  // });

  // collectionItem3.addEventListener("mouseenter", () => {
  //   iconSvg3.style.borderColor = "#ffff";
  //   borderContact3.style.borderColor = "#ffffff";
  //   borderContact3.style.backgroundColor = "#ffffff";
  //   textContact3.style.color = "#000000";
  // });

  // collectionItem3.addEventListener("mouseleave", () => {
  //   iconSvg3.style.borderColor = "#000";
  //   borderContact3.style.borderColor = "#000";
  //   borderContact3.style.backgroundColor = "none";
  //   textContact3.style.color = "#000";
  // });

  // collectionItem4.addEventListener("mouseenter", () => {
  //   iconSvg4.style.borderColor = "#ffff";
  //   borderContact4.style.borderColor = "#ffffff";
  //   borderContact4.style.backgroundColor = "#ffffff";
  //   textContact4.style.color = "#000";
  // });

  // collectionItem4.addEventListener("mouseleave", () => {
  //   iconSvg4.style.borderColor = "#000";
  //   borderContact4.style.borderColor = "#000";
  //   borderContact4.style.backgroundColor = "none";
  //   textContact4.style.color = "#000";
  // });

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
  elements.textContacts[index - 1].style.color = "#000000";

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
  elements.iconSvgs[index - 1].style.borderColor = "#000";
  elements.borderContacts[index - 1].style.borderColor = "#000";
  elements.borderContacts[index - 1].style.backgroundColor = "transparent";
  elements.textContacts[index - 1].style.color = "#000";

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

  
});
