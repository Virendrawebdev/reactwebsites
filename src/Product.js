import React from 'react';

export default function Product(props) {

  return (
  <div className='body'>
  <div className='single_product'>
  <div>
<div className='itemproduct'>
<div id='im'><img src={props.product.image}/> </div>
<div className='pbp'>
<p>{props.product.product_name}</p>
<h1>{props.product.brand_name}</h1>
<h3>${props.product.price}</h3>
</div>
</div>
<div>
<div className='pp'>
<p>{props.product.address.state}</p>
<p>{'Time:'}{props.product.time}</p>
</div>
<div id="desc">
<p>{props.product.discription}</p>
</div>
</div>

</div>

       
  </div>
  </div> 
    
 






   );
  
}
