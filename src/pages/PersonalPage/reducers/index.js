import { handleActions } from 'redux-actions';

import * as actions from '../actions';

const defaultState = {
    orders: [],
    isLoading: false,
    error: null,
}

const personalPageReducer = handleActions({
    [actions.GET_ORDERS_REQUEST]: (state) => {
        return {
            ...state,
            isLoading: true,
        }
    },
    [actions.GET_ORDERS_SUCCESS]: (state, {payload}) => {
        return {
            ...state,
            isLoading: false,
            orders: payload.response,
        }
    },
    [actions.GET_ORDERS_FAIL]: (state, {payload}) => {
        return {
            ...state,
            isLoading: false,
            error: payload.response
        }
    },
    [actions.SEND_ORDER_REQUEST]: (state) => {
        return {
            ...state,
            isLoading: true,
        }
    },
    [actions.SEND_ORDER_SUCCESS]: (state, {payload}) => {
        return {
            ...state,
            isLoading: false,
            orders: [
                ...state.orders,
                 payload.response
            ]
        }
    },
    [actions.SEND_ORDER_FAIL]: (state, {payload}) => {
        return {
            ...state,
            isLoading: false,
            error: payload.response
        }
    }
}, defaultState)

export default personalPageReducer;