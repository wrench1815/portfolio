<script lang="ts" setup>
import Typed from 'typed.js'

const typing = ref<string>('')
const loading = ref(true)

onMounted(() => {
  loading.value = false

  new Typed(typing.value, {
    strings: ['Full Stack', 'Backend', 'APIs', 'Vue/Nuxt', 'POC'],
    typeSpeed: 100,
    backSpeed: 30,
    backDelay: 1000,
    loop: true,
  })
})
</script>

<template>
  <h1 class="flex flex-wrap">
    Myself Hardeep Kumar and I develop
    <span class="text-primary" v-if="loading">Vue/Nuxt</span>
    <span class="text-primary" ref="typing"></span>
  </h1>
</template>

<style scoped></style>
