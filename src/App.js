import React,{ Component} from "react";
// import { Data } from "./Data";
import Filter from './Filter';
import './App.css'
import Products from './Products';
import { Data } from "./Data";


export default class App extends Component{
 
  constructor(){
    super();
    this.state={
      products:Data,
      sat:'',
      cat:''
    }
  }

// filtering by name
filteringName=(e)=>{
  let categ =e.target.value;
  if(categ===''){
    this.setState({
      cat:categ,
      products:Data
     })
  }
  else{
    this.setState({
      cat:categ,
      products:Data.filter(product=>{
        return product.brand_name.indexOf(e.target.value)>=0
      })
    })
  }
}

//filtering by state
filteringmat=(f)=>{
  let cates =f.target.value;
  if(cates===''){
    this.setState({
      sat:cates,
      products:Data
     })
  }
  else{
    this.setState({
      sat:cates,
      products:Data.filter(product=>{
        return product.address.state.indexOf(f.target.value)>=0
      })
    })
  }
}



 render(){
   return(
     <div className="App">
       <Filter
          
       filteringName={this.filteringName}
       cat={this.state.cat}
       filteringmat={this.filteringmat}
       sat={this.state.sat}
       />
       <Products products={this.state.products}/>
     </div>
   )
 }
}