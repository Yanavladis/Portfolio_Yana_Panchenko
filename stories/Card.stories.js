// Картка кейсу з блоку «Кейси»
export default {
  title: "Components/Card",
  parameters: {
    docs: {
      description: {
        component:
          "За макетом Figma: картка 540 × 456, вертикальний auto layout: картинка (540 × 300, радіус 16), відступ 20, блок заголовка 56, відступ 8, текст 72. Заголовок — Bold_24 (Montserrat Bold 24/28, трекінг 2%), блок заголовка завжди 56 (два рядки), основний текст — Medium_20 (Montserrat Medium 20/24, трекінг 2%). Колір тексту `#140022`. Блок «Кейси»: X 100, Y 1077, ширина 1720, padding 20/40/20/40, заголовок «Кейси» Bold_24. Стани: default, hover (підйом на 4 одиниці макета), focus-visible.",
      },
    },
  },
  argTypes: {
    title: { control: "text" },
    text: { control: "text" },
    image: {
      control: "select",
      options: ["assets/img/case-foxy.jpg", "assets/img/case-lookatme.jpg", "assets/img/case-parkcoffee.jpg", "assets/img/case-kinder.jpg"],
    },
  },
};

export const Case = {
  args: {
    title: "Лендінг мерчу - для Фокстрот.",
    text: "Проєкт гармонійно поєднує яскравий візуальний стиль та інтуїтивно зрозумілий інтерфейс.",
    image: "assets/img/case-foxy.jpg",
  },
  render: ({ title, text, image }) => `
    <div style="max-width:540px">
      <a class="card" href="#">
        <img class="card__img" src="${image}" width="540" height="300" alt="">
        <h3 class="card__title">${title}</h3>
        <p class="card__text">${text}</p>
      </a>
    </div>`,
};

export const Grid = {
  name: "Три кейси",
  render: () => `
    <section class="cases" style="margin:0;width:calc(1720 * var(--u))">
      <h2 class="cases__title">Кейси</h2>
      <div class="cases__grid">
        <a class="card" href="#"><img class="card__img" src="assets/img/case-foxy.jpg" width="540" height="300" alt=""><h3 class="card__title">Лендінг мерчу - для Фокстрот.</h3><p class="card__text">Проєкт гармонійно поєднує яскравий візуальний стиль та інтуїтивно зрозумілий інтерфейс.</p></a>
        <a class="card" href="#"><img class="card__img" src="assets/img/case-lookatme.jpg" width="540" height="300" alt=""><h3 class="card__title">Редизайн сайту для перукарні - Look At Me</h3><p class="card__text">Створено стильний та функціональний інтерфейс, який відповідає преміальному рівню послуг.</p></a>
        <a class="card" href="#"><img class="card__img" src="assets/img/case-parkcoffee.jpg" width="540" height="300" alt=""><h3 class="card__title">Лендінг для кав'ярні - Park Coffee</h3><p class="card__text">Зручні сценарії бронювання столика та перегляду відгуків допомагають гостям швидко обрати час для візиту.</p></a>
      </div>
    </section>`,
};
