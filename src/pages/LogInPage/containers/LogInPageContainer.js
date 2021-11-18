import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { LOGIN_REQUESTS } from "../actions";

import LogInPageLayout from '../components/LogInPageLayout'

const LogInPageContainer = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(LOGIN_REQUESTS())
    }, [dispatch])
    return <LogInPageLayout/>;
};

export default LogInPageContainer;