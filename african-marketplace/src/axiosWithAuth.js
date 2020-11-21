import axios from 'axios';

export const axiosWithAuth=()=>{
    const token=localStorage.getItem('token');
    
    
    return axios.create({
        baseURL:'https://cors-anywhere.herokuapp.com/https://africa-mkplace.herokuapp.com',
        headers: {
            Authorization:token,
            // 'Access-Control-Allow-Origin': '*'
        }
    });
};