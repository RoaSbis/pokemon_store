import { useDispatch } from 'react-redux';
import { useCallback } from 'react';

import { REGISTRATION_REQUEST } from '../actions';
import { useForm } from '../../../hooks';

import RegistrationPageLayout from '../components/RegistrationPageLayout';

const RegistrationPageContainer = () => {
    const dispatch = useDispatch();

    const [formData, handleChange] = useForm({
        email: '',
        firstName: '',
        lastName: '',
        address: {
            country: '',
            city: '',
            addressLine1: '',
            addressLine2: '',
        },
        gender: '',
        password: '',
        phone: '',
    })

    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        dispatch(REGISTRATION_REQUEST(formData))
    }, [formData, dispatch]);
    return <RegistrationPageLayout formValue={formData} onChange={handleChange} onSubmit={handleSubmit}/>;
};

export default RegistrationPageContainer;