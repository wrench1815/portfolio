<script lang="ts" setup></script>

<template>
  <div
    class="w-full navbar bg-base-100 sticky top-0 z-50 md:backdrop-blur-md md:bg-base-100/70"
  >
    <!-- Brand -->
    <div class="flex-1">
      <NuxtLink to="/" class="normal-case text-3xl text-primary no-underline"
        >HK</NuxtLink
      >
    </div>

    <div class="flex-1 hidden lg:block">
      <ul class="menu menu-horizontal menu-compact gap-1 p-1">
        <!-- Navbar menu content here -->

        <!-- Home -->
        <li>
          <NuxtLink to="/" class="no-underline" active-class="active"
            >Home</NuxtLink
          >
        </li>

        <!-- About -->
        <li>
          <NuxtLink to="/about" class="no-underline" active-class="active"
            >About</NuxtLink
          >
        </li>

        <!-- Project -->
        <li>
          <NuxtLink to="/project" class="no-underline" active-class="active"
            >Project</NuxtLink
          >
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

<style scoped></style>
