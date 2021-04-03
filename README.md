# Stylism

> Some styles for your react app

## ⚙️ Install

```bash
npm install --save stylism
// or
yarn add stylism
```

## 🔧 Usage

```jsx
import React, { Component } from 'react'

import { GradientText, ButtonGradient } from 'stylism'

class Example extends Component {
  render() {
    return (
      <div>

        <GradientText
          degree={10} // Optional - default: 45
          startColor="#e2413e" // Required
          endColor="#ffc107" // Required
          hasHover // Optional - default: no hover
          transitionTime={400} // ms - Optional
        >
          Gradient Text with hover
        </GradientText>

        <ButtonGradient
          degree={10} // Optional - default: 45
          startColor="#e2413e" // Required
          endColor="#ffc107" // Required
          hasHover // Optional - default: no hover
          transitionTime={400} // ms - Optional
          style={{ padding: '.5em 1em', borderRadius: '.6rem' }} // Optional
          fontSize="16pt" // Optional
        >
          Gradient Button with hover
        </ButtonGradient>

        <ButtonGradient
          startColor="#e2413e"
          endColor="#ffc107"
          hasHover
          transitionTime={100}
          style={{ padding: '.5em 1em', borderRadius: '.6rem' }}
          fontSize="16pt"
          id="tooltip-testing"
        >
          Gradient Button + Tooltip
          <Tooltip
            text="Hello, World!"
            parentId="tooltip-testing"
            fontSize="0.85em"
            transitionTime={100}
            position="top"
            backColor="#fff"
            textColor="#3d3d3d"
            hasShadow
          />
        </ButtonGradient>

      </div>
    )
  }
}
```

## ✏️ To-do
- [x] Tooltip
- [ ] Animate Box
- [ ] Filter Images

## 👥 Contribute
1. Fork then Clone your repo
2. cd to root dir and `yarn start`
3. change `example/` files and `yarn start` to see your changes
