import styled, { css } from 'styled-components'

export const Username = styled.div`
  span {
    padding: 0 0.5rem;
  }

  > svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 20rem;

    a:not(:last-child) {
      border-bottom: 0.1rem solid ${theme.colors.lightGray};
    }
  `}
`

export const Link = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    text-decoration: none;
    background: ${theme.colors.white};
    color: ${theme.colors.black};
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    transition: background, color, ${theme.transition.default};

    > span {
      margin-left: ${theme.spacings.xxsmall};
    }

    > svg {
      width: 2.4rem;
      height: 2.4rem;
      color: ${theme.colors.primary};
    }

    &:hover {
      background: ${theme.colors.primary};
      color: ${theme.colors.white};

      > svg {
        color: ${theme.colors.lightBg};
      }
    }
  `}
`
