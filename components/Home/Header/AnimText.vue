<script lang="ts" setup>
import Typed from 'typed.js';

const typing = ref(null);
const loading = ref(true);

onMounted(() => {
  loading.value = false;

  new Typed(typing.value, {
    strings: ['Full Stack', 'Backend', 'APIs', 'Vue/Nuxt'],
    typeSpeed: 100,
    backSpeed: 30,
    backDelay: 1000,
    loop: true,
  });
});
</script>

<template>
  <h1 class="font-medium">
    Myself Hardeep Kumar and I develop
    <span class="text-primary" v-if="loading">Vue/Nuxt</span>
    <span class="text-primary" ref="typing"></span>
  </h1>
</template>

<style scoped></style>
