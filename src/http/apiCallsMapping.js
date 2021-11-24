import * as registrationActions from '../pages/RegistrationPage/actions';
import * as registrationAPI from '../pages/RegistrationPage/api';

import * as logInPageActions from '../pages/LogInPage/actions';
import * as logInPageAPI from '../pages/LogInPage/api';

import * as productsPageActions from '../pages/ProductsPage/actions';
import * as productsPageAPI from '../pages/ProductsPage/api';

import * as productPageActions from '../pages/ProductPage/actions';
import * as productPageAPI from '../pages/ProductPage/api';

import * as cartPageActions from '../pages/CartPage/actions';
import * as cartPageAPI from '../pages/CartPage/api';

import * as personalPageActions from '../pages/PersonalPage/actions';
import * as personalPageAPI from '../pages/PersonalPage/api';

const apiCallsMapping = (action) => {
    const mapping = {
        [logInPageActions.LOG_IN_REQUEST]: logInPageAPI.LogIn,
        [registrationActions.REGISTRATION_REQUEST]: registrationAPI.signUp,
        [productsPageActions.GET_PRODUCTS_REQUEST]: productsPageAPI.getProducts,
        [productPageActions.GET_DETAILED_PRODUCT_REQUEST]: productPageAPI.getDetailedProduct,
        [cartPageActions.GET_CART_CONTENT_REQUEST]: cartPageAPI.getCartState,
        [cartPageActions.ADD_TO_CART_REQUEST]: cartPageAPI.addProductToCart,
        [cartPageActions.PATCH_CART_CONTENT_REQUEST]: cartPageAPI.changeCartState,
        [cartPageActions.DELETE_FROM_CART_REQUEST]: cartPageAPI.deleteProductFromCart,
        [personalPageActions.GET_ORDERS_REQUEST]: personalPageAPI.getOrders,
        [personalPageActions.SEND_ORDER_REQUEST]: personalPageAPI.sendOrder,
    }
    return mapping[action.type]
}

export default apiCallsMapping;