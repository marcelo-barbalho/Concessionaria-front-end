
import {getCars} from '../../services/admin'

export const getCarList = () => {
    return async (dispatch) => {
        
        const response = await getCars()

        dispatch({
            type:"GET_CAR_LIST",
            data:response.data,
        })
    }
}
