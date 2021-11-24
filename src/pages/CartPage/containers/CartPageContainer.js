import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useCallback } from 'react';

import { GET_CART_CONTENT_REQUEST, PATCH_CART_CONTENT_REQUEST, DELETE_FROM_CART_REQUEST } from '../actions';
import { SEND_ORDER_REQUEST } from '../../PersonalPage/actions';

import CartPageLayout from '../components/CartPageLayout'

const CartPageContainer = () => {
    const dispatch = useDispatch();

    const { info, isLoading } = useSelector((state) => state.CartPage)

    useEffect(() => {
        dispatch(GET_CART_CONTENT_REQUEST())
    }, [dispatch])

    const handleAddValue = useCallback((id, quantity) => {
        dispatch(PATCH_CART_CONTENT_REQUEST({id, quantity}))
    }, [dispatch])

    const handleReduceValue = useCallback((id, quantity) => {
        dispatch(PATCH_CART_CONTENT_REQUEST({id, quantity}))
    }, [dispatch])

    const handleRemove = useCallback((id) => {
        dispatch(DELETE_FROM_CART_REQUEST(id))
    }, [dispatch])

    const handleSendOrder = useCallback((totalPrice, customerId, itemsList) => {
        dispatch(SEND_ORDER_REQUEST(totalPrice, customerId, itemsList))
    }, [dispatch])

    return <CartPageLayout info={info} 
            isLoading={isLoading}
            handleAddValue={handleAddValue}
            handleReduceValue={handleReduceValue}
            handleRemove={handleRemove}
            handleSendOrder={handleSendOrder}/>
};

export default CartPageContainer;