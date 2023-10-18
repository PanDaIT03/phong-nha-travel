import { combineReducers } from "redux"

import cartReducer from "./cart";
import searchReducer from "./search";

const rootReducer = combineReducers({
    cart: cartReducer,
    search: searchReducer
});

export default rootReducer;