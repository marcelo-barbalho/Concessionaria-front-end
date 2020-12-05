import {LOGIN}  from "./auth.action"
import {getToken, getUser} from '../../config/auth'



const INITIAL_STATE = {
    token: getToken() || "",
    profile: getUser() || {}
}


const reducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN :
            console.log('chegou no reducer')
            console.log(action)
            const { token, user } = action.data
            state.token = token
            state.profile = user
            return state
        
        default:
            return state
    }
    // return state
}

export default reducer