import styled, { css, DefaultTheme } from 'styled-components'
import { darken } from 'polished'

import { ButtonProps } from '.'

export type WrapperProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'size' | 'fullWidth' | 'minimal'>

const wrapperModifiers = {
  fullWidth: () => css`
    width: 100%;
  `,

  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
    padding: ${theme.spacings.xxsmall};

    svg {
      width: 1.2rem;
    }
  `,

  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};

    svg {
      width: 1.3rem;
    }
  `,

  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};

    svg {
      width: 1.5rem;
    }
  `,

  widthIcon: (theme: DefaultTheme) => css`
    svg + span {
      margin-left: ${theme.spacings.xxsmall};
    }
  `,

  minimal: (theme: DefaultTheme) => css`
    background: none;
    color: ${theme.colors.primary};

    &:hover {
      color: ${darken(0.1, theme.colors.primary)};
    }
  `,
  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(70%);
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, hasIcon, minimal, disabled }) => css`
    border: 0;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: ${theme.colors.white};
    font-family: ${theme.font.family};
    border-radius: ${theme.border.radius};
    background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);

    &:hover {
      background: ${minimal
        ? 'nome'
        : `linear-gradient(180deg, #e35565 0%, #d958a6 50%)`};
    }

    ${!!size && wrapperModifiers[size](theme)};
    ${!!fullWidth && wrapperModifiers.fullWidth()};
    ${!!hasIcon && wrapperModifiers.widthIcon(theme)};
    ${!!minimal && wrapperModifiers.minimal(theme)};
    ${disabled && wrapperModifiers.disabled()};
  `}
`

export const ButtonLoading = styled.img.attrs(() => ({
  src: '/img/dots.svg',
  alt: 'Waiting...'
}))`
  width: 4rem;
`
