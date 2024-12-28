import './assets/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './router'
import { setupPinia } from './stores'

/**
 * 应用入口
 */
async function setupApp() {
  const app = createApp(App)
  setupPinia(app)
  setupRouter(app)
  app.mount('#app')
}

setupApp()
