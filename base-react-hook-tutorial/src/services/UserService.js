import axios from '../services/customize-axios'

const fectchAllUser = (page) => {
    return axios.get(`/api/users?page=${page}`)
}

const createUser = (name, job) => {
    return axios.post(`/api/users`, { name, job })
}

export { fectchAllUser, createUser };