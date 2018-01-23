import React from 'react'
import styled from 'styled-components'

import colors from '../constants/colors'

export const RIGHT_DRAWER_WIDTH_PX = 450

const DrawerContainer = styled.div`
  position: absolute; right: 0; top: 0; bottom: 0;
  width: ${RIGHT_DRAWER_WIDTH_PX}px;
  display: flex;
  flex-direction: column;
  transform: translate3d(${props => props.show ? 0 : RIGHT_DRAWER_WIDTH_PX}px, 0, 0);

  transition: transform 0.3s ease-in-out;

  background-color: ${colors.orange};
`

export const RightDrawer = ({ show }) =>
  <DrawerContainer show={show}>
    <div />
  </DrawerContainer>
