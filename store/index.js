import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import StockReducer from "./reducers/stock.reducer";
import CategoryReducer from "./reducers/category.reducers";

const RootReducer = combineReducers({
    categories: CategoryReducer,
    stock: StockReducer,
})

export default createStore(RootReducer , applyMiddleware(thunk))