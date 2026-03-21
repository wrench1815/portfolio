export interface RouteListItem {
  to: string
  /** Human label (a11y, title) */
  name: string
  /** Shell-style path shown in the nav */
  pathLabel: string
}

export const useRouteList = () => {
  return ref<RouteListItem[]>([
    { to: '/', name: 'Home', pathLabel: '~' },
    { to: '/themes', name: 'Themes', pathLabel: '~/themes' },
  ])
}
