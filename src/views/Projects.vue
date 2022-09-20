<template>
  <div class="projects-outer">
    <div class="projects-inner">
      <h2 class="page-title">Projects</h2>
      <ul class="cards">
        <li>
          <ProjectCard></ProjectCard>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProjectCard from "@/components/ProjectCard.vue";
</script>

<style scoped>
.projects-outer {
  width: 100%;
  max-width: var(--page-width);
  justify-self: center;
}

.projects-inner {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 2rem;
}

.page-title {
  font-size: 2rem;
  font-weight: 600;
}

.cards {
  grid-template-columns: 1fr 1fr;
}
</style>
