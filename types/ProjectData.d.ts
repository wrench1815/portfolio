import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

export interface TechnologyTypes {
  name: string
  link: string
}

export interface ProjectsDataTypes extends ParsedContent {
  technology: TechnologyTypes[]
  github: string
  live: string
}
