import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { rgba } from 'polished'

export const Wrapper = styled.main``

export const Content = styled.div`
  ${({ theme }) => css`
    flex: 1;
    padding: 0 ${theme.spacings.small};
    margin-top: 5.6rem;
    margin-bottom: 2rem;
    transition: transform ${theme.transition.default};

    ${media.greaterThan('medium')`
      padding: 0;
      margin-top: 0;
      margin-bottom: 0;
    `}
  `}
`
export const Items = styled.div`
  ${({ theme }) => css`
    & > div:not(:last-of-type) {
      margin-bottom: ${theme.spacings.xsmall};
    }
    & + div {
      border-top: 0.1rem solid ${rgba(theme.colors.gray, 0.2)};
      margin-top: ${theme.spacings.small};
      padding-top: ${theme.spacings.xsmall};
    }
  `}
`
