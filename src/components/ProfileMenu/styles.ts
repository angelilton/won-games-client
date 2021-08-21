import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    border-bottom: 0.1rem solid ${theme.colors.lightGray};

    ${media.greaterThan('medium')`
      flex-direction: column;
      border: 0;

      a:not(:last-child) {
        border-bottom: 0.1rem solid ${theme.colors.lightGray};
      }
    `}
  `}
`

export const Link = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${theme.colors.black};
    background: ${theme.colors.white};
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    transition: background, color, ${theme.transition.default};

    > span {
      margin-left: ${theme.spacings.xsmall};
    }

    &:hover {
      color: ${theme.colors.white};
      background: ${theme.colors.primary};
    }

    ${media.lessThan('medium')`
      > span {
          display: none;
      }

      justify-content: center;
      flex: 1;
    `}
  `}
`
