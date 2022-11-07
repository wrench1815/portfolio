<script lang="ts" setup>
const theme = ref('pastel');
const loading = ref(true);

function swapTheme() {
  const ele = document.querySelector('html');

  if (theme.value == 'dracula') {
    localStorage.setItem('theme', 'pastel');
    ele.setAttribute('data-theme', 'pastel');
    theme.value = 'pastel';
  } else {
    localStorage.setItem('theme', 'dracula');
    ele.setAttribute('data-theme', 'dracula');
    theme.value = 'dracula';
  }
}

function initThemeCheck(
  ele: HTMLHtmlElement,
  prefersModeDark: MediaQueryList,
  localTheme: string
) {
  if (prefersModeDark.matches) {
    if (localTheme == 'dracula') {
      localStorage.setItem('theme', 'dracula');
      ele.setAttribute('data-theme', 'dracula');
      theme.value = 'dracula';
    } else if (localTheme == 'pastel') {
      ele.setAttribute('data-theme', 'pastel');
      theme.value = 'pastel';
    } else {
      localStorage.setItem('theme', 'dracula');
      ele.setAttribute('data-theme', 'dracula');
      theme.value = 'dracula';
    }
  } else {
    if (localTheme == 'dracula') {
      ele.setAttribute('data-theme', 'dracula');
      theme.value = 'dracula';
    } else if (localTheme == 'pastel') {
      ele.setAttribute('data-theme', 'pastel');
      theme.value = 'pastel';
    } else {
      localStorage.setItem('theme', 'pastel');
      ele.setAttribute('data-theme', 'pastel');
      theme.value = 'pastel';
    }
  }
}

onMounted(() => {
  const ele = document.querySelector('html');
  const prefersModeDark = window.matchMedia('(prefers-color-scheme: dark)');
  const localTheme = localStorage.getItem('theme');

  initThemeCheck(ele, prefersModeDark, localTheme);

  loading.value = false;

  prefersModeDark.addEventListener('change', () => {
    if (prefersModeDark.matches) {
      localStorage.setItem('theme', 'dracula');
      ele.setAttribute('data-theme', 'dracula');
      theme.value = 'dracula';
    } else {
      localStorage.setItem('theme', 'pastel');
      ele.setAttribute('data-theme', 'pastel');
      theme.value = 'pastel';
    }
  });

  window.onstorage = () => {
    const currentLocalTheme = localStorage.getItem('theme');

    if (currentLocalTheme == 'dracula') {
      localStorage.setItem('theme', 'dracula');
      ele.setAttribute('data-theme', 'dracula');
      theme.value = 'dracula';
    } else if (currentLocalTheme == 'pastel') {
      localStorage.setItem('theme', 'pastel');
      ele.setAttribute('data-theme', 'pastel');
      theme.value = 'pastel';
    } else {
      localStorage.setItem('theme', 'pastel');
      ele.setAttribute('data-theme', 'pastel');
      theme.value = 'pastel';
    }
  };
});
</script>

<template>
  <div
    class="btn btn-circle bg-transparent border-none loading disabled text-primary"
    v-if="loading"
  ></div>

  <div
    class="btn-circle swap swap-rotate"
    :class="{
      'swap-active': theme == 'dracula',
      '': theme == 'pastel',
    }"
    @click="swapTheme"
    v-else
  >
    <!-- sun icon -->
    <v-icon name="ri-sun-fill" class="swap-on fill-primary" scale="1.2" />

    <!-- moon icon -->
    <v-icon name="ri-moon-fill" class="swap-off fill-primary" scale="1.2" />
  </div>
</template>

<style scoped></style>
