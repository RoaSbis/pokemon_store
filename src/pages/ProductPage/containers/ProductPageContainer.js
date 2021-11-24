import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { GET_DETAILED_PRODUCT_REQUEST } from '../actions'

import ProductPageLayout from '../components/ProductPageLayout';

const ProductPageContainer = () => {
    const dispatch = useDispatch();

    const {id} = useParams();

    useEffect(() => {
        dispatch(GET_DETAILED_PRODUCT_REQUEST(id))
    }, [dispatch, id])

    const { abilities, id: pokemonID, image, name, price, stats } = useSelector((state) => state.ProductPage.info)
    const { isLoading } = useSelector((state) => state.ProductPage)

    return <ProductPageLayout
                abilities={abilities}
                pokemonID={pokemonID}
                image={image}
                name={name}
                price={price}
                stats={stats}
                isLoading={isLoading}
            />
};

export default ProductPageContainer;