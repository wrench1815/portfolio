<script lang="ts" setup></script>

<template>
  <div>
    <div class="drawer drawer-end">
      <input id="mainDrawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        <!-- Navbar -->
        <NavBar />

        <!-- content -->
        <slot />
        <!-- content -->
      </div>
      <NavBarDrawer />
    </div>
  </div>
</template>

<style scoped></style>
