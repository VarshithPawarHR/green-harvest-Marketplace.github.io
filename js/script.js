// Make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

// Pop-up message
const popup = document.getElementById("popup");
const popupClose = document.getElementById("popup-close");
const signUpButton = document.querySelector(".btn--form");

signUpButton.addEventListener("click", function () {
  popup.style.display = "block";
});

popupClose.addEventListener("click", function () {
  popup.style.display = "none";
});
