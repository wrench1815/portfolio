<template>
  <div>
    <Lazy-NavBar />
    <div class="bg-pattern h-100 position-fixe z-index-n">
      <Nuxt />
      <Lazy-Footer />
      <Lazy-Utils-ToUp />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style></style>
