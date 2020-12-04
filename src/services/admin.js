import {http} from '../config/http'

const getCars = (data) => http.get('/cars')
const deleteCars = (id) => http.delete(`/cars/${id}`)
const postCars = (data, config = {}) => http.post('/cars', data, config)
const patchCars = (id, data, config = {}) => http.patch(`/cars/${id}`, data, config)

// // Category verbs
// const getCategory = (data) => http.get('/category')
// const deleteCategory = (id) => http.delete(`/category/${id}`)
// const postCategory = (data) => http.post('/category', data)
// const patchCategory = (id, data) => http.patch(`/category/${id}`, data)

export {
    // getCategory,
    // deleteCategory,
    // postCategory,
    // patchCategory,
    getCars,
    deleteCars,
    postCars,
    patchCars
}