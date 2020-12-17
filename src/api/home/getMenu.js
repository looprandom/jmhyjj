import axios from '../api'
import { baseURL } from '../config'

export default function getMenu() {

    return axios.get(baseURL + 'menu').then(res => {
        return Promise.resolve(res.data)
    })

}