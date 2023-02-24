<script lang="ts" setup>
useHead({
  meta: [
    {
      name: 'description',
      content:
        "Hi! I'm Hardeep Kumar, a Web Developer. I work with Django. Django REST Framework, FastAPI, Vue JS and Nuxt JS.",
    },
    {
      name: 'keywords',
      content:
        'Hardeep Kumar, wrench1815, portfolio, Hardeep, website, Web Developer, Nuxt Developer, Vue JS Developer, Django Developer, FastAPI Developer',
    },

    // open graph
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://hardeepkumar.in' },
    { property: 'og:title', content: 'Hardeep Kumar' },
    {
      property: 'og:description',
      content:
        "Hi! I'm Hardeep Kumar, a Web Developer. I work with Django. Django REST Framework, FastAPI, Vue JS and Nuxt JS.",
    },
    {
      property: 'og:image',
      content:
        'https://res.cloudinary.com/dnzbu6wqv/image/upload/v1669702340/myself/94FKLoemnSP7ikhmOunf--3--2fao5_4x_at5csh.jpg',
    },
    {
      property: 'og:image:alt',
      content: 'Hardeep Kumar AI generated art image',
    },

    // twitter
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:url', content: 'https://hardeepkumar.in' },
    { property: 'twitter:title', content: 'Hardeep Kumar' },
    {
      property: 'twitter:description',
      content:
        "Hi! I'm Hardeep Kumar, a Web Developer. I work with Django. Django REST Framework, FastAPI, Vue JS and Nuxt JS.",
    },
    {
      property: 'twitter:image',
      content:
        'https://res.cloudinary.com/dnzbu6wqv/image/upload/v1669702340/myself/94FKLoemnSP7ikhmOunf--3--2fao5_4x_at5csh.jpg',
    },
  ],
})
</script>

<template>
  <HomeHeader />
</template>

<style scoped></style>
