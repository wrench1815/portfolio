<template>
  <!-- Curved CRT-style glass: barrel edge, scanlines, vignette, subtle roll + flicker -->
  <div
    class="pointer-events-none absolute inset-0 overflow-hidden"
    aria-hidden="true"
    data-testid="crt-curved-screen-overlay"
  >
    <!-- Barrel curve + deep inset shadow (tube face) -->
    <div class="crt-bezel" />

    <!-- Slight “bulge” toward viewer -->
    <div class="crt-perspective" />

    <!-- Horizontal scanlines -->
    <div class="crt-scanlines" />

    <!-- Corner / edge darkening -->
    <div class="crt-vignette" />

    <!-- Very slow rolling highlight (phosphor refresh feel) -->
    <div class="crt-roll motion-reduce:hidden" />

    <!-- Micro flicker -->
    <div class="crt-flicker motion-reduce:hidden" />
  </div>
</template>

<style scoped>
/* Elliptical “tube” — oversized rounded rect reads as curved CRT face */
.crt-bezel {
  position: absolute;
  inset: -10%;
  border-radius: 50% / 18%;
  box-shadow:
    inset 0 0 140px
      color-mix(in oklch, var(--color-base-content) 42%, transparent),
    inset 0 0 48px
      color-mix(in oklch, var(--color-base-content) 18%, transparent),
    inset 0 0 12px
      color-mix(in oklch, var(--color-base-content) 8%, transparent);
  pointer-events: none;
}

/* Mild perspective so the plane feels slightly convex */
.crt-perspective {
  position: absolute;
  inset: 0;
  transform: perspective(52rem) rotateX(1.25deg) scale(1.02);
  transform-origin: 50% 50%;
  border-radius: 50% / 12%;
  box-shadow: inset 0 0 80px
    color-mix(in oklch, var(--color-base-content) 12%, transparent);
  pointer-events: none;
}

@media (prefers-reduced-motion: reduce) {
  .crt-perspective {
    transform: none;
    border-radius: 0;
    box-shadow: inset 0 0 60px
      color-mix(in oklch, var(--color-base-content) 15%, transparent);
  }

  .crt-bezel {
    border-radius: 0;
    inset: 0;
  }
}

.crt-scanlines {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    to bottom,
    transparent 0,
    transparent 2px,
    color-mix(in oklch, var(--color-base-content) 6%, transparent) 2px,
    color-mix(in oklch, var(--color-base-content) 6%, transparent) 3px
  );
  opacity: 0.4;
}

.crt-vignette {
  position: absolute;
  inset: -5%;
  border-radius: 50% / 16%;
  background: radial-gradient(
    ellipse 72% 68% at 50% 48%,
    transparent 0%,
    transparent 48%,
    color-mix(in oklch, var(--color-base-content) 26%, transparent) 100%
  );
  pointer-events: none;
}

@media (prefers-reduced-motion: reduce) {
  .crt-vignette {
    border-radius: 0;
    inset: 0;
  }

  .crt-scanlines {
    opacity: 0.25;
  }
}

.crt-roll {
  position: absolute;
  left: -5%;
  right: -5%;
  top: 0;
  height: 18%;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    color-mix(in oklch, var(--color-base-content) 7%, transparent) 50%,
    transparent 100%
  );
  opacity: 0.55;
  animation: crt-roll 9s linear infinite;
  mix-blend-mode: overlay;
  pointer-events: none;
}

@keyframes crt-roll {
  from {
    transform: translateY(-120%);
  }
  to {
    transform: translateY(calc(100vh + 120%));
  }
}

.crt-flicker {
  position: absolute;
  inset: 0;
  background: color-mix(in oklch, var(--color-base-content) 5%, transparent);
  animation: crt-flicker 3.2s ease-in-out infinite;
  opacity: 0.35;
  pointer-events: none;
}

@keyframes crt-flicker {
  0%,
  100% {
    opacity: 0.22;
  }
  50% {
    opacity: 0.42;
  }
}

@media (prefers-reduced-motion: reduce) {
  .crt-flicker {
    animation: none;
    opacity: 0;
  }

  .crt-roll {
    animation: none;
    opacity: 0;
  }
}
</style>
