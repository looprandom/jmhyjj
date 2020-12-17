import axios from './api'

export default function getLoop() {

    return axios.get('https://07cr7.live/me/GoodsBy').then(res => {
        return Promise.resolve(res.data)
    })

}