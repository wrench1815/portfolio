import {
  cancelPageTextDecrypt,
  hidePageDecryptRoot,
  PAGE_DECRYPT_CONFIG,
  PAGE_DECRYPT_ONCE_SELECTOR,
  PAGE_DECRYPT_REVEALED_CLASS,
  PAGE_DECRYPT_SELECTOR,
  revealPageDecryptRoot,
  runPageTextDecrypt,
} from '~/utils/page-text-decrypt'

function getMainDecryptRoot() {
  return document.querySelector<HTMLElement>(PAGE_DECRYPT_SELECTOR)
}

function getOnceDecryptRoots() {
  return document.querySelectorAll<HTMLElement>(PAGE_DECRYPT_ONCE_SELECTOR)
}

export default defineNuxtPlugin((nuxtApp) => {
  async function decryptCurrentPage() {
    const mainRoot = getMainDecryptRoot()
    const onceRoots = getOnceDecryptRoots()

    if (!PAGE_DECRYPT_CONFIG.enabled) {
      onceRoots.forEach((root) => revealPageDecryptRoot(root))
      if (mainRoot) revealPageDecryptRoot(mainRoot)
      return
    }

    for (const root of onceRoots) {
      if (!root.classList.contains(PAGE_DECRYPT_REVEALED_CLASS)) {
        await runPageTextDecrypt(root)
      }
    }

    if (mainRoot) await runPageTextDecrypt(mainRoot)
  }

  nuxtApp.hook('page:finish', async () => {
    await nextTick()
    await decryptCurrentPage()
  })

  const router = useRouter()
  router.beforeEach(() => {
    cancelPageTextDecrypt()
    const mainRoot = getMainDecryptRoot()
    if (mainRoot) hidePageDecryptRoot(mainRoot)
  })
})
