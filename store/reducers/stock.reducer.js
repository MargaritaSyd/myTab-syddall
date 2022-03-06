import { STOCK } from "../../data/stock";

const INITIAL_STATE = {
    list: STOCK,
    selected: null,
    filterList: [],
}

const StockReducer = (state = INITIAL_STATE, action) => {
    return state;
}

export default StockReducer