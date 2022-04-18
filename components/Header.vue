<template>
  <header>
    <div class="page-header">
      <div
        class="fixed-top me-auto w-100 w-lg-50 h-100 z-index header-img"
        loading="lazy"
      ></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-5"></div>
          <div
            class="col-lg-7 d-flex justify-content-center align-items-center"
            style="height: 70vh"
          >
            <div
              class="card card-body blur d-flex justify-content-center shadow-lg p-5 mt-5"
            >
              <h1>Hardeep Kumar</h1>
              <vue-typed-js
                :strings="['Full Stack', 'Backend', 'APIs']"
                :loop="true"
                :backDelay="1000"
                :backSpeed="30"
              >
                <p class="lead font-weight-bold fs-4 mb-0">
                  I develop: <span class="typing font-weight-normal"></span>
                </p>
              </vue-typed-js>

              <vue-typed-js
                :strings="[
                  'Django',
                  'Django Rest Framework',
                  'Nuxt',
                  'Vue',
                  'Bootstrap',
                ]"
                :loop="true"
                :backDelay="1000"
                :backSpeed="30"
              >
                <p class="lead font-weight-bold fs-4 mb-0">
                  Technologies I use:
                  <span class="typing font-weight-normal"></span>
                </p>
              </vue-typed-js>
              <!-- <div class="buttons">
                <button type="button" class="btn bg-gradient-primary mt-4">
                  Get Started
                </button>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
.header-img {
  background-image: url(~assets/images/technology.jpg);
  background-size: cover;
  z-index: -1;
}
</style>
