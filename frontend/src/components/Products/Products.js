import React, { useEffect } from 'react';
import Card from '../Card/Card';
import { getProduct } from '../../actions/productAction';
import { useSelector, useDispatch } from 'react-redux';

const Product = () => {
  const dispatch = useDispatch();
  const { loading, error, products, productsCount } = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(getProduct())
  }, [dispatch])

  return (
    <>
      <div id='container' className="max-w-screen-xl  py-6 mx-auto bg-gray-100">
        <div className='lg:px-20 mx:px-10 pt-5 pb-2'>
          <span className="inline-block w-12 h-1 bg-red-700"></span>

          <h2 className="mt-1 text-2xl font-bold tracking-wide uppercase lg:text-3xl">
            Products
          </h2>
        </div>

        <div className="grid grid-cols-1 my-8 lg:grid-cols-4 md:grid-cols-3 md:px-5 gap-x-4 gap-y-4 lg:px-20 sm:px-2">

          {products && products.map(product => (
            <Card product={product} />
          ))}

        </div>
      </div>
    </>

  )
}

export default Product