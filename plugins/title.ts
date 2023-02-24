export default defineNuxtPlugin(() => {
  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} | Hardeep Kumar` : 'Hardeep Kumar'
    },
  })
})
