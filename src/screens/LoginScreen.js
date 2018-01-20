import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
import { withProps } from 'recompose'

import { PasswordIcon, UsernameIcon } from '../assets/icons'

import images from '../assets/images'
import colors from '../constants/colors'
import { media } from '../utils/style-utils'

injectGlobal`
  *, *::after, *::before {
    box-sizing: border-box;
  }
`

const Link = ({ to = null, ...props }) =>
  to
    ? <RouterLink to={to} {...props} />
    : <NoLink {...props} />

const NoLink = styled.span`
  cursor: pointer;
`

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
  filter: blur(${props => props.blur || 0}px);
  transform: scale(1.1);
  transition: 1s filter;

  &:after {
    content: '';
    position: fixed;
    top: 0; bottom: 0; left: 0; right: 0;
    background: linear-gradient(180deg, ${colors.orange}, ${colors.orange} 50%, ${colors.black});
    opacity: 0.5;
  }
`
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

const RoundedButton = styled(Link)`
  height: 54px;
  width: 100%;
  border-radius: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`

const GetStartedButton = RoundedButton.extend.attrs({
  children: 'Get Started'
})`
  background-color: ${colors.orange};
  color: ${colors.white};
`

const InputContainer = styled.div`
  height: 54px;
  border-radius: 27px;
  width: 100%;
  background-color: rgba(255,255,255, 0.25);
  margin-bottom: 20px;
  display: flex;
`

const InputIconContainer = styled.div`
  width: 54px;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Input = styled.input`
  outline: none;
  border: none;
  flex: 1;
  color: ${colors.white};
  background: transparent;
  padding: 0 20px 0 0;

  &::placeholder {
    color: ${colors.white};
  }
`

const RoundedInput = ({ Icon, placeholder, type = 'input' }) =>
  <InputContainer>
    <InputIconContainer>
      <Icon />
    </InputIconContainer>
    <Input placeholder={placeholder} type={type} />
  </InputContainer>

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
  ${media.forTabletProtraitUp`
    height: 20px;
  `}
`

class LoginScreen extends React.Component {
  state = {
    blur: false,
  }

  toggleBlur = () => this.setState({ blur: !this.state.blur })

  render () {
    const { blur } = this.state

    return (
      <Container>
        <Background blur={blur && 10} />
        <LoginContainer>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <UsernameInput />
          <PasswordInput />
          <SpacerAboveMobile />
          <GetStartedButton onClick={this.toggleBlur} />
          <BottomContainer>
            <BottomLink to='/signup'>Create Account</BottomLink>
            <BottomLink to='/help'>Need Help?</BottomLink>
          </BottomContainer>
        </LoginContainer>
      </Container>
    )
  }
}

export default LoginScreen
