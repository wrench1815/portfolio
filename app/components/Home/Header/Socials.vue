<script lang="ts" setup>
import { RiGithubFill, RiDiscordFill, RiTwitterXFill } from '@remixicon/vue'
import LogoDev from '~/components/SVG/LogoDev.vue'

const socialLinks = [
  {
    username: 'wrench1815',
    link: 'https://github.com/wrench1815',
    icon: RiGithubFill,
  },
  {
    username: 'wrench1815',
    link: 'https://discordapp.com/users/457360898122711041',
    icon: RiDiscordFill,
  },
  {
    username: 'wrench1815',
    link: 'https://twitter.com/wrench1815',
    icon: RiTwitterXFill,
  },
  {
    username: 'wrench1815',
    link: 'https://dev.to/wrench1815',
    icon: LogoDev,
  },
]
</script>

<template>
  <h3 class="text-center md:text-start">Connect on</h3>
  <div class="flex flex-row gap-3 flex-wrap justify-center md:justify-start">
    <HomeHeaderLink v-for="(item, i) in socialLinks" :key="i" :social="item">
      <template #icon>
        <component :is="item.icon" class="h-6 w-6 fill-current" />
      </template>
    </HomeHeaderLink>
  </div>
</template>

<style scoped></style>
