import axios from '../api'
import { baseURL } from '../config'

export default function getIndustry() {

    return axios.get(baseURL + 'company/industry').then(res => {
        return Promise.resolve(res.data)
    })

}