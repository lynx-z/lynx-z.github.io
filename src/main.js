import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import VueVideoPlayer from '@videojs-player/vue'
import 'video.js/dist/video-js.css'

const app = createApp(App)

app.use(router)
app.use(VueVideoPlayer)

app.mount('#app')
