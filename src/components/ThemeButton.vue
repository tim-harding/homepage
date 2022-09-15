<template>
  <button class="theme-toggle" @click="toggle()">
    <Sun class="sun"></Sun>
    <Moon class="moon"></Moon>
  </button>
</template>

<script setup lang="ts">
import { isLight } from "../state";
import Sun from "./Sun.vue";
import Moon from "./Moon.vue";

function toggle() {
  isLight.value = !isLight.value;
  localStorage.setItem("theme", isLight.value ? "light" : "dark");
}
</script>

<style scoped>
.theme-toggle {
  width: 2rem;
  height: 2rem;
  align-items: center;
  justify-items: center;
  overflow: hidden;
}

.sun,
.moon {
  grid-row: 1;
  grid-column: 1;
}

.moon {
  opacity: 0;
}

.dark .moon {
  opacity: 100;
}

.dark .sun {
  opacity: 0;
}
</style>
