import styled from 'styled-components';

import errorIcon from '../../images/error_icon.svg';

export const FormContainer = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    margin-top: 10px;
    padding: 15px;
    border: 2px groove lightblue;
    border-radius: 8px;
    background-color: cornsilk;
    min-width: 250px;
`;

export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 5px;
`;

export const TextInput = props => {
    let defaultStyle;

    const focused = evt => {
        defaultStyle = {...evt.target.style};
        evt.target.style['border-bottom'] = '3px solid blue';
    };
    const blurred = evt => {
        evt.target.style = defaultStyle;
    };

    return (
        <StyledTextInput type="text" onFocus={focused} onBlur={blurred} {...props} />
    );
};

export const PasswordInput = props => {
    let defaultStyle;

    const focused = evt => {
        defaultStyle = {...evt.target.style};
        evt.target.style['border-bottom'] = '3px solid blue';
    };
    const blurred = evt => {
        evt.target.style = defaultStyle;
    };

    return (
        <StyledTextInput type="password" onFocus={focused} onBlur={blurred} {...props} />
    );
};

export const SubmitButton = props => {
    let defaultStyle;

    const mouseEnter = evt => {
        defaultStyle = {...evt.target.style};
        evt.target.style['background-color'] = 'blue';
    };
    const mouseLeave = evt => {
        evt.target.style = defaultStyle;
    };
    
    return (
        <Button type="button" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} {...props}>{props.value}</Button>
    );
};

export const InputErrorMessage = ({children}) => {
    return (
        <InputErrorMessageStyled>
            <ErrorIcon src={errorIcon} alt="error" /> {children}
        </InputErrorMessageStyled>
    );
};

export const Label = styled.label`
    margin-right: 10px;
`;

const StyledTextInput = styled.input`
    background-color: inherit;
    outline: none;
    border: none;
    border-bottom: 2px solid steelblue;
    margin-bottom: 0;
    flex-grow: 1;
    text-align: center;
`;

const Button = styled.button`
    border: none;
    border-radius: 5px;
    background-color: ${props => (props.disabled) ? 'lightgrey' : 'steelblue'};
    color: ${props => (props.disabled) ? 'grey' : 'white'};
    padding: 5px 15px;
    cursor: ${props => (props.disabled) ? 'default' : 'pointer'};
`;

const InputErrorMessageStyled = styled.div`
    width: 100%;
`;

const ErrorIcon = styled.img`
    width: 15px;
`;
