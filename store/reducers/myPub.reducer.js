
import { ADD_MY_PUB } from "../actions/myPub.action"
import MyPubModel from "../../Models/MyPubModel"
import MyPub from "../../screen/MyPub"

const initialState= {
    myPub: []
}

export default (state = initialState, action) => {
    switch(action.type){
        case ADD_MY_PUB:
            const myPubModel = new MyPubModel(
                Date.now(),
                action.payload.title,
                action.payload.image,
            )
            return {
                ...state,
                myPub: state.myPub.concat(myPubModel)
            }
            default:
                return state
    }
    
}