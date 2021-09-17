import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    
    margin-bottom:1.5rem;
    height:3rem;
    font-size:1.5rem;
    
   

`
const Label = styled.label`
    text-align:left;
    color:white;
`
export default function Login(){

    return(
        <>
            <Label>Login</Label>
            <Input type="text" />
            <Label>Password</Label>
            <Input type="text" />

        </>
    )

}