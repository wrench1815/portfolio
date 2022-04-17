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
              <p class="lead">I develop: Full Stack, Backend, APIs</p>
              <p class="lead">
                Technologies I use: Django, Django Rest Framework, Nuxt, Vue,
                Bootstrap
              </p>
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
