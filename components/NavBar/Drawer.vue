<script lang="ts" setup>
import { RiCloseCircleFill } from '@remixicon/vue'
const routeList = useRouteList()
</script>

<template>
  <div class="drawer-side prose-ul:m-0 prose-li:my-0 z-50 min-h-screen">
    <label for="mainDrawer" class="drawer-overlay"></label>
    <div class="w-full bg-base-100 md:w-80 h-full">
      <div
        class="flex justify-end p-2 sticky top-0 bg-base-100 z-10 drop-shadow lg:hidden"
      >
        <label
          for="mainDrawer"
          class="m-2 h-8 w-8 flex items-center justify-center border border-primary text-primary transition-all duration-300 ease-in-out rounded-full cursor-pointer hover:bg-primary hover:shadow-lg hover:text-base-100"
        >
          <RiCloseCircleFill />
        </label>
      </div>

      <ul class="menu p-4 gap-2 overflow-y-auto">
        <li v-for="item in routeList">
          <NuxtLink
            :to="item.to"
            class="flex justify-start items-center no-underline"
            active-class="active"
            >{{ item.name }}</NuxtLink
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
