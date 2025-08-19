<script setup lang="ts">
import { RiMenu2Fill } from '@remixicon/vue'
import ThemeToggle from './ThemeToggle.vue'

const routeList = useRouteList()
</script>

<template>
  <!-- Main Navigation Bar -->
  <nav
    class="fixed top-0 left-0 right-0 h-16 z-50 backdrop-blur-md border-b border-nord-blue/50"
  >
    <div class="max-w-7xl mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="text-2xl font-bold text-nord-blue">
          <NuxtLink to="/" class="no-underline text-nord-blue"
            >Portfolio</NuxtLink
          >
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink
            v-for="item in routeList"
            :key="item.to"
            :to="item.to"
            class="text-lg capitalize hover:text-nord-blue cursor-pointer relative group font-normal text-base-content/80"
            active-class="text-nord-blue"
          >
            {{ item.name }}
          </NuxtLink>
        </div>

        <!-- Theme Toggle & Mobile Menu -->
        <div class="flex items-center space-x-4">
          <ThemeToggle />

          <!-- Mobile Menu Button -->
          <label for="mainDrawer" class="md:hidden btn btn-circle bg-base-100">
            <RiMenu2Fill class="w-5 h-5 group-hover:scale-110" />
          </label>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
