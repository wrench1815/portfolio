<template>
  <div class="card hover-shadow hover-card hover-border">
    <div
      class="bg-image hover-overlay ripple blob"
      data-mdb-ripple-color="primary"
    >
      <img
        :src="featureImage"
        class="card-img-top blob"
        alt="Fissure in Sandstone"
      />
      <a href="#!">
        <div class="mask"></div>
      </a>
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">
        {{ excerpt }}
      </p>
      <button type="button" class="btn btn-primary blob-anim more">
        more<i class="ri-arrow-right-s-line more"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogCard',

  props: {
    title: {
      type: String,
      default: 'A Very Very Very Very long Card Post Title',
    },

    excerpt: {
      type: String,
      default:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum sunt dolorum doloremque exercitationem neque aspernatur, ex soluta voluptas corrupti. Accusamus exc',
    },

    featureImage: {
      type: String,
      default: 'https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp',
    },
  },
}
</script>

<style scoped>
.hover-card:hover {
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  transform: scale(1.05);
}

.bottom-piece {
  height: 2rem;
  z-index: 10;
  bottom: 0%;
}

.hover-border {
  border-bottom: 2px;
  border-color: transparent;
  border-style: solid;
}

.hover-border:hover {
  border-color: var(--mdb-primary);
}

.more {
  transition: 0.2s margin ease-in-out;
}

.more:hover i {
  margin-left: 0.25rem;
}
</style>
