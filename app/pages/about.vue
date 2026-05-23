<script lang="ts" setup>
interface StackGroup {
  shell: string
  title: string
  color: 'nord-blue' | 'nord-green' | 'nord-frost' | 'nord-yellow'
  items: string[]
}

interface SiteLink {
  to: string
  code: string
  label: string
  description: string
}

const stackGroups: StackGroup[] = [
  {
    shell: 'backend',
    title: 'APIs & services',
    color: 'nord-green',
    items: ['PHP', 'Python', 'FastAPI', 'PostgreSQL', 'Redis'],
  },
  {
    shell: 'frontend',
    title: 'Interfaces',
    color: 'nord-blue',
    items: ['Vue', 'Nuxt', 'TypeScript', 'Tailwind CSS'],
  },
  {
    shell: 'toolchain',
    title: 'Tooling',
    color: 'nord-frost',
    items: ['Git & GitHub', 'CI/CD', 'Docker', 'Linux (Arch)'],
  },
  {
    shell: 'deploy',
    title: 'Hosting',
    color: 'nord-yellow',
    items: ['AWS', 'Vercel', 'Railway'],
  },
]

const siteLinks: SiteLink[] = [
  {
    to: '/themes',
    code: 'themes/',
    label: 'Themes',
    description: 'Writings grouped by theme.',
  },
  {
    to: '/project',
    code: 'project/',
    label: 'Projects',
    description: 'Project write-ups and repos.',
  },
  {
    to: '/experience',
    code: 'experience/',
    label: 'Experience',
    description: 'Jobs and internships.',
  },
]

const colorMap = {
  'nord-blue': {
    text: 'text-nord-blue',
    border: 'border-nord-blue/30',
  },
  'nord-green': {
    text: 'text-nord-green',
    border: 'border-nord-green/30',
  },
  'nord-frost': {
    text: 'text-nord-frost',
    border: 'border-nord-frost/30',
  },
  'nord-yellow': {
    text: 'text-nord-yellow',
    border: 'border-nord-yellow/30',
  },
} as const

const breadcrumbItems = [{ label: 'Home', to: '/' }, { label: 'About' }]

const pageTitle = 'About'
const pageDescription =
  'About Hardeep Kumar — web developer (PHP, Python, Django, FastAPI, Vue, Nuxt).'

const site = useSiteConfig()

defineOgImage(
  'Post.takumi',
  {
    pathFormat: 'bare',
    pathLabel: 'pages/about.vue',
    title: pageTitle,
    description: pageDescription,
    kindLabel: 'Page',
    kindValue: 'About',
    colorMode: 'dark',
  },
  {
    alt: computed(() => `${pageTitle} — ${site.name ?? 'Portfolio'}`),
  },
)

useHead({
  title: pageTitle,
  meta: [
    { name: 'description', content: pageDescription },
    {
      name: 'keywords',
      content:
        'Hardeep Kumar, wrench1815, full-stack developer, PHP, Django, FastAPI, Vue, Nuxt, portfolio',
    },
  ],
})
</script>

