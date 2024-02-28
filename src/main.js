import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueKinesis from "vue-kinesis";

const app = createApp(App)

app.use(createPinia())
.use(VueKinesis)
app.use(router)

app.mount('#app')
