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

  head() {
    return {
      title: 'Home | Hardeep Kumar',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Home Page of my Portfolio',
        },
      ],
    }
  },
}
</script>

<style scoped></style>
