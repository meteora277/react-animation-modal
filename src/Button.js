import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    font-family: 'Montserrat', sans-serif;
    display:inline-block;
    border:none;
    border-radius: 0.5rem;

    ${props => props.Height && `height:${props.height};`}
    ${props => props.Width && `width:${props.width};`}
    ${props => props.background && `background-color:${props.background};`}
`
StyledButton.defaultProps = {
    height: "3rem",
    width: "5rem",
    background: "#ff9933"
}

function Button(props){

    return(
        <>
            <StyledButton Height="100px" Width="100px" onClick={props.handleClick}>
                {props.text}
            </StyledButton> 
        </>
    )
}

Button.defaultProps = {
    text:"Login",
}

export default Button