import React, { useEffect, useReducer, useState } from 'react'
//  import data from '../data'
import axios from 'axios'
import logger from 'use-reducer-logger';
import Product from '../componenents/Product';
import { Helmet } from 'react-helmet-async';

// declarion de reducer
const reducer = (state, action )=>{
  switch (action.type){
    case 'FETCH_REQUEST':
      return {...state, loading : true};
      
    case 'FETCH_SUCCESS':
      return {...state,products:action.payload, loading : false};
    case 'FETCH_FAIL':
      return {...state, loading : false};
      default: return state;
  }
};


const HomeScreen = () => {
 // on remplace le hooks qu'on a utiliser  par reducer## const [products, setProducts] = useState([]);
//  le reducer prend 2 paramettre 1er c' le objet, 2eme c la fonction dispatch , use Reducer prend egalement 2 paramette est le state par default
 const [{loading, error, products}, dispatch] = useReducer(logger(reducer), {loading:true, error:'',products:[] });
  // recuperer la data du backend
  useEffect(() => {
    const fetchData = async()=>{
      dispatch({type:'FETCH_REQUEST' })
      try{
      const result = await axios.get('/api/products');
      dispatch({type:'FETCH_SUCCESS', payload:result.data })

      }catch{
        dispatch({type:'FETCH_FAIL', payload: error.message})
      }
      // setProducts(result.data);
    };
  fetchData();
  }, [])
  

  return (
    <div>
      <Helmet><title>Bondoufle Store</title></Helmet>
         <h1>Featured Products</h1>
          <div className='products'>
            {
            loading ? (<div>...Loading </div>)
            : error ? (<div>{error}</div>)
            : products.map(product => (<Product product= {product} ></Product>))}
          </div>
    </div>
  )
}

export default HomeScreen