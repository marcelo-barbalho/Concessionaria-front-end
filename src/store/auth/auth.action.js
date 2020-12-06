import { saveToken } from "../../config/auth";
import {http} from "../../config/http";
import { auth as serviceAuth } from "../../services/auth";
import history from '../../config/history'



export const LOGIN = "LOGIN"


export const login = (props) => {
    return async (dispatch) => { // react thunk
        try {
            const { data } = await serviceAuth(props);
            console.log(data)
            saveToken(data)
            http.defaults.headers["x-auth-token"] = data.token;
            dispatch({ type: LOGIN, data })
            history.push('/admin')
        } catch (error) {
            console.log(error)
        }

    };
}

