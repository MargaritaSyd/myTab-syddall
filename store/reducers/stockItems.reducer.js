import { GET_STOCK } from "../actions/stock.action";

const INITIAL_STATE = {
    list: []
}

const stockItemsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case GET_STOCK:
            return {
                ...state,
                list: action.payload
            }
        default: 
            return state;
    }
    
}

export default stockItemsReducer