<template>
  <main class="blog-content-shell">
    <BlogBreadcrumb :items="breadcrumbItems" />

    <!-- Header -->
    <header class="mb-12">
      <div class="mb-2 text-sm opacity-60">
        <span class="text-nord-green">$</span> cat about.md
      </div>
      <h1 class="mb-4 text-5xl font-bold text-nord-blue md:text-6xl">
        &lt;About /&gt;
      </h1>
      <p class="max-w-2xl text-lg opacity-80">
        // Web developer. PHP & Python backends, Vue/Nuxt frontends.
      </p>
    </header>

    <!-- Profile row -->
    <section
      class="not-prose mb-16 grid gap-8 lg:grid-cols-[minmax(0,14rem)_1fr] lg:items-start"
    >
      <figure class="mx-auto w-full max-w-xs lg:mx-0">
        <ProfileTerminalAvatar />
        <figcaption
          class="mt-2 text-center font-mono text-[0.65rem] text-base-content/45 lg:text-left"
        >
          // profile shell
        </figcaption>
      </figure>

      <div class="min-w-0">
        <p class="mb-3 font-mono text-xs opacity-60">
          <span class="text-nord-green">$</span>
          <span class="text-base-content/80"> node --eval </span>
          <span class="text-success">'loadProfile()'</span>
        </p>

        <div
          class="mockup-code mb-6 w-full border border-base-300 bg-base-200! font-mono text-sm leading-relaxed text-base-content shadow-sm [&_code]:font-mono [&_code]:text-base-content [&_pre]:bg-base-200! [&_pre]:font-mono [&_pre]:text-base-content"
        >
          <pre data-prefix=">"><code
              ><span class="text-accent">export const</span> profile = {</code
            ></pre>
          <pre data-prefix=">"><code
              >&nbsp;&nbsp;name: <span class="text-success">'Hardeep Kumar'</span>,</code
            ></pre>
          <pre data-prefix=">"><code
              >&nbsp;&nbsp;handle: <span class="text-success">'wrench1815'</span>,</code
            ></pre>
          <pre data-prefix=">"><code
              >&nbsp;&nbsp;role: <span class="text-success"
                >'Full-stack web developer'</span
              >,</code
            ></pre>
          <pre data-prefix=">"><code
              >&nbsp;&nbsp;focus: [<span class="text-success">'PHP &amp; Python APIs'</span>,
              <span class="text-success">'Vue / Nuxt UIs'</span>],</code
            ></pre>
          <pre data-prefix=">"><code>}</code></pre>
        </div>

        <p
          class="font-mono text-sm leading-relaxed text-base-content/85 sm:text-base"
        >
          I am a web developer. Most weeks I am in PHP or Python on the server
          and Vue or Nuxt on the client — often the same product needs both. I
          have worked on ed-tech frontends, Django APIs for clients, and
          long-running apps in production. This site holds my projects, work
          history, and writing.
        </p>
      </div>
    </section>

    <!-- Stack manifest -->
    <section class="mb-16">
      <div class="mb-6">
        <div
          class="mb-2 font-mono text-[0.65rem] uppercase tracking-wider text-base-content/40"
        >
          manifest
        </div>
        <h2 class="text-2xl font-bold text-nord-frost md:text-3xl">
          <span class="opacity-40">&lt;</span>Stack<span class="opacity-40">
            /&gt;</span
          >
        </h2>
        <p class="mt-2 text-sm opacity-70">// What I use day to day.</p>
      </div>

      <div
        class="grid gap-4 grid-cols-[repeat(auto-fill,minmax(min(100%,16rem),1fr))]"
      >
        <article
          v-for="group in stackGroups"
          :key="group.shell"
          class="relative overflow-hidden border-2 border-dashed bg-base-200 p-5 transition-all duration-300 hover:border-solid hover:shadow-lg sm:p-6"
          :class="colorMap[group.color].border"
        >
          <div
            class="mb-3 flex items-center gap-2 font-mono text-xs"
            :class="colorMap[group.color].text"
          >
            <span class="opacity-60">$</span>
            <span class="font-bold">{{ group.shell }}</span>
          </div>
          <h3
            class="mb-3 text-lg font-bold"
            :class="colorMap[group.color].text"
          >
            {{ group.title }}
          </h3>
          <ul class="space-y-1.5 font-mono text-sm text-base-content/85 pl-0">
            <li v-for="item in group.items" :key="item" class="flex gap-2">
              <span
                class="shrink-0"
                :class="colorMap[group.color].text"
                aria-hidden="true"
                >→</span
              >
              <span>{{ item }}</span>
            </li>
          </ul>
          <div
            class="pointer-events-none absolute top-2 right-2 text-xs opacity-10"
            :class="colorMap[group.color].text"
            aria-hidden="true"
          >
            { }
          </div>
        </article>
      </div>
    </section>

    <!-- On this site -->
    <section class="mb-16">
      <div class="mb-6">
        <div
          class="mb-2 font-mono text-[0.65rem] uppercase tracking-wider text-base-content/40"
        >
          routes
        </div>
        <h2 class="text-2xl font-bold text-nord-blue md:text-3xl">
          <span class="opacity-40">&lt;</span>OnThisSite<span
            class="opacity-40"
          >
            /&gt;</span
          >
        </h2>
      </div>

      <div class="grid gap-4 md:grid-cols-3">
        <NuxtLink
          v-for="link in siteLinks"
          :key="link.to"
          :to="link.to"
          class="link-no-slide-anim group relative block overflow-hidden border-2 border-dashed border-nord-blue/30 bg-base-200 p-5 transition-all duration-300 hover:border-solid hover:border-nord-blue/55 hover:shadow-lg"
        >
          <div class="mb-2 font-mono text-xs text-nord-green">
            <span class="opacity-60">$</span> cd {{ link.code }}
          </div>
          <h3
            class="mb-2 text-lg font-bold text-nord-blue group-hover:text-nord-frost"
          >
            {{ link.label }}
          </h3>
          <p class="font-mono text-sm leading-relaxed opacity-70">
            // {{ link.description }}
          </p>
          <div
            class="pointer-events-none absolute top-2 right-2 text-xs text-nord-blue opacity-10 group-hover:opacity-20"
            aria-hidden="true"
          >
            { }
          </div>
        </NuxtLink>
      </div>
    </section>

    <!-- Contact -->
    <section class="not-prose max-w-xl">
      <div class="mb-4">
        <div
          class="mb-2 font-mono text-[0.65rem] uppercase tracking-wider text-base-content/40"
        >
          io
        </div>
        <h2 class="text-2xl font-bold text-nord-green md:text-3xl">
          <span class="opacity-40">&lt;</span>Contact<span class="opacity-40">
            /&gt;</span
          >
        </h2>
        <p class="mt-2 text-sm opacity-70">// GitHub or Discord.</p>
      </div>
      <ProfileContactSocials :show-heading="false" />
    </section>
  </main>
</template>
