<script lang="ts" setup>
import WavingHand from '~/components/SVG/WavingHand.vue'

const myselfImage = ref(
  'https://res.cloudinary.com/dnzbu6wqv/image/upload/v1669702340/myself/94FKLoemnSP7ikhmOunf--3--2fao5_4x_at5csh.jpg'
)

useHead({
  title: 'About',

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
  <main class="container mx-auto px-4">
    <section class="prose max-w-full">
      <div class="flex gap-2">
        <h1 class="mb-12">Hii!!!</h1>
        <WavingHand class="hand-rotate" />
      </div>
      <div
        class="not-prose flex flex-col justify-center items-center relative gap-2"
      >
        <div
          class="absolute top-0 bottom-0 right-0 left-0 mx-auto bg-secondary max-w-full h-auto aspect-square object-cover -rotate-3 md:max-w-sm"
        ></div>
        <div
          class="absolute top-0 bottom-0 right-0 left-0 mx-auto bg-primary max-w-full h-auto aspect-square object-cover rotate- md:max-w-sm"
        ></div>
        <img
          class="max-w-full h-auto aspect-square object-cover rotate-3 shadow-lg md:max-w-sm"
          :src="myselfImage"
          alt="Hardeep Kumar AI genarted art"
        />

        <span class="text-center italic"
          >generated using
          <a class="link link-primary" href="https://creator.nightcafe.studio"
            >NightCafe</a
          >
          with my image as source
        </span>
      </div>

      <section class="prose-lg mt-6">
        <h2>
          I'm <span class="text-primary">Hardeep Kumar</span>, a 22 years old
          Web Developer. Nice to meet you.
        </h2>

        <h3>My stacks looks as follow:</h3>
        <ul class="font-bold">
          <li>
            I develop Full-Stack using
            <span class="bg-secondary text-secondary-content px-1 rounded"
              >Django</span
            >.
          </li>
          <li>
            I develop APIs with
            <span class="bg-secondary text-secondary-content px-1 rounded"
              >Django REST Framework</span
            >
            and
            <span class="bg-accent text-accent-content px-1 rounded"
              >FastAPI</span
            >.
          </li>
          <li>
            I develop frontend using
            <span class="bg-secondary text-secondary-content px-1 rounded"
              >Vue</span
            >
            and
            <span class="bg-accent text-accent-content px-1 rounded"
              >Nuxt JS</span
            >. Both version 2 and 3.
          </li>
          <li>
            I also develop Full stack with
            <span class="bg-secondary text-secondary-content px-1 rounded"
              >Django REST Framework</span
            >
            and
            <span class="bg-accent text-accent-content px-1 rounded"
              >Vue, Nuxt</span
            >. And also with
            <span class="bg-secondary text-secondary-content px-1 rounded"
              >FastAPI</span
            >
            and
            <span class="bg-accent text-accent-content px-1 rounded"
              >Vue, Nuxt</span
            >.
          </li>
        </ul>
        <h3>
          As you can see, I deal primarily with
          <span class="bg-primary text-primary-content px-1 rounded"
            >Python</span
          >
          and
          <span class="bg-primary text-primary-content px-1 rounded"
            >JavaScript</span
          >. But wait, I know
          <span class="bg-primary text-primary-content px-1 rounded"
            >TypeScript</span
          >
          as well and prefer to use it over JavaScript when possible.
        </h3>
        <h3>
          Im also skilled at using
          <span class="bg-primary text-primary-content px-1 rounded">
            Git, GitHub, CI/CD and writing tests using Django's inbuilt Testing
            Framework </span
          >. Aside fron this, I'm very familiar with PaaS'
          <span class="bg-primary text-primary-content px-1 rounded">
            Railway, Heroku and Vercel</span
          >. And ofcourse I've my fair share with
          <span class="bg-primary text-primary-content px-1 rounded">AWS</span>
          as well.
        </h3>
        <h3>
          Oh did i mention I use
          <span class="bg-primary text-primary-content px-1 rounded shadow"
            >Garuda Linux (Arch)</span
          >?
        </h3>
      </section>

      <h2 class="text-warning mb-4">Hobbies</h2>
      <ul class="font-serif prose-lg font-bold mb-4">
        <li>
          Gaming, I play
          <span class="bg-secondary text-secondary-content px-1 rounded"
            >Genshin Impact</span
          >
          (no, I'm not that type of person),
          <span class="bg-secondary text-secondary-content px-1 rounded"
            >Honkai Impact</span
          >
          and
          <span class="bg-secondary text-secondary-content px-1 rounded"
            >Arknights</span
          >
          on and off.
        </li>
        <li>
          I like to listen to wide variety of Music from genres like
          <span class="bg-secondary text-secondary-content px-1 rounded"
            >Chillstep</span
          >,
          <span class="bg-secondary text-secondary-content px-1 rounded"
            >Melodic Dubstep</span
          >,
          <span class="bg-secondary text-secondary-content px-1 rounded"
            >Orchestral</span
          >
          and
          <span class="bg-secondary text-secondary-content px-1 rounded"
            >Epic</span
          >.
        </li>
        <li>
          I also like to browse through various Technology related Arcticles.
        </li>
      </ul>

      <h2 class="text-primary">
        I'm not a type of person to indulge much in Conversations but I welcome
        them.
      </h2>
      <HomeHeaderSocials />
      <br />
    </section>
  </main>
</template>

<style scoped>
@reference "~/assets/css/tailwind.css";

@keyframes hand-wave {
  0%,
  100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(15deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(-15deg);
  }
}

.hand-rotate {
  @apply h-10 w-10 fill-primary inline-block;
  animation: hand-wave 1.7s linear infinite;
  transform-origin: bottom center;
}
</style>
