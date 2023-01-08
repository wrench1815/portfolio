import { OhVueIcon, addIcons } from 'oh-vue-icons';
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
  RiExternalLinkLine,
} from 'oh-vue-icons/icons';

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
    RiExternalLinkLine
  );

  // register Component
  nuxtApp.vueApp.component('v-icon', OhVueIcon);
});
