import './assets/main.css'
import './assets/style.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// title meta
router.beforeEach((to, from, next) => {
    document.title = to.meta.title || '404';
    next();
});

const app = createApp(App)

app.use(router)
app.mount('#app')
