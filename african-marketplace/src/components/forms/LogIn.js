import React, {useEffect, useState} from 'react';
import * as Yup from 'yup';
import {axiosWithAuth} from '../../axiosWithAuth'
import {loginSchema} from './validation';
import {FormContainer, InputContainer, Label, TextInput, PasswordInput, SubmitButton, InputErrorMessage} from './FormStyles';
import {useHistory} from 'react-router-dom';

const LogIn = () => {
    const defaultFormData = {
        email: '',
        password: ''
    };

    const validateForm = formData => {
        loginSchema.isValid(formData).then(valid => {
            setValid(valid);
            console.log(valid);
        });
    };
    
    const [formData, setFormData] = useState({...defaultFormData});
    const [errors, setErrors] = useState({});
    const [valid, setValid] = useState(validateForm(formData));
    const {push}=useHistory();

    useEffect(() => {
        validateForm(formData);
    }, [formData]);

    const handleChange = evt => {
        setFormData({...formData, [evt.target.name]: evt.target.value});
        // console.log(evt);
    };

    const handleBlur = evt => {
        evt.persist();
        checkField(evt.target.name, evt.target.value);
    };

    const checkField = (name, value) => {
        Yup.reach(loginSchema, name).validate(value)
            .then(() => {
                setErrors({...errors, [name]: ''});
            })
            .catch(err => {
                setErrors({...errors, [name]: err.errors[0]})
            });
    };

    const handleSubmit = (e) => {
        if (valid) {
            // TODO: submit form data            
            e.preventDefault();
            // axios
            axiosWithAuth()
            .post('https://africa-mkplace.herokuapp.com/api/login',formData)
            .then((res)=>{alert(res.data.message);
                localStorage.setItem('token',res.data.token);
                // localStorage.setItem('*',res.data.headers['Access-Control-Allow-Origin']);
                push('/protected/itemsList');
            })
            .catch((err)=>console.log(err));
            setFormData(defaultFormData);

        };
    };
    // console.log(formData)
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
            <SubmitButton value="Log In" disabled={!valid} onClick={handleSubmit} />
        </FormContainer>
    );
};

export default LogIn;
