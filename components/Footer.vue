<template>
  <footer>
    <Lazy-Utils-Fading-Bg :direction="'up'" />
    <div class="bg-white">
      <div class="card-body pb-3 d-flex flex-column align-items-lg-center">
        <div class="d-flex flex-wrap gap-1">
          built with <i class="ri-heart-3-fill text-danger"></i>
        </div>
        <div class="d-flex flex-wrap gap-1">
          Hardeep Kumar(wrench1815) <i class="ri-copyright-line"></i>
          {{ new Date().getFullYear() }}
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style></style>
