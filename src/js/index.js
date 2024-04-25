import gsap from "gsap";

document.addEventListener("DOMContentLoaded", function () {
  const navBottom = document.getElementById("navBottom");
  const scrollText = document.getElementById("scrollText");

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

  // {Awal fungsi untuk menangani animated marquee} -------------------------------->

  // Animate scroll marque
  const scrollers1 = document.querySelectorAll(".scroller1");
  // If a user hasn't opted in for recuded motion, then we add the animation
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation1();
  }

  function addAnimation1() {
    scrollers1.forEach((scroller1) => {
      // add data-animated="true" to every `.scroller` on the page
      scroller1.setAttribute("data-animated", true);

      // Make an array from the elements within `.scroller-inner`
      const scrollerInner1 = scroller1.querySelector(".scroller__inner1");
      const scrollerContent1 = Array.from(scrollerInner1.children);

      // For each item in the array, clone it
      // add aria-hidden to it
      // add it into the `.scroller-inner`
      scrollerContent1.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner1.appendChild(duplicatedItem);
      });
    });
  }

  const scrollers2 = document.querySelectorAll(".scroller2");

  // If a user hasn't opted in for recuded motion, then we add the animation
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation2();
  }

  function addAnimation2() {
    scrollers2.forEach((scroller2) => {
      // add data-animated="true" to every `.scroller` on the page
      scroller2.setAttribute("data-animated", true);

      // Make an array from the elements within `.scroller-inner`
      const scrollerInner2 = scroller2.querySelector(".scroller__inner2");
      const scrollerContent2 = Array.from(scrollerInner2.children);

      // For each item in the array, clone it
      // add aria-hidden to it
      // add it into the `.scroller-inner`
      scrollerContent2.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner2.appendChild(duplicatedItem);
      });
    });
  }

  // <-------------------------------- {Akhir fungsi untuk menangani mouse hover pada collection item}

  // {Awal fungsi untuk menangani mouse hover pada collection item} -------------------------------->

  // Menyiapkan objek yang menyimpan referensi ke elemen-elemen yang dibutuhkan

  const elements = {
    collectionItems: document.querySelectorAll("[id^='collection-item']"),
    iconSvgs: document.querySelectorAll("[id^='icon-svg']"),
    borderContacts: document.querySelectorAll("[id^='border-contact']"),
    textContacts: document.querySelectorAll("[id^='text-contact']"),
    iconSrcs: document.querySelectorAll("[id^='icon-src']"),
    imgModal: document.querySelectorAll("[id^='img-modal']"),
    // tambahkan referensi elemen lainnya di sini jika diperlukan
  };
  const mouseEnter = (event) => {
    const index = event.target.id.slice(-1); // Mendapatkan indeks dari ID elemen

    // Memperbarui gaya sesuai dengan indeks
    elements.iconSvgs[index - 1].style.borderColor = "#ffff";
    elements.borderContacts[index - 1].style.borderColor = "#ffffff";
    elements.borderContacts[index - 1].style.backgroundColor = "#ffffff";
    elements.textContacts[index - 1].style.color = "#051118";
    elements.imgModal[index - 1].style.display = "block";

    // Mengubah src iconSvg berdasarkan ID elemen
    const iconSrcMap = {
      "collection-item1": "/src/assets/svg-content/vsCode2.svg",
      "collection-item2": "/src/assets/svg-content/vsCode2.svg",
      "collection-item3": "/src/assets/svg-content/vsCode2.svg",
      "collection-item4": "/src/assets/svg-content/vsCode2.svg",
      "collection-item5": "/src/assets/svg-content/vsCode2.svg",
      "collection-item6": "/src/assets/svg-content/figma2.svg",
      "collection-item7": "/src/assets/svg-content/Ai2.svg",
    };

    elements.iconSrcs[index - 1].src =
      iconSrcMap[event.target.id] || elements.iconSrcs[index - 1].src;
    elements.borderContacts[index - 1].classList.add("icon-src"); // Tambahkan kelas CSS untuk animasi
  };

  const mouseLeave = (event) => {
    const index = event.target.id.slice(-1); // Mendapatkan indeks dari ID elemen

    // Mengembalikan style elemen ke aslinya
    elements.iconSvgs[index - 1].style.borderColor = "#051118";
    elements.borderContacts[index - 1].style.borderColor = "#051118";
    elements.borderContacts[index - 1].style.backgroundColor = "transparent";
    elements.textContacts[index - 1].style.color = "#051118";
    elements.imgModal[index - 1].style.display = "none";

    // Objek untuk memetakan ID dengan src iconSvg yang sesuai
    const iconSrcMap = {
      "collection-item1": "/src/assets/svg-content/vsCode.svg",
      "collection-item2": "/src/assets/svg-content/vsCode.svg",
      "collection-item3": "/src/assets/svg-content/vsCode.svg",
      "collection-item4": "/src/assets/svg-content/vsCode.svg",
      "collection-item5": "/src/assets/svg-content/vsCode.svg",
      "collection-item6": "/src/assets/svg-content/figma.svg",
      "collection-item7": "/src/assets/svg-content/Ai.svg",
    };

    elements.iconSrcs[index - 1].src =
      iconSrcMap[event.target.id] || elements.iconSrcs[index - 1].src;
    elements.borderContacts[index - 1].classList.add("icon-src"); // Tambahkan kelas CSS untuk animasi
  };

  // Menambahkan event listener untuk setiap elemen koleksi
  elements.collectionItems.forEach((item) => {
    item.addEventListener("mouseenter", mouseEnter);
    item.addEventListener("mouseleave", mouseLeave);
  });

  // <-------------------------------- {Akhir fungsi untuk menangani mouse hover pada collection item}

  // {Awal fungsi untuk menangani mouse hover pada skill-card item} -------------------------------->

  const skillSubWrapper = {
    skillCard: document.querySelectorAll(".skill-card"),
  };

  const mouseEnter2 = (event) => {
    const projectTags = event.currentTarget.querySelectorAll(".project-tag");
    projectTags.forEach((tag) => {
      tag.style.backgroundColor = "#000";
      tag.style.color = "#fff";
      tag.style.borderColor = "#000";
    });
  };

  const mouseLeave2 = (event) => {
    const projectTags = event.currentTarget.querySelectorAll(".project-tag");
    projectTags.forEach((tag) => {
      tag.style.backgroundColor = "#fff";
      tag.style.color = "#000";
      tag.style.borderColor = "#fff";
    });
  };

  skillSubWrapper.skillCard.forEach((item) => {
    item.addEventListener("mouseenter", mouseEnter2);
    item.addEventListener("mouseleave", mouseLeave2);
  });

  // <-------------------------------- {Akhir fungsi untuk menangani mouse hover pada skill-card item}
  // let skillCards = document.querySelectorAll(".skill-card");

  // function changeWidthOnScroll() {
  //   let scrollVal = window.pageYOffset;
  //   let scrollSlow = scrollVal / 4;

  //   skillCards.forEach((card) => {
  //     if (scrollVal > 0) {
  //       card.style.width = Math.min(Math.max(scrollSlow, 20), 100) + "%";
  //     } else {
  //       card.style.width = "20%"; // Lebar minimum saat scroll ke atas
  //     }
  //   });

  //   console.log("Width updated:", skillCards[0].style.width); // Untuk memastikan width diubah
  // }

  // window.addEventListener(
  //   "scroll",
  //   function () {
  //     requestAnimationFrame(changeWidthOnScroll);
  //   },
  //   false
  // );

  // // Menjalankan fungsi untuk pertama kali saat halaman dimuat
  // changeWidthOnScroll();

  // // Menambahkan event listener untuk menjalankan fungsi ketika memasuki section dengan id "s4"
  // document.addEventListener("DOMContentLoaded", function () {
  //   const section = document.getElementById("s4");
  //   section.addEventListener("mouseenter", function () {
  //     changeWidthOnScroll();
  //   });
  // });

  // {Awal fungsi untuk menangani pada new project section } -------------------------------->

  const animProjectImgWrapper = document.querySelector(
    ".anim-project__img-wrapper"
  );
  const animProjectImgs = document.querySelectorAll(".anim-project__img");
  const projects = document.querySelectorAll(".project");
  const projectWrapper = document.querySelector(".project-gallery__wrapper");

  let mm = gsap.matchMedia();

  mm.add("(min-width: 768px)", () => {
    function mouseEnter() {
      gsap.to(animProjectImgWrapper, { scale: 1 });
    }
    function mouseLeave() {
      gsap.to(animProjectImgWrapper, { scale: 0 });
    }

    projectWrapper.addEventListener("mouseenter", mouseEnter);
    projectWrapper.addEventListener("mouseleave", mouseLeave);

    projects.forEach((project) => {
      project.addEventListener("mouseenter", () => {
        let scrollPercent = project.getAttribute("data-scroll");
        let imgHeight =
          document.querySelector(".anim-project__img").clientHeight;
        let gap = 32;
        let scrollY = imgHeight * -1 * scrollPercent - gap * scrollPercent;

        gsap.to(animProjectImgs, {
          y: scrollY,
          ease: "sine.in",
        });
      });
    });

    let mouseXPosition;
    let mouseYPosition;
    let offsetX = animProjectImgWrapper.clientWidth / 2;
    let offsetY = animProjectImgWrapper.clientHeight / 2;
    let delay = 0.3;

    function trackCursor(e) {
      // Check if the event object exists
      mouseXPosition = e.clientX - offsetX;
      mouseYPosition = e.clientY - offsetY;

      gsap.to(animProjectImgWrapper, {
        top: mouseYPosition,
        left: mouseXPosition,
        ease: "none",
        duration: delay,
      });
    }

    function resetAnimation() {
      gsap.to([animProjectImgs, animProjectImgWrapper], {
        clearProps: "all",
      });
    }
    projectWrapper.addEventListener("mousemove", trackCursor);
    projectWrapper.addEventListener("mouseleave", resetAnimation);

    return () => {
      projectWrapper.removeEventListener("mouseenter", mouseEnter);
      projectWrapper.removeEventListener("mousemove", trackCursor);
    };
  });

  window.addEventListener("resize", gsap.matchMediaRefresh());

  // <-------------------------------- {Akhir fungsi untuk menangani new project section}

  const time = document.querySelectorAll(".time");

  const myClock = () => {
    setTimeout(() => {
      const d = new Date();
      const h = d.getHours();
      const m = d.getMinutes();
      const ampm = h >= 12 ? "PM" : "AM"; // Menentukan AM atau PM berdasarkan jam
      const hour12 = h % 12 || 12; // Mengonversi jam 24 ke format 12 jam

      const timeString = `${hour12}:${m < 10 ? "0" : ""}${m} ${ampm}`; // Membuat string waktu

      document.querySelector(".time").innerText = timeString;
      myClock();
    }, 1000);
  };

  myClock();
});
