import { createApp, } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from 'moment'
import 'reset-css'
import './assets/index.css'

moment.locale('zh-cn')
    // import 'ant-design-vue/dist/antd.css'

//按需引入antd组件
// import { Button } from 'ant-design-vue'

createApp(App).use(store).use(router).mount('#app')
    // app.use(Button)