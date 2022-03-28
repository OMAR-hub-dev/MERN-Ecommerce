
import axios from 'axios';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Store } from '../Store';
import Rating from './Rating';


function Product (props) {
  const {product}= props;
  const { state, dispatch:ctxDispatch} = useContext(Store);
  const{
    cart:{cartItems},
} = state;
  const addToCartHandler = async (item) =>{
    const existItem = cartItems.find((x)=>x._id === product._id);
    const quantity = existItem ? existItem.quantity+1 : 1;
    const { data } = await axios.get(`/api/products/${item._id}`);
    if(data.countInStock < quantity){
        window.alert('Sorry. product is outt of stock');
        return;
    }
    ctxDispatch({
        type: 'CART_ADD_ITEM',
        payload:{...item, quantity},
    });
};
  return (
    <div  className='product' key={product.slug}>
                
               <Link to ={`/product/${product.slug}`}><img src={product.image} alt={product.name} /></Link>
                <div className='product-info'>
                    <Link to ={`/product/${product.slug}`}><p>{product.name}</p></Link>
                    <Rating rating={product.rating} numReviews={product.numReviews} />
                    <strong><p>$ {product.price}</p></strong>
                    {product.countInStock === 0
                    ? <button variant='light' disabled>out of stock</button>
                    :<button className='btn-primary' onClick={()=>addToCartHandler(product)}>Add to cart</button>
                    }
                </div>
                
    </div>
  );
}

export default Product;


