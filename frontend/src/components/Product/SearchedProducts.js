import React from 'react'
import Loader from '../Loader/Loader'
import Card from './Card'

const SearchedProducts = ({ products, title, loading }) => {

    return (
        <>
            <h1 className="text-3xl text-center mt-20 text-gray-700" id='products'>
                Result found with <span className='text-lime text-4xl'> "{title}"</span>
            </h1>

            {loading && !products?.length > 0 && (
                <div className="m-auto w-full my-48">
                    <Loader />
                </div>
            )}
            <div className="grid grid-cols-1 my-8 lg:grid-cols-4 md:grid-cols-3 md:px-10 gap-x-4 gap-y-4 lg:px-40 sm:px-2">
                {products && products.map((product, i) => (
                    <Card product={product} key={i} />
                ))}
            </div>
        </>
    )
}

export default SearchedProducts