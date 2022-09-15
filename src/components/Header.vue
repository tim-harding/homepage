<template>
  <input
    class="hidden"
    type="checkbox"
    name="menu-disclosure"
    id="menu-disclosure"
  />
  <header class="header">
    <div class="header-outer">
      <div class="header-inner">
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
        <label for="menu-disclosure" class="menu-disclosure-root">
          <div class="menu-disclosure-inner">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
        </label>
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
  align-items: flex-start;
  justify-items: center;
  transition: height 0.25s;
}

.dark .header {
  color: var(--light-3);
  background-color: var(--dark-2);
  border-bottom-color: var(--dark-3);
}

.header-outer {
  width: 100%;
  max-width: var(--page-width);
}

.header-inner {
  padding-left: 0.75rem;
  padding-right: 1rem;
  grid-template-columns: min-content 1fr min-content;
  grid-template-areas: "title nav theme";
  align-items: center;
  height: 3rem;
  overflow: hidden;
  transition: height 0.25s;
}

.site-title {
  font-weight: 700;
  font-size: 2rem;
  grid-area: title;
}

.links {
  font-size: 1.25rem;
  margin-top: 0.25rem;
  grid-area: nav;
}

.list {
  grid-auto-flow: column;
  align-items: flex-end;
  justify-items: flex-end;
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

.menu-disclosure-root {
  width: 36px;
  height: 36px;
  align-items: center;
  justify-items: center;
  transform: translateY(2px);
  margin-left: 0.5rem;
  display: none;
  cursor: pointer;
}

.menu-disclosure-inner {
  width: 22px;
  grid-template-rows: min-content min-content min-content;
  gap: 6px;
}

.line {
  height: 2px;
  background-color: var(--icon);
}

.hidden {
  position: absolute;
  left: -100vw;
}

@media (max-width: 32.5rem) {
  .menu-disclosure-root {
    display: grid;
  }

  .header-inner {
    grid-template-columns: 1fr min-content min-content;
    grid-template-rows: 3rem 1fr;
    grid-template-areas:
      "title theme disclosure"
      "nav nav nav";
    align-items: center;
  }

  .links {
    margin-top: 0.5rem;
    align-self: flex-start;
  }

  .list {
    justify-items: flex-start;
    grid-auto-flow: row;
    gap: 0.25rem;
  }

  .hidden:checked + .header {
    height: 8rem;
  }

  .hidden:checked + .header .header-inner {
    height: 8rem;
  }
}
</style>
