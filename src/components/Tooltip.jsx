import React from 'react'
import styled from 'styled-components'
import { logError } from '../utils'

const Tooltip = (props) => {
  const {
    text,
    position = 'top', // top / bottom
    textColor = '#fff',
    backColor = 'rgba(0, 0, 0, .5)',
    parentId = null,
    transitionTime = 50,
    fontSize = '0.75em',
    hasShadow = true
  } = props

  if (!text) logError(`'text' cannot be empty!`)

  const transitionStyles = (time) => `
    transition: all ${time}ms ease;
  `

  const Styles = styled.span`
    color: ${textColor};
    background-color: ${backColor};
    padding: 4px 8px;
    border-radius: 0.3rem;
    font-size: ${fontSize};
    position: absolute;
    ${position}: -20px;
    opacity: 0;
    visibility: hidden;
    width: auto;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
    ${transitionTime ? transitionStyles(transitionTime) : ''}
    ${hasShadow ? `box-shadow: 0 6px 16px rgba(0, 0, 0, .211);` : ``}
    white-space: nowrap;
  `

  const styleElement = document.createElement('style')
  styleElement.innerHTML = `
    #${parentId} {
      position: relative;
    }
    #${parentId}:hover > span {
      opacity: 1;
      visibility: visible;
      ${position}: -80%;
    }
  `
  document.querySelector('head').append(styleElement)

  console.log(text, position, textColor, backColor)
  return <Styles>{text}</Styles>
}

export default Tooltip
