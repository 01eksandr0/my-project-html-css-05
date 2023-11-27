const animItems = document.querySelectorAll(".is-scrol");
if (animItems.length > 0) {
  function animScrol(par) {
    for (let i = 0; i < animItems.length; i += 1) {
      const animIt = animItems[i];
      const animItheight = animIt.offsetHeight;
      //   const animItoffset =
    }
  }
}

function offset(el) {
  const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
}
