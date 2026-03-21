import { ref, onMounted, onUnmounted } from 'vue'

export function useTheme() {
  const theme = ref<'nordLight' | 'nordDark'>('nordLight')

  // Get current theme from document attribute
  const getCurrentTheme = (): 'nordLight' | 'nordDark' => {
    return (
      (document.documentElement.getAttribute('data-theme') as
        | 'nordLight'
        | 'nordDark') || 'nordLight'
    )
  }

  // Watch for theme changes
  const watchThemeChanges = () => {
    // Initial theme
    theme.value = getCurrentTheme()

    // Watch for changes in the data-theme attribute
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'data-theme'
        ) {
          theme.value = getCurrentTheme()
        }
      })
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })

    return observer
  }

  let themeObserver: MutationObserver

  onMounted(() => {
    // Start watching for theme changes
    themeObserver = watchThemeChanges()
  })

  onUnmounted(() => {
    if (themeObserver) {
      themeObserver.disconnect()
    }
  })

  return {
    theme,
    getCurrentTheme,
  }
}
