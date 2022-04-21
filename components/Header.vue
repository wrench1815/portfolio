<template>
  <header class="bg-white">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-md-6 vh-2">
          <div
            class="d-fle flex-column justify-content-center align-items-start h- pt-md-5 py-2"
          >
            <h1>Myself Hardeep Kumar</h1>

            <vue-typed-js
              :strings="[
                'Full Stack Developer',
                'Backend Developer',
                'APIs Developer',
                'Vue/Nuxt Developer',
              ]"
              :loop="true"
              :backDelay="1000"
              :backSpeed="30"
            >
              <h1>
                and I'm a
                <span class="typing h1 ff-mansalva text-primary"></span>
              </h1>
            </vue-typed-js>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div
            class="header-img d-none d-md-block blob-radius calc-head-height"
            :lazy-background="headerImage"
          ></div>
          <img
            class="img-fluid d-md-none blob-radius"
            :data-src="headerImage"
            alt=""
            v-lazy-load
          />
        </div>
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
        'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
      windowHeight: '',
    }
  },
}
</script>

<style scoped>
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

.blob-radius {
  border-radius: 40% 60% 14% 86% / 60% 80% 20% 40%;
}
</style>
