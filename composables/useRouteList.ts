export const useRouteList = () => {
  return ref([
    {
      to: '/',
      name: 'Home',
    },
    {
      to: '/project',
      name: 'Projects',
    },
    {
      to: '/experience',
      name: 'Experience',
    },
    {
      to: '/about',
      name: 'About',
    },
  ])
}
