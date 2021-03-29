import React from 'react'
// import styles from './styles.module.css'
import styled from 'styled-components'
import { logError } from '../utils'

const GradientText = (props) => {
  const {
    children,
    degree = 45,
    startColor,
    endColor,
    hasHover,
    transitionTime,
    fontSize,
    id
  } = props

  if (!startColor || !endColor)
    logError(`'startColor' or 'endColor' cannot be empty!`)

  const hoverStyles = `
    background-position: left;
    background-size: 200%;
    :hover {
      background-position: right;
    }
  `

  const transitionStyles = (time) => `
    transition: all ${time}ms ease;
  `

  const MyStyle = styled.span`
    color: transparent;
    font-size: ${fontSize || ''};
    background-image: linear-gradient(${degree}deg, ${startColor}, ${endColor});
    background-clip: text;
    background-position: center;
    background-size: 100%;
    ${hasHover ? hoverStyles : ''}
    ${transitionTime ? transitionStyles(transitionTime) : ''}
  `

  return <MyStyle id={id || ''}>{children}</MyStyle>
}

export default GradientText
