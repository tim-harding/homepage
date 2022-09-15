import { ref } from "vue";

const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
const currentTheme = localStorage.getItem("theme");
export const isLight = ref(
  currentTheme === null ? prefersLight : currentTheme === "light"
);
