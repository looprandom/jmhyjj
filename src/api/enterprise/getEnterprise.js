import axios from '../api'
import { baseURL } from '../config'

export default function getEnterprise(ob) {
    // {comTypes,county,industrys,name,page,size}
    return axios.get(baseURL + 'company', { params: ob }).then(res => {
        return Promise.resolve(res.data)
    })

}