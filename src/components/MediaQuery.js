import MediaQuery from 'react-responsive'
import { withProps } from 'recompose'

export const ForPhoneOnly = withProps({
  maxWidth: 767,
})(MediaQuery)

export const ForTabletUp = withProps({
  minWidth: 768,
})(MediaQuery)

export const ForDesktopUp = withProps({
  minWidth: 1200,
})(MediaQuery)
