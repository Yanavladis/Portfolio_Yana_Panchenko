// Чипи «Київ.Україна», «Фріланс/ Найм», «Дистанційно» (не інтерактивні)
export default {
  title: "Components/Chip",
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
