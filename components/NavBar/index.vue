<script lang="ts" setup>
import { RiMenu2Fill } from '@remixicon/vue'
const routeList = useRouteList()
</script>

<template>
  <div
    class="w-full navbar bg-base-100 sticky top-0 z-50 h-16 md:backdrop-blur-md md:bg-base-100/70"
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

    <div class="flex-none ml-2 lg:hidden">
      <label for="mainDrawer" class="btn btn-primary btn-circle">
        <RiMenu2Fill class="text-base-100" />
      </label>
    </div>
  </div>
</template>

<style scoped></style>
