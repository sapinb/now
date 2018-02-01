import React from 'react'
import styled from 'styled-components'

import { Link } from './Link'
import { HEADER_HEIGHT_PX } from './Header'

import images from '../assets/images'

import {
  CloseIcon,
  NewsIcon,
  ChannelsIcon,
  BookmarksIcon,
  OverviewIcon,
  CalendarIcon,
  TimelineIcon,
  ProfileIcon,
  WidgetsIcon,
  SettingsIcon,
  ContactUsIcon,
  TermsIcon,
} from '../assets/icons'

import colors from '../constants/colors'
import { media } from '../utils/style-utils'
import { noop } from '../utils/functions'

export const DRAWER_WIDTH_PX = 300

const DRAWER_ITEM_HEIGHT_PX = 44

const CloseLinkContainer = styled(Link)`
  height: ${HEADER_HEIGHT_PX}px;
  width: ${HEADER_HEIGHT_PX}px;
  display: none;
  justify-content: center;
  align-items: center;
  margin: 0 10px;

  ${media.forDesktopUp`
    display: flex;
  `}
`

const DrawerContainer = styled.div`
  position: fixed; left: 0; top: 0; bottom: 0;
  width: ${DRAWER_WIDTH_PX}px;
  display: flex;
  flex-direction: column;
  transform: translate3d(${props => props.show ? 0 : -DRAWER_WIDTH_PX}px, 0, 0);

  transition: transform 0.3s ease-in-out;

  background: linear-gradient(0deg, #2F2A24, #F49373);
`

const ScrollableContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;

  position: relative;
`

const DrawerItemContainer = styled(Link)`
  height: ${DRAWER_ITEM_HEIGHT_PX}px;
  width: 100%;
  flex-shrink: 0;
  display: flex;
  &:hover {
    background: ${colors.orange};
  }
`

const DrawerItemIconContainer = styled.div`
  height: ${DRAWER_ITEM_HEIGHT_PX}px;
  width: ${DRAWER_ITEM_HEIGHT_PX}px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
`

const DrawerItemTitle = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: ${colors.white};
  font-weight: bold;
  font-size: 14px;
`

const DrawerItem = ({ Icon, title, to }) =>
  <DrawerItemContainer to={to}>
    <DrawerItemIconContainer>
      <Icon />
    </DrawerItemIconContainer>
    <DrawerItemTitle>
      {title}
    </DrawerItemTitle>
  </DrawerItemContainer>

const UpperSpacer = styled.div`
  height: 20px;
  flex-shrink: 0;
`

const LowerSpacer = styled.div`
  flex: 1;
`

const Divider = styled.div`
  height: 0px;
  border-top: 1px solid ${colors.white};
  opacity: 0.5;
  margin: 10px 20px;
`

const LogoutContainer = styled.div`
  height: 80px;
  border-top: 1px solid rgba(255,255,255, 0.5);
  margin: 0 20px;
  flex-shrink: 0;

  display: flex;
  flex-direction: row;
  align-items: center;
`

const LogoutTextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const LogoutLink = styled(Link)`
  font-size: 14;
  font-weight: bold;
  color: white;
`

const LogoutName = styled.div`
  font-size: 10;
  color: white
`

const LogoutProfileImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${props => props.source ? `url(${props.source})` : 'white'};
  background-position: center;
  background-size: cover;
`

const LogoutItem = ({ profileImage }) =>
  <LogoutContainer>
    <LogoutTextContainer>
      <LogoutLink to='/'>LOG OUT</LogoutLink>
      <LogoutName>Thomas Schnider</LogoutName>
    </LogoutTextContainer>
    <LogoutProfileImage source={profileImage} />
  </LogoutContainer>

export const Drawer = ({ show, onClickClose = noop }) =>
  <DrawerContainer show={show}>
    <CloseLinkContainer>
      <CloseIcon onClick={onClickClose} />
    </CloseLinkContainer>
    <ScrollableContainer>
      <UpperSpacer />
      <DrawerItem Icon={NewsIcon} title='news' to='/news' />
      <DrawerItem Icon={ChannelsIcon} title='channels' to='/channels' />
      <DrawerItem Icon={BookmarksIcon} title='bookmarks' />
      <DrawerItem Icon={OverviewIcon} title='overview' />
      <DrawerItem Icon={CalendarIcon} title='calendar' />
      <DrawerItem Icon={TimelineIcon} title='timeline' />
      <DrawerItem Icon={ProfileIcon} title='profile' />
      <DrawerItem Icon={WidgetsIcon} title='widgets' />
      <DrawerItem Icon={SettingsIcon} title='settings' />
      <Divider />
      <DrawerItem Icon={ContactUsIcon} title='contact us' />
      <DrawerItem Icon={TermsIcon} title='terms' />

      <LowerSpacer />

      <LogoutItem profileImage={images.profile()} />
    </ScrollableContainer>
  </DrawerContainer>
