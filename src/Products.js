import React from 'react';
import Product from './Product';

export default function Products(props) {
  return (

<div className='aam'>
   <div className='products_item'>
  <div className='heading'> 
   <h1>Edvora</h1>
   <h2>Products</h2>
   </div>
   <div className='product_name'>
   <h3>Product Name</h3>
   <hr/>
   <div className='items'>
   {props.products.map(product=>(
   <Product product={product}/>
  ))}
  </div>
  </div>
   </div>


   <div className='products_item'>
   <div className='product_name'>
   <h3>Product Name</h3>
   <hr/>
   <div className='items'>
   {props.products.map(product=>(
   <Product product={product}/>
  ))}
   </div>
  </div>
   </div>
   

  </div>










    
  )
}
