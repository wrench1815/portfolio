<script lang="ts" setup></script>

<template>
  <div class="drawer-side">
    <label for="mainDrawer" class="drawer-overlay"></label>
    <div class="w-full bg-base-100 md:w-80">
      <div
        class="flex justify-end p-2 sticky top-0 bg-base-100 z-10 drop-shadow lg:hidden"
      >
        <label
          for="mainDrawer"
          class="m-2 p-1 h-8 w-8 border border-primary rounded-full cursor-pointer"
        >
          <v-icon name="ri-close-fill" scale="1.2" class="text-primary" />
        </label>
      </div>

      <ul class="menu p-4 gap-2 overflow-y-auto">
        <!-- Sidebar content here -->

        <!-- Home -->
        <li>
          <NuxtLink
            to="/"
            class="flex justify-center items-center"
            active-class="active"
            >Home</NuxtLink
          >
        </li>

        <!-- About -->
        <li>
          <NuxtLink
            to="/about"
            class="flex justify-center items-center"
            active-class="active"
            >About</NuxtLink
          >
        </li>

        <!-- Project -->
        <li>
          <NuxtLink
            to="/project"
            class="flex justify-center items-center"
            active-class="active"
            >Project</NuxtLink
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
