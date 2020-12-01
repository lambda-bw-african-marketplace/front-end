import * as Yup from 'yup';

export const signupSchema = Yup.object().shape({
    email: Yup
        .string()
        .email('Please enter a valid email address.')
        .required('You must enter your email address.'),
    password: Yup
        .string()
        .min(6, 'Your password must be at least 6 characters long.')
        .required('You must enter a valid password.'),
    // passwordConfirm: Yup
    //     .string()
    //     .equals([Yup.ref('password')], 'Your password and confirmation do not match.')
    //     .required('You must confirm your password.')
    first_name: Yup
    .string()
    .required('You must enter your first name.'),
    last_name: Yup
    .string()
    .required('You must enter your last name.'),
    isAdmin: Yup
    .boolean()
});

export const loginSchema = Yup.object().shape({
    email: Yup
        .string()
        .email('Not a valid email address.')
        .required('Please enter your email address.'),
    password: Yup
        .string()
        .required('Please enter your password.')
});
