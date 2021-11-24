import React from 'react';

const StatCard = ({ title, value }) => {
    return (
        <div>
            <p>{title} : {value}</p>
        </div>
    );
};

export default StatCard;