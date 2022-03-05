import React from 'react'
import { Link } from 'react-router-dom'
import data from '../../../backend/data'
const HomeScreen = () => {
  return (
    <div>
         <h1>Featured Products</h1>
          <div className='products'>
            {data.products.map(product => (<div  className='product' key={product.slug}>
                
                <Link to ={`/product/${product.slug}`}><img src={product.image} alt={product.name} /></Link>
                <div className='product-info'>
                <Link to ={`/product/${product.slug}`}><p>{product.name}</p></Link>
                  <strong><p>{product.price}</p></strong>
                  <button>Add to cart</button>
                </div>
                
          </div>))}
          </div>
    </div>
  )
}

export default HomeScreen