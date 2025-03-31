<script lang="ts" setup>
import { RiSunFill, RiMoonFill } from '@remixicon/vue'
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
    class="btn btn-circle bg-transparent border-none loading disabled text-primary"
    v-if="loading"
  ></div>

  <div
    class="btn-circle swap swap-rotate text-primary transition-all duration-300 ease-in-out"
    :class="{
      'swap-active': theme == 'nordDark',
      '': theme == 'nordLight',
    }"
    @click="swapTheme"
    v-else
  >
    <!-- sun icon -->
    <RiSunFill name="ri-sun-fill" class="swap-on" scale="1.2" />

    <!-- moon icon -->
    <RiMoonFill name="ri-moon-fill" class="swap-off" scale="1.2" />
  </div>
</template>

<style scoped></style>
