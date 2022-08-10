import { ShoppingBagIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react'
import Star from "react-rating-stars-component"
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../../actions/productAction';
import ReviewCard from './ReviewCard';

const ProductDetailsScreen = ({ props }) => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [count, setCount] = useState(1);

    const { product, loading, error } = useSelector(
        (state) => state.productDetails
    );

    useEffect(() => {
        dispatch(getProductDetails(id))
    }, [dispatch, id])


    return (
        <>
            <div className='bg-gray-100'>
                <div className="mx-auto p-10 w-full max-w-7xl  text-gray-700">
                    {
                        product.images &&
                        product.images.map((item, i) => (

                            <div key={i} className="flex flex-col lg:flex-row px-5">

                                {/* :PICTURES CONTAINER */}
                                <div className="py-8 w-full lg:w-1/2 flex flex-col items-center">
                                    {/* ::Like Button */}
                                    {/* <span className="self-start ml-5">
                            <button className="text-gray-300 hover:text-red-500">
                                <HeartIcon className="w-10 h-10" />
                            </button>
                        </span> */}
                                    {/* ::Main Picture */}
                                    <div className="w-auto h-56 sm:h-72 lg:h-full max-h-96 overflow-hidden">
                                        <img src={item.url} alt={item.url} className="object-contain w-full h-full" />
                                    </div>
                                    {/* ::Gallery */}
                                    {/* <div className="mt-6 mx-auto">
                                    <ul className="grid grid-flow-col auto-cols-fr gap-4">
                                        {product.pictures
                                            .slice(0, 4) // Here you can manage the number of pictures displayed
                                            .map((picture, index) => (
                                                <li key={picture.alt} className={`col-span-1 p-1 w-16 rounded border-2 ${index === mainPicture ? "border-yellow-600" : "border-transparent"}`}>
                                                    <button type="button" className="block h-full rounded overflow-hidden" onClick={() => setMainPicture(index)}>
                                                        <img src={picture.src} alt={picture.alt} className="object-contain" />
                                                    </button>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div> */}
                                </div>



                                {/* :PRODUCT DETAILS */}
                                <div className="lg:py-8 w-full lg:w-1/2 flex flex-col lg:border-l-2 border-gray-200">

                                    {/* ::Description Container */}
                                    <div className="order-3 lg:order-1 pb-5 sm:px-6 lg:border-b-2 border-gray-200">
                                        <h1 className="hidden lg:block text-4xl text-gray-700 font-light tracking-wide">{product.name}</h1>
                                        <p className="mt-10 text-base text-gray-500">{product.description}</p>
                                        {/* <ul className="my-5 flex flex-col space-y-2">
                                        {product.features.map(feature => (
                                            <li key={feature.name} className="inline-flex items-center space-x-2 text-gray-500">
                                                <span className="w-1.5 h-1.5 rounded-full bg-yellow-600" />
                                                <span className="text-sm font-semibold">{feature.name}:</span>
                                                <span className="text-sm font-normal">{feature.details}</span>
                                            </li>
                                        ))
                                        }
                                    </ul> */}
                                    </div>

                                    {/* ::Actions Container */}
                                    <div className="order-2 lg:order-3 sm:px-6 flex flex-wrap lg:flex-nowrap justify-between items-center border-b-2 lg:border-none border-gray-200">

                                        <div className="my-2.5">

                                            {/* ::::rating stars */}
                                            <div className="items-center space-x-1">

                                                <Star
                                                    name='rate'
                                                    value={product.ratings}
                                                    starColor='#56b280'
                                                    emptyStarColor='#242423'
                                                    editing={false}
                                                    size={20}
                                                />
                                                <p >
                                                    <span className='text-gray-500 font-semibold'>
                                                        category
                                                    </span>{' '}
                                                    {product.category}
                                                </p>

                                                <div className="pt-1 text-3xl text-lime font-bold">
                                                    <span className="font-normal">$</span>
                                                    {product.price}
                                                </div>
                                            </div>

                                        </div>

                                        <div className='flex flex-col py-3 '>
                                            {/* :::Add to cart button */}
                                            <div className="border px-1 w-max border-lime">
                                                <span
                                                    onClick={() =>
                                                        count > 1 && setCount(count - 1)
                                                    }
                                                    className="mx-3 cursor-pointer hover:text-red-600">
                                                    -
                                                </span>
                                                <span >
                                                    {count}
                                                </span>
                                                <span
                                                    onClick={() => setCount(count + 1)}
                                                    className="mx-3 cursor-pointer hover:text-red-600">
                                                    +
                                                </span>
                                            </div>
                                            <button type="button" className="my-2.5 py-1.5 px-3 inline-flex items-center rounded-sm bg-lime text-base text-white font-semibold uppercase whitespace-nowrap hover:bg-green-800">
                                                <ShoppingBagIcon className="mr-3 w-6 h-6" />
                                                Add to cart
                                            </button>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        ))}
                </div>
            </div>

            {
                product.reviews && product.reviews[0] ? (
                    <div>
                        {
                            product.reviews &&
                            product.reviews.map((review) => <ReviewCard review={review} />)
                        }
                    </div>
                ) : (
                    <p>No reviews yet!</p>
                )}
        </>
    )
}

export default ProductDetailsScreen