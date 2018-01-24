import { injectGlobal } from 'styled-components'

const fonts = {
  MontserratRegular: 'Montserrat-Regular',
  MontserratBold: 'Montserrat-Bold',
}

export const loadFonts = () => injectGlobal`
  @font-face {
    font-family: ${fonts.MontserratRegular};
    src: url('${require('./Montserrat-Regular.ttf')}');
  }
  @font-face {
    font-family: ${fonts.MontserratBold};
    src: url('${require('./Montserrat-Bold.ttf')}');
  }
`

export default fonts
