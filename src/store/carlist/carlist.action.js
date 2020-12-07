
import {getCars, patchCars, postCars, deleteCars } from '../../services/admin'



export const getCarList = () => {
    return async (dispatch) => {
        
        const response = await getCars()

        dispatch({
            type:"GET_CAR_LIST",
            data:response.data,
        })
    }
}
export const saveCar = (props, config) => {
    return async (dispatch) => {
        if (props._id) {
            await patchCars(props._id, props, config)
            dispatch({ type: "EDIT_CAR" })
        } 
        else {
            
            await postCars(props, config)
            
        }
    }
}
export const removeCar = async (props) => {
    await deleteCars(props._id)
}
