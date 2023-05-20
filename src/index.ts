import { initRoutes, render, setBodyStyles } from './utils/helpers'

import { preloader } from './components/preloader/content'

render('#app', preloader)

window.addEventListener('load', setBodyStyles)
window.addEventListener('pathnamechanged', setBodyStyles)
window.addEventListener('load', () =>
  setTimeout(async () => {
    preloader.hide()
    initRoutes()
  }, 2000)
)
