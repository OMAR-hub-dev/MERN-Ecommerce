
import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


function Product (props) {
  const {product}= props;
  return (
    <div  className='product' key={product.slug}>
                
               <Link to ={`/product/${product.slug}`}><img src={product.image} alt={product.name} /></Link>
                <div className='product-info'>
                    <Link to ={`/product/${product.slug}`}><p>{product.name}</p></Link>
                    <Rating rating={product.rating} numReviews={product.numReviews} />
                    <strong><p>$ {product.price}</p></strong>
                    <button className='btn-primary'>Add to cart</button>
                </div>
                
    </div>
  );
}

export default Product;


