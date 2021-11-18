import { combineReducers } from "redux";
import productsPageReducer from "../pages/ProductsPage/reducers";
import logInPageReducer from "../pages/LogInPage/reducers";

const rootReducer = combineReducers({
    ProductsPage: productsPageReducer,
    LogInPage: logInPageReducer
});

export default rootReducer;