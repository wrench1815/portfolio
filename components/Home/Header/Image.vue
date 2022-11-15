<script lang="ts" setup>
const headerImage = ref(
  'https://res.cloudinary.com/dnzbu6wqv/image/upload/v1663592209/IMG_20200214_151850square_qdcao8.jpg'
);
</script>

<template>
  <div class="border-solid border-4 blob blob-anim-delay border-primary">
    <img
      :src="headerImage"
      class="rounded-lg md:shadow-2xl border-transparent border-solid border-2 md:max-w-sm blob blob-anim"
    />
  </div>
</template>

<style scoped>
.blob-anim {
  border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;
  animation: morphing 10s infinite;
}

.blob {
  border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;
}

.blob-anim-delay {
  border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;
  animation: morphing 10s infinite 0.5s;
}

@keyframes morphing {
  0% {
    border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;
  }
  25% {
    border-radius: 58% 42% 75% 25%/76% 46% 54% 24%;
  }
  50% {
    border-radius: 50% 50% 33% 67%/55% 27% 73% 45%;
  }
  75% {
    border-radius: 33% 67% 58% 42%/63% 68% 32% 37%;
  }
  100% {
    border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;
  }
}
</style>
