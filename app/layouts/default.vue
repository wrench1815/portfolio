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
  },
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
        <div data-page-decrypt-once class="relative">
          <PageDecryptLoading compact />
          <NavBar />
        </div>

        <CursorFollowRing mouse-variant="fill" />

        <main data-page-decrypt class="relative flex min-h-0 flex-1 flex-col">
          <PageDecryptLoading />
          <slot />
        </main>

        <div data-page-decrypt-once class="relative">
          <PageDecryptLoading compact />
          <Footer />
        </div>
      </div>
      <NavBarDrawer />
    </div>
  </div>
</template>

<style scoped></style>
