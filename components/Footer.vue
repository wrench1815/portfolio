<script lang="ts" setup></script>

<template>
  <footer class="footer items-center p-4 bg-neutral text-neutral-content">
    <div class="items-center grid-flow-col">
      <!-- Brand -->
      <NuxtLink to="/" class="normal-case text-3xl text-primary">HK</NuxtLink>
      <p>Copyright © {{ new Date().getFullYear() }} - All right reserved</p>
    </div>
    <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      <a href="https://twitter.com/wrench1815" target="_blank">
        <v-icon name="ri-twitter-fill" scale="1.2" />
      </a>
      <a href="https://dev.to/wrench1815/" target="_blank">
        <v-icon name="si-devdotto" scale="1.5" />
      </a>
      <a href="https://github.com/wrench1815/" target="_blank">
        <v-icon name="ri-github-fill" scale="1.2" />
      </a>
    </div>
  </footer>
</template>

<style scoped></style>
