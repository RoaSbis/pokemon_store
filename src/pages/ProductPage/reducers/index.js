import { handleActions } from 'redux-actions';

import * as actions from '../actions';

const defaultState = {
    info: {},
    isLoading: false,
    error: null,
}

const productPageReducer = handleActions({
    [actions.GET_DETAILED_PRODUCT_REQUEST]: (state) => {
        return {
            ...state,
            isLoading: true,
        }
    },
    [actions.GET_DETAILED_PRODUCT_SUCCESS]: (state, { payload }) => {
        return {
            ...state,
            info: payload.response,
            isLoading: false,
        }
    },
    [actions.GET_DETAILED_PRODUCT_FAIL]: (state, { payload }) => {
        return {
            ...state,
            isLoading: false,
            error: payload,
        }
    }
}, defaultState)

export default productPageReducer