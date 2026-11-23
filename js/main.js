/* Перемикач CTA: «Обговорити проєкт» → стан click, «Дивитись роботи» → назад до default */
(function () {
  var cta = document.querySelector(".cta[data-state]");
  if (!cta) return;
  var items = cta.querySelectorAll("[data-cta]");
  cta.addEventListener("click", function (e) {
    var item = e.target.closest("[data-cta]");
    if (!item) return;
    cta.setAttribute("data-state", item.getAttribute("data-cta"));
    items.forEach(function (el) {
      var on = el === item;
      el.classList.toggle("is-active", on);
      if (on) el.setAttribute("aria-current", "true"); else el.removeAttribute("aria-current");
    });
  });
})();

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
