import React from 'react';

import Header from '../components/Header';
import SectionFor from '../components/SectionFor';
import ProductBox from '../components/ProductBox';
import Catalog from '../components/Catalog';

const Home = () => {
    return (
        <>
            <Header />
            <SectionFor />
            <ProductBox />
            <Catalog />
        </>
    );
};

export default Home;
