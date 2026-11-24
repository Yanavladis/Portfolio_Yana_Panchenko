// Шапка десктопу: розміри зафіксовані за макетом Figma
export default {
  title: "Components/Header",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Десктоп (≥1200px): ширина 1720 (поля 100), висота 76 за вмістом, відступ зверху 30, лінія на 114 від верху (8 під шапкою). Зірка 68×68, текст Caps_24 (Montserrat Medium 24/28, трекінг 2%), меню з 4 об'єктів з відступом 64, відступи меню → EN/UA і EN/UA → «Замовити» по 60. Щоб побачити в натуральну величину, відкрийте Canvas на ширині 1920px.",
      },
    },
  },
};

const star =
  '<svg class="logo__star" viewBox="0 0 47 49" fill="none" aria-hidden="true"><path d="M22.4083 3.02777C23.5572 -1.54431 30.2877 -0.711646 30.2877 4.00255V17.3735L41.6537 14.2219C46.1189 12.9838 48.7644 19.0599 44.8159 21.485L33.2418 28.5936L39.8551 36.9808C42.6642 40.5435 38.3108 45.2914 34.5185 42.801L25.5612 36.9191L12.9035 47.5094C9.64706 50.234 4.9487 46.6769 6.68756 42.8034L13.0665 28.5936L1.40907 18.5164C-1.91139 15.646 1.14575 10.2966 5.30431 11.7004L19.0622 16.3447L22.4083 3.02777Z" fill="#C6A2DE"/></svg>';

export const Desktop = {
  render: () => `
    <div style="position:relative;height:calc(140 * var(--u))">
      <header class="header">
        <a class="logo" href="#">
          ${star}
          <span class="logo__text"><span>Яна Панченко</span><br><span>UX/UI дизайнер</span></span>
        </a>
        <nav class="nav">
          <a class="nav__link nav__link--dot" href="#">Роботи</a>
          <a class="nav__link" href="#">Послуги</a>
          <a class="nav__link" href="#">Процес</a>
          <a class="nav__link" href="#">Про мене</a>
        </nav>
        <div class="lang">
          <button type="button" class="lang__btn">EN</button>
          <span aria-hidden="true">/</span>
          <button type="button" class="lang__btn is-active">UA</button>
        </div>
        <a class="btn btn--order" href="#">Замовити</a>
      </header>
    </div>`,
};
