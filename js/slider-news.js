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
    if (offset < 0) {
      offset = 255 + 30 + 255 + 30;
    }
    slider.style.left = -offset + "px";
  });
