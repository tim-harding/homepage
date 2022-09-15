<template>
  <a class="link" href="tel:+12068524199">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <title>Phone</title>
      <path
        d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.445 17.827c-3.684 1.684-9.401-9.43-5.8-11.308l1.053-.519 1.746 3.409-1.042.513c-1.095.587 1.185 5.04 2.305 4.497l1.032-.505 1.76 3.397-1.054.516z"
        class="phone"
      />
    </svg>
  </a>
</template>

<script setup lang="ts"></script>

<style scoped>
.phone {
  fill: var(--icon);
}

.link:hover .phone {
  fill: var(--hover);
}
</style>
