import axios from 'axios';
import { axiosWithAuth } from '../axiosWithAuth';

export const FETCH_PRODUCTS='FETCH_PRODUCTS';
export const FETCH_SUCCESS='FETCH_SUCCESS';
export const FETCH_FAIL='FETCH_FAILURE';
export const PRODUCTS_SUCCESS='PRODUCTS_SUCCESS';
export const PRODUCTS_FAIL='PRODUCTS_FAIL';
export const ADD_PRODUCTS='ADD_PRODUCTS';
export const PRODUCTS_ADDITION_SUCCESS='PRODUCTS_ADDITION_SUCCESS';
export const PRODUCTS_ADDITION_FAIL='PRODUCTS_ADDITION_FAIL';
export const EDITING='EDITING';
export const EDITING_PRODUCT='EDITING_PRODUCT';
export const EDITING_FAIL='EDITING_FAIL';
export const DELETING='DELETING';
export const DELETING_PRODUCT='DELETING_PRODUCT';
export const DELETING_FAIL='DELETING_FAIL';
export const ADDING='ADDING';
export const ADD_USER_SUCCESS='ADD_USER_SUCCESS';
export const ADD_USER_FAIL='ADD_USER_FAIL';

export const getProducts=()=>(dispatch)=>{
    dispatch({type:FETCH_PRODUCTS})
    axiosWithAuth()
    // axios
    .get('/api/products')
    .then(res=>
        dispatch({type:PRODUCTS_SUCCESS,payload:res.data},
            console.log(res)
        ))
    .catch(err=>dispatch({type:PRODUCTS_FAIL,payload:err}))

}

export const addProducts=(obj)=>(dispatch)=>{
    dispatch({type:ADD_PRODUCTS})
    axiosWithAuth()
    .post('/api/products',obj)
    .then(res=>
        dispatch({type:PRODUCTS_ADDITION_SUCCESS,payload:res.data},
            console.log(res)
        ))
    .catch(err=>dispatch({type:PRODUCTS_ADDITION_FAIL,payload:err}))

}

export const editProduct=(obj,id)=>(dispatch)=>{
    dispatch({type:EDITING})
    axiosWithAuth()
    .put(`/api/products/${id}`,obj)
    .then(res=>
    dispatch({type:EDITING_PRODUCT,payload:res.data},
        console.log(res)
    // res.data.results.map(user=>
    //     user.products)
    ))
    .catch(err=>dispatch({type:EDITING_FAIL,payload:err}))}

export const deleteProduct=(id)=>(dispatch)=>{
    dispatch({type:DELETING})
    axiosWithAuth()
    .delete(`/api/products/${id}`)
    .then(res=>dispatch({type:DELETING_PRODUCT,payload:res.data}))
    .catch(err=>dispatch({type:DELETING_FAIL,payload:err}))
}

export const addUser=(obj)=>(dispatch)=>{
    dispatch({type:ADDING})
    axiosWithAuth()
    // axios
    .post('/api/register',obj)
    .then(res=>
        dispatch({type:ADD_USER_SUCCESS,payload:res.data},
            console.log(res)
        ))
    .catch(err=>dispatch({type:ADD_USER_FAIL,payload:err}))

}