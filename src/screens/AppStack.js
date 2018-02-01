import React from 'react'
import styled from 'styled-components'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Header } from '../components/Header'
import { Drawer, DRAWER_WIDTH_PX } from '../components/Drawer'
import { RightDrawer, RIGHT_DRAWER_WIDTH_PX } from '../components/RightDrawer'
import colors from '../constants/colors'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`

// div pushed by left drawer
const InnerContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;

  position: relative;

  transform: translate3d(${props => props.showDrawer ? DRAWER_WIDTH_PX : 0}px, 0, 0);

  transition: transform 0.3s ease-in-out;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`

// div pushed by right drawer
const ContentContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;

  transform: translate3d(${props => props.showRightDrawer ? -RIGHT_DRAWER_WIDTH_PX : 0}px, 0, 0);

  transition: transform 0.3s ease-in-out;
`

// Cause I need another wrapper just for a full screen dark overlay over contents when drawer is open
const OverlayContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;  

  &:after {
    content: '';
    position: absolute;
    top: 0; bottom: 0; left: 0; right: 0;
    background: ${colors.black};
    opacity: ${props => props.showOverlay ? 0.6 : 0};
    visibility: ${props => props.showOverlay ? 'visible' : 'hidden'};
    transition: opacity 0.3s linear, visibility 0s ${props => props.showOverlay ? 0 : 0.3}s;
    z-index: 1;
  }

  &::-webkit-scrollbar {
    width: 2px;
    background: transparent;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${colors.orange};
  }
`

const DrawerOpenOverlay = styled.div`
  position: absolute;
  top: 0; bottom: 0; left: 0; right: 0;
  background: ${colors.black};
  opacity: ${props => props.showOverlay ? 0.6 : 0};
  visibility: ${props => props.showOverlay ? 'visible' : 'hidden'};
  transition: opacity 0.3s linear, visibility 0s ${props => props.showOverlay ? 0 : 0.3}s;

  z-index: 1;
`

class AppStack extends React.Component {
  state = {
    showHeader: true,
    showDrawer: false,
    showRightDrawer: false,
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
    this.hideDrawers()
  }

  showDrawer = (showDrawer = true) => this.setState({ showDrawer })
  showRightDrawer = (showRightDrawer = true) => this.setState({ showRightDrawer })

  toggleDrawer = () => this.showDrawer(!this.state.showDrawer)
  toggleRightDrawer = () => this.showRightDrawer(!this.state.showRightDrawer)

  hideDrawers = () => this.setState({ showDrawer: false, showRightDrawer: false })

  render () {
    const {
      showHeader,
      showDrawer,
      showRightDrawer,
    } = this.state

    return (
      <Container>
        <Drawer show={showDrawer} onClickClose={this.toggleDrawer} />
        <InnerContainer showDrawer={showDrawer} showRightDrawer={showRightDrawer}>
          <Header hidden={!showHeader} onClickMenu={this.toggleDrawer} onClickClose={this.toggleRightDrawer} />
          <RightDrawer show={showRightDrawer} />
          <ContentContainer showRightDrawer={showRightDrawer}>
            <OverlayContainer>
              <Switch>
                <Route path='/news' component={require('./HomeScreen').default} />
                <Route path='/channels' component={require('./ChannelsScreen').default} />
              </Switch>
            </OverlayContainer>
            <DrawerOpenOverlay showOverlay={showDrawer || showRightDrawer} onClick={this.hideDrawers} />
          </ContentContainer>
        </InnerContainer>
      </Container>
    )
  }
}

export default AppStack
