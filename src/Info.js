import React from 'react';


export default function Products() {
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
   <div className='item'>Box1</div>
   <div className='item'>Box2</div>
   <div className='item'>Box3</div>
   <div className='item'>Box4</div>
   <div className='item'>Box5</div>
   <div className='item'>Box6</div>

    </div>
  </div>
   </div>


   <div className='products_item'>
   <div className='product_name'>
   <h3>Product Name</h3>
   <hr/>
   <div className='items'>
   <div className='item'>Box1</div>
   <div className='item'>Box2</div>
   <div className='item'>Box3</div>
   <div className='item'>Box4</div>
   <div className='item'>Box5</div>
   <div className='item'>Box6</div>

   </div>
  </div>
   </div>
   

  </div>
  );
}






<>

<h1>{props.product.product_name}</h1>
<p>{props.product.brand_name}</p>
<p>{props.product.time}</p>
<p>{props.product.discription}</p>
<p>{props.product.state}</p>
<h3>${props.product.price}</h3>
<img src={props.product.image}/>
<p>{props.product.address.state}</p>
<p>{props.product.address.city}</p>

</>