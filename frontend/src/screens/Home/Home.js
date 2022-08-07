import React from 'react'
import Layout from '../../components/Layout/Layout';
import Product from '../../components/Products/Products';
import Banner from '../Banner/Banner';
import MetaData from '../Metadata/MetaData';


const Home = () => {
    return (
        <Layout>
            <MetaData title="Ecom" />
            <Banner />
            <Product />
        </Layout>
    )
}

export default Home