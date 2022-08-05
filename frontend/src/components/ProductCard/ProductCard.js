import React from 'react'
import Star from "react-rating-stars-component"

const ProductCard = ({ product }) => {
    return (
        <div className='shadow-lg border rounded-lg duration-300 hover:shadow-sm hover:scale-110'>
            <a href={product._id} className="block">
                <div className="flex justify-start">
                    <strong className="relative h-6 px-4 text-xs leading-6 text-white uppercase bg-black"> New </strong>
                </div>

                <img
                    alt={product.name}
                    src={product.images[0].url}
                    className="object-cover w-full h-60"
                />

                <h5 className="mt-4 px-4 text-md text-black/90">
                    {product.name}
                </h5>

                <div className="flex items-center justify-between font-bold px-4 py-4">

                    <div>
                        <Star
                            name='rate'
                            value={product.rating}
                            starColor='#56b280'
                            emptyStarColor='#242423'
                            editing={false}
                        />
                    </div>
                    <p className="text-lg text-lime">
                        {product.price}
                    </p>
                </div>
            </a>
        </div>
    )
}

export default ProductCard