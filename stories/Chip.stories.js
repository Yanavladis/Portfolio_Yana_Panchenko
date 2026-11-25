// Чипи «Київ.Україна», «Фріланс/ Найм», «Дистанційно» (не інтерактивні)
// Фон сторінки підкладено, щоб було видно ефект скла (Glass) і градієнтну обводку.
export default {
  title: "Components/Chip",
  parameters: {
    docs: {
      description: {
        component:
          "За макетом Figma: чип 293 × 70, padding 12/20/20/20, gap усередині 0, текст 24, радіус 16, заливка `#FFFFFF` 20%, ефект Glass (наближено: розмиття фону + внутрішнє світло), обводка 1px всередині з градієнтом `#140022` до 50%, далі зникає вправо. Група з 3 чипів 293 × 266, відступ між чипами 28.",
      },
    },
  },
  decorators: [
    (story) => {
      const wrap = document.createElement("div");
      wrap.style.cssText =
        "padding:40px;background:url('assets/img/hero-bg.webp') center / cover no-repeat;min-height:320px";
      const content = story();
      if (typeof content === "string") wrap.innerHTML = content;
      else wrap.appendChild(content);
      return wrap;
    },
  ],
  argTypes: { label: { control: "text" } },
};

export const Single = {
  args: { label: "Київ.Україна" },
  render: ({ label }) =>
    `<ul class="chips" style="position:relative;left:0;top:0"><li class="chip"><span>${label}</span></li></ul>`,
};

export const List = {
  render: () => `
    <ul class="chips" style="position:relative;left:0;top:0">
      <li class="chip"><span>Київ.Україна</span></li>
      <li class="chip"><span>Фріланс/ Найм</span></li>
      <li class="chip"><span>Дистанційно</span></li>
    </ul>`,
};
