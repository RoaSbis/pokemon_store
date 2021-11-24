import React from 'react';
import Routes from '../../routes/Routes';
import Navigation from '../Navigation';

const MainLayout = () => {
    return (
        <div>
            <Navigation/>
            <Routes/>
        </div>
    );
};

export default MainLayout;