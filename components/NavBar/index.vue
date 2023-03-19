<script lang="ts" setup>
const routeList = useRouteList()
</script>

<template>
  <div
    class="w-full navbar sticky top-0 z-50 h-16 bg-[radial-gradient(transparent_0.06rem,_hsl(var(--b1))_0.06rem)] bg-[length:0.3rem_0.3rem] nav-backdrop"
  >
    <!-- Brand -->
    <div class="flex-1">
      <NuxtLink to="/" class="normal-case text-3xl text-primary no-underline"
        >HK</NuxtLink
      >
    </div>

    <div class="flex-1 hidden lg:block">
      <ul class="menu menu-horizontal menu-compact gap-1 p-1">
        <li v-for="item in routeList">
          <NuxtLink :to="item.to" class="no-underline" active-class="active">{{
            item.name
          }}</NuxtLink>
        </li>
      </ul>
    </div>

    <!-- start:Theme Toggle -->
    <div class="flex-none">
      <NavBarThemeToggle />
    </div>
    <!-- end:Theme Toggle -->

    <div class="flex-none lg:hidden">
      <label for="mainDrawer" class="btn btn-primary"
        ><v-icon name="ri-menu-2-fill" class="text-base-100"
      /></label>
    </div>
  </div>
</template>

<style scoped>
.nav-backdrop {
  backdrop-filter: saturate(50%);
}

@media (min-width: 768px) {
  .nav-backdrop {
    backdrop-filter: saturate(50%) blur(4px);
  }
}
</style>
