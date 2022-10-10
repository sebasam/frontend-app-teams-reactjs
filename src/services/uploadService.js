import axios from 'axios'
import { url } from '../components/Const'


class UploadService {
    sendImages(name, image, category) {
        const form = new FormData()
        form.append('name', name)
        form.append('image', image)
        form.append('category', category)

        return axios.post(`${ url }/api/teams`, form)
    }
    
    getTeamImage(name) {
        return axios.get(`${ url }/api/teams/${ name }`)
    }
}

export default new UploadService