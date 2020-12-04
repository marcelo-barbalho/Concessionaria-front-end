const INITIAL_STATE = {
    carlist:[]
}

const reducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case "GET_CAR_LIST":
            console.log('chegou no reducer')
            console.log(action)
            return state
    
        default:
            return state
    }
    // return state
}

export default reducer