import React from 'react'
import styled from 'styled-components'
import { withProps } from 'recompose'

import { PasswordIcon, UsernameIcon } from '../assets/icons'
import { RoundedButton } from '../components/RoundedButton'
import { RoundedInput } from '../components/RoundedInput'
import { Link } from '../components/Link'

import images from '../assets/images'
import colors from '../constants/colors'
import { media } from '../utils/style-utils'

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%; max-width: 360px;
  height: 100vh; min-height: 540px; max-height: 640px;

  align-items: center;
  justify-content: flex-end;
  padding: 20px;

  z-index: 1;
`

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0;
  justify-content: center;
`

const Logo = styled.img.attrs({
  src: images.logoWave()
})`
  width: 100px;
  height: 100px;
`

const GetStartedButton = RoundedButton.extend.attrs({
  children: 'Get Started'
})`
  background-color: ${colors.orange};
  color: ${colors.white};
`

const UsernameInput = withProps({
  Icon: UsernameIcon,
  placeholder: 'Username',
})(RoundedInput)

const PasswordInput = withProps({
  Icon: PasswordIcon,
  placeholder: 'Password',
  type: 'password'
})(RoundedInput)

const BottomContainer = styled.div`
  width: 100%;
  padding-top: 20px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`

const BottomLink = styled(Link)`
  color: ${colors.white};
  font-size: 12px;
  text-decoration: none;
`

const SpacerAboveMobile = styled.div`
  height: 0;
  transition: height 0.5s;
  ${media.forTabletUp`
    height: 20px;
  `}
`

class LoginScreen extends React.Component {
  render () {
    return (
      <LoginContainer>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <UsernameInput />
        <PasswordInput />
        <SpacerAboveMobile />
        <GetStartedButton to='/news' />
        <BottomContainer>
          <BottomLink to='/register'>Create Account</BottomLink>
          <BottomLink to='/help'>Need Help?</BottomLink>
        </BottomContainer>
      </LoginContainer>
    )
  }
}

export default LoginScreen
