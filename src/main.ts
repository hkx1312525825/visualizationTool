import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(antd)
app.use(createPinia())
app.use(router)

app.mount('#app')
