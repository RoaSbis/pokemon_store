import { createAction } from 'redux-actions';

export const GET_ORDERS_REQUEST = createAction('GET_ORDERS_REQUEST');
export const GET_ORDERS_SUCCESS = createAction('GET_ORDERS_SUCCESS');
export const GET_ORDERS_FAIL = createAction('GET_ORDERS_FAIL');

export const SEND_ORDER_REQUEST = createAction('SEND_ORDER_REQUEST');
export const SEND_ORDER_SUCCESS = createAction('SEND_ORDER_SUCCESS');
export const SEND_ORDER_FAIL = createAction('SEND_ORDER_FAIL');