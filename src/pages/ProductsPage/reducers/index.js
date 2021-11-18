import { handleActions } from 'redux-actions';

import * as actions from '../actions';

const defaultState = {
    list: [],
    isLoading: false,
    error: null,
}

const productsPageReducer = handleActions({
    [actions.GET_PRODUCTS_REQUESTS]: (state) => ({
        ...state,
        isLoading: true,
    }),
    [actions.GET_PRODUCTS_SUCCESS]: (state, { payload }) => ({
        ...state,
        isLoading: false,
        list: payload
    }),
    [actions.GET_PRODUCTS_FAIL]: (state, { payload }) => ({
        ...state,
        isLoading: false,
        error: payload
    })
}, defaultState);

export default productsPageReducer;