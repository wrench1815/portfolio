<script lang="ts" setup></script>

<template>
  <div class="w-full navbar bg-base-100">
    <!-- Brand -->
    <div class="flex-1">
      <NuxtLink to="/" class="normal-case text-3xl text-primary">HK</NuxtLink>
    </div>

    <div class="flex-1 hidden lg:block">
      <ul class="menu menu-horizontal menu-compact gap-1 p-1">
        <!-- Navbar menu content here -->
        <li>
          <NuxtLink to="/" active-class="active">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" active-class="active">About</NuxtLink>
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
        ><v-icon name="ri-menu-2-fill" class="text-white"
      /></label>
    </div>
  </div>
</template>

<style scoped></style>
