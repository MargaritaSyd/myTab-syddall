import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import StockReducer from "./reducers/stock.reducer";
import CategoryReducer from "./reducers/category.reducers";
import stockItemsReducer from "./reducers/stockItems.reducer";

const RootReducer = combineReducers({
    categories: CategoryReducer,
    stock: StockReducer,
    stockItems: stockItemsReducer,
})

export default createStore(RootReducer , applyMiddleware(thunk))