import React from 'react'
import { Rating } from '@mui/material'

const Review = ({rating, comment, reviewerName}) => {



  return (
  
    <div className="content">
            <Rating name="read-only" value={rating} readOnly />
            <p className='text-2xl font-bold'>{comment}</p>
            <p className='text-2xl font-bold'>{reviewerName}</p>
           
        </div>
  )
}

export default Review