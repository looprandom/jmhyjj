import axios from 'axios'
import { baseURL } from '../config'

export default function getCap() {

    return axios.get(baseURL + 'captcha/get').then(res => {
        return Promise.resolve(res.data)
    })

}