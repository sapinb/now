import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

/**
Screens

1. Login          /login
2. Sign Up        /signup
3. Walkthrough    /walkthrough (phone only)
4. Home           /
5. Story          /story/:id
5. Story Full     /story/:id
6. Comments - 5   /story/:id/comments
7. Customize - 5  /story/:id
8. Channels       /channels
9. Channel        /channel/:name
10. Overview      /overview
11. Calendar      /calendar
12. Timeline      /timeline
13. Profile       /profile  (desktop - right-sidebar)
14. Settings      /settings (desktop - right-sidebar)
15. Widgets       /
16. Feedback      /feedback
17. Navigation (common)

Other screens
18. Help ?        /help
19. Terms         /terms-and-conditions

*/

import LoginStack from '../screens/LoginStack'

const makeDummyComponent = name => () => <div>{name}</div>

const Navigation = () =>
  <Router>
    <Switch>
      <Route path='/(login|register)' component={LoginStack} />
      <Redirect exact from='/' to='/login' />
      <Route component={makeDummyComponent(404)} />
    </Switch>
  </Router>

export default Navigation
