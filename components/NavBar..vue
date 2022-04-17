<template>
  <!-- Navbar -->
  <nav
    class="navbar navbar-expand-lg bg-transparent navbar-dark shadow-0"
    style="z-index: 0"
  >
    <!-- Container wrapper -->
    <div class="container-fluid">
      <!-- Navbar brand -->
      <a class="navbar-brand rounded-circle bg-dark text-light p-1" href="#"
        >HK</a
      >

      <!-- Toggle button -->
      <button
        class="navbar-toggler bg-dark"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <fa :icon="['fas', 'bars']" />
      </button>

      <!-- Collapsible wrapper -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <!-- Link -->
          <li class="nav-item my-md-2">
            <a class="nav-link d-inline-block bg-dark px-md-2 py-md-1 text-white rounded-9 bg-gradient" href="#">Home</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- Container wrapper -->
  </nav>
  <!-- Navbar -->
</template>

<script>
export default {}
</script>

<style></style>
