window.addEventListener("click", (event) => {
  if (event.target.hasAttribute("data-cart")) {
    const cart = event.target.closest(".cart");
    const prodactInfo = {
      id: cart.dataset.id,
      img: cart.querySelector(".cart-img").getAttribute("src"),
      title: cart.querySelector(".cart-title").innerText,
    };
  }
});
