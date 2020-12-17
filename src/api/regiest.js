import axios from 'axios'
import qs from 'qs'

export default function regiest(phoneNumber, password, userName) {
    return axios.post('https://07cr7.live:8996/register', qs.stringify({ phoneNumber, password, userName }), {
        headers: {
            'Content-type': 'application/x-www-form-urlencoded'
        }
    }).then(res => {
        return Promise.resolve(res.data)
    })
}