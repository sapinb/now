import React from 'react'
import styled from 'styled-components'
import { Switch, Route, Redirect } from 'react-router-dom'

import { LoginHeader as Header } from '../components/Header'

import colors from '../constants/colors'
import images from '../assets/images'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  min-width: 360px;

  display: flex;
  justify-content: center;
  align-items: center;
`

const Background = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;

  width: 100vw;
  height: 100vh;

  min-width: 360px;

  background-image: url(${images.lighthouse()});
  background-size: cover;
  background-position: center;
  filter: blur(${props => props.blur ? 20 : 0}px);
  transform: scale(${props => props.blur ? 1.25 : 1.1});
  transition: filter 0.5s linear, transform 0.5s;

  &:after {
    content: '';
    position: fixed;
    top: 0; bottom: 0; left: 0; right: 0;
    background: linear-gradient(180deg, ${colors.orange}, ${colors.orange} 25%, ${colors.black} 75%, ${colors.black});
    opacity: 0.5;
  }
`

class LoginStack extends React.Component {
  state = {
    blur: false,
    showHeader: true,
  }

  componentWillMount () {
    const { location: { pathname } } = this.props

    this.handlePathBasedActions(pathname)
  }

  componentWillReceiveProps (nextProps) {
    const { location: { pathname: nextPathname } } = nextProps
    const { location: { pathname } } = this.props

    if (nextPathname !== pathname) {
      this.handlePathBasedActions(nextPathname)
    }
  }

  handlePathBasedActions (pathname) {
    if (pathname === '/register') {
      this.setState({ blur: true, showHeader: true })
    } else if (pathname === '/login') {
      this.setState({ blur: false, showHeader: false })
    }
  }

  handleClickClose = () => {
    const { history } = this.props

    history.goBack()
  }

  render () {
    const { blur, showHeader } = this.state
    return (
      <Container>
        <Background blur={blur} />
        <Header hidden={!showHeader} onClickClose={this.handleClickClose} />
        <Switch>
          <Route path='/login' component={require('./LoginScreen').default} />
          <Route path='/register' component={require('./RegisterScreen').default} />
          <Redirect to='/login' />
        </Switch>
      </Container>
    )
  }
}

export default LoginStack
