// Картка кейсу з блоку «Кейси»
export default {
  title: "Components/Card",
  parameters: {
    docs: {
      description: {
        component: "Стани: default, hover (підйом на 4 одиниці макета), focus-visible.",
      },
    },
  },
  argTypes: {
    title: { control: "text" },
    text: { control: "text" },
    image: {
      control: "select",
      options: ["assets/img/case-foxy.jpg", "assets/img/case-lookatme.jpg", "assets/img/case-kinder.jpg"],
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
    <section class="cases" style="margin:0">
      <h2 class="cases__title">Кейси</h2>
      <div class="cases__grid">
        <a class="card" href="#"><img class="card__img" src="assets/img/case-foxy.jpg" width="540" height="300" alt=""><h3 class="card__title">Лендінг мерчу - для Фокстрот.</h3><p class="card__text">Проєкт гармонійно поєднує яскравий візуальний стиль та інтуїтивно зрозумілий інтерфейс.</p></a>
        <a class="card" href="#"><img class="card__img" src="assets/img/case-lookatme.jpg" width="540" height="300" alt=""><h3 class="card__title">Редизайн сайту для перукарні - Look At Me</h3><p class="card__text">Створено стильний та функціональний інтерфейс, який відповідає преміальному рівню послуг.</p></a>
        <a class="card" href="#"><img class="card__img" src="assets/img/case-kinder.jpg" width="540" height="300" alt=""><h3 class="card__title">Сервіс для пошуку дитячих гуртків - Kinder Clubs.</h3><p class="card__text">Зроблено пошук та бронювання дитячих гуртків простим, швидким та наочним.</p></a>
      </div>
    </section>`,
};
