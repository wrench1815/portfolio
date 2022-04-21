<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-12">
        <h2>Technologies</h2>
      </div>
      <div class="col-12">
        <div class="container">
          <div class="row g-4">
            <div class="col-lg-4">
              <div
                class="card text-center hover-shadow"
                @mouseover="hover = true"
                :class="[{ 'bg-primary': hover }]"
              >
                <div
                  class="bg-image hover-overlay ripple"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
                    class="img-fluid"
                  />
                  <a href="#!">
                    <div
                      class="mask"
                      style="background-color: rgba(251, 251, 251, 0.15)"
                    ></div>
                  </a>
                </div>

                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div
                class="card text-center hover-shadow"
                @mouseover="hover = true"
                :class="[{ 'bg-primary': hover }]"
              >
                <div
                  class="bg-image hover-overlay ripple"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
                    class="img-fluid"
                  />
                  <a href="#!">
                    <div
                      class="mask"
                      style="background-color: rgba(251, 251, 251, 0.15)"
                    ></div>
                  </a>
                </div>

                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div
                class="card text-center hover-shadow"
                @mouseover="hover = true"
                :class="[{ 'bg-primary': hover }]"
              >
                <div
                  class="bg-image hover-overlay ripple"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
                    class="img-fluid"
                  />
                  <a href="#!">
                    <div
                      class="mask"
                      style="background-color: rgba(251, 251, 251, 0.15)"
                    ></div>
                  </a>
                </div>

                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card text-center hover-shadow">
                <div
                  class="bg-image hover-overlay ripple"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
                    class="img-fluid"
                  />
                  <a href="#!">
                    <div
                      class="mask"
                      style="background-color: rgba(251, 251, 251, 0.15)"
                    ></div>
                  </a>
                </div>

                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Technologies',
}
</script>

<style scoped></style>
