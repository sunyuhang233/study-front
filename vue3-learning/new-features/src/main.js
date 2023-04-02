import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(router)

// 自定义指令
app.directive('focus', {
  mounted(el) {
    el.focus()
  }
})

app.mount('#app')
