import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useLayoutEffect } from 'react';
import { useHistory } from 'react-router-dom'

import { LOG_IN_REQUEST } from "../actions";
import { useForm } from '../../../hooks';
import { ROUTES } from '../../../routes/RouteNames'

import LogInPageLayout from '../components/LogInPageLayout';

const LogInPageContainer = () => {
    const dispatch = useDispatch();

    const {isAuth} = useSelector((state) => state.LogInPage)

    const history = useHistory();

    const [formData, handleChange] = useForm({
        email: '',
        password: '',
    })

    useLayoutEffect(() => {
        if (isAuth) {
            history.push(ROUTES.PRODUCTS_PAGE)
        }
    }, [isAuth, history])

    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        dispatch(LOG_IN_REQUEST(formData))
    }, [formData, dispatch]);

    return <LogInPageLayout formValue={formData} onChange={handleChange} onSubmit={handleSubmit}/>;
};

export default LogInPageContainer;