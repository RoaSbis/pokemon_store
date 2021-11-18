import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { GET_PRODUCTS_REQUESTS } from "../actions";

import ProductsPageLayout from "../components/ProductsPageLayout";

const ProductPageContainer = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GET_PRODUCTS_REQUESTS())
    }, [dispatch]);
    return <ProductsPageLayout/>
};

export default ProductPageContainer;