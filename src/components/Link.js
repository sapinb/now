import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import styled from 'styled-components'

export const NoLink = styled.span`
  cursor: pointer;
`

const NoUnderlineLink = styled(RouterLink)`
  text-decoration: none;
`

export const Link = ({ to = null, ...props }) =>
  to
    ? <NoUnderlineLink to={to} {...props} />
    : <NoLink {...props} />
