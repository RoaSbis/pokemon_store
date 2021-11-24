import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { createBlacklistFilter } from 'redux-persist-transform-filter';
import storage from 'redux-persist/lib/storage';

import logInPageReducer from '../pages/LogInPage/reducers';
import registrationPageReducer from '../pages/RegistrationPage/reducers';
import productsPageReducer from '../pages/ProductsPage/reducers';
import productPageReducer from '../pages/ProductPage/reducers';
import cartPageReducer from '../pages/CartPage/reducers';
import personalPageReducer from '../pages/PersonalPage/reducers';

const authBlackListedFields = createBlacklistFilter('LogInPage', ['isLoading', 'error']);
const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['auth'],
    transforms: [authBlackListedFields],
}

const rootReducer = combineReducers({
    LogInPage: logInPageReducer,
    RegistrationPage: registrationPageReducer,
    ProductsPage: productsPageReducer,
    ProductPage: productPageReducer,
    CartPage: cartPageReducer,
    PersonalPage: personalPageReducer,
});

export default persistReducer(persistConfig, rootReducer);