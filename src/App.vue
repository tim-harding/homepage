<template>
  <div class="root" :class="{ dark: !isLight }">
    <Header></Header>
    <main>
      <RouterView></RouterView>
    </main>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import { isLight } from "./state";
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<style scoped>
.root {
  min-height: 100vh;
  grid-template-rows: min-content 1fr min-content;
  background-color: var(--light-1);
  color: var(--dark-4);
  --icon: var(--dark-4);
  --hover: var(--frost-4);
}

.root.dark {
  background-color: var(--dark-1);
  color: var(--light-3);
  --icon: var(--light-3);
  --hover: var(--frost-3);
}
</style>
