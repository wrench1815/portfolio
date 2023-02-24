import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

export interface ITechnology {
  name: string
  link: string
}

export interface IProjects extends ParsedContent {
  technology: ITechnology[]
  github: string
  live: string
}
