import styled, { css, DefaultTheme } from 'styled-components'
import { MainColors } from 'types/types'
import { RibbonProps } from '.'

const WrapperModifiers = {
  color: (theme: DefaultTheme, color: MainColors) => css`
    background-color: ${theme.colors[color]};
  `,

  normal: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    height: 3.6rem;
  `,

  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
    height: 2.6rem;
  `
}

export const Wrapper = styled.div<Omit<RibbonProps, 'children'>>`
  ${({ theme, color, size }) => css`
    ${!!size && WrapperModifiers[size](theme)}
    ${!!color && WrapperModifiers.color(theme, color)}
  `}
`
