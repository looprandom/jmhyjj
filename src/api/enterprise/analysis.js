import axios from '../api'
import { baseURL } from '../config'

//所属行业 ，地区，单位类型 分别对应(0,1,2)
export default function getEnterpriseAnalysis(type) {

    return axios.get(baseURL + 'company/analyse', { params: { type } }).then(res => {
        return Promise.resolve(res.data)
    })

}