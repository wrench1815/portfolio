<template>
  <header>
    <div class="page-header">
      <div
        class="position-absolut fixed-top position-fixe me-auto w-100 w-lg-50 h-100 z-index d-non d-sm-non d-md-bloc"
        style="
          background-image: url(https://images.unsplash.com/photo-1632067117908-826d2531dba9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80);
          background-size: cover;
          z-index: -1;
        "
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
                <p class="lead font-weight-bold">
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
                <p class="lead font-weight-bold">
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

<style></style>
