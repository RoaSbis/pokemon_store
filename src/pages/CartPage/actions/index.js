import { createAction } from 'redux-actions';

export const GET_CART_CONTENT_REQUEST = createAction('GET_CART_CONTENT_REQUEST');
export const GET_CART_CONTENT_SUCCESS = createAction('GET_CART_CONTENT_SUCCESS');
export const GET_CART_CONTENT_FAIL = createAction('GET_CART_CONTENT_FAIL');

export const ADD_TO_CART_REQUEST = createAction('ADD_TO_CART_REQUEST');
export const ADD_TO_CART_SUCCESS = createAction('ADD_TO_CART_SUCCESS');
export const ADD_TO_CART_FAIL = createAction('ADD_TO_CART_FAIL');

export const PATCH_CART_CONTENT_REQUEST = createAction('PATCH_CART_CONTENT_REQUEST');
export const PATCH_CART_CONTENT_SUCCESS = createAction('PATCH_CART_CONTENT_SUCCESS');
export const PATCH_CART_CONTENT_FAIL = createAction('PATCH_CART_CONTENT_FAIL');

export const DELETE_FROM_CART_REQUEST = createAction('DELETE_FROM_CART_REQUEST');
export const DELETE_FROM_CART_SUCCESS = createAction('DELETE_FROM_CART_SUCCESS');
export const DELETE_FROM_CART_FAIL = createAction('DELETE_FROM_CART_FAIL');