// import {dummyUsers} from '../dummyData'
import {FETCH_PRODUCTS,
    PRODUCTS_SUCCESS,
    PRODUCTS_FAIL,
    ADD_PRODUCTS,
    PRODUCTS_ADDITION_SUCCESS,
    PRODUCTS_ADDITION_FAIL,
    EDITING,
    EDITING_PRODUCT,
    EDITING_FAIL,
    DELETING,
    DELETING_PRODUCT,
    DELETING_FAIL,
    ADDING,
    ADD_USER_SUCCESS,
    ADD_USER_FAIL
} from '../actions/userActions';
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
    isAdding:false,
    fetchingError:'',
    productsError:'',
    addProductError:'',
    isEditing:false,
    editingError:'',
    isDeleting:false,
    deletingError:'',
    isAdding:false,
    addError:''
}

export const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_PRODUCTS:
            return {...state,
                isFetching: true,
                productsError:''
            }
        case ADD_PRODUCTS:
            return {...state,
            isAdding: true
            }
        case PRODUCTS_ADDITION_SUCCESS:
            return {...state,
            isAddinging:false,
            products:[...state.products,action.payload],
            }         
        case PRODUCTS_ADDITION_FAIL:
            return {...state,
            addProductError:action.payload,
            }
        case PRODUCTS_SUCCESS:
            return {...state,
            isFetching:false,
            products:action.payload}
        case PRODUCTS_FAIL:
            return {...state,
                productsError:action.payload}
        case EDITING:
            return {...state,
                isEditing:true,
                editingError:''
                }
        case EDITING_PRODUCT:
            return {...state,
                isEditing:false,
                products:[...state.products,action.payload]}
        case EDITING_FAIL:
            return {...state,
                editingError:action.payload.messse}
        case DELETING:
            return {...state,
                isDeleting:true,
                deletingError:''
                }
        case DELETING_PRODUCT:
            return {...state,
                isDeleting:false,
                products:[...state.products,action.payload]}
        case DELETING_FAIL:
            return {...state,
                deletingError:action.payload.messse}
        case ADDING:
            return {...state,
                isDeleting:true,
                deletingError:''
                }
        case ADD_USER_SUCCESS:
            return {...state,
                isAdding:false,
                users:[...state.users,action.payload]}
        case ADD_USER_FAIL:
            return {...state,
                addError:action.payload}
        default:
            return state
    }
}