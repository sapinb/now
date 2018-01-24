import React, { Component } from 'react'
import { injectGlobal } from 'styled-components'

import fonts, { loadFonts } from './assets/fonts'

import Navigation from './navigation'

injectGlobal`
  *, *::after, *::before {
    box-sizing: border-box;
  }

  html, body {
    overflow-x: hidden;
    overflow-y: auto;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${fonts.MontserratRegular};
  }
`

loadFonts()

class App extends Component {
  render () {
    return (
      <Navigation />
    )
  }
}

export default App
