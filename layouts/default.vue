<script lang="ts" setup>
function setVH() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

onMounted(() => {
  setVH();
  window.addEventListener('resize', () => {
    setVH();
  });
});
</script>

<template>
  <div>
    <div class="drawer drawer-end h-screen">
      <input id="mainDrawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        <!-- Navbar -->
        <NavBar />

        <!-- content -->
        <slot />
        <!-- content -->

        <!-- Footer -->
        <Footer />
      </div>
      <NavBarDrawer />
    </div>
  </div>
</template>

<style scoped></style>
