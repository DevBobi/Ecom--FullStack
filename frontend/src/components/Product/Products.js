import React, { useEffect } from 'react';

import { clearErrors, getProduct } from '../../actions/productAction';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../Loader/Loader';
import { useAlert } from "react-alert";
import Card from './Card';

const Product = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products, productsCount } = useSelector((state) => state.products)


  useEffect(() => {
    if (error) {
      return alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <>
      <div id='container' className="max-w-screen-xl  py-6 mx-auto bg-gray-100">
        <div className='lg:px-20 mx:px-10 pt-2 pb-2'>
          <span className="inline-block w-12 h-1 bg-red-700"></span>

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
            {products && products.map(product => (
              <Card product={product} />
            ))}
          </div>}
      </div>
    </>
  )
}

export default Product