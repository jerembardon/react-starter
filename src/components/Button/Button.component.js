import React, { Component } from 'react';
import styled from 'styled-components'

const ButtonStyle = styled.button`
    background-color: ${props => props.theme.colors};
`

export const Button = (props) => (
    <ButtonStyle> {props.children} </ButtonStyle>
)

export default Button;