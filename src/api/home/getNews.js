import axios from '../api'
import { baseURL } from '../config'

export default function getNews() {

    return axios.get(baseURL + 'publish').then(res => {
        return Promise.resolve(res.data)
    })
}