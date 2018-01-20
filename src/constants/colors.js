import Color from 'color'

export default {
  black: '#000',
  white: '#fff',
  orange: '#F76333',
}

export const lighten = (color, by = 0.1) => Color(color).lighten(by).string()
export const darken = (color, by = 0.1) => Color(color).darken(by).string()
