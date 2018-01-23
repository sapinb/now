import React from 'react'
import styled from 'styled-components'
import { withProps } from 'recompose'

import { RoundedButton } from '../components/RoundedButton'
import { RoundedInput } from '../components/RoundedInput'
import { Link } from '../components/Link'

import { PasswordIcon, UsernameIcon, EmailIcon } from '../assets/icons'
import colors from '../constants/colors'
import { media } from '../utils/style-utils';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%; max-width: 600px;
  height: 100vh; min-height: 540px; max-height: 640px;

  align-items: center;
  justify-content: flex-end;

  z-index: 1;
`

const StepsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 40px 30px 0 30px;
`

const STEP_CIRCLE_WIDTH_PX = 24

const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${STEP_CIRCLE_WIDTH_PX * 2}px;
`

const StepCircle = styled.div`
  width: ${STEP_CIRCLE_WIDTH_PX}px;
  height: ${STEP_CIRCLE_WIDTH_PX}px;
  border-radius: 50%;
  border: 1px solid ${props => props.active ? colors.white : 'transparent'};
  display: flex;
  justify-content: center;
  align-items: center;
`

const StepDot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: ${colors.white};
`

const StepText = styled.div`
  color: ${colors.white};
  font-size: 10px;
  font-weight: bold;
  padding: 10px 0;
  opacity: ${props => props.active ? 1 : 0.5};
`

const Step = ({ title, active }) =>
  <StepContainer>
    <StepCircle active={active}>
      <StepDot />
    </StepCircle>
    <StepText active={active}>
      {title}
    </StepText>
  </StepContainer>

const StepDivider = styled.div`
  height: 1px;
  background-color: ${colors.white};
  opacity: 0.5;
  flex: 1;
  margin: ${STEP_CIRCLE_WIDTH_PX / 2}px 0;
`

const Steps = ({ currentIndex = 0, steps = ['STEP 1', 'STEP 2', 'STEP 3'] }) => {
  let elems = []
  const lastIndex = steps.length - 1
  steps.forEach((step, idx) => {
    elems.push(<Step key={idx} title={step} active={idx === currentIndex} />)
    if (idx < lastIndex) {
      elems.push(<StepDivider key={`d-${idx}`} />)
    }
  })

  return (
    <StepsContainer>
      {elems}
    </StepsContainer>
  )
}

const CreateAccountText = styled.div.attrs({
  children: 'CREATE ACCOUNT'
})`
  font-size: 24px;
  font-weight: bold;
  color: ${colors.white};
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${media.forTabletUp`
    font-size: 40px;
  `}
`

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%; max-width: 360px;

  align-items: center;
  padding: 20px;
`

const ContinueButton = RoundedButton.extend.attrs({
  children: 'Continue',
})`
  color: ${colors.white};
  border: 1px solid ${colors.white};
  background: transparent;
`

const UsernameInput = withProps({
  Icon: UsernameIcon,
  placeholder: 'Username',
})(RoundedInput)

const EmailInput = withProps({
  Icon: EmailIcon,
  placeholder: 'Email',
  type: 'email'
})(RoundedInput)

const PasswordInput = withProps({
  Icon: PasswordIcon,
  placeholder: 'Password',
  type: 'password'
})(RoundedInput)

const Spacer = styled.div`
  height: 20px;
`

const BottomContainer = styled.div`
  width: 100%;
  padding-top: 20px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`

const BottomLink = styled(Link)`
  color: ${colors.white};
  font-size: 12px;
  text-decoration: none;
`

class RegisterScreen extends React.Component {
  render () {
    return (
      <Container>
        <Steps />
        <CreateAccountText />
        <RegisterContainer>
          <UsernameInput />
          <EmailInput />
          <PasswordInput />
          <Spacer />
          <ContinueButton />
          <BottomContainer>
            <BottomLink to='/terms-and-conditions'>Terms &amp; Conditions</BottomLink>
          </BottomContainer>
        </RegisterContainer>
      </Container>
    )
  }
}

export default RegisterScreen
