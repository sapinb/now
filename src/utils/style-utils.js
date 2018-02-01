import { css } from 'styled-components'

export const media = {
  forPhoneOnly: (...args) => css`
    @media (max-width: 767px) {
      ${css(...args)}
    }
  `,
  forTabletUp: (...args) => css`
    @media (min-width: 768px) {
      ${css(...args)}
    }
  `,
  forTabletProtraitUp: (...args) => css`
    @media (min-width: 768px) {
      ${css(...args)}
    }
  `,
  forTabletLandscapeUp: (...args) => css`
    @media (min-width: 900px) {
      ${css(...args)}
    }
  `,
  forTabletOnly: (...args) => css`
    @media (min-width: 768px) and (max-width: 1199px) {
      ${css(...args)}
    }
  `,
  forDesktopUp: (...args) => css`
  @media (min-width: 1200px) {
    ${css(...args)}
  }
`,
}
