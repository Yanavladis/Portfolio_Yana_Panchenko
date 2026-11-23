// Ті самі стилі, що й на сайті
import "../css/styles.css";

/** @type { import('@storybook/html-vite').Preview } */
const preview = {
  parameters: {
    layout: "padded",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      options: {
        canvas: { name: "canvas", value: "#d9c9ec" },
        surface: { name: "surface", value: "#e7dcf3" },
      },
    },
    a11y: { test: "todo" },
  },
  initialGlobals: {
    backgrounds: { value: "canvas" },
  },
};

export default preview;
