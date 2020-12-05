const INITIAL_STATE = {
    userlist:[]
}

const reducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case "GET_USER_LIST":
            console.log('chegou no reducer user')
            console.log(action)
            return state
    
        default:
            return state
    }
}

export default reducer