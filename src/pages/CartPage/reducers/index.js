import { handleActions } from 'redux-actions';

import * as actions from '../actions';

const defaultState = {
    info: {},
    isLoading: false,
    error: null,
}

const cartPageReducer = handleActions({
    [actions.GET_CART_CONTENT_REQUEST]: (state) => {
        return {
            ...state,
            isLoading: true,
        }
    },
    [actions.GET_CART_CONTENT_SUCCESS]: (state, { payload }) => {
        return {
            ...state,
            isLoading: false,
            info: payload.response,
        }
    },
    [actions.GET_CART_CONTENT_FAIL]: (state, { payload }) => {
        return {
            ...state,
            isLoading: false,
            error: payload.response,
        }
    },
    [actions.ADD_TO_CART_REQUEST]: (state) => {
        return {
            ...state,
            isLoading: true,
        }
    },
    [actions.ADD_TO_CART_SUCCESS]: (state, { payload }) => {
        return {
            ...state,
            info: payload.response,
            isLoading: false,
            error: null,
        }
    },
    [actions.ADD_TO_CART_FAIL]: (state, { payload }) => {
        return {
            ...state,
            isLoading: false,
            error: payload.response,
        }
    },
    [actions.PATCH_CART_CONTENT_REQUEST]: (state) => {
        return {
            ...state,
            isLoading: true,
        }
    },
    [actions.PATCH_CART_CONTENT_SUCCESS]: (state, {payload}) => {
        const {response, actionPayload} = payload;
        const {cartState, updatedItem} = response;
        const {quantity, totalPrice} = cartState;
        const {id: productID} = actionPayload;

        return {...state,
            isLoading: false,
            info: {
                ...state.info,
                quantity,
                totalPrice,
                itemsList: [
                    ...state.info.itemsList.map((item) => {
                        const {id} = item
                        return id === productID? updatedItem : item
                    })
                
                ]
            }
        }
    },
    [actions.PATCH_CART_CONTENT_FAIL]: (state, {payload}) => {
        return {
            ...state,
            isLoading: false,
            error: payload.response,
        }
    },
    [actions.DELETE_FROM_CART_REQUEST]: (state) => {
        return {
            ...state,
            isLoading: true,
        }
    },
    [actions.DELETE_FROM_CART_SUCCESS]: (state, {payload}) => {
        const {response} = payload;
        const {cartState, removedItemId} = response;
        const {quantity, totalPrice} = cartState;
        return {
            ...state,
            isLoading: false,
            info: {
                ...state.info,
                quantity,
                totalPrice,
                itemsList: [
                    ...state.info.itemsList.filter((item) => {
                        const {id} = item
                        return id !==removedItemId
                    })
                ]
            }
        }
    },
    [actions.DELETE_FROM_CART_FAIL]: (state, {payload}) => {
        return {
            ...state,
            isLoading: false,
            error: payload.response
        }
    },
}, defaultState)

export default cartPageReducer;