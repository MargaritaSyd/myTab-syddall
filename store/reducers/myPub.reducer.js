
import { ADD_MY_PUB } from "../actions/myPub.action"

const initialState= {
    myPub: []
}

export default (state = initialState, action) => {
    switch(action.type){
        case ADD_MY_PUB:
            return {
                ...state,
                myPub: state.myPub.concat(action.payload)
            }
            default:
                return state
    }
    
}