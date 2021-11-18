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
    [actions.LOGIN_REQUESTS]: (state) => ({
        ...state,
        isLoading: true,
    }),
    [actions.LOGIN_SUCCESS]: (state, { payload }) => {
        const { accessToken, ...otherInfo } = payload.response

        localStorage.setItem(LOCAL_STORAGE_KEYS.TOKEN, accessToken)

        return { 
            ...state,
            isLoading: false,
            info: otherInfo,
            isAuth: true,
        }
    },
    [actions.LOGIN_FAIL]: (state, { payload }) => ({
        ...state,
        isLoading: false,
        error: payload.response
    })
}, defaultState)

export default logInPageReducer;