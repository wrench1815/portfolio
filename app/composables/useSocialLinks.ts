import type { Component } from 'vue'
import { RiGithubFill, RiDiscordFill, RiTwitterXFill } from '@remixicon/vue'

export interface SocialLinkItem {
  username: string
  href: string
  label: string
  icon: Component
  iconKey: 'github' | 'discord' | 'twitter'
  /** Footer icon buttons */
  toneClass: string
  /** @username text links (matches footer hues) */
  linkClass: string
}

export function useSocialLinks(): readonly SocialLinkItem[] {
  return [
    {
      username: 'wrench1815',
      href: 'https://github.com/wrench1815/',
      label: 'GitHub',
      icon: RiGithubFill,
      iconKey: 'github',
      toneClass:
        'text-error hover:border-error/55 hover:bg-error/10 hover:text-error hover:shadow-md',
      linkClass: 'link-slide-out-anim-error',
    },
    {
      username: 'wrench1815',
      href: 'https://discordapp.com/users/457360898122711041',
      label: 'Discord',
      icon: RiDiscordFill,
      iconKey: 'discord',
      toneClass:
        'text-nord-frost hover:border-nord-frost/55 hover:bg-nord-frost/10 hover:text-nord-frost hover:shadow-md',
      linkClass: 'link-slide-out-anim-nord-frost',
    },
    {
      username: 'wrench1815',
      href: 'https://twitter.com/wrench1815',
      label: 'Twitter / X',
      icon: RiTwitterXFill,
      iconKey: 'twitter',
      toneClass:
        'text-warning hover:border-warning/55 hover:bg-warning/10 hover:text-warning hover:shadow-md',
      linkClass: 'link-slide-out-anim-warning',
    },
  ]
}
