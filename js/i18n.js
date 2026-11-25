/* Двомовність UA / EN. Тексти з data-i18n підміняються за словником. */
(function () {
  var DICT = {
    uk: {
      "logo.name": "Яна Панченко", "logo.role": "UX/UI дизайнер",
      "nav.works": "Роботи", "nav.services": "Послуги", "nav.process": "Процес", "nav.about": "Про мене", "nav.order": "Замовити",
      "hero.t1": "Дизайн,", "hero.t2": "що працює", "hero.t3": "на вас",
      "hero.tag": "Аналіз. Стратегія. Дизайн.",
      "hero.lead": "Проєктую зрозумілі інтерфейси для бізнесу, допомагаючи ефективно виділитися серед конкурентів.",
      "hero.works": "Дивитись роботи", "hero.discuss": "Обговорити проєкт",
      "chip.city": "Київ.Україна", "chip.mode": "Фріланс/ Найм", "chip.remote": "Дистанційно",
      "cases.title": "Кейси",
      "case1.title": "Лендінг мерчу - для Фокстрот.",
      "case1.text": "Проєкт гармонійно поєднує яскравий візуальний стиль та інтуїтивно зрозумілий інтерфейс.",
      "case2.title": "Редизайн сайту для перукарні - Look At Me",
      "case2.text": "Створено стильний та функціональний інтерфейс, який відповідає преміальному рівню послуг.",
      "case3.title": "Лендінг для кав'ярні - Park Coffee",
      "case3.text": "Зручні сценарії бронювання столика та перегляду відгуків допомагають гостям швидко обрати час для візиту."
    },
    en: {
      "logo.name": "Yana Panchenko", "logo.role": "UX/UI designer",
      "nav.works": "Works", "nav.services": "Services", "nav.process": "Process", "nav.about": "About me", "nav.order": "Order",
      "hero.t1": "Design", "hero.t2": "that works", "hero.t3": "for you",
      "hero.tag": "Analysis. Strategy. Design",
      "hero.lead": "I design clear interfaces for business, helping you stand out effectively from the competition.",
      "hero.works": "View works", "hero.discuss": "Discuss a project",
      "chip.city": "Kyiv.Ukraine", "chip.mode": "Freelance / Hire", "chip.remote": "Remote",
      "cases.title": "Case studies",
      "case1.title": "Merch landing page - for Foxtrot.",
      "case1.text": "The project blends a vivid visual style with an intuitive, easy-to-understand interface.",
      "case2.title": "Barbershop website redesign - Look At Me",
      "case2.text": "A stylish, functional interface that matches the premium level of the service.",
      "case3.title": "Landing page for a coffee shop - Park Coffee",
      "case3.text": "Convenient scenarios for booking a table and viewing reviews help guests quickly choose a time to visit."
    }
  };

  function apply(lang) {
    var d = DICT[lang] || DICT.uk;
    document.documentElement.lang = lang === "en" ? "en" : "uk";
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = d[el.getAttribute("data-i18n")];
      if (v) el.textContent = v;
    });
    document.querySelectorAll(".lang__btn").forEach(function (b) {
      b.classList.toggle("is-active", b.getAttribute("data-lang") === lang);
    });
    document.title = lang === "en" ? "Yana Panchenko — UX/UI designer" : "Яна Панченко — UX/UI дизайнер";
    try { localStorage.setItem("lang", lang); } catch (e) {}
  }

  var saved = "uk";
  try { saved = localStorage.getItem("lang") || "uk"; } catch (e) {}
  if (saved !== "uk") apply(saved);

  document.querySelectorAll(".lang__btn").forEach(function (b) {
    b.addEventListener("click", function () { apply(b.getAttribute("data-lang")); });
  });
})();
