
import {getUserList} from '../../services/admin'

export const getUsers = () => {
    return async (dispatch) => {
        
        const response = await getUserList()

        dispatch({
            type:"GET_USER_LIST",
            data:response.data,
        })
    }
}
