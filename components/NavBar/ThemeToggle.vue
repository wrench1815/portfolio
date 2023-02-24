<script lang="ts" setup>
const theme = ref('nordLight')
const loading = ref(true)

function swapTheme() {
  const ele = document.querySelector('html') as HTMLHtmlElement

  if (theme.value == 'nordDark') {
    localStorage.setItem('theme', 'nordLight')
    ele.setAttribute('data-theme', 'nordLight')
    theme.value = 'nordLight'
  } else {
    localStorage.setItem('theme', 'nordDark')
    ele.setAttribute('data-theme', 'nordDark')
    theme.value = 'nordDark'
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
    } else if (localTheme == 'nordLight') {
      ele.setAttribute('data-theme', 'nordLight')
      theme.value = 'nordLight'
    } else {
      localStorage.setItem('theme', 'nordDark')
      ele.setAttribute('data-theme', 'nordDark')
      theme.value = 'nordDark'
    }
  } else {
    if (localTheme == 'nordDark') {
      ele.setAttribute('data-theme', 'nordDark')
      theme.value = 'nordDark'
    } else if (localTheme == 'nordLight') {
      ele.setAttribute('data-theme', 'nordLight')
      theme.value = 'nordLight'
    } else {
      localStorage.setItem('theme', 'nordLight')
      ele.setAttribute('data-theme', 'nordLight')
      theme.value = 'nordLight'
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
    } else {
      localStorage.setItem('theme', 'nordLight')
      ele.setAttribute('data-theme', 'nordLight')
      theme.value = 'nordLight'
    }
  })

  window.onstorage = () => {
    const currentLocalTheme = localStorage.getItem('theme')

    if (currentLocalTheme == 'nordDark') {
      localStorage.setItem('theme', 'nordDark')
      ele.setAttribute('data-theme', 'nordDark')
      theme.value = 'nordDark'
    } else if (currentLocalTheme == 'nordLight') {
      localStorage.setItem('theme', 'nordLight')
      ele.setAttribute('data-theme', 'nordLight')
      theme.value = 'nordLight'
    } else {
      localStorage.setItem('theme', 'nordLight')
      ele.setAttribute('data-theme', 'nordLight')
      theme.value = 'nordLight'
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
    <v-icon name="ri-sun-fill" class="swap-on" scale="1.2" />

    <!-- moon icon -->
    <v-icon name="ri-moon-fill" class="swap-off" scale="1.2" />
  </div>
</template>

<style scoped></style>
