<script lang="ts" setup>
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import {
  RiGithubFill,
  SiDiscord,
  RiTwitterFill,
  MdLogodev,
} from 'oh-vue-icons/icons';

addIcons(RiGithubFill, SiDiscord, RiTwitterFill, MdLogodev);
</script>

<template>
  <section class="container px-4 mx-auto">
    <div class="hero">
      <div class="hero-content flex-col-reverse md:flex-row-reverse">
        <img
          src="@/assets/image/person.jpg"
          class="rounded-lg shadow-2xl md:max-w-sm"
        />
        <div class="prose">
          <h1 class="font-medium">
            Myself Hardeep Kumar and I develop
            <span class="text-primary">Vue/Nuxt</span>
          </h1>
          <h3 class="font-medium text-2xl text-center md:text-start">
            Connect on
          </h3>
          <div
            class="flex flex-row gap-3 flex-wrap justify-center md:justify-start"
          >
            <!-- Start:Github -->
            <a href="https://github.com/wrench1815" target="_blank">
              <OhVueIcon name="ri-github-fill" /> @wrench1815</a
            >
            <!-- End:Github -->

            <!-- Start:Discord -->
            <a
              href="https://discordapp.com/users/457360898122711041"
              target="_blank"
            >
              <OhVueIcon name="si-discord" /> @wrench1815</a
            >
            <!-- End:Discord -->

            <!-- Start:Twitter -->
            <a href="https://twitter.com/wrench1815" target="_blank">
              <OhVueIcon name="ri-twitter-fill" /> @wrench1815</a
            >
            <!-- End:Twitter -->

            <!-- Start:Dev.to -->
            <a href="https://github.com/wrench1815" target="_blank">
              <OhVueIcon name="md-logodev" /> @wrench1815</a
            >
            <!-- End:Dev.to -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
