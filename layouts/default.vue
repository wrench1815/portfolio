<script lang="ts" setup>
const drawerToggle = ref(false)
const route = useRoute()

function setVH() {
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}

watch(
  () => route.fullPath,
  () => {
    drawerToggle.value = false
  }
)

onMounted(() => {
  setVH()
  window.addEventListener('resize', () => {
    setVH()
  })
})
</script>

<template>
  <div
    class="prose max-w-full prose-img:m-0 prose-p:m-0 prose-headings:mt-2 prose-headings:mb-2 prose-a:no-underline"
  >
    <div class="drawer drawer-end h-screen">
      <input
        id="mainDrawer"
        type="checkbox"
        class="drawer-toggle"
        v-model="drawerToggle"
      />
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
