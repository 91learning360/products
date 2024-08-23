import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem/ProductItem'
import axios from 'axios';



const Products = () => {
    const [products, setProducts] = useState([]); 

    useEffect(() => {
        axios.get('https://dummyjson.com/products').then((res) => {
            console.log(res.data.products)
            setProducts(res.data.products)
        }).catch((err) => {
            alert(err.message)
        })

    }, [])


  return (
    <div className='flex gap-2 flex-wrap'>
        {
            products.length == 0? (
                <img src='https://i.gifer.com/ZKZg.gif'/>
            ): (
              products.map((value) => {
                return <ProductItem key={value.id} img={value.thumbnail} title={value.title} price={value.price} id={value.id} rating={value.rating} />
              })
            )
        }
    </div>
  )
}



export default Products