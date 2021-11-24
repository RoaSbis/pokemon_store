import { handleActions } from 'redux-actions';

import * as actions from '../actions';

const defaultState = {
    isLoading: false,
    error: null,
}

const registrationPageReducer = handleActions({
    [actions.REGISTRATION_REQUEST]: (state) => ({
        ...state,
        isLoading: true,
    }),
    [actions.REGISTRATION_SUCCESS]: (state) => ({
        ...state,
        isLoading: false,
    }),
    [actions.REGISTRATION_FAIL]: (state, {payload}) => ({
        ...state,
        isLoading: false,
        error: payload.response
    })
}, defaultState)

export default registrationPageReducer;