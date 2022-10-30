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
    class="after:content-[''] after:block after:w-0 after:h-[0.06rem] after:bg-error after:transition-all after:duration-300 after:ease-in-out hover:text-error hover:after:w-full hover:after:bg-error no-underline"
  >
    <v-icon :name="social.icon" /> @{{ social.username }}</a
  >
  <!-- End:Social Link -->
</template>

<style scoped></style>
