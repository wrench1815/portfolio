<script lang="ts" setup>
withDefaults(
  defineProps<{
    showHeading?: boolean
  }>(),
  {
    showHeading: true,
  },
)

const socialLinks = useSocialLinks()
</script>

<template>
  <div class="not-prose">
    <h3 v-if="showHeading" class="text-center md:text-start">Connect on</h3>
    <div class="flex flex-row flex-wrap gap-3 justify-start">
      <ProfileContactLink
        v-for="item in socialLinks"
        :key="item.iconKey"
        :social="{
          link: item.href,
          username: item.username,
          label: item.label,
          linkClass: item.linkClass,
        }"
      >
        <template #icon>
          <component :is="item.icon" class="h-6 w-6 shrink-0 fill-current" />
        </template>
      </ProfileContactLink>
    </div>
  </div>
</template>
