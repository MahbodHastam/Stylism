import React from 'react'
import styled from 'styled-components'
import { logError } from '../utils'

const ButtonGradient = (props) => {
  const {
    children,
    degree = 45,
    textColor = '#fff',
    startColor,
    endColor,
    hasHover,
    transitionTime,
    fontSize,
    style,
    id
  } = props

  if (!startColor || !endColor)
    logError(`'startColor' or 'endColor' cannot be empty!`)

  const hoverStyles = `
    background-position: left;
    background-size: 200%;
    :hover, :focus {
      background-position: right;
    }
  `

  const transitionStyles = (time) => `
    transition: all ${time}ms ease;
  `

  const MyStyle = styled.button`
    color: ${textColor};
    outline: 0 !important;
    border: 0 !important;
    cursor: pointer;
    font-size: ${fontSize || '1em'};
    background-image: linear-gradient(${degree}deg, ${startColor}, ${endColor});
    background-position: center;
    background-size: 100%;
    ${hasHover ? hoverStyles : ''}
    ${transitionTime ? transitionStyles(transitionTime) : ''}
    ${style || ''}
  `

  return <MyStyle id={id || ''}>{children}</MyStyle>
}

export default ButtonGradient
