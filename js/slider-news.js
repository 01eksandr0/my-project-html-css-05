//slider news section
let offset = 0;
const slider = document.querySelector(".news-list");
document
  .querySelector(".news-slide-btn-second")
  .addEventListener("click", function () {
    offset += 255 + 30;
    if (offset > 800) {
      offset = -255 - 30;
    }
    slider.style.left = -offset + "px";
  });
document
  .querySelector(".news-slide-btn-first")
  .addEventListener("click", function () {
    offset -= 255 + 30;
    if (offset < -285) {
      offset = 255 + 30 + 255 + 30;
    }
    slider.style.left = -offset + "px";
  });
// slider pormotion section
let prom = 0;
const sliderProm = document.querySelector(".promotion-list");
document
  .querySelector(".promotion-slide-btn-second")
  .addEventListener("click", function () {
    prom += 255 + 30;
    if (prom > 800) {
      prom = -255 - 30;
    }
    sliderProm.style.left = -prom + "px";
  });
document
  .querySelector(".promotion-slide-btn-first")
  .addEventListener("click", function () {
    prom -= 255 + 30;
    if (prom < -285) {
      prom = 255 + 30 + 255 + 30;
    }
    sliderProm.style.left = -prom + "px";
  });
//  slider partners
let partner = 0;
const sliderPartner = document.querySelector(".partners-list");
document
  .querySelector(".partner-slide-btn-second")
  .addEventListener("click", function () {
    partner += 255 + 30;
    if (partner > 1200) {
      partner = -255 - 30;
    }
    sliderPartner.style.left = -partner + "px";
  });
document
  .querySelector(".partner-slide-btn-first")
  .addEventListener("click", function () {
    partner -= 255 + 30;
    if (partner < -200) {
      partner = 255 + 30 + 255 + 30 + 255 + 30 + 255 + 30;
    }
    sliderPartner.style.left = -partner + "px";
  });
