import axios from 'axios'
const baseUrl = 'https://api.lyrics.ovh/v1'

const getLyric = (artist, title) => {
    const request = axios.get(`${baseUrl}/${artist}/${title}`)
    return request.then(response => response.data)
}

export default { getLyric }