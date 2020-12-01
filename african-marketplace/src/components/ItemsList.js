import React,{useState,useEffect} from 'react';
// import {items} from './Items';
import {connect} from 'react-redux';
import {getProducts, addProducts, deleteProduct} from '../actions/userActions';
// import axios from 'axios';
import { axiosWithAuth } from '../axiosWithAuth';
import {useHistory} from 'react-router-dom'

const item={name:'',price:'',city:'',category:'',description:'',unit:'',};
const ItemsList=((props)=>{
    const [products,setProducts]=useState(props.products);
    const [product,setProduct]=useState(item)
    const {push}=useHistory();

    useEffect(()=>{props.getProducts();},[props.getProducts]);

    const addProduct=(e)=>{
        e.preventDefault();
        axiosWithAuth()
        .post('/api/products',product)
        .then(res=>
            setProducts([...products,res.data]))
        .catch(err=>console.log(err));
        // props.getProducts(); 
        //must pass in object containg array but spread data to pass in new object
        props.addProducts(product);       
        setProduct({name:'',price:'',city:'',category:'',description:'',unit:'',})
    }

    const handleChange=(e)=>{
        setProduct({...product,
            [e.target.name]:e.target.value
            
        })
    }

    const deleteItem=(e,id)=>{
        e.preventDefault();
        axiosWithAuth()
        .delete(`/api/products/${id}`,product)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
        props.deleteProduct(id)
    }
    // const formSubmit=(e)=>{ 
    //     e.preventDefault();

    // }
    console.log(props.products)
    console.log(products)
    // console.log(props.users)
    return(
    <div>
        <h1>Items</h1>        
    <form >
            <input type='text' name='name' placeholder='product name' value={product.name} onChange={handleChange}/>
            <input type='text' name='price' placeholder='price' value={product.price} onChange={handleChange}/>
            <input type='text' name='city' placeholder='city' value={product.city} onChange={handleChange}/>
            <input type='text' name='category' placeholder='category' value={product.category} onChange={handleChange}/>
            <input type='text' name='description' placeholder='description' value={product.description} onChange={handleChange}/>
            <input type='text' name='unit' placeholder='unit (pounds,ounces,etc)' value={product.unit} onChange={handleChange}/>
            <button onClick={addProduct}>Add Item</button>

        </form>
        {products.map(item=>{
            return(
            <div key={item.id}>
                <h4>{item.name}</h4>
                <p>${item.price}/{item.unit}</p>
                <p>{item.description}</p>
                {/* <p>${item.price}/lb</p> */}
                <p>{item.city}</p>
                <button onClick={()=>{push(`/protected/itemsList/${item.id}`)}}>Edit Item</button>
                <button onClick={(e)=>{deleteItem(e,item.id)}}>Delete Item</button>
                 <br></br>
            </div>
           )})}  
         {/* if user is a sellar show form if not n/a */}

    </div>
    )
})
const mapStateToProps=state=>{
    return{
        users:state.users,
        isFetching:state.isFetching,
        fetchingError:state.fetchingError,
        products:state.products,
        isAddingProduct:state.isAddingProduct,
        addProductError:state.addProductError,
        isDeleting:state.isDeleting,
        deletingError:state.deletingError
    }
 }
 const mapDispatchToProps={
    getProducts,
    addProducts,
    deleteProduct
  }
 export default connect(mapStateToProps,mapDispatchToProps)(ItemsList)