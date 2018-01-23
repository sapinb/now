import React, { Component } from 'react'
import { injectGlobal } from 'styled-components'

import Navigation from './navigation'

injectGlobal`
  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`

class App extends Component {
  render () {
    return (
      <Navigation />
    )
  }
}

export default App
