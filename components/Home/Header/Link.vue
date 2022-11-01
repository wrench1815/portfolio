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
    class="no-underline after:content-[''] after:block after:w-0 after:h-[0.06rem] after:bg-error after:transition-all after:duration-300 after:ease-in-out hover:text-error hover:after:w-full hover:after:bg-error"
  >
    <span class="font-serif text-2xl flex items-center gap-1">
      <v-icon :name="social.icon" /> @{{ social.username }}
    </span>
  </a>
  <!-- End:Social Link -->
</template>

<style scoped></style>
