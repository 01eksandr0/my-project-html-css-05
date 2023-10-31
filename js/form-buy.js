const formBuy = document.querySelector(".form-buy-dad");
const openFormBuy = document.querySelector(".btn-open-form");
const closeFormBuy = document.querySelector(".form-btn-close");
const continueShoping = document.querySelector(".form-btn-close-second");

openFormBuy.addEventListener("click", () => {
  formBuy.classList.toggle("is-show");
});
closeFormBuy.addEventListener("click", () => {
  formBuy.classList.remove("is-show");
});
continueShoping.addEventListener("click", () => {
  formBuy.classList.remove("is-show");
});
