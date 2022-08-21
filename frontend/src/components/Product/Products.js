import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, getProduct } from '../../actions/productAction';
import Loader from '../Loader/Loader';
import Card from './Card';
import Pagination from "react-js-pagination";
import "./Products.css";

const Products = () => {
    const dispatch = useDispatch();
    const {
        products,
        loading,
        error,
        resultPerPage,
        productsCount,
        page
    } = useSelector((state) => state.products);

    const paginationHandler = (page) => {
        dispatch(getProduct({ page }))
    }

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getProduct({}));
    }, [dispatch, error]);

    return (
        <>
            {
                loading ?
                    <div className='py-60 bg-gray-100'>
                        <Loader />
                    </div>
                    :
                    <div className='bg-gray-100 pb-10'>
                        <div id='container' className="max-w-screen-xl py-10 mx-auto">
                            <div className='lg:px-20 mx:px-10'>
                                <h2 className="py-3 text-2xl font-bold tracking-wide uppercase lg:text-3xl">
                                    Products
                                </h2>
                            </div>
                            {loading ?
                                <div className='py-60 bg-gray-100'>
                                    <Loader />
                                </div>
                                :
                                <div className="grid grid-cols-1 my-5 lg:grid-cols-4 md:grid-cols-3 md:px-5 gap-x-4 gap-y-4 lg:px-20 sm:px-2">
                                    {products && products.map((product, i) => (
                                        <Card product={product} key={i} />
                                    ))}
                                </div>}


                        </div>
                        {resultPerPage && (
                            <div className="paginationBox">
                                <Pagination
                                    activePage={parseInt(page) || 1}
                                    itemsCountPerPage={resultPerPage}
                                    totalItemsCount={productsCount}
                                    onChange={(e) => paginationHandler(e)}
                                    nextPageText="Next"
                                    prevPageText="Prev"
                                    firstPageText="1st"
                                    lastPageText="last"
                                    itemClass="page-item"
                                    linkClass="page-link"
                                    activeClass="pageItemActive"
                                    activeLinkClass="pageLinkActive"
                                />
                            </div>
                        )}

                    </div>
            }
        </>
    )
}

export default Products