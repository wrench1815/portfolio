<script lang="ts" setup>
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import { RiMenu2Fill, RiSunFill, RiMoonFill } from 'oh-vue-icons/icons';
import { themeChange } from 'theme-change';

const themeLoaderSet = ref(false);

onMounted(() => {
  themeChange(false);
  themeLoaderSet.value = true;
});

addIcons(RiMenu2Fill, RiSunFill, RiMoonFill);
</script>

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
          <NuxtLink to="/" active-class="active">About</NuxtLink>
        </li>
      </ul>
    </div>

    <!-- start:Theme Toggle -->
    <div class="flex-none">
      <div
        class="btn btn-circle bg-transparent border-none loading disabled text-primary"
        v-show="!themeLoaderSet"
      ></div>

      <div
        class="btn-circle swap swap-rotate"
        data-toggle-theme="pastel,dracula"
        data-act-class="swap-active"
        v-show="themeLoaderSet"
      >
        <!-- sun icon -->
        <OhVueIcon
          name="ri-sun-fill"
          class="swap-on fill-primary"
          scale="1.2"
        />

        <!-- moon icon -->
        <OhVueIcon
          name="ri-moon-fill"
          class="swap-off fill-primary"
          scale="1.2"
        />
      </div>
    </div>
    <!-- end:Theme Toggle -->

    <div class="flex-none lg:hidden">
      <label for="mainDrawer" class="btn btn-primary"
        ><OhVueIcon name="ri-menu-2-fill" class="text-white"
      /></label>
    </div>
  </div>
</template>

<style scoped></style>
