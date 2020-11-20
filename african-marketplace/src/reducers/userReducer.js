// import {dummyUsers} from '../dummyData'
import {FETCH_USERS,PRODUCTS_SUCCESS,PRODUCTS_FAIL} from '../actions/userActions';
const initialState={
    users:[
        // {
        // id:'',      
        // email:'',
        // isAdmin: false,
        // first_name:'',
        // last_name:'',
        // created_at:'',
        // updated_at:'',
        // products:[{
            // id: '',
            // product_name: '',
            // price: '',
            // city: '',
            // category: '',
            // description: '',
            // unit: '',
            // image_url: '',
            // user_id: {id}
        //   }]
            // },
    ],
    products:[],
    isFetching:false,
    fetchingError:'',
    productsError:''
}

export const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_USERS:
            return {...state,
                isFetching: true,
                productsError:''
            }
        // case FETCH_SUCCESS:
        //     return {...state,
        //     isFetching: false,
        //     users:action.payload
        //     }
        // case FETCH_FAIL:
        //     return {...state,
        //     isFetching:false,
        //     fetchingError:action.payload
        //     }
        case PRODUCTS_SUCCESS:
            return {...state,
            isFetching:false,
            products:action.payload}
        case PRODUCTS_FAIL:
            return {...state,
            productsError:action.payload}
        default:
            return state
    }
}