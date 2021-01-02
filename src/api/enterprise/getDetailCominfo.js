import axios from '../api'
import { baseURL } from '../config'

export default function getDetailCominfo(id) {
    // {comTypes,county,industrys,name,page,size}
    return axios.get(baseURL + 'company/detailCominfo', { params: { id } }).then(res => {
        return Promise.resolve(res.data)
    })

}