<script setup>
import { computed } from 'vue'

/**
 * OG image (Takumi). Nord colors inline — no daisyUI in OG pipeline.
 * Optional props: omit or leave empty to hide that block (no placeholders).
 */

const FAVICON_PATH_LIGHT = '/favicon/hardeepkumar_favicon_light.png'
const FAVICON_PATH_DARK = '/favicon/hardeepkumar_favicon_dark.png'

const NORD = {
  light: {
    base100: '#eceff4',
    base200: '#e5e9f0',
    base300: '#d8dee9',
    content: '#2e3440',
    primary: '#5e81ac',
    primaryContent: '#2e3440',
    muted: '#4c566a',
    secondary: '#81a1c1',
    accent: '#88c0d0',
    success: '#a3be8c',
    warning: '#ebcb8b',
    error: '#bf616a',
  },
  dark: {
    base100: '#2e3440',
    base200: '#3b4252',
    base300: '#434c5e',
    content: '#eceff4',
    primary: '#88c0d0',
    primaryContent: '#2e3440',
    muted: '#81a1c1',
    secondary: '#81a1c1',
    accent: '#8fbcbb',
    success: '#a3be8c',
    warning: '#ebcb8b',
    error: '#bf616a',
  },
}

const props = defineProps({
  colorMode: { type: String, required: false, default: 'dark' },
  /**
   * content-md: ~/content/{pathLabel}.md (blog posts)
   * bare: ~/{pathLabel} (routes / pages)
   */
  pathFormat: { type: String, required: false, default: 'content-md' },
  pathLabel: { type: String, required: false, default: '' },
  title: { type: String, required: false, default: '' },
  description: { type: String, required: false, default: '' },
  /** Title-bar chip: type {kindLabel} = "{kindValue}" — both must be non-empty */
  kindLabel: { type: String, required: false, default: '' },
  kindValue: { type: String, required: false, default: '' },
  date: { type: String, required: false, default: '' },
  readTime: { type: String, required: false, default: '' },
  /** Fills first meta chip when date is empty (e.g. "3 topics") */
  primaryStat: { type: String, required: false, default: '' },
  /** Fills second meta chip when readTime is empty */
  secondaryStat: { type: String, required: false, default: '' },
  /** Footer: // author: … — if empty, falls back to site name when available */
  author: { type: String, required: false, default: '' },
  avatar: { type: String, required: false, default: '' },
  backgroundImage: { type: String, required: false, default: '' },
})

const palette = computed(() =>
  props.colorMode === 'dark' ? NORD.dark : NORD.light,
)

const pathDisplay = computed(() => {
  const raw = props.pathLabel?.trim() ?? ''
  if (props.pathFormat === 'bare') return raw || 'pages/index.vue'
  return raw || 'blog/post'
})

const siteConfig = useSiteConfig()

const faviconPath = computed(() =>
  props.colorMode === 'dark' ? FAVICON_PATH_DARK : FAVICON_PATH_LIGHT,
)

const faviconUrl = computed(() => {
  const base = siteConfig.url
  const path = faviconPath.value
  if (!base) return path
  return `${String(base).replace(/\/$/, '')}${path}`
})

const displayTitle = computed(() => props.title?.trim() || 'Untitled')

const displayDescription = computed(
  () => props.description?.trim() || displayTitle.value,
)

const showKindChip = computed(
  () => Boolean(props.kindLabel?.trim() && props.kindValue?.trim()),
)

const firstMetaText = computed(() => props.date?.trim() || props.primaryStat?.trim() || '')
const secondMetaIsReadTime = computed(() => Boolean(props.readTime?.trim()))
const secondMetaText = computed(() => {
  if (secondMetaIsReadTime.value) return `${props.readTime.trim()} read`
  return props.secondaryStat?.trim() || ''
})
const showFirstMeta = computed(() => Boolean(firstMetaText.value))
const showSecondMeta = computed(() => Boolean(secondMetaText.value))

const footerLine = computed(() => {
  const a = props.author?.trim()
  if (a) return { key: 'author', text: a }
  const site = siteConfig.name?.trim()
  if (site) return { key: 'site', text: site }
  return null
})

function hexToRgb(hex) {
  const h = hex.replace('#', '')
  return {
    r: Number.parseInt(h.slice(0, 2), 16),
    g: Number.parseInt(h.slice(2, 4), 16),
    b: Number.parseInt(h.slice(4, 6), 16),
  }
}

function hexAlpha(hex, alpha) {
  const { r, g, b } = hexToRgb(hex)
  return `rgba(${r},${g},${b},${alpha})`
}

