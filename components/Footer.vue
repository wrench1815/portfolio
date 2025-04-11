<script lang="ts" setup>
import { RiTwitterXFill, RiGithubFill } from '@remixicon/vue'
import DevDotTo from './SVG/DevDotTo.vue'
</script>

<template>
  <footer class="footer items-center p-4 bg-neutral text-neutral-content">
    <div class="items-center grid-flow-col">
      <!-- Brand -->
      <NuxtLink to="/" class="normal-case text-3xl text-primary no-underline"
        >HK</NuxtLink
      >
      <p>Copyright © {{ new Date().getFullYear() }} - All right reserved</p>
    </div>
    <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      <a
        class="text-base-100"
        href="https://twitter.com/wrench1815"
        target="_blank"
      >
        <RiTwitterXFill />
      </a>
      <a
        class="text-base-100"
        href="https://dev.to/wrench1815/"
        target="_blank"
      >
        <DevDotTo class="w-6 h-6" />
      </a>
      <a
        class="text-base-100"
        href="https://github.com/wrench1815/"
        target="_blank"
      >
        <RiGithubFill name="ri-github-fill" />
      </a>
    </div>
  </footer>
</template>

<style scoped></style>
