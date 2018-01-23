import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import styled from 'styled-components'

export const NoLink = styled.span`
  cursor: pointer;
`

export const Link = ({ to = null, ...props }) =>
  to
    ? <RouterLink to={to} {...props} />
    : <NoLink {...props} />
