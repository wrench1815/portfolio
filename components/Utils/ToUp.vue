<template>
  <div
    class="position-sticky bottom-0 d-flex justify-content-end align-items-center"
  >
    <div
      class="btn btn-secondary btn-floating m-2"
      @click="toUp()"
      v-if="showTopBtn"
    >
      <i class="ri-arrow-up-s-line fs-4"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToUp',

  data() {
    return {
      showTopBtn: false,
    }
  },

  methods: {
    toUp() {
      setTimeout(() => {
        window.scroll({ top: 0, behavior: 'smooth' })
      }, 100)
    },
  },

  mounted() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        this.showTopBtn = true
      } else {
        this.showTopBtn = false
      }
    })
  },
}
</script>

<style></style>
