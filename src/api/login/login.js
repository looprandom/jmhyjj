import axios from 'axios'
import qs from 'qs'
import { baseURL } from '../config'

//@arguments: 用户名，密码，验证码id,验证码
export default function login(username, password, captchaId, captcha) {
    return axios.post(baseURL + 'user/login', qs.stringify({ username, password, captchaId, captcha }), {
        headers: {
            'Content-type': 'application/x-www-form-urlencoded'
        }
    }).then(res => {
        return Promise.resolve(res.data)
    })
}