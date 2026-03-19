import "./style.scss";
import { initStarsCanvas } from "./stars";

initStarsCanvas();

const nav = document.querySelector<HTMLElement>("#nav");

if (nav) {
  requestAnimationFrame(() => {
    nav.classList.add("nav-visible");
  });

  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY <= 0) {
      nav.classList.remove("nav-hidden");
      nav.classList.add("nav-visible");
      lastScrollY = currentScrollY;
      return;
    }

    if (currentScrollY > lastScrollY && currentScrollY > 80) {
      nav.classList.add("nav-hidden");
      nav.classList.remove("nav-visible");
    } else {
      nav.classList.remove("nav-hidden");
      nav.classList.add("nav-visible");
    }

    lastScrollY = currentScrollY;
  });
}
