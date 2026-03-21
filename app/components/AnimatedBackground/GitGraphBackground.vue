<template>
  <!-- Decorative git-log–style graph (branches, merges, commits). -->
  <div
    class="pointer-events-none absolute inset-0 overflow-hidden select-none"
    aria-hidden="true"
  >
    <svg
      class="git-graph-svg absolute -right-4 top-1/2 h-[min(95vh,880px)] w-[min(100vw,420px)] -translate-y-1/2 sm:right-0 sm:w-[min(100vw,480px)]"
      viewBox="0 0 280 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- main / trunk -->
      <g
        class="text-primary/35"
        stroke="currentColor"
        stroke-width="1.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path
          d="M 118 42 L 118 118 L 118 198 L 118 268 L 118 348 L 118 428 L 118 498"
          class="git-graph-path"
          pathLength="100"
        />
      </g>

      <!-- feature branch -->
      <g
        class="text-accent/30"
        stroke="currentColor"
        stroke-width="1.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path
          d="M 118 42 C 118 58 202 72 202 88 L 202 158 C 202 188 118 188 118 198"
          class="git-graph-path git-graph-path-delay"
          pathLength="100"
        />
      </g>

      <!-- second topic branch -->
      <g
        class="text-secondary/28"
        stroke="currentColor"
        stroke-width="1.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path
          d="M 118 198 C 118 218 48 232 48 252 L 48 312 C 48 338 118 348 118 348"
          class="git-graph-path git-graph-path-delay-2"
          pathLength="100"
        />
      </g>

      <!-- hotfix / short branch -->
      <g
        class="text-info/25"
        stroke="currentColor"
        stroke-width="1.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path
          d="M 118 268 C 118 288 228 298 228 318 L 228 378 C 228 402 118 412 118 428"
          class="git-graph-path git-graph-path-delay-3"
          pathLength="100"
        />
      </g>

      <!-- commit nodes -->
      <g class="text-primary/50">
        <circle cx="118" cy="42" r="5" class="git-graph-node" />
        <circle cx="118" cy="118" r="4.5" class="git-graph-node" style="animation-delay: 0.4s" />
        <circle cx="118" cy="198" r="5" class="git-graph-node" style="animation-delay: 0.8s" />
        <circle cx="118" cy="268" r="4.5" class="git-graph-node" style="animation-delay: 1.1s" />
        <circle cx="118" cy="348" r="5" class="git-graph-node" style="animation-delay: 1.4s" />
        <circle cx="118" cy="428" r="4.5" class="git-graph-node" style="animation-delay: 1.7s" />
        <circle cx="118" cy="498" r="4" class="git-graph-node" style="animation-delay: 2s" />
      </g>
      <g class="text-accent/45">
        <circle cx="202" cy="88" r="4" class="git-graph-node" style="animation-delay: 0.2s" />
        <circle cx="202" cy="158" r="4.5" class="git-graph-node" style="animation-delay: 0.6s" />
      </g>
      <g class="text-secondary/45">
        <circle cx="48" cy="252" r="4" class="git-graph-node" style="animation-delay: 0.5s" />
        <circle cx="48" cy="312" r="4.5" class="git-graph-node" style="animation-delay: 0.9s" />
      </g>
      <g class="text-info/40">
        <circle cx="228" cy="318" r="4" class="git-graph-node" style="animation-delay: 0.3s" />
        <circle cx="228" cy="378" r="4.5" class="git-graph-node" style="animation-delay: 1.2s" />
      </g>
    </svg>
  </div>
</template>

<style scoped>
.git-graph-path {
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
}

@media (prefers-reduced-motion: no-preference) {
  .git-graph-path {
    animation: git-graph-draw 14s ease-in-out infinite;
  }
}

.git-graph-path-delay {
  animation-delay: 1.5s;
}

.git-graph-path-delay-2 {
  animation-delay: 3s;
}

.git-graph-path-delay-3 {
  animation-delay: 4.5s;
}

@keyframes git-graph-draw {
  0%,
  100% {
    stroke-dashoffset: 100;
    opacity: 0.35;
  }
  40%,
  60% {
    stroke-dashoffset: 0;
    opacity: 0.85;
  }
}

.git-graph-node {
  fill: currentColor;
}

@media (prefers-reduced-motion: no-preference) {
  .git-graph-node {
    animation: git-graph-node 5s ease-in-out infinite;
  }
}

@media (prefers-reduced-motion: reduce) {
  .git-graph-path {
    stroke-dashoffset: 0 !important;
    opacity: 0.55;
    animation: none !important;
  }
}

@keyframes git-graph-node {
  0%,
  100% {
    opacity: 0.35;
  }
  50% {
    opacity: 0.95;
  }
}
</style>
