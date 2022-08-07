import React from 'react'
import Star from "react-rating-stars-component"

const Card = ({ product }) => {
    return (
        <div className='shadow-lg rounded-xl duration-300 hover:shadow-md hover:scale-110'>
            <a href={product._id} className="">
                <div className="flex justify-start">
                    <strong className="absolute h-6 px-4 text-xs leading-6 text-white uppercase bg-black"> New </strong>
                </div>

                <img
                    alt={product.name}
                    src={product.images[0].url}
                    className="object-cover w-full h-60"
                />

                <h5 className="bg-white pt-4 px-4 text-md text-black/90">
                    {product.name}
                </h5>

                <div className="flex items-center  rounded-lg justify-between font-bold px-4 py-4 bg-white">

                    <div className='flex'>
                        <Star
                            name='rate'
                            value={product.ratings}
                            starColor='#56b280'
                            emptyStarColor='#242423'
                            editing={false}
                        />
                        <span className='text-sm font-light py-1'>
                            ({product.numOfReviews} Reviews)
                        </span>
                    </div>
                    <p className="text-lg text-lime">
                        {`${product.price}`}
                    </p>
                </div>
            </a>
        </div>
    )
}

export default Card