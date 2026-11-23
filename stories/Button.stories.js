// Кнопки: «Дивитись роботи» (.btn--dark) і «Замовити» (.btn--order)
const arrow =
  '<svg class="btn__arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12h17M13 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

export default {
  title: "Components/Button",
  parameters: {
    docs: {
      description: {
        component:
          "Кнопка за макетом Figma. Стани: default (`#140022`, білий текст), hover (заливка `#c6a2de` + рамка 1px), active при натисканні (темна заливка, білий текст, показується миттєво; у Storybook клас `is-pressed`), disabled (сірий). Перехід 600ms ease-out. Hover показано класом `is-hover`, disabled — атрибутом `aria-disabled=\"true\"`.",
      },
    },
  },
  argTypes: {
    label: { control: "text" },
    withArrow: { control: "boolean" },
  },
};

const dark = (extra = "", label = "Дивитись роботи", icon = true) =>
  `<a class="btn btn--dark ${extra}" href="#"${extra.includes("is-disabled") ? ' aria-disabled="true" tabindex="-1"' : ""}><span>${label}</span>${icon ? arrow : ""}</a>`;

const order = (extra = "", label = "Замовити") =>
  `<a class="btn btn--order ${extra}" href="#"${extra.includes("is-disabled") ? ' aria-disabled="true" tabindex="-1"' : ""}>${label}</a>`;

const column = (html) =>
  `<div style="display:flex;flex-direction:column;gap:20px;align-items:flex-start">${html}</div>`;

export const Dark = {
  args: { label: "Дивитись роботи", withArrow: true },
  render: ({ label, withArrow }) => dark("", label, withArrow),
};

export const DarkHover = { name: "Dark — hover", render: () => dark("is-hover") };
export const DarkActive = { name: "Dark — active (натиснення)", render: () => dark("is-pressed") };
export const DarkDisabled = { name: "Dark — disabled", render: () => dark("is-disabled") };
export const DarkWithoutIcon = { name: "Dark — без стрілки (Icon: off)", render: () => dark("", "Дивитись роботи", false) };

export const DarkStates = {
  name: "Dark — усі стани",
  render: () => column(`${dark()}${dark("is-hover")}${dark("is-pressed")}${dark("is-disabled")}`),
};

export const Order = {
  args: { label: "Замовити" },
  render: ({ label }) => order("", label),
};

export const OrderStates = {
  name: "Order — усі стани",
  render: () => column(`${order()}${order("is-hover")}${order("is-pressed")}${order("is-disabled")}`),
};
