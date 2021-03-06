import React from 'react';
// import axios from 'axios';
import {axiosWithAuth} from '../axiosWithAuth'

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
        // axios
        axiosWithAuth()
        .post('https://africa-mkplace.herokuapp.com/api/login',this.state.credentials)
        .then((res)=>{console.log(res)
            localStorage.setItem('token',res.data.token);
            // localStorage.setItem('*',res.data.headers['Access-Control-Allow-Origin']);
            this.props.history.push('/protected/itemsList');
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