import { CATEGORIES } from "../../data/categories"
import { SELECT_CATEGORY } from "../actions/category.actions";

const INITIAL_STATE = {
    list: CATEGORIES,
    selected: null,
}

const CategoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case SELECT_CATEGORY:
            const iCategory = state.list.findIndex(cat => cat.id ===action.categoryID)
            if (iCategory === -1) return state;
            return {
                ...state, 
                selected: state.list[iCategory],
            }
        default:
            return state;
            

    }
}

export default CategoryReducer;