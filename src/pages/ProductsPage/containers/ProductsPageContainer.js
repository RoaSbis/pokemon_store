import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { GET_PRODUCTS_REQUEST } from '../actions'
import { ADD_TO_CART_REQUEST } from '../../CartPage/actions';

import ProductsPageLayout from "../components/ProductsPageLayout";

const ProductPageContainer = () => {
    const dispatch = useDispatch();

    const history = useHistory();

    const { list } = useSelector((state) => state.ProductsPage)

    const handleDetails = useCallback((pokemonId) => {
        history.push(`/productsPage/${pokemonId}`)
    }, [history])

    const handleAddToCart = useCallback((id, name, image, price, quantity = 1) => {
        dispatch(ADD_TO_CART_REQUEST({id, name, image, price, quantity}))
    }, [dispatch])

    useEffect(()=> {
        dispatch(GET_PRODUCTS_REQUEST())
    }, [dispatch])

    return <ProductsPageLayout list={list} handleDetails={handleDetails} handleAddToCart={handleAddToCart}/>
};

export default ProductPageContainer;