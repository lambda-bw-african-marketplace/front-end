import React, {useEffect, useState} from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import {axiosWithAuth} from '../../axiosWithAuth';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {addUser} from '../../actions/userActions';
import {signupSchema} from './validation';
import {FormContainer, InputContainer, Label, TextInput, PasswordInput, SubmitButton, InputErrorMessage} from './FormStyles';

const SignUp = (props) => {
    const defaultFormData = {
        email: '',
        // ? location: '',
        password: '',
        first_name: '',
        last_name: '',
        isAdmin:false
    };

    const validateForm = formData => {
        signupSchema.isValid(formData).then(valid => {
            setValid(valid);
        });
    };
    
    const [formData, setFormData] = useState({...defaultFormData});
    const [errors, setErrors] = useState({});
    const [valid, setValid] = useState(validateForm(formData));
    const [users,setUsers]=useState(props.users) //need to pass in user array
    const {push}=useHistory();

    useEffect(() => {
        validateForm(formData);
        // is there an endpoint to get users??
        // axiosWithAuth
        //     .get('/api/register')
        //     .then(res=>console.log(res))
        //     .catch(err=>console.log(err))
    }, [formData]);

    const handleChange = evt => {
        setFormData({...formData, [evt.target.name]: evt.target.value});
    };

    const handleBlur = evt => {
        evt.persist();
        checkField(evt.target.name, evt.target.value);
    };

    const checkField = (name, value) => {
        Yup.reach(signupSchema, name).validate(value)
            .then(() => {
                setErrors({...errors, [name]: ''});
            })
            .catch(err => {
                setErrors({...errors, [name]: err.errors[0]})
            });
    };

    const toggleCheck=(e)=>{
        setFormData({...formData,isAdmin:!formData.isAdmin})
    }

    const handleSubmit = (e) => {
        if (valid) {
            // TODO: submit form data
            e.preventDefault();
            axiosWithAuth()
            .post('/api/register',formData)
            .then(res=>setUsers([...users,res.data]))
                // console.log(res))
            .catch(err=>console.log(err));
            props.addUser(formData);
            alert(`Thanks for joining the Market ${formData.first_name} ${formData.last_name}`);
            // push('/login')
            setFormData({...defaultFormData});
        };
    };

    console.log(props.users)
    return (
        <FormContainer>
            <InputContainer>
                <Label for="email">Email:</Label>
                <TextInput
                    name="email"
                    placeholder="johndoe@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {(errors.email) ?
                    <InputErrorMessage>
                        {errors.email}
                    </InputErrorMessage>
                : null}
            </InputContainer>
            <InputContainer>
                <Label for="password">Password:</Label>
                <PasswordInput
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {(errors.password) ?
                    <InputErrorMessage>
                        {errors.password}
                    </InputErrorMessage>
                : null}
            </InputContainer>
            <InputContainer>
                <Label for="first_name">First Name:</Label>
                <TextInput
                    name="first_name"
                    placeholder="John"
                    value={formData.first_name}
                    onChange={handleChange}
                    // onBlur={handleBlur}
                />
                {(errors.first_name) ?
                    <InputErrorMessage>
                        {errors.first_name}
                    </InputErrorMessage>
                : null}
            </InputContainer>
            <InputContainer>
                <Label for="last_name">Last Name:</Label>
                <TextInput
                    name="last_name"
                    placeholder="Smith"
                    value={formData.last_name}
                    onChange={handleChange}
                    // onBlur={handleBlur}
                />
                {(errors.last_name) ?
                    <InputErrorMessage>
                        {errors.last_name}
                    </InputErrorMessage>
                : null}
            </InputContainer>
            <InputContainer>
                <Label for="isAdmin">Are you an Owner?:</Label>
                <input
                    type="checkbox"
                    name="isAdmin"
                    value={formData.isAdmin}
                    onChange={toggleCheck}
                />
                {/* {(errors.email) ?
                    <InputErrorMessage>
                        {errors.email}
                    </InputErrorMessage>
                : null} */}
            </InputContainer>
            
            <SubmitButton value="Sign Up" disabled={!valid} onClick={handleSubmit} />
        </FormContainer>
    );
};

// export default SignUp;

const mapStateToProps=state=>{
    return{
     users:state.users,
     isAddingUser:state.isAddingUser,
     addUserError:state.addUserError
    //  isFetching:state.isFetching,
    //  fetchingError:state.fetchingError,
    //  products:state.products,
    //  productsError:state.productsError
    }
 }
//  const mapDispatchToProps={
    // getProducts,
    // addProducts
//   }
 export default connect(mapStateToProps,{addUser})(SignUp)
