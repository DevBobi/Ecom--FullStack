import React from 'react'
import Product from '../../components/Product/ProductCard';
import Banner from '../Banner/Banner';
import MetaData from '../Metadata/MetaData';


const Home = () => {
    return (
        <>
            <MetaData title="Ecom" />
            <Banner />
            <Product />
        </>
    )
}

export default Home