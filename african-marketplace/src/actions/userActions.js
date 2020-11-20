// import axios from 'axios';
import { axiosWithAuth } from '../axiosWithAuth';

export const FETCH_USERS='FETCH_USERS';
export const FETCH_SUCCESS='FETCH_SUCCESS';
export const FETCH_FAIL='FETCH_FAILURE';
export const PRODUCTS_SUCCESS='PRODUCTS_SUCCESS';
export const PRODUCTS_FAIL='PRODUCTS_FAIL';

export const getProducts=()=>(dispatch)=>{
    dispatch({type:FETCH_USERS})
    axiosWithAuth()
    .get('/api/products')
    .then(res=>dispatch({type:PRODUCTS_SUCCESS,payload:res.data.results},
        // res.data.results.map(user=>
        //     user.products)
        ))
    .catch(err=>dispatch({type:PRODUCTS_FAIL,payload:err.response}))

}