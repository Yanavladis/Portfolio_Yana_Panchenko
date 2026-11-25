// Іконки соцмереж з градієнтною лінією під ними
export default {
  title: "Components/Social",
  parameters: {
    docs: {
      description: {
        component:
          "За макетом Figma: блок 176 × 65 (за вмістом), іконки 48 × 48 (малюнок 28), gap 8, padding 8, колір `#140022`; знизу лінія 1px з градієнтом `#140022` до 50%, далі зникає вправо. Behance: вектор «Be» 16 × 10, обводка 2, круглі кінці. Стани: default, hover (`opacity .6`), focus-visible. Посилання поки що ведуть на `#`.",
      },
    },
  },
};

export const Icons = {
  render: () => `
    <ul class="social" style="position:relative;left:0;top:0;width:auto;display:inline-flex">
      <li><a href="#" aria-label="LinkedIn"><svg viewBox="1 1 22 22" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><path d="M7 10v7M7 7v.01M11 17v-7M11 13a3 3 0 0 1 6 0v4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></a></li>
      <li><a href="#" aria-label="Instagram"><svg viewBox="1 1 22 22" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/></svg></a></li>
      <li><a href="#" aria-label="Behance"><svg viewBox="0 0 28 28" aria-hidden="true"><rect x="1.5" y="1.5" width="25" height="25" rx="6.5" fill="none" stroke="currentColor" stroke-width="3"/><path d="M6 9v10M6 9h4a2.5 2.5 0 0 1 0 5H6M6 14h5a2.5 2.5 0 0 1 0 5H6M16 16h6a3 3 0 1 0-.88 2.12M18 10h3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></a></li>
    </ul>`,
};
