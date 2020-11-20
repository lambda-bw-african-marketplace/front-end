import React,{useState,useEffect} from 'react';
// import {items} from './Items';
import {connect} from 'react-redux';
import {getProducts} from '../actions/userActions';
import axios from 'axios';
import { axiosWithAuth } from '../axiosWithAuth';

const item={product_name:'',price:'',city:'',category:'',description:'',unit:''};
const ItemsList=((props)=>{
    const [products,setProducts]=useState(props.products);
    const [product,setProduct]=useState(item)
    useEffect(()=>{props.getProducts();},[props.getProducts]);

    const addProduct=(e)=>{
        e.preventDefault();
        axiosWithAuth()
        .post('/api/products',item)
        .then(res=>console.log(res))
        .catch(err=>console.log(err));
        // getProducts();        
        setProduct({product_name:'',price:'',city:'',category:'',description:'',unit:''})
    }

    const handleChange=(e)=>{
        setProduct({...product,
            [e.target.name]:e.target.value
            
        })
    }

    const formSubmit=(e)=>{ 
        e.preventDefault();

    }
    console.log(product)
    return(
    <div>
        <h1>Items</h1>
        {/* {products.map(item=>{return(
            <div key={item.id}>
                <h4>{item.name}</h4>
                {/* <p>{item.email}</p> */}
                {/* <p>{item.description}</p>
                <p>${item.price}/lb</p>
                <p>{item.user_id}</p> */}
                {/* <br></br> */}
            {/* </div> */}
          {/* )})}  */}
         {/* if user is a sellar show form if not n/a */}
        <form >
            <input type='text' name='product_name' placeholder='product name' value={product.product_name} onChange={handleChange}/>
            <input type='text' name='price' placeholder='price' value={product.price} onChange={handleChange}/>
            <input type='text' name='city' placeholder='city' value={product.city} onChange={handleChange}/>
            <input type='text' name='category' placeholder='category' value={product.category} onChange={handleChange}/>
            <input type='text' name='description' placeholder='description' value={product.description} onChange={handleChange}/>
            <input type='text' name='unit' placeholder='unit ex.pounds,ounces,etc...' value={product.unit} onChange={handleChange}/>
            <button onClick={addProduct}>Add Item</button>
        </form>
    </div>
    )
})
const mapStateToProps=state=>{
    return{
     users:state.users,
     isFetching:state.isFetching,
     fetchingError:state.fetchingError,
     products:state.products,
     productsError:state.productsError
    }
 }
 
 export default connect(mapStateToProps,{getProducts})(ItemsList)