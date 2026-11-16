/* Мобільне меню */
(function () {
  var burger = document.getElementById("burger");
  var nav = document.getElementById("nav");
  if (!burger || !nav) return;
  function setOpen(open) {
    nav.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
  }
  burger.addEventListener("click", function () { setOpen(!nav.classList.contains("is-open")); });
  nav.addEventListener("click", function (e) { if (e.target.closest("a")) setOpen(false); });
  window.addEventListener("resize", function () { if (window.innerWidth >= 1200) setOpen(false); });
})();
