import {axiosWithAuth} from '../axiosWithAuth';
import React,{useEffect,useState} from 'react';
import {useParams,useHistory} from 'react-router-dom';
import {editProduct} from '../actions/userActions';
import {connect} from 'react-redux';

const Product=(props)=>{
    const {id}=useParams();
    const {push}=useHistory();
    const [products,setProducts]=useState(props.products)
    const [item,setItem]=useState(
        {id:'',
        name:'',
        price:'',
        city:'',
        category:'',
        description:'',
        unit:'',
        user_id:''}
    )

    useEffect(()=>{
        axiosWithAuth()
        .get(`/api/products/${id}`)
        // .then(res=>console.log(res))
        .then(res=>setItem(
            {...item, id:res.data.id,
                name:res.data.name,
                price:res.data.price,
                city:res.data.city,
                category:res.data.category,
                description:res.data.description,
                unit:res.data.unit,
                user_id:res.data.user_id
            }
        ))
        .catch(err=>console.log(err))
    },[id]);

    const handleChange=(e)=>{
        setItem({...item,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        axiosWithAuth()   
        .put(`/api/products/${id}`,item)
        .then(res=>
            setProducts([...products,res.data]))
            // console.log(res))
        .catch(err=>console.log(err))
        props.editProduct(item,id);
        push(`/protected/itemsList`);
        // setItem({
        //     name:'',
        //     price:'',
        //     city:'',
        //     category:'',
        //     description:'',
        //     unit:''
        // })
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='name' placeholder='product name' value={item.name} onChange={handleChange}/>
                <input type='text' name='price' placeholder='price' value={item.price} onChange={handleChange}/>
                <input type='text' name='city' placeholder='city' value={item.city} onChange={handleChange}/>
                <input type='text' name='category' placeholder='category' value={item.category} onChange={handleChange}/>
                <input type='text' name='description' placeholder='description' value={item.description} onChange={handleChange}/>                
                <input type='text' name='unit' placeholder='weighing unit' value={item.unit} onChange={handleChange}/>
                <button>Update Item</button>
            </form>
        </div>
    )
}

const mapStateToProps=state=>{
    return{
     users:state.users,
    //  isFetching:state.isFetching,
    //  fetchingError:state.fetchingError,
     products:state.products,
     productsError:state.productsError,
     isEditing:state.isEditing,
     editingError:state.editingError
    }
 }
//  const mapDispatchToProps={
//     getProducts,
//     addProducts
//   }
 export default connect(mapStateToProps,{editProduct})(Product)