import { defineShikiSetup } from "@slidev/types";

export default defineShikiSetup(async ({ loadTheme }) => {
  return {
    theme: {
      dark: await loadTheme("github-dark"),
      light: await loadTheme("github-light")
    }
  };
});
