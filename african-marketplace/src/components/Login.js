import React from 'react';
import axios from 'axios';

class Login extends React.Component{
    constructor(){
        super();
        this.state={
            credentials:{
                email:'',
                password:''
            }
        }
    }

    handleChange=(e)=>{
        this.setState({
            credentials:{
                ...this.state.credentials,
                [e.target.name]:e.target.value
            }
        })
    }

    login=(e)=>{
        e.preventDefault();
        axios
        .post('https://africa-mkplace.herokuapp.com/api/auth/login',this.state.credentials)
        .then((res)=>{console.log(res)
            // localStorage.setItem('token',res.data.payload);
            // this.props.history.push('/protected/ItemsList');
        })
        .catch((err)=>console.log(err));
    }
    
    render(){
        console.log(this.state)
        return(
            <div>
                <h1>Market PLace</h1>
                <form onSubmit={this.login}>
                    <input 
                        placeholder='email'
                        type='text'
                        name='email'
                        value={this.state.credentials.email}
                        onChange={this.handleChange}
                    />
                    <input 
                        placeholder='password'
                        type='text'
                        name='password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

export default Login;