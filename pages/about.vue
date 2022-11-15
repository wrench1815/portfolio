<script lang="ts" setup>
import Typed from 'typed.js';

const typing = ref('');
const hideStopBtn = ref(false);
const hideTyping = ref(false);

const currentYear = () => {
  return new Date().getFullYear();
};

function stop() {
  hideTyping.value = true;
  hideStopBtn.value = true;
}

onMounted(() => {
  let str = document.querySelector('#typeBase')?.innerHTML as string;
  new Typed(typing.value, {
    strings: [str],
    typeSpeed: 0,
    backSpeed: 0,
    fadeOut: true,
    loop: false,
    showCursor: false,
    onComplete: () => {
      // hideStopBtn.value = true;
    },
  });
});
</script>

<template>
  <div class="absolute top-[65px] right-5" v-if="!hideStopBtn">
    <button class="btn btn-circle" @click="stop">
      <v-icon name="ri-stop-fill" scale="1.2" />
    </button>
  </div>

  <main class="container mx-auto px-4">
    <section
      class="prose prose-lg max-w-none"
      ref="typing"
      v-if="!hideTyping"
    ></section>
  </main>

  <main class="container mx-auto px-4" :class="{ hidden: !hideTyping }">
    <section class="prose prose-lg max-w-none" id="typeBase">
      <div class="flex gap-2">
        <h1 class="mb-0">Hi there!</h1>
        <v-icon
          name="md-wavinghand"
          scale="2.5"
          animation="float"
          class="text-primary"
        />
      </div>

      <h2>This is Hardeep Kumar. Nice to meet you.</h2>

      <p class="font-serif text-2xl">
        You might be wondering, what this site is for? Well It is a Portfolio
        Site of mine with a Blog integrated into it. This Site is supposed to
        showcase my projects and some of the Blogs that i wrote or might write
        in the future.
      </p>

      <h4 class="text-error">Now, Let me guide you through the Site!!</h4>

      <p class="font-serif text-2xl">The Stack of this site is a follow:</p>
      <ul class="font-serif text-2xl">
        <li class="text-warning">
          <a
            class="text-warning inline-flex items-center gap-1 no-underline my-0"
            href="https://v3.nuxtjs.org/"
            target="_blank"
          >
            <span
              class="no-underline after:content-[''] after:block after:w-0 after:h-[0.06rem] after:bg-warning after:transition-all after:duration-300 after:ease-in-out hover:text-warning hover:after:w-full hover:after:bg-warning"
            >
              Nuxt JS RC 13
            </span>
            <v-icon name="oi-link-external" scale="1.2" class="text-warning" />
          </a>
        </li>

        <li class="text-warning">
          <a
            class="text-warning inline-flex items-center gap-1 no-underline my-0"
            href="https://daisyui.com"
            target="_blank"
          >
            <span
              class="no-underline after:content-[''] after:block after:w-0 after:h-[0.06rem] after:bg-warning after:transition-all after:duration-300 after:ease-in-out hover:text-warning hover:after:w-full hover:after:bg-warning"
            >
              Daisy UI
            </span>
            <v-icon name="oi-link-external" scale="1.2" class="text-warning" />
          </a>
          (Yes
          <a
            class="text-warning inline-flex items-center gap-1 no-underline my-0"
            href="https://tailwindcss.com"
            target="_blank"
          >
            <span
              class="no-underline after:content-[''] after:block after:w-0 after:h-[0.06rem] after:bg-warning after:transition-all after:duration-300 after:ease-in-out hover:text-warning hover:after:w-full hover:after:bg-warning"
            >
              TailwindCSS
            </span>
            <v-icon
              name="oi-link-external"
              scale="1.2"
              class="text-warning"
            /> </a
          >)
        </li>

        <li class="text-warning">
          <a
            class="text-warning inline-flex items-center gap-1 no-underline my-0"
            href="https://oh-vue-icons.js.org"
            target="_blank"
          >
            <span
              class="no-underline after:content-[''] after:block after:w-0 after:h-[0.06rem] after:bg-warning after:transition-all after:duration-300 after:ease-in-out hover:text-warning hover:after:w-full hover:after:bg-warning"
            >
              Oh Vue Icons
            </span>
            <v-icon name="oi-link-external" scale="1.2" class="text-warning" />
          </a>
        </li>

        <li class="text-warning">
          <a
            class="text-warning inline-flex items-center gap-1 no-underline my-0"
            href="https://github.com/mattboldt/typed.js/"
            target="_blank"
          >
            <span
              class="no-underline after:content-[''] after:block after:w-0 after:h-[0.06rem] after:bg-warning after:transition-all after:duration-300 after:ease-in-out hover:text-warning hover:after:w-full hover:after:bg-warning"
            >
              Typed JS
            </span>
            <v-icon name="oi-link-external" scale="1.2" class="text-warning" />
          </a>
        </li>
      </ul>

      <p class="font-serif text-2xl">
        The fonts used for the site are
        <a
          class="text-warning inline-flex items-center gap-1 no-underline my-0"
          href="https://fonts.google.com/specimen/Nanum+Pen+Script"
          target="_blank"
        >
          <span
            class="no-underline after:content-[''] after:block after:w-0 after:h-[0.06rem] after:bg-warning after:transition-all after:duration-300 after:ease-in-out hover:text-warning hover:after:w-full hover:after:bg-warning"
          >
            Nanum Pen Script
          </span>
          <v-icon name="oi-link-external" scale="1.2" class="text-warning" />
        </a>
        and
        <a
          class="text-warning inline-flex items-center gap-1 no-underline my-0"
          href="https://fonts.google.com/specimen/Mansalva"
          target="_blank"
        >
          <span
            class="no-underline after:content-[''] after:block after:w-0 after:h-[0.06rem] after:bg-warning after:transition-all after:duration-300 after:ease-in-out hover:text-warning hover:after:w-full hover:after:bg-warning"
          >
            Mansalva
          </span>
          <v-icon
            name="oi-link-external"
            scale="1.2"
            class="text-warning"
          /> </a
        >. <br />
        The language being used to write code for the Site is
        <span class="text-primary">TypeScript</span>. Though I'm not that good
        at TypeScript and just started learning it, So there might be a few
        hiccups here and there.
      </p>

      <p class="font-serif text-2xl">
        This Site uses two themes, namely Dracula (for dark mode) and Pastel
        (for light mode). These themes can be toggled at will. Oh and the
        functionality to toggle between themes are written by me since existing
        solutions didnt pleased me.
      </p>

      <h3>Wanna Chat a bit?</h3>

      <HomeHeaderSocials />

      <p class="font-serif text-2xl">
        Hmm? wondering where the contact form is? nah its {{ currentYear() }}.
        There's no need to contact via Email just dm and all good.
      </p>

      <h3>
        You might be cursing the Attrocity of these fonts used. I understand.
        It's ok. Well the reason to use Handwriting Fonts is Intentional. You
        know.. to assert Supremacy.
      </h3>
    </section>
  </main>
</template>

<style scoped></style>
