<template>
  <div class="home-root">
    <div class="home-content">
      <h2 class="intro">Hi, I'm <span class="name">Tim</span>.</h2>
      <p class="first-body-line body-text">
        Software developer. Student. Spice enthusiast. <br />
        Learn more about
        <RouterLink class="body-link" to="/resume">me</RouterLink> or my
        <RouterLink class="body-link" to="/projects">projects</RouterLink>.
      </p>
    </div>
    <div class="doggo">
      <DoggoLegs class="doggo-legs"></DoggoLegs>
      <DoggoBody class="doggo-body"></DoggoBody>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import DoggoLegs from "@/components/DoggoLegs.vue";
import DoggoBody from "@/components/DoggoBody.vue";
</script>

<style scoped>
.home-root {
  justify-self: center;
  max-width: var(--page-width);
  width: 100%;
  margin-top: 2rem;
}

.home-content {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  height: min-content;
  gap: 0.5rem;
}

.name {
  font-weight: 600;
  color: var(--red);
}

.first-body-line {
  margin-top: 1rem;
}

.intro {
  font-size: 3rem;
  display: block;
}

.body-text {
  display: block;
  font-size: 1.5rem;
}

.body-link {
  display: inline;
  text-decoration: underline;
}

.body-link:hover {
  color: var(--hover);
}

.doggo {
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-self: flex-end;
  align-self: flex-end;
  position: relative;
  top: 60px;
  left: 120px;
}

.doggo-legs {
  grid-row: 1;
  grid-column: 1;
  z-index: 2;
}

.doggo-body {
  grid-row: 1;
  grid-column: 1;
}
</style>
