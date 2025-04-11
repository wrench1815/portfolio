export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (html, { event }) => {
    // add data-theme attribute to html tag to force theme on load
    html.htmlAttrs.push('data-theme="nordLight"')
  })
})
