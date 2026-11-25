// Перемикач CTA: «Дивитись роботи» / «Обговорити проєкт»
const arrow =
  '<svg class="btn__arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12h17M13 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

export default {
  title: "Components/Toggle (CTA)",
  parameters: {
    docs: {
      description: {
        component:
          "Клік на «Обговорити проєкт» → стан `click`, клік на «Дивитись роботи» → повернення до `default`. Auto layout: gap 24, padding 12 (16 з боку неактивного пункту). Активний пункт — компонент Button (padding 24, gap 10, висота 76, радіус 16, `#140022`) з його станами hover і active; блок 100 заввишки. Текст неактивного пункту `#140022` в обох станах. Анімація 600ms ease-out.",
      },
    },
  },
  argTypes: {
    state: { control: "inline-radio", options: ["default", "click"] },
    first: { control: "text" },
    second: { control: "text" },
  },
};

const build = ({ state, first, second }) => {
  const wrap = document.createElement("div");
  wrap.innerHTML = `
    <div class="cta" data-state="${state}" style="position:relative;left:0;top:0;display:inline-flex">
      <a class="cta__item ${state === "default" ? "is-active" : ""}" href="#" data-cta="default"><span>${first}</span>${arrow}</a>
      <a class="cta__item ${state === "click" ? "is-active" : ""}" href="#" data-cta="click"><span>${second}</span>${arrow}</a>
    </div>`;
  const cta = wrap.firstElementChild;
  cta.addEventListener("click", (e) => {
    e.preventDefault();
    const item = e.target.closest("[data-cta]");
    if (!item) return;
    cta.setAttribute("data-state", item.dataset.cta);
    cta.querySelectorAll("[data-cta]").forEach((el) => el.classList.toggle("is-active", el === item));
  });
  return wrap;
};

const args = { state: "default", first: "Дивитись роботи", second: "Обговорити проєкт" };

export const Default = { args, render: build };
export const Click = { name: "Click", args: { ...args, state: "click" }, render: build };
