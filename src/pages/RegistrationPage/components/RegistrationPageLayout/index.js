import React from 'react';

const RegistrationPageLayout = ({ formValue, onChange, onSubmit }) => {
    return (
        <form onSubmit={onSubmit}>
            <input
                type='email'
                value={formValue.email}
                name='email'
                onChange={onChange}
            />
            <input
                type='text'
                value={formValue.firstName}
                name='firstName'
                onChange={onChange}
            />
            <input
                type='text'
                value={formValue.lastName}
                name='lastName'
                onChange={onChange}
            />
            <input
                type='text'
                value={formValue.address.country}
                name='address.country'
                onChange={onChange}
            />
            <input
                type='text'
                value={formValue.address.city}
                name='address.city'
                onChange={onChange}
            />
            <input
                type='text'
                value={formValue.address.adressLine1}
                name='[address][addressLine1]'
                onChange={onChange}
            />
            <input
                type='text'
                value={formValue.addressLine2}
                name='address.addressLine2'
                onChange={onChange}
            />
            <input
                type='text'
                value={formValue.gender}
                name='gender'
                onChange={onChange}
            />
            <input
                type='password'
                value={formValue.password}
                name='password'
                onChange={onChange}
            />
            <input
                type='text'
                value={formValue.phone}
                name='phone'
                onChange={onChange}
            />
            <button>Registration</button>
        </form>
    );
};

export default RegistrationPageLayout;