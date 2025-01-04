import './assets/main.css'
import './assets/style.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// title meta
router.beforeEach((to, from, next) => {
    document.title = (to.meta.title as string) || '404';
    next();
});

import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const app = createApp(App)

app.use(router)
app.mount('#app')
