import React from 'react';

export default function Filter({cat,filteringName,sat,filteringmat}) {
  return( <div>

  <div className='filter_product'>
     <h1>Filters</h1>
     <hr/>
     <div className='filt'>
     <select className='info' value={cat} onChange={filteringName}>
    <option value="Apple">Apple</option>
    <option value="Digits">Digits</option>
    <option value="Facebook">Facebook</option>
    <option value="Amazon">Amazon</option>
    <option value="TCS">TCS</option>
    <option value="Barkshire">Barkshire</option>
     </select>
     <select className='info' value={sat} onChange={filteringmat}>
    <option value="state">State</option>
    <option value="Tamil Nadu"> Tamil Nadu</option>
    <option value="Madhya Pradesh"> Madhya Pradesh</option>
    <option value="Meghalaya"> Meghalaya</option>
    <option value="Odisha"> Odisha</option>
    <option value="Mizoram"> Mizoram</option>
    <option value="Arunachal Pradesh"> Arunachal Pradesh</option>
    <option value="Jammu and Kashmir"> Jammu and Kashmir</option>
    <option value="Goa"> Goa</option>
    <option value="Andhra Pradesh"> Andhra Pradesh</option>
    <option value="Andaman and Nicobar Islands"> Andaman and Nicobar Islands</option>
    <option value="Delhi"> Delhi</option>
    <option value="Uttar Pradesh"> Uttar Pradesh</option>
    <option value="West Bengal"> West Bengal</option>
    <option value="Bihar"> Bihar</option>
    <option value="Chhatisgarh"> Chhatisgarh</option>
    <option value="Dadra  and Nagar Haveli">Dadra  and Nagar  Haveli </option>
     </select>
     <select className='info'>
    <option value='City'> City</option>
    
     </select>
     </div>

  </div>

  </div>
  );
}
