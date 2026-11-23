// Кнопки: .btn (темна заливка) та .cta__link (текстове посилання)
const arrow =
  '<svg class="btn__arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12h17M13 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

export default {
  title: "Components/Button",
  parameters: {
    docs: {
      description: {
        component:
          "Стани: default, hover (фон `#2c0a47`, підйом на 2px), focus-visible (контур 3px). Стану active, disabled і loading у проєкті немає.",
      },
    },
  },
  argTypes: {
    label: { control: "text" },
    withArrow: { control: "boolean" },
  },
};

export const Dark = {
  args: { label: "Дивитись роботи", withArrow: true },
  render: ({ label, withArrow }) =>
    `<a class="btn btn--dark" href="#"><span>${label}</span>${withArrow ? arrow : ""}</a>`,
};

const dark = (extra = "", label = "Дивитись роботи", icon = true) =>
  `<a class="btn btn--dark ${extra}" href="#"${extra.includes("is-disabled") ? ' aria-disabled="true" tabindex="-1"' : ""}><span>${label}</span>${icon ? arrow : ""}</a>`;

export const DarkHover = {
  name: "Dark — hover",
  render: () => dark("is-hover"),
};

export const DarkDisabled = {
  name: "Dark — disabled",
  render: () => dark("is-disabled"),
};

export const DarkWithoutIcon = {
  name: "Dark — без стрілки (Icon: off)",
  render: () => dark("", "Дивитись роботи", false),
};

export const DarkStates = {
  name: "Dark — усі стани",
  render: () =>
    `<div style="display:flex;flex-direction:column;gap:20px;align-items:flex-start">
      ${dark()}${dark("is-hover")}${dark()}${dark("is-disabled")}
    </div>`,
};

export const Order = {
  args: { label: "Замовити" },
  render: ({ label }) => `<a class="btn btn--order" href="#">${label}</a>`,
};

export const TextLink = {
  args: { label: "Обговорити проєкт" },
  render: ({ label }) => `<a class="cta__link" href="#">${label}</a>`,
};

export const CtaBlock = {
  name: "CTA-блок (кнопка + посилання)",
  render: () => `
    <div class="cta" style="position:relative;left:0;top:0">
      <a class="btn btn--dark" href="#"><span>Дивитись роботи</span>${arrow}</a>
      <a class="cta__link" href="#">Обговорити проєкт</a>
    </div>`,
};
