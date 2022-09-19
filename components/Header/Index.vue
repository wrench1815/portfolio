<template>
  <header class="bg-white">
    <div class="container-fluid">
      <div class="row">
        <!-- Start:Text Content -->
        <div class="col-12 col-md-6">
          <div
            class="d-fle flex-column justify-content-center align-items-start pt-md-5 py-2"
          >
            <h1>Myself Hardeep Kumar</h1>

            <vue-typed-js
              :strings="['Full Stack', 'Backend', 'APIs', 'Vue/Nuxt']"
              :loop="true"
              :backDelay="1000"
              :backSpeed="30"
            >
              <h1>
                and I develop
                <span class="typing h1 ff-mansalva text-primary"></span>
              </h1>
            </vue-typed-js>
          </div>
          <Lazy-Header-Social class="mt-3" />
        </div>
        <!-- End:Text Content -->

        <!-- Start:Image -->
        <div class="col-12 col-md-6">
          <div
            class="d-none d-md-block border border-3 border-primary blob-anim-delay"
          >
            <div
              class="header-img d-none d-md-block calc-head-height border border-white border-2 blob-anim"
              :lazy-background="headerImage"
            ></div>
          </div>
          <div
            class="d-md-none blob-radiu border border-3 border-primary blob-anim-delay"
          >
            <img
              class="img-fluid d-md-none border border-3 border-white blob-anim"
              :data-src="headerImage"
              alt=""
              v-lazy-load
            />
          </div>
        </div>
        <!-- End:Image -->
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',

  data() {
    return {
      headerImage:
        'https://res.cloudinary.com/dnzbu6wqv/image/upload/v1663592209/IMG_20200214_151850square_qdcao8.jpg',
      //   'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
    }
  },
}
</script>

<style>
.header-img {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.calc-head-height {
  height: calc(100vh - 60.59px);
}

.img-fit {
  object-fit: fill;
}

.blob-anim {
  border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;
  animation: morphing 10s infinite;
}

.blob {
  border-radius: 30% 70% 70% 30%/30% 30% 70% 70% !important;
}

.blob-anim-delay {
  border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;
  animation: morphing 10s infinite 0.5s;
}

@keyframes morphing {
  0% {
    border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;
    /* box-shadow: 15px 15px 50px rgba(0, 0, 0, 0.2); */
  }
  25% {
    border-radius: 58% 42% 75% 25%/76% 46% 54% 24%;
  }
  50% {
    border-radius: 50% 50% 33% 67%/55% 27% 73% 45%;
    /* box-shadow: -10px -5px 50px rgba(0, 0, 0, 0.2); */
  }
  75% {
    border-radius: 33% 67% 58% 42%/63% 68% 32% 37%;
  }
  100% {
    border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;
  }
}
</style>
