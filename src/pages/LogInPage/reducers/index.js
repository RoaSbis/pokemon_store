import { handleActions } from 'redux-actions';

import * as actions from '../actions';

import { LOCAL_STORAGE_KEYS } from '../../../constants/localStorageKeys'

const defaultState = {
    info: {},
    isAuth: false,
    isLoading: false,
    error: null,
}

const logInPageReducer = handleActions({
    [actions.LOG_IN_REQUEST]: (state) => ({
        ...state,
        isLoading: true,
    }),
    [actions.LOG_IN_SUCCESS]: (state, { payload }) => {
        const { accessToken, ...otherInfo } = payload.response

        localStorage.setItem(LOCAL_STORAGE_KEYS.TOKEN, accessToken)

        return { 
            ...state,
            info: otherInfo,
            isAuth: true,
            isLoading: false,
        }
    },
    [actions.LOG_IN_FAIL]: (state, { payload }) => ({
        ...state,
        error: payload.response,
        isLoading: false,
    })
}, defaultState)

export default logInPageReducer;