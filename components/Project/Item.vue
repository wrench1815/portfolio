<script lang="ts" setup>
import { ProjectsDataTypes } from '../../types/ProjectData';

const props = defineProps<{
  projects: [ProjectsDataTypes];
}>();

function setRandomBtnColor() {
  const btnColors = [
    'btn-primary',
    'btn-secondary',
    'btn-accent',
    'btn-neutral',
    'btn-info',
    'btn-success',
    'btn-warning',
    'btn-error',
    'btn-base-100',
  ];
  return btnColors[Math.floor(Math.random() * btnColors.length)];
}
</script>

<template>
  <div class="flex flex-col gap-28 relative py-20">
    <!-- center line -->
    <div
      class="absolute bg-primary w-0.5 top-0 bottom-0 left-0 right-0 m-auto"
    ></div>

    <!-- card -->
    <template v-for="item in props.projects" :key="item._path">
      <div
        class="card lg:card-side bg-base-100 shadow-xl border border-primary"
      >
        <!-- rounded circle on top -->
        <div
          class="bg-primary w-4 h-4 absolute left-0 right-0 mx-auto -mt-6 rounded-full"
        ></div>

        <!-- content -->
        <div class="card-body">
          <h1>{{ item.title }}</h1>
          <p class="whitespace-pre-line" v-html="item.description"></p>

          <h2>Technology</h2>
          <template v-if="item.technology.length != 0">
            <div class="flex gap-2 flex-wrap">
              <a
                v-for="tech in item.technology"
                class="btn btn-sm"
                :class="setRandomBtnColor()"
                :href="tech.link"
                target="_blank"
              >
                {{ tech.name }}
              </a>
            </div>
          </template>
          <template v-else><p>No Technology Found</p></template>

          <div class="card-actions justify-start mt-4">
            <a
              v-if="item.github.length"
              :href="`https://github.com/${item.github}`"
              target="_blank"
            >
              <v-icon
                name="ri-github-fill"
                scale="1.2"
                class="hover:text-primary"
              />
            </a>

            <a v-if="item.live.length" :href="item.live" target="_blank">
              <v-icon
                name="ri-external-link-line"
                scale="1.2"
                class="hover:text-primary"
              />
            </a>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped></style>
