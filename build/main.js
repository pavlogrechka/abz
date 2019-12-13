(function() {
  const burger = document.querySelector(".js-burger");
  const closeBg = document.querySelector(".js-bg");
  const burgerOpenClassName = "menu-open";
  // const fnToggleBurger = () => {
  //   document.body.classList.toggle("menu-open");
  // };
  const fnCloseBurger = () => {
    document.body.classList.remove(burgerOpenClassName);
  };
  const fnOpenBurger = () => {
    document.body.classList.add(burgerOpenClassName);
  };
  burger.addEventListener("click", fnOpenBurger);
  closeBg.addEventListener("click", fnCloseBurger);
})();
