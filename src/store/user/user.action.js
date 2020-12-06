import { patchUser, postUser } from "../../services/admin";

export const SAVE_USER = "SAVE_USER"
export const DELETE_USER = "DELETE_USER"
export const EDIT_USER = "EDIT_USER"


export const userSave = (props, id = null) => {

    return async (dispatch) => {
        if (id !== null) {
            console.log('xxx')
            const { data } = await patchUser(id, props)
            dispatch({ type: EDIT_USER, id, data })
        } 
        else {
            const { data } = await postUser(props)
            dispatch({ type: SAVE_USER, data })
        }
    }
}