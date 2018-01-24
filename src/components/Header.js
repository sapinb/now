import React from 'react'
import styled from 'styled-components'
import { withProps } from 'recompose'

import { Link } from './Link'

import { noop } from '../utils/functions'
import { media } from '../utils/style-utils'

import { MenuIcon, CloseIcon } from '../assets/icons'
import images from '../assets/images'
import colors from '../constants/colors'

export const HEADER_HEIGHT_PX = 56

const HeaderContainer = styled.div`
  position: absolute; top: 0; left: 0; right: 0;
  height: ${HEADER_HEIGHT_PX}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.orange};

  box-shadow: ${props => props.hidden ? 'none' : '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'};
  z-index: 2;

  transform: translate3d(0, ${props => props.hidden ? -HEADER_HEIGHT_PX : 0}px, 0);

  transition: transform 0.3s ease-in-out;
`

const LogoContainer = styled.div`
  position: absolute; top: 0; left: 0; right: 0; bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Logo = styled.img.attrs({
  src: images.logo(),
})`
  height: ${HEADER_HEIGHT_PX * 0.5}px;
  width: ${HEADER_HEIGHT_PX * 0.5}px;
`

const IconsContainerLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  z-index: 1;
`

const IconsContainerRight = IconsContainerLeft.extend`
  justify-content: flex-end;
`

const IconLinkContainer = styled(Link)`
  height: ${HEADER_HEIGHT_PX}px;
  width: ${HEADER_HEIGHT_PX}px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const IconLink = ({ Icon, ...props }) =>
  <IconLinkContainer {...props}>
    <Icon />
  </IconLinkContainer>

const MenuIconLink = withProps({ Icon: MenuIcon })(IconLink)

const CloseLinkComponent = styled(Link)`
  height: ${HEADER_HEIGHT_PX}px;
  display: flex;
  align-items: center;
`

const CloseLinkText = styled.span`
  color: ${colors.white};
  font-size: 0.6rem;
  font-weight: bold;
  display: none;

  ${media.forDesktopUp`
    display: inline;
  `}
`

const CloseLink = ({ ...props }) =>
  <CloseLinkComponent {...props}>
    <CloseLinkText>CANCEL</CloseLinkText>
    <CloseIcon />
  </CloseLinkComponent>

export const Header = ({ hidden, onClickMenu = noop, onClickClose = noop }) =>
  <HeaderContainer hidden={hidden}>
    <LogoContainer>
      <Logo />
    </LogoContainer>

    <IconsContainerLeft>
      <MenuIconLink onClick={onClickMenu} />
    </IconsContainerLeft>

    <IconsContainerRight>
      <CloseLink onClick={onClickClose} />
    </IconsContainerRight>
  </HeaderContainer>

const LoginHeaderContainer = HeaderContainer.extend`
  ${media.forPhoneOnly`
    display: none;
  `}
`

export const LoginHeader = ({ hidden, onClickClose = noop }) =>
  <LoginHeaderContainer hidden={hidden}>
    <LogoContainer>
      <Logo />
    </LogoContainer>

    <IconsContainerLeft />

    <IconsContainerRight>
      <CloseLink onClick={onClickClose} />
    </IconsContainerRight>
  </LoginHeaderContainer>
