import React from 'react'
import styled from 'styled-components'

import colors from '../constants/colors'

const InputContainer = styled.div`
  height: 54px;
  border-radius: 27px;
  width: 100%;
  background-color: rgba(255,255,255, 0.125);
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

export const RoundedInput = ({ Icon, placeholder, type = 'input' }) =>
  <InputContainer>
    <InputIconContainer>
      <Icon />
    </InputIconContainer>
    <Input placeholder={placeholder} type={type} />
  </InputContainer>
