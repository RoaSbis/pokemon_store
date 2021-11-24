import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { GET_ORDERS_REQUEST } from '../actions'

import PersonalPageLayout from "../components/PersonalPageLayout";

const PersonalPageContainer = () => {
    const dispatch = useDispatch();

    const orders = useSelector((state) => state.PersonalPage.orders)

    useEffect(() => {
        dispatch(GET_ORDERS_REQUEST())
    }, [dispatch])

    return <PersonalPageLayout orders={orders}/>
};

export default PersonalPageContainer;