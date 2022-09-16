<template>
  <div class="card position-sticky top">
    <div class="card-body">
      <h5 class="card-title">Recent Posts</h5>
      <ul class="list-unstyled">
        <li v-for="item in 6" :key="item">Item {{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogRecentPosts',
}
</script>

<style scoped>
.top {
  top: 70px !important;
}
</style>
