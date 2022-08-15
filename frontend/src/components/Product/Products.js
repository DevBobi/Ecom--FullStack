import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../actions/productAction';
import Loader from '../Loader/Loader';
import Card from './Card';

const Products = ({ match }) => {
    const dispatch = useDispatch();
    const { products, loading, error, productsCount } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch,]);

    return (
        <>
            {
                loading ?
                    <div className='py-60 bg-gray-100'>
                        <Loader />
                    </div>
                    :
                    <div className='bg-gray-100 py-10'>
                        <div id='container' className="max-w-screen-xl  py-10 mx-auto">
                            <div className='lg:px-20 mx:px-10 pt-2 pb-2'>

                                <h2 className="py-3 text-2xl font-bold tracking-wide uppercase lg:text-3xl">
                                    Products
                                </h2>
                            </div>
                            {loading ?
                                <div className='py-60 bg-gray-100'>
                                    <Loader />
                                </div>
                                :
                                <div className="grid grid-cols-1 my-8 lg:grid-cols-4 md:grid-cols-3 md:px-5 gap-x-4 gap-y-4 lg:px-20 sm:px-2">
                                    {products && products.map((product, i) => (
                                        <Card product={product} key={i} />
                                    ))}
                                </div>}
                        </div>
                    </div>
            }
        </>
    )
}

export default Products