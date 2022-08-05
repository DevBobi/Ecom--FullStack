import React from 'react'
import Layout from '../../components/Layout/Layout'
import Product from '../../components/Products/Products'
import Banner from '../Banner/Banner'



const Home = () => {
    return (
        <Layout>
            <Banner />
            <Product />
        </Layout>
    )
}

export default Home