const dadWraper = document.querySelector(".form-add");
const shopButtons = document.querySelectorAll(".shop-btn");

shopButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const cart = event.target.closest(".cart");
    const prodactInfo = {
      id: cart.dataset.id,
      img: cart.querySelector(".cart-img").getAttribute("src"),
      title: cart.querySelector(".cart-title").innerText,
      price: cart.querySelector(".cart-price").innerText,
    };
    const cartItem = `<div class="form-prod" data-id="${prodactInfo.id}">
            <div class="aaa">
              <h3 class="form-buy-title-prod">
                ${prodactInfo.title}               </h3>
              <div class="form-buy-img-cont">
                <img
                  src="${prodactInfo.img}"
                  alt=""
                  width="81"
                  height="115"
               />
              </div>
            </div>
            <div class="aaa">               <p class="form-prod-price">
                 Ціна за 1 шт: <span class="form-prod-price-part">${prodactInfo.price}</span>
               </p>
               <p class="form-prod-made">
                 Виробник<br /><span class="form-prod-made-part"                   >ФМС Украина</span
                 >
               </p>
              <div class="form-buy-quantity">
                 <p class="form-buy-paragraph-qu">Кількість</p>
                 <button class="form-buy-minus" type="button">-</button>
                 <p class="form-quantity">1</p>
                 <button class="form-buy-plus" type="button">+</button>
               </div>
             </div>
           </div>`;
    const itemInCart = dadWraper.querySelector(`[data-id='${prodactInfo.id}']`);
    if (itemInCart) {
      const counterElement = itemInCart.querySelector(".form-quantity");
      counterElement.innerText = parseInt(counterElement.innerText) + 1;
    } else {
      dadWraper.insertAdjacentHTML("beforeend", cartItem);
    }
  });
});
