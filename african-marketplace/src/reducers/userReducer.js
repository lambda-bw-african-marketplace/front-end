import {dummyUsers} from '../dummyData'

const initialState={
    users:[
        {
        id:1,      
        email:'',
        isAdmin: false,
        first_name:'',
        last_name:'',
        created_at:'',
        updated_at:'',
        products:[]
        },
    ]
        ,
    
    isFetching:false,
    error:'',
}

// export const pokemonReducer=(state=initialState,action)=>{
//     switch(action.type){
//         case FETCH_USERS:
//             return {...state,
//                 isFetching: true,
//                 error:''
//             }
//         case FETCH_SUCCESS:
//             return {...state,
//             isFetching: false,
//             }
//     }