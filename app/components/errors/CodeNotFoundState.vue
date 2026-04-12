<script lang="ts" setup>
/**
 * Terminal / mockup-code empty result — for "no documents" UX (topic posts, future 404s).
 */
const props = withDefaults(
  defineProps<{
    /** Value shown in .where('…', '=', '…') */
    fieldValue: string
    /** Nuxt Content collection name */
    collection?: string
    /** `type` filter in the fluent chain */
    contentType?: string
    /** First .where key (e.g. topicId, slug) */
    whereField?: string
    /** Optional second .where (e.g. slug after topicId) */
    secondWhereField?: string
    secondFieldValue?: string
    /** Fluent terminator: `.all()` or `.first()` */
    queryMethod?: 'all' | 'first'
    /** Green quoted segment after `$ node --eval ` */
    shellCommand?: string
    /** Shown after empty result line */
    errorName?: string
    httpCode?: string
    /** Replaces the default "empty result..." sentence (after em dash) */
    errorMessage?: string
    /** Highlight token in footer, e.g. posts.length */
    footerHighlight?: string
    /** Text after “=== 0 ” in footer */
    footerTail?: string
    /** Full footer override (plain text; skips highlight + tail) */
    footerComment?: string
  }>(),
  {
    collection: 'blog',
    contentType: 'post',
    whereField: 'topicId',
    secondWhereField: '',
    secondFieldValue: '',
    queryMethod: 'all',
    shellCommand: 'inspectTopicPosts()',
    errorName: 'NotFoundError',
    httpCode: '404',
    errorMessage: '',
    footerHighlight: 'posts.length',
    footerTail: '→ no children mounted; query OK, result set empty',
    footerComment: '',
  },
)

const useDefaultErrorCopy = computed(() => !props.errorMessage?.trim())

const showSecondWhere = computed(
  () =>
    Boolean(props.secondWhereField?.trim()) &&
    props.secondFieldValue !== undefined &&
    props.secondFieldValue !== '',
)

const emptyResultToken = computed(() =>
  props.queryMethod === 'first' ? 'null' : '[]',
)

const queryMethodLabel = computed(() =>
  props.queryMethod === 'first' ? 'first' : 'all',
)
</script>

<template>
  <div class="not-prose mb-12 max-w-3xl" role="status" aria-live="polite">
    <p class="mb-3 text-xs font-mono opacity-60">
      <span class="text-nord-green">$</span>
      <span class="text-base-content/80"> node --eval </span>
      <span class="text-success">'{{ shellCommand }}'</span>
    </p>

    <div
      class="mockup-code w-full border border-base-300 bg-base-200! font-mono text-sm leading-relaxed text-base-content shadow-sm [&_code]:font-mono [&_code]:text-base-content [&_pre]:font-mono [&_pre]:bg-base-200! [&_pre]:text-base-content"
    >
      <pre data-prefix=">"><code
          ><span class="text-accent">await</span> queryCollection(<span
            class="text-success"
            >'{{ collection }}'</span
          >)</code
        ></pre>
      <pre data-prefix=">"><code
          >&nbsp;&nbsp;.<span class="text-info">where</span>(<span
            class="text-success"
            >'type'</span
          >, <span class="text-success">'='</span>, <span
            class="text-success"
            >'{{ contentType }}'</span
          >)</code
        ></pre>
      <pre data-prefix=">"><code
          >&nbsp;&nbsp;.<span class="text-info">where</span>(<span
            class="text-success"
            >'{{ whereField }}'</span
          >, <span class="text-success">'='</span>, <span
            class="text-success"
            >'{{ fieldValue }}'</span
          >)</code
        ></pre>
      <pre v-if="showSecondWhere" data-prefix=">"><code
          >&nbsp;&nbsp;.<span class="text-info">where</span>(<span
            class="text-success"
            >'{{ secondWhereField }}'</span
          >, <span class="text-success">'='</span>, <span
            class="text-success"
            >'{{ secondFieldValue }}'</span
          >)</code
        ></pre>
      <pre data-prefix=">"><code
          >&nbsp;&nbsp;.<span class="text-info">{{ queryMethodLabel }}</span
          >()</code
        ></pre>
      <pre data-prefix="←"><code class="text-warning">{{
        emptyResultToken
      }}</code></pre>
      <pre data-prefix="!"><code
          ><span class="text-error">{{ errorName }}</span>: <span
            class="font-semibold text-warning"
            >{{ httpCode }}</span
          >
          <span>— </span><span v-if="useDefaultErrorCopy">empty result; no rows for this <span class="text-success">{{ whereField }}</span>. Nothing to render.</span><span v-else>{{ errorMessage }}</span></code></pre>
    </div>

    <p v-if="footerComment" class="mt-4 text-xs font-mono opacity-50">
      {{ footerComment }}
    </p>
    <p v-else class="mt-4 text-xs font-mono opacity-50">
      //
      <span class="text-warning">{{ footerHighlight }}</span>
      === 0 {{ footerTail }}
    </p>
  </div>
</template>
