import React from 'react'
import { Rating } from '@mui/material'

const ProductItem = ({img, title, price, rating}) => {
  return (
    <div className='w-[300px] h-[350px] shadow-lg rounded-xl px-3'>
        <div className='h-1/2  '>
            <img className='w-full h-full object-contain ' src={img} alt="" />
        </div>
        <div className="content">
            <h3 className='font-bold'>{title}</h3>
            <p className='text-2xl font-bold'>₹ {price}</p>
            <Rating name="read-only" value={rating} readOnly />
            <div className='text-center'>
             <button type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900 text-center">Buy Now</button>
            </div>
        </div>
    </div>
  )
}

export default ProductItem