const rootStyle = computed(() => {
  const p = palette.value
  if (props.backgroundImage) {
    const { r, g, b } = hexToRgb(p.base100)
    return {
      backgroundImage: `linear-gradient(105deg, rgba(${r},${g},${b},0.94) 0%, rgba(${r},${g},${b},0.88) 45%, rgba(${r},${g},${b},0.82) 100%), url(${props.backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: p.content,
    }
  }
  return {
    backgroundColor: p.base100,
    color: p.content,
  }
})

const panelStyle = computed(() => ({
  backgroundColor: palette.value.base200,
  borderColor: palette.value.base300,
}))

const titleBarStyle = computed(() => ({
  backgroundColor: palette.value.base300,
  borderColor: palette.value.base300,
}))

const kindChipStyle = computed(() => {
  const p = palette.value
  return {
    backgroundColor: `${p.base100}cc`,
    color: p.secondary,
    borderColor: p.base300,
  }
})

const avatarBorderStyle = computed(() => ({
  borderColor: palette.value.accent,
}))

const metaPrimaryChipFrameStyle = computed(() => {
  const p = palette.value
  return {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: hexAlpha(p.success, 0.45),
  }
})

const metaSecondaryChipFrameStyle = computed(() => {
  const p = palette.value
  return {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: hexAlpha(p.warning, 0.6),
  }
})
</script>

<template>
  <div
    class="w-full h-full min-h-full flex flex-col font-mono overflow-hidden"
    :style="rootStyle"
  >
    <div
      class="flex flex-col w-full h-full min-h-0 flex-1 overflow-hidden"
      :style="panelStyle"
    >
      <div
        class="flex items-center gap-4 px-5 py-3 border-b-2 border-solid shrink-0"
        :style="titleBarStyle"
      >
        <div class="flex gap-2 shrink-0">
          <span
            class="w-3.5 h-3.5 rounded-full block"
            :style="{ backgroundColor: palette.error }"
          />
          <span
            class="w-3.5 h-3.5 rounded-full block"
            :style="{ backgroundColor: palette.warning }"
          />
          <span
            class="w-3.5 h-3.5 rounded-full block"
            :style="{ backgroundColor: palette.success }"
          />
        </div>
        <span
          class="text-[20px] truncate opacity-90 min-w-0"
          :style="{ color: palette.muted }"
        >
          <template v-if="pathFormat === 'bare'">
            ~/<span :style="{ color: palette.accent }">{{ pathDisplay }}</span>
          </template>
          <template v-else>
            ~/content/<span :style="{ color: palette.accent }">{{
              pathDisplay
            }}</span>.md
          </template>
        </span>
        <div class="flex-1 min-w-0" />
        <span
          v-if="showKindChip"
          class="text-[18px] px-3 py-1 rounded border border-solid shrink-0 max-w-[min(420px,45%)] truncate"
          :style="kindChipStyle"
        >
          <span :style="{ color: palette.muted }">type </span>
          <span :style="{ color: palette.success }">{{ kindLabel }}</span>
          <span :style="{ color: palette.content }"> = </span>
          <span :style="{ color: palette.primary }">"{{ kindValue }}"</span>
        </span>
      </div>

      <div
        class="flex flex-1 min-h-0 min-w-0 flex-col p-10 pt-12"
        style="display: flex; flex-direction: column"
      >
        <h1
          class="font-sans font-bold m-0 text-[56px] leading-tight shrink-0"
          style="
            display: block;
            width: 100%;
            opacity: 0.9;
            word-wrap: break-word;
          "
          :style="{ color: palette.primary }"
        >
          &lt;{{ displayTitle }} /&gt;
        </h1>
        <p
          class="m-0 mt-10 text-[28px] leading-relaxed shrink-0"
          style="display: block; width: 100%; opacity: 0.7"
          :style="{ color: palette.content }"
        >
          // {{ displayDescription }}
        </p>
        <div
          class="flex flex-row flex-wrap items-center justify-between gap-5 w-full shrink-0 mt-auto pt-10 self-stretch"
          style="display: flex"
        >
          <div
            class="inline-flex flex-row flex-wrap items-center gap-3 shrink-0 min-h-[48px]"
            style="display: inline-flex"
          >
            <div
              v-if="showFirstMeta"
              class="inline-flex flex-row flex-wrap items-center gap-1.5 py-2 pl-3 pr-2 text-[22px] font-bold"
              style="display: inline-flex"
              :style="metaPrimaryChipFrameStyle"
            >
              <span :style="{ color: palette.muted }">[</span>
              <span :style="{ color: palette.success }">{{
                firstMetaText
              }}</span>
              <span :style="{ color: palette.muted }">]</span>
            </div>
            <div
              v-if="showSecondMeta"
              class="inline-flex flex-row flex-wrap items-center gap-1.5 py-2 pl-3 pr-2 text-[22px] font-bold"
              style="display: inline-flex"
              :style="metaSecondaryChipFrameStyle"
            >
              <span :style="{ color: palette.muted }">[</span>
              <span :style="{ color: palette.content }">{{
                secondMetaText
              }}</span>
              <span :style="{ color: palette.muted }">]</span>
            </div>
          </div>
          <img
            :src="faviconUrl"
            alt=""
            class="shrink-0"
            style="width: 48px; height: 48px; object-fit: contain"
          />
        </div>
      </div>

      <div
        class="flex items-center gap-6 px-6 py-4 border-t-2 border-solid text-[22px] shrink-0"
        :style="{ ...titleBarStyle, borderTopColor: palette.base300 }"
      >
        <div
          v-if="avatar"
          class="overflow-hidden border-2 border-solid shrink-0 rounded-sm"
          :style="{
            width: '52px',
            height: '52px',
            ...avatarBorderStyle,
          }"
        >
          <img
            :src="avatar"
            alt=""
            class="w-full h-full block"
            style="object-fit: cover"
          />
        </div>
        <div
          v-if="footerLine"
          class="flex flex-col gap-0.5 min-w-0 flex-1"
        >
          <span class="truncate" :style="{ color: palette.content }">
            <span :style="{ color: palette.muted }">// </span>
            <span :style="{ color: palette.secondary }">{{
              footerLine.key
            }}</span>
            <span :style="{ color: palette.content }">: </span>
            <span class="font-semibold">{{ footerLine.text }}</span>
          </span>
        </div>
        <div v-else class="flex-1 min-w-0" />
        <div
          class="shrink-0 text-[18px] px-3 py-1.5 rounded border border-solid"
          :style="kindChipStyle"
        >
          <span :style="{ color: palette.success }">UTF-8</span>
          <span :style="{ color: palette.muted }"> · </span>
          <span :style="{ color: palette.primary }">Nord</span>
        </div>
      </div>
    </div>
  </div>
</template>
