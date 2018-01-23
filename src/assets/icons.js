import { withProps } from 'recompose'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faUserCircle, faUnlock } from '@fortawesome/fontawesome-free-solid'
import { faEnvelope } from '@fortawesome/fontawesome-free-regular'

import Ionicon from 'react-ionicons'

export const UsernameIcon = withProps({
  icon: faUserCircle,
  color: 'white',
  size: '2x',
})(FontAwesomeIcon)

export const PasswordIcon = withProps({
  icon: faUnlock,
  color: 'white',
  size: '2x',
  transform: 'shrink-4',
})(FontAwesomeIcon)

export const EmailIcon = withProps({
  icon: faEnvelope,
  color: 'white',
  size: '2x',
  transform: 'shrink-4',
})(FontAwesomeIcon)

export const MenuIcon = withProps({
  icon: 'ios-menu-outline',
  color: 'white',
  fontSize: '40px',
})(Ionicon)

export const CloseIcon = withProps({
  icon: 'ios-close',
  color: 'white',
  fontSize: '50px',
})(Ionicon)
