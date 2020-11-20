import React, {useEffect, useState} from 'react';
import * as Yup from 'yup';

import {signupSchema} from './validation';
import {FormContainer, InputContainer, Label, TextInput, PasswordInput, SubmitButton, InputErrorMessage} from './FormStyles';

const SignUp = () => {
    const defaultFormData = {
        email: '',
        // ? location: '',
        password: '',
        passwordConfirm: ''
    };

    const validateForm = formData => {
        signupSchema.isValid(formData).then(valid => {
            setValid(valid);
        });
    };
    
    const [formData, setFormData] = useState({...defaultFormData});
    const [errors, setErrors] = useState({});
    const [valid, setValid] = useState(validateForm(formData));

    useEffect(() => {
        validateForm(formData);
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

    const handleSubmit = () => {
        if (valid) {
            // TODO: submit form data
            setFormData({...defaultFormData});
        };
    };

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
                <Label for="passwordConfirm">Confirm Password:</Label>
                <PasswordInput
                    name="passwordConfirm"
                    value={formData.passwordConfirm}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {(errors.passwordConfirm) ?
                    <InputErrorMessage>
                        {errors.passwordConfirm}
                    </InputErrorMessage>
                : null}
            </InputContainer>
            <SubmitButton value="Sign Up" disabled={!valid} onClick={handleSubmit} />
        </FormContainer>
    );
};

export default SignUp;
