import { withProps, defaultProps } from 'recompose'
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

const DrawerIcon = defaultProps({
  color: 'rgba(255, 255, 255, 0.8)',
  fontSize: '30px',
})(Ionicon)

export const NewsIcon = withProps({ icon: 'ios-list', fontSize: '40px' })(DrawerIcon)
export const ChannelsIcon = withProps({ icon: 'ios-apps-outline' })(DrawerIcon)
export const BookmarksIcon = withProps({ icon: 'ios-bookmark-outline' })(DrawerIcon)
export const OverviewIcon = withProps({ icon: 'ios-analytics-outline' })(DrawerIcon)
export const CalendarIcon = withProps({ icon: 'ios-calendar-outline' })(DrawerIcon)
export const TimelineIcon = withProps({ icon: 'ios-time-outline' })(DrawerIcon)
export const ProfileIcon = withProps({ icon: 'ios-contact-outline' })(DrawerIcon)
export const WidgetsIcon = withProps({ icon: 'ios-aperture-outline' })(DrawerIcon)
export const SettingsIcon = withProps({ icon: 'ios-switch-outline' })(DrawerIcon)
export const ContactUsIcon = withProps({ icon: 'ios-mail-outline' })(DrawerIcon)
export const TermsIcon = withProps({ icon: 'ios-reorder' })(DrawerIcon)
