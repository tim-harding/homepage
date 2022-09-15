<template>
  <header class="header">
    <div class="outer">
      <div class="inner">
        <h1 class="site-title">
          <RouterLink class="link" to="/">Tim&nbsp;Harding</RouterLink>
        </h1>
        <nav class="links">
          <ol class="list">
            <li>
              <RouterLink class="link" to="/projects">Projects</RouterLink>
            </li>
            <li>
              <RouterLink class="link" to="/resume">Resume</RouterLink>
            </li>
          </ol>
        </nav>
        <ThemeButton class="theme-button"></ThemeButton>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { RouterLink } from "vue-router";
import ThemeButton from "./ThemeButton.vue";
</script>

<style scoped>
.header {
  color: var(--dark-4);
  background-color: var(--light-2);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: var(--light-3);
  height: 3rem;
  align-items: center;
}

.dark .header {
  color: var(--light-3);
  background-color: var(--dark-2);
  border-bottom-color: var(--dark-3);
}

.outer {
  width: 100%;
  max-width: var(--page-width);
  justify-self: center;
}

.inner {
  padding-left: 0.75rem;
  padding-right: 1rem;
  grid-template-columns: min-content 1fr min-content;
}

.site-title {
  font-weight: 700;
  font-size: 2rem;
}

.links {
  font-size: 1.25rem;
}

.list {
  grid-auto-flow: column;
  align-items: flex-end;
  margin-bottom: 0.25rem;
  justify-items: end;
  gap: 1.5rem;
}

.link:hover {
  color: var(--hover);
}

.theme-button {
  align-self: center;
  margin-left: 1rem;
  transform: translateY(2px);
}
</style>
