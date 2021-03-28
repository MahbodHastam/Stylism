import React from 'react'

import { GradientText, ButtonGradient } from 'stylism'

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
        >
          Gradient Text without hover
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
          fontSize={'16pt'}
        >
          Gradient Button with hover
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
