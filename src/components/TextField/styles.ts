import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.colors.lightGray};
    border-color: ${theme.colors.lightGray};
    border: 0.2rem solid;
    border-radius: 0.2rem;
    padding: 0 ${theme.spacings.xsmall};

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    background: transparent;
    width: 100%;
    border: 0;
    outline: none;
  `}
`
