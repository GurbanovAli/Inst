import React, { useState } from "react";

import styled from 'styled-components'

const Auth = ({data, setAuth}:any) => {
    const initialFormState = {
        'login': '',
        'password': '',
    };

    const [values, setValues] = useState(initialFormState);

    const handleChange = (event: any): any => {
        const { name, value } = event.target as any;

        setValues({ ...values, [name]: value })
    };
    console.log(true);
    
    
    const handleSubmit = (event) => {
        event.preventDefault();

        if(data.login === values.login && data.password === values.password){
            setAuth(true);
        }
    };
    
    return (
        <StyledContainer>
            <StyledForm onSubmit={handleSubmit}>
                <StyledLabel>Login:</StyledLabel>
                <StyledInput type="text" name='login' onChange={handleChange} />
                <StyledLabel>Password:</StyledLabel>
                <StyledInput type="password" name='password' onChange={handleChange} />
                <StyledBtn type="submit">Submit</StyledBtn>
            </StyledForm>
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    width: 100vw;
    height: 100vh;
    font-family: 'Open Sans', sans-serif;
    background: #3498db; 
    padding: 10em 0;
`

const StyledForm = styled.form`
    width: 300px;
    border-radius: 6px;
    margin: auto;
    text-align: center;
    padding: 10px 0px ;
    background: #fff;
    border: #2980b9 4px solid; 
`

const StyledInput = styled.input`
    width: 250px;
    background: #ecf0f1;
    border: #ccc 1px solid;
    border-bottom: #ccc 2px solid;
    padding: 8px;
    color: #aaa;
    margin: 5px 0 10px;
    font-size: 1em;
    border-radius: 4px;
`

const StyledLabel = styled.label`
    color: #525252;
    font-weight: 600;
`

const StyledBtn = styled.button`
    width:250px; 
    padding: 5px 0;
    background: #3498db;
    color: #fff;
    border-radius: 4px;
    border: #2980b9 1px solid;
    margin: 2em auto;
    font-weight: 800;
    font-size: 0.8em;
    cursor: pointer;
    &:hover {
        background:#3594D2; 
    }
`

export default Auth
