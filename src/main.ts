import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')

// let example = 5

// function sum(a: number, b: number): number {
//     return a + b
// }

// console.log(sum(5,2))