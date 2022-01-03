import styled, { css } from 'styled-components'
import { tint } from 'polished'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    align-self: flex-start;
  `}
`

export const GameList = styled.div`
  max-height: 40rem;
  overflow-y: auto;
`

export const Footer = styled.div`
  ${({ theme }) =>
    css`
      padding: ${theme.spacings.xsmall};
      background: ${tint(0.2, theme.colors.lightGray)};
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.bold};
      color: ${theme.colors.black};
      display: flex;
      align-items: center;
      justify-content: space-between;

      ${media.greaterThan('medium')`
        font-size: ${theme.font.sizes.medium};
        padding: ${theme.spacings.small};
      `}
    `}
`

export const Loading = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40rem;
    min-width: 56rem;

    svg {
      height: 10rem;
      width: 10rem;
    }
  `}
`

export const Total = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`
