import { OhVueIcon, addIcons } from 'oh-vue-icons'
import {
  RiGithubFill,
  RiTwitterFill,
  SiDevdotto,
  RiCloseFill,
  RiMenu2Fill,
  RiSunFill,
  RiMoonFill,
  MdWavinghand,
  SiDiscord,
  MdLogodev,
  OiLinkExternal,
  RiStopFill,
  BiBriefcase,
} from 'oh-vue-icons/icons'

export default defineNuxtPlugin((nuxtApp) => {
  // register icons
  addIcons(
    RiGithubFill,
    RiTwitterFill,
    SiDevdotto,
    RiCloseFill,
    RiMenu2Fill,
    RiSunFill,
    RiMoonFill,
    MdWavinghand,
    SiDiscord,
    MdLogodev,
    OiLinkExternal,
    RiStopFill,
    BiBriefcase
  )

  // register Component
  nuxtApp.vueApp.component('v-icon', OhVueIcon)
})
