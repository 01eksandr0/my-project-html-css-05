(() => {
  const refs = {
    openModalBtn: document.querySelector("#btn-open-menu"),
    closeModalBtn: document.querySelector("#btn-close-burger"),
    modal: document.querySelector("#mobil-menu-burger"),
    closeMenuLink: document.querySelectorAll(".mob-nav-link"),
  };
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.closeMenuLink.forEach((item) =>
    item.addEventListener("click", toggleModal)
  );
  function toggleModal() {
    refs.modal.classList.toggle("is-open");
  }
})();
