<template>
  <div class="min-h-screen bg-base-100 p-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold text-primary mb-8">
        DaisyUI Color System Test
      </h1>

      <!-- Primary Colors -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-primary mb-4">Primary Colors</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="card bg-primary text-primary-content">
            <div class="card-body">
              <h3 class="card-title">Primary</h3>
              <p>
                This is the primary color used for main actions and branding.
              </p>
            </div>
          </div>
          <div class="card bg-secondary text-secondary-content">
            <div class="card-body">
              <h3 class="card-title">Secondary</h3>
              <p>This is the secondary color for supporting elements.</p>
            </div>
          </div>
          <div class="card bg-accent text-accent-content">
            <div class="card-body">
              <h3 class="card-title">Accent</h3>
              <p>
                This is the accent color for highlights and special elements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Semantic Colors -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-primary mb-4">
          Semantic Colors
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="alert alert-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="stroke-current shrink-0 w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>Info Alert</span>
          </div>
          <div class="alert alert-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Success Alert</span>
          </div>
          <div class="alert alert-warning">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
            <span>Warning Alert</span>
          </div>
          <div class="alert alert-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Error Alert</span>
          </div>
        </div>
      </section>

      <!-- Buttons -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-primary mb-4">Buttons</h2>
        <div class="flex flex-wrap gap-4">
          <button class="btn btn-primary">Primary</button>
          <button class="btn btn-secondary">Secondary</button>
          <button class="btn btn-accent">Accent</button>
          <button class="btn btn-outline btn-primary">Outline Primary</button>
          <button class="btn btn-outline btn-secondary">
            Outline Secondary
          </button>
          <button class="btn btn-ghost">Ghost</button>
          <button class="btn btn-info">Info</button>
          <button class="btn btn-success">Success</button>
          <button class="btn btn-warning">Warning</button>
          <button class="btn btn-error">Error</button>
        </div>
      </section>

      <!-- Badges -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-primary mb-4">Badges</h2>
        <div class="flex flex-wrap gap-4">
          <span class="badge badge-primary">Primary</span>
          <span class="badge badge-secondary">Secondary</span>
          <span class="badge badge-accent">Accent</span>
          <span class="badge badge-info">Info</span>
          <span class="badge badge-success">Success</span>
          <span class="badge badge-warning">Warning</span>
          <span class="badge badge-error">Error</span>
        </div>
      </section>

      <!-- Text Colors -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-primary mb-4">Text Colors</h2>
        <div class="space-y-2">
          <p class="text-primary text-lg">Primary text color</p>
          <p class="text-secondary text-lg">Secondary text color</p>
          <p class="text-accent text-lg">Accent text color</p>
          <p class="text-base-content text-lg">Base content text color</p>
          <p class="text-info text-lg">Info text color</p>
          <p class="text-success text-lg">Success text color</p>
          <p class="text-warning text-lg">Warning text color</p>
          <p class="text-error text-lg">Error text color</p>
        </div>
      </section>

      <!-- Base Colors -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-primary mb-4">Base Colors</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="card bg-base-100 border border-base-300">
            <div class="card-body">
              <h3 class="card-title text-base-content">Base 100</h3>
              <p class="text-base-content">Main background color</p>
            </div>
          </div>
          <div class="card bg-base-200 border border-base-300">
            <div class="card-body">
              <h3 class="card-title text-base-content">Base 200</h3>
              <p class="text-base-content">Secondary background color</p>
            </div>
          </div>
          <div class="card bg-base-300">
            <div class="card-body">
              <h3 class="card-title text-base-content">Base 300</h3>
              <p class="text-base-content">Tertiary background color</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Theme Toggle -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-primary mb-4">Theme Toggle</h2>
        <div class="flex items-center gap-4">
          <label class="swap swap-rotate">
            <input type="checkbox" class="theme-controller" value="nordDark" />
            <svg
              class="swap-on fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
              />
            </svg>
            <svg
              class="swap-off fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
              />
            </svg>
          </label>
          <span class="text-base-content"
            >Click to toggle between light and dark themes</span
          >
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
// No props or logic needed for this test page
</script>
