import gsap from "gsap";

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".main-cta-row", {
    scrollTrigger: {
      trigger: ".main-cta-row",
      start: "top bottom", // Trigger animation when top of the element hits the bottom of the viewport
      end: "50%", // Trigger animation when bottom of the element hits the top of the viewport
      scrub: true, // Smooth animation effect
      markers: true, // Show markers for debugging
    },
    clipPath: "polygon(0% 120%, 120% 120%, 120% 0%, 0% 0%)", // Full square clip path
    opacity: 1, // Start with full opacity
    ease: "power1.out", // Animation ease
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
      markers: true, // Show markers for debugging
    },
    clipPath: "polygon(0% 120%, 120% 120%, 120% 0%, 0% 0%)", // Full square clip path
    opacity: 1, // Start with full opacity
    ease: "power1.out", // Animation ease
    onUpdate: function () {
      // Update opacity based on scroll progress
      gsap.set(".skill-card", { opacity: ScrollTrigger.progress });
    },
  });

  gsap.to(".skill-card", {
    scrollTrigger: {
      trigger: ".skill-card",
      start: "top bottom", // Trigger animation when top of the element hits the bottom of the viewport
      end: "bottom top", // Trigger animation when bottom of the element hits the top of the viewport
      scrub: true, // Smooth animation effect
      markers: true, // Show markers for debugging
    },
    clipPath: "polygon(0% 120%, 120% 120%, 120% 0%, 0% 0%)", // Full square clip path
    opacity: 1, // Start with full opacity
    ease: "power1.out", // Animation ease
    onUpdate: function () {
      // Update opacity based on scroll progress
      gsap.set(".skill-card", { opacity: ScrollTrigger.progress });
    },
  });
});
