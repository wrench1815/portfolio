<script lang="ts" setup>
import { RiDownloadCloud2Line } from '@remixicon/vue'
</script>

<template>
  <div class="flex justify-center md:justify-end">
    <a
      class="btn btn-ghost flex gap-1 items-center mb-8 text-primary hover:bg-primary hover:text-primary-content after:content-none"
      href="https://res.cloudinary.com/dnzbu6wqv/image/upload/v1677943467/resume/hardeep_kumar_resume_sfj5og.pdf"
      download="hardeep_kumar_resume_sfj5og"
      target="_blank"
    >
      <RiDownloadCloud2Line />
      <p class="pt-1">Download Resume</p>
    </a>
  </div>
</template>

<style scoped></style>
