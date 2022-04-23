<template>
  <div>
    <Lazy-Header />
    <Lazy-Utils-Fading-Bg :direction="'down'" />
    <Lazy-Coming-Soon />
    <Lazy-Utils-Fading-Bg :direction="'up'" />
  </div>
</template>

<script>
export default {
  name: 'Index',
}
</script>

<style scoped></style>
