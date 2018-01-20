import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

/**
Screens

1. Login
2. Sign Up
3. Walkthrough
4. Home
5. Story
5. Story Full
6. Comments - 5
7. Customize - 5
8. Channels
9. Channel
10. Overview
11. Calendar
12. Timeline
13. Profile
14. Settings
15. Widgets
16. Feedback
17. Navigation (common)

*/

import LoginScreen from '../screens/LoginScreen'

const makeDummyComponent = name => () => <div>{name}</div>

const Navigation = () =>
  <Router>
    <Switch>
      <Route path='/login' component={LoginScreen} />
      <Route path='/signup' component={makeDummyComponent('Signup')} />
      <Redirect exact from='/' to='/login' />
      <Route component={makeDummyComponent(404)} />
    </Switch>
  </Router>

export default Navigation
