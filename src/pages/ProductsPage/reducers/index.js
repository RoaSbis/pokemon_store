import { handleActions } from 'redux-actions';

import * as actions from '../actions';

const defaultState = {
    list: [],
    isLoading: false,
    error: null,
}

const productsPageReducer = handleActions({
    [actions.GET_PRODUCTS_REQUEST]: (state) => {
        return {
            ...state,
            isLoading: true,
        }
    },
    [actions.GET_PRODUCTS_SUCCESS]: (state, { payload } ) => {
        return {
            ...state,
            list: payload.response,
            isLoading: false,
        }
    }, 
    [actions.GET_PRODUCTS_FAIL]: (state, { payload } ) => {
        return {
            ...state,
            isLoading: false,
            error: payload,
        }
    }
}, defaultState)

export default productsPageReducer;