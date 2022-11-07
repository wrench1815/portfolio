<script lang="ts" setup>
import { addIcons } from 'oh-vue-icons';
import {
  RiGithubFill,
  SiDiscord,
  RiTwitterFill,
  MdLogodev,
} from 'oh-vue-icons/icons';

addIcons(RiGithubFill, SiDiscord, RiTwitterFill, MdLogodev);

const socialLinks = [
  {
    username: 'wrench1815',
    link: 'https://github.com/wrench1815',
    icon: 'ri-github-fill',
  },
  {
    username: 'wrench1815',
    link: 'https://discordapp.com/users/457360898122711041',
    icon: 'si-discord',
  },
  {
    username: 'wrench1815',
    link: 'https://twitter.com/wrench1815',
    icon: 'ri-twitter-fill',
  },
  {
    username: 'wrench1815',
    link: 'https://dev.to/wrench1815',
    icon: 'md-logodev',
  },
];
</script>

<template>
  <h3 class="font-medium text-2xl text-center md:text-start">Connect on</h3>
  <div class="flex flex-row gap-3 flex-wrap justify-center md:justify-start">
    <HomeHeaderLink v-for="(item, i) in socialLinks" :key="i" :social="item" />
  </div>
</template>

<style scoped></style>
