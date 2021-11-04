import React from 'react';
import Header from 'components/header';
import Portfolio from 'routes/portfolio';

export const Index = () => {

    return (
        <>
            <Header title="Dashboard" description="Portfolio - crypto currencies tracker and estimation" />
            <Portfolio/>
        </>
    )
}

export default Index
