import { useState } from 'react';
import {axiosWithAuth} from '../axiosWithAuth';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {addUser} from '../actions/userActions';

const newUser={id:'',email:'',password:'',first_name:'',last_name:'',isAdmin:false}
const Registration=(props)=>{
    const [user,setUser]=useState(newUser)
    const [users,setUsers]=useState(props.users) //need to pass in user array
    const {push}=useHistory();

    const addUser=(e)=>{
        e.preventDefault();
        axiosWithAuth()
        .post('/api/register',user)
        .then(res=>setUsers([...users,res.data]))
            // console.log(res))
        .catch(err=>console.log(err));
        props.addUser(user);
        alert(`Thanks for joining the Market ${user.first_name} ${user.last_name}`);
        setUser({email:'',password:'',first_name:'',last_name:'',isAdmin:false})
        push('/login')
    }
    const handleChange=(e)=>{
        setUser({...user,
            [e.target.name]:e.target.value
            
        })
    }
    // const formSubmit=(e)=>{ 
    //     e.preventDefault();
    //     setUser({email:'',password:'',first_name:'',last_name:'',isAdmin:false})
    // }
    console.log(user);
    console.log(users);
    console.log(props.users)
    console.log(props);
    console.log(user.isAdmin)
    return(
        <form >
            <h3>Sign up here!</h3>            
            <input type='text' name='email' placeholder='email' onChange={handleChange} value={user.email}/>
            <br></br>
            <input type='text' name='password' placeholder='password' onChange={handleChange} value={user.password}/>
            <br></br>
            <input type='text' name='first_name' placeholder='first name' onChange={handleChange} value={user.first_name}/>
            <br></br>
            <input type='text' name='last_name' placeholder='last name' onChange={handleChange} value={user.last_name}/>
            <br></br>
            <label htmlFor="admin">Are you a buyer or seller?</label>
            <select id='admin' name='isAdmin' onChange={handleChange}>
                {/* <option value={false}></option>                 */}
                <option value={false} >Buyer</option>
                <option value={true}>Seller</option>
            </select>
            {/* <input type='checkbox'  onChange={handleChange} value={user.isAdmin}/> */}



            <button onClick={addUser}>Register</button>
        </form>
    )
}   

const mapStateToProps=state=>{
    return{
     users:state.users,
     isAdding:state.isAdding,
     addError:state.addError
    //  isFetching:state.isFetching,
    //  fetchingError:state.fetchingError,
    //  products:state.products,
    //  productsError:state.productsError
    }
 }
 const mapDispatchToProps={
    // getProducts,
    // addProducts
  }
 export default connect(mapStateToProps,{addUser})(Registration)