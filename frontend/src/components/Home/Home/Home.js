import React from 'react'
import Banner from '../../screens/Banner/Banner'
import Layout from '../../screens/Layout/Layout'
import Product from '../Products/Products'

const Home = () => {
    return (
        <Layout>
            <Banner />
            <Product />
        </Layout>
    )
}

export default Home