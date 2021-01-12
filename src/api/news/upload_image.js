import axios from '../api'
import { baseURL } from '../config'

//@params : file类型
export default function upload_image(image) {
    let data = new FormData()
    data.append('image', image)
    return axios.post('publish/image', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
        baseURL
    }).then(res => {
        return Promise.resolve(res.data)
    }, error => {
        return Promise.reject(error)
    })
}