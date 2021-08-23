import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Main = styled.main`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      display: grid;
      grid-template-columns: 25rem 1fr;
      gap: ${theme.grid.gutter};
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    color: ${theme.colors.black};
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.xsmall};
  `}
`
