/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
  ],
  framework: "@storybook/html-vite",
  // Картинки сайту (assets/img/...) доступні в історіях за тими самими шляхами, що й на сайті
  staticDirs: [{ from: "../assets", to: "/assets" }],
};
export default config;
