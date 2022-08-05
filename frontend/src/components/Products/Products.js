import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

const product = {
  name: "  Limited Edition Sports Trainer",
  images: [{ url: "https://images.unsplash.com/photo-1491553895911-0055eca6402d" }],
  price: "  $189.99",
  id: "bobeee",
  reviews: "256 reviews",
  rating: 3
}

const Product = () => {
  return (
    <>
      <div id='container' className="max-w-screen-xl  py-6 mx-auto bg-gray-100">
        <div className='lg:px-20 pt-5 pb-2'>
          <span className="inline-block w-12 h-1 bg-red-700"></span>

          <h2 className="mt-1 text-2xl font-bold tracking-wide uppercase lg:text-3xl">
            Products
          </h2>
        </div>

        <div className="grid grid-cols-1 my-8 lg:grid-cols-4 gap-x-4 gap-y-4 lg:px-20 sm:px-2">
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
        </div>
      </div>
    </>

  )
}

export default Product