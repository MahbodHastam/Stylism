# Stylism

> Some styles for your react app

## Install

```bash
npm install --save stylism
// or
yarn add stylism
```

## Usage

```jsx
import React, { Component } from 'react'

import { GradientText, ButtonGradient } from 'stylism'

class Example extends Component {
  render() {
    return (
      <div>

        <GradientText
          degree={10} // Optional - default: 45
          startColor="#e2413e"
          endColor="#ffc107"
          hasHover // Optional - default: no hover
          transitionTime={400} // ms - Optional
        >
          Gradient Text with hover
        </GradientText>

        <ButtonGradient
          degree={10} // Optional - default: 45
          startColor="#e2413e"
          endColor="#ffc107"
          hasHover // Optional - default: no hover
          transitionTime={400} // ms - Optional
          style={{ padding: '0.5em 1em', borderRadius: '.6rem' }} // Optional
          fontSize={'16pt'} // Optional
        >
          Gradient Button with hover
        </ButtonGradient>

      </div>
    )
  }
}
```
