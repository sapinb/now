import { css } from 'styled-components'

export const media = {
  forPhoneOnly: (...args) => css`
    @media (max-width: 599px) {
      ${css(...args)}
    }
  `,
  forTabletProtraitUp: (...args) => css`
    @media (min-width: 600px) {
      ${css(...args)}
    }
  `,
  forTabletLandscapeUp: (...args) => css`
    @media (min-width: 900px) {
      ${css(...args)}
    }
  `,
  forDesktopUp: (...args) => css`
  @media (min-width: 1200px) {
    ${css(...args)}
  }
`,
}
