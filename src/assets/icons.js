import { withProps } from 'recompose'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faUserCircle, faUnlock } from '@fortawesome/fontawesome-free-solid'

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
