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
              <div class="card hover-shadow hover-card">
                <div
                  class="bg-image hover-overlay ripple blob"
                  data-mdb-ripple-color="primary"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
                    class="card-img-top blob"
                    alt="Fissure in Sandstone"
                  />
                  <a href="#!">
                    <div class="mask mid-slas"></div>
                  </a>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Clay Style</h5>
                  <p class="card-text">
                    This css is just a test to see how Clay Design will look
                    like if Implemented.
                    <br />
                    Other than that it serve no purpose at all. Its just an
                    Experiment
                  </p>
                  <button type="button" class="btn btn-primary blob-anim">
                    Button
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3 d-none d-lg-block">
          <div class="card position-sticky top">
            <div class="card-body">
              <h5 class="card-title">Recent Posts</h5>
              <ul class="list-unstyled">
                <li v-for="item in 6" :key="item">Item {{ item }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <nav aria-label="..." class="">
      <ul class="pagination">
        <li class="page-item disabled">
          <a class="page-link">Previous</a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item active" aria-current="page">
          <a class="page-link" href="#"
            >2 <span class="visually-hidden">(current)</span></a
          >
        </li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.radius-top-32px {
  border-radius: 32px;
}

/* slash in the midddle gradient */
.mid-slash {
  background: conic-gradient(
    from 225deg at 100% 50%,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1)
  );
}

.top {
  top: 70px !important;
}

.hover-card:hover {
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  transform: scale(1.05);
}
</style>
