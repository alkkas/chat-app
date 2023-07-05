import '@/assets/css/global.css'
import '@/assets/css/reset.css'
import vIntersectionObserver from '@/directives/vIntersectionObserver'
import { createApp } from 'vue'
import App from './App.vue'
import components from './components'
const app = createApp(App)

components.forEach((component) => {
  app.component(component.name, component.implementation)
})

app.directive('intersection', vIntersectionObserver)

app.mount('#app')
