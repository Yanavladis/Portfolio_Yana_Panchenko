// Іконки соцмереж з градієнтною лінією під ними
export default {
  title: "Components/Social",
  parameters: {
    docs: {
      description: {
        component: "Стани: default, hover (`opacity .6`), focus-visible. Посилання поки що ведуть на `#`.",
      },
    },
  },
};

export const Icons = {
  render: () => `
    <ul class="social" style="position:relative;left:0;top:0;width:auto;display:inline-flex">
      <li><a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><path d="M7 10v7M7 7v.01M11 17v-7M11 13a3 3 0 0 1 6 0v4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></a></li>
      <li><a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/></svg></a></li>
      <li><a href="#" aria-label="Behance"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><path d="M6 8h3.5a1.8 1.8 0 0 1 0 3.6H6zM6 11.6h4a2 2 0 0 1 0 4H6zM13.5 8h4M13.5 13.5h4a2 2 0 1 0-2 2" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></a></li>
    </ul>`,
};
