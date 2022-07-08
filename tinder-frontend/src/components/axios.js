import axios from 'axios'

const instance = axios.create({
    baseURL: "https://tinder-mern-backend-dada.herokuapp.com"
})

export default instance