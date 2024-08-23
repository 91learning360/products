import React, { useEffect, useState } from 'react'
import { Rating } from '@mui/material'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Review from './Review/Review';


const ProductPage = () => {
    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`).then((res) => {
            setData(res.data)
        }).catch((er) => {
            console.log(er)

        })
    }, [])


    return (
        <div className=''>
            {
                data.length == 0 ? (
                    <img src='https://i.gifer.com/ZKZg.gif' />
                ) : (
                    <div className='product_container w-full flex h-[70vh] border-2'>
                        <div className="left flex-1">
                            <img className='w-full h-full object-contain' src={data.thumbnail} alt="" />
                        </div>
                        <div className="right flex-1 p-4">
                            <h1 className='text-5xl' >{data.title}</h1>
                            <p className='mt-4'>{data.description}</p>
                            <p className='text-red-500 text-xl mt-2'>{data.brand}</p>
                            <Rating name="read-only" size='large' value={data.rating} readOnly />
                            <h2 className='text-2xl font-bold' >Price: ₹{data.price}</h2>
                            <p className='text-lg text-green-500'>stock: {data.stock}</p>
                            <p className='text-lg text-orange-400'>discount: {data.discountPercentage}%</p>
                            <button type="button" class="text-white w-full bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2">Buy Now</button>
                        </div>
                    </div>
                )
        }
          {
            data.length == 0? (
                // <img src='https://i.gifer.com/ZKZg.gif'/>
                null
            ): (
              data.reviews.map((value) => {
                return <Review rating={value.rating} comment={value.comment} reviewerName={value.reviewerName}  />
              })
            )
        }
        </div>
    )
}

export default ProductPage

