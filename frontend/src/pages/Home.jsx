import React from 'react';

import Header from '../components/Header';
import SectionFor from '../components/SectionFor';
import ProductBox from '../components/ProductBox';
import Catalog from '../components/Catalog';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Header />
            <SectionFor />
            <ProductBox />
            <Catalog />
            <Footer />
        </>
    );
};

export default Home;
