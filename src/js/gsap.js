import gsap from "gsap";

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.set(".img", { y: 500 });
  gsap.set(".loader-imgs", { x: 500 });

  const tl = gsap.timeline({ delay: 1 });

  tl.to(".img", {
    y: 0,
    duration: 1.5,
    stagger: 0.05,
    ease: "power3.inOut",
  })
    .to(
      ".loader-imgs",
      {
        x: 0,
        duration: 3,
        ease: "power3.inOut",
      },
      "-=2.5"
    )
    .to(
      ".img:not(#loader-logo",
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1,
        stagger: 0.1,
        ease: "power3.inOut",
      },
      "-=1"
    )
    .to(
      ".loader",
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1,
        ease: "power3.inOut",
      },
      "-=0.5"
    );

  gsap.to(".main-cta-row", {
    scrollTrigger: {
      trigger: ".main-cta-row",
      start: "top bottom", // Trigger animation when top of the element hits the bottom of the viewport
      end: "50%", // Trigger animation when bottom of the element hits the top of the viewport
      scrub: true, // Smooth animation effect
      markers: false, // Show markers for debugging
    },
    clipPath: "polygon(0% 120%, 120% 120%, 120% 0%, 0% 0%)", // Full square clip path
    opacity: 1, // Start with full opacity
    ease: "power3.out", // Animation ease
    onUpdate: function () {
      // Update opacity based on scroll progress
      gsap.set(".main-cta-row", { opacity: ScrollTrigger.progress });
    },
  });

  gsap.to(".skill-card", {
    scrollTrigger: {
      trigger: ".skill-card",
      start: "top bottom", // Trigger animation when top of the element hits the bottom of the viewport
      end: "bottom top", // Trigger animation when bottom of the element hits the top of the viewport
      scrub: true, // Smooth animation effect
      markers: false, // Show markers for debugging
    },
    clipPath: "polygon(0% 120%, 120% 120%, 120% 0%, 0% 0%)", // Full square clip path
    opacity: 1, // Start with full opacity
    ease: "power3.out", // Animation ease
    onUpdate: function () {
      // Update opacity based on scroll progress
      gsap.set(".skill-card", { opacity: ScrollTrigger.progress });
    },
  });

  gsap.to(".marquee3-custom-text", {
    scrollTrigger: {
      trigger: ".marquee3-custom-text", // Trigger animasi saat elemen dengan id "content" masuk viewport
      start: "top 90%", // Mulai animasi saat elemen "content" mencapai 80% dari viewport
      end: "bottom top", // Selesaikan animasi saat elemen "content" keluar dari atas viewport
      scrub: true, // Aktifkan efek smooth saat scroll
      markers: false, // Show markers for debugging
    },
    height: "100px", // Tinggi yang ingin dicapai
    ease: "power3.out", // Animation ease
  });

  gsap.set(".pill-container", {
    xPercent: -100,
    yPercent: -100,
    scale: 1,
  });

  window.addEventListener("mousemove", (e) => {
    gsap.to(".pill-container", {
      duration: 0.5,
      overwrite: "auto",
      x: e.clientX,
      y: e.clientY,
      stagger: 0.15,
      ease: "none",
    });

    let TL = gsap.timeline({
      defaults: { duration: 0.5, ease: "none" },
    });
    TL.to(".pill-container", {
      scale: 1,
      overwrite: "auto",
      stagger: { amount: 0.15, from: "start", ease: "none" },
    });
    TL.to(
      ".pill-container",
      {
        overwrite: "auto",
        scale: 1,
        stagger: { amount: 0.15, from: "end", ease: "none" },
      },
      "<+=2.5"
    );
  });

  gsap.to(".footer", {
    scrollTrigger: {
      trigger: ".footer",
      start: "80%", // Trigger animation when top of the element hits the bottom of the viewport
      end: "bottom top", // Trigger animation when bottom of the element hits the top of the viewport
      scrub: true, // Smooth animation effect
      markers: false, // Show markers for debugging
    },
    opacity: 1, // Start with full opacity
    onUpdate: function () {
      // Update opacity based on scroll progress
      gsap.set(".footer", { opacity: ScrollTrigger.progress });
    },
  });
});
