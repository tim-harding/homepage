<template>
  <footer class="footer">
    <ol class="contact-links">
      <li>
        <Email></Email>
      </li>
      <li>
        <Phone></Phone>
      </li>
      <li>
        <Github></Github>
      </li>
      <li>
        <Linkedin></Linkedin>
      </li>
    </ol>
    <p>&copy; 2022 Timothy Jonas Harding</p>
  </footer>
</template>

<script setup lang="ts">
import Email from "./Email.vue";
import Phone from "./Phone.vue";
import Github from "./Github.vue";
import Linkedin from "./Linkedin.vue";
</script>

<style scoped>
.footer {
  background-color: var(--light-2);
  align-items: center;
  justify-items: center;
  padding-top: 1.25rem;
  padding-bottom: 1rem;
  gap: 0.75rem;
  border-top-style: solid;
  border-top-width: 2px;
  border-top-color: var(--light-3);
  z-index: 1;
}

.dark .footer {
  color: var(--light-3);
  background-color: var(--dark-2);
  border-top-color: var(--dark-3);
}

.contact-links {
  justify-self: center;
  width: min-content;
  grid-auto-flow: column;
  gap: 1rem;
}
</style>
