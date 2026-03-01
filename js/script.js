"use strict";

/* -------------------------------------------------
   1) SCROLL-OBSERVER: Tildel .show-animate ved scroll
--------------------------------------------------- */
const sections = document.querySelectorAll("section");

window.onscroll = () => {
  sections.forEach((sec) => {
    const scrollDistance = window.scrollY;
    const secDistance = sec.offsetTop;

    if (scrollDistance >= secDistance) {
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });
};

/* -------------------------------------------------
   2) HOVER-EFFEKT PÅ FØRSTE SEKTION
--------------------------------------------------- */
const sectionOne = document.querySelector(".sec1");

if (sectionOne) {
  sectionOne.addEventListener("mouseover", function () {
    this.classList.add("scale");
  });

  sectionOne.addEventListener("mouseout", function () {
    this.classList.remove("scale");
  });
}


/* -------------------------------------------------
   3) VIA BILER – FLIP CARDS MED LYD
--------------------------------------------------- */

// ✅ OPGAVE 6: Variabel til lydfilen (stien er fra js/ mappen, så vi går et niveau op med ../)
const engineSound = new Audio("sound/car-engine-sound.mp3");

// ✅ OPGAVE 7: Variabler til de 3 bil-kort med querySelector() og #id
const car1 = document.querySelector("#car1");
const car2 = document.querySelector("#car2");
const car3 = document.querySelector("#car3");

// ✅ OPGAVE 8: if-tjek → afspil lyd → flip kort

if (car1) {
  car1.addEventListener("click", function () {
    engineSound.currentTime = 0; // Start lyden forfra ved hvert klik
    engineSound.play();
    car1.classList.toggle("flipped");
  });
}

if (car2) {
  car2.addEventListener("click", function () {
    engineSound.currentTime = 0;
    engineSound.play();
    car2.classList.toggle("flipped");
  });
}

if (car3) {
  car3.addEventListener("click", function () {
    engineSound.currentTime = 0;
    engineSound.play();
    car3.classList.toggle("flipped");
  });
}