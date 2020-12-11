import {getUserList} from '../../services/admin'
import { EDIT_USER } from "./user.action"



const INITIAL_STATE = {
    users: getUserList() || []
}


const reducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case EDIT_USER :
            // console.log('chegou no reducer')
            // console.log(action)
            // const {users}  = action.data
            // state.token = token
            // state.profile = user
            return state
        
        default:
            return state
    }
    // return state
}

export default reducer