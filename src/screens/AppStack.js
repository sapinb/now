import React from 'react'
import styled from 'styled-components'

import { Header } from '../components/Header'
import { Drawer, DRAWER_WIDTH_PX } from '../components/Drawer'
import { RightDrawer, RIGHT_DRAWER_WIDTH_PX } from '../components/RightDrawer'
import colors from '../constants/colors';

const Container = styled.div`
  width: 100vw;
`

// div pushed by left drawer
const InnerContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;

  transform: translate3d(${props => props.showDrawer ? DRAWER_WIDTH_PX : 0}px, 0, 0);

  transition: transform 0.3s ease-in-out;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`

// div pushed by right drawer
const ContentContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;

  transform: translate3d(${props => props.showRightDrawer ? -RIGHT_DRAWER_WIDTH_PX : 0}px, 0, 0);

  transition: transform 0.3s ease-in-out;
`

const DrawerOpenOverlay = styled.div`
  position: absolute;
  top: 0; bottom: 0; left: 0; right: 0;
  background: ${colors.black};
  opacity: ${props => props.hide ? 0 : 0.5};
  visibility: ${props => props.hide ? 'hidden' : 'visible'};

  z-index: 1;
  transition: opacity 0.3s linear;
`

class AppStack extends React.Component {
  state = {
    showHeader: true,
    showDrawer: false,
    showRightDrawer: false,
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
        <Drawer show={showDrawer} />
        <InnerContainer showDrawer={showDrawer} showRightDrawer={showRightDrawer}>
          <Header hidden={!showHeader} onClickMenu={this.toggleDrawer} />
          <RightDrawer show={showRightDrawer} />
          <ContentContainer showRightDrawer={showRightDrawer}>
            <DrawerOpenOverlay hide={!(showDrawer || showRightDrawer)} onClick={this.hideDrawers} />
          </ContentContainer>
        </InnerContainer>
      </Container>
    )
  }
}

export default AppStack
