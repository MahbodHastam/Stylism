import React from 'react'

import { GradientText } from 'stylism'

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
      <hr style={{ width: '100%' }} />
    </div>
  )
}

export default App
