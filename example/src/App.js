import React from 'react'

import { GradientText, ButtonGradient, Tooltip } from 'stylism'

const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
      <h1>
        <GradientText
          degree={10}
          startColor="#e2413e"
          endColor="#ffc107"
          hasHover
          transitionTime={400} // ms
        >
          Gradient Text with hover
        </GradientText>
      </h1>
      <h1>
        <GradientText
          degree={10}
          startColor="#e2413e"
          endColor="#ffc107"
          id="tooltip-testing-2"
        >
          Gradient Text without hover + tooltip
          <Tooltip
            text="blah blah blah"
            parentId="tooltip-testing-2"
            fontSize="0.5em"
            transitionTime={300}
            position="bottom"
            backColor="rgba(0, 0, 0, .3)"
            textColor="#fff"
          />
        </GradientText>
      </h1>
      {/* <hr style={{ width: '100%' }} /> */}
      <h1>
        <ButtonGradient
          degree={10}
          startColor="#e2413e"
          endColor="#ffc107"
          hasHover
          transitionTime={400} // ms
          style={{ padding: '0.5em 1em', borderRadius: '.6rem' }}
          fontSize="16pt"
          id="tooltip-testing"
        >
          Gradient Button with hover + tooltip
          <Tooltip
            text="blah blah blah"
            parentId="tooltip-testing"
            fontSize="0.85em"
            transitionTime={300}
            position="top"
            backColor="rgba(0, 0, 0, .3)"
            textColor="#fff"
          />
        </ButtonGradient>
      </h1>
      <h1>
        <ButtonGradient
          degree={10}
          startColor="#e2413e"
          endColor="#ffc107"
          style={{ padding: '0.5em 1em', borderRadius: '.6rem' }}
          fontSize={'16pt'}
        >
          Gradient Button without hover
        </ButtonGradient>
      </h1>
    </div>
  )
}

export default App
