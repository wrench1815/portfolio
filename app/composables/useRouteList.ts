export interface RouteListItem {
  to?: string
  /** Human label (a11y, title) */
  name: string
  /** Shell-style path shown in the nav */
  pathLabel: string
  type: 'link' | 'collection'
  items?: RouteListItem[]
}

export const useRouteList = () => {
  return ref<RouteListItem[]>([
    { to: '/', name: 'Home', pathLabel: '~', type: 'link' },
    { to: '/themes', name: 'Themes', pathLabel: '~/themes', type: 'link' },
    {
      type: 'collection',
      name: 'Pages',
      pathLabel: '~/pages',
      items: [
        { to: '/about', name: 'About', pathLabel: '~/about', type: 'link' },
      ],
    },
  ])
}
