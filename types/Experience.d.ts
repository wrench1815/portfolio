import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

export interface ITechnology {
  name: string
  link: string
}

export interface IExperience extends ParsedContent {
  job_title: string
  description: string
  technology: ITechnology[]
  employer: string
  employer_website: string
  employer_address: string
  job_type: string
  start_date: string
  end_date: string
}
