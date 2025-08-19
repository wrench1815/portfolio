<script lang="ts" setup>
import { RiSunLine, RiMoonLine } from '@remixicon/vue'
const theme = ref('nordLight')
const loading = ref(true)

function swapTheme() {
  const ele = document.querySelector('html') as HTMLHtmlElement

  if (theme.value == 'nordDark') {
    localStorage.setItem('theme', 'nordLight')
    ele.setAttribute('data-theme', 'nordLight')
    theme.value = 'nordLight'
    useHead({
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon/hardeepkumar_favicon_light.png',
          key: 'site-favicon',
        },
      ],
    })
  } else {
    localStorage.setItem('theme', 'nordDark')
    ele.setAttribute('data-theme', 'nordDark')
    theme.value = 'nordDark'
    useHead({
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon/hardeepkumar_favicon_dark.png',
          key: 'site-favicon',
        },
      ],
    })
  }
}

function initThemeCheck(
  ele: HTMLHtmlElement,
  prefersModeDark: MediaQueryList,
  localTheme: string | null
) {
  if (prefersModeDark.matches) {
    if (localTheme == 'nordDark') {
      localStorage.setItem('theme', 'nordDark')
      ele.setAttribute('data-theme', 'nordDark')
      theme.value = 'nordDark'
      useHead({
        link: [
          {
            rel: 'icon',
            type: 'image/png',
            href: '/favicon/hardeepkumar_favicon_dark.png',
            key: 'site-favicon',
          },
        ],
      })
    } else if (localTheme == 'nordLight') {
      ele.setAttribute('data-theme', 'nordLight')
      theme.value = 'nordLight'
      useHead({
        link: [
          {
            rel: 'icon',
            type: 'image/png',
            href: '/favicon/hardeepkumar_favicon_light.png',
            key: 'site-favicon',
          },
        ],
      })
    } else {
      localStorage.setItem('theme', 'nordDark')
      ele.setAttribute('data-theme', 'nordDark')
      theme.value = 'nordDark'
      useHead({
        link: [
          {
            rel: 'icon',
            type: 'image/png',
            href: '/favicon/hardeepkumar_favicon_dark.png',
            key: 'site-favicon',
          },
        ],
      })
    }
  } else {
    if (localTheme == 'nordDark') {
      ele.setAttribute('data-theme', 'nordDark')
      theme.value = 'nordDark'
      useHead({
        link: [
          {
            rel: 'icon',
            type: 'image/png',
            href: '/favicon/hardeepkumar_favicon_dark.png',
            key: 'site-favicon',
          },
        ],
      })
    } else if (localTheme == 'nordLight') {
      ele.setAttribute('data-theme', 'nordLight')
      theme.value = 'nordLight'
      useHead({
        link: [
          {
            rel: 'icon',
            type: 'image/png',
            href: '/favicon/hardeepkumar_favicon_light.png',
            key: 'site-favicon',
          },
        ],
      })
    } else {
      localStorage.setItem('theme', 'nordLight')
      ele.setAttribute('data-theme', 'nordLight')
      theme.value = 'nordLight'
      useHead({
        link: [
          {
            rel: 'icon',
            type: 'image/png',
            href: '/favicon/hardeepkumar_favicon_light.png',
            key: 'site-favicon',
          },
        ],
      })
    }
  }
}

onMounted(() => {
  const ele = document.querySelector('html') as HTMLHtmlElement
  const prefersModeDark = window.matchMedia('(prefers-color-scheme: dark)')
  const localTheme: string | null = localStorage.getItem('theme')

  initThemeCheck(ele, prefersModeDark, localTheme)

  loading.value = false

  prefersModeDark.addEventListener('change', () => {
    if (prefersModeDark.matches) {
      localStorage.setItem('theme', 'nordDark')
      ele.setAttribute('data-theme', 'nordDark')
      theme.value = 'nordDark'
      useHead({
        link: [
          {
            rel: 'icon',
            type: 'image/png',
            href: '/favicon/hardeepkumar_favicon_dark.png',
            key: 'site-favicon',
          },
        ],
      })
    } else {
      localStorage.setItem('theme', 'nordLight')
      ele.setAttribute('data-theme', 'nordLight')
      theme.value = 'nordLight'
      useHead({
        link: [
          {
            rel: 'icon',
            type: 'image/png',
            href: '/favicon/hardeepkumar_favicon_light.png',
            key: 'site-favicon',
          },
        ],
      })
    }
  })

  window.onstorage = () => {
    const currentLocalTheme = localStorage.getItem('theme')

    if (currentLocalTheme == 'nordDark') {
      localStorage.setItem('theme', 'nordDark')
      ele.setAttribute('data-theme', 'nordDark')
      theme.value = 'nordDark'
      useHead({
        link: [
          {
            rel: 'icon',
            type: 'image/png',
            href: '/favicon/hardeepkumar_favicon_dark.png',
            key: 'site-favicon',
          },
        ],
      })
    } else if (currentLocalTheme == 'nordLight') {
      localStorage.setItem('theme', 'nordLight')
      ele.setAttribute('data-theme', 'nordLight')
      theme.value = 'nordLight'
      useHead({
        link: [
          {
            rel: 'icon',
            type: 'image/png',
            href: '/favicon/hardeepkumar_favicon_light.png',
            key: 'site-favicon',
          },
        ],
      })
    } else {
      localStorage.setItem('theme', 'nordLight')
      ele.setAttribute('data-theme', 'nordLight')
      theme.value = 'nordLight'
      useHead({
        link: [
          {
            rel: 'icon',
            type: 'image/png',
            href: '/favicon/hardeepkumar_favicon_light.png',
            key: 'site-favicon',
          },
        ],
      })
    }
  }
})
</script>

<template>
  <div
    class="btn btn-circle bg-base-100 border-none loading disabled text-nord-blue"
    v-if="loading"
  ></div>

  <div
    class="btn btn-circle bg-base-100 swap swap-rotate"
    :class="{
      'swap-active': theme == 'nordDark',
      '': theme == 'nordLight',
    }"
    @click="swapTheme"
    v-else
  >
    <!-- sun icon -->
    <RiSunLine class="swap-on" size="20" />

    <!-- moon icon -->
    <RiMoonLine class="swap-off" size="20" />
  </div>
</template>

<style scoped></style>
