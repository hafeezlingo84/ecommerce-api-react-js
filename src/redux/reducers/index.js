import { combineReducers } from "redux";
import { productReducer, seletedProductReducer } from "./productReducer";

const reducers = combineReducers({
    allProducts : productReducer,
    product : seletedProductReducer,
});

export default reducers;