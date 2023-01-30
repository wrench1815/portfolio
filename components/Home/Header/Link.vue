<script lang="ts" setup>
const props = defineProps<{
  social: {
    link: string;
    username: string;
    icon: string;
  };
}>();
</script>

<template>
  <!-- Start:Social Link -->
  <a
    :href="social.link"
    target="_blank"
    class="no-underline transition-all duration-300 ease-in-out after:content-[''] after:block after:w-0 after:h-[0.06rem] after:bg-secondary after:transition-all after:duration-300 after:ease-in-out hover:text-secondary hover:after:w-full hover:after:bg-secondary"
  >
    <span class="font-serif flex items-center gap-1">
      <v-icon :name="social.icon" /> @{{ social.username }}
    </span>
  </a>
  <!-- End:Social Link -->
</template>

<style scoped></style>
