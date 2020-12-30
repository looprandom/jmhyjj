import axios from 'axios'
//import store from '../store/index'
import router from '../router/index'

const service = axios.create({
    // baseURL: process.env.BASE_URL,  // api的base_url
    // timeout: 5000  // 请求超时时间
})

/****** request拦截器==>对请求参数做处理 ******/
service.interceptors.request.use(config => {

    // const token = store.state.user.token
    const longToken = localStorage.getItem('token')
        // if (token) {
        //     config.headers['adminToken'] = token
        // }
    if (longToken) {
        config.headers['token'] = longToken
    }

    return config
}, err => {
    return Promise.reject(err)
})

/****** respone拦截器==>对响应做处理 ******/
service.interceptors.response.use(
    response => { //成功请求到数据
        if (response.data.code !== 20000) {
            localStorage.setItem('token', '')
            router.push({
                path: '/login'
            })
        }
        return response
    }
)
export default service