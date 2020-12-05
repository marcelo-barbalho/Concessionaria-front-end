import {http} from '../config/http'

// Cars verbs
const getCars = (data) => http.get('/cars')
const deleteCars = (id) => http.delete(`/cars/${id}`)
const postCars = (data, config = {}) => http.post('/cars', data, config)
const patchCars = (id, data, config = {}) => http.patch(`/cars/${id}`, data, config)

// User verbs
const getUserList = (data) => http.get('/user')
const deleteUser = (id) => http.delete(`/user/${id}`)
const postUser = (data) => http.post('/user', data)
const patchUser = (id, data) => http.patch(`/user/${id}`, data)

export {
    getUserList,
    deleteUser,
    postUser,
    patchUser,
    getCars,
    deleteCars,
    postCars,
    patchCars
}