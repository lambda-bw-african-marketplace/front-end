import axios from 'axios';
import { axiosWithAuth } from '../axiosWithAuth';

export const FETCH_PRODUCTS='FETCH_PRODUCTS';
export const FETCH_SUCCESS='FETCH_SUCCESS';
export const FETCH_FAIL='FETCH_FAILURE';
export const PRODUCTS_SUCCESS='PRODUCTS_SUCCESS';
export const PRODUCTS_FAIL='PRODUCTS_FAIL';

export const getProducts=()=>(dispatch)=>{
    dispatch({type:FETCH_PRODUCTS})
    axiosWithAuth()
    // axios
    .get('/api/products')
    .then(res=>
        dispatch({type:PRODUCTS_SUCCESS,payload:res.data},
            console.log(res)
        // res.data.results.map(user=>
        //     user.products)
        ))
    .catch(err=>dispatch({type:PRODUCTS_FAIL,payload:err}))

}