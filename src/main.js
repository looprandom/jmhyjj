import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from 'moment'
import './assets/reset.css'
import './assets/index.css'
import './assets/font.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.core.css'
import ImageResize from 'quill-image-resize-module'
import { ImageDrop } from 'quill-image-drop-module'
window.Quill.register('modules/imageResize', ImageResize)
window.Quill.register('modules/imageDrop', ImageDrop)

moment.locale('zh-cn')

createApp(App).use(store).use(router).mount('#app')
    // app.use(Button)