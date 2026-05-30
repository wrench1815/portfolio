<script lang="ts" setup>
import { RiCloseCircleFill } from '@remixicon/vue'

const routeList = useRouteList()
</script>

<template>
  <div
    class="drawer-side z-50 min-h-screen not-prose prose-ul:m-0 prose-li:my-0"
  >
    <label for="mainDrawer" class="drawer-overlay" />
    <div
      class="flex h-full w-full flex-col border-l-2 border-dashed border-nord-blue/35 bg-base-200 md:w-80"
    >
      <div
        class="sticky top-0 z-10 flex items-center justify-between gap-2 border-b border-dashed border-base-content/15 bg-base-200/95 px-3 py-3 backdrop-blur-sm"
      >
        <p
          class="min-w-0 font-mono text-[0.65rem] uppercase tracking-wider text-base-content/45"
        >
          <span class="text-success">$</span> ls routes
        </p>
        <label
          for="mainDrawer"
          class="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border-2 border-dashed border-base-content/20 text-base-content/75 transition-all duration-300 hover:border-error/50 hover:text-error hover:shadow-md hover:border-solid"
          aria-label="Close menu"
        >
          <RiCloseCircleFill class="h-5 w-5" />
        </label>
      </div>

      <ul
        class="menu menu-vertical w-full flex-1 gap-1 overflow-y-auto p-3 font-mono text-sm"
      >
        <li v-for="item in routeList" :key="item.to ?? item.pathLabel">
          <NuxtLink
            v-if="item.type === 'link'"
            :to="item.to!"
            :aria-label="item.name"
            :title="item.name"
            class="link-no-slide-anim flex items-center gap-2 rounded-lg border-2 border-transparent font-mono no-underline transition-all duration-300 hover:border-dashed hover:border-nord-blue/40 hover:bg-base-300/60"
            active-class="border-dashed border-success/45 bg-base-300/40 text-success"
          >
            <span class="text-base-content/45" aria-hidden="true">→</span>
            <span>{{ item.pathLabel }}</span>
          </NuxtLink>

          <details v-else-if="item.type === 'collection'" open>
            <summary
              class="flex cursor-pointer list-none items-center gap-2 rounded-lg border-2 border-transparent px-4 py-2 font-mono transition-all duration-300 hover:border-dashed hover:border-nord-blue/40 hover:bg-base-300/60 [&::-webkit-details-marker]:hidden"
              :aria-label="item.name"
              :title="item.name"
            >
              <span class="text-base-content/45" aria-hidden="true">→</span>
              <span>{{ item.pathLabel }}</span>
              <span class="ml-auto text-base-content/45" aria-hidden="true"
                >▾</span
              >
            </summary>
            <ul class="ms-2 mt-1 border-s border-dashed border-base-content/15 ps-2">
              <li v-for="sub in item.items" :key="sub.to">
                <NuxtLink
                  :to="sub.to!"
                  :aria-label="sub.name"
                  :title="sub.name"
                  class="link-no-slide-anim flex items-center gap-2 rounded-lg border-2 border-transparent py-2 font-mono no-underline transition-all duration-300 hover:border-dashed hover:border-nord-blue/40 hover:bg-base-300/60"
                  active-class="border-dashed border-success/45 bg-base-300/40 text-success"
                >
                  <span class="text-base-content/45" aria-hidden="true">→</span>
                  <span>{{ sub.pathLabel }}</span>
                </NuxtLink>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped></style>
