const formBuy = document.querySelector(".form-buy-dad");
const openFormBuy = document.querySelector(".btn-open-form");
const closeFormBuy = document.querySelector(".form-btn-close");

openFormBuy.addEventListener("click", () => {
  formBuy.classList.toggle("is-show");
});
closeFormBuy.addEventListener("click", () => {
  formBuy.classList.remove("is-show");
});
