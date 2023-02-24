<script lang="ts" setup>
import { IExperience } from '../../types/Experience'

const props = defineProps<{
  experience: IExperience
}>()

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
  ]
  return btnColors[Math.floor(Math.random() * btnColors.length)]
}
</script>

<template>
  <div class="card card-bordered border-primary">
    <div class="card-body">
      <h2 class="text-primary">{{ props.experience.job_title }}</h2>
      <section class="flex flex-col gap-2">
        <div>
          <dt class="font-medium text-secondary">Type</dt>
          <dd>{{ props.experience.job_type }}</dd>
        </div>
        <div>
          <dt class="font-medium">Employer</dt>
          <dd>{{ props.experience.employer }}</dd>
        </div>
        <div>
          <dt class="font-medium text-secondary">Address</dt>
          <dd>{{ props.experience.employer_address }}</dd>
        </div>
        <div>
          <dt class="font-medium text-secondary">Website</dt>
          <dd>
            <a :href="props.experience.employer_website" target="_blank">{{
              props.experience.employer_website
            }}</a>
            <v-icon name="oi-link-external" />
          </dd>
        </div>
        <div>
          <dt class="font-medium text-secondary">Tenure</dt>
          <dd>
            {{
              props.experience.start_date + ' - ' + props.experience.end_date
            }}
          </dd>
        </div>
      </section>
      <p>{{ props.experience.description }}</p>

      <h4 class="text-secondary">Technologies</h4>
      <div class="flex gap-2 flex-wrap">
        <a
          v-for="tech in props.experience.technology"
          class="btn btn-sm"
          :class="setRandomBtnColor()"
          :href="tech.link"
          target="_blank"
          >{{ tech.name }}</a
        >
      </div>
    </div>
  </div>
</template>

<style scoped></style>
