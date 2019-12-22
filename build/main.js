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

//Input Mask
$(document).ready(function() {
  // console.log($(".js-input-phone"));

  $(".js-input-phone").inputmask("+38 (099) 999 99 99");
});
