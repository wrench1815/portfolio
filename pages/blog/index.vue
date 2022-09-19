<template>
  <section>
    <div class="container-flui card rounded-0">
      <h3 class="mx-auto">Articles</h3>
    </div>

    <div class="container-fluid py-4">
      <div class="row">
        <div class="col">
          <div class="row g-4">
            <div
              class="col-12 col-md-6 col-lg-4"
              v-for="item in 10"
              :key="item"
            >
              <BlogCard />
            </div>
          </div>
        </div>
        <div class="col-3 d-none d-lg-block">
          <BlogRecentPosts />
        </div>
      </div>
    </div>

    <Lazy-BlogPagination class="mx-3" />
  </section>
</template>

<script>
export default {
  name: 'BlogIndex',

  head() {
    return {
      title: 'Blog | Hardeep Kumar',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Blog Index for my Portfolio',
        },
      ],
    }
  },
}
</script>

<style scoped></style>
