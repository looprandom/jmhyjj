import axios from '../api'
import qs from 'qs'
import { baseURL } from '../config'

//@arguments: 用户名，密码，验证码id,验证码
export default function logout(token) {
    return axios.post(baseURL + 'user/logout', qs.stringify({ token }), {
        headers: {
            'Content-type': 'application/x-www-form-urlencoded'
        }
    }).then(res => {
        return Promise.resolve(res.data)
    })
}