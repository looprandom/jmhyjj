import axios from '../api'
import { baseURL } from '../config'

export default function saveEnterprise(paramsOb) {
    let data = new FormData()
    for (let key in paramsOb) {
        data.append(key, paramsOb[key])
    }

    return axios.post('company', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
        baseURL
    }).then(res => {
        return Promise.resolve(res.data)
    }, error => {
        return Promise.reject(error)
    })
}