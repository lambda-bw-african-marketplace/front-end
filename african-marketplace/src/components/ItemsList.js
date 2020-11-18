import React,{useEffect} from 'react';
// import {items} from './Items';
import {dummyItems} from '../dummyData';


export const ItemsList=()=>{

    return(
    <div>
        <h1>Items</h1>
        {/* {dummyItems.map(item=>{return(
            <div key={item.id}>
                <h4>{item.product_name}</h4>
                <p>{item.city}</p>
                {/* <p>{item.description}</p> */}
                {/* <p>${item.price}/lb</p> */}
                {/* <p>{item.user_id}</p> */}
                {/* <br></br> */}
            {/* </div> */}
        {/* // )})} */} 
    </div>
    )
}