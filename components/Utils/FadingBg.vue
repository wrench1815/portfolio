<template>
  <div :class="directionClass"></div>
</template>

<script>
export default {
  name: 'FadingBg',

  props: {
    direction: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      directionClass: 'fading-bg-down',
    }
  },

  created() {
    if (this.direction == 'down') {
      this.directionClass = 'fading-bg-down'
    } else if (this.direction == 'up') {
      this.directionClass = 'fading-bg-up'
    }
  },
}
</script>

<style scoped>
.fading-bg-down {
  height: 20vh;
  background: linear-gradient(#ffff 2%, transparent);
}

.fading-bg-up {
  height: 20vh;
  background: linear-gradient(transparent, #ffff 98%);
}
</style>
