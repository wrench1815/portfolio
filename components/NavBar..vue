<template>
  <!-- Start:Navbar -->
  <nav
    class="navbar navbar-expand-lg bg-white navbar-light shadow-0 position-sticky top-0 z-index-5"
  >
    <!-- Container wrapper -->
    <div class="container-fluid">
      <!-- Navbar brand -->
      <nuxt-link class="navbar-brand" :to="'/'" exact-active-class="''"
        >HK</nuxt-link
      >

      <!-- Start:Social Links -->
      <div class="d-flex align-items-center ms-auto me-0 d-lg-none">
        <!-- Icons -->
        <ul class="navbar-nav d-flex flex-row me-1">
          <!-- Github -->
          <li class="nav-item me-3 me-lg-0">
            <a
              class="nav-link social-link"
              href="https://github.com/wrench1815"
              target="_blank"
            >
              <i class="ri-github-fill"></i>
            </a>
          </li>
          <!-- Twitter -->
          <li class="nav-item me-3 me-lg-0">
            <a
              class="nav-link social-link"
              href="https://twitter.com/wrench1815"
              target="_blank"
              ><i class="ri-twitter-fill"></i
            ></a>
          </li>
          <!-- Discord -->
          <li class="nav-item me-3 me-lg-0">
            <a
              class="nav-link social-link"
              href="https://discordapp.com/users/457360898122711041"
              target="_blank"
              ><i class="ri-discord-fill"></i
            ></a>
          </li>
        </ul>
      </div>
      <!-- End:Social Links -->

      <!-- Start:Menu Button -->
      <button
        class="navbar-toggler ms-0"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="ri-menu-2-line"></i>
      </button>
      <!-- End:Menu Button -->

      <!-- Start:Collapsible Menu -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
          <!-- Home -->
          <li class="nav-item">
            <nuxt-link
              class="nav-link"
              :to="'/'"
              exact-active-class="text-primary"
              >Home</nuxt-link
            >
          </li>
          <!-- Blog -->
          <li class="nav-item">
            <nuxt-link
              class="nav-link"
              :to="'/blog'"
              exact-active-class="text-primary"
              >Blog</nuxt-link
            >
          </li>
          <!-- About -->
          <!-- <li class="nav-item">
            <nuxt-link
              class="nav-link"
              :to="'/'"
              exact-active-class="text-primary"
              >About</nuxt-link
            >
          </li> -->
        </ul>
      </div>
      <!-- Start:Collapsible Menu -->

      <!-- Start:Social Links -->
      <div class="d-flex align-items-center ms-auto me-0 d-none d-lg-block">
        <!-- Icons -->
        <ul class="navbar-nav d-flex flex-row me-1">
          <!-- GitHub -->
          <li class="nav-item me-3 me-lg-0">
            <a
              class="nav-link social-link"
              href="https://github.com/wrench1815"
              target="_blank"
            >
              <i class="ri-github-fill"></i>
            </a>
          </li>
          <!-- Twitter -->
          <li class="nav-item me-3 me-lg-0">
            <a
              class="nav-link social-link"
              href="https://twitter.com/wrench1815"
              target="_blank"
              ><i class="ri-twitter-fill"></i
            ></a>
          </li>
          <!-- Discord -->
          <li class="nav-item me-3 me-lg-0">
            <a
              class="nav-link social-link"
              href="https://discordapp.com/users/457360898122711041"
              target="_blank"
              ><i class="ri-discord-fill"></i
            ></a>
          </li>
        </ul>
      </div>
      <!-- End:Social Links -->
    </div>
    <!-- Container wrapper -->
  </nav>
  <!-- Stop:Navbar -->
</template>

<script>
export default {}
</script>

<style scoped>
.social-link:hover {
  color: var(--mdb-primary) !important;
}
</style>
