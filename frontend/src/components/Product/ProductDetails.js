
import React, { useEffect, useState } from 'react'
import { HeartIcon, ShoppingBagIcon } from '@heroicons/react/solid'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetails } from '../../actions/productAction';


const ProductDetails = ({ match }) => {

    const dispatch = useDispatch();
    const { product, loading, error } = useSelector((state) => state.productDetails);
    console.log(product)

    useEffect(() => {
        dispatch(getProductDetails(match.params.id))
    }, [dispatch, match?.params?.id])


    // const product = {
    //     name: "Glass Teapot Master",
    //     price: 199,
    //     rating: 4.4,
    //     reviews: 96,
    //     hrefReviews: "#link",
    //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, id tenetur consectetur, rem vel repudiandae, obcaecati autem corporis maxime laborum debitis ullam. Similique nisi, porro perspiciatis vel ipsam aliquam repudiandae. Facilis dolorem incidunt",
    //     features: [
    //         { name: 'Materials', details: 'Bamboo, Glass' },
    //         { name: 'Teapot', details: '7"L x 4.5"W x 4.5"H' },
    //         { name: 'Capacity', details: '650 ml.' },
    //         { name: 'Cleaning', details: 'Hand Wash' }
    //     ],
    //     pictures: [
    //         { src: "https://fancytailwind.com/static/teapot1-e0cd61cf4337f086df22de4c2f646db0.webp", alt: "Teapot model" },
    //         { src: "https://fancytailwind.com/static/teapot2-9482ecf0cb04a9cbeacd01c7c869c970.webp", alt: "Teapot to pour water" },
    //         { src: "https://fancytailwind.com/static/teapot3-0596668cb1f92d4f0463e37d3ee69b36.webp", alt: "Teapot for breakfast" },
    //         { src: "https://fancytailwind.com/static/teapot4-73239d591549fa281e07e14a5e9939fb.webp", alt: "Teapot on warming machine" },
    //     ]
    // }

    const [mainPicture, setMainPicture] = useState(0)

    const starsNumber = Math.floor(product.rating)
    const isHalfStar = !Number.isInteger(product.rating)
    const emptyStars = 5 - Math.ceil(product.rating)


    return (
        <div className='bg-gray-100'>
            <div className="mx-auto p-10 w-full max-w-7xl  text-gray-700">
                {
                    product.images &&
                    product.images.map((item, i) => (

                        <div className="flex flex-col lg:flex-row px-5">

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
                                    <img src={product.pictures[mainPicture].src} alt={product.pictures[mainPicture].alt} className="object-contain w-full h-full" />
                                </div>
                                {/* ::Gallery */}
                                <div className="mt-6 mx-auto">
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
                                </div>
                            </div>



                            {/* :PRODUCT DETAILS */}
                            <div className="lg:py-8 w-full lg:w-1/2 flex flex-col lg:border-l-2 border-gray-200">

                                {/* ::Description Container */}
                                <div className="order-3 lg:order-1 pb-5 sm:px-6 lg:border-b-2 border-gray-200">
                                    <h1 className="hidden lg:block text-4xl text-gray-700 font-light tracking-wide">{product.name}</h1>
                                    <p className="mt-10 text-base text-gray-500">{product.description}</p>
                                    <ul className="my-5 flex flex-col space-y-2">
                                        {product.features.map(feature => (
                                            <li key={feature.name} className="inline-flex items-center space-x-2 text-gray-500">
                                                <span className="w-1.5 h-1.5 rounded-full bg-yellow-600" />
                                                <span className="text-sm font-semibold">{feature.name}:</span>
                                                <span className="text-sm font-normal">{feature.details}</span>
                                            </li>
                                        ))
                                        }
                                    </ul>
                                </div>

                                {/* ::Actions Container */}
                                <div className="order-2 lg:order-3 pt-8 sm:px-6 flex flex-wrap lg:flex-nowrap justify-between items-center border-b-2 lg:border-none border-gray-200">

                                    <div className="my-2.5">
                                        <span className="my-2.5 text-4xl text-gray-500 font-extrabold">
                                            <span className="font-normal">$</span>
                                            {product.price}
                                        </span>
                                        {/* ::::rating stars */}
                                        <div className="flex items-center space-x-1">
                                            {/* full stars */}
                                            {[...Array(starsNumber)].map((star, index) => (
                                                <span key={index} className="flex-shrink-0">
                                                    <svg className="w-4 h-4 text-yellow-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
                                                </span>
                                            ))
                                            }
                                            {/* half star */}
                                            {isHalfStar &&
                                                <span className="flex-shrink-0">
                                                    <svg className="w-4 h-4 text-yellow-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524v-12.005zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z" /></svg>
                                                </span>
                                            }
                                            {/* empty stars */}
                                            {[...Array(emptyStars)].map((star, index) => (
                                                <span key={index} className="flex-shrink-0">
                                                    <svg className="w-4 h-4 text-yellow-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                        <path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z" />
                                                    </svg>
                                                </span>
                                            ))
                                            }
                                        </div>
                                        {/* ::::all reviews */}
                                        <a href={product.hrefReviews} className="ml-2 text-sm text-sky-400 font-medium tracking-wide hover:text-sky-500 hover:underline">{`${product.reviews} reviews`}</a>
                                    </div>

                                    <div className='flex flex-col '>
                                        {/* :::Add to cart button */}
                                        <button type="button" className="m-2.5 py-1.5 px-3 inline-flex items-center rounded-sm bg-lime text-base text-white font-semibold uppercase whitespace-nowrap hover:bg-green-800">
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
    )
}

export default ProductDetails
